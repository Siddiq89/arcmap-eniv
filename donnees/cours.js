/*
 * CONTENU PÉDAGOGIQUE — Parcours ArcMap 10.8
 * ------------------------------------------------------------------
 * Ce fichier contient les niveaux, les leçons et les quiz.
 * Pour les VIDÉOS, n'éditez pas ce fichier : utilisez donnees/videos.js
 * (ou la page « Administration » du site).
 *
 * Les noms d'outils sont donnés dans l'interface française d'ArcGIS 10.8,
 * avec le nom anglais entre parenthèses (utile pour chercher de l'aide).
 */
window.COURS = {
  titre: "ArcMap 10.8 pas à pas",
  niveaux: [
    /* ============================================================ */
    {
      id: "n1",
      numero: 1,
      titre: "Découvrir ArcMap",
      echelle: "1:1 000 000",
      resume: "L'interface d'ArcMap et d'ArcCatalog, la table des matières, les vues et le document de carte (.mxd).",
      lecons: [
        {
          id: "n1-l1",
          titre: "ArcGIS Desktop : les applications",
          duree: "15 min",
          objectifs: [
            "Distinguer ArcMap, ArcCatalog et ArcToolbox",
            "Lancer ArcMap et ouvrir un document de carte"
          ],
          contenu: `
<p>ArcGIS Desktop 10.8 regroupe plusieurs applications qui travaillent ensemble :</p>
<ul>
  <li><b>ArcMap</b> : afficher, analyser, éditer les données et produire des cartes.</li>
  <li><b>ArcCatalog</b> (ou la <b>fenêtre Catalogue</b> dans ArcMap) : parcourir, créer, copier et documenter les données.</li>
  <li><b>ArcToolbox</b> : la collection des outils de géotraitement, accessible depuis ArcMap et ArcCatalog.</li>
</ul>
<p>Un projet ArcMap est enregistré dans un <b>document de carte</b> d'extension <code>.mxd</code>. Ce fichier ne contient <b>pas</b> les données : il contient seulement des <i>liens</i> vers elles, ainsi que la symbologie et la mise en page.</p>
<div class="astuce"><b>À retenir :</b> si vous déplacez vos données après avoir enregistré le .mxd, les couches apparaissent avec un point d'exclamation rouge. Activez <i>Fichier &gt; Propriétés de la carte &gt; Stocker les chemins relatifs</i> pour éviter ce problème.</div>`,
          exercice: `<ol>
  <li>Démarrez ArcMap et choisissez <i>Carte vierge</i>.</li>
  <li>Ouvrez la fenêtre Catalogue (<i>Fenêtres &gt; Catalogue</i>).</li>
  <li>Créez une <b>connexion au dossier</b> vers votre dossier de TP (<code>C:\\ENIV\\TP</code>).</li>
  <li>Enregistrez le document sous <code>TP1_decouverte.mxd</code> avec les chemins relatifs activés.</li>
</ol>`
        },
        {
          id: "n1-l2",
          titre: "L'interface d'ArcMap",
          duree: "20 min",
          objectifs: [
            "Repérer la table des matières, les barres d'outils et la fenêtre de carte",
            "Naviguer dans la carte : zoom, déplacement, étendue totale"
          ],
          contenu: `
<p>L'écran d'ArcMap se compose de :</p>
<ul>
  <li>la <b>table des matières</b> (à gauche) qui liste les couches ; l'ordre d'affichage va du haut (dessus) vers le bas (dessous) ;</li>
  <li>la <b>fenêtre de carte</b>, qui affiche les couches ;</li>
  <li>les <b>barres d'outils</b> : <i>Standard</i>, <i>Outils</i> (navigation, identification, sélection), <i>Dessiner</i>, <i>Éditeur</i>… (clic droit sur une zone vide pour les afficher) ;</li>
  <li>la <b>barre d'état</b> en bas, qui affiche les coordonnées du curseur.</li>
</ul>
<p>Outils de navigation essentiels : <b>Zoom avant/arrière</b>, <b>Déplacer</b> (la main), <b>Étendue totale</b> (le globe), <b>Étendue précédente/suivante</b>, et <b>Identifier</b> (le « i ») pour lire les attributs d'une entité.</p>
<div class="astuce"><b>Astuce :</b> la molette de la souris zoome, et un appui maintenu sur la molette déplace la carte, quel que soit l'outil actif.</div>`,
          exercice: `<ol>
  <li>Ajoutez une couche avec le bouton <b>Ajouter des données</b> (le « + » jaune).</li>
  <li>Zoomez sur une zone, puis revenez à l'étendue totale.</li>
  <li>Utilisez l'outil <b>Identifier</b> sur trois entités et notez une valeur attributaire.</li>
  <li>Changez l'ordre des couches dans la table des matières par glisser-déposer.</li>
</ol>`
        },
        {
          id: "n1-l3",
          titre: "Vue des données et vue de mise en page",
          duree: "15 min",
          objectifs: [
            "Basculer entre vue des données et vue de mise en page",
            "Comprendre le rôle du bloc de données"
          ],
          contenu: `
<p>ArcMap propose deux vues (boutons en bas à gauche de la fenêtre de carte, ou menu <i>Affichage</i>) :</p>
<ul>
  <li><b>Vue des données</b> : pour explorer, analyser et éditer.</li>
  <li><b>Vue de mise en page</b> : pour composer la carte imprimée (titre, légende, échelle, flèche du nord).</li>
</ul>
<p>Les couches sont rangées dans un <b>bloc de données</b> (<i>Couches</i> par défaut). Un document peut contenir plusieurs blocs de données, par exemple une carte principale et une carte de situation.</p>
<p>Le <b>système de coordonnées</b> d'affichage est une propriété du bloc de données (clic droit &gt; <i>Propriétés &gt; Système de coordonnées</i>). Il est fixé par la première couche ajoutée.</p>`,
          exercice: `<ol>
  <li>Passez en vue de mise en page puis revenez en vue des données.</li>
  <li>Ouvrez les propriétés du bloc de données et notez son système de coordonnées.</li>
  <li>Insérez un second bloc de données (<i>Insertion &gt; Bloc de données</i>) et renommez-le « Situation ».</li>
</ol>`
        }
      ],
      quiz: [
        {
          question: "Que contient un fichier .mxd ?",
          choix: ["Les données géographiques elles-mêmes", "Des liens vers les données, la symbologie et la mise en page", "Uniquement la mise en page", "Une copie compressée de la géodatabase"],
          bonne: 1,
          explication: "Le .mxd référence les données ; il ne les contient pas. D'où l'intérêt des chemins relatifs."
        },
        {
          question: "Dans la table des matières, quelle couche s'affiche par-dessus les autres ?",
          choix: ["La dernière de la liste", "Celle placée en haut de la liste", "La plus récente ajoutée, toujours", "Celle qui a le plus d'entités"],
          bonne: 1,
          explication: "L'ordre d'affichage suit la liste : la couche du haut est dessinée en dernier, donc au-dessus."
        },
        {
          question: "Quel outil permet de lire les attributs d'une entité en cliquant dessus ?",
          choix: ["Sélectionner", "Mesurer", "Identifier", "Déplacer"],
          bonne: 2,
          explication: "L'outil Identifier (le « i ») affiche les attributs de l'entité cliquée."
        },
        {
          question: "Quelle application sert surtout à gérer les fichiers et les géodatabases ?",
          choix: ["ArcCatalog", "ArcScene", "ModelBuilder", "ArcGlobe"],
          bonne: 0,
          explication: "ArcCatalog (ou la fenêtre Catalogue dans ArcMap) sert à parcourir et gérer les données."
        }
      ]
    },

    /* ============================================================ */
    {
      id: "n2",
      numero: 2,
      titre: "Les données géographiques",
      echelle: "1:250 000",
      resume: "Formats vecteur et raster, géodatabase, systèmes de coordonnées (UTM 30N, Nord Sahara 1959), table attributaire, sélections, numérisation et calage.",
      lecons: [
        {
          id: "n2-l1",
          titre: "Vecteur, raster et formats de stockage",
          duree: "20 min",
          objectifs: [
            "Différencier données vecteur (points, lignes, polygones) et raster",
            "Créer une géodatabase fichier et une classe d'entités"
          ],
          contenu: `
<p><b>Vecteur</b> : des objets discrets décrits par leur géométrie (point, polyligne, polygone) et une table attributaire. Exemples : forages, routes, parcelles.</p>
<p><b>Raster</b> : une grille de cellules (pixels) portant chacune une valeur. Exemples : MNT, image satellite, carte d'occupation du sol.</p>
<p>Formats courants dans ArcGIS 10.8 :</p>
<ul>
  <li><b>Shapefile</b> (<code>.shp</code> + <code>.shx</code> + <code>.dbf</code> + <code>.prj</code>…) : simple et très répandu, mais noms de champs limités à 10 caractères. Ne copiez jamais un seul des fichiers : copiez-les tous, ou passez par ArcCatalog.</li>
  <li><b>Géodatabase fichier</b> (dossier <code>.gdb</code>) : format recommandé, plus robuste, supporte les jeux de classes d'entités, les domaines et les rasters.</li>
</ul>`,
          exercice: `<ol>
  <li>Dans la fenêtre Catalogue, clic droit sur votre dossier &gt; <i>Nouveau &gt; Géodatabase fichier</i> : nommez-la <code>TP.gdb</code>.</li>
  <li>Dans <code>TP.gdb</code>, créez une classe d'entités <b>points</b> nommée <code>Forages</code>.</li>
  <li>Importez un shapefile dans la géodatabase (clic droit sur la gdb &gt; <i>Importer &gt; Classe d'entités (unique)</i>).</li>
</ol>`
        },
        {
          id: "n2-l2",
          titre: "Systèmes de coordonnées et projections",
          duree: "30 min",
          objectifs: [
            "Distinguer système géographique et système projeté",
            "Utiliser « Définir une projection » et « Projeter » à bon escient"
          ],
          contenu: `
<ul>
  <li><b>Système de coordonnées géographiques</b> : latitude/longitude en degrés (ex. WGS 1984).</li>
  <li><b>Système de coordonnées projetées</b> : coordonnées planes en mètres (ex. WGS 1984 UTM, zone adaptée à votre région). Indispensable pour mesurer des distances et des surfaces.</li>
</ul>
<p><b>Systèmes utilisés en Algérie</b> (fiche « projection » de la formation) :</p>
<table class="tab">
  <tr><th>Famille</th><th>Système dans ArcMap</th><th>Remarque</th></tr>
  <tr><td>Géographique</td><td>GCS WGS 1984</td><td>Degrés ; données GPS, Google Earth</td></tr>
  <tr><td>Projeté cylindrique (UTM)</td><td>WGS 1984 UTM Zone 29N à 32N</td><td>Tlemcen est en <b>zone 30N</b> ; Alger en 31N</td></tr>
  <tr><td>Projeté cylindrique (UTM)</td><td>Nord Sahara 1959 UTM Zone 29N à 32N</td><td>Système des cartes topographiques algériennes (INCT)</td></tr>
  <tr><td>Projeté conique (Lambert)</td><td>Nord Algérie (ancienne), dans <i>National Grids &gt; Africa</i></td><td>Anciennes cartes ; existe aussi en degrés</td></tr>
</table>
<p>Pour la zone de Tlemcen, choisissez par exemple <i>Projected Coordinate Systems &gt; UTM &gt; WGS 1984 &gt; Northern Hemisphere &gt; WGS 1984 UTM Zone 30N</i>.</p>
<p>Deux outils à ne pas confondre :</p>
<table class="tab">
  <tr><th>Outil</th><th>Rôle</th><th>Chemin ArcToolbox</th></tr>
  <tr><td><b>Définir une projection</b> (Define Projection)</td><td>Déclare le système d'une couche qui n'en a pas (fichier .prj manquant). Ne modifie pas les coordonnées.</td><td>Outils de gestion des données &gt; Projections et transformations</td></tr>
  <tr><td><b>Projeter</b> (Project)</td><td>Crée une nouvelle couche dont les coordonnées sont recalculées dans un autre système.</td><td>Outils de gestion des données &gt; Projections et transformations</td></tr>
</table>
<div class="astuce"><b>Erreur classique :</b> utiliser « Définir une projection » pour changer de système. Les données se retrouvent alors au mauvais endroit.</div>`,
          exercice: `<ol>
  <li>Affichez les propriétés d'une couche (onglet <i>Source</i>) et notez son système de coordonnées.</li>
  <li>Projetez <code>Communes_NordSahara1959</code> et <code>Communes_WGS84</code> en WGS 1984 UTM Zone 30N avec l'outil <b>Projeter</b>.</li>
  <li>Déclarez le système de <code>Forages_sans_projection</code> (WGS 1984 UTM Zone 30N) avec <b>Définir une projection</b>.</li>
  <li>Comparez la surface d'un polygone avant et après projection (champ calculé en mètres carrés).</li>
</ol>`
        },
        {
          id: "n2-l3",
          titre: "La table attributaire",
          duree: "25 min",
          objectifs: [
            "Ouvrir, trier et filtrer une table attributaire",
            "Ajouter un champ et le calculer"
          ],
          contenu: `
<p>Clic droit sur une couche &gt; <b>Ouvrir la table attributaire</b>. Chaque ligne est une entité, chaque colonne un <b>champ</b>.</p>
<ul>
  <li><b>Ajouter un champ</b> : menu <i>Options de table</i> &gt; <i>Ajouter un champ</i> (hors session de mise à jour). Types usuels : Texte, Entier court, Entier long, Réel simple, Réel double, Date.</li>
  <li><b>Calculatrice de champs</b> : clic droit sur l'en-tête d'un champ. Exemple en Python : <code>!POP! / !SURFACE_KM2!</code></li>
  <li><b>Calculer la géométrie</b> : surface, longueur, coordonnées X/Y, dans l'unité de votre choix.</li>
</ul>
<p>Les <b>jointures</b> (clic droit &gt; <i>Jointures et relations &gt; Joindre</i>) associent une table externe (Excel, .dbf) à la couche par un champ commun, par exemple un code de commune.</p>`,
          exercice: `<ol>
  <li>Ajoutez un champ <code>SURF_HA</code> de type Réel double à une couche de polygones.</li>
  <li>Calculez-le avec <i>Calculer la géométrie</i> en hectares.</li>
  <li>Joignez un tableau Excel de population par code de commune, puis calculez la densité.</li>
</ol>`
        },
        {
          id: "n2-l4",
          titre: "Sélections et édition",
          duree: "30 min",
          objectifs: [
            "Sélectionner par attributs et par emplacement",
            "Numériser de nouvelles entités avec la barre d'outils Éditeur"
          ],
          contenu: `
<p>Menu <b>Sélection</b> :</p>
<ul>
  <li><b>Sélectionner selon les attributs</b> : requête SQL, ex. <code>"POP" &gt; 10000 AND "TYPE" = 'Urbain'</code>.</li>
  <li><b>Sélectionner selon l'emplacement</b> : relation spatiale, ex. les écoles <i>situées à moins de</i> 500 m d'une route.</li>
</ul>
<p>Clic droit sur la couche &gt; <i>Données &gt; Exporter les données</i> pour enregistrer la sélection dans une nouvelle couche.</p>
<p><b>Édition</b> : barre d'outils <i>Éditeur</i> &gt; <i>Ouvrir une session de mise à jour</i>, puis la fenêtre <i>Créer des entités</i>. Activez la <b>capture</b> (Snapping) pour accrocher les sommets. Pensez à <i>Enregistrer les mises à jour</i> puis <i>Quitter la session</i>.</p>`,
          exercice: `<ol>
  <li>Sélectionnez les communes de plus de 10 000 habitants et exportez-les.</li>
  <li>Sélectionnez les forages situés à moins de 1 km d'un oued.</li>
  <li>Numérisez 5 points dans la classe <code>Forages</code> et renseignez leurs attributs.</li>
</ol>`
        },
        {
          id: "n2-l5",
          titre: "Calage (géoréférencement) d'une carte scannée",
          duree: "30 min",
          objectifs: [
            "Caler une carte scannée ou une image sur des coordonnées connues",
            "Contrôler l'erreur (RMS) et enregistrer le résultat"
          ],
          contenu: `
<p>Une carte scannée (.jpg, .tif) n'a pas de coordonnées. Le <b>calage</b> lui en attribue à l'aide de <b>points de contrôle</b> dont on connaît les coordonnées : croisements du quadrillage, amorces des coordonnées en bordure de carte.</p>
<ol>
  <li>Réglez d'abord le système de coordonnées du bloc de données (ex. Nord Sahara 1959 UTM Zone 30N pour une carte INCT de la région de Tlemcen).</li>
  <li>Ajoutez l'image, puis affichez la barre d'outils <b>Géoréférencement</b> (clic droit sur une zone vide des barres d'outils).</li>
  <li>Choisissez la couche dans la liste de la barre, puis <i>Géoréférencement &gt; Ajuster à l'affichage</i> si l'image est loin de la zone.</li>
  <li>Avec l'outil <b>Ajouter des points de contrôle</b>, cliquez un point sur l'image puis, clic droit &gt; <i>Saisir X et Y</i>, tapez ses coordonnées. Placez au moins 4 points bien répartis.</li>
  <li>Ouvrez la <b>Table des liens</b> : vérifiez l'erreur résiduelle de chaque point et l'erreur RMS totale. Supprimez un point aberrant.</li>
  <li>Enregistrez : <i>Géoréférencement &gt; Mettre à jour le géoréférencement</i> (fichier .aux.xml à côté de l'image) ou <i>Rectifier</i> pour créer un nouveau raster.</li>
</ol>
<div class="astuce"><b>Transformation :</b> 1er ordre (affine) avec 4 à 6 points suffit pour une carte scannée à plat. Les ordres supérieurs demandent plus de points et peuvent déformer les bords.</div>`,
          exercice: `<ol>
  <li>Calez une carte topographique scannée de votre secteur avec 6 points du quadrillage kilométrique.</li>
  <li>Notez l'erreur RMS obtenue ; recommencez si elle dépasse la taille d'un pixel au sol.</li>
  <li>Superposez une couche vecteur (routes, oueds) pour contrôler visuellement le calage.</li>
</ol>`
        }
      ],
      quiz: [
        {
          question: "Quel outil faut-il pour transformer une couche de WGS 1984 vers UTM ?",
          choix: ["Définir une projection", "Projeter", "Calculer la géométrie", "Géoréférencement"],
          bonne: 1,
          explication: "« Projeter » recalcule les coordonnées. « Définir une projection » ne fait que déclarer le système."
        },
        {
          question: "Une image satellite est une donnée…",
          choix: ["vecteur ponctuelle", "vecteur surfacique", "raster", "tabulaire"],
          bonne: 2,
          explication: "Une image est une grille de pixels : c'est un raster."
        },
        {
          question: "Combien de caractères au maximum pour un nom de champ dans un shapefile ?",
          choix: ["8", "10", "31", "64"],
          bonne: 1,
          explication: "Le format .dbf limite les noms de champs à 10 caractères, une raison de préférer la géodatabase."
        },
        {
          question: "Pour trouver les écoles à moins de 500 m d'une route, on utilise…",
          choix: ["Sélectionner selon les attributs", "Sélectionner selon l'emplacement", "Une jointure attributaire", "La calculatrice de champs"],
          bonne: 1,
          explication: "C'est une relation spatiale (distance) : Sélectionner selon l'emplacement."
        },
        {
          question: "Pourquoi projeter avant de calculer des surfaces ?",
          choix: ["Pour accélérer l'affichage", "Parce que les degrés ne sont pas une unité de surface fiable", "Pour réduire la taille du fichier", "Ce n'est pas nécessaire"],
          bonne: 1,
          explication: "Les surfaces doivent être calculées dans un système projeté, en mètres."
        },
        {
          question: "Dans quelle zone UTM se trouve Tlemcen ?",
          choix: ["Zone 29N", "Zone 30N", "Zone 31N", "Zone 32N"],
          bonne: 1,
          explication: "Tlemcen (environ 1,3° Ouest) est en zone 30N, entre 6° Ouest et 0°."
        },
        {
          question: "Où vérifie-t-on l'erreur RMS d'un calage ?",
          choix: ["Dans la table attributaire", "Dans la Table des liens de la barre Géoréférencement", "Dans les propriétés du bloc de données", "Dans ArcCatalog"],
          bonne: 1,
          explication: "La Table des liens affiche les résidus de chaque point de contrôle et l'erreur RMS totale."
        }
      ]
    },

    /* ============================================================ */
    {
      id: "n3",
      numero: 3,
      titre: "Symbologie et mise en page",
      echelle: "1:100 000",
      resume: "Représenter les données (catégories, quantités), étiqueter, composer et exporter une carte.",
      lecons: [
        {
          id: "n3-l1",
          titre: "Symbologie",
          duree: "25 min",
          objectifs: [
            "Choisir le bon mode de représentation selon la donnée",
            "Utiliser les classifications (seuils naturels, intervalles égaux, quantiles)"
          ],
          contenu: `
<p>Propriétés de la couche &gt; onglet <b>Symbologie</b> :</p>
<ul>
  <li><b>Entités &gt; Symbole unique</b> : tout avec le même symbole.</li>
  <li><b>Catégories &gt; Valeurs uniques</b> : données qualitatives (type de sol, nature de route).</li>
  <li><b>Quantités &gt; Couleurs graduées</b> : données quantitatives relatives (densité, taux). Choisissez la méthode de classification et le nombre de classes.</li>
  <li><b>Quantités &gt; Symboles proportionnels / gradués</b> : effectifs absolus (population, débit).</li>
  <li><b>Diagrammes</b> : secteurs ou barres par entité.</li>
</ul>
<div class="astuce"><b>Règle de sémiologie :</b> on ne représente pas un effectif brut (population) en aplat de couleur. On utilise un cercle proportionnel, ou bien on le rapporte à une surface (densité).</div>
<p>Enregistrez un style réutilisable avec clic droit &gt; <i>Enregistrer comme fichier de couche</i> (<code>.lyr</code>).</p>`,
          exercice: `<ol>
  <li>Représentez l'occupation du sol en valeurs uniques avec des couleurs cohérentes.</li>
  <li>Représentez la densité de population en 5 classes par seuils naturels (Jenks).</li>
  <li>Enregistrez la couche en fichier <code>.lyr</code>.</li>
</ol>`
        },
        {
          id: "n3-l2",
          titre: "Étiquettes",
          duree: "15 min",
          objectifs: [
            "Afficher des étiquettes à partir d'un champ",
            "Gérer les classes d'étiquettes et les conflits"
          ],
          contenu: `
<p>Propriétés de la couche &gt; onglet <b>Étiquettes</b> : cochez <i>Étiqueter les entités de cette couche</i> et choisissez le champ.</p>
<ul>
  <li><b>Expression</b> : combiner plusieurs champs, ex. <code>[NOM] &amp; " (" &amp; [POP] &amp; ")"</code>.</li>
  <li><b>Classes d'étiquettes</b> : styles différents selon une requête SQL (ex. chefs-lieux en gras).</li>
  <li><b>Plage d'échelles</b> : n'afficher les étiquettes qu'à partir d'une certaine échelle.</li>
  <li><b>Gestionnaire d'étiquettes</b> (barre d'outils <i>Étiquetage</i>) : priorités, poids et conflits.</li>
</ul>`,
          exercice: `<ol>
  <li>Étiquetez les communes par leur nom.</li>
  <li>Créez une classe d'étiquettes pour les chefs-lieux, en gras et plus grande.</li>
  <li>Limitez l'affichage des étiquettes aux échelles plus grandes que 1:200 000.</li>
</ol>`
        },
        {
          id: "n3-l3",
          titre: "Mise en page et export",
          duree: "30 min",
          objectifs: [
            "Composer une carte complète avec ses éléments obligatoires",
            "Exporter en PDF ou en image à la bonne résolution"
          ],
          contenu: `
<p>En <b>vue de mise en page</b>, menu <i>Insertion</i> :</p>
<ul>
  <li><b>Titre</b>, <b>Légende</b>, <b>Flèche du nord</b>, <b>Barre d'échelle</b>, <b>Texte d'échelle</b> ;</li>
  <li><b>Source et auteur</b> (zone de texte), date ;</li>
  <li><b>Graticule ou carroyage</b> : propriétés du bloc de données &gt; onglet <i>Grilles</i>.</li>
</ul>
<p>Format de page : <i>Fichier &gt; Mise en page et impression</i> (A4, A3, paysage…).</p>
<p>Export : <i>Fichier &gt; Exporter la carte</i>. PDF pour l'impression, PNG ou JPEG à 300 ppp pour un rapport.</p>
<div class="astuce"><b>Contrôle qualité :</b> titre, légende, échelle, nord, source, auteur, date et système de coordonnées. Sans ces éléments, la carte est incomplète.</div>`,
          exercice: `<ol>
  <li>Réalisez une carte A4 paysage de votre zone d'étude avec tous les éléments obligatoires.</li>
  <li>Ajoutez une carte de situation dans un second bloc de données.</li>
  <li>Exportez-la en PDF et en PNG à 300 ppp.</li>
</ol>`
        }
      ],
      quiz: [
        {
          question: "Quelle symbologie convient à une population totale par commune ?",
          choix: ["Couleurs graduées", "Symboles proportionnels", "Valeurs uniques", "Symbole unique"],
          bonne: 1,
          explication: "Un effectif absolu se représente par des symboles proportionnels, pas par un aplat de couleur."
        },
        {
          question: "Où se règle la méthode de classification (seuils naturels, quantiles…) ?",
          choix: ["Onglet Source", "Onglet Symbologie, mode Quantités", "Onglet Étiquettes", "Dans la table attributaire"],
          bonne: 1,
          explication: "Symbologie > Quantités > Classer…"
        },
        {
          question: "Quel élément n'est PAS indispensable sur une carte thématique ?",
          choix: ["La légende", "L'échelle", "L'image de fond satellite", "Le titre"],
          bonne: 2,
          explication: "Le fond satellite est optionnel ; titre, légende, échelle et nord sont attendus."
        },
        {
          question: "Quelle extension permet de réutiliser une symbologie sur une autre carte ?",
          choix: [".mxd", ".lyr", ".prj", ".shx"],
          bonne: 1,
          explication: "Un fichier de couche .lyr enregistre la symbologie et le lien vers la source."
        }
      ]
    },

    /* ============================================================ */
    {
      id: "n4",
      numero: 4,
      titre: "ArcToolbox et géotraitement",
      echelle: "1:50 000",
      resume: "Les boîtes à outils, les outils d'analyse vectorielle (tampon, découpage, superposition) et Spatial Analyst.",
      lecons: [
        {
          id: "n4-l1",
          titre: "Prendre en main ArcToolbox",
          duree: "20 min",
          objectifs: [
            "Trouver un outil par l'arborescence ou par la recherche",
            "Régler les environnements et consulter les Résultats"
          ],
          contenu: `
<p>Ouvrez ArcToolbox avec le bouton boîte à outils rouge ou <i>Géotraitement &gt; ArcToolbox</i>. Les boîtes les plus utilisées :</p>
<table class="tab">
  <tr><th>Boîte à outils</th><th>Exemples d'outils</th></tr>
  <tr><td>Outils d'analyse (Analysis Tools)</td><td>Zone tampon, Découper, Intersecter, Agréger (Union), Effacer, Jointure spatiale</td></tr>
  <tr><td>Outils de gestion des données (Data Management)</td><td>Projeter, Ajouter un champ, Calculer un champ, Fusionner (Dissolve), Combiner (Merge)</td></tr>
  <tr><td>Outils de conversion (Conversion Tools)</td><td>Table Excel vers table, Entités vers raster, KML vers couche</td></tr>
  <tr><td>Outils Spatial Analyst</td><td>Pente, Exposition, Reclassification, Calculatrice raster, Densité de noyau</td></tr>
  <tr><td>Outils de cartographie, 3D Analyst, Network Analyst…</td><td>Selon les extensions activées (<i>Personnaliser &gt; Extensions</i>)</td></tr>
</table>
<ul>
  <li><b>Rechercher un outil</b> : <i>Géotraitement &gt; Rechercher des outils</i>, tapez « tampon » ou « buffer ».</li>
  <li><b>Environnements</b> : <i>Géotraitement &gt; Environnements</i> : espace de travail courant, étendue, taille de cellule, masque.</li>
  <li><b>Résultats</b> : <i>Géotraitement &gt; Résultats</i> garde l'historique ; clic droit sur un résultat &gt; <i>Ouvrir</i> pour relancer avec d'autres paramètres.</li>
</ul>
<div class="astuce"><b>Astuce :</b> activez <i>Géotraitement &gt; Options &gt; Remplacer les résultats des opérations de géotraitement</i> pendant les TP pour pouvoir relancer un outil sans renommer la sortie.</div>`,
          exercice: `<ol>
  <li>Ouvrez ArcToolbox et trouvez l'outil <b>Zone tampon</b> par l'arborescence, puis par la recherche.</li>
  <li>Réglez l'espace de travail courant sur <code>TP.gdb</code>.</li>
  <li>Activez l'extension Spatial Analyst.</li>
</ol>`
        },
        {
          id: "n4-l2",
          titre: "Zone tampon et analyses de proximité",
          duree: "25 min",
          objectifs: [
            "Créer des zones tampons simples, multiples et à distance variable",
            "Utiliser Jointure spatiale et Proche"
          ],
          contenu: `
<p><b>Zone tampon</b> (Buffer) : <i>Outils d'analyse &gt; Proximité &gt; Zone tampon</i>.</p>
<ul>
  <li><b>Distance linéaire</b> (ex. 100 mètres) ou <b>champ</b> (distance différente par entité).</li>
  <li><b>Type de fusion</b> : <i>NONE</i> (un tampon par entité) ou <i>ALL</i> (tampons fusionnés).</li>
</ul>
<p><b>Zone tampon multiple</b> (Multiple Ring Buffer) : plusieurs anneaux, ex. 500, 1000, 2000 m.</p>
<p><b>Proche</b> (Near) : ajoute à chaque entité la distance à l'entité la plus proche d'une autre couche.</p>
<p><b>Jointure spatiale</b> (Spatial Join) : transfère les attributs selon la position, ex. compter les forages par commune.</p>`,
          exercice: `<ol>
  <li>Créez une zone de protection de 200 m autour des forages, fusionnée (ALL).</li>
  <li>Créez des anneaux de 1, 2 et 5 km autour d'une ville.</li>
  <li>Comptez le nombre de forages par commune avec une jointure spatiale.</li>
</ol>`
        },
        {
          id: "n4-l3",
          titre: "Extraction et superposition",
          duree: "30 min",
          objectifs: [
            "Choisir entre Découper, Intersecter, Agréger (Union) et Effacer",
            "Fusionner (Dissolve) et Combiner (Merge) des couches"
          ],
          contenu: `
<table class="tab">
  <tr><th>Outil</th><th>Résultat</th><th>Attributs</th></tr>
  <tr><td><b>Découper</b> (Clip)</td><td>Partie de la couche d'entrée située dans la couche de découpage</td><td>Seulement ceux de l'entrée</td></tr>
  <tr><td><b>Intersecter</b> (Intersect)</td><td>Zones communes à toutes les couches</td><td>Ceux de toutes les couches</td></tr>
  <tr><td><b>Agréger</b> (Union)</td><td>Toute la surface de toutes les couches (polygones)</td><td>Ceux de toutes les couches</td></tr>
  <tr><td><b>Effacer</b> (Erase)</td><td>Ce qui est en dehors de la couche d'effacement</td><td>Seulement ceux de l'entrée</td></tr>
</table>
<p>Outils de gestion des données :</p>
<ul>
  <li><b>Fusionner</b> (Dissolve) : regroupe les entités qui ont la même valeur d'un champ (ex. communes &gt; wilayas).</li>
  <li><b>Combiner</b> (Merge) : assemble plusieurs couches de même géométrie en une seule.</li>
</ul>
<div class="astuce"><b>Attention :</b> en français, Dissolve se traduit par <i>Fusionner</i> et Merge par <i>Combiner</i>. Le nom anglais aide à ne pas se tromper.</div>`,
          exercice: `<ol>
  <li>Découpez le réseau routier selon les limites de votre zone d'étude.</li>
  <li>Intersectez occupation du sol et zones tampons des forages, puis calculez les surfaces par type.</li>
  <li>Fusionnez les communes par wilaya (Dissolve) en conservant la somme de la population (statistiques).</li>
</ol>`
        },
        {
          id: "n4-l4",
          titre: "Raster avec Spatial Analyst",
          duree: "30 min",
          objectifs: [
            "Dériver la pente d'un MNT",
            "Reclasser et combiner des rasters pour une analyse multicritère"
          ],
          contenu: `
<p>Extension requise : <i>Personnaliser &gt; Extensions &gt; Spatial Analyst</i>.</p>
<ul>
  <li><b>Pente</b> (Slope) : <i>Outils Spatial Analyst &gt; Surface &gt; Pente</i>, en degrés ou en pourcentage.</li>
  <li><b>Exposition</b> (Aspect) et <b>Ombrage</b> (Hillshade) dans la même boîte.</li>
  <li><b>Reclassification</b> (Reclassify) : <i>Outils Spatial Analyst &gt; Reclasser</i>, pour ramener des valeurs à des notes (1 à 5).</li>
  <li><b>Calculatrice raster</b> (Raster Calculator) : <i>Outils Spatial Analyst &gt; Algèbre spatiale</i>, ex. <code>"pente_rc" * 0.4 + "sol_rc" * 0.6</code>.</li>
</ul>
<p>Réglez dans les <b>environnements</b> la taille de cellule et le masque pour que tous les rasters soient alignés.</p>`,
          exercice: `<ol>
  <li>Calculez la pente en degrés à partir du MNT.</li>
  <li>Reclassez la pente en 5 classes (1 = faible, 5 = forte).</li>
  <li>Combinez pente et occupation du sol reclassées avec la calculatrice raster pour une carte d'aptitude.</li>
</ol>`
        }
      ],
      quiz: [
        {
          question: "Quel outil garde la géométrie à l'intérieur d'une zone ET uniquement les attributs de la couche d'entrée ?",
          choix: ["Intersecter", "Découper (Clip)", "Agréger (Union)", "Jointure spatiale"],
          bonne: 1,
          explication: "Découper ne conserve que les attributs de la couche d'entrée."
        },
        {
          question: "Dans ArcGIS en français, l'outil « Dissolve » s'appelle…",
          choix: ["Combiner", "Fusionner", "Agréger", "Dissoudre"],
          bonne: 1,
          explication: "Dissolve = Fusionner ; Merge = Combiner ; Union = Agréger."
        },
        {
          question: "Où relancer un outil déjà exécuté avec d'autres paramètres ?",
          choix: ["Fenêtre Résultats", "Table des matières", "Fenêtre Catalogue", "Gestionnaire d'étiquettes"],
          bonne: 0,
          explication: "La fenêtre Résultats garde l'historique des traitements."
        },
        {
          question: "Pour attribuer à chaque commune le nombre de forages qu'elle contient :",
          choix: ["Jointure attributaire", "Jointure spatiale", "Zone tampon", "Effacer"],
          bonne: 1,
          explication: "La jointure spatiale relie les entités par leur position et peut compter."
        },
        {
          question: "Quel outil n'existe qu'avec Spatial Analyst ?",
          choix: ["Zone tampon", "Projeter", "Pente", "Découper"],
          bonne: 2,
          explication: "Pente (Slope) fait partie des outils Spatial Analyst (ou 3D Analyst)."
        }
      ]
    },

    /* ============================================================ */
    {
      id: "n5",
      numero: 5,
      titre: "ModelBuilder",
      echelle: "1:25 000",
      resume: "Enchaîner les outils dans un modèle, créer des paramètres, itérer et exporter le modèle en script Python.",
      lecons: [
        {
          id: "n5-l1",
          titre: "Créer son premier modèle",
          duree: "25 min",
          objectifs: [
            "Créer une boîte à outils personnelle et un modèle",
            "Enchaîner deux outils et exécuter le modèle"
          ],
          contenu: `
<p>Un <b>modèle</b> est une chaîne de traitements enregistrée : les sorties d'un outil deviennent les entrées du suivant.</p>
<ol>
  <li>Dans la fenêtre Catalogue : clic droit sur votre dossier &gt; <i>Nouveau &gt; Boîte à outils</i> (<code>Outils_ENIV.tbx</code>).</li>
  <li>Clic droit sur la boîte &gt; <i>Nouveau &gt; Modèle</i>.</li>
  <li>Glissez-déposez des outils depuis ArcToolbox et des couches depuis la table des matières.</li>
  <li>Reliez-les avec l'outil <b>Connecter</b>, puis <i>Modèle &gt; Valider</i> et <i>Exécuter</i>.</li>
</ol>
<p>Codes couleur : <b>ovale bleu</b> = donnée en entrée, <b>rectangle jaune</b> = outil, <b>ovale vert</b> = donnée dérivée. Un élément blanc n'est pas encore prêt (paramètre manquant).</p>`,
          exercice: `<p>Construisez un modèle « Zone de protection » : <b>Zone tampon</b> (200 m) sur les forages, puis <b>Découper</b> l'occupation du sol par ce tampon. Exécutez-le et vérifiez le résultat.</p>`
        },
        {
          id: "n5-l2",
          titre: "Paramètres et variables",
          duree: "25 min",
          objectifs: [
            "Transformer un modèle en outil réutilisable avec des paramètres",
            "Utiliser des variables et la substitution en ligne %nom%"
          ],
          contenu: `
<ul>
  <li><b>Paramètre de modèle</b> : clic droit sur un élément &gt; <i>Paramètre de modèle</i> (un « P » apparaît). Il s'affiche alors dans la boîte de dialogue quand on double-clique le modèle depuis ArcToolbox.</li>
  <li><b>Variable</b> : clic droit sur un outil &gt; <i>Créer une variable &gt; À partir du paramètre &gt; Distance</i> pour exposer la distance du tampon.</li>
  <li><b>Substitution en ligne</b> : utilisez <code>%Distance%</code> dans le nom de sortie, ex. <code>tampon_%Distance%</code>.</li>
  <li><b>Propriétés du modèle</b> : nom, libellé, description et l'option <i>Stocker les chemins relatifs</i>.</li>
</ul>`,
          exercice: `<p>Rendez votre modèle paramétrable : couche d'entrée, distance et sortie. Lancez-le deux fois depuis ArcToolbox avec des distances différentes.</p>`
        },
        {
          id: "n5-l3",
          titre: "Itérateurs et export en Python",
          duree: "30 min",
          objectifs: [
            "Traiter automatiquement toutes les couches d'un dossier",
            "Exporter le modèle en script Python pour passer à ArcPy"
          ],
          contenu: `
<p>Menu <i>Insertion &gt; Itérateurs</i> : <b>Itérer les classes d'entités</b>, <b>Itérer les rasters</b>, <b>Itérer les valeurs de champ</b>, <b>Pour</b>, <b>Tant que</b>… Un modèle ne peut contenir qu'<b>un seul itérateur</b> ; pour en imbriquer plusieurs, on place un sous-modèle dans un modèle.</p>
<p>Utilisez l'outil <b>Collecter les valeurs</b> pour rassembler les sorties de chaque itération.</p>
<p><b>Export</b> : <i>Modèle &gt; Exporter &gt; Vers un script Python</i>. Le fichier <code>.py</code> obtenu est le meilleur point de départ pour apprendre ArcPy : il montre la syntaxe exacte de chaque outil.</p>`,
          exercice: `<ol>
  <li>Créez un modèle qui découpe toutes les classes d'entités d'une géodatabase par la zone d'étude (itérateur + <code>%Name%</code>).</li>
  <li>Exportez votre modèle « Zone de protection » en Python et ouvrez le script : repérez la ligne <code>arcpy.Buffer_analysis</code>.</li>
</ol>`
        }
      ],
      quiz: [
        {
          question: "Dans ModelBuilder, un rectangle jaune représente…",
          choix: ["Une donnée en entrée", "Un outil", "Une donnée dérivée", "Un itérateur"],
          bonne: 1,
          explication: "Bleu = entrée, jaune = outil, vert = sortie (donnée dérivée)."
        },
        {
          question: "Combien d'itérateurs un même modèle peut-il contenir ?",
          choix: ["Aucun", "Un seul", "Deux", "Illimité"],
          bonne: 1,
          explication: "Un seul ; pour plus, on imbrique un sous-modèle."
        },
        {
          question: "À quoi sert la notation %Distance% ?",
          choix: ["À commenter le modèle", "À insérer la valeur d'une variable dans un texte (substitution en ligne)", "À désactiver un outil", "À calculer un pourcentage"],
          bonne: 1,
          explication: "C'est la substitution en ligne de variable."
        },
        {
          question: "Comment rendre un élément visible dans la boîte de dialogue du modèle ?",
          choix: ["Le renommer", "En faire un Paramètre de modèle", "Le colorer en bleu", "L'exporter en Python"],
          bonne: 1,
          explication: "Clic droit > Paramètre de modèle."
        }
      ]
    },

    /* ============================================================ */
    {
      id: "n6",
      numero: 6,
      titre: "Programmation avec ArcPy",
      echelle: "1:5 000",
      resume: "Python 2.7 dans ArcMap 10.8, le module arcpy, les boucles, les curseurs, arcpy.mapping et les outils script.",
      lecons: [
        {
          id: "n6-l1",
          titre: "Python et la fenêtre Python",
          duree: "25 min",
          objectifs: [
            "Exécuter un outil de géotraitement en une ligne de Python",
            "Connaître les bases de Python 2.7 utilisées dans ArcMap"
          ],
          contenu: `
<p>ArcMap 10.8 utilise <b>Python 2.7</b> (installé avec ArcGIS dans <code>C:\\Python27\\ArcGIS10.8</code>). ArcGIS Pro, lui, utilise Python 3 : les scripts ne sont pas toujours compatibles.</p>
<p>Ouvrez la <b>fenêtre Python</b> (bouton dans la barre Standard ou <i>Géotraitement &gt; Python</i>). Le module <code>arcpy</code> y est déjà importé et les couches de la table des matières sont utilisables par leur nom.</p>
<pre><code>arcpy.Buffer_analysis("Forages", "Forages_200m", "200 Meters", dissolve_option="ALL")</code></pre>
<p>Chaque outil a un nom Python : <code>NomOutil_alias</code> (ex. <code>Clip_analysis</code>, <code>Project_management</code>) ou <code>arcpy.alias.NomOutil</code>. La page d'aide de chaque outil donne un exemple de code.</p>
<p>Rappels Python : variables, listes <code>[...]</code>, boucles <code>for</code>, conditions <code>if</code>, indentation obligatoire (4 espaces), chaînes brutes <code>r"C:\\chemin"</code> pour les chemins Windows.</p>`,
          exercice: `<ol>
  <li>Dans la fenêtre Python, lancez une zone tampon sur une couche de la carte.</li>
  <li>Affichez le nombre d'entités : <code>print(arcpy.GetCount_management("Forages"))</code></li>
  <li>Retrouvez dans l'aide la syntaxe de l'outil <b>Découper</b> et exécutez-le en Python.</li>
</ol>`
        },
        {
          id: "n6-l2",
          titre: "Scripts autonomes, listes et boucles",
          duree: "30 min",
          objectifs: [
            "Écrire un script .py exécuté hors d'ArcMap",
            "Traiter automatiquement toutes les couches d'un espace de travail"
          ],
          contenu: `
<p>Un script autonome s'écrit dans IDLE (fourni avec ArcGIS) ou un autre éditeur, puis s'exécute avec l'interpréteur Python 2.7 d'ArcGIS.</p>
<pre><code># -*- coding: utf-8 -*-
import arcpy

arcpy.env.workspace = r"C:\\ENIV\\TP\\TP.gdb"
arcpy.env.overwriteOutput = True

zone = r"C:\\ENIV\\TP\\TP.gdb\\Zone_etude"

for fc in arcpy.ListFeatureClasses():
    if fc == "Zone_etude":
        continue
    n = int(arcpy.GetCount_management(fc).getOutput(0))
    print("{0} : {1} entites".format(fc, n))
    arcpy.Clip_analysis(fc, zone, fc + "_decoupe")

print("Termine.")</code></pre>
<p>Fonctions de liste utiles : <code>ListFeatureClasses()</code>, <code>ListRasters()</code>, <code>ListFields(fc)</code>, <code>ListDatasets()</code>. <code>arcpy.Describe(fc)</code> donne le type de géométrie, le système de coordonnées, l'étendue…</p>
<div class="astuce"><b>Gestion des erreurs :</b> entourez le traitement de <code>try: ... except arcpy.ExecuteError: print(arcpy.GetMessages(2))</code> pour afficher le message d'erreur de l'outil.</div>`,
          exercice: `<ol>
  <li>Écrivez un script qui affiche, pour chaque classe d'entités, son nom, son type de géométrie et son système de coordonnées.</li>
  <li>Ajoutez la projection automatique en UTM de toutes les couches qui sont en coordonnées géographiques.</li>
</ol>`
        },
        {
          id: "n6-l3",
          titre: "Curseurs : lire et modifier les attributs",
          duree: "30 min",
          objectifs: [
            "Lire une table avec arcpy.da.SearchCursor",
            "Mettre à jour un champ avec arcpy.da.UpdateCursor"
          ],
          contenu: `
<p>Les curseurs du module <code>arcpy.da</code> parcourent les lignes d'une table, ligne par ligne.</p>
<pre><code>import arcpy
fc = r"C:\\ENIV\\TP\\TP.gdb\\Communes"

# Lecture
with arcpy.da.SearchCursor(fc, ["NOM", "POP"], '"POP" > 10000') as cur:
    for nom, pop in cur:
        print(u"{0} : {1} hab.".format(nom, pop))

# Mise a jour : densite = population / surface en km2
arcpy.AddField_management(fc, "DENSITE", "DOUBLE")
with arcpy.da.UpdateCursor(fc, ["POP", "SHAPE@AREA", "DENSITE"]) as cur:
    for row in cur:
        row[2] = row[0] / (row[1] / 1000000.0)
        cur.updateRow(row)</code></pre>
<p>Jetons spéciaux : <code>SHAPE@</code> (géométrie), <code>SHAPE@XY</code>, <code>SHAPE@AREA</code>, <code>SHAPE@LENGTH</code>, <code>OID@</code>.</p>
<p><b>InsertCursor</b> permet de créer de nouvelles entités, par exemple à partir d'un fichier CSV de coordonnées GPS.</p>`,
          exercice: `<ol>
  <li>Affichez les 5 communes les plus peuplées (utilisez <code>sql_clause=(None, "ORDER BY POP DESC")</code>).</li>
  <li>Ajoutez un champ <code>CLASSE</code> et remplissez-le avec « Petite », « Moyenne » ou « Grande » selon la population.</li>
  <li>Créez des points à partir d'un CSV de relevés GPS avec un InsertCursor.</li>
</ol>`
        },
        {
          id: "n6-l4",
          titre: "Automatiser les cartes avec arcpy.mapping",
          duree: "25 min",
          objectifs: [
            "Manipuler un document .mxd par script",
            "Produire une série de cartes PDF automatiquement"
          ],
          contenu: `
<p><code>arcpy.mapping</code> (propre à ArcMap ; dans ArcGIS Pro c'est <code>arcpy.mp</code>) donne accès aux documents, blocs de données, couches et éléments de mise en page.</p>
<pre><code>import arcpy
mxd = arcpy.mapping.MapDocument(r"C:\\ENIV\\TP\\Carte_wilaya.mxd")  # ou "CURRENT"
df = arcpy.mapping.ListDataFrames(mxd)[0]
lyr = arcpy.mapping.ListLayers(mxd, "Communes", df)[0]
titre = arcpy.mapping.ListLayoutElements(mxd, "TEXT_ELEMENT", "Titre")[0]

with arcpy.da.SearchCursor(lyr, ["NOM"]) as cur:
    for (nom,) in cur:
        lyr.definitionQuery = u"\\"NOM\\" = '{0}'".format(nom)
        df.extent = lyr.getExtent()
        df.scale = df.scale * 1.1
        titre.text = u"Commune de " + nom
        arcpy.mapping.ExportToPDF(mxd, r"C:\\ENIV\\Sorties\\{0}.pdf".format(nom))

del mxd</code></pre>
<p>Les <b>pages dynamiques</b> (barre d'outils <i>Pages dynamiques</i>) font une partie de ce travail sans code ; arcpy.mapping va plus loin (titres, filtres, rapports).</p>`,
          exercice: `<p>Produisez une carte PDF par commune avec un titre automatique, puis assemblez-les en un seul PDF avec <code>arcpy.mapping.PDFDocumentCreate</code>.</p>`
        },
        {
          id: "n6-l5",
          titre: "Créer un outil script dans ArcToolbox",
          duree: "30 min",
          objectifs: [
            "Transformer un script en outil avec une boîte de dialogue",
            "Lire les paramètres et écrire des messages"
          ],
          contenu: `
<p>Un <b>outil script</b> s'utilise comme n'importe quel outil ArcToolbox, et donc aussi dans ModelBuilder.</p>
<pre><code># -*- coding: utf-8 -*-
import arcpy

entree   = arcpy.GetParameterAsText(0)   # Couche d'entites
distance = arcpy.GetParameterAsText(1)   # Unite lineaire
zone     = arcpy.GetParameterAsText(2)   # Couche de decoupage
sortie   = arcpy.GetParameterAsText(3)   # Classe d'entites (sortie)

tampon = "in_memory\\\\tampon"
arcpy.AddMessage("Zone tampon de " + distance)
arcpy.Buffer_analysis(entree, tampon, distance, dissolve_option="ALL")
arcpy.AddMessage("Decoupage...")
arcpy.Clip_analysis(zone, tampon, sortie)
arcpy.AddMessage("Termine : " + sortie)</code></pre>
<ol>
  <li>Clic droit sur votre boîte <code>Outils_ENIV.tbx</code> &gt; <i>Ajouter &gt; Script</i>.</li>
  <li>Nom, libellé, description, puis choisissez le fichier <code>.py</code>.</li>
  <li>Définissez les 4 paramètres dans l'ordre, avec leur type de données (Couche d'entités, Unité linéaire…) et la <b>direction</b> <i>Sortie</i> pour le dernier.</li>
</ol>
<p><code>AddMessage</code>, <code>AddWarning</code> et <code>AddError</code> écrivent dans la fenêtre de progression de l'outil.</p>`,
          exercice: `<p>Transformez le modèle « Zone de protection » en outil script. Ajoutez une validation : si la couche d'entrée n'est pas de type point, affichez un message d'erreur avec <code>arcpy.AddError</code>.</p>`
        }
      ],
      quiz: [
        {
          question: "Quelle version de Python utilise ArcMap 10.8 ?",
          choix: ["Python 2.7", "Python 3.6", "Python 3.9", "Aucune"],
          bonne: 0,
          explication: "ArcMap 10.x utilise Python 2.7 ; ArcGIS Pro utilise Python 3."
        },
        {
          question: "Quel curseur permet de modifier les valeurs d'un champ ?",
          choix: ["SearchCursor", "InsertCursor", "UpdateCursor", "ReadCursor"],
          bonne: 2,
          explication: "UpdateCursor, avec updateRow() pour enregistrer chaque ligne."
        },
        {
          question: "Dans un outil script, comment lit-on le premier paramètre saisi par l'utilisateur ?",
          choix: ["arcpy.GetParameterAsText(0)", "arcpy.GetParameterAsText(1)", "sys.argv[0]", "input()"],
          bonne: 0,
          explication: "Les paramètres sont indexés à partir de 0."
        },
        {
          question: "À quoi sert arcpy.env.overwriteOutput = True ?",
          choix: ["À accélérer les calculs", "À autoriser le remplacement des sorties existantes", "À activer Spatial Analyst", "À enregistrer le .mxd"],
          bonne: 1,
          explication: "Sans cette option, l'outil échoue si la sortie existe déjà."
        },
        {
          question: "Quel module permet d'exporter des cartes en PDF depuis un script ArcMap ?",
          choix: ["arcpy.mp", "arcpy.mapping", "arcpy.da", "arcpy.sa"],
          bonne: 1,
          explication: "arcpy.mapping pour ArcMap ; arcpy.mp est son équivalent dans ArcGIS Pro."
        }
      ]
    },

    /* ============================================================ */
    {
      id: "n7",
      numero: 7,
      titre: "MNT, hydrologie et inondations",
      echelle: "1:2 500",
      resume: "Préparer un MNT, modéliser l'écoulement (Fill, directions, accumulation), extraire le réseau et le bassin versant, puis cartographier les zones inondables et les enjeux exposés.",
      lecons: [
        {
          id: "n7-l1",
          titre: "Préparer le MNT pour l'hydrologie",
          duree: "35 min",
          objectifs: [
            "Importer un MNT ASCII et lui attribuer son système de coordonnées",
            "Régler l'environnement de géotraitement d'une analyse raster",
            "Comprendre et corriger les cuvettes avec Remplissage (Fill)"
          ],
          contenu: `
<p>Le <b>MNT</b> (modèle numérique de terrain) est une grille où chaque cellule porte une altitude. Les données du TP (<code>TP\\MNT\\MNT_50m.asc</code>) couvrent le bassin fictif de l'oued Tamda : 400 × 400 cellules de 50 m, en WGS 1984 UTM zone 30N. Pour un vrai projet, on télécharge SRTM (30 m) ou ALOS (30 m) sur EarthExplorer, puis on le projette en UTM avant tout calcul : une pente calculée en degrés de latitude est fausse.</p>
<h3>1. Importer et projeter</h3>
<ol>
  <li><b>ASCII vers raster</b> (<i>ASCII to Raster</i>, boîte Conversion), type <code>FLOAT</code>, sortie <code>mnt.tif</code>.</li>
  <li><b>Définir une projection</b> (<i>Define Projection</i>) : WGS 1984 UTM Zone 30N. On <i>définit</i> car les coordonnées sont déjà en mètres UTM ; on <i>projette</i> seulement quand il faut changer de système.</li>
  <li>Symbologie : étirement <i>Écart type</i> et une rampe hypsométrique, puis <b>Ombrage</b> (<i>Hillshade</i>) en dessous avec 40 % de transparence sur le MNT.</li>
</ol>
<h3>2. Activer Spatial Analyst et régler l'environnement</h3>
<p><i>Personnaliser &gt; Extensions</i> : cochez <b>Spatial Analyst</b>. Puis <i>Géotraitement &gt; Environnements</i> :</p>
<table class="tab">
  <tr><th>Paramètre</th><th>Valeur</th><th>Pourquoi</th></tr>
  <tr><td>Espace de travail courant</td><td><code>C:\\ENIV\\TP\\Sorties\\Risques</code></td><td>tous les résultats au même endroit</td></tr>
  <tr><td>Étendue, Raster de capture, Taille de cellule</td><td>mnt.tif</td><td>toutes les grilles parfaitement superposées</td></tr>
  <tr><td>Masque</td><td>mnt.tif (ou le bassin)</td><td>limite les calculs à la zone utile</td></tr>
</table>
<h3>3. Les cuvettes et l'outil Remplissage</h3>
<p>Un MNT contient des <b>cuvettes</b> (puits) : cellules plus basses que toutes leurs voisines, souvent dues au bruit de mesure. L'eau y « s'arrête » et le réseau calculé se coupe. L'outil <b>Remplissage</b> (<i>Fill</i>, Spatial Analyst &gt; Hydrologie) relève ces cellules jusqu'au niveau de leur point de débordement.</p>
<pre><code>fill = Fill("mnt.tif")
fill.save("fill.tif")
(fill - Raster("mnt.tif")).save("prof_cuvettes.tif")   # où le MNT a été corrigé</code></pre>
<p>Visualisez <code>prof_cuvettes.tif</code> : les corrections doivent être faibles (quelques mètres) et dispersées. Une grande zone remplie de plusieurs dizaines de mètres signale soit une vraie dépression (sebkha, barrage), soit une erreur du MNT.</p>
<div class="astuce"><b>À retenir :</b> toujours travailler sur le MNT <b>rempli</b> pour les directions de flux, mais garder le MNT brut pour les pentes et les altitudes affichées sur les cartes.</div>`,
          exercice: `<ol>
  <li>Importez <code>MNT_50m.asc</code>, définissez sa projection et créez un ombrage.</li>
  <li>Réglez l'environnement comme dans le tableau, puis lancez <b>Remplissage</b>.</li>
  <li>Calculez <code>fill - mnt</code> avec la <b>Calculatrice raster</b>. Quelle est la profondeur maximale corrigée ? Combien de cellules ont été modifiées (propriétés &gt; histogramme, ou <i>Construire la table attributaire</i> sur une version entière) ?</li>
</ol>`
        },
        {
          id: "n7-l2",
          titre: "Directions, accumulation et réseau hydrographique",
          duree: "40 min",
          objectifs: [
            "Calculer les directions d'écoulement D8 et l'accumulation des flux",
            "Extraire un réseau hydrographique avec un seuil justifié",
            "Hiérarchiser le réseau (Strahler) et le convertir en polylignes"
          ],
          contenu: `
<h3>1. Direction de flux (Flow Direction)</h3>
<p>Le modèle <b>D8</b> envoie l'eau de chaque cellule vers la voisine de plus forte pente, parmi 8. Le résultat est codé en puissances de 2 :</p>
<table class="tab">
  <tr><td>32 (NO)</td><td>64 (N)</td><td>128 (NE)</td></tr>
  <tr><td>16 (O)</td><td>cellule</td><td>1 (E)</td></tr>
  <tr><td>8 (SO)</td><td>4 (S)</td><td>2 (SE)</td></tr>
</table>
<p>Une valeur qui n'est pas une puissance de 2 indique une cuvette restante : relancez <b>Remplissage</b>.</p>
<h3>2. Accumulation de flux (Flow Accumulation)</h3>
<p>Chaque cellule reçoit le <b>nombre de cellules situées en amont</b>. Multiplié par la surface d'une cellule (50 × 50 m = 0,0025 km²), il donne la surface drainée. Affichez-le avec un étirement <i>Écart type</i> ou une symbologie en classes logarithmiques : les talwegs apparaissent.</p>
<h3>3. Seuil et réseau</h3>
<p>Un oued « commence » quand la surface drainée dépasse un seuil. Avec 400 cellules = 1 km², on obtient un réseau proche de celui des cartes au 1:50 000. Comparez avec la couche <code>Oueds</code> et ajustez (200 à 1 000 cellules).</p>
<pre><code>fdir = FlowDirection(fill, "NORMAL")
facc = FlowAccumulation(fdir)
reseau = Con(facc &gt; 400, 1)                  # 1 = oued, NoData ailleurs
strahler = StreamOrder(reseau, fdir, "STRAHLER")
StreamToFeature(strahler, fdir, "reseau_hydro.shp", "SIMPLIFY")</code></pre>
<p><b>Ordre des cours d'eau</b> (<i>Stream Order</i>) méthode <b>Strahler</b> : deux tronçons d'ordre n donnent un ordre n+1. <b>Cours d'eau vers entités</b> (<i>Stream to Feature</i>) produit des polylignes avec le champ <code>GRID_CODE</code> = ordre, utile pour faire varier l'épaisseur des traits.</p>
<div class="astuce"><b>Astuce :</b> dans la <b>Calculatrice raster</b>, écrivez <code>Con("facc.tif" &gt; 400, 1)</code>. Les noms de couches entre guillemets doubles, et l'outil <b>Con</b> s'appelle <i>Conditionnelle</i> dans la boîte à outils.</div>`,
          exercice: `<ol>
  <li>Calculez <code>fdir</code> et <code>facc</code> à partir de <code>fill.tif</code>.</li>
  <li>Extrayez trois réseaux avec 200, 400 et 1 000 cellules. Superposez la couche <code>Oueds</code> : quel seuil lui ressemble le plus ?</li>
  <li>Calculez l'ordre de Strahler, convertissez en polylignes et symbolisez l'épaisseur selon <code>GRID_CODE</code>. Quel est l'ordre maximal à l'exutoire ?</li>
  <li>Comparez avec le script <code>06_hydrologie.py</code>.</li>
</ol>`
        },
        {
          id: "n7-l3",
          titre: "Délimiter un bassin versant et le caractériser",
          duree: "35 min",
          objectifs: [
            "Recaler un exutoire sur le réseau calculé",
            "Délimiter un bassin versant et tous les bassins d'une zone",
            "Calculer les paramètres morphométriques classiques"
          ],
          contenu: `
<h3>1. Recaler l'exutoire</h3>
<p>Un point d'exutoire saisi à la main tombe rarement exactement sur la cellule d'accumulation maximale. <b>Ajuster le point d'écoulement</b> (<i>Snap Pour Point</i>) le déplace vers la cellule de plus forte accumulation dans un rayon donné (ici 150 m, soit 3 cellules). Un rayon trop grand peut faire « sauter » le point sur un affluent voisin.</p>
<h3>2. Bassin versant</h3>
<pre><code>exu = SnapPourPoint("Exutoire.shp", facc, 150, "ID")
bv = Watershed(fdir, exu)
arcpy.RasterToPolygon_conversion(bv, "bassin_versant.shp", "SIMPLIFY")
Basin(fdir).save("bassins_tous.tif")     # tous les bassins qui sortent de la zone</code></pre>
<p><b>Bassin versant</b> (<i>Watershed</i>) délimite tout ce qui s'écoule vers l'exutoire ; <b>Bassin</b> (<i>Basin</i>) découpe toute la zone en bassins qui se jettent au bord du MNT.</p>
<h3>3. Paramètres morphométriques</h3>
<table class="tab">
  <tr><th>Paramètre</th><th>Formule</th><th>Outil ArcMap</th></tr>
  <tr><td>Surface A (km²), périmètre P (km)</td><td>géométrie du polygone</td><td>Calculer la géométrie</td></tr>
  <tr><td>Indice de compacité de Gravelius</td><td>Kc = 0,28 · P / √A</td><td>Calculatrice de champs</td></tr>
  <tr><td>Altitudes min, moy, max</td><td>—</td><td>Statistiques zonales (table)</td></tr>
  <tr><td>Longueur du talweg principal L (km)</td><td>plus long chemin d'écoulement</td><td>Longueur d'écoulement (<i>Flow Length</i>), UPSTREAM</td></tr>
  <tr><td>Temps de concentration (Giandotti)</td><td>tc = (4√A + 1,5 L) / (0,8 √(Hmoy − Hmin)) en heures</td><td>calcul à partir des valeurs ci-dessus</td></tr>
</table>
<p>Kc proche de 1 = bassin ramassé, qui concentre vite les crues ; Kc &gt; 1,5 = bassin allongé, crues plus étalées.</p>`,
          exercice: `<ol>
  <li>Recalez <code>Risques\\Exutoire.shp</code> avec un rayon de 150 m puis délimitez le bassin versant.</li>
  <li>Convertissez-le en polygone et calculez sa surface en km² et son périmètre.</li>
  <li>Avec <b>Statistiques zonales (table)</b> sur le MNT, relevez Hmin, Hmoy et Hmax ; avec <b>Longueur d'écoulement</b>, la longueur L.</li>
  <li>Calculez Kc et le temps de concentration de Giandotti. Le bassin est-il ramassé ou allongé ?</li>
</ol>`
        },
        {
          id: "n7-l4",
          titre: "Cartographier les zones inondables et les enjeux",
          duree: "45 min",
          objectifs: [
            "Calculer la hauteur au-dessus de l'oued le plus proche (méthode HAND)",
            "Combiner plusieurs critères en une carte de susceptibilité à l'inondation",
            "Valider la carte avec des laisses de crue et lister les enjeux exposés"
          ],
          contenu: `
<p>Une vraie carte d'aléa inondation demande un modèle hydraulique (HEC-RAS, par exemple) avec des débits de crue. Pour un premier diagnostic à l'échelle d'un bassin, on utilise une <b>approche géomorphologique</b> à partir du MNT. Rappel : les crues de Bab El Oued (Alger, novembre 2001) ou de Ghardaïa (octobre 2008) ont touché des quartiers construits dans le lit majeur des oueds.</p>
<h3>1. Hauteur au-dessus de l'oued (HAND)</h3>
<p>Une cellule est d'autant plus inondable qu'elle est <b>peu au-dessus</b> de l'oued voisin. On attribue à chaque cellule l'altitude de l'oued le plus proche, puis on fait la différence :</p>
<pre><code>alt_oued = Int(Con(Raster("reseau.tif") == 1, Raster("fill.tif")))
alt_ref  = EucAllocation(alt_oued)          # Allocation euclidienne
hauteur  = Raster("fill.tif") - alt_ref     # mètres au-dessus de l'oued</code></pre>
<h3>2. Critères, notes et poids</h3>
<p>Chaque critère est reclassé de 1 (peu favorable) à 5 (très favorable à l'inondation), puis combiné par <b>somme pondérée</b> (poids du fichier <code>Tables\\poids_multicritere.xlsx</code>) :</p>
<table class="tab">
  <tr><th>Critère</th><th>Outil</th><th>Note 5 si…</th><th>Poids</th></tr>
  <tr><td>Distance à l'oued</td><td>Distance euclidienne</td><td>&lt; 100 m</td><td>35 %</td></tr>
  <tr><td>Hauteur au-dessus de l'oued</td><td>HAND ci-dessus</td><td>&lt; 2 m</td><td>25 %</td></tr>
  <tr><td>Pente</td><td>Pente (degrés)</td><td>&lt; 2°</td><td>20 %</td></tr>
  <tr><td>Accumulation de flux</td><td>facc</td><td>&gt; 10 000 cellules</td><td>10 %</td></tr>
  <tr><td>Occupation du sol</td><td>Polygone vers raster</td><td>Urbain (imperméable)</td><td>10 %</td></tr>
</table>
<p>L'indice obtenu (de 1 à 5) est découpé en cinq classes : très faible, faible, moyen, fort, très fort.</p>
<h3>3. Valider et croiser avec les enjeux</h3>
<ul>
  <li><b>Extraire les valeurs vers des points</b> (<i>Extract Values to Points</i>) sur <code>Laisses_crues.shp</code> : une bonne carte place la majorité des laisses en classes 4 et 5.</li>
  <li>Même outil sur <code>Ecoles.shp</code> : liste des établissements en zone forte, à reporter dans un tableau de bord communal.</li>
</ul>
<div class="astuce"><b>Attention :</b> cette carte indique une <b>susceptibilité</b>, pas une hauteur d'eau ni une période de retour. Elle sert à prioriser les études détaillées, pas à délivrer ou refuser un permis de construire.</div>`,
          exercice: `<ol>
  <li>Calculez la hauteur au-dessus de l'oued et symbolisez-la en 5 classes (0–2, 2–5, 5–10, 10–20, &gt; 20 m).</li>
  <li>Reclassez les cinq critères et combinez-les avec la <b>Calculatrice raster</b> ou l'outil <b>Somme pondérée</b>.</li>
  <li>Validez avec <code>Laisses_crues.shp</code> : quel pourcentage tombe en classe forte ou très forte ?</li>
  <li>Changez les poids (par exemple 25/35/20/10/10) et comparez. Exécutez ensuite <code>07_zones_inondables.py</code>.</li>
</ol>`
        }
      ],
      quiz: [
        {
          question: "Pourquoi applique-t-on Remplissage (Fill) avant Direction de flux ?",
          choix: ["Pour lisser le relief", "Pour supprimer les cuvettes qui interrompent l'écoulement", "Pour reprojeter le MNT", "Pour réduire la taille du fichier"],
          bonne: 1,
          explication: "Une cuvette n'a pas de voisine plus basse : l'eau s'y arrête et le réseau se coupe."
        },
        {
          question: "Dans le codage D8, quelle valeur indique un écoulement vers le sud ?",
          choix: ["1", "4", "16", "64"],
          bonne: 1,
          explication: "1 = E, 2 = SE, 4 = S, 8 = SO, 16 = O, 32 = NO, 64 = N, 128 = NE."
        },
        {
          question: "Avec des cellules de 50 m, un seuil de 400 cellules d'accumulation correspond à :",
          choix: ["0,4 km²", "1 km²", "4 km²", "20 km²"],
          bonne: 1,
          explication: "400 × 0,0025 km² = 1 km² de surface drainée."
        },
        {
          question: "À quoi sert Ajuster le point d'écoulement (Snap Pour Point) ?",
          choix: ["À déplacer l'exutoire sur la cellule d'accumulation maximale proche", "À créer le réseau hydrographique", "À calculer la pente", "À fusionner les bassins"],
          bonne: 0,
          explication: "Un exutoire décalé d'une cellule peut donner un bassin minuscule."
        },
        {
          question: "Dans l'ordre de Strahler, deux tronçons d'ordre 2 qui se rejoignent donnent :",
          choix: ["Un ordre 2", "Un ordre 3", "Un ordre 4", "Cela dépend de leur longueur"],
          bonne: 1,
          explication: "L'ordre n'augmente que lorsque deux tronçons de même ordre confluent."
        },
        {
          question: "Un indice de Gravelius Kc = 1,05 décrit un bassin :",
          choix: ["Très allongé", "Ramassé, presque circulaire", "Sans exutoire", "Endoréique"],
          bonne: 1,
          explication: "Kc = 1 pour un cercle ; un bassin ramassé concentre rapidement les crues."
        },
        {
          question: "Que représente la carte multicritère d'inondation de la leçon 4 ?",
          choix: ["Des hauteurs d'eau pour la crue centennale", "Une susceptibilité relative à l'inondation", "Le débit de l'oued", "Le zonage réglementaire officiel"],
          bonne: 1,
          explication: "Elle classe le territoire de façon relative ; les hauteurs d'eau exigent un modèle hydraulique."
        }
      ]
    },

    /* ============================================================ */
    {
      id: "n8",
      numero: 8,
      titre: "Vulnérabilité aux risques naturels majeurs",
      echelle: "1:1 000",
      resume: "Méthode multicritère (Reclassification, Superposition pondérée, AHP) appliquée aux feux de forêt, au séisme, au tsunami et aux glissements de terrain, puis carte de synthèse multirisque.",
      lecons: [
        {
          id: "n8-l1",
          titre: "Aléa, vulnérabilité et analyse multicritère",
          duree: "40 min",
          objectifs: [
            "Distinguer aléa, enjeux, vulnérabilité et risque",
            "Normaliser des critères avec Reclassification",
            "Combiner des critères avec Superposition pondérée ou Somme pondérée, et justifier les poids"
          ],
          contenu: `
<h3>1. Le vocabulaire</h3>
<ul>
  <li><b>Aléa</b> : phénomène possible, avec une intensité et une probabilité (séisme, crue, feu…).</li>
  <li><b>Enjeux</b> : ce qui peut être touché (population, écoles, routes, forêts, réseaux).</li>
  <li><b>Vulnérabilité</b> : sensibilité des enjeux à l'aléa (bâti fragile, absence d'accès…).</li>
  <li><b>Risque = aléa × vulnérabilité des enjeux</b>. Sans enjeu, pas de risque.</li>
</ul>
<p>En Algérie, la <b>loi 04-20 du 25 décembre 2004</b> relative à la prévention des risques majeurs liste notamment les séismes et risques géologiques, les inondations, les risques climatiques, les feux de forêts et les risques industriels. Elle prévoit des plans généraux de prévention par risque, où la cartographie SIG est centrale.</p>
<h3>2. Étape 1 : normaliser avec Reclassification</h3>
<p>Une pente en degrés et une distance en mètres ne s'additionnent pas. <b>Reclassification</b> (<i>Reclassify</i>) ramène chaque critère sur la même échelle, ici de 1 (peu favorable à l'aléa) à 5 (très favorable). Utilisez <i>Classer</i> pour saisir les bornes, puis vérifiez la table <code>Ancienne valeur → Nouvelle valeur</code>. Pour les données vectorielles, passez d'abord par <b>Distance euclidienne</b> ou <b>Polygone vers raster</b>.</p>
<h3>3. Étape 2 : pondérer et combiner</h3>
<table class="tab">
  <tr><th>Outil</th><th>Entrées</th><th>Particularités</th></tr>
  <tr><td><b>Superposition pondérée</b> (<i>Weighted Overlay</i>)</td><td>rasters entiers</td><td>% d'influence = 100, échelle commune (1 à 5), valeur <i>Restreint</i> pour exclure une zone ; sortie entière</td></tr>
  <tr><td><b>Somme pondérée</b> (<i>Weighted Sum</i>)</td><td>rasters entiers ou réels</td><td>poids libres, sortie réelle : on garde les nuances, puis on classe</td></tr>
  <tr><td>Calculatrice raster</td><td>tous</td><td><code>0.35 * "c_dist" + 0.25 * "c_pente" + …</code> : transparent et reproductible</td></tr>
</table>
<h3>4. Justifier les poids : la méthode AHP</h3>
<p>Dans l'<b>AHP</b> de Saaty, on compare les critères deux à deux (1 = aussi important, 3 = un peu plus, 5 = nettement plus, 9 = extrêmement plus). Le vecteur propre de la matrice donne les poids, et le <b>ratio de cohérence</b> CR = CI / RI doit rester inférieur à 0,10 (CI = (λmax − n) / (n − 1), RI = 1,12 pour 5 critères). Les poids proposés dans <code>poids_multicritere.xlsx</code> sont un point de départ à discuter en classe.</p>
<h3>5. Valider</h3>
<p>Une carte de susceptibilité se valide avec des <b>événements observés</b> (foyers d'incendie, glissements, laisses de crue) : on calcule la part des événements tombant en classes fortes. La fonction <code>valider()</code> du fichier <code>outils_risques.py</code> fait ce calcul automatiquement.</p>`,
          exercice: `<ol>
  <li>Ouvrez <code>Tables\\poids_multicritere.xlsx</code>. Vérifiez que chaque feuille totalise 100 %.</li>
  <li>Construisez une matrice AHP 3 × 3 (distance à l'oued, pente, occupation du sol) dans Excel et calculez les poids par la moyenne géométrique des lignes.</li>
  <li>Ouvrez l'outil <b>Superposition pondérée</b> et repérez : l'échelle d'évaluation, la colonne % d'influence, la valeur <i>Restreint</i>.</li>
</ol>`
        },
        {
          id: "n8-l2",
          titre: "Carte de risque de feux de forêt",
          duree: "40 min",
          objectifs: [
            "Choisir et préparer les facteurs d'éclosion et de propagation",
            "Reclasser l'exposition des versants",
            "Valider la carte avec l'historique des foyers"
          ],
          contenu: `
<p>Les forêts de la wilaya de Tlemcen (Hafir, Zarifet…) brûlent surtout en été, sous l'effet du sirocco. La quasi-totalité des feux sont d'origine humaine : la proximité des routes et des habitations compte autant que la végétation.</p>
<table class="tab">
  <tr><th>Facteur</th><th>Donnée</th><th>Note 5 si…</th><th>Poids</th></tr>
  <tr><td>Combustible (occupation du sol)</td><td>Occupation_sol (CODE_OS)</td><td>Forêt ; Parcours = 4</td><td>35 %</td></tr>
  <tr><td>Pente</td><td>Pente du MNT</td><td>&gt; 30° (le feu monte vite)</td><td>20 %</td></tr>
  <tr><td>Exposition</td><td><b>Exposition</b> (<i>Aspect</i>)</td><td>Sud (157,5–202,5°), plus chaud et sec</td><td>15 %</td></tr>
  <tr><td>Distance aux routes</td><td>Distance euclidienne de Routes</td><td>&lt; 100 m</td><td>15 %</td></tr>
  <tr><td>Distance aux lieux habités</td><td>Distance euclidienne de Ecoles (approximation)</td><td>&lt; 200 m</td><td>15 %</td></tr>
</table>
<h3>Reclasser l'exposition</h3>
<p>L'outil <b>Exposition</b> renvoie un angle de 0 à 360° depuis le nord, et −1 pour les zones plates. Dans <b>Reclassification</b> : −1 → 1, N (0–22,5 et 337,5–360) → 1, NE et NO → 2, E et O → 3, SE et SO → 4, S → 5.</p>
<pre><code>expo = Aspect(mnt)
c_expo = Reclassify(expo, "VALUE", RemapRange([[-1, 0, 1], [0, 22.5, 1],
    [22.5, 67.5, 2], [67.5, 112.5, 3], [112.5, 157.5, 4], [157.5, 202.5, 5],
    [202.5, 247.5, 4], [247.5, 292.5, 3], [292.5, 337.5, 2], [337.5, 360, 1]]))</code></pre>
<h3>Valider</h3>
<p><code>Risques\\Foyers_incendies.shp</code> contient 45 départs de feu (champs ANNEE, SURF_HA, OCCUP, CAUSE). Extrayez la classe de risque sous chaque foyer et calculez la part en classes 4–5. Une <b>Densité de noyau</b> des foyers pondérée par <code>SURF_HA</code> donne aussi une belle carte des secteurs les plus touchés.</p>`,
          exercice: `<ol>
  <li>Préparez les cinq critères notés de 1 à 5 et combinez-les avec <b>Superposition pondérée</b>.</li>
  <li>Validez avec les foyers d'incendie. Les feux de « Forêt » tombent-ils mieux que ceux de « Parcours » ?</li>
  <li>Proposez l'emplacement de deux postes de vigie : sommets avec vue sur le plus de cellules en classe 5 (outil <b>Visibilité</b>, <i>Viewshed</i>).</li>
  <li>Comparez avec <code>08_risque_feux.py</code>.</li>
</ol>`
        },
        {
          id: "n8-l3",
          titre: "Vulnérabilité sismique",
          duree: "40 min",
          objectifs: [
            "Situer la zone d'étude dans le zonage du RPA 99 version 2003",
            "Cartographier la densité d'épicentres et la proximité des failles actives",
            "Tenir compte de l'effet de site (amplification par les sols meubles)"
          ],
          contenu: `
<p>Le nord de l'Algérie est sismiquement actif (El Asnam 1980, Aïn Témouchent 1999, Boumerdès 2003). Le règlement parasismique <b>RPA 99 version 2003</b> divise le pays en zones 0 (négligeable), I (faible), IIa et IIb (moyenne) et III (élevée). La wilaya de Tlemcen est classée en <b>zone I</b> : le risque n'y est pas nul, et le zonage reste national. Une carte locale sert à aller plus loin : microzonage, choix de sites pour des équipements, priorités de renforcement. Les catalogues réels de séismes sont publiés par le CRAAG.</p>
<table class="tab">
  <tr><th>Critère</th><th>Méthode</th><th>Poids</th></tr>
  <tr><td>Distance aux failles actives</td><td>Couche filtrée <code>"ACTIVE" = 'Oui'</code> puis Distance euclidienne ; note 5 à moins de 500 m</td><td>40 %</td></tr>
  <tr><td>Densité d'épicentres</td><td><b>Densité de noyau</b>, rayon 3 km, puis <i>Slice</i> (boîte Reclassement) en 5 classes de même surface</td><td>25 %</td></tr>
  <tr><td>Effet de site</td><td>Champ <code>AMPLIF</code> de Lithologie : alluvions 1,8 et argiles 1,5 &gt; calcaires 1,0</td><td>25 %</td></tr>
  <tr><td>Pente (instabilités induites)</td><td>Pente en degrés</td><td>10 %</td></tr>
</table>
<p>Pondérer la densité par la magnitude est tentant, mais la magnitude est logarithmique : un séisme de M5 libère environ 32 fois plus d'énergie qu'un M4. Utilisez plutôt un champ calculé <code>10 ^ (1.5 * MAG)</code>, ou gardez la densité simple.</p>
<pre><code>arcpy.MakeFeatureLayer_management("Failles.shp", "actives", "\\"ACTIVE\\" = 'Oui'")
dens = KernelDensity("Epicentres.shp", "NONE", 50, 3000, "SQUARE_KILOMETERS")
c_dens = Slice(dens, 5, "EQUAL_AREA")</code></pre>
<div class="astuce"><b>Vulnérabilité :</b> pour passer de l'aléa au risque, croisez la carte avec le bâti (âge, type de construction, nombre d'étages) : c'est l'objet des études de vulnérabilité du bâti menées après Boumerdès.</div>`,
          exercice: `<ol>
  <li>Affichez les épicentres en symboles proportionnels à la magnitude et les failles actives en rouge.</li>
  <li>Calculez la densité de noyau avec des rayons de 2, 3 et 5 km : comment le rayon change-t-il la carte ?</li>
  <li>Combinez les quatre critères et repérez les écoles en classe forte.</li>
  <li>Comparez avec <code>09_risque_sismique.py</code>.</li>
</ol>`
        },
        {
          id: "n8-l4",
          titre: "Tsunami et submersion marine",
          duree: "35 min",
          objectifs: [
            "Isoler la partie terrestre d'un MNT côtier",
            "Cartographier la vulnérabilité à la submersion selon l'altitude et la distance à la côte",
            "Simuler un scénario simple de vague et lister les enjeux touchés"
          ],
          contenu: `
<p>Le séisme de Boumerdès du 21 mai 2003 (Mw 6,8) a provoqué un tsunami qui a endommagé des ports des îles Baléares. La côte algérienne n'est donc pas à l'abri. Le TP utilise une côte fictive inspirée du littoral de Ghazaouet (<code>TP\\Risques_cote</code>) : MNT de 25 m avec la mer en altitudes négatives, trait de côte, route côtière et 12 enjeux (port, écoles, centre de santé, station de dessalement…).</p>
<h3>1. Garder la terre</h3>
<pre><code>terre = Con(Raster("mnt_cote.tif") &gt; 0, Raster("mnt_cote.tif"))</code></pre>
<h3>2. Vulnérabilité à la submersion</h3>
<table class="tab">
  <tr><th>Critère</th><th>Note 5 si…</th><th>Poids</th></tr>
  <tr><td>Altitude</td><td>&lt; 2 m</td><td>50 %</td></tr>
  <tr><td>Distance au trait de côte</td><td>&lt; 100 m</td><td>35 %</td></tr>
  <tr><td>Pente</td><td>&lt; 2° (l'eau pénètre loin)</td><td>15 %</td></tr>
</table>
<h3>3. Scénario de vague</h3>
<p>Un scénario simple : vague de 5 m qui pénètre jusqu'à 1 km. Les cellules à la fois sous 5 m et à moins de 1 km de la côte sont submergées :</p>
<pre><code>dist = EucDistance("Trait_de_cote.shp")
Con((terre &lt;= 5) &amp; (dist &lt;= 1000), 1).save("submersion_5m.tif")</code></pre>
<p>Cette méthode « baignoire » ignore la dynamique de la vague et les obstacles. Elle reste utile pour repérer les enjeux à évacuer en priorité et tracer des itinéraires vers des zones refuges au-dessus de 10 m.</p>`,
          exercice: `<ol>
  <li>Importez <code>MNT_cote_25m.asc</code> et isolez la terre. Quelle surface se trouve sous 5 m d'altitude ?</li>
  <li>Construisez la carte de vulnérabilité à trois critères.</li>
  <li>Testez des vagues de 3, 5 et 8 m : combien d'enjeux sont touchés à chaque fois ?</li>
  <li>Avec <b>Distance euclidienne</b> depuis les zones au-dessus de 10 m, indiquez la distance d'évacuation pour chaque enjeu. Comparez avec <code>10_tsunami.py</code>.</li>
</ol>`
        },
        {
          id: "n8-l5",
          titre: "Susceptibilité aux glissements de terrain",
          duree: "35 min",
          objectifs: [
            "Combiner lithologie, pente et facteurs aggravants",
            "Utiliser un champ attributaire déjà noté comme critère",
            "Évaluer la carte avec un inventaire de glissements"
          ],
          contenu: `
<p>Les glissements touchent surtout les versants marneux et argileux, après de fortes pluies ou à la suite de terrassements routiers. Constantine est l'exemple algérien le plus étudié. Dans le TP, la couche <code>Lithologie</code> contient déjà une note de susceptibilité <code>SUSC_GLIS</code> : calcaires 1, grès 2, alluvions 3, marnes 4, argiles 5.</p>
<table class="tab">
  <tr><th>Critère</th><th>Note 5 si…</th><th>Poids</th></tr>
  <tr><td>Lithologie (SUSC_GLIS)</td><td>argiles</td><td>35 %</td></tr>
  <tr><td>Pente</td><td>&gt; 30°</td><td>30 %</td></tr>
  <tr><td>Distance aux oueds (sapement des berges)</td><td>&lt; 100 m</td><td>15 %</td></tr>
  <tr><td>Occupation du sol</td><td>sol nu</td><td>10 %</td></tr>
  <tr><td>Distance aux routes (talus)</td><td>&lt; 50 m</td><td>10 %</td></tr>
</table>
<p>Avec <b>Polygone vers raster</b> sur le champ <code>SUSC_GLIS</code>, le raster obtenu est directement un critère noté de 1 à 5 : pas besoin de le reclasser.</p>
<h3>Évaluer la carte</h3>
<p>L'inventaire <code>Glissements.shp</code> (32 points, champs TYPE, ACTIF, LITHO) sert à la validation. Pour un travail rigoureux, on sépare l'inventaire en deux : une moitié pour régler les poids, l'autre pour valider. Avec <b>Sélectionner selon les attributs</b> (<code>"ACTIF" = 'Oui'</code>), vérifiez aussi que les glissements actifs tombent dans les classes les plus fortes.</p>`,
          exercice: `<ol>
  <li>Construisez la carte de susceptibilité et validez-la avec l'inventaire.</li>
  <li>Calculez le pourcentage de la surface de chaque classe (table attributaire du raster) et comparez au pourcentage de glissements par classe. Une bonne carte concentre beaucoup de glissements dans peu de surface.</li>
  <li>Quels tronçons de route traversent la classe 5 ? (<b>Extraire par masque</b> puis <b>Intersecter</b>, ou script.)</li>
  <li>Comparez avec <code>11_glissements.py</code>.</li>
</ol>`
        },
        {
          id: "n8-l6",
          titre: "Synthèse multirisque et carte finale",
          duree: "45 min",
          objectifs: [
            "Combiner plusieurs cartes d'aléa en une synthèse multirisque",
            "Produire un bilan chiffré par commune",
            "Mettre en page une carte de risque honnête et lisible"
          ],
          contenu: `
<h3>1. Deux façons de synthétiser</h3>
<ul>
  <li><b>Aléa maximal</b> : <b>Statistiques de cellules</b> (<i>Cell Statistics</i>), statistique MAXIMUM. Chaque cellule prend la classe la plus forte parmi tous les aléas.</li>
  <li><b>Cumul des aléas forts</b> : on compte combien d'aléas sont en classe 4 ou 5 dans chaque cellule (0 à 4). Une école exposée à la fois à l'inondation et au glissement est prioritaire.</li>
</ul>
<pre><code>noms = ["inondation_classes.tif", "feux_classes.tif", "seisme_classes.tif", "glissements_classes.tif"]
rasters = [Raster(n) for n in noms]
CellStatistics(rasters, "MAXIMUM", "DATA").save("multirisque_max.tif")
cumul = sum(Con(r &gt;= 4, 1, 0) for r in rasters)</code></pre>
<h3>2. Bilan par commune</h3>
<p><b>Statistiques zonales (table)</b> (<i>Zonal Statistics as Table</i>) avec <code>Communes.shp</code> comme zones et le cumul comme valeur donne, pour chaque commune, le nombre moyen d'aléas forts. Joignez la table aux communes et faites une carte choroplèthe, complétée par un diagramme (<i>Affichage &gt; Graphiques</i>).</p>
<h3>3. Mise en page</h3>
<ul>
  <li>Couleurs ordonnées du jaune pâle au rouge foncé ; jamais d'arc-en-ciel pour une échelle de risque.</li>
  <li>Légende avec des libellés en clair (« très faible » à « très fort ») plutôt que les valeurs 1 à 5.</li>
  <li>Cartouche : méthode, critères et poids, source et date des données, système de coordonnées.</li>
  <li>Mention obligatoire pour ce TP : <i>données fictives à usage pédagogique</i>.</li>
</ul>
<h3>4. Automatiser</h3>
<p>Les scripts <code>06</code> à <code>12</code> enchaînent tout le niveau 7 et le niveau 8. Exécutez-les dans l'ordre (06 avant 07 et 11, car ils utilisent le réseau hydrographique). Pour en faire un outil de boîte à outils (niveau 6), remplacez les poids écrits dans le code par des <code>arcpy.GetParameter()</code> : vos collègues pourront tester d'autres pondérations sans ouvrir Python.</p>`,
          exercice: `<ol>
  <li>Produisez les cartes d'aléa maximal et de cumul.</li>
  <li>Classez les communes par nombre moyen d'aléas forts et cartographiez le résultat.</li>
  <li>Réalisez une planche A3 de synthèse : carte multirisque, carte par commune, tableau des écoles exposées, cartouche complet.</li>
  <li>Rédigez dix lignes de recommandations pour la commune la plus exposée.</li>
</ol>`
        }
      ],
      quiz: [
        {
          question: "Dans une zone sans aucun enjeu, un aléa fort donne un risque :",
          choix: ["Très fort", "Moyen", "Nul ou négligeable", "Impossible à calculer"],
          bonne: 2,
          explication: "Risque = aléa × vulnérabilité des enjeux : sans enjeu, pas de risque."
        },
        {
          question: "Pourquoi reclasse-t-on chaque critère de 1 à 5 avant de les combiner ?",
          choix: ["Pour réduire la taille des rasters", "Pour mettre des grandeurs différentes sur une échelle commune", "Pour changer de projection", "Parce que Superposition pondérée refuse les décimales dans les poids"],
          bonne: 1,
          explication: "On ne peut pas additionner des degrés et des mètres : la normalisation les rend comparables."
        },
        {
          question: "Dans l'outil Superposition pondérée, la somme des % d'influence doit être :",
          choix: ["1", "10", "100", "Libre"],
          bonne: 2,
          explication: "Les pourcentages d'influence doivent totaliser 100."
        },
        {
          question: "Dans la méthode AHP, les poids sont acceptables si le ratio de cohérence CR est :",
          choix: ["Supérieur à 0,5", "Inférieur à 0,10", "Égal à 1", "Négatif"],
          bonne: 1,
          explication: "Au-delà de 0,10, les comparaisons par paires sont jugées incohérentes."
        },
        {
          question: "Quelle exposition reçoit la note la plus forte pour le risque de feu de forêt ?",
          choix: ["Nord", "Est", "Sud", "Zones plates"],
          bonne: 2,
          explication: "Les versants sud sont plus ensoleillés, donc plus chauds et plus secs."
        },
        {
          question: "Dans quelle zone du RPA 99 version 2003 est classée la wilaya de Tlemcen ?",
          choix: ["Zone 0", "Zone I", "Zone IIb", "Zone III"],
          bonne: 1,
          explication: "Tlemcen est en zone I (sismicité faible) ; Alger et Boumerdès sont en zone III."
        },
        {
          question: "Pourquoi des alluvions reçoivent-elles une note sismique plus forte que des calcaires ?",
          choix: ["Elles sont plus proches des failles", "Les sols meubles amplifient les ondes sismiques", "Elles sont plus anciennes", "Elles sont plus perméables"],
          bonne: 1,
          explication: "C'est l'effet de site : les sols meubles amplifient et allongent les secousses."
        },
        {
          question: "Quel outil donne, pour chaque cellule, la classe la plus forte parmi plusieurs cartes d'aléa ?",
          choix: ["Statistiques zonales", "Statistiques de cellules, MAXIMUM", "Mosaïque", "Combiner"],
          bonne: 1,
          explication: "Cell Statistics calcule la statistique demandée cellule par cellule sur plusieurs rasters."
        }
      ]
    }
  ]
};
