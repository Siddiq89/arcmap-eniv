# -*- coding: utf-8 -*-
# Fonctions communes aux scripts 06 à 11 (ArcMap 10.8, Python 2.7, Spatial Analyst).
# Placez ce fichier dans le même dossier que les scripts.
import os
import arcpy
from arcpy.sa import *

TP = r"C:\ENIV\TP"
SORTIES = os.path.join(TP, "Sorties", "Risques")
GRAND = 1e9   # borne supérieure « infinie » pour la dernière classe


def preparer(raster_reference):
    """Active Spatial Analyst et aligne tous les calculs sur le raster de référence."""
    if not os.path.exists(SORTIES):
        os.makedirs(SORTIES)
    arcpy.CheckOutExtension("Spatial")
    arcpy.env.workspace = SORTIES
    arcpy.env.overwriteOutput = True
    arcpy.env.snapRaster = raster_reference
    arcpy.env.cellSize = raster_reference
    arcpy.env.extent = raster_reference
    arcpy.env.mask = raster_reference
    arcpy.env.outputCoordinateSystem = arcpy.SpatialReference(32630)  # WGS 1984 UTM 30N


def importer_mnt(asc, nom_tif):
    """Convertit un MNT ASCII (.asc) en GeoTIFF et lui attribue WGS 1984 UTM 30N."""
    sortie = os.path.join(SORTIES, nom_tif)
    if not arcpy.Exists(sortie):
        if not os.path.exists(SORTIES):
            os.makedirs(SORTIES)
        arcpy.ASCIIToRaster_conversion(asc, sortie, "FLOAT")
        arcpy.DefineProjection_management(sortie, arcpy.SpatialReference(32630))
    return sortie


def classer(raster, bornes, notes):
    """Reclasse un raster continu.
    bornes = [b1, b2, b3, b4] (croissantes), notes = [n0, n1, n2, n3, n4] :
    < b1 -> n0, b1-b2 -> n1, ..., > b4 -> n4."""
    lim = [-GRAND] + list(bornes) + [GRAND]
    table = [[lim[i], lim[i + 1], notes[i]] for i in range(len(notes))]
    return Reclassify(raster, "VALUE", RemapRange(table), "NODATA")


def somme_ponderee(criteres):
    """criteres = [(raster_note, poids_en_pourcentage), ...] -> indice de 1 à 5."""
    total = sum(p for _, p in criteres)
    if total != 100:
        raise ValueError("La somme des poids doit faire 100 (actuellement %s)" % total)
    indice = None
    for r, p in criteres:
        terme = Float(r) * (p / 100.0)
        indice = terme if indice is None else indice + terme
    return indice


def cinq_classes(indice):
    """Découpe l'indice (1 à 5) en 5 classes : 1 très faible ... 5 très fort."""
    return classer(indice, [1.8, 2.6, 3.4, 4.2], [1, 2, 3, 4, 5])


def valider(points, classes, nom_champ="CLASSE"):
    """Pourcentage des événements observés (points) tombant en classes 4 et 5."""
    tmp = os.path.join(SORTIES, "validation_tmp.shp")
    ExtractValuesToPoints(points, classes, tmp)
    n = fort = 0
    with arcpy.da.SearchCursor(tmp, ["RASTERVALU"]) as cur:
        for (v,) in cur:
            if v is None or v < 0:
                continue
            n += 1
            if v >= 4:
                fort += 1
    arcpy.Delete_management(tmp)
    if n:
        print("Validation : {0} evenements sur {1} ({2:.0f} %) en classe forte ou tres forte".format(fort, n, 100.0 * fort / n))
    return fort, n
