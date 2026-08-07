import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';
import Link from 'next/link';

const filePath = path.join(process.cwd(), 'content/case-studies/gomytruck/case-study.mdx');

export async function generateMetadata(): Promise<Metadata> {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(raw);

  return {
    title: data.seoTitle || data.title,
    description: data.seoDescription,
    keywords: data.keywords,
    openGraph: {
      title: data.seoTitle || data.title,
      description: data.seoDescription,
      images: data.featuredImage ? [data.featuredImage] : [],
    },
  };
}

function slugify(children: React.ReactNode): string {
  return String(children)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-serif-display font-bold mt-12 mb-8 text-cf-text" {...props} />,
  h2: (props: any) => (
    <h2
      id={slugify(props.children)}
      className="text-3xl font-serif-display font-semibold mt-14 mb-6 text-cf-text scroll-mt-24"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      id={slugify(props.children)}
      className="text-2xl font-semibold mt-10 mb-4 text-cf-text scroll-mt-24"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      id={slugify(props.children)}
      className="text-xl font-medium mt-8 mb-3 text-cf-text scroll-mt-24"
      {...props}
    />
  ),
  p: (props: any) => <p className="mb-6 leading-relaxed text-cf-text-secondary text-lg" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-cf-text-secondary text-lg" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-cf-text-secondary text-lg" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-cf-text" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-cf-text-tertiary mb-6 py-2 bg-gray-50/50 rounded-r-lg" {...props} />
  ),
  a: (props: any) => <a className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto mb-8 border border-cf-border rounded-xl shadow-sm">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-gray-50 border-b border-cf-border" {...props} />,
  th: (props: any) => <th className="p-4 font-semibold text-cf-text whitespace-nowrap" {...props} />,
  td: (props: any) => <td className="p-4 border-b border-cf-border text-cf-text-secondary" {...props} />,
  tr: (props: any) => <tr className="hover:bg-gray-50/50 transition-colors" {...props} />,
  code: (props: any) => {
    // If it's an inline code (not part of pre)
    if (typeof props.children === 'string' && !props.children.includes('\n')) {
      return <code className="font-mono bg-gray-100 text-gray-800 rounded-md px-1.5 py-0.5 text-[0.9em]" {...props} />
    }
    return <code {...props} />
  },
  pre: (props: any) => (
    <pre className="bg-gray-900 text-green-300 p-6 rounded-xl overflow-x-auto mb-8 text-sm font-mono leading-relaxed shadow-lg" {...props} />
  ),
  hr: (props: any) => <hr className="my-12 border-t border-cf-border" {...props} />,
};

const TABLE_OF_CONTENTS = [
  { id: 'executive-summary', title: 'Executive Summary' },
  { id: 'industry-background--market-dynamics', title: 'Industry Background' },
  { id: 'business-challenges', title: 'Business Challenges' },
  { id: 'solution-strategy', title: 'Solution Strategy' },
  { id: 'product-architecture', title: 'Product Architecture' },
  { id: 'database-design', title: 'Database Design' },
  { id: 'key-features', title: 'Key Features' },
  { id: 'security-architecture', title: 'Security Architecture' },
  { id: 'mobile-applications', title: 'Mobile Applications' },
  { id: 'admin-panel', title: 'Admin Panel' },
  { id: 'technical-stack', title: 'Technical Stack' },
  { id: 'deployment-infrastructure', title: 'Deployment' },
];

const TECH_STACK = [
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'Flutter',
  'Socket.io',
  'BullMQ',
  'Razorpay',
  'RazorpayX',
  'AWS S3',
  'Firebase',
  'Mapbox',
  'Sentry'
];

export default async function GoMyTruckCaseStudy() {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(raw);

  return (
    <main className="min-h-screen bg-cf-bg pb-24">
      {/* Hero Section */}
      <section className="relative w-full bg-[#0a0f1a] pt-32 pb-20 overflow-hidden">
        {/* Background Image with Blur and Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("/case-studies/gomytruck/hero-banner.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px) brightness(0.8)',
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-90" />
        
        <div className="container-main relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-400 mb-8 font-mono-caps uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <span className="mx-2">›</span>
            <span className="text-white">GoMyTruck</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-500/30 text-blue-300 rounded-full text-xs font-mono font-medium tracking-wide mb-6">
              Logistics & Transportation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-bold text-white mb-6 leading-tight">
              GoMyTruck — Full-Stack Digital Freight Marketplace
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              A production-grade logistics operating system built to disrupt cartelized trucking, featuring a dual-mode booking engine, live bidding, and a four-wallet payment ecosystem.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/10 mb-12">
              <div>
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wide">Verified Drivers</div>
              </div>
              <div className="hidden md:block w-px h-full bg-white/10 mx-auto" />
              <div>
                <div className="text-4xl font-bold text-white mb-1">31</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wide">Backend Modules</div>
              </div>
              <div className="hidden md:block w-px h-full bg-white/10 mx-auto" />
              <div>
                <div className="text-4xl font-bold text-white mb-1">3</div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wide">Flutter Apps</div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-blue-950 border border-blue-700 text-blue-300 rounded-full px-3 py-1 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-main py-16">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Main Article Content */}
          <article className="lg:w-2/3 min-w-0 prose prose-lg prose-gray max-w-none">
            <MDXRemote source={content} components={mdxComponents} />
          </article>

          {/* Sticky Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:w-1/3">
            <div className="sticky top-24 bg-cf-card border border-cf-border rounded-2xl p-6 shadow-sm">
              <h4 className="font-syncopate uppercase text-sm font-semibold text-cf-text mb-4 tracking-wider">
                Table of Contents
              </h4>
              <nav className="flex flex-col space-y-3">
                {TABLE_OF_CONTENTS.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`#${item.id}`}
                    className="text-sm text-cf-text-secondary hover:text-blue-600 hover:border-blue-600 border-l-2 border-transparent pl-3 py-1 transition-all"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 bg-[#0a0f1a] border-y border-gray-800">
        <div className="container-main py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-white mb-6">
            Build your next logistics platform
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Partner with us to engineer robust, scalable software that drives operational efficiency and measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors w-full sm:w-auto"
            >
              Start a Project
            </Link>
            <Link 
              href="/case-studies" 
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors w-full sm:w-auto"
            >
              Read More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
