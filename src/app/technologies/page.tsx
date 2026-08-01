import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Technology Matrix | Parther Technologies',
  description: 'Explore the modern, scalable technology stacks we utilize to build highly secure, enterprise-grade applications.',
};

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-cf-bg pt-24 pb-16">
      <div className="container-main max-w-4xl">
        <h1 className="font-serif-display text-h1 md:text-display text-cf-text mb-6">
          The Technology Matrix
        </h1>
        <p className="text-body text-cf-text-secondary mb-16">
          We do not chase trends. We architect using hardened, globally supported frameworks to ensure your digital infrastructure remains secure and maintainable for the next decade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-cf-border bg-cf-card rounded-xl">
            <h2 className="font-serif-display text-h3 mb-4 text-cf-text">Frontend Architecture</h2>
            <ul className="space-y-2 text-cf-text-secondary">
              <li>• React.js & Next.js 15 (App Router)</li>
              <li>• Tailwind CSS v4 & PostCSS</li>
              <li>• Headless CMS & MDX Rendering</li>
            </ul>
          </div>
          
          <div className="p-8 border border-cf-border bg-cf-card rounded-xl">
            <h2 className="font-serif-display text-h3 mb-4 text-cf-text">Backend & Cloud Pipelines</h2>
            <ul className="space-y-2 text-cf-text-secondary">
              <li>• Node.js & TypeScript</li>
              <li>• Python (AI/LLM pipelines)</li>
              <li>• AWS, Vercel & Edge Computing</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
