import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { Zap, ZoomIn, MapPin, Search, CheckCircle2, Layers, Monitor, ArrowRight } from "lucide-react";
import { useState } from "react";

const systems = [
  { name: "Engine Management", desc: "ECU wiring, fuel injectors, ignition coils, MAF, MAP, O2 sensors and throttle body connections.", icon: "⚙️" },
  { name: "ABS & Braking", desc: "ABS pump, wheel speed sensors, hydraulic unit and ESC system wiring for every axle configuration.", icon: "🛑" },
  { name: "Airbag & SRS", desc: "Airbag control module, crash sensors, seatbelt pre-tensioners and clock spring wiring.", icon: "🛡️" },
  { name: "HVAC & Climate", desc: "Heater matrix, evaporator, blower motor, compressor clutch and dual-zone climate control circuits.", icon: "🌡️" },
  { name: "Body & Lighting", desc: "Body control module, exterior/interior lighting, power windows, central locking and keyless entry.", icon: "💡" },
  { name: "CAN Bus & Networking", desc: "Full network topology diagrams showing all modules, gateway locations and bus termination points.", icon: "🔌" },
  { name: "ADAS & Safety", desc: "Adaptive cruise, lane departure, autonomous emergency braking, camera and radar system wiring.", icon: "📡" },
  { name: "EV & Hybrid HV", desc: "High-voltage battery management, inverter, DC-DC converter and charging circuit diagrams with safety warnings.", icon: "⚡" },
];

