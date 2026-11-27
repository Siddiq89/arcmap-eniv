# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 2 · Données vecteur avec GeoPandas
Lecture, reprojection, jointure attributaire et spatiale, zone tampon, carte et GeoPackage.
"""
import os
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")
SHP = os.path.join(DOSSIER, "Shapefiles")
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
os.makedirs(SORTIES, exist_ok=True)

# 1. Lire et explorer
communes = gpd.read_file(os.path.join(SHP, "Communes.shp"))
forages = gpd.read_file(os.path.join(SHP, "Forages.shp"))
oueds = gpd.read_file(os.path.join(SHP, "Oueds.shp"))
print(communes.crs)                 # EPSG:32630 = WGS 84 / UTM 30N
print(communes[["CODE", "NOM", "POP"]].head())

# 2. Surfaces (en UTM, les unités sont des mètres) et reprojection
communes["SURF_KM2"] = (communes.geometry.area / 1e6).round(2)
geo = communes.to_crs(4326)          # en degrés, pour un GPS ou une carte web
print(geo.geometry.iloc[0].centroid)

# 3. Jointure attributaire avec la table CSV
pop = pd.read_csv(os.path.join(DOSSIER, "Tables", "population_communes.csv"), sep=";")
communes = communes.merge(pop, on="CODE", how="left")
communes["DENSITE"] = (communes["POP_2020"] / communes["SURF_KM2"]).round(1)

# 4. Jointure spatiale : dans quelle commune se trouve chaque forage ?
f_c = gpd.sjoin(forages, communes[["CODE", "NOM", "geometry"]], predicate="within")
print(f_c.groupby("NOM_right").size().rename("nb_forages"))

# 5. Zone tampon de 1 km autour des oueds et forages concernés
tampon = oueds.buffer(1000).union_all() if hasattr(oueds, "union_all") else oueds.buffer(1000).unary_union
proches = forages[forages.within(tampon)]
print(len(proches), "forages à moins de 1 km d'un oued")

# 6. Carte et export
fig, ax = plt.subplots(figsize=(8, 8))
communes.plot(column="DENSITE", cmap="YlOrRd", legend=True, edgecolor="grey", ax=ax,
              legend_kwds={"label": "hab./km²", "shrink": .6})
gpd.GeoSeries([tampon], crs=oueds.crs).plot(ax=ax, color="#9ecae1", alpha=.4)
oueds.plot(ax=ax, color="#2171b5")
proches.plot(ax=ax, color="black", markersize=18, label="Forages < 1 km d'un oued")
ax.legend(); ax.set_title("Densité de population et forages proches des oueds (fictif)")
plt.savefig(os.path.join(SORTIES, "carte_densite.png"), dpi=150)
gpkg = os.path.join(SORTIES, "tamda.gpkg")
communes.to_file(gpkg, layer="communes", driver="GPKG")
proches.to_file(gpkg, layer="forages_proches_oueds", driver="GPKG")
print("GeoPackage :", gpkg)
plt.show()
