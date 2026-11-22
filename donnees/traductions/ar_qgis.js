/* Traduction ar du parcours qgis */
window.TRAD = window.TRAD || {};
window.TRAD.ar = window.TRAD.ar || {};
var A = window.TRAD.ar;

/* ---------- المستوى 1 ---------- */
A.q1 = { titre: "اكتشاف QGIS", resume: "تثبيت QGIS، مشروع ‎.qgz، اللوحات، المتصفح، التنقل والإضافات.",
  quiz: [
    { question: "ما امتداد مشروع QGIS؟", choix: [".mxd", ".aprx", ".qgz", ".gpkg"], explication: "‎.qgz مشروع مضغوط، أما ‎.gpkg فهو صيغة بيانات." },
    { question: "أي إصدار من QGIS نختار لقاعة الأعمال التطبيقية؟", choix: ["الأحدث", "إصدار LTR", "إصدار تجريبي", "أي إصدار"], explication: "يحظى إصدار LTR (الدعم طويل المدى) بصيانة أطول وهو أكثر استقرارًا." },
    { question: "ما يقابل ArcToolbox في QGIS هو:", choix: ["لوحة الطبقات Layers", "صندوق أدوات المعالجة Processing Toolbox", "مدير الإضافات", "المتصفح Browser"], explication: "يجمع خوارزميات QGIS وGDAL وGRASS والإضافات." },
    { question: "صيغة التخزين الموصى بها في QGIS هي:", choix: ["Shapefile", "GeoPackage", "KML", "DXF"], explication: "يضم ملف GeoPackage واحد عدة طبقات متجهة ونقطية." }
  ] };
A["q1-l1"] = { titre: "تثبيت QGIS واكتشاف الواجهة", objectifs: ["تثبيت إصدار LTR من QGIS", "التعرف على اللوحات وأشرطة الأدوات", "إنشاء مشروع وحفظه"],
  contenu: `
<p>QGIS نظام معلومات جغرافية <b>حر ومجاني</b> (qgis.org). ثبّت إصدار <b>LTR</b> (دعم طويل المدى) فهو أكثر استقرارًا للتعليم. يتضمن مثبّت Windows برنامج GRASS GIS المستعمل في المستوى 7.</p>
<table class="tab">
  <tr><th>ArcMap / ArcGIS Pro</th><th>QGIS</th></tr>
  <tr><td>‎.mxd / .aprx</td><td>مشروع <b>‎.qgz</b></td></tr>
  <tr><td>جدول المحتويات / Contents</td><td>لوحة <b>Layers</b> (الطبقات)</td></tr>
  <tr><td>ArcCatalog / Catalog</td><td>لوحة <b>Browser</b> (المتصفح)</td></tr>
  <tr><td>ArcToolbox / Geoprocessing</td><td><b>Processing Toolbox</b> (Ctrl+Alt+T)</td></tr>
  <tr><td>ModelBuilder</td><td><b>Graphical Modeler</b> (المصمم الرسومي)</td></tr>
  <tr><td>نافذة Python ‏(arcpy)</td><td><b>Python Console</b> ‏(PyQGIS، Ctrl+Alt+P)</td></tr>
  <tr><td>قاعدة بيانات جغرافية ملفية</td><td><b>GeoPackage</b> ‏(‎.gpkg)</td></tr>
</table>
<p>تُظهر اللوحات أو تُخفيها عبر <i>View &gt; Panels</i>. أضف البيانات بسحبها من المتصفح أو عبر <i>Layer &gt; Add Layer</i>. احفظ المشروع في <code>C:\\ENIV\\Projets\\TP_ENIV.qgz</code> وفعّل <i>Project &gt; Properties &gt; General &gt; Save paths: Relative</i> (المسارات النسبية).</p>
<p>تضيف <b>الإضافات</b> (<i>Plugins &gt; Manage and Install Plugins</i>) وظائف جديدة: QuickMapServices (خرائط الأساس)، SAGA NextGen Provider، WhiteboxTools…</p>`,
  exercice: `
<ol>
  <li>ثبّت QGIS LTR ثم أنشئ المشروع <code>TP_ENIV.qgz</code>.</li>
  <li>أضف في المتصفح مفضّلة نحو <code>C:\\ENIV\\TP</code>.</li>
  <li>حمّل Communes وRoutes وOueds، ثم ثبّت الإضافة QuickMapServices وأضف خريطة أساس OpenStreetMap.</li>
</ol>` };
A["q1-l2"] = { titre: "التنقل والتعريف والقياس", objectifs: ["استعمال أدوات التنقل والتعريف", "قياس المسافات والمساحات", "عرض الخريطة ثلاثية الأبعاد"],
  contenu: `
<ul>
  <li><b>التنقل</b>: أداة Pan، عجلة الفأرة للتكبير، <i>Zoom to Layer</i> (نقرة يمنى على الطبقة).</li>
  <li><b>Identify Features</b> ‏(Ctrl+Shift+I): يعرض سمات الكيان بنقرة.</li>
  <li><b>القياس</b> لخط أو مساحة أو زاوية (شريط Attributes): القياسات إهليلجية افتراضيًا.</li>
  <li><b>العلامات المكانية</b>: <i>View &gt; New Spatial Bookmark</i> ‏(Ctrl+B).</li>
  <li>شريط الحالة: إحداثيات المؤشر، المقياس، نظام إحداثيات المشروع (انقر عليه لتغييره).</li>
</ul>
<p>للعرض ثلاثي الأبعاد: <i>View &gt; 3D Map Views &gt; New 3D Map View</i>. في إعدادات العرض ثلاثي الأبعاد اختر نموذج الارتفاع الرقمي (MNT) <b>تضاريسَ</b> (terrain) ومبالغة رأسية قدرها 2.</p>`,
  exercice: `
<ol>
  <li>قِس طول الطريق الرئيسي ومساحة أكبر بلدية.</li>
  <li>أنشئ علامتين (منطقة الدراسة، مقر الولاية).</li>
  <li>افتح عرضًا ثلاثي الأبعاد مع MNT تضاريسَ.</li>
</ol>` };

/* ---------- المستوى 2 ---------- */
A.q2 = { titre: "البيانات وأنظمة الإحداثيات", resume: "GeoPackage، أنظمة الإحداثيات وإعادة الإسقاط، الجداول والربط وملفات CSV، الترقيم والإرجاع الجغرافي.",
  quiz: [
    { question: "طبقة بلا ملف ‎.prj ونعرف نظامها: ماذا نفعل؟", choix: ["نعيد إسقاطها", "نحدد نظام إحداثيات الطبقة", "نرجعها جغرافيًا", "نحوّلها إلى نقطية"], explication: "تحديد نظام الإحداثيات لا يغيّر الإحداثيات." },
    { question: "أي تعبير يعطي المساحة بالكيلومتر المربع في حاسبة الحقول؟", choix: ["$length / 1000", "$area / 1000000", "area(km)", "$perimeter"], explication: "‏$area بوحدات مربعة لنظام الإحداثيات (م² في UTM)." },
    { question: "أي أداة في QGIS تُستعمل لمعايرة خريطة ممسوحة ضوئيًا؟", choix: ["Georeferencer", "المصمم Modeler", "حاسبة النقطيات", "الأطلس Atlas"], explication: "‏Layer > Georeferencer." },
    { question: "ما فائدة المغناطيس في شريط Snapping؟", choix: ["تكبير الخريطة", "التقاط الرؤوس على الكيانات الموجودة", "حذف الكيانات", "تغيير نظام الإحداثيات"], explication: "يتفادى الالتقاط الفجوات والتداخلات." }
  ] };
