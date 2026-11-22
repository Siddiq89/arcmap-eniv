/* Asuqel n ubrid QGIS ɣer tmaziɣt (isekkilen ilatiniyen). Ifecka ttwaǧǧan s tegleẓit. */
window.TRAD = window.TRAD || {};
window.TRAD.ber = window.TRAD.ber || {};
var B = window.TRAD.ber;

B.qgis = { accroche: "QGIS, aseɣzan n SIG ilelli, seg yisekkilen alamma d takarḍa n yiɣṛisen",
  lead: "Abrid-nni yakan s QGIS, baṭel d ilelli: asenfar d yigalisen, isefka d SCR, azamul d tsizzelt n tkerḍiwin, tabwaṭ n yifecka n usesfer, amsukkes udlifan, PyQGIS, syen tasnamant s GRASS d tkerḍiwin n tsedrayt ɣer yiɣṛisen igamanen. Yelha i umahil deg uxxam war turagt. Isefka n umahil d yiwen i kraḍ n yiseɣzan." };

/* ---------- Aswir 1 ---------- */
B.q1 = { titre: "Tazwart ɣer QGIS", resume: "Asebded n QGIS, asenfar .qgz, igalisen, Browser, tunigin d yisiɣzaf.",
  quiz: [
    { question: "D acu i d asiɣzef n usenfar QGIS?", choix: [".mxd", ".aprx", ".qgz", ".gpkg"], explication: ".qgz d asenfar yettwassedsen; .gpkg d amasal n yisefka." },
    { question: "Anwa lqem n QGIS ara nefren i tzeqqa n umahil?", choix: ["Aneggaru", "LTR", "Lqem n ukayad (beta)", "Yal yiwen"], explication: "LTR (Long Term Release) yettwaḥraz akud ameqqran yerna yerkeḍ ugar." },
    { question: "Ayen yerran ɣer ArcToolbox deg QGIS d:", choix: ["Agalis Layers", "Processing Toolbox", "Amsefrak n yisiɣzaf", "Browser"], explication: "Yesdukkel ilguritmen n QGIS, GDAL, GRASS d yisiɣzaf." },
    { question: "Amasal n usekles yettwawellhen deg QGIS d:", choix: ["Shapefile", "GeoPackage", "KML", "DXF"], explication: "GeoPackage yiwen yerna yeṭṭef aṭas n tissiyin vector d raster." }
  ] };
B["q1-l1"] = { titre: "Sebded QGIS syen issin agrudem", objectifs: ["Sebded lqem LTR n QGIS", "Issin igalisen d yifeggagen n yifecka", "Snulfu-d asenfar syen sekles-it"],
  contenu: `
<p>QGIS d SIG <b>ilelli yerna baṭel</b> (qgis.org). Sebded lqem <b>LTR</b> (tallelt i wakud aɣezfan), yerkeḍ ugar i uselmed. Asebded n Windows yesɛa GRASS GIS, ara nesqedcen deg uswir 7.</p>
<table class="tab">
  <tr><th>ArcMap / ArcGIS Pro</th><th>QGIS</th></tr>
  <tr><td>.mxd / .aprx</td><td>Asenfar <b>.qgz</b></td></tr>
  <tr><td>Table of Contents / Contents</td><td>Agalis <b>Layers</b> (tissiyin)</td></tr>
  <tr><td>ArcCatalog / Catalog</td><td>Agalis <b>Browser</b></td></tr>
  <tr><td>ArcToolbox / Geoprocessing</td><td><b>Processing Toolbox</b> (Ctrl+Alt+T)</td></tr>
  <tr><td>ModelBuilder</td><td><b>Graphical Modeler</b></td></tr>
  <tr><td>Asfaylu Python (arcpy)</td><td><b>Python Console</b> (PyQGIS, Ctrl+Alt+P)</td></tr>
  <tr><td>File geodatabase</td><td><b>GeoPackage</b> (.gpkg)</td></tr>
</table>
<p>Sken neɣ ffer igalisen s <i>View &gt; Panels</i>. Rnu isefka s uzuɣer-nsen seg Browser neɣ s <i>Layer &gt; Add Layer</i>. Sekles asenfar deg <code>C:\\ENIV\\Projets\\TP_ENIV.qgz</code> syen rmed <i>Project &gt; Properties &gt; General &gt; Save paths: Relative</i>.</p>
<p><b>Isiɣzaf</b> (<i>Plugins &gt; Manage and Install Plugins</i>) rnun timahilin: QuickMapServices (tikarḍiwin n wadda), SAGA NextGen Provider, WhiteboxTools…</p>`,
  exercice: `
<ol>
  <li>Sebded QGIS LTR, syen snulfu-d asenfar <code>TP_ENIV.qgz</code>.</li>
  <li>Deg Browser, rnu asmenyif ɣer <code>C:\\ENIV\\TP</code>.</li>
  <li>Sali Communes, Routes d Oueds, syen sebded asiɣzef QuickMapServices, rnu takarḍa n wadda OpenStreetMap.</li>
</ol>` };
B["q1-l2"] = { titre: "Tunigin, asissen d uktili", objectifs: ["Seqdec ifecka n tunigin d usissen", "Ktil imeccaq d tiɣzi", "Sken takarḍa s 3D"],
  contenu: `
<ul>
  <li><b>Tunigin</b>: afecku Pan, tawrirt n umumed i usemɣer, <i>Zoom to Layer</i> (asiti ayeffus ɣef tissi).</li>
  <li><b>Identify Features</b> (Ctrl+Shift+I): yesskan timeẓliwin n uferdis s yiwen usiti.</li>
  <li><b>Aktili</b> n yizirig, n tiɣzi neɣ n teɣmert (afeggag Attributes): iktilen d ilipsuyanen s wudem amezwer.</li>
  <li><b>Ticraḍ timkanin</b>: <i>View &gt; New Spatial Bookmark</i> (Ctrl+B).</li>
  <li>Afeggag n waddad: imsidag n teḥnaccaḍt, taskala, SCR n usenfar (sit fell-as akken ad t-tbeddleḍ).</li>
</ul>
<p>I 3D: <i>View &gt; 3D Map Views &gt; New 3D Map View</i>. Deg twila n tmeẓri 3D, fren MNT d <b>akal</b> (terrain) d usemɣer ubdid n 2.</p>`,
  exercice: `
<ol>
  <li>Ktil teɣzi n ubrid agejdan d tiɣzi n tɣiwant meqqren akk.</li>
  <li>Snulfu-d snat n tcraḍ (tamnaḍt n tezrawt, aɣerbaz n tɣiwant).</li>
  <li>Ldi tamuɣli 3D s MNT d akal.</li>
</ol>` };

/* ---------- Aswir 2 ---------- */
B.q2 = { titre: "Isefka d yinagrawen n yimsidag", resume: "GeoPackage, SCR d usenfeḍ, tifelwiyin, tuqqniwin d CSV, asumḍen d usideg ameḍrar.",
  quiz: [
    { question: "Tissi war afaylu .prj, nessen anagraw-is: d acu ara nexdem?", choix: ["Ad tt-nesnefḍ", "Ad nesbadu SCR n tissi", "Asideg ameḍrar", "Ad tt-nerr d raster"], explication: "Asbadu n SCR ur ibeddel ara imsidag." },
    { question: "Anta tenfalit i d-yettaken tiɣzi s km² deg Field Calculator?", choix: ["$length / 1000", "$area / 1000000", "area(km)", "$perimeter"], explication: "$area s tyunitin tikuẓanin n SCR (m² deg UTM)." },
    { question: "Anwa afecku n QGIS i usideg n tkarḍa yettwasekknen?", choix: ["Georeferencer", "Modeler", "Raster Calculator", "Atlas"], explication: "Layer > Georeferencer." },
    { question: "I wacu i yelha umiknaṭis n ufeggag Snapping?", choix: ["Ad yesmeɣer takarḍa", "Ad yeqqen tiqqiqin ɣer yiferdisen yellan", "Ad yekkes iferdisen", "Ad ibeddel SCR"], explication: "Snapping yessaggad tilmawin d unekcam n yiferdisen." }
  ] };
