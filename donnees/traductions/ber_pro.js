/* Asuqel n ubrid ArcGIS Pro ɣer tmaziɣt (isekkilen ilatiniyen). Ifecka ttwaǧǧan s tegleẓit. */
window.TRAD = window.TRAD || {};
window.TRAD.ber = window.TRAD.ber || {};
var B = window.TRAD.ber;

/* ---------- Aswir 1 ---------- */
B.p1 = { titre: "Tazwart ɣer ArcGIS Pro", resume: "Asenfar .aprx, ribbon, igalisen Contents d Catalog, tikarḍiwin d tmuɣliwin 3D: amek ara tinigeḍ deg ugrudem.",
  quiz: [
    { question: "D acu i d asiɣzef n usenfar ArcGIS Pro?", choix: [".mxd", ".aprx", ".qgz", ".gdb"], explication: ".aprx yeṭṭef amkan n .mxd u yezmer ad yesɛu aṭas n tkerḍiwin d tsizzeltin." },
    { question: "Deg ArcGIS Pro, agbur n tissiyin n ArcMap yemṣada d ugalis:", choix: ["Catalog", "Geoprocessing", "Contents", "Symbology"], explication: "Agalis Contents yebder tissiyin n tkarḍa yermden." },
    { question: "Anwa lqem n Python i yesseqdac ArcGIS Pro?", choix: ["Python 2.7", "Python 3", "Sin-nsen", "Ulac"], explication: "ArcGIS Pro yesseqdac Python 3 (tawennaḍt arcgispro-py3)." },
    { question: "Amek ara terreḍ takarḍa ɣer 3D?", choix: ["Ldi ArcScene", "View > Convert > To Local Scene", "Insert > New Layout", "Ur yezmir ara"], explication: "Tiscinin 3D llant deg usenfar, war aseɣzan nniḍen." }
  ] };
B["p1-l1"] = { titre: "Asenfar ArcGIS Pro d ugrudem-is", objectifs: ["Snulfu-d asenfar syen fhem ayen yellan deg-s", "Inig deg ribbon d yigalisen"],
  contenu: `
<p>ArcGIS Pro yeṭṭef amkan n ArcMap, ArcCatalog d ArcScene s <b>yiwen</b> n useɣzan n 64 bit. Amahil akk yettwasekles deg <b>usenfar</b> (<code>.aprx</code>) i yesdukkulen tikarḍiwin, tisizzeltin, tuqqniwin n yikaramen, geodatabase d tbwaṭ n yifecka s wudem amezwer.</p>
<table class="tab">
  <tr><th>ArcMap 10.8</th><th>ArcGIS Pro</th></tr>
  <tr><td>Arrat .mxd</td><td>Asenfar .aprx (aṭas n tkerḍiwin d tsizzeltin)</td></tr>
  <tr><td>Ifeggagen n yifecka</td><td><b>Ribbon</b> s yiccaren n umnaḍ (Map, Insert, Analysis, View, Format…)</td></tr>
  <tr><td>Agbur n tissiyin</td><td>Agalis <b>Contents</b></td></tr>
  <tr><td>ArcCatalog</td><td>Agalis <b>Catalog</b> yettwasekcmen</td></tr>
  <tr><td>ArcToolbox</td><td>Agalis <b>Geoprocessing</b> (iccer Analysis &gt; Tools)</td></tr>
  <tr><td>ArcScene / ArcGlobe</td><td><b>Tasɣent</b> tadigant neɣ tamaḍalant deg yiwen n usenfar</td></tr>
  <tr><td>Python 2.7</td><td>Python 3 (tawennaḍt arcgispro-py3)</td></tr>
</table>
<p>Deg usenker, fren <i>Map</i> (tamudemt tilemt s tkarḍa n wadda). Semmi asenfar <code>TP_ENIV</code> deg wadeg <code>C:\\ENIV\\Projets</code>. ArcGIS Pro yesnulfuy-d akaram s yiwen n yisem i yesɛan <code>TP_ENIV.aprx</code>, <code>TP_ENIV.gdb</code> d <code>TP_ENIV.atbx</code>.</p>
<div class="astuce"><b>Tixutert:</b> ma yella yeffeɣ ugalis, ales-as aldi seg yiccer <b>View</b> (Catalog, Contents, Geoprocessing…). Taqeffalt <i>Reset Panes</i> tettarra asuddes n tazwara.</div>`,
  exercice: `<ol>
  <li>Snulfu-d asenfar <code>TP_ENIV</code>.</li>
  <li>Deg ugalis Catalog, asiti ayeffus ɣef <i>Folders &gt; Add Folder Connection</i> syen fren <code>C:\\ENIV\\TP</code>.</li>
  <li>Zuɣer <code>Communes.shp</code> d <code>Routes.shp</code> ɣer tkarḍa, syen sekles asenfar.</li>
</ol>` };
B["p1-l2"] = { titre: "Tunigin, asnirem d 3D", objectifs: ["Seqdec afecku Explore d tcraḍ", "Err takarḍa d tasɣent 3D"],
  contenu: `
<p>Afecku <b>Explore</b> (iccer Map) yeṭṭef amkan n Zoom, Pan d Identify: azuɣer s usiti azelmaḍ = asenkez, tawrirt = asemɣer, asiti ɣef uferdis = asfaylu s tmeẓliwin-is.</p>
<ul>
  <li><b>Bookmarks</b>: iccer Map &gt; Bookmarks &gt; New Bookmark, akken ad tuɣaleḍ ɣer temnaḍt.</li>
  <li><b>Taskala</b>: aru-tt srid ddaw tmuɣli (md. <code>1:50,000</code>).</li>
  <li><b>Imsidag</b>: ttbanen ddaw ɣer yeffus; asiti ayeffus akken ad tbeddleḍ tayunt (DMS, tiseggiwin s tfezzit, MGRS…).</li>
</ul>
<p>I 3D: <b>View &gt; Convert &gt; To Local Scene</b>. Rnu MNT d <i>elevation surface</i> (deg Contents, Elevation Surfaces &gt; Add Elevation Source) syen efk asemɣer ubdid n 2 ar 3 akken ad twaliḍ akken iwata assaɣ n umdan.</p>`,
  exercice: `<ol>
  <li>Snulfu-d snat n tcraḍ: tamnaḍt n tezrawt akk d temdint tagejdant.</li>
  <li>Err takarḍa d tasɣent tadigant syen rnu <code>MNT_50m.asc</code> d elevation surface.</li>
  <li>Sers iɣerbazen s 3D syen ṭṭef tugna n tmuɣli.</li>
</ol>` };

/* ---------- Aswir 2 ---------- */
B.p2 = { titre: "Isefka d yinagrawen n yimsidag", resume: "File geodatabase, isenfaḍ, tifelwiyin d tuqqniwin, asenfel d usideg ameḍrar deg ArcGIS Pro.",
  quiz: [
    { question: "Anwa amasal n usekles yettwawellhen deg ArcGIS Pro?", choix: ["Shapefile", "File geodatabase (.gdb)", "Afaylu Excel", "KML"], explication: "File geodatabase yessefrak xir ismawen ɣezzifen, domains d tfelwiyin timeqqranin." },
    { question: "Tissi war .prj, nessen anagraw-is: anwa afecku ara tesqedceḍ?", choix: ["Project", "Define Projection", "Georeference", "XY Table To Point"], explication: "Define Projection yettaru anagraw war ma ibeddel imsidag." },
    { question: "Anta tengalt EPSG i yemṣadan d WGS 1984 UTM tamnaḍt 30N?", choix: ["4326", "30730", "32630", "3857"], explication: "32630; 30730 d Nord Sahara 1959 UTM 30N." },
    { question: "Deg yiccer Edit, i wacu i yelha ugraw Snapping?", choix: ["Ad yeṭṭef tugna n ugdil", "Ad yeqqen ixfawen ɣer yiferdisen yellan", "Ad yessifeḍ takarḍa", "Ad yesiḍen tiɣzi"], explication: "Snapping yessegzam ilmawen d users n yiferdisen ɣef wiyaḍ." },
    { question: "Deffir tuqqna, anta taqeffalt i yesneqden ma mṣadant tengalin?", choix: ["Validate Join", "Calculate Geometry", "Remove All Joins", "Refresh"], explication: "Validate Join yettak-d amḍan n yisekla yemṣadan." }
  ] };
