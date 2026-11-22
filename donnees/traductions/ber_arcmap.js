/* Asuqel n ubrid ArcMap ɣer tmaziɣt (isekkilen ilatiniyen). Ifecka ttwaǧǧan s tegleẓit. */
window.TRAD = window.TRAD || {};
window.TRAD.ber = window.TRAD.ber || {};
var B = window.TRAD.ber;

B.arcmap = { accroche: "ArcMap 10.8, seg tkarḍa-k tamezwarut alamma d takarḍa n yiɣṛisen",
  lead: "Abrid s tikli s tikli akken ad tlemdeḍ ArcMap d tbwaṭin-is n yifecka: agrudem, isefka, azamul, asesfer s ArcToolbox, ModelBuilder, asihel s Python, syen tasnamant seg MNT d tkerḍiwin n tsedrayt ɣer yiɣṛisen igamanen (tiḥemlin, times n tizgwa, izelzalen, tsunami, aɣelluy n wakal). Yal tamsirt tesɛa amahil, tividyutin d usestan deg taggara n uswir." };
B.pro = { accroche: "ArcGIS Pro, seg usenfar-ik amezwaru alamma d takarḍa n yiɣṛisen",
  lead: "Abrid-nni yakan yettwaheyyan i ArcGIS Pro: isenfaren d ribbon, isefka d geodatabase, azamul d tsizzelt n tkerḍiwin, asesfer, ModelBuilder, ArcPy s Python 3 d notebooks, syen tasnamant seg MNT d tkerḍiwin n tsedrayt ɣer yiɣṛisen igamanen. Isefka n umahil d yiwen i kraḍ n yiseɣzan." };

/* ---------- Aswir 1 ---------- */
B.n1 = { titre: "Tazwart ɣer ArcMap", resume: "Agrudem n ArcMap d ArcCatalog, agbur n tissiyin, timuɣliwin d warrat n tkarḍa (.mxd).",
  quiz: [
    { question: "D acu yellan deg ufaylu .mxd?", choix: ["Isefka imaḍalanen s yiman-nsen", "Iseɣwan ɣer yisefka, azamul d tsizzelt", "Tasizzelt kan", "Anɣel yettwaḍerḍen n geodatabase"], explication: "Afaylu .mxd yesselkam isefka; ur ten-yeṭṭif ara. Dayen i yeslummen iberdan imassaɣen." },
    { question: "Deg ugbur n tissiyin, anta tissi i d-yettbanen nnig tiyaḍ?", choix: ["Taneggarut deg tebdart", "Tin yellan deg uqerru n tebdart", "Yal tikkelt tin yettwarnan taneggarut", "Tin yesɛan ugar n yiferdisen"], explication: "Tanila n usuneɣ tettabaɛ tabdart: tissi n uqerru tettwasuneɣ taneggarut, ihi tettban nnig." },
    { question: "Anwa afecku i yettaǧǧan ad teɣreḍ timeẓliwin n uferdis s usiti fell-as?", choix: ["Select", "Measure", "Identify", "Pan"], explication: "Afecku Identify (« i ») yesskan timeẓliwin n uferdis i tsiteḍ." },
    { question: "Anwa aseɣzan i yettwasqedcen s wudem agejdan i usefrek n yifuyla d geodatabase?", choix: ["ArcCatalog", "ArcScene", "ModelBuilder", "ArcGlobe"], explication: "ArcCatalog (neɣ asfaylu Catalog deg ArcMap) i tunigin d usefrek n yisefka." }
  ] };
B["n1-l1"] = { titre: "ArcGIS Desktop: iseɣzanen", objectifs: ["Fren gar ArcMap, ArcCatalog d ArcToolbox", "Senker ArcMap syen ldi arrat n tkarḍa"],
  contenu: `
<p>ArcGIS Desktop 10.8 yesdukkel aṭas n yiseɣzanen i yetteddun akk:</p>
<ul>
  <li><b>ArcMap</b>: askan, tasleḍt d uẓreg n yisefka, d uxeddim n tkerḍiwin.</li>
  <li><b>ArcCatalog</b> (neɣ <b>asfaylu Catalog</b> deg ArcMap): tunigin, asnulfu, anɣel d useglem n yisefka.</li>
  <li><b>ArcToolbox</b>: tagrumma n yifecka n usesfer, yettwafen seg ArcMap d ArcCatalog.</li>
</ul>
<p>Asenfar ArcMap yettwasekles deg <b>warrat n tkarḍa</b> s usiɣzef <code>.mxd</code>. Afaylu-a <b>ur</b> yeṭṭif ara isefka: yesɛa kan <i>iseɣwan</i> ɣur-sen, d uzamul d tsizzelt.</p>
<div class="astuce"><b>Cfu:</b> ma tesmuttiḍ isefka-k deffir usekles n .mxd, tissiyin ad d-sbanent tacreḍt n usuɣu tazeggaɣt. Rmed <i>File &gt; Map Document Properties &gt; Store relative pathnames</i> akken ad tt-teǧǧeḍ.</div>`,
  exercice: `<ol>
  <li>Senker ArcMap syen fren <i>Blank Map</i>.</li>
  <li>Ldi asfaylu Catalog (<i>Windows &gt; Catalog</i>).</li>
  <li>Snulfu-d <b>tuqqna n ukaram</b> ɣer ukaram-ik n umahil (<code>C:\\ENIV\\TP</code>).</li>
  <li>Sekles arrat s yisem <code>TP1_decouverte.mxd</code> s yiberdan imassaɣen yermed.</li>
</ol>` };
B["n1-l2"] = { titre: "Agrudem n ArcMap", objectifs: ["Af-d agbur n tissiyin, ifeggagen n yifecka d usfaylu n tkarḍa", "Inig deg tkarḍa: asemɣer, asenkez, tamnaḍt akk"],
  contenu: `
<p>Agdil n ArcMap yebna seg:</p>
<ul>
  <li><b>agbur n tissiyin</b> (Table of Contents, ɣer zelmeḍ), i d-yettebdaren tissiyin; tanila n usuneɣ seg uqerru (nnig) ɣer wadda (ddaw);</li>
  <li><b>asfaylu n tkarḍa</b>, i yesskanen tissiyin;</li>
  <li><b>ifeggagen n yifecka</b>: <i>Standard</i>, <i>Tools</i> (tunigin, asissen, afran), <i>Draw</i>, <i>Editor</i>… (asiti ayeffus ɣef tallunt tilemt akken ad ten-tesskneḍ);</li>
  <li><b>afeggag n waddad</b> ddaw, i yesskanen imsidag n teḥnaccaḍt.</li>
</ul>
<p>Ifecka n tunigin igejdanen: <b>Zoom In/Out</b>, <b>Pan</b> (afus), <b>Full Extent</b> (amaḍal), <b>Previous/Next Extent</b>, d <b>Identify</b> (« i ») akken ad teɣreḍ timeẓliwin n uferdis.</p>
<div class="astuce"><b>Tixutert:</b> tawrirt n teɣerdayt tessemɣar, u ma tṭṭfeḍ-tt teqqen tessenkaz takarḍa, akken yebɣu yili ufecku yermden.</div>`,
  exercice: `<ol>
  <li>Rnu tissi s tqeffalt <b>Add Data</b> (« + » awraɣ).</li>
  <li>Semɣer tamnaḍt, syen uɣal ɣer tmnaḍt akk.</li>
  <li>Seqdec afecku <b>Identify</b> ɣef kraḍ n yiferdisen syen aru azal n tmeẓli.</li>
  <li>Beddel tanila n tissiyin deg ugbur s uzuɣer.</li>
</ol>` };
B["n1-l3"] = { titre: "Tamuɣli n yisefka d tmuɣli n tsizzelt", objectifs: ["Ɛeddi gar Data view d Layout view", "Fhem tamlilt n data frame"],
  contenu: `
<p>ArcMap yettak-d snat n tmuɣliwin (tiqeffalin ddaw ɣer zelmeḍ n usfaylu n tkarḍa, neɣ umuɣ <i>View</i>):</p>
<ul>
  <li><b>Data view</b>: i usnirem, tasleḍt d uẓreg.</li>
  <li><b>Layout view</b>: i usuddes n tkarḍa ara yettwasizgen (azwel, tasekla n tɣawsiwin, afeggag n tskala, aneccab n ugafa).</li>
</ul>
<p>Tissiyin ttwaḥerzent deg <b>data frame</b> (<i>Layers</i> s wudem amezwer). Arrat yezmer ad yesɛu aṭas n data frames, amedya takarḍa tagejdant d tkarḍa n wadeg.</p>
<p><b>Anagraw n yimsidag</b> n uskan d taɣara n data frame (asiti ayeffus &gt; <i>Properties &gt; Coordinate System</i>). Yettwasbadu s tissi tamezwarut yettwarnan.</p>`,
  exercice: `<ol>
  <li>Ɛeddi ɣer Layout view, syen uɣal ɣer Data view.</li>
  <li>Ldi tiɣara n data frame syen aru anagraw-is n yimsidag.</li>
  <li>Sekcem data frame wis sin (<i>Insert &gt; Data Frame</i>) syen beddel-as isem ɣer « Situation ».</li>
</ol>` };

/* ---------- Aswir 2 ---------- */
B.n2 = { titre: "Isefka imaḍalanen", resume: "Imasalen vector d raster, geodatabase, inagrawen n yimsidag (UTM 30N, Nord Sahara 1959), tifelwiyin n tmeẓliwin, afran, asenfel d usideg ameḍrar.",
  quiz: [
    { question: "Anwa afecku i yettbeddilen tissi seg WGS 1984 ɣer UTM?", choix: ["Define Projection", "Project", "Calculate Geometry", "Georeferencing"], explication: "« Project » yettales asiḍen n yimsidag. « Define Projection » yettbeddir-d anagraw kan." },
    { question: "Tugna n usatellit d…", choix: ["isefka vector s tinqiḍin", "isefka vector s yiɣunam", "isefka raster", "isefka n tfelwit"], explication: "Tugna d aẓeṭṭa n yipiksilen: d raster." },
    { question: "Acḥal i d teɣzi tameqqrant n yisem n wurti deg shapefile?", choix: ["8", "10", "31", "64"], explication: "Amasal .dbf yettḥettim 10 n yisekkilen i yismawen n wurtiyen, d yiwet n tmentilt i usmenyef n geodatabase." },
    { question: "Akken ad d-tafeḍ iɣerbazen ddaw 500 m seg ubrid, ad tesqedceḍ…", choix: ["Select By Attributes", "Select By Location", "Tuqqna n tmeẓliwin", "Field Calculator"], explication: "D assaɣ amkan (ameccaq): Select By Location." },
    { question: "Acuɣer ara nesnefḍ uqbel asiḍen n tiɣziwin?", choix: ["Akken ad yeɣzel uskan", "Acku tiseggiwin (degrés) mačči d tayunt n tiɣzi yerkden", "Akken ad tessenqes teɣzi n ufaylu", "Ur ilaq ara"], explication: "Tiɣziwin ilaq ad ttwasiḍnent deg unagraw yettwasenfḍen, s yimitrem." },
    { question: "Deg anta tamnaḍt UTM i tella Tlemsan?", choix: ["Tamnaḍt 29N", "Tamnaḍt 30N", "Tamnaḍt 31N", "Tamnaḍt 32N"], explication: "Tlemsan (azal n 1,3° ɣer lɣerb) tella deg tmnaḍt 30N, gar 6° ɣer lɣerb d 0°." },
    { question: "Anda ara tesneqdeḍ tuccḍa RMS n usideg ameḍrar?", choix: ["Deg tfelwit n tmeẓliwin", "Deg Link Table n ufeggag Georeferencing", "Deg tɣara n data frame", "Deg ArcCatalog"], explication: "Link Table yesskan residual n yal tanqiḍt n usenqed d tuccḍa RMS tamatut." }
  ] };
