# -*- coding: utf-8 -*-
# Niveau 8 : vulnérabilité de la zone côtière au tsunami (données Risques_cote).
import os
import arcpy
from arcpy.sa import *
from outils_risques import TP, SORTIES, preparer, importer_mnt, classer, somme_ponderee, cinq_classes

cote = os.path.join(TP, "Risques_cote")
mnt = importer_mnt(os.path.join(cote, "MNT_cote_25m.asc"), "mnt_cote.tif")
preparer(mnt)
terre = Con(Raster(mnt) > 0, Raster(mnt))        # on ne garde que les terres émergées
terre.save("cote_terre.tif")

c_alt = classer(terre, [2, 5, 10, 20], [5, 4, 3, 2, 1])
c_dist = classer(EucDistance(os.path.join(cote, "Trait_de_cote.shp")), [100, 300, 600, 1000], [5, 4, 3, 2, 1])
c_pente = classer(Slope(terre, "DEGREE"), [2, 5, 10, 20], [5, 4, 3, 2, 1])

indice = somme_ponderee([(c_alt, 50), (c_dist, 35), (c_pente, 15)])
indice.save("tsunami_indice.tif")
classes = cinq_classes(indice)
classes.save("tsunami_classes.tif")

# Scénario simple : vague de 5 m -> terres sous 5 m d'altitude et à moins de 1 km de la côte
submersion = Con((terre <= 5) & (EucDistance(os.path.join(cote, "Trait_de_cote.shp")) <= 1000), 1)
submersion.save("submersion_5m.tif")

ExtractValuesToPoints(os.path.join(cote, "Enjeux_cote.shp"), classes, os.path.join(SORTIES, "enjeux_tsunami.shp"))
with arcpy.da.SearchCursor(os.path.join(SORTIES, "enjeux_tsunami.shp"), ["TYPE", "ALT_M", "RASTERVALU"]) as cur:
    for t, alt, cl in sorted(cur, key=lambda r: -r[2]):
        print(u"{0:<25} altitude {1:5.1f} m  classe {2}".format(t, alt, int(cl)))
