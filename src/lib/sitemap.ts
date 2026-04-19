import { getAllSlugs } from './blog';
import { TOP_DTC_CODES } from './dtcData';

export const LOCALES = ['en', 'fr', 'es', 'de', 'it', 'ar', 'he'];
export const BASE_URL = 'https://workshopdata.us';
export const CHUNK_SIZE = 15000;

export const STATIC_PATHS = [
  '', '/pricing', '/products', '/repair-manuals', '/diagnostics', 
  '/wiring-diagrams', '/dtc', '/blog', '/about', '/contact', 
  '/free-trial', '/glossary', '/alldata', '/autodata', '/haynes-pro', 
  '/mitchell1', '/identifix', '/alldata-alternative', '/autodata-alternative', 
  '/haynespro-alternative', '/mitchell1-alternative', '/identifix-alternative', 
  '/privacy-policy', '/terms-of-service', '/gdpr'
];

export function getAllSitemapPaths() {
  const allPaths: string[] = [];

  // 1. Static Paths
  STATIC_PATHS.forEach(p => allPaths.push(p));

  // 2. Blog Paths
  try {
    const blogSlugs = getAllSlugs();
    blogSlugs.forEach(slug => allPaths.push(`/blog/${slug}`));
  } catch (e) {
    console.error('Error getting blog slugs for sitemap:', e);
  }

  // 3. DTC Paths
  try {
    TOP_DTC_CODES.forEach(dtc => allPaths.push(`/dtc/${dtc.code}`));
  } catch (e) {
    console.error('Error getting DTC codes for sitemap:', e);
  }

  // 4. Car Manual Paths
  try {
    const db = require('./largeCarDatabase.json');
    Object.keys(db).forEach(make => {
      allPaths.push(`/manuals/${make}`);
      Object.keys(db[make]).forEach(model => {
        allPaths.push(`/manuals/${make}/${model}`);
        db[make][model].forEach((year: any) => {
          allPaths.push(`/manuals/${make}/${model}/${year}`);
        });
      });
    });
  } catch (e) {
    console.error('Error getting car database for sitemap:', e);
  }

  return allPaths;
}
