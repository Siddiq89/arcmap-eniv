/* Traduction en du parcours qgis */
window.TRAD = window.TRAD || {};
window.TRAD.en = window.TRAD.en || {};
var E = window.TRAD.en;

/* ---------- Level 1 ---------- */
E.q1 = { titre: "Discovering QGIS", resume: "Install QGIS, .qgz project, panels, Browser, navigation and plugins.",
  quiz: [
    { question: "What is the extension of a QGIS project?", choix: [".mxd", ".aprx", ".qgz", ".gpkg"], explication: ".qgz is a compressed project; .gpkg is a data format." },
    { question: "Which QGIS version should a computer lab use?", choix: ["The newest one", "The LTR", "A beta version", "Any of them"], explication: "The LTR (Long Term Release) is maintained longer and is more stable." },
    { question: "The QGIS equivalent of ArcToolbox is:", choix: ["The Layers panel", "The Processing Toolbox", "The Plugin Manager", "The Browser"], explication: "It groups the QGIS, GDAL, GRASS and plugin algorithms." },
    { question: "The recommended storage format in QGIS is:", choix: ["Shapefile", "GeoPackage", "KML", "DXF"], explication: "A GeoPackage holds several vector and raster layers in a single file." }
  ] };
E["q1-l1"] = { titre: "Install QGIS and explore the interface", objectifs: ["Install the LTR version of QGIS", "Find your way around panels and toolbars", "Create and save a project"],
  contenu: `
<p>QGIS is a <b>free and open-source</b> GIS (qgis.org). Install the <b>LTR</b> (long-term release) version, which is more stable for teaching. The Windows installer includes GRASS GIS, used in level 7.</p>
<table class="tab">
  <tr><th>ArcMap / ArcGIS Pro</th><th>QGIS</th></tr>
  <tr><td>.mxd / .aprx</td><td><b>.qgz</b> project</td></tr>
  <tr><td>Table of Contents / Contents</td><td><b>Layers</b> panel</td></tr>
  <tr><td>ArcCatalog / Catalog</td><td><b>Browser</b> panel</td></tr>
  <tr><td>ArcToolbox / Geoprocessing</td><td><b>Processing Toolbox</b> (Ctrl+Alt+T)</td></tr>
  <tr><td>ModelBuilder</td><td><b>Graphical Modeler</b></td></tr>
  <tr><td>Python window (arcpy)</td><td><b>Python Console</b> (PyQGIS, Ctrl+Alt+P)</td></tr>
  <tr><td>File geodatabase</td><td><b>GeoPackage</b> (.gpkg)</td></tr>
</table>
<p>Show or hide panels with <i>View &gt; Panels</i>. Add data by dragging it from the Browser or with <i>Layer &gt; Add Layer</i>. Save the project as <code>C:\\ENIV\\Projets\\TP_ENIV.qgz</code> and tick <i>Project &gt; Properties &gt; General &gt; Save paths: Relative</i>.</p>
<p><b>Plugins</b> (<i>Plugins &gt; Manage and Install Plugins</i>) add features: QuickMapServices (basemaps), SAGA NextGen Provider, WhiteboxTools…</p>`,
  exercice: `
<ol>
  <li>Install QGIS LTR, then create the project <code>TP_ENIV.qgz</code>.</li>
  <li>In the Browser, add a favorite pointing to <code>C:\\ENIV\\TP</code>.</li>
  <li>Load Communes, Routes and Oueds, then install the QuickMapServices plugin and add an OpenStreetMap basemap.</li>
</ol>` };
E["q1-l2"] = { titre: "Navigate, identify and measure", objectifs: ["Use the navigation and identify tools", "Measure distances and areas", "Show the map in 3D"],
  contenu: `
<ul>
  <li><b>Navigation</b>: Pan tool, mouse wheel to zoom, <i>Zoom to Layer</i> (right-click the layer).</li>
  <li><b>Identify Features</b> (Ctrl+Shift+I): shows the attributes of a clicked feature.</li>
  <li><b>Measure</b> a line, an area or an angle (Attributes toolbar): measurements are ellipsoidal by default.</li>
  <li><b>Spatial bookmarks</b>: <i>View &gt; New Spatial Bookmark</i> (Ctrl+B).</li>
  <li>Status bar: cursor coordinates, scale, project CRS (click it to change it).</li>
</ul>
<p>For 3D: <i>View &gt; 3D Map Views &gt; New 3D Map View</i>. In the 3D view configuration, choose the DEM as <b>terrain</b> and a vertical exaggeration of 2.</p>`,
  exercice: `
<ol>
  <li>Measure the length of the main road and the area of the largest commune.</li>
  <li>Create two bookmarks (study area, chief town).</li>
  <li>Open a 3D view with the DEM as terrain.</li>
</ol>` };

/* ---------- Level 2 ---------- */
E.q2 = { titre: "Data and coordinate systems", resume: "GeoPackage, CRS and reprojection, tables, joins and CSV, digitizing and georeferencing.",
  quiz: [
    { question: "A layer has no .prj file but you know its system: what should you do?", choix: ["Reproject it", "Set the layer CRS", "Georeference it", "Rasterize it"], explication: "Setting the CRS does not change the coordinates." },
    { question: "Which expression gives the area in km² in the Field Calculator?", choix: ["$length / 1000", "$area / 1000000", "area(km)", "$perimeter"], explication: "$area is in square units of the CRS (m² in UTM)." },
    { question: "Which QGIS tool is used to fit a scanned map?", choix: ["The Georeferencer", "The Modeler", "The Raster Calculator", "The Atlas"], explication: "Layer > Georeferencer." },
    { question: "What is the magnet on the Snapping toolbar for?", choix: ["Enlarging the map", "Snapping vertices to existing features", "Deleting features", "Changing the CRS"], explication: "Snapping avoids gaps and overlaps." }
  ] };
