import { Metadata } from 'next';
import Link from 'next/link';
import { ALL_CITIES, GOLDEN_CITIES, INDIAN_CITIES, TOP_METROS } from '@/lib/cities';
import { SERVICES } from '@/lib/services';

export const metadata: Metadata = {
  title: "Engineering Hubs & Locations | Parther Technologies",
  description: "Explore Parther Technologies' global reach and Pan-India engineering footprint across 950+ cities in India, USA, UK, Canada, Australia, and the Middle East.",
};

export default function LocationsIndexPage() {
  const defaultService = SERVICES[0].id;

  // Group Indian cities by State
  const indianByState = INDIAN_CITIES.reduce((acc, city) => {
    const state = city.state || 'Other';
    if (!acc[state]) acc[state] = [];
    acc[state].push(city);
    return acc;
  }, {} as Record<string, typeof INDIAN_CITIES>);

  // Group Global cities by Country
  const globalByCountry = GOLDEN_CITIES.reduce((acc, city) => {
    if (!acc[city.countryName]) acc[city.countryName] = [];
    acc[city.countryName].push(city);
    return acc;
  }, {} as Record<string, typeof GOLDEN_CITIES>);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white text-cf-text">
      <div className="container-main max-w-6xl">
        <div className="mb-16">
          <div className="inline-flex px-4 py-2 mb-6 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono-caps font-semibold tracking-widest text-gray-500">
            PAN-INDIA &amp; GLOBAL HUBS
          </div>
          <h1 className="font-syncopate font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Our Operational Locations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Parther Technologies operates across <strong>800+ cities in India</strong> and delivers offshore product engineering for tier-1 enterprises in <strong>50 global tech markets</strong>.
          </p>
        </div>

        {/* Section 1: Top Indian Metros */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <div>
              <h2 className="font-syncopate font-bold text-2xl tracking-tight">🇮🇳 Major Indian Tech Metros</h2>
              <p className="text-sm text-gray-500 mt-1">Direct engineering hubs &amp; regional software delivery centers</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TOP_METROS.map((metro) => (
              <Link
                key={metro.slug}
                href={`/locations/${metro.country}/${metro.slug}/${defaultService}`}
                className="group flex flex-col p-4 rounded-2xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50/40 transition-all shadow-xs"
              >
                <span className="font-bold text-base text-gray-900 group-hover:text-blue-600 transition-colors">{metro.name}</span>
                <span className="text-xs text-gray-500 mt-1">{metro.state}</span>
                <span className="text-xs font-semibold text-blue-600 mt-3 group-hover:translate-x-0.5 transition-transform">Explore services &rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: Global Tech Hubs */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <div>
              <h2 className="font-syncopate font-bold text-2xl tracking-tight">🌍 International Engineering Hubs</h2>
              <p className="text-sm text-gray-500 mt-1">Offshore product engineering partner for high-growth global startups</p>
            </div>
          </div>
          <div className="space-y-12">
            {Object.entries(globalByCountry).map(([countryName, cities]) => (
              <div key={countryName}>
                <h3 className="text-xs font-mono-caps font-semibold text-gray-400 tracking-widest mb-4 uppercase">{countryName}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.country}/${city.slug}/${defaultService}`}
                      className="p-3 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50/50 transition-all group flex flex-col"
                    >
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">{city.name}</span>
                      <span className="text-xs text-gray-400">{city.state}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Pan-India 800+ Cities by State */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <div>
              <h2 className="font-syncopate font-bold text-2xl tracking-tight">🇮🇳 All India Coverage (800+ Cities)</h2>
              <p className="text-sm text-gray-500 mt-1">Industrial corridors, Tier-2 &amp; Tier-3 commercial districts</p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-100 text-blue-800">
              {INDIAN_CITIES.length} Cities
            </span>
          </div>

          <div className="space-y-12">
            {Object.entries(indianByState).map(([state, cities]) => (
              <div key={state} className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif-display text-lg font-bold text-gray-900">{state}</h3>
                  <span className="text-xs text-gray-400 font-medium">{cities.length} cities</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.country}/${city.slug}/${defaultService}`}
                      className="text-xs px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 border border-gray-200/80 transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
