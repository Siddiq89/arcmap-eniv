# -*- coding: utf-8 -*-
# Niveau 7 : carte de susceptibilité aux inondations (analyse multicritère).
# À lancer après 06_hydrologie.py (utilise fill.tif, facc.tif, reseau.tif, reseau_hydro.shp).
import os
import arcpy
from arcpy.sa import *
from outils_risques import TP, SORTIES, preparer, classer, somme_ponderee, cinq_classes, valider

fill = os.path.join(SORTIES, "fill.tif")
preparer(fill)
shp = os.path.join(TP, "Shapefiles")

# Critère 1 : distance à l'oued (m)
dist = EucDistance(os.path.join(SORTIES, "reseau_hydro.shp"))
c_dist = classer(dist, [100, 250, 500, 1000], [5, 4, 3, 2, 1])

# Critère 2 : hauteur au-dessus de l'oued le plus proche (m)
alt_oued = Int(Con(Raster(os.path.join(SORTIES, "reseau.tif")) == 1, Raster(fill)))
alt_ref = EucAllocation(alt_oued)
hauteur = Raster(fill) - alt_ref
hauteur.save("hauteur_oued.tif")
c_haut = classer(hauteur, [2, 5, 10, 20], [5, 4, 3, 2, 1])

# Critère 3 : pente (degrés)
pente = Slope(fill, "DEGREE")
c_pente = classer(pente, [2, 5, 10, 20], [5, 4, 3, 2, 1])

# Critère 4 : accumulation des écoulements (cellules)
c_acc = classer(Raster(os.path.join(SORTIES, "facc.tif")), [100, 500, 2000, 10000], [1, 2, 3, 4, 5])

# Critère 5 : occupation du sol (CODE_OS : 1 Agriculture, 2 Forêt, 3 Parcours, 4 Sol nu, 5 Urbain)
arcpy.PolygonToRaster_conversion(os.path.join(shp, "Occupation_sol.shp"), "CODE_OS", "occ.tif", cellsize=fill)
c_occ = Reclassify("occ.tif", "VALUE", RemapValue([[1, 3], [2, 1], [3, 2], [4, 4], [5, 5]]))

indice = somme_ponderee([(c_dist, 35), (c_haut, 25), (c_pente, 20), (c_acc, 10), (c_occ, 10)])
indice.save("inondation_indice.tif")
classes = cinq_classes(indice)
classes.save("inondation_classes.tif")

# Validation avec les laisses de crues historiques, puis écoles exposées
valider(os.path.join(TP, "Risques", "Laisses_crues.shp"), classes)
ExtractValuesToPoints(os.path.join(shp, "Ecoles.shp"), classes, os.path.join(SORTIES, "ecoles_inondation.shp"))
with arcpy.da.SearchCursor(os.path.join(SORTIES, "ecoles_inondation.shp"), ["NOM", "RASTERVALU"], '"RASTERVALU" >= 4') as cur:
    for nom, cl in cur:
        print(u"Ecole exposee (classe {0}) : {1}".format(int(cl), nom))
