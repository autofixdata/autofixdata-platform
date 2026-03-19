import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Auto Fix Data Subscription",
    "description": "Professional automotive workshop repair database subscription.",
    "brand": {
      "@type": "Brand",
      "name": "Auto Fix Data"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "3",
      "lowPrice": "99",
      "highPrice": "299",
      "priceCurrency": "USD"
    }
  });

  return (
    <Layout>
      <SEO 
        title="Workshop Database Subscription Plans & Pricing | Auto Fix Data"
        description="Compare Auto Fix Data subscription plans for individual technicians, independent garages and fleet operations. 7-day free trial. No credit card required."
        schema={jsonLd}
      />
      
      <section className="bg-afd-navy pt-20 pb-32 px-6 text-center dark-section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-afd-dark z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Simple, Transparent<br/><span className="text-afd-yellow">Workshop Pricing</span></h1>
          <p className="text-xl text-afd-slate max-w-3xl mx-auto mb-10">
            One subscription. Five professional databases. Choose the plan that fits your workshop size.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 relative z-20 -mt-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-afd-navy mb-2">Individual Tech</h3>
              <p className="text-afd-slate text-sm mb-6 h-10">For solo mechanics and mobile technicians.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-afd-navy">£99</span>
                <span className="text-afd-slate">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">1 User License</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">All 5 Databases Included</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">OEM Repair Procedures</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">Standard Email Support</span></li>
              </ul>
              <Link href="/free-trial" className="w-full block text-center py-4 rounded-xl font-bold border-2 border-afd-navy text-afd-navy hover:bg-afd-navy hover:text-white transition-colors">
                Start Free Trial
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="bg-afd-navy rounded-2xl shadow-2xl border border-afd-yellow p-8 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-afd-yellow text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Independent Garage</h3>
              <p className="text-afd-slate text-sm mb-6 h-10">For workshops with up to 5 bays/technicians.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">£199</span>
                <span className="text-afd-slate">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-afd-yellow shrink-0 mt-0.5" /><span className="text-sm text-white font-medium">Up to 5 User Licenses</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-afd-yellow shrink-0 mt-0.5" /><span className="text-sm text-white font-medium">All 5 Databases Included</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-afd-yellow shrink-0 mt-0.5" /><span className="text-sm text-white font-medium">Full Interactive Wiring Diagrams</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-afd-yellow shrink-0 mt-0.5" /><span className="text-sm text-white font-medium">Estimating & Quoting Tools</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-afd-yellow shrink-0 mt-0.5" /><span className="text-sm text-white font-medium">Priority Support</span></li>
              </ul>
              <Link href="/free-trial" className="w-full block text-center py-4 rounded-xl font-bold bg-afd-yellow text-black hover:bg-afd-yellow-hover transition-colors shadow-lg shadow-afd-yellow/20">
                Start Free Trial
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-afd-navy mb-2">Fleet & Dealership</h3>
              <p className="text-afd-slate text-sm mb-6 h-10">For large operations and dealership groups.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-afd-navy">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">Unlimited User Licenses</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">API Integration Access</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">DMS Export Capability</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-sm font-medium">Dedicated Account Manager</span></li>
              </ul>
              <Link href="/contact" className="w-full block text-center py-4 rounded-xl font-bold bg-gray-100 text-afd-navy hover:bg-gray-200 transition-colors">
                Contact Sales
              </Link>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
