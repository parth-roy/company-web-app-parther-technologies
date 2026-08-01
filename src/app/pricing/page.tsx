import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing & Investment Architectures | Parther Technologies',
  description: 'Transparent B2B software engineering pricing structures for MSMEs and Enterprise clients across Eastern India.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f0] selection:bg-primary selection:text-primary-foreground">
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-main text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-white text-xs font-mono-caps font-semibold text-cf-text-secondary tracking-widest uppercase">
            Transparent Investments
          </span>
          <h1 className="font-serif-display text-5xl leading-[1.1] text-cf-text mb-6">
            Architectural Guidance, Not Opaque Estimates.
          </h1>
          <p className="text-lg text-cf-text-secondary leading-relaxed">
            We replace "call for pricing" friction with transparent data. Select your business maturity level below to see our standard investment frameworks.
          </p>
        </div>
      </section>

      {/* 2. Pricing Matrix */}
      <section className="py-12 pb-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Micro Businesses */}
            <div className="bg-white border border-cf-border rounded-xl p-8 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="font-serif-display text-2xl text-cf-text mb-2">Micro</h3>
              <p className="text-cf-text-secondary text-sm mb-6 border-b border-cf-border pb-6">Local retailers, clinics, independent service providers.</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-cf-text">₹5k</span>
                <span className="text-cf-text-secondary font-medium mx-1">-</span>
                <span className="text-3xl font-bold text-cf-text">₹25k</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-cf-text-secondary">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Immediate Lead Generation
                </li>
                <li className="flex items-start gap-2 text-sm text-cf-text-secondary">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Local Visibility SEO
                </li>
                <li className="flex items-start gap-2 text-sm text-cf-text-secondary">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  WhatsApp Integration
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-4 py-2 border border-cf-text text-cf-text rounded-md font-semibold hover:bg-cf-text hover:text-white transition-colors">
                Quick Setup
              </Link>
            </div>

            {/* Small Businesses */}
            <div className="bg-white border border-cf-border rounded-xl p-8 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="font-serif-display text-2xl text-cf-text mb-2">Small Business</h3>
              <p className="text-cf-text-secondary text-sm mb-6 border-b border-cf-border pb-6">Regional distributors, educational institutes, mid-sized real estate.</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-cf-text">₹25k</span>
                <span className="text-cf-text-secondary font-medium mx-1">-</span>
                <span className="text-3xl font-bold text-cf-text">₹2L</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-cf-text-secondary">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Spreadsheet Transition
                </li>
                <li className="flex items-start gap-2 text-sm text-cf-text-secondary">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Cohesive Software Systems
                </li>
                <li className="flex items-start gap-2 text-sm text-cf-text-secondary">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Automated Scheduling
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-4 py-2 border border-cf-text text-cf-text rounded-md font-semibold hover:bg-cf-text hover:text-white transition-colors">
                Book Consultation
              </Link>
            </div>

            {/* Growing MSMEs (Highlighted) */}
            <div className="bg-[#111111] border-none text-white rounded-xl p-8 flex flex-col shadow-2xl transform lg:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Common
              </div>
              <h3 className="font-serif-display text-2xl mb-2">Growing MSMEs</h3>
              <p className="text-gray-400 text-sm mb-6 border-b border-gray-800 pb-6">Scaling startups, manufacturing facilities, multi-location retail.</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-white">₹2L</span>
                <span className="text-gray-400 font-medium mx-1">-</span>
                <span className="text-3xl font-bold text-white">₹10L</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Custom CRM Integrations
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Inventory Automation
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Operational Complexity Handled
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-4 py-3 bg-white text-[#111111] rounded-md font-bold hover:bg-gray-200 transition-colors">
                Start Architecture Review
              </Link>
            </div>

            {/* Enterprise Clients */}
            <div className="bg-white border border-cf-border rounded-xl p-8 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="font-serif-display text-2xl text-cf-text mb-2">Enterprise</h3>
              <p className="text-cf-text-secondary text-sm mb-6 border-b border-cf-border pb-6">Logistics conglomerates, hospitals, government contractors, GCCs.</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-cf-text">₹10L</span>
                <span className="text-cf-text-secondary font-medium mx-1">-</span>
                <span className="text-3xl font-bold text-cf-text">₹50L+</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-cf-text-secondary">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Secure, Compliant Infrastructure
                </li>
                <li className="flex items-start gap-2 text-sm text-cf-text-secondary">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Rigorous Vendor Vetting
                </li>
                <li className="flex items-start gap-2 text-sm text-cf-text-secondary">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Executive Stakeholder Alignment
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-4 py-2 border border-cf-text text-cf-text rounded-md font-semibold hover:bg-cf-text hover:text-white transition-colors">
                Submit RFP
              </Link>
            </div>

          </div>
        </div>
      </section>
      
    </main>
  );
}
