import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { TOP_DTC_CODES } from "@/lib/dtcData";
import { Search, AlertCircle, ChevronRight } from "lucide-react";

export default function DtcDirectory() {
  return (
    <Layout>
      <SEO 
        title="OBD-II Fault Codes (DTC) Directory & Symptoms | Auto Fix Data"
        description="Search our massive database of OBD2 engine fault codes. Find symptoms, common causes, and repair procedures for P0420, P0300, and thousands more."
        breadcrumb={[
          { name: "Diagnostic Trouble Codes", url: "https://autofixdata.com/dtc" }
        ]}
      />
      
      <div className="bg-afd-navy py-16 px-6 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <AlertCircle className="w-12 h-12 text-afd-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Fault Code <span className="text-afd-yellow">Directory</span>
          </h1>
          <p className="text-xl text-afd-slate max-w-2xl mx-auto">
            Browse our comprehensive database of OBD-II Diagnostic Trouble Codes (DTCs). Find symptoms, causes, and the specific OEM diagrams required to fix them.
          </p>
        </div>
      </div>

      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-afd-navy mb-8 flex items-center gap-3 border-b border-gray-100 pb-4">
               <Search className="w-6 h-6 text-afd-blue" />
               Most Searched Fault Codes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOP_DTC_CODES.map((dtc) => (
                <Link 
                  key={dtc.code} 
                  href={`/dtc/${dtc.code}`}
                  className="p-5 rounded-xl border border-gray-200 hover:border-afd-blue hover:shadow-md transition-all group flex flex-col justify-between bg-white h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-lg font-black text-afd-navy">{dtc.code}</span>
                       <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                         dtc.severity === "Critical" ? "bg-red-100 text-red-700" :
                         dtc.severity === "High" ? "bg-orange-100 text-orange-700" :
                         dtc.severity === "Medium" ? "bg-yellow-100 text-yellow-800" :
                         "bg-gray-100 text-gray-700"
                       }`}>
                         {dtc.severity} Severity
                       </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">{dtc.title}</h3>
                  </div>
                  <div className="mt-4 flex items-center text-afd-blue text-sm font-bold group-hover:underline">
                    View Diagnosis & Diagrams <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
               <p className="text-afd-navy font-medium mb-4">Don't see your code? Our full database contains over 50,000 specific OEM codes.</p>
               <Link href="/free-trial" className="inline-block bg-afd-yellow text-black px-6 py-3 rounded-xl font-bold hover:bg-afd-yellow-hover">
                 Search Full Database Free
               </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
