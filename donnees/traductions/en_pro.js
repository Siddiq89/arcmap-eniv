/* Traduction en du parcours pro */
window.TRAD = window.TRAD || {};
window.TRAD.en = window.TRAD.en || {};
var E = window.TRAD.en;

/* ---------- Level 1 ---------- */
E.p1 = { titre: "Discovering ArcGIS Pro", resume: "The .aprx project, the ribbon, the Contents and Catalog panes, maps and 3D views: finding your way around the interface.",
  quiz: [
    { question: "What is the extension of an ArcGIS Pro project?", choix: [".mxd", ".aprx", ".qgz", ".gdb"], explication: "The .aprx replaces the .mxd and can contain several maps and layouts." },
    { question: "In ArcGIS Pro, the ArcMap table of contents corresponds to the pane:", choix: ["Catalog", "Geoprocessing", "Contents", "Symbology"], explication: "The Contents pane lists the layers of the active map." },
    { question: "Which Python version does ArcGIS Pro use?", choix: ["Python 2.7", "Python 3", "Both", "None"], explication: "ArcGIS Pro uses Python 3 (arcgispro-py3 environment)." },
    { question: "How do you switch a map to 3D?", choix: ["Open ArcScene", "View > Convert > To Local Scene", "Insert > New Layout", "It is not possible"], explication: "3D scenes are built into the project, without a separate application." }
  ] };
E["p1-l1"] = { titre: "The ArcGIS Pro project and its interface", objectifs: ["Create a project and understand what it contains", "Find your way around the ribbon and the panes"],
  contenu: `
<p>ArcGIS Pro replaces ArcMap, ArcCatalog and ArcScene with <b>a single</b> 64-bit application. All work is stored in a <b>project</b> (<code>.aprx</code>) that groups maps, layouts, folder connections, a geodatabase and a default toolbox.</p>
<table class="tab">
  <tr><th>ArcMap 10.8</th><th>ArcGIS Pro</th></tr>
  <tr><td>.mxd document</td><td>.aprx project (several maps and layouts)</td></tr>
  <tr><td>Toolbars</td><td><b>Ribbon</b> with contextual tabs (Map, Insert, Analysis, View, Format…)</td></tr>
  <tr><td>Table of contents</td><td><b>Contents</b> pane</td></tr>
  <tr><td>ArcCatalog</td><td>Built-in <b>Catalog</b> pane</td></tr>
  <tr><td>ArcToolbox</td><td><b>Geoprocessing</b> pane (Analysis tab &gt; Tools)</td></tr>
  <tr><td>ArcScene / ArcGlobe</td><td>Local or global <b>scene</b> in the same project</td></tr>
  <tr><td>Python 2.7</td><td>Python 3 (arcgispro-py3 environment)</td></tr>
</table>
<p>At start-up, choose <i>Map</i> (blank template with a basemap). Name the project <code>TP_ENIV</code> with the location <code>C:\\ENIV\\Projets</code>. ArcGIS Pro creates a folder with the same name containing <code>TP_ENIV.aprx</code>, <code>TP_ENIV.gdb</code> and <code>TP_ENIV.atbx</code>.</p>
<div class="astuce"><b>Tip:</b> if a pane has disappeared, reopen it from the <b>View</b> tab (Catalog, Contents, Geoprocessing…). The <i>Reset Panes</i> button restores the original layout.</div>`,
  exercice: `<ol>
  <li>Create the <code>TP_ENIV</code> project.</li>
  <li>In the Catalog pane, right-click <i>Folders &gt; Add Folder Connection</i> and choose <code>C:\\ENIV\\TP</code>.</li>
  <li>Drag <code>Communes.shp</code> and <code>Routes.shp</code> onto the map, then save the project.</li>
</ol>` };
E["p1-l2"] = { titre: "Navigating, exploring and going 3D", objectifs: ["Use the Explore tool and bookmarks", "Convert a map to a 3D scene"],
  contenu: `
<p>The <b>Explore</b> tool (Map tab) replaces the Zoom, Pan and Identify tools: left-click drag = pan, wheel = zoom, click a feature = pop-up with its attributes.</p>
<ul>
  <li><b>Bookmarks</b>: Map tab &gt; Bookmarks &gt; New Bookmark, to return to an extent.</li>
  <li><b>Scale</b>: type it directly at the bottom of the view (e.g. <code>1:50,000</code>).</li>
  <li><b>Coordinates</b>: shown at the bottom right; right-click to change the unit (DMS, decimal degrees, MGRS…).</li>
</ul>
<p>For 3D: <b>View &gt; Convert &gt; To Local Scene</b>. Add the DEM as an <i>elevation surface</i> (in Contents, Elevation Surfaces &gt; Add Elevation Source) and apply a vertical exaggeration of 2 to 3 to see the relief of the basin clearly.</p>`,
  exercice: `<ol>
  <li>Create two bookmarks: the whole study area and the main town.</li>
  <li>Convert the map to a local scene and add <code>MNT_50m.asc</code> as an elevation surface.</li>
  <li>Place the schools in 3D and take a screenshot of the view.</li>
</ol>` };

/* ---------- Level 2 ---------- */
E.p2 = { titre: "Data and coordinate systems", resume: "File geodatabases, projections, tables and joins, digitizing and georeferencing in ArcGIS Pro.",
  quiz: [
    { question: "What is the recommended storage format in ArcGIS Pro?", choix: ["Shapefile", "File geodatabase (.gdb)", "Excel file", "KML"], explication: "The file geodatabase handles long names, domains and large tables better." },
    { question: "A layer without a .prj whose system you know: which tool do you use?", choix: ["Project", "Define Projection", "Georeference", "XY Table To Point"], explication: "Define Projection writes the system without changing the coordinates." },
    { question: "Which EPSG code corresponds to WGS 1984 UTM zone 30N?", choix: ["4326", "30730", "32630", "3857"], explication: "32630; 30730 is Nord Sahara 1959 UTM 30N." },
    { question: "In the Edit tab, what is the Snapping group for?", choix: ["Taking a screenshot", "Snapping vertices to existing features", "Exporting the map", "Computing the area"], explication: "Snapping avoids gaps and overlaps between features." },
    { question: "After a join, which button checks that the codes match?", choix: ["Validate Join", "Calculate Geometry", "Remove All Joins", "Refresh"], explication: "Validate Join reports the number of matched records." }
  ] };
