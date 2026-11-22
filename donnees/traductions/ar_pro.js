/* Traduction ar du parcours pro */
window.TRAD = window.TRAD || {};
window.TRAD.ar = window.TRAD.ar || {};
var A = window.TRAD.ar;

/* ---------- المستوى 1 ---------- */
A.p1 = { titre: "اكتشاف ArcGIS Pro", resume: "مشروع ‎.aprx، الشريط، لوحتا Contents وCatalog، الخرائط والعروض ثلاثية الأبعاد: معالم الواجهة.",
  quiz: [
    { question: "ما امتداد مشروع ArcGIS Pro؟", choix: [".mxd", ".aprx", ".qgz", ".gdb"], explication: "يعوّض ‎.aprx الملف ‎.mxd ويمكن أن يضم عدة خرائط وإخراجات." },
    { question: "في ArcGIS Pro، يقابل جدول محتويات ArcMap اللوحة:", choix: ["Catalog", "Geoprocessing", "Contents", "Symbology"], explication: "تسرد لوحة Contents طبقات الخريطة النشطة." },
    { question: "أي إصدار من Python يستعمله ArcGIS Pro؟", choix: ["Python 2.7", "Python 3", "الاثنان", "لا شيء"], explication: "يستعمل ArcGIS Pro الإصدار Python 3 (بيئة arcgispro-py3)." },
    { question: "كيف تنتقل بالخريطة إلى ثلاثي الأبعاد؟", choix: ["بفتح ArcScene", "View > Convert > To Local Scene", "Insert > New Layout", "غير ممكن"], explication: "المشاهد ثلاثية الأبعاد مدمجة في المشروع دون تطبيق منفصل." }
  ] };
A["p1-l1"] = { titre: "مشروع ArcGIS Pro وواجهته", objectifs: ["إنشاء مشروع وفهم محتواه", "التعرف على الشريط واللوحات"],
  contenu: `
<p>يعوّض ArcGIS Pro كلًّا من ArcMap وArcCatalog وArcScene بـ <b>تطبيق واحد</b> بـ 64 بت. يُحفظ كل العمل في <b>مشروع</b> (‎<code>.aprx</code>) يجمع الخرائط والإخراجات والاتصالات بالمجلدات وقاعدة بيانات جغرافية وصندوق أدوات افتراضي.</p>
<table class="tab">
  <tr><th>ArcMap 10.8</th><th>ArcGIS Pro</th></tr>
  <tr><td>وثيقة ‎.mxd</td><td>مشروع ‎.aprx (عدة خرائط وإخراجات)</td></tr>
  <tr><td>أشرطة الأدوات</td><td><b>الشريط</b> (Ribbon) بتبويبات سياقية (Map، Insert، Analysis، View، Format…)</td></tr>
  <tr><td>جدول المحتويات</td><td>لوحة <b>Contents</b></td></tr>
  <tr><td>ArcCatalog</td><td>لوحة <b>Catalog</b> مدمجة</td></tr>
  <tr><td>ArcToolbox</td><td>لوحة <b>Geoprocessing</b> (تبويب Analysis &gt; Tools)</td></tr>
  <tr><td>ArcScene / ArcGlobe</td><td><b>مشهد</b> محلي أو عالمي في المشروع نفسه</td></tr>
  <tr><td>Python 2.7</td><td>Python 3 (بيئة arcgispro-py3)</td></tr>
</table>
<p>عند الفتح، اختر <i>Map</i> (قالب فارغ مع خريطة أساس). سمِّ المشروع <code>TP_ENIV</code> في الموقع <code>C:\\ENIV\\Projets</code>. ينشئ ArcGIS Pro مجلدًا بالاسم نفسه يضم <code>TP_ENIV.aprx</code> و<code>TP_ENIV.gdb</code> و<code>TP_ENIV.atbx</code>.</p>
<div class="astuce"><b>نصيحة:</b> إذا اختفت لوحة، أعد فتحها من تبويب <b>View</b> (Catalog، Contents، Geoprocessing…). يعيد زر <i>Reset Panes</i> الترتيب الأصلي.</div>`,
  exercice: `<ol>
  <li>أنشئ المشروع <code>TP_ENIV</code>.</li>
  <li>في لوحة Catalog، انقر بالزر الأيمن على <i>Folders &gt; Add Folder Connection</i> واختر <code>C:\\ENIV\\TP</code>.</li>
  <li>اسحب <code>Communes.shp</code> و<code>Routes.shp</code> إلى الخريطة، ثم احفظ المشروع.</li>
</ol>` };
A["p1-l2"] = { titre: "التنقل، الاستكشاف والانتقال إلى ثلاثي الأبعاد", objectifs: ["استعمال أداة Explore والإشارات المرجعية", "تحويل خريطة إلى مشهد ثلاثي الأبعاد"],
  contenu: `
<p>تعوّض أداة <b>Explore</b> (تبويب Map) أدوات التكبير والتحريك والتعريف: السحب بالزر الأيسر = تحريك، العجلة = تكبير، النقر على عنصر = نافذة منبثقة بسماته.</p>
<ul>
  <li><b>الإشارات المرجعية</b> (Bookmarks): تبويب Map &gt; Bookmarks &gt; New Bookmark، للعودة إلى امتداد معين.</li>
  <li><b>المقياس</b>: إدخال مباشر أسفل العرض (مثل <code>1:50 000</code>).</li>
  <li><b>الإحداثيات</b>: تظهر أسفل اليمين؛ انقر بالزر الأيمن لتغيير الوحدة (DMS، درجات عشرية، MGRS…).</li>
</ul>
<p>للعرض ثلاثي الأبعاد: تبويب <b>View &gt; Convert &gt; To Local Scene</b>. أضف نموذج الارتفاع كـ <i>سطح ارتفاع</i> (في Contents، Elevation Surfaces &gt; Add Elevation Source) وطبّق مبالغة عمودية من 2 إلى 3 لرؤية تضاريس الحوض بوضوح.</p>`,
  exercice: `<ol>
  <li>أنشئ إشارتين مرجعيتين: كامل منطقة الدراسة ومقر البلدية.</li>
  <li>حوّل الخريطة إلى مشهد محلي وأضف <code>MNT_50m.asc</code> كسطح ارتفاع.</li>
  <li>ضع المدارس في العرض ثلاثي الأبعاد والتقط صورة للشاشة.</li>
</ol>` };

/* ---------- المستوى 2 ---------- */
A.p2 = { titre: "البيانات وأنظمة الإحداثيات", resume: "قاعدة البيانات الجغرافية الملفية، الإسقاطات، الجداول والربط، الترقيم والإرجاع الجغرافي في ArcGIS Pro.",
  quiz: [
    { question: "ما صيغة التخزين الموصى بها في ArcGIS Pro؟", choix: ["Shapefile", "قاعدة بيانات جغرافية ملفية (‎.gdb)", "ملف Excel", "KML"], explication: "تتعامل قاعدة البيانات الملفية بشكل أفضل مع الأسماء الطويلة والنطاقات والجداول الكبيرة." },
    { question: "طبقة دون ‎.prj نعرف نظامها: أي أداة نستعمل؟", choix: ["Project", "Define Projection", "Georeference", "XY Table To Point"], explication: "تكتب Define Projection النظام دون تغيير الإحداثيات." },
    { question: "أي رمز EPSG يوافق WGS 1984 UTM المنطقة 30N؟", choix: ["4326", "30730", "32630", "3857"], explication: "32630؛ أما 30730 فهو Nord Sahara 1959 UTM 30N." },
    { question: "في تبويب Edit، ما فائدة مجموعة Snapping؟", choix: ["أخذ صورة للشاشة", "إلصاق الرؤوس بالعناصر الموجودة", "تصدير الخريطة", "حساب المساحة"], explication: "يتفادى الالتقاط الفراغات والتداخلات بين العناصر." },
    { question: "بعد الربط، أي زر يتحقق من تطابق الرموز؟", choix: ["Validate Join", "Calculate Geometry", "Remove All Joins", "Refresh"], explication: "يعرض Validate Join عدد السجلات المتطابقة." }
  ] };
