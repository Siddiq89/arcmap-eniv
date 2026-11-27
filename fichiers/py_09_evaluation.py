# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 7 · Évaluer et améliorer la classification
Matrice de confusion, précision globale, kappa, validation croisée, réglage, filtre majoritaire.
Lancez d'abord py_08_random_forest.py.
"""
import os
import numpy as np
import pandas as pd
import rasterio
import geopandas as gpd
from scipy import ndimage
from sklearn.metrics import confusion_matrix, accuracy_score, cohen_kappa_score, classification_report
from sklearn.model_selection import cross_val_score, GridSearchCV, StratifiedKFold
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")
TD = os.path.join(DOSSIER, "Teledetection")
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
classes = pd.read_csv(os.path.join(TD, "classes.csv"), sep=";")
NOMS = classes["CLASSE"].tolist()

with rasterio.open(os.path.join(SORTIES, "classification_rf_2024.tif")) as src:
    carte = src.read(1); profil = src.profile
val = gpd.read_file(os.path.join(TD, "Echantillons_validation.shp"))
lig, col = rasterio.transform.rowcol(profil["transform"], val.geometry.x, val.geometry.y)
y_vrai, y_pred = val["CODE"].values, carte[np.array(lig), np.array(col)]

# 1. Matrice de confusion (lignes = référence terrain, colonnes = carte)
mc = confusion_matrix(y_vrai, y_pred, labels=range(1, 7))
print(pd.DataFrame(mc, index=NOMS, columns=NOMS))
print("Précision globale :", round(accuracy_score(y_vrai, y_pred), 3))
print("Kappa de Cohen    :", round(cohen_kappa_score(y_vrai, y_pred), 3))
prod = np.diag(mc) / mc.sum(axis=1)        # précision du producteur (rappel)
util = np.diag(mc) / mc.sum(axis=0)        # précision de l'utilisateur
print(pd.DataFrame({"Producteur": prod, "Utilisateur": util}, index=NOMS).round(3))
print(classification_report(y_vrai, y_pred, labels=range(1, 7), target_names=NOMS, zero_division=0))

# 2. Comparer trois algorithmes par validation croisée (5 plis) sur les points d'entraînement
with rasterio.open(os.path.join(TD, "S2_2024-06-15_Tamda.tif")) as src:
    b = src.read().astype("float32") / 10000
nd = lambda a, c: (a - c) / (a + c)
pile = np.vstack([b, nd(b[3], b[2])[None], nd(b[1], b[3])[None], nd(b[4], b[3])[None]])
ent = gpd.read_file(os.path.join(TD, "Echantillons_entrainement.shp"))
l2, c2 = rasterio.transform.rowcol(profil["transform"], ent.geometry.x, ent.geometry.y)
X, y = pile[:, np.array(l2), np.array(c2)].T, ent["CODE"].values
cv = StratifiedKFold(5, shuffle=True, random_state=0)
modeles = {"Random Forest": RandomForestClassifier(200, random_state=0),
           "SVM (RBF)": make_pipeline(StandardScaler(), SVC(C=10, gamma="scale")),
           "k plus proches voisins": make_pipeline(StandardScaler(), KNeighborsClassifier(5))}
for nom, m in modeles.items():
    s = cross_val_score(m, X, y, cv=cv)
    print(f"{nom:24s} {s.mean():.3f} ± {s.std():.3f}")

# 3. Réglage des hyperparamètres (recherche sur grille)
grille = GridSearchCV(RandomForestClassifier(random_state=0),
                      {"n_estimators": [50, 200], "max_depth": [None, 5], "max_features": ["sqrt", 0.5]}, cv=cv)
grille.fit(X, y)
print("Meilleurs paramètres :", grille.best_params_, "score", round(grille.best_score_, 3))

# 4. Filtre majoritaire 3 x 3 (supprime l'effet « poivre et sel »)
votes = np.stack([ndimage.uniform_filter((carte == c).astype("float32"), 3) for c in range(1, 7)])
lissee = (votes.argmax(axis=0) + 1).astype("uint8")
y_l = lissee[np.array(lig), np.array(col)]
print("Après filtre majoritaire : précision", round(accuracy_score(y_vrai, y_l), 3), "kappa", round(cohen_kappa_score(y_vrai, y_l), 3))
with rasterio.open(os.path.join(SORTIES, "classification_rf_2024_filtree.tif"), "w", **profil) as dst:
    dst.write(lissee, 1)

# 5. Surfaces par classe et par commune
communes = gpd.read_file(os.path.join(DOSSIER, "Shapefiles", "Communes.shp"))
from rasterio.features import rasterize
idc = rasterize([(g, i + 1) for i, g in enumerate(communes.geometry)], out_shape=lissee.shape, transform=profil["transform"])
ha = profil["transform"].a ** 2 / 10000
tab = pd.crosstab(pd.Series(communes["NOM"].values[idc[idc > 0] - 1], name="COMMUNE"), pd.Series(lissee[idc > 0], name="CLASSE")) * ha
tab.columns = [NOMS[c - 1] for c in tab.columns]
print(tab.round(1))
tab.round(1).to_csv(os.path.join(SORTIES, "surfaces_classes_communes.csv"), sep=";")
