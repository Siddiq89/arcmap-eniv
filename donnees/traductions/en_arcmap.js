/* Traduction en du parcours arcmap */
window.TRAD = window.TRAD || {};
window.TRAD.en = window.TRAD.en || {};
var E = window.TRAD.en;
E.arcmap = { accroche: "ArcMap 10.8, from your first map to hazard mapping",
  lead: "A step-by-step course to learn ArcMap with its toolboxes: interface, data, symbology, geoprocessing with ArcToolbox, ModelBuilder, Python programming, then hydrology from the DEM and vulnerability maps for natural hazards (floods, forest fires, earthquakes, tsunamis, landslides). Each lesson has an exercise, videos and an end-of-level quiz." };
E.pro = { accroche: "ArcGIS Pro, from your first project to hazard mapping",
  lead: "The same course adapted to ArcGIS Pro: projects and the ribbon, data and geodatabases, symbology and layouts, geoprocessing, ModelBuilder, ArcPy in Python 3 and notebooks, then hydrology from the DEM and vulnerability maps for natural hazards. The practical data are shared by the three programs." };
E.qgis = { accroche: "QGIS, the free GIS, from the basics to hazard mapping",
  lead: "The same course with QGIS, free and open source: project and panels, data and CRS, symbology and layouts, the processing toolbox, the graphical modeler, PyQGIS, then hydrology with GRASS and vulnerability maps for natural hazards. Ideal for working at home without a licence. The practical data are shared by the three programs." };

/* ---------- Level 1 ---------- */
E.n1 = { titre: "Discovering ArcMap", resume: "The ArcMap and ArcCatalog interface, the table of contents, the views and the map document (.mxd).",
  quiz: [
    { question: "What does an .mxd file contain?", choix: ["The geographic data themselves", "Links to the data, the symbology and the layout", "Only the layout", "A compressed copy of the geodatabase"], explication: "The .mxd references the data; it does not contain them. Hence the value of relative paths." },
    { question: "In the table of contents, which layer is drawn on top of the others?", choix: ["The last one in the list", "The one at the top of the list", "Always the most recently added", "The one with the most features"], explication: "Drawing order follows the list: the top layer is drawn last, so it appears on top." },
    { question: "Which tool lets you read a feature's attributes by clicking on it?", choix: ["Select", "Measure", "Identify", "Pan"], explication: "The Identify tool (the “i”) shows the attributes of the clicked feature." },
    { question: "Which application is mainly used to manage files and geodatabases?", choix: ["ArcCatalog", "ArcScene", "ModelBuilder", "ArcGlobe"], explication: "ArcCatalog (or the Catalog window in ArcMap) is used to browse and manage data." }
  ] };
E["n1-l1"] = { titre: "ArcGIS Desktop: the applications", objectifs: ["Tell ArcMap, ArcCatalog and ArcToolbox apart", "Start ArcMap and open a map document"],
  contenu: `
<p>ArcGIS Desktop 10.8 brings together several applications that work together:</p>
<ul>
  <li><b>ArcMap</b>: display, analyse and edit data, and produce maps.</li>
  <li><b>ArcCatalog</b> (or the <b>Catalog window</b> in ArcMap): browse, create, copy and document data.</li>
  <li><b>ArcToolbox</b>: the collection of geoprocessing tools, available from ArcMap and ArcCatalog.</li>
</ul>
<p>An ArcMap project is saved in a <b>map document</b> with the <code>.mxd</code> extension. This file does <b>not</b> contain the data: it only holds <i>links</i> to them, plus the symbology and the layout.</p>
<div class="astuce"><b>Remember:</b> if you move your data after saving the .mxd, the layers show a red exclamation mark. Turn on <i>File &gt; Map Document Properties &gt; Store relative pathnames</i> to avoid this.</div>`,
  exercice: `<ol>
  <li>Start ArcMap and choose <i>Blank Map</i>.</li>
  <li>Open the Catalog window (<i>Windows &gt; Catalog</i>).</li>
  <li>Create a <b>folder connection</b> to your practical folder (<code>C:\\ENIV\\TP</code>).</li>
  <li>Save the document as <code>TP1_decouverte.mxd</code> with relative paths turned on.</li>
</ol>` };
E["n1-l2"] = { titre: "The ArcMap interface", objectifs: ["Find the table of contents, the toolbars and the map window", "Navigate the map: zoom, pan, full extent"],
  contenu: `
<p>The ArcMap screen is made of:</p>
<ul>
  <li>the <b>table of contents</b> (on the left), which lists the layers; drawing order goes from top (above) to bottom (below);</li>
  <li>the <b>map window</b>, which displays the layers;</li>
  <li>the <b>toolbars</b>: <i>Standard</i>, <i>Tools</i> (navigation, identify, select), <i>Draw</i>, <i>Editor</i>… (right-click an empty area to show them);</li>
  <li>the <b>status bar</b> at the bottom, which shows the cursor coordinates.</li>
</ul>
<p>Essential navigation tools: <b>Zoom In/Out</b>, <b>Pan</b> (the hand), <b>Full Extent</b> (the globe), <b>Previous/Next Extent</b>, and <b>Identify</b> (the “i”) to read a feature's attributes.</p>
<div class="astuce"><b>Tip:</b> the mouse wheel zooms, and holding the wheel down pans the map, whatever tool is active.</div>`,
  exercice: `<ol>
  <li>Add a layer with the <b>Add Data</b> button (the yellow “+”).</li>
  <li>Zoom into an area, then go back to the full extent.</li>
  <li>Use the <b>Identify</b> tool on three features and write down an attribute value.</li>
  <li>Change the order of the layers in the table of contents by drag and drop.</li>
</ol>` };
E["n1-l3"] = { titre: "Data view and layout view", objectifs: ["Switch between data view and layout view", "Understand the role of the data frame"],
  contenu: `
<p>ArcMap offers two views (buttons at the bottom left of the map window, or the <i>View</i> menu):</p>
<ul>
  <li><b>Data view</b>: to explore, analyse and edit.</li>
  <li><b>Layout view</b>: to compose the printed map (title, legend, scale bar, north arrow).</li>
</ul>
<p>Layers are stored in a <b>data frame</b> (<i>Layers</i> by default). A document can hold several data frames, for example a main map and a locator map.</p>
<p>The display <b>coordinate system</b> is a property of the data frame (right-click &gt; <i>Properties &gt; Coordinate System</i>). It is set by the first layer added.</p>`,
  exercice: `<ol>
  <li>Switch to layout view, then back to data view.</li>
  <li>Open the data frame properties and write down its coordinate system.</li>
  <li>Insert a second data frame (<i>Insert &gt; Data Frame</i>) and rename it “Situation”.</li>
</ol>` };

/* ---------- Level 2 ---------- */
E.n2 = { titre: "Geographic data", resume: "Vector and raster formats, geodatabases, coordinate systems (UTM 30N, Nord Sahara 1959), attribute tables, selections, digitizing and georeferencing.",
  quiz: [
    { question: "Which tool transforms a layer from WGS 1984 to UTM?", choix: ["Define Projection", "Project", "Calculate Geometry", "Georeferencing"], explication: "“Project” recalculates the coordinates. “Define Projection” only declares the system." },
    { question: "A satellite image is…", choix: ["point vector data", "polygon vector data", "raster data", "tabular data"], explication: "An image is a grid of pixels: it is a raster." },
    { question: "What is the maximum length of a field name in a shapefile?", choix: ["8", "10", "31", "64"], explication: "The .dbf format limits field names to 10 characters, one reason to prefer the geodatabase." },
    { question: "To find schools less than 500 m from a road, you use…", choix: ["Select By Attributes", "Select By Location", "An attribute join", "The Field Calculator"], explication: "It is a spatial (distance) relationship: Select By Location." },
    { question: "Why project before computing areas?", choix: ["To speed up the display", "Because degrees are not a reliable area unit", "To reduce the file size", "It is not necessary"], explication: "Areas must be computed in a projected system, in metres." },
    { question: "Which UTM zone is Tlemcen in?", choix: ["Zone 29N", "Zone 30N", "Zone 31N", "Zone 32N"], explication: "Tlemcen (about 1.3° West) is in zone 30N, between 6° West and 0°." },
    { question: "Where do you check the RMS error of a georeferencing?", choix: ["In the attribute table", "In the Link Table of the Georeferencing toolbar", "In the data frame properties", "In ArcCatalog"], explication: "The Link Table shows the residual of each control point and the total RMS error." }
  ] };
