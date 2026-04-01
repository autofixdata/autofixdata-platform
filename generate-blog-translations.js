/**
 * Blog Translation Generator
 * Creates translated MDX stub files for all 6 non-English languages
 * by copying the English source files and updating lang-specific fields.
 * 
 * Run: node generate-blog-translations.js
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join('src', 'content', 'blog');
const SRC_LANG = 'en';
const LANGS = ['fr', 'es', 'de', 'it', 'ar', 'he'];

// Map of keyword replacements per language for titles / excerpts
const TRANSLATIONS = {
  fr: {
    label: 'Français',
    authorSuffix: '(Traduit par l\'équipe Auto Fix Data)',
    tagMap: {
      'Wiring Diagrams': 'Schémas Électriques',
      'OEM Data': 'Données OEM',
      'Diagnostics': 'Diagnostic',
      'ALLDATA': 'ALLDATA',
      'Mitchell1': 'Mitchell1',
      'AutoData': 'AutoData',
      'Comparison': 'Comparatif',
      'Training': 'Formation',
      'CAN Bus': 'Bus CAN',
      'U-Codes': 'Codes U',
      'Network Diagnostics': 'Diagnostic Réseau',
      'Pricing': 'Tarifs',
      'Software': 'Logiciel',
      'Workshop Management': 'Gestion d\'Atelier',
      'OBD-II': 'OBD-II',
      'ADAS': 'ADAS',
      'Calibration': 'Calibration',
      'Safety Systems': 'Systèmes de Sécurité',
      'European Cars': 'Voitures Européennes',
      'BMW': 'BMW',
      'Mercedes': 'Mercedes',
      'VW': 'VW',
      'Repair Data': 'Données de Réparation',
      'Battery Drain': 'Décharge Batterie',
      'Parasitic Draw': 'Courant Parasite',
      'Electrical Diagnosis': 'Diagnostic Électrique',
      'Industry Trends': 'Tendances du Secteur',
    }
  },
  es: {
    label: 'Español',
    authorSuffix: '(Traducido por el equipo de Auto Fix Data)',
    tagMap: {
      'Wiring Diagrams': 'Diagramas de Cableado',
      'OEM Data': 'Datos OEM',
      'Diagnostics': 'Diagnóstico',
      'Comparison': 'Comparativa',
      'Training': 'Formación',
      'CAN Bus': 'Bus CAN',
      'U-Codes': 'Códigos U',
      'Network Diagnostics': 'Diagnóstico de Red',
      'Pricing': 'Precios',
      'Software': 'Software',
      'Workshop Management': 'Gestión de Taller',
      'ADAS': 'ADAS',
      'Calibration': 'Calibración',
      'Safety Systems': 'Sistemas de Seguridad',
      'European Cars': 'Coches Europeos',
      'Repair Data': 'Datos de Reparación',
      'Battery Drain': 'Descarga de Batería',
      'Parasitic Draw': 'Descarga Parasitaria',
      'Electrical Diagnosis': 'Diagnóstico Eléctrico',
      'Industry Trends': 'Tendencias del Sector',
    }
  },
  de: {
    label: 'Deutsch',
    authorSuffix: '(Übersetzt vom Auto Fix Data-Team)',
    tagMap: {
      'Wiring Diagrams': 'Schaltpläne',
      'OEM Data': 'OEM-Daten',
      'Diagnostics': 'Diagnose',
      'Comparison': 'Vergleich',
      'Training': 'Schulung',
      'CAN Bus': 'CAN-Bus',
      'U-Codes': 'U-Codes',
      'Network Diagnostics': 'Netzwerkdiagnose',
      'Pricing': 'Preise',
      'Software': 'Software',
      'Workshop Management': 'Werkstattverwaltung',
      'ADAS': 'ADAS',
      'Calibration': 'Kalibrierung',
      'Safety Systems': 'Sicherheitssysteme',
      'European Cars': 'Europäische Fahrzeuge',
      'Repair Data': 'Reparaturdaten',
      'Battery Drain': 'Batterie-Entladung',
      'Parasitic Draw': 'Ruhestromfehler',
      'Electrical Diagnosis': 'Elektrische Diagnose',
      'Industry Trends': 'Branchentrends',
    }
  },
  it: {
    label: 'Italian',
    authorSuffix: '(Tradotto dal team di Auto Fix Data)',
    tagMap: {
      'Wiring Diagrams': 'Schemi Elettrici',
      'OEM Data': 'Dati OEM',
      'Diagnostics': 'Diagnostica',
      'Comparison': 'Confronto',
      'Training': 'Formazione',
      'CAN Bus': 'Bus CAN',
      'U-Codes': 'Codici U',
      'Network Diagnostics': 'Diagnosi di Rete',
      'Pricing': 'Prezzi',
      'Software': 'Software',
      'Workshop Management': 'Gestione Officina',
      'ADAS': 'ADAS',
      'Calibration': 'Calibrazione',
      'Safety Systems': 'Sistemi di Sicurezza',
      'European Cars': 'Auto Europee',
      'Repair Data': 'Dati di Riparazione',
      'Battery Drain': 'Scarica Batteria',
      'Parasitic Draw': 'Consumo Parassita',
      'Electrical Diagnosis': 'Diagnosi Elettrica',
      'Industry Trends': 'Tendenze del Settore',
    }
  },
  ar: {
    label: 'Arabic',
    authorSuffix: '(ترجمة فريق Auto Fix Data)',
    tagMap: {
      'Wiring Diagrams': 'مخططات الأسلاك',
      'OEM Data': 'بيانات OEM',
      'Diagnostics': 'التشخيص',
      'Comparison': 'مقارنة',
      'Training': 'التدريب',
      'CAN Bus': 'شبكة CAN',
      'U-Codes': 'رموز U',
      'Network Diagnostics': 'تشخيص الشبكة',
      'Pricing': 'التسعير',
      'Software': 'البرمجيات',
      'Workshop Management': 'إدارة الورشة',
      'ADAS': 'أنظمة ADAS',
      'Calibration': 'المعايرة',
      'Safety Systems': 'أنظمة السلامة',
      'European Cars': 'السيارات الأوروبية',
      'Repair Data': 'بيانات الإصلاح',
      'Battery Drain': 'تفريغ البطارية',
      'Parasitic Draw': 'السرقة الكهربائية',
      'Electrical Diagnosis': 'التشخيص الكهربائي',
      'Industry Trends': 'اتجاهات الصناعة',
    }
  },
  he: {
    label: 'Hebrew',
    authorSuffix: '(מתורגם על ידי צוות Auto Fix Data)',
    tagMap: {
      'Wiring Diagrams': 'תרשימי חיווט',
      'OEM Data': 'נתוני יצרן מקורי',
      'Diagnostics': 'אבחון',
      'Comparison': 'השוואה',
      'Training': 'הכשרה',
      'CAN Bus': 'רשת CAN',
      'U-Codes': 'קודי U',
      'Network Diagnostics': 'אבחון רשת',
      'Pricing': 'תמחור',
      'Software': 'תוכנה',
      'Workshop Management': 'ניהול מוסך',
      'ADAS': 'מערכות ADAS',
      'Calibration': 'כיול',
      'Safety Systems': 'מערכות בטיחות',
      'European Cars': 'רכבים אירופאיים',
      'Repair Data': 'נתוני תיקון',
      'Battery Drain': 'ריקון סוללה',
      'Parasitic Draw': 'זליגת זרם',
      'Electrical Diagnosis': 'אבחון חשמלי',
      'Industry Trends': 'מגמות בתעשייה',
    }
  }
};

// Parse frontmatter from MDX source
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: {}, body: content };
  const fm = {};
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      const val = rest.join(':').trim().replace(/^"|"$/g, '');
      fm[key.trim()] = val;
    }
  });
  return { frontmatter: fm, rawFrontmatter: match[1], body: content.slice(match[0].length) };
}

// Translate tags using tagMap
function translateTags(tagsString, tagMap) {
  try {
    const tags = JSON.parse(tagsString.replace(/'/g, '"'));
    return JSON.stringify(tags.map(t => tagMap[t] || t));
  } catch {
    return tagsString;
  }
}

// Main function: translate author suffix, tags; keep body in English for now
// (Articles will be expanded per language by editorial as needed)
function generateTranslation(sourceContent, lang) {
  const { rawFrontmatter, body } = parseFrontmatter(sourceContent);
  const t = TRANSLATIONS[lang];
  
  let newFm = rawFrontmatter
    .replace(/author: "([^"]*)"/, `author: "$1 ${t.authorSuffix}"`)
    .replace(/tags: \[([^\]]*)\]/g, (match, tags) => {
      const arr = tags.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
      const translated = arr.map(tag => t.tagMap[tag] || tag);
      return `tags: [${translated.map(t => `"${t}"`).join(', ')}]`;
    });

  return `---\n${newFm}\n---${body}`;
}

// Generate all translations
const srcDir = path.join(CONTENT_DIR, SRC_LANG);
if (!fs.existsSync(srcDir)) {
  console.error(`Source directory not found: ${srcDir}`);
  process.exit(1);
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));

for (const lang of LANGS) {
  const destDir = path.join(CONTENT_DIR, lang);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created directory: ${destDir}`);
  }
  
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    
    try {
      const sourceContent = fs.readFileSync(srcPath, 'utf8');
      const translated = generateTranslation(sourceContent, lang);
      fs.writeFileSync(destPath, translated, 'utf8');
      console.log(`✅ ${lang}/${file}`);
    } catch (err) {
      console.error(`❌ Error processing ${lang}/${file}:`, err.message);
    }
  }
}

console.log('\n✅ Done! Generated blog translations for all 6 languages.');
console.log('Next step: native speakers can refine the content in each src/content/blog/{lang}/*.mdx file.');
