import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link, useRoute } from "wouter";
import { POPULAR_MAKES, unslugify } from "@/lib/carData";
import { ChevronRight, Car } from "lucide-react";

export default function MakeDirectory() {
  const [match, params] = useRoute("/manuals/:make");
  const makeSlug = params?.make || "";
  const makeName = unslugify(makeSlug);
  
  // Find if we have popular models for this make
  const makeData = POPULAR_MAKES.find(m => m.slug === makeSlug?.toLowerCase());
  const models = makeData?.popularModels || ["Standard Model", "Base Model", "Premium Model"]; // Fallback if not found

  return (
    <Layout>
      <SEO 
        title={`${makeName} OEM Repair Manuals & Wiring Diagrams | Auto Fix Data`}
        description={`Access complete factory repair manuals, torque specifications, and wiring diagrams for all ${makeName} models. Start your free trial today.`}
        breadcrumb={[
          { name: "Repair Manuals", url: "https://autofixdata.com/repair-manuals" },
          { name: makeName, url: `https://autofixdata.com/manuals/${makeSlug}` }
        ]}
      />
      
      <div className="bg-afd-navy py-16 px-6 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="text-afd-yellow">{makeName}</span> Repair Manuals
          </h1>
          <p className="text-xl text-afd-slate max-w-2xl mx-auto">
            Select your {makeName} model below to access the complete library of OEM wiring diagrams, torque specs, and diagnostic trouble codes.
          </p>
        </div>
      </div>

      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-afd-navy mb-8 flex items-center gap-3">
               <Car className="w-6 h-6 text-afd-blue" />
               Select your {makeName} Model
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {models.map(model => {
                const modelSlug = model.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={model} 
                    href={`/manuals/${makeSlug}/${modelSlug}`}
                    className="p-4 rounded-xl border border-gray-200 hover:border-afd-blue hover:shadow-md transition-all group flex items-center justify-between bg-white text-afd-navy font-semibold text-lg"
                  >
                    <span>{makeName} {model}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-afd-blue transition-colors" />
                  </Link>
                );
              })}
            </div>
            {!makeData && (
              <p className="mt-8 text-center text-sm text-afd-slate">
                Showing standard models. If you don't see your specific {makeName} model, don't worry—our database covers every {makeName} model from 1990 to 2026.
              </p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