A["q2-l1"] = { titre: "أنظمة الإحداثيات وإعادة الإسقاط وGeoPackage", objectifs: ["ضبط نظام إحداثيات المشروع والطبقات", "التمييز بين تحديد نظام إحداثيات طبقة وإعادة إسقاطها", "ترتيب البيانات في GeoPackage"],
  contenu: `
<p>يتحدث QGIS عن <b>CRS</b> (أنظمة الإحداثيات المرجعية) وتُعرَّف برمز EPSG: ‏4326 ‏(WGS 84)، <b>32630</b> ‏(WGS 84 / UTM 30N، بيانات الأعمال التطبيقية)، 30730 ‏(Nord Sahara 1959 / UTM 30N). يُضبط نظام إحداثيات <b>المشروع</b> أسفل اليمين، وتُعاد إسقاط الطبقات آنيًا للعرض.</p>
<ul>
  <li><b>تحديد نظام الإحداثيات</b> لطبقة بلا ‎.prj: نقرة يمنى &gt; <i>Layer CRS &gt; Set Layer CRS</i> (أو الخوارزمية <i>Assign projection</i>). لا تتغير الإحداثيات.</li>
  <li><b>إعادة الإسقاط</b>: الخوارزمية <i>Reproject layer</i> (متجه) أو <i>Warp (reproject)</i> (نقطي). للانتقال من Nord Sahara 1959 إلى WGS 84 يقترح QGIS قائمة التحويلات المتاحة.</li>
</ul>
<h3>GeoPackage</h3>
<p>نقرة يمنى على الطبقة &gt; <i>Export &gt; Save Features As…</i>، صيغة GeoPackage، الملف <code>TP_ENIV.gpkg</code>، اسم الطبقة <code>communes</code>. كرّر ذلك لكل طبقة: ملف واحد يضم كل الأعمال التطبيقية. تقوم الخوارزمية <i>Package layers</i> بذلك دفعة واحدة.</p>`,
  exercice: `
<ol>
  <li>حدّد نظام إحداثيات <code>Forages_sans_projection</code> ‏(EPSG:32630).</li>
  <li>أعد إسقاط <code>Communes_NordSahara1959</code> إلى EPSG:32630 وقارنها بـ <code>Communes</code>.</li>
  <li>اجمع الطبقات الأساسية السبع في <code>TP_ENIV.gpkg</code>.</li>
</ol>` };
A["q2-l2"] = { titre: "جدول السمات والربط وملفات CSV", objectifs: ["تعديل الجدول واستعمال حاسبة الحقول", "ربط جدول خارجي", "تحميل ملف CSV للإحداثيات"],
  contenu: `
<p>نقرة يمنى &gt; <b>Open Attribute Table</b> ‏(F6). يفعّل القلم التحرير، وتنشئ <b>حاسبة الحقول</b> Field Calculator ‏(Ctrl+I) حقلًا أو تحدّثه بتعبير: <code>$area / 1000000</code> (المساحة بالكم²)، <code>"POP_2020" / ($area / 1e6)</code>، <code>upper("NOM")</code>.</p>
<h3>الربط</h3>
<p>حمّل <code>population_communes.csv</code> ‏(Layer &gt; Add Layer &gt; Delimited Text، الفاصل فاصلة منقوطة، <i>No geometry</i>). ثم <i>خصائص Communes &gt; Joins &gt; +</i>: حقل الربط <code>CODE</code> والحقل الهدف <code>CODE</code>. لربط دائم: الخوارزمية <i>Join attributes by field value</i>.</p>
<h3>نقاط XY</h3>
<p>‏<code>releves_gps.csv</code> نصًّا محدَّدًا: <i>Point coordinates</i>، X = <code>X</code>، Y = <code>Y</code>، النظام EPSG:32630.</p>`,
  exercice: `
<ol>
  <li>اربط السكان بالبلديات واحسب الكثافة.</li>
  <li>حمّل قراءات GPS واختر الواقعة منها في البلدية الأكثر سكانًا (<i>Select by Location</i>).</li>
</ol>` };
A["q2-l3"] = { titre: "الترقيم والإرجاع الجغرافي", objectifs: ["إنشاء طبقة وترقيمها مع الالتقاط", "الإرجاع الجغرافي لخريطة ممسوحة ضوئيًا"],
  contenu: `
<p>‏<i>Layer &gt; Create Layer &gt; New GeoPackage Layer</i>: نوع الهندسة، نظام الإحداثيات، الحقول. فعّل التحرير (القلم) ثم <b>Add Feature</b>. اضبط <b>الالتقاط</b> (شريط Snapping، أيقونة المغناطيس) على كل الطبقات، 10 بكسل. تعدّل أداة <b>Vertex Tool</b> الهندسات، وتعوّض لوحة <i>Advanced Digitizing</i> أدوات ArcMap للإدخال الدقيق.</p>
<h3>Georeferencer</h3>
<p>‏<i>Layer &gt; Georeferencer</i>. افتح الصورة وأضف نقاط معايرة (من 4 إلى 6 على الأقل) بكتابة الإحداثيات أو بالنقر على الخريطة. <i>Transformation Settings</i>: النوع Polynomial 1 ‏(Helmert أو affine)، النظام الهدف EPSG:32630، إعادة المعاينة Nearest neighbour. شغّل الإرجاع الجغرافي: يُنشأ ملف GeoTIFF مُعايَر مع جدول البواقي.</p>`,
  exercice: `
<ol>
  <li>أنشئ الطبقة <code>puits</code> في GeoPackage ورقّم 5 آبار.</li>
  <li>رقّم 3 قطع أرضية متجاورة مع تفعيل الالتقاط.</li>
  <li>عايِر خريطة ممسوحة ضوئيًا ودوّن متوسط الخطأ.</li>
</ol>` };

/* ---------- المستوى 3 ---------- */
A.q3 = { titre: "الترميز والتسميات والإخراج", resume: "أنماط مصنّفة ومتدرجة وقائمة على القواعد، التسميات، الإخراج، الأطلس.",
  quiz: [
    { question: "لتمثيل كثافة نختار النمط:", choix: ["Categorized (مصنّف)", "Graduated (متدرج)", "Single symbol (رمز واحد)", "Heatmap (خريطة حرارية)"], explication: "يصنّف النمط المتدرج قيمة عددية في فئات." },
    { question: "يقابل أطلس QGIS في ArcGIS:", choix: ["سلسلة الخرائط / Data Driven Pages", "ModelBuilder", "قاعدة البيانات الجغرافية", "الإرجاع الجغرافي"], explication: "صفحة لكل كيان من طبقة التغطية." },
    { question: "بأي صيغة يُحفظ نمط QGIS؟", choix: [".lyr", ".qml", ".mxd", ".py"], explication: "يمكن إعادة تطبيق ملف ‎.qml على أي طبقة مماثلة." },
    { question: "أي نمط يسمح باستعلام مختلف لكل فئة؟", choix: ["Rule-based (قائم على القواعد)", "Graduated", "Single symbol", "Inverted polygons"], explication: "لكل قاعدة مرشّحها ورمزها." }
  ] };