E["q2-l1"] = { titre: "CRS, reprojection and GeoPackage", objectifs: ["Set the CRS of the project and of layers", "Tell setting a layer CRS apart from reprojecting it", "Store data in a GeoPackage"],
  contenu: `
<p>QGIS speaks of <b>CRS</b> (coordinate reference systems), identified by their EPSG code: 4326 (WGS 84), <b>32630</b> (WGS 84 / UTM 30N, the lab data), 30730 (Nord Sahara 1959 / UTM 30N). The <b>project</b> CRS is set at the bottom right; layers are reprojected on the fly for display.</p>
<ul>
  <li><b>Set the CRS</b> of a layer without a .prj: right-click &gt; <i>Layer CRS &gt; Set Layer CRS</i> (or the <i>Assign projection</i> algorithm). The coordinates do not change.</li>
  <li><b>Reproject</b>: the <i>Reproject layer</i> algorithm (vector) or <i>Warp (reproject)</i> (raster). For Nord Sahara 1959 → WGS 84, QGIS lists the available transformations.</li>
</ul>
<h3>GeoPackage</h3>
<p>Right-click a layer &gt; <i>Export &gt; Save Features As…</i>, GeoPackage format, file <code>TP_ENIV.gpkg</code>, layer name <code>communes</code>. Repeat for each layer: one file holds the whole lab. The <i>Package layers</i> algorithm does it in one go.</p>`,
  exercice: `
<ol>
  <li>Set the CRS of <code>Forages_sans_projection</code> (EPSG:32630).</li>
  <li>Reproject <code>Communes_NordSahara1959</code> to EPSG:32630 and compare it with <code>Communes</code>.</li>
  <li>Package the 7 base layers into <code>TP_ENIV.gpkg</code>.</li>
</ol>` };
E["q2-l2"] = { titre: "Attribute table, joins and CSV", objectifs: ["Edit the table and use the Field Calculator", "Join an external table", "Load a CSV of coordinates"],
  contenu: `
<p>Right-click &gt; <b>Open Attribute Table</b> (F6). The pencil turns on editing; the <b>Field Calculator</b> (Ctrl+I) creates or updates a field with an expression: <code>$area / 1000000</code> (area in km²), <code>"POP_2020" / ($area / 1e6)</code>, <code>upper("NOM")</code>.</p>
<h3>Join</h3>
<p>Load <code>population_communes.csv</code> (Layer &gt; Add Layer &gt; Delimited Text, semicolon delimiter, <i>No geometry</i>). Then <i>Communes Properties &gt; Joins &gt; +</i>: join field <code>CODE</code>, target field <code>CODE</code>. For a permanent join: the <i>Join attributes by field value</i> algorithm.</p>
<h3>XY points</h3>
<p><code>releves_gps.csv</code> as delimited text: <i>Point coordinates</i>, X = <code>X</code>, Y = <code>Y</code>, CRS EPSG:32630.</p>`,
  exercice: `
<ol>
  <li>Join the population to the communes and compute the density.</li>
  <li>Load the GPS readings and select those located in the most populated commune (<i>Select by Location</i>).</li>
</ol>` };
E["q2-l3"] = { titre: "Digitize and georeference", objectifs: ["Create a layer and digitize it with snapping", "Georeference a scanned map"],
  contenu: `
<p><i>Layer &gt; Create Layer &gt; New GeoPackage Layer</i>: geometry type, CRS, fields. Turn on editing (pencil), then <b>Add Feature</b>. Set <b>snapping</b> (Snapping toolbar, magnet icon) to all layers, 10 px. The <b>Vertex Tool</b> edits geometries; the <i>Advanced Digitizing</i> panel replaces the ArcMap tools for precise input.</p>
<h3>Georeferencer</h3>
<p><i>Layer &gt; Georeferencer</i>. Open the image, add control points (at least 4 to 6) by typing coordinates or clicking on the map. <i>Transformation Settings</i>: type Polynomial 1 (Helmert or affine), target CRS EPSG:32630, resampling Nearest neighbour. Start georeferencing: a fitted GeoTIFF is created, with the residuals table.</p>`,
  exercice: `
<ol>
  <li>Create the <code>puits</code> layer in the GeoPackage and digitize 5 wells.</li>
  <li>Digitize 3 adjoining parcels with snapping turned on.</li>
  <li>Fit a scanned map and note the mean error.</li>
</ol>` };

/* ---------- Level 3 ---------- */
E.q3 = { titre: "Symbology, labels and layouts", resume: "Categorized, graduated and rule-based styles, labels, print layout, atlas.",
  quiz: [
    { question: "To map a density, you choose the style:", choix: ["Categorized", "Graduated", "Single symbol", "Heatmap"], explication: "Graduated classifies a numeric value into intervals." },
    { question: "The QGIS atlas corresponds in ArcGIS to:", choix: ["Map series / Data Driven Pages", "ModelBuilder", "The geodatabase", "Georeferencing"], explication: "One page per feature of the coverage layer." },
    { question: "In which format is a QGIS style saved?", choix: [".lyr", ".qml", ".mxd", ".py"], explication: "A .qml can be reapplied to any similar layer." },
    { question: "Which style allows a different query per class?", choix: ["Rule-based", "Graduated", "Single symbol", "Inverted polygons"], explication: "Each rule has its own filter and symbol." }
  ] };