B["p2-l1"] = { titre: "Geodatabase, inagrawen n yimsidag d yisenfaḍ", objectifs: ["Kter shapefiles ɣer file geodatabase", "Fren gar usbadu n usenfeḍ d usenfeḍ", "Fren anagraw i iwulmen i ugafa-lɣerb n Lezzayer"],
  contenu: `
<p>ArcGIS Pro yetteddu xir s <b>file geodatabase</b> (<code>.gdb</code>). Akken ad tketreḍ shapefiles n umahil: asiti ayeffus ɣef <code>TP_ENIV.gdb</code> &gt; <i>Import &gt; Feature Class(es)</i>, neɣ afecku <b>Feature Class To Geodatabase</b>.</p>
<p><b>Anagraw n yimsidag n tkarḍa</b> yettwasbadu deg <i>Map Properties &gt; Coordinate Systems</i> (asiti snat n tikkal ɣef « Map » deg Contents). Tissiyin ttwasnefḍent deg ubrid i uskan, maca imsiḍen n tiɣziwin d yimeccaq ilaq ad ttwaxedmen ɣef yisefka <b>yettwasenfḍen</b> s yimitren.</p>
<table class="tab">
  <tr><th>Anagraw</th><th>Tangalt EPSG</th><th>Aseqdec</th></tr>
  <tr><td>WGS 1984 (tiseggiwin)</td><td>4326</td><td>GPS, abeddel n yisefka, tikarḍiwin n web</td></tr>
  <tr><td>WGS 1984 UTM tamnaḍt 30N</td><td>32630</td><td>Tlemsan d lɣerb n tmurt (isefka n umahil)</td></tr>
  <tr><td>Nord Sahara 1959 UTM tamnaḍt 30N</td><td>30730</td><td>Tikarḍiwin tiṭubugrafiyin INCT</td></tr>
</table>
<ul>
  <li><b>Define Projection</b>: isefka ulac ɣur-sen .prj; tettiniḍ-asen deg anwa anagraw llan yimsidag-nsen.</li>
  <li><b>Project</b>: tesnulfuḍ-d anɣel deg unagraw nniḍen. Gar Nord Sahara 1959 d WGS 1984, fren <b>asnifel amaḍalan</b> (ArcGIS Pro yettak-d tabdart).</li>
</ul>`,
  exercice: `<ol>
  <li>Kter 7 n shapefiles n ukaram <code>Shapefiles</code> ɣer <code>TP_ENIV.gdb</code>.</li>
  <li>Sbadu asenfeḍ n <code>Projections\\Forages_sans_projection</code> d WGS 1984 UTM 30N.</li>
  <li>Snefḍ <code>Communes_NordSahara1959</code> ɣer WGS 1984 UTM 30N syen serwes-it d <code>Communes</code>: anwa amutti i twalaḍ war asnifel?</li>
</ol>` };
B["p2-l2"] = { titre: "Tifelwiyin, tuqqniwin d tinqiḍin XY", objectifs: ["Ldi syen ẓreg tafelwit n tmeẓliwin", "Qqen tafelwit Excel neɣ CSV", "Snulfu-d tinqiḍin seg yimsidag"],
  contenu: `
<p>Asiti ayeffus ɣef tissi &gt; <b>Attribute Table</b>. Umuɣ ☰ n tfelwit yettaǧǧa ad ternuḍ urti (<i>Add Field</i>, syen <b>Save</b> deg yiccer Fields), ad tsiḍneḍ urti (<b>Calculate Field</b>, s Python 3 neɣ Arcade) d usiḍen n tsenselkimt (<i>Calculate Geometry</i>: tiɣzi, teɣzi, imsidag).</p>
<h3>Tuqqna</h3>
<p>Asiti ayeffus ɣef <code>Communes</code> &gt; <i>Joins and Relates &gt; Add Join</i>. Tafelwit: <code>population_communes.xlsx</code> (tawriqt <code>Population$</code>), urti amenzu: <code>CODE</code>. Rmed <i>Keep all target features</i>, syen senqed tuqqna s tqeffalt <i>Validate Join</i>.</p>
<h3>Tinqiḍin XY</h3>
<p>Afecku <b>XY Table To Point</b> ɣef <code>releves_gps.csv</code>: X = <code>X</code>, Y = <code>Y</code>, anagraw WGS 1984 UTM 30N. S <code>LON</code>/<code>LAT</code>, fren WGS 1984 (GCS).</p>`,
  exercice: `<ol>
  <li>Qqen tafelwit n yimezdaɣ ɣer tɣiwanin, syen siḍen tazurt (<code>POP_2020 / tiɣzi s km²</code>) deg urti amaynut.</li>
  <li>Snulfu-d tissi n tɣuriwin GPS seg CSV.</li>
  <li>Fren tiɣuriwin yellan ddaw 500 m seg ubrid (<i>Select By Location</i>).</li>
</ol>` };
B["p2-l3"] = { titre: "Asenfel d usideg ameḍrar", objectifs: ["Snulfu-d feature class syen snefel-itt", "Sideg takarḍa yettwasekknen s tinqiḍin n usenqed"],
  contenu: `
<p><b>Snulfu-d feature class</b>: asiti ayeffus ɣef geodatabase &gt; <i>New &gt; Feature Class</i> (anaw, urtiyen, anagraw n yimsidag). Syen <b>Edit &gt; Create</b>: agalis <i>Create Features</i> yettak-d tamudemt i yal tissi. Snapping yettwasbadu deg Edit &gt; <b>Snapping</b>.</p>
<ul>
  <li><b>Edit Vertices</b>, <b>Reshape</b>, <b>Split</b>, <b>Merge</b>: iccer Edit, agraw Tools.</li>
  <li>Cfu ad teskelseḍ (<b>Save</b>) abeddel-ik (taqeffalt Save n yiccer Edit).</li>
</ul>
<h3>Asideg ameḍrar</h3>
<p>Rnu tugna yettwasekknen, fren-itt deg Contents, syen <b>Imagery &gt; Georeference</b>. <i>Fit To Display</i> akken ad tt-tesqerbeḍ, syen <b>Add Control Points</b> (4 ar 6 n timsagrin n uẓeṭṭa ma drus, yettwazerwen akken iwata). Senqed <b>tafelwit n tinqiḍin n usenqed</b> d tuccḍa RMS. Fakk s <b>Save as New</b> akken ad d-tesnulfuḍ raster yettwasdegren.</p>`,
  exercice: `<ol>
  <li>Snulfu-d feature class n tinqiḍin <code>Puits</code> (urtiyen NOM, PROF_M) syen snefel 5 n yiɣunam.</li>
  <li>Snulfu-d taneɣrut n yiɣunam <code>Parcelles</code> syen snefel 3 n tferkiwin yemqarabent s snapping yermed.</li>
  <li>Ma tesɛiḍ takarḍa INCT yettwasekknen, sideg-itt syen aru tuccḍa RMS.</li>
</ol>` };

/* ---------- Aswir 3 ---------- */
B.p3 = { titre: "Azamul, tibzimin d tsizzeltin", resume: "Agalis Symbology, taggayin, tibzimin, tisizzeltin d usifeḍ PDF, tagrumma n tkerḍiwin.",
  quiz: [
    { question: "Akken ad tesskneḍ tazurt n yimezdaɣ i yal tiɣiwant, ad tesqedceḍ:", choix: ["Single symbol", "Unique values", "Graduated colors", "Proportional symbols"], explication: "Isefka imassaɣen (tazurt, afmiḍi) ttwaskanen s yiniten yettwasmizzwren." },
    { question: "Deg ArcGIS Pro, ayen yemṣadan d Data Driven Pages n ArcMap d:", choix: ["Map series", "Map frame", "Tissi n umatar", "Bookmark"], explication: "Map series tesnulfuy-d asebter i yal aferdis n tissi n umatar." },
    { question: "Anda ara tesifḍeḍ tasizzelt ɣer PDF?", choix: ["Iccer Share > Export Layout", "Iccer Analysis", "Agalis Catalog", "Iccer Imagery"], explication: "Iccer Share yesdukkul isifaḍ d usuffeɣ." },
    { question: "Anwa uferdis ur nelli d ilaq deg tkarḍa tasentelt?", choix: ["Legend", "Taskala", "Aɣbalu", "Takarḍa n wadda n usatellit"], explication: "Azwel, legend, taskala, tanila d uɣbalu ttwarǧan; takarḍa n usatellit d tafrayant." }
  ] };
B["p3-l1"] = { titre: "Azamul d tbzimin", objectifs: ["Fren tarrayt n uskan i iwulmen", "Sres tibzimin syen sefrek imennuɣen-nsent"],
  contenu: `
<p>Fren tissi, syen <b>Feature Layer &gt; Symbology</b>. Agalis yettak-d: <i>Single Symbol</i>, <i>Unique Values</i> (taggayin), <i>Graduated Colors</i> (choroplèthe), <i>Graduated</i> neɣ <i>Proportional Symbols</i>, <i>Charts</i>, <i>Heat Map</i>.</p>
<ul>
  <li>Imezdaɣ n tɣiwanin: <b>Graduated Colors</b> ɣef tezurt (mačči ɣef yimezdaɣ iqeḥwanen), tarrayt <i>Natural Breaks</i>, 5 n taggayin.</li>
  <li>Aɣummu n wakal: <b>Unique Values</b> ɣef <code>TYPE</code>, initen yettwassnen (azegzaw i tezgi, awraɣ i tkerza, azeggaɣ i uɣrem).</li>
  <li>Iɣunam n waman: <b>Proportional Symbols</b> ɣef <code>DEBIT_LS</code>.</li>
</ul>
<p><b>Tibzimin</b>: iccer <i>Labeling</i>, urti <code>NOM</code>. <i>Label classes</i> ttaǧǧant iɣanimen yemgaraden ɣef usuter (md. timdinin tigejdanin s uzuran). Amsedday Maplex yettwasqedac s wudem amezwer; sbadu tazwart d wadeg deg <i>Labeling Properties</i>.</p>`,
  exercice: `<ol>
  <li>Xdem takarḍa choroplèthe n tezurt n yimezdaɣ s 5 n taggayin.</li>
  <li>Sken isaffen s wurti <code>ORDRE</code> (tehri tettimɣur).</li>
  <li>Sres tibzimin n tɣiwanin, s taggayt n tbzimin s uzuran i <code>CHEF_LIEU = 'Oui'</code>.</li>
</ol>` };
B["p3-l2"] = { titre: "Tasizzelt, asifeḍ d tegrumma n tkerḍiwin", objectifs: ["Suddes tasizzelt ummidt", "Sifeḍ ɣer PDF neɣ PNG", "Snulfu-d takarḍa i yal tiɣiwant s wudem awurman"],
  contenu: `
<p><b>Insert &gt; New Layout</b> (A4 neɣ A3, s teɣzi neɣ s tehri). Sekcem <b>map frame</b>, syen seg yiccer Insert: azwel, legend, aneccab n ugafa, afeggag n tskala, aḍris n uɣbalu, tugna n ulugu n ENIV. Iferdisen ttwasbadun deg ugalis <i>Format</i>.</p>
<ul>
  <li>Takarḍa n wadeg: sekcem map frame wis sin yeqqnen ɣer tkarḍa nniḍen n usenfar syen rnu <i>extent indicator</i>.</li>
  <li>Asifeḍ: <b>Share &gt; Export Layout</b> (PDF, PNG 300 dpi…).</li>
</ul>
<h3>Map series</h3>
<p>Iccer Layout &gt; <b>Map Series &gt; Spatial</b>: tissi n umatar = <code>Communes</code>, urti n yisem = <code>NOM</code>. Aḍris amussan yesskan isem n usebter. Asifeḍ yettak-d PDF n 9 n yisebtar, yiwen i yal tiɣiwant. D ayen yemṣadan d Data Driven Pages n ArcMap.</p>`,
  exercice: `<ol>
  <li>Suddes takarḍa A4 s tehri n temnaḍt n tezrawt s yiferdisen ilaqen akk.</li>
  <li>Rnu takarḍa n wadeg s extent indicator.</li>
  <li>Snulfu-d map series s tɣiwant syen sifeḍ-itt ɣer PDF s waṭas n yisebtar.</li>
</ol>` };

