import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getDictionary } from '@/dictionaries/getDictionary';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as any) as any;
  const m = dict.common.meta;

  return {
    metadataBase: new URL('https://autofixdata.net'),
    title: {
      default: m.defaultTitle,
      template: '%s | Auto Fix Data',
    },
    description: m.defaultDesc,
    keywords: m.keywords.split(',').map((k: string) => k.trim()),
    authors: [{ name: 'Auto Fix Data Ltd' }],
    creator: 'Auto Fix Data Team',
    publisher: 'Auto Fix Data Ltd',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-video-preview': -1,
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'en' ? 'en_GB' : lang,
      url: `https://autofixdata.net/${lang}`,
      siteName: 'Auto Fix Data',
      title: m.defaultTitle,
      description: m.defaultDesc,
      images: [
        {
          url: 'https://assets.cdn.filesafe.space/Ojp9CgccP9bDnBtQ25kU/media/670c1a958a10046187933a85.png',
          width: 1200,
          height: 630,
          alt: 'Auto Fix Data — Professional Workshop Repair Database',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@autofixdata',
      creator: '@autofixdata',
      images: ['https://assets.cdn.filesafe.space/Ojp9CgccP9bDnBtQ25kU/media/670c1a958a10046187933a85.png'],
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'es' }, { lang: 'de' }, { lang: 'it' }, { lang: 'ar' }, { lang: 'he' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = lang === 'ar' || lang === 'he' ? 'rtl' : 'ltr';
  const dictionary = await getDictionary(lang as 'en'|'fr'|'es'|'de'|'it'|'ar'|'he');

  return (
    <html lang={lang} dir={dir}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T6MPMMT7');`
        }} />
        {/* Global Organization JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Auto Fix Data",
          "url": "https://autofixdata.net",
          "logo": "https://assets.cdn.filesafe.space/Ojp9CgccP9bDnBtQ25kU/media/678a6476a12015eea3a7c3b1.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "support@autofixdata.net",
            "availableLanguage": ["English", "French", "German", "Spanish", "Italian"]
          },
          "sameAs": [
            "https://twitter.com/autofixdata",
            "https://www.linkedin.com/company/autofixdata",
            "https://www.facebook.com/autofixdata"
          ]
        })}} />
        {/* SoftwareApplication JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Auto Fix Data",
          "operatingSystem": "Web browser, iOS, Android",
          "applicationCategory": "BusinessApplication",
          "url": "https://autofixdata.net",
          "developer": { "@type": "Organization", "name": "Auto Fix Data Team" },
          "image": "https://assets.cdn.filesafe.space/Ojp9CgccP9bDnBtQ25kU/media/678a6476a12015eea3a7c3b1.png",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "342" },
          "offers": { "@type": "Offer", "price": "99.00", "priceCurrency": "GBP" }
        })}} />
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6MPMMT7" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>

        <div className="flex flex-col min-h-screen font-sans">
          <Navigation dict={dictionary} lang={lang} />
          <main className="flex-1">{children}</main>
          <Footer dict={dictionary} lang={lang} />
        </div>

        {/* LeadConnector Chat Widget */}
        <Script
          id="leadconnector-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="lazyOnload"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="696d618100a5f01fbad814c4"
        />
      </body>
    </html>
  );
}