B["n2-l1"] = { titre: "Vector, raster d yimasalen n usekles", objectifs: ["Fren gar yisefka vector (tinqiḍin, izirigen, iɣunam) d raster", "Snulfu-d file geodatabase d feature class"],
  contenu: `
<p><b>Vector</b>: tiɣawsiwin yemfaraqen yettwaglemen s tsenselkimt-nsent (tanqiḍt, azirig, aɣunam) d tfelwit n tmeẓliwin. Imedyaten: iɣunam n waman (forages), iberdan, tiferkiwin.</p>
<p><b>Raster</b>: aẓeṭṭa n texxamin (ipiksilen), yal yiwet tesɛa azal. Imedyaten: MNT, tugna n usatellit, takarḍa n uɣummu n wakal.</p>
<p>Imasalen yettwasqedcen deg ArcGIS 10.8:</p>
<ul>
  <li><b>Shapefile</b> (<code>.shp</code> + <code>.shx</code> + <code>.dbf</code> + <code>.prj</code>…): fessus yerna yeṭṭuqet, maca ismawen n wurtiyen ttwaḥettmen ɣer 10 n yisekkilen. Werǧin ad tneɣleḍ yiwen n ufaylu kan: nɣel-iten akk, neɣ seqdec ArcCatalog.</li>
  <li><b>File geodatabase</b> (akaram <code>.gdb</code>): amasal yettwawellhen, yerkeḍ ugar, yeṭṭef feature datasets, domains d raster.</li>
</ul>`,
  exercice: `<ol>
  <li>Deg usfaylu Catalog, asiti ayeffus ɣef ukaram-ik &gt; <i>New &gt; File Geodatabase</i>: semmi-as <code>TP.gdb</code>.</li>
  <li>Deg <code>TP.gdb</code>, snulfu-d feature class n <b>tinqiḍin</b> s yisem <code>Forages</code>.</li>
  <li>Kter shapefile ɣer geodatabase (asiti ayeffus ɣef gdb &gt; <i>Import &gt; Feature Class (single)</i>).</li>
</ol>` };
B["n2-l2"] = { titre: "Inagrawen n yimsidag d usenfeḍ", objectifs: ["Fren gar unagraw amaḍalan d unagraw yettwasenfḍen", "Seqdec akken iwata « Define Projection » d « Project »"],
  contenu: `
<ul>
  <li><b>Anagraw amaḍalan n yimsidag</b>: latitude/longitude s tseggiwin (md. WGS 1984).</li>
  <li><b>Anagraw yettwasenfḍen</b>: imsidag n wussu s yimitrem (md. WGS 1984 UTM, s tmnaḍt i iwulmen i temnaḍt-ik). D ayen ilaqen i uktili n yimeccaq d tiɣziwin.</li>
</ul>
<p><b>Inagrawen yettwasqedcen deg Lezzayer</b> (tawriqt « projection » n usileɣ):</p>
<table class="tab">
  <tr><th>Tawacult</th><th>Anagraw deg ArcMap</th><th>Tamawt</th></tr>
  <tr><td>Amaḍalan</td><td>GCS WGS 1984</td><td>Tiseggiwin; isefka GPS, Google Earth</td></tr>
  <tr><td>Asenfeḍ asilindri (UTM)</td><td>WGS 1984 UTM Zone 29N ar 32N</td><td>Tlemsan tella deg <b>tmnaḍt 30N</b>; Lezzayer tamanaɣt deg 31N</td></tr>
  <tr><td>Asenfeḍ asilindri (UTM)</td><td>Nord Sahara 1959 UTM Zone 29N ar 32N</td><td>Anagraw n tkerḍiwin tiṭubugrafiyin n Lezzayer (INCT)</td></tr>
  <tr><td>Asenfeḍ akuni (Lambert)</td><td>Nord Algérie (ancienne), deg <i>National Grids &gt; Africa</i></td><td>Tikarḍiwin tiqburin; yella daɣen s tseggiwin</td></tr>
</table>
<p>I temnaḍt n Tlemsan, fren amedya <i>Projected Coordinate Systems &gt; UTM &gt; WGS 1984 &gt; Northern Hemisphere &gt; WGS 1984 UTM Zone 30N</i>.</p>
<p>Sin n yifecka ur ilaq ara ad ten-tesmezgeḍ:</p>
<table class="tab">
  <tr><th>Afecku</th><th>Tamlilt</th><th>Abrid deg ArcToolbox</th></tr>
  <tr><td><b>Define Projection</b></td><td>Yettbeddir-d anagraw n tissi ur nesɛi ara (afaylu .prj ulac-it). Ur ibeddel ara imsidag.</td><td>Data Management Tools &gt; Projections and Transformations</td></tr>
  <tr><td><b>Project</b></td><td>Yesnulfuy-d tissi tamaynut s yimsidag yettwasiḍnen ɣef unagraw nniḍen.</td><td>Data Management Tools &gt; Projections and Transformations</td></tr>
</table>
<div class="astuce"><b>Tuccḍa yeṭṭuqten:</b> aseqdec n « Define Projection » akken ad tbeddleḍ anagraw. Isefka ad qqimen deg wadeg ur nelli d amagnu.</div>`,
  exercice: `<ol>
  <li>Sken tiɣara n tissi (iccer <i>Source</i>) syen aru anagraw-is n yimsidag.</li>
  <li>Snefḍ <code>Communes_NordSahara1959</code> d <code>Communes_WGS84</code> ɣer WGS 1984 UTM Zone 30N s ufecku <b>Project</b>.</li>
  <li>Beddir-d anagraw n <code>Forages_sans_projection</code> (WGS 1984 UTM Zone 30N) s <b>Define Projection</b>.</li>
  <li>Serwes tiɣzi n uɣunam uqbel d deffir usenfeḍ (urti yettwasiḍnen s yimitrem imkuẓen).</li>
</ol>` };
B["n2-l3"] = { titre: "Tafelwit n tmeẓliwin", objectifs: ["Ldi, sefru syen sizdeg tafelwit n tmeẓliwin", "Rnu urti syen siḍen-it"],
  contenu: `
<p>Asiti ayeffus ɣef tissi &gt; <b>Open Attribute Table</b>. Yal izirig d aferdis, yal tagejdit d <b>urti</b>.</p>
<ul>
  <li><b>Rnu urti</b>: umuɣ <i>Table Options</i> &gt; <i>Add Field</i> (beṛṛa n tɣimit n uẓreg). Anawen yeṭṭuqten: Text, Short Integer, Long Integer, Float, Double, Date.</li>
  <li><b>Field Calculator</b>: asiti ayeffus ɣef uqerru n wurti. Amedya s Python: <code>!POP! / !SURFACE_KM2!</code></li>
  <li><b>Calculate Geometry</b>: tiɣzi, teɣzi, imsidag X/Y, s tyunit i tebɣiḍ.</li>
</ul>
<p><b>Tuqqniwin</b> (asiti ayeffus &gt; <i>Joins and Relates &gt; Join</i>) qqnent tafelwit n beṛṛa (Excel, .dbf) ɣer tissi s wurti amenzu, amedya tangalt n tɣiwant.</p>`,
  exercice: `<ol>
  <li>Rnu urti <code>SURF_HA</code> n wanaw Double i tissi n yiɣunam.</li>
  <li>Siḍen-it s <i>Calculate Geometry</i> s yiktaren (hectares).</li>
  <li>Qqen tafelwit Excel n yimezdaɣ s tengalt n tɣiwant, syen siḍen tazurt.</li>
</ol>` };
B["n2-l4"] = { titre: "Afran d uẓreg", objectifs: ["Fren s tmeẓliwin d wadeg", "Snefel iferdisen imaynuten s ufeggag Editor"],
  contenu: `
<p>Umuɣ <b>Selection</b>:</p>
<ul>
  <li><b>Select By Attributes</b>: asuter SQL, md. <code>"POP" &gt; 10000 AND "TYPE" = 'Urbain'</code>.</li>
  <li><b>Select By Location</b>: assaɣ amkan, md. iɣerbazen <i>within a distance of</i> 500 m seg ubrid.</li>
</ul>
<p>Asiti ayeffus ɣef tissi &gt; <i>Data &gt; Export Data</i> akken ad teskelseḍ afran d tissi tamaynut.</p>
<p><b>Aẓreg</b>: afeggag <i>Editor</i> &gt; <i>Start Editing</i>, syen asfaylu <i>Create Features</i>. Rmed <b>Snapping</b> akken ad tqqneḍ ɣer yixfawen. Cfu ad tesqedceḍ <i>Save Edits</i> syen <i>Stop Editing</i>.</p>`,
  exercice: `<ol>
  <li>Fren tiɣiwanin s ugar n 10 000 n yimezdaɣ syen sifeḍ-tent.</li>
  <li>Fren iɣunam n waman yellan ddaw 1 km seg wasif.</li>
  <li>Snefel 5 n tinqiḍin deg tneɣrut <code>Forages</code> syen ččar timeẓliwin-nsent.</li>
</ol>` };
B["n2-l5"] = { titre: "Asideg ameḍrar n tkarḍa yettwasekknen", objectifs: ["Sideg takarḍa yettwasekknen neɣ tugna ɣef yimsidag yettwassnen", "Senqed tuccḍa (RMS) syen sekles agmuḍ"],
  contenu: `
<p>Takarḍa yettwasekknen (.jpg, .tif) ulac ɣur-s imsidag. <b>Asideg ameḍrar</b> (georeferencing) yettak-as imsidag s <b>tinqiḍin n usenqed</b> s yimsidag yettwassnen: timsagrin n uẓeṭṭa, ticraḍ n yimsidag ɣef yiri n tkarḍa.</p>
<ol>
  <li>Sbadu di tazwara anagraw n yimsidag n data frame (md. Nord Sahara 1959 UTM Zone 30N i tkarḍa INCT n temnaḍt n Tlemsan).</li>
  <li>Rnu tugna, syen sken afeggag <b>Georeferencing</b> (asiti ayeffus ɣef tallunt tilemt n yifeggagen).</li>
  <li>Fren tissi deg tebdart n ufeggag, syen <i>Georeferencing &gt; Fit To Display</i> ma yella tugna teǧǧed tamnaḍt.</li>
  <li>S ufecku <b>Add Control Points</b>, sit ɣef tanqiḍt deg tugna syen asiti ayeffus &gt; <i>Input X and Y</i> syen aru imsidag-is. Sers 4 n tinqiḍin ma drus, yettwazerwen akken iwata.</li>
  <li>Ldi <b>Link Table</b>: senqed residual n yal tanqiḍt d tuccḍa RMS tamatut. Kkes tanqiḍt yeffɣen i uẓeṭṭa.</li>
  <li>Sekles: <i>Georeferencing &gt; Update Georeferencing</i> (afaylu .aux.xml ɣer tama n tugna) neɣ <i>Rectify</i> akken ad d-tesnulfuḍ raster amaynut.</li>
</ol>
<div class="astuce"><b>Asnifel:</b> aswir 1 (affine) s 4 ar 6 n tinqiḍin yekfa i tkarḍa yettwasekknen s wudem n wussu. Iswiren yugaren sran ugar n tinqiḍin u zemren ad bedlen yiran.</div>`,
  exercice: `<ol>
  <li>Sideg takarḍa tiṭubugrafit yettwasekknen n temnaḍt-ik s 6 n tinqiḍin n uẓeṭṭa n yikilumitren.</li>
  <li>Aru tuccḍa RMS; ales ma tugar teɣzi n yiwen n upiksil ɣef wakal.</li>
  <li>Sers tissi vector (iberdan, isaffen) akken ad tesneqdeḍ s tmuɣli asideg ameḍrar.</li>
</ol>` };

/* ---------- Aswir 3 ---------- */
B.n3 = { titre: "Azamul d tsizzelt n tkarḍa", resume: "Sken isefka (taggayin, tiktiwin), sres tibzimin, suddes syen sifeḍ takarḍa.",
  quiz: [
    { question: "Anwa uzamul i iwulmen i umḍan amatu n yimezdaɣ n yal tiɣiwant?", choix: ["Graduated colors", "Proportional symbols", "Unique values", "Single symbol"], explication: "Amḍan amagnu yettwaskan s yizamulen imaktayen, mačči s uččar n yini." },
    { question: "Anda ara tesbaduḍ tarrayt n usmizzwer (natural breaks, quantiles…)?", choix: ["Iccer Source", "Iccer Symbology, askar Quantities", "Iccer Labels", "Deg tfelwit n tmeẓliwin"], explication: "Symbology > Quantities > Classify…" },
    { question: "Anwa uferdis UR NELLI d ilaq deg tkarḍa tasentelt?", choix: ["Tasekla n tɣawsiwin (legend)", "Taskala", "Tugna n usatellit deg wadda", "Azwel"], explication: "Tugna n usatellit d tafrayant; azwel, legend, taskala d ugafa ttwarǧan." },
    { question: "Anwa usiɣzef i yettaǧǧan ad tɛawdeḍ azamul deg tkarḍa nniḍen?", choix: [".mxd", ".lyr", ".prj", ".shx"], explication: "Afaylu n tissi .lyr yesseklas azamul d useɣwen ɣer uɣbalu." }
  ] };
