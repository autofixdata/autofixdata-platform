import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Activity, Database, Zap, AlertCircle, Search, ArrowRight } from "lucide-react";
import { buildProductSchema, buildFaqSchema, FREE_TRIAL_OFFER, SITE_URL } from "@/lib/richSnippets";

const features = [
  { icon: Activity, title: "Direct-Hit Diagnostic Data", desc: "Identifix's signature Direct-Hit feature delivers confirmed fixes for specific vehicle/DTC combinations from real technician repair data." },
  { icon: Search, title: "Symptom-Based Search", desc: "Search by symptom, DTC code, or vehicle system to find the most probable cause and confirmed repair action rapidly." },
  { icon: Database, title: "OEM Repair Information", desc: "Complete factory repair procedures, wiring diagrams and technical specifications integrated with real-world diagnostic intelligence." },
  { icon: AlertCircle, title: "Pattern Failures", desc: "Known pattern failure identification for common intermittent faults, saving hours of diagnostic time on difficult-to-reproduce issues." },
  { icon: Zap, title: "Technical Hotline Access", desc: "Access to Identifix's network of master technicians for assistance with complex, unusual or multi-system diagnostic challenges." },
  { icon: Database, title: "TSBs & Service Campaigns", desc: "Technical Service Bulletins and manufacturer service campaigns linked directly to relevant repair procedures and OEM documentation." },
];

const faqs = [
  { q: "What is Identifix Direct-Hit?", a: "Direct-Hit is Identifix's core feature — a database of confirmed repair fixes sourced from real technician submissions, covering millions of vehicle/DTC combinations ranked by success rate." },
  { q: "How does Identifix differ from ALLDATA or AutoData?", a: "While ALLDATA and AutoData provide OEM-sourced procedures, Identifix adds real-world diagnostic intelligence. It tells you what technicians actually fixed, not just what the OEM recommends — making it uniquely powerful for complex or intermittent faults." },
  { q: "Does Identifix include wiring diagrams?", a: "Identifix includes OEM repair information and some wiring data, but the platform is primarily focused on diagnostic intelligence and real-world fix data. For full wiring schematics, the ALLDATA, AutoData, Haynes Pro or Mitchell1 components of your subscription provide comprehensive coverage." },
  { q: "What vehicles does Identifix cover?", a: "Identifix has particularly strong coverage of post-2000 vehicles where electronic systems are most complex. It covers all major US domestic and import makes, with growing European coverage." },
  { q: "Is Identifix included in all Auto Fix Data plans?", a: "Yes. Access to Identifix Direct-Hit is included in every Auto Fix Data subscription alongside ALLDATA, AutoData, Haynes Pro and Mitchell1 at no extra cost." },
];

export default function IdentifixProduct() {
  const schema = JSON.stringify(buildProductSchema({
    name: "Identifix Direct-Hit Repair Data — via Auto Fix Data",
    description: "Access Identifix Direct-Hit diagnostic data through Auto Fix Data. Real-world fix data from 70M+ repairs. Authorised reseller. 7-day free trial, no credit card required.",
    url: `${SITE_URL}/identifix`,
    offers: [FREE_TRIAL_OFFER],
  }));
  const faqSchema = JSON.stringify(buildFaqSchema(faqs));

  return (
    <Layout>
      <SEO
        title="Identifix Direct-Hit Repair Data | Auto Fix Data Reseller"
        description="Access Identifix Direct-Hit diagnostic data through Auto Fix Data. Real-world fix data from 70M+ repairs. Authorised reseller. Free trial available."
        schema={schema + faqSchema}
      />

      <section className="bg-afd-navy pt-24 pb-20 dark-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 text-afd-yellow text-sm font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-afd-yellow rounded-full"></span>
            Authorised Identifix Reseller
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 max-w-3xl">
            Identifix — Direct-Hit Diagnostic Data by Solera
          </h1>
          <p className="text-xl text-afd-slate max-w-2xl mb-10">
            Identifix is the diagnostic intelligence platform for professional technicians. Its Direct-Hit feature delivers confirmed fixes sourced from real-world repair data, dramatically reducing diagnostic time — especially for intermittent faults and complex multi-system issues.
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
          <span><strong className="text-white">Direct-Hit</strong> Diagnostic System</span>
          <span><strong className="text-white">70M+</strong> Real Repairs</span>
          <span><strong className="text-white">Pattern</strong> Failure Detection</span>
          <span><strong className="text-white">By Solera</strong> Diagnostic Intelligence</span>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-4">
              Identifix Direct-Hit — What's Included
            </h2>
            <p className="text-lg text-afd-text max-w-2xl mx-auto">
              Identifix combines OEM repair information with an unmatched database of real-world diagnostic outcomes. When you retrieve data for a specific DTC on a specific vehicle, you get not just the OEM procedure, but the confirmed fix that professional technicians have actually used — ranked by success rate.
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
            <h2 className="text-3xl font-extrabold text-afd-navy mb-6">Why Diagnostic Specialists Choose Identifix</h2>
            <p className="text-lg text-afd-text mb-8 leading-relaxed">
              For workshops specialising in diagnostics or dealing with complex intermittent faults, Identifix provides a competitive advantage that pure OEM data cannot match. The Direct-Hit database aggregates outcomes from real technician repairs, giving you access to collective diagnostic intelligence that has been field-tested and confirmed on actual vehicles.
            </p>
            <ul className="space-y-4">
              {[
                "Fastest route to confirmed fix for DTC-specific repairs",
                "Dramatically reduces time spent on intermittent faults",
                "Pattern failure database catches known issues instantly",
                "Supplements OEM procedures with real-world technician insight",
                "Particularly strong for post-2000 electronic-heavy vehicles",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-afd-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-afd-navy rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Identifix Key Statistics</h3>
            <div className="space-y-6">
              {[
                { label: "Real Repairs Indexed", value: "70M+" },
                { label: "Diagnostic Cases", value: "Millions" },
                { label: "Pattern Failures", value: "300K+" },
                { label: "Platform", value: "Direct-Hit" },
                { label: "By", value: "Solera" },
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
            Access Identifix Through Auto Fix Data
          </h2>
          <p className="text-lg text-afd-text mb-10">
            Auto Fix Data is an authorised Identifix reseller. Access the full Direct-Hit platform alongside ALLDATA, AutoData, Haynes Pro and Mitchell1 under one subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial">
              <button className="bg-afd-yellow text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-afd-yellow-hover transition-colors">
                Start Free 7-Day Trial
              </button>
            </Link>
            <Link href="/identifix-alternative">
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
