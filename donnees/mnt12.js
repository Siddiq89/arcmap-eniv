/*
 * NIVEAU « ANALYSES DU MNT » (12 analyses) pour les trois parcours.
 * ------------------------------------------------------------------
 * Ce fichier ajoute le niveau n9 (ArcMap), p10 (ArcGIS Pro) et q11 (QGIS)
 * et leurs traductions (en, ar, ber). Le texte est commun ; seul le tableau
 * des outils et le script changent selon le logiciel.
 * À charger après les fichiers de cours et de traduction, avant app.js.
 */
(function () {
  var MNT = "C:\\ENIV\\TP\\MNT\\MNT_50m.asc";

  /* ---------- Outils par logiciel : [outil, emplacement] ---------- */
  var OUTILS = {
    arcmap: {
      ombrage: ["Hillshade", "Spatial Analyst Tools > Surface"],
      courbes: ["Contour", "Spatial Analyst Tools > Surface"],
      profil: ["Interpolate Line + Profile Graph", "3D Analyst toolbar"],
      pente: ["Slope", "Spatial Analyst Tools > Surface"],
      expo: ["Aspect", "Spatial Analyst Tools > Surface"],
      rugo: ["Focal Statistics (STD, 3 × 3)", "Spatial Analyst Tools > Neighborhood"],
      visi: ["Viewshed", "Spatial Analyst Tools > Surface"],
      fill: ["Fill, Flow Direction, Flow Accumulation", "Spatial Analyst Tools > Hydrology"],
      bassin: ["Snap Pour Point, Watershed", "Spatial Analyst Tools > Hydrology"],
      interp: ["IDW, Spline, Topo to Raster", "Spatial Analyst Tools > Interpolation"],
      reclass: ["Reclassify", "Spatial Analyst Tools > Reclass"],
      calc: ["Raster Calculator", "Spatial Analyst Tools > Map Algebra"]
    },
    pro: {
      ombrage: ["Hillshade (or raster function Hillshade, Multidirectional)", "Spatial Analyst Tools > Surface / Imagery > Raster Functions"],
      courbes: ["Contour", "Spatial Analyst Tools > Surface"],
      profil: ["Stack Profile + chart", "3D Analyst Tools"],
      pente: ["Slope (or Surface Parameters)", "Spatial Analyst Tools > Surface"],
      expo: ["Aspect (or Surface Parameters)", "Spatial Analyst Tools > Surface"],
      rugo: ["Focal Statistics (STD, 3 × 3)", "Spatial Analyst Tools > Neighborhood"],
      visi: ["Viewshed 2", "Spatial Analyst Tools > Visibility"],
      fill: ["Fill, Flow Direction, Flow Accumulation", "Spatial Analyst Tools > Hydrology"],
      bassin: ["Snap Pour Point, Watershed", "Spatial Analyst Tools > Hydrology"],
      interp: ["IDW, Spline, Topo to Raster", "Spatial Analyst Tools > Interpolation"],
      reclass: ["Reclassify", "Spatial Analyst Tools > Reclass"],
      calc: ["Raster Calculator", "Spatial Analyst Tools > Map Algebra"]
    },
    qgis: {
      ombrage: ["Hillshade", "Raster > Analysis (GDAL)"],
      courbes: ["Contour", "Raster > Extraction (GDAL)"],
      profil: ["Elevation Profile (QGIS 3.26+)", "View > Elevation Profile"],
      pente: ["Slope", "Raster > Analysis (GDAL)"],
      expo: ["Aspect", "Raster > Analysis (GDAL)"],
      rugo: ["Terrain Ruggedness Index (TRI)", "Raster > Analysis (GDAL)"],
      visi: ["Viewshed (QGIS 3.28+)", "Processing Toolbox > GDAL > Raster analysis"],
      fill: ["r.fill.dir, r.watershed", "Processing Toolbox > GRASS"],
      bassin: ["r.water.outlet", "Processing Toolbox > GRASS"],
      interp: ["IDW interpolation, TIN interpolation", "Processing Toolbox > Interpolation"],
      reclass: ["Reclassify by table", "Processing Toolbox > Raster analysis"],
      calc: ["Raster Calculator", "Raster > Raster Calculator"]
    }
  };

  var CODE_ARCPY = '<pre><code>import os, arcpy\nfrom arcpy.sa import *\narcpy.CheckOutExtension("Spatial")\ndossier = r"C:\\ENIV\\TP\\Sorties\\MNT"\nif not os.path.exists(dossier):\n    os.makedirs(dossier)\narcpy.env.workspace = dossier\narcpy.env.overwriteOutput = True\n\nmnt = Raster(r"C:\\ENIV\\TP\\Sorties\\Risques\\mnt.tif")   # MNT du niveau 7\n\nHillshade(mnt, 315, 45).save("ombrage.tif")\nContour(mnt, "courbes.shp", 20)\npente = Slope(mnt, "DEGREE")\npente.save("pente.tif")\nAspect(mnt).save("exposition.tif")\nFocalStatistics(mnt, NbrRectangle(3, 3, "CELL"), "STD").save("rugosite.tif")\n\nalt_cl = Reclassify(mnt, "VALUE", RemapRange([[0, 500, 1], [500, 750, 2],\n                                             [750, 1000, 3], [1000, 1300, 4]]))\nalt_cl.save("alt_classes.tif")\n\n# 1 = pente &lt; 15° et altitude &lt; 800 m\nCon((pente &lt; 15) &amp; (mnt &lt; 800), 1, 0).save("favorable.tif")\nprint("Analyses terminées")</code></pre>';

  var CODE_QGIS = '<pre><code>import os, processing\nmnt = "C:/ENIV/TP/MNT/MNT_50m.asc"\nsortie = "C:/ENIV/TP/Sorties/MNT/"\nos.makedirs(sortie, exist_ok=True)\n\nprocessing.run("gdal:hillshade", {"INPUT": mnt, "BAND": 1, "Z_FACTOR": 1,\n               "AZIMUTH": 315, "V_ANGLE": 45, "OUTPUT": sortie + "ombrage.tif"})\nprocessing.run("gdal:contour", {"INPUT": mnt, "BAND": 1, "INTERVAL": 20,\n               "FIELD_NAME": "ELEV", "OUTPUT": sortie + "courbes.gpkg"})\nprocessing.run("gdal:slope", {"INPUT": mnt, "BAND": 1, "SCALE": 1,\n               "OUTPUT": sortie + "pente.tif"})\nprocessing.run("gdal:aspect", {"INPUT": mnt, "BAND": 1, "OUTPUT": sortie + "exposition.tif"})\nprocessing.run("gdal:triterrainruggednessindex", {"INPUT": mnt, "BAND": 1,\n               "OUTPUT": sortie + "rugosite.tif"})\n\n# 1 = pente &lt; 15° et altitude &lt; 800 m\nprocessing.run("gdal:rastercalculator", {"INPUT_A": sortie + "pente.tif", "BAND_A": 1,\n               "INPUT_B": mnt, "BAND_B": 1, "FORMULA": "(A &lt; 15) * (B &lt; 800)",\n               "RTYPE": 1, "OUTPUT": sortie + "favorable.tif"})\nprint("Analyses terminées")</code></pre>';

  var LOG = {
    arcmap: { cours: "COURS", id: "n9", numero: 9, hydro: "n7", code: CODE_ARCPY },
    pro: { cours: "COURS_PRO", id: "p10", numero: 10, hydro: "p7", code: CODE_ARCPY },
    qgis: { cours: "COURS_QGIS", id: "q11", numero: 11, hydro: "q7", code: CODE_QGIS }
  };

  /* ---------- Textes ---------- */
  var TXT = {};

  TXT.fr = {
    th: ["Analyse", "Outil", "Où le trouver"],
    noms: { ombrage: "1. Ombrage", courbes: "2. Courbes de niveau", profil: "5. Profil d'élévation", pente: "3. Pente", expo: "4. Exposition", rugo: "9. Rugosité du terrain", visi: "6. Visibilité (viewshed)", fill: "7. Remplissage et écoulement", bassin: "8. Bassins versants", interp: "10. Interpolation de surface", reclass: "11. Reclassification", calc: "12. Calculatrice raster" },
    niveau: { titre: "Analyses du MNT : les 12 traitements", resume: "Ombrage, courbes de niveau, pente, exposition, profil, visibilité, écoulement, bassins versants, rugosité, interpolation, reclassification et calculatrice raster sur le MNT de Tlemcen." },
    l1: { titre: "Lire le relief : ombrage, courbes de niveau et profil", objectifs: ["Créer un ombrage et le superposer au MNT", "Générer des courbes de niveau avec des courbes maîtresses", "Tracer un profil d'élévation à travers la vallée"],
      intro: '<p>Un <b>MNT</b> (modèle numérique de terrain) est une grille où chaque cellule porte une altitude. Le MNT de TP (<code>' + MNT + '</code>) couvre le bassin fictif de l\'oued Tamda : 400 × 400 cellules de 50 m, de 279 à 1 190 m, en WGS 1984 UTM zone 30N. Les trois premières analyses servent à <b>voir</b> le relief.</p>',
      corps: '<h3>1. Ombrage</h3><p>L\'ombrage simule l\'éclairage du relief par le soleil. Paramètres habituels : <b>azimut 315°</b> (lumière venant du nord-ouest), <b>hauteur 45°</b>, <b>facteur Z = 1</b> (le MNT est en mètres, comme l\'altitude). Placez l\'ombrage sous le MNT coloré et rendez le MNT transparent à 40 % : c\'est la base de toute carte du relief.</p><h3>2. Courbes de niveau</h3><p>Une courbe relie les points de même altitude. Choisissez une <b>équidistance de 20 m</b> et un champ <code>ELEV</code>. Les <b>courbes maîtresses</b> (tous les 100 m) sont plus épaisses et étiquetées : filtre ou catégorie sur <code>ELEV % 100 = 0</code> (ou <code>MOD(ELEV, 100) = 0</code>). Des courbes serrées indiquent une pente forte.</p><h3>5. Profil d\'élévation</h3><p>Le profil montre l\'altitude le long d\'une ligne. Tracez une ligne du point A (641 000 ; 3 846 000) au point B (659 000 ; 3 834 000), qui traverse la vallée de l\'oued, puis créez le graphique avec l\'outil du tableau.</p>',
      astuce: '<div class="astuce"><b>À retenir :</b> si un MNT est en degrés (WGS 1984 géographique) et l\'altitude en mètres, l\'ombrage et la pente sont faux sans facteur Z. Projetez d\'abord en UTM.</div>',
      exercice: '<ol><li>Créez l\'ombrage (315°, 45°) et superposez-le au MNT en dégradé hypsométrique.</li><li>Générez les courbes à 20 m, affichez les maîtresses tous les 100 m en gras avec étiquettes.</li><li>Tracez le profil A–B : quelle est la dénivelée entre le fond de la vallée et la crête la plus haute ?</li></ol>' },
    l2: { titre: "Pente, exposition et rugosité", objectifs: ["Calculer la pente en degrés et en pourcentage", "Calculer et symboliser l'exposition", "Mesurer la rugosité du terrain"],
      corps: '<h3>3. Pente</h3><p>La pente est la variation d\'altitude entre une cellule et ses voisines. En <b>degrés</b> (0 à 90°) ou en <b>pourcentage</b> (45° = 100 %). Classes utiles : 0–3° plat, 3–8° faible, 8–15° moyenne, 15–30° forte, plus de 30° très forte. Elle sert aux risques (glissements, feux), à l\'aménagement et à l\'agriculture.</p><h3>4. Exposition</h3><p>L\'exposition donne la direction vers laquelle la pente est tournée, de 0 à 360° depuis le nord (90° = est, 180° = sud). Les zones plates reçoivent <b>−1</b>. Symbolisez en 8 classes (N, NE, E, SE, S, SO, O, NO) avec une palette circulaire. Les versants sud sont plus chauds et plus secs.</p><h3>9. Rugosité du terrain</h3><p>La rugosité mesure à quel point le relief est accidenté autour de chaque cellule. L\'indice <b>TRI</b> (Terrain Ruggedness Index) fait la moyenne des écarts d\'altitude avec les 8 voisines ; l\'<b>écart type de l\'altitude</b> dans une fenêtre de 3 × 3 cellules donne une mesure proche. Valeur faible : plateau ou plaine ; valeur forte : gorges, crêtes, escarpements.</p>',
      astuce: '<div class="astuce"><b>Bon réflexe :</b> comparez pente et rugosité. Un versant régulier a une pente forte mais une rugosité faible ; un ravin a les deux fortes.</div>',
      exercice: '<ol><li>Calculez la pente en degrés et classez-la en 5 classes. Quelle surface dépasse 30° ?</li><li>Calculez l\'exposition et comptez la part des versants sud (135–225°).</li><li>Calculez la rugosité et repérez les trois secteurs les plus accidentés.</li></ol>' },
    l3: { titre: "Visibilité, écoulement et bassins versants", objectifs: ["Calculer la zone visible depuis un point d'observation", "Relier les analyses hydrologiques du MNT au niveau Hydrologie"],
      corps: '<h3>6. Visibilité (viewshed)</h3><p>Le viewshed calcule les cellules visibles depuis un ou plusieurs points d\'observation. Cas d\'usage : placer une <b>tour de guet</b> contre les feux de forêt, une antenne, ou évaluer l\'impact visuel d\'un projet.</p><ol><li>Créez une couche de points <code>Tour_guet</code> avec le sommet X = 645 075, Y = 3 846 575 (1 190 m).</li><li>Hauteur de l\'observateur : <b>15 m</b> (une tour), rayon maximal : <b>10 km</b>.</li><li>Lancez l\'outil du tableau : 1 = visible, 0 = caché.</li></ol><h3>7. Remplissage et écoulement</h3><p><b>Fill</b> supprime les cuvettes du MNT, puis la <b>direction d\'écoulement</b> (D8) et l\'<b>accumulation</b> donnent le chemin de l\'eau et le réseau hydrographique.</p><h3>8. Bassins versants</h3><p>À partir d\'un exutoire calé sur le réseau, l\'outil délimite toute la surface qui draine vers ce point.</p>',
      astuce: '<div class="astuce"><b>Pour aller plus loin :</b> les analyses 7 et 8 sont détaillées pas à pas, avec le TP de l\'oued Tamda, dans le niveau <b>Hydrologie</b> du parcours (lien ci-dessous).</div>',
      exercice: '<ol><li>Calculez la zone visible depuis la tour de guet. Quelle part de la forêt (<code>Occupation_sol</code>) est visible ?</li><li>Testez une hauteur de 5 m puis de 30 m : comment change la surface visible ?</li><li>Refaites rapidement Fill, écoulement et bassin versant, puis superposez le bassin à la zone visible.</li></ol>' },
    l4: { titre: "Interpolation, reclassification et calculatrice raster", objectifs: ["Créer un MNT à partir de points cotés et mesurer l'erreur", "Regrouper les altitudes en classes", "Combiner plusieurs rasters avec une expression"],
      corps: '<h3>10. Interpolation de surface</h3><p>Le fichier <code>TP\\Tables\\points_cotes.csv</code> contient 250 points cotés (X ; Y ; Z en WGS 1984 UTM 30N, séparateur point-virgule). Créez la couche de points, puis interpolez une surface à 50 m :</p><ul><li><b>IDW</b> (pondération par l\'inverse de la distance) : simple, ne dépasse jamais les valeurs mesurées ;</li><li><b>Spline</b> : surface lisse, peut créer des bosses ;</li><li><b>TIN</b> ou <b>Topo to Raster</b> : adaptés au relief.</li></ul><p>Contrôlez la qualité : calculatrice raster <code>interpolé − MNT</code>, puis regardez la moyenne et l\'écart type de la différence.</p><h3>11. Reclassification</h3><p>Regroupez les altitudes en classes : 0–500 m → 1, 500–750 m → 2, 750–1 000 m → 3, plus de 1 000 m → 4. Le résultat entier permet de calculer la surface de chaque étage.</p><h3>12. Calculatrice raster</h3><p>Elle combine des rasters avec une expression. Exemple : terrain favorable à la construction si pente &lt; 15° <b>et</b> altitude &lt; 800 m.</p>',
      script: '<p>Le script suivant enchaîne une partie des 12 analyses :</p>',
      exercice: '<ol><li>Interpolez les points cotés par IDW et par TIN ; quelle méthode s\'écarte le moins du MNT ?</li><li>Reclassez les altitudes en 4 étages et calculez leur surface en km².</li><li>Produisez la carte « terrain favorable » et ajoutez une contrainte : à plus de 100 m d\'un oued.</li><li>Fiche de synthèse A3 : une vignette pour chacune des 12 analyses, avec titre, légende et source.</li></ol>' },
    quiz: [
      { question: "Avec les réglages habituels d'un ombrage (azimut 315°), d'où vient la lumière ?", choix: ["Du nord-est", "Du nord-ouest", "Du sud", "Du zénith"], bonne: 1, explication: "315° depuis le nord correspond au nord-ouest." },
      { question: "Avec une équidistance de 20 m, quelle condition repère les courbes maîtresses tous les 100 m ?", choix: ["ELEV > 100", "ELEV % 100 = 0", "ELEV = 20", "ELEV / 20 = 5"], bonne: 1, explication: "Le reste de la division par 100 est nul pour 300, 400, 500…" },
      { question: "Une pente de 45° correspond à :", choix: ["45 %", "50 %", "100 %", "90 %"], bonne: 2, explication: "tan(45°) = 1, soit 100 % (1 m de dénivelée pour 1 m horizontal)." },
      { question: "Dans un raster d'exposition, la valeur −1 signifie :", choix: ["Une erreur", "Une zone plate", "Un versant nord", "Une cellule sans donnée"], bonne: 1, explication: "Sans pente, il n'y a pas de direction." },
      { question: "Que faut-il pour calculer une zone visible (viewshed) ?", choix: ["Un MNT et au moins un point d'observation", "Une image satellite", "Le réseau hydrographique", "Une table Excel"], bonne: 0, explication: "On ajoute souvent la hauteur de l'observateur et un rayon maximal." },
      { question: "Où la rugosité du terrain est-elle la plus forte ?", choix: ["Sur un plateau", "Dans une plaine alluviale", "Dans des gorges et sur des crêtes", "Sur un lac"], bonne: 2, explication: "Les écarts d'altitude entre voisines y sont les plus grands." },
      { question: "Quelle méthode d'interpolation ne donne jamais une valeur supérieure au point le plus haut ?", choix: ["IDW", "Spline", "Krigeage universel", "Toutes"], bonne: 0, explication: "IDW est une moyenne pondérée des points mesurés." },
      { question: "Que donne Con((pente < 15) & (mnt < 800), 1, 0) ?", choix: ["1 si la pente OU l'altitude convient", "1 si la pente ET l'altitude conviennent", "La pente moyenne", "Une erreur"], bonne: 1, explication: "& est un ET logique : les deux conditions doivent être vraies." }
    ]
  };

  TXT.en = {
    th: ["Analysis", "Tool", "Where to find it"],
    noms: { ombrage: "1. Hillshade", courbes: "2. Contour lines", profil: "5. Elevation profile", pente: "3. Slope", expo: "4. Aspect", rugo: "9. Terrain ruggedness", visi: "6. Visibility (viewshed)", fill: "7. Fill and flow", bassin: "8. Watersheds", interp: "10. Surface interpolation", reclass: "11. Reclassification", calc: "12. Raster calculator" },
    niveau: { titre: "DEM analyses: the 12 processes", resume: "Hillshade, contours, slope, aspect, profile, visibility, flow, watersheds, ruggedness, interpolation, reclassification and raster calculator on the Tlemcen DEM." },
    l1: { titre: "Reading the relief: hillshade, contours and profile", objectifs: ["Create a hillshade and overlay it on the DEM", "Generate contour lines with index contours", "Draw an elevation profile across the valley"],
      intro: '<p>A <b>DEM</b> (digital elevation model) is a grid in which each cell holds an elevation. The practical DEM (<code>' + MNT + '</code>) covers the fictional Tamda wadi basin: 400 × 400 cells of 50 m, from 279 to 1,190 m, in WGS 1984 UTM zone 30N. The first three analyses help you <b>see</b> the relief.</p>',
      corps: '<h3>1. Hillshade</h3><p>A hillshade simulates sunlight on the relief. Usual settings: <b>azimuth 315°</b> (light from the north-west), <b>altitude 45°</b>, <b>Z factor = 1</b> (the DEM is in metres, like the elevation). Place the hillshade under the coloured DEM and make the DEM 40 % transparent: this is the base of every relief map.</p><h3>2. Contour lines</h3><p>A contour joins points of equal elevation. Choose a <b>20 m interval</b> and an <code>ELEV</code> field. <b>Index contours</b> (every 100 m) are thicker and labelled: filter or category on <code>ELEV % 100 = 0</code> (or <code>MOD(ELEV, 100) = 0</code>). Tight contours mean a steep slope.</p><h3>5. Elevation profile</h3><p>A profile shows the elevation along a line. Draw a line from point A (641,000; 3,846,000) to point B (659,000; 3,834,000), across the wadi valley, then create the graph with the tool in the table.</p>',
      astuce: '<div class="astuce"><b>Remember:</b> if a DEM is in degrees (geographic WGS 1984) and the elevation in metres, hillshade and slope are wrong without a Z factor. Project to UTM first.</div>',
      exercice: '<ol><li>Create the hillshade (315°, 45°) and overlay it on the DEM with a hypsometric colour ramp.</li><li>Generate 20 m contours and show the 100 m index contours in bold with labels.</li><li>Draw the A–B profile: what is the height difference between the valley floor and the highest ridge?</li></ol>' },
    l2: { titre: "Slope, aspect and ruggedness", objectifs: ["Compute slope in degrees and in percent", "Compute and symbolize aspect", "Measure terrain ruggedness"],
      corps: '<h3>3. Slope</h3><p>Slope is the change in elevation between a cell and its neighbours. In <b>degrees</b> (0 to 90°) or <b>percent</b> (45° = 100 %). Useful classes: 0–3° flat, 3–8° gentle, 8–15° moderate, 15–30° steep, over 30° very steep. It is used for hazards (landslides, fires), planning and farming.</p><h3>4. Aspect</h3><p>Aspect gives the direction the slope faces, from 0 to 360° from north (90° = east, 180° = south). Flat areas get <b>−1</b>. Symbolize in 8 classes (N, NE, E, SE, S, SW, W, NW) with a circular colour ramp. South-facing slopes are hotter and drier.</p><h3>9. Terrain ruggedness</h3><p>Ruggedness measures how uneven the relief is around each cell. The <b>TRI</b> (Terrain Ruggedness Index) averages the elevation differences with the 8 neighbours; the <b>standard deviation of elevation</b> in a 3 × 3 window gives a similar measure. Low value: plateau or plain; high value: gorges, ridges, cliffs.</p>',
      astuce: '<div class="astuce"><b>Good habit:</b> compare slope and ruggedness. A regular hillside has a steep slope but low ruggedness; a ravine has both high.</div>',
      exercice: '<ol><li>Compute the slope in degrees and classify it into 5 classes. What area is steeper than 30°?</li><li>Compute aspect and count the share of south-facing slopes (135–225°).</li><li>Compute ruggedness and find the three most rugged sectors.</li></ol>' },
    l3: { titre: "Visibility, flow and watersheds", objectifs: ["Compute the area visible from an observation point", "Link the hydrological DEM analyses to the Hydrology level"],
      corps: '<h3>6. Visibility (viewshed)</h3><p>A viewshed computes the cells visible from one or more observation points. Uses: placing a forest-fire <b>lookout tower</b> or an antenna, or assessing the visual impact of a project.</p><ol><li>Create a point layer <code>Tour_guet</code> with the summit X = 645,075, Y = 3,846,575 (1,190 m).</li><li>Observer height: <b>15 m</b> (a tower), maximum radius: <b>10 km</b>.</li><li>Run the tool in the table: 1 = visible, 0 = hidden.</li></ol><h3>7. Fill and flow</h3><p><b>Fill</b> removes the sinks of the DEM, then <b>flow direction</b> (D8) and <b>flow accumulation</b> give the path of water and the stream network.</p><h3>8. Watersheds</h3><p>From an outlet snapped onto the network, the tool delineates the whole area that drains to that point.</p>',
      astuce: '<div class="astuce"><b>Going further:</b> analyses 7 and 8 are explained step by step, with the Tamda wadi practical, in the <b>Hydrology</b> level of the course (link below).</div>',
      exercice: '<ol><li>Compute the area visible from the lookout tower. What share of the forest (<code>Occupation_sol</code>) is visible?</li><li>Try an observer height of 5 m then 30 m: how does the visible area change?</li><li>Quickly redo Fill, flow and watershed, then overlay the watershed on the visible area.</li></ol>' },
    l4: { titre: "Interpolation, reclassification and raster calculator", objectifs: ["Build a DEM from spot heights and measure the error", "Group elevations into classes", "Combine several rasters with an expression"],
      corps: '<h3>10. Surface interpolation</h3><p>The file <code>TP\\Tables\\points_cotes.csv</code> holds 250 spot heights (X; Y; Z in WGS 1984 UTM 30N, semicolon separator). Create the point layer, then interpolate a 50 m surface:</p><ul><li><b>IDW</b> (inverse distance weighting): simple, never exceeds the measured values;</li><li><b>Spline</b>: smooth surface, can create bumps;</li><li><b>TIN</b> or <b>Topo to Raster</b>: suited to relief.</li></ul><p>Check the quality: raster calculator <code>interpolated − DEM</code>, then look at the mean and standard deviation of the difference.</p><h3>11. Reclassification</h3><p>Group the elevations into classes: 0–500 m → 1, 500–750 m → 2, 750–1,000 m → 3, over 1,000 m → 4. The integer result lets you compute the area of each belt.</p><h3>12. Raster calculator</h3><p>It combines rasters with an expression. Example: land suitable for building if slope &lt; 15° <b>and</b> elevation &lt; 800 m.</p>',
      script: '<p>The following script chains part of the 12 analyses:</p>',
      exercice: '<ol><li>Interpolate the spot heights with IDW and TIN; which method departs least from the DEM?</li><li>Reclassify elevations into 4 belts and compute their area in km².</li><li>Produce the “suitable land” map and add a constraint: more than 100 m from a wadi.</li><li>A3 summary sheet: one thumbnail for each of the 12 analyses, with title, legend and source.</li></ol>' },
    quiz: [
      { question: "With the usual hillshade settings (azimuth 315°), where does the light come from?", choix: ["The north-east", "The north-west", "The south", "Straight above"], explication: "315° from north is the north-west." },
      { question: "With a 20 m interval, which condition picks out the index contours every 100 m?", choix: ["ELEV > 100", "ELEV % 100 = 0", "ELEV = 20", "ELEV / 20 = 5"], explication: "The remainder of the division by 100 is zero for 300, 400, 500…" },
      { question: "A 45° slope equals:", choix: ["45 %", "50 %", "100 %", "90 %"], explication: "tan(45°) = 1, i.e. 100 % (1 m of rise per 1 m horizontally)." },
      { question: "In an aspect raster, the value −1 means:", choix: ["An error", "A flat area", "A north-facing slope", "A cell with no data"], explication: "Without slope, there is no direction." },
      { question: "What do you need to compute a viewshed?", choix: ["A DEM and at least one observation point", "A satellite image", "The stream network", "An Excel table"], explication: "You often add the observer height and a maximum radius." },
      { question: "Where is terrain ruggedness highest?", choix: ["On a plateau", "In an alluvial plain", "In gorges and on ridges", "On a lake"], explication: "Elevation differences between neighbouring cells are largest there." },
      { question: "Which interpolation method never gives a value above the highest point?", choix: ["IDW", "Spline", "Universal kriging", "All of them"], explication: "IDW is a weighted average of the measured points." },
      { question: "What does Con((pente < 15) & (mnt < 800), 1, 0) give?", choix: ["1 if slope OR elevation is suitable", "1 if slope AND elevation are suitable", "The mean slope", "An error"], explication: "& is a logical AND: both conditions must be true." }
    ]
  };

  TXT.ar = {
    th: ["التحليل", "الأداة", "مكانها"],
    noms: { ombrage: "1. خريطة الظلال", courbes: "2. خطوط الكنتور", profil: "5. المقطع الطولي للارتفاع", pente: "3. الانحدار", expo: "4. اتجاه المنحدرات", rugo: "9. وعورة التضاريس", visi: "6. تحليل مدى الرؤية (Viewshed)", fill: "7. الملء والجريان", bassin: "8. الأحواض المائية", interp: "10. الاستيفاء السطحي", reclass: "11. إعادة التصنيف", calc: "12. حاسبة الشبكة (Raster Calculator)" },
    niveau: { titre: "تحليلات نموذج الارتفاع الرقمي: المعالجات الاثنتا عشرة", resume: "الظلال، خطوط الكنتور، الانحدار، الاتجاه، المقطع، مدى الرؤية، الجريان، الأحواض المائية، الوعورة، الاستيفاء، إعادة التصنيف وحاسبة الشبكة على نموذج الارتفاع الرقمي لتلمسان." },
    l1: { titre: "قراءة التضاريس: الظلال وخطوط الكنتور والمقطع", objectifs: ["إنشاء خريطة ظلال وتركيبها فوق نموذج الارتفاع", "توليد خطوط الكنتور مع الخطوط الرئيسية", "رسم مقطع ارتفاع عبر الوادي"],
      intro: '<p><b>نموذج الارتفاع الرقمي</b> (MNT/DEM) شبكة تحمل كل خلية فيها قيمة ارتفاع. نموذج التطبيق (<code>' + MNT + '</code>) يغطي الحوض الافتراضي لوادي تامدة: 400 × 400 خلية بحجم 50 م، من 279 إلى 1190 م، بنظام WGS 1984 UTM المنطقة 30N. التحليلات الثلاثة الأولى تساعد على <b>رؤية</b> التضاريس.</p>',
      corps: '<h3>1. خريطة الظلال</h3><p>تحاكي خريطة الظلال إضاءة الشمس للتضاريس. الإعدادات المعتادة: <b>السمت 315°</b> (ضوء من الشمال الغربي)، <b>الارتفاع 45°</b>، <b>معامل Z = 1</b> (النموذج بالأمتار مثل الارتفاع). ضع الظلال تحت النموذج الملوّن واجعل شفافية النموذج 40 %: هذه أساس كل خريطة تضاريس.</p><h3>2. خطوط الكنتور</h3><p>يربط خط الكنتور النقاط ذات الارتفاع نفسه. اختر <b>فاصلًا رأسيًا 20 م</b> وحقلًا <code>ELEV</code>. <b>الخطوط الرئيسية</b> (كل 100 م) أسمك وتحمل تسميات: تصفية أو فئة على <code>ELEV % 100 = 0</code> (أو <code>MOD(ELEV, 100) = 0</code>). تقارب الخطوط يدل على انحدار شديد.</p><h3>5. المقطع الطولي للارتفاع</h3><p>يبيّن المقطع الارتفاع على طول خط. ارسم خطًا من النقطة A ‏(641000 ؛ 3846000) إلى النقطة B ‏(659000 ؛ 3834000) يعبر وادي تامدة، ثم أنشئ الرسم البياني بالأداة المذكورة في الجدول.</p>',
      astuce: '<div class="astuce"><b>تذكّر:</b> إذا كان النموذج بالدرجات (WGS 1984 جغرافي) والارتفاع بالأمتار، تكون الظلال والانحدار خاطئة دون معامل Z. أسقط النموذج إلى UTM أولًا.</div>',
      exercice: '<ol><li>أنشئ خريطة الظلال (315°، 45°) وركّبها تحت النموذج بتدرج ألوان الارتفاع.</li><li>ولّد خطوط الكنتور كل 20 م، واعرض الخطوط الرئيسية كل 100 م بخط عريض مع التسميات.</li><li>ارسم المقطع A–B: ما فرق الارتفاع بين قاع الوادي وأعلى خط قمم؟</li></ol>' },
    l2: { titre: "الانحدار والاتجاه والوعورة", objectifs: ["حساب الانحدار بالدرجات وبالنسبة المئوية", "حساب اتجاه المنحدرات وترميزه", "قياس وعورة التضاريس"],
      corps: '<h3>3. الانحدار</h3><p>الانحدار هو تغيّر الارتفاع بين الخلية وجيرانها. يُعبَّر عنه <b>بالدرجات</b> (0 إلى 90°) أو <b>بالنسبة المئوية</b> (45° = 100 %). فئات مفيدة: 0–3° مستوٍ، 3–8° خفيف، 8–15° متوسط، 15–30° شديد، أكثر من 30° شديد جدًا. يُستعمل في دراسة الأخطار (الانزلاقات، الحرائق) والتهيئة والزراعة.</p><h3>4. اتجاه المنحدرات</h3><p>يعطي الاتجاه الجهة التي يواجهها المنحدر، من 0 إلى 360° انطلاقًا من الشمال (90° = شرق، 180° = جنوب). تأخذ المناطق المستوية القيمة <b>−1</b>. رمّز في 8 فئات (ش، ش ق، ق، ج ق، ج، ج غ، غ، ش غ) بتدرج ألوان دائري. المنحدرات الجنوبية أكثر حرارة وجفافًا.</p><h3>9. وعورة التضاريس</h3><p>تقيس الوعورة مدى تضرّس التضاريس حول كل خلية. يحسب مؤشر <b>TRI</b> (Terrain Ruggedness Index) متوسط فروق الارتفاع مع الخلايا الثماني المجاورة؛ ويعطي <b>الانحراف المعياري للارتفاع</b> في نافذة 3 × 3 خلايا مقياسًا قريبًا. قيمة ضعيفة: هضبة أو سهل؛ قيمة قوية: خوانق وقمم وجروف.</p>',
      astuce: '<div class="astuce"><b>عادة جيدة:</b> قارن الانحدار بالوعورة. السفح المنتظم انحداره شديد ووعورته ضعيفة؛ أما الأخدود فالاثنان فيه قويان.</div>',
      exercice: '<ol><li>احسب الانحدار بالدرجات وصنّفه في 5 فئات. ما المساحة التي يتجاوز انحدارها 30°؟</li><li>احسب الاتجاه وعُدّ نسبة المنحدرات الجنوبية (135–225°).</li><li>احسب الوعورة وحدّد القطاعات الثلاثة الأكثر وعورة.</li></ol>' },
    l3: { titre: "مدى الرؤية والجريان والأحواض المائية", objectifs: ["حساب المنطقة المرئية من نقطة مراقبة", "ربط التحليلات الهيدرولوجية بمستوى الهيدرولوجيا"],
      corps: '<h3>6. تحليل مدى الرؤية (Viewshed)</h3><p>يحسب هذا التحليل الخلايا المرئية من نقطة مراقبة أو أكثر. أمثلة الاستعمال: اختيار موقع <b>برج مراقبة</b> لحرائق الغابات أو هوائي، أو تقييم الأثر البصري لمشروع.</p><ol><li>أنشئ طبقة نقاط <code>Tour_guet</code> تضم القمة X = 645075، Y = 3846575 ‏(1190 م).</li><li>ارتفاع المراقب: <b>15 م</b> (برج)، أقصى مسافة: <b>10 كم</b>.</li><li>شغّل الأداة المذكورة في الجدول: 1 = مرئي، 0 = محجوب.</li></ol><h3>7. الملء والجريان</h3><p>تزيل أداة <b>Fill</b> المنخفضات المغلقة من النموذج، ثم يعطي <b>اتجاه الجريان</b> (D8) و<b>تراكم الجريان</b> مسار المياه والشبكة الهيدروغرافية.</p><h3>8. الأحواض المائية</h3><p>انطلاقًا من مخرج مثبّت على الشبكة، تحدّد الأداة كل المساحة التي تصرف مياهها نحو هذه النقطة.</p>',
      astuce: '<div class="astuce"><b>للتعمق:</b> التحليلان 7 و8 مشروحان خطوة بخطوة، مع تطبيق وادي تامدة، في مستوى <b>الهيدرولوجيا</b> من هذا المسار (الرابط أدناه).</div>',
      exercice: '<ol><li>احسب المنطقة المرئية من برج المراقبة. ما نسبة الغابة (<code>Occupation_sol</code>) المرئية؟</li><li>جرّب ارتفاع 5 م ثم 30 م: كيف تتغير المساحة المرئية؟</li><li>أعد بسرعة الملء والجريان والحوض المائي، ثم ركّب الحوض فوق المنطقة المرئية.</li></ol>' },
    l4: { titre: "الاستيفاء وإعادة التصنيف وحاسبة الشبكة", objectifs: ["إنشاء نموذج ارتفاع من نقاط مُعلَّمة وقياس الخطأ", "تجميع قيم الارتفاع في فئات", "دمج عدة شبكات بتعبير حسابي"],
      corps: '<h3>10. الاستيفاء السطحي</h3><p>يحتوي الملف <code>TP\\Tables\\points_cotes.csv</code> على 250 نقطة ارتفاع (X ؛ Y ؛ Z بنظام WGS 1984 UTM 30N، والفاصل فاصلة منقوطة). أنشئ طبقة النقاط ثم استوفِ سطحًا بدقة 50 م:</p><ul><li><b>IDW</b> (الترجيح بمقلوب المسافة): بسيط ولا يتجاوز أبدًا القيم المقيسة؛</li><li><b>Spline</b>: سطح أملس قد يُنشئ نتوءات؛</li><li><b>TIN</b> أو <b>Topo to Raster</b>: مناسبان للتضاريس.</li></ul><p>تحقق من الجودة: حاسبة الشبكة <code>السطح المستوفى − النموذج</code>، ثم انظر إلى متوسط الفرق وانحرافه المعياري.</p><h3>11. إعادة التصنيف</h3><p>جمّع الارتفاعات في فئات: 0–500 م ← 1، 500–750 م ← 2، 750–1000 م ← 3، أكثر من 1000 م ← 4. تسمح النتيجة الصحيحة بحساب مساحة كل نطاق.</p><h3>12. حاسبة الشبكة</h3><p>تدمج الشبكات بتعبير حسابي. مثال: أرض مناسبة للبناء إذا كان الانحدار &lt; 15° <b>و</b>الارتفاع &lt; 800 م.</p>',
      script: '<p>يسلسل البرنامج التالي جزءًا من التحليلات الاثني عشر:</p>',
      exercice: '<ol><li>استوفِ نقاط الارتفاع بطريقتي IDW وTIN؛ أي طريقة تبتعد أقل عن النموذج؟</li><li>أعد تصنيف الارتفاعات في 4 نطاقات واحسب مساحتها بالكم².</li><li>أنتج خريطة «الأرض المناسبة» وأضف شرطًا: أكثر من 100 م عن الوادي.</li><li>بطاقة تلخيصية A3: صورة مصغرة لكل تحليل من التحليلات الاثني عشر، مع العنوان والمفتاح والمصدر.</li></ol>' },
    quiz: [
      { question: "بالإعدادات المعتادة لخريطة الظلال (السمت 315°)، من أين يأتي الضوء؟", choix: ["من الشمال الشرقي", "من الشمال الغربي", "من الجنوب", "من السمت العمودي"], explication: "315° انطلاقًا من الشمال تعني الشمال الغربي." },
      { question: "بفاصل 20 م، أي شرط يحدد الخطوط الرئيسية كل 100 م؟", choix: ["ELEV > 100", "ELEV % 100 = 0", "ELEV = 20", "ELEV / 20 = 5"], explication: "باقي القسمة على 100 يساوي صفرًا لـ 300 و400 و500…" },
      { question: "انحدار 45° يساوي:", choix: ["45 %", "50 %", "100 %", "90 %"], explication: "ظا(45°) = 1، أي 100 % (متر ارتفاع لكل متر أفقي)." },
      { question: "في شبكة الاتجاه، القيمة −1 تعني:", choix: ["خطأ", "منطقة مستوية", "منحدرًا شماليًا", "خلية بلا بيانات"], explication: "لا اتجاه دون انحدار." },
      { question: "ماذا تحتاج لحساب مدى الرؤية؟", choix: ["نموذج ارتفاع ونقطة مراقبة واحدة على الأقل", "صورة فضائية", "الشبكة الهيدروغرافية", "جدول Excel"], explication: "يُضاف غالبًا ارتفاع المراقب وأقصى مسافة." },
      { question: "أين تكون وعورة التضاريس أقوى؟", choix: ["على هضبة", "في سهل فيضي", "في الخوانق وعلى القمم", "على بحيرة"], explication: "فروق الارتفاع بين الخلايا المتجاورة هي الأكبر هناك." },
      { question: "أي طريقة استيفاء لا تعطي أبدًا قيمة أعلى من أعلى نقطة؟", choix: ["IDW", "Spline", "الكريجينغ الشامل", "جميعها"], explication: "IDW متوسط مرجّح للنقاط المقيسة." },
      { question: "ماذا يعطي Con((pente < 15) & (mnt < 800), 1, 0)؟", choix: ["1 إذا ناسب الانحدار أو الارتفاع", "1 إذا ناسب الانحدار والارتفاع معًا", "متوسط الانحدار", "خطأ"], explication: "& تعني «و» المنطقية: يجب أن يتحقق الشرطان." }
    ]
  };

  TXT.ber = {
    th: ["Tasleḍt", "Afecku", "Anda ara t-tafeḍ"],
    noms: { ombrage: "1. Tili (hillshade)", courbes: "2. Izirigen n tɣezzi", profil: "5. Agnu n tɣezzi", pente: "3. Asawen", expo: "4. Udem n usawen", rugo: "9. Taqseḥ n wakal", visi: "6. Timeẓri (viewshed)", fill: "7. Aččar d usuraf", bassin: "8. Imdanen n yisaffen", interp: "10. Asemlil n wudem", reclass: "11. Asmizzwer amaynut", calc: "12. Raster Calculator" },
    niveau: { titre: "Tiselḍiwin n MNT: 12 n yisesfar", resume: "Tili, izirigen n tɣezzi, asawen, udem n usawen, agnu, timeẓri, asuraf, imdanen n yisaffen, taqseḥ, asemlil, asmizzwer amaynut d Raster Calculator ɣef MNT n Tlemsan." },
    l1: { titre: "Ɣer assaɣ: tili, izirigen n tɣezzi d ugnu", objectifs: ["Snulfu-d tili syen sers-it ɣef MNT", "Snulfu-d izirigen n tɣezzi s yizirigen igejdanen", "Suneɣ agnu n tɣezzi i yettɛeddin deg yiɣzer"],
      intro: '<p><b>MNT</b> (tamudemt tumḍint n wassaɣ) d aẓeṭṭa anda yal taxxamt tesɛa tiɣezzi. MNT n umahil (<code>' + MNT + '</code>) yeččur amdan asugan n wasif n Tamda: 400 × 400 n texxamin n 50 m, seg 279 ar 1 190 m, s WGS 1984 UTM tamnaḍt 30N. Kraḍ n tselḍiwin timezwura ttɛawant ad <b>twaliḍ</b> assaɣ.</p>',
      corps: '<h3>1. Tili</h3><p>Tili yettak-d tugna n tafat n yiṭij ɣef wassaɣ. Iɣewwaren yeṭṭuqten: <b>azimut 315°</b> (tafat seg ugafa-lɣerb), <b>tiɣezzi 45°</b>, <b>amḍan Z = 1</b> (MNT s yimitren, am tɣezzi). Sers tili ddaw MNT yettwasɣeṛsen syen err MNT s 40 % n tafrawant: d tazwara n yal takarḍa n wassaɣ.</p><h3>2. Izirigen n tɣezzi</h3><p>Azirig yesseqqan tinqiḍin s yiwet n tɣezzi. Fren <b>ameccaq n 20 m</b> d urti <code>ELEV</code>. <b>Izirigen igejdanen</b> (yal 100 m) zuren ugar u sɛan tibzimin: amsizdeg neɣ taggayt ɣef <code>ELEV % 100 = 0</code> (neɣ <code>MOD(ELEV, 100) = 0</code>). Izirigen yemqarben = asawen uɛer.</p><h3>5. Agnu n tɣezzi</h3><p>Agnu yesskan tiɣezzi ɣef teɣzi n yizirig. Suneɣ azirig seg tenqiḍt A (641 000 ; 3 846 000) ar tenqiḍt B (659 000 ; 3 834 000), i yettɛeddin deg yiɣzer n wasif, syen snulfu-d adiagram s ufecku n tfelwit.</p>',
      astuce: '<div class="astuce"><b>Cfu:</b> ma yella MNT s tseggiwin (WGS 1984 amaḍalan) u tiɣezzi s yimitren, tili d usawen d awezzaɣen war amḍan Z. Snefḍ di tazwara ɣer UTM.</div>',
      exercice: '<ol><li>Snulfu-d tili (315°, 45°) syen sers-it ddaw MNT s yiniten n tɣezzi.</li><li>Snulfu-d izirigen s 20 m, sken igejdanen yal 100 m s uzuran d tbzimin.</li><li>Suneɣ agnu A–B: acḥal i d amgired n tɣezzi gar wadda n yiɣzer d uqerru ufellay?</li></ol>' },
    l2: { titre: "Asawen, udem n usawen d teqseḥ", objectifs: ["Siḍen asawen s tseggiwin d ufmiḍi", "Siḍen syen sekken udem n usawen", "Ktil taqseḥ n wakal"],
      corps: '<h3>3. Asawen</h3><p>Asawen d abeddel n tɣezzi gar texxamt d yimdukal-is. S <b>tseggiwin</b> (0 ar 90°) neɣ s <b>ufmiḍi</b> (45° = 100 %). Taggayin ilaqen: 0–3° d awessu, 3–8° afessas, 8–15° alemmas, 15–30° uɛer, ugar n 30° uɛer aṭas. Yettwasqedac i yiɣilifen (aɣelluy n wakal, times), i usɣiwes d tkerza.</p><h3>4. Udem n usawen</h3><p>Udem yettak-d tanila ɣer i yettmuqul usawen, seg 0 ar 360° seg ugafa (90° = asammar, 180° = anẓul). Timnaḍin n wussu ttawint <b>−1</b>. Sekken s 8 n taggayin (N, NE, E, SE, S, SW, W, NW) s tsuḍeft n yiniten tawinest. Isawen n unẓul ḥman u qquren ugar.</p><h3>9. Taqseḥ n wakal</h3><p>Taqseḥ tettaktal acḥal i yeqseḥ wassaɣ deg tama n yal taxxamt. Amatar <b>TRI</b> (Terrain Ruggedness Index) yettak-d talemmast n yimgiraden n tɣezzi d 8 n yimdukal; <b>tasfift tamagnut n tɣezzi</b> deg usfaylu n 3 × 3 n texxamin tettak-d aktili i yqerben. Azal drus: aɣerdaz neɣ uzaɣar; azal meqqer: iɣezran, iqerra, iẓra uɛren.</p>',
      astuce: '<div class="astuce"><b>Tannumi yelhan:</b> serwes asawen d teqseḥ. Asawen yemsawan yesɛa asawen uɛer maca taqseḥ drus; aɣzer yesɛa sin-nsen meqqren.</div>',
      exercice: '<ol><li>Siḍen asawen s tseggiwin syen bḍu-t ɣef 5 n taggayin. Acḥal n tiɣzi i yugaren 30°?</li><li>Siḍen udem n usawen syen siḍen aḥric n yisawen n unẓul (135–225°).</li><li>Siḍen taqseḥ syen af-d kraḍ n yiḥricen yeqseḥen ugar.</li></ol>' },
    l3: { titre: "Timeẓri, asuraf d yimdanen n yisaffen", objectifs: ["Siḍen tamnaḍt i d-yettbanen seg tenqiḍt n tɛessast", "Qqen tiselḍiwin n waman n MNT ɣer uswir n tesnamant"],
      corps: '<h3>6. Timeẓri (viewshed)</h3><p>Viewshed yessiḍen tixxamin i d-yettbanen seg yiwet neɣ aṭas n tinqiḍin n tɛessast. Iseqdacen: afran n wadeg n <b>uɣerfi n tɛessast</b> mgal times n tizgwa neɣ n tentina, neɣ asezmel n usemdu udlifan n usenfar.</p><ol><li>Snulfu-d tissi n tinqiḍin <code>Tour_guet</code> s uqerru X = 645 075, Y = 3 846 575 (1 190 m).</li><li>Tiɣezzi n umɛessas: <b>15 m</b> (aɣerfi), azgen ameqqran: <b>10 km</b>.</li><li>Selkem afecku n tfelwit: 1 = yettban, 0 = yeffer.</li></ol><h3>7. Aččar d usuraf</h3><p><b>Fill</b> yekkes tiferkiwin n MNT, syen <b>tanila n usuraf</b> (D8) d <b>usmuzzer</b> ttaken-d abrid n waman d uẓeṭṭa n yisaffen.</p><h3>8. Imdanen n yisaffen</h3><p>Seg tewwurt yeqqnen ɣer uẓeṭṭa, afecku yessefraz tiɣzi akk i yettazzalen ɣer tenqiḍt-a.</p>',
      astuce: '<div class="astuce"><b>I wugar:</b> tiselḍiwin 7 d 8 ttwaglment s tikli s tikli, s umahil n wasif n Tamda, deg uswir n <b>tesnamant</b> n ubrid (aseɣwen ddaw).</div>',
      exercice: '<ol><li>Siḍen tamnaḍt i d-yettbanen seg uɣerfi n tɛessast. Acḥal seg teẓgi (<code>Occupation_sol</code>) i d-yettbanen?</li><li>Ɛreḍ tiɣezzi n 5 m syen 30 m: amek i tettbeddil tiɣzi i d-yettbanen?</li><li>Ales s tɣawla Fill, asuraf d umdan n wasif, syen sers amdan ɣef temnaḍt i d-yettbanen.</li></ol>' },
    l4: { titre: "Asemlil, asmizzwer amaynut d Raster Calculator", objectifs: ["Bnu MNT seg tinqiḍin s tɣezzi syen ktil tuccḍa", "Sdukkel tiɣezziwin deg taggayin", "Sdukkel aṭas n raster s tenfalit"],
      corps: '<h3>10. Asemlil n wudem</h3><p>Afaylu <code>TP\\Tables\\points_cotes.csv</code> yesɛa 250 n tinqiḍin s tɣezzi (X ; Y ; Z s WGS 1984 UTM 30N, amseggay d tqqaṛet tazelmeḍt « ; »). Snulfu-d tissi n tinqiḍin, syen semlil udem s 50 m:</p><ul><li><b>IDW</b> (taẓayt s umeccaq amegzul): fessus, ur yettɛeddi ara werǧin azalen yettwaktalen;</li><li><b>Spline</b>: udem yelles, yezmer ad d-yesnulfu tiɛeqqrin;</li><li><b>TIN</b> neɣ <b>Topo to Raster</b>: iwulmen i wassaɣ.</li></ul><p>Senqed taɣara: Raster Calculator <code>yettwasemlel − MNT</code>, syen ɣer talemmast d tsfift tamagnut n umgired.</p><h3>11. Asmizzwer amaynut</h3><p>Sdukkel tiɣezziwin deg taggayin: 0–500 m → 1, 500–750 m → 2, 750–1 000 m → 3, ugar n 1 000 m → 4. Agmuḍ s yimḍanen imeddanen yettaǧǧa ad tsiḍneḍ tiɣzi n yal aswir.</p><h3>12. Raster Calculator</h3><p>Yesdukkul raster s tenfalit. Amedya: akal yelhan i lebni ma yella usawen &lt; 15° <b>u</b> tiɣezzi &lt; 800 m.</p>',
      script: '<p>Askript-a yessemsal aḥric seg 12 n tselḍiwin:</p>',
      exercice: '<ol><li>Semlil tinqiḍin s IDW d TIN; anta tarrayt i yeqqimen qrib ugar ɣer MNT?</li><li>Ales asmizzwer n tɣezziwin ɣer 4 n yiswiren syen siḍen tiɣzi-nsen s km².</li><li>Snulfu-d takarḍa « akal yelhan » syen rnu tawtilt: ugar n 100 m seg wasif.</li><li>Tawriqt n ugzul A3: tugna tamecṭuḥt i yal yiwet seg 12 n tselḍiwin, s uzwel, legend d uɣbalu.</li></ol>' },
    quiz: [
      { question: "S yiɣewwaren yeṭṭuqten n tili (azimut 315°), seg anida i d-tettas tafat?", choix: ["Seg ugafa-asammar", "Seg ugafa-lɣerb", "Seg unẓul", "Seg ufella srid"], explication: "315° seg ugafa d agafa-lɣerb." },
      { question: "S umeccaq n 20 m, anta tawtilt i d-yettafen izirigen igejdanen yal 100 m?", choix: ["ELEV > 100", "ELEV % 100 = 0", "ELEV = 20", "ELEV / 20 = 5"], explication: "Ayen yeqqimen deg ubḍu ɣef 100 d ilem i 300, 400, 500…" },
      { question: "Asawen n 45° yemṣada d:", choix: ["45 %", "50 %", "100 %", "90 %"], explication: "tan(45°) = 1, ihi 100 % (1 m n tɣezzi i 1 m s wudem aglawan)." },
      { question: "Deg raster n udem n usawen, azal −1 yemmal-d:", choix: ["Tuccḍa", "Tamnaḍt n wussu", "Asawen n ugafa", "Taxxamt war isefka"], explication: "War asawen, ulac tanila." },
      { question: "D acu i tesriḍ akken ad tsiḍneḍ viewshed?", choix: ["MNT d yiwet n tenqiḍt n tɛessast ma drus", "Tugna n usatellit", "Aẓeṭṭa n yisaffen", "Tafelwit Excel"], explication: "S waṭas nettarnu tiɣezzi n umɛessas d uzgen ameqqran." },
      { question: "Anda i tella teqseḥ n wakal tameqqrant?", choix: ["Ɣef uɣerdaz", "Deg uzaɣar n yisaffen", "Deg yiɣezran d yiqerra", "Ɣef tamda"], explication: "Imgiraden n tɣezzi gar yimdukal d imeqqranen dinna." },
      { question: "Anta tarrayt n usemlil ur d-tettak ara werǧin azal nnig tenqiḍt tufellayt?", choix: ["IDW", "Spline", "Kriging amatu", "Akk"], explication: "IDW d talemmast s taẓayt n tinqiḍin yettwaktalen." },
      { question: "D acu i d-yettak Con((pente < 15) & (mnt < 800), 1, 0)?", choix: ["1 ma yella usawen NEƔ tiɣezzi yelha", "1 ma yella usawen D tɣezzi lhan", "Asawen alemmas", "Tuccḍa"], explication: "& d « u » ameẓlu: snat n twtilin ilaq ad tilint d tidet." }
    ]
  };

  /* ---------- Construction ---------- */
  var LECONS = [
    { cle: "l1", duree: "35 min", analyses: ["ombrage", "courbes", "profil"] },
    { cle: "l2", duree: "35 min", analyses: ["pente", "expo", "rugo"] },
    { cle: "l3", duree: "40 min", analyses: ["visi", "fill", "bassin"] },
    { cle: "l4", duree: "45 min", analyses: ["interp", "reclass", "calc"] }
  ];

  function tableau(t, outils, cles) {
    var h = '<table class="tab"><tr><th>' + t.th[0] + '</th><th>' + t.th[1] + '</th><th>' + t.th[2] + '</th></tr>';
    cles.forEach(function (k) { h += '<tr><td>' + t.noms[k] + '</td><td><b>' + outils[k][0] + '</b></td><td><i>' + outils[k][1].replace(/>/g, "&gt;") + '</i></td></tr>'; });
    return h + '</table>';
  }

  function lienHydro(lang, log) {
    var lib = { fr: "Niveau Hydrologie", en: "Hydrology level", ar: "مستوى الهيدرولوجيا", ber: "Aswir n tesnamant" }[lang];
    return '<p><a class="btn" href="#' + log.hydro + '">' + lib + '</a></p>';
  }

  function contenu(lang, logCle, L) {
    var t = TXT[lang], log = LOG[logCle], x = t[L.cle];
    var h = (x.intro || "") + tableau(t, OUTILS[logCle], L.analyses) + x.corps + (x.astuce || "");
    if (L.cle === "l3") h += lienHydro(lang, log);
    if (L.cle === "l4") h += x.script + log.code;
    return h;
  }

  Object.keys(LOG).forEach(function (logCle) {
    var log = LOG[logCle], c = window[log.cours];
    if (!c || !c.niveaux) return;
    var fr = TXT.fr;
    if (!c.niveaux.some(function (n) { return n.id === log.id; })) {
      c.niveaux.push({
        id: log.id, numero: log.numero, titre: fr.niveau.titre, echelle: "1:25 000", resume: fr.niveau.resume,
        lecons: LECONS.map(function (L, i) {
          return { id: log.id + "-l" + (i + 1), titre: fr[L.cle].titre, duree: L.duree, objectifs: fr[L.cle].objectifs,
                   contenu: contenu("fr", logCle, L), exercice: fr[L.cle].exercice };
        }),
        quiz: fr.quiz
      });
    }
    ["en", "ar", "ber"].forEach(function (lang) {
      window.TRAD = window.TRAD || {};
      var D = window.TRAD[lang] = window.TRAD[lang] || {}, t = TXT[lang];
      D[log.id] = { titre: t.niveau.titre, resume: t.niveau.resume, quiz: t.quiz };
      LECONS.forEach(function (L, i) {
        D[log.id + "-l" + (i + 1)] = { titre: t[L.cle].titre, objectifs: t[L.cle].objectifs, contenu: contenu(lang, logCle, L), exercice: t[L.cle].exercice };
      });
    });
  });
})();
