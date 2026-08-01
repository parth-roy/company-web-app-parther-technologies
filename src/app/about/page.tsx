import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Parther Technologies | Enterprise Digital Agency',
  description: 'Learn about our engineering philosophy, our executive leadership, and our commitment to resolving enterprise operational bottlenecks.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cf-bg pt-24 pb-16">
      <div className="container-main max-w-3xl">
        <h1 className="font-serif-display text-h1 md:text-display text-cf-text mb-6">
          About Parther Technologies
        </h1>
        <p className="text-body text-cf-text-secondary mb-12">
          We are not a traditional outsourcing firm. We are a specialized architectural task force dedicated to eliminating technical debt and operational bottlenecks for enterprises in Eastern India.
        </p>
        <div className="p-8 border border-cf-border bg-cf-card rounded-xl">
          <h2 className="font-serif-display text-h3 mb-4 text-cf-text">Our Philosophy</h2>
          <p className="text-cf-text-secondary mb-4">
            The paradigm of enterprise B2B procurement has permanently shifted. We believe that technology architecture must be framed as an accountable delivery capability aligned to business outcomes, rather than just a list of systems.
          </p>
          <Link href="/contact" className="text-primary hover:underline font-semibold">Contact our Executive Team &rarr;</Link>
        </div>
      </div>
    </main>
  );
}
