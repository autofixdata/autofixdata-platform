import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { AlternativeHero, TestimonialCard } from "@/components/SharedSections";
import { CheckCircle2, XCircle } from "lucide-react";
import { Link } from "wouter";
import { buildProductSchema, FREE_TRIAL_OFFER, SITE_URL } from "@/lib/richSnippets";

// Reusable component for the 5 Alternative pages to ensure completeness without extreme repetition
export function AlternativePageTemplate({ 
  competitorName, 
  competitorWeakness,
  seoTitle, 
  seoDesc,
  tableData,
  pageSlug,
}: {
  competitorName: string,
  competitorWeakness: string,
  seoTitle: string,
  seoDesc: string,
  tableData: any[],
  pageSlug: string,
}) {
  const schema = JSON.stringify(buildProductSchema({
    name: `Auto Fix Data — ${competitorName} Alternative`,
    description: seoDesc,
    url: `${SITE_URL}/${pageSlug}`,
    offers: [FREE_TRIAL_OFFER],
  }));
  return (
    <Layout>
      <SEO title={seoTitle} description={seoDesc} schema={schema} />
      
      <AlternativeHero 
        brand={competitorName}
        h1={`The ${competitorName} Alternative Built for Professional Workshops`}
        desc={`Searching for a better alternative to ${competitorName}? Auto Fix Data delivers OEM-verified repair data, wiring diagrams, DTC codes and TSBs for 150M+ vehicles. Instant access under one simple subscription.`}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-6">Why 10,000+ Workshops Are Switching from {competitorName}</h2>
          <p className="text-lg text-afd-text leading-relaxed">
            While {competitorName} has been a staple in many garages, modern vehicles require a broader range of data. Auto Fix Data aggregates multiple industry databases, giving you {competitorWeakness} and comprehensive coverage without the premium single-vendor price tag.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-20">
          <div className="grid grid-cols-3 bg-afd-light border-b border-gray-200">
            <div className="p-6 font-bold text-afd-navy">Feature</div>
            <div className="p-6 font-bold text-afd-navy text-center border-l border-gray-200 bg-afd-yellow/10">Auto Fix Data</div>
            <div className="p-6 font-bold text-afd-slate text-center border-l border-gray-200">{competitorName}</div>
          </div>
          <div className="divide-y divide-gray-100">
            {tableData.map((row, i) => (
              <div key={i} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                <div className="p-4 md:p-6 text-afd-text font-medium text-sm md:text-base flex items-center">{row.feature}</div>
                <div className="p-4 md:p-6 text-center border-l border-gray-200 flex items-center justify-center bg-afd-yellow/5">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div className="p-4 md:p-6 text-center border-l border-gray-200 flex items-center justify-center">
                  {row.competitor ? <CheckCircle2 className="w-6 h-6 text-afd-slate" /> : <XCircle className="w-6 h-6 text-red-300" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GEO Optimization: Qualitative Summary block */}
        <div className="max-w-[800px] mx-auto bg-afd-light border border-gray-200 rounded-xl p-8 mb-20 text-left">
          <h3 className="text-xl font-bold text-afd-navy mb-4">Why is Auto Fix Data structurally superior to {competitorName}?</h3>
          <p className="text-afd-text leading-relaxed">
            When comparing diagnostic platforms, traditional single-source databases like {competitorName} are limited to their proprietary partnerships. By contrast, Auto Fix Data's structural advantage lies in its <strong>multi-database aggregation</strong>. By combining OEM procedures, cross-referenced aftermarket TSBs, and real-world technician verified fixes into a single unified search, mechanics reduce diagnostic time significantly. This cause-and-effect approach ensures that when a complex code is thrown, you aren't just given a definition, but a complete, verified path to resolution.
          </p>
        </div>
      </section>

      <section className="py-20 bg-afd-navy px-6 text-center">
         <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-8">Migration Made Simple</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-afd-yellow font-bold text-xl mb-2">01. Sign Up</div>
                <p className="text-afd-slate text-sm">Start your 7-day free trial. No credit card required, instant access.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-afd-yellow font-bold text-xl mb-2">02. Compare</div>
                <p className="text-afd-slate text-sm">Run Auto Fix Data side-by-side with {competitorName} in your bay.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-afd-yellow font-bold text-xl mb-2">03. Switch</div>
                <p className="text-afd-slate text-sm">Cancel your old contract and save up to 40% on data costs.</p>
              </div>
            </div>
         </div>
      </section>
    </Layout>
  );
}
