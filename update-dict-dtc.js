const fs = require('fs');

const data = {
  "en": {
    "metaTitle": "Fix {code}: {title}",
    "metaDescription": "Learn what OBD2 code {code} means, its symptoms, common causes, and how to access the OEM wiring diagram to fix it.",
    "severityLevel": "Severity",
    "commonSymptoms": "Common Symptoms of {code}",
    "whatCauses": "What Causes the {code} Code?",
    "howSerious": "How serious is the {code} code?",
    "howSeriousDesc": "Because this code has a {severity} severity level, it is highly recommended to address it promptly. Driving with an active {code} fault can lead to secondary component failures and decreased fuel economy.",
    "howToFix": "How do you definitively diagnose and fix {code}?",
    "howToFixDesc": "To accurately diagnose the {code} fault code, you need the exact OEM wiring diagram and diagnostic test procedures for your specific vehicle. Create an Auto Fix Data account to instantly pull the factory diagrams for this fault.",
    "fixNow": "Fix {code} Now",
    "fixNowSub": "Access the OEM repair manual and interactive wiring diagram to diagnose this exact code.",
    "benefits": [
      "Pin-to-pin wiring diagrams",
      "Component testing steps",
      "Technical Service Bulletins",
      "Identifix confirmed fixes"
    ],
    "relatedCodes": "Related Fault Codes"
  },
  "fr": {
    "metaTitle": "Réparer {code} : {title}",
    "metaDescription": "Découvrez la signification du code OBD2 {code}, ses symptômes, ses causes et comment accéder au schéma électrique constructeur pour le réparer.",
    "severityLevel": "Sévérité",
    "commonSymptoms": "Symptômes fréquents du {code}",
    "whatCauses": "Quelles sont les causes du code {code} ?",
    "howSerious": "Quelle est la gravité du code {code} ?",
    "howSeriousDesc": "Comme ce code a un niveau de gravité {severity}, il est fortement recommandé de s'en occuper rapidement. Conduire avec un défaut {code} actif peut entraîner des pannes secondaires.",
    "howToFix": "Comment diagnostiquer et réparer définitivement {code} ?",
    "howToFixDesc": "Pour diagnostiquer avec précision le code de défaut {code}, vous avez besoin du schéma de câblage OEM exact et des procédures de test. Créez un compte Auto Fix Data pour obtenir instantanément les schémas d'usine.",
    "fixNow": "Réparer {code} Maintenant",
    "fixNowSub": "Accédez au manuel de réparation OEM et au schéma de câblage interactif.",
    "benefits": [
      "Schémas électriques point à point",
      "Étapes de test des composants",
      "Bulletins de service technique",
      "Réparations confirmées Identifix"
    ],
    "relatedCodes": "Codes de défaut associés"
  },
  "es": {
    "metaTitle": "Solucionar {code}: {title}",
    "metaDescription": "Aprenda qué significa el código OBD2 {code}, síntomas, causas y cómo acceder al diagrama de cableado OEM para solucionarlo.",
    "severityLevel": "Gravedad",
    "commonSymptoms": "Síntomas comunes del {code}",
    "whatCauses": "¿Qué causa el código {code}?",
    "howSerious": "¿Qué tan grave es el código {code}?",
    "howSeriousDesc": "Dado que este código tiene un nivel de gravedad {severity}, se recomienda encarecidamente abordarlo de inmediato. Conducir con una falla activa {code} puede provocar fallas secundarias.",
    "howToFix": "¿Cómo diagnosticar y reparar definitivamente {code}?",
    "howToFixDesc": "Para diagnosticar con precisión el código de falla {code}, necesita el diagrama de cableado OEM exacto. Cree una cuenta de Auto Fix Data para obtener instantáneamente los diagramas de fábrica.",
    "fixNow": "Reparar {code} Ahora",
    "fixNowSub": "Acceda al manual de reparación OEM y al diagrama de cableado interactivo.",
    "benefits": [
      "Diagramas de cableado pin a pin",
      "Pasos de prueba de componentes",
      "Boletines de servicio técnico",
      "Reparaciones confirmadas de Identifix"
    ],
    "relatedCodes": "Códigos de falla relacionados"
  },
  "de": {
    "metaTitle": "{code} Reparieren: {title}",
    "metaDescription": "Erfahren Sie, was der OBD2-Code {code} bedeutet, Symptome, Ursachen und wie Sie auf den OEM-Schaltplan zugreifen, um ihn zu beheben.",
    "severityLevel": "Schweregrad",
    "commonSymptoms": "Häufige Symptome von {code}",
    "whatCauses": "Was verursacht den Fehlercode {code}?",
    "howSerious": "Wie schwerwiegend ist der Code {code}?",
    "howSeriousDesc": "Da dieser Code einen Schweregrad von {severity} aufweist, wird dringend empfohlen, ihn umgehend zu beheben. Das Fahren mit einem aktiven Fehler {code} kann zu Folgeschäden führen.",
    "howToFix": "Wie diagnostiziert und repariert man {code} endgültig?",
    "howToFixDesc": "Um den Fehlercode {code} genau zu diagnostizieren, benötigen Sie den exakten OEM-Schaltplan. Erstellen Sie ein Auto Fix Data-Konto, um die Werkspläne sofort abzurufen.",
    "fixNow": "{code} jetzt beheben",
    "fixNowSub": "Greifen Sie auf das OEM-Reparaturhandbuch und den interaktiven Schaltplan zu.",
    "benefits": [
      "Pin-zu-Pin-Schaltpläne",
      "Bauteilprüfschritte",
      "Technische Service-Bulletins",
      "Identifix bestätigte Reparaturen"
    ],
    "relatedCodes": "Verwandte Fehlercodes"
  },
  "it": {
    "metaTitle": "Riparare {code}: {title}",
    "metaDescription": "Scopri cosa significa il codice OBD2 {code}, i sintomi, le cause e come accedere allo schema elettrico OEM per risolverlo.",
    "severityLevel": "Gravità",
    "commonSymptoms": "Sintomi comuni di {code}",
    "whatCauses": "Cosa causa il codice {code}?",
    "howSerious": "Quanto è grave il codice {code}?",
    "howSeriousDesc": "Poiché questo codice ha un livello di gravità {severity}, si consiglia vivamente di affrontarlo tempestivamente. Guidare con un guasto {code} attivo può portare a guasti secondari.",
    "howToFix": "Come diagnosticare e riparare in modo definitivo {code}?",
    "howToFixDesc": "Per diagnosticare con precisione il codice di guasto {code}, è necessario lo schema elettrico OEM esatto. Crea un account Auto Fix Data per estrarre istantaneamente gli schemi di fabbrica.",
    "fixNow": "Risolvi {code} Ora",
    "fixNowSub": "Accedi al manuale di riparazione OEM e allo schema elettrico interattivo.",
    "benefits": [
      "Schemi elettrici pin-to-pin",
      "Passaggi di test dei componenti",
      "Bollettini di servizio tecnico",
      "Riparazioni confermate Identifix"
    ],
    "relatedCodes": "Codici Guasto Correlati"
  },
  "ar": {
    "metaTitle": "إصلاح {code}: {title}",
    "metaDescription": "تعرف على معنى رمز OBD2 {code} ، وأعراضه ، وأسبابه ، وكيفية الوصول إلى مخطط الأسلاك الخاص بالشركة المصنعة لإصلاحه.",
    "severityLevel": "مستوى الخطورة",
    "commonSymptoms": "الأعراض الشائعة لرمز {code}",
    "whatCauses": "ما الذي يسبب رمز {code}؟",
    "howSerious": "ما مدى خطورة رمز {code}؟",
    "howSeriousDesc": "نظرًا لأن هذا الرمز له مستوى خطورة {severity}، يوصى بشدة بمعالجته على الفور. يمكن أن تؤدي القيادة مع وجود عطل {code} نشط إلى فشل مكونات أخرى.",
    "howToFix": "كيف تقوم بتشخيص وإصلاح {code} بشكل قاطع؟",
    "howToFixDesc": "لتشخيص رمز العطل {code} بدقة، ستحتاج إلى مخطط الأسلاك OEM الدقيق لسيارتك. قم بإنشاء حساب لسحب مخططات المصنع فورًا.",
    "fixNow": "إصلاح {code} الآن",
    "fixNowSub": "قم بالوصول إلى دليل الإصلاح ومخطط الأسلاك التفاعلي لتشخيص هذا الرمز.",
    "benefits": [
      "مخططات الأسلاك من طرف إلى طرف",
      "خطوات اختبار المكونات",
      "نشرات الخدمة الفنية",
      "الإصلاحات المؤكدة من Identifix"
    ],
    "relatedCodes": "رموز الأعطال ذات الصلة"
  },
  "he": {
    "metaTitle": "תקן {code}: {title}",
    "metaDescription": "למד מה המשמעות של קוד OBD2 {code}, התסמינים שלו, הסיבות, וכיצד לגשת לתרשים החיווט של היצרן כדי לתקן אותו.",
    "severityLevel": "חומרת טיפול",
    "commonSymptoms": "תסמינים נפוצים של {code}",
    "whatCauses": "מה גורם לקוד {code}?",
    "howSerious": "עד כמה חמור קוד {code}?",
    "howSeriousDesc": "מכיוון שקוד זה בעל רמת חומרה {severity}, מומלץ מאוד לטפל בו באופן מיידי. נהיגה עם תקלת {code} פעילה עלולה להוביל לתקלות משניות.",
    "howToFix": "כיצד לאבחן ולתקן באופן סופי את {code}?",
    "howToFixDesc": "כדי לאבחן במדויק את קוד התקלה {code}, אתה זקוק לתרשים החיווט המדויק של היצרן עבור הרכב הספציפי שלך. צור חשבון כדי למשוך באופן מיידי את תרשימי המפעל.",
    "fixNow": "תקן את {code} עכשיו",
    "fixNowSub": "גש למדריך התיקונים ולתרשים החיווט האינטראקטיבי כדי לאבחן קוד זה.",
    "benefits": [
      "תרשימי חיווט מפין לפין",
      "שלבי בדיקת רכיבים",
      "עלוני שירות טכניים",
      "תיקונים מאושרים של Identifix"
    ],
    "relatedCodes": "קודי תקלות קשורים"
  }
};

const langs = ['en', 'fr', 'es', 'de', 'it', 'ar', 'he'];

for (const lang of langs) {
  const file = `./src/dictionaries/${lang}.json`;
  if (fs.existsSync(file)) {
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    json.dtc = data[lang];
    fs.writeFileSync(file, JSON.stringify(json, null, 2));
    console.log(`Updated dtc node in ${lang}.json`);
  }
}
