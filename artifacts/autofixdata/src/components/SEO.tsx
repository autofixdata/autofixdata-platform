import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  schema?: string;
}

export function SEO({ title, description, schema }: SEOProps) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://autofixdata.com';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      
      {/* Indexing */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Hreflang for international targeting */}
      <link rel="alternate" href={currentUrl} hrefLang="x-default" />
      <link rel="alternate" href={currentUrl} hrefLang="en" />
      <link rel="alternate" href={`${currentUrl}?lang=fr`} hrefLang="fr" />
      <link rel="alternate" href={`${currentUrl}?lang=de`} hrefLang="de" />
      <link rel="alternate" href={`${currentUrl}?lang=es`} hrefLang="es" />
      <link rel="alternate" href={`${currentUrl}?lang=it`} hrefLang="it" />
      <link rel="alternate" href={`${currentUrl}?lang=pl`} hrefLang="pl" />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
}