E["p2-l1"] = { titre: "Geodatabase, coordinate systems and projections", objectifs: ["Import shapefiles into a file geodatabase", "Tell defining a projection from projecting", "Choose the right system for north-western Algeria"],
  contenu: `
<p>ArcGIS Pro works best with a <b>file geodatabase</b> (<code>.gdb</code>). To import the practical shapefiles: right-click <code>TP_ENIV.gdb</code> &gt; <i>Import &gt; Feature Class(es)</i>, or the <b>Feature Class To Geodatabase</b> tool.</p>
<p>The <b>map coordinate system</b> is set in <i>Map Properties &gt; Coordinate Systems</i> (double-click “Map” in Contents). Layers are projected on the fly for display, but area and distance calculations must be done on data <b>projected</b> in metres.</p>
<table class="tab">
  <tr><th>System</th><th>EPSG code</th><th>Use</th></tr>
  <tr><td>WGS 1984 (degrees)</td><td>4326</td><td>GPS, data exchange, web maps</td></tr>
  <tr><td>WGS 1984 UTM zone 30N</td><td>32630</td><td>Tlemcen and the west of the country (practical data)</td></tr>
  <tr><td>Nord Sahara 1959 UTM zone 30N</td><td>30730</td><td>INCT topographic maps</td></tr>
</table>
<ul>
  <li><b>Define Projection</b>: the data have no .prj; you tell them which system their coordinates are in.</li>
  <li><b>Project</b>: you create a copy in another system. Between Nord Sahara 1959 and WGS 1984, choose a <b>geographic transformation</b> (ArcGIS Pro offers the list).</li>
</ul>`,
  exercice: `<ol>
  <li>Import the 7 shapefiles of the <code>Shapefiles</code> folder into <code>TP_ENIV.gdb</code>.</li>
  <li>Define the projection of <code>Projections\\Forages_sans_projection</code> as WGS 1984 UTM 30N.</li>
  <li>Project <code>Communes_NordSahara1959</code> to WGS 1984 UTM 30N and compare with <code>Communes</code>: what shift do you see without a transformation?</li>
</ol>` };
E["p2-l2"] = { titre: "Tables, joins and XY points", objectifs: ["Open and edit an attribute table", "Join an Excel or CSV table", "Create points from coordinates"],
  contenu: `
<p>Right-click a layer &gt; <b>Attribute Table</b>. The table's ☰ menu lets you add a field (<i>Add Field</i>, then <b>Save</b> in the Fields tab), calculate a field (<b>Calculate Field</b>, in Python 3 or Arcade) and calculate geometry (<i>Calculate Geometry</i>: area, length, coordinates).</p>
<h3>Join</h3>
<p>Right-click <code>Communes</code> &gt; <i>Joins and Relates &gt; Add Join</i>. Table: <code>population_communes.xlsx</code> (sheet <code>Population$</code>), common field: <code>CODE</code>. Turn on <i>Keep all target features</i>, then check the join with the <i>Validate Join</i> button.</p>
<h3>XY points</h3>
<p><b>XY Table To Point</b> tool on <code>releves_gps.csv</code>: X = <code>X</code>, Y = <code>Y</code>, system WGS 1984 UTM 30N. With <code>LON</code>/<code>LAT</code>, choose WGS 1984 (GCS).</p>`,
  exercice: `<ol>
  <li>Join the population table to the municipalities, then compute the density (<code>POP_2020 / area in km²</code>) in a new field.</li>
  <li>Create the GPS readings layer from the CSV.</li>
  <li>Select the readings located less than 500 m from a road (<i>Select By Location</i>).</li>
</ol>` };
E["p2-l3"] = { titre: "Digitizing and georeferencing", objectifs: ["Create a feature class and digitize it", "Georeference a scanned map with control points"],
  contenu: `
<p><b>Create a feature class</b>: right-click the geodatabase &gt; <i>New &gt; Feature Class</i> (type, fields, coordinate system). Then <b>Edit &gt; Create</b>: the <i>Create Features</i> pane offers one template per layer. Snapping is set in Edit &gt; <b>Snapping</b>.</p>
<ul>
  <li><b>Edit Vertices</b>, <b>Reshape</b>, <b>Split</b>, <b>Merge</b>: Edit tab, Tools group.</li>
  <li>Remember to <b>Save</b> your edits (Save button of the Edit tab).</li>
</ul>
<h3>Georeferencing</h3>
<p>Add the scanned image, select it in Contents, then <b>Imagery &gt; Georeference</b>. <i>Fit To Display</i> to bring it closer, then <b>Add Control Points</b> (at least 4 to 6 well-spread grid intersections). Check the <b>control point table</b> and the RMS error. Finish with <b>Save as New</b> to create a georeferenced raster.</p>`,
  exercice: `<ol>
  <li>Create the point feature class <code>Puits</code> (fields NOM, PROF_M) and digitize 5 wells.</li>
  <li>Create a polygon class <code>Parcelles</code> and digitize 3 adjoining parcels with snapping on.</li>
  <li>If you have a scanned INCT map, georeference it and write down the RMS error.</li>
</ol>` };

/* ---------- Level 3 ---------- */
E.p3 = { titre: "Symbology, labels and layouts", resume: "Symbology pane, classes, labelling, layouts and PDF export, map series.",
  quiz: [
    { question: "To map population density per municipality, you use:", choix: ["Single symbol", "Unique values", "Graduated colors", "Proportional symbols"], explication: "Relative data (density, rate) are shown with graduated colours." },
    { question: "In ArcGIS Pro, the equivalent of ArcMap's Data Driven Pages is:", choix: ["The map series", "The map frame", "The index layer", "The bookmark"], explication: "A map series generates one page per feature of an index layer." },
    { question: "Where do you export a layout to PDF?", choix: ["Share tab > Export Layout", "Analysis tab", "Catalog pane", "Imagery tab"], explication: "The Share tab groups exports and publishing." },
    { question: "Which element is not essential on a thematic map?", choix: ["Legend", "Scale", "Source", "Satellite basemap"], explication: "Title, legend, scale, orientation and source are expected; the satellite basemap is optional." }
  ] };
