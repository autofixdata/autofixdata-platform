import type { Metadata } from 'next';
import PricingContent from './PricingContent';
import { getDictionary } from '@/dictionaries/getDictionary';

const LANGS = ['en', 'fr', 'es', 'de', 'it', 'ar', 'he'];


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return {
    title: dict.pricing.meta.title,
    description: dict.pricing.meta.description,
    alternates: {
      canonical: `https://workshopdata.us/${lang}/pricing`,
      languages: Object.fromEntries(LANGS.map(l => [l, `https://workshopdata.us/${l}/pricing`])),
    },
  };
}

export default async function PricingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${dict.pricing.hero.heading} — Auto Fix Data`,
    "description": dict.pricing.meta.description,
    "image": "https://assets.cdn.filesafe.space/Ojp9CgccP9bDnBtQ25kU/media/670c1a958a10046187933a85.png",
    "url": `https://workshopdata.us/${lang}/pricing`,
    "brand": {
      "@type": "Brand",
      "name": "Auto Fix Data"
    },
    "sku": "AFD-PRO",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2400"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "99.00",
      "highPrice": "199.00",
      "priceCurrency": "GBP",
      "offerCount": "2",
      "availability": "https://schema.org/InStock",
      "url": `https://workshopdata.us/${lang}/pricing`
    }
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PricingContent dict={dict} lang={lang} />
    </>
  );
}
