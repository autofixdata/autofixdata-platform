import { NextRequest, NextResponse } from 'next/server';
import { getAllSitemapPaths, CHUNK_SIZE, BASE_URL, LOCALES } from '@/lib/sitemap';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ chunk: string }> }
) {
  const { chunk: chunkSlug } = await params;
  const chunkId = parseInt(chunkSlug.replace('.xml', ''));
  const now = new Date().toISOString();

  const allPaths = getAllSitemapPaths();
  
  const start = chunkId * CHUNK_SIZE;
  const end = start + CHUNK_SIZE;
  const targetPaths = allPaths.slice(start, end);

  if (targetPaths.length === 0) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const xmlContent = targetPaths.map(path => {
    const alternates = LOCALES.map(lang => 
      `<xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}${path}" />`
    ).join('');
    
    // We use the first locale (en) as the canonical loc
    return `<url>
    <loc>${BASE_URL}/en${path}</loc>
    ${alternates}
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${xmlContent}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