A["p2-l1"] = { titre: "قاعدة البيانات الجغرافية، أنظمة الإحداثيات والإسقاطات", objectifs: ["استيراد ملفات shapefile إلى قاعدة بيانات جغرافية ملفية", "التمييز بين تعريف الإسقاط والإسقاط", "اختيار النظام المناسب لشمال غرب الجزائر"],
  contenu: `
<p>يعمل ArcGIS Pro بشكل مفضّل مع <b>قاعدة البيانات الجغرافية الملفية</b> (‎<code>.gdb</code>). لاستيراد ملفات shapefile الخاصة بالتمرين: زر أيمن على <code>TP_ENIV.gdb</code> &gt; <i>Import &gt; Feature Class(es)</i>، أو أداة <b>Feature Class To Geodatabase</b>.</p>
<p>يُضبط <b>نظام إحداثيات الخريطة</b> في <i>Map Properties &gt; Coordinate Systems</i> (نقر مزدوج على «Map» في Contents). تُسقط الطبقات «آنيًا» للعرض، لكن حسابات المساحة والمسافة يجب أن تتم على بيانات <b>مُسقطة</b> بالأمتار.</p>
<table class="tab">
  <tr><th>النظام</th><th>رمز EPSG</th><th>الاستعمال</th></tr>
  <tr><td>WGS 1984 (درجات)</td><td>4326</td><td>GPS، تبادل البيانات، خرائط الويب</td></tr>
  <tr><td>WGS 1984 UTM المنطقة 30N</td><td>32630</td><td>تلمسان وغرب البلاد (بيانات التمرين)</td></tr>
  <tr><td>Nord Sahara 1959 UTM المنطقة 30N</td><td>30730</td><td>الخرائط الطبوغرافية INCT</td></tr>
</table>
<ul>
  <li><b>Define Projection</b>: البيانات بلا ‎.prj، فنخبرها بنظام إحداثياتها.</li>
  <li><b>Project</b>: ننشئ نسخة في نظام آخر. بين Nord Sahara 1959 وWGS 1984، اختر <b>تحويلًا جغرافيًا</b> (يقترح ArcGIS Pro قائمتها).</li>
</ul>`,
  exercice: `<ol>
  <li>استورد ملفات shapefile السبعة من مجلد <code>Shapefiles</code> إلى <code>TP_ENIV.gdb</code>.</li>
  <li>عرّف إسقاط <code>Projections\\Forages_sans_projection</code> بنظام WGS 1984 UTM 30N.</li>
  <li>أسقط <code>Communes_NordSahara1959</code> إلى WGS 1984 UTM 30N وقارن مع <code>Communes</code>: ما الانزياح الذي تلاحظه دون تحويل؟</li>
</ol>` };
A["p2-l2"] = { titre: "الجداول، الربط ونقاط XY", objectifs: ["فتح جدول سمات وتعديله", "ربط جدول Excel أو CSV", "إنشاء نقاط انطلاقًا من إحداثيات"],
  contenu: `
<p>زر أيمن على طبقة &gt; <b>Attribute Table</b>. تسمح قائمة ☰ في الجدول بإضافة حقل (<i>Add Field</i>، ثم <b>Save</b> في تبويب Fields)، وحساب حقل (<b>Calculate Field</b>، بـ Python 3 أو Arcade) وحساب الهندسة (<i>Calculate Geometry</i>: المساحة، الطول، الإحداثيات).</p>
<h3>الربط</h3>
<p>زر أيمن على <code>Communes</code> &gt; <i>Joins and Relates &gt; Add Join</i>. الجدول: <code>population_communes.xlsx</code> (الورقة <code>Population$</code>)، الحقل المشترك: <code>CODE</code>. فعّل <i>Keep all target features</i> ثم تحقق من الربط بزر <i>Validate Join</i>.</p>
<h3>نقاط XY</h3>
<p>أداة <b>XY Table To Point</b> على <code>releves_gps.csv</code>: ‏X = <code>X</code>، ‏Y = <code>Y</code>، النظام WGS 1984 UTM 30N. ومع <code>LON</code>/<code>LAT</code>، اختر WGS 1984 (GCS).</p>`,
  exercice: `<ol>
  <li>اربط جدول السكان بالبلديات، ثم احسب الكثافة (<code>POP_2020 / المساحة بالكم²</code>) في حقل جديد.</li>
  <li>أنشئ طبقة قراءات GPS انطلاقًا من ملف CSV.</li>
  <li>حدّد القراءات الواقعة على أقل من 500 م من طريق (<i>Select By Location</i>).</li>
</ol>` };
A["p2-l3"] = { titre: "الترقيم والإرجاع الجغرافي", objectifs: ["إنشاء فئة عناصر وترقيمها", "إرجاع خريطة ممسوحة بنقاط تحكم"],
  contenu: `
<p><b>إنشاء فئة عناصر</b>: زر أيمن على قاعدة البيانات &gt; <i>New &gt; Feature Class</i> (النوع، الحقول، نظام الإحداثيات). ثم تبويب <b>Edit &gt; Create</b>: تقترح لوحة <i>Create Features</i> قالبًا لكل طبقة. يُضبط الالتقاط في Edit &gt; <b>Snapping</b>.</p>
<ul>
  <li><b>Edit Vertices</b>، <b>Reshape</b>، <b>Split</b>، <b>Merge</b>: تبويب Edit، مجموعة Tools.</li>
  <li>لا تنس <b>حفظ</b> التعديلات (زر Save في تبويب Edit).</li>
</ul>
<h3>الإرجاع الجغرافي</h3>
<p>أضف الصورة الممسوحة، حدّدها في Contents، ثم تبويب <b>Imagery &gt; Georeference</b>. استعمل <i>Fit To Display</i> لتقريبها، ثم <b>Add Control Points</b> (على الأقل 4 إلى 6 تقاطعات شبكة موزعة جيدًا). راجع <b>جدول نقاط التحكم</b> وخطأ RMS. وأنهِ بـ <b>Save as New</b> لإنشاء raster مُرجع.</p>`,
  exercice: `<ol>
  <li>أنشئ فئة العناصر النقطية <code>Puits</code> (الحقول NOM، PROF_M) ورقّم 5 آبار.</li>
  <li>أنشئ فئة مضلعات <code>Parcelles</code> ورقّم 3 قطع متجاورة مع تفعيل الالتقاط.</li>
  <li>إذا كانت لديك خريطة INCT ممسوحة، أرجِعها ودوّن خطأ RMS المحصل عليه.</li>
</ol>` };

/* ---------- المستوى 3 ---------- */
A.p3 = { titre: "الترميز، التسميات والإخراج", resume: "لوحة Symbology، الفئات، التسمية، الإخراج والتصدير إلى PDF، سلسلة الخرائط.",
  quiz: [
    { question: "لرسم خريطة الكثافة السكانية حسب البلدية، نستعمل:", choix: ["رمزًا واحدًا", "قيمًا فريدة", "ألوانًا متدرجة", "رموزًا تناسبية"], explication: "تُمثَّل البيانات النسبية (الكثافة، المعدل) بألوان متدرجة." },
    { question: "في ArcGIS Pro، مكافئ الصفحات الديناميكية (Data Driven Pages) لـ ArcMap هو:", choix: ["سلسلة الخرائط (Map Series)", "إطار الخريطة", "طبقة الفهرس", "الإشارة المرجعية"], explication: "تُنشئ سلسلة الخرائط صفحة لكل عنصر من طبقة الفهرس." },
    { question: "أين نصدّر إخراجًا إلى PDF؟", choix: ["تبويب Share > Export Layout", "تبويب Analysis", "لوحة Catalog", "تبويب Imagery"], explication: "يجمع تبويب Share عمليات التصدير والنشر." },
    { question: "أي عنصر ليس ضروريًا في خريطة موضوعية؟", choix: ["المفتاح", "المقياس", "المصدر", "خريطة أساس فضائية"], explication: "العنوان والمفتاح والمقياس والاتجاه والمصدر مطلوبة؛ أما الخلفية الفضائية فاختيارية." }
  ] };
A["p3-l1"] = { titre: "الترميز والتسميات", objectifs: ["اختيار طريقة تمثيل مناسبة", "وضع التسميات وتسيير تعارضاتها"],
  contenu: `
<p>حدّد الطبقة، ثم تبويب <b>Feature Layer &gt; Symbology</b>. تقترح اللوحة: <i>Single Symbol</i>، <i>Unique Values</i> (فئات)، <i>Graduated Colors</i> (كوروبليث)، <i>Graduated</i> أو <i>Proportional Symbols</i>، <i>Charts</i> (مخططات)، <i>Heat Map</i> (خريطة حرارية).</p>
<ul>
  <li>سكان البلديات: <b>Graduated Colors</b> على الكثافة (لا على عدد السكان الخام)، طريقة <i>Natural Breaks</i>، 5 فئات.</li>
  <li>استعمال الأرض: <b>Unique Values</b> على <code>TYPE</code>، بألوان اصطلاحية (أخضر للغابة، أصفر للزراعة، أحمر للعمران).</li>
  <li>الآبار: <b>Proportional Symbols</b> على <code>DEBIT_LS</code>.</li>
</ul>
<p><b>التسميات</b>: تبويب <i>Labeling</i>، الحقل <code>NOM</code>. تسمح <i>فئات التسميات</i> بأنماط مختلفة حسب استعلام (مثلًا مقرات البلديات بخط عريض). يُستعمل محرك Maplex افتراضيًا؛ اضبط الأولوية والموضع في <i>Labeling Properties</i>.</p>`,
  exercice: `<ol>
  <li>أنجز خريطة كوروبليث للكثافة السكانية في 5 فئات.</li>
  <li>رمّز الأودية حسب الحقل <code>ORDRE</code> (سُمك متزايد).</li>
  <li>سمِّ البلديات، مع فئة تسميات بخط عريض لـ <code>CHEF_LIEU = 'Oui'</code>.</li>
</ol>` };
A["p3-l2"] = { titre: "الإخراج، التصدير وسلسلة الخرائط", objectifs: ["تصميم إخراج كامل", "التصدير إلى PDF أو PNG", "إنتاج خريطة لكل بلدية آليًا"],
  contenu: `
<p>تبويب <b>Insert &gt; New Layout</b> (A4 أو A3، عمودي أو أفقي). أدرج <b>إطار خريطة</b>، ثم من تبويب Insert: العنوان، المفتاح، سهم الشمال، شريط المقياس، نص المصدر، صورة شعار ENIV. تُضبط العناصر في لوحة <i>Format</i>.</p>
<ul>
  <li>خريطة الموقع: أدرج إطار خريطة ثانيًا مرتبطًا بخريطة أخرى في المشروع، وأضف <i>مؤشر الامتداد</i> (Extent Indicator).</li>
  <li>التصدير: تبويب <b>Share &gt; Export Layout</b> (PDF، PNG بدقة 300 نقطة…).</li>
</ul>
<h3>سلسلة الخرائط</h3>
<p>تبويب Layout &gt; <b>Map Series &gt; Spatial</b>: طبقة الفهرس = <code>Communes</code>، حقل الاسم = <code>NOM</code>. يعرض نص ديناميكي اسم الصفحة. ينتج التصدير ملف PDF من 9 صفحات، صفحة لكل بلدية. إنه مكافئ الصفحات الديناميكية في ArcMap.</p>`,
  exercice: `<ol>
  <li>صمّم خريطة A4 أفقية لمنطقة الدراسة بكل العناصر الإلزامية.</li>
  <li>أضف خريطة موقع بمؤشر امتداد.</li>
  <li>أنشئ سلسلة خرائط حسب البلدية وصدّرها في ملف PDF متعدد الصفحات.</li>
</ol>` };