E["q3-l1"] = { titre: "Symbology and labels", objectifs: ["Choose a suitable style type", "Create labels and rule-based styles"],
  contenu: `
<p><b>Layer Styling</b> panel (F7) or Properties &gt; Symbology:</p>
<ul>
  <li><b>Single Symbol</b>, <b>Categorized</b> (TYPE values), <b>Graduated</b> (choropleth, Natural Breaks (Jenks) mode), <b>Rule-based</b> (one query per class), <b>Heatmap</b>.</li>
  <li>Proportional symbols: in Single Symbol mode, the <i>Data defined override</i> button next to the size &gt; <i>Assistant</i>.</li>
</ul>
<p><b>Labels</b>: Labels tab &gt; <i>Single Labels</i>, value <code>NOM</code>, white buffer. With <i>Rule-based Labeling</i>, chief towns get a different label (<code>"CHEF_LIEU" = 'Oui'</code>).</p>
<p>A style is saved as <code>.qml</code> (Style &gt; Save Style) to be reused.</p>`,
  exercice: `
<ol>
  <li>Make a graduated map of density in 5 Jenks classes.</li>
  <li>Show the boreholes as symbols proportional to flow rate.</li>
  <li>Label the communes with a special rule for chief towns.</li>
</ol>` };
E["q3-l2"] = { titre: "Print layout and atlas", objectifs: ["Compose and export a print layout", "Produce one map per commune with the atlas"],
  contenu: `
<p><i>Project &gt; New Print Layout</i>. Add a map, a legend, a scale bar, a north arrow, a label (title, source) and a picture (logo). The <i>Item Properties</i> panel sets up each item. Export: <i>Layout &gt; Export as PDF / Image</i>.</p>
<h3>Atlas</h3>
<p><b>Atlas</b> panel: tick <i>Generate an atlas</i>, coverage layer <code>Communes</code>, page name <code>NOM</code>. In the map properties, tick <i>Controlled by Atlas</i>. A dynamic title is written with the expression <code>[% 'Commune de ' || "NOM" %]</code>. <i>Atlas &gt; Export Atlas as PDF</i> produces one page per commune.</p>`,
  exercice: `
<ol>
  <li>Compose a complete A4 map and export it as a 300 dpi PDF.</li>
  <li>Generate an atlas of the 9 communes with a dynamic title.</li>
</ol>` };

/* ---------- Level 4 ---------- */
E.q4 = { titre: "Processing and spatial analysis", resume: "Processing Toolbox, vector geoprocessing, raster tools and the Raster Calculator.",
  quiz: [
    { question: "In QGIS, “Merge vector layers” corresponds in ArcGIS to:", choix: ["Dissolve", "Merge", "Union", "Intersect"], explication: "In the French interfaces this is a trap: “Regrouper” (QGIS) = “Fusionner/Dissolve” (ArcGIS), while “Fusionner” in QGIS assembles layers." },
    { question: "Which button applies an algorithm to several layers?", choix: ["Run as Batch Process", "Iterate over this layer", "History", "Cancel"], explication: "Batch processing fills in a table of inputs and outputs." },
    { question: "In the Raster Calculator, what does “pente@1” mean?", choix: ["The first row", "Band 1 of the pente (slope) raster", "A 1° slope", "A temporary file"], explication: "@1 is the band; a DEM has only one." },
    { question: "Which algorithm converts a raster to polygons?", choix: ["Rasterize", "Polygonize", "Clip", "Dissolve"], explication: "Polygonize (GDAL) creates one polygon per group of cells with the same value." }
  ] };
E["q4-l1"] = { titre: "Processing Toolbox and vector geoprocessing", objectifs: ["Find an algorithm and use batch processing", "Run buffers, overlays and zonal counts"],
  contenu: `
<p>The <b>Processing Toolbox</b> (Ctrl+Alt+T) groups the native QGIS, GDAL and GRASS algorithms. Type the name in the search box. Each run is recorded in the <i>History</i> (clock icon), with its Python command.</p>
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
<p>Watch the names in the French interfaces: “Fusionner” in QGIS assembles layers, while “Fusionner” in ArcGIS dissolves features.</p>
<p>The <b>Run as Batch Process</b> button applies an algorithm to several layers at once; the green <i>Iterate over this layer</i> button creates one output per feature.</p>`,
  exercice: `
<ol>
  <li>Create a dissolved 200 m buffer around the boreholes.</li>
  <li>Count the boreholes per commune.</li>
  <li>With a batch process, clip the 6 base layers to the study area.</li>
</ol>` };
E["q4-l2"] = { titre: "Raster: terrain, calculator and reclassification", objectifs: ["Compute slope, aspect and hillshade", "Use the Raster Calculator and reclassify by table", "Convert raster to vector and back"],
  contenu: `
<p>Add <code>MNT_50m.asc</code>, assign it the CRS EPSG:32630 (Properties &gt; Source) and export it as GeoTIFF (right-click &gt; Export &gt; Save As).</p>
<ul>
  <li><b>Slope</b>, <b>Aspect</b>, <b>Hillshade</b>: the <i>Raster terrain analysis</i> group of the toolbox.</li>
  <li><b>Raster Calculator</b> (Raster menu): <code>("pente@1" &gt; 15) * 1</code> gives 1 for steep slopes, 0 elsewhere.</li>
  <li><b>Reclassify by table</b>: a min / max / new value table.</li>
  <li><b>Polygonize (raster to vector)</b> and <b>Rasterize (vector to raster)</b> (GDAL).</li>
  <li><b>Zonal statistics</b>: mean elevation per commune.</li>
</ul>`,
  exercice: `
<ol>
  <li>Compute slope and hillshade; show the hillshade under the DEM with the Multiply blending mode.</li>
  <li>Isolate slopes &gt; 15° and polygonize them.</li>
  <li>Compute the mean elevation of each commune.</li>
</ol>` };

