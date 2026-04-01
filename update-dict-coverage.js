const fs = require('fs');
const path = require('path');

const dictDir = path.join(__dirname, 'src', 'dictionaries');
const files = ['en.json', 'fr.json', 'es.json', 'de.json', 'it.json', 'ar.json', 'he.json'];

const translations = {
  en: {
    coverageHeading: "Coverage Across All Major Makes",
    coverageSub: "OEM data for 150+ vehicle manufacturers — 1990 to present"
  },
  fr: {
    coverageHeading: "Couverture de Toutes les Grandes Marques",
    coverageSub: "Données OEM pour plus de 150 constructeurs automobiles — de 1990 à aujourd'hui"
  },
  es: {
    coverageHeading: "Cobertura de Todas las Principales Marcas",
    coverageSub: "Datos OEM para más de 150 fabricantes de vehículos — desde 1990 hasta el presente"
  },
  de: {
    coverageHeading: "Abdeckung Aller Großen Marken",
    coverageSub: "OEM-Daten für über 150 Fahrzeughersteller — 1990 bis heute"
  },
  it: {
    coverageHeading: "Copertura di Tutti i Principali Marchi",
    coverageSub: "Dati OEM per oltre 150 produttori di veicoli — dal 1990 ad oggi"
  },
  ar: {
    coverageHeading: "تغطية لجميع العلامات التجارية الكبرى",
    coverageSub: "بيانات أصلية لأكثر من 150 شركة تصنيع سيارات — من عام 1990 حتى الآن"
  },
  he: {
    coverageHeading: "כיסוי לכל המותגים הגדולים",
    coverageSub: "נתוני OEM ליותר מ-150 יצרני רכב — משנת 1990 ועד היום"
  }
};

files.forEach(file => {
  const lang = file.replace('.json', '');
  const filePath = path.join(dictDir, file);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Inject into common
    if (!data.common) data.common = {};
    data.common.coverageHeading = translations[lang].coverageHeading;
    data.common.coverageSub = translations[lang].coverageSub;
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${file}`);
  }
});
