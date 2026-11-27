/* Asuqel n ubrid Python, tmeẓriwt seg ubeɛid d ulmud awurman ɣer tmaziɣt (isekkilen ilatiniyen). Ifecka d tengalt ttwaǧǧan akken llan. */
window.TRAD = window.TRAD || {};
window.TRAD.ber = window.TRAD.ber || {};
var B = window.TRAD.ber;

B.python = { nom: "Python d tmeẓriwt seg ubeɛid", accroche: "Python, tmeẓriwt seg ubeɛid d ulmud awurman (machine learning)",
  lead: "Aru isesfar-ik s yifecka baṭel 100 %: isekkilen n Python, isefka vector s GeoPandas, raster s rasterio, isekkilen n tmeẓriwt seg ubeɛid, imesmalen ispektranen (NDVI, NDWI, NBR), takarḍa n temnaḍt yerɣan, syen asmizzwer n tugniwin s ulmud awurman (K-means, Random Forest, SVM), aktazal n tkerḍiwin d usenfar n tewzelt n uɣelluy n wakal. Tugniwin n usatellit tisuganin am Sentinel-2 n usaru n wasif n Tamda." };

/* ---------- Aswir 1 ---------- */
B.t1 = { titre: "Python i tjiyumatikt", resume: "Asebded n twennaḍt baṭel, isekkilen n tutlayt, syen NumPy, pandas d matplotlib.",
  quiz: [
    { question: "Anwa tamkarḍit i yeqqaren yettarun raster GeoTIFF?", choix: ["pandas", "rasterio", "matplotlib", "scikit-learn"], explication: "rasterio teddu ɣef GDAL akken ad teɣreḍ, ad taruḍ raster s usideg amḍiq." },
    { question: "Amek i d-tesbadu Python iḥder (tineddict, tawuri)?", choix: ["S tecciwin { }", "S usekcem (4 n tallunin)", "S wawal END", "S tenqiḍt-tafaṣelt"], explication: "Izirigen yettwasekcmen s 4 n tallunin d nutni i d iḥder." },
    { question: "Anwa afecku baṭel i yeǧǧan ad tesɣiwseḍ war asebded?", choix: ["ArcGIS Pro", "Google Colab", "Excel", "ENVI"], explication: "Colab yesselkam idlisen n Python deg yiminig." },
    { question: "D acu i d-yettarra alt[alt > 800] i tfelwit NumPy?", choix: ["Amḍan n wazalen > 800", "Azalen yugaren 800", "Tuccḍa", "True neɣ False"], explication: "D tastayt s uẓeṭṭa n tidet/tuccḍa, tettwaseqdac aṭas ɣef yipiksilen." }
  ] };
B["t1-l1"] = { titre: "Sebded tawennaḍt n Python baṭel", objectifs: ["Fren gar usebded adigan (Miniforge) d Google Colab", "Snulfu-d tawennaḍt eniv s temkarḍiyin tijiyugrafiyin", "Senker JupyterLab syen selkem taxxamt tamezwarut"],
  contenu: `
<p>Python d tutlayt <b>tilellit yerna baṭel</b>, tettwaseqdac deg ArcGIS (arcpy), QGIS (PyQGIS) d tmetti meṛṛa n tmeẓriwt seg ubeɛid. Deg ubrid-a, nesseqdac-itt <b>iman-is</b>, war aseɣzan n SIG, s temkarḍiyin tusligin.</p>
<table class="tab">
  <tr><th>Tamkarḍit</th><th>Tawuri</th><th>Ayen yerran ɣer-s deg SIG</th></tr>
  <tr><td><b>NumPy</b></td><td>tifelwin n wuṭṭunen, asiḍen ɣef yipiksilen</td><td>Raster Calculator</td></tr>
  <tr><td><b>pandas</b></td><td>tifelwin (CSV, Excel)</td><td>Tafelwit n tmeẓliwin</td></tr>
  <tr><td><b>GeoPandas</b></td><td>tissiyin vector (shapefile, GeoPackage)</td><td>Ifecka n tesleḍt vector</td></tr>
  <tr><td><b>rasterio</b></td><td>taɣuri d tira n raster (GeoTIFF, ASCII)</td><td>Ifecka raster</td></tr>
  <tr><td><b>scikit-learn</b></td><td>ulmud awurman</td><td>Ifecka n usmizzwer</td></tr>
  <tr><td><b>matplotlib</b></td><td>udlifen d tkerḍiwin</td><td>Tasizzelt n tkarḍa</td></tr>
</table>
<h4>Tifrat 1: ɣef uselkim (yelha deg tzeqqa n umahil)</h4>
<ol>
  <li>Sebded <b>Miniforge</b> (github.com/conda-forge/miniforge), baṭel, war amiḍan.</li>
  <li>Ldi <i>Miniforge Prompt</i>, ddu ɣer <code>C:\\ENIV\\TP\\Scripts\\Python</code> syen snulfu-d tawennaḍt seg ufaylu i d-yettunefken:</li>
</ol>
<!--code:0-->
<p>JupyterLab yettaldi deg yiminig. Snulfu-d <b>adlis</b> (<code>.ipynb</code>): tangalt tettwaru deg <b>texxamin</b> i tesselkameḍ s <kbd>Maj + Entrée</kbd>. VS Code (baṭel) s usiɣzef Python d tifrat-nniḍen yelhan.</p>
<h4>Tifrat 2: Google Colab (war asebded)</h4>
<p>S umiḍan n Google baṭel, ldi colab.research.google.com, syen sali isefka srid seg usmel:</p>
<!--code:1-->
<div class="astuce">Akk iskripten n ubrid bdan s <code>DOSSIER = os.environ.get("ENIV_TP", r"C:\\ENIV\\TP")</code>: teddun akken llan ɣef uselkim, u deg Colab deffir n yizirig <code>os.environ[...]</code>.</div>`,
  exercice: `<ol>
  <li>Sebded Miniforge syen snulfu-d tawennaḍt <code>eniv</code> (neɣ ldi Google Colab).</li>
  <li>Kkes tussda i <code>TP_ENIV_complet.zip</code> d <code>TP_Teledetection.zip</code> deg <code>C:\\ENIV\\</code>.</li>
  <li>Deg udlis, selkem <code>import numpy, pandas, geopandas, rasterio, sklearn</code> syen sken <code>rasterio.__version__</code>. Ur ilaq ara ad d-tban tuccḍa.</li>
</ol>` };
B["t1-l2"] = { titre: "Isekkilen n tutlayt Python", objectifs: ["Seqdec imuttiyen, tibdarin d yimawalen", "Aru tineddict d tewtilt", "Sbadu tawuri syen siwel-as"],
  contenu: `
<p>Python tettwaɣra qrib am tutlayt n yal ass. <b>Asekcem</b> (4 n tallunin) i yesbadun iḥedren: ulac tecciwin.</p>
<!--code:0-->
<table class="tab">
  <tr><th>Tamusni</th><th>Amedya</th></tr>
  <tr><td>Tabdart s ufham (comprehension)</td><td><code>[c for c in communes if pop[c] > 5000]</code></td></tr>
  <tr><td>Azrar yettwasileɣ (f-string)</td><td><code>f"{nom} : {densite:.1f} hab./km²"</code></td></tr>
  <tr><td>Kter tamkarḍit</td><td><code>import numpy as np</code></td></tr>
  <tr><td>Abrid n Windows</td><td><code>r"C:\\ENIV\\TP"</code> (<code>r</code> yessebɛad tuccḍiwin s <code>\\</code>)</td></tr>
</table>
<div class="astuce">ArcMap 10.8 mazal yesseqdac Python 2.7. Da nesseqdac Python 3: <code>print</code> yesra yal tikkelt tacciwin.</div>`,
  exercice: `<ol>
  <li>Snulfu-d amawal n yiɛlayen n semmus n yiseḍfar (snulfu-ten-id).</li>
  <li>S tneddict, sken wid yugaren 800 m.</li>
  <li>Aru tawuri <code>pente_pct(denivele, distance)</code> syen sekyed-itt s 120 m ɣef 1,5 km.</li>
</ol>` };
B["t1-l3"] = { titre: "NumPy, pandas d matplotlib", objectifs: ["Siḍen ɣef tfelwit NumPy war tineddict", "Ɣer, sizdeg syen sneflu tafelwit s pandas", "Suneɣ udlif syen sekles-it"],
  contenu: `
<p><b>NumPy</b> tessiḍin ɣef tfelwin akk ɣef tikkelt (asiḍen « s umeskan »): d ayen ara nexdem ɣef yipiksilen n tugna.</p>
<!--code:0-->
<p><b>pandas</b> tesseqdac tifelwin am tfelwit n usiḍen, maca s tengalt i d-yettuɣalen:</p>
<!--code:1-->
<p><b>matplotlib</b> tessuneɣ udlifen:</p>
<!--code:2-->
<p>Askript ummid <code>py_01_bases_python.py</code> yesseklas igmaḍ-is deg <code>C:\\ENIV\\TP\\Sorties\\Python</code>.</p>`,
  exercice: `<ol>
  <li>Selkem <code>py_01_bases_python.py</code> (neɣ nɣel-it taxxamt s taxxamt deg udlis).</li>
  <li>Rnu tagejdit <code>GAIN</code> = POP_2020 − POP_2008, syen sken taɣiwant yernan ugar n yimezdaɣ.</li>
  <li>Suneɣ asigna n tenqiḍin MENAGES / POP_2020 s <code>df.plot.scatter</code>.</li>
</ol>` };