/* ---------- Level 5 ---------- */
E.q5 = { titre: "The Graphical Modeler", resume: "Build a model with inputs and algorithms, reuse it as a tool and export it to Python.",
  quiz: [
    { question: "In the QGIS modeler, what do you declare first?", choix: ["The outputs", "The inputs", "The styles", "The plugins"], explication: "Inputs become the parameters of the model." },
    { question: "How do you run a model once per commune?", choix: ["With a ModelBuilder iterator", "With “Iterate over this layer”", "With the atlas", "It is impossible"], explication: "The green button runs the algorithm on each feature." },
    { question: "What is the extension of a QGIS model?", choix: [".model3", ".tbx", ".qml", ".atbx"], explication: ".model3 since QGIS 3." },
    { question: "Exporting a model to Python produces:", choix: ["An arcpy script", "A PyQGIS processing algorithm", "A .qgz file", "An image"], explication: "The script calls processing.run for each step." }
  ] };
E["q5-l1"] = { titre: "Build a model", objectifs: ["Declare the inputs of a model", "Chain algorithms together"],
  contenu: `
<p><i>Processing &gt; Graphical Modeler</i>. Unlike ModelBuilder, you first declare the <b>inputs</b> (Inputs tab: vector layer, raster layer, number, field…), then add the <b>algorithms</b> (Algorithms tab), choosing for each parameter a model input or the output of a previous algorithm.</p>
<ol>
  <li>Inputs: <i>Vector Layer</i> “Forages”, <i>Vector Layer</i> “Occupation du sol”, <i>Number</i> “Distance” (default 200).</li>
  <li><b>Buffer</b> algorithm: input = Forages, distance = Distance, dissolve the result.</li>
  <li><b>Extract by attribute</b> algorithm: Occupation du sol, <code>TYPE = Urbain</code>.</li>
  <li><b>Difference</b> algorithm: buffer minus urban areas; name the output “Périmètres” (it becomes a model output).</li>
</ol>
<p>Save the model (<code>.model3</code>) in the project or in the user's models: it appears in the toolbox, under <i>Models</i>.</p>`,
  exercice: `
<ol>
  <li>Build this model and run it with 100 m, then 300 m.</li>
  <li>Add a <b>Count points in polygon</b> step per commune.</li>
</ol>` };
E["q5-l2"] = { titre: "Iterate, document and export to Python", objectifs: ["Repeat a model over several features or layers", "Export a model as a processing script"],
  contenu: `
<p>The QGIS modeler has no iterator like ModelBuilder. To repeat:</p>
<ul>
  <li><b>Iterate over this layer</b> (green button next to the input): the model runs once per feature, for example once per commune.</li>
  <li><b>Run as Batch Process</b>: one row per set of parameters (several distances, several layers).</li>
</ul>
<p>Document the model (<i>Edit Model Help</i>): description, explanation of each input. Finally, <i>Export as Script Algorithm</i> produces a PyQGIS processing algorithm, the starting point of level 6.</p>`,
  exercice: `
<ol>
  <li>Run the model with “Iterate over this layer” on the communes.</li>
  <li>Run it as a batch with three distances.</li>
  <li>Export it as a Python script and find the <code>processing.run</code> calls.</li>
</ol>` };

/* ---------- Level 6 ---------- */
E.q6 = { titre: "Programming with PyQGIS", resume: "Python Console, processing.run, looping over features, processing scripts and layout export.",
  quiz: [
    { question: "Which function runs a toolbox algorithm?", choix: ["arcpy.Buffer", "processing.run", "iface.run", "QgsBuffer()"], explication: "processing.run(\"identifier\", {parameters})." },
    { question: "How do you get a project layer by its name?", choix: ["QgsProject.instance().mapLayersByName(\"Forages\")[0]", "arcpy.mp.Layer(\"Forages\")", "open(\"Forages\")", "iface.Forages"], explication: "mapLayersByName returns a list (several layers can share the same name)." },
    { question: "What is “with edit(layer):” for?", choix: ["Opening the table", "Starting editing and saving automatically at the end", "Deleting the layer", "Changing the style"], explication: "The block commits the changes, or rolls them back on error." },
    { question: "How do you find the parameters of native:buffer?", choix: ["processing.algorithmHelp(\"native:buffer\")", "help(buffer)", "In the project properties", "You cannot"], explication: "algorithmHelp lists the parameters and their types." }
  ] };
