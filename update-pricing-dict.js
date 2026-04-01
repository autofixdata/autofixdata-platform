const fs = require('fs');
const path = require('path');

const data = {
  en: {
    hero: {
      promo: "7-day free trial — no credit card required",
      heading1: "Simple, Transparent",
      heading2: "Workshop Pricing",
      subheading: "One subscription. Five professional databases. Choose the plan that fits your workshop size."
    },
    billing: {
      monthly: "Monthly",
      yearly: "Yearly",
      save20: "Save 20%",
      billedAnnually: "billed annually",
      mo: "/mo",
      yr: "/yr",
      custom: "Custom",
      contactSales: "Volume pricing available — contact sales"
    },
    plansData: {
      starter: {
        name: "Individual Tech",
        tagline: "For solo mechanics and mobile technicians.",
        features: ["1 User License", "All 5 Databases Included", "OEM Repair Procedures & TSBs", "Wiring Diagrams & DTC Library", "Standard Email Support", "Cloud Access"],
        cta: "Get Started"
      },
      pro: {
        name: "Independent Garage",
        tagline: "For workshops with up to 5 bays/technicians.",
        badge: "Most Popular",
        features: ["Up to 2 User Licenses", "All 5 Databases Included", "Full Interactive Wiring Diagrams", "Estimating & Quoting Tools", "Advanced Diagnostics (Identifix)", "Priority Support", "ADAS Calibration Data"],
        cta: "Get Started"
      },
      enterprise: {
        name: "Fleet & Dealership",
        tagline: "For large operations and dealership groups.",
        features: ["Unlimited User Licenses", "All 5 Databases Included", "API Integration Access", "DMS Export Capability", "Dedicated Account Manager", "SLA-backed Support", "Custom Onboarding"],
        cta: "Contact Sales"
      }
    },
    table: {
      heading: "What's Included in Each Database",
      subheading: "All five databases are available in every plan.",
      featureCol: "Feature",
      rows: [
        "OEM Repair Procedures",
        "Full-Colour Wiring Diagrams",
        "DTC Code Library",
        "TSBs & Safety Recalls",
        "Maintenance Schedules",
        "Labour / Flat-Rate Times",
        "Parts Catalogue Integration",
        "Real-World Confirmed Fixes",
        "Diagnostic Flowcharts",
        "Component Locators",
        "Torque Specifications",
        "Fluid Specifications",
        "ADAS / Calibration Data",
        "EV & Hybrid Coverage",
        "ECU Connector Pinouts",
        "Timing Belt / Chain Kits",
        "API / DMS Integration",
        "Light Commercial Coverage"
      ]
    },
    faqHeading: "Pricing FAQs"
  },
  fr: {
    hero: {
      promo: "Essai gratuit de 7 jours — aucune carte de crédit requise",
      heading1: "Tarification",
      heading2: "Simple et Transparente",
      subheading: "Un abonnement. Cinq bases de données professionnelles. Choisissez le forfait qui convient à votre garage."
    },
    billing: {
      monthly: "Mensuel",
      yearly: "Annuel",
      save20: "Économisez 20%",
      billedAnnually: "facturé annuellement",
      mo: "/mois",
      yr: "/an",
      custom: "Sur mesure",
      contactSales: "Tarification de volume disponible — contacter les ventes"
    },
    plansData: {
      starter: {
        name: "Technicien Individuel",
        tagline: "Pour les mécaniciens indépendants et techniciens mobiles.",
        features: ["1 Licence Utilisateur", "Les 5 Bases de Données Incluses", "Procédures de Réparation OEM & TSB", "Schémas Électriques & Bibliothèque DTC", "Support Standard", "Accès Cloud"],
        cta: "Commencer"
      },
      pro: {
        name: "Garage Indépendant",
        tagline: "Pour les ateliers jusqu'à 5 postes/techniciens.",
        badge: "Le Plus Populaire",
        features: ["Jusqu'à 2 Licences Utilisateur", "Les 5 Bases de Données Incluses", "Schémas Électriques Interactifs", "Outils d'Estimation & Devis", "Diagnostics Avancés (Identifix)", "Support Prioritaire", "Données de Calibration ADAS"],
        cta: "Commencer"
      },
      enterprise: {
        name: "Flotte & Concessionnaire",
        tagline: "Pour les grandes opérations et groupes de concessionnaires.",
        features: ["Licences Utilisateur Illimitées", "Les 5 Bases Incluses", "Accès à l'Intégration API", "Capacité d'Export DMS", "Gestionnaire de Compte Dédié", "Support Garanti (SLA)", "Intégration Sur Mesure"],
        cta: "Contacter les Ventes"
      }
    },
    table: {
      heading: "Ce Qui Est Inclus Dans Chaque Base",
      subheading: "Les cinq bases de données sont disponibles dans chaque forfait.",
      featureCol: "Fonctionnalité",
      rows: [
        "Procédures de Réparation OEM",
        "Schémas Électriques en Couleur",
        "Bibliothèque de Codes DTC",
        "Bulletins Techniques (TSB) & Rappels",
        "Plans d'Entretien",
        "Temps de Main-d'œuvre",
        "Intégration du Catalogue de Pièces",
        "Réparations Confirmées (Monde Réel)",
        "Diagrammes de Flux de Diagnostic",
        "Localisation des Composants",
        "Spécifications de Serrage (Couples)",
        "Spécifications des Fluides",
        "Données de Calibration ADAS",
        "Couverture VE et Hybrides",
        "Brochage des Connecteurs ECU",
        "Kits de Distribution (Courroie/Chaîne)",
        "Intégration API / DMS",
        "Véhicules Utilitaires Légers"
      ]
    },
    faqHeading: "FAQ sur la Tarification"
  },
  es: {
    hero: {
      promo: "7 días de prueba gratis — sin tarjeta de crédito",
      heading1: "Precios de Taller",
      heading2: "Simples y Transparentes",
      subheading: "Una suscripción. Cinco bases de datos profesionales. Elija el plan que se adapte al tamaño de su taller."
    },
    billing: {
      monthly: "Mensual",
      yearly: "Anual",
      save20: "Ahorre 20%",
      billedAnnually: "facturado anualmente",
      mo: "/mes",
      yr: "/año",
      custom: "A medida",
      contactSales: "Precios por volumen disponibles — contactar a ventas"
    },
    plansData: {
      starter: {
        name: "Mecánico Individual",
        tagline: "Para técnicos autónomos y móviles.",
        features: ["1 Licencia de Usuario", "Las 5 Bases Incluidas", "Procedimientos OEM y TSB", "Diagramas y Biblioteca DTC", "Soporte Estándar", "Acceso a la Nube"],
        cta: "Empezar Ahora"
      },
      pro: {
        name: "Taller Independiente",
        tagline: "Para talleres con hasta 5 mecánicos.",
        badge: "Más Popular",
        features: ["Hasta 2 Licencias de Usuario", "Las 5 Bases Incluidas", "Diagramas Interactivos a Color", "Herramientas de Presupuesto", "Diagnóstico Avanzado (Identifix)", "Soporte Prioritario", "Calibración ADAS"],
        cta: "Empezar Ahora"
      },
      enterprise: {
        name: "Flotas y Concesionarios",
        tagline: "Para grandes operaciones.",
        features: ["Licencias Ilimitadas", "Las 5 Bases Incluidas", "Acceso a Integración API", "Exportación DMS", "Gestor de Cuenta Dedicado", "Soporte con SLA", "Incorporación Personalizada"],
        cta: "Contactar a Ventas"
      }
    },
    table: {
      heading: "Qué Incluye Cada Base de Datos",
      subheading: "Las cinco bases de datos están disponibles en todos los planes.",
      featureCol: "Funcionalidad/Característica",
      rows: [
        "Procedimientos de Reparación OEM",
        "Diagramas Eléctricos a Todo Color",
        "Biblioteca de Códigos DTC",
        "Boletines (TSB) y Llamadas a Revisión",
        "Programas de Mantenimiento",
        "Tiempos de Mano de Obra",
        "Integración de Catálogo de Piezas",
        "Soluciones Verificadas en el Mundo Real",
        "Diagramas de Flujo de Diagnóstico",
        "Localización de Componentes",
        "Pares de Apriete",
        "Datos de Fluidos y Capacidades",
        "Datos de Calibración ADAS",
        "Cobertura Eléctricos e Híbridos",
        "Patillaje de Conectores ECU",
        "Correas y Cadenas de Distribución",
        "Integración API / DMS",
        "Vehículos Comerciales Ligeros"
      ]
    },
    faqHeading: "Preguntas Frecuentes de Precios"
  },
  de: {
    hero: {
      promo: "7 Tage kostenlos testen — keine Kreditkarte",
      heading1: "Einfache, transparente",
      heading2: "Werkstatt-Preise",
      subheading: "Ein Abo. Fünf Datenbanken. Wählen Sie den Plan, der am besten passt."
    },
    billing: {
      monthly: "Monatlich",
      yearly: "Jährlich",
      save20: "20% Sparen",
      billedAnnually: "jährlich abgerechnet",
      mo: "/Mo",
      yr: "/Jahr",
      custom: "Individuell",
      contactSales: "Mengenrabatt — Vertrieb kontaktieren"
    },
    plansData: {
      starter: {
        name: "Einzeltechniker",
        tagline: "Für Einzelmechaniker und Mobile.",
        features: ["1 Nutzerlizenz", "Alle 5 Datenbanken", "OEM Verfahren & TSBs", "Schaltpläne & DTC", "Standard Support", "Cloud Zugriff"],
        cta: "Jetzt starten"
      },
      pro: {
        name: "Freie Werkstatt",
        tagline: "Für Werkstätten bis zu 5 Hebebühnen.",
        badge: "Bestseller",
        features: ["Bis zu 2 Nutzer", "Alle 5 Datenbanken", "Interaktive Schaltpläne", "Kalkulation & Angebote", "Erweiterte Diagnose (Identifix)", "Prio Support", "ADAS Daten"],
        cta: "Jetzt starten"
      },
      enterprise: {
        name: "Flotte & Autohaus",
        tagline: "Für Großbetriebe und Filialen.",
        features: ["Unbegrenzte Nutzer", "Alle 5 Datenbanken", "API Integration", "DMS Export", "Eigener Account Manager", "SLA Support", "Individuelles Onboarding"],
        cta: "Vertrieb kontaktieren"
      }
    },
    table: {
      heading: "Was ist in jeder Datenbank enthalten",
      subheading: "Alle fünf stehen in jedem Paket zur Verfügung.",
      featureCol: "Funktion",
      rows: [
        "OEM Reparaturverfahren",
        "Schaltpläne in Farbe",
        "DTC Fehlercode-Bibliothek",
        "TSB & Rückrufaktionen",
        "Wartungspläne",
        "Arbeitsrichtzeiten (AW)",
        "Teilekatalog-Integration",
        "Bestätigte Praxis-Lösungen",
        "Diagnose-Ablaufdiagramme",
        "Bauteilanordnung",
        "Anzugsdrehmomente",
        "Füllmengen & Spezifikationen",
        "ADAS Kalibrierungsdaten",
        "EV & Hybrid Abdeckung",
        "ECU Steckerbelegung",
        "Zahnriemen & Steuerketten",
        "API / DMS Schnittstellen",
        "Leichte Nutzfahrzeuge (Transporter)"
      ]
    },
    faqHeading: "Preise FAQ"
  },
  it: {
    hero: {
      promo: "Prova gratuita 7 giorni — nessuna carta",
      heading1: "Prezzi per le Officine",
      heading2: "Semplici e Trasparenti",
      subheading: "Un solo abbonamento. Cinque banche dati professionali. Scegli il piano."
    },
    billing: {
      monthly: "Mensile",
      yearly: "Annuale",
      save20: "Risparmia 20%",
      billedAnnually: "fatturato annualmente",
      mo: "/mese",
      yr: "/anno",
      custom: "Personalizzato",
      contactSales: "Prezzi per volumi — contatta le vendite"
    },
    plansData: {
      starter: {
        name: "Tecnico Singolo",
        tagline: "Per meccanici individuali o mobili.",
        features: ["1 Licenza", "Tutte 5 Banche Dati", "Procedure OEM e TSB", "Schemi e DTC", "Supporto Standard", "Cloud"],
        cta: "Inizia Ora"
      },
      pro: {
        name: "Officina Indipendente",
        tagline: "Fino a 5 tecnici.",
        badge: "Il più popolare",
        features: ["Fino a 2 Licenze", "Tutte 5 Banche Dati", "Schemi Interattivi", "Preventivi", "Diagnosi Avanzata", "Supporto Prioritario", "Dati ADAS"],
        cta: "Inizia Ora"
      },
      enterprise: {
        name: "Grandi Officine / Flotte",
        tagline: "Per grandi volumi.",
        features: ["Licenze Illimitate", "Tutte 5 Banche Dati", "API", "Export DMS", "Manager Dedicato", "Supporto SLA", "Onboarding"],
        cta: "Contatta Vendite"
      }
    },
    table: {
      heading: "Cosa è incluso nei database",
      subheading: "Tutti e cinque presenti in ogni piano.",
      featureCol: "Caratteristica",
      rows: [
        "Procedure Riparative OEM",
        "Schemi Elettrici a Colori",
        "Libreria Codici DTC",
        "Bollettini (TSB) e Richiami",
        "Tempistiche di Tagliando (Manutenzione)",
        "Tempi di Manodopera",
        "Integrazione Catalogo Ricambi",
        "Casi e Fix Reali Confermati",
        "Diagrammi Flusso di Diagnosi",
        "Ubicazione Componenti",
        "Coppie di Serraggio",
        "Specifiche Liquidi",
        "Dati Calibrazione ADAS",
        "Copertura Veicoli Ibridi / Elettrici",
        "Pinout Connettori ECU",
        "Sostituzione Cinghie e Catene",
        "Integrazioni API / DMS",
        "Veicoli Commerciali Leggeri"
      ]
    },
    faqHeading: "FAQ sui Prezzi"
  },
  ar: {
    hero: {
      promo: "تجربة مجانية 7 أيام — بدون بطاقة ائتمان",
      heading1: "باقات وأسعار الورش",
      heading2: "شفافة وبسيطة",
      subheading: "اشتراك واحد يضم خمس قواعد بيانات متطورة."
    },
    billing: {
      monthly: "شهري",
      yearly: "سنوي",
      save20: "وفر 20%",
      billedAnnually: "الفوترة سنوية",
      mo: "/شهر",
      yr: "/سنة",
      custom: "مخصص",
      contactSales: "تواصل مع المبيعات للحصول على عروض الشركات"
    },
    plansData: {
      starter: {
        name: "ميكانيكي مستقل",
        tagline: "للفنيين المستقلين والمتنقلين.",
        features: ["مستخدم واحد", "الخمس برامج معاً", "دلائل OEM والإصلاح", "مخططات الكهرباء وأكواد DTC", "دعم فني", "وصول سحابي"],
        cta: "ابدأ الآن"
      },
      pro: {
        name: "ورشة عمل",
        tagline: "للورش التي تصل لـ 5 رافعات.",
        badge: "الأكثر شيوعاً",
        features: ["مستخدمين (2)", "الخمس برامج معاً", "مخططات تفاعلية كاملة", "أدلة أوقات العمالة", "تشخيص متقدم Identifix", "دعم أولوية", "بيانات رادار ADAS"],
        cta: "ابدأ الآن"
      },
      enterprise: {
        name: "الشركات والوكالات",
        tagline: "عمليات ضخمة وأساطيل.",
        features: ["عدد مستخدمين مفتوح", "جميع البرامج", "ربط API للأنظمة", "قاعدة تصدير DMS", "مدير حساب خاص", "دعم SLA ضماني", "تدريب إعدادي"],
        cta: "اتصل بالمبيعات"
      }
    },
    table: {
      heading: "ما هو مدرج في القواعد",
      subheading: "القواعد الخمسة متاحة في أي خطة.",
      featureCol: "الميزة",
      rows: [
        "إجراءات الإصلاح الأساسية (OEM)",
        "مخططات كهربائية ملونة وتفاعلية",
        "مكتبة رموز الأخطاء (DTC)",
        "نشرات الصيانة TSB والاستدعاءات",
        "جداول ومواعيد الصيانة الدورية",
        "أوقات أجور العمل المقدرة",
        "تكامل مع كتالوج قطع الغيار",
        "حلول وإصلاحات من خبراء الواقع",
        "مخططات سير خطوات التشخيص",
        "مواقع المكونات داخل المركبة",
        "مواصفات ودليل عزم الدوران",
        "أنواع ومواصفات السوائل",
        "معايرة ADAS (الرادارات والكاميرات)",
        "تغطية للسيارات الكهربائية والهجينة",
        "نقاط الاتصال بفيش أو وحدة التحكم (ECU)",
        "طقم سيور وجنازير التايمن (Timing)",
        "تكامل مع إدارة الورش API / DMS",
        "المركبات التجارية الخفيفة وشاحنات النقل"
      ]
    },
    faqHeading: "الأسئلة الشائعة للأسعار"
  },
  he: {
    hero: {
      promo: "7 ימי ניסיון בחינם — ללא כרטיס אשראי",
      heading1: "תמחור תוכנה",
      heading2: "פשוט ושקוף לכל מוסך",
      subheading: "מנוי יחיד שמאגד חמש פלטפורמות תוכן. "
    },
    billing: {
      monthly: "חודשי",
      yearly: "שנתי",
      save20: "חסוך 20%",
      billedAnnually: "חיוב באופן שנתי",
      mo: "/חודש",
      yr: "/שנה",
      custom: "מותאם אישית",
      contactSales: "צרו קשר לתמחור כמותי"
    },
    plansData: {
      starter: {
        name: "טכנאי בודד",
        tagline: "למכונאים וניידות סולו.",
        features: ["מוקצה למשתמש 1", "כל ה-5 התוכנות", "הוראות יצרן מקיפות", "שרטוטי חשמל ותקלות", "תמיכה שוטפת", "בזמינות מהענן"],
        cta: "בחר מסלול"
      },
      pro: {
        name: "מוסך מורשה / כללי",
        tagline: "לסדנאות עד 5 עמדות עבודה.",
        badge: "הפופולרי ביותר",
        features: ["לרשום של עד 2 משתמשים", "כל ה-5 פלטפורמות", "חשמל אינטרקטיבי VESA", "הצעות מחיר ושעות מוסך", "אבחון מתקדם עם Identifix", "תמיכה מהירה", "כיול מצלמות וראדאר (ADAS)"],
        cta: "התחל עכשיו"
      },
      enterprise: {
        name: "סוכניות ענק / ציי רכב",
        tagline: "קבוצות סחר ונוחות ענק.",
        features: ["טכנאים ללא הגבלה", "כל הרשיונות פתוחים", "גישת API לתשתית", "התממשקות לייצוא DMS", "ליווי על ידי מנהל אישי", "תמיכה עסקית תחת הבטחה SLA", "תהליך הדרכה קבוצתי"],
        cta: "דברו עם המכירות"
      }
    },
    table: {
      heading: "מה נכלל בתוך המערכת בכללית",
      subheading: "חמש התוכנות זמינות בכל החבילות המוצעות.",
      featureCol: "תכונה במערכת",
      rows: [
        "הוראות פירוק והרכבת פריטים (OEM Procedure)",
        "שרטוטי חשמל קיימים במלוא הצבעים",
        "גישה לספריית קוד התקלות (DTC Library)",
        "אגרות קריאות שירות ויצרן (TSB\u0027s & Recalls)",
        "שגרות טבלת תחזוקה שוטפת",
        "יומן מעקב הערכת שעות טכנאי (Labor Times)",
        "התממשקות מובנית מאגר מקטים וזיהוי פריטים",
        "אבחון מחוות דעת עובדות מעשית מאומתות",
        "מרשם מדויק לעצי ההחלטות לפענוח התקלה",
        "איתור גיאוגרפי במכונית לפיוזים וממסרים",
        "הנחיות תפעולית ליצרן סגירה עם מומנטים נכונים",
        "נוזלי הרכב ומדדי תקן וסוגי תפעול (שמנים/גז)",
        "עדכוני התממשקות לכיוד ראדאר ומצלמות מקדים (ADAS)",
        "התייחסות מלאה לעולמות ההייבריד והחשמל",
        "סידורי הרגלים בלוחות מוח וצמות ECU בעת אפיון שקעים",
        "התקנת חגורות ושירות גלגלי תזמון מנוע פנימי",
        "שילוב אוטומציות מוסך (API או DMS סנכרונית)",
        "מרכבים ומסחריות במגזר העסקים (משאיות וטנדרים קלים)"
      ]
    },
    faqHeading: "שאלות לגבי מנויים ותשלומים"
  }
};

Object.keys(data).forEach(lang => {
  const p = path.join(__dirname, 'src', 'dictionaries', `${lang}.json`);
  if(fs.existsSync(p)) {
    const dict = JSON.parse(fs.readFileSync(p, 'utf8'));
    dict.pricingProps = data[lang];
    fs.writeFileSync(p, JSON.stringify(dict, null, 2));
    console.log(`Updated pricingProps in ${lang}.json`);
  }
});