/* ---------- Aswir 4 ---------- */
B.p4 = { titre: "Asesfer d tesleḍt tamkant", resume: "Agalis Geoprocessing, tiɣlisin, users, afran, tasleḍt raster s Spatial Analyst.",
  quiz: [
    { question: "Anda ara d-tafeḍ ifecka i yettwaselkmen yakan d tladna-nsen n Python?", choix: ["Analysis > History", "Agalis Contents", "Iccer Share", "Agalis Symbology"], explication: "History yeṭṭef yal aselkem s yiɣewwaren-is." },
    { question: "Anwa afecku i yeṭṭfen iḥricen akk n snat n tissiyin n yiɣunam?", choix: ["Clip", "Intersect", "Union", "Erase"], explication: "Union yeṭṭef kullec, s tmeẓliwin n snat n tissiyin." },
    { question: "Anwa afecku i yessiḍenen iɣunam n waman deg yal tiɣiwant?", choix: ["Summarize Within", "Near", "Dissolve", "Merge"], explication: "Summarize Within yesdukkul iferdisen s uɣunam." },
    { question: "Tiwuriwin raster n yiccer Imagery:", choix: ["Snulfuyent-d yal tikkelt afaylu", "Ssiḍnent deg ubrid war ma ttarunt afaylu", "Tteddunt kan s 3D", "Ṭṭfent amkan n uzamul"], explication: "Ttwasiḍnent deg wakud n uskan; tessifḍeḍ agmuḍ kan ma ilaq." }
  ] };
B["p4-l1"] = { titre: "Agalis Geoprocessing d tɣlisin", objectifs: ["Af-d syen selkem afecku, senqed amazray", "Snulfu-d tiɣlisin tifessasin d tigetan"],
  contenu: `
<p><b>Analysis &gt; Tools</b> yeldi agalis <b>Geoprocessing</b>: afeggag n unadi (aru « buffer »), <i>Favorites</i> d <i>Toolboxes</i>. Yal aselkem yettwaḥraz deg <b>Analysis &gt; History</b>: asiti ayeffus akken ad t-tɛawdeḍ neɣ ad tneɣleḍ taladna n Python.</p>
<ul>
  <li><b>Buffer</b>: ameccaq yettwasbadun neɣ seg urti, taxtiṛt <i>Dissolve</i> ALL.</li>
  <li><b>Multiple Ring Buffer</b>: 100, 250, 500 m i yiɣunam.</li>
  <li><b>Near</b>: ameccaq seg yal aɣerbaz ɣer ubrid i yqerben, yettwarun deg tfelwit.</li>
</ul>
<div class="astuce"><b>Tixutert:</b> iccer <i>Environments</i> n yal afecku yessbadu tamnaḍt, anagraw n tuffɣa d tallunt n umahil, am deg ArcMap.</div>`,
  exercice: `<ol>
  <li>Snulfu-d tamnaḍt n ummesten n 200 m i yiɣunam (yettwasdukklen).</li>
  <li>Snulfu-d tiɛeqqayin n 100, 250 d 500 m i yiɣerbazen.</li>
  <li>S <b>Near</b>, efk i yal aɣerbaz ameccaq ɣer ubrid i yqerben.</li>
</ol>` };
B["p4-l2"] = { titre: "Users: clip, intersect, union, dissolve", objectifs: ["Fren afecku n users i iwulmen", "Snulfu-d tamsizdigt i yal tamnaḍt"],
  contenu: `
<table class="tab">
  <tr><th>Afecku</th><th>Isem s tefransist</th><th>Agmuḍ</th></tr>
  <tr><td>Clip</td><td>Découper</td><td>tissi n unekcum yettwaḥettmen ɣer temnaḍt</td></tr>
  <tr><td>Intersect</td><td>Intersecter</td><td>iḥricen yemsaɣen, s tmeẓliwin n snat n tissiyin</td></tr>
  <tr><td>Union</td><td>Agréger</td><td>iḥricen akk n snat n tissiyin</td></tr>
  <tr><td>Erase</td><td>Effacer</td><td>tissi n unekcum war tamnaḍt</td></tr>
  <tr><td>Dissolve</td><td>Fusionner</td><td>yesdukkul iferdisen s yiwen n wazal</td></tr>
  <tr><td>Merge</td><td>Combiner</td><td>yesdukkul aṭas n tissiyin n yiwen n wanaw</td></tr>
</table>
<p>Deg ArcGIS Pro, Erase d Intersect llan s turagt Basic (sran Advanced deg yileqman iqburen n ArcMap).</p>
<p><b>Summarize Within</b> yessiḍen neɣ yesdukkul iferdisen i yal aɣunam: amḍan n yiɣunam n waman i yal tiɣiwant, teɣzi n yiberdan i yal tiɣiwant.</p>`,
  exercice: `<ol>
  <li>Xdem Intersect gar uɣummu n wakal d tɣiwanin, syen Dissolve s tɣiwant d wanaw: anta tiɣiwant i yesɛan ugar n tezgi?</li>
  <li>S Summarize Within, siḍen iɣunam n waman i yal tiɣiwant.</li>
  <li>Kkes timnaḍin tiɣremanin seg temnaḍin n ummesten n yiɣunam (Erase).</li>
</ol>` };
B["p4-l3"] = { titre: "Raster d Spatial Analyst", objectifs: ["Siḍen asawen, udem n usawen d hillshade", "Seqdec Raster Calculator d usmizzwer"],
  contenu: `
<p>Rnu <code>MNT_50m.asc</code> ɣer tkarḍa, syen sifeḍ-it ɣer GeoTIFF (asiti ayeffus &gt; <i>Data &gt; Export Raster</i>) s unagraw WGS 1984 UTM 30N. Ifecka raster llan deg tbwaṭ <b>Spatial Analyst</b> (tesra turagt) neɣ deg <b>Imagery &gt; Raster Functions</b> (ttwasiḍnent deg ubrid, war afaylu).</p>
<ul>
  <li><b>Slope</b> s tseggiwin, <b>Aspect</b>, <b>Hillshade</b>.</li>
  <li><b>Raster Calculator</b>: <code>Con("pente" &gt; 15, 1, 0)</code>.</li>
  <li><b>Reclassify</b>: tilisa d wazalen imaynuten deg tfelwit.</li>
  <li><b>Raster to Polygon</b> d <b>Polygon to Raster</b> akken ad tɛeddiḍ gar tmudmin.</li>
  <li><b>Zonal Statistics as Table</b>: tiɣezzi talemmast i yal tiɣiwant.</li>
</ul>`,
  exercice: `<ol>
  <li>Siḍen asawen d hillshade, syen sers-iten s tafrawant.</li>
  <li>Fren isawen yugaren 15° syen err-iten d iɣunam.</li>
  <li>Siḍen tiɣezzi talemmast n yal tiɣiwant.</li>
</ol>` };

/* ---------- Aswir 5 ---------- */
B.p5 = { titre: "ModelBuilder: asuddes amkan d usewrem", resume: "Ahil n semmus n yiswiren yettwanecfen seg tmsirt « ModelBuilder in ArcGIS Pro » n Fathy Geo Code: asuddes amkan, ifecka d yimuttiyen, imsezziyen, iɣewwaren d twennaḍin, isnasen.",
  quiz: [
    { question: "Deg ModelBuilder, tamellalt tazegzawt tesskan:", choix: ["Isefka n unekcum", "Afecku", "Isefka yettwassuffɣen (tuffɣa n ufecku)", "Amsezzi"], explication: "Anili = anekcum, awraɣ = afecku, azegzaw = isefka i d-yeffɣen." },
    { question: "Amek ara tesqedceḍ azal n umutti Distance deg yisem n tuffɣa?", choix: ["#Distance#", "%Distance%", "{Distance}", "$Distance"], explication: "Asemselsi deg uḍris yesseqdac tacreḍt n ufmiḍi." },
    { question: "Anwa afecku i yesdukkulen tuffɣiwin n umsezzi?", choix: ["Collect Values", "Merge", "Dissolve", "Summarize"], explication: "Collect Values yesdukkul tuffɣiwin; syen tzemreḍ ad tent-tesdukkleḍ s Merge." },
    { question: "Amek ara d-tesbaneḍ anekcum deg tenaka n udiwenni n ufecku n tmudemt?", choix: ["Beddel-as isem", "Ger-as tacreḍt Parameter (P)", "Err-it d intermediate", "Sɣeṛ-it s uzegzaw"], explication: "Iferdisen s P kan i d-yettbanen deg tenaka n udiwenni." },
    { question: "Akken ad mṣadan raster akk n tmudemt, ad tesbaduḍ deg twennaḍin:", choix: ["Cell size d snap raster", "Ini n yiferdisen", "Amazray", "Akaram n tuffɣa kan"], explication: "Cell size d Snap raster ḍemnen iẓeṭṭa yemṣadan." },
    { question: "Acḥal n yimsezziyen i yezmer ad yesɛu tmudemt?", choix: ["Yiwen kan (neɣ tamudemt tamecṭuḥt)", "Sin", "War talast", "Ulac"], explication: "Akken ad tesekcmeḍ tuzzyiwin, sers tamudemt tamecṭuḥt daxel n tmudemt tagejdant." }
  ] };
