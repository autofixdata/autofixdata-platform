import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  schema?: string;
  noIndex?: boolean;
  canonical?: string;
  ogImage?: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}

const SITE_URL = "https://autofixdata.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const WEBSITE_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Auto Fix Data",
  "url": SITE_URL,
  "description": "Professional automotive workshop repair database — access ALLDATA, AutoData, Haynes Pro, Mitchell1 and Identifix in one subscription.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}/diagnostics?q={search_term_string}` },
    "query-input": "required name=search_term_string"
  }
});

const ORG_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Auto Fix Data",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "sameAs": [
    "https://twitter.com/autofixdata",
    "https://www.linkedin.com/company/autofixdata",
    "https://www.facebook.com/autofixdata"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "support@autofixdata.com",
    "availableLanguage": ["English", "French", "German", "Spanish", "Italian", "Polish"]
  },
  "areaServed": ["GB", "US", "FR", "DE", "ES", "IT", "PL", "AR"]
});

export function SEO({ title, description, schema, noIndex = false, canonical, ogImage, breadcrumb }: SEOProps) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const canonicalUrl = canonical || `${SITE_URL}${currentPath}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  const breadcrumbSchema = breadcrumb ? JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      ...breadcrumb.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 2,
        "name": item.name,
        "item": item.url
      }))
    ]
  }) : null;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title.length > 60 ? title.slice(0, 57) + '...' : title}</title>
      <meta name="description" content={description.length > 160 ? description.slice(0, 157) + '...' : description} />

      {/* Robots & Canonical */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Auto Fix Data" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@autofixdata" />
      <meta name="twitter:creator" content="@autofixdata" />

      {/* Additional SEO */}
      <meta name="author" content="Auto Fix Data Ltd" />
      <meta name="keywords" content="automotive workshop database, ALLDATA reseller, AutoData subscription, Haynes Pro, Mitchell1, Identifix, OEM repair data, wiring diagrams, DTC codes, workshop repair software, car repair database" />

      {/* GEO / Language targeting */}
      <link rel="alternate" href={`${SITE_URL}${currentPath}`} hrefLang="x-default" />
      <link rel="alternate" href={`${SITE_URL}${currentPath}`} hrefLang="en" />
      <link rel="alternate" href={`${SITE_URL}${currentPath}`} hrefLang="en-gb" />
      <link rel="alternate" href={`${SITE_URL}${currentPath}`} hrefLang="en-us" />
      <link rel="alternate" href={`${SITE_URL}/fr${currentPath}`} hrefLang="fr" />
      <link rel="alternate" href={`${SITE_URL}/de${currentPath}`} hrefLang="de" />
      <link rel="alternate" href={`${SITE_URL}/es${currentPath}`} hrefLang="es" />
      <link rel="alternate" href={`${SITE_URL}/it${currentPath}`} hrefLang="it" />
      <link rel="alternate" href={`${SITE_URL}/pl${currentPath}`} hrefLang="pl" />

      {/* Google Search Console verification — replace with actual token */}
      <meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN" />

      {/* Bing Webmaster Tools verification — replace with actual token */}
      <meta name="msvalidate.01" content="REPLACE_WITH_BING_WEBMASTER_TOKEN" />

      {/* Structured Data: WebSite + Organization (on every page) */}
      <script type="application/ld+json">{WEBSITE_SCHEMA}</script>
      <script type="application/ld+json">{ORG_SCHEMA}</script>

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{breadcrumbSchema}</script>
      )}

      {/* Page-specific JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">{schema}</script>
      )}
    </Helmet>
  );
}