E["n2-l1"] = { titre: "Vector, raster and storage formats", objectifs: ["Tell vector data (points, lines, polygons) from raster data", "Create a file geodatabase and a feature class"],
  contenu: `
<p><b>Vector</b>: discrete objects described by their geometry (point, polyline, polygon) and an attribute table. Examples: boreholes, roads, parcels.</p>
<p><b>Raster</b>: a grid of cells (pixels), each holding a value. Examples: DEM, satellite image, land cover map.</p>
<p>Common formats in ArcGIS 10.8:</p>
<ul>
  <li><b>Shapefile</b> (<code>.shp</code> + <code>.shx</code> + <code>.dbf</code> + <code>.prj</code>…): simple and widespread, but field names are limited to 10 characters. Never copy just one of the files: copy them all, or use ArcCatalog.</li>
  <li><b>File geodatabase</b> (<code>.gdb</code> folder): the recommended format, more robust, supports feature datasets, domains and rasters.</li>
</ul>`,
  exercice: `<ol>
  <li>In the Catalog window, right-click your folder &gt; <i>New &gt; File Geodatabase</i>: name it <code>TP.gdb</code>.</li>
  <li>In <code>TP.gdb</code>, create a <b>point</b> feature class named <code>Forages</code>.</li>
  <li>Import a shapefile into the geodatabase (right-click the gdb &gt; <i>Import &gt; Feature Class (single)</i>).</li>
</ol>` };
E["n2-l2"] = { titre: "Coordinate systems and projections", objectifs: ["Tell a geographic system from a projected system", "Use “Define Projection” and “Project” correctly"],
  contenu: `
<ul>
  <li><b>Geographic coordinate system</b>: latitude/longitude in degrees (e.g. WGS 1984).</li>
  <li><b>Projected coordinate system</b>: plane coordinates in metres (e.g. WGS 1984 UTM, with the zone suited to your region). Essential for measuring distances and areas.</li>
</ul>
<p><b>Systems used in Algeria</b> (the training's “projection” sheet):</p>
<table class="tab">
  <tr><th>Family</th><th>System in ArcMap</th><th>Note</th></tr>
  <tr><td>Geographic</td><td>GCS WGS 1984</td><td>Degrees; GPS data, Google Earth</td></tr>
  <tr><td>Projected cylindrical (UTM)</td><td>WGS 1984 UTM Zone 29N to 32N</td><td>Tlemcen is in <b>zone 30N</b>; Algiers in 31N</td></tr>
  <tr><td>Projected cylindrical (UTM)</td><td>Nord Sahara 1959 UTM Zone 29N to 32N</td><td>System of the Algerian topographic maps (INCT)</td></tr>
  <tr><td>Projected conic (Lambert)</td><td>Nord Algérie (ancienne), in <i>National Grids &gt; Africa</i></td><td>Older maps; also exists in degrees</td></tr>
</table>
<p>For the Tlemcen area, choose for example <i>Projected Coordinate Systems &gt; UTM &gt; WGS 1984 &gt; Northern Hemisphere &gt; WGS 1984 UTM Zone 30N</i>.</p>
<p>Two tools not to confuse:</p>
<table class="tab">
  <tr><th>Tool</th><th>Role</th><th>ArcToolbox path</th></tr>
  <tr><td><b>Define Projection</b></td><td>Declares the system of a layer that has none (missing .prj file). Does not change the coordinates.</td><td>Data Management Tools &gt; Projections and Transformations</td></tr>
  <tr><td><b>Project</b></td><td>Creates a new layer whose coordinates are recalculated in another system.</td><td>Data Management Tools &gt; Projections and Transformations</td></tr>
</table>
<div class="astuce"><b>Classic mistake:</b> using “Define Projection” to change the system. The data then end up in the wrong place.</div>`,
  exercice: `<ol>
  <li>Show a layer's properties (<i>Source</i> tab) and write down its coordinate system.</li>
  <li>Project <code>Communes_NordSahara1959</code> and <code>Communes_WGS84</code> to WGS 1984 UTM Zone 30N with the <b>Project</b> tool.</li>
  <li>Declare the system of <code>Forages_sans_projection</code> (WGS 1984 UTM Zone 30N) with <b>Define Projection</b>.</li>
  <li>Compare the area of a polygon before and after projection (field calculated in square metres).</li>
</ol>` };
E["n2-l3"] = { titre: "The attribute table", objectifs: ["Open, sort and filter an attribute table", "Add a field and calculate it"],
  contenu: `
<p>Right-click a layer &gt; <b>Open Attribute Table</b>. Each row is a feature, each column a <b>field</b>.</p>
<ul>
  <li><b>Add a field</b>: <i>Table Options</i> menu &gt; <i>Add Field</i> (outside an edit session). Usual types: Text, Short Integer, Long Integer, Float, Double, Date.</li>
  <li><b>Field Calculator</b>: right-click a field header. Python example: <code>!POP! / !SURFACE_KM2!</code></li>
  <li><b>Calculate Geometry</b>: area, length, X/Y coordinates, in the unit of your choice.</li>
</ul>
<p><b>Joins</b> (right-click &gt; <i>Joins and Relates &gt; Join</i>) attach an external table (Excel, .dbf) to the layer through a common field, for example a municipality code.</p>`,
  exercice: `<ol>
  <li>Add a <code>SURF_HA</code> field of type Double to a polygon layer.</li>
  <li>Calculate it with <i>Calculate Geometry</i> in hectares.</li>
  <li>Join an Excel table of population by municipality code, then calculate the density.</li>
</ol>` };
E["n2-l4"] = { titre: "Selections and editing", objectifs: ["Select by attributes and by location", "Digitize new features with the Editor toolbar"],
  contenu: `
<p><b>Selection</b> menu:</p>
<ul>
  <li><b>Select By Attributes</b>: an SQL query, e.g. <code>"POP" &gt; 10000 AND "TYPE" = 'Urbain'</code>.</li>
  <li><b>Select By Location</b>: a spatial relationship, e.g. schools <i>within a distance of</i> 500 m of a road.</li>
</ul>
<p>Right-click the layer &gt; <i>Data &gt; Export Data</i> to save the selection as a new layer.</p>
<p><b>Editing</b>: <i>Editor</i> toolbar &gt; <i>Start Editing</i>, then the <i>Create Features</i> window. Turn on <b>Snapping</b> to snap to vertices. Remember to <i>Save Edits</i> then <i>Stop Editing</i>.</p>`,
  exercice: `<ol>
  <li>Select the municipalities with more than 10,000 inhabitants and export them.</li>
  <li>Select the boreholes located less than 1 km from a wadi.</li>
  <li>Digitize 5 points in the <code>Forages</code> class and fill in their attributes.</li>
</ol>` };
E["n2-l5"] = { titre: "Georeferencing a scanned map", objectifs: ["Georeference a scanned map or an image to known coordinates", "Check the error (RMS) and save the result"],
  contenu: `
<p>A scanned map (.jpg, .tif) has no coordinates. <b>Georeferencing</b> gives it coordinates using <b>control points</b> whose coordinates are known: grid intersections, coordinate ticks on the map border.</p>
<ol>
  <li>First set the data frame's coordinate system (e.g. Nord Sahara 1959 UTM Zone 30N for an INCT map of the Tlemcen region).</li>
  <li>Add the image, then show the <b>Georeferencing</b> toolbar (right-click an empty area of the toolbars).</li>
  <li>Choose the layer in the toolbar list, then <i>Georeferencing &gt; Fit To Display</i> if the image is far from the area.</li>
  <li>With the <b>Add Control Points</b> tool, click a point on the image then right-click &gt; <i>Input X and Y</i> and type its coordinates. Place at least 4 well-spread points.</li>
  <li>Open the <b>Link Table</b>: check the residual of each point and the total RMS error. Delete an outlier point.</li>
  <li>Save: <i>Georeferencing &gt; Update Georeferencing</i> (an .aux.xml file next to the image) or <i>Rectify</i> to create a new raster.</li>
</ol>
<div class="astuce"><b>Transformation:</b> 1st order (affine) with 4 to 6 points is enough for a flat-scanned map. Higher orders need more points and can distort the edges.</div>`,
  exercice: `<ol>
  <li>Georeference a scanned topographic map of your area with 6 points of the kilometre grid.</li>
  <li>Write down the RMS error; start again if it exceeds the ground size of one pixel.</li>
  <li>Overlay a vector layer (roads, wadis) to check the georeferencing visually.</li>
</ol>` };

