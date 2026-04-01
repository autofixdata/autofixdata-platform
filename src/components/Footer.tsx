import Link from 'next/link';
import { Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer({ dict, lang }: { dict: any, lang: string }) {
  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="bg-afd-yellow py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">{dict.footer.ctaHeading || `${dict.nav.freeTrial} Today`}</h2>
          <p className="text-xl text-black/80 font-medium mb-8">{dict.footer.ctaSubheading || 'Full platform access. No credit card. No commitment.'}</p>
          <Link href={`/${lang}/free-trial`} className="inline-block bg-afd-navy text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-afd-dark hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            {dict.footer.ctaButton || `${dict.nav.freeTrial} Now`}
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-black/70 font-medium text-sm">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> {dict.footer.noCard || 'No credit card'}</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> {dict.footer.noContract || 'No contract'}</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> {dict.footer.cancelAnytime || 'Cancel anytime'}</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> {dict.footer.workshops || '10,000+ workshops'}</span>
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
              <h4 className="text-white font-bold mb-6 tracking-wide">{dict.nav.products}</h4>
              <ul className="space-y-3">
                {[['alldata', 'ALLDATA'], ['autodata', 'AutoData'], ['haynes-pro', 'Haynes Pro'], ['mitchell1', 'Mitchell1'], ['identifix', 'Identifix']].map(([slug, name]) => (
                  <li key={slug}><Link href={`/${lang}/${slug}`} className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">{name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
              <ul className="space-y-3">
                {[[`/${lang}/repair-manuals`, dict.nav.repairData], [`/${lang}/diagnostics`, dict.nav.diagnostics], [`/${lang}/wiring-diagrams`, dict.nav.wiring], [`/${lang}/dtc`, 'Fault Code Directory'], [`/${lang}/glossary`, 'Terminology Glossary'], [`/${lang}/blog`, 'Workshop Blog'], [`/${lang}/pricing`, dict.nav.pricing]].map(([href, label]) => (
                  <li key={href}><Link href={href} className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">{label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
              <ul className="space-y-3">
                {[[`/${lang}/about`, dict.nav.about], [`/${lang}/contact`, dict.nav.contact], [`/${lang}/login`, dict.nav.login]].map(([href, label]) => (
                  <li key={href}><Link href={href} className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-afd-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-afd-slate text-sm">
              © {new Date().getFullYear()} Auto Fix Data Ltd. {dict.footer.rights}.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-afd-slate">
              <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">{dict.footer.privacy}</Link>
              <Link href={`/${lang}/terms-of-service`} className="hover:text-white transition-colors">{dict.footer.terms}</Link>
              <Link href={`/${lang}/gdpr`} className="hover:text-white transition-colors">{dict.footer.gdpr}</Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
