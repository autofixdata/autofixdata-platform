import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link, useRoute } from "wouter";
import { useState } from "react";
import { Lock, ChevronRight, Search, AlertTriangle, Clock, Settings, Zap, BookOpen, Shield, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { unslugify } from "@/lib/carData";

const MAKE_DATA: Record<string, {
  make: string; model: string; variant: string; year: string;
  engineCode: string; engineSpec: string; engineYear: string;
  tsbCount: number; recallCount: number;
}> = {
  bmw: { make: "BMW", model: "3 Series (G20)", variant: "320d xDrive 2019", year: "2019 - ...", engineCode: "B47D20", engineSpec: "140 kW (190 HP) 4000 RPM", engineYear: "2019-2024", tsbCount: 14, recallCount: 8 },
  ford: { make: "Ford", model: "Focus (Mk4)", variant: "1.5 EcoBoost 150 2018", year: "2018 - ...", engineCode: "M8MA", engineSpec: "110 kW (150 HP) 6000 RPM", engineYear: "2018-2023", tsbCount: 11, recallCount: 6 },
  volkswagen: { make: "Volkswagen", model: "Golf (Mk8)", variant: "2.0 TDI 150 2020", year: "2020 - ...", engineCode: "DFCA", engineSpec: "110 kW (150 HP) 3500 RPM", engineYear: "2020-2024", tsbCount: 9, recallCount: 12 },
  toyota: { make: "Toyota", model: "Corolla (E210)", variant: "2.0 Hybrid 2019", year: "2019 - ...", engineCode: "M20A-FXS", engineSpec: "90 kW (122 HP) 5700 RPM", engineYear: "2019-2024", tsbCount: 7, recallCount: 4 },
  "mercedes-benz": { make: "Mercedes-Benz", model: "C-Class (W206)", variant: "C 220d 2021", year: "2021 - ...", engineCode: "OM654DE20LA", engineSpec: "147 kW (200 HP) 3800 RPM", engineYear: "2021-2024", tsbCount: 16, recallCount: 5 },
  audi: { make: "Audi", model: "A4 (B9 Facelift)", variant: "35 TDI 2020", year: "2020 - ...", engineCode: "DETA", engineSpec: "120 kW (163 HP) 3500 RPM", engineYear: "2020-2024", tsbCount: 12, recallCount: 7 },
  renault: { make: "Renault", model: "Clio (Mk5)", variant: "1.0 TCe 100 2019", year: "2019 - ...", engineCode: "H4D450", engineSpec: "74 kW (100 HP) 5500 RPM", engineYear: "2019-2024", tsbCount: 6, recallCount: 3 },
  peugeot: { make: "Peugeot", model: "308 (Mk3)", variant: "1.5 BlueHDi 130 2021", year: "2021 - ...", engineCode: "YH01", engineSpec: "96 kW (130 HP) 3750 RPM", engineYear: "2021-2024", tsbCount: 8, recallCount: 2 },
  honda: { make: "Honda", model: "Civic (Mk11)", variant: "1.5 VTEC Turbo 2022", year: "2022 - ...", engineCode: "L15CA", engineSpec: "131 kW (178 HP) 6000 RPM", engineYear: "2022-2024", tsbCount: 5, recallCount: 1 },
  nissan: { make: "Nissan", model: "Qashqai (J12)", variant: "1.3 DiG-T MHEV 158 2021", year: "2021 - ...", engineCode: "HR13DDT", engineSpec: "116 kW (158 HP) 5500 RPM", engineYear: "2021-2024", tsbCount: 10, recallCount: 9 },
  vauxhall: { make: "Vauxhall", model: "Astra (L)", variant: "1.2 Turbo 130 2021", year: "2021 - ...", engineCode: "EB2ADTD", engineSpec: "96 kW (130 HP) 5500 RPM", engineYear: "2021-2024", tsbCount: 7, recallCount: 3 },
  hyundai: { make: "Hyundai", model: "i30 (PD)", variant: "1.5 T-GDi 160 2020", year: "2020 - ...", engineCode: "G4LJ", engineSpec: "118 kW (160 HP) 5500 RPM", engineYear: "2020-2024", tsbCount: 6, recallCount: 4 },
  kia: { make: "Kia", model: "Sportage (NQ5)", variant: "1.6 T-GDi HEV 230 2022", year: "2022 - ...", engineCode: "G4FJ", engineSpec: "169 kW (230 HP) 5500 RPM", engineYear: "2022-2024", tsbCount: 5, recallCount: 2 },
  volvo: { make: "Volvo", model: "XC60 (246)", variant: "B4 AWD Mild Hybrid 2021", year: "2021 - ...", engineCode: "B4204T44", engineSpec: "145 kW (197 HP) 5400 RPM", engineYear: "2021-2024", tsbCount: 9, recallCount: 6 },
  skoda: { make: "Skoda", model: "Octavia (NX5)", variant: "2.0 TDI 150 2020", year: "2020 - ...", engineCode: "DFCA", engineSpec: "110 kW (150 HP) 3500 RPM", engineYear: "2020-2024", tsbCount: 8, recallCount: 5 },
  "land-rover": { make: "Land Rover", model: "Defender (L663)", variant: "3.0 D300 2020", year: "2020 - ...", engineCode: "306DT", engineSpec: "221 kW (300 HP) 4000 RPM", engineYear: "2020-2024", tsbCount: 18, recallCount: 11 },
  fiat: { make: "Fiat", model: "500 (332)", variant: "1.0 Mild Hybrid 70 2020", year: "2020 - ...", engineCode: "169A5000", engineSpec: "51 kW (70 HP) 6000 RPM", engineYear: "2020-2024", tsbCount: 4, recallCount: 2 },
  mazda: { make: "Mazda", model: "CX-5 (KF)", variant: "2.2 Skyactiv-D 184 2017", year: "2017 - ...", engineCode: "SH-VPTS", engineSpec: "135 kW (184 HP) 4500 RPM", engineYear: "2017-2024", tsbCount: 7, recallCount: 3 },
  mini: { make: "MINI", model: "Cooper (F56)", variant: "Cooper S 2.0T 192 2021", year: "2021 - ...", engineCode: "B48A20B", engineSpec: "141 kW (192 HP) 5000 RPM", engineYear: "2021-2024", tsbCount: 10, recallCount: 7 },
  seat: { make: "SEAT", model: "Leon (KL)", variant: "1.5 eTSI 150 2020", year: "2020 - ...", engineCode: "DPCA", engineSpec: "110 kW (150 HP) 5000 RPM", engineYear: "2020-2024", tsbCount: 6, recallCount: 4 },
  "alfa-romeo": { make: "Alfa Romeo", model: "Giulia (952)", variant: "2.2 Turbo Diesel 160 2016", year: "2016 - ...", engineCode: "55260177", engineSpec: "118 kW (160 HP) 3500 RPM", engineYear: "2016-2024", tsbCount: 12, recallCount: 8 },
  citroen: { make: "Citroën", model: "C3 (SX65)", variant: "1.2 PureTech 110 2020", year: "2020 - ...", engineCode: "HN05", engineSpec: "81 kW (110 HP) 5500 RPM", engineYear: "2020-2024", tsbCount: 5, recallCount: 2 },
  porsche: { make: "Porsche", model: "Cayenne (9YA)", variant: "3.0 V6 340 2018", year: "2018 - ...", engineCode: "ZF35.01", engineSpec: "250 kW (340 HP) 6400 RPM", engineYear: "2018-2024", tsbCount: 11, recallCount: 6 },
  subaru: { make: "Subaru", model: "Forester (SK)", variant: "2.0i-L e-Boxer 150 2019", year: "2019 - ...", engineCode: "FB20ASZHB", engineSpec: "110 kW (150 HP) 6000 RPM", engineYear: "2019-2024", tsbCount: 6, recallCount: 3 },
  mitsubishi: { make: "Mitsubishi", model: "Outlander (GN0W)", variant: "2.4 PHEV 4WD 224 2021", year: "2021 - ...", engineCode: "4J12", engineSpec: "165 kW (224 HP) Total", engineYear: "2021-2024", tsbCount: 8, recallCount: 4 },
  jaguar: { make: "Jaguar", model: "F-Pace (X761)", variant: "P250 2.0i AWD 250 2021", year: "2021 - ...", engineCode: "PT204", engineSpec: "184 kW (250 HP) 5500 RPM", engineYear: "2021-2024", tsbCount: 13, recallCount: 9 },
  jeep: { make: "Jeep", model: "Compass (MP/552)", variant: "1.3 T4 PHEV 240 2021", year: "2021 - ...", engineCode: "GSE T4", engineSpec: "177 kW (240 HP) Total", engineYear: "2021-2024", tsbCount: 9, recallCount: 5 },
};

const DEFAULT_VEHICLE = MAKE_DATA.bmw;

const navItems = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "maintenance", label: "Maintenance", icon: Settings },
  { id: "repair", label: "Repair Data", icon: Zap },
  { id: "electrical", label: "Electrical", icon: Zap },
  { id: "smartpack", label: "SmartPACK™", icon: Shield, badge: true },
];

