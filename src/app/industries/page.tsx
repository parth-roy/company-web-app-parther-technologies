import { Metadata } from 'next';
import { IndustriesSection } from '@/components/sections/IndustriesSection';

export const metadata: Metadata = {
  title: 'Industry Expertise & Solutions | Parther Technologies',
  description:
    'Specialized enterprise IT solutions for manufacturing, healthcare, education, retail, logistics, fintech, AI SaaS, and real estate verticals.',
  alternates: {
    canonical: 'https://parthertech.com/industries',
  },
  openGraph: {
    title: 'Industry Expertise & Domain Architecture | Parther Technologies',
    description:
      'Enterprise software engineered for sector-specific regulatory compliance, high-concurrency workloads, and mission-critical reliability across core industry verticals.',
    url: 'https://parthertech.com/industries',
    siteName: 'Parther Technologies',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function IndustriesHubPage() {
  return (
    <main className="min-h-screen bg-cf-bg">
      <IndustriesSection isHubPage={true} />
    </main>
  );
}
