/* Traduction en du parcours python (Python, télédétection et apprentissage automatique) */
window.TRAD = window.TRAD || {};
window.TRAD.en = window.TRAD.en || {};
var E = window.TRAD.en;

E.python = { nom: "Python and remote sensing", accroche: "Python, remote sensing and machine learning",
  lead: "Write your own processing with 100% free tools: Python basics, vector data with GeoPandas, rasters with rasterio, remote sensing principles, spectral indices (NDVI, NDWI, NBR), mapping a burned area, then image classification by machine learning (K-means, Random Forest, SVM), map accuracy assessment and a landslide susceptibility project. Fictional Sentinel-2-like satellite images of the Tamda wadi basin." };

/* ---------- Level 1 ---------- */
E.t1 = { titre: "Python for geomatics", resume: "Install a free environment, language basics, then NumPy, pandas and matplotlib.",
  quiz: [
    { question: "Which library reads and writes GeoTIFF rasters?", choix: ["pandas", "rasterio", "matplotlib", "scikit-learn"], explication: "rasterio relies on GDAL to read and write georeferenced rasters." },
    { question: "How does Python delimit a block (loop, function)?", choix: ["With braces { }", "With indentation", "With the word END", "With a semicolon"], explication: "Lines indented by 4 spaces form the block." },
    { question: "Which free tool lets you code without installing anything?", choix: ["ArcGIS Pro", "Google Colab", "Excel", "ENVI"], explication: "Colab runs Python notebooks in the browser." },
    { question: "What does alt[alt > 800] return for a NumPy array?", choix: ["The number of values > 800", "The values greater than 800", "An error", "True or False"], explication: "It is a boolean mask filter, widely used on pixels." }
  ] };
E["t1-l1"] = { titre: "Install a free Python environment", objectifs: ["Choose between a local install (Miniforge) and Google Colab", "Create the eniv environment with the geospatial libraries", "Start JupyterLab and run a first cell"],
  contenu: `
<p>Python is a <b>free and open</b> language, used by ArcGIS (arcpy), QGIS (PyQGIS) and the whole remote sensing community. In this course it is used <b>on its own</b>, without GIS software, with specialised libraries.</p>
<table class="tab">
  <tr><th>Library</th><th>Role</th><th>GIS equivalent</th></tr>
  <tr><td><b>NumPy</b></td><td>arrays of numbers, pixel computations</td><td>Raster Calculator</td></tr>
  <tr><td><b>pandas</b></td><td>tables (CSV, Excel)</td><td>Attribute table</td></tr>
  <tr><td><b>GeoPandas</b></td><td>vector layers (shapefile, GeoPackage)</td><td>Vector analysis tools</td></tr>
  <tr><td><b>rasterio</b></td><td>read and write rasters (GeoTIFF, ASCII)</td><td>Raster tools</td></tr>
  <tr><td><b>scikit-learn</b></td><td>machine learning</td><td>Classification tools</td></tr>
  <tr><td><b>matplotlib</b></td><td>charts and maps</td><td>Layout</td></tr>
</table>
<h4>Option 1: on the computer (recommended in the lab)</h4>
<ol>
  <li>Install <b>Miniforge</b> (github.com/conda-forge/miniforge), free, no account needed.</li>
  <li>Open <i>Miniforge Prompt</i>, go to <code>C:\\ENIV\\TP\\Scripts\\Python</code> and create the environment from the supplied file:</li>
</ol>
<!--code:0-->
<p>JupyterLab opens in the browser. Create a <b>notebook</b> (<code>.ipynb</code>): code is written in <b>cells</b> that you run with <kbd>Shift + Enter</kbd>. VS Code (free) with the Python extension is a good alternative.</p>
<h4>Option 2: Google Colab (no installation)</h4>
<p>With a free Google account, open colab.research.google.com, then load the data straight from the site:</p>
<!--code:1-->
<div class="astuce">Every script of the course starts with <code>DOSSIER = os.environ.get("ENIV_TP", r"C:\\ENIV\\TP")</code>: it works as is on the computer and, after the <code>os.environ[...]</code> line, in Colab.</div>`,
  exercice: `<ol>
  <li>Install Miniforge and create the <code>eniv</code> environment (or open Google Colab).</li>
  <li>Unzip <code>TP_ENIV_complet.zip</code> and <code>TP_Teledetection.zip</code> into <code>C:\\ENIV\\</code>.</li>
  <li>In a notebook, run <code>import numpy, pandas, geopandas, rasterio, sklearn</code> then print <code>rasterio.__version__</code>. No error should appear.</li>
</ol>` };
E["t1-l2"] = { titre: "Python language basics", objectifs: ["Handle variables, lists and dictionaries", "Write a loop and a condition", "Define and call a function"],
  contenu: `
<p>Python reads almost like plain English. <b>Indentation</b> (4 spaces) delimits blocks: there are no braces.</p>
<!--code:0-->
<table class="tab">
  <tr><th>Concept</th><th>Example</th></tr>
  <tr><td>List comprehension</td><td><code>[c for c in communes if pop[c] > 5000]</code></td></tr>
  <tr><td>Formatted string (f-string)</td><td><code>f"{nom} : {densite:.1f} hab./km²"</code></td></tr>
  <tr><td>Import a library</td><td><code>import numpy as np</code></td></tr>
  <tr><td>Windows path</td><td><code>r"C:\\ENIV\\TP"</code> (the <code>r</code> avoids errors with <code>\\</code>)</td></tr>
</table>
<div class="astuce">ArcMap 10.8 still uses Python 2.7. Here we use Python 3: <code>print</code> always takes parentheses.</div>`,
  exercice: `<ol>
  <li>Create a dictionary of the elevations of five boreholes (make them up).</li>
  <li>With a loop, print those above 800 m.</li>
  <li>Write a function <code>pente_pct(denivele, distance)</code> and test it with 120 m over 1.5 km.</li>
</ol>` };
E["t1-l3"] = { titre: "NumPy, pandas and matplotlib", objectifs: ["Compute on a NumPy array without a loop", "Read, filter and enrich a table with pandas", "Draw and save a chart"],
  contenu: `
<p><b>NumPy</b> computes on whole arrays at once ("vectorised" computation): exactly what we will do on the pixels of an image.</p>
<!--code:0-->
<p><b>pandas</b> handles tables like a spreadsheet, but with reproducible code:</p>
<!--code:1-->
<p><b>matplotlib</b> draws the charts:</p>
<!--code:2-->
<p>The complete script <code>py_01_bases_python.py</code> saves its results in <code>C:\\ENIV\\TP\\Sorties\\Python</code>.</p>`,
  exercice: `<ol>
  <li>Run <code>py_01_bases_python.py</code> (or copy it cell by cell into a notebook).</li>
  <li>Add a column <code>GAIN</code> = POP_2020 − POP_2008, then display the municipality that gained the most inhabitants.</li>
  <li>Draw a MENAGES / POP_2020 scatter plot with <code>df.plot.scatter</code>.</li>
</ol>` };

