/*
 * FICHIERS D'EXEMPLE À TÉLÉCHARGER
 * ------------------------------------------------------------------
 * Pour ajouter un fichier :
 *   1. copiez-le dans le dossier fichiers/ du site ;
 *   2. ajoutez un bloc { ... } ci-dessous (virgule entre les blocs).
 *
 * Champs :
 *   niveau      : "n1" à "n8", ou "" pour un fichier général
 *   lecon       : identifiant de la leçon (ex. "n4-l2"), ou "" pour tout le niveau
 *   fichier     : chemin depuis le dossier du site, ex. "fichiers/mes_donnees.zip"
 *   titre, taille, description : texte affiché
 *
 * Les shapefiles doivent être zippés (un shapefile = plusieurs fichiers .shp, .shx, .dbf, .prj...).
 */
window.FICHIERS = [
  {
    "niveau": "",
    "lecon": "",
    "fichier": "fichiers/TP_ENIV_complet.zip",
    "titre": "Toutes les données de TP",
    "taille": "552 Ko",
    "description": "Shapefiles, tables, MNT et scripts. À décompresser dans C:\\ENIV\\ pour obtenir C:\\ENIV\\TP."
  },
  {
    "niveau": "n1",
    "lecon": "n1-l1",
    "fichier": "fichiers/TP_ENIV_complet.zip",
    "titre": "Toutes les données de TP",
    "taille": "552 Ko",
    "description": "Décompressez dans C:\\ENIV\\ puis créez la connexion au dossier C:\\ENIV\\TP."
  },
  {
    "niveau": "n1",
    "lecon": "n1-l2",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "13 Ko",
    "description": "Communes, routes, oueds, forages, écoles, occupation du sol, zone d'étude."
  },
  {
    "niveau": "n2",
    "lecon": "n2-l1",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "13 Ko",
    "description": "À importer dans votre géodatabase TP.gdb."
  },
  {
    "niveau": "n2",
    "lecon": "n2-l2",
    "fichier": "fichiers/donnees_projections.zip",
    "titre": "Données pour les projections",
    "taille": "5 Ko",
    "description": "Communes_WGS84 (degrés) et Communes_NordSahara1959 (système des cartes INCT) à projeter en WGS 1984 UTM 30N, et Forages_sans_projection (sans fichier .prj) pour « Définir une projection »."
  },
  {
    "niveau": "n2",
    "lecon": "n2-l3",
    "fichier": "fichiers/population_communes.xlsx",
    "titre": "Population par commune (Excel)",
    "taille": "5 Ko",
    "description": "Champs CODE, POP_2008, POP_2020, MENAGES. Jointure avec Communes par le champ CODE."
  },
  {
    "niveau": "n2",
    "lecon": "n2-l3",
    "fichier": "fichiers/population_communes.csv",
    "titre": "Population par commune (CSV)",
    "taille": "1 Ko",
    "description": "Même table au format texte, séparateur point-virgule."
  },
  {
    "niveau": "n2",
    "lecon": "n2-l4",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "13 Ko",
    "description": "Forages, oueds et communes pour les sélections ; Forages pour la numérisation."
  },
  {
    "niveau": "n2",
    "lecon": "n2-l4",
    "fichier": "fichiers/releves_gps.csv",
    "titre": "Relevés GPS",
    "taille": "1 Ko",
    "description": "20 points avec X, Y (UTM) et LON, LAT. Fichier > Ajouter des données > Ajouter des données XY."
  },
  {
    "niveau": "n3",
    "lecon": "n3-l1",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "13 Ko",
    "description": "Occupation du sol (valeurs uniques) et communes (quantités)."
  },
  {
    "niveau": "n3",
    "lecon": "n3-l1",
    "fichier": "fichiers/population_communes.xlsx",
    "titre": "Population par commune (Excel)",
    "taille": "5 Ko",
    "description": "Pour calculer et représenter la densité."
  },
  {
    "niveau": "n3",
    "lecon": "n3-l3",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "13 Ko",
    "description": "Pour composer la carte A4 de la zone d'étude."
  },
  {
    "niveau": "n4",
    "lecon": "n4-l1",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "13 Ko",
    "description": "Données utilisées dans tout le niveau 4."
  },
  {
    "niveau": "n4",
    "lecon": "n4-l2",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "13 Ko",
    "description": "Forages (tampon de 200 m), communes (jointure spatiale)."
  },
  {
    "niveau": "n4",
    "lecon": "n4-l3",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "13 Ko",
    "description": "Routes, zone d'étude, occupation du sol, communes (Fusionner par WILAYA)."
  },
  {
    "niveau": "n4",
    "lecon": "n4-l4",
    "fichier": "fichiers/MNT_50m.zip",
    "titre": "Modèle numérique de terrain",
    "taille": "296 Ko",
    "description": "MNT_50m.asc, cellules de 50 m, altitudes de 275 à 1 192 m. Ajoutez-le directement ou convertissez-le avec ASCII vers raster."
  },
  {
    "niveau": "n5",
    "lecon": "n5-l1",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "13 Ko",
    "description": "Forages et occupation du sol pour le modèle « Zone de protection »."
  },
  {
    "niveau": "n6",
    "lecon": "n6-l1",
    "fichier": "fichiers/01_fenetre_python.py",
    "titre": "Script : fenêtre Python",
    "taille": "1 Ko",
    "description": "Lignes à coller dans la fenêtre Python d'ArcMap."
  },
  {
    "niveau": "n6",
    "lecon": "n6-l2",
    "fichier": "fichiers/02_lister_et_decouper.py",
    "titre": "Script : lister et découper",
    "taille": "1 Ko",
    "description": "Script autonome qui parcourt le dossier Shapefiles."
  },
  {
    "niveau": "n6",
    "lecon": "n6-l3",
    "fichier": "fichiers/03_curseurs.py",
    "titre": "Script : curseurs",
    "taille": "2 Ko",
    "description": "SearchCursor, UpdateCursor et InsertCursor à partir de releves_gps.csv."
  },
  {
    "niveau": "n6",
    "lecon": "n6-l3",
    "fichier": "fichiers/releves_gps.csv",
    "titre": "Relevés GPS",
    "taille": "1 Ko",
    "description": "Fichier lu par le script des curseurs."
  },
  {
    "niveau": "n6",
    "lecon": "n6-l4",
    "fichier": "fichiers/04_cartes_par_commune.py",
    "titre": "Script : une carte PDF par commune",
    "taille": "1 Ko",
    "description": "arcpy.mapping et assemblage d'un atlas PDF."
  },
  {
    "niveau": "n6",
    "lecon": "n6-l5",
    "fichier": "fichiers/05_outil_zone_protection.py",
    "titre": "Script : outil Zone de protection",
    "taille": "1 Ko",
    "description": "À ajouter comme outil script dans votre boîte à outils."
  },
  {
    "niveau": "n6",
    "lecon": "",
    "fichier": "fichiers/scripts_arcpy.zip",
    "titre": "Tous les scripts ArcPy",
    "taille": "12 Ko",
    "description": "Les 12 scripts du parcours (01 à 12) et outils_risques.py."
  },
  {
    "niveau": "n7",
    "lecon": "n7-l1",
    "fichier": "fichiers/MNT_50m.zip",
    "titre": "MNT du bassin de l'oued Tamda (50 m)",
    "taille": "296 Ko",
    "description": "MNT_50m.asc et sa projection (WGS 1984 UTM 30N). À décompresser dans C:\\ENIV\\."
  },
  {
    "niveau": "n7",
    "lecon": "n7-l1",
    "fichier": "fichiers/outils_risques.py",
    "titre": "outils_risques.py (fonctions communes)",
    "taille": "3 Ko",
    "description": "À placer dans le même dossier que les scripts 06 à 12 : préparation de l'environnement, reclassement, somme pondérée, validation."
  },
  {
    "niveau": "n7",
    "lecon": "n7-l2",
    "fichier": "fichiers/06_hydrologie.py",
    "titre": "Script 06 : modèle hydrologique",
    "taille": "2 Ko",
    "description": "Fill, directions, accumulation, réseau de Strahler, bassin versant."
  },
  {
    "niveau": "n7",
    "lecon": "n7-l3",
    "fichier": "fichiers/risques_bassin_tamda.zip",
    "titre": "Données risques du bassin (avec l'exutoire)",
    "taille": "307 Ko",
    "description": "Exutoire, lithologie, failles, épicentres, foyers d'incendie, glissements, laisses de crue + MNT. Dossiers TP\\Risques et TP\\MNT."
  },
  {
    "niveau": "n7",
    "lecon": "n7-l3",
    "fichier": "fichiers/06_hydrologie.py",
    "titre": "Script 06 : modèle hydrologique",
    "taille": "2 Ko",
    "description": "Contient la délimitation du bassin versant et le calcul de sa surface."
  },
  {
    "niveau": "n7",
    "lecon": "n7-l4",
    "fichier": "fichiers/risques_bassin_tamda.zip",
    "titre": "Données risques du bassin (laisses de crue)",
    "taille": "307 Ko",
    "description": "Laisses_crues.shp sert à valider la carte d'inondation."
  },
  {
    "niveau": "n7",
    "lecon": "n7-l4",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Données de base (écoles, occupation du sol)",
    "taille": "13 Ko",
    "description": "Ecoles.shp et Occupation_sol.shp sont utilisés comme enjeux et critère."
  },
  {
    "niveau": "n7",
    "lecon": "n7-l4",
    "fichier": "fichiers/07_zones_inondables.py",
    "titre": "Script 07 : zones inondables",
    "taille": "2 Ko",
    "description": "Hauteur au-dessus de l'oued, multicritère, validation, écoles exposées. Lancer après le script 06."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l1",
    "fichier": "fichiers/poids_multicritere.xlsx",
    "titre": "Table des poids multicritères",
    "taille": "9 Ko",
    "description": "Une feuille par risque : critères, classes, notes et poids (total 100 %)."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l1",
    "fichier": "fichiers/outils_risques.py",
    "titre": "outils_risques.py (fonctions communes)",
    "taille": "3 Ko",
    "description": "Fonctions classer(), somme_ponderee(), cinq_classes(), valider()."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l2",
    "fichier": "fichiers/risques_bassin_tamda.zip",
    "titre": "Données risques du bassin (foyers d'incendie)",
    "taille": "307 Ko",
    "description": "Foyers_incendies.shp : 45 départs de feu fictifs."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l2",
    "fichier": "fichiers/08_risque_feux.py",
    "titre": "Script 08 : risque de feux de forêt",
    "taille": "2 Ko",
    "description": "Occupation du sol, pente, exposition, distance aux routes et aux lieux habités."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l3",
    "fichier": "fichiers/risques_bassin_tamda.zip",
    "titre": "Données risques du bassin (failles, épicentres, lithologie)",
    "taille": "307 Ko",
    "description": "Failles.shp, Epicentres.shp (28 séismes fictifs), Lithologie.shp (champ AMPLIF)."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l3",
    "fichier": "fichiers/09_risque_sismique.py",
    "titre": "Script 09 : vulnérabilité sismique",
    "taille": "2 Ko",
    "description": "Distance aux failles actives, densité de noyau, effet de site, pente."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l4",
    "fichier": "fichiers/risques_cote_tsunami.zip",
    "titre": "Données côtières (tsunami)",
    "taille": "202 Ko",
    "description": "MNT côtier 25 m, trait de côte, route côtière et 12 enjeux. Dossier TP\\Risques_cote."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l4",
    "fichier": "fichiers/10_tsunami.py",
    "titre": "Script 10 : tsunami et submersion",
    "taille": "1 Ko",
    "description": "Vulnérabilité côtière et scénario de vague de 5 m."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l5",
    "fichier": "fichiers/risques_bassin_tamda.zip",
    "titre": "Données risques du bassin (glissements)",
    "taille": "307 Ko",
    "description": "Glissements.shp (32 points) et Lithologie.shp (champ SUSC_GLIS)."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l5",
    "fichier": "fichiers/11_glissements.py",
    "titre": "Script 11 : glissements de terrain",
    "taille": "1 Ko",
    "description": "Lithologie, pente, oueds, occupation du sol, routes. Lancer après le script 06."
  },
  {
    "niveau": "n8",
    "lecon": "n8-l6",
    "fichier": "fichiers/12_synthese_multirisque.py",
    "titre": "Script 12 : synthèse multirisque",
    "taille": "1 Ko",
    "description": "Aléa maximal, cumul des aléas forts, bilan par commune. Lancer après les scripts 07 à 11."
  },
  {
    "niveau": "n8",
    "lecon": "",
    "fichier": "fichiers/poids_multicritere.xlsx",
    "titre": "Table des poids multicritères",
    "taille": "9 Ko",
    "description": "Pour adapter les poids de chaque carte."
  },
  {
    "niveau": "n8",
    "lecon": "",
    "fichier": "fichiers/TP_ENIV_complet.zip",
    "titre": "Toutes les données de TP",
    "taille": "552 Ko",
    "description": "Contient aussi les dossiers Risques, Risques_cote et les scripts 06 à 12."
  }
];