A["q3-l1"] = { titre: "الترميز والتسميات", objectifs: ["اختيار نوع نمط مناسب", "إنشاء تسميات وأنماط قائمة على القواعد"],
  contenu: `
<p>لوحة <b>Layer Styling</b> ‏(F7) أو Properties &gt; Symbology:</p>
<ul>
  <li><b>Single Symbol</b>، <b>Categorized</b> (قيم TYPE)، <b>Graduated</b> (خريطة كوروبليث، نمط Natural Breaks (Jenks))، <b>Rule-based</b> (استعلام لكل فئة)، <b>Heatmap</b>.</li>
  <li>الرموز التناسبية: في نمط Single Symbol، زر <i>Data defined override</i> بجانب الحجم &gt; <i>Assistant</i>.</li>
</ul>
<p><b>التسميات</b>: تبويب Labels &gt; <i>Single Labels</i>، القيمة <code>NOM</code>، هالة بيضاء. مع <i>Rule-based Labeling</i> تُسمّى مقرات الولايات والدوائر بشكل مختلف (<code>"CHEF_LIEU" = 'Oui'</code>).</p>
<p>يُحفظ النمط بصيغة <code>.qml</code> ‏(Style &gt; Save Style) لإعادة استعماله.</p>`,
  exercice: `
<ol>
  <li>أنجز خريطة متدرجة للكثافة في 5 فئات Jenks.</li>
  <li>مثّل الأثقاب برموز تتناسب مع الصبيب.</li>
  <li>سمِّ البلديات مع قاعدة خاصة بالمقرات.</li>
</ol>` };
A["q3-l2"] = { titre: "الإخراج والأطلس", objectifs: ["تركيب إخراج وتصديره", "إنتاج خريطة لكل بلدية بالأطلس"],
  contenu: `
<p>‏<i>Project &gt; New Print Layout</i>. أضف خريطة ومفتاحًا ومقياس رسم وسهم الشمال وتسمية (العنوان، المصدر) وصورة (الشعار). تضبط لوحة <i>Item Properties</i> كل عنصر. التصدير: <i>Layout &gt; Export as PDF / Image</i>.</p>
<h3>الأطلس</h3>
<p>لوحة <b>Atlas</b>: فعّل <i>Generate an atlas</i>، طبقة التغطية <code>Communes</code>، اسم الصفحة <code>NOM</code>. في خصائص الخريطة فعّل <i>Controlled by Atlas</i>. يُكتب العنوان الديناميكي بالتعبير <code>[% 'Commune de ' || "NOM" %]</code>. ينتج <i>Atlas &gt; Export Atlas as PDF</i> صفحة لكل بلدية.</p>`,
  exercice: `
<ol>
  <li>ركّب خريطة A4 كاملة وصدّرها PDF بدقة 300 dpi.</li>
  <li>أنشئ أطلسًا للبلديات التسع بعنوان ديناميكي.</li>
</ol>` };

/* ---------- المستوى 4 ---------- */
A.q4 = { titre: "المعالجات والتحليل المكاني", resume: "صندوق أدوات المعالجة، المعالجات الجغرافية المتجهة، أدوات النقطيات وحاسبة النقطيات.",
  quiz: [
    { question: "في QGIS، تقابل «Merge vector layers» في ArcGIS:", choix: ["Dissolve", "Merge", "Union", "Intersect"], explication: "انتبه في الواجهات الفرنسية: «Regrouper» في QGIS = «Fusionner/Dissolve» في ArcGIS، بينما «Fusionner» في QGIS تجمع الطبقات." },
    { question: "أي زر يطبّق خوارزمية على عدة طبقات؟", choix: ["Run as Batch Process", "Iterate over this layer", "History", "Cancel"], explication: "تملأ المعالجة بالدفعات جدولًا للمدخلات والمخرجات." },
    { question: "في حاسبة النقطيات، ماذا يعني «pente@1»؟", choix: ["السطر الأول", "النطاق 1 من نقطية الانحدار pente", "انحدار بدرجة واحدة", "ملف مؤقت"], explication: "‏@1 تعني النطاق، ولنموذج الارتفاع الرقمي نطاق واحد فقط." },
    { question: "أي خوارزمية تحوّل نقطية إلى مضلعات؟", choix: ["Rasterize", "Polygonize", "Clip", "Dissolve"], explication: "تنشئ Polygonize ‏(GDAL) مضلعًا لكل مجموعة خلايا لها القيمة نفسها." }
  ] };
A["q4-l1"] = { titre: "صندوق الأدوات والمعالجات المتجهة", objectifs: ["إيجاد خوارزمية واستعمال المعالجة بالدفعات", "إنجاز النطاقات العازلة والتراكب والإحصاء حسب المنطقة"],
  contenu: `
<p>يجمع <b>Processing Toolbox</b> ‏(Ctrl+Alt+T) خوارزميات QGIS الأصلية وGDAL وGRASS. اكتب الاسم في خانة البحث. يُسجَّل كل تشغيل في <i>History</i> (أيقونة الساعة) مع أمر Python الخاص به.</p>
<table class="tab">
  <tr><th>QGIS</th><th>ArcGIS</th></tr>
  <tr><td>Buffer</td><td>Buffer (نطاق عازل)</td></tr>
  <tr><td>Clip</td><td>Clip (قص)</td></tr>
  <tr><td>Intersection</td><td>Intersect (تقاطع)</td></tr>
  <tr><td>Union</td><td>Union (اتحاد)</td></tr>
  <tr><td>Difference</td><td>Erase (محو)</td></tr>
  <tr><td>Dissolve</td><td>Dissolve (دمج الكيانات)</td></tr>
  <tr><td>Merge vector layers</td><td>Merge (جمع الطبقات)</td></tr>
  <tr><td>Count points in polygon</td><td>Summarize Within</td></tr>
  <tr><td>Join attributes by nearest</td><td>Near (الأقرب)</td></tr>
</table>
<p>انتبه للأسماء في الواجهات الفرنسية: «Fusionner» في QGIS تجمع الطبقات، بينما «Fusionner» في ArcGIS تدمج الكيانات.</p>
<p>يطبّق زر <b>Run as Batch Process</b> خوارزمية على عدة طبقات دفعة واحدة، وينشئ الزر الأخضر <i>Iterate over this layer</i> مُخرجًا لكل كيان.</p>`,
  exercice: `
<ol>
  <li>أنشئ نطاقًا عازلًا مدموجًا بـ 200 م حول الأثقاب.</li>
  <li>احسب عدد الأثقاب في كل بلدية.</li>
  <li>بمعالجة بالدفعات، اقطع الطبقات الأساسية الست بمنطقة الدراسة.</li>
</ol>` };
A["q4-l2"] = { titre: "النقطيات: التضاريس والحاسبة وإعادة التصنيف", objectifs: ["حساب الانحدار والاتجاه والتظليل", "استعمال حاسبة النقطيات وإعادة التصنيف بجدول", "التحويل من النقطي إلى المتجه والعكس"],
  contenu: `
<p>أضف <code>MNT_50m.asc</code> ثم أسند إليه النظام EPSG:32630 ‏(Properties &gt; Source) وصدّره بصيغة GeoTIFF (نقرة يمنى &gt; Export &gt; Save As).</p>
<ul>
  <li><b>Slope</b> و<b>Aspect</b> و<b>Hillshade</b>: مجموعة <i>Raster terrain analysis</i> في صندوق الأدوات.</li>
  <li><b>Raster Calculator</b> (قائمة Raster): ‏<code>("pente@1" &gt; 15) * 1</code> تعطي 1 للانحدارات القوية و0 في غيرها.</li>
  <li><b>Reclassify by table</b>: جدول أدنى / أقصى / قيمة جديدة.</li>
  <li><b>Polygonize (raster to vector)</b> و<b>Rasterize (vector to raster)</b> ‏(GDAL).</li>
  <li><b>Zonal statistics</b>: متوسط الارتفاع في كل بلدية.</li>
</ul>`,
  exercice: `
<ol>
  <li>احسب الانحدار والتظليل، واعرض التظليل تحت MNT بنمط المزج Multiply.</li>
  <li>اعزل الانحدارات &gt; 15° وحوّلها إلى مضلعات.</li>
  <li>احسب متوسط ارتفاع كل بلدية.</li>
</ol>` };

