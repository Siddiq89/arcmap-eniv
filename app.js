/* ArcMap 10.8 pas à pas : navigation, progression, quiz, vidéos et administration. */
(function () {
  "use strict";

  var COURS = window.COURS || { niveaux: [] };
  var NIVEAUX = COURS.niveaux;
  var CLE_PROGRESSION = "arcmap-eniv-progression";
  var CLE_VIDEOS = "arcmap-eniv-videos-ajouts";
  var CLE_MASQUEES = "arcmap-eniv-videos-masquees";
  var app = document.getElementById("app");

  /* ---------------- Stockage (toujours protégé) ---------------- */
  function lire(cle, defaut) {
    try { var v = localStorage.getItem(cle); return v ? JSON.parse(v) : defaut; } catch (e) { return defaut; }
  }
  function ecrire(cle, val) {
    try { localStorage.setItem(cle, JSON.stringify(val)); } catch (e) { /* stockage indisponible */ }
  }

  var prog = lire(CLE_PROGRESSION, { lecons: {}, quiz: {} });
  if (!prog.lecons) prog.lecons = {};
  if (!prog.quiz) prog.quiz = {};
  function sauverProg() { ecrire(CLE_PROGRESSION, prog); majCompteur(); }

  /* ---------------- Utilitaires ---------------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function niveau(id) { for (var i = 0; i < NIVEAUX.length; i++) if (NIVEAUX[i].id === id) return NIVEAUX[i]; return null; }
  function trouverLecon(id) {
    for (var i = 0; i < NIVEAUX.length; i++)
      for (var j = 0; j < NIVEAUX[i].lecons.length; j++)
        if (NIVEAUX[i].lecons[j].id === id) return { niv: NIVEAUX[i], lec: NIVEAUX[i].lecons[j], idx: j };
    return null;
  }
  function toutesLecons() {
    var out = [];
    NIVEAUX.forEach(function (n) { n.lecons.forEach(function (l) { out.push(l); }); });
    return out;
  }
  // Étapes d'un niveau : chaque leçon + le quiz
  function etapesNiveau(n) { return n.lecons.length + (n.quiz && n.quiz.length ? 1 : 0); }
  function etapesFaites(n) {
    var f = 0;
    n.lecons.forEach(function (l) { if (prog.lecons[l.id]) f++; });
    if (n.quiz && n.quiz.length && prog.quiz[n.id]) f++;
    return f;
  }
  function pctNiveau(n) { var t = etapesNiveau(n); return t ? Math.round(etapesFaites(n) * 100 / t) : 0; }
  function pctGlobal() {
    var t = 0, f = 0;
    NIVEAUX.forEach(function (n) { t += etapesNiveau(n); f += etapesFaites(n); });
    return t ? Math.round(f * 100 / t) : 0;
  }
  function prochaineEtape() {
    for (var i = 0; i < NIVEAUX.length; i++) {
      var n = NIVEAUX[i];
      for (var j = 0; j < n.lecons.length; j++) if (!prog.lecons[n.lecons[j].id]) return { hash: n.lecons[j].id, label: n.lecons[j].titre };
      if (n.quiz && n.quiz.length && !prog.quiz[n.id]) return { hash: n.id + "-quiz", label: "Quiz du niveau " + n.numero };
    }
    return null;
  }
  function majCompteur() {
    var p = pctGlobal();
    document.getElementById("meter-fill").style.width = p + "%";
    document.getElementById("meter-text").textContent = p + " %";
  }

  /* ---------------- Vidéos ---------------- */
  function videosFichier() { return Array.isArray(window.VIDEOS) ? window.VIDEOS : []; }
  function cleVideo(v) { return (v.niveau || "") + "|" + (v.lecon || "") + "|" + (v.url || ""); }
  function toutesVideos() {
    var masquees = lire(CLE_MASQUEES, []);
    var fichier = videosFichier().filter(function (v) { return masquees.indexOf(cleVideo(v)) < 0; })
      .map(function (v) { return Object.assign({}, v, { _source: "fichier" }); });
    var ajouts = lire(CLE_VIDEOS, []).map(function (v, i) { return Object.assign({}, v, { _source: "local", _i: i }); });
    return fichier.concat(ajouts);
  }
  function idYoutube(url) {
    var m = String(url || "").match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
  }
  function idDrive(url) {
    var m = String(url || "").match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([A-Za-z0-9_-]{20,})/);
    return m ? m[1] : null;
  }
  function typeVideo(url) {
    if (idYoutube(url)) return "youtube";
    if (idDrive(url)) return "drive";
    if (/\.(mp4|webm|ogg|ogv|m4v)(\?.*)?$/i.test(url || "")) return "fichier";
    return "lien";
  }
  function carteVideo(v) {
    var t = typeVideo(v.url);
    var ecran;
    if (t === "fichier") {
      ecran = '<video controls preload="metadata" src="' + esc(encodeURI(v.url)) + '"' + (v.secours ? ' data-secours="' + esc(v.secours) + '"' : "") + '></video>';
    } else if (t === "youtube") {
      ecran = '<button type="button" data-yt="' + esc(idYoutube(v.url)) + '">▶ Lire ici</button>';
    } else if (t === "drive") {
      ecran = '<button type="button" data-drive="' + esc(idDrive(v.url)) + '">▶ Lire ici</button>';
    } else {
      ecran = '<a class="btn small" href="' + esc(v.url) + '" target="_blank" rel="noopener">Ouvrir la vidéo ↗</a>';
    }
    var lien = t === "youtube"
      ? ' · <a href="https://www.youtube.com/watch?v=' + esc(idYoutube(v.url)) + '" target="_blank" rel="noopener">Ouvrir sur YouTube ↗</a>'
      : t === "drive" ? ' · <a href="https://drive.google.com/file/d/' + esc(idDrive(v.url)) + '/view" target="_blank" rel="noopener">Ouvrir dans Google Drive ↗</a>' : "";
    var src = v._source === "local" ? ' <span class="tag local" title="Ajoutée depuis la page Administration de ce poste">ajoutée sur ce poste</span>' : "";
    var lec = v.lecon ? trouverLecon(v.lecon) : null;
    return '<div class="video"><div class="screen">' + ecran + '</div><div class="info">' +
      '<b>' + esc(v.titre || "Vidéo sans titre") + '</b>' +
      (v.description ? '<small>' + esc(v.description) + '</small>' : "") +
      '<small>' + (v.duree ? esc(v.duree) + " · " : "") + (lec ? '<a href="#' + lec.lec.id + '">' + esc(lec.lec.titre) + '</a>' : (niveau(v.niveau) ? "Niveau " + niveau(v.niveau).numero : "")) + lien + src + '</small>' +
      '</div></div>';
  }
  function blocVideos(liste, vide) {
    if (!liste.length) return '<div class="empty">' + vide + '</div>';
    return '<div class="videos">' + liste.map(carteVideo).join("") + '</div>';
  }
  // Lecteur YouTube intégré au clic ; message clair pour les vidéos locales introuvables
  app.addEventListener("click", function (e) {
    var d = e.target.closest("[data-drive]");
    if (d) {
      d.parentNode.innerHTML = '<iframe src="https://drive.google.com/file/d/' + d.getAttribute("data-drive") + '/preview" title="Vidéo Google Drive" allow="autoplay; fullscreen" allowfullscreen></iframe>';
      return;
    }
    var b = e.target.closest("[data-yt]");
    if (!b) return;
    var id = b.getAttribute("data-yt");
    b.parentNode.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" title="Vidéo YouTube" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
  });
  app.addEventListener("error", function (e) {
    var el = e.target;
    if (el && el.tagName === "VIDEO") {
      var s = el.getAttribute("src");
      var sec = el.getAttribute("data-secours");
      el.parentNode.innerHTML = '<div class="err">Fichier introuvable :<br><code>' + esc(decodeURI(s)) + '</code><br>Placez la vidéo dans le dossier <code>videos/</code> du site.' +
        (sec ? '<br><br><a class="btn small" href="' + esc(sec) + '" target="_blank" rel="noopener">Voir sur Google Drive ↗</a>' : "") + '</div>';
    }
  }, true);

  /* ---------------- Fichiers d'exemple ---------------- */
  function tousFichiers() { return Array.isArray(window.FICHIERS) ? window.FICHIERS : []; }
  function extension(f) { var m = String(f).match(/\.([a-z0-9]+)$/i); return m ? m[1].toUpperCase() : "FICHIER"; }
  function ligneFichier(f) {
    var nom = String(f.fichier).split("/").pop();
    return '<li class="file"><span class="ext">' + esc(extension(f.fichier)) + '</span>' +
      '<div class="file-info"><b>' + esc(f.titre || nom) + '</b>' +
      (f.description ? '<small>' + esc(f.description) + '</small>' : "") +
      '<small class="mono">' + esc(nom) + (f.taille ? " · " + esc(f.taille) : "") + '</small></div>' +
      '<a class="btn small" href="' + esc(f.fichier) + '" download="' + esc(nom) + '">Télécharger</a></li>';
  }
  // Dans un aperçu intégré (cadre), le navigateur bloque les téléchargements : on le dit clairement.
  var APERCU = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();
  function blocFichiers(liste) {
    var vus = {}, uniques = liste.filter(function (f) { if (vus[f.fichier]) return false; vus[f.fichier] = 1; return true; });
    var note = APERCU ? '<div class="astuce"><b>Aperçu :</b> les téléchargements sont désactivés dans cet aperçu. Ils fonctionnent dans le site installé (ouvrez <code>index.html</code> du dossier décompressé) ou une fois le site hébergé en ligne.</div>' : "";
    return note + '<ul class="files' + (APERCU ? " off" : "") + '">' + uniques.map(ligneFichier).join("") + '</ul>';
  }

  /* ---------------- Fond « courbes de niveau » ---------------- */
  function dessinerCourbes(canvas) {
    var r = canvas.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    canvas.width = r.width * dpr; canvas.height = r.height * dpr;
    var ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    var st = getComputedStyle(document.documentElement);
    var c1 = st.getPropertyValue("--contour").trim(), c2 = st.getPropertyValue("--water").trim();
    var cx = r.width * 0.82, cy = r.height * 0.55;
    for (var k = 1; k <= 16; k++) {
      ctx.beginPath();
      for (var a = 0; a <= Math.PI * 2 + 0.01; a += 0.05) {
        var rad = k * 26 + Math.sin(a * 3 + k * 0.5) * 9 + Math.cos(a * 5 - k) * 5;
        var x = cx + Math.cos(a) * rad * 1.25, y = cy + Math.sin(a) * rad * 0.8;
        if (a === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = k % 5 === 0 ? c1 : c2;
      ctx.globalAlpha = k % 5 === 0 ? 0.35 : 0.13;
      ctx.lineWidth = k % 5 === 0 ? 1.4 : 1;
      ctx.stroke();
    }
  }

  /* ---------------- Vues ---------------- */
  function vueAccueil() {
    var suite = prochaineEtape();
    var nbLecons = toutesLecons().length;
    var html = '<section class="hero"><canvas aria-hidden="true"></canvas><div class="wrap">' +
      '<span class="eyebrow">ArcGIS Desktop 10.8 · ' + NIVEAUX.length + ' niveaux · ' + nbLecons + ' leçons</span>' +
      '<h1>De la première carte à la cartographie des risques</h1>' +
      '<p class="lead">Un parcours progressif pour apprendre ArcMap avec les boîtes à outils : interface, données, symbologie, géotraitement avec ArcToolbox, ModelBuilder, programmation Python, puis hydrologie à partir du MNT et cartes de vulnérabilité aux risques naturels (inondation, feux de forêt, séisme, tsunami, glissements). Chaque leçon propose un exercice, des vidéos et un quiz de fin de niveau.</p>' +
      '<div class="actions">' +
      (suite ? '<a class="btn primary" href="#' + suite.hash + '">' + (pctGlobal() ? "Reprendre : " : "Commencer : ") + esc(suite.label) + ' →</a>'
             : '<a class="btn done" href="#' + NIVEAUX[NIVEAUX.length - 1].id + '">Parcours terminé ✓</a>') +
      '<a class="btn" href="#videos">Voir les vidéos</a></div>' +
      '</div></section>';

    html += '<main class="wrap"><div class="section-title"><h2>L\'itinéraire</h2><p>L\'échelle s\'affine à chaque niveau, comme vos compétences.</p></div><ol class="route">';
    NIVEAUX.forEach(function (n) {
      var p = pctNiveau(n);
      var q = prog.quiz[n.id];
      var nbV = toutesVideos().filter(function (v) { return v.niveau === n.id; }).length;
      html += '<li class="stop' + (p === 100 ? " complete" : "") + '">' +
        '<div class="pin">' + (p === 100 ? "✓" : n.numero) + '</div>' +
        '<div><h3><a href="#' + n.id + '">' + esc(n.titre) + '</a></h3><p>' + esc(n.resume) + '</p>' +
        '<div class="meta"><span class="scale">' + esc(n.echelle) + '</span><span>' + n.lecons.length + ' leçons</span><span>' + nbV + ' vidéo' + (nbV > 1 ? "s" : "") + '</span>' +
        (q ? '<span>Quiz : ' + q.score + '/' + q.total + '</span>' : '<span>Quiz à faire</span>') + '</div></div>' +
        '<div class="right"><div class="ring" style="--p:' + p + '"><span>' + p + '%</span></div><a class="btn small" href="#' + n.id + '">Ouvrir</a></div>' +
        '</li>';
    });
    html += '</ol>';

    html += '<div class="section-title"><h2>Comment travailler</h2></div><div class="grid-2">' +
      '<div class="panel"><h3>Pour les élèves</h3><p>Lisez la leçon, regardez la vidéo, faites l\'exercice dans ArcMap, puis cliquez sur « Marquer comme terminée ». Le quiz valide le niveau.</p><p>La progression reste enregistrée sur ce navigateur.</p></div>' +
      '<div class="panel"><h3>Pour les enseignants</h3><p>Ajoutez des vidéos YouTube ou des fichiers .mp4 depuis la page <a href="#admin">Administration</a>, sans toucher au code.</p><p>Le contenu des leçons et des quiz se trouve dans <code>donnees/cours.js</code>.</p></div>' +
      '<div class="panel"><h3>Données de TP</h3><p>Téléchargez les <a href="#telechargements">fichiers d\'exemple</a> (zone d\'étude fictive : communes, routes, oueds, forages, occupation du sol, MNT, tables et scripts) et décompressez-les dans <code>C:\\ENIV\\</code>.</p></div>' +
      '</div>';
    html += '<div class="section-title"><h2>Réinitialiser</h2></div><div class="row"><button class="btn small danger" id="reset" type="button">Effacer ma progression</button><span id="reset-msg" class="tag" hidden>Cliquez à nouveau pour confirmer</span></div>';
    html += '</main>';
    app.innerHTML = html;
    var cv = app.querySelector(".hero canvas");
    requestAnimationFrame(function () { dessinerCourbes(cv); });

    var armed = false;
    document.getElementById("reset").addEventListener("click", function () {
      if (!armed) { armed = true; document.getElementById("reset-msg").hidden = false; return; }
      prog = { lecons: {}, quiz: {} }; sauverProg(); route();
    });
  }

  function barreLaterale(n, courant) {
    var h = '<nav class="side" aria-label="Leçons du niveau"><span class="label">Niveau ' + n.numero + ' · <span class="scale">' + esc(n.echelle) + '</span></span>' +
      '<a href="#' + n.id + '"' + (courant === n.id ? ' aria-current="page"' : "") + '><span class="check' + (pctNiveau(n) === 100 ? " on" : "") + '"></span><span>Présentation du niveau</span></a>';
    n.lecons.forEach(function (l, i) {
      h += '<a href="#' + l.id + '"' + (courant === l.id ? ' aria-current="page"' : "") + '><span class="check' + (prog.lecons[l.id] ? " on" : "") + '"></span><span>' + (i + 1) + '. ' + esc(l.titre) + '</span></a>';
    });
    if (n.quiz && n.quiz.length)
      h += '<a href="#' + n.id + '-quiz"' + (courant === n.id + "-quiz" ? ' aria-current="page"' : "") + '><span class="check quiz' + (prog.quiz[n.id] ? " on" : "") + '"></span><span>Quiz du niveau</span></a>';
    h += '<span class="label">Autres niveaux</span>';
    NIVEAUX.forEach(function (m) { if (m !== n) h += '<a href="#' + m.id + '"><span class="check' + (pctNiveau(m) === 100 ? " on" : "") + '"></span><span>' + m.numero + '. ' + esc(m.titre) + '</span></a>'; });
    return h + '</nav>';
  }
  function entete(n, titre) {
    return '<div class="crumbs"><a href="#accueil">Parcours</a> / <a href="#' + n.id + '">Niveau ' + n.numero + '</a>' + (titre ? ' / ' + esc(titre) : "") + '</div>';
  }

  function vueNiveau(n) {
    var vids = toutesVideos().filter(function (v) { return v.niveau === n.id; });
    var h = '<main class="wrap">' + entete(n) +
      '<div class="level-head"><span class="eyebrow">Niveau ' + n.numero + ' · échelle ' + esc(n.echelle) + '</span><h1>' + esc(n.titre) + '</h1><p>' + esc(n.resume) + '</p></div>' +
      '<div class="layout">' + barreLaterale(n, n.id) + '<article class="lesson">' +
      '<h2>Au programme</h2><div class="sub"><span>' + n.lecons.length + ' leçons</span><span>' + pctNiveau(n) + ' % terminé</span></div>' +
      '<div class="table-scroll"><table class="list"><tr><th>Leçon</th><th>Durée</th><th>État</th></tr>';
    n.lecons.forEach(function (l, i) {
      h += '<tr><td><a href="#' + l.id + '">' + (i + 1) + '. ' + esc(l.titre) + '</a></td><td>' + esc(l.duree) + '</td><td>' + (prog.lecons[l.id] ? '<span class="tag" style="color:var(--veg)">Terminée</span>' : '<span class="tag">À faire</span>') + '</td></tr>';
    });
    if (n.quiz && n.quiz.length) {
      var q = prog.quiz[n.id];
      h += '<tr><td><a href="#' + n.id + '-quiz">Quiz du niveau (' + n.quiz.length + ' questions)</a></td><td>5 min</td><td>' + (q ? '<span class="tag" style="color:var(--veg)">' + q.score + '/' + q.total + '</span>' : '<span class="tag">À faire</span>') + '</td></tr>';
    }
    var ficsN = tousFichiers().filter(function (f) { return f.niveau === n.id; });
    h += '</table></div>' + (ficsN.length ? '<h3>Fichiers d\'exemple du niveau</h3>' + blocFichiers(ficsN) : "") +
      '<h3>Toutes les vidéos du niveau</h3>' +
      blocVideos(vids, 'Aucune vidéo pour ce niveau pour l\'instant. Un enseignant peut en ajouter depuis la page <a href="#admin">Administration</a>.') +
      '<div class="lesson-foot"><a class="btn" href="#accueil">← Parcours</a><a class="btn primary" href="#' + n.lecons[0].id + '">Commencer la leçon 1 →</a></div>' +
      '</article></div></main>';
    app.innerHTML = h;
  }

  function vueLecon(r) {
    var n = r.niv, l = r.lec;
    var vids = toutesVideos().filter(function (v) { return v.lecon === l.id; });
    var fics = tousFichiers().filter(function (f) { return f.lecon === l.id; });
    var precedent = r.idx > 0 ? n.lecons[r.idx - 1].id : n.id;
    var suivant = r.idx < n.lecons.length - 1 ? n.lecons[r.idx + 1].id : n.id + "-quiz";
    var fait = !!prog.lecons[l.id];
    var recherche = "https://www.youtube.com/results?search_query=" + encodeURIComponent("ArcMap 10.8 " + l.titre);
    var h = '<main class="wrap">' + entete(n, l.titre) +
      '<div class="layout">' + barreLaterale(n, l.id) + '<article class="lesson">' +
      '<span class="eyebrow">Niveau ' + n.numero + ' · leçon ' + (r.idx + 1) + ' sur ' + n.lecons.length + '</span>' +
      '<h2>' + esc(l.titre) + '</h2><div class="sub"><span>Durée : ' + esc(l.duree) + '</span><span class="scale">' + esc(n.echelle) + '</span></div>' +
      '<div class="objectifs"><b>Objectifs</b><ul>' + l.objectifs.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + '</ul></div>' +
      '<h3>Vidéo' + (vids.length > 1 ? "s" : "") + '</h3>' +
      blocVideos(vids, 'Pas encore de vidéo pour cette leçon. <a href="' + recherche + '" target="_blank" rel="noopener">Chercher une vidéo sur YouTube ↗</a> puis l\'ajouter depuis la page <a href="#admin">Administration</a>.') +
      '<h3>Cours</h3><div class="body">' + l.contenu + '</div>' +
      (fics.length ? '<h3>Fichiers d\'exemple</h3>' + blocFichiers(fics) : "") +
      '<h3>Exercice pratique dans ArcMap</h3><div class="exercice">' + l.exercice + '</div>' +
      '<div class="lesson-foot"><a class="btn" href="#' + precedent + '">← Précédent</a>' +
      '<button class="btn ' + (fait ? "done" : "primary") + '" id="toggle-fait" type="button">' + (fait ? "Leçon terminée ✓" : "Marquer comme terminée") + '</button>' +
      '<a class="btn" href="#' + suivant + '">Suivant →</a></div>' +
      '</article></div></main>';
    app.innerHTML = h;
    ajouterBoutonsCopier();
    document.getElementById("toggle-fait").addEventListener("click", function () {
      if (prog.lecons[l.id]) delete prog.lecons[l.id]; else prog.lecons[l.id] = Date.now();
      sauverProg();
      var y = window.scrollY; vueLecon(r); window.scrollTo(0, y);
    });
  }

  function ajouterBoutonsCopier() {
    app.querySelectorAll("pre").forEach(function (pre) {
      var b = document.createElement("button");
      b.className = "copy"; b.type = "button"; b.textContent = "Copier";
      b.addEventListener("click", function () {
        var txt = pre.querySelector("code").innerText;
        var ok = function () { b.textContent = "Copié"; setTimeout(function () { b.textContent = "Copier"; }, 1500); };
        try {
          navigator.clipboard.writeText(txt).then(ok, function () { selectionner(pre); });
        } catch (e) { selectionner(pre); }
      });
      pre.appendChild(b);
    });
  }
  function selectionner(el) {
    var range = document.createRange(); range.selectNodeContents(el.querySelector("code") || el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(range);
  }

  function vueQuiz(n) {
    var res = prog.quiz[n.id];
    var h = '<main class="wrap">' + entete(n, "Quiz") + '<div class="layout">' + barreLaterale(n, n.id + "-quiz") +
      '<article class="lesson quiz"><span class="eyebrow">Niveau ' + n.numero + ' · validation</span><h2>Quiz : ' + esc(n.titre) + '</h2>' +
      '<div class="sub"><span>' + n.quiz.length + ' questions</span>' + (res ? '<span>Meilleur score : ' + res.score + '/' + res.total + '</span>' : "") + '</div>' +
      '<form id="quiz-form"><ol class="qs">';
    n.quiz.forEach(function (q, i) {
      h += '<li class="q"><p>' + esc(q.question) + '</p>';
      q.choix.forEach(function (c, j) {
        h += '<label id="q' + i + 'c' + j + '-l"><input type="radio" name="q' + i + '" id="q' + i + 'c' + j + '" value="' + j + '"><span>' + esc(c) + '</span></label>';
      });
      h += '<p class="expl" id="q' + i + '-expl" hidden></p></li>';
    });
    h += '</ol><div class="row"><button class="btn primary" type="submit">Valider mes réponses</button><button class="btn" type="button" id="quiz-reset">Recommencer</button></div></form>' +
      '<div id="quiz-score"></div>' +
      '<div class="lesson-foot"><a class="btn" href="#' + n.lecons[n.lecons.length - 1].id + '">← Dernière leçon</a>' +
      (niveau("n" + (n.numero + 1)) ? '<a class="btn" href="#n' + (n.numero + 1) + '">Niveau suivant →</a>' : '<a class="btn" href="#accueil">Retour au parcours</a>') + '</div>' +
      '</article></div></main>';
    app.innerHTML = h;

    var form = document.getElementById("quiz-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var score = 0, repondu = 0;
      n.quiz.forEach(function (q, i) {
        var sel = form.querySelector('input[name="q' + i + '"]:checked');
        for (var j = 0; j < q.choix.length; j++) document.getElementById("q" + i + "c" + j + "-l").className = "";
        if (sel) repondu++;
        if (sel && +sel.value === q.bonne) score++;
        if (sel) {
          document.getElementById("q" + i + "c" + q.bonne + "-l").className = "ok";
          if (+sel.value !== q.bonne) document.getElementById("q" + i + "c" + sel.value + "-l").className = "ko";
          var ex = document.getElementById("q" + i + "-expl");
          ex.textContent = (+sel.value === q.bonne ? "Correct. " : "Réponse attendue : " + q.choix[q.bonne] + ". ") + (q.explication || "");
          ex.hidden = false;
        }
      });
      var zone = document.getElementById("quiz-score");
      if (repondu < n.quiz.length) {
        zone.innerHTML = '<div class="score">Répondez aux ' + (n.quiz.length - repondu) + ' question(s) restante(s) pour obtenir votre score.</div>';
        return;
      }
      var meilleur = prog.quiz[n.id];
      if (!meilleur || score > meilleur.score) prog.quiz[n.id] = { score: score, total: n.quiz.length, date: Date.now() };
      sauverProg();
      var pct = Math.round(score * 100 / n.quiz.length);
      zone.innerHTML = '<div class="score"><b>' + score + ' / ' + n.quiz.length + '</b><span>' +
        (pct >= 75 ? "Niveau validé. Vous pouvez passer à la suite." : pct >= 50 ? "Presque : relisez les explications et réessayez." : "Revoyez les leçons du niveau puis réessayez.") + '</span></div>';
      zone.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
    document.getElementById("quiz-reset").addEventListener("click", function () { vueQuiz(n); });
  }

  function vueVideos() {
    var all = toutesVideos();
    var h = '<main class="wrap"><div class="level-head"><span class="eyebrow">Médiathèque</span><h1>Vidéos tutorielles</h1><p>Toutes les vidéos du parcours, classées par niveau. ' + all.length + ' vidéo' + (all.length > 1 ? "s" : "") + ' au total.</p></div>';
    NIVEAUX.forEach(function (n) {
      var v = all.filter(function (x) { return x.niveau === n.id; });
      h += '<div class="section-title"><h2>' + n.numero + '. ' + esc(n.titre) + '</h2><p class="scale">' + esc(n.echelle) + '</p></div>' +
        blocVideos(v, 'Aucune vidéo pour ce niveau.');
    });
    h += '<div class="section-title"><h2>Ajouter une vidéo</h2></div><p>Rendez-vous sur la page <a href="#admin">Administration</a>.</p></main>';
    app.innerHTML = h;
  }

  function vueTelechargements() {
    var all = tousFichiers();
    var general = all.filter(function (f) { return !f.niveau; });
    var h = '<main class="wrap"><div class="level-head"><span class="eyebrow">Données de TP</span><h1>Fichiers d\'exemple</h1>' +
      '<p>Les données décrivent une zone d\'étude <b>fictive</b> de 20 × 20 km (bassin de l\'oued Tamda), placée au sud de Tlemcen, en WGS 1984 UTM zone 30N, avec ses séismes, feux, glissements et crues également inventés, plus une côte fictive pour l\'exercice tsunami. Décompressez l\'archive complète dans <code>C:\\ENIV\\</code> : les leçons utilisent le dossier <code>C:\\ENIV\\TP</code>.</p></div>';
    if (general.length) h += blocFichiers(general);
    NIVEAUX.forEach(function (n) {
      var f = all.filter(function (x) { return x.niveau === n.id; });
      if (!f.length) return;
      h += '<div class="section-title"><h2>' + n.numero + '. ' + esc(n.titre) + '</h2><p class="scale">' + esc(n.echelle) + '</p></div>' + blocFichiers(f);
    });
    h += '<div class="section-title"><h2>Ajouter un fichier</h2></div><div class="panel"><p>Copiez le fichier dans le dossier <code>fichiers/</code> du site, puis ajoutez une ligne dans <code>donnees/fichiers.js</code> (le mode d\'emploi est en tête du fichier). Zippez toujours les shapefiles.</p></div></main>';
    app.innerHTML = h;
  }

  /* ---------------- Administration ---------------- */
  function exporterTexte() {
    var masquees = lire(CLE_MASQUEES, []);
    var liste = videosFichier().filter(function (v) { return masquees.indexOf(cleVideo(v)) < 0; }).concat(lire(CLE_VIDEOS, []));
    var propres = liste.map(function (v) {
      var o = { niveau: v.niveau || "", lecon: v.lecon || "", titre: v.titre || "", url: v.url || "", duree: v.duree || "", description: v.description || "" };
      if (v.secours) o.secours = v.secours;
      return o;
    });
    return "/*\n * VIDÉOS TUTORIELLES : fichier généré depuis la page Administration le " + new Date().toLocaleString("fr-FR") + ".\n" +
      " * Remplacez donnees/videos.js par ce fichier pour publier les vidéos à tous les élèves.\n" +
      " * Champs : niveau (n1 à n6), lecon (ex. n4-l2 ou vide), titre, url (YouTube ou videos/fichier.mp4), duree, description.\n */\n" +
      "window.VIDEOS = " + JSON.stringify(propres, null, 2) + ";\n";
  }

  function vueAdmin(message) {
    var all = toutesVideos();
    var optsNiv = NIVEAUX.map(function (n) { return '<option value="' + n.id + '">' + n.numero + '. ' + esc(n.titre) + '</option>'; }).join("");
    var h = '<main class="wrap"><div class="level-head"><span class="eyebrow">Espace enseignant</span><h1>Administration des vidéos</h1>' +
      '<p>Ajoutez une vidéo YouTube ou un fichier vidéo local. Elle apparaît tout de suite sur ce poste. Pour la publier à tous les élèves, téléchargez le fichier <code>videos.js</code> en bas de page et remplacez celui du dossier <code>donnees/</code> du site.</p></div>' +
      '<div class="panel"><h3>Nouvelle vidéo</h3><form id="f-video" class="form">' +
      '<div class="field"><label for="f-niveau">Niveau</label><select id="f-niveau" required>' + optsNiv + '</select></div>' +
      '<div class="field"><label for="f-lecon">Leçon</label><select id="f-lecon"></select><small>« Tout le niveau » l\'affiche sur la page du niveau.</small></div>' +
      '<div class="field full"><label for="f-titre">Titre</label><input id="f-titre" required maxlength="140" placeholder="Ex. Créer une zone tampon avec ArcToolbox"></div>' +
      '<div class="field full"><label for="f-url">Lien ou fichier</label><input id="f-url" required placeholder="https://www.youtube.com/watch?v=…  ou  videos/zone_tampon.mp4"><small>YouTube : collez l\'adresse de la vidéo. Fichier local : copiez le .mp4 dans le dossier <code>videos/</code> du site et écrivez <code>videos/nom_du_fichier.mp4</code>.</small></div>' +
      '<div class="field"><label for="f-duree">Durée</label><input id="f-duree" placeholder="12:30" maxlength="12"></div>' +
      '<div class="field full"><label for="f-desc">Description</label><textarea id="f-desc" rows="2" maxlength="400" placeholder="Ce que l\'élève va voir dans la vidéo"></textarea></div>' +
      '<div class="full row"><button class="btn primary" type="submit">Ajouter la vidéo</button><span id="f-type" class="tag"></span></div>' +
      '</form>' + (message ? '<div class="notice">' + esc(message) + '</div>' : "") + '</div>';

    h += '<div class="section-title"><h2>Vidéos du parcours</h2><p>' + all.length + ' au total</p></div>';
    if (!all.length) h += '<div class="empty">Aucune vidéo pour le moment.</div>';
    else {
      h += '<div class="panel table-scroll"><table class="list"><tr><th>Niveau</th><th>Leçon</th><th>Titre</th><th>Lien</th><th>Origine</th><th></th></tr>';
      all.forEach(function (v, i) {
        var lec = v.lecon ? trouverLecon(v.lecon) : null;
        h += '<tr><td>' + (niveau(v.niveau) ? niveau(v.niveau).numero : "?") + '</td><td>' + (lec ? esc(lec.lec.titre) : "Tout le niveau") + '</td><td>' + esc(v.titre) + '</td><td class="url">' + esc(v.url) + '</td>' +
          '<td>' + (v._source === "local" ? '<span class="tag local">ce poste</span>' : '<span class="tag">videos.js</span>') + '</td>' +
          '<td><button class="btn small danger" type="button" data-suppr="' + i + '">Retirer</button></td></tr>';
      });
      h += '</table></div>';
    }

    h += '<div class="section-title"><h2>Publier pour tous les élèves</h2></div><div class="panel">' +
      '<p>1. Téléchargez le fichier (ou copiez le texte). 2. Remplacez <code>donnees/videos.js</code> sur le serveur ou dans le dossier partagé du site. 3. Une fois publié, videz les ajouts de ce poste pour éviter les doublons.</p>' +
      '<div class="row"><button class="btn primary" type="button" id="dl">Télécharger videos.js</button><button class="btn" type="button" id="cp">Copier le texte</button><button class="btn danger" type="button" id="vider">Vider les ajouts de ce poste</button><span id="vider-msg" class="tag" hidden>Cliquez à nouveau pour confirmer</span></div>' +
      '<p style="margin-top:12px"><label for="export-txt">Contenu du fichier :</label></p><textarea id="export-txt" class="export" readonly></textarea></div>';
    h += '</main>';
    app.innerHTML = h;

    var selN = document.getElementById("f-niveau"), selL = document.getElementById("f-lecon");
    function remplirLecons() {
      var n = niveau(selN.value);
      selL.innerHTML = '<option value="">Tout le niveau</option>' + n.lecons.map(function (l, i) { return '<option value="' + l.id + '">' + (i + 1) + '. ' + esc(l.titre) + '</option>'; }).join("");
    }
    selN.addEventListener("change", remplirLecons); remplirLecons();
    var urlIn = document.getElementById("f-url"), typeOut = document.getElementById("f-type");
    urlIn.addEventListener("input", function () {
      var t = urlIn.value.trim() ? typeVideo(urlIn.value.trim()) : "";
      typeOut.textContent = t === "youtube" ? "Vidéo YouTube détectée" : t === "drive" ? "Vidéo Google Drive détectée (partagez-la « Tous les utilisateurs disposant du lien »)" : t === "fichier" ? "Fichier vidéo local" : t ? "Lien externe (ouvert dans un nouvel onglet)" : "";
    });
    document.getElementById("export-txt").value = exporterTexte();

    document.getElementById("f-video").addEventListener("submit", function (e) {
      e.preventDefault();
      var v = {
        niveau: selN.value, lecon: selL.value,
        titre: document.getElementById("f-titre").value.trim(),
        url: urlIn.value.trim(),
        duree: document.getElementById("f-duree").value.trim(),
        description: document.getElementById("f-desc").value.trim()
      };
      var ajouts = lire(CLE_VIDEOS, []); ajouts.push(v); ecrire(CLE_VIDEOS, ajouts);
      vueAdmin("Vidéo « " + v.titre + " » ajoutée. Pensez à télécharger videos.js pour la publier à tous.");
    });
    app.querySelectorAll("[data-suppr]").forEach(function (b) {
      b.addEventListener("click", function () {
        var v = all[+b.getAttribute("data-suppr")];
        if (v._source === "local") { var a = lire(CLE_VIDEOS, []); a.splice(v._i, 1); ecrire(CLE_VIDEOS, a); }
        else { var m = lire(CLE_MASQUEES, []); m.push(cleVideo(v)); ecrire(CLE_MASQUEES, m); }
        vueAdmin("Vidéo « " + v.titre + " » retirée." + (v._source === "local" ? "" : " Téléchargez videos.js pour appliquer ce retrait à tous."));
      });
    });
    document.getElementById("dl").addEventListener("click", function () {
      var blob = new Blob([exporterTexte()], { type: "text/javascript;charset=utf-8" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = "videos.js";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    });
    document.getElementById("cp").addEventListener("click", function () {
      var ta = document.getElementById("export-txt"), b = this;
      try { navigator.clipboard.writeText(ta.value).then(function () { b.textContent = "Texte copié"; }, function () { ta.select(); }); }
      catch (e) { ta.select(); }
    });
    var armed = false;
    document.getElementById("vider").addEventListener("click", function () {
      if (!armed) { armed = true; document.getElementById("vider-msg").hidden = false; return; }
      ecrire(CLE_VIDEOS, []); ecrire(CLE_MASQUEES, []);
      vueAdmin("Ajouts et retraits de ce poste effacés. Les vidéos affichées sont maintenant celles de videos.js.");
    });
  }

  /* ---------------- Routeur (#accueil, #n1, #n1-l2, #n1-quiz, #videos, #admin) ---------------- */
  function route() {
    var h = (location.hash || "#accueil").slice(1);
    var nav = "accueil";
    if (h === "admin") { vueAdmin(); nav = "admin"; }
    else if (h === "videos") { vueVideos(); nav = "videos"; }
    else if (h === "telechargements") { vueTelechargements(); nav = "telechargements"; }
    else if (/^n\d+-quiz$/.test(h) && niveau(h.replace("-quiz", ""))) vueQuiz(niveau(h.replace("-quiz", "")));
    else if (niveau(h)) vueNiveau(niveau(h));
    else if (trouverLecon(h)) vueLecon(trouverLecon(h));
    else vueAccueil();
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    majCompteur();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
