const fs = require('fs');

const blogTranslations = {
  "en": "Blog",
  "fr": "Blog",
  "es": "Blog",
  "de": "Blog",
  "it": "Blog",
  "ar": "المدونة",
  "he": "בלוג"
};

const langs = ['en', 'fr', 'es', 'de', 'it', 'ar', 'he'];

for (const lang of langs) {
  const file = `./src/dictionaries/${lang}.json`;
  if (fs.existsSync(file)) {
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!json.nav) json.nav = {};
    json.nav.blog = blogTranslations[lang];
    fs.writeFileSync(file, JSON.stringify(json, null, 2));
    console.log(`Updated nav.blog in ${lang}.json`);
  }
}
