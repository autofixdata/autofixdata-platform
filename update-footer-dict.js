const fs = require('fs');

const translations = {
  en: {
    ctaHeading: "Start Free Trial Today",
    ctaSubheading: "Full platform access. No credit card. No commitment.",
    ctaButton: "Start Free Trial Now",
    noCard: "No credit card",
    noContract: "No contract",
    cancelAnytime: "Cancel anytime",
    workshops: "10,000+ workshops"
  },
  fr: {
    ctaHeading: "Commencez votre essai gratuit aujourd'hui",
    ctaSubheading: "Accès complet à la plateforme. Sans carte de crédit. Sans engagement.",
    ctaButton: "Commencer l'essai gratuit",
    noCard: "Sans carte de crédit",
    noContract: "Sans contrat",
    cancelAnytime: "Annulation à tout moment",
    workshops: "Plus de 10 000 ateliers"
  },
  es: {
    ctaHeading: "Comience su prueba gratuita hoy",
    ctaSubheading: "Acceso completo a la plataforma. Sin tarjeta de crédito. Sin compromiso.",
    ctaButton: "Comenzar prueba gratuita ahora",
    noCard: "Sin tarjeta de crédito",
    noContract: "Sin contrato",
    cancelAnytime: "Cancela cuando quieras",
    workshops: "Más de 10.000 talleres"
  },
  de: {
    ctaHeading: "Starten Sie Ihre kostenlose Testversion heute",
    ctaSubheading: "Voller Plattformzugriff. Keine Kreditkarte. Keine Verpflichtung.",
    ctaButton: "Jetzt kostenlos testen",
    noCard: "Keine Kreditkarte",
    noContract: "Kein Vertrag",
    cancelAnytime: "Jederzeit kündbar",
    workshops: "10.000+ Werkstätten"
  },
  it: {
    ctaHeading: "Inizia la tua prova gratuita oggi",
    ctaSubheading: "Accesso completo alla piattaforma. Nessuna carta di credito. Nessun impegno.",
    ctaButton: "Inizia la prova gratuita ora",
    noCard: "Nessuna carta di credito",
    noContract: "Nessun contratto",
    cancelAnytime: "Annulla in qualsiasi momento",
    workshops: "Oltre 10.000 officine"
  },
  ar: {
    ctaHeading: "ابدأ تجربتك المجانية اليوم",
    ctaSubheading: "وصول كامل للمنصة. بدون بطاقة ائتمان. بدون التزام.",
    ctaButton: "ابدأ التجربة المجانية الآن",
    noCard: "بدون بطاقة ائتمان",
    noContract: "بدون عقد",
    cancelAnytime: "إلغاء في أي وقت",
    workshops: "أكثر من ١٠,٠٠٠ ورشة"
  },
  he: {
    ctaHeading: "התחל ניסיון בחינם היום",
    ctaSubheading: "גישה מלאה לפלטפורמה. ללא כרטיס אשראי. ללא התחייבות.",
    ctaButton: "התחל ניסיון בחינם עכשיו",
    noCard: "ללא כרטיס אשראי",
    noContract: "ללא חוזה",
    cancelAnytime: "בטל בכל עת",
    workshops: "10,000+ מוסכים"
  }
};

const langs = ['en', 'fr', 'es', 'de', 'it', 'ar', 'he'];

for (const lang of langs) {
  const p = `C:/Users/Ayoub/Desktop/Asset-Manager/artifacts/autofixdata-next/src/dictionaries/${lang}.json`;
  try {
    const dict = JSON.parse(fs.readFileSync(p, 'utf8'));
    dict.footer = {
      ...dict.footer,
      ...translations[lang]
    };
    fs.writeFileSync(p, JSON.stringify(dict, null, 2));
    console.log(`Updated ${lang}.json`);
  } catch(e) {
    console.error(`Failed ${lang}`, e);
  }
}