/* ---------- Aswir 2 ---------- */
B.t2 = { titre: "Isefka vector s GeoPandas", resume: "Taɣuri d usenfel n usenɣel n tissiyin, tuqqniwin n tmeẓliwin d tid tamḍiqin, timnaḍin n tmesteẓṛit, tikarḍiwin d GeoPackage.",
  quiz: [
    { question: "Amek ara tesneflweḍ asenɣel n GeoDataFrame ɣer UTM 30N?", choix: ["gdf.set_crs(32630)", "gdf.to_crs(32630)", "gdf.project(30)", "gdf.crs = 'UTM'"], explication: "to_crs yettbeddil tisidegin; set_crs yessefhem kan anagraw." },
    { question: "Anwa afecku i yessiḍen iseḍfar deg yal taɣiwant?", choix: ["merge", "sjoin", "buffer", "dissolve"], explication: "Tuqqna tamḍiqt tettarra i yal aseḍfar taɣiwant i t-yeṭṭfen." },
    { question: "communes.area yettak m² ma yella tissi:", choix: ["S WGS 84 (tifesniwin)", "S UTM (imitren)", "War anagraw", "S Lambert yal tikkelt"], explication: "Aktum n tiɣzi d win n unagraw yettwasenɣlen." },
    { question: "Anwa amasal i yesseklasen aṭas n tissiyin deg yiwen n ufaylu?", choix: ["Shapefile", "CSV", "GeoPackage", "PNG"], explication: "Afaylu .gpkg yeṭṭef aṭas n tissiyin (aɣewwar layer)." }
  ] };
B["t2-l1"] = { titre: "Ɣer, snirem syen ales asenɣel n tissi", objectifs: ["Ldi shapefile deg GeoDataFrame", "Ɣer syen beddel anagraw n tsidegin", "Siḍen tiɣziwin d tiɣezfanin"],
  contenu: `
<p><b>GeoDataFrame</b> d tafelwit n pandas s tgejdit <code>geometry</code>. Yal izirig d aferdis.</p>
<!--code:0-->
<table class="tab">
  <tr><th>Tamhelt</th><th>GeoPandas</th><th>ArcGIS / QGIS</th></tr>
  <tr><td>Ales asenɣel</td><td><code>gdf.to_crs(32630)</code></td><td>Project / Reproject layer</td></tr>
  <tr><td>Sbadu SCR (war .prj)</td><td><code>gdf.set_crs(32630)</code></td><td>Define Projection</td></tr>
  <tr><td>Afran s tmeẓliwin</td><td><code>gdf[gdf.POP &gt; 10000]</code></td><td>Select by attributes</td></tr>
</table>
<div class="astuce">Siḍen yal tikkelt tiɣziwin deg unagraw <b>yettwasenɣlen</b> (UTM): s tfesniwin, <code>.area</code> ulac anamek-is.</div>`,
  exercice: `<ol>
  <li>Ldi <code>Projections\\Forages_sans_projection.shp</code>: d acu i d <code>crs</code>? Sbadu-t s <code>set_crs(32630)</code>.</li>
  <li>Ldi <code>Projections\\Communes_WGS84.shp</code>, ales asenɣel-is ɣer UTM 30N syen serwes tiɣziwin d <code>Communes.shp</code>.</li>
  <li>Sken taɣezfant tamatut n yisaffen s km.</li>
</ol>` };
B["t2-l2"] = { titre: "Tuqqniwin, isteqsiyen imḍiqen d timnaḍin n tmesteẓṛit", objectifs: ["Qqen tafelwit CSV ɣer tissi", "Xdem tuqqna tamḍiqt", "Snulfu-d timnaḍin n tmesteẓṛit d yimyagen"],
  contenu: `
<!--code:0-->
<table class="tab">
  <tr><th>ArcToolbox</th><th>GeoPandas</th></tr>
  <tr><td>Buffer</td><td><code>gdf.buffer(d)</code></td></tr>
  <tr><td>Intersect</td><td><code>gpd.overlay(a, b, how="intersection")</code></td></tr>
  <tr><td>Dissolve</td><td><code>gdf.dissolve(by="CHAMP")</code></td></tr>
  <tr><td>Spatial Join</td><td><code>gpd.sjoin(a, b, predicate="within")</code></td></tr>
</table>
<p>S lqem aqbur n GeoPandas, beddel <code>union_all()</code> s <code>unary_union</code>.</p>`,
  exercice: `<ol>
  <li>Siḍen taneɣruft n 2020 n yal taɣiwant syen sken tlata yugaren.</li>
  <li>Siḍen tiɣerbiwin yellan ddaw 500 m seg ubrid aɣelnaw.</li>
  <li>Siḍen tiɣzi n tezgi deg yal taɣiwant (overlay + pivot_table).</li>
</ol>` };
B["t2-l3"] = { titre: "Tikarḍiwin, GeoPackage d tkarḍa web", objectifs: ["Suffeɣ-d takarḍa choroplèthe s tsegzit", "Sekles aṭas n tissiyin deg GeoPackage", "Snulfu-d takarḍa web tamyigawt"],
  contenu: `
<!--code:0-->
<p>GeoPackage yettaldi srid deg QGIS d ArcGIS Pro. Takarḍa web (<code>explore</code>, asiɣzef folium) tettales asenɣel-is iman-is ɣer WGS 84 syen tettaldi deg yal iminig.</p>
<p>Askript ummid: <code>py_02_vecteur_geopandas.py</code>.</p>`,
  exercice: `<ol>
  <li>Selkem <code>py_02_vecteur_geopandas.py</code> syen ldi <code>tamda.gpkg</code> deg QGIS.</li>
  <li>Beddel initen (<code>cmap="viridis"</code>) syen rnu tiɣerbiwin.</li>
  <li>Snulfu-d takarḍa web n yiseḍfar s yini n waddad-nsen (<code>column="ETAT"</code>).</li>
</ol>` };