/* ---------- المستوى 5 ---------- */
A.q5 = { titre: "المصمم الرسومي", resume: "بناء نموذج بمدخلات وخوارزميات، وإعادة استعماله أداةً وتصديره إلى Python.",
  quiz: [
    { question: "في مصمم QGIS، ماذا نعرّف أولًا؟", choix: ["المخرجات", "المدخلات", "الأنماط", "الإضافات"], explication: "تصبح المدخلات معاملات النموذج." },
    { question: "كيف نشغّل نموذجًا مرة لكل بلدية؟", choix: ["بمكرِّر ModelBuilder", "بـ «Iterate over this layer»", "بالأطلس", "غير ممكن"], explication: "يشغّل الزر الأخضر الخوارزمية على كل كيان." },
    { question: "ما امتداد نموذج QGIS؟", choix: [".model3", ".tbx", ".qml", ".atbx"], explication: "‏‎.model3 منذ QGIS 3." },
    { question: "ينتج تصدير نموذج إلى Python:", choix: ["سكربت arcpy", "خوارزمية معالجة PyQGIS", "ملف ‎.qgz", "صورة"], explication: "يستدعي السكربت processing.run لكل خطوة." }
  ] };
A["q5-l1"] = { titre: "بناء نموذج", objectifs: ["تعريف مدخلات النموذج", "تسلسل الخوارزميات"],
  contenu: `
<p>‏<i>Processing &gt; Graphical Modeler</i>. خلافًا لـ ModelBuilder، نعرّف أولًا <b>المدخلات</b> (تبويب Inputs: طبقة متجهة، طبقة نقطية، عدد، حقل…)، ثم نضيف <b>الخوارزميات</b> (تبويب Algorithms) مع اختيار مُدخل من النموذج أو مُخرج خوارزمية سابقة لكل معامل.</p>
<ol>
  <li>المدخلات: <i>Vector Layer</i> «Forages»، <i>Vector Layer</i> «Occupation du sol»، <i>Number</i> «Distance» (القيمة الافتراضية 200).</li>
  <li>خوارزمية <b>Buffer</b>: المُدخل = Forages، المسافة = Distance، مع دمج النتيجة.</li>
  <li>خوارزمية <b>Extract by attribute</b>: ‏Occupation du sol، ‏<code>TYPE = Urbain</code>.</li>
  <li>خوارزمية <b>Difference</b>: النطاق العازل ناقص المناطق العمرانية، وسمِّ المُخرج «Périmètres» (يصبح مُخرجًا للنموذج).</li>
</ol>
<p>احفظ النموذج (<code>.model3</code>) في المشروع أو في نماذج المستخدم: يظهر في صندوق الأدوات تحت <i>Models</i>.</p>`,
  exercice: `
<ol>
  <li>ابنِ هذا النموذج وشغّله بـ 100 م ثم 300 م.</li>
  <li>أضف خطوة <b>Count points in polygon</b> حسب البلدية.</li>
</ol>` };
A["q5-l2"] = { titre: "التكرار والتوثيق والتصدير إلى Python", objectifs: ["تكرار نموذج على عدة كيانات أو طبقات", "تصدير نموذج سكربتَ معالجة"],
  contenu: `
<p>لا يملك مصمم QGIS مكرِّرًا مثل ModelBuilder. للتكرار:</p>
<ul>
  <li><b>Iterate over this layer</b> (الزر الأخضر بجانب المُدخل): يُشغَّل النموذج مرة لكل كيان، مثلًا مرة لكل بلدية.</li>
  <li><b>Run as Batch Process</b>: سطر لكل مجموعة معاملات (عدة مسافات، عدة طبقات).</li>
</ul>
<p>وثّق النموذج (<i>Edit Model Help</i>): الوصف وشرح كل مُدخل. وأخيرًا ينتج <i>Export as Script Algorithm</i> خوارزمية معالجة PyQGIS، وهي نقطة انطلاق المستوى 6.</p>`,
  exercice: `
<ol>
  <li>شغّل النموذج بـ «Iterate over this layer» على البلديات.</li>
  <li>شغّله بالدفعات بثلاث مسافات.</li>
  <li>صدّره سكربتَ Python وحدّد استدعاءات <code>processing.run</code>.</li>
</ol>` };

/* ---------- المستوى 6 ---------- */
A.q6 = { titre: "البرمجة بـ PyQGIS", resume: "وحدة Python، ‏processing.run، المرور على الكيانات، سكربتات المعالجة وتصدير الإخراجات.",
  quiz: [
    { question: "أي دالة تشغّل خوارزمية من صندوق الأدوات؟", choix: ["arcpy.Buffer", "processing.run", "iface.run", "QgsBuffer()"], explication: "‏processing.run(\"المعرّف\", {المعاملات})." },
    { question: "كيف نحصل على طبقة من المشروع باسمها؟", choix: ["QgsProject.instance().mapLayersByName(\"Forages\")[0]", "arcpy.mp.Layer(\"Forages\")", "open(\"Forages\")", "iface.Forages"], explication: "تُرجع mapLayersByName قائمة (قد تحمل عدة طبقات الاسم نفسه)." },
    { question: "ما فائدة «with edit(couche):»؟", choix: ["فتح الجدول", "بدء التحرير والحفظ تلقائيًا في النهاية", "حذف الطبقة", "تغيير النمط"], explication: "تعتمد الكتلة التغييرات أو تلغيها عند حدوث خطأ." },
    { question: "كيف نعرف معاملات native:buffer؟", choix: ["processing.algorithmHelp(\"native:buffer\")", "help(buffer)", "في خصائص المشروع", "لا يمكن ذلك"], explication: "تسرد algorithmHelp المعاملات وأنواعها." }
  ] };