B["q2-l1"] = { titre: "SCR, asenfeḍ d GeoPackage", objectifs: ["Sbadu SCR n usenfar d tissiyin", "Mgel asbadu n SCR n tissi d usenfeḍ-is", "Sekles isefka deg GeoPackage"],
  contenu: `
<p>QGIS yettmeslay ɣef <b>SCR</b> (inagrawen n yimsidag), s tengalt EPSG: 4326 (WGS 84), <b>32630</b> (WGS 84 / UTM 30N, isefka n umahil), 30730 (Nord Sahara 1959 / UTM 30N). SCR n <b>usenfar</b> yettwasbadu deg uɣelluy ayeffus; tissiyin ttwasnefḍent imir-a i uskan.</p>
<ul>
  <li><b>Asbadu n SCR</b> n tissi war .prj: asiti ayeffus &gt; <i>Layer CRS &gt; Set Layer CRS</i> (neɣ alguritm <i>Assign projection</i>). Imsidag ur ttbeddilen ara.</li>
  <li><b>Asenfeḍ</b>: alguritm <i>Reproject layer</i> (vector) neɣ <i>Warp (reproject)</i> (raster). I Nord Sahara 1959 → WGS 84, QGIS yessumur-d tabdart n yiselkam yellan.</li>
</ul>
<h3>GeoPackage</h3>
<p>Asiti ayeffus ɣef tissi &gt; <i>Export &gt; Save Features As…</i>, amasal GeoPackage, afaylu <code>TP_ENIV.gpkg</code>, isem n tissi <code>communes</code>. Ales i yal tissi: yiwen ufaylu yeṭṭef akk amahil. Alguritm <i>Package layers</i> yexdem-it s tikkelt.</p>`,
  exercice: `
<ol>
  <li>Sbadu SCR n <code>Forages_sans_projection</code> (EPSG:32630).</li>
  <li>Snefeḍ <code>Communes_NordSahara1959</code> ɣer EPSG:32630 syen serwes-itt d <code>Communes</code>.</li>
  <li>Sdukkel 7 n tissiyin n udasil deg <code>TP_ENIV.gpkg</code>.</li>
</ol>` };
B["q2-l2"] = { titre: "Ajedwal n tmeẓliwin, tuqqniwin d CSV", objectifs: ["Beddel ajedwal syen seqdec Field Calculator", "Qqen ajedwal azɣaray", "Sali afaylu CSV n yimsidag"],
  contenu: `
<p>Asiti ayeffus &gt; <b>Open Attribute Table</b> (F6). Akeryun yessekcam asiẓreg; <b>Field Calculator</b> (Ctrl+I) yesnulfuy-d neɣ ileqqem urti s tenfalit: <code>$area / 1000000</code> (tiɣzi s km²), <code>"POP_2020" / ($area / 1e6)</code>, <code>upper("NOM")</code>.</p>
<h3>Tuqqna</h3>
<p>Sali <code>population_communes.csv</code> (Layer &gt; Add Layer &gt; Delimited Text, anabraz d tazelmezt tagezzmant, <i>No geometry</i>). Syen <i>Iɣewwaren n Communes &gt; Joins &gt; +</i>: urti n tuqqna <code>CODE</code>, urti n yiswi <code>CODE</code>. I tuqqna yettdumen: alguritm <i>Join attributes by field value</i>.</p>
<h3>Tinqiḍin XY</h3>
<p><code>releves_gps.csv</code> d aḍris yettwabeṭṭun: <i>Point coordinates</i>, X = <code>X</code>, Y = <code>Y</code>, SCR EPSG:32630.</p>`,
  exercice: `
<ol>
  <li>Qqen imezdaɣ ɣer tɣiwanin syen siḍen tazzayt.</li>
  <li>Sali tinqiḍin GPS syen fren tid yellan deg tɣiwant yesɛan ugar n yimezdaɣ (<i>Select by Location</i>).</li>
</ol>` };
B["q2-l3"] = { titre: "Asumḍen d usideg ameḍrar", objectifs: ["Snulfu-d tissi syen sumḍen-itt s Snapping", "Sideg takarḍa yettwasekknen"],
  contenu: `
<p><i>Layer &gt; Create Layer &gt; New GeoPackage Layer</i>: anaw n tgeometrit, SCR, urtiyen. Rmed asiẓreg (akeryun), syen <b>Add Feature</b>. Sbadu <b>Snapping</b> (afeggag Snapping, tignit n umiknaṭis) ɣef tissiyin akk, 10 px. Afecku <b>Vertex Tool</b> ibeddel tigeometriyin; agalis <i>Advanced Digitizing</i> yettak amkan n yifecka n ArcMap i usekcem uḍṛis.</p>
<h3>Georeferencer</h3>
<p><i>Layer &gt; Georeferencer</i>. Ldi tugna, rnu tinqiḍin n usideg (ma drus 4 ar 6) s tira n yimsidag neɣ s usiti ɣef tkarḍa. <i>Transformation Settings</i>: anaw Polynomial 1 (Helmert neɣ affine), SCR n yiswi EPSG:32630, asnemẓi Nearest neighbour. Bdu asideg: ad d-yettwasnulfu GeoTIFF yettwasegden akked ujedwal n yiqqimen.</p>`,
  exercice: `
<ol>
  <li>Snulfu-d tissi <code>puits</code> deg GeoPackage syen sumḍen 5 n yiɣunam.</li>
  <li>Sumḍen 3 n tferkiwin yemsadan s Snapping yermed.</li>
  <li>Sideg takarḍa yettwasekknen syen aru tuccḍa talemmast.</li>
</ol>` };

/* ---------- Aswir 3 ---------- */
B.q3 = { titre: "Azamul, tibzimin d tsizzelt n tkerḍiwin", resume: "Iɣunab Categorized, Graduated d Rule-based, tibzimin, Print Layout, Atlas.",
  quiz: [
    { question: "I tkarḍa n tezzayt, ad nefren aɣanib:", choix: ["Categorized", "Graduated", "Single symbol", "Heatmap"], explication: "Graduated yessismil azal amḍan ɣer tegrumma." },
    { question: "Atlas n QGIS yerra deg ArcGIS ɣer:", choix: ["Map series / Data Driven Pages", "ModelBuilder", "Geodatabase", "Asideg ameḍrar"], explication: "Yiwen usebter i yal aferdis n tissi n tɣumi." },
    { question: "S wacu n umasal i yettwasekles uɣanib n QGIS?", choix: [".lyr", ".qml", ".mxd", ".py"], explication: "Afaylu .qml yezmer ad yettwasnes ɣef yal tissi am tinna." },
    { question: "Anwa aɣanib i yettaǧǧan asuter yemgaraden i yal taggayt?", choix: ["Rule-based", "Graduated", "Single symbol", "Inverted polygons"], explication: "Yal alugen yesɛa imsizdeg-is d uzamul-is." }
  ] };
