# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 5 · Indices spectraux NDVI, SAVI, NDWI, NDBI et seuillage
"""
import os
import numpy as np
import rasterio
import matplotlib.pyplot as plt

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")
TD = os.path.join(DOSSIER, "Teledetection")
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
os.makedirs(SORTIES, exist_ok=True)

with rasterio.open(os.path.join(TD, "S2_2024-06-15_Tamda.tif")) as src:
    B2, B3, B4, B8, B11, B12 = src.read().astype("float32") / 10000
    profil = src.profile
    ha_pixel = src.res[0] * src.res[1] / 10000          # 20 m x 20 m = 0,04 ha

def indice(a, b):
    """Différence normalisée (a - b) / (a + b), sans division par zéro."""
    with np.errstate(divide="ignore", invalid="ignore"):
        return np.where(a + b == 0, 0, (a - b) / (a + b)).astype("float32")

ndvi = indice(B8, B4)                                   # végétation
savi = ((B8 - B4) / (B8 + B4 + 0.5) * 1.5).astype("float32")   # végétation clairsemée (L = 0,5)
ndwi = indice(B3, B8)                                   # eau libre (McFeeters)
ndbi = indice(B11, B8)                                  # bâti et sols nus
for n, v in [("NDVI", ndvi), ("SAVI", savi), ("NDWI", ndwi), ("NDBI", ndbi)]:
    print(f"{n}: min {v.min():.2f}  moyenne {v.mean():.2f}  max {v.max():.2f}")

# GeoTIFF à 4 bandes (float32)
p = profil.copy(); p.update(count=4, dtype="float32", nodata=None, predictor=3)
with rasterio.open(os.path.join(SORTIES, "indices_2024.tif"), "w", **p) as dst:
    for i, (n, v) in enumerate([("NDVI", ndvi), ("SAVI", savi), ("NDWI", ndwi), ("NDBI", ndbi)], 1):
        dst.write(v, i); dst.set_band_description(i, n)

# Seuillage : eau, végétation dense, végétation clairsemée, sans végétation
carte = np.full(ndvi.shape, 4, "uint8")                 # 4 = sans végétation
carte[ndvi > 0.25] = 3                                  # 3 = végétation clairsemée
carte[ndvi > 0.55] = 2                                  # 2 = végétation dense
carte[ndwi > 0.2] = 1                                   # 1 = eau
noms = {1: "Eau", 2: "Végétation dense", 3: "Végétation clairsemée", 4: "Sans végétation"}
for c in noms:
    print(f"{noms[c]:24s}{(carte == c).sum() * ha_pixel:10.1f} ha")
p.update(count=1, dtype="uint8", nodata=0, predictor=2)
with rasterio.open(os.path.join(SORTIES, "seuillage_ndvi_ndwi.tif"), "w", **p) as dst:
    dst.write(carte, 1)

fig, ax = plt.subplots(1, 3, figsize=(17, 5))
im = ax[0].imshow(ndvi, cmap="RdYlGn", vmin=-0.2, vmax=0.8); ax[0].set_title("NDVI"); fig.colorbar(im, ax=ax[0], shrink=.7)
ax[1].hist(ndvi.ravel(), bins=100, color="green"); ax[1].axvline(.25, color="k", ls="--"); ax[1].axvline(.55, color="k", ls="--")
ax[1].set_title("Histogramme du NDVI et seuils")
from matplotlib.colors import ListedColormap
ax[2].imshow(carte, cmap=ListedColormap(["#2b7bba", "#1a7a3a", "#a6d96a", "#e0c9a6"]), vmin=1, vmax=4, interpolation="nearest")
ax[2].set_title("Seuillage : eau / végétation dense / clairsemée / sans")
plt.tight_layout(); plt.savefig(os.path.join(SORTIES, "indices_2024.png"), dpi=120)
plt.show()
