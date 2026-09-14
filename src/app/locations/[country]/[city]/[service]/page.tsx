import { Metadata } from 'next';
import GeoLandingTemplate from '@/components/GeoLandingTemplate';
import { GOLDEN_CITIES, GlobalCity } from '@/lib/cities';
import { SERVICES, Service } from '@/lib/services';
import { BusinessOutcomes } from '@/components/BusinessOutcomes';
import { Reveal } from '@/components/Reveal';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: { country: string; city: string; service: string }[] = [];
  for (const city of GOLDEN_CITIES) {
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
  const cityData = GOLDEN_CITIES.find((c) => c.slug === city && c.country === country);
  const serviceData = SERVICES.find((s) => s.id === service);

  if (!cityData || !serviceData) return { title: 'Not Found' };

  return {
    title: `${serviceData.name} in ${cityData.name}, ${cityData.countryName} | Parther Technologies`,
    description: `Parther Technologies is an India-based engineering partner providing elite ${serviceData.shortName} for startups and enterprises in ${cityData.name}, ${cityData.countryName}.`,
    alternates: {
      canonical: `https://parthertech.com/locations/${country}/${city}/${service}/`,
    },
  };
}

export default async function LocationServicePage({ params }: { params: Promise<{ country: string; city: string; service: string }> }) {
  const { country, city, service } = await params;
  
  const cityData = GOLDEN_CITIES.find((c) => c.slug === city && c.country === country) as GlobalCity;
  const serviceData = SERVICES.find((s) => s.id === service) as Service;

  // Anti-Spam Quality Threshold Data (Local Economics, Context, Timezone)
  const localContext = `Supporting the booming tech ecosystem in ${cityData.name}, ${cityData.countryName}.`;
  const economicsData = `Contrasting $120k+ local developer salaries in ${cityData.name} with our flexible, high-velocity India-based scaling model.`;
  const timezoneData = `Seamless daily standups spanning IST and local time in ${cityData.name}.`;

  const faqs = [
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
    description: `Elite offshore ${serviceData.shortName} provided by Parther Technologies for companies based in ${cityData.name}, ${cityData.countryName}.`,
    providerName: 'Parther Technologies',
    areaServed: cityData.name,
  };

  const localBusiness = {
    name: `Parther Technologies - ${cityData.name} Partner`,
    description: `India-based Product Engineering Partner serving ${cityData.name}.`,
    locality: cityData.name,
    postalCode: '',
  };

  return (
    <GeoLandingTemplate
      title={`${serviceData.name} for ${cityData.name} Companies`}
      subtitle={`India-Based Product Engineering Partner for Fast-Scaling Global Startups in ${cityData.name}.`}
      blufSummary={`We provide dedicated ${serviceData.name} to help companies in ${cityData.name}, ${cityData.countryName} ship faster without local salary bloat.`}
      sourcePage={`/locations/${country}/${city}/${service}`}
      sourceIdentifier={`${service}-${city}-seo`}
      faqs={faqs}
      serviceSchema={serviceSchema}
      localBusiness={localBusiness}
    >
      <div className="space-y-8">
        <section>
          <h2>The ${serviceData.shortName} Challenge in {cityData.name}</h2>
          <p>{localContext} {economicsData}</p>
          <p>We solve the engineering bottleneck by acting as your dedicated backend. {timezoneData}</p>
        </section>

        <section>
          <h2>Get a Free Architecture Blueprint & MVP Cost Estimate</h2>
          <p>Stop paying premium local agency rates in {cityData.name}. Book a strategic session with our lead architects today to map out your infrastructure, cloud pipeline, and scaling roadmap.</p>
        </section>

        <Reveal delay={0.1}>
           <BusinessOutcomes />
        </Reveal>
      </div>
    </GeoLandingTemplate>
  );
}