/* ---------- Level 2 ---------- */
E.t2 = { titre: "Vector data with GeoPandas", resume: "Read and reproject layers, attribute and spatial joins, buffers, maps and GeoPackage.",
  quiz: [
    { question: "How do you reproject a GeoDataFrame to UTM 30N?", choix: ["gdf.set_crs(32630)", "gdf.to_crs(32630)", "gdf.project(30)", "gdf.crs = 'UTM'"], explication: "to_crs transforms the coordinates; set_crs only declares the system." },
    { question: "Which tool counts the boreholes in each municipality?", choix: ["merge", "sjoin", "buffer", "dissolve"], explication: "The spatial join attaches to each borehole the municipality that contains it." },
    { question: "communes.area gives m² if the layer is:", choix: ["In WGS 84 (degrees)", "In UTM (metres)", "Without a system", "Always in Lambert"], explication: "The area unit is that of the projected system." },
    { question: "Which format stores several layers in a single file?", choix: ["Shapefile", "CSV", "GeoPackage", "PNG"], explication: "A .gpkg holds several layers (layer parameter)." }
  ] };
E["t2-l1"] = { titre: "Read, explore and reproject a layer", objectifs: ["Open a shapefile into a GeoDataFrame", "Read and change the coordinate system", "Compute areas and lengths"],
  contenu: `
<p>A <b>GeoDataFrame</b> is a pandas table with a <code>geometry</code> column. Each row is a feature.</p>
<!--code:0-->
<table class="tab">
  <tr><th>Operation</th><th>GeoPandas</th><th>ArcGIS / QGIS</th></tr>
  <tr><td>Reproject</td><td><code>gdf.to_crs(32630)</code></td><td>Project / Reproject layer</td></tr>
  <tr><td>Set the CRS (no .prj)</td><td><code>gdf.set_crs(32630)</code></td><td>Define Projection</td></tr>
  <tr><td>Attribute selection</td><td><code>gdf[gdf.POP &gt; 10000]</code></td><td>Select by attributes</td></tr>
</table>
<div class="astuce">Always compute areas in a <b>projected</b> system (UTM): in degrees, <code>.area</code> is meaningless.</div>`,
  exercice: `<ol>
  <li>Open <code>Projections\\Forages_sans_projection.shp</code>: what is <code>crs</code>? Set it with <code>set_crs(32630)</code>.</li>
  <li>Open <code>Projections\\Communes_WGS84.shp</code>, reproject it to UTM 30N and compare the areas with <code>Communes.shp</code>.</li>
  <li>Print the total length of the wadis in km.</li>
</ol>` };
E["t2-l2"] = { titre: "Joins, spatial queries and buffers", objectifs: ["Join a CSV table to a layer", "Perform a spatial join", "Create buffers and intersections"],
  contenu: `
<!--code:0-->
<table class="tab">
  <tr><th>ArcToolbox</th><th>GeoPandas</th></tr>
  <tr><td>Buffer</td><td><code>gdf.buffer(d)</code></td></tr>
  <tr><td>Intersect</td><td><code>gpd.overlay(a, b, how="intersection")</code></td></tr>
  <tr><td>Dissolve</td><td><code>gdf.dissolve(by="CHAMP")</code></td></tr>
  <tr><td>Spatial Join</td><td><code>gpd.sjoin(a, b, predicate="within")</code></td></tr>
</table>
<p>With an older GeoPandas version, replace <code>union_all()</code> by <code>unary_union</code>.</p>`,
  exercice: `<ol>
  <li>Compute the 2020 density of each municipality and print the three densest.</li>
  <li>Count the schools located less than 500 m from a national road.</li>
  <li>Compute the forest area per municipality (overlay + pivot_table).</li>
</ol>` };
E["t2-l3"] = { titre: "Maps, GeoPackage and web map", objectifs: ["Produce a choropleth map with a legend", "Save several layers in a GeoPackage", "Create an interactive web map"],
  contenu: `
<!--code:0-->
<p>The GeoPackage opens directly in QGIS and ArcGIS Pro. The web map (<code>explore</code>, folium extension) reprojects itself to WGS 84 and opens in any browser.</p>
<p>The complete script: <code>py_02_vecteur_geopandas.py</code>.</p>`,
  exercice: `<ol>
  <li>Run <code>py_02_vecteur_geopandas.py</code> and open <code>tamda.gpkg</code> in QGIS.</li>
  <li>Change the palette (<code>cmap="viridis"</code>) and add the schools.</li>
  <li>Create the web map of the boreholes coloured by status (<code>column="ETAT"</code>).</li>
</ol>` };

