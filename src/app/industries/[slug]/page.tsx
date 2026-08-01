import { Metadata } from 'next';
import MultiStepForm from '@/components/MultiStepForm';
import { getCollectionIds, getCollectionData } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getCollectionIds('industries');
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const industryData = await getCollectionData('industries', slug);
  
  if (!industryData) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: industryData.seoTitle,
    description: industryData.seoDescription,
    openGraph: {
      title: industryData.seoTitle,
      description: industryData.seoDescription,
      type: 'website',
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const industryData = await getCollectionData('industries', slug);
  
  if (!industryData) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: industryData.title,
    description: industryData.seoDescription,
    audience: {
      '@type': 'Audience',
      audienceType: industryData.title
    },
    provider: {
      '@type': 'ITService',
      name: 'Parther Technologies',
      url: 'https://parthertech.com',
    }
  };

  return (
    <div className="animate-hero-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 border-b border-cf-border bg-cf-bg">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 relative">
            <span className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-cf-card text-xs font-mono-caps font-semibold text-cf-text-secondary tracking-widest uppercase">
              Industry Expertise
            </span>
            <h1 className="font-serif-display text-h2 md:text-display mt-4 leading-[1.1] text-cf-text">
              {industryData.title}
            </h1>
            
            <p className="mt-6 text-body md:text-h4 text-cf-text-secondary max-w-xl">
              {industryData.description}
            </p>

            <div className="mt-12 flex flex-col gap-3">
              <p className="text-xs font-mono-caps text-cf-text-tertiary">Trusted by industry leaders</p>
              <div className="flex gap-6 opacity-60 grayscale mix-blend-multiply items-center">
                <div className="h-8 w-24 bg-cf-border/50 rounded flex items-center justify-center text-xs font-bold font-mono">Client A</div>
                <div className="h-8 w-24 bg-cf-border/50 rounded flex items-center justify-center text-xs font-bold font-mono">Client B</div>
              </div>
            </div>
          </div>

          <div className="z-10 relative bg-cf-card p-6 md:p-8 rounded-2xl border border-cf-border shadow-float">
            <h3 className="font-serif-display text-h3 mb-2 text-cf-text">Request Industry Consultation</h3>
            <p className="text-sm text-cf-text-secondary mb-6">Receive an architectural assessment specific to your industry's compliance and scaling requirements.</p>
            <MultiStepForm />
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-24 bg-cf-card prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif-display prose-headings:text-cf-text prose-p:text-cf-text-secondary">
        <div className="container-main max-w-4xl">
          <MDXRemote source={industryData.content} />
        </div>
      </section>
    </div>
  );
}
