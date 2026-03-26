import Link from 'next/link';
import { Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="bg-afd-yellow py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Start your free 7-day trial today</h2>
          <p className="text-xl text-black/80 font-medium mb-8">Full platform access. No credit card. No commitment.</p>
          <Link href="/free-trial" className="inline-block bg-afd-navy text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-afd-dark hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            Start Free Trial Now
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-black/70 font-medium text-sm">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> No credit card</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> No contract</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Cancel anytime</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> 10,000+ workshops</span>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-afd-navy pt-20 pb-10 border-t-4 border-afd-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-afd-yellow rounded flex items-center justify-center">
                  <Wrench className="w-3 h-3 text-black" />
                </div>
                <span className="text-lg font-bold text-white">Auto Fix Data</span>
              </div>
              <p className="text-afd-slate text-sm mb-6 leading-relaxed">
                The professional workshop database. Providing independent garages with OEM repair data, wiring diagrams, and DTC codes.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Products</h4>
              <ul className="space-y-3">
                {[['alldata', 'ALLDATA'], ['autodata', 'AutoData'], ['haynes-pro', 'Haynes Pro'], ['mitchell1', 'Mitchell1'], ['identifix', 'Identifix']].map(([slug, name]) => (
                  <li key={slug}><Link href={`/${slug}`} className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">{name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
              <ul className="space-y-3">
                {[['/repair-manuals', 'Repair Manuals'], ['/diagnostics', 'Diagnostics & DTC'], ['/wiring-diagrams', 'Wiring Diagrams'], ['/dtc', 'Fault Code Directory'], ['/glossary', 'Terminology Glossary'], ['/blog', 'Workshop Blog'], ['/pricing', 'Pricing Plans']].map(([href, label]) => (
                  <li key={href}><Link href={href} className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">{label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
              <ul className="space-y-3">
                {[['/about', 'About Us'], ['/contact', 'Contact Support'], ['/login', 'Login']].map(([href, label]) => (
                  <li key={href}><Link href={href} className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-afd-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-afd-slate text-sm">
              © {new Date().getFullYear()} Auto Fix Data Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-afd-slate">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/gdpr" className="hover:text-white transition-colors">GDPR & Cookies</Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