E["p3-l1"] = { titre: "Symbology and labels", objectifs: ["Choose a suitable representation method", "Label and handle label conflicts"],
  contenu: `
<p>Select the layer, then <b>Feature Layer &gt; Symbology</b>. The pane offers: <i>Single Symbol</i>, <i>Unique Values</i> (categories), <i>Graduated Colors</i> (choropleth), <i>Graduated</i> or <i>Proportional Symbols</i>, <i>Charts</i>, <i>Heat Map</i>.</p>
<ul>
  <li>Municipal population: <b>Graduated Colors</b> on density (not on raw population), <i>Natural Breaks</i> method, 5 classes.</li>
  <li>Land cover: <b>Unique Values</b> on <code>TYPE</code>, conventional colours (green forest, yellow farmland, red urban).</li>
  <li>Boreholes: <b>Proportional Symbols</b> on <code>DEBIT_LS</code>.</li>
</ul>
<p><b>Labels</b>: <i>Labeling</i> tab, field <code>NOM</code>. <i>Label classes</i> allow different styles based on a query (e.g. main towns in bold). The Maplex engine is used by default; set priority and position in <i>Labeling Properties</i>.</p>`,
  exercice: `<ol>
  <li>Make a choropleth map of population density in 5 classes.</li>
  <li>Symbolize the wadis by the <code>ORDRE</code> field (increasing width).</li>
  <li>Label the municipalities, with a bold label class for <code>CHEF_LIEU = 'Oui'</code>.</li>
</ol>` };
E["p3-l2"] = { titre: "Layout, export and map series", objectifs: ["Compose a complete layout", "Export to PDF or PNG", "Produce one map per municipality automatically"],
  contenu: `
<p><b>Insert &gt; New Layout</b> (A4 or A3, portrait or landscape). Insert a <b>map frame</b>, then from the Insert tab: title, legend, north arrow, scale bar, source text, the ENIV logo picture. Elements are set in the <i>Format</i> pane.</p>
<ul>
  <li>Locator map: insert a second map frame linked to another map of the project and add an <i>extent indicator</i>.</li>
  <li>Export: <b>Share &gt; Export Layout</b> (PDF, PNG 300 dpi…).</li>
</ul>
<h3>Map series</h3>
<p>Layout tab &gt; <b>Map Series &gt; Spatial</b>: index layer = <code>Communes</code>, name field = <code>NOM</code>. Dynamic text shows the page name. The export produces a 9-page PDF, one per municipality. It is the equivalent of ArcMap's Data Driven Pages.</p>`,
  exercice: `<ol>
  <li>Compose an A4 landscape map of the study area with all the required elements.</li>
  <li>Add a locator map with an extent indicator.</li>
  <li>Create a map series by municipality and export it to a multipage PDF.</li>
</ol>` };

/* ---------- Level 4 ---------- */
E.p4 = { titre: "Geoprocessing and spatial analysis", resume: "Geoprocessing pane, buffers, overlays, selection, raster analysis with Spatial Analyst.",
  quiz: [
    { question: "Where do you find the tools already run and their Python command?", choix: ["Analysis > History", "Contents pane", "Share tab", "Symbology pane"], explication: "History keeps each run with its parameters." },
    { question: "Which tool keeps all the parts of two polygon layers?", choix: ["Clip", "Intersect", "Union", "Erase"], explication: "Union keeps everything, with the attributes of both layers." },
    { question: "Which tool counts the boreholes in each municipality?", choix: ["Summarize Within", "Near", "Dissolve", "Merge"], explication: "Summarize Within aggregates features by polygon." },
    { question: "The raster functions of the Imagery tab:", choix: ["Always create a file", "Compute on the fly without writing a file", "Only work in 3D", "Replace the symbology"], explication: "They are computed at display time; you export the result only when needed." }
  ] };
E["p4-l1"] = { titre: "The Geoprocessing pane and buffers", objectifs: ["Find and run a tool, check the history", "Create simple and multiple buffers"],
  contenu: `
<p><b>Analysis &gt; Tools</b> opens the <b>Geoprocessing</b> pane: a search bar (type “buffer”), <i>Favorites</i> and <i>Toolboxes</i>. Each run is kept in <b>Analysis &gt; History</b>: right-click to rerun it or copy the Python command.</p>
<ul>
  <li><b>Buffer</b>: fixed distance or from a field, <i>Dissolve</i> option ALL.</li>
  <li><b>Multiple Ring Buffer</b>: 100, 250, 500 m around the boreholes.</li>
  <li><b>Near</b>: distance from each school to the nearest road, written into the table.</li>
</ul>
<div class="astuce"><b>Tip:</b> the <i>Environments</i> tab of each tool sets the extent, output system and workspace, as in ArcMap.</div>`,
  exercice: `<ol>
  <li>Create a 200 m protection perimeter around the boreholes (dissolved).</li>
  <li>Create 100, 250 and 500 m rings around the schools.</li>
  <li>With <b>Near</b>, give each school the distance to the nearest road.</li>
</ol>` };
E["p4-l2"] = { titre: "Overlays: clip, intersect, union, dissolve", objectifs: ["Choose the right overlay tool", "Produce statistics per zone"],
  contenu: `
<table class="tab">
  <tr><th>Tool</th><th>French name</th><th>Result</th></tr>
  <tr><td>Clip</td><td>Découper</td><td>the input layer limited to an extent</td></tr>
  <tr><td>Intersect</td><td>Intersecter</td><td>the common parts, with the attributes of both layers</td></tr>
  <tr><td>Union</td><td>Agréger</td><td>all the parts of both layers</td></tr>
  <tr><td>Erase</td><td>Effacer</td><td>the input layer minus the extent</td></tr>
  <tr><td>Dissolve</td><td>Fusionner</td><td>groups features with the same value</td></tr>
  <tr><td>Merge</td><td>Combiner</td><td>assembles several layers of the same type</td></tr>
</table>
<p>In ArcGIS Pro, Erase and Intersect are available with a Basic licence (they required Advanced in older ArcMap versions).</p>
<p><b>Summarize Within</b> counts or sums features per polygon: number of boreholes per municipality, road length per municipality.</p>`,
  exercice: `<ol>
  <li>Intersect land cover and municipalities, then dissolve by municipality and type: which municipality has the most forest?</li>
  <li>With Summarize Within, count the boreholes per municipality.</li>
  <li>Erase the urban areas from the borehole protection perimeters.</li>
</ol>` };
E["p4-l3"] = { titre: "Rasters and Spatial Analyst", objectifs: ["Compute slope, aspect and hillshade", "Use the raster calculator and reclassification"],
  contenu: `
<p>Add <code>MNT_50m.asc</code> to the map, then export it to GeoTIFF (right-click &gt; <i>Data &gt; Export Raster</i>) with the WGS 1984 UTM 30N system. Raster tools are in the <b>Spatial Analyst</b> toolbox (licence required) or in <b>Imagery &gt; Raster Functions</b> (computed on the fly, no file).</p>
<ul>
  <li><b>Slope</b> in degrees, <b>Aspect</b>, <b>Hillshade</b>.</li>
  <li><b>Raster Calculator</b>: <code>Con("pente" &gt; 15, 1, 0)</code>.</li>
  <li><b>Reclassify</b>: breaks and new values in a table.</li>
  <li><b>Raster to Polygon</b> and <b>Polygon to Raster</b> to switch between models.</li>
  <li><b>Zonal Statistics as Table</b>: mean elevation per municipality.</li>
</ul>`,
  exercice: `<ol>
  <li>Compute slope and hillshade, then overlay them with transparency.</li>
  <li>Isolate slopes steeper than 15° and convert them to polygons.</li>
  <li>Compute the mean elevation of each municipality.</li>
</ol>` };