/* ---------- Level 3 ---------- */
E.n3 = { titre: "Symbology and layout", resume: "Represent data (categories, quantities), label, compose and export a map.",
  quiz: [
    { question: "Which symbology suits the total population per municipality?", choix: ["Graduated colors", "Proportional symbols", "Unique values", "Single symbol"], explication: "An absolute count is shown with proportional symbols, not with a colour fill." },
    { question: "Where do you set the classification method (natural breaks, quantiles…)?", choix: ["Source tab", "Symbology tab, Quantities mode", "Labels tab", "In the attribute table"], explication: "Symbology > Quantities > Classify…" },
    { question: "Which element is NOT essential on a thematic map?", choix: ["The legend", "The scale", "The satellite background image", "The title"], explication: "The satellite background is optional; title, legend, scale and north are expected." },
    { question: "Which extension lets you reuse a symbology on another map?", choix: [".mxd", ".lyr", ".prj", ".shx"], explication: "A .lyr layer file stores the symbology and the link to the source." }
  ] };
E["n3-l1"] = { titre: "Symbology", objectifs: ["Choose the right representation for the data", "Use classifications (natural breaks, equal interval, quantiles)"],
  contenu: `
<p>Layer Properties &gt; <b>Symbology</b> tab:</p>
<ul>
  <li><b>Features &gt; Single symbol</b>: everything with the same symbol.</li>
  <li><b>Categories &gt; Unique values</b>: qualitative data (soil type, road class).</li>
  <li><b>Quantities &gt; Graduated colors</b>: relative quantitative data (density, rate). Choose the classification method and the number of classes.</li>
  <li><b>Quantities &gt; Proportional / Graduated symbols</b>: absolute counts (population, discharge).</li>
  <li><b>Charts</b>: pie or bar charts per feature.</li>
</ul>
<div class="astuce"><b>Cartographic rule:</b> do not show a raw count (population) as a colour fill. Use a proportional circle, or divide it by an area (density).</div>
<p>Save a reusable style with right-click &gt; <i>Save As Layer File</i> (<code>.lyr</code>).</p>`,
  exercice: `<ol>
  <li>Show land cover with unique values and consistent colours.</li>
  <li>Show population density in 5 classes using natural breaks (Jenks).</li>
  <li>Save the layer as a <code>.lyr</code> file.</li>
</ol>` };
E["n3-l2"] = { titre: "Labels", objectifs: ["Show labels from a field", "Manage label classes and conflicts"],
  contenu: `
<p>Layer Properties &gt; <b>Labels</b> tab: tick <i>Label features in this layer</i> and choose the field.</p>
<ul>
  <li><b>Expression</b>: combine several fields, e.g. <code>[NOM] &amp; " (" &amp; [POP] &amp; ")"</code>.</li>
  <li><b>Label classes</b>: different styles based on an SQL query (e.g. district capitals in bold).</li>
  <li><b>Scale range</b>: show labels only from a certain scale.</li>
  <li><b>Label Manager</b> (<i>Labeling</i> toolbar): priorities, weights and conflicts.</li>
</ul>`,
  exercice: `<ol>
  <li>Label the municipalities with their name.</li>
  <li>Create a label class for the district capitals, bold and larger.</li>
  <li>Limit label display to scales larger than 1:200,000.</li>
</ol>` };
E["n3-l3"] = { titre: "Layout and export", objectifs: ["Compose a complete map with its required elements", "Export to PDF or image at the right resolution"],
  contenu: `
<p>In <b>layout view</b>, <i>Insert</i> menu:</p>
<ul>
  <li><b>Title</b>, <b>Legend</b>, <b>North Arrow</b>, <b>Scale Bar</b>, <b>Scale Text</b>;</li>
  <li><b>Source and author</b> (text box), date;</li>
  <li><b>Graticule or grid</b>: data frame properties &gt; <i>Grids</i> tab.</li>
</ul>
<p>Page size: <i>File &gt; Page and Print Setup</i> (A4, A3, landscape…).</p>
<p>Export: <i>File &gt; Export Map</i>. PDF for printing, PNG or JPEG at 300 dpi for a report.</p>
<div class="astuce"><b>Quality check:</b> title, legend, scale, north, source, author, date and coordinate system. Without these elements the map is incomplete.</div>`,
  exercice: `<ol>
  <li>Make an A4 landscape map of your study area with all the required elements.</li>
  <li>Add a locator map in a second data frame.</li>
  <li>Export it to PDF and to PNG at 300 dpi.</li>
</ol>` };

/* ---------- Level 4 ---------- */
E.n4 = { titre: "ArcToolbox and geoprocessing", resume: "The toolboxes, the vector analysis tools (buffer, clip, overlay) and Spatial Analyst.",
  quiz: [
    { question: "Which tool keeps the geometry inside an area AND only the attributes of the input layer?", choix: ["Intersect", "Clip", "Union", "Spatial Join"], explication: "Clip keeps only the attributes of the input layer." },
    { question: "In the French ArcGIS interface, the “Dissolve” tool is called…", choix: ["Combiner", "Fusionner", "Agréger", "Dissoudre"], explication: "Dissolve = Fusionner; Merge = Combiner; Union = Agréger." },
    { question: "Where can you rerun a tool you already ran, with other parameters?", choix: ["Results window", "Table of contents", "Catalog window", "Label Manager"], explication: "The Results window keeps the history of the processes." },
    { question: "To give each municipality the number of boreholes it contains:", choix: ["Attribute join", "Spatial join", "Buffer", "Erase"], explication: "A spatial join links features by their position and can count." },
    { question: "Which tool is only available with Spatial Analyst?", choix: ["Buffer", "Project", "Slope", "Clip"], explication: "Slope is one of the Spatial Analyst (or 3D Analyst) tools." }
  ] };
E["n4-l1"] = { titre: "Getting started with ArcToolbox", objectifs: ["Find a tool in the tree or with the search", "Set the environments and check the Results"],
  contenu: `
<p>Open ArcToolbox with the red toolbox button or <i>Geoprocessing &gt; ArcToolbox</i>. The most used toolboxes:</p>
<table class="tab">
  <tr><th>Toolbox</th><th>Example tools</th></tr>
  <tr><td>Analysis Tools</td><td>Buffer, Clip, Intersect, Union, Erase, Spatial Join</td></tr>
  <tr><td>Data Management Tools</td><td>Project, Add Field, Calculate Field, Dissolve, Merge</td></tr>
  <tr><td>Conversion Tools</td><td>Excel To Table, Feature To Raster, KML To Layer</td></tr>
  <tr><td>Spatial Analyst Tools</td><td>Slope, Aspect, Reclassify, Raster Calculator, Kernel Density</td></tr>
  <tr><td>Cartography Tools, 3D Analyst, Network Analyst…</td><td>Depending on the enabled extensions (<i>Customize &gt; Extensions</i>)</td></tr>
</table>
<ul>
  <li><b>Search for a tool</b>: <i>Geoprocessing &gt; Search For Tools</i>, type “buffer”.</li>
  <li><b>Environments</b>: <i>Geoprocessing &gt; Environments</i>: current workspace, extent, cell size, mask.</li>
  <li><b>Results</b>: <i>Geoprocessing &gt; Results</i> keeps the history; right-click a result &gt; <i>Open</i> to rerun it with other parameters.</li>
</ul>
<div class="astuce"><b>Tip:</b> turn on <i>Geoprocessing &gt; Geoprocessing Options &gt; Overwrite the outputs of geoprocessing operations</i> during practicals so you can rerun a tool without renaming the output.</div>`,
  exercice: `<ol>
  <li>Open ArcToolbox and find the <b>Buffer</b> tool in the tree, then with the search.</li>
  <li>Set the current workspace to <code>TP.gdb</code>.</li>
  <li>Turn on the Spatial Analyst extension.</li>
</ol>` };
E["n4-l2"] = { titre: "Buffers and proximity analysis", objectifs: ["Create simple, multiple and variable-distance buffers", "Use Spatial Join and Near"],
  contenu: `
<p><b>Buffer</b>: <i>Analysis Tools &gt; Proximity &gt; Buffer</i>.</p>
<ul>
  <li><b>Linear unit</b> (e.g. 100 metres) or <b>field</b> (a different distance per feature).</li>
  <li><b>Dissolve type</b>: <i>NONE</i> (one buffer per feature) or <i>ALL</i> (merged buffers).</li>
</ul>
<p><b>Multiple Ring Buffer</b>: several rings, e.g. 500, 1000, 2000 m.</p>
<p><b>Near</b>: adds to each feature the distance to the nearest feature of another layer.</p>
<p><b>Spatial Join</b>: transfers attributes based on position, e.g. count the boreholes per municipality.</p>`,
  exercice: `<ol>
  <li>Create a 200 m protection zone around the boreholes, dissolved (ALL).</li>
  <li>Create 1, 2 and 5 km rings around a town.</li>
  <li>Count the boreholes per municipality with a spatial join.</li>
</ol>` };
E["n4-l3"] = { titre: "Extraction and overlay", objectifs: ["Choose between Clip, Intersect, Union and Erase", "Dissolve and Merge layers"],
  contenu: `
<table class="tab">
  <tr><th>Tool</th><th>Result</th><th>Attributes</th></tr>
  <tr><td><b>Clip</b></td><td>Part of the input layer inside the clip layer</td><td>Only those of the input</td></tr>
  <tr><td><b>Intersect</b></td><td>Areas common to all layers</td><td>Those of all layers</td></tr>
  <tr><td><b>Union</b></td><td>The whole area of all layers (polygons)</td><td>Those of all layers</td></tr>
  <tr><td><b>Erase</b></td><td>What lies outside the erase layer</td><td>Only those of the input</td></tr>
</table>
<p>Data management tools:</p>
<ul>
  <li><b>Dissolve</b>: groups features that share the same value of a field (e.g. municipalities &gt; wilayas).</li>
  <li><b>Merge</b>: assembles several layers of the same geometry into one.</li>
</ul>
<div class="astuce"><b>Careful:</b> in the French interface, Dissolve is <i>Fusionner</i> and Merge is <i>Combiner</i>. Remember the English names to avoid mistakes.</div>`,
  exercice: `<ol>
  <li>Clip the road network to the boundary of your study area.</li>
  <li>Intersect land cover with the borehole buffers, then compute the areas per type.</li>
  <li>Dissolve the municipalities by wilaya, keeping the sum of the population (statistics).</li>
</ol>` };
E["n4-l4"] = { titre: "Rasters with Spatial Analyst", objectifs: ["Derive slope from a DEM", "Reclassify and combine rasters for a multi-criteria analysis"],
  contenu: `
<p>Required extension: <i>Customize &gt; Extensions &gt; Spatial Analyst</i>.</p>
<ul>
  <li><b>Slope</b>: <i>Spatial Analyst Tools &gt; Surface &gt; Slope</i>, in degrees or percent.</li>
  <li><b>Aspect</b> and <b>Hillshade</b> in the same toolset.</li>
  <li><b>Reclassify</b>: <i>Spatial Analyst Tools &gt; Reclass</i>, to turn values into scores (1 to 5).</li>
  <li><b>Raster Calculator</b>: <i>Spatial Analyst Tools &gt; Map Algebra</i>, e.g. <code>"pente_rc" * 0.4 + "sol_rc" * 0.6</code>.</li>
</ul>
<p>Set the cell size and the mask in the <b>environments</b> so that all rasters are aligned.</p>`,
  exercice: `<ol>
  <li>Compute the slope in degrees from the DEM.</li>
  <li>Reclassify the slope into 5 classes (1 = gentle, 5 = steep).</li>
  <li>Combine the reclassified slope and land cover with the raster calculator to make a suitability map.</li>
</ol>` };