/* ---------- Aswir 3 ---------- */
B.t3 = { titre: "Isefka raster s rasterio", resume: "Ldi raster, fhem asenfel afinan, siḍen asmal s NumPy, ales asmizzwer, gzem syen aru GeoTIFF.",
  quiz: [
    { question: "D acu i yeṭṭef usenfel afinan n raster?", choix: ["Initen", "Tiddi n ipiksil d wadeg n teɣmert", "Amḍan n tsebbaḍin", "Azemz n tugna"], explication: "Yettbeddil izirig/tagejdit ɣer tsidegin x/y." },
    { question: "Deg rasterio, src.read(1) yeqqar:", choix: ["Izirig amezwaru", "Tasebbaḍt 1", "Ipiksil amezwaru", "Isefka-isefka (metadata)"], explication: "Tisebbaḍin ttwaḥesbent seg 1." },
    { question: "Ayen yerran ɣer ufecku Con deg NumPy d:", choix: ["np.where", "np.sum", "np.gradient", "np.digitize"], explication: "np.where(tawtilt, azal_ma_d_tidet, azal_ma_d_tuccḍa)." },
    { question: "Acuɣer ara nenɣel src.profile qbel tira?", choix: ["I usedres", "Akken ad yeqqim yiwen uẓeṭṭa d yiwen unagraw", "I ubeddel n umasal", "Ur yesɛi ara lfayda"], explication: "Agmuḍ ad yeqqim yemmezg d yisefka imenza." }
  ] };
B["t3-l1"] = { titre: "Ɣer raster: isefka-isefka d yipiksilen", objectifs: ["Ldi raster syen ɣer isefka-isefka-s", "Fhem asenfel afinan (ipiksil ↔ tisidegin)", "Ɣer azal n ipiksil deg tenqiḍt"],
  contenu: `
<p>Raster d <b>tafelwit NumPy</b> (izirigen × tigejda) s <b>usideg amḍiq</b>: anagraw n tsidegin (CRS) d <b>usenfel afinan</b> i yeqqnen ipiksil ɣer tsidegin-is.</p>
<!--code:0-->
<p>Seqdec ugar <code>with rasterio.open(...) as src:</code>: afaylu ad yettwamdel iman-is. Tisebbaḍin ttwaḥesbent seg <b>1</b> deg rasterio, maca tifelwin NumPy bdant seg <b>0</b>.</p>`,
  exercice: `<ol>
  <li>Sken tamnaḍt (<code>src.bounds</code>) d tiɣzi n MNT s km².</li>
  <li>Ɣer aɛli n 30 n yiseḍfar: ldi <code>Forages.shp</code> s GeoPandas syen seqdec <code>src.sample</code>. Serwes d urti ALT_M.</li>
  <li>Sken MNT s <code>plt.imshow(mnt, cmap="terrain")</code>.</li>
</ol>` };
B["t3-l2"] = { titre: "Asiḍen ɣef yipiksilen: asmal d usmizzwer", objectifs: ["Siḍen asmal s np.gradient", "Ales asmizzwer n raster s np.digitize", "Siḍen tiɣziwin s usmil"],
  contenu: `
<!--code:0-->
<table class="tab">
  <tr><th>Spatial Analyst</th><th>NumPy</th></tr>
  <tr><td>Slope (asmal)</td><td><code>np.gradient</code> + <code>arctan</code></td></tr>
  <tr><td>Reclassify</td><td><code>np.digitize</code> neɣ <code>np.select</code></td></tr>
  <tr><td>Con</td><td><code>np.where(condition, a, b)</code></td></tr>
  <tr><td>Tisnaddanin</td><td><code>.mean()</code>, <code>.max()</code>, <code>np.percentile</code></td></tr>
</table>`,
  exercice: `<ol>
  <li>Siḍen asmal s ufmiḍ (<code>np.hypot(...) * 100</code>).</li>
  <li>Ales asmizzwer n uɛli ɣer 4 n yismilen (&lt; 500, 500–700, 700–900, &gt; 900 m) syen efk tiɣzi n yal yiwen.</li>
  <li>Serwes asmal-ik alemmas d win n ufecku Slope n ArcGIS neɣ n QGIS.</li>
</ol>` };
B["t3-l3"] = { titre: "Gzem syen aru GeoTIFF", objectifs: ["Aru agmuḍ deg GeoTIFF s usideg amḍiq", "Gzem raster s poligun", "Beddel tissi vector ɣer raster"],
  contenu: `
<!--code:0-->
<p><b>Profile</b> yeṭṭef ayen akk yesran akken ad taruḍ raster yemmezgen d umenzu: tiddi, asenfel, CRS, anaw. Beddel kan ayen yemgaraden (anaw, nodata, amḍan n tsebbaḍin). Askript ummid: <code>py_03_raster_mnt.py</code>.</p>`,
  exercice: `<ol>
  <li>Selkem <code>py_03_raster_mnt.py</code> syen ldi <code>pente_classes.tif</code> deg QGIS neɣ ArcGIS.</li>
  <li>Gzem MNT s teɣiwant i tebɣiḍ syen siḍen aɛli-ines alemmas.</li>
  <li>Beddel Occupation_sol (urti CODE_OS) ɣer raster ɣef uẓeṭṭa n MNT syen sekles-it.</li>
</ol>` };

/* ---------- Aswir 4 ---------- */
B.t4 = { titre: "Isekkilen n tmeẓriwt seg ubeɛid", resume: "Tafat d tsenyalin ispektranin, isatelliten baṭel (Sentinel-2, Landsat), alday n tugna s waṭas n tsebbaḍin d yisuddas n yini.",
  quiz: [
    { question: "Imɣi yeddren yettarra s waṭas:", choix: ["Amidadi", "Azeggaɣ", "Infrarouge aqerruy", "Infrarouge aɣurfan"], explication: "Tabnadt n yifer tettarra s lǧehd PIR, klorofil yeswa azeggaɣ." },
    { question: "Anwa aswir n Sentinel-2 i d-yettaken tuɣalin n wudem?", choix: ["L0", "L1C", "L2A", "L3"], explication: "L2A yettwaseɣti seg twenḍa yerna yesɛa tissi SCL." },
    { question: "Asuddes B8-B4-B3 yesskan imɣi s yini:", choix: ["Azegzaw", "Azeggaɣ", "Amidadi", "Aberkan"], explication: "PIR yettwasers deg ubadu azeggaɣ." },
    { question: "Tabadut tazemzit d:", choix: ["Tiddi n ipiksil", "Amḍan n tsebbaḍin", "Tasnalt n tuɣalin", "Amḍan n yiswiren n ubeẓdan"], explication: "Sentinel-2 yettuɣal yal 5 n wussan." }
  ] };
