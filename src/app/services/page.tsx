import { Metadata } from 'next';
import { ServicesSection } from '@/components/sections/ServicesSection';

export const metadata: Metadata = {
  title: 'Enterprise IT Services & Platform Architecture | Parther Technologies',
  description:
    'Explore our 12 core architectural practices: enterprise AI automation, multi-tenant SaaS, high-throughput ERP systems, headless commerce, and cloud-native infrastructure.',
  alternates: {
    canonical: 'https://parthertech.com/services',
  },
  openGraph: {
    title: 'Architectural Services & Engineering Practices | Parther Technologies',
    description:
      'We eliminate operational bottlenecks through purpose-built technology stacks, zero-trust infrastructure, and mathematical reliability across 12 core disciplines.',
    url: 'https://parthertech.com/services',
    siteName: 'Parther Technologies',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ServicesHubPage() {
  return (
    <main className="min-h-screen bg-cf-bg">
      <ServicesSection />
    </main>
  );
}
