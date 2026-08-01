import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 mt-auto">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1 shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Parther Technologies" 
                  fill
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
              <span className="text-xs font-mono-caps text-gray-500">Contact</span>
              <a href="mailto:hello@parthertech.com" className="text-sm hover:text-white transition-colors">hello@parthertech.com</a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-serif-display text-lg mb-6">Core Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services/custom-software-engineering" className="text-sm text-gray-400 hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="/services/erp-systems" className="text-sm text-gray-400 hover:text-white transition-colors">ERP Systems</Link></li>
              <li><Link href="/services/crm" className="text-sm text-gray-400 hover:text-white transition-colors">CRM Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-sm text-gray-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/enterprise-cloud" className="text-sm text-gray-400 hover:text-white transition-colors">Cloud Architecture</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-serif-display text-lg mb-6">Industries</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/industries/manufacturing" className="text-sm text-gray-400 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/healthcare" className="text-sm text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/fintech" className="text-sm text-gray-400 hover:text-white transition-colors">FinTech</Link></li>
              <li><Link href="/industries/education" className="text-sm text-gray-400 hover:text-white transition-colors">EdTech</Link></li>
              <li><Link href="/industries/ecommerce-retail" className="text-sm text-gray-400 hover:text-white transition-colors">Retail & eCommerce</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="font-serif-display text-lg mb-6">Locations</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/locations/bengal-silicon-valley" className="text-sm text-gray-400 hover:text-white transition-colors">Bengal Silicon Valley</Link></li>
              <li><Link href="/locations/siliguri" className="text-sm text-gray-400 hover:text-white transition-colors">Siliguri Tech Hub</Link></li>
              <li><Link href="/locations/durgapur-asansol" className="text-sm text-gray-400 hover:text-white transition-colors">Durgapur-Asansol</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Parther Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
