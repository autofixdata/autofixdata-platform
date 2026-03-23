import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Database, FileText, Zap, Activity, Clock, ArrowRight } from "lucide-react";
import { buildProductSchema, buildFaqSchema, FREE_TRIAL_OFFER, SITE_URL } from "@/lib/richSnippets";

const features = [
  { icon: Database, title: "ProDemand Repair Data", desc: "OEM-sourced repair procedures from Mitchell1's industry-leading ProDemand platform, covering domestic and import vehicles from 1983 to present." },
  { icon: Activity, title: "SureTrack Expert Info", desc: "Real-world fix data from professional technicians, pattern failures, and confirmed repairs to accelerate your diagnostic process." },
  { icon: Zap, title: "Wiring Diagrams", desc: "Interactive colour wiring diagrams with component locators, connector views and integrated circuit descriptions." },
  { icon: FileText, title: "TSBs & Recalls", desc: "Complete Technical Service Bulletin library with NHTSA recall data, updated in real time as manufacturers issue new bulletins." },
  { icon: Clock, title: "Labor Times", desc: "Flat-rate labour time guides for accurate estimating and job scheduling across all vehicle types and repair categories." },
  { icon: Database, title: "Parts Lookup", desc: "Integrated parts catalogue with OEM part numbers, aftermarket cross-references and current pricing guidance." },
];

const faqs = [
  { q: "What is Mitchell1 ProDemand?", a: "ProDemand is Mitchell1's professional repair information platform combining OEM-sourced data with SureTrack real-world fix information from millions of technician repairs." },
  { q: "What is SureTrack?", a: "SureTrack aggregates confirmed repair data from 70M+ professional technician submissions, identifying the most likely fix for specific vehicle and DTC combinations — dramatically speeding up difficult diagnostics." },
  { q: "Does Mitchell1 include wiring diagrams?", a: "Yes. Mitchell1 includes full-colour interactive wiring diagrams with component locators, connector views and circuit descriptions." },
  { q: "Is Mitchell1 particularly strong for North American vehicles?", a: "Yes. Mitchell1 originated in North America and has exceptional coverage of US domestic and import vehicles from 1983 to present, though it also covers major European and global makes." },
  { q: "Is Mitchell1 included in all Auto Fix Data plans?", a: "Yes. Full access to Mitchell1 ProDemand and SureTrack is included in every Auto Fix Data subscription alongside ALLDATA, AutoData, Haynes Pro and Identifix." },
];

export default function Mitchell1Product() {
  const schema = JSON.stringify(buildProductSchema({
    name: "Mitchell1 ProDemand Repair Data — via Auto Fix Data",
    description: "Access Mitchell1 ProDemand repair data, wiring diagrams and TSBs through Auto Fix Data. Authorised Mitchell1 reseller. Full OEM data. 7-day free trial, no credit card required.",
    url: `${SITE_URL}/mitchell1`,
    offers: [FREE_TRIAL_OFFER],
  }));
  const faqSchema = JSON.stringify(buildFaqSchema(faqs));

  return (
    <Layout>
      <SEO
        title="Mitchell1 ProDemand Repair Data | Auto Fix Data Reseller"
        description="Access Mitchell1 ProDemand repair data, wiring diagrams and TSBs through Auto Fix Data. Authorised Mitchell1 reseller. Full OEM data. Start free today."
        schema={schema + faqSchema}
      />

      <section className="bg-afd-navy pt-24 pb-20 dark-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 text-afd-yellow text-sm font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-afd-yellow rounded-full"></span>
            Authorised Mitchell1 Reseller
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 max-w-3xl">
            Mitchell1 — ProDemand Repair Data by Snap-on
          </h1>
          <p className="text-xl text-afd-slate max-w-2xl mb-10">
            Mitchell1 ProDemand is the professional workshop platform trusted by North American and international technicians for complete OEM repair data, SureTrack real-world fix information and fully interactive wiring diagrams — available through your Auto Fix Data subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-trial">
              <button className="bg-afd-yellow text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-afd-yellow-hover transition-colors">
                Start Free 7-Day Trial
              </button>
            </Link>
            <Link href="/pricing">
              <button className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-colors">
                View Pricing Plans
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-4 bg-afd-dark">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-8 text-sm text-afd-slate">
          <span><strong className="text-white">ProDemand</strong> Platform</span>
          <span><strong className="text-white">SureTrack</strong> Real-World Fixes</span>
          <span><strong className="text-white">1983–2026</strong> Coverage</span>
          <span><strong className="text-white">By Snap-on</strong> Professional Tools</span>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-4">
              Mitchell1 ProDemand — What's Included
            </h2>
            <p className="text-lg text-afd-text max-w-2xl mx-auto">
              ProDemand combines OEM-sourced repair data with Mitchell1's exclusive SureTrack feature, which draws on millions of real-world repair records from professional technicians. This combination of official and practical data makes ProDemand unique in the market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-afd-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-afd-yellow/20 transition-colors">
                  <Icon className="w-7 h-7 text-afd-blue group-hover:text-afd-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-afd-navy mb-3">{title}</h3>
                <p className="text-afd-text leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-afd-light">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-afd-navy mb-6">SureTrack: The Advantage No Other Platform Has</h2>
            <p className="text-lg text-afd-text mb-8 leading-relaxed">
              Mitchell1's SureTrack feature aggregates real repair data from millions of professional technician submissions, identifying common pattern failures, most-likely parts and proven fixes for specific vehicle/symptom combinations. This dramatically reduces diagnostic time, particularly for intermittent faults and elusive ECU-related issues.
            </p>
            <ul className="space-y-4">
              {[
                "Real-world fix data from 70M+ professional repairs",
                "Most-likely-cause patterns for common DTC combinations",
                "Confirmed fixes with parts and labour time data",
                "Pro tips and technician notes from experienced specialists",
                "Updated continuously as new repair data is submitted",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-afd-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-afd-navy rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Mitchell1 Key Statistics</h3>
            <div className="space-y-6">
              {[
                { label: "Coverage Range", value: "1983–2026" },
                { label: "SureTrack Repairs", value: "70M+" },
                { label: "Vehicle Makes", value: "100+" },
                { label: "TSBs Indexed", value: "1.5M+" },
                { label: "Platform", value: "ProDemand" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-afd-slate">{label}</span>
                  <span className="text-2xl font-extrabold text-afd-yellow">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-6">
            Access Mitchell1 Through Auto Fix Data
          </h2>
          <p className="text-lg text-afd-text mb-10">
            Auto Fix Data is an authorised Mitchell1 reseller. Access the full ProDemand platform alongside ALLDATA, AutoData, Haynes Pro and Identifix under one subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial">
              <button className="bg-afd-yellow text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-afd-yellow-hover transition-colors">
                Start Free 7-Day Trial
              </button>
            </Link>
            <Link href="/mitchell1-alternative">
              <button className="border border-afd-blue text-afd-blue font-semibold px-8 py-4 rounded-lg text-lg hover:bg-afd-blue/5 transition-colors flex items-center gap-2">
                Compare with alternatives <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