B["n3-l1"] = { titre: "Azamul", objectifs: ["Fren askan i iwulmen i yisefka", "Seqdec ismizzwar (natural breaks, equal interval, quantiles)"],
  contenu: `
<p>Layer Properties &gt; iccer <b>Symbology</b>:</p>
<ul>
  <li><b>Features &gt; Single symbol</b>: kullec s yiwen uzamul.</li>
  <li><b>Categories &gt; Unique values</b>: isefka n tɣara (anaw n wakal, taggayt n ubrid).</li>
  <li><b>Quantities &gt; Graduated colors</b>: isefka imaktayen imassaɣen (tazurt, afmiḍi). Fren tarrayt n usmizzwer d umḍan n taggayin.</li>
  <li><b>Quantities &gt; Proportional / Graduated symbols</b>: imḍanen imaganen (imezdaɣ, tafsut n waman).</li>
  <li><b>Charts</b>: imeẓla s tfeṭṭa neɣ s yiẓegzawen i yal aferdis.</li>
</ul>
<div class="astuce"><b>Alugen n tkarḍa:</b> ur sskan ara amḍan amagnu (imezdaɣ) s uččar n yini. Seqdec tawinest timaktayt, neɣ bḍu-t ɣef tiɣzi (tazurt).</div>
<p>Sekles aɣanib ara tɛawdeḍ s usiti ayeffus &gt; <i>Save As Layer File</i> (<code>.lyr</code>).</p>`,
  exercice: `<ol>
  <li>Sken aɣummu n wakal s unique values d yiniten yemsaɣen.</li>
  <li>Sken tazurt n yimezdaɣ s 5 n taggayin s natural breaks (Jenks).</li>
  <li>Sekles tissi d afaylu <code>.lyr</code>.</li>
</ol>` };
B["n3-l2"] = { titre: "Tibzimin (labels)", objectifs: ["Sken tibzimin seg urti", "Sefrek taggayin n tbzimin d yimennuɣen"],
  contenu: `
<p>Layer Properties &gt; iccer <b>Labels</b>: ger tacreḍt deg <i>Label features in this layer</i> syen fren urti.</p>
<ul>
  <li><b>Expression</b>: sdukkel aṭas n wurtiyen, md. <code>[NOM] &amp; " (" &amp; [POP] &amp; ")"</code>.</li>
  <li><b>Label classes</b>: iɣanimen yemgaraden ɣef usuter SQL (md. iqerra n tdayrin s uzuran).</li>
  <li><b>Scale range</b>: sken tibzimin kan seg yiwet n tskala.</li>
  <li><b>Label Manager</b> (afeggag <i>Labeling</i>): tazwart, taẓayt d yimennuɣen.</li>
</ul>`,
  exercice: `<ol>
  <li>Sres tibzimin n tɣiwanin s yismawen-nsent.</li>
  <li>Snulfu-d taggayt n tbzimin i yiqerra n tdayrin, s uzuran u meqqrit ugar.</li>
  <li>Ḥettem askan n tbzimin i tskalin yugaren 1:200 000.</li>
</ol>` };
B["n3-l3"] = { titre: "Tasizzelt d usifeḍ", objectifs: ["Suddes takarḍa ummidt s yiferdisen-is ilaqen", "Sifeḍ ɣer PDF neɣ tugna s tseddi iwulmen"],
  contenu: `
<p>Deg <b>Layout view</b>, umuɣ <i>Insert</i>:</p>
<ul>
  <li><b>Title</b>, <b>Legend</b>, <b>North Arrow</b>, <b>Scale Bar</b>, <b>Scale Text</b>;</li>
  <li><b>Aɣbalu d umeskar</b> (tanaka n uḍris), azemz;</li>
  <li><b>Graticule neɣ aẓeṭṭa</b>: tiɣara n data frame &gt; iccer <i>Grids</i>.</li>
</ul>
<p>Teɣzi n usebter: <i>File &gt; Page and Print Setup</i> (A4, A3, s tehri…).</p>
<p>Asifeḍ: <i>File &gt; Export Map</i>. PDF i usizireg, PNG neɣ JPEG s 300 dpi i uneqqis.</p>
<div class="astuce"><b>Asenqed n tɣara:</b> azwel, legend, taskala, agafa, aɣbalu, ameskar, azemz d unagraw n yimsidag. War iferdisen-a takarḍa ur temmid ara.</div>`,
  exercice: `<ol>
  <li>Xdem takarḍa A4 s tehri n temnaḍt-ik n tezrawt s yiferdisen ilaqen akk.</li>
  <li>Rnu takarḍa n wadeg deg data frame wis sin.</li>
  <li>Sifeḍ-tt ɣer PDF d PNG s 300 dpi.</li>
</ol>` };

/* ---------- Aswir 4 ---------- */
B.n4 = { titre: "ArcToolbox d usesfer", resume: "Tibwaṭin n yifecka, ifecka n tesleḍt vector (buffer, clip, asers) d Spatial Analyst.",
  quiz: [
    { question: "Anwa afecku i yeṭṭfen tasenselkimt daxel n temnaḍt U timeẓliwin n tissi n unekcum kan?", choix: ["Intersect", "Clip", "Union", "Spatial Join"], explication: "Clip yeṭṭef kan timeẓliwin n tissi n unekcum." },
    { question: "Deg ugrudem n ArcGIS s tefransist, afecku « Dissolve » isem-is…", choix: ["Combiner", "Fusionner", "Agréger", "Dissoudre"], explication: "Dissolve = Fusionner; Merge = Combiner; Union = Agréger." },
    { question: "Anda ara tɛawdeḍ aselkem n ufecku i tselkmeḍ yakan, s yiɣewwaren nniḍen?", choix: ["Asfaylu Results", "Agbur n tissiyin", "Asfaylu Catalog", "Label Manager"], explication: "Asfaylu Results yeṭṭef amazray n yisesfar." },
    { question: "Akken ad tefkeḍ i yal tiɣiwant amḍan n yiɣunam yellan deg-s:", choix: ["Tuqqna n tmeẓliwin", "Tuqqna tamkant (spatial join)", "Buffer", "Erase"], explication: "Tuqqna tamkant tesseqqan iferdisen s wadeg-nsen u tezmer ad tsiḍen." },
    { question: "Anwa afecku i yellan kan s Spatial Analyst?", choix: ["Buffer", "Project", "Slope", "Clip"], explication: "Slope d yiwen seg yifecka n Spatial Analyst (neɣ 3D Analyst)." }
  ] };
B["n4-l1"] = { titre: "Tazwara s ArcToolbox", objectifs: ["Af-d afecku deg useklu neɣ s unadi", "Sbadu tiwennaḍin syen senqed Results"],
  contenu: `
<p>Ldi ArcToolbox s tqeffalt n tbwaṭ tazeggaɣt neɣ <i>Geoprocessing &gt; ArcToolbox</i>. Tibwaṭin yettwasqedcen ugar:</p>
<table class="tab">
  <tr><th>Tabwaṭ</th><th>Imedyaten n yifecka</th></tr>
  <tr><td>Analysis Tools</td><td>Buffer, Clip, Intersect, Union, Erase, Spatial Join</td></tr>
  <tr><td>Data Management Tools</td><td>Project, Add Field, Calculate Field, Dissolve, Merge</td></tr>
  <tr><td>Conversion Tools</td><td>Excel To Table, Feature To Raster, KML To Layer</td></tr>
  <tr><td>Spatial Analyst Tools</td><td>Slope, Aspect, Reclassify, Raster Calculator, Kernel Density</td></tr>
  <tr><td>Cartography Tools, 3D Analyst, Network Analyst…</td><td>S wudem n yisiɣzaf yermden (<i>Customize &gt; Extensions</i>)</td></tr>
</table>
<ul>
  <li><b>Nadi afecku</b>: <i>Geoprocessing &gt; Search For Tools</i>, aru « buffer ».</li>
  <li><b>Tiwennaḍin</b>: <i>Geoprocessing &gt; Environments</i>: tallunt n umahil, tamnaḍt, teɣzi n texxamt, amasek.</li>
  <li><b>Results</b>: <i>Geoprocessing &gt; Results</i> yeṭṭef amazray; asiti ayeffus ɣef ugmuḍ &gt; <i>Open</i> akken ad t-tɛawdeḍ s yiɣewwaren nniḍen.</li>
</ul>
<div class="astuce"><b>Tixutert:</b> rmed <i>Geoprocessing &gt; Geoprocessing Options &gt; Overwrite the outputs of geoprocessing operations</i> deg yimahilen akken ad tɛawdeḍ afecku war ma tbeddleḍ isem n tuffɣa.</div>`,
  exercice: `<ol>
  <li>Ldi ArcToolbox syen af-d afecku <b>Buffer</b> deg useklu, syen s unadi.</li>
  <li>Sbadu tallunt n umahil ɣer <code>TP.gdb</code>.</li>
  <li>Rmed asiɣzef Spatial Analyst.</li>
</ol>` };
B["n4-l2"] = { titre: "Tiɣlisin (buffers) d tesleḍt n tqerrit", objectifs: ["Snulfu-d tiɣlisin tifessasin, tigetan d tid s umeccaq yettbeddilen", "Seqdec Spatial Join d Near"],
  contenu: `
<p><b>Buffer</b>: <i>Analysis Tools &gt; Proximity &gt; Buffer</i>.</p>
<ul>
  <li><b>Tayunt tazirigt</b> (md. 100 n yimitren) neɣ <b>urti</b> (ameccaq yemgaraden i yal aferdis).</li>
  <li><b>Dissolve type</b>: <i>NONE</i> (yiwet n teɣlist i yal aferdis) neɣ <i>ALL</i> (tiɣlisin yettwasdukklen).</li>
</ul>
<p><b>Multiple Ring Buffer</b>: aṭas n tɛeqqayin, md. 500, 1000, 2000 m.</p>
<p><b>Near</b>: yettarnu i yal aferdis ameccaq ɣer uferdis i yqerben ugar n tissi nniḍen.</p>
<p><b>Spatial Join</b>: yessenqal timeẓliwin s wadeg, md. asiḍen n yiɣunam n waman i yal tiɣiwant.</p>`,
  exercice: `<ol>
  <li>Snulfu-d tamnaḍt n ummesten n 200 m i yiɣunam, yettwasdukklen (ALL).</li>
  <li>Snulfu-d tiɛeqqayin n 1, 2 d 5 km i tmdint.</li>
  <li>Siḍen iɣunam i yal tiɣiwant s tuqqna tamkant.</li>
</ol>` };
B["n4-l3"] = { titre: "Tussfa d users", objectifs: ["Fren gar Clip, Intersect, Union d Erase", "Sdukkel tissiyin s Dissolve d Merge"],
  contenu: `
<table class="tab">
  <tr><th>Afecku</th><th>Agmuḍ</th><th>Timeẓliwin</th></tr>
  <tr><td><b>Clip</b></td><td>Aḥric n tissi n unekcum yellan daxel n tissi n tgezmi</td><td>Tid n unekcum kan</td></tr>
  <tr><td><b>Intersect</b></td><td>Timnaḍin yemsaɣen gar tissiyin akk</td><td>Tid n tissiyin akk</td></tr>
  <tr><td><b>Union</b></td><td>Tamnaḍt akk n tissiyin akk (iɣunam)</td><td>Tid n tissiyin akk</td></tr>
  <tr><td><b>Erase</b></td><td>Ayen yellan beṛṛa n tissi n tukksa</td><td>Tid n unekcum kan</td></tr>
</table>
<p>Ifecka n usefrek n yisefka:</p>
<ul>
  <li><b>Dissolve</b>: yesdukkul iferdisen yesɛan yiwen n wazal n urti (md. tiɣiwanin &gt; tiwilayin).</li>
  <li><b>Merge</b>: yesdukkul aṭas n tissiyin n yiwet n tsenselkimt deg yiwet.</li>
</ul>
<div class="astuce"><b>Ɣur-k:</b> deg ugrudem s tefransist, Dissolve d <i>Fusionner</i> u Merge d <i>Combiner</i>. Cfu ɣef yismawen s tegleẓit akken ad teǧǧeḍ tuccḍiwin.</div>`,
  exercice: `<ol>
  <li>Gzem aẓeṭṭa n yiberdan s talast n temnaḍt-ik n tezrawt.</li>
  <li>Xdem Intersect gar uɣummu n wakal d tɣlisin n yiɣunam, syen siḍen tiɣziwin i yal anaw.</li>
  <li>Sdukkel tiɣiwanin s twilayt, s ummesten n tegrumma n yimezdaɣ (statistics).</li>
</ol>` };
B["n4-l4"] = { titre: "Raster s Spatial Analyst", objectifs: ["Ssuffeɣ-d asawen seg MNT", "Ales asmizzwer syen sdukkel raster i tesleḍt s waṭas n yiwtilen"],
  contenu: `
<p>Asiɣzef ilaqen: <i>Customize &gt; Extensions &gt; Spatial Analyst</i>.</p>
<ul>
  <li><b>Slope</b> (asawen): <i>Spatial Analyst Tools &gt; Surface &gt; Slope</i>, s tseggiwin neɣ s ufmiḍi.</li>
  <li><b>Aspect</b> d <b>Hillshade</b> deg yiwet n tegrumma.</li>
  <li><b>Reclassify</b>: <i>Spatial Analyst Tools &gt; Reclass</i>, akken ad tbeddleḍ azalen ɣer tizmilin (1 ar 5).</li>
  <li><b>Raster Calculator</b>: <i>Spatial Analyst Tools &gt; Map Algebra</i>, md. <code>"pente_rc" * 0.4 + "sol_rc" * 0.6</code>.</li>
</ul>
<p>Sbadu teɣzi n texxamt d umasek deg <b>tiwennaḍin</b> akken ad mṣadan raster akk.</p>`,
  exercice: `<ol>
  <li>Siḍen asawen s tseggiwin seg MNT.</li>
  <li>Ales asmizzwer n usawen ɣer 5 n taggayin (1 = afessas, 5 = uɛer).</li>
  <li>Sdukkel asawen yettwasmizzwren d uɣummu n wakal s Raster Calculator akken ad tesnulfuḍ takarḍa n tmellit.</li>
</ol>` };