/* ---------- Level 3 ---------- */
E.t3 = { titre: "Raster data with rasterio", resume: "Open a raster, understand the affine transform, compute slope with NumPy, reclassify, clip and write a GeoTIFF.",
  quiz: [
    { question: "What does the affine transform of a raster contain?", choix: ["The colours", "The pixel size and the corner position", "The number of bands", "The acquisition date"], explication: "It converts row/column into x/y coordinates." },
    { question: "In rasterio, src.read(1) reads:", choix: ["The first row", "Band 1", "The first pixel", "The metadata"], explication: "Bands are numbered from 1." },
    { question: "The NumPy equivalent of the Con tool is:", choix: ["np.where", "np.sum", "np.gradient", "np.digitize"], explication: "np.where(condition, value_if_true, value_if_false)." },
    { question: "Why copy src.profile before writing?", choix: ["To compress", "To keep the same grid and the same system", "To change format", "It is not useful"], explication: "The result stays aligned with the original data." }
  ] };
E["t3-l1"] = { titre: "Read a raster: metadata and pixels", objectifs: ["Open a raster and read its metadata", "Understand the affine transform (pixel ↔ coordinates)", "Read the value of a pixel at a point"],
  contenu: `
<p>A raster is a <b>NumPy array</b> (rows × columns) plus a <b>georeference</b>: the coordinate system (CRS) and the <b>affine transform</b> that links a pixel to its coordinates.</p>
<!--code:0-->
<p>Prefer <code>with rasterio.open(...) as src:</code>: the file is closed automatically. Bands are numbered from <b>1</b> in rasterio, but NumPy arrays start at <b>0</b>.</p>`,
  exercice: `<ol>
  <li>Print the extent (<code>src.bounds</code>) and the area covered by the DEM in km².</li>
  <li>Read the elevation of the 30 boreholes: open <code>Forages.shp</code> with GeoPandas and use <code>src.sample</code>. Compare with the ALT_M field.</li>
  <li>Display the DEM with <code>plt.imshow(mnt, cmap="terrain")</code>.</li>
</ol>` };
E["t3-l2"] = { titre: "Compute on pixels: slope and reclassification", objectifs: ["Compute slope with np.gradient", "Reclassify a raster with np.digitize", "Compute areas per class"],
  contenu: `
<!--code:0-->
<table class="tab">
  <tr><th>Spatial Analyst</th><th>NumPy</th></tr>
  <tr><td>Slope</td><td><code>np.gradient</code> + <code>arctan</code></td></tr>
  <tr><td>Reclassify</td><td><code>np.digitize</code> or <code>np.select</code></td></tr>
  <tr><td>Con</td><td><code>np.where(condition, a, b)</code></td></tr>
  <tr><td>Statistics</td><td><code>.mean()</code>, <code>.max()</code>, <code>np.percentile</code></td></tr>
</table>`,
  exercice: `<ol>
  <li>Compute slope in percent (<code>np.hypot(...) * 100</code>).</li>
  <li>Reclassify elevation into 4 ranges (&lt; 500, 500–700, 700–900, &gt; 900 m) and give the area of each.</li>
  <li>Compare your mean slope with that of the Slope tool in ArcGIS or QGIS.</li>
</ol>` };
E["t3-l3"] = { titre: "Clip and write a GeoTIFF", objectifs: ["Write a result as a georeferenced GeoTIFF", "Clip a raster with a polygon", "Rasterize a vector layer"],
  contenu: `
<!--code:0-->
<p>The <b>profile</b> holds everything needed to write a raster aligned with the original: size, transform, CRS, type. Only change what differs (type, nodata, number of bands). The complete script: <code>py_03_raster_mnt.py</code>.</p>`,
  exercice: `<ol>
  <li>Run <code>py_03_raster_mnt.py</code> then open <code>pente_classes.tif</code> in QGIS or ArcGIS.</li>
  <li>Clip the DEM with the municipality of your choice and compute its mean elevation.</li>
  <li>Rasterize Occupation_sol (CODE_OS field) on the DEM grid and save it.</li>
</ol>` };

/* ---------- Level 4 ---------- */
E.t4 = { titre: "Remote sensing principles", resume: "Radiation and spectral signatures, free satellites (Sentinel-2, Landsat), opening a multiband image and colour composites.",
  quiz: [
    { question: "Healthy vegetation mostly reflects:", choix: ["Blue", "Red", "Near infrared", "Thermal infrared"], explication: "Leaf structure strongly reflects NIR, chlorophyll absorbs red." },
    { question: "Which Sentinel-2 level gives surface reflectance?", choix: ["L0", "L1C", "L2A", "L3"], explication: "L2A is atmospherically corrected and contains the SCL layer." },
    { question: "The B8-B4-B3 composite shows vegetation in:", choix: ["Green", "Red", "Blue", "Black"], explication: "NIR is placed in the red channel." },
    { question: "Temporal resolution means:", choix: ["The pixel size", "The number of bands", "The revisit frequency", "The number of grey levels"], explication: "Sentinel-2 revisits every 5 days." }
  ] };