/* ---------- Level 5 ---------- */
E.p5 = { titre: "ModelBuilder: spatial modelling and automation", resume: "A five-step programme inspired by the course “ModelBuilder in ArcGIS Pro” by Fathy Geo Code: spatial modelling, tools and variables, iterators, parameters and environments, practical applications.",
  quiz: [
    { question: "In ModelBuilder, a green oval represents:", choix: ["Input data", "A tool", "Derived data (a tool's output)", "An iterator"], explication: "Blue = input, yellow = tool, green = produced data." },
    { question: "How do you use the value of a Distance variable in an output name?", choix: ["#Distance#", "%Distance%", "{Distance}", "$Distance"], explication: "Inline substitution uses percent signs." },
    { question: "Which tool gathers the outputs of an iterator?", choix: ["Collect Values", "Merge", "Dissolve", "Summarize"], explication: "Collect Values groups the outputs; you can then merge them." },
    { question: "How do you make an input appear in the model tool's dialog box?", choix: ["Rename it", "Mark it as a Parameter (P)", "Make it intermediate", "Colour it green"], explication: "Only elements marked P appear in the dialog box." },
    { question: "To keep all rasters of a model aligned, you set in the environments:", choix: ["Cell size and snap raster", "The colour of the elements", "The history", "Only the output folder"], explication: "Cell size and Snap raster guarantee grids that line up." },
    { question: "How many iterators can a model contain?", choix: ["Only one (otherwise a sub-model)", "Two", "Unlimited", "None"], explication: "To nest loops, you place a sub-model inside the main model." }
  ] };
E["p5-l1"] = { titre: "Introduction to spatial modelling and ModelBuilder", objectifs: ["Understand what a spatial model is and why to automate", "Open ModelBuilder and read a model"],
  contenu: `
<p>A <b>spatial model</b> is a sequence of operations that turns input data into a result: for example “DEM → slope → steep-slope areas”. Describing it as a model lets you <b>document</b> it, <b>repeat</b> it identically on other data and <b>share</b> it as a tool.</p>
<p><b>ModelBuilder</b> is ArcGIS Pro's graphical model editor: <b>Analysis &gt; ModelBuilder</b>. The model is saved in a toolbox of the project (<code>TP_ENIV.atbx</code>).</p>
<table class="tab">
  <tr><th>Element</th><th>Shape and colour</th><th>Role</th></tr>
  <tr><td>Input data</td><td>blue oval</td><td>existing layer or file</td></tr>
  <tr><td>Tool</td><td>yellow rectangle (grey if a parameter is missing)</td><td>a geoprocessing tool</td></tr>
  <tr><td>Derived data</td><td>green oval</td><td>output of a tool, reusable by the next one</td></tr>
  <tr><td>Variable</td><td>light blue oval</td><td>a value (distance, threshold, field…)</td></tr>
  <tr><td>Iterator, logic</td><td>orange hexagon</td><td>loops and conditions</td></tr>
</table>
<p>ModelBuilder ribbon buttons: <i>Validate</i> (checks the whole model), <i>Run</i>, <i>Auto Layout</i>, <i>Fit To Window</i>, <i>Intermediate</i> (data marked “intermediate” are deleted after running).</p>`,
  exercice: `<ol>
  <li>Create a new model and rename it “Pente_forte” (right-click &gt; Properties in the Catalog).</li>
  <li>Drag the <b>Slope</b> tool from the Geoprocessing pane and watch its colour before and after linking the DEM.</li>
  <li>Write on paper the steps of a model that would find the schools located less than 300 m from a wadi.</li>
</ol>` };
E["p5-l2"] = { titre: "Building a model with tools and variables", objectifs: ["Chain several tools", "Create variables and link them to tools", "Use inline variable substitution"],
  contenu: `
<h3>Chaining tools</h3>
<p>Add <code>Forages</code> to the model, then the <b>Buffer</b> tool; link them with the <i>Connect</i> tool. Add <b>Erase</b> (urban areas of <code>Occupation_sol</code>), then <b>Summarize Within</b> (by <code>Communes</code>). The green output of each tool becomes the input of the next.</p>
<h3>Variables</h3>
<ul>
  <li>Right-click a tool &gt; <b>Create Variable &gt; From Parameter &gt; Distance</b>: the distance becomes an oval you can change without opening the tool.</li>
  <li>A variable can feed several tools (the same distance for two buffers).</li>
  <li><b>Inline substitution</b>: write a variable name between <code>%</code> signs in a path. Output example: <code>%scratchGDB%\\Tampon_%Distance%</code>. Useful system variables: <code>%scratchGDB%</code>, <code>%scratchFolder%</code>, <code>%n%</code> (iteration number).</li>
</ul>
<div class="astuce"><b>Good practice:</b> rename each element (right-click &gt; Rename) with a meaningful name, and mark intermediate outputs as <i>Intermediate</i> so that only the final result is kept.</div>`,
  exercice: `<ol>
  <li>Build the model Forages → Buffer → Erase (urban) → Summarize Within (municipalities).</li>
  <li>Create a <code>Distance</code> variable and use it in the output name.</li>
  <li>Run it with 200 m then 500 m and compare the number of protected boreholes per municipality.</li>
</ol>` };
E["p5-l3"] = { titre: "Iterators: repeating a process", objectifs: ["Choose the right iterator", "Produce one output per feature, value or file", "Gather the results of a loop"],
  contenu: `
<p>ModelBuilder tab &gt; <b>Iterators</b>. The iterator runs as many times as there are items, and provides a value at each pass (often named <code>Value</code> or <code>Name</code>).</p>
<table class="tab">
  <tr><th>Iterator</th><th>Example with the practical data</th></tr>
  <tr><td>Iterate Field Values</td><td>one output per municipality (<code>Communes.NOM</code>)</td></tr>
  <tr><td>Iterate Features / Iterate Row Selection</td><td>process each basin or each school separately</td></tr>
  <tr><td>Iterate Feature Classes</td><td>clip every shapefile of a folder by the study area</td></tr>
  <tr><td>Iterate Rasters</td><td>compute the slope of several DEMs</td></tr>
  <tr><td>For / While</td><td>test several thresholds: 200, 400, 600… cells</td></tr>
</table>
<p>Example: <b>Iterate Field Values</b> (<code>Communes</code>, field <code>NOM</code>) → <b>Select Layer By Attribute</b> → <b>Clip</b> (<code>Forages</code>) → output <code>%scratchGDB%\\Forages_%Value%</code>.</p>
<p><b>Collect Values</b> gathers all the outputs of the loop; then link it to <b>Merge</b> to get a single layer. A model contains only one iterator: to nest two loops, place a <b>sub-model</b> inside the main model.</p>`,
  exercice: `<ol>
  <li>Create a model that clips the boreholes for each municipality.</li>
  <li>Add Collect Values then Merge to group the result.</li>
  <li>With a <b>For</b> iterator (from 200 to 1000, step 200), extract five stream networks with different thresholds.</li>
</ol>` };
E["p5-l4"] = { titre: "Parameters and environments", objectifs: ["Turn a model into a tool with parameters", "Set environments at model or tool level", "Add conditions and messages"],
  contenu: `
<h3>Model parameters</h3>
<p>Right-click an input, a variable or the final output &gt; <b>Parameter</b>: a “P” appears. In <i>Model Properties &gt; Parameters</i>, set the order, display name, type, default value and a <b>filter</b> (for example a value list or a 100–1000 m range). Then double-click the model in the Catalog: it opens like any other tool.</p>
<h3>Environments</h3>
<ul>
  <li><b>For the whole model</b>: Model Properties &gt; Environments (extent, output coordinate system, cell size, snap raster, mask).</li>
  <li><b>For a single tool</b>: double-click the tool &gt; Environments tab.</li>
  <li>For rasters, always set <i>Cell Size</i> and <i>Snap Raster</i> to the DEM: all grids stay aligned.</li>
</ul>
<h3>Conditions</h3>
<p>The <b>Logical</b> menu offers <i>If Data Exists</i>, <i>If Row Count Is</i>, <i>If Value Is</i>, <i>Stop</i>… Example: only run the clip if the selection contains at least one feature. <b>Preconditions</b> (right-click &gt; Properties &gt; Preconditions) force the run order.</p>`,
  exercice: `<ol>
  <li>Expose as parameters: the input layer, the distance (filter 50–1000 m) and the output.</li>
  <li>Set the output system WGS 1984 UTM 30N and the study-area extent in the model environments.</li>
  <li>Add an <i>If Row Count Is</i> &gt; 0 condition before the clip.</li>
</ol>` };
E["p5-l5"] = { titre: "Practical case: DEM → Clip → Reclassify → Raster Calculator", objectifs: ["Build a raster model from end to end", "Parameterise it, run it on other areas and export it to Python"],
  contenu: `
<p>Goal: produce the map of <b>land unsuitable for building</b> (steep slope or valley bottom) in a municipality, with a reusable model.</p>
<ol>
  <li><b>Input raster</b>: <code>MNT_50m</code> (parameter).</li>
  <li><b>Clip Raster</b> by the chosen municipality (parameter: polygon), with <i>Use Input Features for Clipping Geometry</i> ticked.</li>
  <li><b>Slope</b> (degrees) on the clipped DEM.</li>
  <li><b>Reclassify</b> the slope: 0–5° → 1, 5–15° → 2, 15–25° → 3, over 25° → 4.</li>
  <li><b>Raster Calculator</b>: combine with relative elevation, for example <code>Con(("pente_cl" &gt;= 3) | ("mnt_dec" &lt; %Seuil_alt%), 1, 0)</code>, where <code>Seuil_alt</code> is a model variable.</li>
  <li><b>Output</b>: <code>%scratchGDB%\\Contraintes_%Commune%</code>, then <b>Raster to Polygon</b> to compute the affected area.</li>
</ol>
<p>Variants with the level 7 and 8 data: chain Fill → Flow Direction → Flow Accumulation → Raster Calculator (threshold) for a “stream network” model, or Euclidean Distance → Reclassify → Weighted Sum for a risk model.</p>
<p>Finish with <b>Export &gt; Export To Python File</b>: the generated code is the bridge to level 6 (ArcPy).</p>`,
  exercice: `<ol>
  <li>Build the complete model with three parameters: DEM, municipality, elevation threshold.</li>
  <li>Add an <b>Iterate Field Values</b> iterator to produce the map of all municipalities in one run.</li>
  <li>Export the model to Python and compare the script with <code>07_zones_inondables.py</code>.</li>
</ol>` };