/* ---------- المستوى 4 ---------- */
A.p4 = { titre: "المعالجة الجغرافية والتحليل المكاني", resume: "لوحة Geoprocessing، النطاقات العازلة، التراكبات، التحديد، تحليل البيانات النقطية بـ Spatial Analyst.",
  quiz: [
    { question: "أين نجد الأدوات التي نُفّذت وأوامرها بلغة Python؟", choix: ["Analysis > History", "لوحة Contents", "تبويب Share", "لوحة Symbology"], explication: "يحتفظ السجل بكل تنفيذ مع معاملاته." },
    { question: "أي أداة تحتفظ بكل أجزاء طبقتي مضلعات؟", choix: ["Clip", "Intersect", "Union", "Erase"], explication: "تحتفظ Union بكل شيء مع سمات الطبقتين." },
    { question: "أي أداة تعدّ الآبار في كل بلدية؟", choix: ["Summarize Within", "Near", "Dissolve", "Merge"], explication: "تجمّع Summarize Within العناصر حسب المضلع." },
    { question: "الدوال النقطية في تبويب Imagery:", choix: ["تنشئ دائمًا ملفًا", "تحسب آنيًا دون كتابة ملف", "لا تعمل إلا في ثلاثي الأبعاد", "تعوّض الترميز"], explication: "تُحسب عند العرض؛ ولا نصدّر النتيجة إلا عند الحاجة." }
  ] };
A["p4-l1"] = { titre: "لوحة Geoprocessing والنطاقات العازلة", objectifs: ["إيجاد أداة وتشغيلها، والاطلاع على السجل", "إنشاء نطاقات عازلة بسيطة ومتعددة"],
  contenu: `
<p>يفتح تبويب <b>Analysis &gt; Tools</b> لوحة <b>Geoprocessing</b>: شريط بحث (اكتب «buffer»)، <i>Favorites</i> و<i>Toolboxes</i>. يُحفظ كل تنفيذ في <b>Analysis &gt; History</b>: بالنقر بالزر الأيمن يمكن إعادة تشغيله أو نسخ أمر Python.</p>
<ul>
  <li><b>Buffer</b>: مسافة ثابتة أو مأخوذة من حقل، خيار <i>Dissolve</i> ALL.</li>
  <li><b>Multiple Ring Buffer</b>: 100 و250 و500 م حول الآبار.</li>
  <li><b>Near</b>: مسافة كل مدرسة إلى أقرب طريق، تُكتب في الجدول.</li>
</ul>
<div class="astuce"><b>نصيحة:</b> يحدد تبويب <i>Environments</i> لكل أداة الامتداد ونظام المخرج ومساحة العمل، كما في ArcMap.</div>`,
  exercice: `<ol>
  <li>أنشئ محيط حماية بـ 200 م حول الآبار (مدمج).</li>
  <li>أنشئ حلقات بـ 100 و250 و500 م حول المدارس.</li>
  <li>بأداة <b>Near</b>، بيّن لكل مدرسة المسافة إلى أقرب طريق.</li>
</ol>` };
A["p4-l2"] = { titre: "التراكبات: القص، التقاطع، الاتحاد، الدمج", objectifs: ["اختيار أداة التراكب المناسبة", "إنتاج إحصائيات حسب المنطقة"],
  contenu: `
<table class="tab">
  <tr><th>الأداة</th><th>الاسم الفرنسي</th><th>النتيجة</th></tr>
  <tr><td>Clip</td><td>Découper</td><td>طبقة الإدخال محصورة في امتداد</td></tr>
  <tr><td>Intersect</td><td>Intersecter</td><td>الأجزاء المشتركة، مع سمات الطبقتين</td></tr>
  <tr><td>Union</td><td>Agréger</td><td>كل أجزاء الطبقتين</td></tr>
  <tr><td>Erase</td><td>Effacer</td><td>طبقة الإدخال ناقص الامتداد</td></tr>
  <tr><td>Dissolve</td><td>Fusionner</td><td>يجمع العناصر ذات القيمة نفسها</td></tr>
  <tr><td>Merge</td><td>Combiner</td><td>يجمع عدة طبقات من النوع نفسه</td></tr>
</table>
<p>في ArcGIS Pro، تتوفر Erase وIntersect برخصة Basic (كانتا تتطلبان Advanced في إصدارات ArcMap القديمة).</p>
<p>تعدّ أداة <b>Summarize Within</b> العناصر أو تجمعها حسب المضلع: عدد الآبار في كل بلدية، طول الطرق في كل بلدية.</p>`,
  exercice: `<ol>
  <li>قاطع استعمال الأرض مع البلديات، ثم ادمج حسب البلدية والنوع: أي بلدية لديها أكبر مساحة غابية؟</li>
  <li>بأداة Summarize Within، عُدّ الآبار في كل بلدية.</li>
  <li>امحُ المناطق العمرانية من محيطات حماية الآبار.</li>
</ol>` };
A["p4-l3"] = { titre: "البيانات النقطية وSpatial Analyst", objectifs: ["حساب الانحدار والاتجاه والتظليل", "استعمال حاسبة البيانات النقطية وإعادة التصنيف"],
  contenu: `
<p>أضف <code>MNT_50m.asc</code> إلى الخريطة، ثم صدّره إلى GeoTIFF (زر أيمن &gt; <i>Data &gt; Export Raster</i>) بنظام WGS 1984 UTM 30N. توجد أدوات البيانات النقطية في صندوق <b>Spatial Analyst</b> (يتطلب رخصة) أو في تبويب <b>Imagery &gt; Raster Functions</b> (حساب آني دون ملف).</p>
<ul>
  <li><b>Slope</b> (الانحدار) بالدرجات، <b>Aspect</b> (الاتجاه)، <b>Hillshade</b> (التظليل).</li>
  <li><b>Raster Calculator</b>: <code>Con("pente" &gt; 15, 1, 0)</code>.</li>
  <li><b>Reclassify</b>: الحدود والقيم الجديدة في جدول.</li>
  <li><b>Raster to Polygon</b> و<b>Polygon to Raster</b> للانتقال من نموذج إلى آخر.</li>
  <li><b>Zonal Statistics as Table</b>: متوسط الارتفاع في كل بلدية.</li>
</ul>`,
  exercice: `<ol>
  <li>احسب الانحدار والتظليل، ثم ضعهما فوق بعض مع الشفافية.</li>
  <li>اعزل الانحدارات الأكبر من 15° وحوّلها إلى مضلعات.</li>
  <li>احسب متوسط ارتفاع كل بلدية.</li>
</ol>` };

/* ---------- المستوى 5 ---------- */
A.p5 = { titre: "ModelBuilder: النمذجة المكانية والأتمتة", resume: "برنامج من خمس مراحل مستوحى من دورة «ModelBuilder في ArcGIS Pro» لـ Fathy Geo Code: النمذجة المكانية، الأدوات والمتغيرات، المكررات، المعاملات والبيئات، التطبيقات العملية.",
  quiz: [
    { question: "في ModelBuilder، الشكل البيضوي الأخضر يمثل:", choix: ["بيانات إدخال", "أداة", "بيانات مشتقة (مخرج أداة)", "مكرِّرًا"], explication: "الأزرق = إدخال، الأصفر = أداة، الأخضر = بيانات منتَجة." },
    { question: "كيف نستعمل قيمة متغير Distance في اسم مخرج؟", choix: ["#Distance#", "%Distance%", "{Distance}", "$Distance"], explication: "يستعمل الاستبدال المباشر علامات النسبة المئوية." },
    { question: "أي أداة تجمع مخرجات المكرِّر؟", choix: ["Collect Values", "Merge", "Dissolve", "Summarize"], explication: "تجمع Collect Values المخرجات؛ ثم يمكن ضمها." },
    { question: "كيف نُظهر مُدخلًا في نافذة حوار أداة النموذج؟", choix: ["بإعادة تسميته", "بتحديده كمعامل (P)", "بجعله وسيطًا", "بتلوينه بالأخضر"], explication: "لا تظهر في نافذة الحوار إلا العناصر المحددة بـ P." },
    { question: "لتبقى كل البيانات النقطية في نموذج متطابقة، نضبط في البيئات:", choix: ["حجم الخلية وraster الالتقاط", "لون العناصر", "السجل", "مجلد المخرجات فقط"], explication: "يضمن Cell size وSnap raster شبكات متطابقة." },
    { question: "كم مكرِّرًا يمكن أن يضم النموذج؟", choix: ["واحد فقط (وإلا فنموذج فرعي)", "اثنان", "عدد غير محدود", "لا شيء"], explication: "لإدراج حلقات متداخلة، نضع نموذجًا فرعيًا داخل النموذج الرئيسي." }
  ] };