E["t4-l1"] = { titre: "Radiation, spectral signatures and resolutions", objectifs: ["Explain reflectance and spectral domains", "Recognise the signatures of water, vegetation and soils", "Distinguish the four resolutions of a sensor"],
  contenu: `
<p>An optical sensor measures the share of solar radiation <b>reflected</b> by the surface: the <b>reflectance</b>, between 0 and 1, in several <b>spectral bands</b>.</p>
<table class="tab">
  <tr><th>Domain</th><th>Wavelength</th><th>What it shows</th></tr>
  <tr><td>Visible (blue, green, red)</td><td>0.45 – 0.70 µm</td><td>Natural colours; chlorophyll absorbs red</td></tr>
  <tr><td>Near infrared (NIR)</td><td>0.75 – 0.90 µm</td><td>Strongly reflected by healthy vegetation (leaf structure)</td></tr>
  <tr><td>Shortwave infrared (SWIR)</td><td>1.5 – 2.3 µm</td><td>Soil and plant moisture, burn scars, minerals</td></tr>
  <tr><td>Thermal infrared</td><td>10 – 12 µm</td><td>Surface temperature (Landsat)</td></tr>
</table>
<p><b>Spectral signatures</b>: water absorbs almost everything in the infrared; vegetation has low red and high NIR; bare soils rise steadily from blue to SWIR; built-up areas are bright and flat.</p>
<table class="tab">
  <tr><th>Resolution</th><th>Definition</th><th>Sentinel-2</th></tr>
  <tr><td>Spatial</td><td>pixel size on the ground</td><td>10, 20 or 60 m</td></tr>
  <tr><td>Spectral</td><td>number and width of bands</td><td>13 bands</td></tr>
  <tr><td>Temporal</td><td>revisit frequency</td><td>5 days</td></tr>
  <tr><td>Radiometric</td><td>number of levels</td><td>12 bits</td></tr>
</table>
<div class="astuce">The script <code>py_04_composites.py</code> plots the mean signatures of the six classes from the training points: compare them with the theoretical diagram.</div>`,
  exercice: `<ol>
  <li>Draw by hand the signatures of water, forest and bare soil over 6 bands (B2, B3, B4, B8, B11, B12).</li>
  <li>Run <code>py_04_composites.py</code> and compare with the figure <code>signatures_spectrales.png</code>.</li>
  <li>Which band best separates water from the rest? And forest from scrubland (maquis)?</li>
</ol>` };
E["t4-l2"] = { titre: "Free satellites and downloading images", objectifs: ["Know Sentinel-2 and Landsat 8/9", "Download a free image over Algeria", "Understand processing levels and the cloud mask"],
  contenu: `
<table class="tab">
  <tr><th>Satellite</th><th>Pixel</th><th>Revisit</th><th>Free access</th></tr>
  <tr><td><b>Sentinel-2</b> A/B/C (Copernicus, EU)</td><td>10 / 20 / 60 m</td><td>5 days</td><td>Copernicus Browser (dataspace.copernicus.eu)</td></tr>
  <tr><td><b>Landsat 8 and 9</b> (USGS/NASA)</td><td>30 m (15 m pan, 100 m thermal)</td><td>8 days combined</td><td>EarthExplorer (earthexplorer.usgs.gov)</td></tr>
  <tr><td><b>Sentinel-1</b> (radar)</td><td>10 m</td><td>6 to 12 days</td><td>Copernicus Browser; sees through clouds</td></tr>
  <tr><td>Google Earth Engine</td><td>catalogue of thousands of images</td><td>—</td><td>free for teaching and research</td></tr>
</table>
<p><b>Sentinel-2 levels</b>: L1C = top-of-atmosphere reflectance; <b>L2A</b> = atmospherically corrected surface reflectance, with a scene classification layer (<b>SCL</b>) flagging clouds, shadows and water. For indices and classification, download <b>L2A</b>.</p>
<p>Bands used in the course: B2 blue, B3 green, B4 red, B8 NIR (10 m), B11 and B12 SWIR (20 m). The lab files <code>S2_2024-06-15_Tamda.tif</code> and <code>S2_2025-08-20_Tamda.tif</code> imitate these six bands, resampled to 20 m, with integer values = reflectance × 10,000.</p>
<div class="astuce">The lab images are <b>fictional</b>: they let you work offline. Then repeat the same processing on a real Sentinel-2 image of the Tlemcen region.</div>`,
  exercice: `<ol>
  <li>Create a free account on the Copernicus Browser and look for a Sentinel-2 L2A image of Tlemcen with less than 10% cloud cover.</li>
  <li>Note its date, its tile identifier (five characters, starting with 30S for Tlemcen) and its cloud cover.</li>
  <li>Compare the same area in natural colours and in false colours in the browser.</li>
</ol>` };
E["t4-l3"] = { titre: "Open a multiband image and make colour composites", objectifs: ["Read a 6-band image and convert to reflectance", "Stretch the contrast (2–98% percentiles)", "Produce natural, infrared and SWIR composites"],
  contenu: `
<!--code:0-->
<table class="tab">
  <tr><th>Composite</th><th>Bands (R-G-B)</th><th>Use</th></tr>
  <tr><td>Natural colours</td><td>B4-B3-B2</td><td>"photo" view</td></tr>
  <tr><td>False colour infrared</td><td>B8-B4-B3</td><td>vegetation in red, vigour</td></tr>
  <tr><td>SWIR</td><td>B12-B8-B4</td><td>soils, burned areas, moisture</td></tr>
  <tr><td>Agriculture</td><td>B11-B8-B2</td><td>crops and soils</td></tr>
</table>
<p>Stretching is essential: reflectances occupy a narrow range (0.02 to 0.4), so the raw image looks dark.</p>`,
  exercice: `<ol>
  <li>Display the three composites of the 2024 image side by side (<code>plt.subplots(1, 3)</code>).</li>
  <li>Locate the small reservoir, the town, the farm plots and the northern forest.</li>
  <li>Make the SWIR composite of the 2025 image: what do you see in the north-west?</li>
</ol>` };

