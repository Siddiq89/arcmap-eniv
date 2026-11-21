# -*- coding: utf-8 -*-
# QGIS 3 (PyQGIS) : premiers pas. À coller dans l'éditeur de la console Python de QGIS
# (Extensions > Console Python > Afficher l'éditeur), projet ouvert avec les couches du TP.
import os
import processing
from qgis.core import QgsProject, QgsVectorLayer, QgsFeatureRequest, edit, QgsField
from qgis.PyQt.QtCore import QVariant

TP = r"C:\ENIV\TP"
projet = QgsProject.instance()

# 1. Charger les couches de base si elles ne sont pas déjà dans le projet
for nom in ["Communes", "Forages", "Routes", "Oueds", "Ecoles", "Occupation_sol"]:
    if not projet.mapLayersByName(nom):
        couche = QgsVectorLayer(os.path.join(TP, "Shapefiles", nom + ".shp"), nom, "ogr")
        if couche.isValid():
            projet.addMapLayer(couche)

for couche in projet.mapLayers().values():
    print(couche.name(), couche.crs().authid())

# 2. Tampon de 200 m regroupé autour des forages (algorithme de la boîte à outils)
forages = projet.mapLayersByName("Forages")[0]
res = processing.run("native:buffer", {
    "INPUT": forages, "DISTANCE": 200, "SEGMENTS": 8, "DISSOLVE": True,
    "END_CAP_STYLE": 0, "JOIN_STYLE": 0, "MITER_LIMIT": 2, "OUTPUT": "memory:Perimetres_200m"})
projet.addMapLayer(res["OUTPUT"])

# 3. Lire les attributs : débit moyen des forages exploités
req = QgsFeatureRequest().setFilterExpression("\"ETAT\" = 'Exploité'")
debits = [f["DEBIT_LS"] for f in forages.getFeatures(req) if f["DEBIT_LS"] is not None]
if debits:
    print("Débit moyen des forages exploités : %.2f l/s" % (sum(debits) / len(debits)))

# 4. Ajouter et remplir un champ CLASSE (sur une copie, pour ne pas modifier l'original)
copie = processing.run("native:savefeatures", {"INPUT": forages, "OUTPUT": "memory:Forages_classes"})["OUTPUT"]
with edit(copie):
    copie.addAttribute(QgsField("CLASSE", QVariant.String, len=10))
    copie.updateFields()
    for f in copie.getFeatures():
        d = f["DEBIT_LS"] or 0
        f["CLASSE"] = "Faible" if d < 2 else ("Moyen" if d < 5 else "Fort")
        copie.updateFeature(f)
projet.addMapLayer(copie)
print("Terminé.")