A["p5-l1"] = { titre: "مدخل إلى النمذجة المكانية وModelBuilder", objectifs: ["فهم ماهية النموذج المكاني ولماذا نؤتمت", "فتح ModelBuilder وقراءة نموذج"],
  contenu: `
<p><b>النموذج المكاني</b> سلسلة عمليات تحوّل بيانات الإدخال إلى نتيجة: مثلًا «نموذج الارتفاع → الانحدار → مناطق الانحدار الشديد». وصفه في شكل نموذج يسمح بـ <b>توثيقه</b> و<b>إعادته</b> بشكل مطابق على بيانات أخرى و<b>مشاركته</b> كأداة.</p>
<p><b>ModelBuilder</b> هو المحرر الرسومي للنماذج في ArcGIS Pro: تبويب <b>Analysis &gt; ModelBuilder</b>. يُحفظ النموذج في صندوق أدوات المشروع (<code>TP_ENIV.atbx</code>).</p>
<table class="tab">
  <tr><th>العنصر</th><th>الشكل واللون</th><th>الدور</th></tr>
  <tr><td>بيانات إدخال</td><td>شكل بيضوي أزرق</td><td>طبقة أو ملف موجود</td></tr>
  <tr><td>أداة</td><td>مستطيل أصفر (رمادي إذا نقص معامل)</td><td>أداة معالجة جغرافية</td></tr>
  <tr><td>بيانات مشتقة</td><td>شكل بيضوي أخضر</td><td>نتيجة أداة، قابلة لإعادة الاستعمال في التالية</td></tr>
  <tr><td>متغير</td><td>شكل بيضوي أزرق فاتح</td><td>قيمة (مسافة، عتبة، حقل…)</td></tr>
  <tr><td>مكرِّر، منطق</td><td>سداسي برتقالي</td><td>الحلقات والشروط</td></tr>
</table>
<p>أزرار شريط ModelBuilder: <i>Validate</i> (يتحقق من النموذج كله)، <i>Run</i>، <i>Auto Layout</i>، <i>Fit To Window</i>، <i>Intermediate</i> (تُحذف البيانات الموسومة «وسيطة» بعد التنفيذ).</p>`,
  exercice: `<ol>
  <li>أنشئ نموذجًا جديدًا وأعد تسميته «Pente_forte» (زر أيمن &gt; Properties في Catalog).</li>
  <li>اسحب أداة <b>Slope</b> من لوحة Geoprocessing ولاحظ لونها قبل ربط نموذج الارتفاع وبعده.</li>
  <li>اكتب على الورق مراحل نموذج يجد المدارس الواقعة على أقل من 300 م من وادٍ.</li>
</ol>` };
A["p5-l2"] = { titre: "بناء نموذج بالأدوات والمتغيرات", objectifs: ["ربط عدة أدوات في سلسلة", "إنشاء متغيرات وربطها بالأدوات", "استعمال الاستبدال المباشر للمتغيرات"],
  contenu: `
<h3>ربط الأدوات</h3>
<p>أضف <code>Forages</code> إلى النموذج، ثم أداة <b>Buffer</b>؛ اربطهما بأداة <i>Connect</i>. أضف <b>Erase</b> (المناطق العمرانية من <code>Occupation_sol</code>) ثم <b>Summarize Within</b> (حسب <code>Communes</code>). يصبح المخرج الأخضر لكل أداة مُدخلًا للتالية.</p>
<h3>المتغيرات</h3>
<ul>
  <li>زر أيمن على أداة &gt; <b>Create Variable &gt; From Parameter &gt; Distance</b>: تصبح المسافة شكلًا بيضويًا يمكن تعديله دون فتح الأداة.</li>
  <li>يمكن لمتغير واحد أن يغذي عدة أدوات (المسافة نفسها لنطاقين عازلين).</li>
  <li><b>الاستبدال المباشر</b>: اكتب اسم المتغير بين علامتي <code>%</code> في مسار. مثال للمخرج: <code>%scratchGDB%\\Tampon_%Distance%</code>. متغيرات النظام المفيدة: <code>%scratchGDB%</code>، <code>%scratchFolder%</code>، <code>%n%</code> (رقم التكرار).</li>
</ul>
<div class="astuce"><b>ممارسات جيدة:</b> أعد تسمية كل عنصر (زر أيمن &gt; Rename) باسم معبّر، وحدّد المخرجات الوسيطة كـ <i>Intermediate</i> للاحتفاظ بالنتيجة النهائية فقط.</div>`,
  exercice: `<ol>
  <li>ابنِ النموذج Forages → Buffer → Erase (العمراني) → Summarize Within (البلديات).</li>
  <li>أنشئ متغيرًا <code>Distance</code> واستعمله في اسم المخرج.</li>
  <li>نفّذ بـ 200 م ثم 500 م وقارن عدد الآبار المحمية في كل بلدية.</li>
</ol>` };
A["p5-l3"] = { titre: "المكرِّرات: تكرار معالجة", objectifs: ["اختيار المكرِّر المناسب", "إنتاج مخرج لكل عنصر أو قيمة أو ملف", "جمع نتائج حلقة"],
  contenu: `
<p>تبويب ModelBuilder &gt; <b>Iterators</b>. يدور المكرِّر بعدد العناصر، ويقدّم في كل دورة قيمة (غالبًا باسم <code>Value</code> أو <code>Name</code>).</p>
<table class="tab">
  <tr><th>المكرِّر</th><th>مثال ببيانات التمرين</th></tr>
  <tr><td>Iterate Field Values</td><td>مخرج لكل بلدية (<code>Communes.NOM</code>)</td></tr>
  <tr><td>Iterate Features / Iterate Row Selection</td><td>معالجة كل حوض أو كل مدرسة على حدة</td></tr>
  <tr><td>Iterate Feature Classes</td><td>قص كل ملفات shapefile في مجلد حسب منطقة الدراسة</td></tr>
  <tr><td>Iterate Rasters</td><td>حساب انحدار عدة نماذج ارتفاع</td></tr>
  <tr><td>For / While</td><td>اختبار عدة عتبات: 200، 400، 600… خلية</td></tr>
</table>
<p>مثال: <b>Iterate Field Values</b> (<code>Communes</code>، الحقل <code>NOM</code>) → <b>Select Layer By Attribute</b> → <b>Clip</b> (<code>Forages</code>) → المخرج <code>%scratchGDB%\\Forages_%Value%</code>.</p>
<p>تسترجع <b>Collect Values</b> كل مخرجات الحلقة؛ اربطها بعد ذلك بـ <b>Merge</b> للحصول على طبقة واحدة. لا يضم النموذج إلا مكرِّرًا واحدًا: لإدراج حلقتين متداخلتين، ضع <b>نموذجًا فرعيًا</b> داخل النموذج الرئيسي.</p>`,
  exercice: `<ol>
  <li>أنشئ نموذجًا يقص الآبار لكل بلدية.</li>
  <li>أضف Collect Values ثم Merge لتجميع النتيجة.</li>
  <li>بمكرِّر <b>For</b> (من 200 إلى 1000، بخطوة 200)، استخرج خمس شبكات هيدروغرافية بعتبات مختلفة.</li>
</ol>` };
A["p5-l4"] = { titre: "المعاملات والبيئات", objectifs: ["تحويل نموذج إلى أداة بمعاملات", "ضبط البيئات على مستوى النموذج أو الأداة", "إضافة شروط ورسائل"],
  contenu: `
<h3>معاملات النموذج</h3>
<p>زر أيمن على بيانات إدخال أو متغير أو المخرج النهائي &gt; <b>Parameter</b>: يظهر حرف «P». في <i>Model Properties &gt; Parameters</i>، اضبط الترتيب والاسم المعروض والنوع والقيمة الافتراضية و<b>مرشحًا</b> (مثلًا قائمة قيم أو مجالًا 100–1000 م). ثم انقر نقرًا مزدوجًا على النموذج في Catalog: يُفتح مثل أي أداة.</p>
<h3>البيئات</h3>
<ul>
  <li><b>للنموذج كله</b>: Model Properties &gt; Environments (الامتداد، نظام إحداثيات المخرج، حجم الخلية، raster الالتقاط، القناع).</li>
  <li><b>لأداة واحدة</b>: نقر مزدوج على الأداة &gt; تبويب Environments.</li>
  <li>للبيانات النقطية، ثبّت دائمًا <i>Cell Size</i> و<i>Snap Raster</i> على نموذج الارتفاع: تبقى كل الشبكات متطابقة.</li>
</ul>
<h3>الشروط</h3>
<p>تقترح قائمة <b>Logical</b>: <i>If Data Exists</i>، <i>If Row Count Is</i>، <i>If Value Is</i>، <i>Stop</i>… مثال: لا يُشغَّل القص إلا إذا ضم التحديد عنصرًا واحدًا على الأقل. وتفرض <b>الشروط المسبقة</b> (زر أيمن &gt; Properties &gt; Preconditions) ترتيب التنفيذ.</p>`,
  exercice: `<ol>
  <li>اعرض كمعاملات: طبقة الإدخال، المسافة (مرشح 50–1000 م) والمخرج.</li>
  <li>ثبّت نظام المخرج WGS 1984 UTM 30N وامتداد منطقة الدراسة في بيئات النموذج.</li>
  <li>أضف شرط <i>If Row Count Is</i> &gt; 0 قبل القص.</li>
</ol>` };
A["p5-l5"] = { titre: "تطبيق عملي: نموذج الارتفاع → القص → إعادة التصنيف → حاسبة البيانات النقطية", objectifs: ["بناء نموذج نقطي من البداية إلى النهاية", "ضبط معاملاته، تشغيله على مناطق أخرى وتصديره إلى Python"],
  contenu: `
<p>الهدف: إنتاج خريطة <b>الأراضي غير الملائمة للبناء</b> (انحدار شديد أو قاع وادٍ) لبلدية، بنموذج قابل لإعادة الاستعمال.</p>
<ol>
  <li><b>البيانات النقطية المدخلة</b>: <code>MNT_50m</code> (معامل).</li>
  <li><b>Clip Raster</b> حسب البلدية المختارة (معامل: مضلع)، مع التأشير على <i>Use Input Features for Clipping Geometry</i>.</li>
  <li><b>Slope</b> (بالدرجات) على النموذج المقصوص.</li>
  <li><b>Reclassify</b> للانحدار: 0–5° → 1، 5–15° → 2، 15–25° → 3، أكثر من 25° → 4.</li>
  <li><b>Raster Calculator</b>: الدمج مع الارتفاع النسبي، مثلًا <code>Con(("pente_cl" &gt;= 3) | ("mnt_dec" &lt; %Seuil_alt%), 1, 0)</code>، حيث <code>Seuil_alt</code> متغير في النموذج.</li>
  <li><b>المخرج</b>: <code>%scratchGDB%\\Contraintes_%Commune%</code>، ثم <b>Raster to Polygon</b> لحساب المساحة المعنية.</li>
</ol>
<p>متغيرات ببيانات المستويين 7 و8: سلسلة Fill → Flow Direction → Flow Accumulation → Raster Calculator (عتبة) لنموذج «شبكة هيدروغرافية»، أو Euclidean Distance → Reclassify → Weighted Sum لنموذج خطر.</p>
<p>أنهِ بـ <b>Export &gt; Export To Python File</b>: الشيفرة الناتجة هي الجسر نحو المستوى 6 (ArcPy).</p>`,
  exercice: `<ol>
  <li>ابنِ النموذج الكامل بثلاثة معاملات: نموذج الارتفاع، البلدية، عتبة الارتفاع.</li>
  <li>أضف مكرِّر <b>Iterate Field Values</b> لإنتاج خريطة كل البلديات في تنفيذ واحد.</li>
  <li>صدّر النموذج إلى Python وقارن السكريبت الناتج مع <code>07_zones_inondables.py</code>.</li>
</ol>` };

