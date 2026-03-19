import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Database, FileText, Zap, Shield, Clock, ArrowRight } from "lucide-react";

const features = [
  { icon: Database, title: "OEM Repair Procedures", desc: "Full factory-level repair procedures for 100M+ vehicles covering all US and global makes from 1982 to present." },
  { icon: FileText, title: "Technical Service Bulletins", desc: "Real-time TSB feed including NHTSA safety recalls and manufacturer advisories, updated as soon as issued." },
  { icon: Zap, title: "Wiring Diagrams", desc: "Detailed electrical schematics with component locations, connector descriptions and pinout tables." },
  { icon: Shield, title: "DTC Code Library", desc: "Complete OBD2 and manufacturer-specific DTC code library with freeze frame data and probable causes." },
  { icon: Clock, title: "Maintenance Schedules", desc: "Mileage and time-based service intervals including fluid specifications, torque specs and service reminders." },
  { icon: FileText, title: "Parts & Labour", desc: "Parts catalogue integration and flat-rate labour times to support accurate job estimating." },
];

export default function AlldataProduct() {
  return (
    <Layout>
      <SEO
        title="ALLDATA Repair Data for Professional Workshops | Auto Fix Data"
        description="Access ALLDATA's OEM-verified repair procedures, wiring diagrams, DTC codes and TSBs through Auto Fix Data. Authorised reseller. Start free trial today."
      />

      <section className="bg-afd-navy pt-24 pb-20 dark-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 text-afd-yellow text-sm font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-afd-yellow rounded-full"></span>
            Authorised ALLDATA Reseller
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 max-w-3xl">
            ALLDATA — OEM Repair Data by AutoZone
          </h1>
          <p className="text-xl text-afd-slate max-w-2xl mb-10">
            The industry-leading repair information database used by professional workshops worldwide. Access comprehensive OEM repair procedures, wiring diagrams, TSBs and DTC codes — all through your Auto Fix Data subscription.
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
          <span><strong className="text-white">100M+</strong> Vehicles Covered</span>
          <span><strong className="text-white">1982–2026</strong> Coverage Range</span>
          <span><strong className="text-white">Real-time</strong> TSB Updates</span>
          <span><strong className="text-white">OEM</strong> Verified Data</span>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-4">
              What ALLDATA Includes in Your Subscription
            </h2>
            <p className="text-lg text-afd-text max-w-2xl mx-auto">
              ALLDATA is used by more than 500,000 technicians worldwide. It provides the most comprehensive OEM repair information available, now accessible through your Auto Fix Data subscription alongside four other premium databases.
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
                Who Uses ALLDATA?
              </h2>
              <p className="text-lg text-afd-text mb-8 leading-relaxed">
                ALLDATA is the preferred repair information system for independent workshops, multi-bay garages, dealership service centres and fleet maintenance operations. Its breadth of OEM-sourced data makes it particularly valuable for technicians working across mixed vehicle fleets.
              </p>
              <ul className="space-y-4">
                {[
                  "Independent garage owners and technicians",
                  "Dealership service and workshop managers",
                  "Fleet maintenance operations",
                  "Diagnostic specialists and master technicians",
                  "Automotive training centres and colleges",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-afd-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-afd-navy rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">ALLDATA Key Statistics</h3>
              <div className="space-y-6">
                {[
                  { label: "Vehicles Covered", value: "100M+" },
                  { label: "Coverage from Year", value: "1982" },
                  { label: "OEM Manufacturers", value: "60+" },
                  { label: "TSBs in Database", value: "2M+" },
                  { label: "Wiring Schematics", value: "500K+" },
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

      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-6">
            Access ALLDATA Through Auto Fix Data
          </h2>
          <p className="text-lg text-afd-text mb-10">
            As an authorised ALLDATA reseller, Auto Fix Data gives you access to the full ALLDATA database alongside AutoData, Haynes Pro, Mitchell1 and Identifix — all under a single subscription. One login. Five databases. No switching between platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial">
              <button className="bg-afd-yellow text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-afd-yellow-hover transition-colors">
                Start Free 7-Day Trial
              </button>
            </Link>
            <Link href="/alldata-alternative">
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