const techCategories = [
  { id: "service", label: "SERVICE", icon: "⚙️", items: ["Service brakes", "Engine oil", "Service transmission", "Service air conditioning"] },
  { id: "powertrain", label: "POWERTRAIN", icon: "🔧", items: ["Timing belt/chain", "Engine overhaul", "Clutch replacement"] },
  { id: "chassis", label: "CHASSIS", icon: "🛞", items: ["Wheel alignment", "Suspension geometry", "Brake calipers"] },
  { id: "body", label: "BODY & INTERIOR", icon: "🚗", items: ["Door modules", "Interior trim", "Glass seals"] },
  { id: "electrical", label: "ELECTRICAL", icon: "⚡", items: ["Wiring diagrams", "ECU coding", "Sensor data"] },
  { id: "general", label: "GENERAL", icon: "📋", items: ["Technical specifications", "Fluid capacities", "Torque values"] },
];

const quickLinks = [
  { label: "Engine oil service", icon: "🛢️" },
  { label: "Service brakes", icon: "🔴" },
  { label: "Service air conditioning", icon: "❄️" },
];

function UpgradeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 z-10">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center justify-center w-16 h-16 bg-afd-yellow/10 rounded-2xl mx-auto mb-6">
          <Lock className="w-8 h-8 text-afd-navy" />
        </div>
        <h2 className="text-2xl font-extrabold text-afd-navy text-center mb-2">
          Subscription Required
        </h2>
        <p className="text-afd-text text-center text-sm mb-6">
          This technical data is available exclusively to Auto Fix Data subscribers. Unlock full access to OEM repair data, wiring diagrams, DTC codes and more.
        </p>
        <div className="space-y-3 mb-8">
          {[
            "OEM repair procedures & TSBs",
            "Full-colour interactive wiring diagrams",
            "DTC codes with diagnostic flowcharts",
            "Timing belt & service interval data",
            "Real-world confirmed fixes (Identifix)",
          ].map(item => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <span className="text-sm text-afd-text">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href="/pricing"
            className="w-full block text-center py-4 bg-afd-yellow text-black font-bold rounded-xl text-lg hover:bg-afd-yellow-hover transition-all shadow-lg shadow-afd-yellow/20"
          >
            View Subscription Plans →
          </Link>
          <button
            onClick={onClose}
            className="w-full py-3 text-afd-slate text-sm hover:text-afd-navy transition-colors"
          >
            Continue browsing
          </button>
        </div>
      </div>
    </div>
  );
}