E["q6-l1"] = { titre: "The Python Console and processing.run", objectifs: ["Access project layers in Python", "Run a toolbox algorithm in Python"],
  contenu: `
<p><i>Plugins &gt; Python Console</i> (Ctrl+Alt+P). The <i>Show Editor</i> button opens a script editor. QGIS 3 uses <b>Python 3</b>.</p>
<!--code:0-->
<p>To find an algorithm's identifier and parameters: <code>processing.algorithmHelp("native:buffer")</code>, or open the algorithm, then <i>Advanced &gt; Copy as Python Command</i>.</p>`,
  exercice: `
<ol>
  <li>Print the name and feature count of every layer in the project.</li>
  <li>Run a buffer in Python and add the result to the map.</li>
</ol>` };
E["q6-l2"] = { titre: "Loop over and edit features", objectifs: ["Read attributes and geometry", "Edit a table inside an edit block"],
  contenu: `
<!--code:0-->
<p><code>with edit(layer):</code> starts editing, then saves (or rolls back on error) automatically.</p>`,
  exercice: `
<ol>
  <li>Compute the mean flow rate of the boreholes in use.</li>
  <li>Add a <code>CLASSE</code> field and fill it in (Faible, Moyen, Fort) according to flow rate.</li>
</ol>` };
E["q6-l3"] = { titre: "Processing scripts and automatic export", objectifs: ["Create a script that appears in the toolbox", "Export an atlas with Python"],
  contenu: `
<p>In the toolbox, Python icon &gt; <i>Create New Script from Template</i>. The template defines a <code>QgsProcessingAlgorithm</code> class with its parameters. The saved script appears under <i>Scripts</i>: it opens like a tool, and batch processing works too.</p>
<p>Exporting a layout or an atlas:</p>
<!--code:0-->
<p>The file <code>qgis_01_bases.py</code> (Downloads) contains these examples.</p>`,
  exercice: `
<ol>
  <li>Create a “Périmètre de protection” processing script with two parameters (layer, distance).</li>
  <li>Export your communes atlas to PDF with a script.</li>
</ol>` };

/* ---------- Level 7 ---------- */
E.q7 = { titre: "DEM, hydrology and floods", resume: "Hydrology with GRASS in QGIS: filling, r.watershed, stream network, watershed from an outlet, flood-prone areas.",
  quiz: [
    { question: "Which GRASS tool computes accumulation, directions, network and basins in one go?", choix: ["r.fill.dir", "r.watershed", "r.to.vect", "r.reclass"], explication: "r.watershed produces all these layers from the DEM." },
    { question: "Why are some r.watershed accumulation values negative?", choix: ["DEM error", "Part of the water comes from outside the area", "Zero slope", "Wrong CRS"], explication: "These cells may be underestimated; take the absolute value for display." },
    { question: "Which tool delineates the watershed upstream of a point?", choix: ["r.water.outlet", "Clip", "Proximity", "Atlas"], explication: "It starts from the drainage directions and the outlet coordinates." },
    { question: "Which tool combines the scored criteria in a weighted sum?", choix: ["Raster Calculator", "Dissolve", "Georeferencer", "Print layout"], explication: "The Raster Calculator accepts an expression with the weights." }
  ] };
E["q7-l1"] = { titre: "Stream network with GRASS", objectifs: ["Use the GRASS tools in the toolbox", "Compute accumulation, directions and network with r.watershed"],
  contenu: `
<p>The theory (sinks, D8, accumulation, threshold) is explained in level 7 of the ArcMap course. In QGIS you use <b>GRASS</b>, built into the toolbox (<i>GRASS &gt; Raster</i> group).</p>
<ol>
  <li><b>r.fill.dir</b>: fills sinks and computes directions (outputs: filled DEM, directions, problem areas).</li>
  <li><b>r.watershed</b> on the filled DEM: <i>Minimum size of exterior watershed basin</i> = 400 (cells), tick <i>Enable Single Flow Direction (D8)</i>. Outputs: <i>Number of cells that drain through each cell</i> (accumulation), <i>Drainage direction</i>, <i>Stream segments</i>, <i>Unique label for each watershed basin</i>.</li>
  <li><b>r.to.vect</b> (type line) on the stream segments to get lines, or <i>Polygonize</i> for the basins.</li>
</ol>
<div class="astuce"><b>Watch out:</b> r.watershed gives a <b>negative</b> accumulation for cells that receive water from outside the DEM. Use <code>abs("acc@1")</code> in the Raster Calculator for display.</div>
<p>For Strahler order, install the <b>SAGA NextGen Provider</b> plugin (<i>Strahler order</i> algorithm) or use SAGA's <i>Channel network and drainage basins</i>.</p>`,
  exercice: `
<ol>
  <li>Run r.fill.dir, then r.watershed with a threshold of 400 cells.</li>
  <li>Vectorize the network and compare it with the Oueds layer.</li>
  <li>Redo the computation with 200 and 1,000 cells.</li>
</ol>` };
E["q7-l2"] = { titre: "Watershed and flood-prone areas", objectifs: ["Delineate a watershed from an outlet", "Map flood susceptibility"],
  contenu: `
<h3>Watershed</h3>
<p><b>r.water.outlet</b>: input = <i>Drainage direction</i> from r.watershed, outlet coordinates (click on the map, on a network cell; read the coordinates of <code>Exutoire.shp</code> with the Identify tool). Polygonize the result, then compute <code>$area / 1e6</code> and the Gravelius index <code>0.28 * $perimeter / sqrt($area)</code>.</p>
<h3>Flood-prone areas</h3>
<ol>
  <li>Distance to the wadi: <b>Rasterize</b> the network, then <b>Proximity (raster distance)</b> (GDAL).</li>
  <li>Height above the wadi: with GRASS, <b>r.stream.distance</b> (GRASS add-on); otherwise approximate it with the difference between the DEM and a local <i>minimum filter</i>, or use distance alone.</li>
  <li>Slope, accumulation, rasterized land cover.</li>
  <li><b>Reclassify by table</b> each criterion from 1 to 5, then <b>Raster Calculator</b>: <code>0.35*"dist@1" + 0.25*"haut@1" + 0.20*"pente@1" + 0.10*"acc@1" + 0.10*"occ@1"</code>.</li>
  <li>Validation: <b>Sample raster values</b> at <code>Laisses_crues.shp</code>.</li>
</ol>
<p>The script <code>qgis_02_hydrologie.py</code> automates the network and watershed part.</p>`,
  exercice: `
<ol>
  <li>Delineate the watershed of the Tamda wadi and compute its area.</li>
  <li>Build the flood susceptibility map and validate it with the flood marks.</li>
</ol>` };

