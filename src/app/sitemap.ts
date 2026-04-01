import { MetadataRoute } from 'next';
import { getAllSlugs, getPostMeta } from '@/lib/blog';
import { TOP_DTC_CODES } from '@/lib/dtcData';
import { slugify } from '@/lib/carData';

const LOCALES = ['en', 'fr', 'es', 'de', 'it', 'ar', 'he'];
const BASE_URL = 'https://autofixdata.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Define raw paths without language prefix
  const rawStaticRoutes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/pricing', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/products', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/repair-manuals', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/diagnostics', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/wiring-diagrams', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/dtc', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/blog', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/about', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.6 },
    { path: '/free-trial', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/glossary', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/alldata', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/autodata', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/haynes-pro', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/mitchell1', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/identifix', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/alldata-alternative', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/autodata-alternative', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/haynespro-alternative', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/mitchell1-alternative', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/identifix-alternative', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms-of-service', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/gdpr', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const blogSlugs = getAllSlugs();
  const blogRoutes = blogSlugs.map(slug => {
    const post = getPostMeta('en', slug);
    return { path: `/blog/${slug}`, lastModified: post?.date || now, changeFrequency: 'yearly' as const, priority: 0.8 };
  });

  const allRawRoutes = [
    ...rawStaticRoutes.map(r => ({ ...r, lastModified: now })),
    ...blogRoutes,
    ...TOP_DTC_CODES.map(dtc => ({ path: `/dtc/${dtc.code}`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.8 })),
  ];

  // Dynamically map all 6,977 programmatic car models from largeCarDatabase
  const db = require('@/lib/largeCarDatabase.json');
  Object.keys(db).forEach(make => {
    allRawRoutes.push({ path: `/manuals/${make}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 });
    Object.keys(db[make]).forEach(model => {
      allRawRoutes.push({ path: `/manuals/${make}/${model}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 });
      db[make][model].forEach((year: string | number) => {
        allRawRoutes.push({ path: `/manuals/${make}/${model}/${year}`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.6 });
      });
    });
  });

  // For every single route, define the English version as the canonical root, 
  // but explicitly map 'alternates' so Google knows where the translated versions live.
  return allRawRoutes.map(route => {
    const alternates: Record<string, string> = {};
    
    LOCALES.forEach(locale => {
      alternates[locale] = `${BASE_URL}/${locale}${route.path}`;
    });

    return {
      url: `${BASE_URL}/en${route.path}`,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternates
      }
    };
  });
}
