import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  schema?: string;
  noIndex?: boolean;
  canonical?: string;
  ogImage?: string;
}

export function SEO({ title, description, schema, noIndex = false, canonical, ogImage }: SEOProps) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://autofixdata.com';
  const canonicalUrl = canonical || currentUrl;
  const image = ogImage || 'https://autofixdata.com/og-image.png';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Indexing */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Auto Fix Data" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:site" content="@autofixdata" />

      {/* Hreflang for international targeting (GEO) */}
      <link rel="alternate" href={`https://autofixdata.com${typeof window !== 'undefined' ? window.location.pathname : '/'}`} hrefLang="x-default" />
      <link rel="alternate" href={`https://autofixdata.com${typeof window !== 'undefined' ? window.location.pathname : '/'}`} hrefLang="en" />
      <link rel="alternate" href={`https://autofixdata.com${typeof window !== 'undefined' ? window.location.pathname : '/'}`} hrefLang="en-gb" />
      <link rel="alternate" href={`https://autofixdata.com${typeof window !== 'undefined' ? window.location.pathname : '/'}`} hrefLang="en-us" />
      <link rel="alternate" href={`https://autofixdata.com/fr${typeof window !== 'undefined' ? window.location.pathname : '/'}`} hrefLang="fr" />
      <link rel="alternate" href={`https://autofixdata.com/de${typeof window !== 'undefined' ? window.location.pathname : '/'}`} hrefLang="de" />
      <link rel="alternate" href={`https://autofixdata.com/es${typeof window !== 'undefined' ? window.location.pathname : '/'}`} hrefLang="es" />
      <link rel="alternate" href={`https://autofixdata.com/it${typeof window !== 'undefined' ? window.location.pathname : '/'}`} hrefLang="it" />
      <link rel="alternate" href={`https://autofixdata.com/pl${typeof window !== 'undefined' ? window.location.pathname : '/'}`} hrefLang="pl" />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
}