/* ---------- Level 8 ---------- */
E.q8 = { titre: "Vulnerability to major natural hazards", resume: "Multi-criteria analysis in QGIS, wildfire, earthquake, tsunami and landslide maps, and a multi-hazard summary.",
  quiz: [
    { question: "In QGIS, how do you get a distance-to-roads map?", choix: ["Buffer", "Rasterize, then Proximity (raster distance)", "Dissolve", "Clip"], explication: "Proximity (GDAL) works on a raster: rasterize the roads first." },
    { question: "The QGIS equivalent of Kernel Density is:", choix: ["Heatmap (Kernel Density Estimation)", "Zonal statistics", "Polygonize", "Atlas"], explication: "Heatmap (Kernel Density Estimation)." },
    { question: "What must you check before a weighted sum in the Raster Calculator?", choix: ["The colors", "Same extent and same cell size", "The file names", "The .asc format"], explication: "Otherwise the cells do not overlap exactly." },
    { question: "Which tool gives the highest hazard per cell?", choix: ["Cell statistics (Maximum)", "Zonal statistics", "Merge vector layers", "Reclassify"], explication: "It compares the rasters cell by cell." }
  ] };
E["q8-l1"] = { titre: "Multi-criteria analysis in QGIS", objectifs: ["Prepare raster criteria with QGIS and GDAL tools", "Combine the criteria with the Raster Calculator"],
  contenu: `
<p>The method (hazard, vulnerability, scores from 1 to 5, weights, AHP, validation) is described in level 8 of the ArcMap course. Tool equivalents:</p>
<table class="tab">
  <tr><th>Step</th><th>ArcGIS</th><th>QGIS</th></tr>
  <tr><td>Distance</td><td>Euclidean Distance</td><td>Rasterize + Proximity (raster distance)</td></tr>
  <tr><td>Point density</td><td>Kernel Density</td><td>Heatmap (Kernel Density Estimation)</td></tr>
  <tr><td>Vector → raster</td><td>Polygon to Raster</td><td>Rasterize (vector to raster)</td></tr>
  <tr><td>Scoring</td><td>Reclassify</td><td>Reclassify by table</td></tr>
  <tr><td>Weighted sum</td><td>Weighted Overlay</td><td>Raster Calculator</td></tr>
  <tr><td>Maximum of several rasters</td><td>Cell Statistics</td><td>Cell statistics</td></tr>
  <tr><td>Summary per commune</td><td>Zonal Statistics as Table</td><td>Zonal statistics</td></tr>
  <tr><td>Validation</td><td>Extract Values to Points</td><td>Sample raster values</td></tr>
</table>
<div class="astuce"><b>Alignment:</b> for the Raster Calculator, all rasters must have the same extent and the same cell size. When rasterizing, give the DEM extent and a 50 m resolution.</div>`,
  exercice: `
<ol>
  <li>Prepare the “distance to roads” criterion (rasterize, then proximity) and score it from 1 to 5.</li>
  <li>Check in the layer properties that all rasters have the same extent and resolution.</li>
</ol>` };
E["q8-l2"] = { titre: "Hazard maps: wildfire, earthquake, tsunami, landslides", objectifs: ["Produce the four hazard maps in QGIS", "Validate with observed events"],
  contenu: `
<p>The criteria and weights are those of the file <code>Tables\\poids_multicritere.xlsx</code> (it opens directly in QGIS):</p>
<ul>
  <li><b>Wildfire</b>: land cover 35, slope 20, aspect 15 (<i>Aspect</i> tool, south-facing slopes = 5), roads 15, inhabited places 15. Validation: Foyers_incendies.</li>
  <li><b>Earthquake</b>: active faults 40 (filter <code>"ACTIVE" = 'Oui'</code>), epicenter density 25 (heatmap, radius 3,000 m), site effect 25 (rasterize the <code>AMPLIF</code> field), slope 10.</li>
  <li><b>Tsunami</b>: on <code>MNT_cote_25m</code>, land = <code>("mnt@1" &gt; 0) * "mnt@1"</code>; elevation 50, distance to the coast 35, slope 15. 5 m wave scenario: <code>("mnt@1" &gt; 0) AND ("mnt@1" &lt;= 5) AND ("dist@1" &lt;= 1000)</code>.</li>
  <li><b>Landslides</b>: rasterize <code>SUSC_GLIS</code> (already scored from 1 to 5) 35, slope 30, wadis 15, land cover 10, roads 10. Validation: Glissements.</li>
</ul>
<p>The script <code>qgis_03_risque_feux.py</code> builds the wildfire map end to end and serves as a template for the other three.</p>`,
  exercice: `
<ol>
  <li>Build the wildfire risk map with the Graphical Modeler (one input per layer, the weights as numeric inputs).</li>
  <li>Build the earthquake, tsunami and landslide maps.</li>
  <li>Compare your results with those from ArcGIS (same data, same weights).</li>
</ol>` };
E["q8-l3"] = { titre: "Multi-hazard summary and communes atlas", objectifs: ["Combine the hazards", "Produce a summary atlas per commune"],
  contenu: `
<ul>
  <li><b>Cell statistics</b> (Maximum statistic) on the four class maps: highest hazard per cell.</li>
  <li>Count of high hazards in the Raster Calculator: <code>("inond@1" &gt;= 4) + ("feux@1" &gt;= 4) + ("seisme@1" &gt;= 4) + ("gliss@1" &gt;= 4)</code>.</li>
  <li><b>Zonal statistics</b> on <code>Communes</code> (mean of the count), then a graduated style.</li>
  <li>Print layout with an <b>atlas</b>: one page per commune, with the multi-hazard map, an attribute table (exposed schools) and the note <i>fictitious data for teaching use</i>.</li>
</ul>`,
  exercice: `
<ol>
  <li>Produce the maximum hazard and cumulative maps.</li>
  <li>Generate a multi-hazard atlas of the 9 communes as PDF.</li>
</ol>` };

