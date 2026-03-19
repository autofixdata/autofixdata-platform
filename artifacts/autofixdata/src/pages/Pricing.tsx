import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Check, Minus, X } from "lucide-react";
import { Link } from "wouter";

const CHECK = <Check className="w-5 h-5 text-green-500 mx-auto" />;
const PARTIAL = <span className="text-afd-blue font-bold text-lg mx-auto block text-center">◑</span>;
const NONE = <X className="w-4 h-4 text-gray-300 mx-auto" />;

const comparisonRows = [
  { feature: "OEM Repair Procedures", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: PARTIAL },
  { feature: "Full-Colour Wiring Diagrams", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: NONE },
  { feature: "DTC Code Library", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: CHECK },
  { feature: "TSBs & Safety Recalls", alldata: CHECK, autodata: PARTIAL, haynes: PARTIAL, mitchell: CHECK, identifix: CHECK },
  { feature: "Maintenance Schedules", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: NONE },
  { feature: "Labour / Flat-Rate Times", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: NONE },
  { feature: "Parts Catalogue Integration", alldata: CHECK, autodata: PARTIAL, haynes: PARTIAL, mitchell: CHECK, identifix: NONE },
  { feature: "Real-World Confirmed Fixes", alldata: NONE, autodata: NONE, haynes: NONE, mitchell: PARTIAL, identifix: CHECK },
  { feature: "Diagnostic Flowcharts", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: CHECK },
  { feature: "Component Locators", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: NONE },
  { feature: "Torque Specifications", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: NONE },
  { feature: "Fluid Specifications", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: NONE },
  { feature: "ADAS / Calibration Data", alldata: CHECK, autodata: CHECK, haynes: PARTIAL, mitchell: CHECK, identifix: NONE },
  { feature: "EV & Hybrid Coverage", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: PARTIAL },
  { feature: "ECU Connector Pinouts", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: NONE },
  { feature: "Timing Belt / Chain Kits", alldata: CHECK, autodata: CHECK, haynes: CHECK, mitchell: CHECK, identifix: NONE },
  { feature: "API / DMS Integration", alldata: CHECK, autodata: NONE, haynes: NONE, mitchell: CHECK, identifix: PARTIAL },
  { feature: "Light Commercial Coverage", alldata: CHECK, autodata: CHECK, haynes: PARTIAL, mitchell: CHECK, identifix: NONE },
];