/* ---------- المستوى 6 ---------- */
A.p6 = { titre: "ArcPy بـ Python 3 والدفاتر", resume: "نافذة Python، الدفاتر (notebooks)، السكريبتات المستقلة، المؤشرات، arcpy.mp وأدوات السكريبت.",
  quiz: [
    { question: "أي وحدة تعوّض arcpy.mapping في ArcGIS Pro؟", choix: ["arcpy.da", "arcpy.mp", "arcpy.sa", "arcpy.na"], explication: "تسيّر arcpy.mp المشاريع والخرائط والطبقات والإخراجات." },
    { question: "كيف نشير إلى المشروع المفتوح في دفتر؟", choix: ["arcpy.mp.ArcGISProject(\"CURRENT\")", "arcpy.mapping.MapDocument()", "arcpy.env.workspace", "arcpy.GetProject()"], explication: "تدل \"CURRENT\" على المشروع المفتوح في التطبيق." },
    { question: "أي صياغة خاصة بـ Python 3؟", choix: ["print \"texte\"", "f\"{nom}\"", "u\"texte\"", "xrange()"], explication: "سلاسل f-strings غير موجودة في Python 2.7." },
    { question: "أي برنامج يشغّل سكريبت ArcPy خارج التطبيق؟", choix: ["python27.exe", "propy.bat", "arcmap.exe", "qgis.bat"], explication: "يفعّل propy.bat بيئة Python الخاصة بـ ArcGIS Pro." }
  ] };
A["p6-l1"] = { titre: "نافذة Python والدفاتر", objectifs: ["تنفيذ الأدوات بلغة Python داخل ArcGIS Pro", "استعمال دفتر Jupyter مدمج في المشروع"],
  contenu: `
<p>يقترح تبويب <b>Analysis &gt; Python</b> <b>نافذة Python</b> و<b>الدفاتر</b> (Jupyter مدمج، ملف ‎<code>.ipynb</code> محفوظ في المشروع). <code>arcpy</code> مستوردة مسبقًا وتُستعمل طبقات الخريطة النشطة بأسمائها.</p>
<!--code:0-->
<p>يكتب ArcGIS Pro الأدوات بالشكل <code>arcpy.boite.Outil</code> (مثل <code>arcpy.analysis.Clip</code>، <code>arcpy.management.Project</code>). والشكل القديم <code>Clip_analysis</code> ما زال يعمل.</p>
<p>الفروق مع Python 2.7 في ArcMap: <code>print()</code> بأقواس، السلاسل Unicode افتراضيًا (لم تعد الحروف المنبورة مشكلة)، القسمة <code>/</code> عشرية دائمًا.</p>`,
  exercice: `<ol>
  <li>في دفتر، شغّل نطاقًا عازلًا واعرض عدد العناصر.</li>
  <li>انقر بالزر الأيمن على أداة في السجل &gt; <i>Copy Python Command</i> والصقها في الدفتر.</li>
</ol>` };
A["p6-l2"] = { titre: "السكريبتات، الحلقات والمؤشرات", objectifs: ["كتابة سكريبت مستقل يُنفَّذ ببيئة arcgispro-py3", "قراءة السمات وتعديلها بـ arcpy.da"],
  contenu: `
<p>يُنفَّذ السكريبت المستقل بـ <code>propy.bat</code> (المرفق مع ArcGIS Pro) أو من محرر مضبوط على البيئة <code>arcgispro-py3</code>.</p>
<!--code:0-->
<p>سلاسل <b>f-strings</b> (<code>f"{fc} : {n}"</code>) خاصة بـ Python 3. تعمل السكريبتات 01 إلى 03 من مسار ArcMap أيضًا في ArcGIS Pro، بشرط إضافة الأقواس إلى <code>print</code> عند الحاجة.</p>`,
  exercice: `<ol>
  <li>اسرد كل طبقات مجلد Shapefiles مع عدد عناصرها.</li>
  <li>بمؤشر SearchCursor، احسب متوسط تدفق الآبار المستغلة.</li>
  <li>شغّل السكريبت بـ <code>propy.bat</code> من موجه الأوامر.</li>
</ol>` };
A["p6-l3"] = { titre: "أتمتة الإخراجات بـ arcpy.mp وإنشاء أداة سكريبت", objectifs: ["التعامل مع مشروع وخرائطه وإخراجاته بـ Python", "تحويل سكريبت إلى أداة في صندوق أدوات"],
  contenu: `
<p>تعوّض <code>arcpy.mp</code> وحدة <code>arcpy.mapping</code> الخاصة بـ ArcMap.</p>
<!--code:0-->
<h3>أداة السكريبت</h3>
<p>في Catalog، زر أيمن على صندوق الأدوات &gt; <i>New &gt; Script</i>. حدّد ملف ‎.py وعرّف المعاملات (النوع، الاتجاه، القيمة الافتراضية). في السكريبت، اقرأها بـ <code>arcpy.GetParameterAsText(0)</code> واعرض الرسائل بـ <code>arcpy.AddMessage()</code>.</p>`,
  exercice: `<ol>
  <li>أنشئ إخراجًا بعنصر نصي اسمه «Titre»، ثم صدّر خريطة PDF لكل بلدية بالسكريبت أعلاه.</li>
  <li>حوّل السكريبت <code>05_outil_zone_protection.py</code> إلى أداة سكريبت بمعاملين.</li>
</ol>` };

/* ---------- المستوى 7 ---------- */
A.p7 = { titre: "نموذج الارتفاع الرقمي، الهيدرولوجيا والفيضانات", resume: "مجموعة Hydrology في Spatial Analyst داخل ArcGIS Pro: الملء، الجريان، الشبكة، الحوض المائي، المناطق المعرضة للفيضان.",
  quiz: [
    { question: "في ArcGIS Pro، أي نوع لاتجاه الجريان يوافق النموذج الكلاسيكي لـ ArcMap؟", choix: ["MFD", "DINF", "D8", "HAND"], explication: "يرسل D8 كل الماء نحو خلية مجاورة واحدة." },
    { question: "أين توجد Fill وFlow Direction وWatershed؟", choix: ["Spatial Analyst > Hydrology", "Analysis > Proximity", "Data Management > Raster", "3D Analyst > Visibility"], explication: "إنها أدوات مجموعة Hydrology في Spatial Analyst." },
    { question: "السكريبتان 06 و07 من مسار ArcMap في ArcGIS Pro:", choix: ["لا يعملان", "يعملان كما هما", "يتطلبان arcpy.mapping", "يتطلبان QGIS"], explication: "يستعملان print()‎ وarcpy.sa المتوافقتين مع Python 3." },
    { question: "أي أداة في ArcGIS Pro تسمح بضبط أوزان تحليل متعدد المعايير بشكل تفاعلي؟", choix: ["Suitability Modeler", "سلسلة الخرائط", "Georeference", "Notebook"], explication: "يعرض Suitability Modeler النتيجة عند كل تغيير للوزن." }
  ] };
