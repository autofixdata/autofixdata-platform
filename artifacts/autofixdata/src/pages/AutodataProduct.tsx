import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Database, FileText, Zap, Settings, Calendar, ArrowRight } from "lucide-react";
import { buildProductSchema, buildFaqSchema, FREE_TRIAL_OFFER, SITE_URL } from "@/lib/richSnippets";

const features = [
  { icon: Settings, title: "Technical Specifications", desc: "Comprehensive technical data including engine specs, fuel system settings, torque values and tightening sequences for European and global vehicles." },
  { icon: Calendar, title: "Service Intervals", desc: "Mileage and time-based service schedules, fluid capacities and grade specifications for all major manufacturers." },
  { icon: Zap, title: "Wiring Diagrams", desc: "Full-colour electrical schematics for all body systems including engine management, ABS, airbag, climate control and audio systems." },
  { icon: Database, title: "DTC Codes", desc: "Comprehensive OBD2 and manufacturer-specific fault code library with possible causes and recommended repair actions." },
  { icon: FileText, title: "Timing Data", desc: "Belt and chain replacement procedures with setting data, locking tools specifications and wear limits for all engines." },
  { icon: Settings, title: "Brake & Clutch Data", desc: "Brake disc and pad specifications, caliper torque values, clutch adjustment data and handbrake cable tensions." },
];

const faqs = [
  { q: "Is AutoData particularly strong for European vehicles?", a: "Yes. AutoData was originally developed for the European market and has exceptionally deep coverage of UK, German, French, Italian and Spanish vehicles, making it the preferred choice for European specialists." },
  { q: "Does AutoData include timing belt replacement data?", a: "Yes. AutoData's timing data is industry-leading — including locking tool specifications, tension settings, belt routes and replacement intervals for all supported engines." },
  { q: "Can AutoData help with ADAS system calibration?", a: "Yes. AutoData includes ADAS calibration procedures and camera/sensor reset data for supported vehicles, an increasingly important feature for modern workshop operations." },
  { q: "How does AutoData handle EV and hybrid data?", a: "AutoData includes high-voltage system specifications, battery management data and hybrid service procedures for the most popular EV and PHEV platforms." },
  { q: "Is AutoData included in all Auto Fix Data plans?", a: "Yes. All Auto Fix Data subscription plans include full access to AutoData alongside the other four databases at no extra cost." },
];

