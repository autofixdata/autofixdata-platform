import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ShieldAlert, Activity, Search, Database } from "lucide-react";

export default function Diagnostics() {
  return (
    <Layout>
      <SEO 
        title="DTC Code Library & Diagnostic Data | Auto Fix Data Workshop Database"
        description="Access the complete OBD2 DTC code library — P0001 to U codes, manufacturer-specific codes, freeze frame data and live diagnostic support. Professional workshop access."
      />
      
      <section className="bg-afd-dark py-24 px-6 border-b border-afd-border relative overflow-hidden">
         {/* Abstract background image */}
         <div 
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center mix-blend-screen"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/diagnostics-abstract.png)` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-afd-dark via-afd-dark/90 to-transparent z-0"></div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold tracking-wider mb-6 border border-red-500/30">
              <ShieldAlert className="w-4 h-4" /> DIAGNOSTIC DATA
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Master the Code.<br/>Fix the Fault.
            </h1>
            <p className="text-xl text-afd-slate mb-8 leading-relaxed">
              Don't just read the code—understand it. Access the industry's most comprehensive library of OBD2 and manufacturer-specific Diagnostic Trouble Codes (DTCs), complete with step-by-step testing procedures.
            </p>
            <Link href="/free-trial" className="inline-block px-8 py-4 bg-afd-yellow text-black font-bold rounded-xl hover:bg-afd-yellow-hover transition-all text-lg shadow-lg shadow-afd-yellow/20">
              Access DTC Library Free
            </Link>
          </div>
          <div className="hidden lg:block relative">
            {/* Mockup UI representation */}
            <div className="bg-afd-navy rounded-2xl border border-afd-border p-6 shadow-2xl shadow-black/50 font-mono">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <Search className="w-5 h-5 text-afd-slate" />
                <input type="text" placeholder="Enter Code (e.g. P0300)" className="bg-transparent text-white focus:outline-none w-full placeholder:text-afd-slate/50" readOnly value="P0420" />
              </div>
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                  <div className="text-red-400 font-bold text-xl mb-1">P0420</div>
                  <div className="text-white text-sm">Catalyst System Efficiency Below Threshold (Bank 1)</div>
                </div>
                <div className="bg-afd-dark p-4 rounded-lg border border-white/5">
                  <div className="text-afd-slate text-xs mb-2">COMMON CAUSES</div>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li>- Faulty Catalytic Converter (Bank 1)</li>
                    <li>- Exhaust Leak before Catalyst</li>
                    <li>- Faulty O2 Sensor (Bank 1, Sensor 2)</li>
                    <li>- Engine Misfire / Running Rich</li>
                  </ul>
                </div>
                <div className="bg-afd-blue/20 border border-afd-blue/30 p-4 rounded-lg">
                  <div className="text-afd-blue font-bold text-xs mb-2 flex items-center gap-2"><Activity className="w-4 h-4"/> LIVE DATA PIDS TO CHECK</div>
                  <div className="text-white text-sm">O2S B1 S2 Volts: Check for switching vs steady ~0.45V</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-afd-navy mb-4">Beyond Generic Scanners</h2>
            <p className="text-lg text-afd-text max-w-2xl mx-auto">A generic code reader gives you a number. Auto Fix Data gives you the diagnostic strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-afd-light p-8 rounded-2xl border border-gray-100">
              <Database className="w-10 h-10 text-afd-blue mb-6" />
              <h3 className="text-xl font-bold text-afd-navy mb-3">OEM-Specific Codes</h3>
              <p className="text-afd-text leading-relaxed">
                Go beyond generic P0xxx codes. We provide detailed breakdowns for manufacturer-specific P1xxx codes, U-codes (Network), B-codes (Body), and C-codes (Chassis).
              </p>
            </div>
            <div className="bg-afd-light p-8 rounded-2xl border border-gray-100">
              <Activity className="w-10 h-10 text-afd-blue mb-6" />
              <h3 className="text-xl font-bold text-afd-navy mb-3">Test Procedures</h3>
              <p className="text-afd-text leading-relaxed">
                Step-by-step diagnostic flowcharts exactly as the dealer technicians see them. Know exactly which wire to probe and what voltage you should see.
              </p>
            </div>
            <div className="bg-afd-light p-8 rounded-2xl border border-gray-100">
              <ShieldAlert className="w-10 h-10 text-afd-blue mb-6" />
              <h3 className="text-xl font-bold text-afd-navy mb-3">Real-World Fixes</h3>
              <p className="text-afd-text leading-relaxed">
                Via our Identifix integration, see the most common verified fixes for specific code combinations on exact vehicle models, saving hours of diag time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
