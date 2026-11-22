/*
 * CONTENU PÉDAGOGIQUE — Parcours QGIS (logiciel libre)
 * ------------------------------------------------------------------
 * Même structure que cours.js (ArcMap). Identifiants : q1…q8, leçons q1-l1…
 * Versions visées : QGIS 3.34 / 3.40 LTR. Données de TP communes (C:\ENIV\TP).
 */
window.COURS_QGIS = {
  cle: "qgis",
  nom: "QGIS",
  court: "QGIS",
  logiciel: "QGIS 3 (logiciel libre)",
  recherche: "QGIS",
  accroche: "QGIS, le SIG libre, des bases à la cartographie des risques",
  lead: "Le même parcours avec QGIS, gratuit et libre : projet et panneaux, données et SCR, symbologie et mises en page, boîte à outils de traitements, modeleur graphique, PyQGIS, puis hydrologie avec GRASS et cartes de vulnérabilité aux risques naturels. Idéal pour travailler chez soi sans licence. Les données de TP sont communes aux trois logiciels.",
  titre: "QGIS pas à pas",
  niveaux: [
    /* ============================================================ */
    {
      id: "q1",
      numero: 1,
      titre: "Découvrir QGIS",
      echelle: "1:1 000 000",
      resume: "Installer QGIS, projet .qgz, panneaux, explorateur, navigation et extensions.",
      lecons: [
        {
          id: "q1-l1",
          titre: "Installer QGIS et découvrir l'interface",
          duree: "25 min",
          objectifs: [
            "Installer la version LTR de QGIS",
            "Se repérer dans les panneaux et les barres d'outils",
            "Créer et enregistrer un projet"
          ],
          contenu: `
<p>QGIS est un SIG <b>libre et gratuit</b> (qgis.org). Installez la version <b>LTR</b> (support à long terme), plus stable pour l'enseignement. L'installateur Windows inclut GRASS GIS, utilisé au niveau 7.</p>
<table class="tab">
  <tr><th>ArcMap / ArcGIS Pro</th><th>QGIS</th></tr>
  <tr><td>.mxd / .aprx</td><td>Projet <b>.qgz</b></td></tr>
  <tr><td>Table des matières / Contenu</td><td>Panneau <b>Couches</b></td></tr>
  <tr><td>ArcCatalog / Catalogue</td><td>Panneau <b>Explorateur</b></td></tr>
  <tr><td>ArcToolbox / Géotraitement</td><td><b>Boîte à outils de traitements</b> (Ctrl+Alt+T)</td></tr>
  <tr><td>ModelBuilder</td><td><b>Modeleur graphique</b></td></tr>
  <tr><td>Fenêtre Python (arcpy)</td><td><b>Console Python</b> (PyQGIS, Ctrl+Alt+P)</td></tr>
  <tr><td>Géodatabase fichier</td><td><b>GeoPackage</b> (.gpkg)</td></tr>
</table>
<p>Les panneaux s'affichent ou se masquent par <i>Vue &gt; Panneaux</i>. Ajoutez des données en les glissant depuis l'Explorateur ou par <i>Couche &gt; Ajouter une couche</i>. Enregistrez le projet dans <code>C:\\ENIV\\Projets\\TP_ENIV.qgz</code> et cochez <i>Projet &gt; Propriétés &gt; Général &gt; Enregistrer les chemins relatifs</i>.</p>
<p>Les <b>extensions</b> (<i>Extensions &gt; Installer/Gérer les extensions</i>) ajoutent des fonctions : QuickMapServices (fonds de carte), SAGA NextGen Provider, WhiteboxTools…</p>`,
          exercice: `<ol>
  <li>Installez QGIS LTR, puis créez le projet <code>TP_ENIV.qgz</code>.</li>
  <li>Ajoutez dans l'Explorateur un favori vers <code>C:\\ENIV\\TP</code>.</li>
  <li>Chargez Communes, Routes et Oueds, puis installez l'extension QuickMapServices et ajoutez un fond OpenStreetMap.</li>
</ol>`
        },
        {
          id: "q1-l2",
          titre: "Naviguer, identifier et mesurer",
          duree: "20 min",
          objectifs: [
            "Utiliser les outils de navigation et d'identification",
            "Mesurer distances et surfaces",
            "Afficher la carte en 3D"
          ],
          contenu: `
<ul>
  <li><b>Navigation</b> : outil Main, molette pour zoomer, <i>Zoom sur la couche</i> (clic droit sur la couche).</li>
  <li><b>Identifier les entités</b> (Ctrl+Maj+I) : affiche les attributs d'un clic.</li>
  <li><b>Mesurer</b> une ligne, une surface ou un angle (barre Attributs) : les mesures sont ellipsoïdales par défaut.</li>
  <li><b>Signets spatiaux</b> : <i>Vue &gt; Nouveau signet</i> (Ctrl+B).</li>
  <li>Barre d'état : coordonnées du curseur, échelle, SCR du projet (cliquez dessus pour le changer).</li>
</ul>
<p>Pour la 3D : <i>Vue &gt; Vues 3D &gt; Nouvelle vue cartographique 3D</i>. Dans la configuration de la vue 3D, choisissez le MNT comme <b>terrain</b> et une exagération verticale de 2.</p>`,
          exercice: `<ol>
  <li>Mesurez la longueur de la route principale et la surface de la plus grande commune.</li>
  <li>Créez deux signets (zone d'étude, chef-lieu).</li>
  <li>Ouvrez une vue 3D avec le MNT comme terrain.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Quelle est l'extension d'un projet QGIS ?", choix: [".mxd", ".aprx", ".qgz", ".gpkg"], bonne: 2, explication: ".qgz est un projet compressé ; .gpkg est un format de données." },
        { question: "Quelle version de QGIS choisir pour une salle de TP ?", choix: ["La plus récente", "La LTR", "Une version bêta", "N'importe laquelle"], bonne: 1, explication: "La LTR (Long Term Release) est maintenue plus longtemps et plus stable." },
        { question: "L'équivalent d'ArcToolbox dans QGIS est :", choix: ["Le panneau Couches", "La boîte à outils de traitements", "Le gestionnaire d'extensions", "L'explorateur"], bonne: 1, explication: "Elle regroupe les algorithmes QGIS, GDAL, GRASS et des extensions." },
        { question: "Le format de stockage conseillé dans QGIS est :", choix: ["Shapefile", "GeoPackage", "KML", "DXF"], bonne: 1, explication: "Un GeoPackage contient plusieurs couches vecteur et raster dans un seul fichier." }
      ]
    },

    /* ============================================================ */
    {
      id: "q2",
      numero: 2,
      titre: "Données et systèmes de coordonnées",
      echelle: "1:250 000",
      resume: "GeoPackage, SCR et reprojection, tables, jointures et CSV, numérisation et géoréférencement.",
      lecons: [
        {
          id: "q2-l1",
          titre: "SCR, reprojection et GeoPackage",
          duree: "30 min",
          objectifs: [
            "Régler le SCR du projet et des couches",
            "Distinguer définir le SCR d'une couche et la reprojeter",
            "Ranger les données dans un GeoPackage"
          ],
          contenu: `
<p>QGIS parle de <b>SCR</b> (système de coordonnées de référence), identifiés par leur code EPSG : 4326 (WGS 84), <b>32630</b> (WGS 84 / UTM 30N, données du TP), 30730 (Nord Sahara 1959 / UTM 30N). Le SCR du <b>projet</b> se règle en bas à droite ; les couches sont reprojetées à la volée pour l'affichage.</p>
<ul>
  <li><b>Définir le SCR</b> d'une couche sans .prj : clic droit &gt; <i>Couche &gt; Définir le SCR de la couche</i> (ou l'algorithme <i>Définir la projection</i>). Les coordonnées ne changent pas.</li>
  <li><b>Reprojeter</b> : algorithme <i>Reprojeter une couche</i> (vecteur) ou <i>Projection (warp)</i> (raster). Pour Nord Sahara 1959 → WGS 84, QGIS propose la liste des transformations disponibles.</li>
</ul>
<h3>GeoPackage</h3>
<p>Clic droit sur une couche &gt; <i>Exporter &gt; Sauvegarder les entités sous…</i>, format GeoPackage, fichier <code>TP_ENIV.gpkg</code>, nom de couche <code>communes</code>. Répétez pour chaque couche : un seul fichier contient tout le TP. L'algorithme <i>Empaqueter des couches</i> le fait en une fois.</p>`,
          exercice: `<ol>
  <li>Définissez le SCR de <code>Forages_sans_projection</code> (EPSG:32630).</li>
  <li>Reprojetez <code>Communes_NordSahara1959</code> en EPSG:32630 et comparez avec <code>Communes</code>.</li>
  <li>Empaquetez les 7 couches de base dans <code>TP_ENIV.gpkg</code>.</li>
</ol>`
        },
        {
          id: "q2-l2",
          titre: "Table attributaire, jointures et CSV",
          duree: "30 min",
          objectifs: [
            "Modifier la table et utiliser la calculatrice de champs",
            "Joindre une table externe",
            "Charger un CSV de coordonnées"
          ],
          contenu: `
<p>Clic droit &gt; <b>Ouvrir la table d'attributs</b> (F6). Le crayon active l'édition ; la <b>calculatrice de champs</b> (Ctrl+I) crée ou met à jour un champ avec une expression : <code>$area / 1000000</code> (surface en km²), <code>"POP_2020" / ($area / 1e6)</code>, <code>upper("NOM")</code>.</p>
<h3>Jointure</h3>
<p>Chargez <code>population_communes.csv</code> (Couche &gt; Ajouter une couche &gt; Texte délimité, séparateur point-virgule, <i>Pas de géométrie</i>). Puis <i>Propriétés de Communes &gt; Jointures &gt; +</i> : champ de jointure <code>CODE</code>, champ cible <code>CODE</code>. Pour une jointure permanente : algorithme <i>Joindre les attributs par valeur de champ</i>.</p>
<h3>Points XY</h3>
<p><code>releves_gps.csv</code> en texte délimité : <i>Coordonnées de points</i>, X = <code>X</code>, Y = <code>Y</code>, SCR EPSG:32630.</p>`,
          exercice: `<ol>
  <li>Joignez la population aux communes et calculez la densité.</li>
  <li>Chargez les relevés GPS et sélectionnez ceux situés dans la commune la plus peuplée (<i>Sélection par localisation</i>).</li>
</ol>`
        },
        {
          id: "q2-l3",
          titre: "Numériser et géoréférencer",
          duree: "35 min",
          objectifs: [
            "Créer une couche et la numériser avec accrochage",
            "Géoréférencer une carte scannée"
          ],
          contenu: `
<p><i>Couche &gt; Créer une couche &gt; Nouvelle couche GeoPackage</i> : type de géométrie, SCR, champs. Activez l'édition (crayon), puis <b>Ajouter une entité</b>. Réglez l'<b>accrochage</b> (barre d'outils Accrochage, icône aimant) sur toutes les couches, 10 px. L'outil <b>Sommet</b> modifie les géométries ; la barre <i>Numérisation avancée</i> remplace les outils d'ArcMap pour la saisie précise.</p>
<h3>Géoréférenceur</h3>
<p><i>Couche &gt; Géoréférenceur</i>. Ouvrez l'image, ajoutez des points de calage (au moins 4 à 6) en saisissant les coordonnées ou en cliquant sur la carte. <i>Paramètres de transformation</i> : type Polynomiale 1 (Helmert ou affine), SCR cible EPSG:32630, rééchantillonnage Plus proche voisin. Lancez le géoréférencement : un GeoTIFF calé est créé, avec le tableau des résidus.</p>`,
          exercice: `<ol>
  <li>Créez la couche <code>puits</code> dans le GeoPackage et numérisez 5 puits.</li>
  <li>Numérisez 3 parcelles jointives avec l'accrochage activé.</li>
  <li>Calez une carte scannée et notez l'erreur moyenne.</li>
</ol>`
        },
        {
          id: "q2-l4",
          titre: "Cartes anciennes : géoréférencer et numériser",
          duree: "45 min",
          objectifs: [
            "Choisir de bons points de calage sur une carte ancienne",
            "Choisir la transformation adaptée à une carte déformée",
            "Numériser les éléments anciens et mesurer les changements"
          ],
          contenu: `
<p>Les cartes anciennes (cartes topographiques, plans de ville, cartes d'état-major) montrent le territoire d'hier : ancien tracé d'un oued, extension d'une ville, forêts disparues. Une fois calées, elles se superposent aux données actuelles et permettent de <b>mesurer les changements</b>.</p>
<h3>1. Préparer le scan</h3>
<ul>
  <li>Scannez à 300 dpi au moins, en TIFF, sans recadrer le cadre ni le quadrillage.</li>
  <li>Notez le titre, l'échelle, l'année et le système de coordonnées imprimé dans la marge.</li>
</ul>
<h3>2. Choisir les points de calage</h3>
<ul>
  <li><b>Si le quadrillage est chiffré</b>, utilisez ses croisements et saisissez les coordonnées dans le système de la carte : c'est la méthode la plus précise.</li>
  <li><b>Sinon</b>, calez sur un fond actuel (OpenStreetMap, image satellite) en EPSG:32630 : carrefours anciens, ponts, monuments, angles de bâtiments anciens.</li>
  <li>Évitez les berges d'oued et le trait de côte : ils bougent. Répartissez 10 à 20 points sur toute la feuille, y compris dans les coins.</li>
</ul>
<h3>3. Choisir la transformation</h3>
<table class="tab">
  <tr><th>Transformation</th><th>Quand l'utiliser</th></tr>
  <tr><td>Polynomial 1 (affine)</td><td>Carte en bon état, quadrillage connu ; 4 points minimum</td></tr>
  <tr><td>Polynomial 2</td><td>Légère déformation du papier ; 6 points minimum</td></tr>
  <tr><td>Thin Plate Spline</td><td>Carte pliée, déformée ou dessinée à main levée ; beaucoup de points bien répartis</td></tr>
</table>
<p>Dans le Géoréférenceur, surveillez la colonne des <b>résidus</b> : supprimez ou corrigez les points dont l'erreur est très supérieure aux autres. Rééchantillonnage <i>Plus proche voisin</i> pour garder les couleurs d'origine.</p>
<h3>4. Numériser et comparer</h3>
<ol>
  <li>Créez dans un GeoPackage les couches <code>bati_ancien</code>, <code>routes_anciennes</code>, <code>oued_ancien</code> avec les champs <code>SOURCE</code> et <code>ANNEE</code>.</li>
  <li>Numérisez avec l'accrochage activé et la carte ancienne en transparence à 50 %.</li>
  <li>Comparez avec les couches actuelles : <i>Différence</i> entre bâti actuel et bâti ancien pour l'extension urbaine, distance entre l'ancien et le nouveau tracé de l'oued.</li>
</ol>`,
          exercice: `<ol>
  <li>Calez la carte ancienne fournie par l'enseignant avec deux transformations et comparez les résidus.</li>
  <li>Numérisez le bâti et le réseau d'oueds anciens.</li>
  <li>Calculez la surface de l'extension urbaine et présentez le résultat dans une mise en page.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Une couche sans fichier .prj dont on connaît le système : que faire ?", choix: ["Reprojeter", "Définir le SCR de la couche", "Géoréférencer", "Rasteriser"], bonne: 1, explication: "Définir le SCR ne modifie pas les coordonnées." },
        { question: "Quelle expression donne la surface en km² dans la calculatrice de champs ?", choix: ["$length / 1000", "$area / 1000000", "area(km)", "$perimeter"], bonne: 1, explication: "$area est en unités carrées du SCR (m² en UTM)." },
        { question: "Quel outil QGIS sert à caler une carte scannée ?", choix: ["Le géoréférenceur", "Le modeleur", "La calculatrice raster", "L'atlas"], bonne: 0, explication: "Couche > Géoréférenceur." },
        { question: "À quoi sert l'aimant de la barre Accrochage ?", choix: ["Agrandir la carte", "Accrocher les sommets aux entités existantes", "Supprimer des entités", "Changer le SCR"], bonne: 1, explication: "L'accrochage évite trous et chevauchements." }
      ]
    },

    /* ============================================================ */
    {
      id: "q3",
      numero: 3,
      titre: "Symbologie, étiquettes et mises en page",
      echelle: "1:100 000",
      resume: "Styles catégorisés, gradués et par règles, étiquettes, mise en page, atlas.",
      lecons: [
        {
          id: "q3-l1",
          titre: "Symbologie et étiquettes",
          duree: "30 min",
          objectifs: [
            "Choisir un type de style adapté",
            "Créer des étiquettes et des styles par règles"
          ],
          contenu: `
<p>Panneau <b>Style de couche</b> (F7) ou Propriétés &gt; Symbologie :</p>
<ul>
  <li><b>Symbole unique</b>, <b>Catégorisé</b> (valeurs de TYPE), <b>Gradué</b> (choroplèthe, mode Ruptures naturelles (Jenks)), <b>Ensemble de règles</b> (une requête par classe), <b>Carte de chaleur</b>.</li>
  <li>Symboles proportionnels : en mode Symbole unique, bouton <i>Valeur définie par les données</i> à côté de la taille &gt; <i>Assistant</i>.</li>
</ul>
<p><b>Étiquettes</b> : onglet Étiquettes &gt; <i>Étiquettes simples</i>, valeur <code>NOM</code>, tampon blanc. Avec <i>Étiquettes basées sur des règles</i>, on étiquette différemment les chefs-lieux (<code>"CHEF_LIEU" = 'Oui'</code>).</p>
<p>Un style s'enregistre en <code>.qml</code> (Style &gt; Enregistrer le style) pour être réutilisé.</p>`,
          exercice: `<ol>
  <li>Faites une carte graduée de la densité en 5 classes Jenks.</li>
  <li>Représentez les forages en symboles proportionnels au débit.</li>
  <li>Étiquetez les communes avec une règle spéciale pour les chefs-lieux.</li>
</ol>`
        },
        {
          id: "q3-l2",
          titre: "Mise en page et atlas",
          duree: "35 min",
          objectifs: [
            "Composer et exporter une mise en page",
            "Produire une carte par commune avec l'atlas"
          ],
          contenu: `
<p><i>Projet &gt; Nouvelle mise en page</i>. Ajoutez une carte, une légende, une barre d'échelle, une flèche du nord, une étiquette (titre, source) et une image (logo). Le panneau <i>Propriétés de l'objet</i> règle chaque élément. Export : <i>Mise en page &gt; Exporter au format PDF / image</i>.</p>
<h3>Atlas</h3>
<p>Panneau <b>Atlas</b> : cochez <i>Générer un atlas</i>, couche de couverture <code>Communes</code>, nom de page <code>NOM</code>. Dans les propriétés de la carte, cochez <i>Contrôlée par l'atlas</i>. Un titre dynamique s'écrit avec l'expression <code>[% 'Commune de ' || "NOM" %]</code>. <i>Atlas &gt; Exporter l'atlas en PDF</i> produit une page par commune.</p>`,
          exercice: `<ol>
  <li>Composez une carte A4 complète et exportez-la en PDF 300 dpi.</li>
  <li>Générez un atlas des 9 communes avec titre dynamique.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Pour cartographier une densité, on choisit le style :", choix: ["Catégorisé", "Gradué", "Symbole unique", "Carte de chaleur"], bonne: 1, explication: "Gradué classe une valeur numérique en intervalles." },
        { question: "L'atlas de QGIS correspond dans ArcGIS à :", choix: ["La série de cartes / pilotes de pages", "ModelBuilder", "La géodatabase", "Le géoréférencement"], bonne: 0, explication: "Une page par entité de la couche de couverture." },
        { question: "Dans quel format enregistre-t-on un style QGIS ?", choix: [".lyr", ".qml", ".mxd", ".py"], bonne: 1, explication: "Un .qml peut être réappliqué à n'importe quelle couche similaire." },
        { question: "Quel style permet une requête différente par classe ?", choix: ["Ensemble de règles", "Gradué", "Symbole unique", "Polygones inversés"], bonne: 0, explication: "Chaque règle a son filtre et son symbole." }
      ]
    },

    /* ============================================================ */
    {
      id: "q4",
      numero: 4,
      titre: "Traitements et analyse spatiale",
      echelle: "1:50 000",
      resume: "Boîte à outils de traitements, géotraitements vecteur, outils raster et calculatrice raster.",
      lecons: [
        {
          id: "q4-l1",
          titre: "Boîte à outils et géotraitements vecteur",
          duree: "35 min",
          objectifs: [
            "Trouver un algorithme et utiliser le traitement par lot",
            "Réaliser tampons, superpositions et statistiques par zone"
          ],
          contenu: `
<p>La <b>boîte à outils de traitements</b> (Ctrl+Alt+T) regroupe les algorithmes QGIS natifs, GDAL et GRASS. Tapez le nom dans la recherche. Chaque exécution est notée dans l'<i>Historique</i> (icône horloge), avec la commande Python.</p>
<table class="tab">
  <tr><th>QGIS</th><th>ArcGIS</th></tr>
  <tr><td>Tampon</td><td>Zone tampon (Buffer)</td></tr>
  <tr><td>Couper</td><td>Découper (Clip)</td></tr>
  <tr><td>Intersection</td><td>Intersecter</td></tr>
  <tr><td>Union</td><td>Agréger (Union)</td></tr>
  <tr><td>Différence</td><td>Effacer (Erase)</td></tr>
  <tr><td>Regrouper</td><td>Fusionner (Dissolve)</td></tr>
  <tr><td>Fusionner des couches vecteur</td><td>Combiner (Merge)</td></tr>
  <tr><td>Compter les points dans les polygones</td><td>Récapituler à l'intérieur</td></tr>
  <tr><td>Joindre les attributs par le plus proche</td><td>Proximité (Near)</td></tr>
</table>
<p>Attention aux noms : « Fusionner » dans QGIS assemble des couches, alors que « Fusionner » dans ArcGIS regroupe des entités.</p>
<p>Le bouton <b>Exécuter comme processus de lot</b> applique un algorithme à plusieurs couches d'un coup ; le bouton vert <i>Itérer sur cette couche</i> crée une sortie par entité.</p>`,
          exercice: `<ol>
  <li>Créez un tampon regroupé de 200 m autour des forages.</li>
  <li>Comptez les forages par commune.</li>
  <li>Avec un traitement par lot, coupez les 6 couches de base par la zone d'étude.</li>
</ol>`
        },
        {
          id: "q4-l2",
          titre: "Raster : terrain, calculatrice et reclassification",
          duree: "35 min",
          objectifs: [
            "Calculer pente, exposition et ombrage",
            "Utiliser la calculatrice raster et la reclassification par table",
            "Passer du raster au vecteur et inversement"
          ],
          contenu: `
<p>Ajoutez <code>MNT_50m.asc</code>, puis attribuez-lui le SCR EPSG:32630 (Propriétés &gt; Source) et exportez-le en GeoTIFF (clic droit &gt; Exporter &gt; Enregistrer sous).</p>
<ul>
  <li><b>Pente</b>, <b>Exposition</b>, <b>Ombrage</b> : groupe <i>Analyse raster de terrain</i> de la boîte à outils.</li>
  <li><b>Calculatrice raster</b> (menu Raster) : <code>("pente@1" &gt; 15) * 1</code> donne 1 pour les pentes fortes, 0 ailleurs.</li>
  <li><b>Reclassifier par table</b> : tableau min / max / nouvelle valeur.</li>
  <li><b>Polygoniser (raster vers vecteur)</b> et <b>Rastériser (vecteur vers raster)</b> (GDAL).</li>
  <li><b>Statistiques zonales</b> : altitude moyenne par commune.</li>
</ul>`,
          exercice: `<ol>
  <li>Calculez pente et ombrage ; affichez l'ombrage sous le MNT en mode de fusion Multiplier.</li>
  <li>Isolez les pentes &gt; 15° et polygonisez-les.</li>
  <li>Calculez l'altitude moyenne de chaque commune.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Dans QGIS, « Fusionner des couches vecteur » correspond dans ArcGIS à :", choix: ["Fusionner (Dissolve)", "Combiner (Merge)", "Agréger (Union)", "Intersecter"], bonne: 1, explication: "Attention aux faux amis : Regrouper (QGIS) = Fusionner/Dissolve (ArcGIS)." },
        { question: "Quel bouton applique un algorithme à plusieurs couches ?", choix: ["Exécuter comme processus de lot", "Itérer sur cette couche", "Historique", "Annuler"], bonne: 0, explication: "Le traitement par lot remplit un tableau d'entrées et de sorties." },
        { question: "Dans la calculatrice raster, que signifie « pente@1 » ?", choix: ["La première ligne", "La bande 1 du raster pente", "Une pente de 1°", "Un fichier temporaire"], bonne: 1, explication: "@1 désigne la bande ; un MNT n'en a qu'une." },
        { question: "Quel algorithme convertit un raster en polygones ?", choix: ["Rastériser", "Polygoniser", "Couper", "Regrouper"], bonne: 1, explication: "Polygoniser (GDAL) crée un polygone par groupe de cellules de même valeur." }
      ]
    },

    /* ============================================================ */
    {
      id: "q5",
      numero: 5,
      titre: "Le modeleur graphique",
      echelle: "1:25 000",
      resume: "Construire un modèle avec entrées et algorithmes, le réutiliser comme outil et l'exporter en Python.",
      lecons: [
        {
          id: "q5-l1",
          titre: "Construire un modèle",
          duree: "35 min",
          objectifs: [
            "Déclarer les entrées d'un modèle",
            "Enchaîner des algorithmes"
          ],
          contenu: `
<p><i>Traitement &gt; Modeleur graphique</i>. Contrairement à ModelBuilder, on déclare d'abord les <b>entrées</b> (onglet Entrées : couche vecteur, couche raster, nombre, champ…), puis on ajoute les <b>algorithmes</b> (onglet Algorithmes) en choisissant, pour chaque paramètre, une entrée du modèle ou la sortie d'un algorithme précédent.</p>
<ol>
  <li>Entrées : <i>Couche vecteur</i> « Forages », <i>Couche vecteur</i> « Occupation du sol », <i>Nombre</i> « Distance » (défaut 200).</li>
  <li>Algorithme <b>Tampon</b> : entrée = Forages, distance = Distance, regrouper le résultat.</li>
  <li>Algorithme <b>Extraire par attribut</b> : Occupation du sol, <code>TYPE = Urbain</code>.</li>
  <li>Algorithme <b>Différence</b> : tampon moins zones urbaines ; nommez la sortie « Périmètres » (elle devient une sortie du modèle).</li>
</ol>
<p>Enregistrez le modèle (<code>.model3</code>) dans le projet ou dans les modèles de l'utilisateur : il apparaît dans la boîte à outils, rubrique <i>Modèles</i>.</p>`,
          exercice: `<ol>
  <li>Construisez ce modèle et lancez-le avec 100 m puis 300 m.</li>
  <li>Ajoutez une étape <b>Compter les points dans les polygones</b> par commune.</li>
</ol>`
        },
        {
          id: "q5-l2",
          titre: "Itérer, documenter et exporter en Python",
          duree: "30 min",
          objectifs: [
            "Répéter un modèle sur plusieurs entités ou couches",
            "Exporter un modèle en script de traitement"
          ],
          contenu: `
<p>Le modeleur de QGIS n'a pas d'itérateur comme ModelBuilder. Pour répéter :</p>
<ul>
  <li><b>Itérer sur cette couche</b> (bouton vert à côté de l'entrée) : le modèle s'exécute une fois par entité, par exemple une fois par commune.</li>
  <li><b>Exécuter comme processus de lot</b> : une ligne par jeu de paramètres (plusieurs distances, plusieurs couches).</li>
</ul>
<p>Documentez le modèle (<i>Modifier l'aide du modèle</i>) : description, explication de chaque entrée. Enfin, <i>Exporter en script Python</i> produit un algorithme de traitement PyQGIS, point de départ du niveau 6.</p>`,
          exercice: `<ol>
  <li>Lancez le modèle avec « Itérer sur cette couche » sur les communes.</li>
  <li>Lancez-le en lot avec trois distances.</li>
  <li>Exportez-le en script Python et repérez les appels à <code>processing.run</code>.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Dans le modeleur QGIS, que déclare-t-on en premier ?", choix: ["Les sorties", "Les entrées", "Les styles", "Les extensions"], bonne: 1, explication: "Les entrées deviennent les paramètres du modèle." },
        { question: "Comment exécuter un modèle une fois par commune ?", choix: ["Avec un itérateur ModelBuilder", "Avec « Itérer sur cette couche »", "Avec l'atlas", "C'est impossible"], bonne: 1, explication: "Le bouton vert lance l'algorithme sur chaque entité." },
        { question: "Quelle est l'extension d'un modèle QGIS ?", choix: [".model3", ".tbx", ".qml", ".atbx"], bonne: 0, explication: ".model3 depuis QGIS 3." },
        { question: "L'export d'un modèle en Python produit :", choix: ["Un script arcpy", "Un algorithme de traitement PyQGIS", "Un fichier .qgz", "Une image"], bonne: 1, explication: "Le script appelle processing.run pour chaque étape." }
      ]
    },

    /* ============================================================ */
    {
      id: "q6",
      numero: 6,
      titre: "Programmation avec PyQGIS",
      echelle: "1:5 000",
      resume: "Console Python, processing.run, parcours des entités, scripts de traitement et export de mises en page.",
      lecons: [
        {
          id: "q6-l1",
          titre: "La console Python et processing.run",
          duree: "30 min",
          objectifs: [
            "Accéder aux couches du projet en Python",
            "Lancer un algorithme de la boîte à outils en Python"
          ],
          contenu: `
<p><i>Extensions &gt; Console Python</i> (Ctrl+Alt+P). Le bouton <i>Afficher l'éditeur</i> ouvre un éditeur de scripts. QGIS 3 utilise <b>Python 3</b>.</p>
<pre><code>couche = QgsProject.instance().mapLayersByName("Forages")[0]
print(couche.featureCount(), couche.crs().authid())

import processing
res = processing.run("native:buffer", {
    "INPUT": couche, "DISTANCE": 200, "DISSOLVE": True,
    "OUTPUT": "memory:"})
QgsProject.instance().addMapLayer(res["OUTPUT"])</code></pre>
<p>Pour connaître l'identifiant et les paramètres d'un algorithme : <code>processing.algorithmHelp("native:buffer")</code>, ou ouvrez l'algorithme, puis <i>Avancé &gt; Copier comme commande Python</i>.</p>`,
          exercice: `<ol>
  <li>Affichez le nom et le nombre d'entités de toutes les couches du projet.</li>
  <li>Lancez un tampon en Python et ajoutez le résultat à la carte.</li>
</ol>`
        },
        {
          id: "q6-l2",
          titre: "Parcourir et modifier les entités",
          duree: "30 min",
          objectifs: [
            "Lire les attributs et la géométrie",
            "Modifier une table dans un bloc d'édition"
          ],
          contenu: `
<pre><code>forages = QgsProject.instance().mapLayersByName("Forages")[0]
debits = [f["DEBIT_LS"] for f in forages.getFeatures() if f["DEBIT_LS"] is not None]
print("Débit moyen :", sum(debits) / len(debits))

# Requête attributaire
req = QgsFeatureRequest().setFilterExpression('"ETAT" = \\'Exploité\\'')
for f in forages.getFeatures(req):
    print(f["ID"], f.geometry().asPoint())

# Modification
with edit(forages):
    for f in forages.getFeatures():
        if f["DEBIT_LS"] is not None and f["DEBIT_LS"] &lt; 2:
            f["ETAT"] = "Faible débit"
            forages.updateFeature(f)</code></pre>
<p><code>with edit(couche):</code> ouvre l'édition, puis enregistre (ou annule en cas d'erreur) automatiquement.</p>`,
          exercice: `<ol>
  <li>Calculez le débit moyen des forages exploités.</li>
  <li>Ajoutez un champ <code>CLASSE</code> et remplissez-le (Faible, Moyen, Fort) selon le débit.</li>
</ol>`
        },
        {
          id: "q6-l3",
          titre: "Scripts de traitement et export automatique",
          duree: "35 min",
          objectifs: [
            "Créer un script qui apparaît dans la boîte à outils",
            "Exporter un atlas en Python"
          ],
          contenu: `
<p>Dans la boîte à outils, icône Python &gt; <i>Créer un nouveau script à partir d'un modèle</i>. Le modèle définit une classe <code>QgsProcessingAlgorithm</code> avec ses paramètres. Le script enregistré apparaît dans <i>Scripts</i> : il s'ouvre comme un outil, avec traitement par lot possible.</p>
<p>Export d'une mise en page ou d'un atlas :</p>
<pre><code>mp = QgsProject.instance().layoutManager().layoutByName("Carte communes")
atlas = mp.atlas()
QgsLayoutExporter.exportToPdf(atlas, r"C:\\ENIV\\TP\\Sorties\\atlas.pdf",
                              QgsLayoutExporter.PdfExportSettings())</code></pre>
<p>Le fichier <code>qgis_01_bases.py</code> (Téléchargements) reprend ces exemples.</p>`,
          exercice: `<ol>
  <li>Créez un script de traitement « Périmètre de protection » avec deux paramètres (couche, distance).</li>
  <li>Exportez votre atlas des communes en PDF par script.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Quelle fonction lance un algorithme de la boîte à outils ?", choix: ["arcpy.Buffer", "processing.run", "iface.run", "QgsBuffer()"], bonne: 1, explication: "processing.run(\"identifiant\", {paramètres})." },
        { question: "Comment obtenir une couche du projet par son nom ?", choix: ["QgsProject.instance().mapLayersByName(\"Forages\")[0]", "arcpy.mp.Layer(\"Forages\")", "open(\"Forages\")", "iface.Forages"], bonne: 0, explication: "mapLayersByName renvoie une liste (plusieurs couches peuvent porter le même nom)." },
        { question: "À quoi sert « with edit(couche): » ?", choix: ["Ouvrir la table", "Démarrer l'édition et enregistrer automatiquement à la fin", "Supprimer la couche", "Changer le style"], bonne: 1, explication: "Le bloc valide les changements ou les annule en cas d'erreur." },
        { question: "Comment connaître les paramètres de native:buffer ?", choix: ["processing.algorithmHelp(\"native:buffer\")", "help(buffer)", "Dans les propriétés du projet", "On ne peut pas"], bonne: 0, explication: "algorithmHelp liste les paramètres et leurs types." }
      ]
    },

    /* ============================================================ */
    {
      id: "q7",
      numero: 7,
      titre: "MNT, hydrologie et inondations",
      echelle: "1:2 500",
      resume: "Hydrologie avec GRASS dans QGIS : remplissage, r.watershed, réseau, bassin versant depuis un exutoire, zones inondables.",
      lecons: [
        {
          id: "q7-l1",
          titre: "Réseau hydrographique avec GRASS",
          duree: "40 min",
          objectifs: [
            "Utiliser les outils GRASS de la boîte à outils",
            "Calculer accumulation, directions et réseau avec r.watershed"
          ],
          contenu: `
<p>La théorie (cuvettes, D8, accumulation, seuil) est expliquée au niveau 7 du parcours ArcMap. Dans QGIS, on utilise <b>GRASS</b>, intégré à la boîte à outils (groupe <i>GRASS &gt; Raster</i>).</p>
<ol>
  <li><b>r.fill.dir</b> : remplit les cuvettes et calcule les directions (sorties : MNT rempli, directions, zones problématiques).</li>
  <li><b>r.watershed</b> sur le MNT rempli : <i>Minimum size of exterior watershed basin</i> = 400 (cellules), cochez <i>Enable Single Flow Direction (D8)</i>. Sorties : <i>Number of cells that drain through each cell</i> (accumulation), <i>Drainage direction</i>, <i>Stream segments</i>, <i>Unique label for each watershed basin</i>.</li>
  <li><b>r.to.vect</b> (type line) sur les segments de cours d'eau pour obtenir des lignes, ou <i>Polygoniser</i> pour les bassins.</li>
</ol>
<div class="astuce"><b>Attention :</b> r.watershed donne une accumulation <b>négative</b> pour les cellules qui reçoivent de l'eau venant de l'extérieur du MNT. Utilisez <code>abs("acc@1")</code> dans la calculatrice raster pour l'affichage.</div>
<p>Pour l'ordre de Strahler, installez l'extension <b>SAGA NextGen Provider</b> (algorithme <i>Strahler order</i>) ou utilisez <i>Channel network and drainage basins</i> de SAGA.</p>`,
          exercice: `<ol>
  <li>Lancez r.fill.dir puis r.watershed avec un seuil de 400 cellules.</li>
  <li>Vectorisez le réseau et comparez-le avec la couche Oueds.</li>
  <li>Refaites le calcul avec 200 et 1 000 cellules.</li>
</ol>`
        },
        {
          id: "q7-l2",
          titre: "Bassin versant et zones inondables",
          duree: "45 min",
          objectifs: [
            "Délimiter un bassin versant depuis un exutoire",
            "Cartographier la susceptibilité à l'inondation"
          ],
          contenu: `
<h3>Bassin versant</h3>
<p><b>r.water.outlet</b> : entrée = <i>Drainage direction</i> de r.watershed, coordonnées de l'exutoire (cliquez sur la carte, sur une cellule du réseau ; les coordonnées de <code>Exutoire.shp</code> se lisent avec l'outil Identifier). Polygonisez le résultat, puis calculez <code>$area / 1e6</code> et l'indice de Gravelius <code>0.28 * $perimeter / sqrt($area)</code>.</p>
<h3>Zones inondables</h3>
<ol>
  <li>Distance à l'oued : <b>Rastériser</b> le réseau, puis <b>Proximité (distance raster)</b> (GDAL).</li>
  <li>Hauteur au-dessus de l'oued : avec GRASS, <b>r.stream.distance</b> (extension GRASS) ; à défaut, approchez-la avec la différence entre le MNT et un <i>filtre minimum</i> local, ou utilisez la distance seule.</li>
  <li>Pente, accumulation, occupation du sol rastérisée.</li>
  <li><b>Reclassifier par table</b> chaque critère de 1 à 5, puis <b>Calculatrice raster</b> : <code>0.35*"dist@1" + 0.25*"haut@1" + 0.20*"pente@1" + 0.10*"acc@1" + 0.10*"occ@1"</code>.</li>
  <li>Validation : <b>Prélever les valeurs raster</b> sur <code>Laisses_crues.shp</code>.</li>
</ol>
<p>Le script <code>qgis_02_hydrologie.py</code> automatise la partie réseau et bassin versant.</p>`,
          exercice: `<ol>
  <li>Délimitez le bassin versant de l'oued Tamda et calculez sa surface.</li>
  <li>Construisez la carte de susceptibilité à l'inondation et validez-la avec les laisses de crue.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Quel outil GRASS calcule en une fois accumulation, directions, réseau et bassins ?", choix: ["r.fill.dir", "r.watershed", "r.to.vect", "r.reclass"], bonne: 1, explication: "r.watershed produit toutes ces couches à partir du MNT." },
        { question: "Pourquoi certaines valeurs d'accumulation de r.watershed sont-elles négatives ?", choix: ["Erreur de MNT", "L'eau vient en partie de l'extérieur de la zone", "Pente nulle", "SCR incorrect"], bonne: 1, explication: "Ces cellules peuvent être sous-estimées ; on prend la valeur absolue pour l'affichage." },
        { question: "Quel outil délimite le bassin versant en amont d'un point ?", choix: ["r.water.outlet", "Couper", "Proximité", "Atlas"], bonne: 0, explication: "Il part des directions de drainage et des coordonnées de l'exutoire." },
        { question: "Avec quel outil combine-t-on les critères notés en somme pondérée ?", choix: ["Calculatrice raster", "Regrouper", "Géoréférenceur", "Mise en page"], bonne: 0, explication: "La calculatrice raster accepte une expression avec les poids." }
      ]
    },

    /* ============================================================ */
    {
      id: "q8",
      numero: 8,
      titre: "Vulnérabilité aux risques naturels majeurs",
      echelle: "1:1 000",
      resume: "Multicritère dans QGIS, cartes de feux, séisme, tsunami, glissements et synthèse multirisque.",
      lecons: [
        {
          id: "q8-l1",
          titre: "Multicritère dans QGIS",
          duree: "35 min",
          objectifs: [
            "Préparer les critères raster avec les outils QGIS et GDAL",
            "Combiner les critères avec la calculatrice raster"
          ],
          contenu: `
<p>La méthode (aléa, vulnérabilité, notes de 1 à 5, poids, AHP, validation) est décrite au niveau 8 du parcours ArcMap. Équivalences des outils :</p>
<table class="tab">
  <tr><th>Étape</th><th>ArcGIS</th><th>QGIS</th></tr>
  <tr><td>Distance</td><td>Distance euclidienne</td><td>Rastériser + Proximité (distance raster)</td></tr>
  <tr><td>Densité de points</td><td>Densité de noyau</td><td>Carte de chaleur (estimation par noyau)</td></tr>
  <tr><td>Vecteur → raster</td><td>Polygone vers raster</td><td>Rastériser (vecteur vers raster)</td></tr>
  <tr><td>Notation</td><td>Reclassification</td><td>Reclassifier par table</td></tr>
  <tr><td>Somme pondérée</td><td>Superposition pondérée</td><td>Calculatrice raster</td></tr>
  <tr><td>Maximum de plusieurs rasters</td><td>Statistiques de cellules</td><td>Statistiques de cellules</td></tr>
  <tr><td>Bilan par commune</td><td>Statistiques zonales (table)</td><td>Statistiques zonales</td></tr>
  <tr><td>Validation</td><td>Extraire les valeurs vers des points</td><td>Prélever les valeurs raster</td></tr>
</table>
<div class="astuce"><b>Alignement :</b> pour la calculatrice raster, tous les rasters doivent avoir la même emprise et la même taille de cellule. Lors de la rastérisation, indiquez l'emprise du MNT et une résolution de 50 m.</div>`,
          exercice: `<ol>
  <li>Préparez le critère « distance aux routes » (rastériser puis proximité) et notez-le de 1 à 5.</li>
  <li>Vérifiez avec les propriétés des couches que tous les rasters ont la même emprise et la même résolution.</li>
</ol>`
        },
        {
          id: "q8-l2",
          titre: "Cartes d'aléa : feux, séisme, tsunami, glissements",
          duree: "60 min",
          objectifs: [
            "Produire les quatre cartes d'aléa dans QGIS",
            "Valider avec les événements observés"
          ],
          contenu: `
<p>Les critères et les poids sont ceux du fichier <code>Tables\\poids_multicritere.xlsx</code> (ouvrable directement dans QGIS) :</p>
<ul>
  <li><b>Feux</b> : occupation du sol 35, pente 20, exposition 15 (outil <i>Exposition</i>, versants sud = 5), routes 15, lieux habités 15. Validation : Foyers_incendies.</li>
  <li><b>Séisme</b> : failles actives 40 (filtre <code>"ACTIVE" = 'Oui'</code>), densité d'épicentres 25 (carte de chaleur, rayon 3 000 m), effet de site 25 (rastériser le champ <code>AMPLIF</code>), pente 10.</li>
  <li><b>Tsunami</b> : sur <code>MNT_cote_25m</code>, terre = <code>("mnt@1" &gt; 0) * "mnt@1"</code> ; altitude 50, distance à la côte 35, pente 15. Scénario de vague de 5 m : <code>("mnt@1" &gt; 0) AND ("mnt@1" &lt;= 5) AND ("dist@1" &lt;= 1000)</code>.</li>
  <li><b>Glissements</b> : rastériser <code>SUSC_GLIS</code> (déjà noté de 1 à 5) 35, pente 30, oueds 15, occupation 10, routes 10. Validation : Glissements.</li>
</ul>
<p>Le script <code>qgis_03_risque_feux.py</code> réalise la carte des feux de bout en bout et sert de modèle pour les trois autres.</p>`,
          exercice: `<ol>
  <li>Réalisez la carte de risque de feux avec le modeleur graphique (une entrée par couche, les poids comme entrées numériques).</li>
  <li>Réalisez les cartes séisme, tsunami et glissements.</li>
  <li>Comparez vos résultats avec ceux obtenus dans ArcGIS (même données, mêmes poids).</li>
</ol>`
        },
        {
          id: "q8-l3",
          titre: "Synthèse multirisque et atlas des communes",
          duree: "40 min",
          objectifs: [
            "Combiner les aléas",
            "Produire un atlas de synthèse par commune"
          ],
          contenu: `
<ul>
  <li><b>Statistiques de cellules</b> (statistique Maximum) sur les quatre cartes de classes : aléa le plus fort par cellule.</li>
  <li>Cumul des aléas forts dans la calculatrice raster : <code>("inond@1" &gt;= 4) + ("feux@1" &gt;= 4) + ("seisme@1" &gt;= 4) + ("gliss@1" &gt;= 4)</code>.</li>
  <li><b>Statistiques zonales</b> sur <code>Communes</code> (moyenne du cumul), puis style gradué.</li>
  <li>Mise en page avec <b>atlas</b> : une page par commune, avec la carte multirisque, un tableau d'attributs (écoles exposées) et la mention <i>données fictives à usage pédagogique</i>.</li>
</ul>`,
          exercice: `<ol>
  <li>Produisez les cartes d'aléa maximal et de cumul.</li>
  <li>Générez un atlas multirisque des 9 communes en PDF.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Dans QGIS, comment obtient-on une carte de distance aux routes ?", choix: ["Tampon", "Rastériser puis Proximité (distance raster)", "Regrouper", "Couper"], bonne: 1, explication: "Proximité (GDAL) travaille sur un raster : on rastérise d'abord les routes." },
        { question: "L'équivalent QGIS de la Densité de noyau est :", choix: ["Carte de chaleur (estimation par noyau)", "Statistiques zonales", "Polygoniser", "Atlas"], bonne: 0, explication: "Heatmap (Kernel Density Estimation)." },
        { question: "Que faut-il vérifier avant une somme pondérée dans la calculatrice raster ?", choix: ["Les couleurs", "Même emprise et même taille de cellule", "Le nom des fichiers", "Le format .asc"], bonne: 1, explication: "Sinon les cellules ne se superposent pas exactement." },
        { question: "Quel outil donne l'aléa le plus fort par cellule ?", choix: ["Statistiques de cellules (Maximum)", "Statistiques zonales", "Fusionner des couches", "Reclassifier"], bonne: 0, explication: "Il compare les rasters cellule par cellule." }
      ]
    },
    /* ============================================================ */
    {
      id: "q9",
      numero: 9,
      titre: "Connecter l'IA à QGIS",
      echelle: "1:500",
      resume: "Connecter un assistant IA (Claude) au logiciel QGIS grâce au protocole MCP, piloter un projet en langage naturel sur les données de Tlemcen, et garder la maîtrise des résultats.",
      lecons: [
        {
          id: "q9-l1",
          titre: "Comprendre MCP et installer QGIS MCP",
          duree: "40 min",
          objectifs: [
            "Comprendre le rôle du client, du serveur MCP et de l'extension QGIS",
            "Installer QGIS MCP et le relier à Claude Desktop",
            "Vérifier la connexion avec un premier test"
          ],
          contenu: `
<p>Le <b>MCP</b> (<i>Model Context Protocol</i>) est un protocole ouvert qui permet à un assistant IA d'utiliser des <b>outils</b> fournis par un logiciel. Au lieu de seulement répondre par du texte, l'assistant peut demander à QGIS de charger une couche, de lancer un algorithme ou de produire une carte.</p>
<table class="tab">
  <tr><th>Élément</th><th>Rôle</th></tr>
  <tr><td><b>Client MCP</b></td><td>L'application de discussion : ici <b>Claude Desktop</b>. C'est là que vous écrivez vos demandes.</td></tr>
  <tr><td><b>Serveur MCP</b></td><td>Petit programme Python lancé par Claude Desktop. Il décrit les outils disponibles (charger une couche, lancer un traitement…).</td></tr>
  <tr><td><b>Extension QGIS</b></td><td>Ouvre une connexion locale dans QGIS et exécute réellement les commandes reçues.</td></tr>
</table>
<p>Nous utilisons le projet libre <b>QGIS MCP</b> de J. J. Santos (github.com/jjsantos01/qgis_mcp). C'est un projet communautaire, ni officiel QGIS ni officiel Anthropic. L'auteur l'a testé sur QGIS 3.22 : vérifiez-le sur votre version avant la séance.</p>
<h3>Installation</h3>
<ol>
  <li>Installez <b>Claude Desktop</b> (claude.ai/download) et connectez-vous avec votre compte.</li>
  <li>Installez <b>Python 3.10</b> ou plus récent, puis le gestionnaire <b>uv</b>. Dans PowerShell :<br><code>powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code></li>
  <li>Sur la page GitHub du projet, cliquez sur <i>Code &gt; Download ZIP</i> et décompressez dans <code>C:\\ENIV\\mcp\\qgis_mcp</code>.</li>
  <li>Copiez le dossier <code>qgis_mcp_plugin</code> dans le dossier des extensions de votre profil QGIS. Pour le trouver : <i>Préférences &gt; Profils utilisateurs &gt; Ouvrir le dossier du profil actif</i>, puis <code>python\\plugins</code>.</li>
  <li>Redémarrez QGIS. Dans <i>Extensions &gt; Installer/Gérer les extensions</i>, onglet <i>Toutes</i>, cherchez « QGIS MCP » et cochez-la.</li>
  <li>Lancez <i>Extensions &gt; QGIS MCP &gt; QGIS MCP</i> et cliquez sur <b>Start Server</b>.</li>
  <li>Dans Claude Desktop : <i>Paramètres &gt; Développeur &gt; Modifier la configuration</i>. Collez ce bloc dans <code>claude_desktop_config.json</code> (fichier <code>mcp_qgis_config.json</code> dans les Téléchargements) :</li>
</ol>
<pre><code>{
  "mcpServers": {
    "qgis": {
      "command": "uv",
      "args": [
        "--directory",
        "C:/ENIV/mcp/qgis_mcp/src/qgis_mcp",
        "run",
        "qgis_mcp_server.py"
      ]
    }
  }
}</code></pre>
<p>Redémarrez Claude Desktop. L'icône des outils doit afficher le serveur <b>qgis</b>. Premier test : écrivez « Vérifie la connexion avec QGIS (ping) puis donne-moi la version de QGIS ».</p>
<div class="astuce"><b>À ne pas confondre :</b> le dépôt officiel des extensions QGIS propose aussi une extension « QGIS MCP » (N. Karasiak). Elle fonctionne avec son propre serveur <code>qgis-mcp</code> et une autre configuration. Ne mélangez pas les deux projets.</div>`,
          exercice: `<ol>
  <li>Installez Claude Desktop, uv et l'extension QGIS MCP.</li>
  <li>Démarrez le serveur dans QGIS et ajoutez la configuration dans Claude Desktop.</li>
  <li>Faites le test « ping » et notez la version de QGIS renvoyée par Claude.</li>
</ol>`
        },
        {
          id: "q9-l2",
          titre: "Sans abonnement : une IA gratuite ou locale",
          duree: "35 min",
          objectifs: [
            "Savoir ce que permet l'offre gratuite de Claude",
            "Connecter QGIS à un modèle d'IA local et gratuit (LM Studio ou Ollama)",
            "Adapter ses demandes à un petit modèle"
          ],
          contenu: `
<p>Claude est accessible en Algérie, avec un compte gratuit. L'offre gratuite a cependant des <b>limites de messages</b> qui peuvent interrompre un TP, et elle demande une connexion Internet. Si vos élèves n'ont pas d'abonnement, ou si la salle n'a pas Internet, utilisez un <b>modèle d'IA local</b> : il tourne sur le poste, gratuitement, et le même serveur MCP fonctionne avec lui.</p>
<table class="tab">
  <tr><th>Solution</th><th>Coût</th><th>Internet</th><th>Remarque</th></tr>
  <tr><td>Claude Desktop, offre gratuite</td><td>Gratuit</td><td>Oui</td><td>Le plus simple, mais nombre de messages limité</td></tr>
  <tr><td>Claude Desktop, abonnement</td><td>Payant</td><td>Oui</td><td>Le plus fiable pour les TP longs</td></tr>
  <tr><td><b>LM Studio</b> + modèle local</td><td>Gratuit</td><td>Seulement pour télécharger le modèle</td><td>Interface graphique, conseillé en salle</td></tr>
  <tr><td><b>Ollama</b> + ollmcp</td><td>Gratuit, libre</td><td>Seulement pour télécharger le modèle</td><td>En ligne de commande</td></tr>
</table>
<h3>Option 1 : LM Studio</h3>
<ol>
  <li>Installez <b>LM Studio</b> (lmstudio.ai), version 0.3.17 ou plus récente : c'est à partir de cette version qu'il gère MCP.</li>
  <li>Téléchargez un modèle capable d'utiliser des outils (<i>tool use</i>), par exemple <b>Qwen3 8B</b> ou <b>Qwen2.5 7B Instruct</b>.</li>
  <li>Panneau de droite, onglet <i>Program</i> &gt; <i>Install &gt; Edit mcp.json</i>. Collez le même bloc <code>mcpServers</code> que pour Claude Desktop (fichier <code>mcp_qgis_config.json</code>), puis enregistrez.</li>
  <li>Démarrez le serveur dans QGIS (bouton Start Server), ouvrez une discussion avec le modèle et testez « ping ».</li>
</ol>
<h3>Option 2 : Ollama et ollmcp</h3>
<ol>
  <li>Installez <b>Ollama</b> (ollama.com), puis dans un terminal : <code>ollama pull qwen2.5:7b</code>.</li>
  <li>Installez le client MCP libre <b>ollmcp</b> (Python 3.11 ou plus) : <code>uv tool install ollmcp</code>.</li>
  <li>Lancez-le avec la configuration du site : <code>ollmcp --servers-json C:\\ENIV\\mcp\\mcp_qgis_config.json --model qwen2.5:7b</code>.</li>
</ol>
<div class="astuce"><b>Matériel et méthode :</b> comptez au moins 16 Go de mémoire pour un modèle de 7 à 8 milliards de paramètres ; une carte graphique accélère beaucoup. Un petit modèle se trompe plus souvent qu'un grand : écrivez une demande par étape, nommez précisément les couches et les champs, et vérifiez chaque résultat. Avantage : les données ne quittent pas le poste.</div>`,
          exercice: `<ol>
  <li>Installez LM Studio ou Ollama et connectez-le au serveur MCP de QGIS.</li>
  <li>Refaites les étapes 1 à 4 du TP de la leçon suivante avec le modèle local.</li>
  <li>Comparez avec Claude : demandes comprises, erreurs, temps de réponse.</li>
</ol>`
        },
        {
          id: "q9-l3",
          titre: "TP : piloter QGIS en langage naturel",
          duree: "45 min",
          objectifs: [
            "Connaître les outils exposés par QGIS MCP",
            "Réaliser une analyse complète sur les données de Tlemcen par des demandes écrites",
            "Contrôler chaque résultat dans QGIS"
          ],
          contenu: `
<p>QGIS MCP propose 15 outils. Claude choisit lui-même l'outil adapté à votre demande, et Claude Desktop vous demande l'autorisation avant chaque utilisation.</p>
<table class="tab">
  <tr><th>Outil</th><th>Ce qu'il fait</th></tr>
  <tr><td><code>ping</code>, <code>get_qgis_info</code></td><td>Tester la connexion, version de QGIS</td></tr>
  <tr><td><code>create_new_project</code>, <code>load_project</code>, <code>get_project_info</code>, <code>save_project</code></td><td>Gérer le projet .qgz</td></tr>
  <tr><td><code>add_vector_layer</code>, <code>add_raster_layer</code>, <code>get_layers</code>, <code>remove_layer</code>, <code>zoom_to_layer</code></td><td>Gérer les couches</td></tr>
  <tr><td><code>get_layer_features</code></td><td>Lire les entités et leurs attributs</td></tr>
  <tr><td><code>execute_processing</code></td><td>Lancer un algorithme de la boîte à outils de traitements</td></tr>
  <tr><td><code>render_map</code></td><td>Exporter la vue de la carte en image</td></tr>
  <tr><td><code>execute_code</code></td><td>Exécuter du code PyQGIS (à surveiller, voir leçon suivante)</td></tr>
</table>
<h3>Scénario du TP (données de Tlemcen)</h3>
<p>Écrivez les demandes une par une et vérifiez le résultat dans QGIS après chacune :</p>
<ol>
  <li>« Crée un nouveau projet QGIS et enregistre-le dans <code>C:/ENIV/Projets/TP_IA.qgz</code>. »</li>
  <li>« Ajoute les couches <code>Communes.shp</code> et <code>Forages.shp</code> du dossier <code>C:/ENIV/TP/Shapefiles</code>, puis le raster <code>C:/ENIV/TP/MNT/MNT_50m.asc</code>. Quel est le SCR de chaque couche ? »</li>
  <li>« Combien de forages sont à l'état Exploité ? Donne le débit moyen (champ DEBIT_LS). »</li>
  <li>« Crée une zone tampon regroupée de 200 m autour des forages. »</li>
  <li>« Compte le nombre de forages dans chaque commune. »</li>
  <li>« Applique un style gradué en 5 classes sur ce nombre, puis exporte la carte en PNG dans <code>C:/ENIV/TP/Sorties/forages_ia.png</code>. »</li>
  <li>« Donne-moi le script PyQGIS qui refait toutes ces étapes. » Enregistrez-le dans <code>C:\\ENIV\\TP\\Scripts</code>.</li>
</ol>
<div class="astuce"><b>Contrôle :</b> ouvrez la table attributaire, vérifiez le SCR (EPSG:32630) et les unités. Comparez le nombre de forages par commune avec le résultat de l'algorithme <i>Compter les points dans les polygones</i> lancé à la main (niveau 4).</div>`,
          exercice: `<ol>
  <li>Réalisez le scénario complet et joignez la carte PNG à votre compte rendu.</li>
  <li>Notez les demandes que Claude a mal comprises et reformulez-les.</li>
  <li>Comparez le script PyQGIS obtenu avec <code>qgis_01_bases.py</code>.</li>
</ol>`
        },
        {
          id: "q9-l4",
          titre: "Bonnes pratiques, limites et sécurité",
          duree: "25 min",
          objectifs: [
            "Garder le contrôle sur ce que l'assistant exécute",
            "Protéger les données et vérifier les résultats"
          ],
          contenu: `
<ul>
  <li><b>Autorisations</b> : Claude Desktop demande votre accord avant chaque outil. Lisez la demande et préférez « Autoriser une fois ».</li>
  <li><b>execute_code</b> exécute n'importe quel code Python dans QGIS. Lisez toujours le code proposé avant d'accepter : il peut supprimer ou écraser des fichiers.</li>
  <li><b>Données</b> : le contenu des couches lues par Claude est envoyé au service d'IA. Utilisez les données fictives du TP, jamais de données confidentielles ou personnelles.</li>
  <li><b>Vérification</b> : l'IA peut se tromper (mauvaise couche, mauvaise unité, SCR oublié) tout en répondant avec assurance. Contrôlez chaque résultat comme vous le feriez pour le travail d'un camarade.</li>
  <li><b>Reproductibilité</b> : une conversation ne se rejoue pas à l'identique. Demandez le script PyQGIS ou construisez un modèle (niveau 5) pour garder une méthode stable.</li>
  <li><b>Travaillez sur une copie</b> du dossier <code>C:\\ENIV\\TP</code> et enregistrez le projet avant chaque demande importante.</li>
  <li>Avec Claude, il faut une connexion Internet et un compte. Sans abonnement ni connexion, utilisez un modèle local (leçon 2), et gardez la maîtrise des outils classiques : ils restent indispensables.</li>
</ul>
<p>L'IA ne remplace pas la méthode : c'est vous qui choisissez les critères, les poids et l'interprétation d'une carte de risque. Elle aide à aller plus vite sur les étapes répétitives.</p>`,
          exercice: `<ol>
  <li>Demandez à Claude une carte de pentes supérieures à 15° et vérifiez le résultat avec la calculatrice raster (niveau 4).</li>
  <li>Rédigez en 5 lignes les avantages et les risques de l'IA pour un bureau d'études SIG.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Dans QGIS MCP, quel est le rôle de Claude Desktop ?", choix: ["Le serveur MCP", "Le client MCP", "Une extension QGIS", "Un format de données"], bonne: 1, explication: "Claude Desktop est le client : il lance le serveur MCP et appelle ses outils." },
        { question: "Que faut-il faire dans QGIS avant d'écrire à Claude ?", choix: ["Rien", "Cliquer sur Start Server dans l'extension QGIS MCP", "Ouvrir la console Python", "Installer GRASS"], bonne: 1, explication: "L'extension doit être démarrée pour recevoir les commandes." },
        { question: "Quel outil demande le plus de prudence ?", choix: ["ping", "get_layers", "execute_code", "zoom_to_layer"], bonne: 2, explication: "execute_code exécute n'importe quel code Python : lisez-le avant d'accepter." },
        { question: "Comment rendre une analyse faite avec l'IA reproductible ?", choix: ["Relancer la même conversation", "Demander le script PyQGIS ou construire un modèle", "Faire une capture d'écran", "Ce n'est pas possible"], bonne: 1, explication: "Un script ou un modèle se rejoue à l'identique, pas une conversation." },
        { question: "Quelle solution fonctionne sans abonnement et sans Internet pendant le TP ?", choix: ["Claude Desktop", "LM Studio ou Ollama avec un modèle local", "Le géoréférencement", "Aucune"], bonne: 1, explication: "Un modèle local tourne sur le poste ; Internet ne sert qu'à le télécharger une fois." }
      ]
    },
    /* ============================================================ */
    {
      id: "q10",
      numero: 10,
      titre: "Google Earth Engine dans QGIS",
      echelle: "1:10 000",
      resume: "Accéder gratuitement aux images satellites du monde entier depuis QGIS : NDVI Sentinel-2 et occupation du sol autour de Tlemcen avec l'extension Google Earth Engine.",
      lecons: [
        {
          id: "q10-l1",
          titre: "Accès gratuit à Earth Engine et installation de l'extension",
          duree: "30 min",
          objectifs: [
            "Comprendre ce qu'apporte Google Earth Engine",
            "Créer un projet Cloud non commercial gratuit",
            "Installer et authentifier l'extension Google Earth Engine dans QGIS"
          ],
          contenu: `
<p><b>Google Earth Engine</b> (GEE) est une plateforme de Google qui réunit un immense catalogue d'images et de données (Sentinel-2, Landsat, SRTM, occupation du sol, climat…) et qui fait les calculs sur ses propres serveurs. On n'a donc rien à télécharger avant d'analyser : seul le résultat arrive dans QGIS.</p>
<h3>Accès gratuit pour l'enseignement</h3>
<ol>
  <li>Avec un compte Google, ouvrez <code>console.cloud.google.com/earth-engine</code> et créez un <b>projet Cloud</b>.</li>
  <li>Enregistrez-le pour un <b>usage non commercial</b> (enseignement, études, recherche) et remplissez le questionnaire d'éligibilité. Aucune carte bancaire n'est demandée pour le niveau gratuit.</li>
  <li>Le niveau <i>Community</i> donne un quota mensuel gratuit de calcul (150 heures EECU par mois en 2026), largement suffisant pour les TP. L'éligibilité est revérifiée chaque année.</li>
  <li>L'enseignant peut créer un seul projet et y ajouter ses élèves.</li>
</ol>
<h3>Installer l'extension</h3>
<ol>
  <li>Il faut <b>QGIS 3.44 ou plus récent</b> pour la version actuelle de l'extension.</li>
  <li><i>Extensions &gt; Installer/Gérer les extensions</i>, cherchez « Google Earth Engine » et installez-la.</li>
  <li>Au premier lancement, cliquez sur OK : un onglet du navigateur s'ouvre, choisissez votre compte Google et autorisez l'accès. Les identifiants sont enregistrés sur l'ordinateur.</li>
  <li>Dans la fenêtre <i>Select Earth Engine project</i>, collez le nom de votre projet Cloud (visible dans l'éditeur de code Earth Engine, menu du compte &gt; <i>Project Info</i>).</li>
</ol>
<p>Premier test dans la console Python (Ctrl+Alt+P) : le relief SRTM centré sur Tlemcen.</p>
<pre><code>import ee
from ee_plugin import Map

mnt = ee.Image("USGS/SRTMGL1_003")
Map.addLayer(mnt, {"min": 0, "max": 1800,
                   "palette": ["006633", "E5FFCC", "662A00", "D8D8D8"]}, "SRTM")
Map.setCenter(-1.32, 34.88, 10)</code></pre>
<div class="astuce"><b>À savoir :</b> les couches Earth Engine sont <b>diffusées</b> comme un fond de carte. Pour les analyser avec les outils de QGIS, il faut les exporter en GeoTIFF (leçon suivante). L'outil se trouve aussi dans la boîte à outils de traitements, groupe <i>Google Earth Engine</i>.</div>`,
          exercice: `<ol>
  <li>Créez votre projet Cloud non commercial et installez l'extension.</li>
  <li>Affichez le SRTM sur Tlemcen et comparez-le visuellement avec <code>MNT_50m.asc</code>.</li>
</ol>`
        },
        {
          id: "q10-l2",
          titre: "NDVI Sentinel-2 autour de Tlemcen",
          duree: "40 min",
          objectifs: [
            "Construire une image Sentinel-2 sans nuages",
            "Calculer et cartographier le NDVI",
            "Exporter le résultat en GeoTIFF et l'analyser dans QGIS"
          ],
          contenu: `
<p>Le <b>NDVI</b> (indice de végétation par différence normalisée) vaut <code>(PIR − Rouge) / (PIR + Rouge)</code>. Avec Sentinel-2, le proche infrarouge est la bande <code>B8</code> et le rouge la bande <code>B4</code>. Il va de −1 à 1 : eau et sols nus sous 0,2, végétation dense au-dessus de 0,5.</p>
<pre><code>import ee
from ee_plugin import Map

zone = ee.Geometry.Rectangle([-1.55, 34.70, -1.10, 35.00])   # Tlemcen et ses monts
cs = ee.ImageCollection("GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED")

s2 = (ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
      .filterBounds(zone)
      .filterDate("2025-03-01", "2025-05-31")          # printemps
      .linkCollection(cs, ["cs_cdf"])
      .map(lambda img: img.updateMask(img.select("cs_cdf").gte(0.6)))
      .median()
      .clip(zone))

ndvi = s2.normalizedDifference(["B8", "B4"]).rename("NDVI")

Map.addLayer(s2, {"bands": ["B4", "B3", "B2"], "min": 0, "max": 3000}, "Sentinel-2 couleurs naturelles")
Map.addLayer(ndvi, {"min": 0, "max": 0.8, "palette": ["8c510a", "f6e8c3", "5ab4ac", "01665e"]}, "NDVI printemps 2025")
Map.centerObject(zone, 11)</code></pre>
<p><b>Cloud Score+</b> masque les pixels nuageux (seuil 0,6) et la <b>médiane</b> de la saison donne une image propre.</p>
<h3>Exporter et analyser dans QGIS</h3>
<ol>
  <li>Boîte à outils de traitements &gt; <i>Google Earth Engine &gt; Export GeoTIFF</i> : couche NDVI, résolution 10 m, SCR EPSG:32630, emprise de la zone.</li>
  <li><b>Reclassifier par table</b> : &lt; 0,2 sol nu ou bâti, 0,2 à 0,5 végétation clairsemée, &gt; 0,5 végétation dense.</li>
  <li><i>Rapport sur les valeurs uniques de la couche raster</i> : surface de chaque classe.</li>
</ol>`,
          exercice: `<ol>
  <li>Calculez le NDVI du printemps et de l'été 2025 et comparez les deux cartes.</li>
  <li>Exportez le NDVI du printemps et calculez la surface de végétation dense.</li>
  <li>Trouvez une zone forestière brûlée autour de Tlemcen et comparez le NDVI avant et après l'incendie.</li>
</ol>`
        },
        {
          id: "q10-l3",
          titre: "Occupation du sol : ESA WorldCover et Dynamic World",
          duree: "35 min",
          objectifs: [
            "Utiliser des cartes d'occupation du sol mondiales à 10 m",
            "Intégrer une donnée réelle dans l'analyse multicritère"
          ],
          contenu: `
<table class="tab">
  <tr><th>Jeu de données</th><th>Identifiant</th><th>Contenu</th></tr>
  <tr><td>ESA WorldCover</td><td><code>ESA/WorldCover/v200</code></td><td>Carte mondiale 2021, 10 m, 11 classes (bande <code>Map</code>)</td></tr>
  <tr><td>Dynamic World</td><td><code>GOOGLE/DYNAMICWORLD/V1</code></td><td>Classe la plus probable de chaque image Sentinel-2 depuis 2015, 9 classes (bande <code>label</code>)</td></tr>
</table>
<pre><code>import ee
from ee_plugin import Map

zone = ee.Geometry.Rectangle([-1.55, 34.70, -1.10, 35.00])

wc = ee.ImageCollection("ESA/WorldCover/v200").first().clip(zone)
Map.addLayer(wc, {"bands": ["Map"]}, "WorldCover 2021")

dw = (ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1")
      .filterBounds(zone).filterDate("2025-01-01", "2025-12-31")
      .select("label").mode().clip(zone))
Map.addLayer(dw, {"min": 0, "max": 8, "palette": ["419bdf", "397d49", "88b053", "7a87c6",
              "e49635", "dfc35a", "c4281b", "a59b8f", "b39fe1"]}, "Dynamic World 2025")
Map.centerObject(zone, 11)</code></pre>
<p>Exportez WorldCover en GeoTIFF (10 m, EPSG:32630), puis <b>Reclassifier par table</b> pour noter chaque classe de 1 à 5 selon le risque de feux (forêts et maquis = 5, cultures = 3, bâti et eau = 1). Cette couche réelle peut remplacer l'occupation du sol fictive du niveau 8.</p>
<div class="astuce"><b>Bon réflexe :</b> citez toujours la source et l'année des données (ex. « ESA WorldCover 2021 ») dans la mise en page.</div>`,
          exercice: `<ol>
  <li>Affichez WorldCover et Dynamic World sur Tlemcen et notez les différences.</li>
  <li>Exportez WorldCover, reclassez-le pour le risque de feux et refaites la carte de risque du niveau 8 avec cette couche.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Où se font les calculs dans Google Earth Engine ?", choix: ["Sur votre ordinateur", "Sur les serveurs de Google", "Dans GRASS", "Dans le navigateur uniquement"], bonne: 1, explication: "Seul le résultat est envoyé à QGIS." },
        { question: "Que faut-il pour utiliser GEE gratuitement en cours ?", choix: ["Une licence ArcGIS", "Un projet Cloud enregistré en usage non commercial", "Une carte bancaire obligatoire", "Rien du tout"], bonne: 1, explication: "Le niveau Community est gratuit pour l'enseignement, sans facturation." },
        { question: "Quelles bandes Sentinel-2 servent au NDVI ?", choix: ["B2 et B3", "B8 et B4", "B11 et B12", "B1 et B9"], bonne: 1, explication: "NDVI = (B8 − B4) / (B8 + B4) : proche infrarouge et rouge." },
        { question: "Pourquoi exporter une couche Earth Engine en GeoTIFF ?", choix: ["Pour la rendre plus jolie", "Pour l'analyser avec les outils de QGIS", "C'est obligatoire pour l'afficher", "Pour changer de compte"], bonne: 1, explication: "Les couches affichées sont diffusées ; l'export donne un vrai raster local." }
      ]

    }
  ]
};
