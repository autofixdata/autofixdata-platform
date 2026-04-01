const fs = require('fs');
const path = require('path');

const dictDir = path.join(__dirname, 'src', 'dictionaries');
const files = ['en.json', 'fr.json', 'es.json', 'de.json', 'it.json', 'ar.json', 'he.json'];

const translations = {
  en: {
    makeTitle: "{Ma} OEM Repair Manuals & Wiring Diagrams",
    modelTitle: "{Ma} {Mo} Repair Manual & Wiring Diagrams",
    yearTemplateTitle: "{Y} {Ma} {Mo} Repair Manual & Wiring Diagrams",
    yearTemplateDesc: "Access complete OEM repair data, service manuals, and interactive wiring diagrams for the {Y} {Ma} {Mo}."
  },
  fr: {
    makeTitle: "Manuels de Réparation et Schémas Électriques OEM {Ma}",
    modelTitle: "Manuel de Réparation et Schémas Électriques {Ma} {Mo}",
    yearTemplateTitle: "Manuel de Réparation et Schémas Électriques {Y} {Ma} {Mo}",
    yearTemplateDesc: "Accédez aux données de réparation OEM complètes, aux manuels d'entretien et aux schémas électriques interactifs pour la {Y} {Ma} {Mo}."
  },
  es: {
    makeTitle: "Manuales de Reparación y Diagramas de Cableado OEM {Ma}",
    modelTitle: "Manual de Reparación y Diagramas de Cableado {Ma} {Mo}",
    yearTemplateTitle: "Manual de Reparación y Diagramas de Cableado {Y} {Ma} {Mo}",
    yearTemplateDesc: "Acceda a datos completos de reparación OEM, manuales de servicio y diagramas de cableado interactivos para el {Y} {Ma} {Mo}."
  },
  de: {
    makeTitle: "{Ma} OEM Reparaturanleitungen & Schaltpläne",
    modelTitle: "{Ma} {Mo} Reparaturanleitung & Schaltpläne",
    yearTemplateTitle: "{Y} {Ma} {Mo} Reparaturanleitung & Schaltpläne",
    yearTemplateDesc: "Greifen Sie auf vollständige OEM-Reparaturdaten, Servicehandbücher und interaktive Schaltpläne für den {Y} {Ma} {Mo} zu."
  },
  it: {
    makeTitle: "Manuali di Riparazione e Schemi Elettrici OEM {Ma}",
    modelTitle: "Manuale di Riparazione e Schemi Elettrici {Ma} {Mo}",
    yearTemplateTitle: "Manuale di Riparazione e Schemi Elettrici {Y} {Ma} {Mo}",
    yearTemplateDesc: "Accedi a dati di riparazione OEM completi, manuali di servizio e schemi elettrici interattivi per la {Y} {Ma} {Mo}."
  },
  ar: {
    makeTitle: "أدلة الإصلاح ومخططات الأسلاك لشركة {Ma}",
    modelTitle: "دليل الإصلاح ومخططات الأسلاك {Ma} {Mo}",
    yearTemplateTitle: "دليل الإصلاح ومخططات الأسلاك {Y} {Ma} {Mo}",
    yearTemplateDesc: "احصل على بيانات الإصلاح الأصلية وأدلة الخدمة ومخططات الأسلاك التفاعلية لسيارة {Y} {Ma} {Mo}."
  },
  he: {
    makeTitle: "מדריכי תיקון ותרשימי חיווט מקוריים של {Ma}",
    modelTitle: "מדריך תיקון ותרשימי חיווט {Ma} {Mo}",
    yearTemplateTitle: "מדריך תיקון ותרשימי חיווט {Y} {Ma} {Mo}",
    yearTemplateDesc: "גישה לנתוני תיקון מקוריים מלאים, מדריכי שירות ותרשימי חיווט אינטראקטיביים עבור {Y} {Ma} {Mo}."
  }
};

files.forEach(file => {
  const lang = file.replace('.json', '');
  const filePath = path.join(dictDir, file);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Inject manuals object
    data.manuals = translations[lang];
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${file} with manuals translations`);
  }
});
