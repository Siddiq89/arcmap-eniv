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
      resume: "Formats vecteur et raster, géodatabase, systèmes de coordonnées, table attributaire, sélections et édition.",
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
<p>Deux outils à ne pas confondre :</p>
<table class="tab">
  <tr><th>Outil</th><th>Rôle</th><th>Chemin ArcToolbox</th></tr>
  <tr><td><b>Définir une projection</b> (Define Projection)</td><td>Déclare le système d'une couche qui n'en a pas (fichier .prj manquant). Ne modifie pas les coordonnées.</td><td>Outils de gestion des données &gt; Projections et transformations</td></tr>
  <tr><td><b>Projeter</b> (Project)</td><td>Crée une nouvelle couche dont les coordonnées sont recalculées dans un autre système.</td><td>Outils de gestion des données &gt; Projections et transformations</td></tr>
</table>
<div class="astuce"><b>Erreur classique :</b> utiliser « Définir une projection » pour changer de système. Les données se retrouvent alors au mauvais endroit.</div>`,
          exercice: `<ol>
  <li>Affichez les propriétés d'une couche (onglet <i>Source</i>) et notez son système de coordonnées.</li>
  <li>Projetez cette couche dans un système UTM avec l'outil <b>Projeter</b>.</li>
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
    }
  ]
};