B["p5-l1"] = { titre: "Tazwart ɣer usuddes amkan d ModelBuilder", objectifs: ["Fhem d acu i d tamudemt tamkant d wacuɣer ara tesweremḍ", "Ldi ModelBuilder syen ɣer tamudemt"],
  contenu: `
<p><b>Tamudemt tamkant</b> d asemsel n yimahilen i yettbeddilen isefka n unekcum ɣer ugmuḍ: amedya « MNT → asawen → timnaḍin s usawen uɛer ». Aglam-is d tamudemt yettaǧǧa ad t-<b>tseglemeḍ</b>, ad t-<b>tɛawdeḍ</b> akken yella ɣef yisefka nniḍen u ad t-<b>tbeṭṭuḍ</b> d afecku.</p>
<p><b>ModelBuilder</b> d amaẓrag udlifan n tmudmin n ArcGIS Pro: <b>Analysis &gt; ModelBuilder</b>. Tamudemt tettwasekles deg tbwaṭ n usenfar (<code>TP_ENIV.atbx</code>).</p>
<table class="tab">
  <tr><th>Aferdis</th><th>Talɣa d yini</th><th>Tamlilt</th></tr>
  <tr><td>Isefka n unekcum</td><td>tamellalt tanilit</td><td>tissi neɣ afaylu yellan</td></tr>
  <tr><td>Afecku</td><td>asmekker awraɣ (amelɣi ma yexuṣṣ uɣewwar)</td><td>afecku n usesfer</td></tr>
  <tr><td>Isefka yettwassuffɣen</td><td>tamellalt tazegzawt</td><td>tuffɣa n ufecku, tezmer ad tettwasqedcen sɣur win i d-iteddun</td></tr>
  <tr><td>Amutti</td><td>tamellalt tanilit tafessast</td><td>azal (ameccaq, talast, urti…)</td></tr>
  <tr><td>Amsezzi, taẓgent</td><td>aḥexagun aččinawi</td><td>tuzzyiwin d tiwtilin</td></tr>
</table>
<p>Tiqeffalin n ribbon ModelBuilder: <i>Validate</i> (yesneqqad tamudemt akk), <i>Run</i>, <i>Auto Layout</i>, <i>Fit To Window</i>, <i>Intermediate</i> (isefka yettwacerḍen « intermediate » ttwakksen deffir uselkem).</p>`,
  exercice: `<ol>
  <li>Snulfu-d tamudemt tamaynut syen semmi-as « Pente_forte » (asiti ayeffus &gt; Properties deg Catalog).</li>
  <li>Zuɣer afecku <b>Slope</b> seg ugalis Geoprocessing syen ɣer ini-s uqbel d deffir tuqqna n MNT.</li>
  <li>Aru ɣef lkaɣeḍ iswiren n tmudemt ara d-yafen iɣerbazen yellan ddaw 300 m seg wasif.</li>
</ol>` };
B["p5-l2"] = { titre: "Bnu tamudemt s yifecka d yimuttiyen", objectifs: ["Ssemsel aṭas n yifecka", "Snulfu-d imuttiyen syen qqen-iten ɣer yifecka", "Seqdec asemselsi n umutti deg uḍris"],
  contenu: `
<h3>Asemsel n yifecka</h3>
<p>Rnu <code>Forages</code> ɣer tmudemt, syen afecku <b>Buffer</b>; qqen-iten s ufecku <i>Connect</i>. Rnu <b>Erase</b> (timnaḍin tiɣremanin n <code>Occupation_sol</code>), syen <b>Summarize Within</b> (s <code>Communes</code>). Tuffɣa tazegzawt n yal afecku tuɣal d anekcum n win i d-iteddun.</p>
<h3>Imuttiyen</h3>
<ul>
  <li>Asiti ayeffus ɣef ufecku &gt; <b>Create Variable &gt; From Parameter &gt; Distance</b>: ameccaq yuɣal d tamellalt i tzemreḍ ad tbeddleḍ war ma teldiḍ afecku.</li>
  <li>Amutti yezmer ad yeččar aṭas n yifecka (yiwen n umeccaq i snat n tɣlisin).</li>
  <li><b>Asemselsi deg uḍris</b>: aru isem n umutti gar snat n tcraḍ <code>%</code> deg ubrid. Amedya n tuffɣa: <code>%scratchGDB%\\Tampon_%Distance%</code>. Imuttiyen n unagraw ilaqen: <code>%scratchGDB%</code>, <code>%scratchFolder%</code>, <code>%n%</code> (amḍan n tuzzya).</li>
</ul>
<div class="astuce"><b>Tannumi yelhan:</b> beddel isem n yal aferdis (asiti ayeffus &gt; Rename) s yisem yesɛan anamek, u cerreḍ tuffɣiwin n tlemmast s <i>Intermediate</i> akken ad yeqqim kan ugmuḍ aneggaru.</div>`,
  exercice: `<ol>
  <li>Bnu tamudemt Forages → Buffer → Erase (aɣrem) → Summarize Within (tiɣiwanin).</li>
  <li>Snulfu-d amutti <code>Distance</code> syen seqdec-it deg yisem n tuffɣa.</li>
  <li>Selkem-itt s 200 m syen s 500 m syen serwes amḍan n yiɣunam yettwaḥerzen i yal tiɣiwant.</li>
</ol>` };
B["p5-l3"] = { titre: "Imsezziyen: ales asesfer", objectifs: ["Fren amsezzi i iwulmen", "Snulfu-d tuffɣa i yal aferdis, azal neɣ afaylu", "Sdukkel igmaḍ n tuzzya"],
  contenu: `
<p>Iccer ModelBuilder &gt; <b>Iterators</b>. Amsezzi yetteddu acḥal d tikkal am wamḍan n yiferdisen, u yettak-d azal deg yal tikkelt (s waṭas isem-is <code>Value</code> neɣ <code>Name</code>).</p>
<table class="tab">
  <tr><th>Amsezzi</th><th>Amedya s yisefka n umahil</th></tr>
  <tr><td>Iterate Field Values</td><td>yiwet n tuffɣa i yal tiɣiwant (<code>Communes.NOM</code>)</td></tr>
  <tr><td>Iterate Features / Iterate Row Selection</td><td>sesfer yal amdan neɣ yal aɣerbaz weḥd-s</td></tr>
  <tr><td>Iterate Feature Classes</td><td>gzem yal shapefile n ukaram s temnaḍt n tezrawt</td></tr>
  <tr><td>Iterate Rasters</td><td>siḍen asawen n waṭas n MNT</td></tr>
  <tr><td>For / While</td><td>ɛreḍ aṭas n tlisa: 200, 400, 600… n texxamin</td></tr>
</table>
<p>Amedya: <b>Iterate Field Values</b> (<code>Communes</code>, urti <code>NOM</code>) → <b>Select Layer By Attribute</b> → <b>Clip</b> (<code>Forages</code>) → tuffɣa <code>%scratchGDB%\\Forages_%Value%</code>.</p>
<p><b>Collect Values</b> yesdukkul tuffɣiwin akk n tuzzya; syen qqen-it ɣer <b>Merge</b> akken ad d-tawiḍ yiwet n tissi. Tamudemt tesɛa yiwen n umsezzi kan: akken ad tesekcmeḍ snat n tuzzyiwin, sers <b>tamudemt tamecṭuḥt</b> daxel n tmudemt tagejdant.</p>`,
  exercice: `<ol>
  <li>Snulfu-d tamudemt i yettgezmen iɣunam n waman i yal tiɣiwant.</li>
  <li>Rnu Collect Values syen Merge akken ad tesdukkleḍ agmuḍ.</li>
  <li>S umsezzi <b>For</b> (seg 200 ar 1000, tikli 200), ssuffeɣ-d semmus n yiẓeṭṭa n yisaffen s tlisa yemgaraden.</li>
</ol>` };
B["p5-l4"] = { titre: "Iɣewwaren d twennaḍin", objectifs: ["Err tamudemt d afecku s yiɣewwaren", "Sbadu tiwennaḍin deg uswir n tmudemt neɣ n ufecku", "Rnu tiwtilin d yiznan"],
  contenu: `
<h3>Iɣewwaren n tmudemt</h3>
<p>Asiti ayeffus ɣef unekcum, amutti neɣ tuffɣa taneggarut &gt; <b>Parameter</b>: ad d-iban « P ». Deg <i>Model Properties &gt; Parameters</i>, sbadu amizwer, isem i d-yettbanen, anaw, azal amezwer d <b>umsizdeg</b> (amedya tabdart n wazalen neɣ tagrumma 100–1000 m). Syen sit snat n tikkal ɣef tmudemt deg Catalog: ad teldi am yal afecku nniḍen.</p>
<h3>Tiwennaḍin</h3>
<ul>
  <li><b>I tmudemt akk</b>: Model Properties &gt; Environments (tamnaḍt, anagraw n yimsidag n tuffɣa, teɣzi n texxamt, snap raster, amasek).</li>
  <li><b>I yiwen n ufecku</b>: asiti snat n tikkal ɣef ufecku &gt; iccer Environments.</li>
  <li>I raster, sbadu yal tikkelt <i>Cell Size</i> d <i>Snap Raster</i> ɣef MNT: iẓeṭṭa akk ad qqimen mṣadan.</li>
</ul>
<h3>Tiwtilin</h3>
<p>Umuɣ <b>Logical</b> yettak-d <i>If Data Exists</i>, <i>If Row Count Is</i>, <i>If Value Is</i>, <i>Stop</i>… Amedya: selkem tagezmi kan ma yella ufran yesɛa yiwen n uferdis ma drus. <b>Preconditions</b> (asiti ayeffus &gt; Properties &gt; Preconditions) ḥettment amizwer n uselkem.</p>`,
  exercice: `<ol>
  <li>Sken d iɣewwaren: tissi n unekcum, ameccaq (amsizdeg 50–1000 m) d tuffɣa.</li>
  <li>Sbadu anagraw n tuffɣa WGS 1984 UTM 30N d temnaḍt n tezrawt deg twennaḍin n tmudemt.</li>
  <li>Rnu tawtilt <i>If Row Count Is</i> &gt; 0 uqbel tagezmi.</li>
</ol>` };
B["p5-l5"] = { titre: "Amedya n tidet: MNT → Clip → Reclassify → Raster Calculator", objectifs: ["Bnu tamudemt raster seg tazwara alamma d taggara", "Efk-as iɣewwaren, selkem-itt ɣef temnaḍin nniḍen syen sifeḍ-itt ɣer Python"],
  contenu: `
<p>Iswi: snulfu-d takarḍa n <b>wakal ur nwulem ara i lebni</b> (asawen uɛer neɣ izi n yiɣzer) deg tɣiwant, s tmudemt ara tɛawdeḍ.</p>
<ol>
  <li><b>Raster n unekcum</b>: <code>MNT_50m</code> (aɣewwar).</li>
  <li><b>Clip Raster</b> s tɣiwant yettwafernen (aɣewwar: aɣunam), s tecreḍt ɣef <i>Use Input Features for Clipping Geometry</i>.</li>
  <li><b>Slope</b> (tiseggiwin) ɣef MNT yettwagezmen.</li>
  <li><b>Reclassify</b> n usawen: 0–5° → 1, 5–15° → 2, 15–25° → 3, nnig 25° → 4.</li>
  <li><b>Raster Calculator</b>: sdukkel d tɣezzi timassaɣt, amedya <code>Con(("pente_cl" &gt;= 3) | ("mnt_dec" &lt; %Seuil_alt%), 1, 0)</code>, anda <code>Seuil_alt</code> d amutti n tmudemt.</li>
  <li><b>Tuffɣa</b>: <code>%scratchGDB%\\Contraintes_%Commune%</code>, syen <b>Raster to Polygon</b> akken ad tsiḍneḍ tiɣzi yettwaḥuzan.</li>
</ol>
<p>Imeẓla s yisefka n uswir 7 d 8: ssemsel Fill → Flow Direction → Flow Accumulation → Raster Calculator (talast) i tmudemt n « uẓeṭṭa n yisaffen », neɣ Euclidean Distance → Reclassify → Weighted Sum i tmudemt n uɣṛis.</p>
<p>Fakk s <b>Export &gt; Export To Python File</b>: tangalt i d-yeffɣen d tiqenṭert ɣer uswir 6 (ArcPy).</p>`,
  exercice: `<ol>
  <li>Bnu tamudemt ummidt s kraḍ n yiɣewwaren: MNT, tiɣiwant, talast n tɣezzi.</li>
  <li>Rnu amsezzi <b>Iterate Field Values</b> akken ad d-tesnulfuḍ takarḍa n tɣiwanin akk s yiwen n uselkem.</li>
  <li>Sifeḍ tamudemt ɣer Python syen serwes askript d <code>07_zones_inondables.py</code>.</li>
</ol>` };

