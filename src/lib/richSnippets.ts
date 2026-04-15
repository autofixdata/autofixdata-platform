/**
 * Shared JSON-LD rich snippet helpers for workshopdata.us
 * Used across product pages, feature pages, pricing, and SEO alternative pages
 * to enable Google rich results: star ratings, pricing, return policy, availability.
 */

export const SITE_URL = "https://workshopdata.us";

export const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.8",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "847",
};

export const REVIEWS = [
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "David M." },
    reviewBody:
      "Switching to Auto Fix Data cut our diagnostic time in half. Having ALLDATA and AutoData in one place means we never have to turn away a complex electrical job.",
  },
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Sarah T." },
    reviewBody:
      "The wiring diagrams are incredibly detailed. For modern European cars, the Haynes Pro integration has been a lifesaver for our technicians.",
  },
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "James L." },
    reviewBody:
      "I was paying double for individual subscriptions before. The value here is unbeatable, and the data is exactly what we get from the dealer portals.",
  },
];

/**
 * Standard Offer for the main subscription (£99–£199/mo)
 * Includes: price range, In Stock, 7-day return policy, free trial note
 */
export const MAIN_OFFER = {
  "@type": "AggregateOffer",
  lowPrice: "99",
  highPrice: "199",
  priceCurrency: "GBP",
  offerCount: "2",
  availability: "https://schema.org/InStock",
  priceValidUntil: "2026-12-31",
  url: `${SITE_URL}/pricing`,
  hasMerchantReturnPolicy: {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "GB",
    returnPolicyCategory:
      "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 7,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/FreeReturn",
  },
};

/**
 * Free Trial Offer (zero price, 7 days)
 */
export const FREE_TRIAL_OFFER = {
  "@type": "Offer",
  name: "Free 7-Day Trial",
  price: "0",
  priceCurrency: "GBP",
  availability: "https://schema.org/InStock",
  url: `${SITE_URL}/free-trial`,
  description: "Start a free 7-day trial — no credit card required.",
};

/**
 * Build a full Product schema with ratings, reviews, offers and optional FAQs.
 * @param name - product/page name
 * @param description - short description for the product
 * @param url - canonical URL of the page
 * @param image - optional OG image URL
 * @param offers - one or more Offer objects (defaults to MAIN_OFFER)
 */
export function buildProductSchema({
  name,
  description,
  url,
  image,
  offers = [MAIN_OFFER, FREE_TRIAL_OFFER],
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  offers?: object[];
}) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "Auto Fix Data" },
    url,
    ...(image ? { image } : {}),
    aggregateRating: AGGREGATE_RATING,
    review: REVIEWS,
    offers,
  };
}

/**
 * Build a FAQPage schema from an array of {q, a} question/answer pairs.
 */
export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