B["q3-l1"] = { titre: "Azamul d tibzimin", objectifs: ["Fren anaw n uɣanib yelhan", "Snulfu-d tibzimin d yiɣunab s yilugan"],
  contenu: `
<p>Agalis <b>Layer Styling</b> (F7) neɣ Properties &gt; Symbology:</p>
<ul>
  <li><b>Single Symbol</b>, <b>Categorized</b> (azalen n TYPE), <b>Graduated</b> (choroplèthe, askar Natural Breaks (Jenks)), <b>Rule-based</b> (yiwen usuter i yal taggayt), <b>Heatmap</b>.</li>
  <li>Izamulen imenzayen: deg Single Symbol, taqeffalt <i>Data defined override</i> ɣer tama n tiddi &gt; <i>Assistant</i>.</li>
</ul>
<p><b>Tibzimin</b>: iccer Labels &gt; <i>Single Labels</i>, azal <code>NOM</code>, tamnaḍt tamellalt. S <i>Rule-based Labeling</i>, iɣerbazen n tɣiwanin ttwabzamen s wudem nniḍen (<code>"CHEF_LIEU" = 'Oui'</code>).</p>
<p>Aɣanib yettwasekles s <code>.qml</code> (Style &gt; Save Style) akken ad yettwales useqdec-is.</p>`,
  exercice: `
<ol>
  <li>Xdem takarḍa Graduated n tezzayt s 5 n taggayin Jenks.</li>
  <li>Sken iɣunam s yizamulen imenzayen akked usenger (débit).</li>
  <li>Bzem tiɣiwanin s ulugen uslig i yiɣerbazen.</li>
</ol>` };
B["q3-l2"] = { titre: "Print Layout d Atlas", objectifs: ["Suddes takarḍa n usiggez syen sifeḍ-itt", "Snulfu-d takarḍa i yal tiɣiwant s Atlas"],
  contenu: `
<p><i>Project &gt; New Print Layout</i>. Rnu takarḍa, asegzawal, afeggag n teskala, aneccab n ugafa, tabzimt (azwel, aɣbalu) d tugna (alugu). Agalis <i>Item Properties</i> yesbadu yal aferdis. Asifeḍ: <i>Layout &gt; Export as PDF / Image</i>.</p>
<h3>Atlas</h3>
<p>Agalis <b>Atlas</b>: rmed <i>Generate an atlas</i>, tissi n tɣumi <code>Communes</code>, isem n usebter <code>NOM</code>. Deg yiɣewwaren n tkarḍa, rmed <i>Controlled by Atlas</i>. Azwel amussan yettwaru s tenfalit <code>[% 'Commune de ' || "NOM" %]</code>. <i>Atlas &gt; Export Atlas as PDF</i> yettak-d yiwen usebter i yal tiɣiwant.</p>`,
  exercice: `
<ol>
  <li>Suddes takarḍa A4 tummidt syen sifeḍ-itt s PDF 300 dpi.</li>
  <li>Snulfu-d Atlas n 9 n tɣiwanin s uzwel amussan.</li>
</ol>` };

/* ---------- Aswir 4 ---------- */
B.q4 = { titre: "Asesfer d tesleḍt tamkant", resume: "Processing Toolbox, asesfer n vector, ifecka n raster d Raster Calculator.",
  quiz: [
    { question: "Deg QGIS, « Merge vector layers » yerra deg ArcGIS ɣer:", choix: ["Dissolve", "Merge", "Union", "Intersect"], explication: "Deg yigrudmen s tefransist yella ufertaḍ: « Regrouper » (QGIS) = « Fusionner/Dissolve » (ArcGIS), ma d « Fusionner » deg QGIS yesdukkul tissiyin." },
    { question: "Anta taqeffalt i yesnasen alguritm ɣef waṭas n tissiyin?", choix: ["Run as Batch Process", "Iterate over this layer", "History", "Cancel"], explication: "Asesfer s tegrumma yeččur ajedwal n yinekcamen d tuffɣiwin." },
    { question: "Deg Raster Calculator, d acu i d « pente@1 »?", choix: ["Izirig amezwaru", "Tabanda 1 n raster n usawen (pente)", "Asawen n 1°", "Afaylu askudan"], explication: "@1 d tabanda; MNT yesɛa yiwet kan." },
    { question: "Anwa alguritm i yerran raster ɣer igeman (polygones)?", choix: ["Rasterize", "Polygonize", "Clip", "Dissolve"], explication: "Polygonize (GDAL) yesnulfuy-d yiwen ugemmu i yal agraw n texxamin s wazal-nni kan." }
  ] };
B["q4-l1"] = { titre: "Processing Toolbox d usesfer n vector", objectifs: ["Af-d alguritm syen seqdec asesfer s tegrumma", "Xdem Buffer, asemlili d umḍan s temnaḍt"],
  contenu: `
<p><b>Processing Toolbox</b> (Ctrl+Alt+T) yesdukkel ilguritmen n QGIS, GDAL d GRASS. Aru isem deg tnaka n unadi. Yal aselkem yettwaru deg <i>History</i> (tignit n tsaɛt), akked tladna-ines Python.</p>
<table class="tab">
  <tr><th>QGIS</th><th>ArcGIS</th></tr>
  <tr><td>Buffer</td><td>Buffer</td></tr>
  <tr><td>Clip</td><td>Clip</td></tr>
  <tr><td>Intersection</td><td>Intersect</td></tr>
  <tr><td>Union</td><td>Union</td></tr>
  <tr><td>Difference</td><td>Erase</td></tr>
  <tr><td>Dissolve</td><td>Dissolve</td></tr>
  <tr><td>Merge vector layers</td><td>Merge</td></tr>
  <tr><td>Count points in polygon</td><td>Summarize Within</td></tr>
  <tr><td>Join attributes by nearest</td><td>Near</td></tr>
</table>
<p>Ḥader ismawen deg yigrudmen s tefransist: « Fusionner » deg QGIS yesdukkul tissiyin, ma d « Fusionner » deg ArcGIS yesdukkul iferdisen.</p>
<p>Taqeffalt <b>Run as Batch Process</b> tesnas alguritm ɣef waṭas n tissiyin s tikkelt; taqeffalt tazegzawt <i>Iterate over this layer</i> tesnulfuy-d tuffɣa i yal aferdis.</p>`,
  exercice: `
<ol>
  <li>Snulfu-d Buffer yettwasdukklen n 200 m i yiɣunam.</li>
  <li>Siḍen iɣunam deg yal tiɣiwant.</li>
  <li>S usesfer s tegrumma, gzem 6 n tissiyin n udasil s temnaḍt n tezrawt.</li>
</ol>` };
B["q4-l2"] = { titre: "Raster: akal, Raster Calculator d usismel", objectifs: ["Siḍen asawen, tanila d tili n wakal", "Seqdec Raster Calculator d Reclassify by table", "Ɛeddi seg raster ɣer vector d tuɣalin"],
  contenu: `
<p>Rnu <code>MNT_50m.asc</code>, efk-as SCR EPSG:32630 (Properties &gt; Source) syen sifeḍ-it s GeoTIFF (asiti ayeffus &gt; Export &gt; Save As).</p>
<ul>
  <li><b>Slope</b>, <b>Aspect</b>, <b>Hillshade</b>: agraw <i>Raster terrain analysis</i> n tbwaṭ n yifecka.</li>
  <li><b>Raster Calculator</b> (umuɣ Raster): <code>("pente@1" &gt; 15) * 1</code> yettak 1 i yisawen iǧehden, 0 deg wayen nniḍen.</li>
  <li><b>Reclassify by table</b>: ajedwal n min / max / azal amaynut.</li>
  <li><b>Polygonize (raster to vector)</b> d <b>Rasterize (vector to raster)</b> (GDAL).</li>
  <li><b>Zonal statistics</b>: aɛlay alemmas n yal tiɣiwant.</li>
</ul>`,
  exercice: `
<ol>
  <li>Siḍen asawen d Hillshade; sken Hillshade ddaw MNT s uskar n usemlili Multiply.</li>
  <li>Sbeḍ isawen &gt; 15° syen err-iten d igeman (Polygonize).</li>
  <li>Siḍen aɛlay alemmas n yal tiɣiwant.</li>
</ol>` };