B["t4-l1"] = { titre: "Tafat, tisenyalin ispektranin d tbadutin", objectifs: ["Fsr tuɣalin d yigran ispektranen", "Issin tisenyalin n waman, n yimɣi d wakal", "Fren gar 4 n tbadutin n umeẓẓay"],
  contenu: `
<p>Ameẓẓay aɣenni yettaktil aḥric n tafat n yiṭij i <b>d-yettarra</b> wudem: <b>tuɣalin</b> (réflectance), gar 0 d 1, deg waṭas n <b>tsebbaḍin ispektranin</b>.</p>
<table class="tab">
  <tr><th>Annar</th><th>Teɣzi n tmewja</th><th>Ayen i d-yettbanen</th></tr>
  <tr><td>Ayen yettbanen (amidadi, azegzaw, azeggaɣ)</td><td>0,45 – 0,70 µm</td><td>Initen igamanen; klorofil yeswa azeggaɣ</td></tr>
  <tr><td>Infrarouge aqerruy (PIR)</td><td>0,75 – 0,90 µm</td><td>Imɣi yeddren yettarra-t aṭas (tabnadt n yifer)</td></tr>
  <tr><td>Infrarouge alemmas (SWIR)</td><td>1,5 – 2,3 µm</td><td>Tilin n wakal d yimɣan, times, iẓṛa</td></tr>
  <tr><td>Infrarouge aɣurfan</td><td>10 – 12 µm</td><td>Taẓɣelt n wudem (Landsat)</td></tr>
</table>
<p><b>Tisenyalin ispektranin</b>: aman swan qrib kullec deg infrarouge; imɣi ɣur-s azeggaɣ d amecṭuḥ, PIR d ameqqran; akal ilem yettali s leɛqel seg umidadi ar SWIR; lebni d aceɛlal yerna ur yettbeddil ara.</p>
<table class="tab">
  <tr><th>Tabadut</th><th>Anamek</th><th>Sentinel-2</th></tr>
  <tr><td>Tamḍiqt</td><td>tiddi n ipiksil ɣef wakal</td><td>10, 20 neɣ 60 m</td></tr>
  <tr><td>Tispektrant</td><td>amḍan d tehri n tsebbaḍin</td><td>13 n tsebbaḍin</td></tr>
  <tr><td>Tazemzit</td><td>tasnalt n tuɣalin</td><td>5 n wussan</td></tr>
  <tr><td>Taradyumetrit</td><td>amḍan n yiswiren</td><td>12 n bit</td></tr>
</table>
<div class="astuce">Askript <code>py_04_composites.py</code> yessuneɣ tisenyalin tilemmasin n 6 n yismilen seg tenqiḍin n uselmed: serwes-itent d uskiddeg ataznan.</div>`,
  exercice: `<ol>
  <li>Suneɣ s ufus tisenyalin n waman, n tezgi d wakal ilem ɣef 6 n tsebbaḍin (B2, B3, B4, B8, B11, B12).</li>
  <li>Selkem <code>py_04_composites.py</code> syen serwes d tugna <code>signatures_spectrales.png</code>.</li>
  <li>Anwa tasebbaḍt i yeẓẓlen akk ugar aman ɣef wayen nniḍen? D tezgi ɣef umadaɣ (maquis)?</li>
</ol>` };
B["t4-l2"] = { titre: "Isatelliten baṭel d usader n tugniwin", objectifs: ["Issin Sentinel-2 d Landsat 8/9", "Sader tugna baṭel n Lezzayer", "Fhem iswiren n usesfer d uẓeṭṭa n usigna"],
  contenu: `
<table class="tab">
  <tr><th>Asatellit</th><th>Ipiksil</th><th>Tuɣalin</th><th>Anekcum baṭel</th></tr>
  <tr><td><b>Sentinel-2</b> A/B/C (Copernicus, UE)</td><td>10 / 20 / 60 m</td><td>5 n wussan</td><td>Copernicus Browser (dataspace.copernicus.eu)</td></tr>
  <tr><td><b>Landsat 8 d 9</b> (USGS/NASA)</td><td>30 m (15 m panchro, 100 m aɣurfan)</td><td>8 n wussan s sin</td><td>EarthExplorer (earthexplorer.usgs.gov)</td></tr>
  <tr><td><b>Sentinel-1</b> (radar)</td><td>10 m</td><td>6 ar 12 n wussan</td><td>Copernicus Browser; yettwali seg usigna</td></tr>
  <tr><td>Google Earth Engine</td><td>agbur n yigiman n tugniwin</td><td>—</td><td>baṭel i uselmed d unadi</td></tr>
</table>
<p><b>Iswiren n Sentinel-2</b>: L1C = tuɣalin s afella n twenḍa; <b>L2A</b> = tuɣalin n wudem yettwaseɣten seg twenḍa, s tissi n usmizzwer n tmeẓri (<b>SCL</b>) i d-yemmalen asigna, tili d waman. I yimesmalen d usmizzwer, sader <b>L2A</b>.</p>
<p>Tisebbaḍin n ubrid: B2 amidadi, B3 azegzaw, B4 azeggaɣ, B8 PIR (10 m), B11 d B12 SWIR (20 m). Ifuyla n umahil <code>S2_2024-06-15_Tamda.tif</code> d <code>S2_2025-08-20_Tamda.tif</code> ttemcabin ɣer 6-a n tsebbaḍin, ɣef 20 m, s wazalen imeddan = tuɣalin × 10 000.</p>
<div class="astuce">Tugniwin n umahil d <b>tisuganin</b>: ttaǧǧan-k ad txedmeḍ war Internet. Syen ales isesfar-nni ɣef tugna tilawt n Sentinel-2 n tama n Tlemsan.</div>`,
  exercice: `<ol>
  <li>Snulfu-d amiḍan baṭel deg Copernicus Browser syen nadi tugna Sentinel-2 L2A n Tlemsan s ddaw 10 % n usigna.</li>
  <li>Aru azemz-is, asulay n tferkit (5 n yisekkilen, bdan s 30S i Tlemsan) d usigna.</li>
  <li>Serwes yiwet n temnaḍt s yini igamanen d yini ikerkasen deg yiminig.</li>
</ol>` };
B["t4-l3"] = { titre: "Ldi tugna s waṭas n tsebbaḍin syen xdem isuddas n yini", objectifs: ["Ɣer tugna s 6 n tsebbaḍin syen beddel-itt ɣer tuɣalin", "Ssiweḍ amgired (centiles 2–98 %)", "Suffeɣ-d isuddas igamanen, infrarouge d SWIR"],
  contenu: `
<!--code:0-->
<table class="tab">
  <tr><th>Asuddes</th><th>Tisebbaḍin (A-Z-M)</th><th>Aseqdec</th></tr>
  <tr><td>Initen igamanen</td><td>B4-B3-B2</td><td>tamuɣli am « tawlaft »</td></tr>
  <tr><td>Initen ikerkasen infrarouge</td><td>B8-B4-B3</td><td>imɣi s uzeggaɣ, tazmert-is</td></tr>
  <tr><td>SWIR</td><td>B12-B8-B4</td><td>akal, timnaḍin yerɣan, tilin</td></tr>
  <tr><td>Tafellaḥt</td><td>B11-B8-B2</td><td>ifelḥan d wakal</td></tr>
</table>
<p>Asiweḍ n umgired d ayen ilaqen: tuɣalin ṭṭfent tagnit tamecṭuḥt (0,02 ar 0,4), tugna tamenzut tettban-d d taberkant.</p>`,
  exercice: `<ol>
  <li>Sken 3 n yisuddas n tugna n 2024 yiwen ɣer tama n wayeḍ (<code>plt.subplots(1, 3)</code>).</li>
  <li>Af-d tamda n waman, tamdint, iger d tezgi n ugafa.</li>
  <li>Xdem asuddes SWIR n tugna n 2025: d acu i d-tettwaliḍ deg ugafa-utaram?</li>
</ol>` };

/* ---------- Aswir 5 ---------- */
B.t5 = { titre: "Imesmalen ispektranen d tifin n yibeddilen", resume: "NDVI, SAVI, NDWI, NDBI, tilisa, syen takarḍa n temnaḍt yerɣan deg 2025 s NBR d dNBR.",
  quiz: [
    { question: "Tasileɣt n NDVI s Sentinel-2 d:", choix: ["(B4 − B8) / (B4 + B8)", "(B8 − B4) / (B8 + B4)", "(B3 − B8) / (B3 + B8)", "B8 / B4"], explication: "PIR kkes azeggaɣ, ad yebḍu ɣef tegrumma-nsen." },
    { question: "NDVI ddaw 0 yemmal s waṭas:", choix: ["Tazgi tazurant", "Aman", "Ifelḥan", "Akal yettwakerzen"], explication: "Aman ttarran azeggaɣ (d uzegzaw) ugar n PIR." },
    { question: "Deffir n tmes, NBR:", choix: ["Yettali", "Yettader", "Ur yettbeddil ara", "Ad yuɣal am NDVI"], explication: "PIR yettader, SWIR yettali: dNBR d ufrir." },
    { question: "Acuɣer kra n yiger ttbanen-d « rɣan » deg dNBR?", choix: ["Tuccḍa n usenɣel", "Ttwamegren gar sin n yizemzen", "Asigna", "Tasebbaḍt tamidadit"], explication: "Asṛuḥ n yimɣi azegzaw yettemcabi ɣer tmes: ilaq ad ttwasizdgen yigmaḍ-a ikerkasen." },
    { question: "Anwa amesmal yelhan i yimɣi isehlan n tmnaḍin tiqqurin?", choix: ["NDWI", "SAVI", "NDBI", "NBR"], explication: "SAVI yesseɣti aɣbalu n wakal ilem yettbanen gar yimɣan." }
  ] };
