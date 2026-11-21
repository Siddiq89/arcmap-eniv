# -*- coding: utf-8 -*-
# QGIS 3 : carte de risque de feux de forêt par somme pondérée (mêmes critères et poids que le script ArcGIS 08).
# À exécuter dans l'éditeur de la console Python de QGIS. Sert de modèle pour les cartes séisme, tsunami, glissements.
import os
import processing
from qgis.core import QgsApplication, QgsProject, QgsRasterLayer, QgsVectorLayer

TP = r"C:\ENIV\TP"
SHP = os.path.join(TP, "Shapefiles")
SORTIES = os.path.join(TP, "Sorties", "QGIS")
os.makedirs(SORTIES, exist_ok=True)
GRAND = 1e9


def alg(*ids):
    reg = QgsApplication.processingRegistry()
    for i in ids:
        if reg.algorithmById(i):
            return i
    raise RuntimeError("Algorithme introuvable : " + ", ".join(ids))


def chemin(nom):
    return os.path.join(SORTIES, nom)


# MNT de référence (emprise et résolution communes à tous les critères)
mnt = chemin("mnt.tif")
if not os.path.exists(mnt):
    processing.run("gdal:translate", {"INPUT": os.path.join(TP, "MNT", "MNT_50m.asc"),
                                      "TARGET_CRS": "EPSG:32630", "DATA_TYPE": 6, "OUTPUT": mnt})
ref = QgsRasterLayer(mnt, "mnt")
e = ref.extent()
EMPRISE = "%f,%f,%f,%f [EPSG:32630]" % (e.xMinimum(), e.xMaximum(), e.yMinimum(), e.yMaximum())
TAILLE = ref.rasterUnitsPerPixelX()


def rasteriser(shp, champ, sortie, valeur_fixe=None):
    p = {"INPUT": shp, "UNITS": 1, "WIDTH": TAILLE, "HEIGHT": TAILLE, "EXTENT": EMPRISE,
         "NODATA": 0, "DATA_TYPE": 5, "OUTPUT": sortie}
    if valeur_fixe is None:
        p["FIELD"] = champ
    else:
        p["BURN"] = valeur_fixe
    processing.run("gdal:rasterize", p)
    return sortie


def distance(shp, sortie):
    r = rasteriser(shp, None, sortie.replace(".tif", "_r.tif"), valeur_fixe=1)
    processing.run("gdal:proximity", {"INPUT": r, "BAND": 1, "VALUES": "1", "UNITS": 0,
                                      "DATA_TYPE": 5, "OUTPUT": sortie})
    return sortie


def classer(raster, bornes, notes, sortie):
    """bornes [b1..b4] croissantes, notes [n0..n4] : < b1 -> n0, ..., > b4 -> n4."""
    lim = [-GRAND] + list(bornes) + [GRAND]
    table = []
    for i, n in enumerate(notes):
        table += [lim[i], lim[i + 1], n]
    processing.run("native:reclassifybytable", {"INPUT_RASTER": raster, "RASTER_BAND": 1,
                   "TABLE": table, "RANGE_BOUNDARIES": 1, "NO_DATA": -9999, "DATA_TYPE": 5,
                   "OUTPUT": sortie})
    return sortie


# 1. Combustible : occupation du sol (1 Agriculture, 2 Forêt, 3 Parcours, 4 Sol nu, 5 Urbain)
occ = rasteriser(os.path.join(SHP, "Occupation_sol.shp"), "CODE_OS", chemin("occ.tif"))
c_occ = classer(occ, [1.5, 2.5, 3.5, 4.5], [2, 5, 4, 1, 1], chemin("c_occ.tif"))
# 2. Pente
pente = processing.run(alg("native:slope", "qgis:slope"), {"INPUT": mnt, "Z_FACTOR": 1, "OUTPUT": chemin("pente.tif")})["OUTPUT"]
c_pente = classer(pente, [5, 10, 20, 30], [1, 2, 3, 4, 5], chemin("c_pente.tif"))
# 3. Exposition (sud = 5)
expo = processing.run(alg("native:aspect", "qgis:aspect"), {"INPUT": mnt, "Z_FACTOR": 1, "OUTPUT": chemin("expo.tif")})["OUTPUT"]
table = [-GRAND, 22.5, 1, 22.5, 67.5, 2, 67.5, 112.5, 3, 112.5, 157.5, 4, 157.5, 202.5, 5,
         202.5, 247.5, 4, 247.5, 292.5, 3, 292.5, 337.5, 2, 337.5, GRAND, 1]
processing.run("native:reclassifybytable", {"INPUT_RASTER": expo, "RASTER_BAND": 1, "TABLE": table,
               "RANGE_BOUNDARIES": 1, "NO_DATA": -9999, "DATA_TYPE": 5, "OUTPUT": chemin("c_expo.tif")})
c_expo = chemin("c_expo.tif")
# 4 et 5. Distances aux routes et aux lieux habités (écoles)
c_route = classer(distance(os.path.join(SHP, "Routes.shp"), chemin("d_route.tif")),
                  [100, 300, 600, 1000], [5, 4, 3, 2, 1], chemin("c_route.tif"))
c_hab = classer(distance(os.path.join(SHP, "Ecoles.shp"), chemin("d_hab.tif")),
                [200, 500, 1000, 2000], [5, 4, 3, 2, 1], chemin("c_hab.tif"))

# 6. Somme pondérée (35, 20, 15, 15, 15) avec la calculatrice raster GDAL
indice = chemin("feux_indice.tif")
processing.run("gdal:rastercalculator", {
    "INPUT_A": c_occ, "BAND_A": 1, "INPUT_B": c_pente, "BAND_B": 1, "INPUT_C": c_expo, "BAND_C": 1,
    "INPUT_D": c_route, "BAND_D": 1, "INPUT_E": c_hab, "BAND_E": 1,
    "FORMULA": "0.35*A + 0.20*B + 0.15*C + 0.15*D + 0.15*E", "RTYPE": 5, "OUTPUT": indice})
classes = classer(indice, [1.8, 2.6, 3.4, 4.2], [1, 2, 3, 4, 5], chemin("feux_classes.tif"))

# 7. Validation avec les foyers d'incendie
val = processing.run("native:rastersampling", {
    "INPUT": os.path.join(TP, "Risques", "Foyers_incendies.shp"), "RASTERCOPY": classes,
    "COLUMN_PREFIX": "CL_", "OUTPUT": "memory:"})["OUTPUT"]
champ = [f.name() for f in val.fields() if f.name().startswith("CL_")][0]
vals = [f[champ] for f in val.getFeatures() if f[champ] is not None]
fort = len([v for v in vals if v >= 4])
if vals:
    print("Validation : %d foyers sur %d (%.0f %%) en classe forte ou très forte" % (fort, len(vals), 100.0 * fort / len(vals)))
QgsProject.instance().addMapLayer(QgsRasterLayer(classes, "Risque de feux (classes)"))
