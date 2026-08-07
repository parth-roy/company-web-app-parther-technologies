import { Metadata } from 'next';
import Image from 'next/image';
import { FloatingFormModal } from '@/components/ui/floating-form-modal';
import { getCollectionIds, getCollectionData } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

const heroImageMap: Record<string, string> = {
  'education': '/industries/education.webp',
  'ecommerce-retail': '/industries/ecommerce.webp',
  'manufacturing': '/industries/manufacturing.webp',
  'fintech': '/industries/fintech.webp',
  'healthcare': '/industries/healthcare.webp',
  'logistics': '/industries/logistics.webp'
};

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

  const heroImage = heroImageMap[slug];

  return (
    <div className="animate-hero-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center pt-24 pb-20 border-b border-cf-border bg-cf-bg">
        {heroImage && (
          <div className="absolute inset-0 z-0 opacity-80 mix-blend-darken dark:mix-blend-lighten pointer-events-none">
            <Image
              src={heroImage}
              alt={`${industryData.title} background`}
              fill
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        )}

        <div className="w-full px-6 md:px-12 xl:px-24 flex items-center relative z-10 max-w-7xl">
          <div className="z-10 relative max-w-2xl">
            <span className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-cf-card text-xs font-mono-caps font-semibold text-cf-text-secondary tracking-widest uppercase shadow-sm">
              Industry Expertise
            </span>
            <h1 className="font-serif-display text-h2 md:text-display mt-4 leading-[1.1] text-cf-text drop-shadow-md">
              {industryData.title}
            </h1>
            
            <p className="mt-6 text-body md:text-h4 text-cf-text-secondary drop-shadow-md">
              {industryData.description}
            </p>
            
            <FloatingFormModal className="mt-12 z-[100] isolate w-fit" />
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