B["t5-l1"] = { titre: "Siḍen NDVI, SAVI, NDWI d NDBI", objectifs: ["Aru tasileɣt n umgired yettwasegden", "Fsr azalen n NDVI", "Sekles raster n yimesmalen s waṭas n tsebbaḍin"],
  contenu: `
<p><b>Amesmal ispektran</b> yesdukkul snat n tsebbaḍin akken ad d-yesbeggen kra. Ddeqs deg-sen d <b>imgiraden yettwasegden</b> gar −1 d +1: (a − b) / (a + b).</p>
<table class="tab">
  <tr><th>Amesmal</th><th>Tasileɣt Sentinel-2</th><th>Ayen i d-yesbeggen</th></tr>
  <tr><td><b>NDVI</b></td><td>(B8 − B4) / (B8 + B4)</td><td>imɣi (&gt; 0,5 azuran, 0,2–0,5 isehlan, &lt; 0,2 akal neɣ lebni, &lt; 0 aman)</td></tr>
  <tr><td><b>SAVI</b></td><td>1,5 × (B8 − B4) / (B8 + B4 + 0,5)</td><td>imɣi isehlan deg tmnaḍin tiqqurin</td></tr>
  <tr><td><b>NDWI</b></td><td>(B3 − B8) / (B3 + B8)</td><td>aman ufrinen (&gt; 0)</td></tr>
  <tr><td><b>NDBI</b></td><td>(B11 − B8) / (B11 + B8)</td><td>lebni d wakal ilem</td></tr>
  <tr><td><b>NBR</b></td><td>(B8 − B12) / (B8 + B12)</td><td>timnaḍin yerɣan (tamsirt 3)</td></tr>
</table>
<!--code:0-->
<div class="astuce">Beddel yal tikkelt uṭṭunen imeddan ɣer uṭṭunen n tfaṣelt (<code>astype("float32")</code>) qbel ad tebḍuḍ: neɣ m ulac abḍu n wuṭṭunen ur nesɛi azamul yezmer ad d-yefk azalen n tuccḍa.</div>`,
  exercice: `<ol>
  <li>Selkem <code>py_05_indices.py</code> syen ldi <code>indices_2024.tif</code> deg QGIS.</li>
  <li>Serwes NDVI alemmas n tezgi, n umadaɣ d yifelḥan (seqdec tinqiḍin n uselmed).</li>
  <li>Anida i yemgarad SAVI s tidet ɣef NDVI? Acuɣer?</li>
</ol>` };
B["t5-l2"] = { titre: "Tilisa d tkerḍiwin tisentalin", objectifs: ["Fren tilist s tmuɣli n umazray (histogramme)", "Sdukkel aṭas n twtilin", "Siḍen tiɣziwin s hektar"],
  contenu: `
<!--code:0-->
<p><b>Histogramme</b> yesskan aṭas n « yiɣallen »: yal aɣallen d anaw n wudem. Ger tilisa deg yiɣzer gar-asen. Tilisa sehlent, ɣawlent, maca ur ttbeṭṭunt ara ismilen yesɛan yiwen NDVI (tazgi d yifelḥan yettwasewwen, akal ilem d lebni): d ta i d tawuri n usmizzwer (aswir 6).</p>`,
  exercice: `<ol>
  <li>Siḍen tiɣzi n tmda n waman deg yunyu 2024, syen deg ɣuct 2025. S wacḥal i tenqes?</li>
  <li>Ɛreḍ tilisa 0,2 / 0,5 syen 0,3 / 0,6: amek ttbeddilent tiɣziwin?</li>
  <li>Bnu aẓeṭṭa « lebni yezmer » s NDBI &gt; 0,1 d NDVI &lt; 0,25.</li>
</ol>` };
B["t5-l3"] = { titre: "Tifin n yibeddilen: tamnaḍt yerɣan (NBR, dNBR)", objectifs: ["Siḍen NBR qbel d deffir n tmes", "Smizzwer tazmert n tmes s tilisa n dNBR", "Beddel tamnaḍt yerɣan ɣer poligun"],
  contenu: `
<p>Times <b>tasugant</b> tewweḍ ɣer tezgi d umadaɣ n ugafa-utaram ass n 12 yulyu 2025. Times tessadar PIR, tessali SWIR: <b>NBR</b> yettader. Amgired <b>dNBR = NBR<sub>qbel</sub> − NBR<sub>deffir</sub></b> yettaktil tazmert-is.</p>
<!--code:0-->
<table class="tab">
  <tr><th>dNBR</th><th>Tazmert (USGS)</th></tr>
  <tr><td>&lt; 0,10</td><td>ur yerɣi ara</td></tr>
  <tr><td>0,10 – 0,27</td><td>tamecṭuḥt</td></tr>
  <tr><td>0,27 – 0,44</td><td>talemmast-tamecṭuḥt</td></tr>
  <tr><td>0,44 – 0,66</td><td>talemmast-tameqqrant</td></tr>
  <tr><td>&gt; 0,66</td><td>tameqqrant</td></tr>
</table>
<div class="astuce">Iger yettwamegren gar yunyu d ɣuct ula d nutni ssadaren NBR: ttbanen-d s « tazmert tamecṭuḥt ». D <b>agmuḍ akerkas</b>. Askript <code>py_06_changements_incendie.py</code> yeǧǧa kan tabqaɛt tameqqrant ugar n 0,27; tzemreḍ daɣen ad teffreḍ ifelḥan s usmizzwer n uswir 6.</div>`,
  exercice: `<ol>
  <li>Selkem <code>py_06_changements_incendie.py</code> syen ldi <code>perimetre_incendie_2025.shp</code> deg QGIS neɣ ArcGIS.</li>
  <li>Acḥal i d tiɣzi yerɣan? Acḥal deg-s s tazmert tameqqrant?</li>
  <li>Sers tamnaḍt-a ɣef yibuzzar n tmes n <code>Risques\\Foyers_incendies.shp</code> d tiɣerbiwin: anwat i yellan ddaw 2 km?</li>
</ol>` };

/* ---------- Aswir 6 ---------- */
B.t6 = { titre: "Ulmud awurman: asmizzwer n tugna", resume: "Tamusni n ulmud awurman, asmizzwer war aselmad K-means, tinqiḍin n uselmed, asmizzwer s uselmad Random Forest.",
  quiz: [
    { question: "K-means d tarrayt:", choix: ["S uselmad", "War aselmad", "N regression", "N usideg amḍiq"], explication: "Tesdukkul ipiksilen war tibzimin." },
    { question: "Deg scikit-learn, anwa tawuri i yesselmaden tamudemt?", choix: ["predict", "fit", "train_map", "score"], explication: "fit(X, y) yesselmad; predict(X) yettwali-d." },
    { question: "Acuɣer ara nbeddel tugna (6, 600, 600) ɣer (360 000, 6)?", choix: ["I usedres-is", "Yiwen izirig i yal ipiksil, yiwet tgejdit i yal amutti", "I usenɣel-is", "I uskan-is"], explication: "D amasal-a i ttraǧunt tmudmin n scikit-learn." },
    { question: "Random Forest yettfren asmil n ipiksil s:", choix: ["Yiwet n tilist", "Afran n waṭas n yiseklan n tegtt", "Ameccaq ɣer tlemmast n usmil", "Zher"], explication: "Yal aseklu yefren; tamaggit d tin i yernan." },
    { question: "Anida ara nger tinqiḍin n uselmed?", choix: ["Ɣef yilisa gar yismilen", "Deg tlemmast n tmnaḍin yemsaṛaḍen, ɣef tugna akk", "Akk deg yiwen n yiger", "Ɣef usigna"], explication: "Ipiksilen zeddigen, yettwabḍan akken iwata, ttaken-d tamudemt yelhan ugar." }
  ] };
