# -*- coding: utf-8 -*-
# QGIS 3 + GRASS : réseau hydrographique et bassin versant de l'oued Tamda.
# À exécuter dans l'éditeur de la console Python de QGIS. GRASS doit être activé
# (Préférences > Options > Traitements > Fournisseurs > GRASS).
import os
import processing
from qgis.core import QgsApplication, QgsProject, QgsRasterLayer, QgsVectorLayer

TP = r"C:\ENIV\TP"
SORTIES = os.path.join(TP, "Sorties", "QGIS")
os.makedirs(SORTIES, exist_ok=True)
SEUIL = 400        # cellules de 50 m : 400 x 0,0025 km2 = 1 km2


def alg(*ids):
    """Renvoie le premier identifiant d'algorithme disponible (les noms GRASS changent selon la version)."""
    reg = QgsApplication.processingRegistry()
    for i in ids:
        if reg.algorithmById(i):
            return i
    raise RuntimeError("Algorithme introuvable : %s (GRASS est-il activé ?)" % ", ".join(ids))


# 1. MNT ASCII -> GeoTIFF en EPSG:32630
mnt = os.path.join(SORTIES, "mnt.tif")
processing.run("gdal:translate", {
    "INPUT": os.path.join(TP, "MNT", "MNT_50m.asc"), "TARGET_CRS": "EPSG:32630",
    "DATA_TYPE": 6, "OUTPUT": mnt})

# 2. Remplissage des cuvettes
fill = os.path.join(SORTIES, "fill.tif")
processing.run(alg("grass7:r.fill.dir", "grass:r.fill.dir"), {
    "input": mnt, "format": 0, "-f": False,
    "output": fill,
    "direction": os.path.join(SORTIES, "fill_dir.tif"),
    "areas": os.path.join(SORTIES, "fill_zones.tif")})

# 3. r.watershed : accumulation, directions, réseau, bassins
acc = os.path.join(SORTIES, "accumulation.tif")
drain = os.path.join(SORTIES, "drainage.tif")
stream = os.path.join(SORTIES, "reseau.tif")
processing.run(alg("grass7:r.watershed", "grass:r.watershed"), {
    "elevation": fill, "threshold": SEUIL, "-s": True, "-a": True,
    "accumulation": acc, "drainage": drain, "stream": stream,
    "basin": os.path.join(SORTIES, "bassins.tif")})

# 4. Réseau en lignes
reseau_shp = os.path.join(SORTIES, "reseau_hydro.gpkg")
processing.run(alg("grass7:r.to.vect", "grass:r.to.vect"), {
    "input": stream, "type": 1, "column": "value", "-s": True,
    "output": reseau_shp})

# 5. Bassin versant en amont de l'exutoire
exu = QgsVectorLayer(os.path.join(TP, "Risques", "Exutoire.shp"), "Exutoire", "ogr")
pt = next(exu.getFeatures()).geometry().asPoint()
bv = os.path.join(SORTIES, "bassin_versant.tif")
processing.run(alg("grass7:r.water.outlet", "grass:r.water.outlet"), {
    "input": drain, "coordinates": "%f,%f [EPSG:32630]" % (pt.x(), pt.y()), "output": bv})
bv_poly = os.path.join(SORTIES, "bassin_versant.gpkg")
processing.run("gdal:polygonize", {"INPUT": bv, "BAND": 1, "FIELD": "DN", "OUTPUT": bv_poly})

couche = QgsVectorLayer(bv_poly, "Bassin versant", "ogr")
surface = sum(f.geometry().area() for f in couche.getFeatures() if f["DN"] == 1)
print("Bassin versant de l'oued Tamda : %.1f km2" % (surface / 1e6))
print("Remarque : si l'exutoire tombe à côté du réseau, déplacez-le sur une cellule de reseau.tif.")

for chemin, nom in [(acc, "Accumulation"), (reseau_shp, "Réseau"), (bv_poly, "Bassin versant")]:
    lyr = QgsRasterLayer(chemin, nom) if chemin.endswith(".tif") else QgsVectorLayer(chemin, nom, "ogr")
    QgsProject.instance().addMapLayer(lyr)
