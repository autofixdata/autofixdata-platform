const fs = require('fs');
const path = require('path');

const seoData = {
  en: {
    common: {
      meta: {
        keywords: "auto repair data, OEM manuals, wiring diagrams, DTC codes, TSBs, Identifix, ALLDATA alternative, AutoData alternative, workshop software",
        defaultTitle: "Auto Fix Data | Premium OEM Repair Data for Modern Workshops",
        defaultDesc: "Get instant access to OEM-verified repair procedures, colour wiring diagrams, real-world fixes, and TSBs for 150M+ vehicles across 7 global markets."
      }
    },
    dtc: {
      meta: {
        title: "DTC Code Search | Auto Fix Data",
        description: "Search thousands of OBD2 Diagnostic Trouble Codes (DTCs) and find OEM-verified repair procedures, probable causes, and confirmed fixes for your workshop."
      }
    },
    legal: {
      gdprTitle: "GDPR Compliance | Auto Fix Data",
      gdprDesc: "Read our GDPR Compliance statement to understand how Auto Fix Data protects your data privacy and workshop information.",
      privacyTitle: "Privacy Policy | Auto Fix Data",
      privacyDesc: "Auto Fix Data Privacy Policy. Learn how we collect, use, and safeguard personal information.",
      termsTitle: "Terms of Service | Auto Fix Data",
      termsDesc: "Auto Fix Data Terms of Service. By subscribing to our platform, you agree to these terms."
    },
    auth: {
      loginTitle: "Login to Auto Fix Data | Workshop Portal",
      loginDesc: "Access your Auto Fix Data workshop account to search OEM repair manuals, wiring diagrams, and DTC codes."
    }
  },
  fr: {
    common: {
      meta: {
        keywords: "données de réparation auto, manuels OEM, schémas électriques, codes DTC, TSB, alternative ALLDATA, logiciel pour garage",
        defaultTitle: "Auto Fix Data | Données de Réparation OEM Premium pour Garages Modernes",
        defaultDesc: "Accédez instantanément aux procédures de réparation OEM, schémas électriques en couleur, réparations réelles et TSB pour plus de 150 millions de véhicules."
      }
    },
    dtc: {
      meta: {
        title: "Recherche de Codes DTC | Auto Fix Data",
        description: "Recherchez des milliers de codes de défaut (DTC) OBD2 et trouvez des procédures de réparation OEM vérifiées, des causes probables et des solutions confirmées."
      }
    },
    legal: {
      gdprTitle: "Conformité RGPD | Auto Fix Data",
      gdprDesc: "Lisez notre déclaration de conformité RGPD pour comprendre comment Auto Fix Data protège la confidentialité de vos données.",
      privacyTitle: "Politique de Confidentialité | Auto Fix Data",
      privacyDesc: "Politique de confidentialité d'Auto Fix Data. Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles.",
      termsTitle: "Conditions Générales | Auto Fix Data",
      termsDesc: "Conditions d'utilisation d'Auto Fix Data. En vous abonnant à notre plateforme, vous acceptez ces conditions."
    },
    auth: {
      loginTitle: "Connexion à Auto Fix Data | Portail Garage",
      loginDesc: "Accédez à votre compte Auto Fix Data pour rechercher des manuels de réparation OEM, des schémas électriques et des codes DTC."
    }
  },
  es: {
    common: {
      meta: {
        keywords: "datos de reparación de automóviles, manuales OEM, diagramas de cableado, códigos DTC, TSB, alternativa a ALLDATA, software para talleres",
        defaultTitle: "Auto Fix Data | Datos Premium de Reparación OEM para Talleres",
        defaultDesc: "Obtenga acceso a procedimientos de reparación OEM, diagramas en color, soluciones reales y TSB para más de 150 millones de vehículos."
      }
    },
    dtc: {
      meta: {
        title: "Búsqueda de Códigos DTC | Auto Fix Data",
        description: "Busque miles de códigos DTC de OBD2 y encuentre procedimientos de reparación verificados, causas probables y soluciones confirmadas para su taller."
      }
    },
    legal: {
      gdprTitle: "Cumplimiento del RGPD | Auto Fix Data",
      gdprDesc: "Lea nuestra declaración de cumplimiento del RGPD para comprender cómo protegemos su privacidad y la información de su taller.",
      privacyTitle: "Política de Privacidad | Auto Fix Data",
      privacyDesc: "Política de Privacidad de Auto Fix Data. Conozca cómo recopilamos, utilizamos y salvaguardamos la información personal.",
      termsTitle: "Términos de Servicio | Auto Fix Data",
      termsDesc: "Términos de Servicio de Auto Fix Data. Al suscribirse a nuestra plataforma, usted acepta estos términos."
    },
    auth: {
      loginTitle: "Iniciar Sesión en Auto Fix Data | Portal del Taller",
      loginDesc: "Acceda a su cuenta de taller de Auto Fix Data para buscar manuales de reparación OEM, diagramas de cableado y códigos DTC."
    }
  },
  de: {
    common: {
      meta: {
        keywords: "Kfz-Reparaturdaten, OEM Handbücher, Schaltpläne, DTC Codes, TSBs, ALLDATA Alternative, Werkstattsoftware",
        defaultTitle: "Auto Fix Data | Premium OEM-Reparaturdaten für Werkstätten",
        defaultDesc: "Erhalten Sie sofortigen Zugang zu verifizierten OEM-Reparaturverfahren, farbigen Schaltplänen, Praxisreparaturen und TSBs für über 150 Mio. Fahrzeuge."
      }
    },
    dtc: {
      meta: {
        title: "DTC Code Suche | Auto Fix Data",
        description: "Suchen Sie Tausende von OBD2-Fehlercodes (DTCs) und finden Sie OEM-verifizierte Reparaturverfahren, wahrscheinliche Ursachen und bestätigte Lösungen."
      }
    },
    legal: {
      gdprTitle: "DSGVO Compliance | Auto Fix Data",
      gdprDesc: "Lesen Sie unsere DSGVO-Compliance-Erklärung, um zu verstehen, wie Auto Fix Data Ihre Daten und Werkstattinformationen schützt.",
      privacyTitle: "Datenschutzrichtlinie | Auto Fix Data",
      privacyDesc: "Datenschutzrichtlinie von Auto Fix Data. Erfahren Sie, wie wir personenbezogene Daten erfassen, nutzen und schützen.",
      termsTitle: "Nutzungsbedingungen | Auto Fix Data",
      termsDesc: "Nutzungsbedingungen von Auto Fix Data. Mit dem Abonnement unserer Plattform stimmen Sie diesen Bedingungen zu."
    },
    auth: {
      loginTitle: "Anmelden bei Auto Fix Data | Werkstattportal",
      loginDesc: "Greifen Sie auf Ihr Werkstattkonto zu, um nach OEM-Reparaturhandbüchern, Schaltplänen und DTC-Codes zu suchen."
    }
  },
  it: {
    common: {
      meta: {
        keywords: "dati riparazione auto, manuali OEM, schemi elettrici, codici DTC, TSB, alternativa ALLDATA, software officina",
        defaultTitle: "Auto Fix Data | Dati Riparazione OEM Premium per Officine Moderne",
        defaultDesc: "Ottieni accesso immediato a procedure OEM verificate, schemi elettrici a colori, soluzioni reali e TSB per oltre 150 milioni di veicoli in 7 mercati globali."
      }
    },
    dtc: {
      meta: {
        title: "Ricerca Codici DTC | Auto Fix Data",
        description: "Cerca migliaia di codici DTC OBD2 e trova procedure di riparazione verificate, cause probabili e soluzioni confermate per la tua officina."
      }
    },
    legal: {
      gdprTitle: "Conformità GDPR | Auto Fix Data",
      gdprDesc: "Leggi la nostra dichiarazione di conformità GDPR per capire come proteggiamo i tuoi dati e le informazioni della tua officina.",
      privacyTitle: "Informativa sulla Privacy | Auto Fix Data",
      privacyDesc: "Informativa sulla Privacy di Auto Fix Data. Scopri come raccogliamo, usiamo e proteggiamo i dati personali.",
      termsTitle: "Termini di Servizio | Auto Fix Data",
      termsDesc: "Termini d'uso di Auto Fix Data. Sottoscrivendo la nostra piattaforma, accetti questi termini."
    },
    auth: {
      loginTitle: "Login Auto Fix Data | Portale Officina",
      loginDesc: "Accedi al tuo account per cercare manuali OEM, schemi elettrici e codici DTC."
    }
  },
  ar: {
    common: {
      meta: {
        keywords: "بيانات إصلاح السيارات, أدلة OEM, مخططات كهربائية, أكواد أعطال DTC, نشرات TSB, بديل ALLDATA, برامج الورش",
        defaultTitle: "Auto Fix Data | بيانات الإصلاح الأصلية للورش الحديثة",
        defaultDesc: "احصل على وصول فوري لإجراءات الإصلاح المعتمدة من OEM، المخططات الكهربائية الملونة، وأكواد الأعطال لأكثر من 150 مليون مركبة."
      }
    },
    dtc: {
      meta: {
        title: "البحث عن أكواد الأعطال DTC | Auto Fix Data",
        description: "ابحث عن آلاف أكواد نظام كشف الأعطال OBD2 واحصل على إجراءات الإصلاح المعتمدة من المصنع والحلول المؤكدة."
      }
    },
    legal: {
      gdprTitle: "الامتثال للائحة GDPR | Auto Fix Data",
      gdprDesc: "اقرأ بيان الامتثال الخاص بنا لحماية الخصوصية لمعرفة كيف نحمي بيانات ورشتك ومعلوماتك.",
      privacyTitle: "سياسة الخصوصية | Auto Fix Data",
      privacyDesc: "سياسة خصوصية Auto Fix Data. تعرف على كيفية جمعنا للمعلومات الشخصية وحمايتها.",
      termsTitle: "شروط الخدمة | Auto Fix Data",
      termsDesc: "شروط خدمة Auto Fix Data. من خلال اشتراكك في منصتنا، فإنك توافق على هذه الشروط."
    },
    auth: {
      loginTitle: "تسجيل الدخول إلى Auto Fix Data | بوابة الورش",
      loginDesc: "قم بتسجيل الدخول للوصول إلى حساب ورشتك والبحث عن أدلة OEM والمخططات الكهربائية."
    }
  },
  he: {
    common: {
      meta: {
        keywords: "נתוני תיקון רכב, מדריכי יצרן ומוסך, שרטוטי חשמל, מערכת תקלות DTC, מוסכים, תחליף לאוטודאטה, תחליף למיטשל",
        defaultTitle: "Auto Fix Data | נתוני תיקון מקוריים ומקיפים למוסך המתקדם",
        defaultDesc: "קבל גישה מיידית להליכי תיקון וטיפול מהיצרן באוטודאטה מקיפה, שרטוטי צמות וחשמל בצבע מלא, ופתרונות עכשוויים לתקלות OBD2."
      }
    },
    dtc: {
      meta: {
        title: "איתור קודי שגיאה וקריאת תקלות מנוע | Auto Fix Data",
        description: "חפש וסרוק למעלה מ-100 אלף קודי תקלות מחשב ולמד איך מוסכים ממליצים לפתור אותם בפועל בתהליכי היצרן."
      }
    },
    legal: {
      gdprTitle: "תאימות תקינת GDPR | Auto Fix Data",
      gdprDesc: "קראו את תקנון הפרטיות והדאטה שלנו להבנת הגנת נתוני המוסך.",
      privacyTitle: "מדיניות פרטיות | Auto Fix Data",
      privacyDesc: "הצהרת והגנת הפרטיות. אנו שומרים על המידע של המוסך שלך מאובטח וחסוי.",
      termsTitle: "תנאי שימוש למוסך | Auto Fix Data",
      termsDesc: "תנאי השימוש הרשמיים המהווים הסכם התקשרות לחבילות התוכנה שלנו."
    },
    auth: {
      loginTitle: "כניסה לסביבת המוסך המקוון | Auto Fix Data",
      loginDesc: "התחבר לחשבונך בכדי לאתר מדריכי יצרן, קודי שגיאה ושרטוטי יצרנים."
    }
  }
};

Object.keys(seoData).forEach(lang => {
  const p = path.join(__dirname, 'src', 'dictionaries', `${lang}.json`);
  if(fs.existsSync(p)) {
    const dict = JSON.parse(fs.readFileSync(p, 'utf8'));
    
    dict.common = dict.common || {};
    dict.common.meta = seoData[lang].common.meta;
    
    dict.dtc = dict.dtc || {};
    dict.dtc.meta = seoData[lang].dtc.meta;
    
    dict.legal = seoData[lang].legal;
    dict.auth = seoData[lang].auth;
    
    fs.writeFileSync(p, JSON.stringify(dict, null, 2));
    console.log(`Updated SEO metadata in ${lang}.json`);
  }
});
