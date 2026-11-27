# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 8 · Projet : susceptibilité aux glissements de terrain par Random Forest
Variables : altitude, pente, exposition, courbure, distance aux oueds, lithologie, occupation du sol.
Présences : inventaire Glissements.shp ; absences : points tirés au hasard loin des glissements.
"""
import os
import numpy as np
import pandas as pd
import rasterio
from rasterio.features import rasterize
import geopandas as gpd
from scipy import ndimage
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, roc_curve
import matplotlib.pyplot as plt

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
os.makedirs(SORTIES, exist_ok=True)

# 1. Variables explicatives (grille du MNT 50 m)
with rasterio.open(os.path.join(DOSSIER, "MNT", "MNT_50m.asc")) as src:
    mnt = src.read(1).astype("float32"); profil = src.profile; tr = src.transform
taille = tr.a
dy, dx = np.gradient(mnt, taille)
pente = np.degrees(np.arctan(np.hypot(dx, dy)))
expo_nord = np.cos(np.arctan2(-dx, dy))                     # 1 = versant nord, -1 = versant sud
courbure = ndimage.laplace(mnt) / taille ** 2
oueds = gpd.read_file(os.path.join(DOSSIER, "Shapefiles", "Oueds.shp"))
r_oueds = rasterize(oueds.geometry, out_shape=mnt.shape, transform=tr)
dist_oued = ndimage.distance_transform_edt(r_oueds == 0) * taille
litho = gpd.read_file(os.path.join(DOSSIER, "Risques", "Lithologie.shp"))
susc_litho = rasterize(zip(litho.geometry, litho["SUSC_GLIS"]), out_shape=mnt.shape, transform=tr)
occ = gpd.read_file(os.path.join(DOSSIER, "Shapefiles", "Occupation_sol.shp"))
occ_sol = rasterize(zip(occ.geometry, occ["CODE_OS"]), out_shape=mnt.shape, transform=tr)
NOMS = ["ALTITUDE", "PENTE", "EXPO_NORD", "COURBURE", "DIST_OUED", "LITHO", "OCC_SOL"]
pile = np.stack([mnt, pente, expo_nord, courbure, dist_oued, susc_litho, occ_sol]).astype("float32")

# 2. Échantillon présence / absence
gl = gpd.read_file(os.path.join(DOSSIER, "Risques", "Glissements.shp"))
l, c = rasterio.transform.rowcol(tr, gl.geometry.x, gl.geometry.y)
pres = np.zeros(mnt.shape, bool); pres[np.array(l), np.array(c)] = True
loin = ndimage.distance_transform_edt(~pres) * taille > 500  # absences à plus de 500 m d'un glissement
rng = np.random.default_rng(1)
cand = np.argwhere(loin)
abs_ = cand[rng.choice(len(cand), 4 * len(gl), replace=False)]
lig = np.concatenate([np.array(l), abs_[:, 0]]); col = np.concatenate([np.array(c), abs_[:, 1]])
X = pd.DataFrame(pile[:, lig, col].T, columns=NOMS)
y = np.r_[np.ones(len(gl)), np.zeros(len(abs_))]
print(X.assign(GLISSEMENT=y).groupby("GLISSEMENT").mean().round(2))

# 3. Entraînement / test (70 % / 30 %) et courbe ROC
X_a, X_t, y_a, y_t = train_test_split(X, y, test_size=0.3, stratify=y, random_state=0)
rf = RandomForestClassifier(n_estimators=300, min_samples_leaf=2, class_weight="balanced", random_state=0).fit(X_a, y_a)
proba_t = rf.predict_proba(X_t)[:, 1]
auc = roc_auc_score(y_t, proba_t)
print("AUC sur l'échantillon de test :", round(auc, 3))
for n, imp in sorted(zip(NOMS, rf.feature_importances_), key=lambda t: -t[1]):
    print(f"  {n:10s} {imp:.3f}")

# 4. Carte de susceptibilité (probabilité) et 4 classes
rf.fit(X, y)                                                # modèle final sur tout l'échantillon
n, h, w = pile.shape
proba = rf.predict_proba(pd.DataFrame(pile.reshape(n, -1).T, columns=NOMS))[:, 1].reshape(h, w).astype("float32")
seuils = np.quantile(proba, [0.5, 0.8, 0.95])
classes = (np.digitize(proba, seuils) + 1).astype("uint8")   # 1 faible, 2 moyenne, 3 forte, 4 très forte
ha = taille ** 2 / 10000
for k, nom in enumerate(["Faible", "Moyenne", "Forte", "Très forte"], 1):
    part = (pres & (classes == k)).sum() / pres.sum() * 100
    print(f"{nom:11s}{(classes == k).sum() * ha:9.0f} ha  {part:5.1f} % des glissements connus")
p = profil.copy(); p.update(driver="GTiff", dtype="float32", nodata=-1, compress="deflate")
with rasterio.open(os.path.join(SORTIES, "susceptibilite_glissements_proba.tif"), "w", **p) as dst:
    dst.write(proba, 1)
p.update(dtype="uint8", nodata=0)
with rasterio.open(os.path.join(SORTIES, "susceptibilite_glissements_classes.tif"), "w", **p) as dst:
    dst.write(classes, 1)

fig, ax = plt.subplots(1, 2, figsize=(13, 6))
fpr, tpr, _ = roc_curve(y_t, proba_t)
ax[0].plot(fpr, tpr, label=f"AUC = {auc:.2f}"); ax[0].plot([0, 1], [0, 1], "k--")
ax[0].set_xlabel("Taux de faux positifs"); ax[0].set_ylabel("Taux de vrais positifs"); ax[0].legend(); ax[0].set_title("Courbe ROC")
e = [tr.c, tr.c + w * taille, tr.f - h * taille, tr.f]
im = ax[1].imshow(proba, cmap="YlOrRd", extent=e); fig.colorbar(im, ax=ax[1], shrink=.7)
ax[1].scatter(gl.geometry.x, gl.geometry.y, s=10, c="k", label="Glissements connus"); ax[1].legend(loc="lower right")
ax[1].set_title("Susceptibilité aux glissements (Random Forest)"); ax[1].ticklabel_format(style="plain")
plt.tight_layout(); plt.savefig(os.path.join(SORTIES, "susceptibilite_glissements.png"), dpi=120)
plt.show()