/* ---------- Level 6 ---------- */
E.p6 = { titre: "ArcPy in Python 3 and notebooks", resume: "Python window, notebooks, stand-alone scripts, cursors, arcpy.mp and script tools.",
  quiz: [
    { question: "Which module replaces arcpy.mapping in ArcGIS Pro?", choix: ["arcpy.da", "arcpy.mp", "arcpy.sa", "arcpy.na"], explication: "arcpy.mp handles projects, maps, layers and layouts." },
    { question: "How do you reference the open project in a notebook?", choix: ["arcpy.mp.ArcGISProject(\"CURRENT\")", "arcpy.mapping.MapDocument()", "arcpy.env.workspace", "arcpy.GetProject()"], explication: "\"CURRENT\" refers to the project open in the application." },
    { question: "Which syntax is specific to Python 3?", choix: ["print \"text\"", "f\"{nom}\"", "u\"text\"", "xrange()"], explication: "f-strings do not exist in Python 2.7." },
    { question: "Which program runs an ArcPy script outside the application?", choix: ["python27.exe", "propy.bat", "arcmap.exe", "qgis.bat"], explication: "propy.bat activates the ArcGIS Pro Python environment." }
  ] };
E["p6-l1"] = { titre: "Python window and notebooks", objectifs: ["Run tools in Python inside ArcGIS Pro", "Use a Jupyter notebook built into the project"],
  contenu: `
<p><b>Analysis &gt; Python</b> offers the <b>Python window</b> and <b>notebooks</b> (built-in Jupyter, an <code>.ipynb</code> file stored in the project). <code>arcpy</code> is already imported and the layers of the active map can be used by name.</p>
<!--code:0-->
<p>ArcGIS Pro writes tools as <code>arcpy.toolbox.Tool</code> (e.g. <code>arcpy.analysis.Clip</code>, <code>arcpy.management.Project</code>). The old <code>Clip_analysis</code> form still works.</p>
<p>Differences from ArcMap's Python 2.7: <code>print()</code> with parentheses, Unicode strings by default (accents are no longer a problem), <code>/</code> division always gives decimals.</p>`,
  exercice: `<ol>
  <li>In a notebook, run a buffer and print the number of features.</li>
  <li>Right-click a tool in the history &gt; <i>Copy Python Command</i> and paste it into the notebook.</li>
</ol>` };
E["p6-l2"] = { titre: "Scripts, loops and cursors", objectifs: ["Write a stand-alone script run with the arcgispro-py3 environment", "Read and edit attributes with arcpy.da"],
  contenu: `
<p>A stand-alone script runs with <code>propy.bat</code> (installed with ArcGIS Pro) or from an editor set to the <code>arcgispro-py3</code> environment.</p>
<!--code:0-->
<p><b>f-strings</b> (<code>f"{fc} : {n}"</code>) are specific to Python 3. Scripts 01 to 03 of the ArcMap course also work in ArcGIS Pro, provided you add parentheses to <code>print</code> if needed.</p>`,
  exercice: `<ol>
  <li>List all the layers of the Shapefiles folder with their number of features.</li>
  <li>With a SearchCursor, compute the mean discharge of the operating boreholes.</li>
  <li>Run the script with <code>propy.bat</code> from the command prompt.</li>
</ol>` };
E["p6-l3"] = { titre: "Automating layouts with arcpy.mp and creating a script tool", objectifs: ["Handle a project, its maps and layouts in Python", "Turn a script into a toolbox tool"],
  contenu: `
<p><code>arcpy.mp</code> replaces ArcMap's <code>arcpy.mapping</code>.</p>
<!--code:0-->
<h3>Script tool</h3>
<p>In the Catalog, right-click the toolbox &gt; <i>New &gt; Script</i>. Point to the .py file and define the parameters (type, direction, default value). In the script, read them with <code>arcpy.GetParameterAsText(0)</code> and show messages with <code>arcpy.AddMessage()</code>.</p>`,
  exercice: `<ol>
  <li>Create a layout with a text element named “Titre”, then export one PDF map per municipality with the script above.</li>
  <li>Turn the script <code>05_outil_zone_protection.py</code> into a script tool with two parameters.</li>
</ol>` };

