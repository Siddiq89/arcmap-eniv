# -*- coding: utf-8 -*-
# Niveau 6, leçon 4 : une carte PDF par commune avec arcpy.mapping (ArcMap uniquement).
# Préparez d'abord Carte_communes.mxd : couche « Communes » et un élément texte nommé « Titre »
# (propriétés de l'élément > Taille et position > Nom de l'élément).
import os
import arcpy

mxd_path = r"C:\ENIV\TP\Carte_communes.mxd"
sorties = r"C:\ENIV\TP\Sorties\Cartes"
if not os.path.exists(sorties):
    os.makedirs(sorties)

mxd = arcpy.mapping.MapDocument(mxd_path)
df = arcpy.mapping.ListDataFrames(mxd)[0]
lyr = arcpy.mapping.ListLayers(mxd, "Communes", df)[0]
titre = arcpy.mapping.ListLayoutElements(mxd, "TEXT_ELEMENT", "Titre")[0]

pdfs = []
noms = sorted(r[0] for r in arcpy.da.SearchCursor(lyr.dataSource, ["NOM"]))
for nom in noms:
    lyr.definitionQuery = u"\"NOM\" = '{0}'".format(nom)
    df.extent = lyr.getExtent()
    df.scale = df.scale * 1.1
    titre.text = u"Commune de " + nom
    pdf = os.path.join(sorties, nom.replace(" ", "_") + ".pdf")
    arcpy.mapping.ExportToPDF(mxd, pdf)
    pdfs.append(pdf)
    print(u"Exporte : " + pdf)

lyr.definitionQuery = ""

# Assembler tous les PDF en un atlas
atlas_path = os.path.join(sorties, "Atlas_communes.pdf")
if os.path.exists(atlas_path):
    os.remove(atlas_path)
atlas = arcpy.mapping.PDFDocumentCreate(atlas_path)
for p in pdfs:
    atlas.appendPages(p)
atlas.saveAndClose()
del mxd
print("Atlas : " + atlas_path)
