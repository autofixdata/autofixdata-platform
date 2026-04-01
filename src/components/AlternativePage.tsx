import Link from '@/components/LocalizedLink';
import { AlternativeHero } from "@/components/SharedSections";
import { CheckCircle2, XCircle, ArrowRight, Zap, TrendingDown } from "lucide-react";

export function AlternativePageTemplate({ 
  dict,
  lang,
  competitorId,
  competitorName, 
  competitorPrice = "£150+",
}: {
  dict: any,
  lang: string,
  competitorId: 'alldata' | 'autodata' | 'haynespro' | 'identifix' | 'mitchell1',
  competitorName: string,
  competitorPrice?: string,
}) {
  const alt = dict.alternatives || { template: {}, [competitorId]: {} };
  const tpl = alt.template || {};
  const spec = alt[competitorId] || {};

  const tableData = [
    { ...spec.t1, competitor: false },
    { ...spec.t2, competitor: false },
    { ...spec.t3, competitor: false },
    { ...spec.t4, competitor: false },
    { ...spec.t5, competitor: true },
    { ...spec.t6, competitor: true }
  ].filter(t => t.feature); // Ensure valid items

  const rc = (str?: string) => str ? str.replace(/\{C\}/g, competitorName).replace(/\{P\}/g, competitorPrice).replace(/\{W\}/g, spec.weakness || '') : '';

  return (
    <>
      <AlternativeHero 
        brand={competitorName}
        h1={rc(tpl.heroH1) || `Stop Overpaying for ${competitorName}`}
        desc={rc(tpl.heroDesc) || `Why are you paying ${competitorPrice} a month for limited data? Auto Fix Data delivers OEM-verified repair data, wiring diagrams, DTC codes and TSBs for 150M+ vehicles at a fraction of the cost.`}
      />

      <section className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto">
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16 bg-red-50 p-8 rounded-3xl border border-red-100">
             <div className="flex-1">
               <div className="flex items-center gap-3 mb-4">
                 <TrendingDown className="w-8 h-8 text-red-500" />
                 <h2 className="text-3xl font-extrabold text-afd-navy">{rc(tpl.problemTitle) || `The ${competitorName} Problem`}</h2>
               </div>
               <p className="text-lg text-gray-700 leading-relaxed mb-6">
                 {rc(tpl.problemDesc) || `${competitorName} relies on legacy databases and charges premium enterprise prices. Workshops constantly hit paywalls or find they completely lack ${spec.weakness}.`}
               </p>
               <Link href={`/${lang}/free-trial`} className="inline-flex items-center gap-2 bg-afd-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-afd-blue transition-colors">
                 {tpl.tryInstead || "Try Auto Fix Data Instead"} <ArrowRight className="w-5 h-5" />
               </Link>
             </div>
             
             {/* Aggressive Price Block */}
             <div className="shrink-0 w-full md:w-[350px] bg-white rounded-2xl shadow-xl border-2 border-afd-yellow overflow-hidden relative">
               <div className="absolute top-0 right-0 bg-afd-yellow text-xs font-black px-3 py-1 rounded-bl-lg tracking-wider text-black">{tpl.nobrainer || "NO BRAINER"}</div>
               <div className="p-6 text-center border-b border-gray-100">
                 <div className="text-gray-400 font-bold uppercase text-sm mb-1">{rc(tpl.costLabel) || `${competitorName} Cost`}</div>
                 <div className="text-3xl font-black text-red-500 line-through decoration-red-300">{competitorPrice}{tpl.month || "/mo"}</div>
               </div>
               <div className="p-6 text-center bg-afd-navy text-white">
                 <div className="text-afd-yellow font-bold uppercase text-sm mb-1">{tpl.afdCostLabel || "Auto Fix Data Cost"}</div>
                 <div className="text-5xl font-black mb-2 flex justify-center items-start">
                    {lang === 'en' ? <span className="text-3xl mt-1">£</span> : <span className="text-3xl mt-1">€</span>}99<span className="text-lg font-normal text-gray-400 mt-auto mb-2">{tpl.month || "/mo"}</span>
                 </div>
                 <div className="text-sm font-medium text-gray-300">{tpl.allFeatures || "All features. Zero hidden fees."}</div>
               </div>
             </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-afd-navy mb-4">{tpl.headToHead || "Head-to-Head Comparison"}</h2>
            <p className="text-gray-500 font-medium">{tpl.seeMissing || "See exactly what you've been missing."}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden mb-20 relative">
            <div className="absolute top-0 left-1/3 w-1/3 h-full bg-afd-yellow/5 pointer-events-none"></div>
            <div className="grid grid-cols-3 bg-afd-navy border-b-4 border-afd-yellow">
              <div className="p-6 font-bold text-white uppercase tracking-wider text-sm flex items-center">{tpl.featureCol || "Feature Capability"}</div>
              <div className="p-6 font-black text-afd-yellow text-center text-xl flex items-center justify-center">{tpl.afdCol || "Auto Fix Data"}</div>
              <div className="p-6 font-bold text-gray-400 text-center flex items-center justify-center">{competitorName}</div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {tableData.map((row: any, i) => (
                <div key={i} className="grid grid-cols-3 hover:bg-gray-50 transition-colors relative">
                  <div className="p-4 md:p-6 text-gray-800 font-bold text-sm md:text-base flex flex-col justify-center gap-1">
                    {row.feature}
                    {row.missing && !row.competitor && (
                      <span className="text-xs text-red-500 font-semibold">{row.missing}</span>
                    )}
                  </div>
                  <div className="p-4 md:p-6 text-center flex items-center justify-center relative">
                    <CheckCircle2 className="w-8 h-8 text-green-500 drop-shadow-sm" />
                  </div>
                  <div className="p-4 md:p-6 text-center flex items-center justify-center bg-gray-50/50 border-l border-gray-100">
                    {row.competitor ? 
                      <CheckCircle2 className="w-6 h-6 text-gray-400" /> : 
                      <XCircle className="w-8 h-8 text-red-500 opacity-80 drop-shadow-sm" />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* GEO Optimization: Qualitative Summary block */}
      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[800px] mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl p-8 md:p-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-afd-yellow/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="flex items-center gap-3 mb-6 relative z-10">
             <Zap className="w-8 h-8 text-afd-yellow" />
             <h3 className="text-2xl font-extrabold text-afd-navy">{tpl.archHeading || "Our Architectural Advantage"}</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium relative z-10">
            {rc(tpl.archP1) || `When comparing diagnostic platforms, traditional single-source databases like ${competitorName} are severely limited to their proprietary legacy OEM partnerships.`}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed relative z-10">
            {tpl.archP2 || "Auto Fix Data's structural advantage lies in our unified intelligence aggregation. By simultaneously merging vast European OEM procedures, cross-referenced aftermarket TSBs, and real-world technician-verified fixes into a single powerful search index, mechanics diagnose cars 40% faster. When a complex DTC code is thrown, you aren't just given a vague definition—you are handed the complete, verified path to resolution."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-afd-navy px-6 text-center relative overflow-hidden">
         <div className="max-w-[1000px] mx-auto relative z-10">
            <h2 className="text-4xl font-extrabold text-white mb-12">{tpl.switchHeading || "Switching is effortless."}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
                <div className="text-afd-yellow font-black text-2xl mb-3">{tpl.step1Title || "01. Sign Up Free"}</div>
                <p className="text-gray-300 text-base leading-relaxed font-medium">{tpl.step1Desc || "Start your 7-day free trial immediately. No credit card required, instant access to all 150M+ VINs."}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
                <div className="text-afd-yellow font-black text-2xl mb-3">{tpl.step2Title || "02. Compare Us"}</div>
                <p className="text-gray-300 text-base leading-relaxed font-medium">{rc(tpl.step2Desc) || `Run Auto Fix Data side-by-side with ${competitorName} in your bay for a week on real repairs.`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
                <div className="text-afd-yellow font-black text-2xl mb-3">{tpl.step3Title || "03. Save Cash"}</div>
                <p className="text-gray-300 text-base leading-relaxed font-medium">{tpl.step3Desc || "Cancel your massive legacy contract and save thousands of pounds per year without sacrificing data."}</p>
              </div>
            </div>
            <div className="mt-16">
              <Link href={`/${lang}/free-trial`} className="inline-flex items-center gap-2 bg-afd-yellow text-black px-10 py-5 rounded-xl font-black text-xl hover:bg-afd-yellow-hover hover:scale-105 transition-all shadow-xl shadow-afd-yellow/20">
                {tpl.ctaButton || "Start Your Free Trial Now"} <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
         </div>
      </section>
    </>
  );
}