/* ---------- Level 5 ---------- */
E.n5 = { titre: "ModelBuilder", resume: "Chain tools in a model, create parameters, iterate and export the model to a Python script.",
  quiz: [
    { question: "In ModelBuilder, a yellow rectangle represents…", choix: ["An input dataset", "A tool", "Derived data", "An iterator"], explication: "Blue = input, yellow = tool, green = output (derived data)." },
    { question: "How many iterators can a single model contain?", choix: ["None", "Only one", "Two", "Unlimited"], explication: "Only one; for more, you nest a sub-model." },
    { question: "What is the %Distance% notation for?", choix: ["Commenting the model", "Inserting the value of a variable into text (inline substitution)", "Disabling a tool", "Computing a percentage"], explication: "It is inline variable substitution." },
    { question: "How do you make an element visible in the model's dialog box?", choix: ["Rename it", "Make it a Model Parameter", "Colour it blue", "Export it to Python"], explication: "Right-click > Model Parameter." }
  ] };
E["n5-l1"] = { titre: "Building your first model", objectifs: ["Create a personal toolbox and a model", "Chain two tools and run the model"],
  contenu: `
<p>A <b>model</b> is a saved processing chain: the outputs of one tool become the inputs of the next.</p>
<ol>
  <li>In the Catalog window: right-click your folder &gt; <i>New &gt; Toolbox</i> (<code>Outils_ENIV.tbx</code>).</li>
  <li>Right-click the toolbox &gt; <i>New &gt; Model</i>.</li>
  <li>Drag and drop tools from ArcToolbox and layers from the table of contents.</li>
  <li>Link them with the <b>Connect</b> tool, then <i>Model &gt; Validate</i> and <i>Run</i>.</li>
</ol>
<p>Colour codes: <b>blue oval</b> = input data, <b>yellow rectangle</b> = tool, <b>green oval</b> = derived data. A white element is not ready yet (missing parameter).</p>`,
  exercice: `<p>Build a “Protection zone” model: <b>Buffer</b> (200 m) on the boreholes, then <b>Clip</b> the land cover by that buffer. Run it and check the result.</p>` };
E["n5-l2"] = { titre: "Parameters and variables", objectifs: ["Turn a model into a reusable tool with parameters", "Use variables and %name% inline substitution"],
  contenu: `
<ul>
  <li><b>Model parameter</b>: right-click an element &gt; <i>Model Parameter</i> (a “P” appears). It then shows in the dialog box when you double-click the model in ArcToolbox.</li>
  <li><b>Variable</b>: right-click a tool &gt; <i>Make Variable &gt; From Parameter &gt; Distance</i> to expose the buffer distance.</li>
  <li><b>Inline substitution</b>: use <code>%Distance%</code> in the output name, e.g. <code>tampon_%Distance%</code>.</li>
  <li><b>Model properties</b>: name, label, description and the <i>Store relative path names</i> option.</li>
</ul>`,
  exercice: `<p>Make your model configurable: input layer, distance and output. Run it twice from ArcToolbox with different distances.</p>` };
E["n5-l3"] = { titre: "Iterators and export to Python", objectifs: ["Process every layer of a folder automatically", "Export the model to a Python script to move on to ArcPy"],
  contenu: `
<p><i>Insert &gt; Iterators</i> menu: <b>Iterate Feature Classes</b>, <b>Iterate Rasters</b>, <b>Iterate Field Values</b>, <b>For</b>, <b>While</b>… A model can contain <b>only one iterator</b>; to nest several, you place a sub-model inside a model.</p>
<p>Use the <b>Collect Values</b> tool to gather the outputs of each iteration.</p>
<p><b>Export</b>: <i>Model &gt; Export &gt; To Python Script</i>. The resulting <code>.py</code> file is the best starting point for learning ArcPy: it shows the exact syntax of each tool.</p>`,
  exercice: `<ol>
  <li>Create a model that clips every feature class of a geodatabase by the study area (iterator + <code>%Name%</code>).</li>
  <li>Export your “Protection zone” model to Python and open the script: find the <code>arcpy.Buffer_analysis</code> line.</li>
</ol>` };

/* ---------- Level 6 ---------- */
E.n6 = { titre: "Programming with ArcPy", resume: "Python 2.7 in ArcMap 10.8, the arcpy module, loops, cursors, arcpy.mapping and script tools.",
  quiz: [
    { question: "Which Python version does ArcMap 10.8 use?", choix: ["Python 2.7", "Python 3.6", "Python 3.9", "None"], explication: "ArcMap 10.x uses Python 2.7; ArcGIS Pro uses Python 3." },
    { question: "Which cursor lets you change the values of a field?", choix: ["SearchCursor", "InsertCursor", "UpdateCursor", "ReadCursor"], explication: "UpdateCursor, with updateRow() to save each row." },
    { question: "In a script tool, how do you read the first parameter entered by the user?", choix: ["arcpy.GetParameterAsText(0)", "arcpy.GetParameterAsText(1)", "sys.argv[0]", "input()"], explication: "Parameters are indexed from 0." },
    { question: "What is arcpy.env.overwriteOutput = True for?", choix: ["Speeding up calculations", "Allowing existing outputs to be replaced", "Enabling Spatial Analyst", "Saving the .mxd"], explication: "Without this option, the tool fails if the output already exists." },
    { question: "Which module exports maps to PDF from an ArcMap script?", choix: ["arcpy.mp", "arcpy.mapping", "arcpy.da", "arcpy.sa"], explication: "arcpy.mapping for ArcMap; arcpy.mp is its equivalent in ArcGIS Pro." }
  ] };
