import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

const articles = [
  { cat: "DTC Codes", title: "P0300 Random Misfire: Complete Diagnostic Guide for Workshop Technicians", date: "Oct 12, 2024" },
  { cat: "Wiring Diagrams", title: "How to Read Wiring Diagrams: A Professional Technician's Guide", date: "Oct 05, 2024" },
  { cat: "Product Updates", title: "ALLDATA vs AutoData: Which Workshop Database Is Right for Your Garage?", date: "Sep 28, 2024" },
  { cat: "DTC Codes", title: "Top 10 DTC Codes in 2024: What Your Workshop Needs to Know", date: "Sep 15, 2024" },
  { cat: "OEM Data", title: "TSB vs Recall: Understanding Technical Service Bulletins", date: "Sep 02, 2024" },
  { cat: "Workshop Tips", title: "How to Reduce Diagnostic Time by 40% with Better Repair Data", date: "Aug 20, 2024" }
];

export default function Blog() {
  return (
    <Layout>
      <SEO 
        title="Workshop Tips, Repair Data & Industry News | Auto Fix Data Blog"
        description="Professional automotive repair advice, DTC code guides, wiring diagram tutorials and industry news for workshop technicians and garage managers."
      />
      
      <section className="bg-afd-navy py-16 px-6 text-center dark-section border-b border-afd-border">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Workshop Intelligence</h1>
        <p className="text-xl text-afd-slate max-w-2xl mx-auto">
          The Auto Fix Data Blog
        </p>
      </section>

      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
             {["All", "DTC Codes", "Wiring Diagrams", "Workshop Tips", "OEM Data"].map(tag => (
               <span key={tag} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-bold text-afd-navy cursor-pointer hover:border-afd-yellow transition-colors">
                 {tag}
               </span>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
                <div className="h-48 bg-gray-100 border-b border-gray-200"></div> {/* Image placeholder */}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-afd-blue uppercase tracking-wider mb-2">{article.cat}</span>
                  <h3 className="text-xl font-bold text-afd-navy mb-4 group-hover:text-afd-blue transition-colors">
                    {article.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-afd-slate">
                    <span>{article.date}</span>
                    <span className="font-bold text-afd-yellow group-hover:underline cursor-pointer">Read Article</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
