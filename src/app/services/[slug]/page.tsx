import { Metadata } from 'next';
import MultiStepForm from '@/components/MultiStepForm';
import { getCollectionIds, getCollectionData } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import ROICalculator from '@/components/ROICalculator';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import GitHubStats from '@/components/GitHubStats';

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
    openGraph: {
      title: serviceData.seoTitle,
      description: serviceData.seoDescription,
      type: 'website',
    },
  };
}

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
              Enterprise Service
            </span>
            <h1 className="font-serif-display text-h2 md:text-display mt-4 leading-[1.1] text-cf-text">
              {serviceData.title}
            </h1>
            
            <p className="mt-6 text-body md:text-h4 text-cf-text-secondary max-w-xl">
              {serviceData.description}
            </p>

            <div className="mt-12 flex flex-col gap-3">
              <p className="text-xs font-mono-caps text-cf-text-tertiary">Deployed for regional leaders</p>
              <div className="flex gap-6 opacity-60 grayscale mix-blend-multiply items-center">
                <div className="h-8 w-24 bg-cf-border/50 rounded flex items-center justify-center text-xs font-bold font-mono">ITC</div>
                <div className="h-8 w-24 bg-cf-border/50 rounded flex items-center justify-center text-xs font-bold font-mono">Apollo</div>
                <div className="h-8 w-24 bg-cf-border/50 rounded flex items-center justify-center text-xs font-bold font-mono">Shyam</div>
              </div>
            </div>
          </div>

          <div className="z-10 relative bg-cf-card p-6 md:p-8 rounded-2xl border border-cf-border shadow-float">
            <h3 className="font-serif-display text-h3 mb-2 text-cf-text">Request Technical Scoping</h3>
            <p className="text-sm text-cf-text-secondary mb-6">Receive your preliminary architectural assessment for this service within 15 minutes.</p>
            <MultiStepForm />
          </div>
        </div>
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
