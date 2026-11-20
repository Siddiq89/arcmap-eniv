# -*- coding: utf-8 -*-
# Niveau 6, leçon 1 : à coller ligne par ligne dans la fenêtre Python d'ArcMap 10.8
# (Géotraitement > Python), après avoir ajouté Forages et Oueds à la carte.

# Zone de protection de 200 m autour des forages, tampons fusionnés
arcpy.Buffer_analysis("Forages", r"C:\ENIV\TP\Sorties\Forages_200m.shp", "200 Meters", dissolve_option="ALL")

# Nombre de forages
print(arcpy.GetCount_management("Forages"))

# Forages situés à moins de 1 km d'un oued
arcpy.SelectLayerByLocation_management("Forages", "WITHIN_A_DISTANCE", "Oueds", "1000 Meters")
print(arcpy.GetCount_management("Forages"))
