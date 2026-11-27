# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 3 · Données raster avec rasterio et NumPy
Lit le MNT, calcule la pente, la reclasse, découpe par une commune et écrit des GeoTIFF.
"""
import os
import numpy as np
import rasterio
from rasterio.mask import mask
import geopandas as gpd
import matplotlib.pyplot as plt

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
os.makedirs(SORTIES, exist_ok=True)

# 1. Ouvrir et décrire le raster
with rasterio.open(os.path.join(DOSSIER, "MNT", "MNT_50m.asc")) as src:
    mnt = src.read(1, masked=True).astype("float32")     # tableau NumPy (lignes, colonnes)
    profil = src.profile
    print("CRS :", src.crs, "| taille :", src.width, "x", src.height, "| pixel :", src.res)
    print("Transformée affine :", src.transform)
    print("Emprise :", src.bounds)
print("Altitude min / moy / max :", mnt.min(), round(float(mnt.mean()), 1), mnt.max())

# 2. Pente en degrés avec NumPy (différences finies)
taille = profil["transform"].a
dz_dy, dz_dx = np.gradient(mnt.filled(np.nan), taille)
pente = np.degrees(np.arctan(np.hypot(dz_dx, dz_dy))).astype("float32")
print("Pente moyenne :", round(float(np.nanmean(pente)), 1), "°")

# 3. Reclassement : 1 = < 3°, 2 = 3-8°, 3 = 8-15°, 4 = > 15°
classes = np.digitize(pente, [3, 8, 15]).astype("uint8") + 1
for c, n in zip(*np.unique(classes, return_counts=True)):
    print("classe", c, ":", round(n * taille ** 2 / 1e4, 1), "ha")

# 4. Écrire des GeoTIFF
p = profil.copy(); p.update(driver="GTiff", dtype="float32", count=1, nodata=-9999, compress="deflate")
with rasterio.open(os.path.join(SORTIES, "pente_deg.tif"), "w", **p) as dst:
    dst.write(np.nan_to_num(pente, nan=-9999), 1)
p.update(dtype="uint8", nodata=0)
with rasterio.open(os.path.join(SORTIES, "pente_classes.tif"), "w", **p) as dst:
    dst.write(classes, 1)

# 5. Découper le MNT par la commune C05 (chef-lieu)
communes = gpd.read_file(os.path.join(DOSSIER, "Shapefiles", "Communes.shp"))
c05 = communes[communes["CODE"] == "C05"]
with rasterio.open(os.path.join(DOSSIER, "MNT", "MNT_50m.asc")) as src:
    decoupe, tr = mask(src, c05.geometry, crop=True, nodata=-9999)
    p2 = src.profile; p2.update(driver="GTiff", height=decoupe.shape[1], width=decoupe.shape[2], transform=tr, nodata=-9999)
with rasterio.open(os.path.join(SORTIES, "mnt_C05.tif"), "w", **p2) as dst:
    dst.write(decoupe)
v = decoupe[decoupe != -9999]
print("C05 : altitude moyenne", round(float(v.mean()), 1), "m")

fig, ax = plt.subplots(1, 2, figsize=(12, 5))
ax[0].imshow(mnt, cmap="terrain"); ax[0].set_title("MNT (m)")
im = ax[1].imshow(pente, cmap="magma_r"); ax[1].set_title("Pente (°)"); fig.colorbar(im, ax=ax[1], shrink=.7)
plt.savefig(os.path.join(SORTIES, "mnt_pente.png"), dpi=120)
plt.show()
