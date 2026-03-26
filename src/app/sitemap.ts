import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blogData';
import { TOP_DTC_CODES } from '@/lib/dtcData';
import { POPULAR_MAKES, slugify } from '@/lib/carData';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://autofixdata.net';
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/products`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/repair-manuals`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/diagnostics`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/wiring-diagrams`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dtc`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/free-trial`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/glossary`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alldata`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/autodata`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/haynes-pro`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/mitchell1`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/identifix`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/alldata-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/autodata-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/haynespro-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/mitchell1-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/identifix-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/gdpr`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  const dtcRoutes: MetadataRoute.Sitemap = TOP_DTC_CODES.map(dtc => ({
    url: `${base}/dtc/${dtc.code}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  const makeRoutes: MetadataRoute.Sitemap = POPULAR_MAKES.map(make => ({
    url: `${base}/manuals/${make.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const modelRoutes: MetadataRoute.Sitemap = POPULAR_MAKES.flatMap(make =>
    make.popularModels.map(model => ({
      url: `${base}/manuals/${make.slug}/${slugify(model)}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...blogRoutes, ...dtcRoutes, ...makeRoutes, ...modelRoutes];
}
