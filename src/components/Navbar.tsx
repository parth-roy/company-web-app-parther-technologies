'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cf-bg/80 backdrop-blur-md border-b border-cf-border shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-cf-text text-cf-bg flex items-center justify-center font-serif-display font-bold text-xl rounded-sm transition-transform group-hover:scale-105">
            P
          </div>
          <span className="font-serif-display text-xl font-bold tracking-tight text-cf-text">
            Parther Technologies
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-semibold text-cf-text-secondary hover:text-cf-text transition-colors">
            Services
          </Link>
          <Link href="/industries" className="text-sm font-semibold text-cf-text-secondary hover:text-cf-text transition-colors">
            Industries
          </Link>
          <Link href="/case-studies" className="text-sm font-semibold text-cf-text-secondary hover:text-cf-text transition-colors">
            Case Studies
          </Link>
          <Link href="/about" className="text-sm font-semibold text-cf-text-secondary hover:text-cf-text transition-colors">
            About
          </Link>
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
            className="md:hidden p-2 text-cf-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cf-bg border-b border-cf-border shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-6 gap-4">
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-text py-2 border-b border-cf-border-light">Services</Link>
            <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-text py-2 border-b border-cf-border-light">Industries</Link>
            <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-text py-2 border-b border-cf-border-light">Case Studies</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-text py-2 border-b border-cf-border-light">About</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-cf-bg bg-cf-text text-center py-3 rounded-xl mt-4">Start a Project</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
