export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const SERVICES: Service[] = [
  { id: 'web-dev', name: 'Web Development Company', slug: 'web-development-company', description: 'Expert web development services including custom websites, progressive web apps, and modern front-end architectures.' },
  { id: 'app-dev', name: 'Mobile App Development Agency', slug: 'mobile-app-development-agency', description: 'Native and cross-platform mobile app development services for iOS and Android.' },
  { id: 'erp', name: 'Custom ERP Software', slug: 'custom-erp-software', description: 'Tailored Enterprise Resource Planning systems to streamline your business operations and supply chain.' },
  { id: 'saas', name: 'SaaS Development Services', slug: 'saas-development-services', description: 'End-to-end SaaS product development, from architecture design to cloud deployment.' },
  { id: 'seo', name: 'SEO & Digital Marketing', slug: 'seo-digital-marketing', description: 'Data-driven SEO and digital marketing strategies to boost your online visibility and lead generation.' },
  { id: 'ui-ux', name: 'UI/UX Design Agency', slug: 'ui-ux-design-agency', description: 'User-centric UI/UX design services to create intuitive and engaging digital experiences.' }
];
