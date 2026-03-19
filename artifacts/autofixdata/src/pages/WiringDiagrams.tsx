import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { Zap, ZoomIn, MapPin, Search } from "lucide-react";

export default function WiringDiagrams() {
  return (
    <Layout>
      <SEO 
        title="Professional Wiring Diagrams & Electrical Schematics | Auto Fix Data"
        description="Access full-colour wiring diagrams, electrical schematics and component pinout tables for 150M+ vehicles. OEM-verified. All makes 1990–2026. Professional workshop access."
      />
      
      <section className="bg-afd-dark py-24 px-6 border-b border-afd-border relative overflow-hidden">
         <div 
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center mix-blend-screen"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/wiring-abstract.png)` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-l from-afd-dark via-afd-dark/90 to-afd-dark z-0"></div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-yellow-500/10 text-afd-yellow rounded-full text-sm font-bold tracking-wider mb-6 border border-afd-yellow/20">
            <Zap className="w-4 h-4" /> ELECTRICAL SCHEMATICS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Interactive Wiring Diagrams
          </h1>
          <p className="text-xl text-afd-slate max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop tracing black-and-white lines. Access full-colour, interactive wiring schematics with component locators and ECU pinout tables for every major system.
          </p>
          <Link href="/free-trial" className="inline-block px-8 py-4 bg-afd-yellow text-black font-bold rounded-xl hover:bg-afd-yellow-hover transition-all text-lg shadow-lg shadow-afd-yellow/20">
            Explore Wiring Database
          </Link>
        </div>
      </section>

      <section className="py-24 bg-afd-light px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative">
                {/* Simulated Wiring Diagram UI */}
                <div className="absolute top-0 left-0 w-full h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-500">2018 Volkswagen Golf - Engine Management</div>
                </div>
                <div className="p-8 mt-10 h-full relative">
                  {/* Abstract lines representing wiring */}
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M10,50 L40,50 L40,20 L80,20" stroke="#EF4444" strokeWidth="1" fill="none" />
                    <path d="M10,60 L50,60 L50,80 L80,80" stroke="#3B82F6" strokeWidth="1" fill="none" />
                    <path d="M10,70 L30,70 L30,40 L90,40" stroke="#10B981" strokeWidth="1" fill="none" />
                    <rect x="5" y="45" width="10" height="30" fill="#1F2937" rx="1" />
                    <rect x="75" y="15" width="15" height="10" fill="#1F2937" rx="1" />
                    <rect x="75" y="75" width="15" height="10" fill="#1F2937" rx="1" />
                    <rect x="85" y="35" width="15" height="10" fill="#1F2937" rx="1" />
                  </svg>
                  <div className="absolute bottom-4 right-4 bg-white shadow-lg border border-gray-200 rounded p-2 flex gap-2">
                    <ZoomIn className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-afd-navy mb-4">Color-Coded Circuit Tracking</h3>
                <p className="text-afd-text leading-relaxed">Through our Haynes Pro and Mitchell1 integrations, circuits are highlighted in color, making it easy to track a single wire through complex harnesses and multiple pages.</p>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-8 h-8 text-afd-blue shrink-0" />
                <div>
                  <h4 className="font-bold text-afd-navy mb-1">Component Locators</h4>
                  <p className="text-sm text-afd-text">Instantly click a component on the diagram to see its physical location on the vehicle with high-quality reference photos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Search className="w-8 h-8 text-afd-blue shrink-0" />
                <div>
                  <h4 className="font-bold text-afd-navy mb-1">Pinout Values</h4>
                  <p className="text-sm text-afd-text">Hover over ECU connectors to see expected voltage, ground, and signal values for every pin, speeding up multimeter diagnostics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