/* ---------- Aswir 6 ---------- */
B.p6 = { titre: "ArcPy s Python 3 d notebooks", resume: "Asfaylu Python, notebooks, iskripten iman-nsen, cursors, arcpy.mp d yifecka n uskript.",
  quiz: [
    { question: "Anwa tamuɣli i yeṭṭfen amkan n arcpy.mapping deg ArcGIS Pro?", choix: ["arcpy.da", "arcpy.mp", "arcpy.sa", "arcpy.na"], explication: "arcpy.mp yessefrak isenfaren, tikarḍiwin, tissiyin d tsizzeltin." },
    { question: "Amek ara tesmmleḍ asenfar yeldin deg notebook?", choix: ["arcpy.mp.ArcGISProject(\"CURRENT\")", "arcpy.mapping.MapDocument()", "arcpy.env.workspace", "arcpy.GetProject()"], explication: "\"CURRENT\" yemmal-d asenfar yeldin deg useɣzan." },
    { question: "Anta tira i yellan kan deg Python 3?", choix: ["print \"text\"", "f\"{nom}\"", "u\"text\"", "xrange()"], explication: "f-strings ulac-iten deg Python 2.7." },
    { question: "Anwa ahil i yesselkamen askript ArcPy beṛṛa n useɣzan?", choix: ["python27.exe", "propy.bat", "arcmap.exe", "qgis.bat"], explication: "propy.bat yessermad tawennaḍt Python n ArcGIS Pro." }
  ] };
B["p6-l1"] = { titre: "Asfaylu Python d notebooks", objectifs: ["Selkem ifecka s Python daxel n ArcGIS Pro", "Seqdec notebook Jupyter yellan deg usenfar"],
  contenu: `
<p><b>Analysis &gt; Python</b> yettak-d <b>asfaylu Python</b> d <b>notebooks</b> (Jupyter yettwasekcmen, afaylu <code>.ipynb</code> yettwaseklasen deg usenfar). <code>arcpy</code> yettwakter yakan u tissiyin n tkarḍa yermden zemrent ad ttwasqedcent s yisem-nsent.</p>
<!--code:0-->
<p>ArcGIS Pro yettaru ifecka s talɣa <code>arcpy.toolbox.Tool</code> (md. <code>arcpy.analysis.Clip</code>, <code>arcpy.management.Project</code>). Talɣa taqburt <code>Clip_analysis</code> mazal tetteddu.</p>
<p>Imgiraden d Python 2.7 n ArcMap: <code>print()</code> s tacciwin, izirigen Unicode s wudem amezwer (isekkilen s ucekkal ur d-ttawin ara uguren), abḍu <code>/</code> yettak-d yal tikkelt tifezzit.</p>`,
  exercice: `<ol>
  <li>Deg notebook, selkem buffer syen sken amḍan n yiferdisen.</li>
  <li>Asiti ayeffus ɣef ufecku deg umazray &gt; <i>Copy Python Command</i> syen sers-itt deg notebook.</li>
</ol>` };
B["p6-l2"] = { titre: "Iskripten, tuzzyiwin d cursors", objectifs: ["Aru askript iman-is yettwaselkamen s twennaḍt arcgispro-py3", "Ɣer syen ẓreg timeẓliwin s arcpy.da"],
  contenu: `
<p>Askript iman-is yetteddu s <code>propy.bat</code> (yettwasebded s ArcGIS Pro) neɣ seg umaẓrag yettwasbadun ɣef twennaḍt <code>arcgispro-py3</code>.</p>
<!--code:0-->
<p><b>f-strings</b> (<code>f"{fc} : {n}"</code>) llan kan deg Python 3. Iskripten 01 ar 03 n ubrid ArcMap tteddun daɣen deg ArcGIS Pro, ma yella ternuḍ tacciwin i <code>print</code> ma ilaq.</p>`,
  exercice: `<ol>
  <li>Bder tissiyin akk n ukaram Shapefiles s umḍan n yiferdisen-nsent.</li>
  <li>S SearchCursor, siḍen tafsut talemmast n yiɣunam yettwaxedmen.</li>
  <li>Selkem askript s <code>propy.bat</code> seg ugdil n tladna.</li>
</ol>` };
B["p6-l3"] = { titre: "Tisizzeltin tiwurmanin s arcpy.mp d usnulfu n ufecku n uskript", objectifs: ["Sefrek asenfar, tikarḍiwin-is d tsizzeltin-is s Python", "Err askript d afecku n tbwaṭ"],
  contenu: `
<p><code>arcpy.mp</code> yeṭṭef amkan n <code>arcpy.mapping</code> n ArcMap.</p>
<!--code:0-->
<h3>Afecku n uskript</h3>
<p>Deg Catalog, asiti ayeffus ɣef tbwaṭ &gt; <i>New &gt; Script</i>. Mel-d afaylu .py syen sbadu iɣewwaren (anaw, tanila, azal amezwer). Deg uskript, ɣer-iten s <code>arcpy.GetParameterAsText(0)</code> syen sken iznan s <code>arcpy.AddMessage()</code>.</p>`,
  exercice: `<ol>
  <li>Snulfu-d tasizzelt s uferdis n uḍris s yisem « Titre », syen sifeḍ takarḍa PDF i yal tiɣiwant s uskript nnig.</li>
  <li>Err askript <code>05_outil_zone_protection.py</code> d afecku n uskript s sin n yiɣewwaren.</li>
</ol>` };

/* ---------- Aswir 7 ---------- */
B.p7 = { titre: "MNT, tasnamant d tḥemlin", resume: "Tagrumma Hydrology n Spatial Analyst deg ArcGIS Pro: Fill, asuraf, aẓeṭṭa, amdan n wasif, timnaḍin n tḥemlin.",
  quiz: [
    { question: "Deg ArcGIS Pro, anwa wanaw n tnila n usuraf i yemṣadan d tmudemt tamensayt n ArcMap?", choix: ["MFD", "DINF", "D8", "HAND"], explication: "D8 yettazen aman akk ɣer yiwet n texxamt tamdakelt." },
    { question: "Anda llan Fill, Flow Direction d Watershed?", choix: ["Spatial Analyst > Hydrology", "Analysis > Proximity", "Data Management > Raster", "3D Analyst > Visibility"], explication: "D ifecka n tegrumma Hydrology n Spatial Analyst." },
    { question: "Iskripten 06 d 07 n ubrid ArcMap deg ArcGIS Pro:", choix: ["Ur tteddun ara", "Tteddun akken llan", "Sran arcpy.mapping", "Sran QGIS"], explication: "Sseqdacen print() d arcpy.sa, i yemṣadan d Python 3." },
    { question: "Anwa afecku n ArcGIS Pro i yettaǧǧan ad tesbaduḍ taẓayt n tesleḍt s waṭas n yiwtilen s wudem amyigaw?", choix: ["Suitability Modeler", "Map series", "Georeference", "Notebook"], explication: "Suitability Modeler yesskan agmuḍ deg yal abeddel n teẓayt." }
  ] };