export default function AutodataProduct() {
  const schema = JSON.stringify(buildProductSchema({
    name: "AutoData Workshop Database — via Auto Fix Data",
    description: "Access AutoData's technical specifications, service intervals, wiring diagrams and DTC codes through Auto Fix Data. Trusted by European workshops. 7-day free trial, no credit card required.",
    url: `${SITE_URL}/autodata`,
    offers: [FREE_TRIAL_OFFER],
  }));
  const faqSchema = JSON.stringify(buildFaqSchema(faqs));

  return (
    <Layout>
      <SEO
        title="AutoData Workshop Database via Auto Fix Data | Authorised Reseller"
        description="Access AutoData's technical specifications, service intervals, wiring diagrams and DTC codes through Auto Fix Data. Trusted by European workshops. Free trial available."
        schema={schema + faqSchema}
      />

      <section className="bg-afd-navy pt-24 pb-20 dark-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 text-afd-yellow text-sm font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-afd-yellow rounded-full"></span>
            Authorised AutoData Reseller
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 max-w-3xl">
            AutoData — Technical Workshop Data by Solera
          </h1>
          <p className="text-xl text-afd-slate max-w-2xl mb-10">
            Europe's most trusted source of automotive technical data. AutoData provides technicians with the precise specifications, service data and wiring information needed for accurate, efficient repairs — now available through your Auto Fix Data subscription.
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
          <span><strong className="text-white">European</strong> Make Specialist</span>
          <span><strong className="text-white">35+ Years</strong> of Data</span>
          <span><strong className="text-white">Technical</strong> Specs & Torque Data</span>
          <span><strong className="text-white">By Solera</strong> — Trusted Globally</span>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-4">
              What AutoData Includes in Your Subscription
            </h2>
            <p className="text-lg text-afd-text max-w-2xl mx-auto">
              AutoData has been the benchmark for European workshop technical data for over 35 years. From oil capacities to timing belt replacement intervals, AutoData delivers the precise technical specifications professionals rely on.
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
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-6">
                The European Workshop Standard
              </h2>
              <p className="text-lg text-afd-text mb-8 leading-relaxed">
                AutoData is particularly strong for independent workshops handling European marques. Its technical specifications database covers Vauxhall, Renault, Peugeot, Citroen, Fiat, Alfa Romeo, SEAT, Skoda and all major European manufacturers at OEM depth. The platform is also widely used by UK MOT stations, service centres and independent technicians as a daily reference tool.
              </p>
              <ul className="space-y-4">
                {[
                  "European make specialist — full OEM depth on all EU brands",
                  "UK workshop standard for service intervals and oil specs",
                  "Timing belt and chain replacement data with tool references",
                  "Air conditioning service data and refrigerant specifications",
                  "Compatible with AutoData Cardesk and WorkshopData platforms",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-afd-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-afd-navy rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">AutoData Key Statistics</h3>
              <div className="space-y-6">
                {[
                  { label: "Years of Data", value: "35+" },
                  { label: "European Makes Covered", value: "All" },
                  { label: "Data Points per Vehicle", value: "10,000+" },
                  { label: "Annual Updates", value: "Weekly" },
                  { label: "Countries Supported", value: "50+" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-afd-slate">{label}</span>
                    <span className="text-2xl font-extrabold text-afd-yellow">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-afd-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">What Workshops Say About AutoData</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "AutoData's service interval data is so accurate and comprehensive. We use it every day for servicing schedules, timing belt data and fluid specs. Having it alongside ALLDATA in one login is brilliant.", name: "Tom H.", role: "Service Manager", garage: "Horizon Automotive, Leeds" },
              { quote: "The wiring diagrams in AutoData are the best I've seen for European makes. Clear, colour-coded and they actually load fast. Auto Fix Data gave us the full package for less than we expected.", name: "Maria S.", role: "Diagnostic Technician", garage: "Euro Tech Garage" },
            ].map(({ quote, name, role, garage }) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-afd-slate italic leading-relaxed mb-6">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-afd-yellow rounded-full flex items-center justify-center text-black font-bold">{name[0]}</div>
                  <div>
                    <div className="text-white font-bold text-sm">{name}</div>
                    <div className="text-afd-slate text-xs">{role} — {garage}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-extrabold text-afd-navy mb-10 text-center">AutoData FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "Is AutoData particularly strong for European vehicles?", a: "Yes. AutoData was originally developed for the European market and has exceptionally deep coverage of UK, German, French, Italian and Spanish vehicles, making it the preferred choice for European specialists." },
              { q: "Does AutoData include timing belt replacement data?", a: "Yes. AutoData's timing data is industry-leading — including locking tool specifications, tension settings, belt routes and replacement intervals for all supported engines." },
              { q: "Can AutoData help with ADAS system calibration?", a: "Yes. AutoData includes ADAS calibration procedures and camera/sensor reset data for supported vehicles, an increasingly important feature for modern workshop operations." },
              { q: "How does AutoData handle EV and hybrid data?", a: "AutoData includes high-voltage system specifications, battery management data and hybrid service procedures for the most popular EV and PHEV platforms." },
              { q: "Is AutoData included in all Auto Fix Data plans?", a: "Yes. All Auto Fix Data subscription plans include full access to AutoData alongside the other four databases at no extra cost." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-afd-navy mb-2">{q}</h3>
                <p className="text-afd-text text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-6">
            Access AutoData Through Auto Fix Data
          </h2>
          <p className="text-lg text-afd-text mb-10">
            Auto Fix Data is an authorised AutoData reseller. Your subscription gives you full access to AutoData alongside ALLDATA, Haynes Pro, Mitchell1 and Identifix. One subscription, five premium databases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-afd-yellow text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-afd-yellow-hover transition-colors">
                Start Free 7-Day Trial
              </button>
            </Link>
            <Link href="/autodata-alternative">
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