/* ---------- Aswir 5 ---------- */
B.q5 = { titre: "Graphical Modeler", resume: "Bnu tamudemt s yinekcamen d yilguritmen, ales aseqdec-is am ufecku syen sifeḍ-itt ɣer Python.",
  quiz: [
    { question: "Deg Modeler n QGIS, d acu ara nbeyyen d amezwaru?", choix: ["Tuffɣiwin", "Inekcamen", "Iɣunab", "Isiɣzaf"], explication: "Inekcamen ttuɣalen d iɣewwaren n tmudemt." },
    { question: "Amek ara nselkem tamudemt yiwet n tikkelt i yal tiɣiwant?", choix: ["S yimsegged n ModelBuilder", "S « Iterate over this layer »", "S Atlas", "Ur yezmir ara"], explication: "Taqeffalt tazegzawt tesselkam alguritm ɣef yal aferdis." },
    { question: "D acu i d asiɣzef n tmudemt n QGIS?", choix: [".model3", ".tbx", ".qml", ".atbx"], explication: ".model3 seg QGIS 3." },
    { question: "Asifeḍ n tmudemt ɣer Python yettak-d:", choix: ["Askript arcpy", "Alguritm n usesfer PyQGIS", "Afaylu .qgz", "Tugna"], explication: "Askript yessawal processing.run i yal amecwar." }
  ] };
B["q5-l1"] = { titre: "Bnu tamudemt", objectifs: ["Beyyen inekcamen n tmudemt", "Sdukkel ilguritmen yeddan wa deffir wa"],
  contenu: `
<p><i>Processing &gt; Graphical Modeler</i>. Mgal ModelBuilder, ad nbeyyen deg tazwara <b>inekcamen</b> (iccer Inputs: tissi vector, tissi raster, amḍan, urti…), syen ad nernu <b>ilguritmen</b> (iccer Algorithms) s ufran, i yal aɣewwar, n unekcam n tmudemt neɣ n tuffɣa n ulguritm yezrin.</p>
<ol>
  <li>Inekcamen: <i>Vector Layer</i> « Forages », <i>Vector Layer</i> « Occupation du sol », <i>Number</i> « Distance » (azal amezwer 200).</li>
  <li>Alguritm <b>Buffer</b>: anekcam = Forages, ameccaq = Distance, sdukkel agmuḍ.</li>
  <li>Alguritm <b>Extract by attribute</b>: Occupation du sol, <code>TYPE = Urbain</code>.</li>
  <li>Alguritm <b>Difference</b>: Buffer ksen-as tiɣiwanin tiɣremanin; semmi tuffɣa « Périmètres » (ad tuɣal d tuffɣa n tmudemt).</li>
</ol>
<p>Sekles tamudemt (<code>.model3</code>) deg usenfar neɣ deg tmudmin n useqdac: ad d-tban deg tbwaṭ n yifecka, deg <i>Models</i>.</p>`,
  exercice: `
<ol>
  <li>Bnu tamudemt-a syen selkem-itt s 100 m, syen s 300 m.</li>
  <li>Rnu amecwar <b>Count points in polygon</b> s tɣiwant.</li>
</ol>` };
B["q5-l2"] = { titre: "Asegged, asemli d usifeḍ ɣer Python", objectifs: ["Ales tamudemt ɣef waṭas n yiferdisen neɣ n tissiyin", "Sifeḍ tamudemt d askript n usesfer"],
  contenu: `
<p>Modeler n QGIS ur yesɛi ara imsegged am ModelBuilder. I wakken ad tɛawdeḍ:</p>
<ul>
  <li><b>Iterate over this layer</b> (taqeffalt tazegzawt ɣer tama n unekcam): tamudemt tettwaselkam yiwet n tikkelt i yal aferdis, amedya i yal tiɣiwant.</li>
  <li><b>Run as Batch Process</b>: yiwen yizirig i yal agraw n yiɣewwaren (aṭas n yimeccaqen, aṭas n tissiyin).</li>
</ul>
<p>Aru asemli n tmudemt (<i>Edit Model Help</i>): aglam, asegzi n yal anekcam. Ɣer taggara, <i>Export as Script Algorithm</i> yettak-d alguritm n usesfer PyQGIS, d tazwara n uswir 6.</p>`,
  exercice: `
<ol>
  <li>Selkem tamudemt s « Iterate over this layer » ɣef tɣiwanin.</li>
  <li>Selkem-itt s tegrumma s kraḍ n yimeccaqen.</li>
  <li>Sifeḍ-itt d askript Python syen af-d tiɣriwin n <code>processing.run</code>.</li>
</ol>` };

/* ---------- Aswir 6 ---------- */
B.q6 = { titre: "Asihel s PyQGIS", resume: "Python Console, processing.run, tikli ɣef yiferdisen, iskripten n usesfer d usifeḍ n tkerḍiwin.",
  quiz: [
    { question: "Anta tawuri i yesselkamen alguritm n tbwaṭ n yifecka?", choix: ["arcpy.Buffer", "processing.run", "iface.run", "QgsBuffer()"], explication: "processing.run(\"asulay\", {iɣewwaren})." },
    { question: "Amek ara d-nawi tissi n usenfar s yisem-is?", choix: ["QgsProject.instance().mapLayersByName(\"Forages\")[0]", "arcpy.mp.Layer(\"Forages\")", "open(\"Forages\")", "iface.Forages"], explication: "mapLayersByName tettak-d tabdart (aṭas n tissiyin zemrent ad sɛunt yiwen yisem)." },
    { question: "I wacu i yelha « with edit(couche): »?", choix: ["Ad yeldi ajedwal", "Ad yebdu asiẓreg syen ad yesekles s yiman-is ɣer taggara", "Ad yekkes tissi", "Ad ibeddel aɣanib"], explication: "Iḥder yesseḥqaq ibeddilen neɣ yesefsay-iten ma yella tuccḍa." },
    { question: "Amek ara nissin iɣewwaren n native:buffer?", choix: ["processing.algorithmHelp(\"native:buffer\")", "help(buffer)", "Deg yiɣewwaren n usenfar", "Ur yezmir ara"], explication: "algorithmHelp yesskan-d iɣewwaren d wanawen-nsen." }
  ] };