/* ---------- Level 5 ---------- */
E.t5 = { titre: "Spectral indices and change detection", resume: "NDVI, SAVI, NDWI, NDBI, thresholding, then mapping the area burned in 2025 with NBR and dNBR.",
  quiz: [
    { question: "The NDVI formula with Sentinel-2 is:", choix: ["(B4 − B8) / (B4 + B8)", "(B8 − B4) / (B8 + B4)", "(B3 − B8) / (B3 + B8)", "B8 / B4"], explication: "NIR minus red, divided by their sum." },
    { question: "A negative NDVI most often indicates:", choix: ["A dense forest", "Water", "Crops", "A ploughed soil"], explication: "Water reflects more red (and green) than NIR." },
    { question: "After a fire, NBR:", choix: ["Increases", "Decreases", "Does not change", "Becomes equal to NDVI"], explication: "NIR drops and SWIR rises: dNBR is positive." },
    { question: "Why do some fields appear \"burned\" in the dNBR?", choix: ["Projection error", "They were harvested between the two dates", "Clouds", "The blue band"], explication: "Loss of green vegetation looks like a fire: these false positives must be filtered." },
    { question: "Which index suits the sparse vegetation of semi-arid areas?", choix: ["NDWI", "SAVI", "NDBI", "NBR"], explication: "SAVI corrects the effect of bare soil visible between plants." }
  ] };
E["t5-l1"] = { titre: "Compute NDVI, SAVI, NDWI and NDBI", objectifs: ["Write the formula of a normalised difference", "Interpret NDVI values", "Save a multiband index raster"],
  contenu: `
<p>A <b>spectral index</b> combines two bands to highlight a phenomenon. Most are <b>normalised differences</b> between −1 and +1: (a − b) / (a + b).</p>
<table class="tab">
  <tr><th>Index</th><th>Sentinel-2 formula</th><th>Highlights</th></tr>
  <tr><td><b>NDVI</b></td><td>(B8 − B4) / (B8 + B4)</td><td>vegetation (&gt; 0.5 dense, 0.2–0.5 sparse, &lt; 0.2 soil or built-up, &lt; 0 water)</td></tr>
  <tr><td><b>SAVI</b></td><td>1.5 × (B8 − B4) / (B8 + B4 + 0.5)</td><td>sparse vegetation in semi-arid areas</td></tr>
  <tr><td><b>NDWI</b></td><td>(B3 − B8) / (B3 + B8)</td><td>open water (&gt; 0)</td></tr>
  <tr><td><b>NDBI</b></td><td>(B11 − B8) / (B11 + B8)</td><td>built-up and bare soils</td></tr>
  <tr><td><b>NBR</b></td><td>(B8 − B12) / (B8 + B12)</td><td>burned areas (lesson 3)</td></tr>
</table>
<!--code:0-->
<div class="astuce">Always convert integers to floats (<code>astype("float32")</code>) before dividing: otherwise division of unsigned integers can give wrong values.</div>`,
  exercice: `<ol>
  <li>Run <code>py_05_indices.py</code> and open <code>indices_2024.tif</code> in QGIS.</li>
  <li>Compare the mean NDVI of forest, scrubland and crops (use the training points).</li>
  <li>Where is SAVI clearly different from NDVI? Why?</li>
</ol>` };
E["t5-l2"] = { titre: "Thresholding and thematic maps", objectifs: ["Choose a threshold using the histogram", "Combine several conditions", "Compute areas in hectares"],
  contenu: `
<!--code:0-->
<p>The <b>histogram</b> shows several "bumps": each bump corresponds to a type of surface. Place the thresholds in the troughs. Thresholding is simple and fast, but it cannot separate classes with the same NDVI (forest and irrigated crops, bare soil and built-up): that is the job of classification (level 6).</p>`,
  exercice: `<ol>
  <li>Compute the area of the small reservoir in June 2024, then in August 2025. By how much did it shrink?</li>
  <li>Test the thresholds 0.2 / 0.5 then 0.3 / 0.6: how do the areas change?</li>
  <li>Build a "probable built-up" mask with NDBI &gt; 0.1 and NDVI &lt; 0.25.</li>
</ol>` };
E["t5-l3"] = { titre: "Change detection: burned area (NBR, dNBR)", objectifs: ["Compute NBR before and after the fire", "Classify severity with dNBR thresholds", "Turn the burned area into a polygon"],
  contenu: `
<p>A <b>fictional</b> fire struck the forest and scrubland in the north-west on 12 July 2025. Fire lowers NIR and raises SWIR: <b>NBR</b> drops. The difference <b>dNBR = NBR<sub>before</sub> − NBR<sub>after</sub></b> measures severity.</p>
<!--code:0-->
<table class="tab">
  <tr><th>dNBR</th><th>Severity (USGS)</th></tr>
  <tr><td>&lt; 0.10</td><td>unburned</td></tr>
  <tr><td>0.10 – 0.27</td><td>low</td></tr>
  <tr><td>0.27 – 0.44</td><td>moderate-low</td></tr>
  <tr><td>0.44 – 0.66</td><td>moderate-high</td></tr>
  <tr><td>&gt; 0.66</td><td>high</td></tr>
</table>
<div class="astuce">Fields harvested between June and August also lower NBR: they appear as "low severity". This is a <b>false positive</b>. The script <code>py_06_changements_incendie.py</code> keeps only the largest patch above 0.27; you can also mask crops with the level 6 classification.</div>`,
  exercice: `<ol>
  <li>Run <code>py_06_changements_incendie.py</code> and open <code>perimetre_incendie_2025.shp</code> in QGIS or ArcGIS.</li>
  <li>What is the burned area? What share is high severity?</li>
  <li>Overlay the perimeter with the fire starts in <code>Risques\\Foyers_incendies.shp</code> and with the schools: which are less than 2 km away?</li>
</ol>` };

