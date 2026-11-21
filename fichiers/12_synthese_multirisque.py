# -*- coding: utf-8 -*-
# Niveau 8 : carte de synthèse multirisque et bilan par commune.
# À lancer après 07, 08, 09 et 11 (rasters *_classes.tif dans Sorties\Risques).
import os
import arcpy
from arcpy.sa import *
from outils_risques import TP, SORTIES, preparer

preparer(os.path.join(SORTIES, "mnt.tif"))
noms = ["inondation_classes.tif", "feux_classes.tif", "seisme_classes.tif", "glissements_classes.tif"]
rasters = [Raster(n) for n in noms]

# 1. Aléa maximal en chaque point
CellStatistics(rasters, "MAXIMUM", "DATA").save("multirisque_max.tif")

# 2. Nombre d'aléas forts (classe 4 ou 5) qui se cumulent
cumul = None
for r in rasters:
    fort = Con(r >= 4, 1, 0)
    cumul = fort if cumul is None else cumul + fort
cumul.save("multirisque_cumul.tif")

# 3. Bilan par commune : moyenne et part de surface en aléa fort cumulé
communes = os.path.join(TP, "Shapefiles", "Communes.shp")
table = os.path.join(SORTIES, "bilan_communes.dbf")
ZonalStatisticsAsTable(communes, "NOM", "multirisque_cumul.tif", table, "DATA", "MEAN")
with arcpy.da.SearchCursor(table, ["NOM", "MEAN"]) as cur:
    for nom, moy in sorted(cur, key=lambda r: -r[1]):
        print(u"{0:<15} nombre moyen d'aleas forts : {1:.2f}".format(nom, moy))
