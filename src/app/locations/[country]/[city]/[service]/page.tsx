import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';
import { ALL_CITIES, GOLDEN_CITIES, TOP_METROS, GlobalCity } from '@/lib/cities';
import { SERVICES, Service } from '@/lib/services';
import { BusinessOutcomes } from '@/components/BusinessOutcomes';
import { Reveal } from '@/components/Reveal';

export const dynamicParams = true;

// Statically pre-render the top international golden hubs + top Indian metros for blazing-fast TTFB
export async function generateStaticParams() {
  const priorityCities = [
    ...GOLDEN_CITIES,
    ...TOP_METROS,
  ];

  const params: { country: string; city: string; service: string }[] = [];
  for (const city of priorityCities) {
    for (const service of SERVICES) {
      params.push({
        country: city.country,
        city: city.slug,
        service: service.id,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; city: string; service: string }> }): Promise<Metadata> {
  const { country, city, service } = await params;
  const cityData = ALL_CITIES.find((c) => c.slug === city && c.country === country);
  const serviceData = SERVICES.find((s) => s.id === service);

  if (!cityData || !serviceData) return { title: 'Not Found' };

  const isIndia = cityData.country === 'india';

  return {
    title: `${serviceData.name} in ${cityData.name}${isIndia ? `, ${cityData.state}` : `, ${cityData.countryName}`} | Parther Technologies`,
    description: isIndia
      ? `Parther Technologies provides enterprise-grade ${serviceData.shortName} for companies, startups, and industrial leaders in ${cityData.name}, ${cityData.state}.`
      : `Parther Technologies is an India-based engineering partner providing elite ${serviceData.shortName} for startups and enterprises in ${cityData.name}, ${cityData.countryName}.`,
    alternates: {
      canonical: `https://parthertech.com/locations/${country}/${city}/${service}/`,
    },
  };
}

export default async function LocationServicePage({ params }: { params: Promise<{ country: string; city: string; service: string }> }) {
  const { country, city, service } = await params;
  
  const cityData = (ALL_CITIES.find((c) => c.slug === city && c.country === country) || {
    name: city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' '),
    slug: city,
    country: country,
    countryName: country === 'india' ? 'India' : country.toUpperCase(),
    state: country === 'india' ? 'India' : country.toUpperCase(),
  }) as GlobalCity;
  
  const serviceData = SERVICES.find((s) => s.id === service) as Service;

  const isIndia = cityData.country === 'india';

  // Quality Threshold Data tailored for domestic vs international
  const localContext = isIndia
    ? `Supporting the rapid digital transformation and technology adoption in ${cityData.name}, ${cityData.state}.`
    : `Supporting the booming tech ecosystem in ${cityData.name}, ${cityData.countryName}.`;

  const economicsData = isIndia
    ? `Delivering world-class product engineering, custom SaaS, and enterprise software directly from West Bengal for fast-growing businesses in ${cityData.name}.`
    : `Contrasting $120k+ local developer salaries in ${cityData.name} with our flexible, high-velocity India-based scaling model.`;

  const timezoneData = isIndia
    ? `Direct real-time collaboration during regular Indian business hours (IST) with dedicated engineering teams.`
    : `Seamless daily standups spanning IST and local time in ${cityData.name}.`;

  const faqs = isIndia ? [
    {
      question: `Why choose Parther Technologies for ${serviceData.shortName} in ${cityData.name}?`,
      answer: `Parther Technologies provides tier-1 enterprise software engineering, custom SaaS development, and cloud architecture with direct founder-led oversight and transparent sprint cycles across ${cityData.name} and pan-India.`
    },
    {
      question: `How does Parther collaborate with teams in ${cityData.name}?`,
      answer: `We conduct daily sprint syncs, agile delivery cycles, and real-time collaboration directly aligned with your working hours.`
    },
    {
      question: `What is the estimated delivery timeframe for a ${serviceData.name} project?`,
      answer: `Standard MVP builds ship within 6 to 10 weeks, while full enterprise systems are delivered in iterative 2-week milestones.`
    }
  ] : [
    {
      question: `Why choose an India-based partner for ${serviceData.shortName} instead of a local agency in ${cityData.name}?`,
      answer: `While a local agency in ${cityData.name} carries massive overhead, Parther acts as your direct product engineering partner from India. We deliver enterprise-grade ${serviceData.shortName} matching top global standards, but without the $120k+ local salary burn rate.`
    },
    {
      question: `How do you handle timezone differences between India and ${cityData.name}?`,
      answer: `We establish dedicated overlapping windows for daily standups, sprint planning, and real-time communication, ensuring zero disruption to your roadmap.`
    },
    {
      question: `What is the typical cost for a ${serviceData.name} engagement?`,
      answer: `Costs vary based on complexity, but by avoiding the extreme local costs of ${cityData.name}, we typically reduce MVP or architecture development burn by 40-60%. Contact us for a Free Architecture Blueprint & Cost Estimate.`
    }
  ];

  const serviceSchema = {
    name: `${serviceData.name} for ${cityData.name}`,
    description: `Elite ${serviceData.shortName} provided by Parther Technologies for companies in ${cityData.name}, ${cityData.countryName}.`,
    providerName: 'Parther Technologies',
    areaServed: cityData.name,
  };

  const localBusiness = {
    name: `Parther Technologies - ${cityData.name}`,
    description: `Enterprise Product Engineering Partner serving ${cityData.name}.`,
    locality: cityData.name,
    postalCode: '',
  };

  return (
    <GeoLandingTemplate
      title={`${serviceData.name} for ${cityData.name} Companies`}
      subtitle={isIndia ? `Enterprise Product Engineering & Custom Software in ${cityData.name}.` : `India-Based Product Engineering Partner for Fast-Scaling Startups in ${cityData.name}.`}
      blufSummary={`We provide dedicated ${serviceData.name} to help companies in ${cityData.name}, ${cityData.countryName} build and scale modern digital infrastructure.`}
      sourcePage={`/locations/${country}/${city}/${service}`}
      sourceIdentifier={`${service}-${city}-seo`}
      faqs={faqs}
      serviceSchema={serviceSchema}
      localBusiness={localBusiness}
    >
      <div className="space-y-8">
        <section>
          <h2>The ${serviceData.shortName} Landscape in {cityData.name}</h2>
          <p>{localContext} {economicsData}</p>
          <p>We solve the engineering bottleneck by acting as your dedicated backend. {timezoneData}</p>
        </section>

        <section>
          <h2>Get a Free Architecture Blueprint & MVP Cost Estimate</h2>
          <p>Book a strategic session with our lead architects today to map out your infrastructure, cloud pipeline, and scaling roadmap for {cityData.name}.</p>
        </section>

        <Reveal delay={0.1}>
           <BusinessOutcomes />
        </Reveal>
      </div>
    </GeoLandingTemplate>
  );
}