/* ---------- Level 6 ---------- */
E.t6 = { titre: "Machine learning: classifying an image", resume: "Machine learning concepts, unsupervised K-means classification, training samples, supervised Random Forest classification.",
  quiz: [
    { question: "K-means is a method that is:", choix: ["Supervised", "Unsupervised", "Regression", "Georeferencing"], explication: "It groups pixels without labels." },
    { question: "In scikit-learn, which method trains a model?", choix: ["predict", "fit", "train_map", "score"], explication: "fit(X, y) learns; predict(X) predicts." },
    { question: "Why reshape the image (6, 600, 600) into (360,000, 6)?", choix: ["To compress it", "One row per pixel, one column per variable", "To reproject it", "To display it"], explication: "That is the format expected by scikit-learn models." },
    { question: "A Random Forest decides a pixel's class by:", choix: ["A single threshold", "The vote of many decision trees", "The distance to the class centre", "Chance"], explication: "Each tree votes; the majority wins." },
    { question: "Where should training points preferably be placed?", choix: ["On boundaries between classes", "In the centre of homogeneous areas, across the whole image", "All in the same plot", "On clouds"], explication: "Pure, well-distributed pixels give a better model." }
  ] };
E["t6-l1"] = { titre: "Machine learning concepts", objectifs: ["Distinguish supervised and unsupervised learning", "Define features, labels, training and test", "Understand overfitting"],
  contenu: `
<p><b>Machine learning</b> lets an algorithm <b>learn a rule from examples</b> instead of writing it yourself (like the thresholds of level 5).</p>
<table class="tab">
  <tr><th>Term</th><th>In remote sensing</th></tr>
  <tr><td>Sample</td><td>a pixel</td></tr>
  <tr><td>Features X</td><td>the pixel's bands and indices</td></tr>
  <tr><td>Label y</td><td>the known class: water, forest, scrubland…</td></tr>
  <tr><td>Training</td><td>the model learns from labelled pixels</td></tr>
  <tr><td>Prediction</td><td>the model classifies all other pixels</td></tr>
  <tr><td>Validation</td><td>quality is measured on <b>independent</b> points</td></tr>
</table>
<ul>
  <li><b>Unsupervised</b> (K-means): no labels; the algorithm groups similar pixels, the operator then names the groups.</li>
  <li><b>Supervised</b> (Random Forest, SVM, k-NN, neural networks): labelled examples are provided.</li>
  <li><b>Classification</b>: predicting a class. <b>Regression</b>: predicting a value (biomass, cover rate).</li>
</ul>
<p><b>Overfitting</b>: the model "learns its examples by heart" and generalises poorly. It is detected by evaluating on data it has never seen.</p>
<div class="astuce">In scikit-learn, every model is used the same way: <code>model.fit(X, y)</code> to learn, <code>model.predict(X)</code> to predict.</div>`,
  exercice: `<ol>
  <li>For each problem, say whether it is classification or regression, supervised or not: land cover map, wheat yield estimation, grouping pixels without field knowledge, landslide probability.</li>
  <li>Explain why a map must not be validated with the points used to train it.</li>
</ol>` };
E["t6-l2"] = { titre: "Unsupervised classification: K-means", objectifs: ["Turn an image into a pixels × features table", "Group pixels with K-means", "Interpret the resulting groups"],
  contenu: `
<!--code:0-->
<p><b>reshape</b> is the key step: an image (bands, rows, columns) becomes a table (pixels, bands) that scikit-learn can process. It is reversed after prediction.</p>
<p>K-means does not know what a "forest" is: each group must be <b>named</b>. The script <code>py_07_kmeans.py</code> crosses the groups with the field points (<code>pd.crosstab</code>) and plots the <b>elbow method</b> to choose the number of groups.</p>`,
  exercice: `<ol>
  <li>Run <code>py_07_kmeans.py</code>. Which groups clearly match one class? Which mix several classes?</li>
  <li>Run again with <code>k = 8</code> then <code>k = 4</code>: what happens to the scrubland / bare soil separation?</li>
  <li>Remove the StandardScaler: does the result change? Why?</li>
</ol>` };
E["t6-l3"] = { titre: "Training samples and pixel values", objectifs: ["Prepare balanced training points", "Extract pixel values under the points", "Build the X (features) and y (classes) table"],
  contenu: `
<p>The files <code>Echantillons_entrainement.shp</code> (300 points, 50 per class) and <code>Echantillons_validation.shp</code> (180 points) contain the fields <b>CLASSE</b> and <b>CODE</b> (1 Water, 2 Forest, 3 Scrubland, 4 Crops, 5 Bare soil, 6 Built-up). On a real image you digitise them in QGIS or ArcGIS over homogeneous areas, helped by Google Earth and fieldwork.</p>
<!--code:0-->
<ul>
  <li><b>Number</b>: at least 30 to 50 pixels per class, more for variable classes.</li>
  <li><b>Distribution</b>: across the whole image, not just one corner.</li>
  <li><b>Purity</b>: in the centre of homogeneous areas, away from boundaries (mixed pixels).</li>
  <li><b>Independence</b>: validation points must not touch training points.</li>
</ul>`,
  exercice: `<ol>
  <li>Display the training points on the infrared composite, coloured by class.</li>
  <li>Compute the mean and standard deviation of NDVI per class: which classes overlap?</li>
  <li>In QGIS, add 10 extra "Sol nu" (bare soil) points in the south of the image (same field structure).</li>
</ol>` };
E["t6-l4"] = { titre: "Supervised classification: Random Forest", objectifs: ["Train a random forest", "Predict all pixels and write the map", "Read feature importance"],
  contenu: `
<p>A <b>Random Forest</b> is an ensemble of hundreds of <b>decision trees</b>. Each tree learns from a random draw of points and variables; the final class is the one with the most "votes". The algorithm is robust, fast and not very sensitive to settings: it is the most used in remote sensing.</p>
<!--code:0-->
<p>The <b>out-of-bag</b> accuracy is computed on the points each tree did not see: it is a first estimate, but real validation uses the independent points (level 7). The script <code>py_08_random_forest.py</code> also writes the class palette into the GeoTIFF: the map is shown directly in colour in QGIS.</p>`,
  exercice: `<ol>
  <li>Run <code>py_08_random_forest.py</code>. What is the area of each class?</li>
  <li>Remove the three indices (6 bands only): does the out-of-bag accuracy drop?</li>
  <li>Apply the saved model (<code>joblib.load</code>) to the 2025 image and compare the two maps.</li>
</ol>` };

