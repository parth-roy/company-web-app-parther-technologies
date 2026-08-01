import { Metadata } from 'next';
import Link from 'next/link';
import { getCollectionIds, getCollectionData } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Industry Expertise & Solutions | Parther Technologies',
  description: 'Specialized enterprise IT solutions for manufacturing, healthcare, education, retail, and financial services.',
};

export default async function IndustriesHubPage() {
  const industryIds = getCollectionIds('industries');
  
  const industries = await Promise.all(
    industryIds.map(async (id) => {
      const data = await getCollectionData('industries', id.params.slug);
      return data;
    })
  );

  return (
    <main className="min-h-screen bg-cf-bg">
      <section className="pt-24 pb-16 border-b border-cf-border bg-cf-card">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-h1 md:text-display text-cf-text mb-6">
              Industry Expertise
            </h1>
            <p className="text-body text-cf-text-secondary">
              Generic solutions fail in specialized markets. We engineer domain-specific architectures that resolve the unique regulatory and operational challenges of your vertical.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => industry && (
              <Link key={industry.id} href={`/industries/${industry.id}`} className="group block">
                <div className="p-8 border border-cf-border rounded-xl bg-cf-card hover:shadow-float transition-all h-full flex flex-col">
                  <h2 className="font-serif-display text-h3 mb-3 text-cf-text group-hover:text-primary transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-sm text-cf-text-secondary flex-grow mb-6">
                    {industry.description}
                  </p>
                  <span className="text-sm font-semibold text-cf-text mt-auto group-hover:underline">View Industry Solutions &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