/* ---------- Level 7 ---------- */
E.p7 = { titre: "DEM, hydrology and floods", resume: "The Spatial Analyst Hydrology toolset in ArcGIS Pro: fill, flow, network, watershed, flood-prone areas.",
  quiz: [
    { question: "In ArcGIS Pro, which flow direction type matches ArcMap's classic model?", choix: ["MFD", "DINF", "D8", "HAND"], explication: "D8 sends all the water to a single neighbouring cell." },
    { question: "Where are Fill, Flow Direction and Watershed?", choix: ["Spatial Analyst > Hydrology", "Analysis > Proximity", "Data Management > Raster", "3D Analyst > Visibility"], explication: "They are the tools of the Spatial Analyst Hydrology toolset." },
    { question: "Scripts 06 and 07 of the ArcMap course in ArcGIS Pro:", choix: ["Do not work", "Work as they are", "Require arcpy.mapping", "Require QGIS"], explication: "They use print() and arcpy.sa, which are compatible with Python 3." },
    { question: "Which ArcGIS Pro tool lets you set the weights of a multi-criteria analysis interactively?", choix: ["Suitability Modeler", "Map series", "Georeference", "Notebook"], explication: "The Suitability Modeler shows the result at each change of weight." }
  ] };
E["p7-l1"] = { titre: "From the DEM to the stream network", objectifs: ["Prepare the DEM and correct the sinks", "Compute flow direction and accumulation", "Extract and order the network"],
  contenu: `
<p>The method is the same as in ArcMap (see level 7 of the ArcMap course for the theory). The tools are in <b>Spatial Analyst &gt; Hydrology</b>.</p>
<ol>
  <li><b>Fill</b> the DEM → <code>fill.tif</code>.</li>
  <li><b>Flow Direction</b>: choose the <b>D8</b> type (ArcGIS Pro also offers MFD and DINF).</li>
  <li><b>Flow Accumulation</b>.</li>
  <li><b>Raster Calculator</b>: <code>Con("facc.tif" &gt; 400, 1)</code> (1 km² with 50 m cells).</li>
  <li><b>Stream Order</b> (Strahler), then <b>Stream to Feature</b>.</li>
</ol>
<div class="astuce"><b>Faster:</b> ArcGIS Pro 3.x also offers <b>Derive Continuous Flow</b> then <b>Derive Stream As Line</b>, which chain several steps. Do the step-by-step method first to understand it.</div>
<p>The script <code>06_hydrologie.py</code> works as it is in ArcGIS Pro (Python 3): open it in a notebook or run it with <code>propy.bat</code>.</p>`,
  exercice: `<ol>
  <li>Chain Fill, Flow Direction (D8) and Flow Accumulation.</li>
  <li>Extract the network with a 400-cell threshold and compute the Strahler order.</li>
  <li>Build these steps in a ModelBuilder model with the threshold as a parameter.</li>
</ol>` };
E["p7-l2"] = { titre: "Watershed and flood-prone areas", objectifs: ["Delineate the watershed of the Tamda wadi", "Map flood susceptibility and the exposed assets"],
  contenu: `
<h3>Watershed</h3>
<p><b>Snap Pour Point</b> (150 m) on <code>Risques\\Exutoire.shp</code>, then <b>Watershed</b> and <b>Raster to Polygon</b>. Compute the area with <i>Calculate Geometry</i> (km²) and the Gravelius index <code>Kc = 0.28 · P / √A</code> in the field calculator.</p>
<h3>Flood-prone areas</h3>
<p>Same approach as in ArcMap: height above the wadi (HAND) with <b>Euclidean Allocation</b>, distance to the wadi, slope, accumulation and land cover, each scored from 1 to 5, then <b>Weighted Sum</b> (35, 25, 20, 10, 10 %). In ArcGIS Pro, <b>Analysis &gt; Suitability Modeler</b> also lets you set criteria and weights interactively, with an immediate preview.</p>
<p>Validate with <code>Laisses_crues.shp</code> (<b>Extract Values to Points</b>) and list the schools in the high class. The script <code>07_zones_inondables.py</code> does all this work.</p>`,
  exercice: `<ol>
  <li>Delineate the watershed and compute its area and Gravelius index.</li>
  <li>Build the flood susceptibility map and validate it with the flood marks.</li>
  <li>Redo the weighting in the Suitability Modeler and compare the two maps.</li>
</ol>` };

/* ---------- Level 8 ---------- */
E.p8 = { titre: "Vulnerability to major natural hazards", resume: "Forest fires, earthquakes, tsunamis, landslides and a multi-hazard summary with ArcGIS Pro.",
  quiz: [
    { question: "Which tool turns a continuous value into a score without creating steps?", choix: ["Reclassify", "Rescale by Function", "Zonal Statistics", "Clip"], explication: "Rescale by Function applies a continuous function (linear, logistic…)." },
    { question: "In Weighted Overlay, the % influence values add up to:", choix: ["1", "10", "100", "Anything"], explication: "The influence percentages must total 100." },
    { question: "Which tool gives the highest class among several hazard maps?", choix: ["Cell Statistics (MAXIMUM)", "Mosaic", "Combine", "Dissolve"], explication: "Cell Statistics computes cell by cell over several rasters." },
    { question: "To better show a flooded area, ArcGIS Pro offers:", choix: ["A local 3D scene", "An .mxd file", "ArcScene", "Georeferencing"], explication: "3D scenes are built into the project." }
  ] };