E["n6-l1"] = { titre: "Python and the Python window", objectifs: ["Run a geoprocessing tool in one line of Python", "Know the Python 2.7 basics used in ArcMap"],
  contenu: `
<p>ArcMap 10.8 uses <b>Python 2.7</b> (installed with ArcGIS in <code>C:\\Python27\\ArcGIS10.8</code>). ArcGIS Pro uses Python 3: scripts are not always compatible.</p>
<p>Open the <b>Python window</b> (button on the Standard toolbar or <i>Geoprocessing &gt; Python</i>). The <code>arcpy</code> module is already imported and the layers of the table of contents can be used by name.</p>
<!--code:0-->
<p>Each tool has a Python name: <code>ToolName_alias</code> (e.g. <code>Clip_analysis</code>, <code>Project_management</code>) or <code>arcpy.alias.ToolName</code>. The help page of each tool gives a code sample.</p>
<p>Python reminders: variables, lists <code>[...]</code>, <code>for</code> loops, <code>if</code> conditions, mandatory indentation (4 spaces), raw strings <code>r"C:\\path"</code> for Windows paths.</p>`,
  exercice: `<ol>
  <li>In the Python window, run a buffer on a layer of the map.</li>
  <li>Print the number of features: <code>print(arcpy.GetCount_management("Forages"))</code></li>
  <li>Find the syntax of the <b>Clip</b> tool in the help and run it in Python.</li>
</ol>` };
E["n6-l2"] = { titre: "Stand-alone scripts, lists and loops", objectifs: ["Write a .py script run outside ArcMap", "Process every layer of a workspace automatically"],
  contenu: `
<p>A stand-alone script is written in IDLE (installed with ArcGIS) or another editor, then run with the ArcGIS Python 2.7 interpreter.</p>
<!--code:0-->
<p>Useful list functions: <code>ListFeatureClasses()</code>, <code>ListRasters()</code>, <code>ListFields(fc)</code>, <code>ListDatasets()</code>. <code>arcpy.Describe(fc)</code> gives the geometry type, the coordinate system, the extent…</p>
<div class="astuce"><b>Error handling:</b> wrap the processing in <code>try: ... except arcpy.ExecuteError: print(arcpy.GetMessages(2))</code> to show the tool's error message.</div>`,
  exercice: `<ol>
  <li>Write a script that prints, for each feature class, its name, geometry type and coordinate system.</li>
  <li>Add automatic projection to UTM of every layer in geographic coordinates.</li>
</ol>` };
E["n6-l3"] = { titre: "Cursors: reading and updating attributes", objectifs: ["Read a table with arcpy.da.SearchCursor", "Update a field with arcpy.da.UpdateCursor"],
  contenu: `
<p>The cursors of the <code>arcpy.da</code> module go through the rows of a table, one by one.</p>
<!--code:0-->
<p>Special tokens: <code>SHAPE@</code> (geometry), <code>SHAPE@XY</code>, <code>SHAPE@AREA</code>, <code>SHAPE@LENGTH</code>, <code>OID@</code>.</p>
<p><b>InsertCursor</b> creates new features, for example from a CSV file of GPS coordinates.</p>`,
  exercice: `<ol>
  <li>Print the 5 most populated municipalities (use <code>sql_clause=(None, "ORDER BY POP DESC")</code>).</li>
  <li>Add a <code>CLASSE</code> field and fill it with “Petite”, “Moyenne” or “Grande” (small, medium, large) according to population.</li>
  <li>Create points from a CSV of GPS readings with an InsertCursor.</li>
</ol>` };
E["n6-l4"] = { titre: "Automating maps with arcpy.mapping", objectifs: ["Handle an .mxd document by script", "Produce a series of PDF maps automatically"],
  contenu: `
<p><code>arcpy.mapping</code> (specific to ArcMap; in ArcGIS Pro it is <code>arcpy.mp</code>) gives access to documents, data frames, layers and layout elements.</p>
<!--code:0-->
<p><b>Data Driven Pages</b> (the <i>Data Driven Pages</i> toolbar) do part of this work without code; arcpy.mapping goes further (titles, filters, reports).</p>`,
  exercice: `<p>Produce one PDF map per municipality with an automatic title, then assemble them into a single PDF with <code>arcpy.mapping.PDFDocumentCreate</code>.</p>` };
E["n6-l5"] = { titre: "Creating a script tool in ArcToolbox", objectifs: ["Turn a script into a tool with a dialog box", "Read the parameters and write messages"],
  contenu: `
<p>A <b>script tool</b> is used like any ArcToolbox tool, and therefore also in ModelBuilder.</p>
<!--code:0-->
<ol>
  <li>Right-click your <code>Outils_ENIV.tbx</code> toolbox &gt; <i>Add &gt; Script</i>.</li>
  <li>Name, label, description, then choose the <code>.py</code> file.</li>
  <li>Define the 4 parameters in order, with their data type (Feature Layer, Linear Unit…) and the <b>direction</b> <i>Output</i> for the last one.</li>
</ol>
<p><code>AddMessage</code>, <code>AddWarning</code> and <code>AddError</code> write into the tool's progress window.</p>`,
  exercice: `<p>Turn the “Protection zone” model into a script tool. Add a check: if the input layer is not a point layer, show an error message with <code>arcpy.AddError</code>.</p>` };

/* ---------- Level 7 ---------- */
E.n7 = { titre: "DEM, hydrology and floods", resume: "Prepare a DEM, model the flow (Fill, directions, accumulation), extract the stream network and the watershed, then map flood-prone areas and the exposed assets.",
  quiz: [
    { question: "Why do you run Fill before Flow Direction?", choix: ["To smooth the relief", "To remove the sinks that interrupt the flow", "To reproject the DEM", "To reduce the file size"], explication: "A sink has no lower neighbour: water stops there and the network breaks." },
    { question: "In D8 coding, which value means flow towards the south?", choix: ["1", "4", "16", "64"], explication: "1 = E, 2 = SE, 4 = S, 8 = SW, 16 = W, 32 = NW, 64 = N, 128 = NE." },
    { question: "With 50 m cells, a threshold of 400 accumulation cells corresponds to:", choix: ["0.4 km²", "1 km²", "4 km²", "20 km²"], explication: "400 × 0.0025 km² = 1 km² of drained area." },
    { question: "What is Snap Pour Point for?", choix: ["Moving the outlet onto the nearby cell of maximum accumulation", "Creating the stream network", "Computing the slope", "Merging basins"], explication: "An outlet one cell off can give a tiny watershed." },
    { question: "In Strahler ordering, two order-2 segments that join give:", choix: ["An order 2", "An order 3", "An order 4", "It depends on their length"], explication: "The order only increases when two segments of the same order meet." },
    { question: "A Gravelius index Kc = 1.05 describes a basin that is:", choix: ["Very elongated", "Compact, almost circular", "Without an outlet", "Endorheic"], explication: "Kc = 1 for a circle; a compact basin concentrates floods quickly." },
    { question: "What does the multi-criteria flood map of lesson 4 represent?", choix: ["Water depths for the 100-year flood", "A relative flood susceptibility", "The wadi discharge", "The official regulatory zoning"], explication: "It ranks the territory in relative terms; water depths require a hydraulic model." }
  ] };