const faqs = [
  { q: "Are the wiring diagrams full-colour?", a: "Yes. All wiring diagrams from Haynes Pro and Mitchell1 are delivered in full colour, with each wire colour matching its physical colour to make tracing circuits intuitive and fast." },
  { q: "Can I see component physical locations?", a: "Yes. Component locator diagrams show the exact physical location on the vehicle with reference photographs, so you know exactly where to access the connector before you lift the bonnet." },
  { q: "What vehicles are covered for wiring diagrams?", a: "We provide wiring diagrams for the vast majority of European and global vehicles from 1990 to present. Coverage includes all major makes: BMW, VW, Ford, Toyota, Mercedes, Renault, Peugeot, Honda, and 140+ more." },
  { q: "Do you have EV and hybrid wiring data?", a: "Yes. High-voltage circuit diagrams for BEV and hybrid systems are included, with clear safety warnings and isolation procedures for working on live HV components." },
  { q: "Can I view ECU connector pinouts?", a: "Yes. Hover over any ECU connector in the diagram to see expected voltage, signal type and ground values for every pin — speeding up multimeter-based diagnostics significantly." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button className="w-full text-left flex justify-between items-center focus:outline-none" onClick={() => setOpen(!open)}>
        <h3 className="font-bold text-afd-navy pr-4">{q}</h3>
        <span className={`text-afd-blue transition-transform ${open ? 'rotate-180' : ''}`}><ArrowRight className="w-4 h-4 rotate-90" /></span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 mt-3' : 'max-h-0'}`}>
        <p className="text-afd-text text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

export default function WiringDiagrams() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  });

  return (
    <Layout>
      <SEO
        title="Professional Wiring Diagrams & Electrical Schematics | Auto Fix Data"
        description="Full-colour interactive wiring diagrams, electrical schematics, ECU pinouts and component locators for 150M+ vehicles. All makes 1990–2026. OEM-verified. Free 7-day trial."
        schema={schema}
      />

      {/* HERO */}
      <section className="bg-afd-dark py-24 px-6 border-b border-afd-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-afd-dark via-afd-dark/90 to-afd-dark z-0"></div>
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-yellow-500/10 text-afd-yellow rounded-full text-sm font-bold tracking-wider mb-6 border border-afd-yellow/20">
            <Zap className="w-4 h-4" /> ELECTRICAL SCHEMATICS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Interactive Wiring Diagrams<br /><span className="text-afd-yellow">for Every Major Make</span>
          </h1>
          <p className="text-xl text-afd-slate max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop tracing black-and-white lines. Access full-colour, interactive wiring schematics with component locators, ECU pinout tables and high-voltage safety procedures for every major system.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-afd-yellow text-black font-bold rounded-xl hover:bg-afd-yellow-hover transition-all text-lg shadow-lg shadow-afd-yellow/20">
              Explore Wiring Database
            </Link>
            <Link href="/pricing" className="inline-block px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-lg border border-white/20">
              Compare Plans
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 justify-center text-sm text-afd-slate">
            <span><strong className="text-white">150M+</strong> Vehicles Covered</span>
            <span><strong className="text-white">Full-Colour</strong> Diagrams</span>
            <span><strong className="text-white">EV/Hybrid</strong> HV Circuits Included</span>
            <span><strong className="text-white">1990–2026</strong> Coverage</span>
          </div>
        </div>
      </section>

      {/* VISUAL DEMO */}
      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-500">2020 BMW 3 Series — Fuel System</div>
                </div>
                <div className="p-8 mt-10 h-full relative">
                  <svg className="w-full h-full" viewBox="0 0 120 100" preserveAspectRatio="none">
                    <path d="M5,50 L40,50 L40,20 L85,20" stroke="#EF4444" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M5,60 L50,60 L50,80 L85,80" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M5,70 L30,70 L30,40 L95,40" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M20,50 L20,65" stroke="#F59E0B" strokeWidth="1" fill="none" strokeDasharray="3,2" />
                    <rect x="2" y="43" width="10" height="32" fill="#1F2937" rx="2" />
                    <text x="7" y="61" fontSize="3" fill="#9CA3AF" textAnchor="middle">ECU</text>
                    <rect x="82" y="14" width="16" height="12" fill="#1F2937" rx="2" />
                    <text x="90" y="22" fontSize="3" fill="#F5C400" textAnchor="middle">INJ</text>
                    <rect x="82" y="74" width="16" height="12" fill="#1F2937" rx="2" />
                    <text x="90" y="82" fontSize="3" fill="#3B82F6" textAnchor="middle">O2</text>
                    <rect x="92" y="34" width="16" height="12" fill="#1F2937" rx="2" />
                    <text x="100" y="42" fontSize="3" fill="#10B981" textAnchor="middle">MAF</text>
                    <circle cx="40" cy="50" r="3" fill="#EF4444" opacity="0.8" />
                    <circle cx="50" cy="60" r="3" fill="#3B82F6" opacity="0.8" />
                  </svg>
                  <div className="absolute bottom-4 right-4 bg-white shadow-lg border border-gray-200 rounded p-2 flex gap-2">
                    <ZoomIn className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="absolute top-12 right-4 bg-afd-yellow text-black text-xs font-bold px-2 py-1 rounded">Click any component</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-3xl font-bold text-afd-navy">Professional-Grade Electrical Data</h2>
              <div className="space-y-6">
                {[
                  { icon: Layers, title: "Color-Coded Circuit Tracking", desc: "Circuits highlighted in colour so you can trace a single wire through complex harnesses across multiple pages instantly." },
                  { icon: MapPin, title: "Component Locators", desc: "Click any component in the diagram to see its exact physical location on the vehicle with reference photographs." },
                  { icon: Search, title: "ECU Connector Pinouts", desc: "Hover over ECU connectors to see expected voltage, ground, and signal values for every pin — speeds up multimeter diagnosis." },
                  { icon: Monitor, title: "Multi-System Coverage", desc: "Engine management, ABS, airbag, HVAC, CAN bus, ADAS, body electronics and EV high-voltage circuits all in one platform." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-afd-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-afd-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-afd-navy mb-1">{title}</h4>
                      <p className="text-sm text-afd-text">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEMS GRID */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-afd-navy mb-4">Every Electrical System Covered</h2>
            <p className="text-afd-text text-lg max-w-2xl mx-auto">From basic lighting to high-voltage EV systems — our wiring database covers every circuit on every major vehicle.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {systems.map(({ name, desc, icon }) => (
              <div key={name} className="p-6 bg-afd-light rounded-2xl border border-gray-100 hover:border-afd-yellow/30 hover:shadow-lg transition-all group">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-afd-navy mb-2">{name}</h3>
                <p className="text-sm text-afd-text leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAKES COVERAGE */}
      <section className="py-16 bg-afd-dark px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-8">Available for 150+ Makes from 1990 to 2026</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["BMW", "Ford", "Volkswagen", "Toyota", "Mercedes-Benz", "Audi", "Renault", "Peugeot", "Honda", "Nissan", "Vauxhall", "Kia", "Hyundai", "Volvo", "Skoda", "Fiat", "Mazda", "Mini", "SEAT", "Alfa Romeo", "Citroën", "Porsche", "Jaguar", "Land Rover", "Mitsubishi"].map(make => (
              <span key={make} className="px-3 py-1.5 bg-white/5 text-afd-slate border border-white/10 rounded-full text-sm hover:bg-white/10 hover:text-white transition-colors">{make}</span>
            ))}
            <Link href="/repair-manuals" className="px-3 py-1.5 bg-afd-yellow/20 text-afd-yellow border border-afd-yellow/30 rounded-full text-sm font-bold hover:bg-afd-yellow/30 transition-colors">+ 125 more →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-afd-light border-t border-gray-100 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-extrabold text-afd-navy mb-10 text-center">Wiring Diagram FAQs</h2>
          <div className="space-y-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-afd-navy dark-section text-center px-6">
        <h2 className="text-3xl font-extrabold text-white mb-4">Start Tracing Circuits the Right Way</h2>
        <p className="text-afd-slate text-lg max-w-xl mx-auto mb-8">Full-colour interactive wiring diagrams included in every Auto Fix Data plan. Try free for 7 days.</p>
        <Link href="/contact" className="inline-block px-8 py-4 bg-afd-yellow text-black font-bold rounded-xl text-lg hover:bg-afd-yellow-hover transition-all shadow-lg shadow-afd-yellow/20">
          Start Free Trial
        </Link>
      </section>
    </Layout>
  );
}
