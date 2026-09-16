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
    name: `${serviceData.name} for ${cityData.name} Enterprises`,
    description: `Enterprise-grade ${serviceData.shortName} engineered by Parther Technologies for high-growth enterprises and startups in ${cityData.name}, ${cityData.countryName}.`,
    providerName: 'Parther Technologies Private Limited',
    areaServed: `${cityData.name}, ${cityData.countryName}`,
    serviceType: serviceData.name,
  };

  // Only emit LocalBusiness schema if it is our genuine physical engineering hub in Kolkata / Sector V
  const isLocalDeliveryHub = cityData.slug === 'kolkata' || cityData.slug === 'salt-lake';
  const localBusiness = isLocalDeliveryHub ? {
    name: `Parther Technologies - Global Engineering Hub`,
    description: `Enterprise Product Engineering & Delivery Center serving global clients.`,
    locality: "Kolkata",
    postalCode: '700091',
  } : undefined;

  const technicalSpecs = [
    { label: "Core Architecture", value: "Event-Driven Modular Microservices" },
    { label: "Backend Runtime", value: "Node.js LTS, BullMQ, Redis, PostgreSQL" },
    { label: "Operational Benchmark", value: "GoMyTruck (31 Modules, ULIP/VAHAN)" },
    { label: "Uptime & Delivery SLA", value: "99.99% Availability | 2-Week Sprints" },
  ];

  return (
    <GeoLandingTemplate
      title={`${serviceData.name} for ${cityData.name} Enterprises`}
      subtitle={isIndia ? `Enterprise Product Engineering & Custom Software Architecture in ${cityData.name}.` : `India-Based Enterprise Engineering Partner for High-Growth Companies in ${cityData.name}.`}
      blufSummary={`Parther Technologies delivers tier-1 ${serviceData.name} for high-growth businesses in ${cityData.name}, ${cityData.countryName}. Leveraging proven high-concurrency architectures from proprietary platforms like GoMyTruck (logistics) and ACS (5,000+ distributed workforce), we provide sub-second latency, rigorous data sovereignty, and dedicated engineering pods from our Salt Lake Sector V, Kolkata hub.`}
      sourcePage={`/locations/${country}/${city}/${service}`}
      sourceIdentifier={`${service}-${city}-seo`}
      faqs={faqs}
      serviceSchema={serviceSchema}
      localBusiness={localBusiness}
      technicalSpecs={technicalSpecs}
    >
      <div className="space-y-8">
        <section>
          <h2>The ${serviceData.shortName} Landscape in {cityData.name}</h2>
          <p>{localContext} {economicsData}</p>
          <p>We eliminate engineering bottlenecks by acting as your dedicated backend architecture strike team. {timezoneData}</p>
        </section>

        <section>
          <h2>Request a Technical Architecture Review for {cityData.name}</h2>
          <p>Schedule a complimentary 45-minute whiteboarding and architecture evaluation session with our lead system architects to evaluate your data flow, API integrations, and scaling roadmap.</p>
        </section>

        <Reveal delay={0.1}>
           <BusinessOutcomes />
        </Reveal>
      </div>
    </GeoLandingTemplate>
  );
}