/* ---------- Aswir 5 ---------- */
B.n5 = { titre: "ModelBuilder", resume: "Ssemsel ifecka deg tmudemt, snulfu-d iɣewwaren, ales s tuzzya syen sifeḍ tamudemt ɣer uskript Python.",
  quiz: [
    { question: "Deg ModelBuilder, asmekker awraɣ yesskan…", choix: ["Isefka n unekcum", "Afecku", "Isefka yettwassuffɣen", "Amsezzi (iterator)"], explication: "Anili = anekcum, awraɣ = afecku, azegzaw = tuffɣa (isefka yettwassuffɣen)." },
    { question: "Acḥal n yimsezziyen i yezmer ad yesɛu yiwet n tmudemt?", choix: ["Ulac", "Yiwen kan", "Sin", "War talast"], explication: "Yiwen kan; i wugar, sekcem tamudemt tamecṭuḥt." },
    { question: "I wacu i tettwasqedcen tira %Distance%?", choix: ["I uwennit ɣef tmudemt", "Akken ad tesekcmeḍ azal n umutti deg uḍris (inline substitution)", "Akken ad tsenseḍ afecku", "Akken ad tsiḍneḍ afmiḍi"], explication: "D asemselsi n umutti deg uḍris." },
    { question: "Amek ara tesbaneḍ aferdis deg tenaka n udiwenni n tmudemt?", choix: ["Beddel-as isem", "Err-it d Model Parameter", "Sɣeṛ-it s unili", "Sifeḍ-it ɣer Python"], explication: "Asiti ayeffus > Model Parameter." }
  ] };
B["n5-l1"] = { titre: "Bnu tamudemt-ik tamezwarut", objectifs: ["Snulfu-d tabwaṭ n yifecka tudmawant d tmudemt", "Ssemsel sin n yifecka syen selkem tamudemt"],
  contenu: `
<p><b>Tamudemt</b> d asemsel n yisesfar yettwaseklsen: tuffɣiwin n yiwen n ufecku uɣalent d inekcumen n win i d-iteddun.</p>
<ol>
  <li>Deg usfaylu Catalog: asiti ayeffus ɣef ukaram-ik &gt; <i>New &gt; Toolbox</i> (<code>Outils_ENIV.tbx</code>).</li>
  <li>Asiti ayeffus ɣef tbwaṭ &gt; <i>New &gt; Model</i>.</li>
  <li>Zuɣer ifecka seg ArcToolbox d tissiyin seg ugbur n tissiyin.</li>
  <li>Qqen-iten s ufecku <b>Connect</b>, syen <i>Model &gt; Validate</i> d <i>Run</i>.</li>
</ol>
<p>Tangalin n yiniten: <b>tamellalt tanilit</b> = isefka n unekcum, <b>asmekker awraɣ</b> = afecku, <b>tamellalt tazegzawt</b> = isefka yettwassuffɣen. Aferdis amellal mazal ur yewjid ara (yexuṣṣ uɣewwar).</p>`,
  exercice: `<p>Bnu tamudemt « Tamnaḍt n ummesten »: <b>Buffer</b> (200 m) ɣef yiɣunam, syen <b>Clip</b> n uɣummu n wakal s teɣlist-nni. Selkem-itt syen senqed agmuḍ.</p>` };
B["n5-l2"] = { titre: "Iɣewwaren d yimuttiyen", objectifs: ["Err tamudemt d afecku ara tɛawdeḍ s yiɣewwaren", "Seqdec imuttiyen d usemselsi %isem%"],
  contenu: `
<ul>
  <li><b>Aɣewwar n tmudemt</b>: asiti ayeffus ɣef uferdis &gt; <i>Model Parameter</i> (ad d-iban « P »). Ad d-iban deg tenaka n udiwenni mi ara tsiteḍ snat n tikkal ɣef tmudemt deg ArcToolbox.</li>
  <li><b>Amutti</b>: asiti ayeffus ɣef ufecku &gt; <i>Make Variable &gt; From Parameter &gt; Distance</i> akken ad d-tesskneḍ ameccaq n teɣlist.</li>
  <li><b>Asemselsi deg uḍris</b>: seqdec <code>%Distance%</code> deg yisem n tuffɣa, md. <code>tampon_%Distance%</code>.</li>
  <li><b>Tiɣara n tmudemt</b>: isem, tabzimt, aglam d textiṛt <i>Store relative path names</i>.</li>
</ul>`,
  exercice: `<p>Err tamudemt-ik s yiɣewwaren: tissi n unekcum, ameccaq d tuffɣa. Selkem-itt snat n tikkal seg ArcToolbox s yimeccaq yemgaraden.</p>` };
B["n5-l3"] = { titre: "Imsezziyen d usifeḍ ɣer Python", objectifs: ["Sesfer s wudem awurman yal tissi n ukaram", "Sifeḍ tamudemt ɣer uskript Python akken ad tɛeddiḍ ɣer ArcPy"],
  contenu: `
<p>Umuɣ <i>Insert &gt; Iterators</i>: <b>Iterate Feature Classes</b>, <b>Iterate Rasters</b>, <b>Iterate Field Values</b>, <b>For</b>, <b>While</b>… Tamudemt tezmer ad tesɛu <b>yiwen n umsezzi kan</b>; akken ad tesekcmeḍ ugar, sers tamudemt tamecṭuḥt daxel n tmudemt.</p>
<p>Seqdec afecku <b>Collect Values</b> akken ad tesdukkleḍ tuffɣiwin n yal tuzzya.</p>
<p><b>Asifeḍ</b>: <i>Model &gt; Export &gt; To Python Script</i>. Afaylu <code>.py</code> i d-yeffɣen d tazwara yelhan akk i ulmad n ArcPy: yesskan tira tusridt n yal afecku.</p>`,
  exercice: `<ol>
  <li>Snulfu-d tamudemt i yettgezmen yal feature class n geodatabase s temnaḍt n tezrawt (amsezzi + <code>%Name%</code>).</li>
  <li>Sifeḍ tamudemt-ik « Tamnaḍt n ummesten » ɣer Python syen ldi askript: af-d izirig <code>arcpy.Buffer_analysis</code>.</li>
</ol>` };

/* ---------- Aswir 6 ---------- */
B.n6 = { titre: "Asihel s ArcPy", resume: "Python 2.7 deg ArcMap 10.8, tamuɣli arcpy, tuzzyiwin, cursors, arcpy.mapping d yifecka n uskript.",
  quiz: [
    { question: "Anwa lqem n Python i yesseqdac ArcMap 10.8?", choix: ["Python 2.7", "Python 3.6", "Python 3.9", "Ulac"], explication: "ArcMap 10.x yesseqdac Python 2.7; ArcGIS Pro yesseqdac Python 3." },
    { question: "Anwa cursor i yettaǧǧan ad tbeddleḍ azalen n urti?", choix: ["SearchCursor", "InsertCursor", "UpdateCursor", "ReadCursor"], explication: "UpdateCursor, s updateRow() akken ad teskelseḍ yal izirig." },
    { question: "Deg ufecku n uskript, amek ara teɣreḍ aɣewwar amezwaru i d-yefka useqdac?", choix: ["arcpy.GetParameterAsText(0)", "arcpy.GetParameterAsText(1)", "sys.argv[0]", "input()"], explication: "Iɣewwaren ttwaḥesben seg 0." },
    { question: "I wacu i yelha arcpy.env.overwriteOutput = True?", choix: ["Akken ad ɣezlen yimsiḍen", "Akken ad yettwasireg usemselsi n tuffɣiwin yellan", "Akken ad yermed Spatial Analyst", "Akken ad yettwasekles .mxd"], explication: "War taxtiṛt-a, afecku ad yeɣli ma yella tuffɣa yakan." },
    { question: "Anwa tamuɣli i yessifeḍen tikarḍiwin ɣer PDF seg uskript n ArcMap?", choix: ["arcpy.mp", "arcpy.mapping", "arcpy.da", "arcpy.sa"], explication: "arcpy.mapping i ArcMap; arcpy.mp d amṣada-s deg ArcGIS Pro." }
  ] };
