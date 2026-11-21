# -*- coding: utf-8 -*-
# Niveau 8 : carte de susceptibilité aux feux de forêt.
import os
import arcpy
from arcpy.sa import *
from outils_risques import TP, SORTIES, preparer, importer_mnt, classer, somme_ponderee, cinq_classes, valider

mnt = importer_mnt(os.path.join(TP, "MNT", "MNT_50m.asc"), "mnt.tif")
preparer(mnt)
shp = os.path.join(TP, "Shapefiles")

# Combustible : occupation du sol (1 Agriculture, 2 Forêt, 3 Parcours, 4 Sol nu, 5 Urbain)
arcpy.PolygonToRaster_conversion(os.path.join(shp, "Occupation_sol.shp"), "CODE_OS", "occ.tif", cellsize=mnt)
c_occ = Reclassify("occ.tif", "VALUE", RemapValue([[1, 2], [2, 5], [3, 4], [4, 1], [5, 1]]))

# Relief : pente et exposition (les versants sud sont plus secs)
c_pente = classer(Slope(mnt, "DEGREE"), [5, 10, 20, 30], [1, 2, 3, 4, 5])
expo = Aspect(mnt)
c_expo = Reclassify(expo, "VALUE", RemapRange([
    [-1, 0, 1],                       # plat
    [0, 22.5, 1], [22.5, 67.5, 2],    # N, NE
    [67.5, 112.5, 3], [112.5, 157.5, 4],  # E, SE
    [157.5, 202.5, 5], [202.5, 247.5, 4],  # S, SO
    [247.5, 292.5, 3], [292.5, 337.5, 2],  # O, NO
    [337.5, 360, 1]]))                # N

# Activités humaines : proximité des routes et des lieux habités (écoles comme repère)
c_route = classer(EucDistance(os.path.join(shp, "Routes.shp")), [100, 300, 600, 1000], [5, 4, 3, 2, 1])
c_hab = classer(EucDistance(os.path.join(shp, "Ecoles.shp")), [200, 500, 1000, 2000], [5, 4, 3, 2, 1])

indice = somme_ponderee([(c_occ, 35), (c_pente, 20), (c_expo, 15), (c_route, 15), (c_hab, 15)])
indice.save("feux_indice.tif")
classes = cinq_classes(indice)
classes.save("feux_classes.tif")
valider(os.path.join(TP, "Risques", "Foyers_incendies.shp"), classes)
