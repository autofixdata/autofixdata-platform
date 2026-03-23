import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define BlogPost locally so we don't have compilation order issues during execution
interface BlogPost {
  id: string;
  slug: string;
  publishedAt: string;
}

// We dynamically import the JS file after Vite transpiles, but actually it's easier to just read the raw TS file or use tsx
import { BLOG_POSTS } from '../src/lib/blogData';

const BASE_URL = 'https://www.autofixdata.net';

const staticRoutes = [
  '',
  '/dtc',
  '/manuals',
  '/contact',
  '/free-trial',
  '/blog'
];

async function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${BLOG_POSTS.map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  const publicDir = path.resolve(process.cwd(), 'dist');
  // if dist doesn't exist (running dev), write to public
  const targetDir = fs.existsSync(publicDir) ? publicDir : path.resolve(process.cwd(), 'public');
  
  fs.writeFileSync(path.join(targetDir, 'sitemap.xml'), sitemap.trim());
  console.log(`✅ sitemap.xml dynamically generated at ${targetDir}/sitemap.xml!`);
}

generateSitemap();