/* ---------- Level 7 ---------- */
E.t7 = { titre: "Assess and improve a classification", resume: "Confusion matrix, overall accuracy and kappa, cross-validation and tuning, comparing algorithms, majority filter and statistics.",
  quiz: [
    { question: "In scikit-learn's confusion matrix, rows represent:", choix: ["The map", "The ground reference", "The bands", "The municipalities"], explication: "Rows = true classes, columns = predicted classes." },
    { question: "User's accuracy measures the error of:", choix: ["Omission", "Commission", "Projection", "Rounding"], explication: "It answers: is what the map calls \"scrubland\" really scrubland?" },
    { question: "A kappa of 0.85 means an agreement that is:", choix: ["Weak", "Moderate", "Very good", "Null"], explication: "Above 0.8, agreement is considered very good." },
    { question: "Which models require scaling the variables?", choix: ["Random Forest", "SVM and k-NN", "None", "Only Random Forest"], explication: "They rely on distances between pixels." },
    { question: "The majority filter is used to:", choix: ["Increase resolution", "Remove isolated pixels (\"salt and pepper\")", "Correct the atmosphere", "Reproject the map"], explication: "Each pixel takes the majority class of its neighbourhood." }
  ] };
E["t7-l1"] = { titre: "Confusion matrix, overall accuracy and kappa", objectifs: ["Build the confusion matrix with independent points", "Compute overall accuracy, kappa, producer's and user's accuracy", "Identify confused classes"],
  contenu: `
<!--code:0-->
<table class="tab">
  <tr><th>Indicator</th><th>Question it answers</th></tr>
  <tr><td>Overall accuracy</td><td>What share of check points is correctly classified?</td></tr>
  <tr><td>Kappa</td><td>How much agreement beyond chance? (&gt; 0.8 very good, 0.6–0.8 good)</td></tr>
  <tr><td>Producer's accuracy (recall)</td><td><b>Omission</b> error: was some scrubland missed?</td></tr>
  <tr><td>User's accuracy</td><td><b>Commission</b> error: is what is mapped as "scrubland" really scrubland?</td></tr>
</table>`,
  exercice: `<ol>
  <li>Run <code>py_09_evaluation.py</code> (after py_08) and copy the confusion matrix into a table.</li>
  <li>Which two classes are most confused? Explain it with their spectral signatures.</li>
  <li>Compute the overall accuracy by hand from the diagonal.</li>
</ol>` };
E["t7-l2"] = { titre: "Cross-validation, tuning and comparing algorithms", objectifs: ["Evaluate a model by cross-validation", "Compare Random Forest, SVM and k-nearest neighbours", "Tune hyperparameters with GridSearchCV"],
  contenu: `
<!--code:0-->
<p><b>Cross-validation</b> splits the points into 5 parts: train on 4 and test on the 5th, five times. The average is more reliable than a single trial. <b>Hyperparameters</b> are the settings chosen before learning (number of trees, depth, SVM C…).</p>
<div class="astuce">SVM and k-NN depend on distances: the variables must be <b>scaled</b> (StandardScaler). Random Forest does not need it.</div>`,
  exercice: `<ol>
  <li>Which algorithm gets the best score? Is the gap significant given the standard deviation?</li>
  <li>Add a neural network <code>MLPClassifier(hidden_layer_sizes=(50,), max_iter=1000)</code> in a pipeline with StandardScaler.</li>
  <li>Train the model with only 10 points per class: what happens to the accuracy?</li>
</ol>` };
E["t7-l3"] = { titre: "Post-processing and map statistics", objectifs: ["Remove the \"salt and pepper\" effect with a majority filter", "Compute areas per class and per municipality", "Prepare the final map"],
  contenu: `
<!--code:0-->
<p>The <b>majority filter</b> replaces each pixel by the most frequent class around it (equivalent to ArcGIS's Majority Filter tool). Check with the confusion matrix that it really improves the map.</p>
<p>For the final map, open <code>classification_rf_2024_filtree.tif</code> in QGIS or ArcGIS, apply the colours from <code>classes.csv</code>, then add legend, scale, north arrow, source ("fictional Sentinel-2-like image") and the overall accuracy.</p>`,
  exercice: `<ol>
  <li>Compare overall accuracy before and after the 3 × 3 filter, then with a 5 × 5 window.</li>
  <li>Which municipality has the largest forest area? Built-up area?</li>
  <li>Make the layout of the 2024 land cover map.</li>
</ol>` };

