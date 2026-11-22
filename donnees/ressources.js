/*
 * RESSOURCES GRATUITES ET GLOSSAIRE
 * ------------------------------------------------------------------
 * Pour ajouter un lien : copiez un bloc { nom, url, desc } dans la bonne liste.
 * desc : description en fr (obligatoire), en, ar et ber (facultatives : le français s'affiche sinon).
 * Glossaire : un terme par ligne, en français, anglais et arabe.
 */
window.RESSOURCES = {
  logiciels: [
    { nom: "QGIS", url: "https://qgis.org", desc: { fr: "SIG libre et gratuit (choisir la version LTR).", en: "Free and open-source GIS (choose the LTR version).", ar: "نظام معلومات جغرافية حر ومجاني (اختر إصدار LTR).", ber: "SIG ilelli u baṭel (fren lqem LTR)." } },
    { nom: "GRASS GIS", url: "https://grass.osgeo.org", desc: { fr: "Analyse raster et hydrologie, intégré à QGIS.", en: "Raster analysis and hydrology, built into QGIS.", ar: "تحليل النقطيات والهيدرولوجيا، مدمج في QGIS.", ber: "Tasleḍt n raster d tesnamant, deg QGIS." } },
    { nom: "SAGA GIS", url: "https://saga-gis.sourceforge.io", desc: { fr: "Analyse du terrain et géomorphologie.", en: "Terrain analysis and geomorphology.", ar: "تحليل التضاريس والجيومورفولوجيا.", ber: "Tasleḍt n wakal d tesnalɣa." } },
    { nom: "WhiteboxTools", url: "https://www.whiteboxgeo.com", desc: { fr: "Outils d'hydrologie et de LiDAR, utilisables depuis QGIS.", en: "Hydrology and LiDAR tools, usable from QGIS.", ar: "أدوات للهيدرولوجيا وLiDAR تُستعمل من QGIS.", ber: "Ifecka n tesnamant d LiDAR, seg QGIS." } },
    { nom: "Google Earth Pro", url: "https://www.google.com/earth/about/versions/", desc: { fr: "Globe virtuel gratuit : images anciennes, KML.", en: "Free virtual globe: historical imagery, KML.", ar: "كرة أرضية افتراضية مجانية: صور قديمة وKML.", ber: "Amaḍal amesnulfu baṭel: tugniwin tiqburin, KML." } },
    { nom: "LM Studio", url: "https://lmstudio.ai", desc: { fr: "IA locale gratuite, compatible MCP (niveau 9).", en: "Free local AI, MCP-compatible (level 9).", ar: "ذكاء اصطناعي محلي مجاني متوافق مع MCP (المستوى 9).", ber: "Tagi tazzayant tadigant baṭel, MCP (aswir 9)." } },
    { nom: "Ollama", url: "https://ollama.com", desc: { fr: "Modèles d'IA locaux en ligne de commande.", en: "Local AI models from the command line.", ar: "نماذج ذكاء اصطناعي محلية عبر سطر الأوامر.", ber: "Timudmin n tegi tazzayant tidiganin s tladna." } }
  ],
  donnees: [
    { nom: "Copernicus Browser", url: "https://browser.dataspace.copernicus.eu", desc: { fr: "Images Sentinel-1 et Sentinel-2 gratuites.", en: "Free Sentinel-1 and Sentinel-2 imagery.", ar: "صور Sentinel-1 وSentinel-2 مجانية.", ber: "Tugniwin Sentinel-1 d Sentinel-2 baṭel." } },
    { nom: "USGS EarthExplorer", url: "https://earthexplorer.usgs.gov", desc: { fr: "Landsat, SRTM et images anciennes.", en: "Landsat, SRTM and historical imagery.", ar: "صور Landsat وSRTM وصور قديمة.", ber: "Landsat, SRTM d tugniwin tiqburin." } },
    { nom: "Catalogue Google Earth Engine", url: "https://developers.google.com/earth-engine/datasets", desc: { fr: "Toutes les données utilisables dans le niveau 10 QGIS.", en: "All the datasets usable in QGIS level 10.", ar: "كل البيانات القابلة للاستعمال في المستوى 10 من QGIS.", ber: "Isefka akk i d-yettusqedcen deg uswir 10 n QGIS." } },
    { nom: "OpenStreetMap — Algérie (Geofabrik)", url: "https://download.geofabrik.de/africa/algeria.html", desc: { fr: "Routes, bâtiments, cours d'eau de l'Algérie en shapefile.", en: "Roads, buildings and waterways of Algeria as shapefiles.", ar: "الطرق والمباني والمجاري المائية في الجزائر بصيغة shapefile.", ber: "Ibriden, lebni d yisaffen n Lezzayer s shapefile." } },
    { nom: "OpenTopography", url: "https://opentopography.org", desc: { fr: "MNT mondiaux (Copernicus DEM, SRTM).", en: "Global DEMs (Copernicus DEM, SRTM).", ar: "نماذج ارتفاع رقمية عالمية (Copernicus DEM، SRTM).", ber: "MNT n umaḍal (Copernicus DEM, SRTM)." } },
    { nom: "ESA WorldCover", url: "https://esa-worldcover.org", desc: { fr: "Occupation du sol mondiale à 10 m.", en: "Global land cover at 10 m.", ar: "استخدام الأرض عالميًا بدقة 10 م.", ber: "Aseqdec n wakal n umaḍal s 10 m." } },
    { nom: "HydroSHEDS", url: "https://www.hydrosheds.org", desc: { fr: "Réseaux hydrographiques et bassins versants.", en: "River networks and watersheds.", ar: "الشبكات الهيدروغرافية والأحواض الساكبة.", ber: "Iẓeṭṭa n yisaffen d yisura." } },
    { nom: "GADM", url: "https://gadm.org", desc: { fr: "Limites administratives (wilayas, communes).", en: "Administrative boundaries.", ar: "الحدود الإدارية (الولايات، البلديات).", ber: "Tilisa tinebdalin (tiwilayin, tiɣiwanin)." } },
    { nom: "Natural Earth", url: "https://www.naturalearthdata.com", desc: { fr: "Fonds de carte à petite échelle.", en: "Small-scale base maps.", ar: "خرائط أساس بمقياس صغير.", ber: "Tikarḍiwin n wadda s teskala tamecṭuḥt." } }
  ],
  apprendre: [
    { nom: "Documentation QGIS", url: "https://docs.qgis.org/latest/fr/docs/", desc: { fr: "Manuel utilisateur officiel, en français.", en: "Official user manual (French version linked).", ar: "الدليل الرسمي للمستخدم بالفرنسية.", ber: "Amnir unṣib n useqdac, s tefransist." } },
    { nom: "Manuel de formation QGIS", url: "https://docs.qgis.org/latest/fr/docs/training_manual/", desc: { fr: "Cours officiel pas à pas avec données.", en: "Official step-by-step course with data.", ar: "دورة رسمية خطوة بخطوة مع البيانات.", ber: "Aselmed unṣib s yisefka." } },
    { nom: "TutoQGIS (CNRS)", url: "https://tutoqgis.cnrs.fr", desc: { fr: "Tutoriel complet et gratuit en français, avec PDF.", en: "Complete free tutorial in French, with PDFs.", ar: "درس كامل ومجاني بالفرنسية مع ملفات PDF.", ber: "Aselmed ummid baṭel s tefransist, s PDF." } },
    { nom: "Aide d'ArcGIS Pro", url: "https://pro.arcgis.com/fr/pro-app/latest/help/main/welcome-to-the-arcgis-pro-app-help.htm", desc: { fr: "Documentation officielle d'ArcGIS Pro en français.", en: "Official ArcGIS Pro documentation (French version linked).", ar: "التوثيق الرسمي لـ ArcGIS Pro بالفرنسية.", ber: "Asemli unṣib n ArcGIS Pro s tefransist." } },
    { nom: "Esri Academy", url: "https://www.esri.com/training/", desc: { fr: "Cours en ligne, dont beaucoup sont gratuits.", en: "Online courses, many of them free.", ar: "دورات على الإنترنت، كثير منها مجاني.", ber: "Iselmaden deg Internet, aṭas deg-sen baṭel." } },
    { nom: "Tutoriels Earth Engine", url: "https://developers.google.com/earth-engine/tutorials", desc: { fr: "Guides officiels Google Earth Engine.", en: "Official Google Earth Engine guides.", ar: "الأدلة الرسمية لـ Google Earth Engine.", ber: "Imniren unṣiben n Google Earth Engine." } },
    { nom: "GEE et Sentinel-2 en arabe (EAMENA)", url: "https://eamena.org/sites/default/files/eamena/documents/media/gis_4_-_introduction_to_gee_and_sentinel-2_imagery_arabic_compressed.pdf", desc: { fr: "Support PDF en arabe : introduction à Earth Engine et Sentinel-2.", en: "PDF handout in Arabic: introduction to Earth Engine and Sentinel-2.", ar: "دليل PDF بالعربية: مقدمة إلى Earth Engine وSentinel-2.", ber: "PDF s taɛrabt: tazwart ɣer Earth Engine d Sentinel-2." } }
  ],
  glossaire: [
    ["Système d'information géographique (SIG)", "Geographic information system (GIS)", "نظام المعلومات الجغرافية"],
    ["Couche", "Layer", "طبقة"],
    ["Entité", "Feature", "كيان / معلم"],
    ["Table attributaire", "Attribute table", "جدول السمات"],
    ["Champ", "Field", "حقل"],
    ["Vecteur", "Vector", "متجه"],
    ["Raster", "Raster", "نقطي (راستر)"],
    ["Pixel / cellule", "Pixel / cell", "بكسل / خلية"],
    ["Résolution", "Resolution", "الدقة المكانية"],
    ["Échelle", "Scale", "مقياس الرسم"],
    ["Système de coordonnées", "Coordinate reference system", "نظام الإحداثيات المرجعي"],
    ["Projection", "Projection", "الإسقاط"],
    ["Géoréférencement", "Georeferencing", "الإرجاع الجغرافي"],
    ["Point de calage", "Ground control point", "نقطة ضبط"],
    ["Numérisation", "Digitizing", "الترقيم"],
    ["Accrochage", "Snapping", "الالتقاط"],
    ["Zone tampon", "Buffer", "نطاق عازل"],
    ["Intersection", "Intersection", "تقاطع"],
    ["Découpage", "Clip", "قص"],
    ["Fusion (regroupement)", "Dissolve", "دمج الكيانات"],
    ["Jointure", "Join", "ربط"],
    ["Requête", "Query", "استعلام"],
    ["Symbologie", "Symbology", "الترميز"],
    ["Étiquette", "Label", "تسمية"],
    ["Légende", "Legend", "مفتاح الخريطة"],
    ["Mise en page", "Layout", "الإخراج"],
    ["Modèle numérique de terrain (MNT)", "Digital elevation model (DEM)", "نموذج الارتفاع الرقمي"],
    ["Pente", "Slope", "الانحدار"],
    ["Exposition", "Aspect", "اتجاه السفح"],
    ["Ombrage", "Hillshade", "التظليل"],
    ["Bassin versant", "Watershed", "الحوض الساكب"],
    ["Exutoire", "Outlet", "المخرج"],
    ["Accumulation de flux", "Flow accumulation", "تراكم الجريان"],
    ["Direction de flux", "Flow direction", "اتجاه الجريان"],
    ["Réseau hydrographique", "Stream network", "الشبكة الهيدروغرافية"],
    ["Interpolation", "Interpolation", "الاستيفاء"],
    ["Reclassification", "Reclassification", "إعادة التصنيف"],
    ["Superposition pondérée", "Weighted overlay", "التراكب المرجّح"],
    ["Analyse multicritère", "Multi-criteria analysis", "التحليل متعدد المعايير"],
    ["Aléa", "Hazard", "الخطر (الحدث الطبيعي)"],
    ["Vulnérabilité", "Vulnerability", "الهشاشة"],
    ["Risque", "Risk", "الخطورة"],
    ["Télédétection", "Remote sensing", "الاستشعار عن بعد"],
    ["Bande spectrale", "Spectral band", "نطاق طيفي"],
    ["Proche infrarouge", "Near infrared", "الأشعة تحت الحمراء القريبة"],
    ["Indice de végétation (NDVI)", "Vegetation index (NDVI)", "مؤشر الغطاء النباتي"],
    ["Occupation du sol", "Land cover", "استخدام الأرض / الغطاء الأرضي"],
    ["Image satellite", "Satellite image", "صورة فضائية"],
    ["Géotraitement", "Geoprocessing", "المعالجة الجغرافية"],
    ["Géodatabase", "Geodatabase", "قاعدة بيانات جغرافية"]
  ]
};
