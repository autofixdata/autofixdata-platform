import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
  de: () => import('./de.json').then((module) => module.default),
  it: () => import('./it.json').then((module) => module.default),
  ar: () => import('./ar.json').then((module) => module.default),
  he: () => import('./he.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  // Graceful fallback to 'en' if the locale is not directly supported by a file
  const loadDictionary = dictionaries[locale] ?? dictionaries['en'];
  return loadDictionary();
};