B["n6-l1"] = { titre: "Python d usfaylu Python", objectifs: ["Selkem afecku n usesfer s yiwen n yizirig n Python", "Issin isekkilen n Python 2.7 yettwasqedcen deg ArcMap"],
  contenu: `
<p>ArcMap 10.8 yesseqdac <b>Python 2.7</b> (yettwasebded s ArcGIS deg <code>C:\\Python27\\ArcGIS10.8</code>). ArcGIS Pro yesseqdac Python 3: iskripten ur mṣadan ara yal tikkelt.</p>
<p>Ldi <b>asfaylu Python</b> (taqeffalt deg ufeggag Standard neɣ <i>Geoprocessing &gt; Python</i>). Tamuɣli <code>arcpy</code> tettwakter yakan u tissiyin n ugbur zemrent ad ttwasqedcent s yisem-nsent.</p>
<!--code:0-->
<p>Yal afecku yesɛa isem s Python: <code>ToolName_alias</code> (md. <code>Clip_analysis</code>, <code>Project_management</code>) neɣ <code>arcpy.alias.ToolName</code>. Asebter n tallelt n yal afecku yettak-d amedya n tengalt.</p>
<p>Asmekti n Python: imuttiyen, tibdarin <code>[...]</code>, tuzzyiwin <code>for</code>, tiwtilin <code>if</code>, asekcem i ilaqen (4 n tallunin), izirigen iqeḥwanen <code>r"C:\\path"</code> i yiberdan n Windows.</p>`,
  exercice: `<ol>
  <li>Deg usfaylu Python, selkem buffer ɣef tissi n tkarḍa.</li>
  <li>Sken amḍan n yiferdisen: <code>print(arcpy.GetCount_management("Forages"))</code></li>
  <li>Af-d tira n ufecku <b>Clip</b> deg tallelt syen selkem-it s Python.</li>
</ol>` };
B["n6-l2"] = { titre: "Iskripten iman-nsen, tibdarin d tuzzyiwin", objectifs: ["Aru askript .py ara yeddun beṛṛa n ArcMap", "Sesfer s wudem awurman yal tissi n tallunt n umahil"],
  contenu: `
<p>Askript iman-is yettwaru deg IDLE (yettwasebded s ArcGIS) neɣ deg umaẓrag nniḍen, syen yettwaselkam s Python 2.7 n ArcGIS.</p>
<!--code:0-->
<p>Tiwuriwin n tebdarin ilaqen: <code>ListFeatureClasses()</code>, <code>ListRasters()</code>, <code>ListFields(fc)</code>, <code>ListDatasets()</code>. <code>arcpy.Describe(fc)</code> yettak-d anaw n tsenselkimt, anagraw n yimsidag, tamnaḍt…</p>
<div class="astuce"><b>Asefrek n tuccḍiwin:</b> sers asesfer deg <code>try: ... except arcpy.ExecuteError: print(arcpy.GetMessages(2))</code> akken ad d-tesskneḍ izen n tuccḍa n ufecku.</div>`,
  exercice: `<ol>
  <li>Aru askript i d-yesskanen, i yal feature class, isem-is, anaw n tsenselkimt d unagraw n yimsidag.</li>
  <li>Rnu asenfeḍ awurman ɣer UTM n yal tissi s yimsidag imaḍalanen.</li>
</ol>` };
B["n6-l3"] = { titre: "Cursors: taɣuri d uleqqem n tmeẓliwin", objectifs: ["Ɣer tafelwit s arcpy.da.SearchCursor", "Leqqem urti s arcpy.da.UpdateCursor"],
  contenu: `
<p>Cursors n tmuɣli <code>arcpy.da</code> tteddun ɣef yizirigen n tfelwit, yiwen yiwen.</p>
<!--code:0-->
<p>Tokens usligen: <code>SHAPE@</code> (tasenselkimt), <code>SHAPE@XY</code>, <code>SHAPE@AREA</code>, <code>SHAPE@LENGTH</code>, <code>OID@</code>.</p>
<p><b>InsertCursor</b> yesnulfuy-d iferdisen imaynuten, amedya seg ufaylu CSV n yimsidag GPS.</p>`,
  exercice: `<ol>
  <li>Sken 5 n tɣiwanin yesɛan ugar n yimezdaɣ (seqdec <code>sql_clause=(None, "ORDER BY POP DESC")</code>).</li>
  <li>Rnu urti <code>CLASSE</code> syen ččar-it s « Petite », « Moyenne » neɣ « Grande » (tamecṭuḥt, talemmast, tameqqrant) s wudem n yimezdaɣ.</li>
  <li>Snulfu-d tinqiḍin seg CSV n tɣuriwin GPS s InsertCursor.</li>
</ol>` };
B["n6-l4"] = { titre: "Tikarḍiwin tiwurmanin s arcpy.mapping", objectifs: ["Sefrek arrat .mxd s uskript", "Snulfu-d tagrumma n tkerḍiwin PDF s wudem awurman"],
  contenu: `
<p><code>arcpy.mapping</code> (n ArcMap kan; deg ArcGIS Pro d <code>arcpy.mp</code>) yettak anekcum ɣer yirraten, data frames, tissiyin d yiferdisen n tsizzelt.</p>
<!--code:0-->
<p><b>Data Driven Pages</b> (afeggag <i>Data Driven Pages</i>) xeddmen aḥric seg umahil-a war tangalt; arcpy.mapping iteddu ugar (izwal, imsizdigen, ineqqisen).</p>`,
  exercice: `<p>Snulfu-d takarḍa PDF i yal tiɣiwant s uzwel awurman, syen sdukkel-itent deg yiwen n PDF s <code>arcpy.mapping.PDFDocumentCreate</code>.</p>` };
B["n6-l5"] = { titre: "Asnulfu n ufecku n uskript deg ArcToolbox", objectifs: ["Err askript d afecku s tenaka n udiwenni", "Ɣer iɣewwaren syen aru iznan"],
  contenu: `
<p><b>Afecku n uskript</b> yettwasqedac am yal afecku n ArcToolbox, ihi daɣen deg ModelBuilder.</p>
<!--code:0-->
<ol>
  <li>Asiti ayeffus ɣef tbwaṭ-ik <code>Outils_ENIV.tbx</code> &gt; <i>Add &gt; Script</i>.</li>
  <li>Isem, tabzimt, aglam, syen fren afaylu <code>.py</code>.</li>
  <li>Sbadu 4 n yiɣewwaren s umizwer, s wanaw n yisefka (Feature Layer, Linear Unit…) d <b>tnila</b> <i>Output</i> i uneggaru.</li>
</ol>
<p><code>AddMessage</code>, <code>AddWarning</code> d <code>AddError</code> ttarun deg usfaylu n usfari n ufecku.</p>`,
  exercice: `<p>Err tamudemt « Tamnaḍt n ummesten » d afecku n uskript. Rnu asenqed: ma yella tissi n unekcum mačči d tissi n tinqiḍin, sken izen n tuccḍa s <code>arcpy.AddError</code>.</p>` };

/* ---------- Aswir 7 ---------- */
B.n7 = { titre: "MNT, tasnamant d tḥemlin", resume: "Heggi MNT, ales asuddes n usuraf (Fill, tinila, asmuzzer), ssuffeɣ-d aẓeṭṭa n yisaffen d umdan n wasif, syen sekken timnaḍin n tḥemlin d wayen yettwasekfen.",
  quiz: [
    { question: "Acuɣer ara tselkmeḍ Fill uqbel Flow Direction?", choix: ["Akken ad yettwaselles wassaɣ", "Akken ad tekkseḍ tiferkiwin (sinks) i yettḥebbisen asuraf", "Akken ad tɛawdeḍ asenfeḍ n MNT", "Akken ad tessenqseḍ teɣzi n ufaylu"], explication: "Tafrikt (sink) ur tesɛi ara amdakel ukessar: aman ḥebsen dinna u aẓeṭṭa ad yerreẓ." },
    { question: "Deg tengalt D8, anwa wazal i d-yemmalen asuraf ɣer unẓul?", choix: ["1", "4", "16", "64"], explication: "1 = E, 2 = SE, 4 = S, 8 = SW, 16 = W, 32 = NW, 64 = N, 128 = NE." },
    { question: "S texxamin n 50 m, talast n 400 n texxamin n usmuzzer temṣada d:", choix: ["0,4 km²", "1 km²", "4 km²", "20 km²"], explication: "400 × 0,0025 km² = 1 km² n tiɣzi yettwasufren." },
    { question: "I wacu i yelha Snap Pour Point?", choix: ["Ad yesmutti tiwwurt n wasif ɣer texxamt i yqerben s usmuzzer ameqqran", "Ad yesnulfu-d aẓeṭṭa n yisaffen", "Ad yesiḍen asawen", "Ad yesdukkel imdanen"], explication: "Tiwwurt yeǧǧan yiwet n texxamt tezmer ad d-tefk amdan n wasif amecṭuḥ aṭas." },
    { question: "Deg umizwer n Strahler, sin n yiḥricen n umizwer 2 i yemlalen ttaken-d:", choix: ["Amizwer 2", "Amizwer 3", "Amizwer 4", "Yettεelleq ɣef teɣzi-nsen"], explication: "Amizwer yettimɣur kan mi ara mlilen sin n yiḥricen n yiwen n umizwer." },
    { question: "Amatar n Gravelius Kc = 1,05 yeglem amdan:", choix: ["Aɣezfan aṭas", "Amsedday, qrib d tawinest", "War tiwwurt", "Endorheic"], explication: "Kc = 1 i tewinest; amdan amsedday yessemlay tiḥemlin s tɣawla." },
    { question: "D acu i tesskan tkarḍa n tḥemlin s waṭas n yiwtilen n tmsirt 4?", choix: ["Tiẓuri n waman i tḥemlet n 100 n yiseggasen", "Tasedrayt timassaɣt ɣer tḥemlin", "Tafsut n wasif", "Aɣṛaḍ unṣib n usɣiwes"], explication: "Tettrettib tamnaḍt s wudem amassaɣ; tiẓuri n waman sran tamudemt n waman (hydraulique)." }
  ] };
