# -*- coding: utf-8 -*-
"""SIG ENIV · Parcours Python · Niveau 1 · Bases de Python, pandas et matplotlib
Lit la table de population des communes, calcule le taux de croissance et trace un graphique.
Données FICTIVES : C:\\ENIV\\TP\\Tables\\population_communes.csv
"""
import os
import pandas as pd
import matplotlib.pyplot as plt

DOSSIER = os.environ.get("ENIV_TP", r"C:\ENIV\TP")          # dossier des données de TP
SORTIES = os.path.join(DOSSIER, "Sorties", "Python")
os.makedirs(SORTIES, exist_ok=True)

# 1. Quelques bases du langage
communes = ["C01", "C02", "C03"]                   # une liste
surface_km2 = {"C01": 14.2, "C02": 17.8}           # un dictionnaire
for code in communes:                              # une boucle
    s = surface_km2.get(code, "inconnue")
    print(code, "surface :", s)

def taux_croissance(p0, p1, annees):
    """Taux de croissance annuel moyen en %."""
    return ((p1 / p0) ** (1 / annees) - 1) * 100

print("Exemple :", round(taux_croissance(10000, 12500, 12), 2), "% par an")

# 2. pandas : lire et analyser une table
df = pd.read_csv(os.path.join(DOSSIER, "Tables", "population_communes.csv"), sep=";")
print(df.head())
df["TAUX_AN"] = taux_croissance(df["POP_2008"], df["POP_2020"], 12).round(2)
df["PERS_MEN"] = (df["POP_2020"] / df["MENAGES"]).round(1)
print(df.sort_values("TAUX_AN", ascending=False))
print("Population totale 2020 :", df["POP_2020"].sum())

# 3. matplotlib : un graphique en barres
ax = df.plot.bar(x="CODE", y=["POP_2008", "POP_2020"], figsize=(9, 4), color=["#9ecae1", "#08519c"])
ax.set_ylabel("Habitants"); ax.set_title("Population des communes (données fictives)")
plt.tight_layout()
plt.savefig(os.path.join(SORTIES, "population_communes.png"), dpi=150)
df.to_csv(os.path.join(SORTIES, "population_taux.csv"), sep=";", index=False)
print("Résultats dans", SORTIES)
plt.show()
