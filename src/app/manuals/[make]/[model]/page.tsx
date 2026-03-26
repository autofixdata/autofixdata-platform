import type { Metadata } from 'next';
import Link from 'next/link';
import { POPULAR_MAKES, slugify, unslugify } from '@/lib/carData';
import { Lock, ChevronRight, Settings, Zap, BookOpen, Shield, Clock, Search, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  return POPULAR_MAKES.flatMap(make =>
    make.popularModels.map(model => ({
      make: make.slug,
      model: slugify(model),
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ make: string; model: string }> }): Promise<Metadata> {
  const { make, model } = await params;
  const makeName = unslugify(make);
  const modelName = unslugify(model);
  return {
    title: `${makeName} ${modelName} OEM Repair Manuals & Wiring Diagrams`,
    description: `Access complete factory repair manuals, torque specifications, and wiring diagrams for the ${makeName} ${modelName}. Start your free trial today.`,
    alternates: { canonical: `https://autofixdata.net/manuals/${make}/${model}` },
    openGraph: {
      title: `${makeName} ${modelName} OEM Repair Manuals`,
      description: `Factory repair data for the ${makeName} ${modelName}. Interactive wiring diagrams, DTC codes, and torque specs.`,
    },
  };
}

const techCategories = [
  { id: "service", label: "SERVICE", icon: "⚙️", items: ["Service brakes", "Engine oil", "Service transmission", "Service air conditioning"] },
  { id: "powertrain", label: "POWERTRAIN", icon: "🔧", items: ["Timing belt/chain", "Engine overhaul", "Clutch replacement"] },
  { id: "chassis", label: "CHASSIS", icon: "🛞", items: ["Wheel alignment", "Suspension geometry", "Brake calipers"] },
  { id: "electrical", label: "ELECTRICAL", icon: "⚡", items: ["Wiring diagrams", "ECU coding", "Sensor data"] },
];

export default async function ModelDetailPage({ params }: { params: Promise<{ make: string; model: string }> }) {
  const { make, model } = await params;
  const makeName = unslugify(make);
  const modelName = unslugify(model);

  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autofixdata.net/' },
      { '@type': 'ListItem', position: 2, name: 'Repair Manuals', item: 'https://autofixdata.net/repair-manuals' },
      { '@type': 'ListItem', position: 3, name: makeName, item: `https://autofixdata.net/manuals/${make}` },
      { '@type': 'ListItem', position: 4, name: modelName, item: `https://autofixdata.net/manuals/${make}/${model}` },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      {/* Breadcrumb Bar */}
      <div className="bg-[#2d2d2d] text-white text-sm border-b border-black/20">
        <div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-300">
            <Link href={`/manuals/${make}`} className="hover:text-white transition-colors font-medium">{makeName}</Link>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <span className="text-white font-medium">{modelName}</span>
          </div>
          <Link href="/pricing" className="flex items-center gap-2 text-xs bg-afd-yellow/20 border border-afd-yellow/40 text-afd-yellow px-3 py-1.5 rounded-lg hover:bg-afd-yellow/30 transition-colors font-bold">
            <Lock className="w-3.5 h-3.5" /> Subscribe to access data
          </Link>
        </div>
      </div>

      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-[180px] bg-[#3d3d3d] text-white flex-shrink-0 hidden md:flex flex-col">
          <div className="p-4 bg-[#2d2d2d] flex flex-col items-center gap-3 border-b border-black/20">
            <img src={`/images/logos/${make}.png`} alt={makeName}
              className="max-h-12 max-w-full object-contain filter brightness-0 invert opacity-80"
              onError={undefined} />
            <div className="text-center">
              <div className="text-xs text-gray-400 font-medium">{modelName}</div>
            </div>
          </div>
          <nav className="flex-1 py-2">
            {[
              { label: 'Overview', id: 'overview' },
              { label: 'Maintenance', id: 'maintenance' },
              { label: 'Repair Data', id: 'repair' },
              { label: 'Electrical', id: 'electrical' },
            ].map(({ label, id }) => (
              <Link key={id} href="/pricing" className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <div className="p-3 border-t border-black/20">
            <Link href="/pricing" className="block text-center text-xs bg-afd-yellow text-black font-bold py-2 px-3 rounded-lg hover:bg-afd-yellow-hover transition-colors">Upgrade →</Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-x-hidden">
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
            <div>
              <h1 className="text-lg font-bold text-gray-900">{makeName} {modelName} — Repair Manual</h1>
              <p className="text-xs text-gray-500">OEM Service Data</p>
            </div>
          </div>

          <div className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900 text-sm">Frequently Used</h2>
                </div>
                <div className="p-4 space-y-2">
                  <Link href="/pricing" className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg hover:border-red-400 transition-colors">
                    <span className="text-sm text-red-700 font-medium flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-600" /> Important! Read before working — Electrical Safety</span>
                    <Lock className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  </Link>
                  {["Flat-rate labour times", "Adjustment & settings data", "Torque specifications"].map(label => (
                    <Link key={label} href="/pricing" className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-afd-yellow/50 transition-colors">
                      <span className="font-medium">{label}</span>
                      <Lock className="w-3.5 h-3.5 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900 text-sm">Fault Code / DTC Search</h2>
                </div>
                <div className="p-4">
                  <Link href="/pricing" className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-afd-blue/50 transition-colors">
                    <Search className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400 flex-1 text-left">Search fault codes (e.g. P0300, P0420)</span>
                    <Lock className="w-3.5 h-3.5 text-gray-400" />
                  </Link>
                </div>
              </div>

              {/* SmartPACK */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-gray-900 text-sm">SmartPACK™</h2>
                  <span className="text-xs text-gray-400">Powered by ALLDATA + Identifix</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {[{ label: "Technical Service Bulletins (TSB)", badge: "12" }, { label: "Safety Recalls", badge: "5" }, { label: "Confirmed Fixes (Identifix)" }].map(({ label, badge }) => (
                    <Link key={label} href="/pricing" className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
                      <span className="text-sm text-gray-700">{label}</span>
                      <div className="flex items-center gap-2">
                        {badge ? <span className="bg-afd-yellow text-black text-xs font-bold px-2 py-0.5 rounded-full">{badge}</span> : <Lock className="w-3.5 h-3.5 text-gray-400" />}
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Information Grid */}
          <div className="px-4 lg:px-6 pb-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Technical Information</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
                {techCategories.map(({ id, label, icon, items }) => (
                  <div key={id} className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base">{icon}</span>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{label}</span>
                    </div>
                    <div className="space-y-2">
                      {items.map(item => (
                        <Link key={item} href="/pricing" className="block text-xs text-afd-blue hover:text-afd-navy hover:underline transition-colors text-left w-full">{item}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEO Content Block */}
          <div className="px-4 lg:px-6 pb-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 prose prose-lg max-w-none prose-headings:text-afd-navy text-gray-600">
              <h2>{makeName} {modelName} Factory Repair Data</h2>
              <p>Professional mechanics and independent workshops rely on Auto Fix Data to access the same service information used by authorised {makeName} dealerships. Our comprehensive database covers every aspect of {makeName} {modelName} maintenance and repair, from basic oil service to complex electrical diagnostics.</p>
              <h3>Why OEM Wiring Diagrams Matter for {makeName} {modelName} Diagnostics</h3>
              <p>Modern vehicles like the {makeName} {modelName} use complex multiplexed networks (CAN-bus, LIN-bus) connecting dozens of electronic control units. Without accurate, manufacturer-sourced wiring diagrams, diagnosing intermittent faults becomes an expensive guessing game. Auto Fix Data provides interactive, vector-format schematics where you can trace any wire circuit in seconds.</p>
            </div>
          </div>

          {/* Upgrade Banner */}
          <div className="mx-4 lg:mx-6 mb-6 bg-afd-navy rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Unlock Full Data for {makeName} {modelName}</h3>
              <p className="text-afd-slate text-sm">OEM repair procedures, wiring diagrams, DTC library, TSBs and more — all from £99/mo.</p>
            </div>
            <Link href="/pricing" className="shrink-0 px-6 py-3 bg-afd-yellow text-black font-bold rounded-xl hover:bg-afd-yellow-hover transition-all flex items-center gap-2">
              View Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
