import { Metadata } from 'next';
import Link from 'next/link';
import { getCollectionIds, getCollectionData } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Enterprise IT Services & Architecture | Parther Technologies',
  description: 'Explore our core architectural services, ranging from custom ERP development to generative engine optimization and multi-tenant SaaS engineering.',
};

export default async function ServicesHubPage() {
  const serviceIds = getCollectionIds('services');
  
  // Fetch all service data to display in a grid
  const services = await Promise.all(
    serviceIds.map(async (id) => {
      const data = await getCollectionData('services', id.params.slug);
      return data;
    })
  );

  return (
    <main className="min-h-screen bg-cf-bg">
      <section className="pt-24 pb-16 border-b border-cf-border bg-cf-card">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-h1 md:text-display text-cf-text mb-6">
              Architectural Services
            </h1>
            <p className="text-body text-cf-text-secondary">
              We do not just write code. We eliminate operational bottlenecks through purpose-built technology stacks aligned directly to your business outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => service && (
              <Link key={service.id} href={`/services/${service.id}`} className="group block">
                <div className="p-8 border border-cf-border rounded-xl bg-cf-card hover:shadow-float transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-cf-bg border border-cf-border rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {/* Generic icon placeholder */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                  </div>
                  <h2 className="font-serif-display text-h3 mb-3 text-cf-text group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-cf-text-secondary flex-grow mb-6">
                    {service.description}
                  </p>
                  <span className="text-sm font-semibold text-cf-text mt-auto group-hover:underline">Explore Architecture &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