B["p7-l1"] = { titre: "Seg MNT ɣer uẓeṭṭa n yisaffen", objectifs: ["Heggi MNT syen seɣti tiferkiwin", "Siḍen tanila n usuraf d usmuzzer", "Ssuffeɣ-d syen sefru aẓeṭṭa"],
  contenu: `
<p>Tarrayt d yiwet am deg ArcMap (ẓer aswir 7 n ubrid ArcMap i tmesneɣt). Ifecka llan deg <b>Spatial Analyst &gt; Hydrology</b>.</p>
<ol>
  <li><b>Fill</b> n MNT → <code>fill.tif</code>.</li>
  <li><b>Flow Direction</b>: fren anaw <b>D8</b> (ArcGIS Pro yettak-d daɣen MFD d DINF).</li>
  <li><b>Flow Accumulation</b>.</li>
  <li><b>Raster Calculator</b>: <code>Con("facc.tif" &gt; 400, 1)</code> (1 km² s texxamin n 50 m).</li>
  <li><b>Stream Order</b> (Strahler), syen <b>Stream to Feature</b>.</li>
</ol>
<div class="astuce"><b>S tɣawla:</b> ArcGIS Pro 3.x yettak-d daɣen <b>Derive Continuous Flow</b> syen <b>Derive Stream As Line</b>, i yessemselen aṭas n yiswiren. Xdem di tazwara tarrayt s tikli s tikli akken ad tt-tfehmeḍ.</div>
<p>Askript <code>06_hydrologie.py</code> yetteddu akken yella deg ArcGIS Pro (Python 3): ldi-t deg notebook neɣ selkem-it s <code>propy.bat</code>.</p>`,
  exercice: `<ol>
  <li>Ssemsel Fill, Flow Direction (D8) d Flow Accumulation.</li>
  <li>Ssuffeɣ-d aẓeṭṭa s talast n 400 n texxamin syen siḍen amizwer n Strahler.</li>
  <li>Bnu iswiren-a deg tmudemt ModelBuilder s talast d aɣewwar.</li>
</ol>` };
B["p7-l2"] = { titre: "Amdan n wasif d temnaḍin n tḥemlin", objectifs: ["Sefrez amdan n wasif n Tamda", "Sekken tasedrayt ɣer tḥemlin d wayen yettwasekfen"],
  contenu: `
<h3>Amdan n wasif</h3>
<p><b>Snap Pour Point</b> (150 m) ɣef <code>Risques\\Exutoire.shp</code>, syen <b>Watershed</b> d <b>Raster to Polygon</b>. Siḍen tiɣzi s <i>Calculate Geometry</i> (km²) d umatar n Gravelius <code>Kc = 0.28 · P / √A</code> deg Field Calculator.</p>
<h3>Timnaḍin n tḥemlin</h3>
<p>Tarrayt-nni yakan am deg ArcMap: tiɣezzi nnig wasif (HAND) s <b>Euclidean Allocation</b>, ameccaq ɣer wasif, asawen, asmuzzer d uɣummu n wakal, yal yiwen s tzmilt seg 1 ar 5, syen <b>Weighted Sum</b> (35, 25, 20, 10, 10 %). Deg ArcGIS Pro, <b>Analysis &gt; Suitability Modeler</b> yettaǧǧa daɣen ad tesbaduḍ iwtilen d teẓayt s wudem amyigaw, s tmuɣli tusridt.</p>
<p>Senqed s <code>Laisses_crues.shp</code> (<b>Extract Values to Points</b>) syen bder iɣerbazen n taggayt meqqren. Askript <code>07_zones_inondables.py</code> ixeddem amahil-a akk.</p>`,
  exercice: `<ol>
  <li>Sefrez amdan n wasif syen siḍen tiɣzi-s d umatar-is n Gravelius.</li>
  <li>Bnu takarḍa n tsedrayt ɣer tḥemlin syen senqed-itt s yiẓuran n tḥemlin.</li>
  <li>Ales taẓayt deg Suitability Modeler syen serwes snat n tkerḍiwin.</li>
</ol>` };

/* ---------- Aswir 8 ---------- */
B.p8 = { titre: "Tasedrayt ɣer yiɣṛisen igamanen imeqqranen", resume: "Times n tizgwa, izelzalen, tsunami, aɣelluy n wakal d ugzul n yiɣilifen akk s ArcGIS Pro.",
  quiz: [
    { question: "Anwa afecku i yettbeddilen azal amezgun ɣer tzmilt war ma yesnulfu-d isurifen?", choix: ["Reclassify", "Rescale by Function", "Zonal Statistics", "Clip"], explication: "Rescale by Function yesseqdac tawuri tamezgunt (linear, logistic…)." },
    { question: "Deg Weighted Overlay, azalen % influence sdukklen:", choix: ["1", "10", "100", "Yal azal"], explication: "Ifmiḍiyen n tbaddelt ilaq ad sdukklen 100." },
    { question: "Anwa afecku i d-yettaken taggayt tameqqrant gar aṭas n tkerḍiwin n yiɣilifen?", choix: ["Cell Statistics (MAXIMUM)", "Mosaic", "Combine", "Dissolve"], explication: "Cell Statistics yessiḍen taxxamt s texxamt ɣef aṭas n raster." },
    { question: "Akken ad tesskneḍ xir tamnaḍt yettwaḥuzan s waman, ArcGIS Pro yettak-d:", choix: ["Tasɣent 3D tadigant", "Afaylu .mxd", "ArcScene", "Asideg ameḍrar"], explication: "Tiscinin 3D llant deg usenfar." }
  ] };
B["p8-l1"] = { titre: "Aṭas n yiwtilen deg ArcGIS Pro: Weighted Overlay d Suitability Modeler", objectifs: ["Heggi syen efk tizmilin i yiwtilen n uɣilif", "Sdukkel iwtilen syen sfehm taẓayt"],
  contenu: `
<p>Asmekti: <b>aɣṛis = aɣilif × tasedrayt n wayen yettwasekfen</b> (ẓer aswir 8 n ArcMap, tamsirt 1, d ulugen 04-20). Iswiren d yiwen deg ArcGIS Pro:</p>
<ol>
  <li>Heggi yal awtil: <b>Euclidean Distance</b>, <b>Slope</b>, <b>Aspect</b>, <b>Polygon to Raster</b>, <b>Kernel Density</b>…</li>
  <li>Efk tazmilt seg 1 ar 5 s <b>Reclassify</b> neɣ <b>Rescale by Function</b>, i yettbeddilen azal amezgun ɣer tzmilt war ma yesnulfu-d isurifen.</li>
  <li>Sdukkel s <b>Weighted Overlay</b> (% influence = 100), <b>Weighted Sum</b>, neɣ <b>Suitability Modeler</b>.</li>
  <li>Bḍu amatar ɣef 5 n taggayin syen senqed s tedyanin yettwaẓren.</li>
</ol>
<p>Taẓayt yettwasumren tella deg <code>Tables\\poids_multicritere.xlsx</code>. Tafelwit teldi srid deg ArcGIS Pro (Add Data &gt; tawriqt Excel).</p>`,
  exercice: `<ol>
  <li>Ldi tawriqt « Feux de forêt » (times n tizgwa) n tfelwit n teẓayt deg ArcGIS Pro.</li>
  <li>Serwes Reclassify d Rescale by Function ɣef wawtil « ameccaq ɣer yiberdan ».</li>
</ol>` };
B["p8-l2"] = { titre: "Tikarḍiwin n yiɣilifen: times, izelzalen, tsunami, aɣelluy n wakal", objectifs: ["Snulfu-d ukkuẓ n tkerḍiwin n yiɣilifen s yisefka n umahil", "Senqed yal takarḍa s tedyanin yettwaẓren"],
  contenu: `
<table class="tab">
  <tr><th>Aɣilif</th><th>Iwtilen (taẓayt)</th><th>Asenqed</th><th>Askript</th></tr>
  <tr><td>Times n tizgwa</td><td>aɣummu n wakal 35, asawen 20, udem n usawen 15, iberdan 15, idgan yettwazedɣen 15</td><td>Foyers_incendies</td><td>08_risque_feux.py</td></tr>
  <tr><td>Azelzal</td><td>iẓlaḍ yermden 40, tazurt n yiqerra 25, ademsal n wadeg (AMPLIF) 25, asawen 10</td><td>—</td><td>09_risque_sismique.py</td></tr>
  <tr><td>Tsunami</td><td>tiɣezzi 50, ameccaq ɣer yiri n yilel 35, asawen 15 + asenario n tmewjet n 5 m</td><td>Enjeux_cote</td><td>10_tsunami.py</td></tr>
  <tr><td>Aɣelluy n wakal</td><td>tilitulujit (SUSC_GLIS) 35, asawen 30, isaffen 15, aɣummu n wakal 10, iberdan 10</td><td>Glissements</td><td>11_glissements.py</td></tr>
</table>
<p>Iskripten 08 ar 11 d <code>outils_risques.py</code> tteddun deg ArcGIS Pro war abeddel. Akken ad ten-tfehmeḍ, ales di tazwara yiwet n tkarḍa ma drus s ufus s ugalis Geoprocessing.</p>
<div class="astuce"><b>Deg ArcGIS Pro:</b> i tsunami, sken <code>submersion_5m.tif</code> deg <b>tesɣent tadigant</b> nnig MNT n yiri n yilel: tamnaḍt yettwaḥuzan s waman tban xir s 3D.</div>`,
  exercice: `<ol>
  <li>Xdem takarḍa n uɣilif n tmes s ufus, syen serwes-itt d ugmuḍ n uskript 08.</li>
  <li>Selkem iskripten 09, 10 d 11 deg notebook.</li>
  <li>Sken asenario n tmewjet n 5 m s 3D syen bder ayen yettwaḥuzan.</li>
</ol>` };
B["p8-l3"] = { titre: "Agzul n yiɣilifen akk d tfelwit n usefrek", objectifs: ["Sdukkel iɣilifen deg ugzul", "Sken igmaḍ i yal tiɣiwant"],
  contenu: `
<p><b>Cell Statistics</b> (MAXIMUM) yettak-d aɣilif ameqqran n yal taxxamt; tagrumma n <code>Con(classe &gt;= 4, 1, 0)</code> tettak-d amḍan n yiɣilifen imeqqranen. <b>Zonal Statistics as Table</b> i yal tiɣiwant, syen tuqqna d <code>Communes</code> (askript <code>12_synthese_multirisque.py</code>).</p>
<p>Askan deg ArcGIS Pro:</p>
<ul>
  <li><b>Charts</b>: asiti ayeffus ɣef tissi &gt; <i>Create Chart &gt; Bar Chart</i> n umḍan alemmas n yiɣilifen imeqqranen i yal tiɣiwant.</li>
  <li><b>Tasizzelt A3</b> s tkarḍa n yiɣilifen akk, takarḍa i yal tiɣiwant d udiagram.</li>
  <li>Tamawt ilaqen: <i>isefka isuganen i uselmed</i>.</li>
</ul>`,
  exercice: `<ol>
  <li>Snulfu-d tikarḍiwin n uɣilif ameqqran d umḍan.</li>
  <li>Snulfu-d adiagram s yiẓegzawen i yal tiɣiwant syen sekcem-it deg tsizzelt A3.</li>
</ol>` };

