import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ShieldAlert, Activity, Search, Database, Zap, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { buildProductSchema, buildFaqSchema, FREE_TRIAL_OFFER, SITE_URL } from "@/lib/richSnippets";

const codeTypes = [
  { code: "P-Codes", range: "P0000–P3999", name: "Powertrain", desc: "Engine, transmission, fuel system and emissions. The most commonly retrieved codes in workshop use.", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  { code: "B-Codes", range: "B0000–B3999", name: "Body", desc: "Body control modules, airbag, seat control, climate, windows and security systems.", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { code: "C-Codes", range: "C0000–C3999", name: "Chassis", desc: "ABS, traction control, ESC, ride height, steering and suspension control codes.", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { code: "U-Codes", range: "U0000–U3999", name: "Network/CAN Bus", desc: "Controller Area Network faults, module communication failures and gateway errors.", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
];

const faqs = [
  { q: "What DTC codes are covered?", a: "Auto Fix Data covers all OBD2 P-codes (P0000–P3999), B-codes (Body), C-codes (Chassis), U-codes (Network), and thousands of manufacturer-specific codes from all major OEMs." },
  { q: "Do you provide real-world fix data alongside DTC codes?", a: "Yes. Through our Identifix Direct-Hit integration, each DTC is cross-referenced with real-world confirmed repairs submitted by professional technicians, showing you the most common verified fix before you start testing." },
  { q: "How current is the DTC database?", a: "The database is updated daily from ALLDATA, AutoData, Haynes Pro, Mitchell1 and Identifix. New manufacturer-specific codes are added as they are issued by OEMs." },
  { q: "Can I look up freeze frame data?", a: "Yes. Where the OEM provides freeze frame parameters for a specific code, we display the expected sensor values at the time the code was set — critical for intermittent fault diagnosis." },
  { q: "Is the diagnostic flowchart data OEM-sourced?", a: "Yes. All diagnostic flowcharts are sourced directly from ALLDATA and Haynes Pro OEM data feeds. You see the exact decision trees that dealer technicians use." },
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

export default function Diagnostics() {
  const productSchema = JSON.stringify(buildProductSchema({
    name: "DTC Code Library & Diagnostic Data — Auto Fix Data",
    description: "Access the complete OBD2 and OEM-specific DTC library — P, B, C and U codes with diagnostic flowcharts, freeze frame data and real-world confirmed fixes. 7-day free trial.",
    url: `${SITE_URL}/diagnostics`,
    offers: [FREE_TRIAL_OFFER],
  }));
  const faqSchema = JSON.stringify(buildFaqSchema(faqs));
  const breadcrumb = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Diagnostics & DTC Library", "item": `${SITE_URL}/diagnostics` }
    ]
  });

  return (
    <Layout>
      <SEO
        title="Professional DTC Code Library & Diagnostic Data | Auto Fix Data"
        description="Access the complete OBD2 and OEM-specific DTC library — P, B, C and U codes with diagnostic flowcharts, freeze frame data, live PIDs and real-world confirmed fixes. Free 7-day trial."
        schema={productSchema + faqSchema + breadcrumb}
      />

      {/* HERO */}
      <section className="bg-afd-dark py-24 px-6 border-b border-afd-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-afd-dark via-afd-dark/90 to-transparent z-0"></div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold tracking-wider mb-6 border border-red-500/30">
              <ShieldAlert className="w-4 h-4" /> DIAGNOSTIC DATA
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Master the Code.<br />Fix the Fault.
            </h1>
            <p className="text-xl text-afd-slate mb-8 leading-relaxed">
              Don't just read the code — understand it. Access the industry's most comprehensive library of OBD2 and manufacturer-specific DTCs, complete with step-by-step diagnostic flowcharts and real-world fix data.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-8 py-4 bg-afd-yellow text-black font-bold rounded-xl hover:bg-afd-yellow-hover transition-all text-lg shadow-lg shadow-afd-yellow/20">
                Access DTC Library Free
              </Link>
              <Link href="/pricing" className="inline-block px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-lg border border-white/20">
                View Plans
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-afd-slate">
              <span><strong className="text-white">50M+</strong> DTC Records</span>
              <span><strong className="text-white">150+</strong> OEM Makes</span>
              <span><strong className="text-white">Daily</strong> Updates</span>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="bg-afd-navy rounded-2xl border border-afd-border p-6 shadow-2xl shadow-black/50 font-mono">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <Search className="w-5 h-5 text-afd-slate" />
                <span className="text-white text-sm">P0420 — Toyota Camry 2019</span>
              </div>
              <div className="space-y-3">
                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                  <div className="text-red-400 font-bold text-xl mb-1">P0420</div>
                  <div className="text-white text-sm">Catalyst System Efficiency Below Threshold (Bank 1)</div>
                </div>
                <div className="bg-afd-dark p-4 rounded-lg border border-white/5">
                  <div className="text-afd-slate text-xs mb-2 tracking-wider">COMMON CAUSES</div>
                  <ul className="text-white/80 text-sm space-y-1.5">
                    <li>• Faulty Catalytic Converter (Bank 1)</li>
                    <li>• Exhaust Leak before Catalyst</li>
                    <li>• Faulty O2 Sensor (B1, S2)</li>
                    <li>• Engine Misfire / Running Rich</li>
                  </ul>
                </div>
                <div className="bg-afd-blue/20 border border-afd-blue/30 p-4 rounded-lg">
                  <div className="text-afd-blue font-bold text-xs mb-2 flex items-center gap-2"><Activity className="w-4 h-4" /> IDENTIFIX: 847 CONFIRMED FIXES</div>
                  <div className="text-white text-sm">Most common: Replace CAT — 62% of cases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DTC TYPES */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-afd-navy mb-4">Complete Coverage of All Code Types</h2>
            <p className="text-afd-text text-lg max-w-2xl mx-auto">We cover every OBD2 code category including thousands of manufacturer-specific codes not available in generic scanners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codeTypes.map(({ code, range, name, desc, color }) => (
              <div key={code} className="p-6 rounded-2xl bg-afd-light border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border mb-4 ${color}`}>{code}</div>
                <div className="text-xs text-afd-slate mb-1 font-mono">{range}</div>
                <h3 className="text-lg font-bold text-afd-navy mb-2">{name}</h3>
                <p className="text-sm text-afd-text leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-afd-light border-y border-gray-100 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-afd-navy mb-4">Beyond Generic Scanners</h2>
            <p className="text-afd-text text-lg max-w-2xl mx-auto">A generic code reader gives you a number. Auto Fix Data gives you the complete diagnostic strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "OEM-Specific Codes", desc: "Go beyond generic P0xxx codes. Detailed breakdowns for manufacturer-specific P1xxx, U-codes, B-codes and C-codes for every major OEM." },
              { icon: Activity, title: "Diagnostic Flowcharts", desc: "Step-by-step diagnostic decision trees exactly as dealer technicians see them. Know exactly which wire to probe and what reading to expect." },
              { icon: ShieldAlert, title: "Real-World Confirmed Fixes", desc: "Via Identifix Direct-Hit, see the most common verified fixes for specific codes on exact vehicle models — before you start testing." },
              { icon: BookOpen, title: "Freeze Frame Data", desc: "See the exact sensor values captured at the moment a fault code was set, critical for reproducing and diagnosing intermittent faults." },
              { icon: Zap, title: "Live Data PIDs", desc: "Know exactly which live data parameters to monitor and what values indicate a passing or failing component during diagnosis." },
              { icon: Search, title: "TSB Cross-Reference", desc: "Automatically cross-reference any code against the latest Technical Service Bulletins — catch known manufacturer issues before spending hours diagnosing." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <Icon className="w-10 h-10 text-afd-blue mb-5" />
                <h3 className="text-lg font-bold text-afd-navy mb-3">{title}</h3>
                <p className="text-afd-text text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATABASE SOURCES */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-afd-navy mb-6">Sourced from 5 Industry Databases</h2>
              <p className="text-afd-text mb-6 leading-relaxed">Our DTC library aggregates data from ALLDATA, AutoData, Haynes Pro, Mitchell1 and Identifix — meaning you get OEM-verified diagnostic strategies alongside real-world repair confirmation. No other single platform gives you this depth.</p>
              <ul className="space-y-4">
                {[
                  "ALLDATA: OEM diagnostic flowcharts and TSB cross-reference",
                  "AutoData: Technical test values and component specifications",
                  "Haynes Pro: Step-by-step visual diagnostic guides",
                  "Mitchell1: SureTrack real-world repair data and waveform patterns",
                  "Identifix: 50M+ verified technician-submitted fixes by exact VIN",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-afd-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-afd-dark rounded-2xl p-8 border border-afd-border">
              <h3 className="text-white font-bold text-xl mb-6">Diagnostic Data Coverage</h3>
              <div className="space-y-5">
                {[
                  { label: "OBD2 DTC Records", value: "50M+" },
                  { label: "Manufacturer-Specific Codes", value: "500K+" },
                  { label: "Diagnostic Flowcharts", value: "2M+" },
                  { label: "Confirmed Real-World Fixes", value: "40M+" },
                  { label: "Vehicle Coverage", value: "1982–2026" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-afd-slate text-sm">{label}</span>
                    <span className="text-afd-yellow font-extrabold text-xl">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO: Cause & Effect Flowcharts */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-afd-navy rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <Activity className="w-96 h-96 -translate-y-20 translate-x-20" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-extrabold text-afd-yellow mb-6">How Diagnostic Flowcharts Dictate Cause & Effect</h2>
              <p className="text-lg text-afd-slate leading-relaxed mb-6">
                A basic code reader only provides the symptom (the effect), but professional diagnostics requires finding the root failure (the cause). Our OEM-sourced flowcharts provide the exact cause-and-effect logic used by dealership master technicians.
              </p>
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-2">Example: Diagnosing a P0420 (Catalyst Efficiency)</h3>
                  <p className="text-afd-slate leading-relaxed mb-4">
                    If code P0420 is triggered, a generic scanner implies replacing the catalytic converter. However, the OEM flowchart dictates checking the upstream and downstream O2 sensors first to verify the cause. 
                  </p>
                  <ul className="text-sm font-medium space-y-2 text-afd-yellow">
                    <li className="flex items-start gap-2"><span className="mt-0.5">→</span> <strong>Effect:</strong> The PCM sees voltage fluctuations from the downstream O2 sensor matching the upstream sensor.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">→</span> <strong>Action:</strong> Check for exhaust leaks before the catalyst, then monitor live O2 sensor PIDs (voltage).</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">→</span> <strong>Root Cause Identified:</strong> If sensors fall out of the 0.1V - 0.9V range, sensor failure is the cause, not the catalyst.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-afd-light border-t border-gray-100 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-extrabold text-afd-navy mb-10 text-center">Diagnostic Data FAQs</h2>
          <div className="space-y-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-afd-navy dark-section text-center px-6">
        <h2 className="text-3xl font-extrabold text-white mb-4">Stop Guessing. Start Diagnosing.</h2>
        <p className="text-afd-slate text-lg max-w-xl mx-auto mb-8">Access the full DTC library with flowcharts and real-world fix data — free for 7 days.</p>
        <Link href="/contact" className="inline-block px-8 py-4 bg-afd-yellow text-black font-bold rounded-xl text-lg hover:bg-afd-yellow-hover transition-all shadow-lg shadow-afd-yellow/20">
          Start Free Trial
        </Link>
      </section>
    </Layout>
  );
}
