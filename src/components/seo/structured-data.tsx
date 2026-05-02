import type { SiteConfig } from "@/lib/types";

type StructuredDataProps = {
  config: SiteConfig;
};

export function StructuredData({ config }: StructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: config.brand.name,
    description: config.brand.description,
    telephone: config.contact.phone,
    ...(config.contact.email ? { email: config.contact.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: config.contact.address,
      addressLocality: "ירושלים",
      addressCountry: "IL",
    },
    openingHours: config.contact.hours,
    url: config.metadata.domain,
    areaServed: "Jerusalem",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