B["q6-l1"] = { titre: "Python Console d processing.run", objectifs: ["Kcem ɣer tissiyin n usenfar s Python", "Selkem alguritm n tbwaṭ n yifecka s Python"],
  contenu: `
<p><i>Plugins &gt; Python Console</i> (Ctrl+Alt+P). Taqeffalt <i>Show Editor</i> teldi amaẓrag n yiskripten. QGIS 3 yesseqdac <b>Python 3</b>.</p>
<!--code:0-->
<p>I wakken ad tissineḍ asulay d yiɣewwaren n ulguritm: <code>processing.algorithmHelp("native:buffer")</code>, neɣ ldi alguritm, syen <i>Advanced &gt; Copy as Python Command</i>.</p>`,
  exercice: `
<ol>
  <li>Sken isem d umḍan n yiferdisen n yal tissi n usenfar.</li>
  <li>Selkem Buffer s Python syen rnu agmuḍ ɣer tkarḍa.</li>
</ol>` };
B["q6-l2"] = { titre: "Tikli ɣef yiferdisen d ubeddel-nsen", objectifs: ["Ɣer timeẓliwin d tgeometrit", "Beddel ajedwal deg yiḥder n usiẓreg"],
  contenu: `
<!--code:0-->
<p><code>with edit(couche):</code> yeldi asiẓreg, syen yesekles (neɣ yesefsay ma yella tuccḍa) s yiman-is.</p>`,
  exercice: `
<ol>
  <li>Siḍen asenger alemmas n yiɣunam yettwasqedcen.</li>
  <li>Rnu urti <code>CLASSE</code> syen ččar-it (Faible, Moyen, Fort) akken yella usenger.</li>
</ol>` };
B["q6-l3"] = { titre: "Iskripten n usesfer d usifeḍ awurman", objectifs: ["Snulfu-d askript ara d-yettbanen deg tbwaṭ n yifecka", "Sifeḍ Atlas s Python"],
  contenu: `
<p>Deg tbwaṭ n yifecka, tignit Python &gt; <i>Create New Script from Template</i>. Taneɣruft tbeyyen tasmilt <code>QgsProcessingAlgorithm</code> akked yiɣewwaren-is. Askript yettwaseklasen ad d-iban deg <i>Scripts</i>: yettwaldi am ufecku, yerna yezmer ad yettwaselkam s tegrumma.</p>
<p>Asifeḍ n tkarḍa neɣ n Atlas:</p>
<!--code:0-->
<p>Afaylu <code>qgis_01_bases.py</code> (Isadaren) yeṭṭef imedyaten-a.</p>`,
  exercice: `
<ol>
  <li>Snulfu-d askript n usesfer « Périmètre de protection » s sin n yiɣewwaren (tissi, ameccaq).</li>
  <li>Sifeḍ Atlas n tɣiwanin s PDF s uskript.</li>
</ol>` };

/* ---------- Aswir 7 ---------- */
B.q7 = { titre: "MNT, tasnamant d yibuzzar", resume: "Tasnamant s GRASS deg QGIS: aččar, r.watershed, aẓeṭṭa n yisaffen, asaru seg tuffɣa, timnaḍin yettwaɣelqen i yibuzzar.",
  quiz: [
    { question: "Anwa afecku n GRASS i yesseḍnen s tikkelt tagrumma, inumal, aẓeṭṭa d yisura?", choix: ["r.fill.dir", "r.watershed", "r.to.vect", "r.reclass"], explication: "r.watershed yettak-d tissiyin-a akk seg MNT." },
    { question: "Acuɣer kra n wazalen n tegrumma n r.watershed d inegdawen?", choix: ["Tuccḍa deg MNT", "Kra seg waman d-yekkan seg berra n temnaḍt", "Asawen ulac", "SCR mačči d ameɣtu"], explication: "Tixxamin-a zemrent ad ilint drus n wazal; nettaṭṭaf azal amagnu i uskan." },
    { question: "Anwa afecku i yesbadun asaru deg usawen n tenqiḍt?", choix: ["r.water.outlet", "Clip", "Proximity", "Atlas"], explication: "Yebda seg yinumal n usuddu d yimsidag n tuffɣa." },
    { question: "S wanwa afecku ara nesdukkel tiwtilin yettwasettḍen s tgerrut s wazal?", choix: ["Raster Calculator", "Dissolve", "Georeferencer", "Print Layout"], explication: "Raster Calculator yeqbel tanfalit s wazalen." }
  ] };
B["q7-l1"] = { titre: "Aẓeṭṭa n yisaffen s GRASS", objectifs: ["Seqdec ifecka n GRASS deg tbwaṭ n yifecka", "Siḍen tagrumma, inumal d uẓeṭṭa s r.watershed"],
  contenu: `
<p>Tasnakt (tiɣezzuyin, D8, tagrumma, tilisa) tettwaseɣzen deg uswir 7 n ubrid ArcMap. Deg QGIS, nesseqdac <b>GRASS</b>, yellan deg tbwaṭ n yifecka (agraw <i>GRASS &gt; Raster</i>).</p>
<ol>
  <li><b>r.fill.dir</b>: yeččar tiɣezzuyin syen yesseḍnen inumal (tuffɣiwin: MNT yeččuren, inumal, timnaḍin s wuguren).</li>
  <li><b>r.watershed</b> ɣef MNT yeččuren: <i>Minimum size of exterior watershed basin</i> = 400 (n texxamin), rmed <i>Enable Single Flow Direction (D8)</i>. Tuffɣiwin: <i>Number of cells that drain through each cell</i> (tagrumma), <i>Drainage direction</i>, <i>Stream segments</i>, <i>Unique label for each watershed basin</i>.</li>
  <li><b>r.to.vect</b> (anaw line) ɣef yiḥricen n yisaffen akken ad d-tawiḍ izirigen, neɣ <i>Polygonize</i> i yisura.</li>
</ol>
<div class="astuce"><b>Ḥader:</b> r.watershed yettak tagrumma <b>tanegdawt</b> i texxamin i d-yeṭṭafen aman seg berra n MNT. Seqdec <code>abs("acc@1")</code> deg Raster Calculator i uskan.</div>
<p>I usettef n Strahler, sebded asiɣzef <b>SAGA NextGen Provider</b> (alguritm <i>Strahler order</i>) neɣ seqdec <i>Channel network and drainage basins</i> n SAGA.</p>`,
  exercice: `
<ol>
  <li>Selkem r.fill.dir syen r.watershed s tilisa n 400 n texxamin.</li>
  <li>Err aẓeṭṭa d vector syen serwes-it d tissi Oueds.</li>
  <li>Ales asiḍen s 200 d 1 000 n texxamin.</li>
</ol>` };
B["q7-l2"] = { titre: "Asaru d tmnaḍin n yibuzzar", objectifs: ["Sbadu asaru seg tuffɣa", "Xdem takarḍa n tsedrayt ɣer yibuzzar"],
  contenu: `
<h3>Asaru</h3>
<p><b>r.water.outlet</b>: anekcam = <i>Drainage direction</i> n r.watershed, imsidag n tuffɣa (sit ɣef tkarḍa, ɣef texxamt n uẓeṭṭa; imsidag n <code>Exutoire.shp</code> ttwaɣran s ufecku Identify). Err agmuḍ d agemmu, syen siḍen <code>$area / 1e6</code> d umatar n Gravelius <code>0.28 * $perimeter / sqrt($area)</code>.</p>
<h3>Timnaḍin n yibuzzar</h3>
<ol>
  <li>Ameccaq ɣer wasif: <b>Rasterize</b> aẓeṭṭa, syen <b>Proximity (raster distance)</b> (GDAL).</li>
  <li>Aɛlay sennig wasif: s GRASS, <b>r.stream.distance</b> (asiɣzef n GRASS); ma ulac, qerreb-it s umgired gar MNT d <i>minimum filter</i> adigan, neɣ seqdec ameccaq waḥd-s.</li>
  <li>Asawen, tagrumma, aseqdec n wakal yettwarren d raster.</li>
  <li><b>Reclassify by table</b> i yal tawtilt seg 1 ar 5, syen <b>Raster Calculator</b>: <code>0.35*"dist@1" + 0.25*"haut@1" + 0.20*"pente@1" + 0.10*"acc@1" + 0.10*"occ@1"</code>.</li>
  <li>Aseḥqeq: <b>Sample raster values</b> ɣef <code>Laisses_crues.shp</code>.</li>
</ol>
<p>Askript <code>qgis_02_hydrologie.py</code> yesseqdac s wudem awurman aḥric n uẓeṭṭa d usaru.</p>`,
  exercice: `
<ol>
  <li>Sbadu asaru n wasif n Tamda syen siḍen tiɣzi-ines.</li>
  <li>Bnu takarḍa n tsedrayt ɣer yibuzzar syen seḥqeq-itt s yimdanen n yibuzzar.</li>
</ol>` };

