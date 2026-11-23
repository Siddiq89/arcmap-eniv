/*
 * NIVEAU « GESTION DES RISQUES » pour les trois parcours.
 * ------------------------------------------------------------------
 * Ajoute n10 (ArcMap), p11 (ArcGIS Pro) et q12 (QGIS) et leurs traductions
 * (en, ar, ber). Texte commun ; seul le tableau des outils change.
 * À charger après mnt12.js, avant app.js.
 */
(function () {
  var OUTILS = {
    arcmap: {
      zonal: ["Zonal Statistics as Table", "Spatial Analyst Tools > Zonal"],
      compte: ["Spatial Join (JOIN_ONE_TO_ONE, count)", "Analysis Tools > Overlay"],
      jointure: ["Add Join", "Table of contents: Joins and Relates"],
      calcul: ["Field Calculator", "Attribute table"],
      evac: ["Network Analyst: Closest Facility (or Cost Distance)", "Network Analyst / Spatial Analyst > Distance"],
      bord: ["Layout + Graphs + Data Driven Pages", "View > Layout / View > Graphs"]
    },
    pro: {
      zonal: ["Zonal Statistics as Table", "Spatial Analyst Tools > Zonal"],
      compte: ["Summarize Within", "Analysis Tools > Summarize"],
      jointure: ["Add Join", "Contents: Joins and Relates"],
      calcul: ["Calculate Field", "Attribute table"],
      evac: ["Closest Facility (or Distance Accumulation)", "Analysis > Network Analysis / Spatial Analyst > Distance"],
      bord: ["Charts + Layout + Map Series", "Data > Create Chart / Insert > New Layout"]
    },
    qgis: {
      zonal: ["Zonal statistics", "Processing Toolbox > Raster analysis"],
      compte: ["Count points in polygon", "Vector > Analysis Tools"],
      jointure: ["Joins (layer properties)", "Layer Properties > Joins"],
      calcul: ["Field Calculator", "Attribute table"],
      evac: ["Shortest path (point to layer)", "Processing Toolbox > Network analysis"],
      bord: ["Print Layout + Atlas + DataPlotly", "Project > New Print Layout"]
    }
  };

  var CODE = '<pre><code># Évalue le registre : criticité = P × I, puis niveau selon les seuils\n# (fonctionne dans la fenêtre Python d\'ArcMap, d\'ArcGIS Pro et de QGIS)\nimport io\nsrc = r"C:\\ENIV\\TP\\Tables\\registre_risques.csv"\ndst = r"C:\\ENIV\\TP\\Sorties\\registre_evalue.csv"\n\ndef niveau(c):\n    if c &gt;= 15: return u"Critique"\n    if c &gt;= 10: return u"Eleve"\n    if c &gt;= 5: return u"Moyen"\n    return u"Faible"\n\nlignes = io.open(src, encoding="utf-8").read().splitlines()\nentete = lignes[0].split(u";")\niP, iI = entete.index(u"P"), entete.index(u"I")\niC, iN = entete.index(u"CRITICITE"), entete.index(u"NIVEAU")\nsortie = [lignes[0]]\nfor ligne in lignes[1:]:\n    v = ligne.split(u";")\n    c = int(v[iP]) * int(v[iI])\n    v[iC], v[iN] = u"%d" % c, niveau(c)\n    sortie.append(u";".join(v))\n    print(u"%s %-14s P=%s I=%s C=%2d %s" % (v[0], v[2], v[iP], v[iI], c, v[iN]))\nio.open(dst, "w", encoding="utf-8").write(u"\\n".join(sortie) + u"\\n")</code></pre>';

  var LOG = {
    arcmap: { cours: "COURS", id: "n10", numero: 10, risques: "n8" },
    pro: { cours: "COURS_PRO", id: "p11", numero: 11, risques: "p8" },
    qgis: { cours: "COURS_QGIS", id: "q12", numero: 12, risques: "q8" }
  };

  function matrice(t) {
    var coul = function (c) { return c >= 15 ? "#c0392b" : c >= 10 ? "#e67e22" : c >= 5 ? "#f1c40f" : "#27ae60"; };
    var h = '<table class="tab"><tr><th>' + t.mat[0] + ' ↓ / ' + t.mat[1] + ' ' + (t.mat[2] || '→') + '</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>';
    for (var p = 5; p >= 1; p--) {
      h += '<tr><th>' + p + '</th>';
      for (var i = 1; i <= 5; i++) h += '<td style="background:' + coul(p * i) + ';color:#111;text-align:center;font-weight:600">' + (p * i) + '</td>';
      h += '</tr>';
    }
    return h + '</table>';
  }

  var TXT = {};

  TXT.fr = {
    th: ["Étape", "Outil", "Où le trouver"],
    etapes: { zonal: "Probabilité par commune", compte: "Enjeux exposés par commune", jointure: "Relier le registre aux communes", calcul: "Criticité P × I", evac: "Itinéraires vers les sites refuges", bord: "Tableau de bord et suivi" },
    mat: ["Probabilité", "Impact"],
    niveau: { titre: "Gestion des risques : du diagnostic SIG à l'action", resume: "Le cycle en 5 étapes (identifier, évaluer, planifier, agir, suivre) appliqué aux risques naturels de Tlemcen : matrice probabilité × impact, registre des risques, plans de réponse et tableau de bord SIG." },
    l1: { titre: "Le cycle de gestion des risques", objectifs: ["Connaître les 5 étapes de la gestion des risques", "Distinguer probabilité, impact, criticité et risque résiduel", "Situer les cartes SIG des niveaux précédents dans le cycle"],
      corps: '<p>Les cartes d\'aléas et de vulnérabilité ne suffisent pas : il faut décider <b>quoi faire</b>, <b>qui</b> le fait, <b>quand</b>, et vérifier que cela a marché. C\'est la <b>gestion des risques</b>, un cycle en 5 étapes qui se répète.</p><table class="tab"><tr><th>Étape</th><th>Question</th><th>Apport du SIG</th></tr><tr><td><b>1. Identifier</b></td><td>Que peut-il arriver, où et pourquoi ?</td><td>Inventaire des événements passés, cartes d\'aléas (niveaux Hydrologie et Risques)</td></tr><tr><td><b>2. Évaluer</b></td><td>Quels risques comptent le plus ?</td><td>Probabilité par zone, enjeux exposés, matrice probabilité × impact</td></tr><tr><td><b>3. Planifier la réponse</b></td><td>Que peut-on faire ?</td><td>Choix des mesures, zones à interdire, itinéraires d\'évacuation, sites refuges</td></tr><tr><td><b>4. Agir</b></td><td>Qui agit, quand, avec quels moyens ?</td><td>Registre des risques : responsable, échéance, budget, statut</td></tr><tr><td><b>5. Suivre et réviser</b></td><td>La réponse a-t-elle marché ?</td><td>Mise à jour des cartes après chaque événement, risque résiduel, nouveaux risques</td></tr></table><h3>Vocabulaire</h3><ul><li><b>Probabilité (P)</b> : chance que l\'événement se produise, notée de 1 (rare) à 5 (presque certain).</li><li><b>Impact (I)</b> : gravité des conséquences sur les personnes, les biens et les services, de 1 (faible) à 5 (catastrophique).</li><li><b>Criticité</b> = P × I, de 1 à 25. Des <b>seuils</b> fixent les niveaux : faible, moyen, élevé, critique.</li><li><b>Responsable du risque</b> : l\'organisme qui doit agir (APC, protection civile, forêts, hydraulique, travaux publics…).</li><li><b>Plan de contingence</b> : ce qu\'on fait si l\'événement arrive malgré tout (alerte, évacuation, secours).</li><li><b>Risque résiduel</b> : le risque qui reste après les mesures.</li></ul><p>En Algérie, la loi 04-20 du 25 décembre 2004 sur la prévention des risques majeurs prévoit des plans de prévention par risque ; le SIG en fournit la base cartographique.</p>',
      exercice: '<ol><li>Pour chaque aléa étudié (inondation, feux, séisme, tsunami, glissement), écrivez un exemple pour chacune des 5 étapes.</li><li>Ouvrez <code>registre_risques.csv</code> et repérez dans les colonnes ce qui correspond à chaque étape.</li></ol>' },
    l2: { titre: "Évaluer : matrice probabilité × impact dans le SIG", objectifs: ["Noter la probabilité et l'impact par commune à partir des cartes", "Calculer la criticité et la classer par seuils", "Cartographier le registre des risques"],
      corps: '<h3>Matrice de criticité</h3>',
      apres: '<p>Seuils : 1–4 <b>faible</b> (accepter et surveiller), 5–9 <b>moyen</b> (mesures à planifier), 10–14 <b>élevé</b> (mesures prioritaires), 15–25 <b>critique</b> (action immédiate).</p><h3>Du SIG aux notes P et I</h3><ol><li><b>Probabilité</b> : statistiques zonales de la carte d\'aléa (classes 1 à 5) par commune ; arrondissez la moyenne, ou prenez la classe majoritaire.</li><li><b>Impact</b> : comptez les enjeux exposés en classe 4 ou 5 (écoles, population, routes) et convertissez en note, par exemple 0 école = 1, 1 = 3, 2 ou plus = 5, puis ajustez avec la population.</li><li>Reportez P et I dans le <b>registre</b> <code>TP\\Tables\\registre_risques.csv</code> (12 risques fictifs), calculez la criticité, puis joignez le registre aux communes par <code>CODE_COM</code>.</li></ol>',
      script: '<p>Le script suivant calcule la criticité et le niveau de chaque ligne du registre :</p>',
      exercice: '<ol><li>Calculez P pour l\'inondation dans chaque commune à partir de votre carte du niveau Risques.</li><li>Lancez le script, puis joignez <code>registre_evalue.csv</code> aux communes et faites une carte des risques critiques et élevés.</li><li>Placez les 12 risques dans la matrice : lesquels sont critiques ?</li></ol>' },
    l3: { titre: "Planifier, agir, suivre : du registre au tableau de bord", objectifs: ["Choisir une stratégie adaptée à chaque risque", "Préparer un plan de contingence avec le SIG", "Suivre les mesures et le risque résiduel"],
      corps: '<h3>4 stratégies de réponse</h3><table class="tab"><tr><th>Stratégie</th><th>Principe</th><th>Exemple à Tlemcen (fictif)</th></tr><tr><td><b>Éviter</b></td><td>Supprimer l\'exposition</td><td>Interdire de construire sur les marnes instables (R08)</td></tr><tr><td><b>Réduire</b></td><td>Baisser P ou I</td><td>Débroussaillage et pistes pare-feu (R03), digue sur l\'oued (R01)</td></tr><tr><td><b>Transférer</b></td><td>Faire porter le coût par un autre</td><td>Assurance catastrophes naturelles (R06)</td></tr><tr><td><b>Accepter</b></td><td>Surveiller sans mesure lourde</td><td>Feux de maquis surveillés depuis la tour de guet (R04)</td></tr></table><h3>Plan de contingence</h3><p>Si l\'événement arrive : qui alerte, qui évacue, par où, vers où ? Avec le SIG : sites refuges (écoles hors zone, terrains au-dessus de 10 m pour le tsunami), <b>itinéraires d\'évacuation</b> les plus courts, routes coupées à éviter, nombre de personnes à évacuer par quartier.</p><h3>Agir et suivre</h3><ul><li>Dans le registre, chaque mesure a un <b>responsable</b>, une <b>échéance</b> et un <b>statut</b> (à lancer, prévu, en cours, terminé).</li><li>Après chaque événement (crue, feu), mettez à jour les couches d\'inventaire et revoyez P et I : c\'est la <b>révision</b>.</li><li>Notez le <b>risque résiduel</b> après mesure (nouvelle note P × I) et ajoutez les <b>nouveaux risques</b>.</li><li>Un <b>tableau de bord</b> (carte + graphiques + tableau) montre l\'avancement aux décideurs.</li></ul>',
      exercice: '<ol><li>Vérifiez la stratégie choisie pour chaque risque du registre ; proposez-en une autre pour deux risques.</li><li>Pour R09 (tsunami), cartographiez les itinéraires d\'évacuation des enjeux vers les zones au-dessus de 10 m.</li><li>Ajoutez au registre les colonnes <code>P_RES</code>, <code>I_RES</code> et <code>CRIT_RES</code> (risque résiduel) et notez l\'effet attendu des mesures.</li><li>Composez un tableau de bord A3 : carte des niveaux, graphique des risques par statut, tableau des 5 risques prioritaires.</li></ol>' },
    quiz: [
      { question: "Quelle est la bonne suite des étapes de la gestion des risques ?", choix: ["Agir, identifier, évaluer, suivre, planifier", "Identifier, évaluer, planifier, agir, suivre", "Évaluer, agir, identifier, planifier, suivre", "Planifier, suivre, agir, évaluer, identifier"], bonne: 1, explication: "On identifie, on évalue, on planifie la réponse, on agit, puis on suit et on révise." },
      { question: "Un risque avec P = 4 et I = 4 a une criticité de :", choix: ["8", "16, niveau critique", "4, niveau faible", "12, niveau élevé"], bonne: 1, explication: "4 × 4 = 16, au-dessus du seuil de 15." },
      { question: "Interdire de construire sur une zone de glissement est une stratégie :", choix: ["D'évitement", "De transfert", "D'acceptation", "De suivi"], bonne: 0, explication: "On supprime l'exposition des nouveaux enjeux." },
      { question: "L'assurance catastrophes naturelles est une stratégie :", choix: ["D'évitement", "De réduction", "De transfert", "D'acceptation"], bonne: 2, explication: "Le coût des dommages est porté par l'assureur." },
      { question: "Le risque résiduel est :", choix: ["Le risque avant toute mesure", "Le risque qui reste après les mesures", "Un risque nouveau", "Un risque sans responsable"], bonne: 1, explication: "Aucune mesure ne supprime totalement le risque." },
      { question: "Quel outil SIG donne la probabilité moyenne d'un aléa par commune ?", choix: ["Statistiques zonales", "Zone tampon", "Géoréférencement", "Étiquetage"], bonne: 0, explication: "Les statistiques zonales résument un raster dans chaque polygone." }
    ]
  };

  TXT.en = {
    th: ["Step", "Tool", "Where to find it"],
    etapes: { zonal: "Probability per municipality", compte: "Exposed assets per municipality", jointure: "Link the register to municipalities", calcul: "Criticality P × I", evac: "Routes to refuge sites", bord: "Dashboard and monitoring" },
    mat: ["Probability", "Impact"],
    niveau: { titre: "Risk management: from GIS diagnosis to action", resume: "The 5-step cycle (identify, assess, plan, act, review) applied to the natural hazards of Tlemcen: probability × impact matrix, risk register, response plans and GIS dashboard." },
    l1: { titre: "The risk management cycle", objectifs: ["Know the 5 steps of risk management", "Tell probability, impact, criticality and residual risk apart", "Place the GIS maps of the previous levels in the cycle"],
      corps: '<p>Hazard and vulnerability maps are not enough: you must decide <b>what to do</b>, <b>who</b> does it, <b>when</b>, and check that it worked. This is <b>risk management</b>, a 5-step cycle that repeats.</p><table class="tab"><tr><th>Step</th><th>Question</th><th>What GIS brings</th></tr><tr><td><b>1. Identify</b></td><td>What could happen, where and why?</td><td>Inventory of past events, hazard maps (Hydrology and Hazards levels)</td></tr><tr><td><b>2. Assess</b></td><td>Which risks matter most?</td><td>Probability per area, exposed assets, probability × impact matrix</td></tr><tr><td><b>3. Plan the response</b></td><td>What can we do?</td><td>Choice of measures, no-build areas, evacuation routes, refuge sites</td></tr><tr><td><b>4. Act</b></td><td>Who acts, when, with what means?</td><td>Risk register: owner, due date, budget, status</td></tr><tr><td><b>5. Review</b></td><td>Did the response work?</td><td>Map updates after each event, residual risk, new risks</td></tr></table><h3>Vocabulary</h3><ul><li><b>Probability (P)</b>: the chance that the event happens, scored from 1 (rare) to 5 (almost certain).</li><li><b>Impact (I)</b>: how serious the consequences are for people, property and services, from 1 (minor) to 5 (catastrophic).</li><li><b>Criticality</b> = P × I, from 1 to 25. <b>Thresholds</b> set the levels: low, medium, high, critical.</li><li><b>Risk owner</b>: the body that must act (municipality, civil protection, forestry, water services, public works…).</li><li><b>Contingency plan</b>: what you do if the event happens anyway (warning, evacuation, rescue).</li><li><b>Residual risk</b>: the risk that remains after the measures.</li></ul><p>In Algeria, law 04-20 of 25 December 2004 on the prevention of major risks provides for prevention plans for each risk; GIS supplies their mapping base.</p>',
      exercice: '<ol><li>For each hazard studied (flood, fire, earthquake, tsunami, landslide), write an example for each of the 5 steps.</li><li>Open <code>registre_risques.csv</code> and find which columns match each step.</li></ol>' },
    l2: { titre: "Assess: probability × impact matrix in GIS", objectifs: ["Score probability and impact per municipality from the maps", "Compute criticality and classify it with thresholds", "Map the risk register"],
      corps: '<h3>Criticality matrix</h3>',
      apres: '<p>Thresholds: 1–4 <b>low</b> (accept and monitor), 5–9 <b>medium</b> (plan measures), 10–14 <b>high</b> (priority measures), 15–25 <b>critical</b> (immediate action).</p><h3>From GIS to P and I scores</h3><ol><li><b>Probability</b>: zonal statistics of the hazard map (classes 1 to 5) per municipality; round the mean, or take the majority class.</li><li><b>Impact</b>: count the assets exposed in class 4 or 5 (schools, population, roads) and turn it into a score, for example 0 school = 1, 1 = 3, 2 or more = 5, then adjust with the population.</li><li>Enter P and I in the <b>register</b> <code>TP\\Tables\\registre_risques.csv</code> (12 fictional risks), compute criticality, then join the register to the municipalities on <code>CODE_COM</code>.</li></ol>',
      script: '<p>The following script computes the criticality and level of each row of the register:</p>',
      exercice: '<ol><li>Compute P for flooding in each municipality from your Hazards-level map.</li><li>Run the script, then join <code>registre_evalue.csv</code> to the municipalities and map the critical and high risks.</li><li>Place the 12 risks in the matrix: which ones are critical?</li></ol>' },
    l3: { titre: "Plan, act, review: from the register to the dashboard", objectifs: ["Choose a suitable strategy for each risk", "Prepare a contingency plan with GIS", "Track the measures and the residual risk"],
      corps: '<h3>4 response strategies</h3><table class="tab"><tr><th>Strategy</th><th>Principle</th><th>Example in Tlemcen (fictional)</th></tr><tr><td><b>Avoid</b></td><td>Remove the exposure</td><td>Ban building on unstable marl (R08)</td></tr><tr><td><b>Reduce</b></td><td>Lower P or I</td><td>Brush clearing and firebreaks (R03), levee on the wadi (R01)</td></tr><tr><td><b>Transfer</b></td><td>Have someone else bear the cost</td><td>Natural disaster insurance (R06)</td></tr><tr><td><b>Accept</b></td><td>Monitor without heavy measures</td><td>Scrub fires watched from the lookout tower (R04)</td></tr></table><h3>Contingency plan</h3><p>If the event happens: who warns, who evacuates, which way, to where? With GIS: refuge sites (schools outside the hazard zone, ground above 10 m for a tsunami), shortest <b>evacuation routes</b>, cut roads to avoid, number of people to evacuate per district.</p><h3>Act and review</h3><ul><li>In the register, each measure has an <b>owner</b>, a <b>due date</b> and a <b>status</b> (to start, planned, in progress, done).</li><li>After each event (flood, fire), update the inventory layers and revise P and I: this is the <b>review</b>.</li><li>Record the <b>residual risk</b> after the measure (new P × I score) and add <b>new risks</b>.</li><li>A <b>dashboard</b> (map + charts + table) shows progress to decision makers.</li></ul>',
      exercice: '<ol><li>Check the strategy chosen for each risk in the register; propose another one for two risks.</li><li>For R09 (tsunami), map the evacuation routes from the assets to the areas above 10 m.</li><li>Add the columns <code>P_RES</code>, <code>I_RES</code> and <code>CRIT_RES</code> (residual risk) to the register and score the expected effect of the measures.</li><li>Build an A3 dashboard: map of levels, chart of risks by status, table of the 5 priority risks.</li></ol>' },
    quiz: [
      { question: "What is the right order of the risk management steps?", choix: ["Act, identify, assess, review, plan", "Identify, assess, plan, act, review", "Assess, act, identify, plan, review", "Plan, review, act, assess, identify"], explication: "You identify, assess, plan the response, act, then review." },
      { question: "A risk with P = 4 and I = 4 has a criticality of:", choix: ["8", "16, critical level", "4, low level", "12, high level"], explication: "4 × 4 = 16, above the threshold of 15." },
      { question: "Banning building on a landslide area is a strategy of:", choix: ["Avoidance", "Transfer", "Acceptance", "Monitoring"], explication: "It removes the exposure of new assets." },
      { question: "Natural disaster insurance is a strategy of:", choix: ["Avoidance", "Reduction", "Transfer", "Acceptance"], explication: "The cost of damage is borne by the insurer." },
      { question: "Residual risk is:", choix: ["The risk before any measure", "The risk that remains after the measures", "A new risk", "A risk without an owner"], explication: "No measure removes the risk completely." },
      { question: "Which GIS tool gives the mean hazard probability per municipality?", choix: ["Zonal statistics", "Buffer", "Georeferencing", "Labelling"], explication: "Zonal statistics summarise a raster within each polygon." }
    ]
  };

  TXT.ar = {
    th: ["الخطوة", "الأداة", "مكانها"],
    etapes: { zonal: "الاحتمال حسب البلدية", compte: "العناصر المعرّضة حسب البلدية", jointure: "ربط سجل المخاطر بالبلديات", calcul: "درجة الخطورة P × I", evac: "مسارات نحو مواقع الإيواء", bord: "لوحة القيادة والمتابعة" },
    mat: ["الاحتمال", "الأثر", "←"],
    niveau: { titre: "إدارة المخاطر: من التشخيص بنظم المعلومات الجغرافية إلى العمل", resume: "دورة الخطوات الخمس (التحديد، التقييم، التخطيط، التنفيذ، المتابعة) مطبّقة على الأخطار الطبيعية في تلمسان: مصفوفة الاحتمال × الأثر، سجل المخاطر، خطط الاستجابة ولوحة قيادة SIG." },
    l1: { titre: "دورة إدارة المخاطر", objectifs: ["معرفة الخطوات الخمس لإدارة المخاطر", "التمييز بين الاحتمال والأثر ودرجة الخطورة والخطر المتبقي", "وضع خرائط المستويات السابقة داخل الدورة"],
      corps: '<p>لا تكفي خرائط الأخطار والهشاشة: يجب أن نقرر <b>ماذا نفعل</b> و<b>من</b> يفعله و<b>متى</b>، ثم نتحقق من النتيجة. هذه هي <b>إدارة المخاطر</b>، دورة من خمس خطوات تتكرر.</p><table class="tab"><tr><th>الخطوة</th><th>السؤال</th><th>ما يقدّمه SIG</th></tr><tr><td><b>1. التحديد</b></td><td>ماذا قد يحدث، وأين، ولماذا؟</td><td>جرد الأحداث السابقة، خرائط الأخطار (مستويا الهيدرولوجيا والأخطار)</td></tr><tr><td><b>2. التقييم</b></td><td>أي المخاطر أهم؟</td><td>الاحتمال حسب المنطقة، العناصر المعرّضة، مصفوفة الاحتمال × الأثر</td></tr><tr><td><b>3. تخطيط الاستجابة</b></td><td>ماذا يمكننا أن نفعل؟</td><td>اختيار التدابير، المناطق الممنوعة من البناء، مسارات الإخلاء، مواقع الإيواء</td></tr><tr><td><b>4. التنفيذ</b></td><td>من يتدخل، ومتى، وبأي وسائل؟</td><td>سجل المخاطر: المسؤول، الأجل، الميزانية، الحالة</td></tr><tr><td><b>5. المتابعة والمراجعة</b></td><td>هل نجحت الاستجابة؟</td><td>تحديث الخرائط بعد كل حدث، الخطر المتبقي، المخاطر الجديدة</td></tr></table><h3>المصطلحات</h3><ul><li><b>الاحتمال (P)</b>: فرصة وقوع الحدث، من 1 (نادر) إلى 5 (شبه مؤكد).</li><li><b>الأثر (I)</b>: جسامة العواقب على الأشخاص والممتلكات والخدمات، من 1 (ضعيف) إلى 5 (كارثي).</li><li><b>درجة الخطورة</b> = P × I، من 1 إلى 25. تحدد <b>العتبات</b> المستويات: ضعيف، متوسط، مرتفع، حرج.</li><li><b>مالك الخطر</b>: الهيئة المكلفة بالتدخل (البلدية، الحماية المدنية، الغابات، الري، الأشغال العمومية…).</li><li><b>خطة الطوارئ</b>: ما نفعله إذا وقع الحدث رغم كل شيء (الإنذار، الإخلاء، الإسعاف).</li><li><b>الخطر المتبقي</b>: الخطر الذي يبقى بعد تطبيق التدابير.</li></ul><p>في الجزائر، ينص القانون 04-20 المؤرخ في 25 ديسمبر 2004 المتعلق بالوقاية من الأخطار الكبرى على مخططات وقاية لكل خطر؛ ويوفر SIG أساسها الخرائطي.</p>',
      exercice: '<ol><li>لكل خطر مدروس (فيضان، حرائق، زلزال، تسونامي، انزلاق)، اكتب مثالًا لكل خطوة من الخطوات الخمس.</li><li>افتح <code>registre_risques.csv</code> وحدّد الأعمدة الموافقة لكل خطوة.</li></ol>' },
    l2: { titre: "التقييم: مصفوفة الاحتمال × الأثر في SIG", objectifs: ["تنقيط الاحتمال والأثر لكل بلدية انطلاقًا من الخرائط", "حساب درجة الخطورة وتصنيفها حسب العتبات", "رسم خريطة سجل المخاطر"],
      corps: '<h3>مصفوفة الخطورة</h3>',
      apres: '<p>العتبات: 1–4 <b>ضعيف</b> (قبول ومراقبة)، 5–9 <b>متوسط</b> (تدابير يجب تخطيطها)، 10–14 <b>مرتفع</b> (تدابير ذات أولوية)، 15–25 <b>حرج</b> (تدخل فوري).</p><h3>من SIG إلى نقاط P وI</h3><ol><li><b>الاحتمال</b>: الإحصاءات النطاقية لخريطة الخطر (الفئات 1 إلى 5) لكل بلدية؛ قرّب المتوسط أو خذ الفئة الغالبة.</li><li><b>الأثر</b>: عُدّ العناصر المعرّضة في الفئة 4 أو 5 (مدارس، سكان، طرق) وحوّلها إلى نقطة، مثلًا 0 مدرسة = 1، 1 = 3، 2 أو أكثر = 5، ثم عدّل حسب عدد السكان.</li><li>سجّل P وI في <b>السجل</b> <code>TP\\Tables\\registre_risques.csv</code> (12 خطرًا افتراضيًا)، احسب درجة الخطورة، ثم اربط السجل بالبلديات عبر الحقل <code>CODE_COM</code>.</li></ol>',
      script: '<p>يحسب البرنامج التالي درجة الخطورة والمستوى لكل سطر من السجل:</p>',
      exercice: '<ol><li>احسب P للفيضان في كل بلدية انطلاقًا من خريطتك في مستوى الأخطار.</li><li>شغّل البرنامج، ثم اربط <code>registre_evalue.csv</code> بالبلديات وأنجز خريطة المخاطر الحرجة والمرتفعة.</li><li>ضع المخاطر الاثني عشر في المصفوفة: أيها حرج؟</li></ol>' },
    l3: { titre: "التخطيط والتنفيذ والمتابعة: من السجل إلى لوحة القيادة", objectifs: ["اختيار استراتيجية مناسبة لكل خطر", "إعداد خطة طوارئ بمساعدة SIG", "متابعة التدابير والخطر المتبقي"],
      corps: '<h3>أربع استراتيجيات للاستجابة</h3><table class="tab"><tr><th>الاستراتيجية</th><th>المبدأ</th><th>مثال في تلمسان (افتراضي)</th></tr><tr><td><b>التجنّب</b></td><td>إزالة التعرّض</td><td>منع البناء على المارن غير المستقر (R08)</td></tr><tr><td><b>التخفيف</b></td><td>خفض P أو I</td><td>تنظيف الأحراش ومسالك مضادة للنار (R03)، حاجز على الوادي (R01)</td></tr><tr><td><b>النقل</b></td><td>تحميل التكلفة لطرف آخر</td><td>تأمين الكوارث الطبيعية (R06)</td></tr><tr><td><b>القبول</b></td><td>المراقبة دون تدابير ثقيلة</td><td>حرائق الأحراش تراقب من برج المراقبة (R04)</td></tr></table><h3>خطة الطوارئ</h3><p>إذا وقع الحدث: من ينذر، من يُخلي، من أي طريق، وإلى أين؟ بواسطة SIG: مواقع الإيواء (مدارس خارج منطقة الخطر، أراضٍ فوق 10 م في حالة التسونامي)، أقصر <b>مسارات الإخلاء</b>، الطرق المقطوعة التي يجب تجنبها، وعدد الأشخاص الواجب إخلاؤهم في كل حي.</p><h3>التنفيذ والمتابعة</h3><ul><li>في السجل، لكل تدبير <b>مسؤول</b> و<b>أجل</b> و<b>حالة</b> (للإطلاق، مبرمج، جارٍ، منتهٍ).</li><li>بعد كل حدث (فيضان، حريق)، حدّث طبقات الجرد وراجع P وI: هذه هي <b>المراجعة</b>.</li><li>سجّل <b>الخطر المتبقي</b> بعد التدبير (نقطة P × I جديدة) وأضف <b>المخاطر الجديدة</b>.</li><li>تعرض <b>لوحة القيادة</b> (خريطة + رسوم بيانية + جدول) تقدّم العمل لصنّاع القرار.</li></ul>',
      exercice: '<ol><li>تحقق من الاستراتيجية المختارة لكل خطر في السجل؛ اقترح استراتيجية أخرى لخطرين.</li><li>بالنسبة لـ R09 (تسونامي)، ارسم مسارات إخلاء العناصر المعرّضة نحو المناطق التي يفوق ارتفاعها 10 م.</li><li>أضف إلى السجل الأعمدة <code>P_RES</code> و<code>I_RES</code> و<code>CRIT_RES</code> (الخطر المتبقي) وقدّر الأثر المنتظر للتدابير.</li><li>أنجز لوحة قيادة بحجم A3: خريطة المستويات، رسم بياني للمخاطر حسب الحالة، جدول المخاطر الخمسة ذات الأولوية.</li></ol>' },
    quiz: [
      { question: "ما الترتيب الصحيح لخطوات إدارة المخاطر؟", choix: ["التنفيذ، التحديد، التقييم، المتابعة، التخطيط", "التحديد، التقييم، التخطيط، التنفيذ، المتابعة", "التقييم، التنفيذ، التحديد، التخطيط، المتابعة", "التخطيط، المتابعة، التنفيذ، التقييم، التحديد"], explication: "نحدّد، ثم نقيّم، ثم نخطط للاستجابة، ثم ننفذ، ثم نتابع ونراجع." },
      { question: "خطر قيمة P فيه 4 وI فيه 4 درجة خطورته:", choix: ["8", "16، مستوى حرج", "4، مستوى ضعيف", "12، مستوى مرتفع"], explication: "4 × 4 = 16، فوق عتبة 15." },
      { question: "منع البناء في منطقة انزلاق هو استراتيجية:", choix: ["تجنّب", "نقل", "قبول", "متابعة"], explication: "نزيل تعرّض العناصر الجديدة." },
      { question: "تأمين الكوارث الطبيعية هو استراتيجية:", choix: ["تجنّب", "تخفيف", "نقل", "قبول"], explication: "تتحمّل شركة التأمين تكلفة الأضرار." },
      { question: "الخطر المتبقي هو:", choix: ["الخطر قبل أي تدبير", "الخطر الذي يبقى بعد التدابير", "خطر جديد", "خطر بلا مسؤول"], explication: "لا يوجد تدبير يزيل الخطر نهائيًا." },
      { question: "أي أداة SIG تعطي متوسط احتمال الخطر لكل بلدية؟", choix: ["الإحصاءات النطاقية", "النطاق العازل", "الإسناد الجغرافي", "التسمية"], explication: "تلخّص الإحصاءات النطاقية الشبكة داخل كل مضلع." }
    ]
  };

  TXT.ber = {
    th: ["Amecwar", "Afecku", "Anda ara t-tafeḍ"],
    etapes: { zonal: "Tagnit i yal tiɣiwant", compte: "Ayen yettwasekfen i yal tiɣiwant", jointure: "Qqen aɣmis n yiɣṛisen ɣer tɣiwanin", calcul: "Taẓeɣt P × I", evac: "Iberdan ɣer yidgan n tɣimit", bord: "Tafelwit n usefrek d uḍfar" },
    mat: ["Tagnit", "Asemdu"],
    niveau: { titre: "Asefrek n yiɣṛisen: seg tesleḍt SIG ɣer tigawt", resume: "Tazzya n 5 n yimecwaren (af-d, sezmel, heggi, xdem, ḍfer) ɣef yiɣṛisen igamanen n Tlemsan: tamatrict tagnit × asemdu, aɣmis n yiɣṛisen, iɣawasen n tririt d tfelwit n usefrek SIG." },
    l1: { titre: "Tazzya n usefrek n yiɣṛisen", objectifs: ["Issin 5 n yimecwaren n usefrek n yiɣṛisen", "Fren gar tegnit, usemdu, teẓeɣt d uɣṛis i d-yeqqimen", "Sers tikarḍiwin SIG n yiswiren yezrin deg tezzya"],
      corps: '<p>Tikarḍiwin n yiɣilifen d tsedrayt ur kfint ara: ilaq ad nefru <b>d acu ara nexdem</b>, <b>anwa</b> ara t-yexdmen, <b>melmi</b>, syen ad nesneqqed ma yedda. D wa i d <b>asefrek n yiɣṛisen</b>, tazzya n 5 n yimecwaren i yettuɣalen.</p><table class="tab"><tr><th>Amecwar</th><th>Asteqsi</th><th>Ayen i d-yettak SIG</th></tr><tr><td><b>1. Af-d</b></td><td>D acu i izemren ad d-yeḍru, anda, acuɣer?</td><td>Tabdart n tedyanin yezrin, tikarḍiwin n yiɣilifen (iswiren n tesnamant d yiɣṛisen)</td></tr><tr><td><b>2. Sezmel</b></td><td>Anwi iɣṛisen i yesɛan azal ugar?</td><td>Tagnit i yal tamnaḍt, ayen yettwasekfen, tamatrict tagnit × asemdu</td></tr><tr><td><b>3. Heggi tiririt</b></td><td>D acu i nezmer ad t-nexdem?</td><td>Afran n yisekkilen, timnaḍin ur nettwabna ara, iberdan n tuffɣa, idgan n tɣimit</td></tr><tr><td><b>4. Xdem</b></td><td>Anwa ara yexdmen, melmi, s wacu?</td><td>Aɣmis n yiɣṛisen: amesul, tallit, idrimen, addad</td></tr><tr><td><b>5. Ḍfer syen ales</b></td><td>Tiririt tedda?</td><td>Aleqqem n tkerḍiwin deffir yal tadyant, aɣṛis i d-yeqqimen, iɣṛisen imaynuten</td></tr></table><h3>Amawal</h3><ul><li><b>Tagnit (P)</b>: tazmert n tedyant ad d-teḍru, seg 1 (qlil) ar 5 (qrib d tidet).</li><li><b>Asemdu (I)</b>: tazurt n yigmaḍ ɣef yimdanen, ayla d yimeẓla, seg 1 (drus) ar 5 (d tawaɣit).</li><li><b>Taẓeɣt</b> = P × I, seg 1 ar 25. <b>Tilisa</b> sbadunt iswiren: drus, alemmas, meqqer, d uɛwiq.</li><li><b>Amesul n uɣṛis</b>: tasbestit i ilaqen ad texdem (tiɣiwant, ammesten aɣerfan, tizgwa, aman, imahilen n tmurt…).</li><li><b>Aɣawas n tmeɣbunt</b>: ayen ara nexdem ma tedra tedyant ɣas akken (alɣu, tuffɣa, tallelt).</li><li><b>Aɣṛis i d-yeqqimen</b>: aɣṛis i d-yeqqimen deffir yisekkilen.</li></ul><p>Deg Lezzayer, alugen 04-20 n 25 Dujember 2004 ɣef usmetti n yiɣṛisen igamanen yessenqed iɣawasen n usmetti i yal aɣṛis; SIG yettak-asen talɣa n tkarḍa.</p>',
      exercice: '<ol><li>I yal aɣilif i nɣer (taḥemlet, times, azelzal, tsunami, aɣelluy), aru amedya i yal yiwen seg 5 n yimecwaren.</li><li>Ldi <code>registre_risques.csv</code> syen af-d tigejda i yemṣadan d yal amecwar.</li></ol>' },
    l2: { titre: "Sezmel: tamatrict tagnit × asemdu deg SIG", objectifs: ["Efk tazmilt n tegnit d usemdu i yal tiɣiwant seg tkerḍiwin", "Siḍen taẓeɣt syen bḍu-tt s tlisa", "Sekken aɣmis n yiɣṛisen"],
      corps: '<h3>Tamatrict n teẓeɣt</h3>',
      apres: '<p>Tilisa: 1–4 <b>drus</b> (qbel syen ḍfer), 5–9 <b>alemmas</b> (isekkilen ara yettwaheggan), 10–14 <b>meqqer</b> (isekkilen s tazwart), 15–25 <b>uɛwiq</b> (tigawt tusridt).</p><h3>Seg SIG ɣer tzmilin P d I</h3><ol><li><b>Tagnit</b>: tamsizdigt n temnaḍt n tkarḍa n uɣilif (taggayin 1 ar 5) i yal tiɣiwant; sali talemmast, neɣ ṭṭef taggayt yugaren.</li><li><b>Asemdu</b>: siḍen ayen yettwasekfen deg taggayt 4 neɣ 5 (iɣerbazen, imezdaɣ, iberdan) syen err-it d tazmilt, amedya 0 n uɣerbaz = 1, 1 = 3, 2 neɣ ugar = 5, syen seggem s umḍan n yimezdaɣ.</li><li>Aru P d I deg <b>uɣmis</b> <code>TP\\Tables\\registre_risques.csv</code> (12 n yiɣṛisen isuganen), siḍen taẓeɣt, syen qqen aɣmis ɣer tɣiwanin s <code>CODE_COM</code>.</li></ol>',
      script: '<p>Askript-a yessiḍen taẓeɣt d uswir n yal izirig n uɣmis:</p>',
      exercice: '<ol><li>Siḍen P i tḥemlet deg yal tiɣiwant seg tkarḍa-k n uswir n yiɣṛisen.</li><li>Selkem askript, syen qqen <code>registre_evalue.csv</code> ɣer tɣiwanin syen xdem takarḍa n yiɣṛisen uɛwiqen d imeqqranen.</li><li>Sers 12 n yiɣṛisen deg tmatrict: anwi i d iɛwiqen?</li></ol>' },
    l3: { titre: "Heggi, xdem, ḍfer: seg uɣmis ɣer tfelwit n usefrek", objectifs: ["Fren tastratijit i iwulmen i yal aɣṛis", "Heggi aɣawas n tmeɣbunt s SIG", "Ḍfer isekkilen d uɣṛis i d-yeqqimen"],
      corps: '<h3>4 n tastratijiyin n tririt</h3><table class="tab"><tr><th>Tastratijit</th><th>Tamesnawt</th><th>Amedya deg Tlemsan (asugan)</th></tr><tr><td><b>Ǧǧ</b></td><td>Kkes asekfu</td><td>Agdel n lebni ɣef marne ur nerkid ara (R08)</td></tr><tr><td><b>Senqes</b></td><td>Ssenqes P neɣ I</td><td>Asizdeg n yimɣan d yiberdan mgal times (R03), aḥeǧǧab ɣef wasif (R01)</td></tr><tr><td><b>Sniqel</b></td><td>Ad yerfed wayeḍ ssuma</td><td>Taḍmant n twaɣiwin tigamanin (R06)</td></tr><tr><td><b>Qbel</b></td><td>Ḍfer war isekkilen ẓẓayen</td><td>Times n yimɣan ttwaḍefrent seg uɣerfi n tɛessast (R04)</td></tr></table><h3>Aɣawas n tmeɣbunt</h3><p>Ma tedra tedyant: anwa ara yalɣun, anwa ara yessuffɣen, s anida, ɣer anida? S SIG: idgan n tɣimit (iɣerbazen beṛṛa n temnaḍt n uɣilif, akal nnig 10 m i tsunami), <b>iberdan n tuffɣa</b> wezzilen ugar, iberdan yettwagzmen ara nǧǧ, amḍan n yimdanen ara yettwassuffɣen i yal taɣiwant.</p><h3>Xdem syen ḍfer</h3><ul><li>Deg uɣmis, yal asekkil yesɛa <b>amesul</b>, <b>tallit</b> d <b>waddad</b> (ad yebdu, yettwaheyya, iteddu, yekfa).</li><li>Deffir yal tadyant (taḥemlet, times), leqqem tissiyin n tebdart syen ales P d I: d wa i d <b>aɛiwed</b>.</li><li>Aru <b>aɣṛis i d-yeqqimen</b> deffir usekkil (tazmilt tamaynut P × I) syen rnu <b>iɣṛisen imaynuten</b>.</li><li><b>Tafelwit n usefrek</b> (takarḍa + idiagramen + tafelwit) tesskan asfari i yimeskaren n tɣessa.</li></ul>',
      exercice: '<ol><li>Senqed tastratijit yettwafernen i yal aɣṛis deg uɣmis; sumer tayeḍ i sin n yiɣṛisen.</li><li>I R09 (tsunami), sekken iberdan n tuffɣa seg wayen yettwasekfen ɣer temnaḍin nnig 10 m.</li><li>Rnu i uɣmis tigejda <code>P_RES</code>, <code>I_RES</code> d <code>CRIT_RES</code> (aɣṛis i d-yeqqimen) syen efk tazmilt i usemdu yettwarǧan n yisekkilen.</li><li>Suddes tafelwit n usefrek A3: takarḍa n yiswiren, adiagram n yiɣṛisen s waddad, tafelwit n 5 n yiɣṛisen s tazwart.</li></ol>' },
    quiz: [
      { question: "D acu i d amizwer iṣeḥḥan n yimecwaren n usefrek n yiɣṛisen?", choix: ["Xdem, af-d, sezmel, ḍfer, heggi", "Af-d, sezmel, heggi, xdem, ḍfer", "Sezmel, xdem, af-d, heggi, ḍfer", "Heggi, ḍfer, xdem, sezmel, af-d"], explication: "Nettaf-d, nsezmal, nheggi tiririt, nxeddem, syen nḍeffer u nɛawed." },
      { question: "Aɣṛis s P = 4 d I = 4 yesɛa taẓeɣt n:", choix: ["8", "16, aswir uɛwiq", "4, aswir drus", "12, aswir meqqer"], explication: "4 × 4 = 16, nnig talast n 15." },
      { question: "Agdel n lebni deg temnaḍt n uɣelluy n wakal d tastratijit n:", choix: ["Uǧǧa", "Usniqel", "Uqbal", "Uḍfar"], explication: "Nekkes asekfu n wayen amaynut." },
      { question: "Taḍmant n twaɣiwin tigamanin d tastratijit n:", choix: ["Uǧǧa", "Usenqes", "Usniqel", "Uqbal"], explication: "Ssuma n yixsaren yettwarfed sɣur tanmahalt n teḍmant." },
      { question: "Aɣṛis i d-yeqqimen d:", choix: ["Aɣṛis uqbel yal asekkil", "Aɣṛis i d-yeqqimen deffir yisekkilen", "Aɣṛis amaynut", "Aɣṛis war amesul"], explication: "Ulac asekkil i yekksen aɣṛis s wudem ummid." },
      { question: "Anwa afecku SIG i d-yettaken tagnit talemmast n uɣilif i yal tiɣiwant?", choix: ["Tamsizdigt n temnaḍt (zonal statistics)", "Buffer", "Asideg ameḍrar", "Tibzimin"], explication: "Tamsizdigt n temnaḍt tesgezzal raster daxel n yal aɣunam." }
    ]
  };

  var LECONS = [
    { cle: "l1", duree: "30 min", outils: [] },
    { cle: "l2", duree: "45 min", outils: ["zonal", "compte", "jointure", "calcul"] },
    { cle: "l3", duree: "45 min", outils: ["evac", "bord"] }
  ];

  function tableau(t, outils, cles) {
    if (!cles.length) return "";
    var h = '<table class="tab"><tr><th>' + t.th[0] + '</th><th>' + t.th[1] + '</th><th>' + t.th[2] + '</th></tr>';
    cles.forEach(function (k) { h += '<tr><td>' + t.etapes[k] + '</td><td><b>' + outils[k][0] + '</b></td><td><i>' + outils[k][1].replace(/>/g, "&gt;") + '</i></td></tr>'; });
    return h + '</table>';
  }

  function contenu(lang, logCle, L) {
    var t = TXT[lang], x = t[L.cle], log = LOG[logCle];
    var h = x.corps;
    if (L.cle === "l1") {
      var lib = { fr: "Revoir les cartes d'aléas", en: "Review the hazard maps", ar: "مراجعة خرائط الأخطار", ber: "Ales tamuɣli ɣef tkerḍiwin n yiɣilifen" }[lang];
      h += '<p><a class="btn" href="#' + log.risques + '">' + lib + '</a></p>';
    }
    if (L.cle === "l2") h += matrice(t) + x.apres + tableau(t, OUTILS[logCle], L.outils) + x.script + CODE;
    if (L.cle === "l3") h = tableau(t, OUTILS[logCle], L.outils) + h;
    return h;
  }

  Object.keys(LOG).forEach(function (logCle) {
    var log = LOG[logCle], c = window[log.cours];
    if (!c || !c.niveaux) return;
    var fr = TXT.fr;
    if (!c.niveaux.some(function (n) { return n.id === log.id; })) {
      c.niveaux.push({
        id: log.id, numero: log.numero, titre: fr.niveau.titre, echelle: "1:50 000", resume: fr.niveau.resume,
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
