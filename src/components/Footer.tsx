import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 mt-auto">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1 shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Parther Technologies" 
                  fill
                  sizes="48px"
                  className="object-contain p-1.5" 
                />
              </div>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-white">
                Parther Technologies
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Enterprise digital transformation and scalable software architecture for modern B2B leaders across Eastern India.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono-caps text-gray-500">Navigation & Verification</span>
              <Link href="/case-studies" className="text-sm text-blue-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Enterprise Case Studies</Link>
              <Link href="/technologies" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Technology Matrix</Link>
              <Link href="/contact" className="text-sm hover:text-white transition-colors inline-block py-1 min-h-[24px]">Contact Us</Link>
              <a href="mailto:hello@parthertech.com" className="text-sm hover:text-white transition-colors inline-block py-1 min-h-[24px]">hello@parthertech.com</a>
              <div className="text-sm text-gray-400 flex flex-wrap gap-1.5 py-1">
                <a href="tel:9432350334" className="hover:text-white transition-colors">94323 50334</a>
                <span>/</span>
                <a href="tel:9331488999" className="hover:text-white transition-colors">9331488999</a>
                <span>/</span>
                <a href="tel:9749112684" className="hover:text-white transition-colors">9749112684</a>
              </div>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-serif-display text-lg mb-6">Core Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services/custom-software-engineering" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Custom Software</Link></li>
              <li><Link href="/services/erp-systems" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">ERP Systems</Link></li>
              <li><Link href="/services/crm" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">CRM Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Mobile Apps</Link></li>
              <li><Link href="/services/enterprise-cloud" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Cloud Architecture</Link></li>
              <li><Link href="/case-studies/gomytruck" className="text-xs text-blue-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">↗ Case Study: GoMyTruck</Link></li>
              <li><Link href="/case-studies/acs" className="text-xs text-amber-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">↗ Case Study: ACS Platform</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-serif-display text-lg mb-6">Industries</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/industries/manufacturing" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Manufacturing</Link></li>
              <li><Link href="/industries/healthcare" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Healthcare</Link></li>
              <li><Link href="/industries/fintech" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">FinTech</Link></li>
              <li><Link href="/industries/education" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">EdTech</Link></li>
              <li><Link href="/industries/ecommerce-retail" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Retail & eCommerce</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="font-serif-display text-lg mb-6">Locations &amp; Hubs</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/locations/india/kolkata/custom-software-engineering" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Kolkata &amp; WB Hubs</Link></li>
              <li><Link href="/locations/india/bengaluru/ai-automation" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Bengaluru Tech Hub</Link></li>
              <li><Link href="/locations/india/mumbai/custom-software-engineering" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Mumbai &amp; Pune</Link></li>
              <li><Link href="/locations/india/delhi/erp-systems" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Delhi NCR</Link></li>
              <li><Link href="/locations/usa/raleigh/ai-automation" className="text-sm text-gray-400 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Raleigh &amp; USA Hubs</Link></li>
              <li><Link href="/locations" className="text-sm text-[#0066cc] hover:text-blue-400 font-medium transition-colors inline-block py-1 min-h-[24px]">View All 950+ Locations →</Link></li>
            </ul>
          </div>
        </div>

        {/* Pan-India & Global Locations Grid */}
        <div className="border-t border-gray-800 pt-8 pb-12 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-mono-caps text-xs text-gray-500 tracking-widest uppercase">Pan-India (800+ Cities) &amp; Global Enterprise Footprint</h4>
            <Link href="/locations" className="text-xs text-blue-400 hover:underline">Explore all 950+ cities →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">West Bengal (45+)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">Maharashtra (90+)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">Karnataka (60+)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">Delhi NCR (25+)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">Tamil Nadu (70+)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">Gujarat (65+)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">Telangana &amp; AP (60+)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">Uttar Pradesh (90+)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">United States (15)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">United Kingdom (8)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">Canada (6)</Link>
            <Link href="/locations" className="text-xs text-gray-400 hover:text-white transition-colors">Australia (6)</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Parther Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors inline-block py-1 min-h-[24px]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