E["p8-l1"] = { titre: "Multi-criteria in ArcGIS Pro: Weighted Overlay and Suitability Modeler", objectifs: ["Prepare and score the criteria of a hazard", "Combine the criteria and justify the weights"],
  contenu: `
<p>Reminder: <b>risk = hazard × vulnerability of the assets</b> (see ArcMap level 8, lesson 1, and law 04-20). The steps are identical in ArcGIS Pro:</p>
<ol>
  <li>Prepare each criterion: <b>Euclidean Distance</b>, <b>Slope</b>, <b>Aspect</b>, <b>Polygon to Raster</b>, <b>Kernel Density</b>…</li>
  <li>Score from 1 to 5 with <b>Reclassify</b> or <b>Rescale by Function</b>, which turns a continuous value into a score without creating steps.</li>
  <li>Combine with <b>Weighted Overlay</b> (% influence = 100), <b>Weighted Sum</b>, or the <b>Suitability Modeler</b>.</li>
  <li>Split the index into 5 classes and validate with the observed events.</li>
</ol>
<p>The proposed weights are in <code>Tables\\poids_multicritere.xlsx</code>. The table opens directly in ArcGIS Pro (Add Data &gt; Excel sheet).</p>`,
  exercice: `<ol>
  <li>Open the “Feux de forêt” (forest fires) sheet of the weights table in ArcGIS Pro.</li>
  <li>Compare Reclassify and Rescale by Function on the “distance to roads” criterion.</li>
</ol>` };
E["p8-l2"] = { titre: "Hazard maps: fires, earthquakes, tsunamis, landslides", objectifs: ["Produce the four hazard maps with the practical data", "Validate each map with the observed events"],
  contenu: `
<table class="tab">
  <tr><th>Hazard</th><th>Criteria (weights)</th><th>Validation</th><th>Script</th></tr>
  <tr><td>Forest fires</td><td>land cover 35, slope 20, aspect 15, roads 15, inhabited places 15</td><td>Foyers_incendies</td><td>08_risque_feux.py</td></tr>
  <tr><td>Earthquake</td><td>active faults 40, epicentre density 25, site effect (AMPLIF) 25, slope 10</td><td>—</td><td>09_risque_sismique.py</td></tr>
  <tr><td>Tsunami</td><td>elevation 50, distance to the coast 35, slope 15 + 5 m wave scenario</td><td>Enjeux_cote</td><td>10_tsunami.py</td></tr>
  <tr><td>Landslides</td><td>lithology (SUSC_GLIS) 35, slope 30, wadis 15, land cover 10, roads 10</td><td>Glissements</td><td>11_glissements.py</td></tr>
</table>
<p>Scripts 08 to 11 and <code>outils_risques.py</code> run in ArcGIS Pro without changes. To understand them, first redo at least one map by hand with the Geoprocessing pane.</p>
<div class="astuce"><b>In ArcGIS Pro:</b> for the tsunami, show <code>submersion_5m.tif</code> in a <b>local scene</b> above the coastal DEM: the flooded area is far clearer in 3D.</div>`,
  exercice: `<ol>
  <li>Make the fire risk map by hand, then compare with the result of script 08.</li>
  <li>Run scripts 09, 10 and 11 in a notebook.</li>
  <li>Show the 5 m wave scenario in 3D and list the assets hit.</li>
</ol>` };
E["p8-l3"] = { titre: "Multi-hazard summary and dashboard", objectifs: ["Combine the hazards into a summary", "Present the results per municipality"],
  contenu: `
<p><b>Cell Statistics</b> (MAXIMUM) gives the highest hazard of each cell; the sum of <code>Con(classe &gt;= 4, 1, 0)</code> gives the number of high hazards. <b>Zonal Statistics as Table</b> per municipality, then a join with <code>Communes</code> (script <code>12_synthese_multirisque.py</code>).</p>
<p>Presentation in ArcGIS Pro:</p>
<ul>
  <li><b>Charts</b>: right-click the layer &gt; <i>Create Chart &gt; Bar Chart</i> of the mean number of high hazards per municipality.</li>
  <li><b>A3 layout</b> with the multi-hazard map, the map per municipality and the chart.</li>
  <li>Mandatory statement: <i>fictional data for teaching purposes</i>.</li>
</ul>`,
  exercice: `<ol>
  <li>Produce the maximum-hazard and count maps.</li>
  <li>Create a bar chart per municipality and insert it into an A3 layout.</li>
</ol>` };

/* ---------- Level 9 ---------- */
E.p9 = { titre: "AI in ArcGIS Pro with MCP", resume: "Connect Claude to ArcGIS Pro through the MCP protocol, drive a project in plain language on the Tlemcen data, and stay in control of the results.",
  quiz: [
    { question: "With MCP-ArcGISPro, what must you start in ArcGIS Pro at each session?", choix: ["Nothing", "The Start MCP Bridge tool from MCP_Bridge.pyt", "ArcCatalog", "The Python window alone"], explication: "The bridge receives Claude's commands and runs them in the open project." },
    { question: "Which tool runs any arcpy tool?", choix: ["list_layers", "run_geoprocessing", "zoom_to_layer", "save_project"], explication: "run_geoprocessing takes the tool name (analysis.Buffer…) and its parameters." },
    { question: "Why use the fictitious lab data with an AI assistant?", choix: ["It is faster", "What the AI reads is sent to the AI service", "ArcGIS Pro requires it", "To avoid projection errors"], explication: "Never send confidential or personal data to an external service." },
    { question: "Why does this level not exist for ArcMap 10.8?", choix: ["ArcMap has no maps", "There is no MCP server for ArcMap (Python 2.7)", "ArcMap is paid software", "Claude refuses ArcMap"], explication: "MCP servers target ArcGIS Pro and its Python 3." }
  ] };
