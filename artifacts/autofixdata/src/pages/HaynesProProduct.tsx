import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2, BookOpen, FileText, Zap, Settings, Camera, ArrowRight } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Workshop Manuals", desc: "Professional-grade workshop manuals derived from OEM documentation, covering step-by-step procedures for all major repair tasks." },
  { icon: Settings, title: "Technical Specifications", desc: "Complete technical data including torque settings, clearances, fluid capacities and component dimensions for all supported vehicles." },
  { icon: Zap, title: "Wiring Diagrams", desc: "Circuit diagrams and electrical schematics with colour coding, component identification and pinout information." },
  { icon: FileText, title: "Service Schedules", desc: "Factory service intervals with parts lists, fluid specifications and technician notes for accurate service delivery." },
  { icon: Camera, title: "Illustrated Procedures", desc: "High-quality technical illustrations and exploded diagrams supporting every major repair procedure." },
  { icon: Settings, title: "Engine Overhaul Data", desc: "Detailed engine rebuild specifications including bearing clearances, piston ring gaps and valve timing data." },
];

export default function HaynesProProduct() {
  return (
    <Layout>
      <SEO
        title="Haynes Pro Workshop Manuals via Auto Fix Data | Reseller"
        description="Access Haynes Pro's professional workshop manuals and repair data through Auto Fix Data. OEM-level procedures for 150M+ vehicles. Start your free trial."
      />

      <section className="bg-afd-navy pt-24 pb-20 dark-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 text-afd-yellow text-sm font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-afd-yellow rounded-full"></span>
            Authorised Haynes Pro Reseller
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 max-w-3xl">
            Haynes Pro — Professional Workshop Manuals by Haynes Group
          </h1>
          <p className="text-xl text-afd-slate max-w-2xl mb-10">
            The professional evolution of the world's most trusted workshop manuals. Haynes Pro delivers OEM-quality repair procedures, technical specifications and wiring data for the modern professional workshop — now accessible through Auto Fix Data.
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
          <span><strong className="text-white">80+ Years</strong> Haynes Heritage</span>
          <span><strong className="text-white">Professional</strong> Grade Data</span>
          <span><strong className="text-white">Illustrated</strong> Procedures</span>
          <span><strong className="text-white">OEM</strong> Sourced Content</span>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-4">
              Haynes Pro — Beyond the Consumer Manual
            </h2>
            <p className="text-lg text-afd-text max-w-2xl mx-auto">
              Haynes Pro is the professional platform built for workshops, combining the clarity and accessibility of Haynes manuals with the depth and completeness that professional technicians require. It brings together OEM repair data, technical specifications and illustrated procedures in a single, searchable platform.
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
            <h2 className="text-3xl font-extrabold text-afd-navy mb-6">Who Benefits Most from Haynes Pro?</h2>
            <p className="text-lg text-afd-text mb-8 leading-relaxed">
              Haynes Pro is particularly valued by independent workshops that require clearly structured, illustrated procedures alongside technical data. Its step-by-step format reduces training time for junior technicians and provides a reliable reference point for experienced professionals tackling unfamiliar vehicle systems.
            </p>
            <ul className="space-y-4">
              {[
                "Independent workshops and sole-trader mechanics",
                "Workshops training apprentice and junior technicians",
                "MOT test stations and service centres",
                "Automotive colleges and training centres",
                "Technicians working across mixed domestic and European fleets",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-afd-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-afd-navy rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Haynes Pro Key Facts</h3>
            <div className="space-y-6">
              {[
                { label: "Brand Heritage", value: "80+ Years" },
                { label: "Vehicle Models", value: "150M+" },
                { label: "Procedures Illustrated", value: "100%" },
                { label: "Data Source", value: "OEM" },
                { label: "Platform Access", value: "Web & Mobile" },
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
            Access Haynes Pro Through Auto Fix Data
          </h2>
          <p className="text-lg text-afd-text mb-10">
            Auto Fix Data is an authorised Haynes Pro reseller. Access the full Haynes Pro platform alongside ALLDATA, AutoData, Mitchell1 and Identifix under one subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial">
              <button className="bg-afd-yellow text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-afd-yellow-hover transition-colors">
                Start Free 7-Day Trial
              </button>
            </Link>
            <Link href="/haynespro-alternative">
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