/* ---------- Aswir 8 ---------- */
B.q8 = { titre: "Tasedrayt ɣer yiɣṛisen igamanen imeqqranen", resume: "Tasleḍt s waṭas n twtilin deg QGIS, tikarḍiwin n tmes, izenzalen, tsunami d uɣelluy n wakal, akked tegzemt n yiɣṛisen.",
  quiz: [
    { question: "Deg QGIS, amek ara d-nawi takarḍa n umeccaq ɣer yibriden?", choix: ["Buffer", "Rasterize syen Proximity (raster distance)", "Dissolve", "Clip"], explication: "Proximity (GDAL) yettmahal ɣef raster: ad nerr ibriden d raster deg tazwara." },
    { question: "Ayen yerran ɣer Kernel Density deg QGIS d:", choix: ["Heatmap (Kernel Density Estimation)", "Zonal statistics", "Polygonize", "Atlas"], explication: "Heatmap (Kernel Density Estimation)." },
    { question: "D acu ilaqen ad nsenqed uqbel tagrumma s wazal deg Raster Calculator?", choix: ["Initen", "Yiwet n temnaḍt d yiwet n tiddi n texxamt", "Ismawen n yifuyla", "Amasal .asc"], explication: "Ma ulac, tixxamin ur ttemsaraynt ara akken iwata." },
    { question: "Anwa afecku i d-yettaken aɣṛis ameqqran i yal taxxamt?", choix: ["Cell statistics (Maximum)", "Zonal statistics", "Merge vector layers", "Reclassify"], explication: "Yesserwas raster s raster, taxxamt s taxxamt." }
  ] };
B["q8-l1"] = { titre: "Tasleḍt s waṭas n twtilin deg QGIS", objectifs: ["Heggi tiwtilin raster s yifecka n QGIS d GDAL", "Sdukkel tiwtilin s Raster Calculator"],
  contenu: `
<p>Tarrayt (aɣṛis, tasedrayt, tazmilin seg 1 ar 5, azalen, AHP, aseḥqeq) tettwaglem deg uswir 8 n ubrid ArcMap. Imserwasen n yifecka:</p>
<table class="tab">
  <tr><th>Amecwar</th><th>ArcGIS</th><th>QGIS</th></tr>
  <tr><td>Ameccaq</td><td>Euclidean Distance</td><td>Rasterize + Proximity (raster distance)</td></tr>
  <tr><td>Tazzayt n tenqiḍin</td><td>Kernel Density</td><td>Heatmap (Kernel Density Estimation)</td></tr>
  <tr><td>Vector → raster</td><td>Polygon to Raster</td><td>Rasterize (vector to raster)</td></tr>
  <tr><td>Tazmilt</td><td>Reclassify</td><td>Reclassify by table</td></tr>
  <tr><td>Tagrumma s wazal</td><td>Weighted Overlay</td><td>Raster Calculator</td></tr>
  <tr><td>Afellay n waṭas n raster</td><td>Cell Statistics</td><td>Cell statistics</td></tr>
  <tr><td>Agmuḍ s tɣiwant</td><td>Zonal Statistics as Table</td><td>Zonal statistics</td></tr>
  <tr><td>Aseḥqeq</td><td>Extract Values to Points</td><td>Sample raster values</td></tr>
</table>
<div class="astuce"><b>Aswired:</b> i Raster Calculator, raster akk ilaq ad sɛun yiwet n temnaḍt d yiwet n tiddi n texxamt. Deg Rasterize, efk tamnaḍt n MNT d usebɣes n 50 m.</div>`,
  exercice: `
<ol>
  <li>Heggi tawtilt « ameccaq ɣer yibriden » (Rasterize syen Proximity) syen efk-as tazmilt seg 1 ar 5.</li>
  <li>Senqed deg yiɣewwaren n tissiyin d akken raster akk sɛan yiwet n temnaḍt d yiwen usebɣes.</li>
</ol>` };
B["q8-l2"] = { titre: "Tikarḍiwin n uɣṛis: times, izenzalen, tsunami, aɣelluy n wakal", objectifs: ["Xdem rebɛa n tkerḍiwin n uɣṛis deg QGIS", "Seḥqeq s yineḍruyen yettwaɛeqlen"],
  contenu: `
<p>Tiwtilin d wazalen d wid n ufaylu <code>Tables\\poids_multicritere.xlsx</code> (yettwaldi srid deg QGIS):</p>
<ul>
  <li><b>Times</b>: aseqdec n wakal 35, asawen 20, tanila 15 (afecku <i>Aspect</i>, idurar n unẓul = 5), ibriden 15, imukan yettwazedɣen 15. Aseḥqeq: Foyers_incendies.</li>
  <li><b>Izenzalen</b>: tiṛucin turmidin 40 (imsizdeg <code>"ACTIVE" = 'Oui'</code>), tazzayt n yiẓuran n yizenzalen 25 (Heatmap, aqqar n 3 000 m), asemdu n wadeg 25 (err urti <code>AMPLIF</code> d raster), asawen 10.</li>
  <li><b>Tsunami</b>: ɣef <code>MNT_cote_25m</code>, akal = <code>("mnt@1" &gt; 0) * "mnt@1"</code>; aɛlay 50, ameccaq ɣer yiri n yill 35, asawen 15. Asnarya n tmewwit n 5 m: <code>("mnt@1" &gt; 0) AND ("mnt@1" &lt;= 5) AND ("dist@1" &lt;= 1000)</code>.</li>
  <li><b>Aɣelluy n wakal</b>: err <code>SUSC_GLIS</code> d raster (yesɛa yakan tazmilt seg 1 ar 5) 35, asawen 30, isaffen 15, aseqdec n wakal 10, ibriden 10. Aseḥqeq: Glissements.</li>
</ul>
<p>Askript <code>qgis_03_risque_feux.py</code> yexdem takarḍa n tmes seg tazwara ar taggara, yerna yezmer ad yili d tamudemt i tlata nniḍen.</p>`,
  exercice: `
<ol>
  <li>Xdem takarḍa n uɣṛis n tmes s Graphical Modeler (yiwen unekcam i yal tissi, azalen d inekcamen imḍanen).</li>
  <li>Xdem tikarḍiwin n yizenzalen, tsunami d uɣelluy n wakal.</li>
  <li>Serwes igmaḍ-ik d wid i d-tewwiḍ deg ArcGIS (isefka-nni, azalen-nni).</li>
</ol>` };
B["q8-l3"] = { titre: "Tagzemt n yiɣṛisen d Atlas n tɣiwanin", objectifs: ["Sdukkel iɣṛisen", "Xdem Atlas n tegzemt i yal tiɣiwant"],
  contenu: `
<ul>
  <li><b>Cell statistics</b> (Maximum) ɣef rebɛa n tkerḍiwin n taggayin: aɣṛis ameqqran i yal taxxamt.</li>
  <li>Amḍan n yiɣṛisen iǧehden deg Raster Calculator: <code>("inond@1" &gt;= 4) + ("feux@1" &gt;= 4) + ("seisme@1" &gt;= 4) + ("gliss@1" &gt;= 4)</code>.</li>
  <li><b>Zonal statistics</b> ɣef <code>Communes</code> (alemmas n umḍan), syen aɣanib Graduated.</li>
  <li>Print Layout s <b>Atlas</b>: yiwen usebter i yal tiɣiwant, s tkarḍa n yiɣṛisen, ajedwal n tmeẓliwin (iɣerbazen yettwaḥezzen) d tamawt <i>isefka isuganen i uselmed</i>.</li>
</ul>`,
  exercice: `
<ol>
  <li>Xdem tikarḍiwin n uɣṛis ameqqran d umḍan.</li>
  <li>Snulfu-d Atlas n yiɣṛisen n 9 n tɣiwanin s PDF.</li>
</ol>` };

