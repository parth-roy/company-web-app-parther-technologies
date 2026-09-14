import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';
import { CITIES, City } from '@/lib/cities';
import { SERVICES, Service } from '@/lib/services';
import { BusinessOutcomes } from '@/components/BusinessOutcomes';
import { Reveal } from '@/components/Reveal';

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ serviceCitySlug: string }>;
}

export async function generateStaticParams() {
  const paths: { serviceCitySlug: string }[] = [];
  
  for (const city of CITIES) {
    for (const service of SERVICES) {
      paths.push({
        serviceCitySlug: `${service.slug}-in-${city.slug}`
      });
    }
  }
  
  return paths;
}

function parseSlug(slug: string): { city: City | undefined, service: Service | undefined } {
  for (const service of SERVICES) {
    if (slug.startsWith(service.slug + '-in-')) {
      const citySlug = slug.replace(service.slug + '-in-', '');
      const city = CITIES.find(c => c.slug === citySlug);
      if (city) {
        return { city, service };
      }
    }
  }
  return { city: undefined, service: undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceCitySlug } = await params;
  const { city, service } = parseSlug(serviceCitySlug);

  if (!city || !service) {
    return {
      title: 'Not Found',
    };
  }

  const title = `${service.name} in ${city.name}, ${city.state} | Parther Technologies`;
  const description = `Looking for a top-rated ${service.name} in ${city.name}? Parther Technologies provides ${service.description.toLowerCase()} tailored for businesses in ${city.state}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { serviceCitySlug } = await params;
  const { city, service } = parseSlug(serviceCitySlug);

  if (!city || !service) {
    notFound();
  }

  const title = `Top ${service.name} in ${city.name}`;
  const subtitle = `Enterprise-grade ${service.description.toLowerCase()} designed for scalable businesses in ${city.state}.`;
  
  const blufSummary = `Parther Technologies is a premier ${service.name} serving ${city.name}, ${city.state}. We specialize in robust, scalable solutions tailored to your unique business needs, ensuring maximum ROI and operational efficiency in the local ${city.name} market.`;

  const faqs = [
    {
      question: `What makes your ${service.name} services the best choice for businesses in ${city.name}?`,
      answer: `Our team combines global expertise with local market understanding in ${city.state}. We deliver scalable, high-performance IT solutions that specifically address the challenges of businesses operating in ${city.name}.`
    },
    {
      question: `Do you provide ongoing support for clients in ${city.name}?`,
      answer: `Yes, we provide comprehensive 24/7 post-deployment support and maintenance for all our clients in ${city.name} to ensure continuous, reliable operations.`
    },
    {
      question: `How much do your ${service.name.toLowerCase()} services cost in ${city.name}?`,
      answer: `Project costs vary based on complexity, scope, and specific technology requirements. We offer competitive, transparent pricing models for our clients in ${city.name} and provide custom quotes after a detailed technical consultation.`
    }
  ];

  return (
    <div className="animate-hero-in">
      <GeoLandingTemplate
        title={title}
        subtitle={subtitle}
        blufSummary={blufSummary}
        sourcePage={`${service.slug}-geo`}
        sourceIdentifier={city.slug}
        faqs={faqs}
        serviceSchema={{
          name: `${service.name} in ${city.name}`,
          description: service.description,
          providerName: 'Parther Technologies',
          areaServed: city.name
        }}
        localBusiness={{
          name: 'Parther Technologies',
          description: `Leading provider of ${service.name.toLowerCase()} in ${city.name}, ${city.state}.`,
          locality: city.name,
          postalCode: ''
        }}
        technicalSpecs={[
          { label: 'Primary Market', value: city.name },
          { label: 'Region', value: city.state },
          { label: 'Service Class', value: 'Enterprise IT' },
          { label: 'Delivery Model', value: 'Agile & DevOps' }
        ]}
      >
        <div className="space-y-8">
          <Reveal>
            <h2 className="text-2xl font-serif-display text-cf-text mb-4">Driving Digital Transformation in {city.name}</h2>
            <p>
              As the digital landscape evolves, businesses in {city.name} require robust, forward-thinking technology partners. 
              Our <strong>{service.name}</strong> solutions are architected to deliver measurable business outcomes, streamline your operations, and accelerate your time-to-market.
            </p>
            <p>
              Whether you are an emerging startup or an established enterprise in {city.state}, our specialized engineering teams leverage modern tech stacks to build scalable architectures that future-proof your business.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
             <BusinessOutcomes />
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="text-xl font-serif-display text-cf-text mt-8 mb-4">Our Methodology</h3>
            <p>
              We don't just write code; we engineer solutions. Our approach begins with a deep technical assessment of your current infrastructure, followed by architectural design, agile development, rigorous automated testing, and seamless deployment.
            </p>
          </Reveal>
        </div>
      </GeoLandingTemplate>
    </div>
  );
}
