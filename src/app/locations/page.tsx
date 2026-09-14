import { Metadata } from 'next';
import Link from 'next/link';
import { GOLDEN_CITIES } from '@/lib/cities';
import { SERVICES } from '@/lib/services';

export const metadata: Metadata = {
  title: "Global Engineering Hubs | Parther Technologies",
  description: "Explore Parther Technologies' global reach. We provide elite offshore engineering for 50+ major tech hubs across the USA, UK, Canada, Australia, and the Middle East.",
};

export default function LocationsIndexPage() {
  // Group cities by country
  const groupedCities = GOLDEN_CITIES.reduce((acc, city) => {
    if (!acc[city.countryName]) {
      acc[city.countryName] = [];
    }
    acc[city.countryName].push(city);
    return acc;
  }, {} as Record<string, typeof GOLDEN_CITIES>);

  // Default to custom software as the entry point link for each city
  const defaultService = SERVICES[0].id; 

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white text-cf-text">
      <div className="container-main max-w-5xl">
        <div className="mb-16">
          <div className="inline-flex px-4 py-2 mb-6 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono-caps font-semibold tracking-widest text-gray-500">
            GLOBAL REACH
          </div>
          <h1 className="font-syncopate font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Global Engineering Hubs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Parther acts as the dedicated offshore engineering arm for fast-scaling startups and enterprises in the world's most competitive technology markets.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(groupedCities).map(([countryName, cities]) => (
            <div key={countryName} className="border-t border-gray-200 pt-8">
              <h2 className="font-syncopate font-bold text-2xl mb-8 tracking-tight">{countryName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {cities.map((city) => (
                  <div key={city.slug} className="flex flex-col">
                    <h3 className="font-serif-display text-xl font-bold mb-4">{city.name}</h3>
                    <ul className="flex flex-col gap-2">
                      {SERVICES.slice(0, 5).map((service) => (
                        <li key={service.id}>
                          <Link 
                            href={`/locations/${city.country}/${city.slug}/${service.id}`}
                            className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors"
                          >
                            {service.name} in {city.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link 
                          href={`/locations/${city.country}/${city.slug}/${defaultService}`}
                          className="text-sm text-[#0066cc] font-medium mt-1 inline-block"
                        >
                          View all services →
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