B["n7-l1"] = { titre: "Aheggi n MNT i tesnamant", objectifs: ["Kter MNT ASCII syen efk-as anagraw-is n yimsidag", "Sbadu tawennaḍt n usesfer i tesleḍt raster", "Fhem tiferkiwin (sinks) syen seɣti-tent s Fill"],
  contenu: `
<p><b>MNT</b> (tamudemt tumḍint n wassaɣ) d aẓeṭṭa anda yal taxxamt tesɛa tiɣzi n wakal. Isefka n umahil (<code>TP\\MNT\\MNT_50m.asc</code>) ččuren amdan asugan n wasif n Tamda: 400 × 400 n texxamin n 50 m, s WGS 1984 UTM tamnaḍt 30N. I usenfar n tidet, sader SRTM (30 m) neɣ ALOS (30 m) seg EarthExplorer, syen snefḍ-it ɣer UTM uqbel yal asiḍen: asawen yettwasiḍnen s tseggiwin n latitude d awezzaɣ.</p>
<h3>1. Kter syen snefḍ</h3>
<ol>
  <li><b>ASCII To Raster</b> (tabwaṭ Conversion), anaw <code>FLOAT</code>, tuffɣa <code>mnt.tif</code>.</li>
  <li><b>Define Projection</b>: WGS 1984 UTM Zone 30N. Tettbeddireḍ-d (<i>define</i>) acku imsidag llan yakan s yimitren UTM; ad tesnefḍeḍ (<i>project</i>) kan ma ilaq ad yettwabeddel unagraw.</li>
  <li>Azamul: asenfel <i>Standard Deviation</i> d tsuḍeft n yiniten n tɣezzi, syen <b>Hillshade</b> ddaw-s s 40 % n tafrawant ɣef MNT.</li>
</ol>
<h3>2. Rmed Spatial Analyst syen sbadu tawennaḍt</h3>
<p><i>Customize &gt; Extensions</i>: ger tacreḍt ɣef <b>Spatial Analyst</b>. Syen <i>Geoprocessing &gt; Environments</i>:</p>
<table class="tab">
  <tr><th>Aɣewwar</th><th>Azal</th><th>Acuɣer</th></tr>
  <tr><td>Current workspace</td><td><code>C:\\ENIV\\TP\\Sorties\\Risques</code></td><td>igmaḍ akk deg yiwen n wadeg</td></tr>
  <tr><td>Extent, Snap Raster, Cell Size</td><td>mnt.tif</td><td>iẓeṭṭa akk mṣadan s tseḥḥa</td></tr>
  <tr><td>Mask</td><td>mnt.tif (neɣ amdan)</td><td>yettḥettim imsiḍen ɣer tmnaḍt tanfaɛt</td></tr>
</table>
<h3>3. Tiferkiwin d ufecku Fill</h3>
<p>MNT yesɛa <b>tiferkiwin</b> (sinks): tixxamin yettwaddren ɣef yimdukal-nsent akk, s waṭas seg usḥissef n uktili. Aman « ḥebsen » dinna u aẓeṭṭa yettwasiḍnen ad yerreẓ. Afecku <b>Fill</b> (Spatial Analyst &gt; Hydrology) yessali tixxamin-a ɣer uswir n tewwurt-nsent.</p>
<!--code:0-->
<p>Sken <code>prof_cuvettes.tif</code>: iseɣtiyen ilaq ad ilin d imecṭuḥen (kra n yimitren) u ttwazerwen. Tamnaḍt tameqqrant yettwaččaren s waṭas n mraw n yimitren tesskan neɣ asendu n tidet (sebkha, abeṛṛaj) neɣ tuccḍa n MNT.</p>
<div class="astuce"><b>Cfu:</b> seqdec yal tikkelt MNT <b>yettwaččaren</b> i tinila n usuraf, maca ḥrez MNT aqeḥwan i yisawen d tɣezziwin i d-yettbanen deg tkerḍiwin.</div>`,
  exercice: `<ol>
  <li>Kter <code>MNT_50m.asc</code>, beddir-d asenfeḍ-is syen snulfu-d hillshade.</li>
  <li>Sbadu tawennaḍt am deg tfelwit, syen selkem <b>Fill</b>.</li>
  <li>Siḍen <code>fill - mnt</code> s <b>Raster Calculator</b>. Acḥal i d tiẓuri tameqqrant yettwaseɣtan? Acḥal n texxamin i yettwabeddlen (tiɣara &gt; histogram, neɣ <i>Build Raster Attribute Table</i> ɣef lqem n yimḍanen imeddanen)?</li>
</ol>` };
B["n7-l2"] = { titre: "Tanila n usuraf, asmuzzer d uẓeṭṭa n yisaffen", objectifs: ["Siḍen tinila n usuraf D8 d usmuzzer", "Ssuffeɣ-d aẓeṭṭa n yisaffen s talast yettwasfehmen", "Sefru aẓeṭṭa (Strahler) syen err-it d izirigen"],
  contenu: `
<h3>1. Flow Direction</h3>
<p>Tamudemt <b>D8</b> tazen aman n yal taxxamt ɣer umdakel s usawen ameqqran, gar 8. Agmuḍ yettwangel s tzemmar n 2:</p>
<table class="tab">
  <tr><td>32 (NW)</td><td>64 (N)</td><td>128 (NE)</td></tr>
  <tr><td>16 (W)</td><td>taxxamt</td><td>1 (E)</td></tr>
  <tr><td>8 (SW)</td><td>4 (S)</td><td>2 (SE)</td></tr>
</table>
<p>Azal mačči d tazmert n 2 yemmal-d belli tella mazal tafrikt: ales <b>Fill</b>.</p>
<h3>2. Flow Accumulation</h3>
<p>Yal taxxamt teṭṭef <b>amḍan n texxamin n usawen</b> (upstream). Ma yettwasemɣer s tiɣzi n texxamt (50 × 50 m = 0,0025 km²), yettak-d tiɣzi yettwasufren. Sken-it s usenfel <i>Standard Deviation</i> neɣ s taggayin tilugaritmiyin: izirigen n yiɣzer ad d-banen.</p>
<h3>3. Talast d uẓeṭṭa</h3>
<p>Asif « yebda » mi ara tugar tiɣzi yettwasufren talast. S 400 n texxamin = 1 km², ad d-tawiḍ aẓeṭṭa i yqerben ɣer win n tkerḍiwin 1:50 000. Serwes d tissi <code>Oueds</code> syen seggem (200 ar 1 000 n texxamin).</p>
<!--code:0-->
<p><b>Stream Order</b>, tarrayt <b>Strahler</b>: sin n yiḥricen n umizwer n ttaken-d amizwer n+1. <b>Stream to Feature</b> yettak-d izirigen s wurti <code>GRID_CODE</code> = amizwer, yelha i ubeddel n tehri n yizirig.</p>
<div class="astuce"><b>Tixutert:</b> deg <b>Raster Calculator</b>, aru <code>Con("facc.tif" &gt; 400, 1)</code>. Ismawen n tissiyin ttwarun gar tecraḍ tusligin tidusin, u afecku <b>Con</b> isem-is <i>Con</i> (Conditional) deg tbwaṭ.</div>`,
  exercice: `<ol>
  <li>Siḍen <code>fdir</code> d <code>facc</code> seg <code>fill.tif</code>.</li>
  <li>Ssuffeɣ-d kraḍ n yiẓeṭṭa s 200, 400 d 1 000 n texxamin. Sers tissi <code>Oueds</code>: anta talast i yemṣadan ugar?</li>
  <li>Siḍen amizwer n Strahler, err-it d izirigen syen sbadu tehri n yizirig seg <code>GRID_CODE</code>. Acḥal i d amizwer ameqqran deg tewwurt n wasif?</li>
  <li>Serwes d uskript <code>06_hydrologie.py</code>.</li>
</ol>` };
B["n7-l3"] = { titre: "Asefrez d uglam n umdan n wasif", objectifs: ["Qqen tiwwurt n wasif ɣer uẓeṭṭa yettwasiḍnen", "Sefrez amdan n wasif d yimdanen akk n temnaḍt", "Siḍen iɣewwaren imurfulujiyen yeṭṭuqten"],
  contenu: `
<h3>1. Qqen tiwwurt</h3>
<p>Tanqiḍt n tewwurt yettwarun s ufus qlil ma tewwet srid deg texxamt n usmuzzer ameqqran. <b>Snap Pour Point</b> yessmuttuy-itt ɣer texxamt s usmuzzer ameqqran deg uzgen n tewinest yettwafernen (da 150 m, ihi 3 n texxamin). Azgen meqqren aṭas yezmer ad yerr tanqiḍt ad « tenṭeg » ɣer wasif amdakel.</p>
<h3>2. Watershed</h3>
<!--code:0-->
<p><b>Watershed</b> yessefraz kra n wayen i yettazzalen ɣer tewwurt; <b>Basin</b> yebḍa tamnaḍt akk ɣer yimdanen i yettazzalen ɣer yiri n MNT.</p>
<h3>3. Iɣewwaren imurfulujiyen</h3>
<table class="tab">
  <tr><th>Aɣewwar</th><th>Tasemselt</th><th>Afecku n ArcMap</th></tr>
  <tr><td>Tiɣzi A (km²), tawinest P (km)</td><td>tasenselkimt n uɣunam</td><td>Calculate Geometry</td></tr>
  <tr><td>Amatar n usedday n Gravelius</td><td>Kc = 0,28 · P / √A</td><td>Field Calculator</td></tr>
  <tr><td>Tiɣezziwin min, alemmas, max</td><td>—</td><td>Zonal Statistics as Table</td></tr>
  <tr><td>Teɣzi n wasif agejdan L (km)</td><td>abrid n usuraf aɣezfan akk</td><td><i>Flow Length</i>, UPSTREAM</td></tr>
  <tr><td>Akud n usemlay (Giandotti)</td><td>tc = (4√A + 1,5 L) / (0,8 √(Hmoy − Hmin)) s yisragen</td><td>yettwasiḍen seg wazalen-a nnig</td></tr>
</table>
<p>Kc qrib n 1 = amdan amsedday i yessemlayen tiḥemlin s tɣawla; Kc &gt; 1,5 = amdan aɣezfan, tiḥemlin ttwazerwent ugar.</p>`,
  exercice: `<ol>
  <li>Qqen <code>Risques\\Exutoire.shp</code> s uzgen n 150 m, syen sefrez amdan n wasif.</li>
  <li>Err-it d aɣunam syen siḍen tiɣzi-s s km² d tewinest-is.</li>
  <li>S <b>Zonal Statistics as Table</b> ɣef MNT, ɣer Hmin, Hmoy d Hmax; s <b>Flow Length</b>, teɣzi L.</li>
  <li>Siḍen Kc d wakud n usemlay n Giandotti. Amdan d amsedday neɣ d aɣezfan?</li>
</ol>` };
B["n7-l4"] = { titre: "Takarḍa n temnaḍin n tḥemlin d wayen yettwasekfen", objectifs: ["Siḍen tiɣezzi nnig wasif i yqerben (tarrayt HAND)", "Sdukkel aṭas n yiwtilen deg tkarḍa n tsedrayt ɣer tḥemlin", "Senqed takarḍa s yiẓuran n tḥemlin syen bder ayen yettwasekfen"],
  contenu: `
<p>Takarḍa n tidet n uɣilif n tḥemlin tesra tamudemt n waman (hydraulique, md. HEC-RAS) s tufsiwin n tḥemlin. I tesleḍt tamezwarut deg uswir n umdan, nesseqdac <b>tarrayt tajyumurfulujit</b> yebnan ɣef MNT. Asmekti: tiḥemlin n Bab El Oued (Lezzayer tamanaɣt, Wamber 2001) d Ɣerdaya (Tuber 2008) ḥuzant tiɣremt yettwabnan deg wasif ameqqran n yisaffen.</p>
<h3>1. Tiɣezzi nnig wasif i yqerben (HAND)</h3>
<p>Taxxamt tettḥaz s tḥemlin ugar mi ara tili <b>drus kan nnig</b> wasif i yqerben. Nefkka i yal taxxamt tiɣezzi n wasif i yqerben ugar, syen nsiḍen amgired:</p>
<!--code:0-->
<h3>2. Iwtilen, tizmilin d taẓayt</h3>
<p>Yal awtil yettwasmizzwer seg 1 (ur yettɛawan ara) ar 5 (yettɛawan aṭas tiḥemlin), syen ttwasdukklen s <b>tegrumma s taẓayt</b> (taẓayt seg ufaylu <code>Tables\\poids_multicritere.xlsx</code>):</p>
<table class="tab">
  <tr><th>Awtil</th><th>Afecku</th><th>Tazmilt 5 ma…</th><th>Taẓayt</th></tr>
  <tr><td>Ameccaq ɣer wasif</td><td>Euclidean Distance</td><td>&lt; 100 m</td><td>35 %</td></tr>
  <tr><td>Tiɣezzi nnig wasif</td><td>HAND nnig</td><td>&lt; 2 m</td><td>25 %</td></tr>
  <tr><td>Asawen</td><td>Slope (tiseggiwin)</td><td>&lt; 2°</td><td>20 %</td></tr>
  <tr><td>Asmuzzer n usuraf</td><td>facc</td><td>&gt; 10 000 n texxamin</td><td>10 %</td></tr>
  <tr><td>Aɣummu n wakal</td><td>Polygon to Raster</td><td>Aɣrem (ur yettɛeddi ara waman)</td><td>10 %</td></tr>
</table>
<p>Amatar i d-yeffɣen (seg 1 ar 5) yettwabḍa ɣef semmus n taggayin: drus aṭas, drus, alemmas, meqqer, meqqer aṭas.</p>
<h3>3. Senqed syen sdukkel d wayen yettwasekfen</h3>
<ul>
  <li><b>Extract Values to Points</b> ɣef <code>Laisses_crues.shp</code> (iẓuran n tḥemlin): takarḍa yelhan tesserset ugar n yiẓuran deg taggayin 4 d 5.</li>
  <li>Afecku-nni yakan ɣef <code>Ecoles.shp</code>: tabdart n yiɣerbazen deg temnaḍin n tsedrayt meqqren, i tfelwit n usefrek n tɣiwant.</li>
</ul>
<div class="astuce"><b>Ɣur-k:</b> takarḍa-a tesskan <b>tasedrayt</b>, mačči tiẓuri n waman neɣ tallit n tuɣalin. Tettwasqedac i usmizzwer n tezrawin s telqay, mačči i usireg neɣ agdel n turagt n lebni.</div>`,
  exercice: `<ol>
  <li>Siḍen tiɣezzi nnig wasif syen sken-tt s 5 n taggayin (0–2, 2–5, 5–10, 10–20, &gt; 20 m).</li>
  <li>Ales asmizzwer n semmus n yiwtilen syen sdukkel-iten s <b>Raster Calculator</b> neɣ s ufecku <b>Weighted Sum</b>.</li>
  <li>Senqed s <code>Laisses_crues.shp</code>: acḥal n ufmiḍi i yeɣlin deg taggayt meqqren neɣ meqqren aṭas?</li>
  <li>Beddel taẓayt (amedya 25/35/20/10/10) syen serwes. Syen selkem <code>07_zones_inondables.py</code>.</li>
</ol>` };

