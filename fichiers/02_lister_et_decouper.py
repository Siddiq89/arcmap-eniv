# -*- coding: utf-8 -*-
# Niveau 6, leçon 2 : script autonome (IDLE ou Python 2.7 d'ArcGIS 10.8).
# Affiche chaque couche du dossier puis la découpe selon la commune de Tamda.
import os
import arcpy

dossier = r"C:\ENIV\TP\Shapefiles"
sorties = r"C:\ENIV\TP\Sorties"
if not os.path.exists(sorties):
    os.makedirs(sorties)

arcpy.env.workspace = dossier
arcpy.env.overwriteOutput = True

# Couche de découpage : la commune C01 (Tamda)
arcpy.MakeFeatureLayer_management("Communes.shp", "tamda_lyr", "\"CODE\" = 'C01'")

try:
    for fc in arcpy.ListFeatureClasses():
        desc = arcpy.Describe(fc)
        n = int(arcpy.GetCount_management(fc).getOutput(0))
        print("{0} : {1} entites, {2}, {3}".format(fc, n, desc.shapeType, desc.spatialReference.name))
        if fc in ("Zone_etude.shp", "Communes.shp"):
            continue
        sortie = os.path.join(sorties, fc.replace(".shp", "_Tamda.shp"))
        arcpy.Clip_analysis(fc, "tamda_lyr", sortie)
        print("   -> " + sortie)
except arcpy.ExecuteError:
    print(arcpy.GetMessages(2))

print("Termine.")