B["t6-l1"] = { titre: "Tamusni n ulmud awurman (machine learning)", objectifs: ["Fren gar ulmud s uselmad d war aselmad", "Sbadu imuttiyen, tibzimin, aselmed d ukayad", "Fhem aselmed ugar n wayen ilaqen (overfitting)"],
  contenu: `
<p><b>Ulmud awurman</b> (machine learning) d asemmeḍ n walguritm <b>ad ilmed alugen seg yimedyaten</b>, deg wadeg ad t-naru nekkni (am tilisa n uswir 5).</p>
<table class="tab">
  <tr><th>Awal</th><th>Deg tmeẓriwt seg ubeɛid</th></tr>
  <tr><td>Afeṛdis (tamedyant)</td><td>ipiksil</td></tr>
  <tr><td>Imuttiyen (features) X</td><td>tisebbaḍin d yimesmalen n ipiksil</td></tr>
  <tr><td>Tabzimt (label) y</td><td>asmil yettwassnen: aman, tazgi, amadaɣ…</td></tr>
  <tr><td>Aselmed</td><td>tamudemt tlemmed seg yipiksilen s tbzimin</td></tr>
  <tr><td>Tazwart (prédiction)</td><td>tamudemt tsmizzwir ipiksilen nniḍen akk</td></tr>
  <tr><td>Aseḥqeq</td><td>tazɣart tettwaktal ɣef tenqiḍin <b>ilelliyen</b></td></tr>
</table>
<ul>
  <li><b>War aselmad</b> (K-means): ulac tibzimin; alguritm yesdukkul ipiksilen yemcabin, syen amseqdac ad isemmi igrawen.</li>
  <li><b>S uselmad</b> (Random Forest, SVM, k-NN, izeḍwan n yineɣlalen): nettak-d imedyaten s tbzimin.</li>
  <li><b>Asmizzwer</b>: nettwali-d asmil. <b>Regression</b>: nettwali-d azal (biomasse, afmiḍ n ugalis).</li>
</ul>
<p><b>Overfitting</b>: tamudemt « teḥfeḍ » imedyaten-is, ur tessaweḍ ara ad tesmatu. Nettaf-it s ukayad ɣef yisefka ur yezri ara yakan.</p>
<div class="astuce">Deg scikit-learn, tamudemt akk ttwaseqdacent s yiwet n tarrayt: <code>model.fit(X, y)</code> i ulmud, <code>model.predict(X)</code> i tzwart.</div>`,
  exercice: `<ol>
  <li>I yal ugur, ini ma d asmizzwer neɣ d regression, s uselmad neɣ ala: takarḍa n useqdec n wakal, aktazal n tfeṛṛant n yired, asdukkel n yipiksilen war tamusni n wakal, tazmert n uɣelluy.</li>
  <li>Fsr acuɣer ur ilaq ara ad tesseḥqeqeḍ takarḍa s tenqiḍin i tt-yesselmden.</li>
</ol>` };
B["t6-l2"] = { titre: "Asmizzwer war aselmad: K-means", objectifs: ["Beddel tugna ɣer tfelwit ipiksilen × imuttiyen", "Sdukkel ipiksilen s K-means", "Fsr igrawen i d-yeffɣen"],
  contenu: `
<!--code:0-->
<p><b>reshape</b> d tasurift tagejdant: tugna (tisebbaḍin, izirigen, tigejda) tuɣal d tafelwit (ipiksilen, tisebbaḍin), i yezmer scikit-learn ad ixdem. Nettales-itt deffir n tzwart.</p>
<p>K-means ur yessin ara d acu i d « tazgi »: ilaq ad <b>nsemmi</b> yal agraw. Askript <code>py_07_kmeans.py</code> yettmyagi igrawen d tenqiḍin n wakal (<code>pd.crosstab</code>) syen yessuneɣ <b>tarrayt n uɣemmar</b> (coude) i ufran n umḍan n yigrawen.</p>`,
  exercice: `<ol>
  <li>Selkem <code>py_07_kmeans.py</code>. Anwi igrawen i yemmezgen s tidet d yiwen usmil? Anwi i yexelḍen aṭas n yismilen?</li>
  <li>Ales s <code>k = 8</code> syen <code>k = 4</code>: d acu yeḍran i tebḍit gar umadaɣ d wakal ilem?</li>
  <li>Kkes StandardScaler: yettbeddil ugmuḍ? Acuɣer?</li>
</ol>` };
B["t6-l3"] = { titre: "Tinqiḍin n uselmed d wazalen n yipiksilen", objectifs: ["Heggi tinqiḍin n uselmed yemmezgen", "Ssufeɣ-d azalen n yipiksilen ddaw tenqiḍin", "Bnu tafelwit X (imuttiyen) d y (ismilen)"],
  contenu: `
<p>Ifuyla <code>Echantillons_entrainement.shp</code> (300 n tenqiḍin, 50 i yal asmil) d <code>Echantillons_validation.shp</code> (180 n tenqiḍin) ṭṭfen iran <b>CLASSE</b> d <b>CODE</b> (1 Aman, 2 Tazgi, 3 Amadaɣ, 4 Ifelḥan, 5 Akal ilem, 6 Lebni). Ɣef tugna tilawt, ttwasumḍen deg QGIS neɣ ArcGIS ɣef tmnaḍin yemsaṛaḍen, s tallelt n Google Earth d wakal.</p>
<!--code:0-->
<ul>
  <li><b>Amḍan</b>: ma drus 30 ar 50 n yipiksilen i yal asmil, ugar i yismilen yettbeddilen.</li>
  <li><b>Tabḍit</b>: ɣef tugna akk, mačči deg yiwet n teɣmert kan.</li>
  <li><b>Tazeddigt</b>: deg tlemmast n tmnaḍin yemsaṛaḍen, ibeɛden ɣef yilisa (ipiksilen yemxelḍen).</li>
  <li><b>Tilelli</b>: tinqiḍin n useḥqeq ur ilaq ara ad nnalint tid n uselmed.</li>
</ul>`,
  exercice: `<ol>
  <li>Sken tinqiḍin n uselmed ɣef usuddas infrarouge, s yini n usmil.</li>
  <li>Siḍen alemmas d umeẓlay n NDVI i yal asmil: anwi ismilen i yemyagaren?</li>
  <li>Deg QGIS, rnu 10 n tenqiḍin « Sol nu » (akal ilem) deg unẓul n tugna (yiwet n tbnadt n yiran).</li>
</ol>` };
B["t6-l4"] = { titre: "Asmizzwer s uselmad: Random Forest", objectifs: ["Selmed tazgi tamagnut", "Ssiwel-d ipiksilen akk syen aru takarḍa", "Ɣer azal n yimuttiyen"],
  contenu: `
<p><b>Tazgi tamagnut</b> (Random Forest) d agraw n meyyat n <b>yiseklan n tegtt</b>. Yal aseklu ilemmed seg tuffɣa tamagnut n tenqiḍin d yimuttiyen; asmil aneggaru d win yesɛan ugar n « yifranen ». Alguritm-a d aǧehdan, d aɣawal, ur yettḥulfu ara aṭas i yiɣewwaren: d netta i yettwaseqdacen ugar deg tmeẓriwt seg ubeɛid.</p>
<!--code:0-->
<p>Tazɣart <b>out-of-bag</b> tettwaḥseb ɣef tenqiḍin ur iwala ara yal aseklu: d aktazal amezwaru, maca aseḥqeq n tidet yettili s tenqiḍin tilelliyin (aswir 7). Askript <code>py_08_random_forest.py</code> yettaru daɣen initen n yismilen deg GeoTIFF: takarḍa tettban-d srid s yini deg QGIS.</p>`,
  exercice: `<ol>
  <li>Selkem <code>py_08_random_forest.py</code>. Acḥal i d tiɣzi n yal asmil?</li>
  <li>Kkes 3 n yimesmalen (6 n tsebbaḍin kan): tettader tezɣart out-of-bag?</li>
  <li>Snes tamudemt yettwaskelsen (<code>joblib.load</code>) ɣef tugna n 2025 syen serwes snat n tkerḍiwin.</li>
</ol>` };

