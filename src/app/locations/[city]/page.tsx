import { Metadata } from 'next';
import MultiStepForm from '@/components/MultiStepForm';
import { getLocationIds, getLocationData } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getLocationIds();
  return paths.map((path) => ({
    city: path.params.city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const city = (await params).city;
  const locationData = await getLocationData(city);
  
  if (!locationData) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: locationData.seoTitle,
    description: locationData.seoDescription,
    openGraph: {
      title: locationData.seoTitle,
      description: locationData.seoDescription,
      type: 'website',
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const city = (await params).city;
  const locationData = await getLocationData(city);
  
  if (!locationData) {
    notFound();
  }

  const capitalizedCity = city.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ITService',
    name: `Parther Technologies - ${capitalizedCity}`,
    description: locationData.seoDescription,
    areaServed: {
      '@type': 'City',
      name: capitalizedCity,
    },
    provider: {
      '@type': 'LocalBusiness',
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
              Parther Technologies • {capitalizedCity}
            </span>
            <h1 className="font-serif-display text-h2 md:text-display mt-4 leading-[1.1] text-cf-text">
              {locationData.title}
            </h1>
            
            <p className="mt-6 text-body md:text-h4 text-cf-text-secondary max-w-xl">
              {locationData.description}
            </p>

          </div>

          <div className="z-10 relative bg-cf-card p-6 md:p-8 rounded-2xl border border-cf-border shadow-float">
            <h3 className="font-serif-display text-h3 mb-2 text-cf-text">Request Technical Assessment</h3>
            <p className="text-sm text-cf-text-secondary mb-6">Receive your preliminary architectural assessment for your {capitalizedCity} business within 15 minutes.</p>
            <MultiStepForm />
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-24 bg-cf-card prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif-display prose-headings:text-cf-text prose-p:text-cf-text-secondary">
        <div className="container-main">
          <MDXRemote source={locationData.content} />
        </div>
      </section>
    </div>
  );
}
