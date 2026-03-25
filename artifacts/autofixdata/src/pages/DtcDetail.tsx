import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { useRoute } from "wouter";
import { getDtcByCode } from "@/lib/dtcData";
import { AlertTriangle, Settings, Zap, ShieldAlert, CheckCircle2, FileText } from "lucide-react";

export default function DtcDetail() {
  const [match, params] = useRoute("/dtc/:code");
  const codeParam = params?.code?.toUpperCase() || "P0000";

  const dtc = getDtcByCode(codeParam) || {
    code: codeParam,
    title: "Diagnostic Trouble Code (Generic)",
    description: "The Engine Control Module (ECM) has detected a malfunction related to this generic OBD-II fault code.",
    symptoms: ["Check Engine Light ON", "Possible decrease in fuel economy", "Engine performance issues"],
    causes: ["Defective sensor or switch", "Wiring or connector issue", "Mechanical failure in associated system"],
    severity: "Medium"
  };

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `How to Fix ${dtc.code}: ${dtc.title}`,
    "description": dtc.description,
    "author": { "@type": "Organization", "name": "Auto Fix Data" }
  });

  return (
    <Layout>
      <SEO
        title={`Fix ${dtc.code}: ${dtc.title} — Symptoms & Causes | Auto Fix Data`}
        description={`Learn what OBD2 code ${dtc.code} means, its symptoms, common causes, and how to access the OEM wiring diagram to fix it.`}
        schema={schema}
        breadcrumb={[
          { name: "Diagnostic Trouble Codes", url: "https://autofixdata.net/dtc" },
          { name: dtc.code, url: `https://autofixdata.net/dtc/${dtc.code}` }
        ]}
      />

      {/* Hero */}
      <div className="bg-afd-navy py-12 px-6 border-b border-black/20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start gap-6">
          <div className="hidden md:flex w-20 h-20 bg-afd-yellow/10 rounded-2xl items-center justify-center shrink-0">
            <AlertTriangle className="w-10 h-10 text-afd-yellow" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-afd-yellow text-black font-black px-3 py-1.5 rounded-md text-sm tracking-widest">{dtc.code}</span>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${dtc.severity === "Critical" ? "bg-red-500/20 text-red-200" :
                  dtc.severity === "High" ? "bg-orange-500/20 text-orange-200" :
                    "bg-yellow-500/20 text-yellow-200"
                }`}>
                {dtc.severity} Severity
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{dtc.title}</h1>
            <p className="text-lg text-afd-slate max-w-3xl leading-relaxed">{dtc.description}</p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* Left Content Column */}
          <div className="xl:col-span-2 space-y-8">
            {/* Symptoms */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-afd-navy mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-afd-blue" />
                Common Symptoms of {dtc.code}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dtc.symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-afd-navy mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-afd-yellow" />
                What Causes the {dtc.code} Code?
              </h2>
              <ul className="space-y-4">
                {dtc.causes.map((cause, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <ShieldAlert className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SEO Content block for indexing */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 prose prose-blue max-w-none text-gray-600 prose-headings:text-afd-navy">
              <h3>How serious is the {dtc.code} code?</h3>
              <p>Because this code has a <strong>{dtc.severity.toLowerCase()} severity level</strong>, it is highly recommended to address it promptly. Driving with an active {dtc.code} fault can lead to secondary component failures, decreased fuel economy, and potential internal engine damage depending on the root cause and exactly which circuits are compromised.</p>

              <h3>How do you definitively diagnose and fix {dtc.code}?</h3>
              <p>To accurately diagnose the {dtc.code} fault code and avoid the "parts cannon" approach, you must test the specific circuits and sensors associated with the system. Guessing which parts to replace often leads to wasted money.</p>
              <p>You need the <strong>exact OEM wiring diagram and diagnostic test procedures</strong> for your specific vehicle matrix to pinpoint the electrical, mechanical, or ECU failure accurately. Create an Auto Fix Data account to instantly pull the factory diagrams for this fault.</p>
            </div>
          </div>

          {/* Right Sticky Column - Aggressive Conversion Focus */}
          <div className="xl:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border-2 border-afd-yellow shadow-2xl overflow-hidden">
              <div className="bg-afd-navy p-6 text-center border-b-4 border-afd-yellow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-afd-blue/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <FileText className="w-12 h-12 text-white mx-auto mb-4 relative z-10" />
                <h3 className="text-2xl font-black text-white mb-2 relative z-10">Fix {dtc.code} Now</h3>
                <p className="text-afd-slate text-sm font-medium relative z-10">Access the OEM repair manual and interactive wiring diagram to diagnose this exact code.</p>
              </div>

              <div className="p-6 bg-gray-50/50">
                <ul className="space-y-3 mb-8">
                  {[
                    "Pin-to-pin wiring diagrams",
                    "Component testing steps",
                    "Technical Service Bulletins",
                    "Identifix confirmed fixes"
                  ].map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-gray-800 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="w-full mx-auto overflow-hidden">
                  <iframe
                    src="https://link.autodatalogin.com/widget/form/4tQbweI60VyYW02nlcVf"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px" }}
                    className="min-h-[600px]"
                    title="Start Free Trial Form"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
