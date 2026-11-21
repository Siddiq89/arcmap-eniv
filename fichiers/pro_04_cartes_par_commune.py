# -*- coding: utf-8 -*-
# ArcGIS Pro (Python 3) : une carte PDF par commune avec arcpy.mp.
# À lancer dans un notebook du projet TP_ENIV (ou avec propy.bat en donnant le chemin du .aprx).
# Prérequis : une mise en page contenant un bloc de carte et un texte nommé « Titre ».
import os
import arcpy

SORTIES = r"C:\ENIV\TP\Sorties\Cartes"
os.makedirs(SORTIES, exist_ok=True)

aprx = arcpy.mp.ArcGISProject("CURRENT")          # ou r"C:\ENIV\Projets\TP_ENIV\TP_ENIV.aprx"
carte = aprx.listMaps()[0]
lyt = aprx.listLayouts()[0]
communes = carte.listLayers("Communes")[0]
cadre = lyt.listElements("MAPFRAME_ELEMENT")[0]
titres = lyt.listElements("TEXT_ELEMENT", "Titre")

with arcpy.da.SearchCursor(communes, ["NOM", "SHAPE@"]) as cur:
    for nom, geom in cur:
        cadre.camera.setExtent(geom.extent)
        cadre.camera.scale = cadre.camera.scale * 1.1      # petite marge autour de la commune
        if titres:
            titres[0].text = f"Commune de {nom}"
        sortie = os.path.join(SORTIES, f"{nom}.pdf")
        lyt.exportToPDF(sortie, resolution=200)
        print("Exporté :", sortie)
