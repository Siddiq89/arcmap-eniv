# -*- coding: utf-8 -*-
# Niveau 8 : susceptibilité aux glissements de terrain.
# Utilise reseau_hydro.shp produit par 06_hydrologie.py.
import os
import arcpy
from arcpy.sa import *
from outils_risques import TP, SORTIES, preparer, importer_mnt, classer, somme_ponderee, cinq_classes, valider

mnt = importer_mnt(os.path.join(TP, "MNT", "MNT_50m.asc"), "mnt.tif")
preparer(mnt)
shp = os.path.join(TP, "Shapefiles")
ris = os.path.join(TP, "Risques")

arcpy.PolygonToRaster_conversion(os.path.join(ris, "Lithologie.shp"), "SUSC_GLIS", "susc.tif", cellsize=mnt)
c_litho = Raster("susc.tif")                     # déjà noté de 1 (calcaires) à 5 (argiles)
c_pente = classer(Slope(mnt, "DEGREE"), [6, 12, 20, 30], [1, 2, 3, 4, 5])
c_oued = classer(EucDistance(os.path.join(SORTIES, "reseau_hydro.shp")), [100, 250, 500, 1000], [5, 4, 3, 2, 1])
arcpy.PolygonToRaster_conversion(os.path.join(shp, "Occupation_sol.shp"), "CODE_OS", "occ.tif", cellsize=mnt)
c_occ = Reclassify("occ.tif", "VALUE", RemapValue([[1, 3], [2, 1], [3, 4], [4, 5], [5, 3]]))
c_route = classer(EucDistance(os.path.join(shp, "Routes.shp")), [50, 150, 300, 600], [5, 4, 3, 2, 1])

indice = somme_ponderee([(c_litho, 35), (c_pente, 30), (c_oued, 15), (c_occ, 10), (c_route, 10)])
indice.save("glissements_indice.tif")
classes = cinq_classes(indice)
classes.save("glissements_classes.tif")
valider(os.path.join(ris, "Glissements.shp"), classes)