E["p9-l1"] = { titre: "Understand MCP and connect ArcGIS Pro", objectifs: ["Understand the roles of the client, the MCP server and the bridge in ArcGIS Pro", "Install MCP-ArcGISPro and connect it to Claude Desktop", "Start the bridge at each session"],
  contenu: `
<p><b>MCP</b> (<i>Model Context Protocol</i>) is an open protocol that lets an AI assistant use <b>tools</b> provided by a piece of software. The assistant no longer just explains: it can ask ArcGIS Pro to add a layer, run a geoprocessing tool or export a layout.</p>
<table class="tab">
  <tr><th>Component</th><th>Role</th></tr>
  <tr><td><b>MCP client</b></td><td><b>Claude Desktop</b>, where you type your requests.</td></tr>
  <tr><td><b>MCP server</b></td><td>A Python program started by Claude Desktop, describing the available tools.</td></tr>
  <tr><td><b>ArcGIS Pro bridge</b></td><td>A toolbox run inside ArcGIS Pro: it executes the commands with arcpy in the open project.</td></tr>
</table>
<p>We use the open-source <b>MCP-ArcGISPro</b> project (github.com/geo2004/MCP-ArcGISPro, MIT licence), tested by its author on ArcGIS Pro 3.6. It is a community project, not official from Esri or Anthropic. ArcMap 10.8 (Python 2.7) has no MCP server: this level is done in ArcGIS Pro or in QGIS.</p>
<h3>Installation</h3>
<ol>
  <li>Install <b>Claude Desktop</b> (claude.ai/download) and sign in.</li>
  <li>Install the <b>uv</b> package manager. In PowerShell:<br><code>powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code></li>
  <li>On the project's GitHub page, <i>Code &gt; Download ZIP</i>, then unzip it to <code>C:\\ENIV\\mcp\\MCP-ArcGISPro</code>.</li>
  <li>In Claude Desktop: <i>Settings &gt; Developer &gt; Edit Config</i>. Paste this block into <code>claude_desktop_config.json</code>, replacing <code>VOTRE_NOM</code> with your Windows user name (file <code>mcp_arcgispro_config.json</code> in Downloads):</li>
</ol>
<!--code:0-->
<h3>At each session</h3>
<ol>
  <li>Open ArcGIS Pro, the <code>TP_ENIV.aprx</code> project and a map.</li>
  <li><i>Catalog</i> pane &gt; <i>Toolboxes &gt; Add Toolbox</i>: <code>C:\\ENIV\\mcp\\MCP-ArcGISPro\\MCP_Bridge.pyt</code>, then run <b>Start MCP Bridge</b>.</li>
  <li>Restart Claude Desktop (the first time) and type: “Check the connection with ArcGIS Pro (ping) and give me the name of the active map.”</li>
</ol>`,
  exercice: `
<ol>
  <li>Install Claude Desktop, uv and MCP-ArcGISPro.</li>
  <li>Start the bridge in ArcGIS Pro and run the “ping” test.</li>
  <li>Ask Claude for the list of maps and layouts in the project.</li>
</ol>` };
E["p9-l2"] = { titre: "Lab: drive ArcGIS Pro in plain language", objectifs: ["Know the tools exposed by MCP-ArcGISPro", "Carry out a full analysis on the Tlemcen data through written requests", "Check every result in ArcGIS Pro"],
  contenu: `
<p>MCP-ArcGISPro offers 32 tools. Claude picks the right tool and Claude Desktop asks for your permission before each use.</p>
<table class="tab">
  <tr><th>Group</th><th>Tools</th></tr>
  <tr><td>Project and maps</td><td><code>get_project_info</code>, <code>save_project</code>, <code>get_active_map_name</code>, <code>create_map</code></td></tr>
  <tr><td>Layers</td><td><code>list_layers</code>, <code>add_vector_layer</code>, <code>add_raster_layer</code>, <code>remove_layer</code>, <code>zoom_to_layer</code>, <code>set_layer_visibility</code></td></tr>
  <tr><td>Data</td><td><code>describe_data</code>, <code>list_fields</code>, <code>get_layer_features</code>, <code>get_unique_values</code>, <code>set_workspace</code>, <code>list_feature_classes</code>, <code>list_rasters</code></td></tr>
  <tr><td>Selection and editing</td><td><code>select_by_attribute</code>, <code>count_features</code>, <code>clear_selection</code>, <code>update_features</code></td></tr>
  <tr><td>Geoprocessing</td><td><code>run_geoprocessing</code>: any arcpy tool (<code>analysis.Buffer</code>, <code>sa.Slope</code>…)</td></tr>
  <tr><td>Layouts</td><td><code>list_layouts</code>, <code>create_layout</code>, <code>export_layout</code></td></tr>
</table>
<h3>Lab scenario (Tlemcen data)</h3>
<ol>
  <li>“Set the workspace to <code>C:/ENIV/TP/Shapefiles</code> and list the feature classes.”</li>
  <li>“Add Communes and Forages to the map. What is the coordinate system of each one?”</li>
  <li>“Select the boreholes whose ETAT is Exploité and count them.”</li>
  <li>“Create a 200 m buffer around the boreholes, dissolving all features, in <code>TP_ENIV.gdb</code>.”</li>
  <li>“Count the boreholes per commune (Summarize Within).”</li>
  <li>“Compute the slope of the DEM <code>C:/ENIV/TP/MNT/MNT_50m.asc</code> in degrees.” (Spatial Analyst extension required)</li>
  <li>“Create an A4 layout with the map and export it as PNG to <code>C:/ENIV/TP/Sorties/forages_ia.png</code>.”</li>
  <li>“Give me the arcpy script that redoes these steps.” Compare it with your level 6 scripts.</li>
</ol>
<div class="astuce"><b>Check:</b> open the attribute table of the results, check the coordinate system (WGS 1984 UTM 30N) and the units, and redo one step by hand to compare.</div>`,
  exercice: `
<ol>
  <li>Carry out the full scenario and attach the PNG map to your report.</li>
  <li>Note the misunderstood requests and rephrase them.</li>
  <li>Do the same lab in QGIS (level 9 of the QGIS course) and compare.</li>
</ol>` };
E["p9-l3"] = { titre: "Headless variant, limits and security", objectifs: ["Know a variant that works without opening ArcGIS Pro", "Stay in control of what the assistant runs"],
  contenu: `
<h3>Variant: arcgis-mcp-bridge</h3>
<p>The <b>arcgis-mcp-bridge</b> project (PyPI, Apache-2.0 licence, Windows, licensed ArcGIS Pro) runs arcpy in the background, with no interface. It offers about a hundred geoprocessing tools. Installation: <code>py -m pip install --upgrade arcgis-mcp-bridge</code>, then <code>py -m arcgis_mcp.setup_env</code>, which creates a dedicated Python environment. In the Claude Desktop configuration, limit the accessible folders with <code>"ARCGIS_MCP_ALLOWED_ROOTS": "C:\\\\ENIV\\\\TP"</code>. Destructive tools (deleting a dataset, calculating a field…) require explicit confirmation.</p>
<h3>Good practice</h3>
<ul>
  <li><b>Permissions</b>: read each tool request in Claude Desktop and prefer “Allow once”.</li>
  <li><b>Python code</b>: the <code>execute_python</code> tool of MCP-ArcGISPro is disabled by default. Keep it disabled in the lab.</li>
  <li><b>Data</b>: what Claude reads is sent to the AI service. Use the fictitious lab data, never confidential or personal data.</li>
  <li><b>Checking</b>: the AI can be confidently wrong (wrong layer, units, coordinate system). Check every result.</li>
  <li><b>Reproducibility</b>: ask for the arcpy script or build a ModelBuilder model (level 5).</li>
  <li><b>Working copy</b>: work on a copy of <code>C:\\ENIV\\TP</code> and save the project before each important request.</li>
</ul>
<p>AI speeds up repetitive steps, but choosing the criteria and weights and interpreting a hazard map remain your work as an engineer.</p>`,
  exercice: `
<ol>
  <li>Ask Claude to reclassify the slope into 5 classes and check the class breaks in the symbology.</li>
  <li>Write 5 lines on the benefits and risks of AI for a GIS consultancy.</li>
</ol>` };
