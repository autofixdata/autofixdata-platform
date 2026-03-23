import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { buildProductSchema, FREE_TRIAL_OFFER, SITE_URL } from "@/lib/richSnippets";

export default function RepairManuals() {
  const schema = JSON.stringify(buildProductSchema({
    name: "OEM Repair Manuals — Auto Fix Data",
    description: "Access OEM-level repair manuals for 150M+ vehicles — torque specs, wiring diagrams, TSBs, service procedures. All makes 1990–2026. 7-day free trial.",
    url: `${SITE_URL}/repair-manuals`,
    offers: [FREE_TRIAL_OFFER],
  }));

  return (
    <Layout>
      <SEO 
        title="OEM Repair Manuals for Professional Workshops | Auto Fix Data"
        description="Access OEM-level repair manuals for 150M+ vehicles — torque specs, wiring diagrams, TSBs, service procedures. All makes 1990–2026. Updated daily. Free trial."
        schema={schema}
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
             <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {[
                  { name: "BMW", slug: "bmw" },
                  { name: "Ford", slug: "ford" },
                  { name: "VW", slug: "volkswagen" },
                  { name: "Toyota", slug: "toyota" },
                  { name: "Audi", slug: "audi" },
                  { name: "Mercedes", slug: "mercedes-benz" },
                  { name: "Renault", slug: "renault" },
                  { name: "Peugeot", slug: "peugeot" },
                  { name: "Honda", slug: "honda" },
                  { name: "Nissan", slug: "nissan" },
                  { name: "Vauxhall", slug: "vauxhall" },
                  { name: "Kia", slug: "kia" },
                  { name: "Hyundai", slug: "hyundai" },
                  { name: "Volvo", slug: "volvo" },
                  { name: "Skoda", slug: "skoda" },
                  { name: "Fiat", slug: "fiat" },
                  { name: "Mazda", slug: "mazda" },
                  { name: "Mini", slug: "mini" },
                  { name: "SEAT", slug: "seat" },
                  { name: "Alfa Romeo", slug: "alfa-romeo" },
                ].map(brand => (
                  <Link href={`/manuals/${brand.slug}`} key={brand.slug} className="group bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center gap-1.5 hover:border-afd-yellow/50 hover:shadow-md transition-all cursor-pointer">
                    <img
                      src={`/images/logos/${brand.slug}.png`}
                      alt={brand.name}
                      className="h-7 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden'; }}
                    />
                    <span className="text-[10px] font-semibold text-afd-slate group-hover:text-afd-navy text-center leading-tight">{brand.name}</span>
                  </Link>
                ))}
             </div>
             <p className="text-center text-sm text-afd-slate mt-4 font-medium">+ 130 more global brands covered</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
