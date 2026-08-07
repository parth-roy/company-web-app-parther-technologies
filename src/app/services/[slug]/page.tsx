import { Metadata } from 'next';
import Image from 'next/image';
import MultiStepForm from '@/components/MultiStepForm';
import { getCollectionIds, getCollectionData } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import ROICalculator from '@/components/ROICalculator';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import GitHubStats from '@/components/GitHubStats';
import { FloatingFormModal } from '@/components/ui/floating-form-modal';

const mdxComponents = {
  ROICalculator,
  ArchitectureDiagram,
  GitHubStats,
};

export async function generateStaticParams() {
  const paths = getCollectionIds('services');
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const serviceData = await getCollectionData('services', slug);
  
  if (!serviceData) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: serviceData.seoTitle,
    description: serviceData.seoDescription,
    keywords: [
      serviceData.title,
      "custom software development",
      "enterprise software development services",
      "software development business",
      "customized software development services",
      "custom business software"
    ],
    openGraph: {
      title: serviceData.seoTitle,
      description: serviceData.seoDescription,
      type: 'website',
    },
  };
}

const heroImageMap: Record<string, string> = {
  'crm': '/services/crm-new.webp',
  'ai-automation': '/services/ai-automation.webp',
  'enterprise-cloud': '/services/cloud-service.webp',
  'mobile-app-development': '/services/app-dev.webp',
  'erp-systems': '/services/erp.webp',
  'custom-software-engineering': '/services/custom-software.webp',
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const serviceData = await getCollectionData('services', slug);
  
  if (!serviceData) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceData.title,
    description: serviceData.seoDescription,
    serviceType: "Enterprise Software Development",
    areaServed: "IN",
    provider: {
      '@type': 'ITService',
      name: 'Parther Technologies',
      url: 'https://parthertech.com',
    },
    offers: {
      '@type': 'Offer',
      price: 'Contact for pricing',
      priceCurrency: 'INR'
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
              alt={`${serviceData.title} background`}
              fill
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        )}

        {slug === 'crm' ? (
          <FloatingFormModal />
        ) : (
          <div className="w-full px-6 md:px-12 xl:px-24 flex items-center relative z-10 max-w-7xl">
            <div className="z-10 relative max-w-2xl">
              <span className="inline-block px-3 py-1 mb-6 rounded-full border border-cf-border bg-cf-card text-xs font-mono-caps font-semibold text-cf-text-secondary tracking-widest uppercase shadow-sm">
                Enterprise Service
              </span>
              <h1 className="font-serif-display text-h2 md:text-display mt-4 leading-[1.1] text-cf-text drop-shadow-md">
                {serviceData.title}
              </h1>
              
              <p className="mt-6 text-body md:text-h4 text-cf-text-secondary drop-shadow-md">
                {serviceData.description}
              </p>
              
              <FloatingFormModal className="mt-12 z-[100] isolate w-fit" />
            </div>
          </div>
        )}
      </section>

      {/* Dynamic Content Section */}
      <section className="py-24 bg-cf-card prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif-display prose-headings:text-cf-text prose-p:text-cf-text-secondary">
        <div className="container-main max-w-4xl">
          <MDXRemote source={serviceData.content} components={mdxComponents} />
        </div>
      </section>
    </div>
  );
}
