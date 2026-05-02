export type NavItem = {
  label: string;
  href: string;
};

export type ColorTheme = {
  background: string;
  foreground: string;
  surface: string;
  surfaceSoft: string;
  border: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  outcome: string;
  duration: string;
  priceFrom: string;
  ctaLabel: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  highlight?: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  image?: string;
};

export type PriceItem = {
  duration: string;
  price: string;
};

export type PriceGroup = {
  title: string;
  description: string;
  items: PriceItem[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type SiteConfig = {
  metadata: {
    title: string;
    description: string;
    domain: string;
  };
  brand: {
    name: string;
    tagline: string;
    secondaryText?: string;
    description: string;
  };
  colors: ColorTheme;
  contact: {
    phone: string;
    secondaryPhone?: string;
    whatsappNumber: string;
    email?: string;
    address: string;
    hours: string;
  };
  links: {
    booking: string;
    whatsapp: string;
    phone?: string;
  };
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    trustLine: string;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    features: string[];
    stats: StatItem[];
  };
  testimonialsSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  gallerySection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    availabilityNote: string;
    formTitle: string;
    embedTitle: string;
  };
  openingHoursSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      label: string;
      hours: string;
    }>;
  };
  faqSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    blurb: string;
    legal: string;
  };
};

export type SiteContent = {
  config: SiteConfig;
  services: ServiceItem[];
  faqs: FAQItem[];
  testimonials: TestimonialItem[];
  gallery: GalleryItem[];
  pricing: PriceGroup[];
};