A["q6-l1"] = { titre: "وحدة Python و processing.run", objectifs: ["الوصول إلى طبقات المشروع بـ Python", "تشغيل خوارزمية من صندوق الأدوات بـ Python"],
  contenu: `
<p>‏<i>Plugins &gt; Python Console</i> ‏(Ctrl+Alt+P). يفتح زر <i>Show Editor</i> محرّرًا للسكربتات. يستعمل QGIS 3 الإصدار <b>Python 3</b>.</p>
<!--code:0-->
<p>لمعرفة معرّف خوارزمية ومعاملاتها: <code>processing.algorithmHelp("native:buffer")</code>، أو افتح الخوارزمية ثم <i>Advanced &gt; Copy as Python Command</i>.</p>`,
  exercice: `
<ol>
  <li>اعرض اسم كل طبقات المشروع وعدد كياناتها.</li>
  <li>شغّل نطاقًا عازلًا بـ Python وأضف النتيجة إلى الخريطة.</li>
</ol>` };
A["q6-l2"] = { titre: "المرور على الكيانات وتعديلها", objectifs: ["قراءة السمات والهندسة", "تعديل جدول داخل كتلة تحرير"],
  contenu: `
<!--code:0-->
<p>‏<code>with edit(couche):</code> تفتح التحرير ثم تحفظ (أو تلغي عند الخطأ) تلقائيًا.</p>`,
  exercice: `
<ol>
  <li>احسب متوسط صبيب الأثقاب المستغَلّة.</li>
  <li>أضف حقلًا <code>CLASSE</code> واملأه (Faible، Moyen، Fort) حسب الصبيب.</li>
</ol>` };
A["q6-l3"] = { titre: "سكربتات المعالجة والتصدير الآلي", objectifs: ["إنشاء سكربت يظهر في صندوق الأدوات", "تصدير أطلس بـ Python"],
  contenu: `
<p>في صندوق الأدوات، أيقونة Python &gt; <i>Create New Script from Template</i>. يعرّف القالب صنفًا <code>QgsProcessingAlgorithm</code> بمعاملاته. يظهر السكربت المحفوظ تحت <i>Scripts</i>: يُفتح كأداة، ويمكن تشغيله بالدفعات.</p>
<p>تصدير إخراج أو أطلس:</p>
<!--code:0-->
<p>يتضمن الملف <code>qgis_01_bases.py</code> (التنزيلات) هذه الأمثلة.</p>`,
  exercice: `
<ol>
  <li>أنشئ سكربت معالجة «Périmètre de protection» بمعاملين (الطبقة، المسافة).</li>
  <li>صدّر أطلس البلديات إلى PDF بسكربت.</li>
</ol>` };

/* ---------- المستوى 7 ---------- */
A.q7 = { titre: "نموذج الارتفاع الرقمي والهيدرولوجيا والفيضانات", resume: "الهيدرولوجيا بـ GRASS في QGIS: الملء، ‏r.watershed، الشبكة، الحوض الساكب من مخرج، المناطق المعرّضة للفيضان.",
  quiz: [
    { question: "أي أداة GRASS تحسب التراكم والاتجاهات والشبكة والأحواض دفعة واحدة؟", choix: ["r.fill.dir", "r.watershed", "r.to.vect", "r.reclass"], explication: "تُنتج r.watershed كل هذه الطبقات انطلاقًا من MNT." },
    { question: "لماذا تكون بعض قيم التراكم في r.watershed سالبة؟", choix: ["خطأ في MNT", "جزء من الماء يأتي من خارج المنطقة", "انحدار منعدم", "نظام إحداثيات خاطئ"], explication: "قد تكون هذه الخلايا مقدّرة بأقل من قيمتها، ونأخذ القيمة المطلقة للعرض." },
    { question: "أي أداة تحدد الحوض الساكب أعلى نقطة ما؟", choix: ["r.water.outlet", "Clip", "Proximity", "Atlas"], explication: "تنطلق من اتجاهات التصريف وإحداثيات المخرج." },
    { question: "بأي أداة نجمع المعايير المنقّطة في مجموع مرجّح؟", choix: ["Raster Calculator", "Dissolve", "Georeferencer", "الإخراج"], explication: "تقبل حاسبة النقطيات تعبيرًا يتضمن الأوزان." }
  ] };
A["q7-l1"] = { titre: "الشبكة الهيدروغرافية بـ GRASS", objectifs: ["استعمال أدوات GRASS في صندوق الأدوات", "حساب التراكم والاتجاهات والشبكة بـ r.watershed"],
  contenu: `
<p>شُرحت النظرية (المنخفضات، D8، التراكم، العتبة) في المستوى 7 من مسار ArcMap. في QGIS نستعمل <b>GRASS</b> المدمج في صندوق الأدوات (مجموعة <i>GRASS &gt; Raster</i>).</p>
<ol>
  <li><b>r.fill.dir</b>: يملأ المنخفضات ويحسب الاتجاهات (المخرجات: MNT مملوء، الاتجاهات، المناطق الإشكالية).</li>
  <li><b>r.watershed</b> على MNT المملوء: <i>Minimum size of exterior watershed basin</i> = 400 (خلية)، وفعّل <i>Enable Single Flow Direction (D8)</i>. المخرجات: <i>Number of cells that drain through each cell</i> (التراكم)، <i>Drainage direction</i>، <i>Stream segments</i>، <i>Unique label for each watershed basin</i>.</li>
  <li><b>r.to.vect</b> (النوع line) على مقاطع المجاري للحصول على خطوط، أو <i>Polygonize</i> للأحواض.</li>
</ol>
<div class="astuce"><b>انتبه:</b> تعطي r.watershed تراكمًا <b>سالبًا</b> للخلايا التي تستقبل ماءً من خارج MNT. استعمل <code>abs("acc@1")</code> في حاسبة النقطيات للعرض.</div>
<p>لرتبة Strahler، ثبّت الإضافة <b>SAGA NextGen Provider</b> (خوارزمية <i>Strahler order</i>) أو استعمل <i>Channel network and drainage basins</i> من SAGA.</p>`,
  exercice: `
<ol>
  <li>شغّل r.fill.dir ثم r.watershed بعتبة 400 خلية.</li>
  <li>حوّل الشبكة إلى متجه وقارنها بطبقة Oueds.</li>
  <li>أعد الحساب بـ 200 و1000 خلية.</li>
</ol>` };
A["q7-l2"] = { titre: "الحوض الساكب والمناطق المعرّضة للفيضان", objectifs: ["تحديد حوض ساكب انطلاقًا من مخرج", "رسم خريطة القابلية للفيضان"],
  contenu: `
<h3>الحوض الساكب</h3>
<p><b>r.water.outlet</b>: المُدخل = <i>Drainage direction</i> من r.watershed، وإحداثيات المخرج (انقر على الخريطة فوق خلية من الشبكة؛ تُقرأ إحداثيات <code>Exutoire.shp</code> بأداة Identify). حوّل النتيجة إلى مضلع ثم احسب <code>$area / 1e6</code> ومؤشر Gravelius ‏<code>0.28 * $perimeter / sqrt($area)</code>.</p>
<h3>المناطق المعرّضة للفيضان</h3>
<ol>
  <li>المسافة إلى الوادي: <b>Rasterize</b> للشبكة ثم <b>Proximity (raster distance)</b> ‏(GDAL).</li>
  <li>الارتفاع فوق الوادي: بـ GRASS عبر <b>r.stream.distance</b> (إضافة GRASS)؛ وإلا فقرّبه بالفرق بين MNT و<i>مرشّح أدنى</i> محلي، أو استعمل المسافة وحدها.</li>
  <li>الانحدار، التراكم، استخدام الأرض بعد تحويله إلى نقطي.</li>
  <li><b>Reclassify by table</b> لكل معيار من 1 إلى 5، ثم <b>Raster Calculator</b>: ‏<code>0.35*"dist@1" + 0.25*"haut@1" + 0.20*"pente@1" + 0.10*"acc@1" + 0.10*"occ@1"</code>.</li>
  <li>التحقق: <b>Sample raster values</b> على <code>Laisses_crues.shp</code>.</li>
</ol>
<p>يؤتمت السكربت <code>qgis_02_hydrologie.py</code> جزء الشبكة والحوض الساكب.</p>`,
  exercice: `
<ol>
  <li>حدّد الحوض الساكب لوادي تامدة واحسب مساحته.</li>
  <li>ابنِ خريطة القابلية للفيضان وتحقق منها بآثار الفيضانات.</li>
</ol>` };