function LockedItem({ label, icon, onClick }: { label: string; icon?: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-left transition-all group"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium text-gray-700 group-hover:text-afd-navy">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <Lock className="w-3.5 h-3.5 text-gray-400" />
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>
    </button>
  );
}

export default function ModelDetail() {
  const [match, routeParams] = useRoute("/manuals/:make/:model");
  const [showModal, setShowModal] = useState(false);
  const [activeNav, setActiveNav] = useState("overview");

  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const makeSlug = routeParams?.make || searchParams.get("make") || "bmw";
  const modelSlug = routeParams?.model || searchParams.get("model") || "3-series";

  const makeName = unslugify(makeSlug);
  const modelName = unslugify(modelSlug);

  const baseVehicle = MAKE_DATA[makeSlug] || DEFAULT_VEHICLE;
  const vehicle = {
    ...baseVehicle,
    make: makeName,
    model: modelName,
    variant: `${modelName} Standard`,
  };

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://autofixdata.com/" },
      { "@type": "ListItem", "position": 2, "name": "Repair Manuals", "item": "https://autofixdata.com/repair-manuals" },
      { "@type": "ListItem", "position": 3, "name": makeName, "item": `https://autofixdata.com/manuals/${makeSlug}` },
      { "@type": "ListItem", "position": 4, "name": modelName, "item": `https://autofixdata.com/manuals/${makeSlug}/${modelSlug}` }
    ]
  });

  const openModal = () => setShowModal(true);

  return (
    <Layout>
      <SEO
        title={`${makeName} ${modelName} OEM Repair Manuals & Wiring Diagrams | Auto Fix Data`}
        description={`Access complete factory repair manuals, torque specifications, and wiring diagrams for the ${makeName} ${modelName}. Start your free trial today.`}
        schema={schema}
      />

      {showModal && <UpgradeModal onClose={() => setShowModal(false)} />}

      {/* Breadcrumb Bar */}
      <div className="bg-[#2d2d2d] text-white text-sm border-b border-black/20">
        <div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-300">
            <Link href={`/model-detail?make=${makeSlug}`} className="hover:text-white transition-colors font-medium">{vehicle.make}</Link>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <span className="text-white font-medium">{vehicle.model}</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <span className="text-gray-400">{vehicle.variant}</span>
          </div>
          <button
            onClick={openModal}
            className="flex items-center gap-2 text-xs bg-afd-yellow/20 border border-afd-yellow/40 text-afd-yellow px-3 py-1.5 rounded-lg hover:bg-afd-yellow/30 transition-colors font-bold"
          >
            <Lock className="w-3.5 h-3.5" /> Subscribe to access data
          </button>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-10rem)] bg-gray-50">
        {/* Left Sidebar */}
        <aside className="w-[160px] lg:w-[180px] bg-[#3d3d3d] text-white flex-shrink-0 flex flex-col hidden md:flex">
          {/* Car Logo / Image Area */}
          <div className="p-4 bg-[#2d2d2d] flex flex-col items-center gap-3 border-b border-black/20">
            <div className="w-24 h-16 flex items-center justify-center">
              <img
                src={`/images/logos/${makeSlug}.png`}
                alt={vehicle.make}
                className="max-h-12 max-w-full object-contain filter brightness-0 invert opacity-80"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 font-medium">{vehicle.model}</div>
              <div className="text-[10px] text-gray-500">{vehicle.year}</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 py-2">
            {navItems.map(({ id, label, icon: Icon, badge }) => (
              <button
                key={id}
                onClick={() => { setActiveNav(id); if (id !== "overview") openModal(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors text-left relative ${
                  activeNav === id ? 'bg-afd-yellow text-black' : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                {badge && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-afd-yellow text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {vehicle.tsbCount + 2}
                  </span>
                )}
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="p-3 border-t border-black/20">
            <Link href="/pricing" className="block text-center text-xs bg-afd-yellow text-black font-bold py-2 px-3 rounded-lg hover:bg-afd-yellow-hover transition-colors">
              Upgrade →
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-x-hidden">
          {/* Vehicle Title Bar */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
            <div className="w-12 h-8 flex items-center justify-center">
              <img
                src={`/images/logos/${makeSlug}.png`}
                alt={vehicle.make}
                className="max-h-8 max-w-full object-contain opacity-70"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">{vehicle.make} {vehicle.model} — {vehicle.variant}</h1>
              <p className="text-xs text-gray-500">{vehicle.year}</p>
            </div>
          </div>

          <div className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LEFT COLUMN: Maintenance Programs + Quick Access */}
            <div className="flex flex-col gap-5">

              {/* Maintenance Programs */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900 text-sm">Maintenance Programs</h2>
                </div>
                <div className="p-4">
                  <button
                    onClick={openModal}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 hover:border-afd-yellow/50 transition-colors group"
                  >
                    <span>Select Service System (Europe / US)</span>
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-gray-400" />
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-afd-navy" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Frequently Used */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900 text-sm">Frequently Used</h2>
                </div>
                <div className="p-4 space-y-2">
                  <button
                    onClick={openModal}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-left hover:border-red-400 transition-colors"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="text-sm text-red-700 font-medium">Important! Read before working on this vehicle — Electrical Safety</span>
                    <Lock className="w-3.5 h-3.5 text-red-400 ml-auto shrink-0" />
                  </button>
                  <LockedItem label="Flat-rate labour times" icon={<Clock className="w-4 h-4 text-gray-500" />} onClick={openModal} />
                  <LockedItem label="Adjustment & settings data" icon={<Settings className="w-4 h-4 text-gray-500" />} onClick={openModal} />
                  <LockedItem label="Torque specifications" icon={<Settings className="w-4 h-4 text-gray-500" />} onClick={openModal} />
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900 text-sm">QUICK LINKS</h2>
                </div>
                <div className="p-4 space-y-2">
                  {quickLinks.map(({ label, icon }) => (
                    <button key={label} onClick={openModal} className="flex items-center gap-3 text-sm text-afd-blue hover:text-afd-navy transition-colors group">
                      <span className="text-lg">{icon}</span>
                      <span className="group-hover:underline">{label}</span>
                      <Lock className="w-3 h-3 text-gray-400 ml-auto" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: DTC Search + SmartPACK */}
            <div className="flex flex-col gap-5">

              {/* DTC Code Search */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900 text-sm">Fault Code / DTC Search</h2>
                </div>
                <div className="p-4">
                  <button
                    onClick={openModal}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-afd-blue/50 transition-colors group"
                  >
                    <Search className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400 flex-1 text-left">Search one or more fault codes (e.g. P0300, P0420)</span>
                    <Lock className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                  <p className="text-xs text-gray-400 mt-2 text-center">Full DTC library available with subscription</p>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900 text-sm">VEHICLE DETAILS</h2>
                </div>
                <div className="p-5 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Engine Code</div>
                    <div className="font-bold text-gray-900">{vehicle.engineCode}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Engine Spec</div>
                    <div className="font-bold text-gray-900 text-sm">{vehicle.engineSpec}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Year Range</div>
                    <div className="font-bold text-gray-900">{vehicle.engineYear}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Make</div>
                    <div className="font-bold text-gray-900">{vehicle.make}</div>
                  </div>
                </div>
              </div>

              {/* SmartPACK™ */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-gray-900 text-sm">SmartPACK™</h2>
                  <span className="text-xs text-gray-400">Powered by ALLDATA + Identifix</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { label: "Technical Service Bulletins (TSB)", count: vehicle.tsbCount },
                    { label: "Safety Recalls", count: vehicle.recallCount },
                    { label: "Confirmed Fixes (Identifix)", count: null },
                  ].map(({ label, count }) => (
                    <button
                      key={label}
                      onClick={openModal}
                      className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors group text-left"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-afd-navy">{label}</span>
                      <div className="flex items-center gap-2">
                        {count !== null ? (
                          <span className="bg-afd-yellow text-black text-xs font-bold px-2 py-0.5 rounded-full min-w-[1.5rem] text-center">{count}</span>
                        ) : (
                          <Lock className="w-3.5 h-3.5 text-gray-400" />
                        )}
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-afd-navy" />
                      </div>
                    </button>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-gray-100">
                {techCategories.map(({ id, label, icon, items }) => (
                  <div key={id} className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base">{icon}</span>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{label}</span>
                    </div>
                    <div className="space-y-2">
                      {items.map(item => (
                        <button key={item} onClick={openModal} className="block text-xs text-afd-blue hover:text-afd-navy hover:underline transition-colors text-left w-full">
                          {item}
                        </button>
                      ))}
                    </div>
                    <button onClick={openModal} className="mt-3 w-6 h-6 bg-gray-100 hover:bg-afd-yellow/20 rounded-full flex items-center justify-center transition-colors">
                      <Lock className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upgrade Banner */}
          <div className="mx-4 lg:mx-6 mb-6 bg-afd-navy rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Unlock Full Data for {vehicle.make} {vehicle.model}</h3>
              <p className="text-afd-slate text-sm">OEM repair procedures, wiring diagrams, DTC library, TSBs and more — all from £99/mo.</p>
            </div>
            <Link href="/pricing" className="shrink-0 px-6 py-3 bg-afd-yellow text-black font-bold rounded-xl hover:bg-afd-yellow-hover transition-all flex items-center gap-2">
              View Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