/* ---------- Aswir 9 ---------- */
B.q9 = { titre: "Qqen tagi tazzayant ɣer QGIS", resume: "Qqen amalal n tegi tazzayant (Claude) ɣer useɣzan QGIS s uneggaf MCP, ssiwel asenfar s tutlayt tagamant ɣef yisefka n Tlemsan, syen ṭṭef deg yigmaḍ.",
  quiz: [
    { question: "Deg QGIS MCP, d acu i d tamlilt n Claude Desktop?", choix: ["Aqeddac MCP", "Amsaɣ MCP", "Asiɣzef n QGIS", "Amasal n yisefka"], explication: "Claude Desktop d amsaɣ: yesselkam aqeddac MCP syen yessawal i yifecka-s." },
    { question: "D acu ilaqen ad txedmeḍ deg QGIS uqbel ad taruḍ i Claude?", choix: ["Ulac", "Sit ɣef Start Server deg usiɣzef QGIS MCP", "Ldi Python Console", "Sebded GRASS"], explication: "Asiɣzef ilaq ad yeddu akken ad yeṭṭef tiladna." },
    { question: "Anwa afecku i yesra ugar n uḥader?", choix: ["ping", "get_layers", "execute_code", "zoom_to_layer"], explication: "execute_code yesselkam yal tangalt Python: ɣer-itt uqbel ad tqebleḍ." },
    { question: "Amek ara nerr tasleḍt yettwaxedmen s tegi tazzayant tettwales?", choix: ["Ales adiwenni-nni", "Suter askript PyQGIS neɣ bnu tamudemt", "Ṭṭef tugna n ugdil", "Ur yezmir ara"], explication: "Askript neɣ tamudemt ttwalasen akken llan; adiwenni ala." }
  ] };
