import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Technical Discovery Call | Parther Technologies',
  description: 'Book a technical discovery call. High-velocity routing guarantees a response within 60 seconds.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* Left Column: Pitch & Trust */}
      <section className="w-full md:w-1/2 bg-[#111111] text-white p-12 md:p-24 flex flex-col justify-between min-h-[50vh] md:min-h-screen pt-32">
        <div>
          <span className="inline-block px-3 py-1 mb-8 rounded-full border border-gray-700 bg-white/5 text-xs font-mono-caps font-semibold text-gray-300 tracking-widest uppercase">
            Technical Discovery
          </span>
          <h1 className="font-serif-display text-4xl md:text-5xl leading-tight mb-6">
            Bypass the sales pitch. <br/> Speak directly with engineering.
          </h1>
          <p className="text-lg text-gray-400 mb-12 max-w-md leading-relaxed">
            We utilize automated routing integration. Your inquiry bypasses standard SDR queues and is sent directly to our senior architectural team. 
          </p>
          
          <div className="space-y-6 border-l-2 border-blue-600 pl-6">
            <div>
              <h4 className="font-bold text-lg">Speed-to-Lead Guarantee</h4>
              <p className="text-gray-400 text-sm">Automated scheduling response triggered within 60 seconds of submission.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">AI Data Enrichment</h4>
              <p className="text-gray-400 text-sm">We use progressive profiling. Provide just your work email, and our systems securely append your firmographic data.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-12 border-t border-gray-800">
          <h4 className="text-sm font-mono-caps text-gray-500 mb-6 uppercase tracking-wider">Direct Contact</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:hello@parthertech.com" className="hover:text-white transition-colors">hello@parthertech.com</a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div className="flex flex-wrap items-center gap-2">
                <a href="tel:9432350334" className="hover:text-white transition-colors font-mono">94323 50334</a>
                <span className="text-gray-600">/</span>
                <a href="tel:9331488999" className="hover:text-white transition-colors font-mono">9331488999</a>
                <span className="text-gray-600">/</span>
                <a href="tel:9749112684" className="hover:text-white transition-colors font-mono">9749112684</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-4 font-mono-caps">Trusted by Tier-1 Enterprises in</p>
          <div className="flex flex-wrap gap-4 text-gray-400 font-bold">
            <span>Bengal Silicon Valley</span>
            <span>•</span>
            <span>Howrah</span>
            <span>•</span>
            <span>Durgapur</span>
            <span>•</span>
            <span>Siliguri</span>
          </div>
        </div>
      </section>

      {/* Right Column: 3-Field CRO Form */}
      <section className="w-full md:w-1/2 bg-[#f4f4f0] p-12 md:p-24 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-cf-border">
          <h3 className="font-serif-display text-3xl text-cf-text mb-2">Start a Project</h3>
          <p className="text-cf-text-secondary text-sm mb-8">Secure, high-velocity intake form.</p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-cf-text mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-cf-text mb-2">Work Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                placeholder="john@company.com"
                required
              />
            </div>

            <div>
              <label htmlFor="scope" className="block text-sm font-semibold text-cf-text mb-2">Project Scope (Briefly)</label>
              <textarea 
                id="scope" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                placeholder="e.g., We need a custom ERP to manage logistics across 3 warehouses..."
                required
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Submit & Book Discovery Call
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">By submitting, you agree to our Privacy Policy. No spam.</p>
          </form>
        </div>
      </section>
      
    </main>
  );
}