/* ---------- Level 8 ---------- */
E.t8 = { titre: "Project: landslide susceptibility and outlook", resume: "Landslide susceptibility map with Random Forest (DEM, lithology, wadis, inventory), ROC curve, then Google Earth Engine and deep learning.",
  quiz: [
    { question: "What does the AUC of a ROC curve measure?", choix: ["The area of the study zone", "The model's ability to separate presences and absences", "The number of trees", "The DEM resolution"], explication: "0.5 = chance; 1 = perfect separation." },
    { question: "Why draw absences more than 500 m from landslides?", choix: ["To speed up the computation", "To avoid taking unstable ground as an absence", "To respect the projection", "It is not useful"], explication: "A false absence at the foot of a landslide would confuse learning." },
    { question: "Which variable comes from the inventory rather than the DEM?", choix: ["Slope", "Curvature", "The presence of a landslide", "Aspect"], explication: "The inventory provides the labels (y)." },
    { question: "Google Earth Engine is:", choix: ["Paid software to install", "An online computing platform, free for teaching", "A satellite", "An ArcMap extension"], explication: "It gives access to the Sentinel and Landsat archives and computes on Google's servers." }
  ] };
E["t8-l1"] = { titre: "Prepare the variables and the presence / absence sample", objectifs: ["Derive variables from the DEM (slope, aspect, curvature)", "Compute a distance to wadis and rasterize lithology", "Build a sample of presences and absences"],
  contenu: `
<p>In ArcMap level 8, landslide susceptibility was computed by <b>expert weighting</b>. Here a model <b>learns the weights</b> from the inventory <code>Risques\\Glissements.shp</code> (32 fictional landslides).</p>
<!--code:0-->
<table class="tab">
  <tr><th>Variable</th><th>Source</th><th>Why</th></tr>
  <tr><td>Slope, elevation, aspect, curvature</td><td>MNT_50m</td><td>gravity and water drive landslides</td></tr>
  <tr><td>Distance to wadis</td><td>Oueds.shp</td><td>bank undercutting</td></tr>
  <tr><td>Lithology (SUSC_GLIS)</td><td>Lithologie.shp</td><td>sensitive marls and clays</td></tr>
  <tr><td>Land cover</td><td>Occupation_sol.shp or the level 6 classification</td><td>vegetation stabilises slopes</td></tr>
</table>`,
  exercice: `<ol>
  <li>Open <code>py_10_susceptibilite_glissements.py</code> and run parts 1 and 2.</li>
  <li>Compare the mean slope and the distance to wadis of presences and absences.</li>
  <li>Propose an extra variable (distance to roads, NDVI…) and add it.</li>
</ol>` };
E["t8-l2"] = { titre: "Train the model, ROC curve and susceptibility map", objectifs: ["Split a training and a test sample", "Evaluate a probability model with the ROC curve and AUC", "Produce a susceptibility map in 4 classes"],
  contenu: `
<!--code:0-->
<p>The <b>ROC curve</b> plots the true positive rate against the false positive rate for all probability thresholds. The <b>AUC</b> (area under the curve) is 0.5 for a random model and 1 for a perfect one; above 0.8 the model is good.</p>
<p>Classes are defined by <b>quantiles</b>: 50% of the area low, 30% moderate, 15% high, 5% very high. A good model concentrates most known landslides in the two highest classes.</p>
<div class="astuce">With only 32 landslides the model remains fragile: the AUC changes with the draw of absences. Repeat training with several seeds (<code>random_state</code>) and compare with the multi-criteria map of ArcMap level 8.</div>`,
  exercice: `<ol>
  <li>Run the whole <code>py_10_susceptibilite_glissements.py</code> and note the AUC and the three most important variables.</li>
  <li>Repeat with 5 values of <code>random_state</code>: mean and spread of the AUC?</li>
  <li>Open <code>susceptibilite_glissements_classes.tif</code> in QGIS and overlay schools and roads: which assets are in the very high class?</li>
</ol>` };
E["t8-l3"] = { titre: "Going further: Google Earth Engine, time series and deep learning", objectifs: ["Compute an NDVI on real images with Google Earth Engine (free)", "Know time series and deep learning", "Use AI critically"],
  contenu: `
<p><b>Google Earth Engine</b> (free for teaching and research, with a Google account and a non-commercial Cloud project) gives access to all Sentinel-2 and Landsat archives and computes on Google's servers. It is used from Python with the <code>earthengine-api</code> library (and <code>geemap</code> for maps), for example in Google Colab:</p>
<!--code:0-->
<ul>
  <li><b>Time series</b>: by following NDVI month by month, you tell crops (marked annual cycle) from forests (stable) and detect drought or desertification.</li>
  <li><b>Deep learning</b>: convolutional neural networks (U-Net…) learn shapes and textures, not just pixel values. They extract buildings, roads or field parcels, but need thousands of examples and a graphics card. Free libraries: PyTorch, TensorFlow.</li>
  <li><b>Critical thinking</b>: an AI-made map is only reliable if it is validated in the field. Always state the method, data, date and accuracy.</li>
</ul>
<p>The "Google Earth Engine" level of the QGIS course shows the same platform with the JavaScript code editor.</p>`,
  exercice: `<ol>
  <li>In Colab, use Earth Engine to compute the median spring 2025 NDVI over the Tlemcen region.</li>
  <li>Plot the monthly NDVI of a farm plot over one year.</li>
  <li>Write a one-page sheet: method, data, accuracy and limits of your land cover map.</li>
</ol>` };
