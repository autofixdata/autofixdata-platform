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
                <Link key={i} href={`/model-detail?make=${make.slug}`} className="flex items-center gap-1.5 cursor-pointer group whitespace-nowrap">
                  <img
                    src={`/images/logos/${make.slug}.png`}
                    alt={make.name}
                    className="h-4 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="text-[11px] text-afd-slate group-hover:text-afd-yellow transition-colors font-medium">{make.name}</span>
                </Link>
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

            <Link href="/login" className="text-sm font-semibold text-afd-text hover:text-afd-blue transition-colors relative group py-2">
              Login
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-afd-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-1 text-xs font-semibold text-afd-slate hover:text-afd-navy transition-colors uppercase tracking-wider">
              <Globe className="w-4 h-4" /> EN
            </button>
            <div className="w-px h-6 bg-gray-200"></div>
            <Link href="/login" className="text-sm font-semibold text-afd-navy hover:text-afd-blue transition-colors px-2">
              Sign In
            </Link>
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
              <div className="flex gap-3 flex-wrap">
                {/* Facebook */}
                <a href="https://facebook.com/autofixdata" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1877F2] border border-white/10 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-afd-slate group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Twitter / X */}
                <a href="https://twitter.com/autofixdata" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-black border border-white/10 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-afd-slate group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/company/autofixdata" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0A66C2] border border-white/10 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-afd-slate group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com/autofixdata" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-[#E1306C] hover:to-[#F77737] border border-white/10 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-afd-slate group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://api.whatsapp.com/send/?phone=447367064215" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366] border border-white/10 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-afd-slate group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=447367064215"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm rounded-xl transition-all w-fit shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
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
                <li><Link href="/dtc" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Fault Code Directory</Link></li>
                <li><Link href="/glossary" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Terminology Glossary</Link></li>
                <li><Link href="/blog" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Workshop Blog</Link></li>
                <li><Link href="/pricing" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Pricing Plans</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">About Us</Link></li>
                <li><Link href="/contact" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Contact Support</Link></li>
                <li><Link href="/login" className="text-afd-slate hover:text-afd-yellow transition-colors text-sm font-medium">Login</Link></li>
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
