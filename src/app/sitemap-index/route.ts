import { NextResponse } from 'next/server';
import { getAllSitemapPaths, CHUNK_SIZE, BASE_URL } from '@/lib/sitemap';

export async function GET() {
  const allPaths = getAllSitemapPaths();
  const totalUrls = allPaths.length;
  const numChunks = Math.ceil(totalUrls / CHUNK_SIZE);
  
  const now = new Date().toISOString();
  
  const chunks = Array.from({ length: numChunks }, (_, i) => i);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${chunks.map(id => `
  <sitemap>
    <loc>${BASE_URL}/sitemap/${id}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