/* ---------- Aswir 7 ---------- */
B.t7 = { titre: "Aktazal d usnerni n usmizzwer", resume: "Tamatrict n usnemlil, tazɣart tamatut d kappa, aseḥqeq anmetti d uswati, asnemhel n yilguritmen, tastayt n tmaggit d tsnaddanin.",
  quiz: [
    { question: "Deg tmatrict n usnemlil n scikit-learn, izirigen d:", choix: ["Takarḍa", "Tamuɣli n wakal", "Tisebbaḍin", "Tiɣiwanin"], explication: "Izirigen = ismilen n tidet, tigejda = ismilen i d-yettwanecden." },
    { question: "Tazɣart n umseqdac tettaktil tuccḍa n:", choix: ["Tuttut (omission)", "Timerna (commission)", "Usenɣel", "Usenqes"], explication: "Tettarra ɣef: ayen i tsemma tkarḍa « amadaɣ », d amadaɣ s tidet?" },
    { question: "Kappa n 0,85 yemmal-d amtawi:", choix: ["Amecṭuḥ", "Alemmas", "Yelha aṭas", "Ulac-it"], explication: "Sennig 0,8, amtawi yettwaḥsab yelha aṭas." },
    { question: "Anwi tmudmin i yesran asegdi n yimuttiyen?", choix: ["Random Forest", "SVM d k-NN", "Ulac", "Random Forest kan"], explication: "Teddunt ɣef yimeccaq gar yipiksilen." },
    { question: "Tastayt n tmaggit tettwaseqdac i:", choix: ["Asnerni n tbadut", "Tukksa n yipiksilen iɣriben (« lemleḥ d lebzar »)", "Aseɣti n twenḍa", "Ales asenɣel n tkarḍa"], explication: "Yal ipiksil ad yaṭṭef asmil n tmaggit n yidisan-is." }
  ] };
B["t7-l1"] = { titre: "Tamatrict n usnemlil, tazɣart tamatut d kappa", objectifs: ["Bnu tamatrict n usnemlil s tenqiḍin tilelliyin", "Siḍen tazɣart tamatut, kappa, tazɣart n umfares d umseqdac", "Af-d ismilen yettemxelḍen"],
  contenu: `
<!--code:0-->
<table class="tab">
  <tr><th>Amatar</th><th>Asteqsi i wumi yettarra</th></tr>
  <tr><td>Tazɣart tamatut</td><td>Acḥal n tenqiḍin n usenqed i yettwasmizzwren akken iwata?</td></tr>
  <tr><td>Kappa</td><td>Acḥal n umtawi yugaren zher? (&gt; 0,8 yelha aṭas, 0,6–0,8 yelha)</td></tr>
  <tr><td>Tazɣart n umfares (rappel)</td><td>Tuccḍa n <b>tuttut</b>: yella umadaɣ i yettwattun?</td></tr>
  <tr><td>Tazɣart n umseqdac</td><td>Tuccḍa n <b>timerna</b>: ayen yettwasmizzwren « amadaɣ » d amadaɣ s tidet?</td></tr>
</table>`,
  exercice: `<ol>
  <li>Selkem <code>py_09_evaluation.py</code> (deffir n py_08) syen nɣel tamatrict n usnemlil deg tfelwit.</li>
  <li>Anwi sin n yismilen yettemxelḍen ugar? Fsr-it s tsenyalin-nsen ispektranin.</li>
  <li>Siḍen s ufus tazɣart tamatut seg uzeɣdeg (diagonale).</li>
</ol>` };
B["t7-l2"] = { titre: "Aseḥqeq anmetti, aswati d usnemhel n yilguritmen", objectifs: ["Ktil tamudemt s useḥqeq anmetti", "Serwes Random Forest, SVM d k n yidisan iqerben", "Swati iɣewwaren s GridSearchCV"],
  contenu: `
<!--code:0-->
<p><b>Aseḥqeq anmetti</b> (validation croisée) yebḍu tinqiḍin ɣef 5 n yiḥricen: nesselmad ɣef 4, nkeyyed ɣef wis 5, 5 n tikkal. Alemmas yettwamman ugar n yiwen n ukayad. <b>Iɣewwaren imeqqranen</b> (hyperparamètres) d wid nettfernen qbel ulmud (amḍan n yiseklan, talqayt, C n SVM…).</p>
<div class="astuce">SVM d k-NN ddun ɣef yimeccaq: ilaq ad <b>nesegdi</b> imuttiyen (StandardScaler). Random Forest ur t-yesri ara.</div>`,
  exercice: `<ol>
  <li>Anwa alguritm i d-yewwin agmuḍ ifazen? Amgired d ameqqran ma nwala ameẓlay?</li>
  <li>Rnu azeḍḍa n yineɣlalen <code>MLPClassifier(hidden_layer_sizes=(50,), max_iter=1000)</code> deg pipeline s StandardScaler.</li>
  <li>Selmed tamudemt s 10 n tenqiḍin kan i yal asmil: d acu yeḍran i tezɣart?</li>
</ol>` };
B["t7-l3"] = { titre: "Asesfer deffir d tsnaddanin n tkarḍa", objectifs: ["Kkes aɣbalu n « lemleḥ d lebzar » s tastayt n tmaggit", "Siḍen tiɣziwin s usmil d teɣiwant", "Heggi takarḍa taneggarut"],
  contenu: `
<!--code:0-->
<p><b>Tastayt n tmaggit</b> tettbeddil yal ipiksil s usmil i d-yettuɣalen ugar deg tama-s (am ufecku Majority Filter n ArcGIS). Senqed s tmatrict n usnemlil ma yesnerni s tidet takarḍa.</p>
<p>I tkarḍa taneggarut, ldi <code>classification_rf_2024_filtree.tif</code> deg QGIS neɣ ArcGIS, snes initen n <code>classes.csv</code>, syen rnu tasegzit, taskala, agafa, aɣbalu (« tugna tasugant am Sentinel-2 ») d tezɣart tamatut.</p>`,
  exercice: `<ol>
  <li>Serwes tazɣart tamatut qbel d deffir n testayt 3 × 3, syen s usfaylu 5 × 5.</li>
  <li>Anwa taɣiwant yesɛan tiɣzi tameqqrant n tezgi? N lebni?</li>
  <li>Xdem tasizzelt n tkarḍa n useqdec n wakal n 2024.</li>
</ol>` };