/* ---------- Aswir 9 ---------- */
B.p9 = { titre: "Qqen tagi tazzayant ɣer ArcGIS Pro", resume: "Qqen amalal n tegi tazzayant (Claude) ɣer ArcGIS Pro s uneggaf MCP, ssiwel asenfar s tutlayt tagamant ɣef yisefka n Tlemsan, syen ṭṭef deg yigmaḍ.",
  quiz: [
    { question: "S MCP-ArcGISPro, d acu ara tsenkreḍ deg ArcGIS Pro deg yal tiɣimit?", choix: ["Ulac kra", "Afecku Start MCP Bridge n MCP_Bridge.pyt", "ArcCatalog", "Asfaylu Python weḥd-s"], explication: "Tiqenṭert tettṭṭef tiladniwin n Claude u tesselkam-itent deg usenfar yeldin." },
    { question: "Anwa afecku i yesselkamen yal afecku arcpy?", choix: ["list_layers", "run_geoprocessing", "zoom_to_layer", "save_project"], explication: "run_geoprocessing yettawi isem n ufecku (analysis.Buffer…) d yiɣewwaren-is." },
    { question: "Acuɣer ara tesqedceḍ isefka isuganen n umahil s umalal n tegi tazzayant?", choix: ["Ɣezlen ugar", "Ayen yeqqar tagi tazzayant yettwazen ɣer umeẓlu-s", "ArcGIS Pro yessuter-it", "Akken ad teǧǧeḍ tuccḍiwin n usenfeḍ"], explication: "Werǧin ad tazneḍ isefka uffiren neɣ udmawanen ɣer umeẓlu n beṛṛa." },
    { question: "Acuɣer ulac aswir-a i ArcMap 10.8?", choix: ["ArcMap ulac deg-s tikarḍiwin", "Ulac aqeddac MCP i ArcMap (Python 2.7)", "ArcMap d aseɣzan s yidrimen", "Claude yugi ArcMap"], explication: "Iqeddacen MCP ttwahegan i ArcGIS Pro d Python 3 yines." }
  ] };
