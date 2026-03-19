import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Wrench, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const CAR_MAKES = [
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
];

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [location] = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Makes Secondary Bar (Desktop) */}
      <div className="hidden md:flex bg-afd-dark h-9 items-center border-b border-white/5 overflow-hidden">
        <div className="flex items-center w-full">
          <div className="flex-shrink-0 px-4 flex items-center gap-2 border-r border-white/10 h-9">
            <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">MAKES</span>
          </div>
          <div className="marquee-container flex-1 overflow-hidden">
            <div className="marquee-content flex items-center gap-6">
              {[...CAR_MAKES, ...CAR_MAKES].map((make, i) => (
                <span key={i} className="flex items-center gap-1.5 cursor-pointer group whitespace-nowrap">
                  <img
                    src={`/images/logos/${make.slug}.png`}
                    alt={make.name}
                    className="h-4 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="text-[11px] text-afd-slate group-hover:text-afd-yellow transition-colors font-medium">{make.name}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 px-4 border-l border-white/10 h-9 flex items-center">
            <Link href="/repair-manuals" className="text-[10px] text-afd-yellow font-bold tracking-wider hover:underline whitespace-nowrap">+ All 150 makes →</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm h-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 bg-afd-navy rounded-lg overflow-hidden group-hover:bg-afd-blue transition-colors">
              <Wrench className="w-4 h-4 text-afd-yellow" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-afd-navy">
              Auto<span className="text-afd-yellow">Fix</span>Data
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/repair-manuals" className="text-sm font-semibold text-afd-text hover:text-afd-blue transition-colors relative group py-2">
              Repair Data
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-afd-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-afd-text hover:text-afd-blue transition-colors">
                Products <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isProductsDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-2 mt-2"
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                    <Link href="/products" className="block px-4 py-2 text-sm font-bold text-afd-navy hover:bg-afd-light hover:text-afd-blue">View All Products</Link>
                    <div className="h-px bg-gray-100 my-1"></div>
                    <Link href="/alldata" className="block px-4 py-2 text-sm text-afd-text hover:bg-afd-light hover:text-afd-blue">ALLDATA</Link>
                    <Link href="/autodata" className="block px-4 py-2 text-sm text-afd-text hover:bg-afd-light hover:text-afd-blue">AutoData</Link>
                    <Link href="/haynes-pro" className="block px-4 py-2 text-sm text-afd-text hover:bg-afd-light hover:text-afd-blue">Haynes Pro</Link>
                    <Link href="/mitchell1" className="block px-4 py-2 text-sm text-afd-text hover:bg-afd-light hover:text-afd-blue">Mitchell1</Link>
                    <Link href="/identifix" className="block px-4 py-2 text-sm text-afd-text hover:bg-afd-light hover:text-afd-blue">Identifix</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/diagnostics" className="text-sm font-semibold text-afd-text hover:text-afd-blue transition-colors relative group py-2">
              Diagnostics
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-afd-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link href="/wiring-diagrams" className="text-sm font-semibold text-afd-text hover:text-afd-blue transition-colors relative group py-2">
              Wiring
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-afd-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/pricing" className="text-sm font-semibold text-afd-text hover:text-afd-blue transition-colors relative group py-2">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-afd-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-1 text-xs font-semibold text-afd-slate hover:text-afd-navy transition-colors uppercase tracking-wider">
              <Globe className="w-4 h-4" /> EN
            </button>
            <div className="w-px h-6 bg-gray-200"></div>
            <button className="text-sm font-semibold text-afd-navy hover:text-afd-blue transition-colors px-2">
              Sign In
            </button>
            <Link href="/free-trial" className="bg-afd-yellow text-black px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-afd-yellow-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-afd-navy"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-afd-navy/60 backdrop-blur-sm z-[100] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white z-[101] shadow-2xl flex flex-col lg:hidden"
            >
              <div className="p-4 flex justify-end border-b border-gray-100">
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-afd-slate hover:text-afd-navy">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
                <Link href="/" className="text-lg font-bold text-afd-navy">Home</Link>
                <div className="h-px bg-gray-100"></div>
                <Link href="/repair-manuals" className="text-lg font-bold text-afd-navy">Repair Manuals</Link>
                <Link href="/diagnostics" className="text-lg font-bold text-afd-navy">Diagnostics & DTC</Link>
                <Link href="/wiring-diagrams" className="text-lg font-bold text-afd-navy">Wiring Diagrams</Link>
                <div className="h-px bg-gray-100"></div>
                <div className="space-y-4">
                  <span className="text-sm font-semibold text-afd-slate uppercase tracking-wider">Products</span>
                  <Link href="/products" className="block text-afd-navy font-medium">All Products</Link>
                  <Link href="/alldata" className="block text-afd-text">ALLDATA</Link>
                  <Link href="/autodata" className="block text-afd-text">AutoData</Link>
                  <Link href="/haynes-pro" className="block text-afd-text">Haynes Pro</Link>
                  <Link href="/mitchell1" className="block text-afd-text">Mitchell1</Link>
                  <Link href="/identifix" className="block text-afd-text">Identifix</Link>
                </div>
                <div className="h-px bg-gray-100"></div>
                <Link href="/pricing" className="text-lg font-bold text-afd-navy">Pricing</Link>
                <Link href="/about" className="text-lg font-bold text-afd-navy">About Us</Link>
                <Link href="/contact" className="text-lg font-bold text-afd-navy">Contact</Link>
              </div>

              <div className="p-6 bg-afd-light border-t border-gray-200 space-y-4">
                <button className="w-full py-3 border-2 border-afd-navy text-afd-navy font-bold rounded-lg text-center">
                  Sign In
                </button>
                <Link href="/free-trial" className="w-full block py-3 bg-afd-yellow text-black font-bold rounded-lg text-center">
                  Start Free Trial
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Pre-Footer CTA */}
      <section className="bg-afd-yellow py-16 md:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
          <Wrench className="w-[400px] h-[400px] -rotate-45 translate-x-1/4 -translate-y-1/4 text-black" />
        </div>
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Start your free 7-day trial today</h2>
          <p className="text-xl text-black/80 font-medium mb-8">Full platform access. No credit card. No commitment.</p>
          <Link href="/free-trial" className="inline-block bg-afd-navy text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-afd-dark hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            Start Free Trial Now
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-black/70 font-medium text-sm">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> No credit card</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> No contract</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Cancel anytime</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4"/> 10,000+ workshops</span>
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
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded bg-afd-border/50 hover:bg-afd-yellow transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 rounded bg-afd-border/50 hover:bg-afd-yellow transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 rounded bg-afd-border/50 hover:bg-afd-yellow transition-colors cursor-pointer"></div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Products</h4>
              <ul className="space-y-3">
                <li><Link href="/alldata" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">ALLDATA</Link></li>
                <li><Link href="/autodata" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">AutoData</Link></li>
                <li><Link href="/haynes-pro" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Haynes Pro</Link></li>
                <li><Link href="/mitchell1" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Mitchell1</Link></li>
                <li><Link href="/identifix" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Identifix</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
              <ul className="space-y-3">
                <li><Link href="/repair-manuals" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Repair Manuals</Link></li>
                <li><Link href="/diagnostics" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Diagnostics & DTC</Link></li>
                <li><Link href="/wiring-diagrams" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Wiring Diagrams</Link></li>
                <li><Link href="/blog" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Workshop Blog</Link></li>
                <li><Link href="/pricing" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Pricing Plans</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">About Us</Link></li>
                <li><Link href="/contact" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Contact Support</Link></li>
                <li><a href="#" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Careers</a></li>
                <li><a href="#" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Partners</a></li>
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
    </div>
  );
}