/* ---------- Aswir 8 ---------- */
B.t8 = { titre: "Asenfar: tewzelt n uɣelluy n wakal d yisawalen", resume: "Takarḍa n tewzelt n uɣelluy n wakal s Random Forest (MNT, talitulujit, isaffen, amḍan), aẓeṭṭa ROC, syen Google Earth Engine d ulmud uzur.",
  quiz: [
    { question: "D acu i yettaktil AUC n uẓeṭṭa ROC?", choix: ["Tiɣzi n temnaḍt n tezrawt", "Tazmert n tmudemt ad tebḍu tilin d tazwart n ulac", "Amḍan n yiseklan", "Tabadut n MNT"], explication: "0,5 = zher; 1 = tabḍit tummidt." },
    { question: "Acuɣer ara nefren tinqiḍin n ulac ugar n 500 m seg yiɣelluyen?", choix: ["I usɣawel n usiḍen", "Akken ur nettaṭṭaf ara akal ur nerkiḍ ara d tanqiḍt n ulac", "I uqader n usenɣel", "Ur yesɛi ara lfayda"], explication: "Tanqiḍt n ulac tukerkist deg uḍar n uɣelluy ad tessexleḍ ulmud." },
    { question: "Anwa amutti i d-yekkan seg umḍan mačči seg MNT?", choix: ["Asmal", "Tikkuyt (courbure)", "Tilin n uɣelluy", "Tanila (exposition)"], explication: "Amḍan (inventaire) i d-yettaken tibzimin (y)." },
    { question: "Google Earth Engine d:", choix: ["Aseɣzan s idrimen ara tesbeddeḍ", "Tiɣerɣert n usiḍen deg Internet, baṭel i uselmed", "Asatellit", "Asiɣzef n ArcMap"], explication: "Tettak anekcum ɣer yiɣbula n Sentinel d Landsat, tessiḍin ɣef yiqeddacen n Google." }
  ] };
B["t8-l1"] = { titre: "Heggi imuttiyen d tmedyant n tilin / ulac", objectifs: ["Ssufeɣ-d imuttiyen seg MNT (asmal, tanila, tikkuyt)", "Siḍen ameccaq ɣer yisaffen syen beddel talitulujit ɣer raster", "Bnu tamedyant n tinqiḍin n tilin d ulac"],
  contenu: `
<p>Deg uswir 8 n ArcMap, tewzelt n uɣelluy n wakal tettwaḥseb s <b>ulday n yimusnawen</b>. Da, nettaǧǧa tamudemt <b>ad tlemmed ulday</b> seg umḍan <code>Risques\\Glissements.shp</code> (32 n yiɣelluyen isuganen).</p>
<!--code:0-->
<table class="tab">
  <tr><th>Amutti</th><th>Aɣbalu</th><th>Acuɣer</th></tr>
  <tr><td>Asmal, aɛli, tanila, tikkuyt</td><td>MNT_50m</td><td>tazukkit d waman i yesseḥrikken iɣelluyen</td></tr>
  <tr><td>Ameccaq ɣer yisaffen</td><td>Oueds.shp</td><td>tiɣzi n yiran n wasif</td></tr>
  <tr><td>Talitulujit (SUSC_GLIS)</td><td>Lithologie.shp</td><td>tumlilt d wakal n ubeldun ḥulfun</td></tr>
  <tr><td>Aseqdec n wakal</td><td>Occupation_sol.shp neɣ asmizzwer n uswir 6</td><td>imɣi yessebded isurifen</td></tr>
</table>`,
  exercice: `<ol>
  <li>Ldi <code>py_10_susceptibilite_glissements.py</code> syen selkem aḥric 1 d 2.</li>
  <li>Serwes asmal alemmas d umeccaq ɣer yisaffen n tinqiḍin n tilin d wid n ulac.</li>
  <li>Sumer amutti nniḍen (ameccaq ɣer yibriden, NDVI…) syen rnu-t.</li>
</ol>` };
B["t8-l2"] = { titre: "Selmed tamudemt, aẓeṭṭa ROC d tkarḍa n tewzelt", objectifs: ["Bḍu tamedyant n uselmed d tin n ukayad", "Ktil tamudemt n tzmert s uẓeṭṭa ROC d AUC", "Suffeɣ-d takarḍa n tewzelt s 4 n yismilen"],
  contenu: `
<!--code:0-->
<p><b>Aẓeṭṭa ROC</b> yessuneɣ afmiḍ n yigmaḍ ufrinen n tidet zdat n ufmiḍ n yigmaḍ ufrinen ikerkasen i yal tilist n tzmert. <b>AUC</b> (tiɣzi ddaw uẓeṭṭa) d 0,5 i tmudemt s zher, d 1 i tmudemt tummidt; sennig 0,8 tamudemt telha.</p>
<p>Ismilen ttwasbadun s <b>quantiles</b>: 50 % n temnaḍt tamecṭuḥt, 30 % talemmast, 15 % tameqqrant, 5 % tameqqrant aṭas. Tamudemt yelhan tesdukkul ugar n yiɣelluyen yettwassnen deg sin n yismilen ufrinen.</p>
<div class="astuce">S 32 n yiɣelluyen kan, tamudemt tqqim d tafessast: AUC tettbeddil akken tella tuffɣa n tenqiḍin n ulac. Ales aselmed s waṭas n yiẓuran (<code>random_state</code>) syen serwes d tkarḍa s waṭas n yisulas n uswir 8 n ArcMap.</div>`,
  exercice: `<ol>
  <li>Selkem <code>py_10_susceptibilite_glissements.py</code> akk syen aru AUC d 3 n yimuttiyen igejdanen.</li>
  <li>Ales s 5 n wazalen n <code>random_state</code>: alemmas d usuref n AUC?</li>
  <li>Ldi <code>susceptibilite_glissements_classes.tif</code> deg QGIS syen sers tiɣerbiwin d yibriden: anwi i yellan deg usmil ameqqran aṭas?</li>
</ol>` };
B["t8-l3"] = { titre: "Ad nruḥ ugar: Google Earth Engine, isemyar n wakud d ulmud uzur", objectifs: ["Siḍen NDVI ɣef tugniwin tilawin s Google Earth Engine (baṭel)", "Issin isemyar n wakud d ulmud uzur", "Seqdec tagi tuzzift s tmusni"],
  contenu: `
<p><b>Google Earth Engine</b> (baṭel i uselmed d unadi, s umiḍan n Google d usenfar Cloud mačči n tnezzut) tettak anekcum ɣer yiɣbula akk n Sentinel-2 d Landsat, tessiḍin ɣef yiqeddacen n Google. Nesseqdac-itt seg Python s temkarḍit <code>earthengine-api</code> (d <code>geemap</code> i tkerḍiwin), amedya deg Google Colab:</p>
<!--code:0-->
<ul>
  <li><b>Isemyar n wakud</b>: ma neḍfer NDVI seg waggur ɣer waggur, nettfernen ifelḥan (tazzit n useggas tbeggen) ɣef tezgiwin (rekdent) syen nettaf-d lqebḥ n wakud neɣ tiẓegzawt n tneẓruft.</li>
  <li><b>Ulmud uzur</b> (deep learning): izeḍwan n yineɣlalen (U-Net…) lemmden talɣa d tebnadt, mačči kan azalen n yipiksilen. Ttwaseqdacen i tukksa n yixxamen, n yibriden d yiger, maca sran igiman n yimedyaten d tkarḍa tudlift. Timkarḍiyin baṭel: PyTorch, TensorFlow.</li>
  <li><b>Tamusni tuzzift</b>: takarḍa i d-tefka tagi tuzzift ur tettwamman ara alamma tettwaseḥqeq ɣef wakal. Ini yal tikkelt tarrayt, isefka, azemz d tezɣart.</li>
</ul>
<p>Aswir « Google Earth Engine » n ubrid QGIS yesskan yiwet tiɣerɣert-nni s umaẓrag JavaScript.</p>`,
  exercice: `<ol>
  <li>Deg Colab, siḍen s Earth Engine NDVI alemmas n tefsut 2025 ɣef tama n Tlemsan.</li>
  <li>Suneɣ asnerni n NDVI n yal aggur n yiwen n yiger ɣef useggas.</li>
  <li>Aru tafelwit (yiwet n tasna): tarrayt, isefka, tazɣart d yilisa n tkarḍa-k n useqdec n wakal.</li>
</ol>` };