A["p7-l1"] = { titre: "من نموذج الارتفاع إلى الشبكة الهيدروغرافية", objectifs: ["تحضير نموذج الارتفاع وتصحيح المنخفضات", "حساب اتجاهات الجريان وتراكمه", "استخراج الشبكة وترتيبها"],
  contenu: `
<p>الطريقة نفسها كما في ArcMap (راجع المستوى 7 من مسار ArcMap للجانب النظري). توجد الأدوات في <b>Spatial Analyst &gt; Hydrology</b>.</p>
<ol>
  <li><b>Fill</b> لنموذج الارتفاع → <code>fill.tif</code>.</li>
  <li><b>Flow Direction</b>: اختر النوع <b>D8</b> (يقترح ArcGIS Pro أيضًا MFD وDINF).</li>
  <li><b>Flow Accumulation</b>.</li>
  <li><b>Raster Calculator</b>: <code>Con("facc.tif" &gt; 400, 1)</code> (1 كم² بخلايا 50 م).</li>
  <li><b>Stream Order</b> (Strahler) ثم <b>Stream to Feature</b>.</li>
</ol>
<div class="astuce"><b>أسرع:</b> يقترح ArcGIS Pro 3.x أيضًا أداتي <b>Derive Continuous Flow</b> ثم <b>Derive Stream As Line</b> اللتين تسلسلان عدة مراحل. أنجز أولًا الطريقة خطوة بخطوة لتفهم.</div>
<p>يعمل السكريبت <code>06_hydrologie.py</code> كما هو في ArcGIS Pro (Python 3): افتحه في دفتر أو شغّله بـ <code>propy.bat</code>.</p>`,
  exercice: `<ol>
  <li>سلسِل Fill وFlow Direction (D8) وFlow Accumulation.</li>
  <li>استخرج الشبكة بعتبة 400 خلية واحسب رتبة Strahler.</li>
  <li>ابنِ هذه المراحل في نموذج ModelBuilder مع العتبة كمعامل.</li>
</ol>` };
A["p7-l2"] = { titre: "الحوض المائي والمناطق المعرضة للفيضان", objectifs: ["تحديد الحوض المائي لوادي تامدة", "رسم خريطة القابلية للفيضان والعناصر المعرضة"],
  contenu: `
<h3>الحوض المائي</h3>
<p><b>Snap Pour Point</b> (150 م) على <code>Risques\\Exutoire.shp</code>، ثم <b>Watershed</b> و<b>Raster to Polygon</b>. احسب المساحة بـ <i>Calculate Geometry</i> (كم²) ومؤشر Gravelius <code>Kc = 0.28 · P / √A</code> في حاسبة الحقول.</p>
<h3>المناطق المعرضة للفيضان</h3>
<p>المقاربة نفسها كما في ArcMap: الارتفاع فوق الوادي (HAND) بـ <b>Euclidean Allocation</b>، المسافة إلى الوادي، الانحدار، التراكم واستعمال الأرض، كل منها منقط من 1 إلى 5، ثم <b>Weighted Sum</b> (35، 25، 20، 10، 10 %). في ArcGIS Pro، يسمح تبويب <b>Analysis &gt; Suitability Modeler</b> أيضًا بضبط المعايير والأوزان تفاعليًا مع معاينة فورية.</p>
<p>تحقق بـ <code>Laisses_crues.shp</code> (<b>Extract Values to Points</b>) واسرد المدارس الواقعة في الفئة القوية. يقوم السكريبت <code>07_zones_inondables.py</code> بكل هذا العمل.</p>`,
  exercice: `<ol>
  <li>حدّد الحوض المائي واحسب مساحته ومؤشر Gravelius.</li>
  <li>ابنِ خريطة القابلية للفيضان وتحقق منها بآثار الفيضانات.</li>
  <li>أعد الترجيح في Suitability Modeler وقارن الخريطتين.</li>
</ol>` };

/* ---------- المستوى 8 ---------- */
A.p8 = { titre: "الهشاشة أمام المخاطر الطبيعية الكبرى", resume: "حرائق الغابات، الزلازل، التسونامي، الانزلاقات الأرضية والتركيب متعدد المخاطر بـ ArcGIS Pro.",
  quiz: [
    { question: "أي أداة تحوّل قيمة مستمرة إلى نقطة دون إنشاء درجات؟", choix: ["Reclassify", "Rescale by Function", "Zonal Statistics", "Clip"], explication: "تطبّق Rescale by Function دالة مستمرة (خطية، لوجستية…)." },
    { question: "في Weighted Overlay، مجموع نسب التأثير يساوي:", choix: ["1", "10", "100", "أي قيمة"], explication: "يجب أن يبلغ مجموع نسب التأثير 100." },
    { question: "أي أداة تعطي الفئة الأعلى من بين عدة خرائط مخاطر؟", choix: ["Cell Statistics (MAXIMUM)", "Mosaic", "Combine", "Dissolve"], explication: "تحسب Cell Statistics خلية بخلية على عدة بيانات نقطية." },
    { question: "لإظهار منطقة مغمورة بشكل أفضل، يتيح ArcGIS Pro:", choix: ["مشهدًا محليًا ثلاثي الأبعاد", "ملف ‎.mxd", "ArcScene", "إرجاعًا جغرافيًا"], explication: "المشاهد ثلاثية الأبعاد مدمجة في المشروع." }
  ] };
A["p8-l1"] = { titre: "التحليل متعدد المعايير في ArcGIS Pro: Weighted Overlay وSuitability Modeler", objectifs: ["تحضير معايير خطر وتنقيطها", "دمج المعايير وتبرير الأوزان"],
  contenu: `
<p>للتذكير: <b>الخطورة = الخطر الطبيعي × هشاشة العناصر المعرضة</b> (راجع المستوى 8 في ArcMap، الدرس 1، والقانون 04-20). المراحل متطابقة في ArcGIS Pro:</p>
<ol>
  <li>تحضير كل معيار: <b>Euclidean Distance</b>، <b>Slope</b>، <b>Aspect</b>، <b>Polygon to Raster</b>، <b>Kernel Density</b>…</li>
  <li>التنقيط من 1 إلى 5 بـ <b>Reclassify</b> أو <b>Rescale by Function</b> التي تحوّل قيمة مستمرة إلى نقطة دون إنشاء درجات.</li>
  <li>الدمج بـ <b>Weighted Overlay</b> (نسب التأثير = 100)، <b>Weighted Sum</b>، أو <b>Suitability Modeler</b>.</li>
  <li>تقسيم المؤشر إلى 5 فئات والتحقق بالأحداث الملاحظة.</li>
</ol>
<p>الأوزان المقترحة في <code>Tables\\poids_multicritere.xlsx</code>. يُفتح الجدول مباشرة في ArcGIS Pro (Add Data &gt; ورقة Excel).</p>`,
  exercice: `<ol>
  <li>افتح ورقة «Feux de forêt» (حرائق الغابات) من جدول الأوزان في ArcGIS Pro.</li>
  <li>قارن Reclassify وRescale by Function على معيار «المسافة إلى الطرق».</li>
</ol>` };
A["p8-l2"] = { titre: "خرائط المخاطر: الحرائق، الزلازل، التسونامي، الانزلاقات", objectifs: ["إنتاج خرائط المخاطر الأربع ببيانات التمرين", "التحقق من كل خريطة بالأحداث الملاحظة"],
  contenu: `
<table class="tab">
  <tr><th>الخطر</th><th>المعايير (الأوزان)</th><th>التحقق</th><th>السكريبت</th></tr>
  <tr><td>حرائق الغابات</td><td>استعمال الأرض 35، الانحدار 20، الاتجاه 15، الطرق 15، الأماكن المأهولة 15</td><td>Foyers_incendies</td><td>08_risque_feux.py</td></tr>
  <tr><td>الزلزال</td><td>الصدوع النشطة 40، كثافة المراكز السطحية 25، أثر الموقع (AMPLIF) 25، الانحدار 10</td><td>—</td><td>09_risque_sismique.py</td></tr>
  <tr><td>التسونامي</td><td>الارتفاع 50، المسافة إلى الساحل 35، الانحدار 15 + سيناريو موجة 5 م</td><td>Enjeux_cote</td><td>10_tsunami.py</td></tr>
  <tr><td>الانزلاقات</td><td>الصخارة (SUSC_GLIS) 35، الانحدار 30، الأودية 15، استعمال الأرض 10، الطرق 10</td><td>Glissements</td><td>11_glissements.py</td></tr>
</table>
<p>تُنفَّذ السكريبتات 08 إلى 11 و<code>outils_risques.py</code> في ArcGIS Pro دون تعديل. لفهمها، أعد أولًا إنجاز خريطة واحدة على الأقل يدويًا بلوحة Geoprocessing.</p>
<div class="astuce"><b>في ArcGIS Pro:</b> للتسونامي، اعرض <code>submersion_5m.tif</code> في <b>مشهد محلي</b> فوق نموذج الارتفاع الساحلي: المنطقة المغمورة أوضح بكثير في ثلاثي الأبعاد.</div>`,
  exercice: `<ol>
  <li>أنجز خريطة خطر الحرائق يدويًا، ثم قارن مع نتيجة السكريبت 08.</li>
  <li>نفّذ السكريبتات 09 و10 و11 في دفتر.</li>
  <li>اعرض سيناريو موجة 5 م في ثلاثي الأبعاد واسرد العناصر المصابة.</li>
</ol>` };
A["p8-l3"] = { titre: "التركيب متعدد المخاطر ولوحة القيادة", objectifs: ["دمج المخاطر في تركيب واحد", "عرض النتائج حسب البلدية"],
  contenu: `
<p>تعطي <b>Cell Statistics</b> (MAXIMUM) الخطر الأعلى في كل خلية؛ ويعطي مجموع <code>Con(classe &gt;= 4, 1, 0)</code> عدد المخاطر القوية. ثم <b>Zonal Statistics as Table</b> حسب البلدية وربط مع <code>Communes</code> (السكريبت <code>12_synthese_multirisque.py</code>).</p>
<p>العرض في ArcGIS Pro:</p>
<ul>
  <li><b>المخططات</b>: زر أيمن على الطبقة &gt; <i>Create Chart &gt; Bar Chart</i> لمتوسط عدد المخاطر القوية حسب البلدية.</li>
  <li><b>إخراج A3</b> بالخريطة متعددة المخاطر والخريطة حسب البلدية والمخطط.</li>
  <li>عبارة إلزامية: <i>بيانات وهمية لأغراض تعليمية</i>.</li>
</ul>`,
  exercice: `<ol>
  <li>أنتج خريطتي الخطر الأقصى والتراكم.</li>
  <li>أنشئ مخططًا بالأعمدة حسب البلدية وأدرجه في إخراج A3.</li>
</ol>` };