/* ---------- المستوى 8 ---------- */
A.q8 = { titre: "الهشاشة أمام المخاطر الطبيعية الكبرى", resume: "التحليل متعدد المعايير في QGIS، خرائط الحرائق والزلازل والتسونامي والانزلاقات، والتوليف متعدد المخاطر.",
  quiz: [
    { question: "في QGIS، كيف نحصل على خريطة المسافة إلى الطرق؟", choix: ["Buffer", "Rasterize ثم Proximity (raster distance)", "Dissolve", "Clip"], explication: "تعمل Proximity ‏(GDAL) على نقطية: نحوّل الطرق إلى نقطية أولًا." },
    { question: "ما يقابل Kernel Density في QGIS هو:", choix: ["Heatmap (Kernel Density Estimation)", "Zonal statistics", "Polygonize", "Atlas"], explication: "‏Heatmap (تقدير الكثافة بالنواة)." },
    { question: "ماذا يجب التحقق منه قبل مجموع مرجّح في حاسبة النقطيات؟", choix: ["الألوان", "النطاق نفسه وحجم الخلية نفسه", "أسماء الملفات", "صيغة ‎.asc"], explication: "وإلا فلن تتطابق الخلايا تمامًا." },
    { question: "أي أداة تعطي أعلى خطر في كل خلية؟", choix: ["Cell statistics (Maximum)", "Zonal statistics", "Merge vector layers", "Reclassify"], explication: "تقارن النقطيات خلية بخلية." }
  ] };
A["q8-l1"] = { titre: "التحليل متعدد المعايير في QGIS", objectifs: ["تحضير المعايير النقطية بأدوات QGIS وGDAL", "جمع المعايير بحاسبة النقطيات"],
  contenu: `
<p>وُصفت الطريقة (الخطر، الهشاشة، النقاط من 1 إلى 5، الأوزان، AHP، التحقق) في المستوى 8 من مسار ArcMap. تقابل الأدوات:</p>
<table class="tab">
  <tr><th>المرحلة</th><th>ArcGIS</th><th>QGIS</th></tr>
  <tr><td>المسافة</td><td>Euclidean Distance</td><td>Rasterize + Proximity (raster distance)</td></tr>
  <tr><td>كثافة النقاط</td><td>Kernel Density</td><td>Heatmap (Kernel Density Estimation)</td></tr>
  <tr><td>متجه ← نقطي</td><td>Polygon to Raster</td><td>Rasterize (vector to raster)</td></tr>
  <tr><td>التنقيط</td><td>Reclassify</td><td>Reclassify by table</td></tr>
  <tr><td>المجموع المرجّح</td><td>Weighted Overlay</td><td>Raster Calculator</td></tr>
  <tr><td>أقصى قيمة لعدة نقطيات</td><td>Cell Statistics</td><td>Cell statistics</td></tr>
  <tr><td>الحصيلة حسب البلدية</td><td>Zonal Statistics as Table</td><td>Zonal statistics</td></tr>
  <tr><td>التحقق</td><td>Extract Values to Points</td><td>Sample raster values</td></tr>
</table>
<div class="astuce"><b>المحاذاة:</b> في حاسبة النقطيات يجب أن يكون لكل النقطيات النطاق نفسه وحجم الخلية نفسه. عند التحويل إلى نقطي، حدّد نطاق MNT ودقة 50 م.</div>`,
  exercice: `
<ol>
  <li>حضّر معيار «المسافة إلى الطرق» (تحويل إلى نقطي ثم Proximity) ونقّطه من 1 إلى 5.</li>
  <li>تحقق في خصائص الطبقات من أن لكل النقطيات النطاق نفسه والدقة نفسها.</li>
</ol>` };
A["q8-l2"] = { titre: "خرائط الخطر: الحرائق والزلازل والتسونامي والانزلاقات", objectifs: ["إنتاج خرائط الخطر الأربع في QGIS", "التحقق بالأحداث المرصودة"],
  contenu: `
<p>المعايير والأوزان هي تلك الواردة في الملف <code>Tables\\poids_multicritere.xlsx</code> (يُفتح مباشرة في QGIS):</p>
<ul>
  <li><b>الحرائق</b>: استخدام الأرض 35، الانحدار 20، الاتجاه 15 (أداة <i>Aspect</i>، السفوح الجنوبية = 5)، الطرق 15، الأماكن المأهولة 15. التحقق: Foyers_incendies.</li>
  <li><b>الزلازل</b>: الصدوع النشطة 40 (المرشّح <code>"ACTIVE" = 'Oui'</code>)، كثافة المراكز السطحية 25 (خريطة حرارية، نصف قطر 3000 م)، تأثير الموقع 25 (تحويل الحقل <code>AMPLIF</code> إلى نقطي)، الانحدار 10.</li>
  <li><b>التسونامي</b>: على <code>MNT_cote_25m</code>، اليابسة = <code>("mnt@1" &gt; 0) * "mnt@1"</code>؛ الارتفاع 50، المسافة إلى الساحل 35، الانحدار 15. سيناريو موجة بـ 5 م: <code>("mnt@1" &gt; 0) AND ("mnt@1" &lt;= 5) AND ("dist@1" &lt;= 1000)</code>.</li>
  <li><b>الانزلاقات</b>: تحويل <code>SUSC_GLIS</code> إلى نقطي (منقّط مسبقًا من 1 إلى 5) 35، الانحدار 30، الأودية 15، استخدام الأرض 10، الطرق 10. التحقق: Glissements.</li>
</ul>
<p>ينجز السكربت <code>qgis_03_risque_feux.py</code> خريطة الحرائق من البداية إلى النهاية، ويصلح نموذجًا للخرائط الثلاث الأخرى.</p>`,
  exercice: `
<ol>
  <li>أنجز خريطة خطر الحرائق بالمصمم الرسومي (مُدخل لكل طبقة، والأوزان مدخلات عددية).</li>
  <li>أنجز خرائط الزلازل والتسونامي والانزلاقات.</li>
  <li>قارن نتائجك بتلك المحصّلة في ArcGIS (البيانات نفسها والأوزان نفسها).</li>
</ol>` };
A["q8-l3"] = { titre: "التوليف متعدد المخاطر وأطلس البلديات", objectifs: ["جمع المخاطر", "إنتاج أطلس توليفي حسب البلدية"],
  contenu: `
<ul>
  <li><b>Cell statistics</b> (الإحصاء Maximum) على خرائط الفئات الأربع: أعلى خطر في كل خلية.</li>
  <li>تراكم المخاطر القوية في حاسبة النقطيات: <code>("inond@1" &gt;= 4) + ("feux@1" &gt;= 4) + ("seisme@1" &gt;= 4) + ("gliss@1" &gt;= 4)</code>.</li>
  <li><b>Zonal statistics</b> على <code>Communes</code> (متوسط التراكم)، ثم نمط متدرج.</li>
  <li>إخراج مع <b>أطلس</b>: صفحة لكل بلدية تضم الخريطة متعددة المخاطر وجدول سمات (المدارس المعرّضة) وعبارة <i>بيانات وهمية لأغراض تعليمية</i>.</li>
</ul>`,
  exercice: `
<ol>
  <li>أنتج خريطتي الخطر الأقصى والتراكم.</li>
  <li>أنشئ أطلسًا متعدد المخاطر للبلديات التسع بصيغة PDF.</li>
</ol>` };

