import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cf-bg flex flex-col items-center justify-center p-6 text-center animate-hero-in">
      <div className="max-w-2xl">
        <span className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-cf-card text-xs font-mono-caps font-semibold text-cf-text-secondary tracking-widest uppercase">
          Error 404
        </span>
        <h1 className="font-serif-display text-h1 md:text-display text-cf-text mb-6">
          Architectural Rebuild in Progress
        </h1>
        <p className="text-body md:text-h4 text-cf-text-secondary mb-12">
          We recently upgraded our entire digital infrastructure to a Next.js headless architecture. The specific page you are looking for has been relocated or archived.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <Link href="/services" className="p-6 border border-cf-border bg-cf-card rounded-xl hover:shadow-float transition-all group">
            <h3 className="font-serif-display text-h3 text-cf-text group-hover:text-primary transition-colors mb-2">Explore IT Services &rarr;</h3>
            <p className="text-sm text-cf-text-secondary">Custom Software, ERP, CRM, and Cloud Architecture.</p>
          </Link>
          
          <Link href="/industries" className="p-6 border border-cf-border bg-cf-card rounded-xl hover:shadow-float transition-all group">
            <h3 className="font-serif-display text-h3 text-cf-text group-hover:text-primary transition-colors mb-2">Industry Solutions &rarr;</h3>
            <p className="text-sm text-cf-text-secondary">Manufacturing, Healthcare, EdTech, and FinTech.</p>
          </Link>
        </div>
        
        <div className="mt-12">
          <Link href="/" className="text-sm font-semibold text-cf-text hover:underline">
            &larr; Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
