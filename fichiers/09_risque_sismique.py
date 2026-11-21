# -*- coding: utf-8 -*-
# Niveau 8 : carte de l'aléa sismique local (failles, sismicité, effets de site).
# Rappel : selon le RPA 99/2003, la wilaya de Tlemcen est classée en zone I (sismicité faible).
import os
import arcpy
from arcpy.sa import *
from outils_risques import TP, SORTIES, preparer, importer_mnt, classer, somme_ponderee, cinq_classes

mnt = importer_mnt(os.path.join(TP, "MNT", "MNT_50m.asc"), "mnt.tif")
preparer(mnt)
ris = os.path.join(TP, "Risques")

# Distance aux failles actives
arcpy.MakeFeatureLayer_management(os.path.join(ris, "Failles.shp"), "failles_actives", "\"ACTIVE\" = 'Oui'")
c_faille = classer(EucDistance("failles_actives"), [500, 1000, 2000, 5000], [5, 4, 3, 2, 1])

# Densité des épicentres (noyau de 3 km), en 5 classes à effectifs égaux
dens = KernelDensity(os.path.join(ris, "Epicentres.shp"), "NONE", 50, 3000, "SQUARE_KILOMETERS")
dens.save("densite_epicentres.tif")
c_dens = Slice(dens, 5, "EQUAL_AREA")

# Effet de site : coefficient d'amplification de la lithologie (S1 = 1,0 ... S4 = 1,8)
arcpy.PolygonToRaster_conversion(os.path.join(ris, "Lithologie.shp"), "AMPLIF", "amplif.tif", cellsize=mnt)
c_sol = classer(Raster("amplif.tif"), [1.1, 1.3, 1.6, 1.7], [1, 2, 4, 4, 5])

# Effets induits (éboulements) sur les fortes pentes
c_pente = classer(Slope(mnt, "DEGREE"), [3, 8, 15, 25], [1, 2, 3, 4, 5])

indice = somme_ponderee([(c_faille, 40), (c_dens, 25), (c_sol, 25), (c_pente, 10)])
indice.save("seisme_indice.tif")
cinq_classes(indice).save("seisme_classes.tif")
print("Carte sismique terminee : seisme_classes.tif")
