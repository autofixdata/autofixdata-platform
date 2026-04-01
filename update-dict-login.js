const fs = require('fs');

const data = {
  "en": {
    "secureAccess": "Secure Platform Access",
    "title": "Access Your Database",
    "subtitle": "Select the platform you want to sign in to. All databases are included in your Auto Fix Data subscription.",
    "openDatabase": "Open Database",
    "signInTo": "Sign In to {db}",
    "notSubscribed": "Not a subscriber yet?",
    "notSubscribedDesc": "Get access to all 5 databases from £99/mo. 7-day free trial, no credit card needed.",
    "viewPlans": "View Plans & Pricing",
    "contactSales": "Or contact our sales team →",
    "helpTitle": "Having trouble logging in?",
    "helpDesc": "If you can't access your platform, check your credentials or contact our support team. Login issues are usually resolved within 2 hours.",
    "getHelp": "Get Help",
    "dbs": {
      "alldata": {
        "tagline": "Automotive Intelligence",
        "desc": "OEM repair procedures, TSBs, wiring diagrams and DTC codes from AutoZone's flagship database."
      },
      "autodata": {
        "tagline": "by Solera",
        "desc": "European-leading database for service intervals, timing data, ADAS calibration and wiring diagrams."
      },
      "haynes": {
        "tagline": "Workshop Data",
        "desc": "Comprehensive step-by-step vehicle repair guides with professional technical data for workshops."
      },
      "mitchell": {
        "tagline": "by Mitchell1",
        "desc": "Mitchell1's ProDemand gives technicians repair procedures, diagnostic flowcharts and confirmed fixes."
      },
      "identifix": {
        "tagline": "by Solera",
        "desc": "Real-world confirmed fixes from a network of 70,000+ professional technicians. Direct-Hit™ included."
      }
    }
  },
  "fr": {
    "secureAccess": "Accès Sécurisé à la Plateforme",
    "title": "Accédez à votre Base de Données",
    "subtitle": "Sélectionnez la plateforme à laquelle vous souhaitez vous connecter. Toutes les bases de données sont incluses dans votre abonnement.",
    "openDatabase": "Ouvrir la Base de Données",
    "signInTo": "Se connecter à {db}",
    "notSubscribed": "Pas encore abonné ?",
    "notSubscribedDesc": "Accédez aux 5 bases de données à partir de 99€/mois. Essai gratuit de 7 jours, sans carte de crédit.",
    "viewPlans": "Voir les plans et tarifs",
    "contactSales": "Ou contactez notre équipe commerciale →",
    "helpTitle": "Vous n'arrivez pas à vous connecter ?",
    "helpDesc": "Si vous ne parvenez pas à y accéder, vérifiez vos identifiants ou contactez notre support. Ce problème est généralement résolu sous 2h.",
    "getHelp": "Obtenir de l'Aide",
    "dbs": {
      "alldata": {
        "tagline": "Intelligence Automobile",
        "desc": "Procédures de réparation OEM, TSB, schémas électriques et codes DTC de la base de données phare d'AutoZone."
      },
      "autodata": {
        "tagline": "par Solera",
        "desc": "Base de données leader en Europe pour les intervalles d’entretien, données de calage, calibration ADAS et schémas électriques."
      },
      "haynes": {
        "tagline": "Données d'Atelier",
        "desc": "Guides de réparation de véhicules complets étape par étape avec des données techniques professionnelles pour ateliers."
      },
      "mitchell": {
        "tagline": "par Mitchell1",
        "desc": "ProDemand de Mitchell1 fournit aux techniciens des procédures de réparation, des organigrammes de diagnostic et des correctifs confirmés."
      },
      "identifix": {
        "tagline": "par Solera",
        "desc": "Des correctifs confirmés dans le monde réel par un réseau de plus de 70 000 techniciens professionnels. Direct-Hit™ inclus."
      }
    }
  },
  "es": {
    "secureAccess": "Acceso Seguro a la Plataforma",
    "title": "Acceda a su Base de Datos",
    "subtitle": "Seleccione la plataforma a la que desea iniciar sesión. Todas las bases de datos están incluidas en su suscripción.",
    "openDatabase": "Abrir Base de Datos",
    "signInTo": "Iniciar sesión en {db}",
    "notSubscribed": "¿Aún no estás suscrito?",
    "notSubscribedDesc": "Accede a las 5 bases de datos desde 99€/mes. 7 días de prueba gratis, sin tarjeta de crédito.",
    "viewPlans": "Ver Planes y Precios",
    "contactSales": "O contacta con el equipo de ventas →",
    "helpTitle": "¿Problemas para iniciar sesión?",
    "helpDesc": "Si no puede acceder, verifique sus credenciales o contacte con soporte. Los problemas de inicio de sesión se resuelven normalmente en 2 horas.",
    "getHelp": "Obtener Ayuda",
    "dbs": {
      "alldata": {
        "tagline": "Inteligencia Automotriz",
        "desc": "Procedimientos de reparación OEM, boletines técnicos, diagramas de cableado y códigos DTC de la base de datos principal de AutoZone."
      },
      "autodata": {
        "tagline": "por Solera",
        "desc": "Base de datos líder en Europa para intervalos de servicio, datos de sincronización, calibración de ADAS y diagramas."
      },
      "haynes": {
        "tagline": "Datos de Taller",
        "desc": "Guías de reparación de vehículos paso a paso con datos técnicos profesionales para talleres automotrices."
      },
      "mitchell": {
        "tagline": "por Mitchell1",
        "desc": "ProDemand de Mitchell1 ofrece a los técnicos procedimientos de reparación, diagramas de diagnóstico y soluciones confirmadas."
      },
      "identifix": {
        "tagline": "por Solera",
        "desc": "Reparaciones confirmadas en el mundo real por una red de más de 70,000 técnicos profesionales. Direct-Hit™ incluido."
      }
    }
  },
  "de": {
    "secureAccess": "Sicherer Plattformzugang",
    "title": "Greifen Sie auf Ihre Datenbank zu",
    "subtitle": "Wählen Sie die Plattform aus, auf der Sie sich anmelden möchten. Alle Datenbanken sind in Ihrem Abonnement enthalten.",
    "openDatabase": "Datenbank Öffnen",
    "signInTo": "Anmelden bei {db}",
    "notSubscribed": "Noch nicht abonniert?",
    "notSubscribedDesc": "Erhalten Sie ab 99 £/Monat Zugriff auf alle 5 Datenbanken. 7-tägige kostenlose Testversion, keine Kreditkarte erforderlich.",
    "viewPlans": "Pläne & Preise ansehen",
    "contactSales": "Oder kontaktieren Sie den Vertrieb →",
    "helpTitle": "Probleme bei der Anmeldung?",
    "helpDesc": "Wenn Sie nicht zugreifen können, überprüfen Sie Ihre Daten oder wenden Sie sich an unseren Support. Probleme werden normalerweise innerhalb von 2 Stunden gelöst.",
    "getHelp": "Hilfe erhalten",
    "dbs": {
      "alldata": {
        "tagline": "Automotive Intelligence",
        "desc": "OEM-Reparaturverfahren, Service-Bulletins, Schaltpläne und Fehlercodes aus der Flaggschiff-Datenbank von AutoZone."
      },
      "autodata": {
        "tagline": "von Solera",
        "desc": "Europas führende Datenbank für Serviceintervalle, Einstelldaten, ADAS-Kalibrierung und Schaltpläne."
      },
      "haynes": {
        "tagline": "Werkstattdaten",
        "desc": "Umfassende Schritt-für-Schritt Reparaturanleitungen für Fahrzeuge mit professionellen technischen Daten für Werkstätten."
      },
      "mitchell": {
        "tagline": "von Mitchell1",
        "desc": "Mitchell1s ProDemand bietet Technikern Reparaturverfahren, Diagnose-Flussdiagramme und bestätigte Reparaturen."
      },
      "identifix": {
        "tagline": "von Solera",
        "desc": "Von über 70.000 professionellen Technikern bestätigte Reparaturen aus der Praxis. Inklusive Direct-Hit™."
      }
    }
  },
  "it": {
    "secureAccess": "Accesso Sicuro alla Piattaforma",
    "title": "Accedi al tuo Database",
    "subtitle": "Seleziona la piattaforma a cui desideri accedere. Tutti i database sono inclusi nel tuo abbonamento.",
    "openDatabase": "Apri Database",
    "signInTo": "Accedi a {db}",
    "notSubscribed": "Non sei ancora abbonato?",
    "notSubscribedDesc": "Accedi a tutti e 5 i database a partire da £99/mese. Prova gratuita di 7 giorni, non è richiesta alcuna carta di credito.",
    "viewPlans": "Vedi piani e prezzi",
    "contactSales": "O contatta il nostro team di vendita →",
    "helpTitle": "Hai problemi ad accedere?",
    "helpDesc": "Se non riesci ad accedere, controlla le tue credenziali o contatta il nostro supporto. I problemi di accesso vengono solitamente risolti entro 2 ore.",
    "getHelp": "Richiedi Aiuto",
    "dbs": {
      "alldata": {
        "tagline": "Intelligenza Automobilistica",
        "desc": "Procedure di riparazione OEM, bollettini tecnici, schemi elettrici e codici DTC dal database di punta di AutoZone."
      },
      "autodata": {
        "tagline": "da Solera",
        "desc": "Database leader in Europa per intervalli di manutenzione, dati di fasatura, calibrazione ADAS e schemi elettrici."
      },
      "haynes": {
        "tagline": "Dati d'Officina",
        "desc": "Guide complete alla riparazione dei veicoli passo dopo passo con dati tecnici professionali per le officine."
      },
      "mitchell": {
        "tagline": "da Mitchell1",
        "desc": "ProDemand di Mitchell1 fornisce ai tecnici procedure di riparazione, diagrammi diagnostici e correzioni confermate."
      },
      "identifix": {
        "tagline": "da Solera",
        "desc": "Riparazioni confermate nel mondo reale da una rete di oltre 70.000 tecnici professionisti. Direct-Hit™ incluso."
      }
    }
  },
  "ar": {
    "secureAccess": "وصول آمن للمنصة",
    "title": "قم بتسجيل الدخول إلى قواعد البيانات",
    "subtitle": "حدد المنصة التي تريد تسجيل الدخول إليها. جميع قواعد البيانات مشمولة في اشتراكك.",
    "openDatabase": "فتح قاعدة البيانات",
    "signInTo": "تسجيل الدخول إلى {db}",
    "notSubscribed": "لست مشتركًا حتى الآن؟",
    "notSubscribedDesc": "احصل على إمكانية الوصول إلى جميع قواعد البيانات الخمس بدءًا من 99 جنيهًا إسترلينيًا. نسخة تجريبية مجانية لمدة 7 أيام ، بدون بطاقة ائتمان.",
    "viewPlans": "عرض الخطط والأسعار",
    "contactSales": "أو اتصل بفريق المبيعات لدينا →",
    "helpTitle": "هل تواجه مشكلة في تسجيل الدخول؟",
    "helpDesc": "إذا لم تتمكن من الوصول إلى المنصة، فتحقق من بيانات الاعتماد الخاصة بك أو اتصل بالدعم. يتم حل مشكلات تسجيل الدخول عادةً في غضون ساعتين.",
    "getHelp": "الحصول على المساعدة",
    "dbs": {
      "alldata": {
        "tagline": "ذكاء السيارات",
        "desc": "إجراءات إصلاح الشركة المصنعة ، ونشرات الخدمة ، ومخططات الأسلاك ورموز الأعطال من قاعدة بيانات AutoZone."
      },
      "autodata": {
        "tagline": "بواسطة Solera",
        "desc": "قاعدة البيانات الرائدة في أوروبا لفترات الصيانة وبيانات التوقيت ومعايرة ADAS ومخططات الأسلاك."
      },
      "haynes": {
        "tagline": "بيانات ورشة العمل",
        "desc": "أدلة شاملة لإصلاح المركبات خطوة بخطوة مع بيانات فنية احترافية لورش العمل."
      },
      "mitchell": {
        "tagline": "بواسطة Mitchell1",
        "desc": "يوفر ProDemand من Mitchell1 للفنيين إجراءات الإصلاح ، والمخططات التشخيصية ، والإصلاحات المؤكدة."
      },
      "identifix": {
        "tagline": "بواسطة Solera",
        "desc": "إصلاحات العالم الحقيقي المؤكدة من شبكة تضم أكثر من 70,000 فني محترف. يتضمن ميزة Direct-Hit™."
      }
    }
  },
  "he": {
    "secureAccess": "גישה מאובטחת לפלטפורמה",
    "title": "היכנס למסד הנתונים",
    "subtitle": "בחר את הפלטפורמה שאליה תרצה להתחבר. כל מסדי הנתונים כלולים במנוי שלך.",
    "openDatabase": "פתח מסד נתונים",
    "signInTo": "התחבר אל {db}",
    "notSubscribed": "עדיין לא מנוי?",
    "notSubscribedDesc": "קבל גישה לכל 5 מסדי הנתונים החל מ-99 פאונד לחודש. ניסיון חינם ל-7 ימים, ללא צורך בכרטיס אשראי.",
    "viewPlans": "צפה בתוכניות ומחירים",
    "contactSales": "או פנה לצוות המכירות שלנו →",
    "helpTitle": "מתקשים להתחבר?",
    "helpDesc": "אם אינך מצליח לגשת לפלטפורמה, בדוק את האישורים שלך או צור קשר עם התמיכה שלנו. בעיות התחברות נפתרות לרוב תוך שעתיים.",
    "getHelp": "קבל עזרה",
    "dbs": {
      "alldata": {
        "tagline": "מודיעין רכב",
        "desc": "נהלי תיקון של יצרן הציוד המקורי, עלוני שירות תקופתיים, תרשימי חיווט וקודי תקלה ממסד הנתונים של אאוטוזון."
      },
      "autodata": {
        "tagline": "מאת סולרה",
        "desc": "מסד הנתונים המוביל באירופה עבור מרווחי שירות, נתוני טיימינג, כיול מערכות מתקדמות לעזרת הנהג (ADAS) ותרשימי חיווט."
      },
      "haynes": {
        "tagline": "נתוני מוסך",
        "desc": "מדריכי תיקון רכב מקיפים צעד אחר צעד עם נתונים טכניים מקצועיים למוסכים."
      },
      "mitchell": {
        "tagline": "מאת מיטשל 1",
        "desc": "ה-ProDemand של מישל 1 מספק לטכנאים נהלי תיקון, תרשימי זרימה לאבחון ותיקונים מאושרים."
      },
      "identifix": {
        "tagline": "מאת סולרה",
        "desc": "תיקונים מציאותיים מאושרים מרשת של למעלה מ-70,000 טכנאים מקצועיים. כולל את טכנולוגיית ה- Direct-Hit™."
      }
    }
  }
};

const langs = ['en', 'fr', 'es', 'de', 'it', 'ar', 'he'];

for (const lang of langs) {
  const file = `./src/dictionaries/${lang}.json`;
  if (fs.existsSync(file)) {
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    json.login = data[lang];
    fs.writeFileSync(file, JSON.stringify(json, null, 2));
    console.log(`Updated login node in ${lang}.json`);
  }
}