/* ---------- Level 9 ---------- */
E.q9 = { titre: "AI in QGIS with MCP", resume: "Connect Claude to QGIS through the MCP protocol, drive a project in plain language on the Tlemcen data, and stay in control of the results.",
  quiz: [
    { question: "In QGIS MCP, what is the role of Claude Desktop?", choix: ["The MCP server", "The MCP client", "A QGIS plugin", "A data format"], explication: "Claude Desktop is the client: it starts the MCP server and calls its tools." },
    { question: "What must you do in QGIS before writing to Claude?", choix: ["Nothing", "Click Start Server in the QGIS MCP plugin", "Open the Python Console", "Install GRASS"], explication: "The plugin must be running to receive commands." },
    { question: "Which tool calls for the most caution?", choix: ["ping", "get_layers", "execute_code", "zoom_to_layer"], explication: "execute_code runs any Python code: read it before accepting." },
    { question: "How do you make an AI-driven analysis reproducible?", choix: ["Replay the same conversation", "Ask for the PyQGIS script or build a model", "Take a screenshot", "It is not possible"], explication: "A script or a model replays identically; a conversation does not." }
  ] };
E["q9-l1"] = { titre: "Understand MCP and install QGIS MCP", objectifs: ["Understand the roles of the client, the MCP server and the QGIS plugin", "Install QGIS MCP and connect it to Claude Desktop", "Check the connection with a first test"],
  contenu: `
<p><b>MCP</b> (<i>Model Context Protocol</i>) is an open protocol that lets an AI assistant use <b>tools</b> provided by a piece of software. Instead of only answering with text, the assistant can ask QGIS to load a layer, run an algorithm or produce a map.</p>
<table class="tab">
  <tr><th>Component</th><th>Role</th></tr>
  <tr><td><b>MCP client</b></td><td>The chat application: here <b>Claude Desktop</b>. This is where you type your requests.</td></tr>
  <tr><td><b>MCP server</b></td><td>A small Python program started by Claude Desktop. It describes the available tools (load a layer, run a process…).</td></tr>
  <tr><td><b>QGIS plugin</b></td><td>Opens a local connection inside QGIS and actually runs the commands it receives.</td></tr>
</table>
<p>We use the open-source <b>QGIS MCP</b> project by J. J. Santos (github.com/jjsantos01/qgis_mcp). It is a community project, not official from QGIS or Anthropic. The author tested it on QGIS 3.22: check it on your version before the session.</p>
<h3>Installation</h3>
<ol>
  <li>Install <b>Claude Desktop</b> (claude.ai/download) and sign in with your account.</li>
  <li>Install <b>Python 3.10</b> or later, then the <b>uv</b> package manager. In PowerShell:<br><code>powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code></li>
  <li>On the project's GitHub page, click <i>Code &gt; Download ZIP</i> and unzip it to <code>C:\\ENIV\\mcp\\qgis_mcp</code>.</li>
  <li>Copy the <code>qgis_mcp_plugin</code> folder into the plugins folder of your QGIS profile. To find it: <i>Settings &gt; User Profiles &gt; Open Active Profile Folder</i>, then <code>python\\plugins</code>.</li>
  <li>Restart QGIS. In <i>Plugins &gt; Manage and Install Plugins</i>, <i>All</i> tab, search for “QGIS MCP” and tick it.</li>
  <li>Run <i>Plugins &gt; QGIS MCP &gt; QGIS MCP</i> and click <b>Start Server</b>.</li>
  <li>In Claude Desktop: <i>Settings &gt; Developer &gt; Edit Config</i>. Paste this block into <code>claude_desktop_config.json</code> (file <code>mcp_qgis_config.json</code> in Downloads):</li>
</ol>
<!--code:0-->
<p>Restart Claude Desktop. The tools icon should show the <b>qgis</b> server. First test: type “Check the connection with QGIS (ping), then tell me the QGIS version”.</p>
<div class="astuce"><b>Do not confuse:</b> the official QGIS plugin repository also offers a “QGIS MCP” plugin (N. Karasiak). It works with its own <code>qgis-mcp</code> server and a different configuration. Do not mix the two projects.</div>`,
  exercice: `
<ol>
  <li>Install Claude Desktop, uv and the QGIS MCP plugin.</li>
  <li>Start the server in QGIS and add the configuration to Claude Desktop.</li>
  <li>Run the “ping” test and note the QGIS version returned by Claude.</li>
</ol>` };
E["q9-l2"] = { titre: "Lab: drive QGIS in plain language", objectifs: ["Know the tools exposed by QGIS MCP", "Carry out a full analysis on the Tlemcen data through written requests", "Check every result in QGIS"],
  contenu: `
<p>QGIS MCP offers 15 tools. Claude picks the right tool for your request, and Claude Desktop asks for your permission before each use.</p>
<table class="tab">
  <tr><th>Tool</th><th>What it does</th></tr>
  <tr><td><code>ping</code>, <code>get_qgis_info</code></td><td>Test the connection, QGIS version</td></tr>
  <tr><td><code>create_new_project</code>, <code>load_project</code>, <code>get_project_info</code>, <code>save_project</code></td><td>Manage the .qgz project</td></tr>
  <tr><td><code>add_vector_layer</code>, <code>add_raster_layer</code>, <code>get_layers</code>, <code>remove_layer</code>, <code>zoom_to_layer</code></td><td>Manage layers</td></tr>
  <tr><td><code>get_layer_features</code></td><td>Read features and their attributes</td></tr>
  <tr><td><code>execute_processing</code></td><td>Run an algorithm from the Processing Toolbox</td></tr>
  <tr><td><code>render_map</code></td><td>Export the map view as an image</td></tr>
  <tr><td><code>execute_code</code></td><td>Run PyQGIS code (watch it closely, see next lesson)</td></tr>
</table>
<h3>Lab scenario (Tlemcen data)</h3>
<p>Type the requests one at a time and check the result in QGIS after each one:</p>
<ol>
  <li>“Create a new QGIS project and save it as <code>C:/ENIV/Projets/TP_IA.qgz</code>.”</li>
  <li>“Add the layers <code>Communes.shp</code> and <code>Forages.shp</code> from the folder <code>C:/ENIV/TP/Shapefiles</code>, then the raster <code>C:/ENIV/TP/MNT/MNT_50m.asc</code>. What is the CRS of each layer?”</li>
  <li>“How many boreholes have the state Exploité? Give the mean flow rate (DEBIT_LS field).”</li>
  <li>“Create a dissolved 200 m buffer around the boreholes.”</li>
  <li>“Count the boreholes in each commune.”</li>
  <li>“Apply a 5-class graduated style on that count, then export the map as PNG to <code>C:/ENIV/TP/Sorties/forages_ia.png</code>.”</li>
  <li>“Give me the PyQGIS script that redoes all these steps.” Save it in <code>C:\\ENIV\\TP\\Scripts</code>.</li>
</ol>
<div class="astuce"><b>Check:</b> open the attribute table, check the CRS (EPSG:32630) and the units. Compare the number of boreholes per commune with the result of the <i>Count points in polygon</i> algorithm run by hand (level 4).</div>`,
  exercice: `
<ol>
  <li>Carry out the full scenario and attach the PNG map to your report.</li>
  <li>Note the requests Claude misunderstood and rephrase them.</li>
  <li>Compare the PyQGIS script you got with <code>qgis_01_bases.py</code>.</li>
</ol>` };
E["q9-l3"] = { titre: "Good practice, limits and security", objectifs: ["Stay in control of what the assistant runs", "Protect data and check results"],
  contenu: `
<ul>
  <li><b>Permissions</b>: Claude Desktop asks for your approval before each tool. Read the request and prefer “Allow once”.</li>
  <li><b>execute_code</b> runs any Python code inside QGIS. Always read the proposed code before accepting: it can delete or overwrite files.</li>
  <li><b>Data</b>: the content of the layers Claude reads is sent to the AI service. Use the fictitious lab data, never confidential or personal data.</li>
  <li><b>Checking</b>: the AI can be wrong (wrong layer, wrong unit, forgotten CRS) while answering confidently. Check each result as you would a classmate's work.</li>
  <li><b>Reproducibility</b>: a conversation cannot be replayed identically. Ask for the PyQGIS script or build a model (level 5) to keep a stable method.</li>
  <li><b>Work on a copy</b> of the <code>C:\\ENIV\\TP</code> folder and save the project before each important request.</li>
  <li>You need an Internet connection and a Claude account. Without a connection, go back to the classic tools: they remain essential.</li>
</ul>
<p>AI does not replace method: you choose the criteria, the weights and the interpretation of a hazard map. It helps you go faster on repetitive steps.</p>`,
  exercice: `
<ol>
  <li>Ask Claude for a map of slopes above 15° and check the result with the Raster Calculator (level 4).</li>
  <li>Write 5 lines on the benefits and risks of AI for a GIS consultancy.</li>
</ol>` };
