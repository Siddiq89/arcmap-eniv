/*
 * FICHIERS D'EXEMPLE À TÉLÉCHARGER
 * ------------------------------------------------------------------
 * Pour ajouter un fichier :
 *   1. copiez-le dans le dossier fichiers/ du site ;
 *   2. ajoutez un bloc { ... } ci-dessous (virgule entre les blocs).
 *
 * Champs :
 *   niveau      : "n1" à "n6", ou "" pour un fichier général
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
    "taille": "325 Ko",
    "description": "Shapefiles, tables, MNT et scripts. À décompresser dans C:\\ENIV\\ pour obtenir C:\\ENIV\\TP."
  },
  {
    "niveau": "n1",
    "lecon": "n1-l1",
    "fichier": "fichiers/TP_ENIV_complet.zip",
    "titre": "Toutes les données de TP",
    "taille": "325 Ko",
    "description": "Décompressez dans C:\\ENIV\\ puis créez la connexion au dossier C:\\ENIV\\TP."
  },
  {
    "niveau": "n1",
    "lecon": "n1-l2",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "12 Ko",
    "description": "Communes, routes, oueds, forages, écoles, occupation du sol, zone d'étude."
  },
  {
    "niveau": "n2",
    "lecon": "n2-l1",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "12 Ko",
    "description": "À importer dans votre géodatabase TP.gdb."
  },
  {
    "niveau": "n2",
    "lecon": "n2-l2",
    "fichier": "fichiers/donnees_projections.zip",
    "titre": "Données pour les projections",
    "taille": "3 Ko",
    "description": "Communes_WGS84 (en degrés) à projeter en UTM, et Forages_sans_projection (sans fichier .prj) pour « Définir une projection »."
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
    "taille": "0 Ko",
    "description": "Même table au format texte, séparateur point-virgule."
  },
  {
    "niveau": "n2",
    "lecon": "n2-l4",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "12 Ko",
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
    "taille": "12 Ko",
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
    "taille": "12 Ko",
    "description": "Pour composer la carte A4 de la zone d'étude."
  },
  {
    "niveau": "n4",
    "lecon": "n4-l1",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "12 Ko",
    "description": "Données utilisées dans tout le niveau 4."
  },
  {
    "niveau": "n4",
    "lecon": "n4-l2",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "12 Ko",
    "description": "Forages (tampon de 200 m), communes (jointure spatiale)."
  },
  {
    "niveau": "n4",
    "lecon": "n4-l3",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "12 Ko",
    "description": "Routes, zone d'étude, occupation du sol, communes (Fusionner par WILAYA)."
  },
  {
    "niveau": "n4",
    "lecon": "n4-l4",
    "fichier": "fichiers/MNT_50m.zip",
    "titre": "Modèle numérique de terrain",
    "taille": "300 Ko",
    "description": "MNT_50m.asc, cellules de 50 m, altitudes de 275 à 1 192 m. Ajoutez-le directement ou convertissez-le avec ASCII vers raster."
  },
  {
    "niveau": "n5",
    "lecon": "n5-l1",
    "fichier": "fichiers/donnees_base_shapefiles.zip",
    "titre": "Couches de base (shapefiles)",
    "taille": "12 Ko",
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
    "taille": "4 Ko",
    "description": "Les 5 scripts du niveau 6 (Python 2.7)."
  }
];