E["n7-l1"] = { titre: "Preparing the DEM for hydrology", objectifs: ["Import an ASCII DEM and assign its coordinate system", "Set the geoprocessing environment for a raster analysis", "Understand sinks and correct them with Fill"],
  contenu: `
<p>The <b>DEM</b> (digital elevation model) is a grid in which each cell holds an elevation. The practical data (<code>TP\\MNT\\MNT_50m.asc</code>) cover the fictional Tamda wadi basin: 400 × 400 cells of 50 m, in WGS 1984 UTM zone 30N. For a real project, download SRTM (30 m) or ALOS (30 m) from EarthExplorer, then project it to UTM before any calculation: a slope computed in degrees of latitude is wrong.</p>
<h3>1. Import and project</h3>
<ol>
  <li><b>ASCII To Raster</b> (Conversion toolbox), type <code>FLOAT</code>, output <code>mnt.tif</code>.</li>
  <li><b>Define Projection</b>: WGS 1984 UTM Zone 30N. You <i>define</i> because the coordinates are already in UTM metres; you <i>project</i> only when the system must change.</li>
  <li>Symbology: <i>Standard Deviation</i> stretch and a hypsometric colour ramp, then a <b>Hillshade</b> underneath with 40 % transparency on the DEM.</li>
</ol>
<h3>2. Enable Spatial Analyst and set the environment</h3>
<p><i>Customize &gt; Extensions</i>: tick <b>Spatial Analyst</b>. Then <i>Geoprocessing &gt; Environments</i>:</p>
<table class="tab">
  <tr><th>Setting</th><th>Value</th><th>Why</th></tr>
  <tr><td>Current workspace</td><td><code>C:\\ENIV\\TP\\Sorties\\Risques</code></td><td>all results in the same place</td></tr>
  <tr><td>Extent, Snap Raster, Cell Size</td><td>mnt.tif</td><td>all grids perfectly aligned</td></tr>
  <tr><td>Mask</td><td>mnt.tif (or the basin)</td><td>limits calculations to the useful area</td></tr>
</table>
<h3>3. Sinks and the Fill tool</h3>
<p>A DEM contains <b>sinks</b> (pits): cells lower than all their neighbours, often caused by measurement noise. Water “stops” there and the computed network breaks. The <b>Fill</b> tool (Spatial Analyst &gt; Hydrology) raises these cells up to the level of their pour point.</p>
<!--code:0-->
<p>Display <code>prof_cuvettes.tif</code>: corrections should be small (a few metres) and scattered. A large area filled by several tens of metres signals either a real depression (sebkha, dam) or a DEM error.</p>
<div class="astuce"><b>Remember:</b> always use the <b>filled</b> DEM for flow directions, but keep the raw DEM for slopes and for the elevations shown on maps.</div>`,
  exercice: `<ol>
  <li>Import <code>MNT_50m.asc</code>, define its projection and create a hillshade.</li>
  <li>Set the environment as in the table, then run <b>Fill</b>.</li>
  <li>Compute <code>fill - mnt</code> with the <b>Raster Calculator</b>. What is the maximum corrected depth? How many cells were changed (properties &gt; histogram, or <i>Build Raster Attribute Table</i> on an integer version)?</li>
</ol>` };
E["n7-l2"] = { titre: "Flow direction, accumulation and stream network", objectifs: ["Compute D8 flow directions and flow accumulation", "Extract a stream network with a justified threshold", "Order the network (Strahler) and convert it to polylines"],
  contenu: `
<h3>1. Flow Direction</h3>
<p>The <b>D8</b> model sends the water of each cell to the neighbour with the steepest slope, among 8. The result is coded in powers of 2:</p>
<table class="tab">
  <tr><td>32 (NW)</td><td>64 (N)</td><td>128 (NE)</td></tr>
  <tr><td>16 (W)</td><td>cell</td><td>1 (E)</td></tr>
  <tr><td>8 (SW)</td><td>4 (S)</td><td>2 (SE)</td></tr>
</table>
<p>A value that is not a power of 2 means a sink remains: run <b>Fill</b> again.</p>
<h3>2. Flow Accumulation</h3>
<p>Each cell receives the <b>number of upstream cells</b>. Multiplied by the area of a cell (50 × 50 m = 0.0025 km²), it gives the drained area. Display it with a <i>Standard Deviation</i> stretch or logarithmic classes: the valley lines appear.</p>
<h3>3. Threshold and network</h3>
<p>A wadi “starts” when the drained area exceeds a threshold. With 400 cells = 1 km², you get a network close to that of 1:50,000 maps. Compare with the <code>Oueds</code> layer and adjust (200 to 1,000 cells).</p>
<!--code:0-->
<p><b>Stream Order</b>, <b>Strahler</b> method: two segments of order n give an order n+1. <b>Stream to Feature</b> produces polylines with the field <code>GRID_CODE</code> = order, useful to vary the line width.</p>
<div class="astuce"><b>Tip:</b> in the <b>Raster Calculator</b>, type <code>Con("facc.tif" &gt; 400, 1)</code>. Layer names go in double quotes, and the <b>Con</b> tool is called <i>Con</i> (Conditional) in the toolbox.</div>`,
  exercice: `<ol>
  <li>Compute <code>fdir</code> and <code>facc</code> from <code>fill.tif</code>.</li>
  <li>Extract three networks with 200, 400 and 1,000 cells. Overlay the <code>Oueds</code> layer: which threshold matches it best?</li>
  <li>Compute the Strahler order, convert to polylines and set the line width from <code>GRID_CODE</code>. What is the maximum order at the outlet?</li>
  <li>Compare with the script <code>06_hydrologie.py</code>.</li>
</ol>` };
E["n7-l3"] = { titre: "Delineating and describing a watershed", objectifs: ["Snap an outlet onto the computed network", "Delineate a watershed and all the basins of an area", "Compute the classic morphometric parameters"],
  contenu: `
<h3>1. Snap the outlet</h3>
<p>An outlet point entered by hand rarely falls exactly on the cell of maximum accumulation. <b>Snap Pour Point</b> moves it to the cell with the highest accumulation within a given radius (here 150 m, i.e. 3 cells). A radius that is too large can make the point “jump” onto a neighbouring tributary.</p>
<h3>2. Watershed</h3>
<!--code:0-->
<p><b>Watershed</b> delineates everything that drains to the outlet; <b>Basin</b> divides the whole area into basins that drain to the edge of the DEM.</p>
<h3>3. Morphometric parameters</h3>
<table class="tab">
  <tr><th>Parameter</th><th>Formula</th><th>ArcMap tool</th></tr>
  <tr><td>Area A (km²), perimeter P (km)</td><td>polygon geometry</td><td>Calculate Geometry</td></tr>
  <tr><td>Gravelius compactness index</td><td>Kc = 0.28 · P / √A</td><td>Field Calculator</td></tr>
  <tr><td>Min, mean, max elevations</td><td>—</td><td>Zonal Statistics as Table</td></tr>
  <tr><td>Length of the main channel L (km)</td><td>longest flow path</td><td><i>Flow Length</i>, UPSTREAM</td></tr>
  <tr><td>Time of concentration (Giandotti)</td><td>tc = (4√A + 1.5 L) / (0.8 √(Hmean − Hmin)) in hours</td><td>computed from the values above</td></tr>
</table>
<p>Kc close to 1 = compact basin that concentrates floods quickly; Kc &gt; 1.5 = elongated basin, floods more spread out.</p>`,
  exercice: `<ol>
  <li>Snap <code>Risques\\Exutoire.shp</code> with a 150 m radius, then delineate the watershed.</li>
  <li>Convert it to a polygon and compute its area in km² and its perimeter.</li>
  <li>With <b>Zonal Statistics as Table</b> on the DEM, read Hmin, Hmean and Hmax; with <b>Flow Length</b>, the length L.</li>
  <li>Compute Kc and the Giandotti time of concentration. Is the basin compact or elongated?</li>
</ol>` };
E["n7-l4"] = { titre: "Mapping flood-prone areas and exposed assets", objectifs: ["Compute the height above the nearest wadi (HAND method)", "Combine several criteria into a flood susceptibility map", "Validate the map with flood marks and list the exposed assets"],
  contenu: `
<p>A real flood hazard map requires a hydraulic model (HEC-RAS, for example) with flood discharges. For a first diagnosis at basin scale, a <b>geomorphological approach</b> based on the DEM is used. Reminder: the floods of Bab El Oued (Algiers, November 2001) and Ghardaïa (October 2008) hit districts built in the major bed of the wadis.</p>
<h3>1. Height Above Nearest Drainage (HAND)</h3>
<p>A cell is all the more flood-prone as it lies <b>only slightly above</b> the nearby wadi. Each cell is given the elevation of the nearest wadi, then the difference is computed:</p>
<!--code:0-->
<h3>2. Criteria, scores and weights</h3>
<p>Each criterion is reclassified from 1 (not favourable) to 5 (very favourable to flooding), then combined by <b>weighted sum</b> (weights from the file <code>Tables\\poids_multicritere.xlsx</code>):</p>
<table class="tab">
  <tr><th>Criterion</th><th>Tool</th><th>Score 5 if…</th><th>Weight</th></tr>
  <tr><td>Distance to the wadi</td><td>Euclidean Distance</td><td>&lt; 100 m</td><td>35 %</td></tr>
  <tr><td>Height above the wadi</td><td>HAND above</td><td>&lt; 2 m</td><td>25 %</td></tr>
  <tr><td>Slope</td><td>Slope (degrees)</td><td>&lt; 2°</td><td>20 %</td></tr>
  <tr><td>Flow accumulation</td><td>facc</td><td>&gt; 10,000 cells</td><td>10 %</td></tr>
  <tr><td>Land cover</td><td>Polygon to Raster</td><td>Urban (impervious)</td><td>10 %</td></tr>
</table>
<p>The resulting index (from 1 to 5) is split into five classes: very low, low, moderate, high, very high.</p>
<h3>3. Validate and cross with the assets</h3>
<ul>
  <li><b>Extract Values to Points</b> on <code>Laisses_crues.shp</code> (flood marks): a good map puts most of the marks in classes 4 and 5.</li>
  <li>Same tool on <code>Ecoles.shp</code>: list of schools in high-susceptibility areas, to report in a municipal dashboard.</li>
</ul>
<div class="astuce"><b>Careful:</b> this map shows a <b>susceptibility</b>, not a water depth or a return period. It is used to prioritise detailed studies, not to grant or refuse a building permit.</div>`,
  exercice: `<ol>
  <li>Compute the height above the wadi and display it in 5 classes (0–2, 2–5, 5–10, 10–20, &gt; 20 m).</li>
  <li>Reclassify the five criteria and combine them with the <b>Raster Calculator</b> or the <b>Weighted Sum</b> tool.</li>
  <li>Validate with <code>Laisses_crues.shp</code>: what percentage falls in the high or very high class?</li>
  <li>Change the weights (for example 25/35/20/10/10) and compare. Then run <code>07_zones_inondables.py</code>.</li>
</ol>` };

