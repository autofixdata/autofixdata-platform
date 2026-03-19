import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { BookOpen, CheckCircle2 } from "lucide-react";

export default function RepairManuals() {
  return (
    <Layout>
      <SEO 
        title="OEM Repair Manuals for Professional Workshops | Auto Fix Data"
        description="Access OEM-level repair manuals for 150M+ vehicles — torque specs, wiring diagrams, TSBs, service procedures. All makes 1990–2026. Updated daily. Free trial."
      />
      
      <section className="bg-afd-navy py-20 px-6 dark-section">
        <div className="max-w-[1000px] mx-auto text-center">
          <BookOpen className="w-12 h-12 text-afd-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">OEM Repair Manuals & Workshop Data</h1>
          <p className="text-xl text-afd-slate">Remove the guesswork. Access unedited, factory-level service manuals for accurate and profitable repairs.</p>
        </div>
      </section>

      <section className="py-20 bg-white px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-afd-navy mb-6">The Dealership Standard in Your Bay</h2>
            <p className="text-afd-text mb-6 text-lg leading-relaxed">
              We aggregate data from ALLDATA, Mitchell1, and Haynes Pro to ensure you have the exact torque specs, timing mark diagrams, and step-by-step tear down procedures the manufacturer intended.
            </p>
            <ul className="space-y-4 mb-8">
              {['Engine Overhaul & Timing', 'Transmission Remove & Replace', 'Steering & Suspension Torque Specs', 'Brake System Servicing', 'HVAC Evacuation & Recharge', 'Hybrid/EV Safety Procedures'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-afd-yellow" />
                  <span className="font-medium text-afd-navy">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/free-trial" className="bg-afd-yellow text-black px-6 py-3 rounded-xl font-bold hover:bg-afd-yellow-hover">
              Search Manuals Free
            </Link>
          </div>
          <div className="bg-afd-light p-8 rounded-2xl border border-gray-100">
             <h3 className="text-xl font-bold text-afd-navy mb-6">Coverage Highlights</h3>
             <div className="grid grid-cols-2 gap-4">
                {['Ford', 'BMW', 'Volkswagen', 'Toyota', 'Audi', 'Mercedes', 'Renault', 'Peugeot', 'Honda', 'Nissan'].map(brand => (
                  <div key={brand} className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-center font-bold text-afd-navy shadow-sm">
                    {brand}
                  </div>
                ))}
                <div className="col-span-2 text-center text-sm text-afd-slate mt-2">
                  + 140 More Global Brands
                </div>
             </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
