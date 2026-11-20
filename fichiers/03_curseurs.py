# -*- coding: utf-8 -*-
# Niveau 6, leçon 3 : lire et modifier les attributs avec arcpy.da
import arcpy

communes = r"C:\ENIV\TP\Shapefiles\Communes.shp"

# 1. Les 5 communes les plus peuplées
# (ORDER BY n'est pas pris en charge par les shapefiles : on trie en Python)
with arcpy.da.SearchCursor(communes, ["NOM", "POP"]) as cur:
    lignes = sorted(cur, key=lambda r: r[1], reverse=True)
for nom, pop in lignes[:5]:
    print(u"{0} : {1} hab.".format(nom, pop))

# 2. Densité (hab./km2) et classe de taille
champs = [f.name for f in arcpy.ListFields(communes)]
if "DENSITE" not in champs:
    arcpy.AddField_management(communes, "DENSITE", "DOUBLE")
if "CLASSE" not in champs:
    arcpy.AddField_management(communes, "CLASSE", "TEXT", field_length=10)

with arcpy.da.UpdateCursor(communes, ["POP", "SHAPE@AREA", "DENSITE", "CLASSE"]) as cur:
    for row in cur:
        row[2] = row[0] / (row[1] / 1000000.0)
        row[3] = "Grande" if row[0] >= 20000 else ("Moyenne" if row[0] >= 8000 else "Petite")
        cur.updateRow(row)
print("Champs DENSITE et CLASSE calcules.")

# 3. Créer des points à partir du fichier de relevés GPS (InsertCursor)
import csv, os
sortie = r"C:\ENIV\TP\Sorties\Releves_GPS.shp"
if arcpy.Exists(sortie):
    arcpy.Delete_management(sortie)
arcpy.CreateFeatureclass_management(os.path.dirname(sortie), os.path.basename(sortie), "POINT",
                                    spatial_reference=arcpy.Describe(communes).spatialReference)
arcpy.AddField_management(sortie, "ID_GPS", "TEXT", field_length=5)
arcpy.AddField_management(sortie, "OBS", "TEXT", field_length=30)

with open(r"C:\ENIV\TP\Tables\releves_gps.csv", "rb") as f, \
        arcpy.da.InsertCursor(sortie, ["SHAPE@XY", "ID_GPS", "OBS"]) as ins:
    lecteur = csv.reader(f, delimiter=";")
    next(lecteur)  # en-tête
    for ligne in lecteur:
        ins.insertRow([(float(ligne[1]), float(ligne[2])), ligne[0], ligne[6].decode("utf-8")])
print("Points GPS crees : " + sortie)
