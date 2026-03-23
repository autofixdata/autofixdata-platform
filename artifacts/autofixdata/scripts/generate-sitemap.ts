import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import our massive data modules
import { BLOG_POSTS } from '../src/lib/blogData';
import { POPULAR_MAKES, slugify } from '../src/lib/carData';
import { TOP_DTC_CODES } from '../src/lib/dtcData';

const BASE_URL = 'https://www.autofixdata.net';

const staticRoutes = [
  '',
  '/products',
  '/pricing',
  '/free-trial',
  '/about',
  '/contact',
  '/blog',
  '/glossary',
  '/repair-manuals',
  '/diagnostics',
  '/wiring-diagrams',
  '/alldata',
  '/autodata',
  '/haynes-pro',
  '/mitchell1',
  '/identifix',
  '/alldata-alternative',
  '/autodata-alternative',
  '/mitchell1-alternative',
  '/haynespro-alternative',
  '/identifix-alternative',
  '/privacy-policy',
  '/terms-of-service',
  '/gdpr',
  '/dtc',
  '/login'
];

async function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // 1. Static Routes
  for (const route of staticRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>\n`;
    xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  }

  // 2. Blog Posts
  for (const post of BLOG_POSTS) {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.publishedAt}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  // 3. DTC Pages
  for (const dtc of TOP_DTC_CODES) {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/dtc/${dtc.code.toUpperCase()}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;
  }

  // 4. Car Manuals (Make level & Model level)
  for (const make of POPULAR_MAKES) {
    // Make level directory
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/manuals/${make.slug}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;

    // Model level directories
    for (const model of make.popularModels) {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/manuals/${make.slug}/${slugify(model)}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.5</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  const publicDir = path.resolve(process.cwd(), 'dist');
  // fallback to 'public' folder directly so it commits to repo
  const targetFile = fs.existsSync(publicDir) 
    ? path.join(publicDir, 'sitemap.xml') 
    : path.join(process.cwd(), 'public', 'sitemap.xml');
    
  // Since we want this pushed to github immediately to trigger vercel, we explicitly write to public/sitemap.xml
  const sourceRepoFile = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sourceRepoFile, xml.trim());
  
  // also write to dist if it exists so local isn't broken
  if (fs.existsSync(publicDir)) {
      fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml.trim());
  }

  console.log(`✅ EXHAUSTIVE sitemap.xml dynamically generated and saved to ${sourceRepoFile}!`);
}

generateSitemap();
