import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Check, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { buildProductSchema, buildFaqSchema, FREE_TRIAL_OFFER, SITE_URL } from "@/lib/richSnippets";

type Currency = "GBP" | "EUR" | "USD";
type Billing = "monthly" | "yearly";

const PRICES: Record<Currency, { individual: number; garage: number; symbol: string }> = {
  GBP: { individual: 99, garage: 199, symbol: "£" },
  EUR: { individual: 119, garage: 239, symbol: "€" },
  USD: { individual: 129, garage: 259, symbol: "$" },
};

const CURRENCY_LABELS: Record<Currency, string> = {
  GBP: "GBP £",
  EUR: "EUR €",
  USD: "USD $",
};

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
  { q: "Do you offer annual billing discounts?", a: "Yes — annual subscriptions receive a 20% discount on all plans. The discount is applied automatically when you switch to annual billing." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, SEPA direct debit (EUR), BACS bank transfers (GBP) and ACH (USD). Invoicing is available for multi-seat annual accounts." },
];

function CurrencySelector({ value, onChange }: { value: Currency; onChange: (c: Currency) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm font-semibold text-afd-navy text-sm hover:border-afd-blue transition-colors"
      >
        <span>{CURRENCY_LABELS[value]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50 min-w-[120px]">
          {(["GBP", "EUR", "USD"] as Currency[]).map(c => (
            <button
              key={c}
              onClick={() => { onChange(c); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-afd-light transition-colors ${value === c ? 'text-afd-navy bg-afd-light font-bold' : 'text-afd-text'}`}
            >
              {CURRENCY_LABELS[c]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("GBP");
  const [billing, setBilling] = useState<Billing>("monthly");

  const prices = PRICES[currency];
  const sym = prices.symbol;
  const discount = 0.8;

  const indPrice = billing === "monthly" ? prices.individual : Math.round(prices.individual * discount);
  const garPrice = billing === "monthly" ? prices.garage : Math.round(prices.garage * discount);
  const indAnnual = Math.round(prices.individual * discount * 12);
  const garAnnual = Math.round(prices.garage * discount * 12);

  const schema = JSON.stringify(buildProductSchema({
    name: "Auto Fix Data Workshop Subscription",
    description: "Professional automotive workshop repair database — access ALLDATA, AutoData, Haynes Pro, Mitchell1 and Identifix in one subscription. 7-day free trial, no credit card required.",
    url: `${SITE_URL}/pricing`,
    offers: [
      {
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
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 7,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn",
        },
      },
      FREE_TRIAL_OFFER,
    ],
  }));

  const faqSchema = JSON.stringify(buildFaqSchema(faqs));

  return (
    <Layout>
      <SEO
        title="Pricing & Plans | Auto Fix Data — From £99/mo"
        description="Compare Auto Fix Data subscription plans — access ALLDATA, AutoData, Haynes Pro, Mitchell1 & Identifix from £99/mo. 7-day free trial. No credit card. Available in GBP, EUR & USD."
        schema={schema + faqSchema}
      />

      {/* HERO */}
      <section className="bg-afd-navy pt-20 pb-32 px-6 text-center dark-section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-afd-dark z-0"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-afd-yellow/10 text-afd-yellow rounded-full text-sm font-bold tracking-wider mb-6 border border-afd-yellow/20">
            7-day free trial — no credit card required
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Simple, Transparent<br /><span className="text-afd-yellow">Workshop Pricing</span>
          </h1>
          <p className="text-xl text-afd-slate max-w-3xl mx-auto">
            One subscription. Five professional databases. Choose the plan that fits your workshop size.
          </p>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section className="pb-16 px-6 relative z-20 -mt-20">
        <div className="max-w-[1200px] mx-auto">

          {/* Switchers Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* Billing Toggle */}
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${billing === "monthly" ? "bg-afd-navy text-white shadow" : "text-afd-slate hover:text-afd-navy"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${billing === "yearly" ? "bg-afd-navy text-white shadow" : "text-afd-slate hover:text-afd-navy"}`}
              >
                Yearly
                <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">-20%</span>
              </button>
            </div>

            {/* Currency Selector */}
            <CurrencySelector value={currency} onChange={setCurrency} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Plan 1: Individual */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-afd-navy mb-2">Individual Tech</h3>
              <p className="text-afd-slate text-sm mb-6 h-10">For solo mechanics and mobile technicians.</p>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-afd-navy">{sym}{indPrice}</span>
                <span className="text-afd-slate">/mo</span>
              </div>
              {billing === "yearly" && (
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xs text-afd-slate line-through">{sym}{prices.individual}/mo</span>
                  <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Save 20%</span>
                  <span className="text-xs text-afd-slate">({sym}{indAnnual}/yr)</span>
                </div>
              )}
              {billing === "monthly" && <div className="mb-4 text-xs text-afd-slate">{sym}{Math.round(prices.individual * discount * 12)}/yr billed annually (save 20%)</div>}
              <ul className="space-y-3 mb-8 flex-1">
                {["1 User License", "All 5 Databases Included", "OEM Repair Procedures & TSBs", "Wiring Diagrams & DTC Library", "Standard Email Support", "Cloud Access (any device)"].map(i => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">{i}</span></li>
                ))}
              </ul>
              <Link href="/contact" className="w-full block text-center py-4 rounded-xl font-bold border-2 border-afd-navy text-afd-navy hover:bg-afd-navy hover:text-white transition-colors">
                Get Started
              </Link>
            </div>

            {/* Plan 2: Garage (featured) */}
            <div className="bg-afd-navy rounded-2xl shadow-2xl border border-afd-yellow p-8 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-afd-yellow text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Independent Garage</h3>
              <p className="text-afd-slate text-sm mb-6 h-10">For workshops with up to 5 bays/technicians.</p>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-white">{sym}{garPrice}</span>
                <span className="text-afd-slate">/mo</span>
              </div>
              {billing === "yearly" && (
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xs text-afd-slate line-through">{sym}{prices.garage}/mo</span>
                  <span className="text-xs bg-green-500 text-white font-bold px-2 py-0.5 rounded-full">Save 20%</span>
                  <span className="text-xs text-afd-slate">({sym}{garAnnual}/yr)</span>
                </div>
              )}
              {billing === "monthly" && <div className="mb-4 text-xs text-afd-slate">{sym}{Math.round(prices.garage * discount * 12)}/yr billed annually (save 20%)</div>}
              <ul className="space-y-3 mb-8 flex-1">
                {["Up to 2 User Licenses", "All 5 Databases Included", "Full Interactive Wiring Diagrams", "Estimating & Quoting Tools", "Advanced Diagnostics (Identifix)", "Priority Phone & Email Support", "ADAS Calibration Data"].map(i => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-afd-yellow shrink-0 mt-0.5" /><span className="text-sm text-white font-medium">{i}</span></li>
                ))}
              </ul>
              <Link href="/contact" className="w-full block text-center py-4 rounded-xl font-bold bg-afd-yellow text-black hover:bg-afd-yellow-hover transition-colors shadow-lg shadow-afd-yellow/20">
                Get Started
              </Link>
            </div>

            {/* Plan 3: Fleet */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-afd-navy mb-2">Fleet & Dealership</h3>
              <p className="text-afd-slate text-sm mb-6 h-10">For large operations and dealership groups.</p>
              <div className="mb-2">
                <span className="text-4xl font-extrabold text-afd-navy">Custom</span>
              </div>
              <div className="mb-6 text-xs text-afd-slate">Volume pricing available — contact sales for a quote</div>
              <ul className="space-y-3 mb-8 flex-1">
                {["Unlimited User Licenses", "All 5 Databases Included", "API Integration Access", "DMS Export Capability", "Dedicated Account Manager", "SLA-backed Support", "Custom Onboarding & Training"].map(i => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">{i}</span></li>
                ))}
              </ul>
              <Link href="/contact" className="w-full block text-center py-4 rounded-xl font-bold bg-gray-100 text-afd-navy hover:bg-gray-200 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>

          <p className="text-center text-afd-slate text-sm mt-8">
            All prices exclude local taxes (VAT/GST). Annual plans billed upfront. Cancel anytime. Prices shown in {CURRENCY_LABELS[currency]}.
          </p>
        </div>
      </section>

      {/* DATABASE COMPARISON TABLE */}
      <section className="py-24 bg-afd-light border-y border-gray-200 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-4">What's Included in Each Database</h2>
            <p className="text-lg text-afd-text max-w-2xl mx-auto">All five databases are available in every plan. This shows exactly what data each one provides.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-afd-navy text-white">
                  <th className="text-left py-5 px-6 font-bold text-white/80 min-w-[220px]">Feature</th>
                  {[
                    { name: "ALLDATA", sub: "by AutoZone" },
                    { name: "AutoData", sub: "by Solera", highlight: true },
                    { name: "Haynes Pro", sub: "by Haynes Group" },
                    { name: "Mitchell1", sub: "by Snap-on" },
                    { name: "Identifix", sub: "by Solera" },
                  ].map(({ name, sub, highlight }) => (
                    <th key={name} className={`py-5 px-4 font-bold text-center ${highlight ? 'bg-afd-yellow/10 border-x border-afd-yellow/20' : ''}`}>
                      <div className={`text-xs font-bold uppercase tracking-wide mb-0.5 ${highlight ? 'text-afd-yellow' : 'text-white'}`}>{name}</div>
                      <div className="text-afd-slate text-[10px] font-normal">{sub}</div>
                    </th>
                  ))}
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
                  <td className="py-5 px-6 font-bold text-afd-navy">Learn More</td>
                  {["/alldata", "/autodata", "/haynes-pro", "/mitchell1", "/identifix"].map((href, i) => (
                    <td key={i} className={`py-5 px-4 text-center ${i === 1 ? 'bg-afd-yellow/5 border-x border-afd-yellow/10' : ''}`}>
                      <Link href={href} className="inline-block px-4 py-2 bg-afd-navy text-white text-xs font-bold rounded-lg hover:bg-afd-blue transition-colors">
                        Details →
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
            <span className="flex items-center gap-2"><X className="w-4 h-4 text-gray-300" /> Not in this database (others may cover it)</span>
          </div>
        </div>
      </section>

      {/* TRUST */}
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
