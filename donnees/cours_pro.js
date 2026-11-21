/*
 * CONTENU PÉDAGOGIQUE — Parcours ArcGIS Pro
 * ------------------------------------------------------------------
 * Même structure que cours.js (ArcMap). Identifiants : p1…p8, leçons p1-l1…
 * Les noms d'outils sont donnés en français, avec le nom anglais entre parenthèses.
 * Les données de TP sont les mêmes que pour ArcMap (C:\ENIV\TP).
 */
window.COURS_PRO = {
  cle: "pro",
  nom: "ArcGIS Pro",
  court: "ArcGIS Pro",
  logiciel: "ArcGIS Pro 3.x",
  recherche: "ArcGIS Pro",
  accroche: "ArcGIS Pro, du premier projet à la cartographie des risques",
  lead: "Le même parcours, adapté à ArcGIS Pro : projets et ruban, données et géodatabase, symbologie et mises en page, géotraitement, ModelBuilder, ArcPy en Python 3 et notebooks, puis hydrologie à partir du MNT et cartes de vulnérabilité aux risques naturels. Les données de TP sont communes aux trois logiciels.",
  titre: "ArcGIS Pro pas à pas",
  niveaux: [
    /* ============================================================ */
    {
      id: "p1",
      numero: 1,
      titre: "Découvrir ArcGIS Pro",
      echelle: "1:1 000 000",
      resume: "Projet .aprx, ruban, volets Contenu et Catalogue, cartes et vues 3D : les repères de l'interface.",
      lecons: [
        {
          id: "p1-l1",
          titre: "Le projet ArcGIS Pro et son interface",
          duree: "25 min",
          objectifs: [
            "Créer un projet et comprendre ce qu'il contient",
            "Se repérer dans le ruban et les volets"
          ],
          contenu: `
<p>ArcGIS Pro remplace ArcMap, ArcCatalog et ArcScene par <b>une seule application</b> 64 bits. Tout le travail est rangé dans un <b>projet</b> (<code>.aprx</code>) qui regroupe des cartes, des mises en page, des connexions à des dossiers, une géodatabase et une boîte d'outils par défaut.</p>
<table class="tab">
  <tr><th>ArcMap 10.8</th><th>ArcGIS Pro</th></tr>
  <tr><td>Document .mxd</td><td>Projet .aprx (plusieurs cartes et mises en page)</td></tr>
  <tr><td>Barres d'outils</td><td><b>Ruban</b> à onglets contextuels (Carte, Insérer, Analyse, Affichage, Mise en forme…)</td></tr>
  <tr><td>Table des matières</td><td>Volet <b>Contenu</b></td></tr>
  <tr><td>ArcCatalog</td><td>Volet <b>Catalogue</b>, intégré</td></tr>
  <tr><td>ArcToolbox</td><td>Volet <b>Géotraitement</b> (onglet Analyse &gt; Outils)</td></tr>
  <tr><td>ArcScene / ArcGlobe</td><td><b>Scène</b> locale ou globale dans le même projet</td></tr>
  <tr><td>Python 2.7</td><td>Python 3 (environnement arcgispro-py3)</td></tr>
</table>
<p>À l'ouverture, choisissez <i>Carte</i> (modèle vide avec fond de carte). Donnez au projet le nom <code>TP_ENIV</code> et l'emplacement <code>C:\\ENIV\\Projets</code>. ArcGIS Pro crée un dossier du même nom contenant <code>TP_ENIV.aprx</code>, <code>TP_ENIV.gdb</code> et <code>TP_ENIV.atbx</code>.</p>
<div class="astuce"><b>Astuce :</b> si un volet a disparu, rouvrez-le depuis l'onglet <b>Affichage</b> (Catalogue, Contenu, Géotraitement…). Le bouton <i>Réinitialiser les volets</i> remet la disposition d'origine.</div>`,
          exercice: `<ol>
  <li>Créez le projet <code>TP_ENIV</code>.</li>
  <li>Dans le volet Catalogue, faites un clic droit sur <i>Dossiers &gt; Ajouter une connexion à un dossier</i> et choisissez <code>C:\\ENIV\\TP</code>.</li>
  <li>Faites glisser <code>Communes.shp</code> et <code>Routes.shp</code> dans la carte, puis enregistrez le projet.</li>
</ol>`
        },
        {
          id: "p1-l2",
          titre: "Naviguer, explorer et passer en 3D",
          duree: "20 min",
          objectifs: [
            "Utiliser l'outil Explorer et les signets",
            "Convertir une carte en scène 3D"
          ],
          contenu: `
<p>L'outil <b>Explorer</b> (onglet Carte) remplace les outils Zoom, Déplacer et Identifier : clic gauche glissé = déplacement, molette = zoom, clic sur une entité = fenêtre contextuelle avec ses attributs.</p>
<ul>
  <li><b>Signets</b> : onglet Carte &gt; Signets &gt; Nouveau signet, pour revenir à une emprise.</li>
  <li><b>Échelle</b> : saisie directe en bas de la vue (ex. <code>1:50 000</code>).</li>
  <li><b>Coordonnées</b> : affichées en bas à droite ; clic droit pour changer d'unité (DMS, degrés décimaux, MGRS…).</li>
</ul>
<p>Pour la 3D : onglet <b>Affichage &gt; Convertir &gt; En scène locale</b>. Ajoutez le MNT comme <i>surface d'élévation</i> (dans Contenu, Surfaces d'élévation &gt; Ajouter une source) et appliquez une exagération verticale de 2 à 3 pour bien voir le relief du bassin.</p>`,
          exercice: `<ol>
  <li>Créez deux signets : la zone d'étude entière et le chef-lieu.</li>
  <li>Convertissez la carte en scène locale et ajoutez <code>MNT_50m.asc</code> comme surface d'élévation.</li>
  <li>Placez les écoles en 3D et faites une capture d'écran de la vue.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Quelle est l'extension d'un projet ArcGIS Pro ?", choix: [".mxd", ".aprx", ".qgz", ".gdb"], bonne: 1, explication: "Le .aprx remplace le .mxd et peut contenir plusieurs cartes et mises en page." },
        { question: "Dans ArcGIS Pro, la table des matières d'ArcMap correspond au volet :", choix: ["Catalogue", "Géotraitement", "Contenu", "Symbologie"], bonne: 2, explication: "Le volet Contenu liste les couches de la carte active." },
        { question: "Quelle version de Python utilise ArcGIS Pro ?", choix: ["Python 2.7", "Python 3", "Les deux", "Aucune"], bonne: 1, explication: "ArcGIS Pro utilise Python 3 (environnement arcgispro-py3)." },
        { question: "Comment passer une carte en 3D ?", choix: ["Ouvrir ArcScene", "Affichage > Convertir > En scène locale", "Insérer > Nouvelle mise en page", "Ce n'est pas possible"], bonne: 1, explication: "Les scènes 3D sont intégrées au projet, sans application séparée." }
      ]
    },

    /* ============================================================ */
    {
      id: "p2",
      numero: 2,
      titre: "Données et systèmes de coordonnées",
      echelle: "1:250 000",
      resume: "Géodatabase fichier, projections, tables et jointures, numérisation et géoréférencement dans ArcGIS Pro.",
      lecons: [
        {
          id: "p2-l1",
          titre: "Géodatabase, systèmes de coordonnées et projections",
          duree: "35 min",
          objectifs: [
            "Importer des shapefiles dans une géodatabase fichier",
            "Distinguer définir une projection et projeter",
            "Choisir le système adapté à l'Algérie du Nord-Ouest"
          ],
          contenu: `
<p>ArcGIS Pro travaille de préférence en <b>géodatabase fichier</b> (<code>.gdb</code>). Pour y importer les shapefiles du TP : clic droit sur <code>TP_ENIV.gdb</code> &gt; <i>Importer &gt; Classe(s) d'entités</i>, ou outil <b>Classe d'entités vers géodatabase</b> (<i>Feature Class To Geodatabase</i>).</p>
<p>Le <b>système de coordonnées de la carte</b> se règle dans <i>Propriétés de la carte &gt; Systèmes de coordonnées</i> (double-clic sur « Carte » dans Contenu). Les couches sont projetées « à la volée » pour l'affichage, mais les calculs de surface et de distance doivent se faire sur des données <b>projetées</b> en mètres.</p>
<table class="tab">
  <tr><th>Système</th><th>Code EPSG</th><th>Usage</th></tr>
  <tr><td>WGS 1984 (degrés)</td><td>4326</td><td>GPS, échanges, cartes web</td></tr>
  <tr><td>WGS 1984 UTM zone 30N</td><td>32630</td><td>Tlemcen et l'ouest du pays (données du TP)</td></tr>
  <tr><td>Nord Sahara 1959 UTM zone 30N</td><td>30730</td><td>cartes topographiques INCT</td></tr>
</table>
<ul>
  <li><b>Définir une projection</b> (<i>Define Projection</i>) : la donnée n'a pas de .prj, on lui dit dans quel système sont ses coordonnées.</li>
  <li><b>Projeter</b> (<i>Project</i>) : on crée une copie dans un autre système. Entre Nord Sahara 1959 et WGS 1984, choisissez une <b>transformation géographique</b> (ArcGIS Pro en propose la liste).</li>
</ul>`,
          exercice: `<ol>
  <li>Importez les 7 shapefiles du dossier <code>Shapefiles</code> dans <code>TP_ENIV.gdb</code>.</li>
  <li>Définissez la projection de <code>Projections\\Forages_sans_projection</code> en WGS 1984 UTM 30N.</li>
  <li>Projetez <code>Communes_NordSahara1959</code> en WGS 1984 UTM 30N et comparez avec <code>Communes</code> : quel décalage observez-vous sans transformation ?</li>
</ol>`
        },
        {
          id: "p2-l2",
          titre: "Tables, jointures et points XY",
          duree: "30 min",
          objectifs: [
            "Ouvrir et modifier une table attributaire",
            "Joindre une table Excel ou CSV",
            "Créer des points à partir de coordonnées"
          ],
          contenu: `
<p>Clic droit sur une couche &gt; <b>Table attributaire</b>. Le menu ☰ de la table permet d'ajouter un champ (<i>Ajouter un champ</i>, puis <b>Enregistrer</b> dans l'onglet Champs), de calculer un champ (<b>Calculer un champ</b>, en Python 3 ou Arcade) et de calculer la géométrie (<i>Calculer la géométrie</i> : surface, longueur, coordonnées).</p>
<h3>Jointure</h3>
<p>Clic droit sur <code>Communes</code> &gt; <i>Jointures et relations &gt; Ajouter une jointure</i>. Table : <code>population_communes.xlsx</code> (feuille <code>Population$</code>), champ commun : <code>CODE</code>. Activez <i>Conserver tous les enregistrements cibles</i> puis vérifiez la jointure avec le bouton <i>Valider la jointure</i>.</p>
<h3>Points XY</h3>
<p>Outil <b>Table XY vers point</b> (<i>XY Table To Point</i>) sur <code>releves_gps.csv</code> : X = <code>X</code>, Y = <code>Y</code>, système WGS 1984 UTM 30N. Avec <code>LON</code>/<code>LAT</code>, choisissez WGS 1984 (GCS).</p>`,
          exercice: `<ol>
  <li>Joignez la table de population aux communes, puis calculez la densité (<code>POP_2020 / surface en km²</code>) dans un nouveau champ.</li>
  <li>Créez la couche des relevés GPS à partir du CSV.</li>
  <li>Sélectionnez les relevés situés à moins de 500 m d'une route (<i>Sélectionner selon l'emplacement</i>).</li>
</ol>`
        },
        {
          id: "p2-l3",
          titre: "Numériser et géoréférencer",
          duree: "35 min",
          objectifs: [
            "Créer une classe d'entités et la numériser",
            "Caler une carte scannée avec des points de contrôle"
          ],
          contenu: `
<p><b>Créer une classe d'entités</b> : clic droit sur la géodatabase &gt; <i>Nouveau &gt; Classe d'entités</i> (type, champs, système de coordonnées). Puis onglet <b>Mise à jour &gt; Créer</b> : le volet <i>Créer des entités</i> propose un modèle par couche. Les accrochages se règlent dans Mise à jour &gt; <b>Capture</b>.</p>
<ul>
  <li><b>Modifier les sommets</b>, <b>Remodeler</b>, <b>Fractionner</b>, <b>Fusionner</b> : onglet Mise à jour, groupe Outils.</li>
  <li>Pensez à <b>Enregistrer</b> les mises à jour (bouton Enregistrer de l'onglet Mise à jour).</li>
</ul>
<h3>Géoréférencement</h3>
<p>Ajoutez l'image scannée, sélectionnez-la dans Contenu, puis onglet <b>Imagerie &gt; Géoréférencer</b>. <i>Ajuster</i> pour la rapprocher, puis <b>Ajouter des points de contrôle</b> (au moins 4 à 6 croisements de quadrillage bien répartis). Consultez la <b>table des points de contrôle</b> et l'erreur RMS. Terminez par <b>Enregistrer comme nouveau</b> pour créer un raster calé.</p>`,
          exercice: `<ol>
  <li>Créez la classe d'entités ponctuelles <code>Puits</code> (champs NOM, PROF_M) et numérisez 5 puits.</li>
  <li>Créez une classe surfacique <code>Parcelles</code> et numérisez 3 parcelles jointives avec la capture activée.</li>
  <li>Si vous disposez d'une carte scannée de l'INCT, calez-la et notez l'erreur RMS obtenue.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Quel est le format de stockage conseillé dans ArcGIS Pro ?", choix: ["Shapefile", "Géodatabase fichier (.gdb)", "Fichier Excel", "KML"], bonne: 1, explication: "La géodatabase fichier gère mieux les noms longs, les domaines et les grandes tables." },
        { question: "Une couche sans .prj dont on connaît le système : quel outil utiliser ?", choix: ["Projeter", "Définir une projection", "Géoréférencer", "Table XY vers point"], bonne: 1, explication: "Définir une projection écrit le système sans modifier les coordonnées." },
        { question: "Quel code EPSG correspond à WGS 1984 UTM zone 30N ?", choix: ["4326", "30730", "32630", "3857"], bonne: 2, explication: "32630 ; 30730 est Nord Sahara 1959 UTM 30N." },
        { question: "Dans l'onglet Mise à jour, à quoi sert le groupe Capture ?", choix: ["Faire une copie d'écran", "Accrocher les sommets aux entités existantes", "Exporter la carte", "Calculer la surface"], bonne: 1, explication: "La capture évite les trous et chevauchements entre entités." },
        { question: "Après une jointure, quel bouton vérifie que les codes correspondent bien ?", choix: ["Valider la jointure", "Calculer la géométrie", "Supprimer les jointures", "Actualiser"], bonne: 0, explication: "Valider la jointure indique le nombre d'enregistrements appariés." }
      ]
    },

    /* ============================================================ */
    {
      id: "p3",
      numero: 3,
      titre: "Symbologie, étiquettes et mises en page",
      echelle: "1:100 000",
      resume: "Volet Symbologie, classes, étiquetage, mise en page et export PDF, série de cartes.",
      lecons: [
        {
          id: "p3-l1",
          titre: "Symbologie et étiquettes",
          duree: "30 min",
          objectifs: [
            "Choisir une méthode de représentation adaptée",
            "Étiqueter et gérer les conflits d'étiquettes"
          ],
          contenu: `
<p>Sélectionnez la couche, puis onglet <b>Couche d'entités &gt; Symbologie</b>. Le volet propose : <i>Symbole unique</i>, <i>Valeurs uniques</i> (catégories), <i>Couleurs graduées</i> (choroplèthe), <i>Symboles gradués</i> ou <i>proportionnels</i>, <i>Graphiques</i> (diagrammes), <i>Carte de densité</i> (heat map).</p>
<ul>
  <li>Population des communes : <b>Couleurs graduées</b> sur la densité (pas sur la population brute), méthode <i>Seuils naturels</i>, 5 classes.</li>
  <li>Occupation du sol : <b>Valeurs uniques</b> sur <code>TYPE</code>, couleurs conventionnelles (vert forêt, jaune agriculture, rouge urbain).</li>
  <li>Forages : <b>Symboles proportionnels</b> sur <code>DEBIT_LS</code>.</li>
</ul>
<p><b>Étiquettes</b> : onglet <i>Étiquetage</i>, champ <code>NOM</code>. Les <i>classes d'étiquettes</i> permettent des styles différents selon une requête (ex. chefs-lieux en gras). Le moteur Maplex est utilisé par défaut ; réglez la priorité et la position dans <i>Propriétés d'étiquetage</i>.</p>`,
          exercice: `<ol>
  <li>Réalisez une carte choroplèthe de la densité de population en 5 classes.</li>
  <li>Symbolisez les oueds selon le champ <code>ORDRE</code> (épaisseur croissante).</li>
  <li>Étiquetez les communes, avec une classe d'étiquettes en gras pour <code>CHEF_LIEU = 'Oui'</code>.</li>
</ol>`
        },
        {
          id: "p3-l2",
          titre: "Mise en page, export et série de cartes",
          duree: "35 min",
          objectifs: [
            "Composer une mise en page complète",
            "Exporter en PDF ou PNG",
            "Produire automatiquement une carte par commune"
          ],
          contenu: `
<p>Onglet <b>Insérer &gt; Nouvelle mise en page</b> (A4 ou A3, portrait ou paysage). Insérez un <b>bloc de carte</b>, puis depuis l'onglet Insérer : titre, légende, flèche du nord, barre d'échelle, texte de source, image du logo de l'ENIV. Les éléments se règlent dans le volet <i>Format</i>.</p>
<ul>
  <li>Carte de localisation : insérez un second bloc de carte relié à une autre carte du projet, et ajoutez un <i>indicateur d'étendue</i>.</li>
  <li>Export : onglet <b>Partager &gt; Exporter la mise en page</b> (PDF, PNG 300 dpi…).</li>
</ul>
<h3>Série de cartes</h3>
<p>Onglet Mise en page &gt; <b>Série de cartes &gt; Spatiale</b> : couche d'index = <code>Communes</code>, champ de nom = <code>NOM</code>. Un texte dynamique affiche le nom de la page. L'export produit un PDF de 9 pages, une par commune. C'est l'équivalent des pilotes de pages (Data Driven Pages) d'ArcMap.</p>`,
          exercice: `<ol>
  <li>Composez une carte A4 paysage de la zone d'étude avec tous les éléments obligatoires.</li>
  <li>Ajoutez une carte de localisation avec indicateur d'étendue.</li>
  <li>Créez une série de cartes par commune et exportez-la en un PDF multipage.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Pour cartographier une densité de population par commune, on utilise :", choix: ["Symbole unique", "Valeurs uniques", "Couleurs graduées", "Symboles proportionnels"], bonne: 2, explication: "Une donnée relative (densité, taux) se représente en couleurs graduées." },
        { question: "Dans ArcGIS Pro, l'équivalent des pilotes de pages (Data Driven Pages) d'ArcMap est :", choix: ["La série de cartes", "Le bloc de carte", "La couche d'index", "Le signet"], bonne: 0, explication: "La série de cartes génère une page par entité d'une couche d'index." },
        { question: "Où exporte-t-on une mise en page en PDF ?", choix: ["Onglet Partager > Exporter la mise en page", "Onglet Analyse", "Volet Catalogue", "Onglet Imagerie"], bonne: 0, explication: "L'onglet Partager regroupe les exports et publications." },
        { question: "Quel élément n'est pas indispensable sur une carte thématique ?", choix: ["Légende", "Échelle", "Source", "Fond de carte satellite"], bonne: 3, explication: "Titre, légende, échelle, orientation et source sont attendus ; le fond satellite est facultatif." }
      ]
    },

    /* ============================================================ */
    {
      id: "p4",
      numero: 4,
      titre: "Géotraitement et analyse spatiale",
      echelle: "1:50 000",
      resume: "Volet Géotraitement, zones tampons, superpositions, sélection, analyse raster avec Spatial Analyst.",
      lecons: [
        {
          id: "p4-l1",
          titre: "Le volet Géotraitement et les zones tampons",
          duree: "30 min",
          objectifs: [
            "Trouver et lancer un outil, consulter l'historique",
            "Créer des zones tampons simples et multiples"
          ],
          contenu: `
<p>Onglet <b>Analyse &gt; Outils</b> ouvre le volet <b>Géotraitement</b> : une barre de recherche (tapez « tampon »), les <i>Favoris</i> et les <i>Boîtes d'outils</i>. Chaque exécution est gardée dans <b>Analyse &gt; Historique</b> : un clic droit permet de la relancer ou de copier la commande Python.</p>
<ul>
  <li><b>Zone tampon</b> (<i>Buffer</i>) : distance fixe ou issue d'un champ, option <i>Fusionner</i> (dissolve) ALL.</li>
  <li><b>Zone tampon multiple</b> (<i>Multiple Ring Buffer</i>) : 100, 250, 500 m autour des forages.</li>
  <li><b>Proximité</b> (<i>Near</i>) : distance de chaque école à la route la plus proche, écrite dans la table.</li>
</ul>
<div class="astuce"><b>Astuce :</b> l'onglet <i>Environnements</i> de chaque outil fixe l'étendue, le système de sortie et l'espace de travail, comme dans ArcMap.</div>`,
          exercice: `<ol>
  <li>Créez un périmètre de protection de 200 m autour des forages (fusionné).</li>
  <li>Créez des anneaux de 100, 250 et 500 m autour des écoles.</li>
  <li>Avec <b>Proximité</b>, indiquez pour chaque école la distance à la route la plus proche.</li>
</ol>`
        },
        {
          id: "p4-l2",
          titre: "Superpositions : découper, intersecter, agréger, fusionner",
          duree: "30 min",
          objectifs: [
            "Choisir le bon outil de superposition",
            "Produire des statistiques par zone"
          ],
          contenu: `
<table class="tab">
  <tr><th>Outil</th><th>Nom anglais</th><th>Résultat</th></tr>
  <tr><td>Découper</td><td>Clip</td><td>la couche d'entrée limitée à une emprise</td></tr>
  <tr><td>Intersecter</td><td>Intersect</td><td>les parties communes, avec les attributs des deux couches</td></tr>
  <tr><td>Agréger</td><td>Union</td><td>toutes les parties des deux couches</td></tr>
  <tr><td>Effacer</td><td>Erase</td><td>la couche d'entrée moins l'emprise</td></tr>
  <tr><td>Fusionner</td><td>Dissolve</td><td>regroupe les entités ayant la même valeur</td></tr>
  <tr><td>Combiner</td><td>Merge</td><td>assemble plusieurs couches de même type</td></tr>
</table>
<p>Dans ArcGIS Pro, Effacer et Intersecter sont disponibles avec une licence Basic (ils demandaient Advanced dans les anciennes versions d'ArcMap).</p>
<p><b>Récapituler à l'intérieur</b> (<i>Summarize Within</i>) compte ou additionne des entités par polygone : nombre de forages par commune, longueur de routes par commune.</p>`,
          exercice: `<ol>
  <li>Intersectez l'occupation du sol et les communes, puis fusionnez par commune et type : quelle commune a le plus de forêt ?</li>
  <li>Avec Récapituler à l'intérieur, comptez les forages par commune.</li>
  <li>Effacez les zones urbaines des périmètres de protection des forages.</li>
</ol>`
        },
        {
          id: "p4-l3",
          titre: "Raster et Spatial Analyst",
          duree: "35 min",
          objectifs: [
            "Calculer pente, exposition et ombrage",
            "Utiliser la calculatrice raster et la reclassification"
          ],
          contenu: `
<p>Ajoutez <code>MNT_50m.asc</code> à la carte, puis exportez-le en GeoTIFF (clic droit &gt; <i>Données &gt; Exporter le raster</i>) avec le système WGS 1984 UTM 30N. Les outils raster sont dans la boîte <b>Spatial Analyst</b> (licence requise) ou dans l'onglet <b>Imagerie &gt; Fonctions raster</b> (calcul à la volée, sans fichier).</p>
<ul>
  <li><b>Pente</b> (<i>Slope</i>) en degrés, <b>Exposition</b> (<i>Aspect</i>), <b>Ombrage</b> (<i>Hillshade</i>).</li>
  <li><b>Calculatrice raster</b> (<i>Raster Calculator</i>) : <code>Con("pente" &gt; 15, 1, 0)</code>.</li>
  <li><b>Reclassification</b> (<i>Reclassify</i>) : bornes et nouvelles valeurs dans une table.</li>
  <li><b>Raster vers polygone</b> et <b>Polygone vers raster</b> pour passer d'un modèle à l'autre.</li>
  <li><b>Statistiques zonales (table)</b> : altitude moyenne par commune.</li>
</ul>`,
          exercice: `<ol>
  <li>Calculez la pente et l'ombrage, puis superposez-les avec transparence.</li>
  <li>Isolez les pentes supérieures à 15° et convertissez-les en polygones.</li>
  <li>Calculez l'altitude moyenne de chaque commune.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Où retrouve-t-on les outils déjà exécutés et leur commande Python ?", choix: ["Analyse > Historique", "Volet Contenu", "Onglet Partager", "Volet Symbologie"], bonne: 0, explication: "L'historique garde chaque exécution avec ses paramètres." },
        { question: "Quel outil garde toutes les parties de deux couches de polygones ?", choix: ["Découper", "Intersecter", "Agréger (Union)", "Effacer"], bonne: 2, explication: "Agréger (Union) conserve tout, avec les attributs des deux couches." },
        { question: "Quel outil compte les forages dans chaque commune ?", choix: ["Récapituler à l'intérieur", "Proximité", "Fusionner", "Combiner"], bonne: 0, explication: "Summarize Within agrège des entités par polygone." },
        { question: "Les fonctions raster de l'onglet Imagerie :", choix: ["Créent toujours un fichier", "Calculent à la volée sans écrire de fichier", "Ne fonctionnent qu'en 3D", "Remplacent la symbologie"], bonne: 1, explication: "Elles sont calculées à l'affichage ; on exporte le résultat seulement si besoin." }
      ]
    },

    /* ============================================================ */
    {
      id: "p5",
      numero: 5,
      titre: "ModelBuilder : modélisation spatiale et automatisation",
      echelle: "1:25 000",
      resume: "Programme en cinq étapes inspiré de la formation « ModelBuilder dans ArcGIS Pro » de Fathy Geo Code : modélisation spatiale, outils et variables, itérateurs, paramètres et environnements, applications pratiques.",
      lecons: [
        {
          id: "p5-l1",
          titre: "Introduction à la modélisation spatiale et à ModelBuilder",
          duree: "25 min",
          objectifs: [
            "Comprendre ce qu'est un modèle spatial et pourquoi automatiser",
            "Ouvrir ModelBuilder et lire un modèle"
          ],
          contenu: `
<p>Un <b>modèle spatial</b> est une suite d'opérations qui transforme des données d'entrée en résultat : par exemple « MNT → pente → zones de pente forte ». Le décrire sous forme de modèle permet de le <b>documenter</b>, de le <b>refaire</b> à l'identique sur d'autres données et de le <b>partager</b> comme un outil.</p>
<p><b>ModelBuilder</b> est l'éditeur graphique de modèles d'ArcGIS Pro : onglet <b>Analyse &gt; ModelBuilder</b>. Le modèle est enregistré dans une boîte d'outils du projet (<code>TP_ENIV.atbx</code>).</p>
<table class="tab">
  <tr><th>Élément</th><th>Forme et couleur</th><th>Rôle</th></tr>
  <tr><td>Donnée d'entrée</td><td>ovale bleu</td><td>couche ou fichier existant</td></tr>
  <tr><td>Outil</td><td>rectangle jaune (gris s'il manque un paramètre)</td><td>un outil de géotraitement</td></tr>
  <tr><td>Donnée dérivée</td><td>ovale vert</td><td>résultat d'un outil, réutilisable par le suivant</td></tr>
  <tr><td>Variable</td><td>ovale bleu clair</td><td>valeur (distance, seuil, champ…)</td></tr>
  <tr><td>Itérateur, logique</td><td>hexagone orange</td><td>boucles et conditions</td></tr>
</table>
<p>Les boutons du ruban ModelBuilder : <i>Valider</i> (vérifie tout le modèle), <i>Exécuter</i>, <i>Disposition automatique</i>, <i>Ajuster à la fenêtre</i>, <i>Intermédiaire</i> (les données marquées « intermédiaires » sont supprimées après exécution).</p>`,
          exercice: `<ol>
  <li>Créez un nouveau modèle et renommez-le « Pente_forte » (clic droit &gt; Propriétés dans le Catalogue).</li>
  <li>Glissez l'outil <b>Pente</b> depuis le volet Géotraitement et observez sa couleur avant et après avoir relié le MNT.</li>
  <li>Écrivez sur papier les étapes d'un modèle qui trouverait les écoles situées à moins de 300 m d'un oued.</li>
</ol>`
        },
        {
          id: "p5-l2",
          titre: "Construire un modèle avec des outils et des variables",
          duree: "35 min",
          objectifs: [
            "Enchaîner plusieurs outils",
            "Créer des variables et les relier aux outils",
            "Utiliser la substitution de variables en ligne"
          ],
          contenu: `
<h3>Enchaîner les outils</h3>
<p>Ajoutez <code>Forages</code> au modèle, puis l'outil <b>Zone tampon</b> ; reliez-les avec l'outil <i>Connecter</i>. Ajoutez <b>Effacer</b> (zones urbaines de <code>Occupation_sol</code>) puis <b>Récapituler à l'intérieur</b> (par <code>Communes</code>). La sortie verte de chaque outil devient l'entrée du suivant.</p>
<h3>Variables</h3>
<ul>
  <li>Clic droit sur un outil &gt; <b>Créer une variable &gt; À partir du paramètre &gt; Distance</b> : la distance devient un ovale qu'on peut modifier sans ouvrir l'outil.</li>
  <li>Une variable peut alimenter plusieurs outils (la même distance pour deux zones tampons).</li>
  <li><b>Substitution en ligne</b> : écrivez le nom d'une variable entre <code>%</code> dans un chemin. Exemple de sortie : <code>%scratchGDB%\\Tampon_%Distance%</code>. Les variables système utiles : <code>%scratchGDB%</code>, <code>%scratchFolder%</code>, <code>%n%</code> (numéro d'itération).</li>
</ul>
<div class="astuce"><b>Bonnes pratiques :</b> renommez chaque élément (clic droit &gt; Renommer) avec un nom parlant, et marquez les sorties intermédiaires comme <i>Intermédiaire</i> pour ne garder que le résultat final.</div>`,
          exercice: `<ol>
  <li>Construisez le modèle Forages → Zone tampon → Effacer (urbain) → Récapituler à l'intérieur (communes).</li>
  <li>Créez une variable <code>Distance</code> et utilisez-la dans le nom de la sortie.</li>
  <li>Exécutez avec 200 m puis 500 m et comparez le nombre de forages protégés par commune.</li>
</ol>`
        },
        {
          id: "p5-l3",
          titre: "Les itérateurs : répéter un traitement",
          duree: "35 min",
          objectifs: [
            "Choisir l'itérateur adapté",
            "Produire une sortie par entité, par valeur ou par fichier",
            "Rassembler les résultats d'une boucle"
          ],
          contenu: `
<p>Onglet ModelBuilder &gt; <b>Itérateurs</b>. L'itérateur tourne autant de fois qu'il y a d'éléments, et fournit à chaque tour une valeur (souvent nommée <code>Value</code> ou <code>Name</code>).</p>
<table class="tab">
  <tr><th>Itérateur</th><th>Exemple avec les données du TP</th></tr>
  <tr><td>Itérer les valeurs de champ</td><td>une sortie par commune (<code>Communes.NOM</code>)</td></tr>
  <tr><td>Itérer les entités / Itérer les sélections de lignes</td><td>traiter chaque bassin ou chaque école séparément</td></tr>
  <tr><td>Itérer les classes d'entités</td><td>découper tous les shapefiles d'un dossier par la zone d'étude</td></tr>
  <tr><td>Itérer les rasters</td><td>calculer la pente de plusieurs MNT</td></tr>
  <tr><td>Pour (For) / Tant que (While)</td><td>tester plusieurs seuils : 200, 400, 600… cellules</td></tr>
</table>
<p>Exemple : <b>Itérer les valeurs de champ</b> (<code>Communes</code>, champ <code>NOM</code>) → <b>Sélectionner la couche par attributs</b> → <b>Découper</b> (<code>Forages</code>) → sortie <code>%scratchGDB%\\Forages_%Value%</code>.</p>
<p><b>Collecter les valeurs</b> (<i>Collect Values</i>) récupère toutes les sorties de la boucle ; reliez-la ensuite à <b>Combiner</b> (<i>Merge</i>) pour obtenir une seule couche. Un modèle ne contient qu'un seul itérateur : pour imbriquer deux boucles, placez un <b>sous-modèle</b> dans le modèle principal.</p>`,
          exercice: `<ol>
  <li>Créez un modèle qui découpe les forages pour chaque commune.</li>
  <li>Ajoutez Collecter les valeurs puis Combiner pour regrouper le résultat.</li>
  <li>Avec un itérateur <b>Pour</b> (de 200 à 1000, pas de 200), extrayez cinq réseaux hydrographiques de seuils différents.</li>
</ol>`
        },
        {
          id: "p5-l4",
          titre: "Paramètres et environnements",
          duree: "30 min",
          objectifs: [
            "Transformer un modèle en outil avec des paramètres",
            "Régler les environnements au niveau du modèle ou d'un outil",
            "Ajouter des conditions et des messages"
          ],
          contenu: `
<h3>Paramètres du modèle</h3>
<p>Clic droit sur une donnée d'entrée, une variable ou la sortie finale &gt; <b>Paramètre</b> : un « P » apparaît. Dans <i>Propriétés du modèle &gt; Paramètres</i>, réglez l'ordre, le nom affiché, le type, la valeur par défaut et un <b>filtre</b> (par exemple une liste de valeurs ou une plage 100–1000 m). Double-cliquez ensuite sur le modèle dans le Catalogue : il s'ouvre comme n'importe quel outil.</p>
<h3>Environnements</h3>
<ul>
  <li><b>Pour tout le modèle</b> : Propriétés du modèle &gt; Environnements (étendue, système de coordonnées de sortie, taille de cellule, raster de capture, masque).</li>
  <li><b>Pour un seul outil</b> : double-clic sur l'outil &gt; onglet Environnements.</li>
  <li>Pour les rasters, fixez toujours <i>Taille de cellule</i> et <i>Raster de capture</i> sur le MNT : toutes les grilles restent alignées.</li>
</ul>
<h3>Conditions</h3>
<p>Le menu <b>Logique</b> propose <i>Si la donnée existe</i>, <i>Si le nombre de lignes est</i>, <i>Si la valeur est</i>, <i>Arrêter</i>… Exemple : ne lancer le découpage que si la sélection contient au moins une entité. Les <b>préconditions</b> (clic droit &gt; Propriétés &gt; Préconditions) forcent l'ordre d'exécution.</p>`,
          exercice: `<ol>
  <li>Exposez comme paramètres : la couche d'entrée, la distance (filtre 50–1000 m) et la sortie.</li>
  <li>Fixez le système de sortie WGS 1984 UTM 30N et l'étendue de la zone d'étude dans les environnements du modèle.</li>
  <li>Ajoutez une condition <i>Si le nombre de lignes est</i> &gt; 0 avant le découpage.</li>
</ol>`
        },
        {
          id: "p5-l5",
          titre: "Application pratique : MNT → Découper → Reclassification → Calculatrice raster",
          duree: "45 min",
          objectifs: [
            "Construire de bout en bout un modèle raster",
            "Le paramétrer, l'exécuter sur d'autres zones et l'exporter en Python"
          ],
          contenu: `
<p>Objectif : produire la carte des <b>terrains peu favorables à la construction</b> (pente forte ou fond de vallée) d'une commune, avec un modèle réutilisable.</p>
<ol>
  <li><b>Raster d'entrée</b> : <code>MNT_50m</code> (paramètre).</li>
  <li><b>Découper le raster</b> (<i>Clip Raster</i>) par la commune choisie (paramètre : polygone), case <i>Utiliser l'entité en entrée pour le découpage</i> cochée.</li>
  <li><b>Pente</b> (degrés) sur le MNT découpé.</li>
  <li><b>Reclassification</b> de la pente : 0–5° → 1, 5–15° → 2, 15–25° → 3, plus de 25° → 4.</li>
  <li><b>Calculatrice raster</b> : combiner avec l'altitude relative, par exemple <code>Con(("pente_cl" &gt;= 3) | ("mnt_dec" &lt; %Seuil_alt%), 1, 0)</code>, où <code>Seuil_alt</code> est une variable du modèle.</li>
  <li><b>Sortie</b> : <code>%scratchGDB%\\Contraintes_%Commune%</code>, puis <b>Raster vers polygone</b> pour calculer la surface touchée.</li>
</ol>
<p>Variantes avec les données des niveaux 7 et 8 : enchaîner Remplir → Direction de flux → Accumulation → Calculatrice raster (seuil) pour un modèle « réseau hydrographique », ou Distance euclidienne → Reclassification → Somme pondérée pour un modèle de risque.</p>
<p>Terminez par <b>Exporter &gt; Exporter vers un fichier Python</b> : le code produit est la passerelle vers le niveau 6 (ArcPy).</p>`,
          exercice: `<ol>
  <li>Construisez le modèle complet avec trois paramètres : MNT, commune, seuil d'altitude.</li>
  <li>Ajoutez un itérateur <b>Itérer les valeurs de champ</b> pour produire la carte de toutes les communes en une exécution.</li>
  <li>Exportez le modèle en Python et comparez le script obtenu avec <code>07_zones_inondables.py</code>.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Dans ModelBuilder, un ovale vert représente :", choix: ["Une donnée d'entrée", "Un outil", "Une donnée dérivée (sortie d'un outil)", "Un itérateur"], bonne: 2, explication: "Bleu = entrée, jaune = outil, vert = donnée produite." },
        { question: "Comment utiliser la valeur d'une variable Distance dans le nom d'une sortie ?", choix: ["#Distance#", "%Distance%", "{Distance}", "$Distance"], bonne: 1, explication: "La substitution en ligne utilise des signes pourcentage." },
        { question: "Quel outil rassemble les sorties d'un itérateur ?", choix: ["Collecter les valeurs", "Combiner", "Fusionner", "Récapituler"], bonne: 0, explication: "Collect Values regroupe les sorties ; on peut ensuite les combiner." },
        { question: "Comment faire apparaître une entrée dans la boîte de dialogue de l'outil-modèle ?", choix: ["La renommer", "La marquer comme Paramètre (P)", "La rendre intermédiaire", "La colorer en vert"], bonne: 1, explication: "Seuls les éléments marqués P apparaissent dans la boîte de dialogue." },
        { question: "Pour que tous les rasters d'un modèle restent alignés, on règle dans les environnements :", choix: ["La taille de cellule et le raster de capture", "La couleur des éléments", "L'historique", "Le dossier de sortie seulement"], bonne: 0, explication: "Cell size et Snap raster garantissent des grilles superposables." },
        { question: "Combien d'itérateurs un modèle peut-il contenir ?", choix: ["Un seul (sinon un sous-modèle)", "Deux", "Illimité", "Aucun"], bonne: 0, explication: "Pour imbriquer des boucles, on place un sous-modèle dans le modèle principal." }
      ]
    },

    /* ============================================================ */
    {
      id: "p6",
      numero: 6,
      titre: "ArcPy en Python 3 et notebooks",
      echelle: "1:5 000",
      resume: "Fenêtre Python, notebooks, scripts autonomes, curseurs, arcpy.mp et outils script.",
      lecons: [
        {
          id: "p6-l1",
          titre: "Fenêtre Python et notebooks",
          duree: "25 min",
          objectifs: [
            "Exécuter des outils en Python dans ArcGIS Pro",
            "Utiliser un notebook Jupyter intégré au projet"
          ],
          contenu: `
<p>Onglet <b>Analyse &gt; Python</b> propose la <b>fenêtre Python</b> et les <b>notebooks</b> (Jupyter intégré, fichier <code>.ipynb</code> rangé dans le projet). <code>arcpy</code> est déjà importé et les couches de la carte active s'utilisent par leur nom.</p>
<pre><code>arcpy.analysis.Buffer("Forages", "Forages_200m", "200 Meters", dissolve_option="ALL")
print(arcpy.management.GetCount("Forages"))</code></pre>
<p>ArcGIS Pro écrit les outils sous la forme <code>arcpy.boite.Outil</code> (ex. <code>arcpy.analysis.Clip</code>, <code>arcpy.management.Project</code>). L'ancienne forme <code>Clip_analysis</code> marche encore.</p>
<p>Différences avec Python 2.7 d'ArcMap : <code>print()</code> avec parenthèses, chaînes Unicode par défaut (les accents ne posent plus problème), division <code>/</code> toujours décimale.</p>`,
          exercice: `<ol>
  <li>Dans un notebook, lancez une zone tampon et affichez le nombre d'entités.</li>
  <li>Faites clic droit sur un outil de l'historique &gt; <i>Copier la commande Python</i> et collez-la dans le notebook.</li>
</ol>`
        },
        {
          id: "p6-l2",
          titre: "Scripts, boucles et curseurs",
          duree: "35 min",
          objectifs: [
            "Écrire un script autonome exécuté avec l'environnement arcgispro-py3",
            "Lire et modifier des attributs avec arcpy.da"
          ],
          contenu: `
<p>Un script autonome s'exécute avec <code>propy.bat</code> (fourni avec ArcGIS Pro) ou depuis un éditeur configuré sur l'environnement <code>arcgispro-py3</code>.</p>
<pre><code>import arcpy
arcpy.env.workspace = r"C:\\ENIV\\TP\\Shapefiles"
arcpy.env.overwriteOutput = True

for fc in arcpy.ListFeatureClasses():
    n = int(arcpy.management.GetCount(fc)[0])
    print(f"{fc} : {n} entités")

# Classer les forages selon leur débit
with arcpy.da.UpdateCursor("Forages.shp", ["DEBIT_LS", "ETAT"]) as cur:
    for debit, etat in cur:
        if debit is not None and debit &lt; 2 and etat == "Exploité":
            cur.updateRow([debit, "Faible débit"])</code></pre>
<p>Les <b>f-strings</b> (<code>f"{fc} : {n}"</code>) sont propres à Python 3. Les scripts 01 à 03 du parcours ArcMap fonctionnent aussi dans ArcGIS Pro, à condition d'ajouter des parenthèses aux <code>print</code> si besoin.</p>`,
          exercice: `<ol>
  <li>Listez toutes les couches du dossier Shapefiles avec leur nombre d'entités.</li>
  <li>Avec un SearchCursor, calculez le débit moyen des forages exploités.</li>
  <li>Lancez le script avec <code>propy.bat</code> depuis l'invite de commandes.</li>
</ol>`
        },
        {
          id: "p6-l3",
          titre: "Automatiser les mises en page avec arcpy.mp et créer un outil script",
          duree: "35 min",
          objectifs: [
            "Manipuler un projet, ses cartes et mises en page en Python",
            "Transformer un script en outil de boîte à outils"
          ],
          contenu: `
<p><code>arcpy.mp</code> remplace <code>arcpy.mapping</code> d'ArcMap.</p>
<pre><code>import arcpy
aprx = arcpy.mp.ArcGISProject("CURRENT")          # ou le chemin du .aprx
carte = aprx.listMaps("Carte")[0]
lyt = aprx.listLayouts()[0]
communes = carte.listLayers("Communes")[0]
cadre = lyt.listElements("MAPFRAME_ELEMENT")[0]
titre = lyt.listElements("TEXT_ELEMENT", "Titre")[0]

with arcpy.da.SearchCursor(communes, ["NOM", "SHAPE@"]) as cur:
    for nom, geom in cur:
        cadre.camera.setExtent(geom.extent)
        titre.text = f"Commune de {nom}"
        lyt.exportToPDF(rf"C:\\ENIV\\TP\\Sorties\\{nom}.pdf")</code></pre>
<h3>Outil script</h3>
<p>Dans le Catalogue, clic droit sur la boîte d'outils &gt; <i>Nouveau &gt; Script</i>. Indiquez le fichier .py et définissez les paramètres (type, direction, valeur par défaut). Dans le script, lisez-les avec <code>arcpy.GetParameterAsText(0)</code> et affichez des messages avec <code>arcpy.AddMessage()</code>.</p>`,
          exercice: `<ol>
  <li>Créez une mise en page avec un texte nommé « Titre », puis exportez une carte PDF par commune avec le script ci-dessus.</li>
  <li>Transformez le script <code>05_outil_zone_protection.py</code> en outil script avec deux paramètres.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Quel module remplace arcpy.mapping dans ArcGIS Pro ?", choix: ["arcpy.da", "arcpy.mp", "arcpy.sa", "arcpy.na"], bonne: 1, explication: "arcpy.mp gère projets, cartes, couches et mises en page." },
        { question: "Comment référencer le projet ouvert dans un notebook ?", choix: ["arcpy.mp.ArcGISProject(\"CURRENT\")", "arcpy.mapping.MapDocument()", "arcpy.env.workspace", "arcpy.GetProject()"], bonne: 0, explication: "\"CURRENT\" désigne le projet ouvert dans l'application." },
        { question: "Quelle syntaxe est propre à Python 3 ?", choix: ["print \"texte\"", "f\"{nom}\"", "u\"texte\"", "xrange()"], bonne: 1, explication: "Les f-strings n'existent pas en Python 2.7." },
        { question: "Quel programme lance un script ArcPy hors de l'application ?", choix: ["python27.exe", "propy.bat", "arcmap.exe", "qgis.bat"], bonne: 1, explication: "propy.bat active l'environnement Python d'ArcGIS Pro." }
      ]
    },

    /* ============================================================ */
    {
      id: "p7",
      numero: 7,
      titre: "MNT, hydrologie et inondations",
      echelle: "1:2 500",
      resume: "Boîte Hydrologie de Spatial Analyst dans ArcGIS Pro : remplissage, écoulement, réseau, bassin versant, zones inondables.",
      lecons: [
        {
          id: "p7-l1",
          titre: "Du MNT au réseau hydrographique",
          duree: "40 min",
          objectifs: [
            "Préparer le MNT et corriger les cuvettes",
            "Calculer directions et accumulation de flux",
            "Extraire et hiérarchiser le réseau"
          ],
          contenu: `
<p>La méthode est la même que dans ArcMap (voir le niveau 7 du parcours ArcMap pour la théorie). Les outils sont dans <b>Spatial Analyst &gt; Hydrologie</b>.</p>
<ol>
  <li><b>Remplir</b> (<i>Fill</i>) le MNT → <code>fill.tif</code>.</li>
  <li><b>Direction de flux</b> (<i>Flow Direction</i>) : choisissez le type <b>D8</b> (ArcGIS Pro propose aussi MFD et DINF).</li>
  <li><b>Accumulation de flux</b> (<i>Flow Accumulation</i>).</li>
  <li><b>Calculatrice raster</b> : <code>Con("facc.tif" &gt; 400, 1)</code> (1 km² avec des cellules de 50 m).</li>
  <li><b>Ordre des cours d'eau</b> (<i>Stream Order</i>, Strahler) puis <b>Cours d'eau vers entités</b> (<i>Stream to Feature</i>).</li>
</ol>
<div class="astuce"><b>Plus rapide :</b> ArcGIS Pro 3.x propose aussi l'outil <b>Dériver un réseau hydrographique continu</b> (<i>Derive Continuous Flow</i> puis <i>Derive Stream As Line</i>), qui enchaîne plusieurs étapes. Faites d'abord la méthode pas à pas pour comprendre.</div>
<p>Le script <code>06_hydrologie.py</code> fonctionne tel quel dans ArcGIS Pro (Python 3) : ouvrez-le dans un notebook ou lancez-le avec <code>propy.bat</code>.</p>`,
          exercice: `<ol>
  <li>Enchaînez Remplir, Direction de flux (D8) et Accumulation de flux.</li>
  <li>Extrayez le réseau avec un seuil de 400 cellules et calculez l'ordre de Strahler.</li>
  <li>Construisez ces étapes dans un modèle ModelBuilder avec le seuil en paramètre.</li>
</ol>`
        },
        {
          id: "p7-l2",
          titre: "Bassin versant et zones inondables",
          duree: "45 min",
          objectifs: [
            "Délimiter le bassin versant de l'oued Tamda",
            "Cartographier la susceptibilité à l'inondation et les enjeux exposés"
          ],
          contenu: `
<h3>Bassin versant</h3>
<p><b>Ajuster les points d'écoulement</b> (<i>Snap Pour Point</i>, 150 m) sur <code>Risques\\Exutoire.shp</code>, puis <b>Bassin versant</b> (<i>Watershed</i>) et <b>Raster vers polygone</b>. Calculez la surface avec <i>Calculer la géométrie</i> (km²) et l'indice de Gravelius <code>Kc = 0,28 · P / √A</code> dans la calculatrice de champs.</p>
<h3>Zones inondables</h3>
<p>Même démarche que dans ArcMap : hauteur au-dessus de l'oued (HAND) avec <b>Allocation euclidienne</b>, distance à l'oued, pente, accumulation et occupation du sol, chacun noté de 1 à 5, puis <b>Somme pondérée</b> (35, 25, 20, 10, 10 %). Dans ArcGIS Pro, l'onglet <b>Analyse &gt; Suitability Modeler</b> (modélisateur d'aptitude) permet aussi de régler les critères et les poids de façon interactive, avec un aperçu immédiat.</p>
<p>Validez avec <code>Laisses_crues.shp</code> (<b>Extraire les valeurs vers des points</b>) et listez les écoles en classe forte. Le script <code>07_zones_inondables.py</code> fait tout ce travail.</p>`,
          exercice: `<ol>
  <li>Délimitez le bassin versant et calculez sa surface et son indice de Gravelius.</li>
  <li>Construisez la carte de susceptibilité à l'inondation et validez-la avec les laisses de crue.</li>
  <li>Refaites la pondération dans le Suitability Modeler et comparez les deux cartes.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Dans ArcGIS Pro, quel type de direction de flux correspond au modèle classique d'ArcMap ?", choix: ["MFD", "DINF", "D8", "HAND"], bonne: 2, explication: "D8 envoie toute l'eau vers une seule cellule voisine." },
        { question: "Où se trouvent Remplir, Direction de flux et Bassin versant ?", choix: ["Spatial Analyst > Hydrologie", "Analysis > Proximité", "Data Management > Raster", "3D Analyst > Visibilité"], bonne: 0, explication: "Ce sont les outils de la boîte Hydrologie de Spatial Analyst." },
        { question: "Les scripts 06 et 07 du parcours ArcMap dans ArcGIS Pro :", choix: ["Ne fonctionnent pas", "Fonctionnent tels quels", "Demandent arcpy.mapping", "Demandent QGIS"], bonne: 1, explication: "Ils utilisent print() et arcpy.sa, compatibles Python 3." },
        { question: "Quel outil d'ArcGIS Pro permet de régler les poids d'une analyse multicritère de façon interactive ?", choix: ["Suitability Modeler", "Série de cartes", "Géoréférencer", "Notebook"], bonne: 0, explication: "Le Suitability Modeler affiche le résultat à chaque changement de poids." }
      ]
    },

    /* ============================================================ */
    {
      id: "p8",
      numero: 8,
      titre: "Vulnérabilité aux risques naturels majeurs",
      echelle: "1:1 000",
      resume: "Feux de forêt, séisme, tsunami, glissements de terrain et synthèse multirisque avec ArcGIS Pro.",
      lecons: [
        {
          id: "p8-l1",
          titre: "Multicritère dans ArcGIS Pro : Superposition pondérée et Suitability Modeler",
          duree: "35 min",
          objectifs: [
            "Préparer et noter les critères d'un aléa",
            "Combiner les critères et justifier les poids"
          ],
          contenu: `
<p>Rappel : <b>risque = aléa × vulnérabilité des enjeux</b> (voir le niveau 8 ArcMap, leçon 1, et la loi 04-20). Les étapes sont identiques dans ArcGIS Pro :</p>
<ol>
  <li>Préparer chaque critère : <b>Distance euclidienne</b>, <b>Pente</b>, <b>Exposition</b>, <b>Polygone vers raster</b>, <b>Densité de noyau</b>…</li>
  <li>Noter de 1 à 5 avec <b>Reclassification</b> ou <b>Rééchelonner par fonction</b> (<i>Rescale by Function</i>), qui transforme une valeur continue en note sans créer de paliers.</li>
  <li>Combiner avec <b>Superposition pondérée</b> (% d'influence = 100), <b>Somme pondérée</b>, ou le <b>Suitability Modeler</b>.</li>
  <li>Découper l'indice en 5 classes et valider avec les événements observés.</li>
</ol>
<p>Les poids proposés sont dans <code>Tables\\poids_multicritere.xlsx</code>. La table s'ouvre directement dans ArcGIS Pro (Ajouter des données &gt; feuille Excel).</p>`,
          exercice: `<ol>
  <li>Ouvrez la feuille « Feux de forêt » de la table des poids dans ArcGIS Pro.</li>
  <li>Comparez Reclassification et Rééchelonner par fonction sur le critère « distance aux routes ».</li>
</ol>`
        },
        {
          id: "p8-l2",
          titre: "Cartes d'aléa : feux, séisme, tsunami, glissements",
          duree: "60 min",
          objectifs: [
            "Produire les quatre cartes d'aléa avec les données du TP",
            "Valider chaque carte avec les événements observés"
          ],
          contenu: `
<table class="tab">
  <tr><th>Aléa</th><th>Critères (poids)</th><th>Validation</th><th>Script</th></tr>
  <tr><td>Feux de forêt</td><td>occupation du sol 35, pente 20, exposition 15, routes 15, lieux habités 15</td><td>Foyers_incendies</td><td>08_risque_feux.py</td></tr>
  <tr><td>Séisme</td><td>failles actives 40, densité d'épicentres 25, effet de site (AMPLIF) 25, pente 10</td><td>—</td><td>09_risque_sismique.py</td></tr>
  <tr><td>Tsunami</td><td>altitude 50, distance à la côte 35, pente 15 + scénario de vague de 5 m</td><td>Enjeux_cote</td><td>10_tsunami.py</td></tr>
  <tr><td>Glissements</td><td>lithologie (SUSC_GLIS) 35, pente 30, oueds 15, occupation 10, routes 10</td><td>Glissements</td><td>11_glissements.py</td></tr>
</table>
<p>Les scripts 08 à 11 et <code>outils_risques.py</code> s'exécutent dans ArcGIS Pro sans modification. Pour les comprendre, refaites d'abord au moins une carte à la main avec le volet Géotraitement.</p>
<div class="astuce"><b>Dans ArcGIS Pro :</b> pour le tsunami, affichez <code>submersion_5m.tif</code> dans une <b>scène locale</b> au-dessus du MNT côtier : la zone submergée est bien plus parlante en 3D.</div>`,
          exercice: `<ol>
  <li>Réalisez la carte de risque de feux à la main, puis comparez avec le résultat du script 08.</li>
  <li>Exécutez les scripts 09, 10 et 11 dans un notebook.</li>
  <li>Affichez le scénario de vague de 5 m en 3D et listez les enjeux touchés.</li>
</ol>`
        },
        {
          id: "p8-l3",
          titre: "Synthèse multirisque et tableau de bord",
          duree: "40 min",
          objectifs: [
            "Combiner les aléas en une synthèse",
            "Présenter les résultats par commune"
          ],
          contenu: `
<p><b>Statistiques de cellules</b> (MAXIMUM) donne l'aléa le plus fort de chaque cellule ; la somme des <code>Con(classe &gt;= 4, 1, 0)</code> donne le nombre d'aléas forts. <b>Statistiques zonales (table)</b> par commune, puis jointure avec <code>Communes</code> (script <code>12_synthese_multirisque.py</code>).</p>
<p>Présentation dans ArcGIS Pro :</p>
<ul>
  <li><b>Diagrammes</b> : clic droit sur la couche &gt; <i>Créer un diagramme &gt; Diagramme à barres</i> du nombre moyen d'aléas forts par commune.</li>
  <li><b>Mise en page A3</b> avec la carte multirisque, la carte par commune et le diagramme.</li>
  <li>Mention obligatoire : <i>données fictives à usage pédagogique</i>.</li>
</ul>`,
          exercice: `<ol>
  <li>Produisez les cartes d'aléa maximal et de cumul.</li>
  <li>Créez un diagramme à barres par commune et insérez-le dans une mise en page A3.</li>
</ol>`
        }
      ],
      quiz: [
        { question: "Quel outil transforme une valeur continue en note sans créer de paliers ?", choix: ["Reclassification", "Rééchelonner par fonction", "Statistiques zonales", "Découper"], bonne: 1, explication: "Rescale by Function applique une fonction continue (linéaire, logistique…)." },
        { question: "Dans la Superposition pondérée, la somme des % d'influence vaut :", choix: ["1", "10", "100", "Libre"], bonne: 2, explication: "Les pourcentages d'influence doivent totaliser 100." },
        { question: "Quel outil donne la classe la plus forte parmi plusieurs cartes d'aléa ?", choix: ["Statistiques de cellules (MAXIMUM)", "Mosaïque", "Combiner", "Fusionner"], bonne: 0, explication: "Cell Statistics calcule cellule par cellule sur plusieurs rasters." },
        { question: "Pour mieux montrer une zone submergée, ArcGIS Pro permet :", choix: ["Une scène 3D locale", "Un fichier .mxd", "ArcScene", "Un géoréférencement"], bonne: 0, explication: "Les scènes 3D sont intégrées au projet." }
      ]
    }
  ]
};
