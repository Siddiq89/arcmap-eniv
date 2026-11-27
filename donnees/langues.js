/*
 * LANGUES DU SITE : français (par défaut), arabe (de droite à gauche) et anglais.
 * - window.LANGUE : langue choisie (mémorisée dans le navigateur).
 * - window.T(cle, a, b…) : texte de l'interface, {0} {1}… remplacés par a, b…
 * - Les traductions des leçons sont dans donnees/traductions/*.js (window.TRAD.en / window.TRAD.ar),
 *   indexées par identifiant (n1, n1-l2, p3, q4-l1…). Ce qui n'est pas traduit reste en français.
 */
(function () {
  "use strict";
  var LANGUES = { fr: "Français", ar: "العربية", en: "English", ber: "Tamaziɣt" };
  var lang = "fr";
  try {
    var q = (location.search.match(/[?&]lang=(fr|ar|en|ber)\b/) || [])[1];
    lang = q || JSON.parse(localStorage.getItem("arcmap-eniv-langue") || '"fr"');
  } catch (e) { lang = "fr"; }
  if (!LANGUES[lang]) lang = "fr";
  window.LANGUE = lang;
  window.LANGUES = LANGUES;
  window.TRAD = window.TRAD || {};

  var UI = {
    fr: {
      "nav.ressources": "Ressources", "res.eyebrow": "Ressources gratuites", "res.titre": "Logiciels, données et glossaire", "res.p": "Une sélection de logiciels libres, de sources de données gratuites et de cours en ligne pour continuer à apprendre, ainsi qu'un glossaire des termes SIG en français, anglais et arabe.", "res.logiciels": "Logiciels libres et gratuits", "res.donnees": "Données gratuites", "res.apprendre": "Apprendre en ligne", "res.glossaire": "Glossaire SIG", "res.glossaire.p": "{0} termes en français, anglais et arabe.", "res.chercher": "Chercher un terme…", "res.aucun": "Aucun terme ne correspond.",
      "nav.livre": "Livre d'or", "obs.titre": "Mes observations", "obs.aide": "Notez vos remarques, difficultés ou questions sur cette leçon. Elles sont enregistrées dans ce navigateur.", "obs.place": "Ex. Je n'ai pas trouvé l'outil Pente dans ArcToolbox…", "obs.enregistre": "Enregistré dans ce navigateur", "obs.envoyer": "Envoyer à l'enseignant",
      "livre.eyebrow": "Livre d'or · observations", "livre.titre": "Livre d'or et observations", "livre.p": "Laissez un mot à l'enseignant : une remarque sur le site, une erreur repérée, une question ou un remerciement. Seul l'enseignant lit les messages.", "livre.nom": "Nom et prénom", "livre.etab": "Établissement ou groupe", "livre.profil": "Vous êtes", "livre.eleve": "Élève", "livre.ens": "Enseignant", "livre.visiteur": "Visiteur", "livre.obs": "Observation", "livre.envoyer": "Envoyer", "livre.merci": "Merci ! Votre observation a été envoyée à l'enseignant.", "livre.erreur": "L'envoi a échoué. Vérifiez votre connexion et réessayez.", "livre.inactif": "L'envoi n'est pas encore activé sur ce site. Votre texte reste enregistré dans ce navigateur.", "livre.vide": "Écrivez d'abord une observation.", "livre.envoi": "Envoi…",
      "nav.parcours": "Parcours", "nav.videos": "Vidéos", "nav.telechargements": "Téléchargements", "nav.admin": "Administration",
      "nav.principale": "Navigation principale", "accueil": "Accueil", "progression.globale": "Progression globale",
      "marque.sous": "ArcMap · ArcGIS Pro · QGIS · Python — Enseignant : BOUHAFSI SIDDIQ",
      "pied.1": "SIG ENIV : formation ArcMap, ArcGIS Pro, QGIS, Python et télédétection pour les élèves de l'ENIV · Enseignant : <b>BOUHAFSI SIDDIQ</b>",
      "pied.2": "Merci aux chaînes YouTube qui partagent leurs vidéos : <a href=\"#remerciements\">Remerciements</a>. La progression est enregistrée dans ce navigateur.",
      "langue": "Langue", "titre.page": "SIG ENIV · ArcMap, ArcGIS Pro, QGIS et Python",
      "vitrine.eyebrow": "SIG ENIV · {0} parcours · {1} leçons · vidéos en français et en arabe",
      "vitrine.h1": "Maîtrisez ArcMap, ArcGIS Pro, QGIS et Python",
      "vitrine.sous": "De la première carte à l'analyse des risques naturels (inondations, feux de forêt, séismes, tsunamis, glissements de terrain), jusqu'à la télédétection et l'apprentissage automatique avec Python.",
      "choisir.logiciel": "Choisir le logiciel",
      "parcours.eyebrow": "Parcours {0} · {1} niveaux · {2} leçons", "enseignant": "Enseignant :",
      "reprendre": "Reprendre : ", "commencer": "Commencer : ", "parcours.termine": "Parcours terminé ✓", "voir.videos": "Voir les vidéos",
      "itineraire": "L'itinéraire", "itineraire.sous": "L'échelle s'affine à chaque niveau, comme vos compétences.",
      "n.lecons": "{0} leçons", "n.videos": "{0} vidéos", "n.video": "{0} vidéo", "quiz.score": "Quiz : {0}/{1}", "quiz.afaire": "Quiz à faire", "ouvrir": "Ouvrir",
      "comment": "Comment travailler", "eleves": "Pour les élèves",
      "eleves.1": "Lisez la leçon, regardez la vidéo, faites l'exercice dans {0}, puis cliquez sur « Marquer comme terminée ». Le quiz valide le niveau.",
      "eleves.2": "La progression reste enregistrée sur ce navigateur.",
      "enseignants": "Pour les enseignants",
      "enseignants.1": "Ajoutez des vidéos YouTube ou des fichiers .mp4 depuis la page <a href=\"#admin\">Administration</a>, sans toucher au code.",
      "enseignants.2": "Le contenu des leçons et des quiz se trouve dans <code>donnees/cours.js</code> (ArcMap), <code>cours_pro.js</code> (ArcGIS Pro) et <code>cours_qgis.js</code> (QGIS) et <code>cours_python.js</code> (Python). Les traductions sont dans <code>donnees/traductions/</code>.",
      "tp": "Données de TP",
      "tp.1": "Téléchargez les <a href=\"#telechargements\">fichiers d'exemple</a> (zone d'étude fictive : communes, routes, oueds, forages, occupation du sol, MNT, tables et scripts) et décompressez-les dans <code>C:\\ENIV\\</code>.",
      "reinit": "Réinitialiser", "effacer": "Effacer ma progression", "confirmer": "Cliquez à nouveau pour confirmer",
      "lecons.niveau": "Leçons du niveau", "niveau": "Niveau {0}", "presentation": "Présentation du niveau", "quiz.niveau": "Quiz du niveau", "autres.niveaux": "Autres niveaux",
      "parcours.x": "Parcours {0}", "niveau.echelle": "Niveau {0} · échelle {1}", "programme": "Au programme", "pct.termine": "{0} % terminé",
      "col.lecon": "Leçon", "col.duree": "Durée", "col.etat": "État", "terminee": "Terminée", "afaire": "À faire",
      "quiz.niveau.n": "Quiz du niveau ({0} questions)", "fichiers.niveau": "Fichiers d'exemple du niveau", "videos.niveau": "Toutes les vidéos du niveau",
      "aucune.video.niveau.admin": "Aucune vidéo pour ce niveau pour l'instant. Un enseignant peut en ajouter depuis la page <a href=\"#admin\">Administration</a>.",
      "retour.parcours": "← Parcours", "commencer.l1": "Commencer la leçon 1 →",
      "lecon.eyebrow": "Niveau {0} · leçon {1} sur {2}", "duree": "Durée : {0}", "objectifs": "Objectifs", "video": "Vidéo", "videos": "Vidéos",
      "pas.video": "Pas encore de vidéo pour cette leçon. <a href=\"{0}\" target=\"_blank\" rel=\"noopener\">Chercher une vidéo sur YouTube ↗</a> puis l'ajouter depuis la page <a href=\"#admin\">Administration</a>.",
      "cours": "Cours", "fichiers.exemple": "Fichiers d'exemple", "exercice.dans": "Exercice pratique dans {0}",
      "precedent": "← Précédent", "suivant": "Suivant →", "lecon.terminee": "Leçon terminée ✓", "marquer": "Marquer comme terminée",
      "copier": "Copier", "copie": "Copié", "non.traduit": "Cette leçon n'est pas encore traduite : elle s'affiche en français.",
      "quiz.eyebrow": "Niveau {0} · validation", "quiz.titre": "Quiz : {0}", "n.questions": "{0} questions", "meilleur": "Meilleur score : {0}/{1}",
      "valider": "Valider mes réponses", "recommencer": "Recommencer", "derniere.lecon": "← Dernière leçon", "niveau.suivant": "Niveau suivant →", "retour.au.parcours": "Retour au parcours",
      "correct": "Correct. ", "attendue": "Réponse attendue : {0}. ", "restantes": "Répondez aux {0} question(s) restante(s) pour obtenir votre score.",
      "valide": "Niveau validé. Vous pouvez passer à la suite.", "presque": "Presque : relisez les explications et réessayez.", "revoir": "Revoyez les leçons du niveau puis réessayez.",
      "lire.ici": "▶ Lire ici", "ouvrir.video": "Ouvrir la vidéo ↗", "ouvrir.youtube": "Ouvrir sur YouTube ↗", "ajoutee.poste": "ajoutée sur ce poste", "ajoutee.poste.titre": "Ajoutée depuis la page Administration de ce poste",
      "video.sans.titre": "Vidéo sans titre", "chaine": "Chaîne YouTube :", "langue.video.ar": "en arabe", "langue.video.fr": "en français",
      "introuvable": "Fichier introuvable :<br><code>{0}</code><br>Placez la vidéo dans le dossier <code>videos/</code> du site.",
      "telecharger": "Télécharger",
      "apercu.dl": "<b>Aperçu :</b> les téléchargements sont désactivés dans cet aperçu. Ils fonctionnent dans le site installé (ouvrez <code>index.html</code> du dossier décompressé) ou une fois le site hébergé en ligne.",
      "mediatheque": "Médiathèque · {0}", "videos.titre": "Vidéos tutorielles", "videos.sous": "Toutes les vidéos du parcours {0}, classées par niveau.", "aucune.video": "Aucune vidéo pour ce niveau.",
      "videos.langues": "Les vidéos sont en français ou en arabe, quelle que soit la langue du site.",
      "merci.chaines": "Merci aux chaînes YouTube", "merci.chaines.p": "Ces vidéos sont l'œuvre de créateurs qui partagent gratuitement leur savoir. Voir la page <a href=\"#remerciements\">Remerciements</a> pour la liste complète des chaînes.",
      "ajouter.video": "Ajouter une vidéo", "ajouter.video.p": "Rendez-vous sur la page <a href=\"#admin\">Administration</a>.",
      "dl.eyebrow": "Données de TP · {0}", "dl.titre": "Fichiers d'exemple",
      "dl.p": "Les données décrivent une zone d'étude <b>fictive</b> de 20 × 20 km (bassin de l'oued Tamda), placée au sud de Tlemcen, en WGS 1984 UTM zone 30N, avec ses séismes, feux, glissements et crues également inventés, plus une côte fictive pour l'exercice tsunami. Les mêmes données servent aux trois logiciels. Décompressez l'archive complète dans <code>C:\\ENIV\\</code> : les leçons utilisent le dossier <code>C:\\ENIV\\TP</code>.",
      "ajouter.fichier": "Ajouter un fichier", "ajouter.fichier.p": "Copiez le fichier dans le dossier <code>fichiers/</code> du site, puis ajoutez une ligne dans <code>donnees/fichiers.js</code> (le mode d'emploi est en tête du fichier). Zippez toujours les shapefiles.",
      "merci": "Merci", "remerciements": "Remerciements",
      "merci.p": "Ce site s'appuie sur des vidéos publiées gratuitement sur YouTube. Un grand merci aux {0} chaînes qui partagent leur savoir en français et en arabe, et qui rendent cette formation plus vivante pour les élèves de l'ENIV. Les vidéos restent la propriété de leurs auteurs : elles sont lues depuis YouTube, sans copie. Abonnez-vous à ces chaînes pour les soutenir.",
      "inspiration": "Sources d'inspiration",
      "inspiration.p": "Le programme du niveau 5 du parcours ArcGIS Pro (ModelBuilder : modélisation spatiale, outils et variables, itérateurs, paramètres et environnements, applications pratiques) reprend la structure de la formation gratuite « ModelBuilder dans ArcGIS Pro » de <b>Fathy Geo Code</b> (Eng. Ahmed Fathy). Merci pour ce travail de partage. Le contenu des leçons et les exercices ont été rédigés pour l'ENIV, avec les données de TP de Tlemcen.",
      "retrait": "Si vous êtes l'auteur d'une de ces vidéos et souhaitez qu'elle soit retirée, contactez l'enseignant : BOUHAFSI SIDDIQ.",
      "admin.eyebrow": "Espace enseignant · {0}", "admin.titre": "Administration des vidéos",
      "admin.p": "Ajoutez une vidéo YouTube ou un fichier vidéo local. Elle apparaît tout de suite sur ce poste. Pour la publier à tous les élèves, téléchargez le fichier <code>videos.js</code> en bas de page et remplacez celui du dossier <code>donnees/</code> du site.",
      "nouvelle.video": "Nouvelle vidéo", "f.niveau": "Niveau", "f.lecon": "Leçon", "f.lecon.aide": "« Tout le niveau » l'affiche sur la page du niveau.",
      "f.titre": "Titre", "f.titre.ex": "Ex. Créer une zone tampon avec ArcToolbox", "f.url": "Lien ou fichier",
      "f.url.aide": "YouTube : collez l'adresse de la vidéo. Fichier local : copiez le .mp4 dans le dossier <code>videos/</code> du site et écrivez <code>videos/nom_du_fichier.mp4</code>.",
      "f.duree": "Durée", "f.desc": "Description", "f.desc.ex": "Ce que l'élève va voir dans la vidéo", "f.ajouter": "Ajouter la vidéo",
      "videos.parcours": "Vidéos du parcours", "au.total": "{0} au total", "aucune.video.moment": "Aucune vidéo pour le moment.",
      "col.niveau": "Niveau", "col.titre": "Titre", "col.lien": "Lien", "col.origine": "Origine", "tout.niveau": "Tout le niveau", "ce.poste": "ce poste", "retirer": "Retirer",
      "publier": "Publier pour tous les élèves",
      "publier.p": "1. Téléchargez le fichier (ou copiez le texte). 2. Remplacez <code>donnees/videos.js</code> sur le serveur ou dans le dossier partagé du site. 3. Une fois publié, videz les ajouts de ce poste pour éviter les doublons.",
      "dl.videos": "Télécharger videos.js", "copier.texte": "Copier le texte", "texte.copie": "Texte copié", "vider": "Vider les ajouts de ce poste", "contenu.fichier": "Contenu du fichier :",
      "yt.detecte": "Vidéo YouTube détectée", "fichier.local": "Fichier vidéo local", "lien.externe": "Lien externe (ouvert dans un nouvel onglet)",
      "video.ajoutee": "Vidéo « {0} » ajoutée. Pensez à télécharger videos.js pour la publier à tous.", "video.retiree": "Vidéo « {0} » retirée.",
      "video.retiree.tous": " Téléchargez videos.js pour appliquer ce retrait à tous.", "vide.ok": "Ajouts et retraits de ce poste effacés. Les vidéos affichées sont maintenant celles de videos.js."
    },

    en: {
      "nav.ressources": "Resources", "res.eyebrow": "Free resources", "res.titre": "Software, data and glossary", "res.p": "A selection of free and open-source software, free data sources and online courses to keep learning, plus a glossary of GIS terms in French, English and Arabic.", "res.logiciels": "Free and open-source software", "res.donnees": "Free data", "res.apprendre": "Learn online", "res.glossaire": "GIS glossary", "res.glossaire.p": "{0} terms in French, English and Arabic.", "res.chercher": "Search for a term…", "res.aucun": "No matching term.",
      "nav.livre": "Guestbook", "obs.titre": "My notes", "obs.aide": "Write your remarks, difficulties or questions about this lesson. They are saved in this browser.", "obs.place": "e.g. I could not find the Slope tool in ArcToolbox…", "obs.enregistre": "Saved in this browser", "obs.envoyer": "Send to the teacher",
      "livre.eyebrow": "Guestbook · feedback", "livre.titre": "Guestbook and feedback", "livre.p": "Leave a word for the teacher: a remark about the site, an error you spotted, a question or a thank-you. Only the teacher reads the messages.", "livre.nom": "Full name", "livre.etab": "School or group", "livre.profil": "You are", "livre.eleve": "Student", "livre.ens": "Teacher", "livre.visiteur": "Visitor", "livre.obs": "Feedback", "livre.envoyer": "Send", "livre.merci": "Thank you! Your feedback has been sent to the teacher.", "livre.erreur": "Sending failed. Check your connection and try again.", "livre.inactif": "Sending is not enabled on this site yet. Your text stays saved in this browser.", "livre.vide": "Please write some feedback first.", "livre.envoi": "Sending…",
      "nav.parcours": "Courses", "nav.videos": "Videos", "nav.telechargements": "Downloads", "nav.admin": "Admin",
      "nav.principale": "Main navigation", "accueil": "Home", "progression.globale": "Overall progress",
      "marque.sous": "ArcMap · ArcGIS Pro · QGIS · Python — Teacher: BOUHAFSI SIDDIQ",
      "pied.1": "SIG ENIV: ArcMap, ArcGIS Pro, QGIS, Python and remote sensing training for ENIV students · Teacher: <b>BOUHAFSI SIDDIQ</b>",
      "pied.2": "Thanks to the YouTube channels that share their videos: <a href=\"#remerciements\">Acknowledgements</a>. Your progress is saved in this browser.",
      "langue": "Language", "titre.page": "SIG ENIV · ArcMap, ArcGIS Pro, QGIS and Python",
      "vitrine.eyebrow": "SIG ENIV · {0} courses · {1} lessons · videos in French and Arabic",
      "vitrine.h1": "Master ArcMap, ArcGIS Pro, QGIS and Python",
      "vitrine.sous": "From your first map to natural hazard analysis (floods, forest fires, earthquakes, tsunamis, landslides), up to remote sensing and machine learning with Python.",
      "choisir.logiciel": "Choose the software",
      "parcours.eyebrow": "{0} course · {1} levels · {2} lessons", "enseignant": "Teacher:",
      "reprendre": "Continue: ", "commencer": "Start: ", "parcours.termine": "Course completed ✓", "voir.videos": "Watch the videos",
      "itineraire": "The route", "itineraire.sous": "The scale gets finer at each level, and so do your skills.",
      "n.lecons": "{0} lessons", "n.videos": "{0} videos", "n.video": "{0} video", "quiz.score": "Quiz: {0}/{1}", "quiz.afaire": "Quiz to do", "ouvrir": "Open",
      "comment": "How to work", "eleves": "For students",
      "eleves.1": "Read the lesson, watch the video, do the exercise in {0}, then click “Mark as completed”. The quiz validates the level.",
      "eleves.2": "Your progress is saved in this browser.",
      "enseignants": "For teachers",
      "enseignants.1": "Add YouTube videos or .mp4 files from the <a href=\"#admin\">Admin</a> page, without touching the code.",
      "enseignants.2": "Lesson and quiz content is in <code>donnees/cours.js</code> (ArcMap), <code>cours_pro.js</code> (ArcGIS Pro) and <code>cours_qgis.js</code> (QGIS) and <code>cours_python.js</code> (Python). Translations are in <code>donnees/traductions/</code>.",
      "tp": "Practical data",
      "tp.1": "Download the <a href=\"#telechargements\">sample files</a> (fictional study area: municipalities, roads, wadis, boreholes, land cover, DEM, tables and scripts) and unzip them into <code>C:\\ENIV\\</code>.",
      "reinit": "Reset", "effacer": "Clear my progress", "confirmer": "Click again to confirm",
      "lecons.niveau": "Lessons of the level", "niveau": "Level {0}", "presentation": "Level overview", "quiz.niveau": "Level quiz", "autres.niveaux": "Other levels",
      "parcours.x": "{0} course", "niveau.echelle": "Level {0} · scale {1}", "programme": "Contents", "pct.termine": "{0} % completed",
      "col.lecon": "Lesson", "col.duree": "Duration", "col.etat": "Status", "terminee": "Completed", "afaire": "To do",
      "quiz.niveau.n": "Level quiz ({0} questions)", "fichiers.niveau": "Sample files for this level", "videos.niveau": "All videos of the level",
      "aucune.video.niveau.admin": "No video for this level yet. A teacher can add some from the <a href=\"#admin\">Admin</a> page.",
      "retour.parcours": "← Course", "commencer.l1": "Start lesson 1 →",
      "lecon.eyebrow": "Level {0} · lesson {1} of {2}", "duree": "Duration: {0}", "objectifs": "Objectives", "video": "Video", "videos": "Videos",
      "pas.video": "No video for this lesson yet. <a href=\"{0}\" target=\"_blank\" rel=\"noopener\">Search YouTube ↗</a> then add it from the <a href=\"#admin\">Admin</a> page.",
      "cours": "Lesson", "fichiers.exemple": "Sample files", "exercice.dans": "Hands-on exercise in {0}",
      "precedent": "← Previous", "suivant": "Next →", "lecon.terminee": "Lesson completed ✓", "marquer": "Mark as completed",
      "copier": "Copy", "copie": "Copied", "non.traduit": "This lesson has not been translated yet, so it is shown in French.",
      "quiz.eyebrow": "Level {0} · assessment", "quiz.titre": "Quiz: {0}", "n.questions": "{0} questions", "meilleur": "Best score: {0}/{1}",
      "valider": "Check my answers", "recommencer": "Start again", "derniere.lecon": "← Last lesson", "niveau.suivant": "Next level →", "retour.au.parcours": "Back to the course",
      "correct": "Correct. ", "attendue": "Expected answer: {0}. ", "restantes": "Answer the {0} remaining question(s) to get your score.",
      "valide": "Level passed. You can move on.", "presque": "Almost: read the explanations and try again.", "revoir": "Review the lessons of the level, then try again.",
      "lire.ici": "▶ Play here", "ouvrir.video": "Open the video ↗", "ouvrir.youtube": "Open on YouTube ↗", "ajoutee.poste": "added on this computer", "ajoutee.poste.titre": "Added from the Admin page on this computer",
      "video.sans.titre": "Untitled video", "chaine": "YouTube channel:", "langue.video.ar": "in Arabic", "langue.video.fr": "in French",
      "introuvable": "File not found:<br><code>{0}</code><br>Put the video in the site's <code>videos/</code> folder.",
      "telecharger": "Download",
      "apercu.dl": "<b>Preview:</b> downloads are disabled in this preview. They work in the installed site (open <code>index.html</code> in the unzipped folder) or once the site is hosted online.",
      "mediatheque": "Media library · {0}", "videos.titre": "Video tutorials", "videos.sous": "All videos of the {0} course, by level.", "aucune.video": "No video for this level.",
      "videos.langues": "The videos are in French or Arabic, whatever the language of the site.",
      "merci.chaines": "Thanks to the YouTube channels", "merci.chaines.p": "These videos are the work of creators who share their knowledge for free. See the <a href=\"#remerciements\">Acknowledgements</a> page for the full list of channels.",
      "ajouter.video": "Add a video", "ajouter.video.p": "Go to the <a href=\"#admin\">Admin</a> page.",
      "dl.eyebrow": "Practical data · {0}", "dl.titre": "Sample files",
      "dl.p": "The data describe a <b>fictional</b> 20 × 20 km study area (the Tamda wadi basin), located south of Tlemcen, in WGS 1984 UTM zone 30N, with invented earthquakes, fires, landslides and floods, plus a fictional coastline for the tsunami exercise. The same data are used in all three programs. Unzip the full archive into <code>C:\\ENIV\\</code>: the lessons use the <code>C:\\ENIV\\TP</code> folder.",
      "ajouter.fichier": "Add a file", "ajouter.fichier.p": "Copy the file into the site's <code>fichiers/</code> folder, then add a line in <code>donnees/fichiers.js</code> (instructions are at the top of the file). Always zip shapefiles.",
      "merci": "Thank you", "remerciements": "Acknowledgements",
      "merci.p": "This site relies on videos published for free on YouTube. Many thanks to the {0} channels that share their knowledge in French and Arabic and make this training more lively for ENIV students. The videos remain the property of their authors: they are played from YouTube, without copying. Subscribe to these channels to support them.",
      "inspiration": "Sources of inspiration",
      "inspiration.p": "Level 5 of the ArcGIS Pro course (ModelBuilder: spatial modelling, tools and variables, iterators, parameters and environments, practical applications) follows the structure of the free course “ModelBuilder in ArcGIS Pro” by <b>Fathy Geo Code</b> (Eng. Ahmed Fathy). Thank you for sharing. The lesson content and exercises were written for ENIV, using the Tlemcen practical data.",
      "retrait": "If you are the author of one of these videos and want it removed, please contact the teacher: BOUHAFSI SIDDIQ.",
      "admin.eyebrow": "Teacher area · {0}", "admin.titre": "Video administration",
      "admin.p": "Add a YouTube video or a local video file. It appears immediately on this computer. To publish it for all students, download the <code>videos.js</code> file at the bottom of the page and replace the one in the site's <code>donnees/</code> folder.",
      "nouvelle.video": "New video", "f.niveau": "Level", "f.lecon": "Lesson", "f.lecon.aide": "“Whole level” shows it on the level page.",
      "f.titre": "Title", "f.titre.ex": "e.g. Create a buffer with ArcToolbox", "f.url": "Link or file",
      "f.url.aide": "YouTube: paste the video address. Local file: copy the .mp4 into the site's <code>videos/</code> folder and type <code>videos/file_name.mp4</code>.",
      "f.duree": "Duration", "f.desc": "Description", "f.desc.ex": "What the student will see in the video", "f.ajouter": "Add the video",
      "videos.parcours": "Course videos", "au.total": "{0} in total", "aucune.video.moment": "No video yet.",
      "col.niveau": "Level", "col.titre": "Title", "col.lien": "Link", "col.origine": "Source", "tout.niveau": "Whole level", "ce.poste": "this computer", "retirer": "Remove",
      "publier": "Publish for all students",
      "publier.p": "1. Download the file (or copy the text). 2. Replace <code>donnees/videos.js</code> on the server or in the site's shared folder. 3. Once published, clear this computer's additions to avoid duplicates.",
      "dl.videos": "Download videos.js", "copier.texte": "Copy the text", "texte.copie": "Text copied", "vider": "Clear this computer's additions", "contenu.fichier": "File content:",
      "yt.detecte": "YouTube video detected", "fichier.local": "Local video file", "lien.externe": "External link (opens in a new tab)",
      "video.ajoutee": "Video “{0}” added. Remember to download videos.js to publish it for everyone.", "video.retiree": "Video “{0}” removed.",
      "video.retiree.tous": " Download videos.js to apply this removal for everyone.", "vide.ok": "This computer's additions and removals were cleared. The videos shown are now those of videos.js."
    },

    ar: {
      "nav.ressources": "الموارد", "res.eyebrow": "موارد مجانية", "res.titre": "البرامج والبيانات والمعجم", "res.p": "مجموعة مختارة من البرامج الحرة ومصادر البيانات المجانية والدورات على الإنترنت لمواصلة التعلم، مع معجم لمصطلحات نظم المعلومات الجغرافية بالفرنسية والإنجليزية والعربية.", "res.logiciels": "برامج حرة ومجانية", "res.donnees": "بيانات مجانية", "res.apprendre": "التعلم عبر الإنترنت", "res.glossaire": "معجم نظم المعلومات الجغرافية", "res.glossaire.p": "{0} مصطلحًا بالفرنسية والإنجليزية والعربية.", "res.chercher": "ابحث عن مصطلح…", "res.aucun": "لا يوجد مصطلح مطابق.",
      "nav.livre": "السجل الذهبي", "obs.titre": "ملاحظاتي", "obs.aide": "دوّن ملاحظاتك أو صعوباتك أو أسئلتك حول هذا الدرس. تُحفظ في هذا المتصفح.", "obs.place": "مثال: لم أجد أداة Slope في ArcToolbox…", "obs.enregistre": "حُفظ في هذا المتصفح", "obs.envoyer": "إرسال إلى الأستاذ",
      "livre.eyebrow": "السجل الذهبي · ملاحظات", "livre.titre": "السجل الذهبي والملاحظات", "livre.p": "اترك كلمة للأستاذ: ملاحظة حول الموقع، خطأ لاحظته، سؤال أو شكر. الأستاذ وحده يقرأ الرسائل.", "livre.nom": "الاسم واللقب", "livre.etab": "المؤسسة أو الفوج", "livre.profil": "أنت", "livre.eleve": "طالب", "livre.ens": "أستاذ", "livre.visiteur": "زائر", "livre.obs": "الملاحظة", "livre.envoyer": "إرسال", "livre.merci": "شكرًا! أُرسلت ملاحظتك إلى الأستاذ.", "livre.erreur": "فشل الإرسال. تحقق من اتصالك وأعد المحاولة.", "livre.inactif": "الإرسال غير مفعّل بعد في هذا الموقع. يبقى نصك محفوظًا في هذا المتصفح.", "livre.vide": "اكتب ملاحظة أولًا.", "livre.envoi": "جارٍ الإرسال…",
      "nav.parcours": "المسارات", "nav.videos": "الفيديوهات", "nav.telechargements": "التحميلات", "nav.admin": "الإدارة",
      "nav.principale": "التنقل الرئيسي", "accueil": "الرئيسية", "progression.globale": "التقدم العام",
      "marque.sous": "ArcMap · ArcGIS Pro · QGIS · Python — الأستاذ: BOUHAFSI SIDDIQ",
      "pied.1": "SIG ENIV: تكوين في ArcMap وArcGIS Pro وQGIS وPython والاستشعار عن بعد لطلبة ENIV · الأستاذ: <b>BOUHAFSI SIDDIQ</b>",
      "pied.2": "شكرًا لقنوات يوتيوب التي تشارك فيديوهاتها: <a href=\"#remerciements\">شكر وتقدير</a>. يُحفظ تقدمك في هذا المتصفح.",
      "langue": "اللغة", "titre.page": "SIG ENIV · ArcMap وArcGIS Pro وQGIS وPython",
      "vitrine.eyebrow": "SIG ENIV · {0} مسارات · {1} درسًا · فيديوهات بالفرنسية والعربية",
      "vitrine.h1": "أتقن ArcMap وArcGIS Pro وQGIS وPython",
      "vitrine.sous": "من أول خريطة إلى تحليل المخاطر الطبيعية (الفيضانات، حرائق الغابات، الزلازل، التسونامي، الانزلاقات الأرضية)، وصولًا إلى الاستشعار عن بعد والتعلم الآلي باستعمال Python.",
      "choisir.logiciel": "اختر البرنامج",
      "parcours.eyebrow": "مسار {0} · {1} مستويات · {2} درسًا", "enseignant": "الأستاذ:",
      "reprendre": "استئناف: ", "commencer": "ابدأ: ", "parcours.termine": "اكتمل المسار ✓", "voir.videos": "شاهد الفيديوهات",
      "itineraire": "خط السير", "itineraire.sous": "يدقّ مقياس الرسم في كل مستوى، كما تتطور مهاراتك.",
      "n.lecons": "الدروس: {0}", "n.videos": "الفيديوهات: {0}", "n.video": "الفيديوهات: {0}", "quiz.score": "الاختبار: {0}/{1}", "quiz.afaire": "اختبار لم يُنجز", "ouvrir": "فتح",
      "comment": "طريقة العمل", "eleves": "للطلبة",
      "eleves.1": "اقرأ الدرس، شاهد الفيديو، أنجز التمرين في {0}، ثم انقر على «تحديد كمكتمل». يُثبت الاختبار اجتياز المستوى.",
      "eleves.2": "يبقى تقدمك محفوظًا في هذا المتصفح.",
      "enseignants": "للأساتذة",
      "enseignants.1": "أضف فيديوهات يوتيوب أو ملفات ‎.mp4 من صفحة <a href=\"#admin\">الإدارة</a> دون تعديل الشيفرة.",
      "enseignants.2": "محتوى الدروس والاختبارات موجود في <code>donnees/cours.js</code> (ArcMap) و<code>cours_pro.js</code> (ArcGIS Pro) و<code>cours_qgis.js</code> (QGIS) و<code>cours_python.js</code> (Python). الترجمات في <code>donnees/traductions/</code>.",
      "tp": "بيانات الأعمال التطبيقية",
      "tp.1": "حمّل <a href=\"#telechargements\">ملفات الأمثلة</a> (منطقة دراسة وهمية: البلديات، الطرق، الأودية، الآبار، استعمال الأرض، نموذج الارتفاع الرقمي، الجداول والسكريبتات) وفك ضغطها في <code>C:\\ENIV\\</code>.",
      "reinit": "إعادة التعيين", "effacer": "مسح تقدمي", "confirmer": "انقر مرة أخرى للتأكيد",
      "lecons.niveau": "دروس المستوى", "niveau": "المستوى {0}", "presentation": "تقديم المستوى", "quiz.niveau": "اختبار المستوى", "autres.niveaux": "مستويات أخرى",
      "parcours.x": "مسار {0}", "niveau.echelle": "المستوى {0} · مقياس {1}", "programme": "البرنامج", "pct.termine": "أُنجز {0} %",
      "col.lecon": "الدرس", "col.duree": "المدة", "col.etat": "الحالة", "terminee": "مكتمل", "afaire": "لم يُنجز",
      "quiz.niveau.n": "اختبار المستوى ({0} أسئلة)", "fichiers.niveau": "ملفات أمثلة المستوى", "videos.niveau": "كل فيديوهات المستوى",
      "aucune.video.niveau.admin": "لا يوجد فيديو لهذا المستوى حاليًا. يمكن للأستاذ إضافته من صفحة <a href=\"#admin\">الإدارة</a>.",
      "retour.parcours": "→ المسار", "commencer.l1": "ابدأ الدرس 1 ←",
      "lecon.eyebrow": "المستوى {0} · الدرس {1} من {2}", "duree": "المدة: {0}", "objectifs": "الأهداف", "video": "فيديو", "videos": "فيديوهات",
      "pas.video": "لا يوجد فيديو لهذا الدرس بعد. <a href=\"{0}\" target=\"_blank\" rel=\"noopener\">ابحث عن فيديو في يوتيوب ↗</a> ثم أضفه من صفحة <a href=\"#admin\">الإدارة</a>.",
      "cours": "الدرس", "fichiers.exemple": "ملفات الأمثلة", "exercice.dans": "تمرين تطبيقي في {0}",
      "precedent": "→ السابق", "suivant": "التالي ←", "lecon.terminee": "اكتمل الدرس ✓", "marquer": "تحديد كمكتمل",
      "copier": "نسخ", "copie": "تم النسخ", "non.traduit": "هذا الدرس لم يُترجم بعد، لذا يُعرض بالفرنسية.",
      "quiz.eyebrow": "المستوى {0} · التقييم", "quiz.titre": "اختبار: {0}", "n.questions": "{0} أسئلة", "meilleur": "أفضل نتيجة: {0}/{1}",
      "valider": "تحقق من إجاباتي", "recommencer": "إعادة", "derniere.lecon": "→ الدرس الأخير", "niveau.suivant": "المستوى التالي ←", "retour.au.parcours": "العودة إلى المسار",
      "correct": "صحيح. ", "attendue": "الإجابة المنتظرة: {0}. ", "restantes": "أجب عن الأسئلة المتبقية ({0}) للحصول على نتيجتك.",
      "valide": "تم اجتياز المستوى. يمكنك المواصلة.", "presque": "قريب: أعد قراءة الشروح وحاول مجددًا.", "revoir": "راجع دروس المستوى ثم حاول مجددًا.",
      "lire.ici": "▶ تشغيل هنا", "ouvrir.video": "فتح الفيديو ↗", "ouvrir.youtube": "فتح في يوتيوب ↗", "ajoutee.poste": "أُضيف على هذا الجهاز", "ajoutee.poste.titre": "أُضيف من صفحة الإدارة على هذا الجهاز",
      "video.sans.titre": "فيديو بدون عنوان", "chaine": "قناة يوتيوب:", "langue.video.ar": "بالعربية", "langue.video.fr": "بالفرنسية",
      "introuvable": "الملف غير موجود:<br><code>{0}</code><br>ضع الفيديو في مجلد <code>videos/</code> الخاص بالموقع.",
      "telecharger": "تحميل",
      "apercu.dl": "<b>معاينة:</b> التحميلات معطلة في هذه المعاينة. تعمل في الموقع المثبت (افتح <code>index.html</code> في المجلد المفكوك) أو بعد استضافة الموقع على الإنترنت.",
      "mediatheque": "مكتبة الوسائط · {0}", "videos.titre": "فيديوهات تعليمية", "videos.sous": "كل فيديوهات مسار {0}، مرتبة حسب المستوى.", "aucune.video": "لا يوجد فيديو لهذا المستوى.",
      "videos.langues": "الفيديوهات بالفرنسية أو بالعربية، مهما كانت لغة الموقع.",
      "merci.chaines": "شكرًا لقنوات يوتيوب", "merci.chaines.p": "هذه الفيديوهات من إنجاز صناع محتوى يشاركون معارفهم مجانًا. راجع صفحة <a href=\"#remerciements\">شكر وتقدير</a> للقائمة الكاملة للقنوات.",
      "ajouter.video": "إضافة فيديو", "ajouter.video.p": "انتقل إلى صفحة <a href=\"#admin\">الإدارة</a>.",
      "dl.eyebrow": "بيانات الأعمال التطبيقية · {0}", "dl.titre": "ملفات الأمثلة",
      "dl.p": "تصف البيانات منطقة دراسة <b>وهمية</b> مساحتها 20 × 20 كم (حوض وادي تامدة)، تقع جنوب تلمسان، بنظام WGS 1984 UTM المنطقة 30N، مع زلازل وحرائق وانزلاقات وفيضانات مختلقة أيضًا، وساحل وهمي لتمرين التسونامي. تُستعمل البيانات نفسها في البرامج الثلاثة. فك ضغط الأرشيف الكامل في <code>C:\\ENIV\\</code>: تستعمل الدروس المجلد <code>C:\\ENIV\\TP</code>.",
      "ajouter.fichier": "إضافة ملف", "ajouter.fichier.p": "انسخ الملف إلى مجلد <code>fichiers/</code> في الموقع، ثم أضف سطرًا في <code>donnees/fichiers.js</code> (طريقة الاستعمال في أعلى الملف). اضغط ملفات shapefile دائمًا في ملف zip.",
      "merci": "شكرًا", "remerciements": "شكر وتقدير",
      "merci.p": "يعتمد هذا الموقع على فيديوهات منشورة مجانًا على يوتيوب. جزيل الشكر للقنوات ({0}) التي تشارك معارفها بالفرنسية والعربية وتجعل هذا التكوين أكثر حيوية لطلبة ENIV. تبقى الفيديوهات ملكًا لأصحابها: تُشغَّل من يوتيوب دون نسخ. اشترك في هذه القنوات لدعمها.",
      "inspiration": "مصادر الإلهام",
      "inspiration.p": "يتبع برنامج المستوى 5 من مسار ArcGIS Pro (ModelBuilder: النمذجة المكانية، الأدوات والمتغيرات، المكررات، المعاملات والبيئات، التطبيقات العملية) بنية الدورة المجانية «ModelBuilder في ArcGIS Pro» لـ <b>Fathy Geo Code</b> (المهندس أحمد فتحي). شكرًا على هذه المشاركة. حُرِّر محتوى الدروس والتمارين لـ ENIV ببيانات تلمسان التطبيقية.",
      "retrait": "إذا كنت صاحب أحد هذه الفيديوهات وتريد حذفه، اتصل بالأستاذ: BOUHAFSI SIDDIQ.",
      "admin.eyebrow": "فضاء الأستاذ · {0}", "admin.titre": "إدارة الفيديوهات",
      "admin.p": "أضف فيديو من يوتيوب أو ملف فيديو محلي. يظهر فورًا على هذا الجهاز. لنشره لكل الطلبة، حمّل ملف <code>videos.js</code> أسفل الصفحة واستبدل به الملف الموجود في مجلد <code>donnees/</code> بالموقع.",
      "nouvelle.video": "فيديو جديد", "f.niveau": "المستوى", "f.lecon": "الدرس", "f.lecon.aide": "«كل المستوى» يعرضه في صفحة المستوى.",
      "f.titre": "العنوان", "f.titre.ex": "مثال: إنشاء نطاق عازل بـ ArcToolbox", "f.url": "رابط أو ملف",
      "f.url.aide": "يوتيوب: الصق عنوان الفيديو. ملف محلي: انسخ ملف ‎.mp4 في مجلد <code>videos/</code> بالموقع واكتب <code>videos/nom_du_fichier.mp4</code>.",
      "f.duree": "المدة", "f.desc": "الوصف", "f.desc.ex": "ما سيشاهده الطالب في الفيديو", "f.ajouter": "إضافة الفيديو",
      "videos.parcours": "فيديوهات المسار", "au.total": "المجموع: {0}", "aucune.video.moment": "لا يوجد أي فيديو حاليًا.",
      "col.niveau": "المستوى", "col.titre": "العنوان", "col.lien": "الرابط", "col.origine": "المصدر", "tout.niveau": "كل المستوى", "ce.poste": "هذا الجهاز", "retirer": "حذف",
      "publier": "النشر لكل الطلبة",
      "publier.p": "1. حمّل الملف (أو انسخ النص). 2. استبدل <code>donnees/videos.js</code> على الخادم أو في المجلد المشترك للموقع. 3. بعد النشر، امسح إضافات هذا الجهاز لتفادي التكرار.",
      "dl.videos": "تحميل videos.js", "copier.texte": "نسخ النص", "texte.copie": "تم نسخ النص", "vider": "مسح إضافات هذا الجهاز", "contenu.fichier": "محتوى الملف:",
      "yt.detecte": "تم التعرف على فيديو يوتيوب", "fichier.local": "ملف فيديو محلي", "lien.externe": "رابط خارجي (يُفتح في علامة تبويب جديدة)",
      "video.ajoutee": "أُضيف الفيديو «{0}». لا تنس تحميل videos.js لنشره للجميع.", "video.retiree": "حُذف الفيديو «{0}».",
      "video.retiree.tous": " حمّل videos.js لتطبيق هذا الحذف على الجميع.", "vide.ok": "مُسحت إضافات وحذوفات هذا الجهاز. الفيديوهات المعروضة الآن هي تلك الموجودة في videos.js."
    },
    ber: {
      "nav.ressources": "Iɣbula", "res.eyebrow": "Iɣbula baṭel", "res.titre": "Iseɣzanen, isefka d umawal", "res.p": "Afran n yiseɣzanen ilelliyen, n yiɣbula n yisefka baṭel d yiselmaden deg Internet akken ad tkemmleḍ almad, akked umawal n tguri n SIG s tefransist, s tegleẓit d taɛrabt.", "res.logiciels": "Iseɣzanen ilelliyen u baṭel", "res.donnees": "Isefka baṭel", "res.apprendre": "Lmed deg Internet", "res.glossaire": "Amawal n SIG", "res.glossaire.p": "{0} n tguri s tefransist, s tegleẓit d taɛrabt.", "res.chercher": "Nadi awal…", "res.aucun": "Ulac awal yemṣadan.",
      "nav.livre": "Adlis n wurag", "obs.titre": "Tizmilin-iw", "obs.aide": "Aru tizmilin-ik, uguren-ik neɣ isteqsiyen-ik ɣef tmsirt-a. Ttwaḥerzent deg yiminig-a.", "obs.place": "Amedya: Ur ufiɣ ara afecku Slope deg ArcToolbox…", "obs.enregistre": "Yettwaḥrez deg yiminig-a", "obs.envoyer": "Azen i umesselmad", "livre.eyebrow": "Adlis n wurag · tizmilin", "livre.titre": "Adlis n wurag d tizmilin", "livre.p": "Ǧǧ awal i umesselmad: tazmilt ɣef usmel, tuccḍa i d-tufiḍ, asteqsi neɣ tanemmirt. D amesselmad kan i yeqqaren iznan.", "livre.nom": "Isem d uqqaru", "livre.etab": "Tasdawit neɣ agraw", "livre.profil": "Kečč·kemm d", "livre.eleve": "Anelmad", "livre.ens": "Amesselmad", "livre.visiteur": "Amerzu", "livre.obs": "Tazmilt", "livre.envoyer": "Azen", "livre.merci": "Tanemmirt! Tazmilt-ik tettwazen i umesselmad.", "livre.erreur": "Tuzna ur teddi ara. Senqed tuqqna-k syen ɛreḍ tikkelt nniḍen.", "livre.inactif": "Tuzna mazal ur tettwarmed ara deg usmel-a. Aḍris-ik yeqqim yettwaḥrez deg yiminig-a.", "livre.vide": "Aru tazmilt qbel.", "livre.envoi": "Tuzna…", "nav.parcours": "Iberdan", "nav.videos": "Tividyutin", "nav.telechargements": "Isadaren", "nav.admin": "Tadbelt", "nav.principale": "Tunigin tagejdant", "accueil": "Asebter agejdan", "progression.globale": "Tanerna tamatut", "marque.sous": "ArcMap · ArcGIS Pro · QGIS · Python — Amesselmad: BOUHAFSI SIDDIQ", "pied.1": "SIG ENIV: aselmed n ArcMap, ArcGIS Pro, QGIS, Python d tmeẓriwt seg ubeɛid i yinelmaden n ENIV · Amesselmad: <b>BOUHAFSI SIDDIQ</b>", "pied.2": "Tanemmirt i yibuda n YouTube i d-yettebḍun tividyutin-nsen: <a href=\"#remerciements\">Tanemmirt</a>. Tanerna-k tettwaḥrez deg yiminig-a.", "langue": "Tutlayt", "titre.page": "SIG ENIV · ArcMap, ArcGIS Pro, QGIS d Python", "vitrine.eyebrow": "SIG ENIV · {0} n yiberdan · {1} n tmsirin · tividyutin s tefransist d taɛrabt", "vitrine.h1": "Ḥrez ArcMap, ArcGIS Pro, QGIS d Python", "vitrine.sous": "Seg tkarḍa-k tamezwarut alamma d tasleḍt n yiɣṛisen igamanen: ibuzzar, times n tezgiwin, izenzalen, tsunami d uɣelluy n wakal, alamma d tmeẓriwt seg ubeɛid d ulmud awurman s Python.", "choisir.logiciel": "Fren aseɣzan", "parcours.eyebrow": "Abrid {0} · {1} n yiswiren · {2} n tmsirin", "enseignant": "Amesselmad:", "reprendre": "Kemmel: ", "commencer": "Bdu: ", "parcours.termine": "Abrid yemmed ✓", "voir.videos": "Wali tividyutin", "itineraire": "Abrid", "itineraire.sous": "Taskala tettwasemẓay di yal aswir, akken tettnerni tmusni-k.", "n.lecons": "{0} n tmsirin", "n.videos": "{0} n tvidyutin", "n.video": "{0} n tvidyut", "quiz.score": "Asestan: {0}/{1}", "quiz.afaire": "Asestan ara yettwaxedmen", "ouvrir": "Ldi", "comment": "Amek ara txedmeḍ", "eleves": "I yinelmaden", "eleves.1": "Ɣer tamsirt, wali tavidyut, xdem amahil deg {0}, syen sit ɣef « Creḍ-it yemmed ». Asestan yesseḥqaq aswir.", "eleves.2": "Tanerna-k tettwaḥrez deg yiminig-a.", "enseignants": "I yimesselmaden", "enseignants.1": "Rnu tividyutin n YouTube neɣ ifuyla .mp4 seg usebter <a href=\"#admin\">Tadbelt</a>, war ma tennaleḍ tangalt.", "enseignants.2": "Agbur n tmsirin d yisestanen yella deg <code>donnees/cours.js</code> (ArcMap), <code>cours_pro.js</code> (ArcGIS Pro) d <code>cours_qgis.js</code> (QGIS) d <code>cours_python.js</code> (Python). Tisuqilin llant deg <code>donnees/traductions/</code>.", "tp": "Isefka n umahil", "tp.1": "Sader <a href=\"#telechargements\">ifuyla n umedya</a> (tamnaḍt n tezrawt tasugant: tiɣiwanin, ibriden, isaffen, iɣunam, aseqdec n wakal, MNT, tiflisin d yiskripten) syen kkes-asen tussda deg <code>C:\\ENIV\\</code>.", "reinit": "Ales awennez", "effacer": "Sfeḍ tanerna-w", "confirmer": "Sit tikkelt nniḍen i usentem", "lecons.niveau": "Timsirin n uswir", "niveau": "Aswir {0}", "presentation": "Taskant n uswir", "quiz.niveau": "Asestan n uswir", "autres.niveaux": "Iswiren nniḍen", "parcours.x": "Abrid {0}", "niveau.echelle": "Aswir {0} · taskala {1}", "programme": "Ahil", "pct.termine": "{0} % yemmed", "col.lecon": "Tamsirt", "col.duree": "Tanzagt", "col.etat": "Addad", "terminee": "Temmed", "afaire": "Ara yettwaxedmen", "quiz.niveau.n": "Asestan n uswir ({0} n yisteqsiyen)", "fichiers.niveau": "Ifuyla n umedya n uswir-a", "videos.niveau": "Akk tividyutin n uswir", "aucune.video.niveau.admin": "Ulac tavidyut i uswir-a ar tura. Amesselmad yezmer ad d-yernu seg usebter <a href=\"#admin\">Tadbelt</a>.", "retour.parcours": "← Abrid", "commencer.l1": "Bdu tamsirt 1 →", "lecon.eyebrow": "Aswir {0} · tamsirt {1} seg {2}", "duree": "Tanzagt: {0}", "objectifs": "Iswan", "video": "Tavidyut", "videos": "Tividyutin", "pas.video": "Ulac tavidyut i tmsirt-a ar tura. <a href=\"{0}\" target=\"_blank\" rel=\"noopener\">Nadi deg YouTube ↗</a> syen rnu-tt seg usebter <a href=\"#admin\">Tadbelt</a>.", "cours": "Tamsirt", "fichiers.exemple": "Ifuyla n umedya", "exercice.dans": "Amahil deg {0}", "precedent": "← Uzwir", "suivant": "Uḍfir →", "lecon.terminee": "Tamsirt temmed ✓", "marquer": "Creḍ-it yemmed", "copier": "Nɣel", "copie": "Yettwanɣel", "non.traduit": "Tamsirt-a mazal ur tettwasuqel ara ɣer tmaziɣt, ihi tettwaskan s tefransist.", "quiz.eyebrow": "Aswir {0} · aktazal", "quiz.titre": "Asestan: {0}", "n.questions": "{0} n yisteqsiyen", "meilleur": "Agmuḍ ifazen: {0}/{1}", "valider": "Senqed tiririyin-iw", "recommencer": "Ales seg tazwara", "derniere.lecon": "← Tamsirt taneggarut", "niveau.suivant": "Aswir uḍfir →", "retour.au.parcours": "Uɣal ɣer ubrid", "correct": "D ayen yelhan. ", "attendue": "Tiririt i yettwarǧan: {0}. ", "restantes": "Err ɣef {0} n yisteqsiyen i d-yeqqimen akken ad tawiḍ agmuḍ-ik.", "valide": "Aswir yettwaseḥqeq. Tzemreḍ ad tkemmleḍ.", "presque": "Qrib: ɣer isegzan syen ɛreḍ tikkelt nniḍen.", "revoir": "Ɛiwed ɣer timsirin n uswir, syen ɛreḍ tikkelt nniḍen.", "lire.ici": "▶ Ɣer da", "ouvrir.video": "Ldi tavidyut ↗", "ouvrir.youtube": "Ldi deg YouTube ↗", "ajoutee.poste": "tettwarna ɣef uselkim-a", "ajoutee.poste.titre": "Tettwarna seg usebter Tadbelt ɣef uselkim-a", "video.sans.titre": "Tavidyut war azwel", "chaine": "Abadu n YouTube:", "langue.video.ar": "s taɛrabt", "langue.video.fr": "s tefransist", "introuvable": "Afaylu ulac-it:<br><code>{0}</code><br>Sers tavidyut deg ukaram <code>videos/</code> n usmel.", "telecharger": "Sader", "apercu.dl": "<b>Taskant:</b> asader yensa deg teskant-a. Yetteddu deg usmel yettwasbedden (ldi <code>index.html</code> deg ukaram mi tekkseḍ tussda) neɣ mi ara yili usmel deg Internet.", "mediatheque": "Tamkarḍit n tmidyatin · {0}", "videos.titre": "Tividyutin n uselmed", "videos.sous": "Akk tividyutin n ubrid {0}, s uswir.", "aucune.video": "Ulac tavidyut i uswir-a.", "videos.langues": "Tividyutin llant s tefransist neɣ s taɛrabt, akken yebɣu yili tutlayt n usmel.", "merci.chaines": "Tanemmirt i yibuda n YouTube", "merci.chaines.p": "Tividyutin-a d axeddim n yimeskaren i d-yettebḍun tamusni-nsen baṭel. Wali asebter <a href=\"#remerciements\">Tanemmirt</a> i tebdart tummidt n yibuda.", "ajouter.video": "Rnu tavidyut", "ajouter.video.p": "Ddu ɣer usebter <a href=\"#admin\">Tadbelt</a>.", "dl.eyebrow": "Isefka n umahil · {0}", "dl.titre": "Ifuyla n umedya", "dl.p": "Isefka-a d tamnaḍt n tezrawt <b>tasugant</b> n 20 × 20 km (asaru n wasif n Tamda), deg unẓul n Tlemsan, s WGS 1984 UTM tamnaḍt 30N, s yizenzalen, times, uɣelluy n wakal d yibuzzar yettwasnulfan, akked yiri n yill asugan i umahil n tsunami. Isefka-a yiwen deg kraḍ n yiseɣzan. Kkes tussda i weɣbar ummid deg <code>C:\\ENIV\\</code>: timsirin sseqdacent akaram <code>C:\\ENIV\\TP</code>.", "ajouter.fichier": "Rnu afaylu", "ajouter.fichier.p": "Nɣel afaylu deg ukaram <code>fichiers/</code> n usmel, syen rnu izirig deg <code>donnees/fichiers.js</code> (iwellihen llan deg tazwara n ufaylu). Ssudes yal tikkelt ifuyla shapefile.", "merci": "Tanemmirt", "remerciements": "Tanemmirt", "merci.p": "Asmel-a yebna ɣef tvidyutin i d-yettwasuffɣen baṭel deg YouTube. Tanemmirt tameqqrant i {0} n yibuda i d-yettebḍun tamusni-nsen s tefransist d taɛrabt, ttaǧǧan aselmed-a yedder ugar i yinelmaden n ENIV. Tividyutin qqiment d ayla n yimeskar-nsent: ttwaɣrant seg YouTube, war anɣal. Jerred deg yibuda-a akken ad ten-tɛiwneḍ.", "inspiration": "Iɣbula n usnulfu", "inspiration.p": "Aswir 5 n ubrid ArcGIS Pro (ModelBuilder: asemmezɣer amkan, ifecka d yimuttiyen, iseɣlayen, iɣewwaren d twennaḍin, isnasen n umahil) iḍfer aɣawas n uselmed baṭel « ModelBuilder in ArcGIS Pro » n <b>Fathy Geo Code</b> (Eng. Ahmed Fathy). Tanemmirt ɣef beṭṭu. Agbur n tmsirin d yimahilen yettwaru i ENIV, s yisefka n umahil n Tlemsan.", "retrait": "Ma d kečč i d ameskar n yiwet seg tvidyutin-a, tebɣiḍ ad tettwakkes, nermes amesselmad: BOUHAFSI SIDDIQ.", "admin.eyebrow": "Tallunt n umesselmad · {0}", "admin.titre": "Tadbelt n tvidyutin", "admin.p": "Rnu tavidyut n YouTube neɣ afaylu n tvidyut adigan. Ad d-tban imir-a ɣef uselkim-a. I wakken ad tt-tessufɣeḍ i yinelmaden akk, sader afaylu <code>videos.js</code> deg wadda n usebter syen beddel win yellan deg ukaram <code>donnees/</code> n usmel.", "nouvelle.video": "Tavidyut tamaynut", "f.niveau": "Aswir", "f.lecon": "Tamsirt", "f.lecon.aide": "« Aswir akk » yesskan-itt deg usebter n uswir.", "f.titre": "Azwel", "f.titre.ex": "Amedya: Snulfu-d tamnaḍt n tmesteẓṛit s ArcToolbox", "f.url": "Aseɣwen neɣ afaylu", "f.url.aide": "YouTube: senteḍ tansa n tvidyut. Afaylu adigan: nɣel .mp4 deg ukaram <code>videos/</code> n usmel syen aru <code>videos/isem_n_ufaylu.mp4</code>.", "f.duree": "Tanzagt", "f.desc": "Aglam", "f.desc.ex": "Ayen ara iwali unelmad deg tvidyut", "f.ajouter": "Rnu tavidyut", "videos.parcours": "Tividyutin n ubrid", "au.total": "{0} akk", "aucune.video.moment": "Ulac tavidyut ar tura.", "col.niveau": "Aswir", "col.titre": "Azwel", "col.lien": "Aseɣwen", "col.origine": "Aɣbalu", "tout.niveau": "Aswir akk", "ce.poste": "aselkim-a", "retirer": "Kkes", "publier": "Suffeɣ i yinelmaden akk", "publier.p": "1. Sader afaylu (neɣ nɣel aḍris). 2. Beddel <code>donnees/videos.js</code> ɣef uqeddac neɣ deg ukaram yettwabḍan n usmel. 3. Mi yettwasuffeɣ, sfeḍ timerna n uselkim-a akken ur d-ttɛiwiden ara.", "dl.videos": "Sader videos.js", "copier.texte": "Nɣel aḍris", "texte.copie": "Aḍris yettwanɣel", "vider": "Sfeḍ timerna n uselkim-a", "contenu.fichier": "Agbur n ufaylu:", "yt.detecte": "Tavidyut n YouTube tettwaf", "fichier.local": "Afaylu n tvidyut adigan", "lien.externe": "Aseɣwen azɣaray (yettwaldi deg yiccer amaynut)", "video.ajoutee": "Tavidyut « {0} » tettwarna. Ur tettu ara ad tesdereḍ videos.js akken ad tt-tessufɣeḍ i yal yiwen.", "video.retiree": "Tavidyut « {0} » tettwakkes.", "video.retiree.tous": " Sader videos.js akken ad yeddu tukksa-a i yal yiwen.", "vide.ok": "Timerna d tukksiwin n uselkim-a ttwasefḍent. Tividyutin i d-yettbanen tura d tid n videos.js."
    }
  };

  window.T = function (cle) {
    var s = (UI[lang] && UI[lang][cle]) || UI.fr[cle] || cle;
    for (var i = 1; i < arguments.length; i++) s = s.split("{" + (i - 1) + "}").join(arguments[i]);
    return s;
  };

  // Applique les traductions d'un parcours (titres, résumés, leçons, quiz) sur les objets en français.
  window.traduireParcours = function (c) {
    var t = window.TRAD[lang];
    if (!c || lang === "fr" || !t) return;
    var tc = t[c.cle || "arcmap"];
    if (tc) ["nom", "accroche", "lead"].forEach(function (k) { if (tc[k]) c[k] = tc[k]; });
    c.niveaux.forEach(function (n) {
      var tn = t[n.id];
      if (tn) {
        if (tn.titre) n.titre = tn.titre;
        if (tn.resume) n.resume = tn.resume;
        if (tn.quiz) tn.quiz.forEach(function (tq, i) {
          var q = n.quiz[i]; if (!q || !tq) return;
          if (tq.question) q.question = tq.question;
          if (tq.choix && tq.choix.length === q.choix.length) q.choix = tq.choix;
          if (tq.explication) q.explication = tq.explication;
        });
      }
      n.lecons.forEach(function (l) {
        var tl = t[l.id];
        l._traduite = !!(tl && tl.contenu);
        if (!tl) return;
        // <!--code:N--> reprend le Nième bloc <pre> de la version française (le code n'est pas traduit)
        var blocs = String(l.contenu || "").match(/<pre>[\s\S]*?<\/pre>/g) || [];
        ["titre", "duree", "objectifs", "contenu", "exercice"].forEach(function (k) {
          if (!tl[k]) return;
          l[k] = typeof tl[k] === "string" ? tl[k].replace(/<!--code:(\d+)-->/g, function (m, i) { return blocs[+i] || ""; }) : tl[k];
        });
      });
    });
  };

  // Habille la page : langue, sens d'écriture, textes fixes de l'en-tête et du pied de page, sélecteur.
  window.habillerPage = function () {
    var html = document.documentElement;
    html.lang = lang; html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = window.T("titre.page");
    document.querySelectorAll("[data-t]").forEach(function (el) { el.innerHTML = window.T(el.getAttribute("data-t")); });
    document.querySelectorAll("[data-t-label]").forEach(function (el) { el.setAttribute("aria-label", window.T(el.getAttribute("data-t-label"))); });
    document.querySelectorAll("[data-t-title]").forEach(function (el) { el.setAttribute("title", window.T(el.getAttribute("data-t-title"))); });
    var sel = document.getElementById("langue");
    if (sel && !sel._pret) {
      sel._pret = true;
      sel.innerHTML = Object.keys(LANGUES).map(function (k) { return '<option value="' + k + '" lang="' + k + '">' + LANGUES[k] + "</option>"; }).join("");
      sel.addEventListener("change", function () { window.changerLangue(sel.value); });
    }
    if (sel) { sel.value = lang; sel.setAttribute("aria-label", window.T("langue")); }
  };

  // Change de langue sans recharger la page : app.js écoute l'évènement « langue ».
  window.changerLangue = function (l) {
    if (!LANGUES[l] || l === lang) return;
    lang = l; window.LANGUE = l;
    try { localStorage.setItem("arcmap-eniv-langue", JSON.stringify(l)); } catch (e) { /* stockage indisponible */ }
    window.habillerPage();
    window.dispatchEvent(new Event("langue"));
  };
})();
