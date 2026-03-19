import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ProductCard } from "@/components/SharedSections";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Products() {
  return (
    <Layout>
      <SEO 
        title="Professional Workshop Repair Databases | Auto Fix Data"
        description="Compare ALLDATA, AutoData, Haynes Pro, Mitchell1 and Identifix — all available under one Auto Fix Data subscription. OEM data for 150M+ vehicles."
      />
      
      <section className="bg-afd-navy pt-20 pb-16 px-6 text-center dark-section">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Five Professional Databases.<br/><span className="text-afd-yellow">One Subscription.</span></h1>
        <p className="text-xl text-afd-slate max-w-3xl mx-auto mb-10">
          We've partnered with the industry's leading data providers to give your workshop unparalleled coverage without the cost of multiple contracts.
        </p>
      </section>

      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <ProductCard 
              brand="ALLDATA" color="bg-orange-500 text-white" 
              tagline="OEM Repair Data by AutoZone" 
              description="The industry standard for unedited OEM repair procedures, TSBs, and specifications direct from the manufacturers. Essential for complex mechanical repairs."
              link="/alldata"
            />
            <ProductCard 
              brand="AutoData" color="bg-blue-600 text-white" 
              tagline="Technical Workshop Data" 
              description="Comprehensive service intervals, technical specifications, and interactive component locations. The go-to for standard servicing and quick reference."
              link="/autodata"
            />
            <ProductCard 
              brand="Haynes Pro" color="bg-red-600 text-white" 
              tagline="Professional Manuals" 
              description="Electronic workshop manuals combining OEM data with smart diagnostics, VESA wiring diagrams, and guided test procedures."
              link="/haynes-pro"
            />
            <ProductCard 
              brand="Mitchell1" color="bg-blue-800 text-white" 
              tagline="ProDemand Diagnostics" 
              description="Advanced real-world repair data with SureTrack® diagnostics, color wiring diagrams, and component testing procedures."
              link="/mitchell1"
            />
            <ProductCard 
              brand="Identifix" color="bg-purple-600 text-white" 
              tagline="Direct-Hit Fixes" 
              description="The largest database of real-world, confirmed fixes submitted by professional technicians. Perfect for speeding up difficult diagnostic times."
              link="/identifix"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-100 bg-afd-navy text-white">
              <h2 className="text-2xl font-bold">Feature Comparison</h2>
              <p className="text-afd-slate">All features included in your Auto Fix Data subscription.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-afd-light border-b border-gray-200">
                    <th className="p-4 font-bold text-afd-navy">Feature Area</th>
                    <th className="p-4 font-bold text-afd-navy text-center">Primary Provider</th>
                    <th className="p-4 font-bold text-afd-navy text-center">Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: "Unedited OEM Repair Procedures", provider: "ALLDATA / Mitchell1" },
                    { feature: "Interactive Colour Wiring Diagrams", provider: "Haynes Pro / Mitchell1" },
                    { feature: "Diagnostic Trouble Codes (DTCs)", provider: "All Providers" },
                    { feature: "Confirmed Real-World Fixes", provider: "Identifix / Mitchell1" },
                    { feature: "Technical Service Bulletins (TSBs)", provider: "ALLDATA" },
                    { feature: "Service & Maintenance Schedules", provider: "AutoData" },
                    { feature: "Component Locations & Pinouts", provider: "AutoData / Haynes Pro" },
                    { feature: "Torque Specifications", provider: "All Providers" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-4 text-afd-text font-medium">{row.feature}</td>
                      <td className="p-4 text-afd-slate text-center text-sm">{row.provider}</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-gray-50 flex justify-center border-t border-gray-100">
              <Link href="/pricing" className="bg-afd-yellow text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-afd-yellow-hover transition-colors">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