const faqs = [
  { q: "Do all plans include all 5 databases?", a: "Yes. Every Auto Fix Data subscription — including the free trial — includes full access to ALLDATA, AutoData, Haynes Pro, Mitchell1, and Identifix. You pay one price for all five." },
  { q: "Is the free trial really free?", a: "Yes. No credit card is required to start your 7-day trial. Access simply expires at the end of the trial period. We do not charge you automatically." },
  { q: "Can I switch plans after I subscribe?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle. Contact our team and we'll process the change the same day." },
  { q: "Do you offer annual billing discounts?", a: "Yes — annual subscriptions receive a 20% discount on all plans. Contact us to get a quote for annual billing." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, as well as BACS bank transfers for annual business accounts. Invoicing is available for multi-seat subscriptions." },
];

export default function Pricing() {
  const schema = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Auto Fix Data Workshop Subscription",
    "description": "Professional automotive workshop repair database — access ALLDATA, AutoData, Haynes Pro, Mitchell1 and Identifix in one subscription.",
    "brand": { "@type": "Brand", "name": "Auto Fix Data" },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "3",
      "lowPrice": "99",
      "highPrice": "199",
      "priceCurrency": "GBP"
    }
  });

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  });

  return (
    <Layout>
      <SEO
        title="Pricing & Plans | Auto Fix Data — ALLDATA, AutoData, Haynes Pro, Mitchell1, Identifix"
        description="Compare Auto Fix Data plans for individual technicians, independent garages and fleet operations. Full access to 5 databases from £99/mo. 7-day free trial. No credit card required."
        schema={schema + faqSchema}
      />

      {/* HERO */}
      <section className="bg-afd-navy pt-20 pb-32 px-6 text-center dark-section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-afd-dark z-0"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-afd-yellow/10 text-afd-yellow rounded-full text-sm font-bold tracking-wider mb-6 border border-afd-yellow/20">
            7-day free trial — no credit card required
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Simple, Transparent<br /><span className="text-afd-yellow">Workshop Pricing</span></h1>
          <p className="text-xl text-afd-slate max-w-3xl mx-auto mb-4">
            One subscription. Five professional databases. Choose the plan that fits your workshop size.
          </p>
          <p className="text-afd-slate/70 text-sm max-w-xl mx-auto">All plans include full access to ALLDATA, AutoData, Haynes Pro, Mitchell1 and Identifix.</p>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section className="pb-24 px-6 relative z-20 -mt-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-afd-navy mb-2">Individual Tech</h3>
              <p className="text-afd-slate text-sm mb-6 h-10">For solo mechanics and mobile technicians.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-afd-navy">£99</span>
                <span className="text-afd-slate">/mo</span>
                <div className="text-xs text-afd-slate mt-1">or £949/yr (save 20%)</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["1 User License", "All 5 Databases Included", "OEM Repair Procedures & TSBs", "Wiring Diagrams & DTC Library", "Standard Email Support", "Cloud Access (any device)"].map(i => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">{i}</span></li>
                ))}
              </ul>
              <Link href="/contact" className="w-full block text-center py-4 rounded-xl font-bold border-2 border-afd-navy text-afd-navy hover:bg-afd-navy hover:text-white transition-colors">
                Get Started
              </Link>
            </div>

            <div className="bg-afd-navy rounded-2xl shadow-2xl border border-afd-yellow p-8 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-afd-yellow text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Independent Garage</h3>
              <p className="text-afd-slate text-sm mb-6 h-10">For workshops with up to 5 bays/technicians.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">£199</span>
                <span className="text-afd-slate">/mo</span>
                <div className="text-xs text-afd-slate mt-1">or £1,899/yr (save 20%)</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Up to 5 User Licenses", "All 5 Databases Included", "Full Interactive Wiring Diagrams", "Estimating & Quoting Tools", "Advanced Diagnostics (Identifix)", "Priority Phone & Email Support", "ADAS Calibration Data"].map(i => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-afd-yellow shrink-0 mt-0.5" /><span className="text-sm text-white font-medium">{i}</span></li>
                ))}
              </ul>
              <Link href="/contact" className="w-full block text-center py-4 rounded-xl font-bold bg-afd-yellow text-black hover:bg-afd-yellow-hover transition-colors shadow-lg shadow-afd-yellow/20">
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-afd-navy mb-2">Fleet & Dealership</h3>
              <p className="text-afd-slate text-sm mb-6 h-10">For large operations and dealership groups.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-afd-navy">Custom</span>
                <div className="text-xs text-afd-slate mt-1">Volume pricing available</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Unlimited User Licenses", "All 5 Databases Included", "API Integration Access", "DMS Export Capability", "Dedicated Account Manager", "SLA-backed Support", "Custom Onboarding & Training"].map(i => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">{i}</span></li>
                ))}
              </ul>
              <Link href="/contact" className="w-full block text-center py-4 rounded-xl font-bold bg-gray-100 text-afd-navy hover:bg-gray-200 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>

          <p className="text-center text-afd-slate text-sm mt-8">All prices exclude VAT. Annual plans billed upfront. Cancel anytime.</p>
        </div>
      </section>

      {/* FULL DATABASE COMPARISON TABLE */}
      <section className="py-24 bg-afd-light border-y border-gray-200 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-4">What's Included in Each Database</h2>
            <p className="text-lg text-afd-text max-w-2xl mx-auto">All five databases are available in every plan. This table shows exactly what data each one provides — so you know exactly what you're getting.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-afd-navy text-white">
                  <th className="text-left py-5 px-6 font-bold text-white/80 min-w-[220px]">Feature</th>
                  <th className="py-5 px-4 font-bold text-center">
                    <div className="text-white text-xs font-bold uppercase tracking-wide mb-0.5">ALLDATA</div>
                    <div className="text-afd-slate text-[10px] font-normal">by AutoZone</div>
                  </th>
                  <th className="py-5 px-4 font-bold text-center bg-afd-yellow/10 border-x border-afd-yellow/20">
                    <div className="text-afd-yellow text-xs font-bold uppercase tracking-wide mb-0.5">AutoData</div>
                    <div className="text-afd-slate text-[10px] font-normal">by Solera</div>
                  </th>
                  <th className="py-5 px-4 font-bold text-center">
                    <div className="text-white text-xs font-bold uppercase tracking-wide mb-0.5">Haynes Pro</div>
                    <div className="text-afd-slate text-[10px] font-normal">by Haynes Group</div>
                  </th>
                  <th className="py-5 px-4 font-bold text-center">
                    <div className="text-white text-xs font-bold uppercase tracking-wide mb-0.5">Mitchell1</div>
                    <div className="text-afd-slate text-[10px] font-normal">by Snap-on</div>
                  </th>
                  <th className="py-5 px-4 font-bold text-center">
                    <div className="text-white text-xs font-bold uppercase tracking-wide mb-0.5">Identifix</div>
                    <div className="text-afd-slate text-[10px] font-normal">by Solera</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 hover:bg-afd-light/50 transition-colors ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                    <td className="py-4 px-6 font-semibold text-afd-navy">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{row.alldata}</td>
                    <td className="py-4 px-4 text-center bg-afd-yellow/5 border-x border-afd-yellow/10">{row.autodata}</td>
                    <td className="py-4 px-4 text-center">{row.haynes}</td>
                    <td className="py-4 px-4 text-center">{row.mitchell}</td>
                    <td className="py-4 px-4 text-center">{row.identifix}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-afd-navy/5 border-t-2 border-afd-navy">
                  <td className="py-5 px-6 font-bold text-afd-navy">Get Started</td>
                  {["/alldata", "/autodata", "/haynes-pro", "/mitchell1", "/identifix"].map((href, i) => (
                    <td key={i} className={`py-5 px-4 text-center ${i === 1 ? 'bg-afd-yellow/5 border-x border-afd-yellow/10' : ''}`}>
                      <Link href="/contact" className="inline-block px-4 py-2 bg-afd-navy text-white text-xs font-bold rounded-lg hover:bg-afd-blue transition-colors">
                        Enquire
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="flex flex-wrap gap-6 mt-6 text-xs text-afd-slate justify-center">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Fully Included</span>
            <span className="flex items-center gap-2"><span className="text-afd-blue font-bold">◑</span> Partially Included</span>
            <span className="flex items-center gap-2"><X className="w-4 h-4 text-gray-300" /> Not Included in this database</span>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { stat: "10,000+", label: "Active Workshops", sub: "across 7 countries" },
            { stat: "150M+", label: "Vehicles Covered", sub: "from 1982 to present" },
            { stat: "99.9%", label: "Uptime SLA", sub: "cloud-based platform" },
          ].map(({ stat, label, sub }) => (
            <div key={stat} className="p-8 rounded-2xl bg-afd-light border border-gray-100">
              <div className="text-4xl font-extrabold text-afd-navy mb-2">{stat}</div>
              <div className="font-bold text-afd-navy">{label}</div>
              <div className="text-sm text-afd-slate">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-afd-light border-t border-gray-200 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-extrabold text-afd-navy mb-12 text-center">Pricing FAQs</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-afd-navy mb-2">{q}</h3>
                <p className="text-afd-text text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-afd-navy dark-section text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Equip Your Workshop?</h2>
        <p className="text-afd-slate text-xl max-w-xl mx-auto mb-10">Talk to our team to find the right plan for your garage, or start your free 7-day trial instantly.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-afd-yellow text-black font-bold rounded-xl text-lg hover:bg-afd-yellow-hover transition-all shadow-lg shadow-afd-yellow/20">
            Talk to Sales
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl text-lg border border-white/20 hover:bg-white/20 transition-all">
            Start Free Trial
          </Link>
        </div>
      </section>
    </Layout>
  );
}
