import { MetadataRoute } from 'next';
import { getAllSitemapPaths, CHUNK_SIZE, BASE_URL, LOCALES } from '@/lib/sitemap';

export async function generateSitemaps() {
  const allLogicalPaths = getAllSitemapPaths();
  
  // Flatten combinations of paths and locales just like before
  const totalUrls = allLogicalPaths.length * LOCALES.length;
  const numChunks = Math.ceil(totalUrls / CHUNK_SIZE);
  
  return Array.from({ length: numChunks }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const allLogicalPaths = getAllSitemapPaths();
  
  // Flatten combinations of paths and locales
  const allEntries: { path: string, lang: string }[] = [];
  allLogicalPaths.forEach(path => {
    LOCALES.forEach(lang => {
      allEntries.push({ path, lang });
    });
  });
  
  const start = id * CHUNK_SIZE;
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