/* ---------- Aswir 8 ---------- */
B.n8 = { titre: "Tasedrayt ɣer yiɣṛisen igamanen imeqqranen", resume: "Tarrayt s waṭas n yiwtilen (Reclassify, Weighted Overlay, AHP) ɣef tmes n tizgwa, izelzalen, tsunami d uɣelluy n wakal, syen takarḍa n ugzul n yiɣṛisen akk.",
  quiz: [
    { question: "Deg temnaḍt ur nesɛi ara kra n wayen ara yettwasekfen, aɣilif ameqqran yettak-d aɣṛis:", choix: ["Meqqer aṭas", "Alemmas", "Ulac-it neɣ drus aṭas", "Ur yezmir ara ad yettwasiḍen"], explication: "Aɣṛis = aɣilif × tasedrayt n wayen yettwasekfen: war ayen yettwasekfen, ulac aɣṛis." },
    { question: "Acuɣer ara nales asmizzwer n yal awtil seg 1 ar 5 uqbel ad ten-nesdukkel?", choix: ["Akken ad tessenqes teɣzi n raster", "Akken ad nerr tiktiwin yemgaraden ɣef yiwet n tskala", "Akken ad nbeddel asenfeḍ", "Acku Weighted Overlay ur yeqbil ara taẓayt s tfezzit"], explication: "Ur tezmireḍ ara ad tesdukkleḍ tiseggiwin d yimitren: asenfel yerra-ten mserwasen." },
    { question: "Deg ufecku Weighted Overlay, azalen % influence ilaq ad sdukklen:", choix: ["1", "10", "100", "Yal azal"], explication: "Ifmiḍiyen n tbaddelt ilaq ad sdukklen 100." },
    { question: "Deg tarrayt AHP, taẓayt tettwaqbal ma yella amsemwet n tmuqqna CR:", choix: ["Yugar 0,5", "Yedra ɣef 0,10", "Yegda 1", "Ddaw 0"], explication: "Nnig 0,10, iserwas s sin s sin ttwaḥesben ur mṣadan ara." },
    { question: "Anwa udem n usawen i yettawin tazmilt tameqqrant i uɣilif n tmes n tizgwa?", choix: ["Agafa", "Asammar", "Anẓul", "Timnaḍin n wussu"], explication: "Isawen n unẓul ttawin ugar n tafat n yiṭij, ihi ḥman u qquren ugar." },
    { question: "Deg anta tamnaḍt n RPA 99 (lqem 2003) i tella twilayt n Tlemsan?", choix: ["Tamnaḍt 0", "Tamnaḍt I", "Tamnaḍt IIb", "Tamnaḍt III"], explication: "Tlemsan tella deg tmnaḍt I (azelzal drus); Lezzayer tamanaɣt d Bumerdas deg tmnaḍt III." },
    { question: "Acuɣer i ttawint tirsal n yisaffen (alluvions) tazmilt n uzelzal meqqren ɣef weẓru n tlest (calcaire)?", choix: ["Qerbent ɣer yiẓlaḍ", "Akal arṭab yessimɣur timeẓwagin n uzelzal", "Qburent ugar", "Ttɛeddin-tent waman ugar"], explication: "D ademsal n wadeg: akal arṭab yessimɣur u yessaɣzaf ahuzzu." },
    { question: "Anwa afecku i d-yettaken, i yal taxxamt, taggayt tameqqrant gar aṭas n tkerḍiwin n yiɣilifen?", choix: ["Zonal Statistics", "Cell Statistics, MAXIMUM", "Mosaic", "Combine"], explication: "Cell Statistics yessiḍen tamsizdigt yettwasutren taxxamt s texxamt ɣef aṭas n raster." }
  ] };