B["p9-l1"] = { titre: "Fhem MCP syen qqen ArcGIS Pro", objectifs: ["Fhem timlilin n umsaɣ, uqeddac MCP d tqenṭert deg ArcGIS Pro", "Sebded MCP-ArcGISPro syen qqen-it ɣer Claude Desktop", "Senker tiqenṭert deg yal tiɣimit"],
  contenu: `
<p><b>MCP</b> (<i>Model Context Protocol</i>) d aneggaf ilelli i yettaǧǧan amalal n tegi tazzayant ad yesseqdec <b>ifecka</b> i d-yettak useɣzan. Amalal ur yessefhamay ara kan: yezmer ad yessuter seg ArcGIS Pro ad yernu tissi, ad yesselkem afecku n usesfer neɣ ad yessifeḍ tasizzelt.</p>
<table class="tab">
  <tr><th>Aferdis</th><th>Tamlilt</th></tr>
  <tr><td><b>Amsaɣ MCP</b></td><td><b>Claude Desktop</b>, anda tettaruḍ isutar-ik.</td></tr>
  <tr><td><b>Aqeddac MCP</b></td><td>Ahil Python i yessenkar Claude Desktop, i yeglemen ifecka yellan.</td></tr>
  <tr><td><b>Tiqenṭert n ArcGIS Pro</b></td><td>Tabwaṭ n yifecka i yetteddun daxel n ArcGIS Pro: tesselkam tiladniwin s arcpy deg usenfar yeldin.</td></tr>
</table>
<p>Nesseqdac asenfar ilelli <b>MCP-ArcGISPro</b> (github.com/geo2004/MCP-ArcGISPro, turagt MIT), yettwaɛerḍen sɣur umeskar-is ɣef ArcGIS Pro 3.6. D asenfar n temɣiwent, mačči d unṣib n Esri neɣ n Anthropic. ArcMap 10.8 (Python 2.7) ulac ɣur-s aqeddac MCP: aswir-a yettwaxdam deg ArcGIS Pro neɣ deg QGIS.</p>
<h3>Asebded</h3>
<ol>
  <li>Sebded <b>Claude Desktop</b> (claude.ai/download) syen kcem.</li>
  <li>Sebded amsefrak n yikemmusen <b>uv</b>. Deg PowerShell:<br><code>powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code></li>
  <li>Deg usebter GitHub n usenfar, <i>Code &gt; Download ZIP</i>, syen ldi-t deg <code>C:\\ENIV\\mcp\\MCP-ArcGISPro</code>.</li>
  <li>Deg Claude Desktop: <i>Settings &gt; Developer &gt; Edit Config</i>. Sers iḥder-a deg <code>claude_desktop_config.json</code>, s ubeddel n <code>VOTRE_NOM</code> s yisem-ik n useqdac Windows (afaylu <code>mcp_arcgispro_config.json</code> deg Isadaren):</li>
</ol>
<!--code:0-->
<h3>Deg yal tiɣimit</h3>
<ol>
  <li>Ldi ArcGIS Pro, asenfar <code>TP_ENIV.aprx</code> d tkarḍa.</li>
  <li>Agalis <i>Catalog</i> &gt; <i>Toolboxes &gt; Add Toolbox</i>: <code>C:\\ENIV\\mcp\\MCP-ArcGISPro\\MCP_Bridge.pyt</code>, syen selkem <b>Start MCP Bridge</b>.</li>
  <li>Ales asenker n Claude Desktop (tikkelt tamezwarut) syen aru: « Senqed tuqqna d ArcGIS Pro (ping) syen efk-iyi-d isem n tkarḍa yermden. »</li>
</ol>`,
  exercice: `
<ol>
  <li>Sebded Claude Desktop, uv d MCP-ArcGISPro.</li>
  <li>Senker tiqenṭert deg ArcGIS Pro syen selkem akayad « ping ».</li>
  <li>Suter deg Claude tabdart n tkerḍiwin d tsizzeltin n usenfar.</li>
</ol>` };
B["p9-l2"] = { titre: "War ajerred: tagi tazzayant baṭel neɣ tadigant", objectifs: ["Issin ayen i d-tettak tifrat tilellit n Claude", "Qqen ArcGIS Pro ɣer tmudemt n tegi tazzayant tadigant u baṭel (LM Studio neɣ Ollama)", "Ṣeggem isutar-ik i tmudemt tamecṭuḥt"],
  contenu: `
<p>Claude yella deg Lezzayer s umiḍan baṭel. Maca tifrat tilellit tesɛa <b>tilisa n yiznan</b> i izemren ad gezment amahil, yerna tesra Internet. Ma yella inelmaden ur sɛin ara ajerred, neɣ taxxamt ur tesɛi ara Internet, seqdec <b>tamudemt n tegi tazzayant tadigant</b>: tetteddu ɣef uselkim, baṭel, yerna aqeddac MCP-nni yetteddu yid-s.</p>
<table class="tab">
  <tr><th>Tifrat</th><th>Ssuma</th><th>Internet</th><th>Tamawt</th></tr>
  <tr><td>Claude Desktop, baṭel</td><td>Baṭel</td><td>Ih</td><td>Fessus ugar, maca amḍan n yiznan yettwaḥedd</td></tr>
  <tr><td>Claude Desktop, s ujerred</td><td>S yidrimen</td><td>Ih</td><td>Yettkel ugar i yimahilen ɣezzifen</td></tr>
  <tr><td><b>LM Studio</b> + tamudemt tadigant</td><td>Baṭel</td><td>Kan i usader n tmudemt</td><td>Agrudem udlifan, yettwawelleh deg texxamt</td></tr>
  <tr><td><b>Ollama</b> + ollmcp</td><td>Baṭel, ilelli</td><td>Kan i usader n tmudemt</td><td>Izirig n tladna</td></tr>
</table>
<h3>Tifrat 1: LM Studio</h3>
<ol>
  <li>Sebded <b>LM Studio</b> (lmstudio.ai), lqem 0.3.17 neɣ ugar: seg lqem-a i yessefrak MCP.</li>
  <li>Sader tamudemt yezmren ad tesseqdec ifecka (<i>tool use</i>), amedya <b>Qwen3 8B</b> neɣ <b>Qwen2.5 7B Instruct</b>.</li>
  <li>Agalis ayeffus, iccer <i>Program</i> &gt; <i>Install &gt; Edit mcp.json</i>. Sers iḥder-nni <code>mcpServers</code> am deg Claude Desktop (afaylu <code>mcp_arcgispro_config.json</code>), syen sekles.</li>
  <li>Senker aqeddac deg ArcGIS Pro (afecku Start MCP Bridge), ldi adiwenni s tmudemt syen ɛreḍ « ping ».</li>
</ol>
<h3>Tifrat 2: Ollama d ollmcp</h3>
<ol>
  <li>Sebded <b>Ollama</b> (ollama.com), syen deg terminal: <code>ollama pull qwen2.5:7b</code>.</li>
  <li>Sebded amsaɣ MCP ilelli <b>ollmcp</b> (Python 3.11 neɣ ugar): <code>uv tool install ollmcp</code>.</li>
  <li>Senker-it s twila n usmel: <code>ollmcp --servers-json C:\\ENIV\\mcp\\mcp_arcgispro_config.json --model qwen2.5:7b</code>.</li>
</ol>
<div class="astuce"><b>Ameslay d tarrayt:</b> heggi 16 GB n tkatut ma drus i tmudemt n 7 ar 8 n yimelyaren n yiɣewwaren; takarḍa udlifant tessaɣzal aṭas. Tamudemt tamecṭuḥt tettɣelliḍ ugar n tmeqqrant: aru yiwen n usuter i yal amecwar, semmi tissiyin d wurtiyen s telqay, syen senqed yal agmuḍ. Lfayda: isefka ur ffɣen ara seg uselkim.</div>`,
  exercice: `
<ol>
  <li>Sebded LM Studio neɣ Ollama syen qqen-it ɣer uqeddac MCP n ArcGIS Pro.</li>
  <li>Ales imecwaren 1 ar 4 n umahil n tmsirt i d-iteddun s tmudemt tadigant.</li>
  <li>Serwes d Claude: isutar yettwafehmen, tuccḍiwin, akud n tririt.</li>
</ol>` };
B["p9-l3"] = { titre: "Amahil: ssiwel ArcGIS Pro s tutlayt tagamant", objectifs: ["Issin ifecka i d-yettak MCP-ArcGISPro", "Xdem tasleḍt ummidt ɣef yisefka n Tlemsan s yisutar yettwarun", "Senqed yal agmuḍ deg ArcGIS Pro"],
  contenu: `
<p>MCP-ArcGISPro yettak-d 32 n yifecka. Claude yettfernu afecku i iwulmen u Claude Desktop yessuter-d tamtawit-ik uqbel yal aseqdec.</p>
<table class="tab">
  <tr><th>Agraw</th><th>Ifecka</th></tr>
  <tr><td>Asenfar d tkerḍiwin</td><td><code>get_project_info</code>, <code>save_project</code>, <code>get_active_map_name</code>, <code>create_map</code></td></tr>
  <tr><td>Tissiyin</td><td><code>list_layers</code>, <code>add_vector_layer</code>, <code>add_raster_layer</code>, <code>remove_layer</code>, <code>zoom_to_layer</code>, <code>set_layer_visibility</code></td></tr>
  <tr><td>Isefka</td><td><code>describe_data</code>, <code>list_fields</code>, <code>get_layer_features</code>, <code>get_unique_values</code>, <code>set_workspace</code>, <code>list_feature_classes</code>, <code>list_rasters</code></td></tr>
  <tr><td>Afran d uẓreg</td><td><code>select_by_attribute</code>, <code>count_features</code>, <code>clear_selection</code>, <code>update_features</code></td></tr>
  <tr><td>Asesfer</td><td><code>run_geoprocessing</code>: yal afecku arcpy (<code>analysis.Buffer</code>, <code>sa.Slope</code>…)</td></tr>
  <tr><td>Tisizzeltin</td><td><code>list_layouts</code>, <code>create_layout</code>, <code>export_layout</code></td></tr>
</table>
<h3>Asenario n umahil (isefka n Tlemsan)</h3>
<ol>
  <li>« Sbadu tallunt n umahil ɣer <code>C:/ENIV/TP/Shapefiles</code> syen bder feature classes. »</li>
  <li>« Rnu Communes d Forages ɣer tkarḍa. D acu i d anagraw n yimsidag n yal yiwet? »</li>
  <li>« Fren iɣunam yesɛan ETAT Exploité syen siḍen-iten. »</li>
  <li>« Snulfu-d buffer n 200 m i yiɣunam, s usdukkel n yiferdisen akk, deg <code>TP_ENIV.gdb</code>. »</li>
  <li>« Siḍen iɣunam i yal tiɣiwant (Summarize Within). »</li>
  <li>« Siḍen asawen n MNT <code>C:/ENIV/TP/MNT/MNT_50m.asc</code> s tseggiwin. » (yessefk usiɣzef Spatial Analyst)</li>
  <li>« Snulfu-d tasizzelt A4 s tkarḍa syen sifeḍ-itt s PNG ɣer <code>C:/ENIV/TP/Sorties/forages_ia.png</code>. »</li>
  <li>« Efk-iyi-d askript arcpy i yettɛawaden imecwaren-a. » Serwes-it d yiskripten-ik n uswir 6.</li>
</ol>
<div class="astuce"><b>Asenqed:</b> ldi tafelwit n tmeẓliwin n yigmaḍ, senqed anagraw n yimsidag (WGS 1984 UTM 30N) d tyunitin, syen ales yiwen n umecwar s ufus akken ad tserwseḍ.</div>`,
  exercice: `
<ol>
  <li>Xdem asenario akk syen rnu takarḍa PNG ɣer uneqqis-ik.</li>
  <li>Aru isutar ur yettwafehmen ara syen ales-asen tira.</li>
  <li>Xdem amahil-nni yakan deg QGIS (aswir 9 n ubrid QGIS) syen serwes.</li>
</ol>` };
B["p9-l4"] = { titre: "Tarrayt war agrudem, tilisa d tɣellist", objectifs: ["Issin tarrayt nniḍen i yetteddun war ma teldiḍ ArcGIS Pro", "Ṭṭef deg wayen i yesselkam umalal"],
  contenu: `
<h3>Tarrayt nniḍen: arcgis-mcp-bridge</h3>
<p>Asenfar <b>arcgis-mcp-bridge</b> (PyPI, turagt Apache-2.0, Windows, ArcGIS Pro s turagt) yesselkam arcpy deg ugilal, war agrudem. Yettak-d azal n meyya n yifecka n usesfer. Asebded: <code>py -m pip install --upgrade arcgis-mcp-bridge</code>, syen <code>py -m arcgis_mcp.setup_env</code>, i d-yesnulfuyen tawennaḍt Python i yiman-is. Deg twila n Claude Desktop, ḥettem ikaramen yettwakecmen s <code>"ARCGIS_MCP_ALLOWED_ROOTS": "C:\\\\ENIV\\\\TP"</code>. Ifecka n usenger (tukksa n yisefka, asiḍen n urti…) sran asentem s wudem aflan.</p>
<h3>Tarrayin yelhan</h3>
<ul>
  <li><b>Turagin</b>: ɣer yal asuter n ufecku deg Claude Desktop syen fren « Allow once ».</li>
  <li><b>Tangalt Python</b>: afecku <code>execute_python</code> n MCP-ArcGISPro yensa s wudem amezwer. Ǧǧ-it yensa deg umahil.</li>
  <li><b>Isefka</b>: ayen yeqqar Claude yettwazen ɣer umeẓlu n tegi tazzayant. Seqdec isefka isuganen n umahil, werǧin isefka uffiren neɣ udmawanen.</li>
  <li><b>Asenqed</b>: tagi tazzayant tezmer ad tɣelleḍ s tumast (tissi tucciḍt, tiyunin, anagraw n yimsidag). Senqed yal agmuḍ.</li>
  <li><b>Tulsa</b>: suter askript arcpy neɣ bnu tamudemt ModelBuilder (aswir 5).</li>
  <li><b>Xdem ɣef unɣel</b> n <code>C:\\ENIV\\TP</code> syen sekles asenfar uqbel yal asuter n uzal.</li>
</ul>
<p>Tagi tazzayant tessaɣzal imecwaren yettɛawaden, maca afran n yiwtilen d teẓayt d usegzi n tkarḍa n uɣṛis qqimen d amahil-ik d amsedday (ingénieur).</p>`,
  exercice: `
<ol>
  <li>Suter deg Claude ad yales asmizzwer n usawen ɣer 5 n taggayin syen senqed tilisa n taggayin deg uzamul.</li>
  <li>Aru 5 n yizirigen ɣef lfayda d yiɣṛisen n tegi tazzayant i tnedbalt n tezrawin SIG.</li>
</ol>` };
B.p9.quiz.push({ question: "Anta tifrat i yetteddun war ajerred u war Internet deg umahil?", choix: ["Claude Desktop", "LM Studio neɣ Ollama s tmudemt tadigant", "Asideg ameḍrar", "Ulac"], explication: "Tamudemt tadigant tetteddu ɣef uselkim; Internet ilaq kan yiwet n tikkelt i usader-is." });