/* ---------- Level 8 ---------- */
E.n8 = { titre: "Vulnerability to major natural hazards", resume: "Multi-criteria method (Reclassify, Weighted Overlay, AHP) applied to forest fires, earthquakes, tsunamis and landslides, then a multi-hazard summary map.",
  quiz: [
    { question: "In an area with no assets at all, a high hazard gives a risk that is:", choix: ["Very high", "Moderate", "Nil or negligible", "Impossible to compute"], explication: "Risk = hazard × vulnerability of the assets: without assets, there is no risk." },
    { question: "Why is each criterion reclassified from 1 to 5 before combining them?", choix: ["To reduce raster size", "To put different quantities on a common scale", "To change the projection", "Because Weighted Overlay refuses decimal weights"], explication: "You cannot add degrees and metres: normalisation makes them comparable." },
    { question: "In the Weighted Overlay tool, the % influence values must add up to:", choix: ["1", "10", "100", "Anything"], explication: "The influence percentages must total 100." },
    { question: "In the AHP method, the weights are acceptable if the consistency ratio CR is:", choix: ["Greater than 0.5", "Less than 0.10", "Equal to 1", "Negative"], explication: "Above 0.10, the pairwise comparisons are considered inconsistent." },
    { question: "Which aspect gets the highest score for forest fire risk?", choix: ["North", "East", "South", "Flat areas"], explication: "South-facing slopes get more sun, so they are hotter and drier." },
    { question: "In which zone of the RPA 99 (2003 version) is the wilaya of Tlemcen?", choix: ["Zone 0", "Zone I", "Zone IIb", "Zone III"], explication: "Tlemcen is in zone I (low seismicity); Algiers and Boumerdès are in zone III." },
    { question: "Why do alluvial deposits get a higher seismic score than limestone?", choix: ["They are closer to faults", "Soft soils amplify seismic waves", "They are older", "They are more permeable"], explication: "It is the site effect: soft soils amplify and lengthen the shaking." },
    { question: "Which tool gives, for each cell, the highest class among several hazard maps?", choix: ["Zonal Statistics", "Cell Statistics, MAXIMUM", "Mosaic", "Combine"], explication: "Cell Statistics computes the requested statistic cell by cell over several rasters." }
  ] };