B["n8-l1"] = { titre: "Aɣilif, tasedrayt d tesleḍt s waṭas n yiwtilen", objectifs: ["Fren gar uɣilif, wayen yettwasekfen, tasedrayt d uɣṛis", "Senfel iwtilen s Reclassify", "Sdukkel iwtilen s Weighted Overlay neɣ Weighted Sum, syen sfehm taẓayt"],
  contenu: `
<h3>1. Amawal</h3>
<ul>
  <li><b>Aɣilif</b>: tumant yezmer ad d-tedru, s tezmert d tegnit (azelzal, taḥemlet, times…).</li>
  <li><b>Ayen yettwasekfen</b> (enjeux): ayen yezmer ad yettwaḥaz (imezdaɣ, iɣerbazen, iberdan, tizgwa, iẓeṭṭa).</li>
  <li><b>Tasedrayt</b>: amek i ḥessen wayen yettwasekfen ɣer uɣilif (izeṭṭa ifessasen, ulac anekcum…).</li>
  <li><b>Aɣṛis = aɣilif × tasedrayt n wayen yettwasekfen</b>. War ayen yettwasekfen, ulac aɣṛis.</li>
</ul>
<p>Deg Lezzayer, <b>alugen 04-20 n 25 Dujember 2004</b> ɣef usmetti n yiɣṛisen igamanen yebder, gar wiyaḍ, izelzalen d yiɣṛisen n tjyulujit, tiḥemlin, iɣṛisen n usezmar, times n tizgwa d yiɣṛisen n tasnawalt. Yessenqed iɣawasen imatuten n usmetti i yal aɣṛis, anda takarḍa SIG tella deg tlemmast.</p>
<h3>2. Tikli 1: senfel s Reclassify</h3>
<p>Asawen s tseggiwin d umeccaq s yimitren ur zmiren ara ad ttwasdukklen. <b>Reclassify</b> yerra yal awtil ɣef yiwet n tskala, da seg 1 (ur yettɛawan ara aɣilif) ar 5 (yettɛawan aṭas). Seqdec <i>Classify</i> akken ad tesekcmeḍ tilisa, syen senqed tafelwit <code>Old value → New value</code>. I yisefka vector, seqdec di tazwara <b>Euclidean Distance</b> neɣ <b>Polygon to Raster</b>.</p>
<h3>3. Tikli 2: efk taẓayt syen sdukkel</h3>
<table class="tab">
  <tr><th>Afecku</th><th>Inekcumen</th><th>Tiɣara</th></tr>
  <tr><td><b>Weighted Overlay</b></td><td>raster n yimḍanen imeddanen</td><td>% influence = 100, taskala yemsaɣen (1 ar 5), azal <i>Restricted</i> akken ad tekkseḍ tamnaḍt; tuffɣa s yimḍanen imeddanen</td></tr>
  <tr><td><b>Weighted Sum</b></td><td>raster imeddanen neɣ s tfezzit</td><td>taẓayt tilellit, tuffɣa s tfezzit: imgiraden ttwaḥerzen, syen ttwasmizzwaren</td></tr>
  <tr><td>Raster Calculator</td><td>akk</td><td><code>0.35 * "c_dist" + 0.25 * "c_pente" + …</code>: yeffeɣ i tafat u yettwales</td></tr>
</table>
<h3>4. Sfehm taẓayt: tarrayt AHP</h3>
<p>Deg <b>AHP</b> n Saaty, iwtilen ttwaserwasen s sin s sin (1 = yiwen n uzal, 3 = drus ugar, 5 = ugar s tidet, 9 = ugar aṭas aṭas). Amaskar ayman (eigenvector) n tmatrict yettak-d taẓayt, u <b>amsemwet n tmuqqna</b> CR = CI / RI ilaq ad yeqqim ddaw 0,10 (CI = (λmax − n) / (n − 1), RI = 1,12 i 5 n yiwtilen). Taẓayt yettwasumren deg <code>poids_multicritere.xlsx</code> d tazwara i udiwenni deg tneɣrit.</p>
<h3>5. Senqed</h3>
<p>Takarḍa n tsedrayt tettwasenqad s <b>tedyanin yettwaẓren</b> (tiɣimin n tmes, aɣelluy n wakal, iẓuran n tḥemlin): tsiḍneḍ aḥric n tedyanin yeɣlin deg taggayin meqqren. Tawuri <code>valider()</code> n ufaylu <code>outils_risques.py</code> txeddem asiḍen-a s wudem awurman.</p>`,
  exercice: `<ol>
  <li>Ldi <code>Tables\\poids_multicritere.xlsx</code>. Senqed belli yal tawriqt tesdukkel 100 %.</li>
  <li>Bnu tamatrict AHP n 3 × 3 (ameccaq ɣer wasif, asawen, aɣummu n wakal) deg Excel syen siḍen taẓayt s talemmast tajyumitrit n yizirigen.</li>
  <li>Ldi afecku <b>Weighted Overlay</b> syen af-d: taskala n usezmel, tagejdit % influence, azal <i>Restricted</i>.</li>
</ol>` };
B["n8-l2"] = { titre: "Takarḍa n uɣilif n tmes n tizgwa", objectifs: ["Fren syen heggi imeẓlan n usenker d usmerreḥ n tmes", "Ales asmizzwer n udem n usawen", "Senqed takarḍa s umazray n tɣimin n tmes"],
  contenu: `
<p>Tizgwa n twilayt n Tlemsan (Hafir, Zarifet…) ttɣimint s waṭas deg unebdu, s usemmiḍ n sirocco. Qrib times akk ssebba-nsent d amdan: taqerrit ɣer yiberdan d yixxamen tesɛa azal am temɣa.</p>
<table class="tab">
  <tr><th>Ameẓlu</th><th>Isefka</th><th>Tazmilt 5 ma…</th><th>Taẓayt</th></tr>
  <tr><td>Asafu (aɣummu n wakal)</td><td>Occupation_sol (CODE_OS)</td><td>Taẓgi; Tiɣdin n tuksa = 4</td><td>35 %</td></tr>
  <tr><td>Asawen</td><td>Slope seg MNT</td><td>&gt; 30° (times tettali s tɣawla)</td><td>20 %</td></tr>
  <tr><td>Udem n usawen</td><td><b>Aspect</b></td><td>Anẓul (157,5–202,5°), yeḥma u yeqqur ugar</td><td>15 %</td></tr>
  <tr><td>Ameccaq ɣer yiberdan</td><td>Euclidean Distance seg Routes</td><td>&lt; 100 m</td><td>15 %</td></tr>
  <tr><td>Ameccaq ɣer yidgan yettwazedɣen</td><td>Euclidean Distance seg Ecoles (aqarub)</td><td>&lt; 200 m</td><td>15 %</td></tr>
</table>
<h3>Ales asmizzwer n Aspect</h3>
<p>Afecku <b>Aspect</b> yettak-d tiɣmert seg 0 ar 360° seg ugafa, d −1 i temnaḍin n wussu. Deg <b>Reclassify</b>: −1 → 1, N (0–22,5 d 337,5–360) → 1, NE d NW → 2, E d W → 3, SE d SW → 4, S → 5.</p>
<!--code:0-->
<h3>Senqed</h3>
<p><code>Risques\\Foyers_incendies.shp</code> yesɛa 45 n tɣimin n tmes (urtiyen ANNEE, SURF_HA, OCCUP, CAUSE). Ssuffeɣ-d taggayt n uɣilif ddaw yal taɣimit syen siḍen aḥric deg taggayin 4–5. <b>Kernel Density</b> n tɣimin s taẓayt <code>SURF_HA</code> yettak-d daɣen takarḍa yelhan n yiḥricen yettwaḥuzan ugar.</p>`,
  exercice: `<ol>
  <li>Heggi semmus n yiwtilen s tizmilin seg 1 ar 5 syen sdukkel-iten s <b>Weighted Overlay</b>.</li>
  <li>Senqed s tɣimin n tmes. Times n « Forêt » (taẓgi) ɣlint-d xir n tid n « Parcours » (tiɣdin n tuksa)?</li>
  <li>Sumer adeg n sin n yiɣerfiyen n tɛessast: ixfawen i yettwalin ugar n texxamin n taggayt 5 (afecku <b>Viewshed</b>).</li>
  <li>Serwes d <code>08_risque_feux.py</code>.</li>
</ol>` };
B["n8-l3"] = { titre: "Tasedrayt ɣer yizelzalen", objectifs: ["Sers tamnaḍt n tezrawt deg uɣṛaḍ RPA 99 (lqem 2003)", "Sekken tazurt n yiqerra n yizelzalen d tqerrit n yiẓlaḍ yermden", "Ḥseb ademsal n wadeg (asimɣer s wakal arṭab)"],
  contenu: `
<p>Agafa n Lezzayer yettusselḥa s yizelzalen (Lasnam 1980, Ɛin Tmucent 1999, Bumerdas 2003). Alugen n yizelzalen <b>RPA 99 lqem 2003</b> yebḍa tamurt ɣer temnaḍin 0 (drus aṭas), I (drus), IIa d IIb (alemmas) d III (meqqer). Tawilayt n Tlemsan tella deg <b>tmnaḍt I</b>: aɣṛis mačči d ilem dinna, u aɣṛaḍ d aɣelnaw. Takarḍa tadigant tettaǧǧa ad teddud ugar: microzonation, afran n yidgan i tɣessiwin, tazwart n usǧehed. Ikatalugen n tidet n yizelzalen ttwasuffɣen sɣur CRAAG.</p>
<table class="tab">
  <tr><th>Awtil</th><th>Tarrayt</th><th>Taẓayt</th></tr>
  <tr><td>Ameccaq ɣer yiẓlaḍ yermden</td><td>Tissi yettwasizdgen s <code>"ACTIVE" = 'Oui'</code> syen Euclidean Distance; tazmilt 5 ddaw 500 m</td><td>40 %</td></tr>
  <tr><td>Tazurt n yiqerra n yizelzalen</td><td><b>Kernel Density</b>, azgen n tewinest 3 km, syen <i>Slice</i> (tagrumma Reclass) ɣer 5 n taggayin s yiwet n tiɣzi</td><td>25 %</td></tr>
  <tr><td>Ademsal n wadeg</td><td>Urti <code>AMPLIF</code> n Lithologie: tirsal n yisaffen 1,8 d talaxt 1,5 &gt; aẓru n tlest 1,0</td><td>25 %</td></tr>
  <tr><td>Asawen (arkad i d-yeǧǧa uzelzal)</td><td>Slope s tseggiwin</td><td>10 %</td></tr>
</table>
<p>Taẓayt n tezurt s tezmert (magnitude) d tin i ijebbden, maca tazmert d tilugaritmit: azelzal M5 yessuffuɣ azal n 32 n tikkal ugar n tẓawt ɣef M4. Seqdec deg wadeg-is urti yettwasiḍnen <code>10 ^ (1.5 * MAG)</code>, neɣ ḥrez tazurt tafessast.</p>
<!--code:0-->
<div class="astuce"><b>Tasedrayt:</b> akken ad tɛeddiḍ seg uɣilif ɣer uɣṛis, sdukkel takarḍa d yizeṭṭa (leɛmeṛ, anaw n lebni, amḍan n yiswiren): d iswi n tezrawin n tsedrayt n yizeṭṭa yettwaxedmen deffir Bumerdas.</div>`,
  exercice: `<ol>
  <li>Sken iqerra n yizelzalen s yizamulen imaktayen ɣer tezmert d yiẓlaḍ yermden s uzeggaɣ.</li>
  <li>Siḍen kernel density s yizgan n 2, 3 d 5 km: amek i ibeddel uzgen takarḍa?</li>
  <li>Sdukkel ukkuẓ n yiwtilen syen af-d iɣerbazen deg taggayt meqqren.</li>
  <li>Serwes d <code>09_risque_sismique.py</code>.</li>
</ol>` };
B["n8-l4"] = { titre: "Tsunami d tḥemlin n yilel", objectifs: ["Fren aḥric n wakal n MNT n yiri n yilel", "Sekken tasedrayt ɣer tḥemlin s tɣezzi d umeccaq ɣer yiri n yilel", "Ales asenario fessusen n tmewjet syen bder ayen yettwaḥuzan"],
  contenu: `
<p>Azelzal n Bumerdas n 21 Mayyu 2003 (Mw 6,8) yessenker-d tsunami yessexsren imarsa n tegzirin Baléares. Ihi tama n yilel n Lezzayer mačči d taɣellsant. Amahil yesseqdac tama n yilel tasugant yettwanecfen seg yiri n yilel n Ɣazawat (<code>TP\\Risques_cote</code>): MNT n 25 m s yilel d tiɣezziwin ddaw 0, izirig n yiri n yilel, abrid n yiri n yilel d 12 n wayen yettwasekfen (amarsa, iɣerbazen, taxxamt n tdawsa, tamesrit n usfeḍ n waman n yilel…).</p>
<h3>1. Ḥrez akal</h3>
<!--code:0-->
<h3>2. Tasedrayt ɣer tḥemlin</h3>
<table class="tab">
  <tr><th>Awtil</th><th>Tazmilt 5 ma…</th><th>Taẓayt</th></tr>
  <tr><td>Tiɣezzi</td><td>&lt; 2 m</td><td>50 %</td></tr>
  <tr><td>Ameccaq ɣer yiri n yilel</td><td>&lt; 100 m</td><td>35 %</td></tr>
  <tr><td>Asawen</td><td>&lt; 2° (aman ttkecmen ɣer daxel s lewɛer)</td><td>15 %</td></tr>
</table>
<h3>3. Asenario n tmewjet</h3>
<p>Asenario afessas: tamewjet n 5 m i yettkecmen alamma d 1 km. Tixxamin yellan ddaw 5 m u daxel n 1 km seg yiri n yilel ttwaḥuzent s waman:</p>
<!--code:1-->
<p>Tarrayt-a n « tbanyut » ur tettḥasab ara amussu n tmewjet d yiɣeblan. Maca tenfeɛ akken ad d-tafeḍ ayen ara yettwassuffɣen di tazwara d usuneɣ n yiberdan ɣer temnaḍin n tɣimit nnig 10 m.</p>`,
  exercice: `<ol>
  <li>Kter <code>MNT_cote_25m.asc</code> syen fren akal. Acḥal n tiɣzi i yellan ddaw 5 m?</li>
  <li>Bnu takarḍa n tsedrayt s kraḍ n yiwtilen.</li>
  <li>Ɛreḍ timewjin n 3, 5 d 8 m: acḥal n wayen yettwasekfen i yettwaḥuzan yal tikkelt?</li>
  <li>S <b>Euclidean Distance</b> seg temnaḍin nnig 10 m, efk ameccaq n tuffɣa i yal ayen yettwasekfen. Serwes d <code>10_tsunami.py</code>.</li>
</ol>` };
B["n8-l5"] = { titre: "Tasedrayt ɣer uɣelluy n wakal", objectifs: ["Sdukkel tilitulujit, asawen d yimeẓlan i yessimɣuren", "Seqdec urti n tmeẓliwin i yesɛan yakan tazmilt d awtil", "Sezmel takarḍa s tebdart n uɣelluy n wakal"],
  contenu: `
<p>Aɣelluy n wakal yettḥaz s waṭas isawen n marne d talaxt, deffir ugeffur aṭas neɣ deffir imahilen n yiberdan. Qsenṭina d amedya i yettwaɣran ugar deg Lezzayer. Deg umahil, tissi <code>Lithologie</code> tesɛa yakan tazmilt n tsedrayt <code>SUSC_GLIS</code>: aẓru n tlest 1, aẓru n yijdi 2, tirsal n yisaffen 3, marne 4, talaxt 5.</p>
<table class="tab">
  <tr><th>Awtil</th><th>Tazmilt 5 ma…</th><th>Taẓayt</th></tr>
  <tr><td>Tilitulujit (SUSC_GLIS)</td><td>talaxt</td><td>35 %</td></tr>
  <tr><td>Asawen</td><td>&gt; 30°</td><td>30 %</td></tr>
  <tr><td>Ameccaq ɣer yisaffen (tukksa n yiran)</td><td>&lt; 100 m</td><td>15 %</td></tr>
  <tr><td>Aɣummu n wakal</td><td>akal aqeḥwan</td><td>10 %</td></tr>
  <tr><td>Ameccaq ɣer yiberdan (tiqeṭṭiɛin)</td><td>&lt; 50 m</td><td>10 %</td></tr>
</table>
<p>S <b>Polygon to Raster</b> ɣef wurti <code>SUSC_GLIS</code>, raster i d-yeffɣen d awtil s tizmilin seg 1 ar 5 srid: ur ilaq ara ad as-tɛawdeḍ asmizzwer.</p>
<h3>Sezmel takarḍa</h3>
<p>Tabdart <code>Glissements.shp</code> (32 n tinqiḍin, urtiyen TYPE, ACTIF, LITHO) tettwasqedac i usenqed. I umahil uḥdiq, bḍu tabdart ɣef sin: azgen akken ad tesseggmeḍ taẓayt, wayeḍ i usenqed. S <b>Select By Attributes</b> (<code>"ACTIF" = 'Oui'</code>), senqed daɣen belli aɣelluy yermden yeɣli deg taggayin ufellayen.</p>`,
  exercice: `<ol>
  <li>Bnu takarḍa n tsedrayt syen senqed-itt s tebdart.</li>
  <li>Siḍen afmiḍi n tiɣzi n yal taggayt (raster attribute table) syen serwes-it d ufmiḍi n uɣelluy n yal taggayt. Takarḍa yelhan tessemlay aṭas n uɣelluy deg tiɣzi drus.</li>
  <li>Anwi iḥricen n yiberdan i yettɛeddin deg taggayt 5? (<b>Extract by Mask</b> syen <b>Intersect</b>, neɣ askript.)</li>
  <li>Serwes d <code>11_glissements.py</code>.</li>
</ol>` };
B["n8-l6"] = { titre: "Agzul n yiɣilifen akk d tkarḍa taneggarut", objectifs: ["Sdukkel aṭas n tkerḍiwin n yiɣilifen deg ugzul", "Snulfu-d imḍanen i yal tiɣiwant", "Suddes takarḍa n uɣṛis i yettwaɣran yerna d tidet"],
  contenu: `
<h3>1. Snat n tarrayin n ugzul</h3>
<ul>
  <li><b>Aɣilif ameqqran</b>: <b>Cell Statistics</b>, tamsizdigt MAXIMUM. Yal taxxamt tettawi taggayt tameqqrant gar yiɣilifen akk.</li>
  <li><b>Amḍan n yiɣilifen imeqqranen</b>: siḍen acḥal n yiɣilifen yellan deg taggayt 4 neɣ 5 deg yal taxxamt (0 ar 4). Aɣerbaz yettwasekfen i tḥemlin d uɣelluy n wakal d tazwart.</li>
</ul>
<!--code:0-->
<h3>2. Imḍanen i yal tiɣiwant</h3>
<p><b>Zonal Statistics as Table</b> s <code>Communes.shp</code> d timnaḍin d umḍan d azal yettak-d, i yal tiɣiwant, amḍan alemmas n yiɣilifen imeqqranen. Qqen tafelwit ɣer tɣiwanin syen xdem takarḍa s yiniten (choroplèthe), s udiagram (<i>View &gt; Graphs</i>).</p>
<h3>3. Tasizzelt</h3>
<ul>
  <li>Initen s umizwer seg uwraɣ aceɛlal ɣer uzeggaɣ aberkan; werǧin tislit n wenẓar i tskala n uɣṛis.</li>
  <li>Legend s yismawen yettwafhamen (« drus aṭas » ar « meqqer aṭas ») deg wadeg n wazalen 1 ar 5.</li>
  <li>Tanaka n telɣut: tarrayt, iwtilen d taẓayt, aɣbalu d uzemz n yisefka, anagraw n yimsidag.</li>
  <li>Tamawt ilaqen i umahil-a: <i>isefka isuganen i uselmed</i>.</li>
</ul>
<h3>4. Err-it awurman</h3>
<p>Iskripten <code>06</code> ar <code>12</code> ssemselen uswir 7 d uswir 8 akk. Selkem-iten s umizwer (06 uqbel 07 d 11, i yesseqdacen aẓeṭṭa n yisaffen). Akken ad ten-terreḍ d afecku n tbwaṭ (aswir 6), beddel taẓayt yettwarun deg tengalt s <code>arcpy.GetParameter()</code>: imdukal-ik ad zmiren ad ɛerḍen taẓayt nniḍen war ma ldin Python.</p>`,
  exercice: `<ol>
  <li>Snulfu-d tikarḍiwin n uɣilif ameqqran d umḍan.</li>
  <li>Sefru tiɣiwanin s umḍan alemmas n yiɣilifen imeqqranen syen sekken agmuḍ.</li>
  <li>Xdem tawriqt n ugzul A3: takarḍa n yiɣilifen akk, takarḍa i yal tiɣiwant, tafelwit n yiɣerbazen yettwasekfen, tanaka n telɣut ummidt.</li>
  <li>Aru 10 n yizirigen n yiwellihen i tɣiwant yettwasekfen ugar.</li>
</ol>` };
