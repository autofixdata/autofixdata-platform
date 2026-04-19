import { MetadataRoute } from 'next';
import { getAllSitemapPaths, CHUNK_SIZE, BASE_URL, LOCALES } from '@/lib/sitemap';

export async function generateSitemaps() {
  const allLogicalPaths = getAllSitemapPaths();
  
  // Flatten combinations of paths and locales just like before
  const totalUrls = allLogicalPaths.length * LOCALES.length;
  const numChunks = Math.ceil(totalUrls / CHUNK_SIZE);
  
  return Array.from({ length: numChunks }, (_, i) => ({ id: i }));
}

export default async function sitemap({ id }: { id: number | Promise<number> | string | Promise<string> }): Promise<MetadataRoute.Sitemap> {
  const allLogicalPaths = getAllSitemapPaths();
  
  // Flatten combinations of paths and locales
  const allEntries: { path: string, lang: string }[] = [];
  allLogicalPaths.forEach(path => {
    LOCALES.forEach(lang => {
      allEntries.push({ path, lang });
    });
  });
  
  // In Next.js 15+, 'id' is a Promise that must be awaited
  const resolvedId = (await id) || 0;
  const chunkId = typeof resolvedId === 'string' ? parseInt(resolvedId, 10) : resolvedId;

  const start = chunkId * CHUNK_SIZE;
  const end = start + CHUNK_SIZE;
  const targetEntries = allEntries.slice(start, end);

  return targetEntries.map(({ path, lang }) => {
    const loc = `${BASE_URL}/${lang}${path}`;
    
    // Construct alternates
    const languages: Record<string, string> = {};
    LOCALES.forEach(alternateLang => {
      languages[alternateLang] = `${BASE_URL}/${alternateLang}${path}`;
    });

    return {
      url: loc,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      alternates: {
        languages,
      },
    };
  });
}