E["n8-l1"] = { titre: "Hazard, vulnerability and multi-criteria analysis", objectifs: ["Tell hazard, assets, vulnerability and risk apart", "Normalise criteria with Reclassify", "Combine criteria with Weighted Overlay or Weighted Sum, and justify the weights"],
  contenu: `
<h3>1. Vocabulary</h3>
<ul>
  <li><b>Hazard</b>: a possible phenomenon, with an intensity and a probability (earthquake, flood, fire…).</li>
  <li><b>Assets</b> (elements at risk): what can be hit (population, schools, roads, forests, networks).</li>
  <li><b>Vulnerability</b>: how sensitive the assets are to the hazard (fragile buildings, lack of access…).</li>
  <li><b>Risk = hazard × vulnerability of the assets</b>. Without assets, there is no risk.</li>
</ul>
<p>In Algeria, <b>law 04-20 of 25 December 2004</b> on the prevention of major risks lists, among others, earthquakes and geological risks, floods, climatic risks, forest fires and industrial risks. It provides for general prevention plans per risk, in which GIS mapping is central.</p>
<h3>2. Step 1: normalise with Reclassify</h3>
<p>A slope in degrees and a distance in metres cannot be added. <b>Reclassify</b> brings each criterion onto the same scale, here from 1 (not favourable to the hazard) to 5 (very favourable). Use <i>Classify</i> to enter the breaks, then check the <code>Old value → New value</code> table. For vector data, first use <b>Euclidean Distance</b> or <b>Polygon to Raster</b>.</p>
<h3>3. Step 2: weight and combine</h3>
<table class="tab">
  <tr><th>Tool</th><th>Inputs</th><th>Features</th></tr>
  <tr><td><b>Weighted Overlay</b></td><td>integer rasters</td><td>% influence = 100, common scale (1 to 5), <i>Restricted</i> value to exclude an area; integer output</td></tr>
  <tr><td><b>Weighted Sum</b></td><td>integer or float rasters</td><td>free weights, float output: nuances are kept, then classified</td></tr>
  <tr><td>Raster Calculator</td><td>all</td><td><code>0.35 * "c_dist" + 0.25 * "c_pente" + …</code>: transparent and reproducible</td></tr>
</table>
<h3>4. Justify the weights: the AHP method</h3>
<p>In Saaty's <b>AHP</b>, criteria are compared in pairs (1 = equally important, 3 = slightly more, 5 = clearly more, 9 = extremely more). The eigenvector of the matrix gives the weights, and the <b>consistency ratio</b> CR = CI / RI must stay below 0.10 (CI = (λmax − n) / (n − 1), RI = 1.12 for 5 criteria). The weights proposed in <code>poids_multicritere.xlsx</code> are a starting point to discuss in class.</p>
<h3>5. Validate</h3>
<p>A susceptibility map is validated with <b>observed events</b> (fire starts, landslides, flood marks): you compute the share of events that fall in high classes. The <code>valider()</code> function of the file <code>outils_risques.py</code> does this calculation automatically.</p>`,
  exercice: `<ol>
  <li>Open <code>Tables\\poids_multicritere.xlsx</code>. Check that each sheet totals 100 %.</li>
  <li>Build a 3 × 3 AHP matrix (distance to the wadi, slope, land cover) in Excel and compute the weights with the geometric mean of the rows.</li>
  <li>Open the <b>Weighted Overlay</b> tool and find: the evaluation scale, the % influence column, the <i>Restricted</i> value.</li>
</ol>` };
E["n8-l2"] = { titre: "Forest fire risk map", objectifs: ["Choose and prepare the ignition and spread factors", "Reclassify slope aspect", "Validate the map with the history of fire starts"],
  contenu: `
<p>The forests of the wilaya of Tlemcen (Hafir, Zarifet…) burn mostly in summer, driven by the sirocco. Almost all fires are human-caused: proximity to roads and dwellings matters as much as vegetation.</p>
<table class="tab">
  <tr><th>Factor</th><th>Data</th><th>Score 5 if…</th><th>Weight</th></tr>
  <tr><td>Fuel (land cover)</td><td>Occupation_sol (CODE_OS)</td><td>Forest; Rangeland = 4</td><td>35 %</td></tr>
  <tr><td>Slope</td><td>Slope from the DEM</td><td>&gt; 30° (fire climbs fast)</td><td>20 %</td></tr>
  <tr><td>Aspect</td><td><b>Aspect</b></td><td>South (157.5–202.5°), hotter and drier</td><td>15 %</td></tr>
  <tr><td>Distance to roads</td><td>Euclidean Distance from Routes</td><td>&lt; 100 m</td><td>15 %</td></tr>
  <tr><td>Distance to inhabited places</td><td>Euclidean Distance from Ecoles (approximation)</td><td>&lt; 200 m</td><td>15 %</td></tr>
</table>
<h3>Reclassifying aspect</h3>
<p>The <b>Aspect</b> tool returns an angle from 0 to 360° from north, and −1 for flat areas. In <b>Reclassify</b>: −1 → 1, N (0–22.5 and 337.5–360) → 1, NE and NW → 2, E and W → 3, SE and SW → 4, S → 5.</p>
<!--code:0-->
<h3>Validate</h3>
<p><code>Risques\\Foyers_incendies.shp</code> contains 45 fire starts (fields ANNEE, SURF_HA, OCCUP, CAUSE). Extract the risk class under each start and compute the share in classes 4–5. A <b>Kernel Density</b> of the fire starts weighted by <code>SURF_HA</code> also gives a good map of the most affected sectors.</p>`,
  exercice: `<ol>
  <li>Prepare the five criteria scored from 1 to 5 and combine them with <b>Weighted Overlay</b>.</li>
  <li>Validate with the fire starts. Do the “Forêt” (forest) fires fall better than the “Parcours” (rangeland) fires?</li>
  <li>Propose the location of two lookout towers: summits that see the most class-5 cells (<b>Viewshed</b> tool).</li>
  <li>Compare with <code>08_risque_feux.py</code>.</li>
</ol>` };
E["n8-l3"] = { titre: "Seismic vulnerability", objectifs: ["Place the study area in the RPA 99 (2003 version) zoning", "Map the density of epicentres and the proximity of active faults", "Take the site effect into account (amplification by soft soils)"],
  contenu: `
<p>Northern Algeria is seismically active (El Asnam 1980, Aïn Témouchent 1999, Boumerdès 2003). The <b>RPA 99 version 2003</b> seismic code divides the country into zones 0 (negligible), I (low), IIa and IIb (moderate) and III (high). The wilaya of Tlemcen is in <b>zone I</b>: the risk is not zero there, and the zoning is national. A local map lets you go further: microzonation, choice of sites for facilities, retrofitting priorities. Real earthquake catalogues are published by CRAAG.</p>
<table class="tab">
  <tr><th>Criterion</th><th>Method</th><th>Weight</th></tr>
  <tr><td>Distance to active faults</td><td>Layer filtered by <code>"ACTIVE" = 'Oui'</code> then Euclidean Distance; score 5 within 500 m</td><td>40 %</td></tr>
  <tr><td>Epicentre density</td><td><b>Kernel Density</b>, 3 km radius, then <i>Slice</i> (Reclass toolset) into 5 equal-area classes</td><td>25 %</td></tr>
  <tr><td>Site effect</td><td><code>AMPLIF</code> field of Lithologie: alluvium 1.8 and clays 1.5 &gt; limestone 1.0</td><td>25 %</td></tr>
  <tr><td>Slope (induced instability)</td><td>Slope in degrees</td><td>10 %</td></tr>
</table>
<p>Weighting the density by magnitude is tempting, but magnitude is logarithmic: an M5 earthquake releases about 32 times more energy than an M4. Use a calculated field <code>10 ^ (1.5 * MAG)</code> instead, or keep the simple density.</p>
<!--code:0-->
<div class="astuce"><b>Vulnerability:</b> to move from hazard to risk, cross the map with the buildings (age, construction type, number of floors): this is the purpose of the building vulnerability studies carried out after Boumerdès.</div>`,
  exercice: `<ol>
  <li>Show the epicentres with symbols proportional to magnitude and the active faults in red.</li>
  <li>Compute the kernel density with radii of 2, 3 and 5 km: how does the radius change the map?</li>
  <li>Combine the four criteria and find the schools in the high class.</li>
  <li>Compare with <code>09_risque_sismique.py</code>.</li>
</ol>` };
E["n8-l4"] = { titre: "Tsunami and marine flooding", objectifs: ["Isolate the land part of a coastal DEM", "Map vulnerability to flooding by elevation and distance to the coast", "Simulate a simple wave scenario and list the assets hit"],
  contenu: `
<p>The Boumerdès earthquake of 21 May 2003 (Mw 6.8) caused a tsunami that damaged harbours in the Balearic Islands. The Algerian coast is therefore not safe. The practical uses a fictional coast inspired by the Ghazaouet coastline (<code>TP\\Risques_cote</code>): a 25 m DEM with the sea as negative elevations, a coastline, a coastal road and 12 assets (harbour, schools, health centre, desalination plant…).</p>
<h3>1. Keep the land</h3>
<!--code:0-->
<h3>2. Flooding vulnerability</h3>
<table class="tab">
  <tr><th>Criterion</th><th>Score 5 if…</th><th>Weight</th></tr>
  <tr><td>Elevation</td><td>&lt; 2 m</td><td>50 %</td></tr>
  <tr><td>Distance to the coastline</td><td>&lt; 100 m</td><td>35 %</td></tr>
  <tr><td>Slope</td><td>&lt; 2° (water goes far inland)</td><td>15 %</td></tr>
</table>
<h3>3. Wave scenario</h3>
<p>A simple scenario: a 5 m wave that penetrates up to 1 km. Cells both below 5 m and within 1 km of the coast are flooded:</p>
<!--code:1-->
<p>This “bathtub” method ignores the dynamics of the wave and obstacles. It is still useful for identifying the assets to evacuate first and drawing routes towards refuge areas above 10 m.</p>`,
  exercice: `<ol>
  <li>Import <code>MNT_cote_25m.asc</code> and isolate the land. What area lies below 5 m?</li>
  <li>Build the three-criteria vulnerability map.</li>
  <li>Test waves of 3, 5 and 8 m: how many assets are hit each time?</li>
  <li>With <b>Euclidean Distance</b> from the areas above 10 m, give the evacuation distance for each asset. Compare with <code>10_tsunami.py</code>.</li>
</ol>` };
E["n8-l5"] = { titre: "Landslide susceptibility", objectifs: ["Combine lithology, slope and aggravating factors", "Use an attribute field that already holds a score as a criterion", "Assess the map with a landslide inventory"],
  contenu: `
<p>Landslides mostly affect marly and clayey slopes, after heavy rain or following road earthworks. Constantine is the most studied Algerian example. In the practical, the <code>Lithologie</code> layer already contains a susceptibility score <code>SUSC_GLIS</code>: limestone 1, sandstone 2, alluvium 3, marl 4, clay 5.</p>
<table class="tab">
  <tr><th>Criterion</th><th>Score 5 if…</th><th>Weight</th></tr>
  <tr><td>Lithology (SUSC_GLIS)</td><td>clay</td><td>35 %</td></tr>
  <tr><td>Slope</td><td>&gt; 30°</td><td>30 %</td></tr>
  <tr><td>Distance to wadis (bank undercutting)</td><td>&lt; 100 m</td><td>15 %</td></tr>
  <tr><td>Land cover</td><td>bare soil</td><td>10 %</td></tr>
  <tr><td>Distance to roads (embankments)</td><td>&lt; 50 m</td><td>10 %</td></tr>
</table>
<p>With <b>Polygon to Raster</b> on the <code>SUSC_GLIS</code> field, the resulting raster is directly a criterion scored from 1 to 5: no need to reclassify it.</p>
<h3>Assess the map</h3>
<p>The inventory <code>Glissements.shp</code> (32 points, fields TYPE, ACTIF, LITHO) is used for validation. For rigorous work, split the inventory in two: one half to tune the weights, the other to validate. With <b>Select By Attributes</b> (<code>"ACTIF" = 'Oui'</code>), also check that active landslides fall in the highest classes.</p>`,
  exercice: `<ol>
  <li>Build the susceptibility map and validate it with the inventory.</li>
  <li>Compute the percentage of area of each class (raster attribute table) and compare it with the percentage of landslides per class. A good map concentrates many landslides in little area.</li>
  <li>Which road sections cross class 5? (<b>Extract by Mask</b> then <b>Intersect</b>, or a script.)</li>
  <li>Compare with <code>11_glissements.py</code>.</li>
</ol>` };
E["n8-l6"] = { titre: "Multi-hazard summary and final map", objectifs: ["Combine several hazard maps into a multi-hazard summary", "Produce figures per municipality", "Lay out an honest and readable risk map"],
  contenu: `
<h3>1. Two ways to summarise</h3>
<ul>
  <li><b>Maximum hazard</b>: <b>Cell Statistics</b>, MAXIMUM statistic. Each cell takes the highest class among all hazards.</li>
  <li><b>Count of high hazards</b>: count how many hazards are in class 4 or 5 in each cell (0 to 4). A school exposed both to flooding and to landslides is a priority.</li>
</ul>
<!--code:0-->
<h3>2. Figures per municipality</h3>
<p><b>Zonal Statistics as Table</b> with <code>Communes.shp</code> as zones and the count as value gives, for each municipality, the mean number of high hazards. Join the table to the municipalities and make a choropleth map, completed with a chart (<i>View &gt; Graphs</i>).</p>
<h3>3. Layout</h3>
<ul>
  <li>Ordered colours from pale yellow to dark red; never a rainbow for a risk scale.</li>
  <li>Legend with plain labels (“very low” to “very high”) rather than the values 1 to 5.</li>
  <li>Information box: method, criteria and weights, data source and date, coordinate system.</li>
  <li>Mandatory statement for this practical: <i>fictional data for teaching purposes</i>.</li>
</ul>
<h3>4. Automate</h3>
<p>Scripts <code>06</code> to <code>12</code> chain all of level 7 and level 8. Run them in order (06 before 07 and 11, which use the stream network). To turn them into a toolbox tool (level 6), replace the weights written in the code with <code>arcpy.GetParameter()</code>: your colleagues will be able to test other weightings without opening Python.</p>`,
  exercice: `<ol>
  <li>Produce the maximum-hazard and count maps.</li>
  <li>Rank the municipalities by mean number of high hazards and map the result.</li>
  <li>Make an A3 summary sheet: multi-hazard map, map per municipality, table of exposed schools, complete information box.</li>
  <li>Write ten lines of recommendations for the most exposed municipality.</li>
</ol>` };
