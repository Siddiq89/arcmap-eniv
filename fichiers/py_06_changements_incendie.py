# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 5 · Détection de changements : zone incendiée (NBR, dNBR)
Incendie FICTIF du 12 juillet 2025 : image avant (15/06/2024) et après (20/08/2025).
"""
import os
import numpy as np
import rasterio
from rasterio.features import shapes
import geopandas as gpd
from shapely.geometry import shape
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")
TD = os.path.join(DOSSIER, "Teledetection")
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
os.makedirs(SORTIES, exist_ok=True)

def lire(nom):
    with rasterio.open(os.path.join(TD, nom)) as src:
        return src.read().astype("float32") / 10000, src.profile

def nbr(img):
    pir, swir2 = img[3], img[5]
    return (pir - swir2) / (pir + swir2)

avant, profil = lire("S2_2024-06-15_Tamda.tif")
apres, _ = lire("S2_2025-08-20_Tamda.tif")
dnbr = nbr(avant) - nbr(apres)                           # positif = perte de végétation
print("dNBR : min %.2f  max %.2f" % (dnbr.min(), dnbr.max()))

# Classes de sévérité (seuils usuels de l'USGS)
seuils = [0.10, 0.27, 0.44, 0.66]
noms = ["Non brûlé", "Sévérité faible", "Modérée-faible", "Modérée-forte", "Forte"]
sev = np.digitize(dnbr, seuils).astype("uint8")         # 0 à 4
ha = profil["transform"].a ** 2 / 10000
for k, n in enumerate(noms):
    print(f"{n:18s}{(sev == k).sum() * ha:9.1f} ha")

# On ne garde que la grande tache (nettoie le bruit des petits pixels isolés)
from scipy import ndimage
brule = sev >= 2
etiq, nb = ndimage.label(brule)
tailles = ndimage.sum(brule, etiq, range(1, nb + 1))
grande = etiq == (np.argmax(tailles) + 1)
print("Surface incendiée (dNBR > 0,27, plus grande tache) : %.1f ha" % (grande.sum() * ha))

p = profil.copy(); p.update(count=1, dtype="uint8", nodata=255)
with rasterio.open(os.path.join(SORTIES, "severite_incendie_2025.tif"), "w", **p) as dst:
    dst.write(sev, 1)

# Raster -> polygone (shapefile) du périmètre incendié
geoms = [shape(g) for g, v in shapes(grande.astype("uint8"), mask=grande, transform=profil["transform"]) if v == 1]
perim = gpd.GeoDataFrame({"NOM": ["Incendie fictif 12/07/2025"] * len(geoms)}, geometry=geoms, crs=profil["crs"]).dissolve("NOM")
perim["SURF_HA"] = (perim.area / 1e4).round(1)
perim.to_file(os.path.join(SORTIES, "perimetre_incendie_2025.shp"))
print(perim)

fig, ax = plt.subplots(1, 2, figsize=(13, 6))
im = ax[0].imshow(dnbr, cmap="magma", vmin=-0.1, vmax=0.9); ax[0].set_title("dNBR = NBR(2024) - NBR(2025)")
fig.colorbar(im, ax=ax[0], shrink=.7)
ax[1].imshow(sev, cmap=ListedColormap(["#e5e5e5", "#fee08b", "#fdae61", "#f46d43", "#a50026"]), vmin=0, vmax=4, interpolation="nearest")
ax[1].set_title("Sévérité : " + " / ".join(noms))
plt.tight_layout(); plt.savefig(os.path.join(SORTIES, "incendie_2025.png"), dpi=120)
plt.show()