/* ---------- المستوى 9 ---------- */
A.q9 = { titre: "الذكاء الاصطناعي في QGIS عبر MCP", resume: "ربط Claude بـ QGIS عبر بروتوكول MCP، وقيادة مشروع باللغة الطبيعية على بيانات تلمسان، مع التحكم في النتائج.",
  quiz: [
    { question: "في QGIS MCP، ما دور Claude Desktop؟", choix: ["خادم MCP", "عميل MCP", "إضافة QGIS", "صيغة بيانات"], explication: "‏Claude Desktop هو العميل: يشغّل خادم MCP ويستدعي أدواته." },
    { question: "ماذا يجب فعله في QGIS قبل الكتابة إلى Claude؟", choix: ["لا شيء", "النقر على Start Server في إضافة QGIS MCP", "فتح وحدة Python", "تثبيت GRASS"], explication: "يجب تشغيل الإضافة لتستقبل الأوامر." },
    { question: "أي أداة تتطلب أكبر قدر من الحذر؟", choix: ["ping", "get_layers", "execute_code", "zoom_to_layer"], explication: "تنفّذ execute_code أي شيفرة Python: اقرأها قبل القبول." },
    { question: "كيف نجعل تحليلًا منجزًا بالذكاء الاصطناعي قابلًا لإعادة الإنتاج؟", choix: ["بإعادة المحادثة نفسها", "بطلب سكربت PyQGIS أو بناء نموذج", "بلقطة شاشة", "غير ممكن"], explication: "السكربت أو النموذج يُعاد تشغيله بشكل مطابق، أما المحادثة فلا." }
  ] };
