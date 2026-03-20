import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { TrustBadges, FeatureTile, ProductCard, TestimonialCard } from "@/components/SharedSections";
import { ChevronRight, Wrench, ShieldAlert, Cpu, Activity, BookOpen, Clock } from "lucide-react";
import { useState } from "react";

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold text-afd-navy pr-8">{q}</h3>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronRight className="w-5 h-5 text-afd-blue rotate-90" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-afd-text leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const orgSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Auto Fix Data",
    "url": "https://autofixdata.com",
    "logo": "https://autofixdata.com/logo.png",
    "description": "Professional automotive workshop repair database platform providing OEM data, wiring diagrams, and DTC codes."
  });

  return (
    <Layout>
      <SEO 
        title="Professional Workshop Repair Database | Auto Fix Data"
        description="Access OEM repair data, wiring diagrams, DTC codes and TSBs for 150M+ vehicles. One subscription. Five industry databases. Trusted by 10,000+ professional workshops."
        schema={orgSchema}
      />

      {/* HERO SECTION */}
      <section className="relative bg-afd-navy pt-20 pb-32 overflow-hidden dark-section">
        {/* Abstract background image loaded from public/images */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)` }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-afd-navy/80 via-afd-navy/60 to-afd-navy z-0"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-[800px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                The Professional <br/>
                <span className="text-afd-yellow">Workshop Database</span>
              </h1>
              <p className="text-xl md:text-2xl text-afd-slate mb-10 leading-relaxed font-medium">
                OEM repair data, full-colour wiring diagrams, DTC codes and TSBs for 150M+ vehicles — <span className="text-white">all in one subscription.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/free-trial" className="px-8 py-4 bg-afd-yellow text-black font-bold rounded-xl text-lg hover:bg-afd-yellow-hover hover:scale-[1.02] transition-all text-center shadow-lg shadow-afd-yellow/20">
                  Start Free 7-Day Trial
                </Link>
                <Link href="/products" className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl text-lg border border-white/20 hover:bg-white/20 transition-all text-center backdrop-blur-sm">
                  See All Products
                </Link>
              </div>

              <TrustBadges />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-afd-dark py-12 border-y border-afd-border relative z-20 -mt-10 mx-6 md:mx-auto max-w-[1100px] rounded-2xl shadow-2xl shadow-black/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 divide-x divide-white/10">
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">150M+</div>
            <div className="text-sm font-semibold text-afd-slate uppercase tracking-wider">Vehicles Covered</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-afd-yellow mb-1">10k+</div>
            <div className="text-sm font-semibold text-afd-slate uppercase tracking-wider">Workshops</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">5</div>
            <div className="text-sm font-semibold text-afd-slate uppercase tracking-wider">Major Databases</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">7</div>
            <div className="text-sm font-semibold text-afd-slate uppercase tracking-wider">Global Markets</div>
          </div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW */}
      <section className="py-24 bg-afd-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-afd-navy mb-4">Five Databases. <span className="text-afd-blue">One Subscription.</span></h2>
            <p className="text-xl text-afd-text max-w-2xl mx-auto">Stop paying for multiple subscriptions. Auto Fix Data gives your garage access to the industry's leading OEM platforms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard 
              brand="ALLDATA" color="bg-orange-500 text-white" 
              tagline="OEM Repair Data" 
              description="The industry standard for unedited OEM repair procedures, TSBs, and specifications direct from the manufacturers."
              link="/alldata"
            />
            <ProductCard 
              brand="AutoData" color="bg-blue-600 text-white" 
              tagline="Technical Specs" 
              description="Comprehensive service intervals, technical specifications, and interactive component locations trusted across Europe."
              link="/autodata"
            />
            <ProductCard 
              brand="Haynes Pro" color="bg-red-600 text-white" 
              tagline="Workshop Manuals" 
              description="Professional electronic workshop manuals combining OEM data with smart diagnostics and VESA wiring diagrams."
              link="/haynes-pro"
            />
            <ProductCard 
              brand="Mitchell1" color="bg-blue-800 text-white" 
              tagline="ProDemand" 
              description="Advanced real-world repair data with SureTrack® diagnostics, color wiring diagrams, and component testing procedures."
              link="/mitchell1"
            />
            <ProductCard 
              brand="Identifix" color="bg-purple-600 text-white" 
              tagline="Direct-Hit" 
              description="The largest database of real-world, confirmed fixes submitted by professional technicians and verified by experts."
              link="/identifix"
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-afd-navy mb-4">Everything a Professional Workshop Needs</h2>
            <p className="text-xl text-afd-text max-w-2xl">The technical data you need to diagnose accurately and repair profitably, right at the bay.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureTile icon={Wrench} title="OEM Repair Procedures" desc="Step-by-step unedited factory repair manuals. Remove the guesswork with official torque specs and sequences." />
            <FeatureTile icon={Activity} title="Wiring Diagrams & Pinouts" desc="High-resolution, full-color interactive wiring schematics with detailed ECU connector pinouts." />
            <FeatureTile icon={ShieldAlert} title="DTC Code Library" desc="Complete library of OBD2 P-codes and manufacturer-specific diagnostic trouble codes with test steps." />
            <FeatureTile icon={BookOpen} title="Technical Service Bulletins" desc="Access the latest factory TSBs and recall information before you start diagnosing a common fault." />
            <FeatureTile icon={Clock} title="Maintenance Schedules" desc="Accurate OEM service intervals and timing belt/chain replacement schedules for quoting jobs." />
            <FeatureTile icon={Cpu} title="Live Diagnostic Support" desc="Integrates with your existing workflow to provide real-world fixes for complex electronic faults." />
          </div>
        </div>
      </section>

      {/* MAKES GRID */}
      <section className="py-20 bg-afd-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">Coverage Across All Major Makes</h2>
            <p className="text-afd-slate">OEM data for 150+ vehicle manufacturers — 1990 to present</p>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {[
              { name: "BMW", slug: "bmw" },
              { name: "Ford", slug: "ford" },
              { name: "VW", slug: "volkswagen" },
              { name: "Toyota", slug: "toyota" },
              { name: "Mercedes", slug: "mercedes-benz" },
              { name: "Vauxhall", slug: "vauxhall" },
              { name: "Renault", slug: "renault" },
              { name: "Peugeot", slug: "peugeot" },
              { name: "Audi", slug: "audi" },
              { name: "Honda", slug: "honda" },
              { name: "Nissan", slug: "nissan" },
              { name: "Hyundai", slug: "hyundai" },
              { name: "Kia", slug: "kia" },
              { name: "Volvo", slug: "volvo" },
              { name: "Skoda", slug: "skoda" },
              { name: "Land Rover", slug: "land-rover" },
              { name: "Fiat", slug: "fiat" },
              { name: "Mazda", slug: "mazda" },
              { name: "Mini", slug: "mini" },
              { name: "SEAT", slug: "seat" },
              { name: "Alfa Romeo", slug: "alfa-romeo" },
              { name: "Citroën", slug: "citroen" },
              { name: "Porsche", slug: "porsche" },
              { name: "Subaru", slug: "subaru" },
              { name: "Mitsubishi", slug: "mitsubishi" },
              { name: "Ferrari", slug: "ferrari" },
              { name: "Lamborghini", slug: "lamborghini" },
              { name: "Jaguar", slug: "jaguar" },
              { name: "Jeep", slug: "jeep" },
              { name: "+ 120 more", slug: null },
            ].map((make, i) => (
              make.slug ? (
                <Link key={i} href={`/model-detail?make=${make.slug}`} className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-afd-yellow/30 transition-all cursor-pointer">
                  <img
                    src={`/images/logos/${make.slug}.png`}
                    alt={make.name}
                    className="h-8 w-auto object-contain filter brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden'; }}
                  />
                  <span className="text-[10px] text-afd-slate group-hover:text-white font-medium text-center leading-tight">{make.name}</span>
                </Link>
              ) : (
                <Link href="/repair-manuals" key={i} className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-afd-yellow/10 hover:bg-afd-yellow/20 border border-afd-yellow/20 hover:border-afd-yellow transition-all cursor-pointer">
                  <span className="text-afd-yellow font-extrabold text-lg">+120</span>
                  <span className="text-[10px] text-afd-yellow font-bold text-center leading-tight">All Makes →</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-afd-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-afd-navy mb-16">Trusted by 10,000+ Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Switching to Auto Fix Data cut our diagnostic time in half. Having ALLDATA and AutoData in one place means we never have to turn away a complex electrical job."
              name="David M." role="Workshop Manager" garage="Elite Motors UK"
            />
            <TestimonialCard 
              quote="The wiring diagrams are incredibly detailed. For modern European cars, the Haynes Pro integration has been a lifesaver for our technicians."
              name="Sarah T." role="Lead Diagnostic Tech" garage="TechTune Auto"
            />
            <TestimonialCard 
              quote="I was paying double for individual subscriptions before. The value here is unbeatable, and the data is exactly what we get from the dealer portals."
              name="James L." role="Owner" garage="L&S Independent Auto"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-afd-navy mb-12">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem 
              q="Is this exactly the same data as buying direct?"
              a="Yes. As an authorised partner, we provide the exact same unedited OEM repair data, TSBs, and diagrams that you would get by subscribing to ALLDATA, AutoData, or Haynes Pro directly."
            />
            <FAQItem 
              q="Do I need special hardware?"
              a="No. Auto Fix Data is entirely cloud-based. You can access it from any PC, Mac, tablet, or smartphone in your workshop. We recommend a tablet for bay-side use."
            />
            <FAQItem 
              q="How often is the data updated?"
              a="Our databases are updated daily directly from the OEMs. When a new TSB or updated repair procedure is published by the manufacturer, it appears in your system automatically."
            />
            <FAQItem 
              q="Are American and Asian imports covered?"
              a="Yes. Our combined database approach ensures 99% coverage of the vehicle parc, including domestic, European, Asian imports, and light commercial vehicles from 1990 to present."
            />
            <FAQItem 
              q="Can I cancel my trial without being charged?"
              a="Absolutely. The 7-day trial requires no credit card. If you decide the platform isn't for you, your access will simply expire. There are no automatic charges."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
