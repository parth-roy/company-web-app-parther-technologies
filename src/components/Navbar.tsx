'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname === '/test') {
    return null;
  }

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150); // slight delay to prevent flickering
  };

  const services = [
    { name: 'Custom Software', href: '/services/custom-software-engineering', desc: 'Enterprise apps & legacy modernization.' },
    { name: 'ERP Systems', href: '/services/erp-systems', desc: 'Supply chain & logistics architecture.' },
    { name: 'AI Automation', href: '/services/ai-automation', desc: 'Custom AI agent orchestration.' },
    { name: 'CRM Development', href: '/services/crm', desc: 'Sales & operational pipelines.' },
    { name: 'Mobile Apps', href: '/services/mobile-app-development', desc: 'React Native & iOS scaling.' },
    { name: 'Cloud Architecture', href: '/services/enterprise-cloud', desc: 'Zero-trust AWS/GCP setups.' },
  ];

  const industries = [
    { name: 'Logistics', href: '/industries/logistics', desc: 'Freight mapping & booking.' },
    { name: 'Manufacturing', href: '/industries/manufacturing', desc: 'Factory automation ERPs.' },
    { name: 'Healthcare', href: '/industries/healthcare', desc: 'Compliance-first portals.' },
    { name: 'FinTech', href: '/industries/fintech', desc: 'Secure payment pipelines.' },
    { name: 'Education', href: '/industries/education', desc: 'EdTech learning systems.' },
    { name: 'Retail', href: '/industries/ecommerce-retail', desc: 'Headless eCommerce.' },
  ];

  const isMegaMenuOpen = activeMegaMenu === 'services' || activeMegaMenu === 'industries';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-md py-4' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-5'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-main flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="Parther Technologies" 
              fill
              sizes="40px"
              className="object-contain" 
              priority
            />
          </div>
          <span className="font-serif-display text-2xl font-bold tracking-tight text-cf-text">
            Parther Technologies
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          
          {/* Services Mega Menu Trigger */}
          <div 
            className="py-2 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('services')}
          > 
            <Link href="/services" className="flex items-center gap-1 text-sm font-semibold text-cf-text-secondary hover:text-cf-text transition-colors">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
          </div>

          {/* Industries Mega Menu Trigger */}
          <div 
            className="py-2 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('industries')}
          > 
            <Link href="/industries" className="flex items-center gap-1 text-sm font-semibold text-cf-text-secondary hover:text-cf-text transition-colors">
              Industries
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${activeMegaMenu === 'industries' ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
          </div>

          <Link href="/case-studies" className="text-sm font-semibold text-cf-text-secondary hover:text-cf-text transition-colors" onMouseEnter={() => handleMouseEnter('none')}>
            Case Studies
          </Link>
          <Link href="/about" className="text-sm font-semibold text-cf-text-secondary hover:text-cf-text transition-colors" onMouseEnter={() => handleMouseEnter('none')}>
            About
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-cf-text-secondary hover:text-cf-text transition-colors" onMouseEnter={() => handleMouseEnter('none')}>
            Pricing
          </Link>

          {/* Mega Menu Dropdown */}
          <div 
            className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] mt-4 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden transition-all duration-200 origin-top ${
              isMegaMenuOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-2 scale-95 pointer-events-none'
            }`}
            onMouseEnter={() => activeMegaMenu && handleMouseEnter(activeMegaMenu)}
          >
            <div className="p-6 grid grid-cols-2 gap-4">
              {(activeMegaMenu === 'services' ? services : industries).map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="group flex flex-col p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveMegaMenu(null)}
                >
                  <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                    {item.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                  <span className="text-xs text-gray-500 mt-1">{item.desc}</span>
                </Link>
              ))}
            </div>
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-xs font-medium text-gray-500">Need something custom?</span>
              <Link href="/contact" className="text-xs font-bold text-blue-600 hover:text-blue-700">Request Technical Audit →</Link>
            </div>
          </div>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-cf-bg bg-cf-text hover:bg-cf-text/90 rounded-full transition-all hover:scale-105"
          >
            Start a Project
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-cf-text rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-cf-border shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-6 gap-2">
          <span className="text-xs font-mono-caps text-gray-500 mb-2">Navigation</span>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-text py-2">Services</Link>
          <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-text py-2">Industries</Link>
          <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-text py-2">Case Studies</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-text py-2">About</Link>
          <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-text py-2">Pricing</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-white bg-black text-center py-4 rounded-xl mt-4">Start a Project</Link>
        </nav>
      </div>
    </header>
  );
}
