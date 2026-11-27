/*
 * CONTENU PÉDAGOGIQUE — Parcours Python, télédétection et apprentissage automatique
 * ------------------------------------------------------------------
 * Même structure que cours.js (ArcMap). Identifiants : t1…t8, leçons t1-l1…
 * Outils 100 % gratuits : Python 3, conda (Miniforge), JupyterLab ou Google Colab,
 * NumPy, pandas, GeoPandas, rasterio, scikit-learn, matplotlib.
 * Données de TP FICTIVES : C:\ENIV\TP (Shapefiles, MNT, Risques) et C:\ENIV\TP\Teledetection.
 */
window.COURS_PYTHON = {
  cle: "python",
  nom: "Python et télédétection",
  court: "Python",
  logiciel: "Python 3 (gratuit) : JupyterLab ou Google Colab",
  recherche: "Python télédétection",
  accroche: "Python, télédétection et apprentissage automatique (machine learning)",
  lead: "Programmer ses propres traitements avec des outils 100 % gratuits : bases de Python, données vecteur avec GeoPandas, rasters avec rasterio, principes de la télédétection, indices spectraux (NDVI, NDWI, NBR), détection d'une zone incendiée, puis classification d'images par apprentissage automatique (K-means, Random Forest, SVM), évaluation des cartes et projet de susceptibilité aux glissements. Images satellite fictives de type Sentinel-2 sur le bassin de l'oued Tamda.",
  titre: "Python, télédétection et machine learning",
  niveaux: [
    /* ============================================================ */
    {
      id: "t1",
      numero: 1,
      titre: "Python pour la géomatique",
      echelle: "1:1 000 000",
      resume: "Installer un environnement gratuit, les bases du langage, puis NumPy, pandas et matplotlib.",
      lecons: [
        {
          id: "t1-l1",
          titre: "Installer un environnement Python gratuit",
          duree: "30 min",
          objectifs: [
            "Choisir entre une installation locale (Miniforge) et Google Colab",
            "Créer l'environnement eniv avec les bibliothèques géospatiales",
            "Lancer JupyterLab et exécuter une première cellule"
          ],
          contenu: `
<p>Python est un langage <b>libre et gratuit</b>, utilisé par ArcGIS (arcpy), QGIS (PyQGIS) et par toute la communauté de la télédétection. Dans ce parcours, on l'utilise <b>seul</b>, sans logiciel SIG, avec des bibliothèques spécialisées.</p>
<table class="tab">
  <tr><th>Bibliothèque</th><th>Rôle</th><th>Équivalent SIG</th></tr>
  <tr><td><b>NumPy</b></td><td>tableaux de nombres, calcul sur les pixels</td><td>Calculatrice raster</td></tr>
  <tr><td><b>pandas</b></td><td>tables (CSV, Excel)</td><td>Table attributaire</td></tr>
  <tr><td><b>GeoPandas</b></td><td>couches vecteur (shapefile, GeoPackage)</td><td>Outils d'analyse vecteur</td></tr>
  <tr><td><b>rasterio</b></td><td>lire et écrire des rasters (GeoTIFF, ASCII)</td><td>Outils raster</td></tr>
  <tr><td><b>scikit-learn</b></td><td>apprentissage automatique</td><td>Outils de classification</td></tr>
  <tr><td><b>matplotlib</b></td><td>graphiques et cartes</td><td>Mise en page</td></tr>
</table>
<h4>Solution 1 : sur le poste (recommandée en salle de TP)</h4>
<ol>
  <li>Installez <b>Miniforge</b> (github.com/conda-forge/miniforge), gratuit, sans compte.</li>
  <li>Ouvrez <i>Miniforge Prompt</i>, placez-vous dans <code>C:\\ENIV\\TP\\Scripts\\Python</code> et créez l'environnement à partir du fichier fourni :</li>
</ol>
<pre><code>cd C:\\ENIV\\TP\\Scripts\\Python
conda env create -f environnement_eniv.yml
conda activate eniv
jupyter lab</code></pre>
<p>JupyterLab s'ouvre dans le navigateur. Créez un <b>notebook</b> (<code>.ipynb</code>) : on y écrit le code par <b>cellules</b> que l'on exécute avec <kbd>Maj + Entrée</kbd>. VS Code (gratuit) avec l'extension Python est une bonne alternative.</p>
<h4>Solution 2 : Google Colab (sans installation)</h4>
<p>Avec un compte Google gratuit, ouvrez colab.research.google.com, puis chargez les données du site directement :</p>
<pre><code>!pip install -q rasterio geopandas
!wget -q https://siddiq89.github.io/arcmap-eniv/fichiers/TP_ENIV_complet.zip
!wget -q https://siddiq89.github.io/arcmap-eniv/fichiers/TP_Teledetection.zip
!unzip -oq TP_ENIV_complet.zip -d /content/ENIV
!unzip -oq TP_Teledetection.zip -d /content/ENIV
import os
os.environ["ENIV_TP"] = "/content/ENIV/TP"   # les scripts lisent ce dossier</code></pre>
<div class="astuce">Tous les scripts du parcours commencent par <code>DOSSIER = os.environ.get("ENIV_TP", r"C:\\ENIV\\TP")</code> : ils fonctionnent tels quels sur le poste et, après la ligne <code>os.environ[...]</code>, dans Colab.</div>`,
          exercice: `<ol>
  <li>Installez Miniforge et créez l'environnement <code>eniv</code> (ou ouvrez Google Colab).</li>
  <li>Décompressez <code>TP_ENIV_complet.zip</code> et <code>TP_Teledetection.zip</code> dans <code>C:\\ENIV\\</code>.</li>
  <li>Dans un notebook, exécutez <code>import numpy, pandas, geopandas, rasterio, sklearn</code> puis affichez <code>rasterio.__version__</code>. Aucune erreur ne doit apparaître.</li>
</ol>`
        },
        {
          id: "t1-l2",
          titre: "Les bases du langage Python",
          duree: "40 min",
          objectifs: [
            "Manipuler variables, listes et dictionnaires",
            "Écrire une boucle et une condition",
            "Définir et appeler une fonction"
          ],
          contenu: `
<p>Python se lit presque comme du français. L'<b>indentation</b> (4 espaces) délimite les blocs : il n'y a pas d'accolades.</p>
<pre><code># Variables et types
nom = "Tamda"            # texte (str)
population = 13976       # entier (int)
surface_km2 = 14.2       # réel (float)
densite = population / surface_km2
print(nom, round(densite, 1), "hab./km²")

# Listes et dictionnaires
communes = ["C01", "C02", "C03"]
pop = {"C01": 13976, "C02": 21648, "C03": 3909}
print(len(communes), communes[0], pop["C02"])

# Boucle et condition
for code in communes:
    if pop[code] > 10000:
        print(code, "commune de plus de 10 000 habitants")
    else:
        print(code, "petite commune")

# Fonction
def taux_croissance(p0, p1, annees):
    """Taux de croissance annuel moyen en %."""
    return ((p1 / p0) ** (1 / annees) - 1) * 100

print(round(taux_croissance(10591, 13976, 12), 2), "% par an")</code></pre>
<table class="tab">
  <tr><th>Notion</th><th>Exemple</th></tr>
  <tr><td>Liste en compréhension</td><td><code>[c for c in communes if pop[c] > 5000]</code></td></tr>
  <tr><td>Chaîne formatée (f-string)</td><td><code>f"{nom} : {densite:.1f} hab./km²"</code></td></tr>
  <tr><td>Importer une bibliothèque</td><td><code>import numpy as np</code></td></tr>
  <tr><td>Chemin Windows</td><td><code>r"C:\\ENIV\\TP"</code> (le <code>r</code> évite les erreurs avec <code>\\</code>)</td></tr>
</table>
<div class="astuce">ArcMap 10.8 utilise encore Python 2.7. Ici, on utilise Python 3 : <code>print</code> prend toujours des parenthèses.</div>`,
          exercice: `<ol>
  <li>Créez un dictionnaire des altitudes de cinq forages (inventez-les).</li>
  <li>Avec une boucle, affichez ceux situés au-dessus de 800 m.</li>
  <li>Écrivez une fonction <code>pente_pct(denivele, distance)</code> et testez-la avec 120 m sur 1,5 km.</li>
</ol>`
        },
        {
          id: "t1-l3",
          titre: "NumPy, pandas et matplotlib",
          duree: "45 min",
          objectifs: [
            "Calculer sur un tableau NumPy sans boucle",
            "Lire, filtrer et enrichir une table avec pandas",
            "Tracer et enregistrer un graphique"
          ],
          contenu: `
<p><b>NumPy</b> calcule sur des tableaux entiers d'un coup (calcul « vectorisé ») : c'est exactement ce qu'on fera sur les pixels d'une image.</p>
<pre><code>import numpy as np
alt = np.array([812.5, 640.0, 955.2, 1010.8])
print(alt.mean(), alt.max(), alt[alt > 800])   # moyenne, maximum, filtre
print((alt - alt.min()) / (alt.max() - alt.min()))   # normalisation 0-1</code></pre>
<p><b>pandas</b> manipule les tables comme un tableur, mais en code reproductible :</p>
<pre><code>import pandas as pd
df = pd.read_csv(r"C:\\ENIV\\TP\\Tables\\population_communes.csv", sep=";")
df["TAUX_AN"] = ((df.POP_2020 / df.POP_2008) ** (1 / 12) - 1) * 100
print(df.sort_values("TAUX_AN", ascending=False).head(3))
print(df[df.POP_2020 > 10000][["CODE", "POP_2020"]])</code></pre>
<p><b>matplotlib</b> trace les graphiques :</p>
<pre><code>import matplotlib.pyplot as plt
df.plot.bar(x="CODE", y=["POP_2008", "POP_2020"])
plt.ylabel("Habitants"); plt.savefig("population.png", dpi=150); plt.show()</code></pre>
<p>Le script complet <code>py_01_bases_python.py</code> enregistre ses résultats dans <code>C:\\ENIV\\TP\\Sorties\\Python</code>.</p>`,
          exercice: `<ol>
  <li>Exécutez <code>py_01_bases_python.py</code> (ou copiez-le cellule par cellule dans un notebook).</li>
  <li>Ajoutez une colonne <code>GAIN</code> = POP_2020 − POP_2008, puis affichez la commune qui a gagné le plus d'habitants.</li>
  <li>Tracez un nuage de points MENAGES / POP_2020 avec <code>df.plot.scatter</code>.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Quelle bibliothèque lit et écrit les rasters GeoTIFF ?", choix: ["pandas", "rasterio", "matplotlib", "scikit-learn"], bonne: 1, explication: "rasterio s'appuie sur GDAL pour lire et écrire les rasters géoréférencés." },
        { question: "Comment Python délimite-t-il un bloc (boucle, fonction) ?", choix: ["Par des accolades { }", "Par l'indentation", "Par le mot END", "Par un point-virgule"], bonne: 1, explication: "Les lignes indentées de 4 espaces forment le bloc." },
        { question: "Quel outil gratuit permet de programmer sans rien installer ?", choix: ["ArcGIS Pro", "Google Colab", "Excel", "ENVI"], bonne: 1, explication: "Colab exécute des notebooks Python dans le navigateur." },
        { question: "Que renvoie alt[alt > 800] avec un tableau NumPy ?", choix: ["Le nombre de valeurs > 800", "Les valeurs supérieures à 800", "Une erreur", "True ou False"], bonne: 1, explication: "C'est un filtre par masque booléen, très utilisé sur les pixels." }
      ]
    },

    /* ============================================================ */
    {
      id: "t2",
      numero: 2,
      titre: "Données vecteur avec GeoPandas",
      echelle: "1:500 000",
      resume: "Lire et reprojeter des couches, jointures attributaires et spatiales, zones tampons, cartes et GeoPackage.",
      lecons: [
        {
          id: "t2-l1",
          titre: "Lire, explorer et reprojeter une couche",
          duree: "35 min",
          objectifs: [
            "Ouvrir un shapefile dans un GeoDataFrame",
            "Lire et changer le système de coordonnées",
            "Calculer surfaces et longueurs"
          ],
          contenu: `
<p>Un <b>GeoDataFrame</b> est une table pandas avec une colonne <code>geometry</code>. Chaque ligne est une entité.</p>
<pre><code>import geopandas as gpd
communes = gpd.read_file(r"C:\\ENIV\\TP\\Shapefiles\\Communes.shp")
print(communes.crs)          # EPSG:32630 = WGS 84 / UTM zone 30N
print(communes.head())       # premières lignes
print(communes.total_bounds) # emprise xmin, ymin, xmax, ymax

communes["SURF_KM2"] = communes.area / 1e6     # m² -> km² (UTM en mètres)
oueds = gpd.read_file(r"C:\\ENIV\\TP\\Shapefiles\\Oueds.shp")
oueds["LONG_KM"] = oueds.length / 1000

geo = communes.to_crs(4326)  # reprojection en degrés (WGS 84)
communes.plot(column="NOM", legend=True)</code></pre>
<table class="tab">
  <tr><th>Opération</th><th>GeoPandas</th><th>ArcGIS / QGIS</th></tr>
  <tr><td>Reprojeter</td><td><code>gdf.to_crs(32630)</code></td><td>Projeter / Reprojeter une couche</td></tr>
  <tr><td>Définir le SCR (sans .prj)</td><td><code>gdf.set_crs(32630)</code></td><td>Définir une projection</td></tr>
  <tr><td>Sélection attributaire</td><td><code>gdf[gdf.POP &gt; 10000]</code></td><td>Sélection par attributs</td></tr>
</table>
<div class="astuce">Calculez toujours les surfaces dans un système <b>projeté</b> (UTM) : en degrés, <code>.area</code> n'a pas de sens.</div>`,
          exercice: `<ol>
  <li>Ouvrez <code>Projections\\Forages_sans_projection.shp</code> : que vaut <code>crs</code> ? Définissez-le avec <code>set_crs(32630)</code>.</li>
  <li>Ouvrez <code>Projections\\Communes_WGS84.shp</code>, reprojetez-la en UTM 30N et comparez les surfaces avec <code>Communes.shp</code>.</li>
  <li>Affichez la longueur totale des oueds en km.</li>
</ol>`
        },
        {
          id: "t2-l2",
          titre: "Jointures, requêtes spatiales et zones tampons",
          duree: "45 min",
          objectifs: [
            "Joindre une table CSV à une couche",
            "Réaliser une jointure spatiale",
            "Créer des zones tampons et des intersections"
          ],
          contenu: `
<pre><code>import pandas as pd
pop = pd.read_csv(r"C:\\ENIV\\TP\\Tables\\population_communes.csv", sep=";")
communes = communes.merge(pop, on="CODE", how="left")       # jointure attributaire
communes["DENSITE"] = communes.POP_2020 / communes.SURF_KM2

forages = gpd.read_file(r"C:\\ENIV\\TP\\Shapefiles\\Forages.shp")
f_c = gpd.sjoin(forages, communes[["NOM", "geometry"]], predicate="within")   # jointure spatiale
print(f_c.groupby("NOM_right").size())                     # forages par commune

tampon = oueds.buffer(1000).union_all()                    # tampon de 1 km fusionné
proches = forages[forages.within(tampon)]
occ = gpd.read_file(r"C:\\ENIV\\TP\\Shapefiles\\Occupation_sol.shp")
inter = gpd.overlay(occ, communes[["NOM", "geometry"]], how="intersection")   # intersection
inter["HA"] = inter.area / 1e4
print(inter.pivot_table(index="NOM", columns="TYPE", values="HA", aggfunc="sum").round(0))
communes.dissolve(by="WILAYA")                             # fusion par attribut</code></pre>
<table class="tab">
  <tr><th>ArcToolbox</th><th>GeoPandas</th></tr>
  <tr><td>Zone tampon (Buffer)</td><td><code>gdf.buffer(d)</code></td></tr>
  <tr><td>Intersecter</td><td><code>gpd.overlay(a, b, how="intersection")</code></td></tr>
  <tr><td>Fusionner (Dissolve)</td><td><code>gdf.dissolve(by="CHAMP")</code></td></tr>
  <tr><td>Jointure spatiale</td><td><code>gpd.sjoin(a, b, predicate="within")</code></td></tr>
</table>
<p>Avec une ancienne version de GeoPandas, remplacez <code>union_all()</code> par <code>unary_union</code>.</p>`,
          exercice: `<ol>
  <li>Calculez la densité 2020 de chaque commune et affichez les trois plus denses.</li>
  <li>Comptez les écoles situées à moins de 500 m d'une route nationale.</li>
  <li>Calculez la surface de forêt par commune (overlay + pivot_table).</li>
</ol>`
        },
        {
          id: "t2-l3",
          titre: "Cartes, GeoPackage et carte web",
          duree: "35 min",
          objectifs: [
            "Produire une carte choroplèthe avec légende",
            "Enregistrer plusieurs couches dans un GeoPackage",
            "Créer une carte web interactive"
          ],
          contenu: `
<pre><code>import matplotlib.pyplot as plt
fig, ax = plt.subplots(figsize=(8, 8))
communes.plot(column="DENSITE", cmap="YlOrRd", legend=True, edgecolor="grey", ax=ax)
oueds.plot(ax=ax, color="#2171b5")
proches.plot(ax=ax, color="black", markersize=15)
ax.set_title("Densité de population (données fictives)")
plt.savefig(r"C:\\ENIV\\TP\\Sorties\\Python\\carte_densite.png", dpi=150)

gpkg = r"C:\\ENIV\\TP\\Sorties\\Python\\tamda.gpkg"
communes.to_file(gpkg, layer="communes", driver="GPKG")
proches.to_file(gpkg, layer="forages_proches", driver="GPKG")

carte = communes.explore(column="DENSITE", cmap="YlOrRd")   # carte web (folium)
carte.save(r"C:\\ENIV\\TP\\Sorties\\Python\\carte_web.html")</code></pre>
<p>Le GeoPackage s'ouvre directement dans QGIS et ArcGIS Pro. La carte web (<code>explore</code>, extension folium) se reprojette toute seule en WGS 84 et s'ouvre dans n'importe quel navigateur.</p>
<p>Le script complet : <code>py_02_vecteur_geopandas.py</code>.</p>`,
          exercice: `<ol>
  <li>Exécutez <code>py_02_vecteur_geopandas.py</code> et ouvrez <code>tamda.gpkg</code> dans QGIS.</li>
  <li>Changez la palette (<code>cmap="viridis"</code>) et ajoutez les écoles.</li>
  <li>Créez la carte web des forages colorés selon leur état (<code>column="ETAT"</code>).</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Comment reprojeter un GeoDataFrame en UTM 30N ?", choix: ["gdf.set_crs(32630)", "gdf.to_crs(32630)", "gdf.project(30)", "gdf.crs = 'UTM'"], bonne: 1, explication: "to_crs transforme les coordonnées ; set_crs déclare seulement le système." },
        { question: "Quel outil compte les forages dans chaque commune ?", choix: ["merge", "sjoin", "buffer", "dissolve"], bonne: 1, explication: "La jointure spatiale associe à chaque forage la commune qui le contient." },
        { question: "communes.area donne des m² si la couche est :", choix: ["En WGS 84 (degrés)", "En UTM (mètres)", "Sans système", "En Lambert, toujours"], bonne: 1, explication: "L'unité de surface est celle du système projeté." },
        { question: "Quel format enregistre plusieurs couches dans un seul fichier ?", choix: ["Shapefile", "CSV", "GeoPackage", "PNG"], bonne: 2, explication: "Un .gpkg contient plusieurs couches (paramètre layer)." }
      ]
    },

    /* ============================================================ */
    {
      id: "t3",
      numero: 3,
      titre: "Données raster avec rasterio",
      echelle: "1:250 000",
      resume: "Ouvrir un raster, comprendre la transformée affine, calculer la pente avec NumPy, reclasser, découper et écrire un GeoTIFF.",
      lecons: [
        {
          id: "t3-l1",
          titre: "Lire un raster : métadonnées et pixels",
          duree: "35 min",
          objectifs: [
            "Ouvrir un raster et lire ses métadonnées",
            "Comprendre la transformée affine (pixel ↔ coordonnées)",
            "Lire la valeur d'un pixel en un point"
          ],
          contenu: `
<p>Un raster est un <b>tableau NumPy</b> (lignes × colonnes) accompagné d'un <b>géoréférencement</b> : le système (CRS) et la <b>transformée affine</b> qui relie un pixel à ses coordonnées.</p>
<pre><code>import rasterio
src = rasterio.open(r"C:\\ENIV\\TP\\MNT\\MNT_50m.asc")
print(src.crs, src.width, src.height, src.res, src.nodata)
print(src.transform)      # | 50, 0, 640000 |  taille du pixel, x du coin haut-gauche
                          # | 0, -50, 3850000|  -taille du pixel, y du coin haut-gauche
mnt = src.read(1)         # bande 1 -> tableau NumPy
print(mnt.shape, mnt.min(), mnt.max())

lig, col = src.index(650000, 3840000)   # coordonnées -> ligne, colonne
print("Altitude :", mnt[lig, col])
x, y = src.xy(0, 0)                     # ligne, colonne -> coordonnées du centre
for val in src.sample([(650000, 3840000), (645500, 3846200)]):
    print(val)                          # lecture directe en des points
src.close()</code></pre>
<p>Utilisez de préférence <code>with rasterio.open(...) as src:</code> : le fichier est fermé automatiquement. Les bandes sont numérotées à partir de <b>1</b> dans rasterio, mais les tableaux NumPy commencent à <b>0</b>.</p>`,
          exercice: `<ol>
  <li>Affichez l'emprise (<code>src.bounds</code>) et la surface couverte par le MNT en km².</li>
  <li>Lisez l'altitude des 30 forages : ouvrez <code>Forages.shp</code> avec GeoPandas et utilisez <code>src.sample</code>. Comparez avec le champ ALT_M.</li>
  <li>Affichez le MNT avec <code>plt.imshow(mnt, cmap="terrain")</code>.</li>
</ol>`
        },
        {
          id: "t3-l2",
          titre: "Calculer sur les pixels : pente et reclassement",
          duree: "40 min",
          objectifs: [
            "Calculer une pente avec np.gradient",
            "Reclasser un raster avec np.digitize",
            "Calculer des surfaces par classe"
          ],
          contenu: `
<pre><code>import numpy as np
with rasterio.open(r"C:\\ENIV\\TP\\MNT\\MNT_50m.asc") as src:
    mnt = src.read(1).astype("float32")
    taille = src.res[0]                                  # 50 m
dz_dy, dz_dx = np.gradient(mnt, taille)                  # dérivées
pente = np.degrees(np.arctan(np.hypot(dz_dx, dz_dy)))    # pente en degrés

classes = np.digitize(pente, [3, 8, 15]) + 1             # 1 à 4
for c in range(1, 5):
    ha = (classes == c).sum() * taille ** 2 / 1e4
    print("classe", c, round(ha, 1), "ha")

haut = np.where(mnt &gt; 900, 1, 0)                        # condition (comme Con)
print("Part au-dessus de 900 m :", round(haut.mean() * 100, 1), "%")</code></pre>
<table class="tab">
  <tr><th>Spatial Analyst</th><th>NumPy</th></tr>
  <tr><td>Pente (Slope)</td><td><code>np.gradient</code> + <code>arctan</code></td></tr>
  <tr><td>Reclassification</td><td><code>np.digitize</code> ou <code>np.select</code></td></tr>
  <tr><td>Con</td><td><code>np.where(condition, a, b)</code></td></tr>
  <tr><td>Statistiques</td><td><code>.mean()</code>, <code>.max()</code>, <code>np.percentile</code></td></tr>
</table>`,
          exercice: `<ol>
  <li>Calculez la pente en pourcentage (<code>np.hypot(...) * 100</code>).</li>
  <li>Reclassez l'altitude en 4 tranches (&lt; 500, 500–700, 700–900, &gt; 900 m) et donnez la surface de chacune.</li>
  <li>Comparez votre pente moyenne avec celle de l'outil Pente d'ArcGIS ou de QGIS.</li>
</ol>`
        },
        {
          id: "t3-l3",
          titre: "Découper et écrire un GeoTIFF",
          duree: "35 min",
          objectifs: [
            "Écrire un résultat en GeoTIFF géoréférencé",
            "Découper un raster par un polygone",
            "Rastériser une couche vecteur"
          ],
          contenu: `
<pre><code>from rasterio.mask import mask
from rasterio.features import rasterize
with rasterio.open(r"C:\\ENIV\\TP\\MNT\\MNT_50m.asc") as src:
    profil = src.profile                                  # copie des métadonnées
    c05 = communes[communes.CODE == "C05"]
    decoupe, tr = mask(src, c05.geometry, crop=True, nodata=-9999)

profil.update(driver="GTiff", dtype="float32", nodata=-9999, compress="deflate")
with rasterio.open(r"C:\\ENIV\\TP\\Sorties\\Python\\pente_deg.tif", "w", **profil) as dst:
    dst.write(pente.astype("float32"), 1)

# Vecteur -> raster (même grille que le MNT)
litho = gpd.read_file(r"C:\\ENIV\\TP\\Risques\\Lithologie.shp")
r_litho = rasterize(zip(litho.geometry, litho.SUSC_GLIS), out_shape=mnt.shape, transform=profil["transform"])</code></pre>
<p>Le <b>profil</b> contient tout ce qu'il faut pour écrire un raster aligné sur l'original : taille, transformée, CRS, type. Modifiez seulement ce qui change (type, nodata, nombre de bandes). Le script complet : <code>py_03_raster_mnt.py</code>.</p>`,
          exercice: `<ol>
  <li>Exécutez <code>py_03_raster_mnt.py</code> puis ouvrez <code>pente_classes.tif</code> dans QGIS ou ArcGIS.</li>
  <li>Découpez le MNT par la commune de votre choix et calculez son altitude moyenne.</li>
  <li>Rastérisez Occupation_sol (champ CODE_OS) sur la grille du MNT et enregistrez-la.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Que contient la transformée affine d'un raster ?", choix: ["Les couleurs", "La taille du pixel et la position du coin", "Le nombre de bandes", "La date d'acquisition"], bonne: 1, explication: "Elle convertit ligne/colonne en coordonnées x/y." },
        { question: "Dans rasterio, src.read(1) lit :", choix: ["La première ligne", "La bande 1", "Le premier pixel", "Les métadonnées"], bonne: 1, explication: "Les bandes sont numérotées à partir de 1." },
        { question: "L'équivalent NumPy de l'outil Con est :", choix: ["np.where", "np.sum", "np.gradient", "np.digitize"], bonne: 0, explication: "np.where(condition, valeur_si_vrai, valeur_si_faux)." },
        { question: "Pourquoi copier src.profile avant d'écrire ?", choix: ["Pour compresser", "Pour garder la même grille et le même système", "Pour changer de format", "Ce n'est pas utile"], bonne: 1, explication: "Le résultat reste superposable aux données d'origine." }
      ]
    },

    /* ============================================================ */
    {
      id: "t4",
      numero: 4,
      titre: "Principes de la télédétection",
      echelle: "1:100 000",
      resume: "Rayonnement et signatures spectrales, satellites gratuits (Sentinel-2, Landsat), ouverture d'une image multibande et compositions colorées.",
      lecons: [
        {
          id: "t4-l1",
          titre: "Rayonnement, signatures spectrales et résolutions",
          duree: "35 min",
          objectifs: [
            "Expliquer la réflectance et les domaines spectraux",
            "Reconnaître les signatures de l'eau, de la végétation et des sols",
            "Distinguer les quatre résolutions d'un capteur"
          ],
          contenu: `
<p>Un capteur optique mesure la part du rayonnement solaire <b>réfléchie</b> par la surface : la <b>réflectance</b>, entre 0 et 1, dans plusieurs <b>bandes spectrales</b>.</p>
<table class="tab">
  <tr><th>Domaine</th><th>Longueur d'onde</th><th>Ce qu'on y voit</th></tr>
  <tr><td>Visible (bleu, vert, rouge)</td><td>0,45 – 0,70 µm</td><td>Couleurs naturelles ; la chlorophylle absorbe le rouge</td></tr>
  <tr><td>Proche infrarouge (PIR)</td><td>0,75 – 0,90 µm</td><td>Très réfléchi par la végétation saine (structure des feuilles)</td></tr>
  <tr><td>Infrarouge moyen (SWIR)</td><td>1,5 – 2,3 µm</td><td>Humidité des sols et des plantes, brûlis, minéraux</td></tr>
  <tr><td>Infrarouge thermique</td><td>10 – 12 µm</td><td>Température de surface (Landsat)</td></tr>
</table>
<p><b>Signatures spectrales</b> : l'eau absorbe presque tout dans l'infrarouge ; la végétation a un rouge faible et un PIR fort ; les sols nus montent régulièrement du bleu au SWIR ; le bâti est clair et plat.</p>
<table class="tab">
  <tr><th>Résolution</th><th>Définition</th><th>Sentinel-2</th></tr>
  <tr><td>Spatiale</td><td>taille du pixel au sol</td><td>10, 20 ou 60 m</td></tr>
  <tr><td>Spectrale</td><td>nombre et largeur des bandes</td><td>13 bandes</td></tr>
  <tr><td>Temporelle</td><td>fréquence de revisite</td><td>5 jours</td></tr>
  <tr><td>Radiométrique</td><td>nombre de niveaux</td><td>12 bits</td></tr>
</table>
<div class="astuce">Le script <code>py_04_composites.py</code> trace les signatures moyennes des six classes à partir des points d'entraînement : comparez-les au schéma théorique.</div>`,
          exercice: `<ol>
  <li>Dessinez à la main les signatures de l'eau, de la forêt et d'un sol nu sur 6 bandes (B2, B3, B4, B8, B11, B12).</li>
  <li>Exécutez <code>py_04_composites.py</code> et comparez avec la figure <code>signatures_spectrales.png</code>.</li>
  <li>Quelle bande sépare le mieux l'eau du reste ? Et la forêt du maquis ?</li>
</ol>`
        },
        {
          id: "t4-l2",
          titre: "Satellites gratuits et téléchargement des images",
          duree: "30 min",
          objectifs: [
            "Connaître Sentinel-2 et Landsat 8/9",
            "Télécharger une image gratuite sur l'Algérie",
            "Comprendre les niveaux de traitement et le masque des nuages"
          ],
          contenu: `
<table class="tab">
  <tr><th>Satellite</th><th>Pixel</th><th>Revisite</th><th>Accès gratuit</th></tr>
  <tr><td><b>Sentinel-2</b> A/B/C (Copernicus, UE)</td><td>10 / 20 / 60 m</td><td>5 jours</td><td>Copernicus Browser (dataspace.copernicus.eu)</td></tr>
  <tr><td><b>Landsat 8 et 9</b> (USGS/NASA)</td><td>30 m (15 m panchro, 100 m thermique)</td><td>8 jours à deux</td><td>EarthExplorer (earthexplorer.usgs.gov)</td></tr>
  <tr><td><b>Sentinel-1</b> (radar)</td><td>10 m</td><td>6 à 12 jours</td><td>Copernicus Browser ; voit à travers les nuages</td></tr>
  <tr><td>Google Earth Engine</td><td>catalogue de milliers d'images</td><td>—</td><td>gratuit pour l'enseignement et la recherche</td></tr>
</table>
<p><b>Niveaux Sentinel-2</b> : L1C = réflectance au sommet de l'atmosphère ; <b>L2A</b> = réflectance de surface corrigée de l'atmosphère, avec une couche de classification de scène (<b>SCL</b>) qui signale nuages, ombres et eau. Pour les indices et la classification, téléchargez du <b>L2A</b>.</p>
<p>Les bandes utiles du parcours : B2 bleu, B3 vert, B4 rouge, B8 PIR (10 m), B11 et B12 SWIR (20 m). Les fichiers de TP <code>S2_2024-06-15_Tamda.tif</code> et <code>S2_2025-08-20_Tamda.tif</code> imitent ces six bandes, rééchantillonnées à 20 m, avec des valeurs entières = réflectance × 10 000.</p>
<div class="astuce">Les images de TP sont <b>fictives</b> : elles permettent de travailler hors ligne. Refaites ensuite les mêmes traitements sur une vraie image Sentinel-2 de la région de Tlemcen.</div>`,
          exercice: `<ol>
  <li>Créez un compte gratuit sur le Copernicus Browser et cherchez une image Sentinel-2 L2A de Tlemcen avec moins de 10 % de nuages.</li>
  <li>Notez sa date, son identifiant de tuile (cinq caractères, commençant par 30S pour Tlemcen) et sa couverture nuageuse.</li>
  <li>Comparez la même zone en couleurs naturelles et en fausses couleurs dans le navigateur.</li>
</ol>`
        },
        {
          id: "t4-l3",
          titre: "Ouvrir une image multibande et faire des compositions colorées",
          duree: "40 min",
          objectifs: [
            "Lire une image à 6 bandes et convertir en réflectance",
            "Étirer le contraste (centiles 2–98 %)",
            "Produire les compositions naturelle, infrarouge et SWIR"
          ],
          contenu: `
<pre><code>import numpy as np, rasterio, matplotlib.pyplot as plt
with rasterio.open(r"C:\\ENIV\\TP\\Teledetection\\S2_2024-06-15_Tamda.tif") as src:
    print(src.count, src.descriptions)          # 6 bandes
    img = src.read().astype("float32") / 10000  # réflectance 0-1, forme (6, 600, 600)
B2, B3, B4, B8, B11, B12 = img

def etirer(b, bas=2, haut=98):
    p1, p2 = np.percentile(b, (bas, haut))
    return np.clip((b - p1) / (p2 - p1), 0, 1)

naturelle = np.dstack([etirer(B4), etirer(B3), etirer(B2)])   # R-V-B = 4-3-2
infrarouge = np.dstack([etirer(B8), etirer(B4), etirer(B3)])  # 8-4-3
plt.imshow(infrarouge); plt.title("Fausses couleurs : végétation en rouge"); plt.show()</code></pre>
<table class="tab">
  <tr><th>Composition</th><th>Bandes (R-V-B)</th><th>Usage</th></tr>
  <tr><td>Couleurs naturelles</td><td>B4-B3-B2</td><td>vue « photo »</td></tr>
  <tr><td>Fausses couleurs infrarouges</td><td>B8-B4-B3</td><td>végétation en rouge, vigueur</td></tr>
  <tr><td>SWIR</td><td>B12-B8-B4</td><td>sols, zones brûlées, humidité</td></tr>
  <tr><td>Agriculture</td><td>B11-B8-B2</td><td>cultures et sols</td></tr>
</table>
<p>L'étirement est indispensable : les réflectances occupent une petite plage (0,02 à 0,4), l'image brute paraît sombre.</p>`,
          exercice: `<ol>
  <li>Affichez les trois compositions de l'image de 2024 côte à côte (<code>plt.subplots(1, 3)</code>).</li>
  <li>Repérez la retenue collinaire, la ville, les parcelles agricoles et la forêt du nord.</li>
  <li>Faites la composition SWIR de l'image de 2025 : que voyez-vous au nord-ouest ?</li>
</ol>`
        }
      ],
      quiz: [
        { question: "La végétation saine réfléchit surtout :", choix: ["Le bleu", "Le rouge", "Le proche infrarouge", "L'infrarouge thermique"], bonne: 2, explication: "La structure des feuilles réfléchit fortement le PIR, la chlorophylle absorbe le rouge." },
        { question: "Quel niveau Sentinel-2 donne la réflectance de surface ?", choix: ["L0", "L1C", "L2A", "L3"], bonne: 2, explication: "Le L2A est corrigé de l'atmosphère et contient la couche SCL." },
        { question: "La composition B8-B4-B3 affiche la végétation en :", choix: ["Vert", "Rouge", "Bleu", "Noir"], bonne: 1, explication: "Le PIR est placé dans le canal rouge." },
        { question: "La résolution temporelle désigne :", choix: ["La taille du pixel", "Le nombre de bandes", "La fréquence de revisite", "Le nombre de niveaux de gris"], bonne: 2, explication: "Sentinel-2 revient tous les 5 jours." }
      ]
    },

    /* ============================================================ */
    {
      id: "t5",
      numero: 5,
      titre: "Indices spectraux et détection des changements",
      echelle: "1:50 000",
      resume: "NDVI, SAVI, NDWI, NDBI, seuillage, puis cartographie de la zone incendiée en 2025 avec le NBR et le dNBR.",
      lecons: [
        {
          id: "t5-l1",
          titre: "Calculer NDVI, SAVI, NDWI et NDBI",
          duree: "40 min",
          objectifs: [
            "Écrire la formule d'une différence normalisée",
            "Interpréter les valeurs du NDVI",
            "Enregistrer un raster d'indices à plusieurs bandes"
          ],
          contenu: `
<p>Un <b>indice spectral</b> combine deux bandes pour faire ressortir un phénomène. La plupart sont des <b>différences normalisées</b> entre −1 et +1 : (a − b) / (a + b).</p>
<table class="tab">
  <tr><th>Indice</th><th>Formule Sentinel-2</th><th>Fait ressortir</th></tr>
  <tr><td><b>NDVI</b></td><td>(B8 − B4) / (B8 + B4)</td><td>végétation (&gt; 0,5 dense, 0,2–0,5 clairsemée, &lt; 0,2 sol ou bâti, &lt; 0 eau)</td></tr>
  <tr><td><b>SAVI</b></td><td>1,5 × (B8 − B4) / (B8 + B4 + 0,5)</td><td>végétation clairsemée en zone semi-aride</td></tr>
  <tr><td><b>NDWI</b></td><td>(B3 − B8) / (B3 + B8)</td><td>eau libre (&gt; 0)</td></tr>
  <tr><td><b>NDBI</b></td><td>(B11 − B8) / (B11 + B8)</td><td>bâti et sols nus</td></tr>
  <tr><td><b>NBR</b></td><td>(B8 − B12) / (B8 + B12)</td><td>zones brûlées (leçon 3)</td></tr>
</table>
<pre><code>def indice(a, b):
    with np.errstate(divide="ignore", invalid="ignore"):
        return np.where(a + b == 0, 0, (a - b) / (a + b)).astype("float32")

ndvi = indice(B8, B4)
ndwi = indice(B3, B8)
profil.update(count=2, dtype="float32")
with rasterio.open(r"C:\\ENIV\\TP\\Sorties\\Python\\indices.tif", "w", **profil) as dst:
    dst.write(ndvi, 1); dst.write(ndwi, 2)
    dst.set_band_description(1, "NDVI"); dst.set_band_description(2, "NDWI")</code></pre>
<div class="astuce">Convertissez toujours les entiers en réels (<code>astype("float32")</code>) avant de diviser : sinon la division d'entiers non signés peut donner des valeurs fausses.</div>`,
          exercice: `<ol>
  <li>Exécutez <code>py_05_indices.py</code> et ouvrez <code>indices_2024.tif</code> dans QGIS.</li>
  <li>Comparez le NDVI moyen de la forêt, du maquis et des cultures (utilisez les points d'entraînement).</li>
  <li>Où le SAVI est-il nettement différent du NDVI ? Pourquoi ?</li>
</ol>`
        },
        {
          id: "t5-l2",
          titre: "Seuillage et cartes thématiques",
          duree: "30 min",
          objectifs: [
            "Choisir un seuil à l'aide de l'histogramme",
            "Combiner plusieurs conditions",
            "Calculer des surfaces en hectares"
          ],
          contenu: `
<pre><code>carte = np.full(ndvi.shape, 4, "uint8")       # 4 = sans végétation
carte[ndvi &gt; 0.25] = 3                         # 3 = végétation clairsemée
carte[ndvi &gt; 0.55] = 2                         # 2 = végétation dense
carte[ndwi &gt; 0.2] = 1                          # 1 = eau (en dernier : prioritaire)
ha_pixel = 20 * 20 / 10000                     # 0,04 ha
for c, nom in {1: "Eau", 2: "Dense", 3: "Clairsemée", 4: "Sans"}.items():
    print(nom, round((carte == c).sum() * ha_pixel, 1), "ha")

plt.hist(ndvi.ravel(), bins=100); plt.axvline(0.25); plt.axvline(0.55); plt.show()</code></pre>
<p>L'<b>histogramme</b> montre plusieurs « bosses » : chaque bosse correspond à un type de surface. Placez les seuils dans les creux. Le seuillage est simple et rapide, mais il ne sépare pas des classes qui ont le même NDVI (forêt et cultures irriguées, sol nu et bâti) : c'est le rôle de la classification (niveau 6).</p>`,
          exercice: `<ol>
  <li>Calculez la surface de la retenue collinaire en juin 2024, puis en août 2025. De combien a-t-elle diminué ?</li>
  <li>Testez les seuils 0,2 / 0,5 puis 0,3 / 0,6 : comment varient les surfaces ?</li>
  <li>Construisez un masque « bâti probable » avec NDBI &gt; 0,1 et NDVI &lt; 0,25.</li>
</ol>`
        },
        {
          id: "t5-l3",
          titre: "Détection de changements : zone incendiée (NBR, dNBR)",
          duree: "45 min",
          objectifs: [
            "Calculer le NBR avant et après l'incendie",
            "Classer la sévérité avec les seuils du dNBR",
            "Transformer la zone brûlée en polygone"
          ],
          contenu: `
<p>Un incendie <b>fictif</b> a touché la forêt et le maquis du nord-ouest le 12 juillet 2025. Le feu fait chuter le PIR et augmente le SWIR : le <b>NBR</b> baisse. La différence <b>dNBR = NBR<sub>avant</sub> − NBR<sub>après</sub></b> mesure la sévérité.</p>
<pre><code>nbr = lambda im: (im[3] - im[5]) / (im[3] + im[5])     # (B8 - B12) / (B8 + B12)
dnbr = nbr(avant) - nbr(apres)
sev = np.digitize(dnbr, [0.10, 0.27, 0.44, 0.66])        # 0 = non brûlé ... 4 = forte

from rasterio.features import shapes
from shapely.geometry import shape
brule = sev &gt;= 2
geoms = [shape(g) for g, v in shapes(brule.astype("uint8"), mask=brule, transform=profil["transform"])]
perim = gpd.GeoDataFrame(geometry=geoms, crs=profil["crs"])
print("Surface brûlée :", round(perim.area.sum() / 1e4, 1), "ha")</code></pre>
<table class="tab">
  <tr><th>dNBR</th><th>Sévérité (USGS)</th></tr>
  <tr><td>&lt; 0,10</td><td>non brûlé</td></tr>
  <tr><td>0,10 – 0,27</td><td>faible</td></tr>
  <tr><td>0,27 – 0,44</td><td>modérée-faible</td></tr>
  <tr><td>0,44 – 0,66</td><td>modérée-forte</td></tr>
  <tr><td>&gt; 0,66</td><td>forte</td></tr>
</table>
<div class="astuce">Les champs moissonnés entre juin et août font aussi baisser le NBR : ils apparaissent en « sévérité faible ». C'est un <b>faux positif</b>. Le script <code>py_06_changements_incendie.py</code> ne garde que la plus grande tache au-dessus de 0,27 ; on peut aussi masquer les cultures avec la classification du niveau 6.</div>`,
          exercice: `<ol>
  <li>Exécutez <code>py_06_changements_incendie.py</code> et ouvrez <code>perimetre_incendie_2025.shp</code> dans QGIS ou ArcGIS.</li>
  <li>Quelle est la surface incendiée ? Quelle part est en sévérité forte ?</li>
  <li>Superposez le périmètre aux foyers d'incendie de <code>Risques\\Foyers_incendies.shp</code> et aux écoles : lesquelles sont à moins de 2 km ?</li>
</ol>`
        }
      ],
      quiz: [
        { question: "La formule du NDVI avec Sentinel-2 est :", choix: ["(B4 − B8) / (B4 + B8)", "(B8 − B4) / (B8 + B4)", "(B3 − B8) / (B3 + B8)", "B8 / B4"], bonne: 1, explication: "PIR moins rouge, divisé par leur somme." },
        { question: "Un NDVI négatif indique le plus souvent :", choix: ["Une forêt dense", "De l'eau", "Des cultures", "Un sol labouré"], bonne: 1, explication: "L'eau réfléchit plus le rouge (et le vert) que le PIR." },
        { question: "Après un incendie, le NBR :", choix: ["Augmente", "Baisse", "Ne change pas", "Devient égal au NDVI"], bonne: 1, explication: "Le PIR chute et le SWIR augmente : le dNBR est positif." },
        { question: "Pourquoi des champs apparaissent-ils « brûlés » dans le dNBR ?", choix: ["Erreur de projection", "Ils ont été moissonnés entre les deux dates", "Les nuages", "La bande bleue"], bonne: 1, explication: "La perte de végétation verte ressemble à celle d'un feu : il faut filtrer ces faux positifs." },
        { question: "Quel indice est adapté à la végétation clairsemée des zones semi-arides ?", choix: ["NDWI", "SAVI", "NDBI", "NBR"], bonne: 1, explication: "Le SAVI corrige l'effet du sol nu visible entre les plantes." }
      ]
    },

    /* ============================================================ */
    {
      id: "t6",
      numero: 6,
      titre: "Apprentissage automatique : classer une image",
      echelle: "1:25 000",
      resume: "Notions de machine learning, classification non supervisée K-means, échantillons d'entraînement, classification supervisée Random Forest.",
      lecons: [
        {
          id: "t6-l1",
          titre: "Notions d'apprentissage automatique (machine learning)",
          duree: "30 min",
          objectifs: [
            "Distinguer apprentissage supervisé et non supervisé",
            "Définir variables, étiquettes, entraînement et test",
            "Comprendre le surapprentissage"
          ],
          contenu: `
<p>L'<b>apprentissage automatique</b> (machine learning) consiste à laisser un algorithme <b>apprendre une règle à partir d'exemples</b> au lieu de l'écrire soi-même (comme les seuils du niveau 5).</p>
<table class="tab">
  <tr><th>Terme</th><th>En télédétection</th></tr>
  <tr><td>Individu (échantillon)</td><td>un pixel</td></tr>
  <tr><td>Variables (features) X</td><td>les bandes et les indices du pixel</td></tr>
  <tr><td>Étiquette (label) y</td><td>la classe connue : eau, forêt, maquis…</td></tr>
  <tr><td>Entraînement</td><td>le modèle apprend sur des pixels étiquetés</td></tr>
  <tr><td>Prédiction</td><td>le modèle classe tous les autres pixels</td></tr>
  <tr><td>Validation</td><td>on mesure la qualité sur des points <b>indépendants</b></td></tr>
</table>
<ul>
  <li><b>Non supervisé</b> (K-means) : pas d'étiquettes ; l'algorithme regroupe les pixels qui se ressemblent, l'opérateur nomme ensuite les groupes.</li>
  <li><b>Supervisé</b> (Random Forest, SVM, k-NN, réseaux de neurones) : on fournit des exemples étiquetés.</li>
  <li><b>Classification</b> : on prédit une classe. <b>Régression</b> : on prédit une valeur (biomasse, taux de couvert).</li>
</ul>
<p>Le <b>surapprentissage</b> (overfitting) : le modèle « apprend par cœur » ses exemples et généralise mal. On le détecte en évaluant sur des données qu'il n'a jamais vues.</p>
<div class="astuce">Avec scikit-learn, tous les modèles s'utilisent de la même façon : <code>modele.fit(X, y)</code> pour apprendre, <code>modele.predict(X)</code> pour prédire.</div>`,
          exercice: `<ol>
  <li>Pour chacun de ces problèmes, dites s'il s'agit de classification ou de régression, supervisée ou non : carte d'occupation du sol, estimation du rendement du blé, regroupement de pixels sans connaissance du terrain, probabilité de glissement.</li>
  <li>Expliquez pourquoi on ne doit pas valider une carte avec les points qui ont servi à l'entraîner.</li>
</ol>`
        },
        {
          id: "t6-l2",
          titre: "Classification non supervisée : K-means",
          duree: "35 min",
          objectifs: [
            "Transformer une image en tableau pixels × variables",
            "Regrouper les pixels avec K-means",
            "Interpréter les groupes obtenus"
          ],
          contenu: `
<pre><code>from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
nb, h, w = img.shape                                 # (6, 600, 600)
X = img.reshape(nb, -1).T                            # (360 000 pixels, 6 variables)
X_std = StandardScaler().fit_transform(X)            # même échelle pour toutes les bandes
km = KMeans(n_clusters=6, n_init=10, random_state=0)
km.fit(X_std[np.random.default_rng(0).choice(len(X_std), 20000, replace=False)])
groupes = km.predict(X_std).reshape(h, w) + 1        # carte des groupes 1 à 6
plt.imshow(groupes, cmap="tab10"); plt.show()</code></pre>
<p>Le <b>reshape</b> est l'étape clé : une image (bandes, lignes, colonnes) devient un tableau (pixels, bandes), que scikit-learn sait traiter. On l'inverse après la prédiction.</p>
<p>K-means ne sait pas ce qu'est une « forêt » : il faut <b>nommer</b> chaque groupe. Le script <code>py_07_kmeans.py</code> croise les groupes avec les points de terrain (<code>pd.crosstab</code>) et trace la <b>méthode du coude</b> pour choisir le nombre de groupes.</p>`,
          exercice: `<ol>
  <li>Exécutez <code>py_07_kmeans.py</code>. Quels groupes correspondent nettement à une classe ? Lesquels mélangent plusieurs classes ?</li>
  <li>Relancez avec <code>k = 8</code> puis <code>k = 4</code> : que devient la séparation maquis / sol nu ?</li>
  <li>Retirez le StandardScaler : le résultat change-t-il ? Pourquoi ?</li>
</ol>`
        },
        {
          id: "t6-l3",
          titre: "Échantillons d'entraînement et valeurs des pixels",
          duree: "35 min",
          objectifs: [
            "Préparer des points d'entraînement équilibrés",
            "Extraire les valeurs des pixels sous les points",
            "Construire la table X (variables) et y (classes)"
          ],
          contenu: `
<p>Les fichiers <code>Echantillons_entrainement.shp</code> (300 points, 50 par classe) et <code>Echantillons_validation.shp</code> (180 points) contiennent les champs <b>CLASSE</b> et <b>CODE</b> (1 Eau, 2 Forêt, 3 Maquis, 4 Cultures, 5 Sol nu, 6 Bâti). Sur une vraie image, on les numérise dans QGIS ou ArcGIS sur des zones homogènes, en s'aidant de Google Earth et du terrain.</p>
<pre><code>ent = gpd.read_file(r"C:\\ENIV\\TP\\Teledetection\\Echantillons_entrainement.shp")
print(ent.CLASSE.value_counts())                     # classes équilibrées ?
lig, col = rasterio.transform.rowcol(profil["transform"], ent.geometry.x, ent.geometry.y)
noms = ["B2", "B3", "B4", "B8", "B11", "B12", "NDVI", "NDWI", "NDBI"]
X = pd.DataFrame(pile[:, np.array(lig), np.array(col)].T, columns=noms)
y = ent.CODE.values
print(X.assign(CLASSE=ent.CLASSE).groupby("CLASSE").mean().round(3))</code></pre>
<ul>
  <li><b>Nombre</b> : au moins 30 à 50 pixels par classe, plus pour les classes variables.</li>
  <li><b>Répartition</b> : sur toute l'image, pas seulement dans un coin.</li>
  <li><b>Pureté</b> : au centre des zones homogènes, loin des limites (pixels mixtes).</li>
  <li><b>Indépendance</b> : les points de validation ne doivent pas toucher ceux d'entraînement.</li>
</ul>`,
          exercice: `<ol>
  <li>Affichez les points d'entraînement sur la composition infrarouge, colorés par classe.</li>
  <li>Calculez la moyenne et l'écart-type du NDVI par classe : quelles classes se chevauchent ?</li>
  <li>Dans QGIS, ajoutez 10 points « Sol nu » supplémentaires dans le sud de l'image (même structure de champs).</li>
</ol>`
        },
        {
          id: "t6-l4",
          titre: "Classification supervisée : Random Forest",
          duree: "45 min",
          objectifs: [
            "Entraîner une forêt aléatoire",
            "Prédire tous les pixels et écrire la carte",
            "Lire l'importance des variables"
          ],
          contenu: `
<p>Une <b>forêt aléatoire</b> (Random Forest) est un ensemble de centaines d'<b>arbres de décision</b>. Chaque arbre apprend sur un tirage aléatoire des points et des variables ; la classe finale est celle qui obtient le plus de « votes ». L'algorithme est robuste, rapide et peu sensible aux réglages : c'est le plus utilisé en télédétection.</p>
<pre><code>from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier(n_estimators=200, oob_score=True, random_state=42, n_jobs=-1)
rf.fit(X, y)
print("Précision out-of-bag :", round(rf.oob_score_, 3))
print(dict(zip(noms, rf.feature_importances_.round(3))))   # importance des variables

n, h, w = pile.shape
carte = rf.predict(pd.DataFrame(pile.reshape(n, -1).T, columns=noms)).reshape(h, w).astype("uint8")
profil.update(count=1, dtype="uint8", nodata=0)
with rasterio.open(r"C:\\ENIV\\TP\\Sorties\\Python\\classification_rf_2024.tif", "w", **profil) as dst:
    dst.write(carte, 1)</code></pre>
<p>La précision <b>out-of-bag</b> est calculée sur les points que chaque arbre n'a pas vus : c'est une première estimation, mais la vraie validation se fait avec les points indépendants (niveau 7). Le script <code>py_08_random_forest.py</code> écrit aussi la palette des classes dans le GeoTIFF : la carte s'affiche directement en couleurs dans QGIS.</p>`,
          exercice: `<ol>
  <li>Exécutez <code>py_08_random_forest.py</code>. Quelle est la surface de chaque classe ?</li>
  <li>Retirez les trois indices (6 bandes seulement) : la précision out-of-bag baisse-t-elle ?</li>
  <li>Appliquez le modèle enregistré (<code>joblib.load</code>) à l'image de 2025 et comparez les deux cartes.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "K-means est une méthode :", choix: ["Supervisée", "Non supervisée", "De régression", "De géoréférencement"], bonne: 1, explication: "Elle regroupe les pixels sans étiquettes." },
        { question: "Dans scikit-learn, quelle méthode entraîne un modèle ?", choix: ["predict", "fit", "train_map", "score"], bonne: 1, explication: "fit(X, y) apprend ; predict(X) prédit." },
        { question: "Pourquoi transformer l'image (6, 600, 600) en (360 000, 6) ?", choix: ["Pour la compresser", "Une ligne par pixel, une colonne par variable", "Pour la reprojeter", "Pour l'afficher"], bonne: 1, explication: "C'est le format attendu par les modèles de scikit-learn." },
        { question: "Un Random Forest décide de la classe d'un pixel par :", choix: ["Un seul seuil", "Le vote de nombreux arbres de décision", "La distance au centre de la classe", "Le hasard"], bonne: 1, explication: "Chaque arbre vote ; la majorité l'emporte." },
        { question: "Où placer de préférence les points d'entraînement ?", choix: ["Sur les limites entre classes", "Au centre de zones homogènes, sur toute l'image", "Tous dans la même parcelle", "Sur les nuages"], bonne: 1, explication: "Des pixels purs et bien répartis donnent un meilleur modèle." }
      ]
    },

    /* ============================================================ */
    {
      id: "t7",
      numero: 7,
      titre: "Évaluer et améliorer une classification",
      echelle: "1:10 000",
      resume: "Matrice de confusion, précision globale et kappa, validation croisée et réglage, comparaison d'algorithmes, filtre majoritaire et statistiques.",
      lecons: [
        {
          id: "t7-l1",
          titre: "Matrice de confusion, précision globale et kappa",
          duree: "40 min",
          objectifs: [
            "Construire la matrice de confusion avec des points indépendants",
            "Calculer précision globale, kappa, précisions du producteur et de l'utilisateur",
            "Identifier les classes confondues"
          ],
          contenu: `
<pre><code>from sklearn.metrics import confusion_matrix, accuracy_score, cohen_kappa_score
val = gpd.read_file(r"C:\\ENIV\\TP\\Teledetection\\Echantillons_validation.shp")
lig, col = rasterio.transform.rowcol(profil["transform"], val.geometry.x, val.geometry.y)
y_vrai = val.CODE.values
y_pred = carte[np.array(lig), np.array(col)]
mc = confusion_matrix(y_vrai, y_pred, labels=range(1, 7))  # lignes = terrain, colonnes = carte
print(mc)
print("Précision globale :", accuracy_score(y_vrai, y_pred))
print("Kappa :", cohen_kappa_score(y_vrai, y_pred))
producteur = np.diag(mc) / mc.sum(axis=1)   # part des points d'une classe bien cartographiés
utilisateur = np.diag(mc) / mc.sum(axis=0)  # part des pixels cartographiés réellement corrects</code></pre>
<table class="tab">
  <tr><th>Indicateur</th><th>Question à laquelle il répond</th></tr>
  <tr><td>Précision globale</td><td>Quelle part des points de contrôle est bien classée ?</td></tr>
  <tr><td>Kappa</td><td>Quel accord au-delà du hasard ? (&gt; 0,8 très bon, 0,6–0,8 bon)</td></tr>
  <tr><td>Précision du producteur (rappel)</td><td>Erreur d'<b>omission</b> : des maquis ont-ils été oubliés ?</td></tr>
  <tr><td>Précision de l'utilisateur</td><td>Erreur de <b>commission</b> : ce qui est cartographié « maquis » est-il vraiment du maquis ?</td></tr>
</table>`,
          exercice: `<ol>
  <li>Exécutez <code>py_09_evaluation.py</code> (après py_08) et recopiez la matrice de confusion dans un tableau.</li>
  <li>Quelles sont les deux classes les plus confondues ? Expliquez-le avec leurs signatures spectrales.</li>
  <li>Calculez à la main la précision globale à partir de la diagonale.</li>
</ol>`
        },
        {
          id: "t7-l2",
          titre: "Validation croisée, réglage et comparaison d'algorithmes",
          duree: "40 min",
          objectifs: [
            "Évaluer un modèle par validation croisée",
            "Comparer Random Forest, SVM et k plus proches voisins",
            "Régler les hyperparamètres avec GridSearchCV"
          ],
          contenu: `
<pre><code>from sklearn.model_selection import cross_val_score, StratifiedKFold, GridSearchCV
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
cv = StratifiedKFold(5, shuffle=True, random_state=0)         # 5 plis équilibrés
modeles = {
    "Random Forest": RandomForestClassifier(200, random_state=0),
    "SVM": make_pipeline(StandardScaler(), SVC(C=10)),
    "k-NN": make_pipeline(StandardScaler(), KNeighborsClassifier(5)),
}
for nom, m in modeles.items():
    s = cross_val_score(m, X, y, cv=cv)
    print(nom, round(s.mean(), 3), "±", round(s.std(), 3))

grille = GridSearchCV(RandomForestClassifier(random_state=0),
                      {"n_estimators": [50, 200], "max_depth": [None, 5]}, cv=cv)
grille.fit(X, y); print(grille.best_params_, grille.best_score_)</code></pre>
<p>La <b>validation croisée</b> découpe les points en 5 parts : on entraîne sur 4 et on teste sur la 5<sup>e</sup>, cinq fois. La moyenne est plus fiable qu'un seul essai. Les <b>hyperparamètres</b> sont les réglages choisis avant l'apprentissage (nombre d'arbres, profondeur, C du SVM…).</p>
<div class="astuce">SVM et k-NN dépendent des distances : il faut <b>normaliser</b> les variables (StandardScaler). Le Random Forest n'en a pas besoin.</div>`,
          exercice: `<ol>
  <li>Quel algorithme obtient le meilleur score ? L'écart est-il significatif compte tenu de l'écart-type ?</li>
  <li>Ajoutez un réseau de neurones <code>MLPClassifier(hidden_layer_sizes=(50,), max_iter=1000)</code> dans une pipeline avec StandardScaler.</li>
  <li>Entraînez le modèle avec seulement 10 points par classe : que devient la précision ?</li>
</ol>`
        },
        {
          id: "t7-l3",
          titre: "Post-traitement et statistiques de la carte",
          duree: "35 min",
          objectifs: [
            "Supprimer l'effet « poivre et sel » par un filtre majoritaire",
            "Calculer les surfaces par classe et par commune",
            "Préparer la carte finale"
          ],
          contenu: `
<pre><code>from scipy import ndimage
votes = np.stack([ndimage.uniform_filter((carte == c).astype("float32"), 3) for c in range(1, 7)])
lissee = (votes.argmax(axis=0) + 1).astype("uint8")       # classe majoritaire dans une fenêtre 3 x 3

from rasterio.features import rasterize
idc = rasterize([(g, i + 1) for i, g in enumerate(communes.geometry)], out_shape=lissee.shape,
                transform=profil["transform"])
tab = pd.crosstab(communes.NOM.values[idc[idc &gt; 0] - 1], lissee[idc &gt; 0]) * 0.04   # hectares
tab.to_csv(r"C:\\ENIV\\TP\\Sorties\\Python\\surfaces_classes_communes.csv", sep=";")</code></pre>
<p>Le <b>filtre majoritaire</b> remplace chaque pixel par la classe la plus fréquente autour de lui (équivalent de l'outil Filtre majoritaire d'ArcGIS). Vérifiez avec la matrice de confusion qu'il améliore bien la carte.</p>
<p>Pour la carte finale, ouvrez <code>classification_rf_2024_filtree.tif</code> dans QGIS ou ArcGIS, appliquez les couleurs de <code>classes.csv</code>, puis ajoutez légende, échelle, nord, source (« image fictive de type Sentinel-2 ») et la précision globale.</p>`,
          exercice: `<ol>
  <li>Comparez la précision globale avant et après le filtre 3 × 3, puis avec une fenêtre 5 × 5.</li>
  <li>Quelle commune a la plus grande surface de forêt ? de bâti ?</li>
  <li>Réalisez la mise en page de la carte d'occupation du sol 2024.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Dans la matrice de confusion de scikit-learn, les lignes représentent :", choix: ["La carte", "La référence terrain", "Les bandes", "Les communes"], bonne: 1, explication: "Lignes = classes vraies, colonnes = classes prédites." },
        { question: "La précision de l'utilisateur mesure l'erreur :", choix: ["D'omission", "De commission", "De projection", "D'arrondi"], bonne: 1, explication: "Elle répond à : ce que la carte appelle « maquis » est-il vraiment du maquis ?" },
        { question: "Un kappa de 0,85 signifie un accord :", choix: ["Faible", "Moyen", "Très bon", "Nul"], bonne: 2, explication: "Au-delà de 0,8, l'accord est considéré comme très bon." },
        { question: "Quels modèles exigent de normaliser les variables ?", choix: ["Random Forest", "SVM et k-NN", "Aucun", "Seulement le Random Forest"], bonne: 1, explication: "Ils reposent sur des distances entre pixels." },
        { question: "Le filtre majoritaire sert à :", choix: ["Augmenter la résolution", "Supprimer les pixels isolés (« poivre et sel »)", "Corriger l'atmosphère", "Reprojeter la carte"], bonne: 1, explication: "Chaque pixel prend la classe majoritaire de son voisinage." }
      ]
    },

    /* ============================================================ */
    {
      id: "t8",
      numero: 8,
      titre: "Projet : susceptibilité aux glissements et perspectives",
      echelle: "1:5 000",
      resume: "Carte de susceptibilité aux glissements de terrain par Random Forest (MNT, lithologie, oueds, inventaire), courbe ROC, puis Google Earth Engine et apprentissage profond.",
      lecons: [
        {
          id: "t8-l1",
          titre: "Préparer les variables et l'échantillon présence / absence",
          duree: "45 min",
          objectifs: [
            "Dériver des variables du MNT (pente, exposition, courbure)",
            "Calculer une distance aux oueds et rastériser la lithologie",
            "Constituer un échantillon de présences et d'absences"
          ],
          contenu: `
<p>Au niveau 8 d'ArcMap, la susceptibilité aux glissements a été calculée par <b>pondération d'experts</b>. Ici, on laisse un modèle <b>apprendre les poids</b> à partir de l'inventaire <code>Risques\\Glissements.shp</code> (32 glissements fictifs).</p>
<pre><code>dy, dx = np.gradient(mnt, 50)
pente = np.degrees(np.arctan(np.hypot(dx, dy)))
expo_nord = np.cos(np.arctan2(-dx, dy))                 # 1 = versant nord, -1 = sud
courbure = ndimage.laplace(mnt) / 50 ** 2
r_oueds = rasterize(oueds.geometry, out_shape=mnt.shape, transform=tr)
dist_oued = ndimage.distance_transform_edt(r_oueds == 0) * 50   # mètres
susc_litho = rasterize(zip(litho.geometry, litho.SUSC_GLIS), out_shape=mnt.shape, transform=tr)

# Présences : pixels des glissements ; absences : 4 fois plus, à plus de 500 m d'un glissement
loin = ndimage.distance_transform_edt(~presence) * 50 &gt; 500
absences = np.argwhere(loin)[rng.choice(loin.sum(), 4 * len(gl), replace=False)]</code></pre>
<table class="tab">
  <tr><th>Variable</th><th>Source</th><th>Pourquoi</th></tr>
  <tr><td>Pente, altitude, exposition, courbure</td><td>MNT_50m</td><td>la gravité et l'eau pilotent les glissements</td></tr>
  <tr><td>Distance aux oueds</td><td>Oueds.shp</td><td>sapement des berges</td></tr>
  <tr><td>Lithologie (SUSC_GLIS)</td><td>Lithologie.shp</td><td>marnes et argiles sensibles</td></tr>
  <tr><td>Occupation du sol</td><td>Occupation_sol.shp ou classification du niveau 6</td><td>la végétation stabilise les versants</td></tr>
</table>`,
          exercice: `<ol>
  <li>Ouvrez <code>py_10_susceptibilite_glissements.py</code> et exécutez la partie 1 et 2.</li>
  <li>Comparez la pente moyenne et la distance aux oueds des présences et des absences.</li>
  <li>Proposez une variable supplémentaire (distance aux routes, NDVI…) et ajoutez-la.</li>
</ol>`
        },
        {
          id: "t8-l2",
          titre: "Entraîner le modèle, courbe ROC et carte de susceptibilité",
          duree: "45 min",
          objectifs: [
            "Séparer un échantillon d'entraînement et de test",
            "Évaluer un modèle de probabilité avec la courbe ROC et l'AUC",
            "Produire une carte de susceptibilité en 4 classes"
          ],
          contenu: `
<pre><code>from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, roc_curve
X_a, X_t, y_a, y_t = train_test_split(X, y, test_size=0.3, stratify=y, random_state=0)
rf = RandomForestClassifier(300, min_samples_leaf=2, class_weight="balanced", random_state=0)
rf.fit(X_a, y_a)
proba_t = rf.predict_proba(X_t)[:, 1]                 # probabilité de glissement
print("AUC :", roc_auc_score(y_t, proba_t))

proba = rf.predict_proba(tous_les_pixels)[:, 1].reshape(h, w)
seuils = np.quantile(proba, [0.5, 0.8, 0.95])
classes = np.digitize(proba, seuils) + 1              # 1 faible ... 4 très forte</code></pre>
<p>La <b>courbe ROC</b> trace le taux de vrais positifs contre le taux de faux positifs pour tous les seuils de probabilité. L'<b>AUC</b> (aire sous la courbe) vaut 0,5 pour un modèle au hasard et 1 pour un modèle parfait ; au-delà de 0,8 le modèle est bon.</p>
<p>Les classes sont définies par <b>quantiles</b> : 50 % de la zone en faible, 30 % en moyenne, 15 % en forte, 5 % en très forte. Un bon modèle concentre la plupart des glissements connus dans les deux classes les plus fortes.</p>
<div class="astuce">Avec seulement 32 glissements, le modèle reste fragile : l'AUC change selon le tirage des absences. Répétez l'entraînement avec plusieurs graines (<code>random_state</code>) et comparez avec la carte multicritère du niveau 8 d'ArcMap.</div>`,
          exercice: `<ol>
  <li>Exécutez tout <code>py_10_susceptibilite_glissements.py</code> et notez l'AUC et les trois variables les plus importantes.</li>
  <li>Répétez avec 5 valeurs de <code>random_state</code> : moyenne et écart de l'AUC ?</li>
  <li>Ouvrez <code>susceptibilite_glissements_classes.tif</code> dans QGIS et superposez les écoles et les routes : quels enjeux sont en classe très forte ?</li>
</ol>`
        },
        {
          id: "t8-l3",
          titre: "Aller plus loin : Google Earth Engine, séries temporelles et apprentissage profond",
          duree: "35 min",
          objectifs: [
            "Calculer un NDVI sur de vraies images avec Google Earth Engine (gratuit)",
            "Connaître les séries temporelles et l'apprentissage profond",
            "Utiliser l'IA de façon critique"
          ],
          contenu: `
<p><b>Google Earth Engine</b> (gratuit pour l'enseignement et la recherche, avec un compte Google et un projet Cloud non commercial) donne accès à toutes les archives Sentinel-2 et Landsat, et calcule sur les serveurs de Google. On l'utilise depuis Python avec la bibliothèque <code>earthengine-api</code> (et <code>geemap</code> pour les cartes), par exemple dans Google Colab :</p>
<pre><code>import ee
ee.Authenticate(); ee.Initialize(project="mon-projet-eniv")
zone = ee.Geometry.Rectangle([-1.45, 34.75, -1.25, 34.95])        # région de Tlemcen
s2 = (ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
      .filterBounds(zone).filterDate("2025-04-01", "2025-05-31")
      .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", 10)))
ndvi = s2.median().normalizedDifference(["B8", "B4"]).rename("NDVI")
print(ndvi.reduceRegion(ee.Reducer.mean(), zone, 20).getInfo())</code></pre>
<ul>
  <li><b>Séries temporelles</b> : en suivant le NDVI mois par mois, on distingue les cultures (cycle annuel marqué) des forêts (stables) et on détecte la sécheresse ou la désertification.</li>
  <li><b>Apprentissage profond</b> (deep learning) : les réseaux de neurones convolutifs (U-Net…) apprennent des formes et des textures, pas seulement des valeurs de pixels. Ils servent à extraire bâtiments, routes ou parcelles, mais demandent des milliers d'exemples et une carte graphique. Bibliothèques gratuites : PyTorch, TensorFlow.</li>
  <li><b>Esprit critique</b> : une carte produite par l'IA n'est fiable que si elle est validée sur le terrain. Indiquez toujours la méthode, les données, la date et la précision.</li>
</ul>
<p>Le niveau « Google Earth Engine » du parcours QGIS montre la même plateforme avec l'éditeur JavaScript.</p>`,
          exercice: `<ol>
  <li>Dans Colab, calculez avec Earth Engine le NDVI médian du printemps 2025 sur la région de Tlemcen.</li>
  <li>Tracez l'évolution mensuelle du NDVI d'une parcelle agricole sur une année.</li>
  <li>Rédigez une fiche (une page) : méthode, données, précision et limites de votre carte d'occupation du sol.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Que mesure l'AUC d'une courbe ROC ?", choix: ["La surface de la zone d'étude", "La capacité du modèle à séparer présences et absences", "Le nombre d'arbres", "La résolution du MNT"], bonne: 1, explication: "0,5 = hasard ; 1 = séparation parfaite." },
        { question: "Pourquoi tirer les absences à plus de 500 m des glissements ?", choix: ["Pour accélérer le calcul", "Pour éviter de prendre comme absence un terrain instable", "Pour respecter la projection", "Ce n'est pas utile"], bonne: 1, explication: "Une fausse absence au pied d'un glissement brouillerait l'apprentissage." },
        { question: "Quelle variable vient de l'inventaire et non du MNT ?", choix: ["La pente", "La courbure", "La présence d'un glissement", "L'exposition"], bonne: 2, explication: "L'inventaire fournit les étiquettes (y)." },
        { question: "Google Earth Engine est :", choix: ["Un logiciel payant à installer", "Une plateforme de calcul en ligne, gratuite pour l'enseignement", "Un satellite", "Une extension d'ArcMap"], bonne: 1, explication: "Il donne accès aux archives Sentinel et Landsat et calcule sur les serveurs de Google." }
      ]
    }
  ]
};