/* ---------- المستوى 9 ---------- */
A.p9 = { titre: "ربط الذكاء الاصطناعي ببرنامج ArcGIS Pro", resume: "ربط مساعد ذكاء اصطناعي (Claude) ببرنامج ArcGIS Pro عبر بروتوكول MCP، وقيادة مشروع باللغة الطبيعية على بيانات تلمسان، مع التحكم في النتائج.",
  quiz: [
    { question: "مع MCP-ArcGISPro، ماذا يجب تشغيله في ArcGIS Pro في كل حصة؟", choix: ["لا شيء", "الأداة Start MCP Bridge من MCP_Bridge.pyt", "ArcCatalog", "نافذة Python وحدها"], explication: "يستقبل الجسر أوامر Claude وينفّذها في المشروع المفتوح." },
    { question: "أي أداة تشغّل أي أداة arcpy؟", choix: ["list_layers", "run_geoprocessing", "zoom_to_layer", "save_project"], explication: "تأخذ run_geoprocessing اسم الأداة (analysis.Buffer…) ومعاملاتها." },
    { question: "لماذا نستعمل البيانات الوهمية للأعمال التطبيقية مع مساعد ذكاء اصطناعي؟", choix: ["لأنها أسرع", "لأن ما يقرؤه الذكاء الاصطناعي يُرسَل إلى خدمته", "لأن ArcGIS Pro يشترط ذلك", "لتفادي أخطاء الإسقاط"], explication: "لا نرسل أبدًا بيانات سرية أو شخصية إلى خدمة خارجية." },
    { question: "لماذا لا يوجد هذا المستوى في ArcMap 10.8؟", choix: ["ArcMap بلا خرائط", "لا يوجد خادم MCP لـ ArcMap (Python 2.7)", "ArcMap برنامج مدفوع", "Claude يرفض ArcMap"], explication: "تستهدف خوادم MCP برنامج ArcGIS Pro وPython 3 الخاص به." }
  ] };
A["p9-l1"] = { titre: "فهم MCP وربط ArcGIS Pro", objectifs: ["فهم دور العميل وخادم MCP والجسر في ArcGIS Pro", "تثبيت MCP-ArcGISPro وربطه بـ Claude Desktop", "تشغيل الجسر في كل حصة"],
  contenu: `
<p>‏<b>MCP</b> (<i>Model Context Protocol</i>) بروتوكول مفتوح يتيح لمساعد ذكاء اصطناعي استعمال <b>أدوات</b> يوفرها برنامج ما. لم يعد المساعد يكتفي بالشرح: يمكنه أن يطلب من ArcGIS Pro إضافة طبقة أو تشغيل أداة معالجة جغرافية أو تصدير إخراج.</p>
<table class="tab">
  <tr><th>العنصر</th><th>الدور</th></tr>
  <tr><td><b>عميل MCP</b></td><td><b>Claude Desktop</b>، حيث تكتب طلباتك.</td></tr>
  <tr><td><b>خادم MCP</b></td><td>برنامج Python يشغّله Claude Desktop ويصف الأدوات المتاحة.</td></tr>
  <tr><td><b>جسر ArcGIS Pro</b></td><td>صندوق أدوات يُشغَّل داخل ArcGIS Pro: ينفّذ الأوامر بـ arcpy في المشروع المفتوح.</td></tr>
</table>
<p>نستعمل المشروع الحر <b>MCP-ArcGISPro</b> ‏(github.com/geo2004/MCP-ArcGISPro، رخصة MIT) الذي اختبره صاحبه على ArcGIS Pro 3.6. وهو مشروع مجتمعي، ليس رسميًا من Esri ولا من Anthropic. لا يملك ArcMap 10.8 ‏(Python 2.7) خادم MCP: يُنجز هذا المستوى في ArcGIS Pro أو في QGIS.</p>
<h3>التثبيت</h3>
<ol>
  <li>ثبّت <b>Claude Desktop</b> ‏(claude.ai/download) وسجّل الدخول.</li>
  <li>ثبّت مدير الحزم <b>uv</b>. في PowerShell:<br><code>powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code></li>
  <li>في صفحة المشروع على GitHub، ‏<i>Code &gt; Download ZIP</i>، ثم فك الضغط في <code>C:\\ENIV\\mcp\\MCP-ArcGISPro</code>.</li>
  <li>في Claude Desktop: ‏<i>Settings &gt; Developer &gt; Edit Config</i>. الصق هذه الكتلة في <code>claude_desktop_config.json</code> مع تعويض <code>VOTRE_NOM</code> باسم مستخدم Windows (الملف <code>mcp_arcgispro_config.json</code> في التنزيلات):</li>
</ol>
<!--code:0-->
<h3>في كل حصة</h3>
<ol>
  <li>افتح ArcGIS Pro والمشروع <code>TP_ENIV.aprx</code> وخريطة.</li>
  <li>لوحة <i>Catalog &gt; Toolboxes &gt; Add Toolbox</i>: ‏<code>C:\\ENIV\\mcp\\MCP-ArcGISPro\\MCP_Bridge.pyt</code>، ثم شغّل <b>Start MCP Bridge</b>.</li>
  <li>أعد تشغيل Claude Desktop (في المرة الأولى) واكتب: «تحقق من الاتصال بـ ArcGIS Pro ‏(ping) وأعطني اسم الخريطة النشطة.»</li>
</ol>`,
  exercice: `
<ol>
  <li>ثبّت Claude Desktop وuv وMCP-ArcGISPro.</li>
  <li>شغّل الجسر في ArcGIS Pro وأنجز اختبار «ping».</li>
  <li>اطلب من Claude قائمة الخرائط والإخراجات في المشروع.</li>
</ol>` };
A["p9-l3"] = { titre: "عمل تطبيقي: قيادة ArcGIS Pro باللغة الطبيعية", objectifs: ["معرفة الأدوات التي يوفرها MCP-ArcGISPro", "إنجاز تحليل كامل على بيانات تلمسان بطلبات مكتوبة", "التحقق من كل نتيجة في ArcGIS Pro"],
  contenu: `
<p>يوفر MCP-ArcGISPro اثنتين وثلاثين أداة. يختار Claude الأداة المناسبة ويطلب Claude Desktop إذنك قبل كل استعمال.</p>
<table class="tab">
  <tr><th>المجموعة</th><th>الأدوات</th></tr>
  <tr><td>المشروع والخرائط</td><td><code>get_project_info</code>، <code>save_project</code>، <code>get_active_map_name</code>، <code>create_map</code></td></tr>
  <tr><td>الطبقات</td><td><code>list_layers</code>، <code>add_vector_layer</code>، <code>add_raster_layer</code>، <code>remove_layer</code>، <code>zoom_to_layer</code>، <code>set_layer_visibility</code></td></tr>
  <tr><td>البيانات</td><td><code>describe_data</code>، <code>list_fields</code>، <code>get_layer_features</code>، <code>get_unique_values</code>، <code>set_workspace</code>، <code>list_feature_classes</code>، <code>list_rasters</code></td></tr>
  <tr><td>الاختيار والتحرير</td><td><code>select_by_attribute</code>، <code>count_features</code>، <code>clear_selection</code>، <code>update_features</code></td></tr>
  <tr><td>المعالجة الجغرافية</td><td><code>run_geoprocessing</code>: أي أداة arcpy ‏(<code>analysis.Buffer</code>، <code>sa.Slope</code>…)</td></tr>
  <tr><td>الإخراجات</td><td><code>list_layouts</code>، <code>create_layout</code>، <code>export_layout</code></td></tr>
</table>
<h3>سيناريو العمل التطبيقي (بيانات تلمسان)</h3>
<ol>
  <li>«اضبط مساحة العمل على <code>C:/ENIV/TP/Shapefiles</code> واسرد أصناف الكيانات.»</li>
  <li>«أضف Communes وForages إلى الخريطة. ما نظام إحداثيات كل منهما؟»</li>
  <li>«اختر الأثقاب التي قيمة ETAT فيها Exploité واحسب عددها.»</li>
  <li>«أنشئ نطاقًا عازلًا بـ 200 م حول الأثقاب مع دمج كل الكيانات، في <code>TP_ENIV.gdb</code>.»</li>
  <li>«احسب عدد الأثقاب في كل بلدية (Summarize Within).»</li>
  <li>«احسب انحدار MNT ‏<code>C:/ENIV/TP/MNT/MNT_50m.asc</code> بالدرجات.» (يلزم الامتداد Spatial Analyst)</li>
  <li>«أنشئ إخراج A4 بالخريطة وصدّره PNG إلى <code>C:/ENIV/TP/Sorties/forages_ia.png</code>.»</li>
  <li>«أعطني سكربت arcpy الذي يعيد هذه الخطوات.» قارنه بسكربتاتك في المستوى 6.</li>
</ol>
<div class="astuce"><b>التحقق:</b> افتح جدول سمات النتائج، وتحقق من نظام الإحداثيات (WGS 1984 UTM 30N) والوحدات، وأعد خطوة يدويًا للمقارنة.</div>`,
  exercice: `
<ol>
  <li>أنجز السيناريو كاملًا وأرفق خريطة PNG بتقريرك.</li>
  <li>دوّن الطلبات التي أُسيء فهمها وأعد صياغتها.</li>
  <li>أنجز العمل نفسه في QGIS (المستوى 9 من مسار QGIS) وقارن.</li>
</ol>` };
A["p9-l4"] = { titre: "بديل دون واجهة، الحدود والأمان", objectifs: ["معرفة بديل يعمل دون فتح ArcGIS Pro", "البقاء متحكمًا فيما ينفّذه المساعد"],
  contenu: `
<h3>البديل: arcgis-mcp-bridge</h3>
<p>يشغّل مشروع <b>arcgis-mcp-bridge</b> ‏(PyPI، رخصة Apache-2.0، نظام Windows، ‏ArcGIS Pro مرخّص) مكتبة arcpy في الخلفية دون واجهة، ويقترح نحو مئة أداة معالجة جغرافية. التثبيت: <code>py -m pip install --upgrade arcgis-mcp-bridge</code>، ثم <code>py -m arcgis_mcp.setup_env</code> الذي ينشئ بيئة Python مخصصة. في إعدادات Claude Desktop، حدّد المجلدات المسموح بها بـ <code>"ARCGIS_MCP_ALLOWED_ROOTS": "C:\\\\ENIV\\\\TP"</code>. تتطلب الأدوات الهدّامة (حذف مجموعة بيانات، حساب حقل…) تأكيدًا صريحًا.</p>
<h3>الممارسات الجيدة</h3>
<ul>
  <li><b>الأذونات</b>: اقرأ كل طلب أداة في Claude Desktop وفضّل «Allow once».</li>
  <li><b>شيفرة Python</b>: الأداة <code>execute_python</code> في MCP-ArcGISPro معطّلة افتراضيًا. اتركها معطّلة في قاعة الأعمال التطبيقية.</li>
  <li><b>البيانات</b>: ما يقرؤه Claude يُرسَل إلى خدمة الذكاء الاصطناعي. استعمل البيانات الوهمية للأعمال التطبيقية، ولا تستعمل أبدًا بيانات سرية أو شخصية.</li>
  <li><b>التحقق</b>: قد يخطئ الذكاء الاصطناعي بثقة (طبقة، وحدات، نظام إحداثيات). تحقق من كل نتيجة.</li>
  <li><b>قابلية إعادة الإنتاج</b>: اطلب سكربت arcpy أو ابنِ نموذج ModelBuilder (المستوى 5).</li>
  <li><b>نسخة عمل</b>: اعمل على نسخة من <code>C:\\ENIV\\TP</code> واحفظ المشروع قبل كل طلب مهم.</li>
</ul>
<p>يسرّع الذكاء الاصطناعي الخطوات المتكررة، لكن اختيار المعايير والأوزان وتفسير خريطة الخطر يبقيان عملك بصفتك مهندسًا.</p>`,
  exercice: `
<ol>
  <li>اطلب من Claude إعادة تصنيف الانحدار في 5 فئات وتحقق من الحدود في الترميز.</li>
  <li>اكتب في 5 أسطر مزايا الذكاء الاصطناعي ومخاطره لمكتب دراسات في نظم المعلومات الجغرافية.</li>
</ol>` };

