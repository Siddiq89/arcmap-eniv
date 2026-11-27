# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 6 · Classification non supervisée (K-means, scikit-learn)
"""
import os
import numpy as np
import pandas as pd
import rasterio
import geopandas as gpd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")
TD = os.path.join(DOSSIER, "Teledetection")
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
os.makedirs(SORTIES, exist_ok=True)

with rasterio.open(os.path.join(TD, "S2_2024-06-15_Tamda.tif")) as src:
    img = src.read().astype("float32") / 10000
    profil = src.profile
nb, h, w = img.shape
ndvi = (img[3] - img[2]) / (img[3] + img[2])
X = np.vstack([img, ndvi[None]]).reshape(nb + 1, -1).T      # une ligne par pixel, 7 variables
print("Matrice des pixels :", X.shape)

X_std = StandardScaler().fit_transform(X)                   # même échelle pour chaque variable
k = 6
rng = np.random.default_rng(0)
echantillon = X_std[rng.choice(len(X_std), 20000, replace=False)]   # apprentissage rapide
km = KMeans(n_clusters=k, n_init=10, random_state=0).fit(echantillon)
groupes = km.predict(X_std).reshape(h, w).astype("uint8") + 1     # groupes 1 à 6

# Quel groupe correspond à quelle classe ? Tableau croisé avec les points d'entraînement
pts = gpd.read_file(os.path.join(TD, "Echantillons_entrainement.shp"))
lig, col = rasterio.transform.rowcol(profil["transform"], pts.geometry.x, pts.geometry.y)
pts["GROUPE"] = groupes[np.array(lig), np.array(col)]
print(pd.crosstab(pts["CLASSE"], pts["GROUPE"]))

# Méthode du coude : inertie selon k
inerties = [KMeans(n_clusters=i, n_init=5, random_state=0).fit(echantillon).inertia_ for i in range(2, 11)]

p = profil.copy(); p.update(count=1, dtype="uint8", nodata=0)
with rasterio.open(os.path.join(SORTIES, "kmeans_6_groupes.tif"), "w", **p) as dst:
    dst.write(groupes, 1)

fig, ax = plt.subplots(1, 2, figsize=(13, 5.5))
im = ax[0].imshow(groupes, cmap="tab10", vmin=1, vmax=10, interpolation="nearest"); ax[0].set_title("K-means, 6 groupes")
ax[1].plot(range(2, 11), inerties, "o-"); ax[1].set_xlabel("k"); ax[1].set_ylabel("Inertie"); ax[1].set_title("Méthode du coude")
plt.tight_layout(); plt.savefig(os.path.join(SORTIES, "kmeans.png"), dpi=120)
plt.show()