A["q9-l1"] = { titre: "فهم MCP وتثبيت QGIS MCP", objectifs: ["فهم دور العميل وخادم MCP وإضافة QGIS", "تثبيت QGIS MCP وربطه بـ Claude Desktop", "التحقق من الاتصال باختبار أول"],
  contenu: `
<p>‏<b>MCP</b> (<i>Model Context Protocol</i>) بروتوكول مفتوح يتيح لمساعد ذكاء اصطناعي استعمال <b>أدوات</b> يوفرها برنامج ما. فبدل الاكتفاء بالرد نصًّا، يستطيع المساعد أن يطلب من QGIS تحميل طبقة أو تشغيل خوارزمية أو إنتاج خريطة.</p>
<table class="tab">
  <tr><th>العنصر</th><th>الدور</th></tr>
  <tr><td><b>عميل MCP</b></td><td>تطبيق المحادثة، وهو هنا <b>Claude Desktop</b>: فيه تكتب طلباتك.</td></tr>
  <tr><td><b>خادم MCP</b></td><td>برنامج Python صغير يشغّله Claude Desktop، ويصف الأدوات المتاحة (تحميل طبقة، تشغيل معالجة…).</td></tr>
  <tr><td><b>إضافة QGIS</b></td><td>تفتح اتصالًا محليًا داخل QGIS وتنفّذ فعليًا الأوامر الواردة.</td></tr>
</table>
<p>نستعمل المشروع الحر <b>QGIS MCP</b> لصاحبه J. J. Santos ‏(github.com/jjsantos01/qgis_mcp). وهو مشروع مجتمعي، ليس رسميًا من QGIS ولا من Anthropic. اختبره صاحبه على QGIS 3.22: تحقق منه على إصدارك قبل الحصة.</p>
<h3>التثبيت</h3>
<ol>
  <li>ثبّت <b>Claude Desktop</b> ‏(claude.ai/download) وسجّل الدخول بحسابك.</li>
  <li>ثبّت <b>Python 3.10</b> أو أحدث، ثم مدير الحزم <b>uv</b>. في PowerShell:<br><code>powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code></li>
  <li>في صفحة المشروع على GitHub انقر <i>Code &gt; Download ZIP</i> وفك الضغط في <code>C:\\ENIV\\mcp\\qgis_mcp</code>.</li>
  <li>انسخ المجلد <code>qgis_mcp_plugin</code> إلى مجلد إضافات ملف تعريف QGIS. لإيجاده: <i>Settings &gt; User Profiles &gt; Open Active Profile Folder</i>، ثم <code>python\\plugins</code>.</li>
  <li>أعد تشغيل QGIS. في <i>Plugins &gt; Manage and Install Plugins</i>، تبويب <i>All</i>، ابحث عن «QGIS MCP» وفعّلها.</li>
  <li>شغّل <i>Plugins &gt; QGIS MCP &gt; QGIS MCP</i> وانقر <b>Start Server</b>.</li>
  <li>في Claude Desktop: ‏<i>Settings &gt; Developer &gt; Edit Config</i>. الصق هذه الكتلة في <code>claude_desktop_config.json</code> (الملف <code>mcp_qgis_config.json</code> في التنزيلات):</li>
</ol>
<!--code:0-->
<p>أعد تشغيل Claude Desktop. يجب أن تُظهر أيقونة الأدوات الخادم <b>qgis</b>. الاختبار الأول: اكتب «تحقق من الاتصال بـ QGIS ‏(ping) ثم أعطني إصدار QGIS».</p>
<div class="astuce"><b>لا تخلط:</b> يقترح المستودع الرسمي لإضافات QGIS أيضًا إضافة «QGIS MCP» ‏(N. Karasiak). تعمل مع خادمها الخاص <code>qgis-mcp</code> وبإعدادات مختلفة. لا تخلط بين المشروعين.</div>`,
  exercice: `
<ol>
  <li>ثبّت Claude Desktop وuv وإضافة QGIS MCP.</li>
  <li>شغّل الخادم في QGIS وأضف الإعدادات إلى Claude Desktop.</li>
  <li>أنجز اختبار «ping» ودوّن إصدار QGIS الذي يعيده Claude.</li>
</ol>` };
A["q9-l2"] = { titre: "عمل تطبيقي: قيادة QGIS باللغة الطبيعية", objectifs: ["معرفة الأدوات التي يوفرها QGIS MCP", "إنجاز تحليل كامل على بيانات تلمسان بطلبات مكتوبة", "التحقق من كل نتيجة في QGIS"],
  contenu: `
<p>يوفر QGIS MCP خمس عشرة أداة. يختار Claude الأداة المناسبة لطلبك، ويطلب Claude Desktop إذنك قبل كل استعمال.</p>
<table class="tab">
  <tr><th>الأداة</th><th>وظيفتها</th></tr>
  <tr><td><code>ping</code>، <code>get_qgis_info</code></td><td>اختبار الاتصال، إصدار QGIS</td></tr>
  <tr><td><code>create_new_project</code>، <code>load_project</code>، <code>get_project_info</code>، <code>save_project</code></td><td>تسيير مشروع ‎.qgz</td></tr>
  <tr><td><code>add_vector_layer</code>، <code>add_raster_layer</code>، <code>get_layers</code>، <code>remove_layer</code>، <code>zoom_to_layer</code></td><td>تسيير الطبقات</td></tr>
  <tr><td><code>get_layer_features</code></td><td>قراءة الكيانات وسماتها</td></tr>
  <tr><td><code>execute_processing</code></td><td>تشغيل خوارزمية من صندوق أدوات المعالجة</td></tr>
  <tr><td><code>render_map</code></td><td>تصدير عرض الخريطة صورةً</td></tr>
  <tr><td><code>execute_code</code></td><td>تنفيذ شيفرة PyQGIS (تحت المراقبة، انظر الدرس التالي)</td></tr>
</table>
<h3>سيناريو العمل التطبيقي (بيانات تلمسان)</h3>
<p>اكتب الطلبات واحدًا تلو الآخر وتحقق من النتيجة في QGIS بعد كل طلب:</p>
<ol>
  <li>«أنشئ مشروع QGIS جديدًا واحفظه في <code>C:/ENIV/Projets/TP_IA.qgz</code>.»</li>
  <li>«أضف الطبقتين <code>Communes.shp</code> و<code>Forages.shp</code> من المجلد <code>C:/ENIV/TP/Shapefiles</code>، ثم النقطية <code>C:/ENIV/TP/MNT/MNT_50m.asc</code>. ما نظام إحداثيات كل طبقة؟»</li>
  <li>«كم عدد الأثقاب في حالة Exploité؟ أعطني متوسط الصبيب (الحقل DEBIT_LS).»</li>
  <li>«أنشئ نطاقًا عازلًا مدموجًا بـ 200 م حول الأثقاب.»</li>
  <li>«احسب عدد الأثقاب في كل بلدية.»</li>
  <li>«طبّق نمطًا متدرجًا من 5 فئات على هذا العدد، ثم صدّر الخريطة PNG إلى <code>C:/ENIV/TP/Sorties/forages_ia.png</code>.»</li>
  <li>«أعطني سكربت PyQGIS الذي يعيد كل هذه الخطوات.» احفظه في <code>C:\\ENIV\\TP\\Scripts</code>.</li>
</ol>
<div class="astuce"><b>التحقق:</b> افتح جدول السمات، وتحقق من نظام الإحداثيات (EPSG:32630) والوحدات. قارن عدد الأثقاب في كل بلدية بنتيجة خوارزمية <i>Count points in polygon</i> المشغّلة يدويًا (المستوى 4).</div>`,
  exercice: `
<ol>
  <li>أنجز السيناريو كاملًا وأرفق خريطة PNG بتقريرك.</li>
  <li>دوّن الطلبات التي أساء Claude فهمها وأعد صياغتها.</li>
  <li>قارن سكربت PyQGIS المحصّل بالملف <code>qgis_01_bases.py</code>.</li>
</ol>` };
A["q9-l3"] = { titre: "الممارسات الجيدة والحدود والأمان", objectifs: ["البقاء متحكمًا فيما ينفّذه المساعد", "حماية البيانات والتحقق من النتائج"],
  contenu: `
<ul>
  <li><b>الأذونات</b>: يطلب Claude Desktop موافقتك قبل كل أداة. اقرأ الطلب وفضّل «Allow once» (السماح مرة واحدة).</li>
  <li><b>execute_code</b> تنفّذ أي شيفرة Python داخل QGIS. اقرأ دائمًا الشيفرة المقترحة قبل القبول: قد تحذف ملفات أو تستبدلها.</li>
  <li><b>البيانات</b>: محتوى الطبقات التي يقرؤها Claude يُرسَل إلى خدمة الذكاء الاصطناعي. استعمل البيانات الوهمية للأعمال التطبيقية، ولا تستعمل أبدًا بيانات سرية أو شخصية.</li>
  <li><b>التحقق</b>: قد يخطئ الذكاء الاصطناعي (طبقة خاطئة، وحدة خاطئة، نظام إحداثيات منسيّ) مع إجابة واثقة. تحقق من كل نتيجة كما تتحقق من عمل زميل.</li>
  <li><b>قابلية إعادة الإنتاج</b>: لا تُعاد المحادثة بشكل مطابق. اطلب سكربت PyQGIS أو ابنِ نموذجًا (المستوى 5) لتحافظ على طريقة ثابتة.</li>
  <li><b>اعمل على نسخة</b> من المجلد <code>C:\\ENIV\\TP</code> واحفظ المشروع قبل كل طلب مهم.</li>
  <li>يلزم اتصال بالإنترنت وحساب Claude. ودون اتصال، عُد إلى الأدوات التقليدية: فهي تبقى ضرورية.</li>
</ul>
<p>لا يعوّض الذكاء الاصطناعي المنهجية: أنت من يختار المعايير والأوزان ويفسّر خريطة الخطر. إنه يساعد على الإسراع في الخطوات المتكررة.</p>`,
  exercice: `
<ol>
  <li>اطلب من Claude خريطة للانحدارات التي تفوق 15° وتحقق من النتيجة بحاسبة النقطيات (المستوى 4).</li>
  <li>اكتب في 5 أسطر مزايا الذكاء الاصطناعي ومخاطره لمكتب دراسات في نظم المعلومات الجغرافية.</li>
</ol>` };
