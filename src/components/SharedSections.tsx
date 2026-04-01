import Link from '@/components/LocalizedLink';
import { CheckCircle2, Star, ShieldCheck, Database, Wrench } from "lucide-react";

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mt-10">
      <div className="flex items-center gap-2 text-white/80">
        <div className="p-1.5 bg-afd-yellow/20 rounded-full"><Star className="w-5 h-5 text-afd-yellow fill-afd-yellow" /></div>
        <span className="font-bold text-sm tracking-wide">10,000+ Workshops</span>
      </div>
      <div className="flex items-center gap-2 text-white/80">
        <div className="p-1.5 bg-afd-blue/50 rounded-full"><Database className="w-5 h-5 text-afd-blue" /></div>
        <span className="font-bold text-sm tracking-wide">150M+ Vehicles</span>
      </div>
      <div className="flex items-center gap-2 text-white/80">
        <div className="p-1.5 bg-green-500/20 rounded-full"><ShieldCheck className="w-5 h-5 text-green-400" /></div>
        <span className="font-bold text-sm tracking-wide">OEM Verified</span>
      </div>
    </div>
  );
}

export function TestimonialCard({ quote, name, role, garage }: { quote: string, name: string, role: string, garage: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-afd-navy/5 border border-gray-100 flex flex-col h-full hover:border-afd-yellow/50 transition-colors">
      <div className="flex text-afd-yellow mb-6">
        {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
      </div>
      <p className="text-afd-text text-lg italic mb-8 flex-1 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-afd-light rounded-full flex items-center justify-center text-afd-navy font-bold text-xl border-2 border-afd-yellow">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-afd-navy">{name}</h4>
          <p className="text-sm text-afd-slate">{role}, <span className="font-semibold text-afd-blue">{garage}</span></p>
        </div>
      </div>
    </div>
  );
}

export function FeatureTile({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      <div className="w-14 h-14 bg-afd-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-afd-yellow/20 transition-colors">
        <Icon className="w-7 h-7 text-afd-blue group-hover:text-afd-yellow transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-afd-navy mb-3">{title}</h3>
      <p className="text-afd-text leading-relaxed">{desc}</p>
    </div>
  );
}

export function ProductCard({ 
  brand, tagline, description, color, link 
}: { 
  brand: string, tagline: string, description: string, color: string, link: string 
}) {
  return (
    <div className="bg-afd-navy border border-afd-border rounded-2xl p-8 hover:border-afd-yellow/50 transition-all duration-300 group flex flex-col">
      <div className="mb-6">
        <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold tracking-wider mb-4 ${color}`}>{brand}</span>
        <h3 className="text-2xl font-bold text-white mb-2">{tagline}</h3>
      </div>
      <p className="text-afd-slate mb-8 flex-1 leading-relaxed">{description}</p>
      <Link href={link} className="flex items-center gap-2 text-white font-bold group-hover:text-afd-yellow transition-colors">
        Learn More <Wrench className="w-4 h-4 transition-transform group-hover:rotate-45" />
      </Link>
    </div>
  );
}

export function AlternativeHero({ h1, desc, brand }: { h1: string, desc: string, brand: string }) {
  return (
    <section className="bg-afd-navy pt-24 pb-32 px-6 relative overflow-hidden dark-section">
      <div className="absolute inset-0 opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-1.5 bg-white/10 text-afd-yellow rounded-full text-sm font-bold tracking-wider mb-6 border border-white/20">
          THE {brand} ALTERNATIVE
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">{h1}</h1>
        <p className="text-xl md:text-2xl text-afd-slate max-w-[800px] mx-auto mb-10 leading-relaxed">
          {desc}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/free-trial" className="w-full sm:w-auto px-8 py-4 bg-afd-yellow text-black font-bold rounded-xl hover:bg-afd-yellow-hover transition-all text-lg shadow-lg shadow-afd-yellow/20">
            Start Free 7-Day Trial
          </Link>
          <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-afd-border font-bold rounded-xl hover:border-white hover:bg-white/5 transition-all text-lg">
            Compare Pricing
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-afd-slate">
          <CheckCircle2 className="w-4 h-4 text-green-400" /> No credit card required. Instant access.
        </div>
      </div>
    </section>
  );
}
