# -*- coding: utf-8 -*-
# Niveau 7 : du MNT au réseau hydrographique et au bassin versant (Spatial Analyst > Hydrologie).
import os
import arcpy
from arcpy.sa import *
from outils_risques import TP, SORTIES, preparer, importer_mnt

mnt = importer_mnt(os.path.join(TP, "MNT", "MNT_50m.asc"), "mnt.tif")
preparer(mnt)

# 1. Combler les cuvettes (dépressions artificielles du MNT)
fill = Fill(mnt)
fill.save("fill.tif")
cuvettes = fill - Raster(mnt)
cuvettes.save("prof_cuvettes.tif")      # où et de combien le MNT a été corrigé

# 2. Direction et accumulation des écoulements (méthode D8)
fdir = FlowDirection(fill, "NORMAL")
fdir.save("fdir.tif")
facc = FlowAccumulation(fdir)
facc.save("facc.tif")

# 3. Réseau hydrographique : cellules drainant plus de 1 km2 (400 cellules de 50 m)
seuil = 400
reseau = Con(facc > seuil, 1)
reseau.save("reseau.tif")
strahler = StreamOrder(reseau, fdir, "STRAHLER")
strahler.save("strahler.tif")
StreamToFeature(strahler, fdir, os.path.join(SORTIES, "reseau_hydro.shp"), "SIMPLIFY")

# 4. Bassin versant de l'exutoire (point recalé sur l'accumulation maximale à 150 m près)
exu = SnapPourPoint(os.path.join(TP, "Risques", "Exutoire.shp"), facc, 150, "ID")
exu.save("exutoire_recale.tif")
bv = Watershed(fdir, exu)
bv.save("bassin.tif")
arcpy.RasterToPolygon_conversion(bv, os.path.join(SORTIES, "bassin_versant.shp"), "SIMPLIFY")

# 5. Tous les bassins qui débouchent sur un bord de la zone
Basin(fdir).save("bassins_tous.tif")

# 6. Superficie du bassin versant
surface = 0.0
with arcpy.da.SearchCursor(os.path.join(SORTIES, "bassin_versant.shp"), ["SHAPE@AREA"]) as cur:
    for (a,) in cur:
        surface += a
print("Bassin versant de l'oued Tamda : {0:.1f} km2".format(surface / 1e6))