B.q9.quiz.push({ question: "Anta tifrat i yetteddun war ajerred war Internet deg umahil?", choix: ["Claude Desktop", "LM Studio neɣ Ollama s tmudemt tadigant", "Asideg ameḍrar", "Ulac"], explication: "Tamudemt tadigant tetteddu ɣef uselkim; Internet yesra-t kan yiwet n tikkelt i usader-is." });
B["q9-l1"] = { titre: "Fhem MCP syen sebded QGIS MCP", objectifs: ["Fhem tamlilt n umsaɣ, n uqeddac MCP d usiɣzef n QGIS", "Sebded QGIS MCP syen qqen-it ɣer Claude Desktop", "Senqed tuqqna s ukayad amezwaru"],
  contenu: `
<p><b>MCP</b> (<i>Model Context Protocol</i>) d aneggaf yeldin i yettaǧǧan amalal n tegi tazzayant ad yesseqdec <b>ifecka</b> i d-yettak useɣzan. Deg wadeg ad d-yerr kan s uḍris, amalal yezmer ad yessuter deg QGIS ad yessali tissi, ad yesselkem alguritm neɣ ad d-yesnulfu takarḍa.</p>
<table class="tab">
  <tr><th>Aferdis</th><th>Tamlilt</th></tr>
  <tr><td><b>Amsaɣ MCP</b></td><td>Asnas n udiwenni: dagi d <b>Claude Desktop</b>. Dinna i tettaruḍ isutar-ik.</td></tr>
  <tr><td><b>Aqeddac MCP</b></td><td>Ahil Python amecṭuḥ i yesselkam Claude Desktop. Yeglem ifecka yellan (asali n tissi, aselkem n usesfer…).</td></tr>
  <tr><td><b>Asiɣzef n QGIS</b></td><td>Yeldi tuqqna tadigant deg QGIS syen yesselkam s tidet tiladna i d-yeṭṭef.</td></tr>
</table>
<p>Nesseqdac asenfar ilelli <b>QGIS MCP</b> n J. J. Santos (github.com/jjsantos01/qgis_mcp). D asenfar n tmetti, mačči d unṣib n QGIS neɣ n Anthropic. Ameskar-is yerra-t ɣef QGIS 3.22: senqed-it ɣef lqem-ik uqbel tamsirt.</p>
<h3>Asebded</h3>
<ol>
  <li>Sebded <b>Claude Desktop</b> (claude.ai/download) syen kcem s umiḍan-ik.</li>
  <li>Sebded <b>Python 3.10</b> neɣ ugar, syen amsefrak n yikemmusen <b>uv</b>. Deg PowerShell:<br><code>powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code></li>
  <li>Deg usebter n usenfar deg GitHub, sit ɣef <i>Code &gt; Download ZIP</i> syen kkes tussda deg <code>C:\\ENIV\\mcp\\qgis_mcp</code>.</li>
  <li>Nɣel akaram <code>qgis_mcp_plugin</code> deg ukaram n yisiɣzaf n umaɣnu-k QGIS. I wakken ad t-tafeḍ: <i>Settings &gt; User Profiles &gt; Open Active Profile Folder</i>, syen <code>python\\plugins</code>.</li>
  <li>Ales asenker n QGIS. Deg <i>Plugins &gt; Manage and Install Plugins</i>, iccer <i>All</i>, nadi « QGIS MCP » syen rmed-it.</li>
  <li>Selkem <i>Plugins &gt; QGIS MCP &gt; QGIS MCP</i> syen sit ɣef <b>Start Server</b>.</li>
  <li>Deg Claude Desktop: <i>Settings &gt; Developer &gt; Edit Config</i>. Senteḍ iḥder-a deg <code>claude_desktop_config.json</code> (afaylu <code>mcp_qgis_config.json</code> deg Isadaren):</li>
</ol>
<!--code:0-->
<p>Ales asenker n Claude Desktop. Tignit n yifecka ilaq ad d-tesken aqeddac <b>qgis</b>. Akayad amezwaru: aru « Senqed tuqqna d QGIS (ping) syen efk-iyi-d lqem n QGIS ».</p>
<div class="astuce"><b>Ur tettxelliḍ ara:</b> asarag unṣib n yisiɣzaf n QGIS yesɛa daɣen asiɣzef « QGIS MCP » (N. Karasiak). Yetteddu s uqeddac-is <code>qgis-mcp</code> d twila nniḍen. Ur tettxelliḍ ara sin n yisenfaren-a.</div>`,
  exercice: `
<ol>
  <li>Sebded Claude Desktop, uv d usiɣzef QGIS MCP.</li>
  <li>Bdu aqeddac deg QGIS syen rnu twila deg Claude Desktop.</li>
  <li>Xdem akayad « ping » syen aru lqem n QGIS i d-yerra Claude.</li>
</ol>` };
B["q9-l2"] = { titre: "War ajerred: tagi tazzayant baṭel neɣ tadigant", objectifs: ["Issin ayen i d-tettak tifrat tilellit n Claude", "Qqen QGIS ɣer tmudemt n tegi tazzayant tadigant u baṭel (LM Studio neɣ Ollama)", "Ṣeggem isutar-ik i tmudemt tamecṭuḥt"],
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
  <li>Sader tamudemt i izemren ad tesseqdec ifecka (<i>tool use</i>), amedya <b>Qwen3 8B</b> neɣ <b>Qwen2.5 7B Instruct</b>.</li>
  <li>Agalis ayeffus, iccer <i>Program</i> &gt; <i>Install &gt; Edit mcp.json</i>. Senteḍ iḥder-nni <code>mcpServers</code> am deg Claude Desktop (afaylu <code>mcp_qgis_config.json</code>), syen sekles.</li>
  <li>Bdu aqeddac deg QGIS (taqeffalt Start Server), ldi adiwenni d tmudemt syen ɛreḍ « ping ».</li>
</ol>
<h3>Tifrat 2: Ollama d ollmcp</h3>
<ol>
  <li>Sebded <b>Ollama</b> (ollama.com), syen deg tdiwent: <code>ollama pull qwen2.5:7b</code>.</li>
  <li>Sebded amsaɣ MCP ilelli <b>ollmcp</b> (Python 3.11 neɣ ugar): <code>uv tool install ollmcp</code>.</li>
  <li>Selkem-it s twila n usmel: <code>ollmcp --servers-json C:\\ENIV\\mcp\\mcp_qgis_config.json --model qwen2.5:7b</code>.</li>
</ol>
<div class="astuce"><b>Ibenkan d tarrayt:</b> ilaq ma drus 16 Go n tkatut i tmudemt n 7 ar 8 n yimelyaren n yiɣewwaren; takarḍa tudlift tettɣawal aṭas. Tamudemt tamecṭuḥt tettɣelliḍ ugar n tameqqrant: aru yiwen usuter i yal amecwar, semmi s telqay tissiyin d yirtiyen, syen senqed yal agmuḍ. Lfayda: isefka ur ffɣen ara seg uselkim.</div>`,
  exercice: `
<ol>
  <li>Sebded LM Studio neɣ Ollama syen qqen-it ɣer uqeddac MCP n QGIS.</li>
  <li>Ales imecwaren 1 ar 4 n umahil n tmsirt i d-iteddun s tmudemt tadigant.</li>
  <li>Serwes d Claude: isutar yettwafehmen, tuccḍiwin, akud n tririt.</li>
</ol>` };
B["q9-l3"] = { titre: "Amahil: ssiwel QGIS s tutlayt tagamant", objectifs: ["Issin ifecka i d-yettak QGIS MCP", "Xdem tasleḍt tummidt ɣef yisefka n Tlemsan s yisutar yettwarun", "Senqed yal agmuḍ deg QGIS"],
  contenu: `
<p>QGIS MCP yettak-d 15 n yifecka. Claude yettfernu afecku yelhan i usuter-ik, ma d Claude Desktop yessuter turagt-ik uqbel yal aseqdec.</p>
<table class="tab">
  <tr><th>Afecku</th><th>Ayen yettxedmen</th></tr>
  <tr><td><code>ping</code>, <code>get_qgis_info</code></td><td>Akayad n tuqqna, lqem n QGIS</td></tr>
  <tr><td><code>create_new_project</code>, <code>load_project</code>, <code>get_project_info</code>, <code>save_project</code></td><td>Asefrek n usenfar .qgz</td></tr>
  <tr><td><code>add_vector_layer</code>, <code>add_raster_layer</code>, <code>get_layers</code>, <code>remove_layer</code>, <code>zoom_to_layer</code></td><td>Asefrek n tissiyin</td></tr>
  <tr><td><code>get_layer_features</code></td><td>Taɣuri n yiferdisen d tmeẓliwin-nsen</td></tr>
  <tr><td><code>execute_processing</code></td><td>Aselkem n ulguritm n Processing Toolbox</td></tr>
  <tr><td><code>render_map</code></td><td>Asifeḍ n tmuɣli n tkarḍa d tugna</td></tr>
  <tr><td><code>execute_code</code></td><td>Aselkem n tengalt PyQGIS (ḥader-it, wali tamsirt i d-iteddun)</td></tr>
</table>
<h3>Asnarya n umahil (isefka n Tlemsan)</h3>
<p>Aru isutar yiwen s yiwen syen senqed agmuḍ deg QGIS deffir yal yiwen:</p>
<ol>
  <li>« Snulfu-d asenfar amaynut n QGIS syen sekles-it deg <code>C:/ENIV/Projets/TP_IA.qgz</code>. »</li>
  <li>« Rnu tissiyin <code>Communes.shp</code> d <code>Forages.shp</code> seg ukaram <code>C:/ENIV/TP/Shapefiles</code>, syen raster <code>C:/ENIV/TP/MNT/MNT_50m.asc</code>. D acu i d SCR n yal tissi? »</li>
  <li>« Acḥal n yiɣunam yellan deg waddad Exploité? Efk-d asenger alemmas (urti DEBIT_LS). »</li>
  <li>« Snulfu-d Buffer yettwasdukklen n 200 m i yiɣunam. »</li>
  <li>« Siḍen iɣunam deg yal tiɣiwant. »</li>
  <li>« Snes aɣanib Graduated s 5 n taggayin ɣef umḍan-a, syen sifeḍ takarḍa s PNG deg <code>C:/ENIV/TP/Sorties/forages_ia.png</code>. »</li>
  <li>« Efk-iyi-d askript PyQGIS i yettɛawaden imecwaren-a akk. » Sekles-it deg <code>C:\\ENIV\\TP\\Scripts</code>.</li>
</ol>
<div class="astuce"><b>Asenqed:</b> ldi ajedwal n tmeẓliwin, senqed SCR (EPSG:32630) d tyunitin. Serwes amḍan n yiɣunam i yal tiɣiwant d ugmuḍ n ulguritm <i>Count points in polygon</i> yettwaselkmen s ufus (aswir 4).</div>`,
  exercice: `
<ol>
  <li>Xdem asnarya s umata syen rnu takarḍa PNG ɣer uneqqis-ik.</li>
  <li>Aru isutar i ur yefhim ara Claude syen ales-asen tira.</li>
  <li>Serwes askript PyQGIS i d-tewwiḍ d <code>qgis_01_bases.py</code>.</li>
</ol>` };
B["q9-l4"] = { titre: "Tarrayin yelhan, tilisa d tɣellist", objectifs: ["Ṭṭef deg wayen i yesselkam umalal", "Ḥrez isefka syen senqed igmaḍ"],
  contenu: `
<ul>
  <li><b>Turagin</b>: Claude Desktop yessuter-d tamtawit-ik uqbel yal afecku. Ɣer asuter syen fren « Allow once ».</li>
  <li><b>execute_code</b> yesselkam yal tangalt Python deg QGIS. Ɣer yal tikkelt tangalt yettwasumren uqbel ad tqebleḍ: tezmer ad tekkes neɣ ad tesfeḍ ifuyla.</li>
  <li><b>Isefka</b>: agbur n tissiyin i yeqqar Claude yettwazen ɣer umeẓlu n tegi tazzayant. Seqdec isefka isuganen n umahil, werǧin isefka uffiren neɣ udmawanen.</li>
  <li><b>Asenqed</b>: tagi tazzayant tezmer ad tɣelleḍ (tissi tucciḍt, tayunt tucciḍt, SCR yettwattun) u tettarra s tumast. Senqed yal agmuḍ am akken tsenqideḍ amahil n umdakel.</li>
  <li><b>Tulsa</b>: adiwenni ur yettwales ara akken yella. Suter askript PyQGIS neɣ bnu tamudemt (aswir 5) akken ad teqqimeḍ s tarrayt yerkden.</li>
  <li><b>Xdem ɣef unɣel</b> n ukaram <code>C:\\ENIV\\TP</code> syen sekles asenfar uqbel yal asuter n uzal.</li>
  <li>S Claude, ilaq Internet d umiḍan. War ajerred war tuqqna, seqdec tamudemt tadigant (tamsirt 2), u ḥrez tamusni n yifecka iqburen: qqimen d ilaqen.</li>
</ul>
<p>Tagi tazzayant ur tettak ara amkan n tarrayt: d kečč i yettfernun tiwtilin, azalen d usegzi n tkarḍa n uɣṛis. Tettɛawan kan ad tɣiwleḍ deg yimecwaren yettɛawaden.</p>`,
  exercice: `
<ol>
  <li>Suter deg Claude takarḍa n yisawen ugar n 15° syen senqed agmuḍ s Raster Calculator (aswir 4).</li>
  <li>Aru deg 5 n yizirigen lfayda d yiɣṛisen n tegi tazzayant i tnedbalt n tezrawin SIG.</li>
</ol>` };
