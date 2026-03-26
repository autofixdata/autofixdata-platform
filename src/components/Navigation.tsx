'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Wrench, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

const CAR_MAKES = [
  { name: "BMW", slug: "bmw" }, { name: "Ford", slug: "ford" },
  { name: "VW", slug: "volkswagen" }, { name: "Toyota", slug: "toyota" },
  { name: "Mercedes", slug: "mercedes-benz" }, { name: "Vauxhall", slug: "vauxhall" },
  { name: "Renault", slug: "renault" }, { name: "Peugeot", slug: "peugeot" },
  { name: "Audi", slug: "audi" }, { name: "Honda", slug: "honda" },
  { name: "Nissan", slug: "nissan" }, { name: "Hyundai", slug: "hyundai" },
  { name: "Kia", slug: "kia" }, { name: "Volvo", slug: "volvo" },
  { name: "Skoda", slug: "skoda" }, { name: "Land Rover", slug: "land-rover" },
  { name: "Fiat", slug: "fiat" }, { name: "Mazda", slug: "mazda" },
  { name: "MINI", slug: "mini" }, { name: "SEAT", slug: "seat" },
  { name: "Alfa Romeo", slug: "alfa-romeo" }, { name: "Citroën", slug: "citroen" },
  { name: "Porsche", slug: "porsche" }, { name: "Subaru", slug: "subaru" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Makes Secondary Bar */}
      <div className="hidden md:flex bg-afd-dark h-9 items-center border-b border-white/5 overflow-hidden">
        <div className="flex items-center w-full">
          <div className="flex-shrink-0 px-4 flex items-center gap-2 border-r border-white/10 h-9">
            <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">MAKES</span>
          </div>
          <div className="marquee-container flex-1 overflow-hidden">
            <div className="marquee-content flex items-center gap-6">
              {[...CAR_MAKES, ...CAR_MAKES].map((make, i) => (
                <Link key={i} href={`/manuals/${make.slug}`} className="flex items-center gap-1.5 cursor-pointer group whitespace-nowrap">
                  <img src={`/images/logos/${make.slug}.png`} alt={make.name}
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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 bg-afd-navy rounded-lg overflow-hidden group-hover:bg-afd-blue transition-colors">
              <Wrench className="w-4 h-4 text-afd-yellow" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-afd-navy">
              Auto<span className="text-afd-yellow">Fix</span>Data
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {[
              { href: '/repair-manuals', label: 'Repair Data' },
              { href: '/diagnostics', label: 'Diagnostics' },
              { href: '/wiring-diagrams', label: 'Wiring' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/login', label: 'Login' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm font-semibold text-afd-text hover:text-afd-blue transition-colors relative group py-2">
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-afd-yellow transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="relative py-2"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-semibold text-afd-text hover:text-afd-blue transition-colors">
                Products <ChevronDown className="w-4 h-4" />
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-2 mt-2 z-50">
                  <Link href="/products" className="block px-4 py-2 text-sm font-bold text-afd-navy hover:bg-afd-light hover:text-afd-blue">View All Products</Link>
                  <div className="h-px bg-gray-100 my-1" />
                  {[['alldata', 'ALLDATA'], ['autodata', 'AutoData'], ['haynes-pro', 'Haynes Pro'], ['mitchell1', 'Mitchell1'], ['identifix', 'Identifix']].map(([slug, name]) => (
                    <Link key={slug} href={`/${slug}`} className="block px-4 py-2 text-sm text-afd-text hover:bg-afd-light hover:text-afd-blue">{name}</Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-1 text-xs font-semibold text-afd-slate hover:text-afd-navy transition-colors uppercase tracking-wider">
              <Globe className="w-4 h-4" /> EN
            </button>
            <div className="w-px h-6 bg-gray-200" />
            <Link href="/login" className="text-sm font-semibold text-afd-navy hover:text-afd-blue transition-colors px-2">Sign In</Link>
            <Link href="/free-trial" className="bg-afd-yellow text-black px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-afd-yellow-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">Start Free Trial</Link>
          </div>

          <button className="lg:hidden p-2 text-afd-navy" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-afd-navy/60 backdrop-blur-sm z-[100] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-[300px] bg-white z-[101] shadow-2xl flex flex-col lg:hidden">
            <div className="p-4 flex justify-end border-b border-gray-100">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-afd-slate hover:text-afd-navy"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
              {[['/', 'Home'], ['/repair-manuals', 'Repair Manuals'], ['/diagnostics', 'Diagnostics & DTC'], ['/wiring-diagrams', 'Wiring Diagrams'], ['/pricing', 'Pricing'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([href, label]) => (
                <Link key={href} href={href} className="text-lg font-bold text-afd-navy">{label}</Link>
              ))}
            </div>
            <div className="p-6 bg-afd-light border-t border-gray-200 space-y-4">
              <Link href="/login" className="w-full block py-3 border-2 border-afd-navy text-afd-navy font-bold rounded-lg text-center">Sign In</Link>
              <Link href="/free-trial" className="w-full block py-3 bg-afd-yellow text-black font-bold rounded-lg text-center">Start Free Trial</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
