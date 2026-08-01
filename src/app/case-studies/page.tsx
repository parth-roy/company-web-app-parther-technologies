import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Case Studies & Deployments | Parther Technologies',
  description: 'Deep, data-backed case studies detailing how we resolve operational bottlenecks and drive massive ROI for our enterprise clients.',
};

export default function CaseStudiesHubPage() {
  return (
    <main className="min-h-screen bg-cf-bg pt-24 pb-16">
      <div className="container-main">
        <div className="max-w-3xl mb-16">
          <h1 className="font-serif-display text-h1 md:text-display text-cf-text mb-6">
            Enterprise Deployments
          </h1>
          <p className="text-body text-cf-text-secondary">
            We convert intent into trust. Explore our data-backed case studies detailing exactly how our software architectures increased client revenue and reduced operational bottlenecks.
          </p>
        </div>
        
        <div className="p-12 border border-dashed border-cf-border rounded-xl text-center">
          <p className="text-cf-text-secondary font-mono text-sm mb-4">No public case studies are currently published.</p>
          <p className="text-cf-text-tertiary text-xs">For proprietary NDAs, we only share architecture blueprints during technical discovery calls.</p>
        </div>
      </div>
    </main>
  );
}
