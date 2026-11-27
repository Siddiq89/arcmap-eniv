# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 4 · Image multibande et compositions colorées
Image FICTIVE de type Sentinel-2 L2A : 6 bandes (B2, B3, B4, B8, B11, B12), réflectance x 10 000.
"""
import os
import numpy as np
import rasterio
import geopandas as gpd
import matplotlib.pyplot as plt

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")
TD = os.path.join(DOSSIER, "Teledetection")
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
os.makedirs(SORTIES, exist_ok=True)

with rasterio.open(os.path.join(TD, "S2_2024-06-15_Tamda.tif")) as src:
    print(src.count, "bandes |", src.width, "x", src.height, "pixels de", src.res[0], "m |", src.crs)
    print("Bandes :", src.descriptions)
    img = src.read().astype("float32") / 10000          # réflectance entre 0 et 1
    emprise = [src.bounds.left, src.bounds.right, src.bounds.bottom, src.bounds.top]
    transform = src.transform
B2, B3, B4, B8, B11, B12 = img

for nom, b in zip(["B2", "B3", "B4", "B8", "B11", "B12"], img):
    print(f"{nom}: min {b.min():.3f}  moyenne {b.mean():.3f}  max {b.max():.3f}")

def etirer(b, bas=2, haut=98):
    """Étirement linéaire entre les centiles 2 % et 98 %."""
    p1, p2 = np.percentile(b, (bas, haut))
    return np.clip((b - p1) / (p2 - p1), 0, 1)

vraies = np.dstack([etirer(B4), etirer(B3), etirer(B2)])        # 4-3-2 : couleurs naturelles
ir = np.dstack([etirer(B8), etirer(B4), etirer(B3)])            # 8-4-3 : végétation en rouge
swir = np.dstack([etirer(B12), etirer(B8), etirer(B4)])         # 12-8-4 : sols, brûlis, humidité

fig, ax = plt.subplots(1, 3, figsize=(16, 6))
for a, im, t in zip(ax, [vraies, ir, swir], ["Couleurs naturelles (4-3-2)", "Fausses couleurs IR (8-4-3)", "SWIR (12-8-4)"]):
    a.imshow(im, extent=emprise); a.set_title(t); a.ticklabel_format(style="plain")
plt.tight_layout(); plt.savefig(os.path.join(SORTIES, "compositions_2024.png"), dpi=120)

# Signatures spectrales moyennes des classes à partir des points d'entraînement
pts = gpd.read_file(os.path.join(TD, "Echantillons_entrainement.shp"))
lig, col = rasterio.transform.rowcol(transform, pts.geometry.x, pts.geometry.y)
valeurs = img[:, np.array(lig), np.array(col)].T             # (nb points, 6 bandes)
longueurs = [490, 560, 665, 842, 1610, 2190]                   # nm
plt.figure(figsize=(8, 5))
couleurs = {"Eau": "#2b7bba", "Forêt": "#1a7a3a", "Maquis": "#8fbf5a", "Cultures": "#d9b400", "Sol nu": "#a0785a", "Bâti": "#d7301f"}
for classe, c in couleurs.items():
    plt.plot(longueurs, valeurs[(pts["CLASSE"] == classe).values].mean(axis=0), "o-", color=c, label=classe)
plt.xlabel("Longueur d'onde (nm)"); plt.ylabel("Réflectance"); plt.legend(); plt.grid(alpha=.3)
plt.title("Signatures spectrales (image fictive, juin 2024)")
plt.savefig(os.path.join(SORTIES, "signatures_spectrales.png"), dpi=120)
print("Figures dans", SORTIES)
plt.show()