A["p9-l2"] = { titre: "دون اشتراك: ذكاء اصطناعي مجاني أو محلي", objectifs: ["معرفة ما تتيحه الصيغة المجانية من Claude", "ربط ArcGIS Pro بنموذج ذكاء اصطناعي محلي ومجاني (LM Studio أو Ollama)", "تكييف الطلبات مع نموذج صغير"],
  contenu: `
<p>‏Claude متاح في الجزائر بحساب مجاني. لكن للصيغة المجانية <b>حدودًا في عدد الرسائل</b> قد تقطع العمل التطبيقي، كما تتطلب اتصالًا بالإنترنت. إذا لم يكن لدى الطلبة اشتراك، أو لم تكن القاعة موصولة بالإنترنت، فاستعمل <b>نموذج ذكاء اصطناعي محليًا</b>: يعمل على الجهاز مجانًا، ويشتغل معه خادم MCP نفسه.</p>
<table class="tab">
  <tr><th>الحل</th><th>التكلفة</th><th>الإنترنت</th><th>ملاحظة</th></tr>
  <tr><td>‏Claude Desktop، الصيغة المجانية</td><td>مجاني</td><td>نعم</td><td>الأبسط، لكن عدد الرسائل محدود</td></tr>
  <tr><td>‏Claude Desktop، باشتراك</td><td>مدفوع</td><td>نعم</td><td>الأكثر موثوقية للأعمال التطبيقية الطويلة</td></tr>
  <tr><td><b>LM Studio</b> + نموذج محلي</td><td>مجاني</td><td>فقط لتنزيل النموذج</td><td>واجهة رسومية، يُنصح به في القاعة</td></tr>
  <tr><td><b>Ollama</b> + ollmcp</td><td>مجاني وحر</td><td>فقط لتنزيل النموذج</td><td>سطر الأوامر</td></tr>
</table>
<h3>الخيار 1: LM Studio</h3>
<ol>
  <li>ثبّت <b>LM Studio</b> ‏(lmstudio.ai)، الإصدار 0.3.17 أو أحدث: ابتداءً منه يدعم MCP.</li>
  <li>نزّل نموذجًا قادرًا على استعمال الأدوات (<i>tool use</i>)، مثل <b>Qwen3 8B</b> أو <b>Qwen2.5 7B Instruct</b>.</li>
  <li>اللوحة اليمنى، تبويب <i>Program</i> &gt; <i>Install &gt; Edit mcp.json</i>. الصق كتلة <code>mcpServers</code> نفسها المستعملة مع Claude Desktop (الملف <code>mcp_arcgispro_config.json</code>)، ثم احفظ.</li>
  <li>شغّل الخادم في ArcGIS Pro ‏(الأداة Start MCP Bridge)، وافتح محادثة مع النموذج واختبر «ping».</li>
</ol>
<h3>الخيار 2: Ollama وollmcp</h3>
<ol>
  <li>ثبّت <b>Ollama</b> ‏(ollama.com)، ثم في الطرفية: <code>ollama pull qwen2.5:7b</code>.</li>
  <li>ثبّت عميل MCP الحر <b>ollmcp</b> ‏(Python 3.11 أو أحدث): <code>uv tool install ollmcp</code>.</li>
  <li>شغّله بإعدادات الموقع: <code>ollmcp --servers-json C:\\ENIV\\mcp\\mcp_arcgispro_config.json --model qwen2.5:7b</code>.</li>
</ol>
<div class="astuce"><b>العتاد والمنهجية:</b> احسب 16 جيغابايت من الذاكرة على الأقل لنموذج من 7 إلى 8 مليارات معامل، وتسرّع بطاقة الرسوميات العمل كثيرًا. يخطئ النموذج الصغير أكثر من الكبير: اكتب طلبًا واحدًا لكل خطوة، وسمِّ الطبقات والحقول بدقة، وتحقق من كل نتيجة. الميزة: لا تغادر البيانات الجهاز.</div>`,
  exercice: `
<ol>
  <li>ثبّت LM Studio أو Ollama واربطه بخادم MCP الخاص بـ ArcGIS Pro.</li>
  <li>أعد الخطوات من 1 إلى 4 من العمل التطبيقي في الدرس التالي بالنموذج المحلي.</li>
  <li>قارن مع Claude: الطلبات المفهومة، الأخطاء، زمن الاستجابة.</li>
</ol>` };
A.p9.quiz.push({ question: "أي حل يعمل دون اشتراك ودون إنترنت أثناء العمل التطبيقي؟", choix: ["Claude Desktop", "LM Studio أو Ollama مع نموذج محلي", "الإرجاع الجغرافي", "لا شيء"], explication: "يعمل النموذج المحلي على الجهاز، ولا يلزم الإنترنت إلا مرة واحدة لتنزيله." });
