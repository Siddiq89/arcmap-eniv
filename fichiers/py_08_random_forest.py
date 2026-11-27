# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 6 · Classification supervisée Random Forest
Entraîne une forêt aléatoire sur les points d'entraînement et classe toute l'image.
"""
import os
import numpy as np
import pandas as pd
import rasterio
import geopandas as gpd
from sklearn.ensemble import RandomForestClassifier
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
from matplotlib.patches import Patch
import joblib

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")
TD = os.path.join(DOSSIER, "Teledetection")
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
os.makedirs(SORTIES, exist_ok=True)
NOMS_VAR = ["B2", "B3", "B4", "B8", "B11", "B12", "NDVI", "NDWI", "NDBI"]

def variables(chemin):
    """Empile les 6 bandes et 3 indices : tableau (9, lignes, colonnes)."""
    with rasterio.open(chemin) as src:
        b = src.read().astype("float32") / 10000
        prof = src.profile
    nd = lambda a, c: (a - c) / (a + c)
    return np.vstack([b, nd(b[3], b[2])[None], nd(b[1], b[3])[None], nd(b[4], b[3])[None]]), prof

def valeurs_aux_points(pile, transform, pts):
    lig, col = rasterio.transform.rowcol(transform, pts.geometry.x, pts.geometry.y)
    return pd.DataFrame(pile[:, np.array(lig), np.array(col)].T, columns=NOMS_VAR)

pile, profil = variables(os.path.join(TD, "S2_2024-06-15_Tamda.tif"))
classes = pd.read_csv(os.path.join(TD, "classes.csv"), sep=";")
ent = gpd.read_file(os.path.join(TD, "Echantillons_entrainement.shp"))
X = valeurs_aux_points(pile, profil["transform"], ent)
y = ent["CODE"].values
print(X.assign(CLASSE=ent["CLASSE"]).groupby("CLASSE").mean().round(3))

rf = RandomForestClassifier(n_estimators=200, oob_score=True, random_state=42, n_jobs=-1)
rf.fit(X, y)
print("Précision « out-of-bag » :", round(rf.oob_score_, 3))
for n, imp in sorted(zip(NOMS_VAR, rf.feature_importances_), key=lambda t: -t[1]):
    print(f"  {n:5s} {imp:.3f}")

# Prédire tous les pixels
n, h, w = pile.shape
carte = rf.predict(pd.DataFrame(pile.reshape(n, -1).T, columns=NOMS_VAR)).reshape(h, w).astype("uint8")
ha = profil["transform"].a ** 2 / 10000
for _, r in classes.iterrows():
    print(f"{r.CLASSE:10s}{(carte == r.CODE).sum() * ha:9.1f} ha")

p = profil.copy(); p.update(count=1, dtype="uint8", nodata=0)
with rasterio.open(os.path.join(SORTIES, "classification_rf_2024.tif"), "w", **p) as dst:
    dst.write(carte, 1)
    dst.write_colormap(1, {int(r.CODE): tuple(int(r.COULEUR[i:i + 2], 16) for i in (1, 3, 5)) for _, r in classes.iterrows()})
joblib.dump(rf, os.path.join(SORTIES, "modele_rf.joblib"))     # pour le réutiliser au niveau 7

cmap = ListedColormap(classes["COULEUR"].tolist())
plt.figure(figsize=(8, 8))
plt.imshow(carte, cmap=cmap, vmin=1, vmax=6, interpolation="nearest")
plt.legend(handles=[Patch(color=c, label=n) for n, c in zip(classes.CLASSE, classes.COULEUR)], loc="lower right")
plt.title("Occupation du sol 2024 (Random Forest, image fictive)"); plt.axis("off")
plt.savefig(os.path.join(SORTIES, "classification_rf_2024.png"), dpi=130)
print("Carte :", os.path.join(SORTIES, "classification_rf_2024.tif"))
plt.show()
