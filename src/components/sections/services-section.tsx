import Link from "next/link";
import { ArrowUpLeft, Phone } from "lucide-react";

import type { PriceGroup, ServiceItem, SiteConfig } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type ServicesSectionProps = {
  config: SiteConfig;
  services: ServiceItem[];
  pricing: PriceGroup[];
};

export function ServicesSection({ config, services, pricing }: ServicesSectionProps) {
  return (
    <SectionShell id="services">
      <SectionHeading
        eyebrow={config.servicesSection.eyebrow}
        title={config.servicesSection.title}
        description={config.servicesSection.description}
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="group rounded-[1.8rem] border border-[var(--site-border)] bg-white/78 p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(183,127,69,0.35)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--site-secondary)]">
                  {service.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--site-foreground)]">
                  {service.title}
                </h3>
              </div>
              <ArrowUpLeft className="h-5 w-5 text-[var(--site-muted)] transition group-hover:text-[var(--site-primary)]" />
            </div>
            <p className="mt-4 text-base leading-7 text-[var(--site-muted)]">
              {service.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-[var(--site-border)] bg-[var(--site-surface-soft)] px-3 py-1 text-[var(--site-foreground)]">
                {service.duration}
              </span>
              <span className="rounded-full border border-[var(--site-border)] bg-[var(--site-surface-soft)] px-3 py-1 text-[var(--site-foreground)]">
                {service.priceFrom}
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[var(--site-muted)]">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--site-primary)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-[var(--site-border)] bg-[var(--site-surface)] p-4">
              <p className="text-sm font-medium text-[var(--site-foreground)]">{service.outcome}</p>
              <p className="mt-2 text-sm text-[var(--site-primary)]">{service.ctaLabel}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface-soft)] p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-[var(--site-primary)]">מחירים</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--site-foreground)] sm:text-3xl">
              מחירים ברורים וקלים להשוואה.
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--site-muted)] sm:text-base">
              אם לא בטוחים מה נכון לבחור, אפשר להתקשר ונתאים יחד את הטיפול ואת משך הזמן.
            </p>
          </div>
          <Link
            href={config.links.phone ?? `tel:${config.contact.phone}`}
            className={buttonVariants({ variant: "secondary", size: "md" })}
          >
            <Phone className="ml-2 h-4 w-4" />
            שיחה מהירה
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pricing.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.8rem] border border-[var(--site-border)] bg-white/78 p-6"
            >
              <div>
                <p className="text-lg font-semibold text-[var(--site-foreground)]">{group.title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--site-muted)]">{group.description}</p>
              </div>

              <div className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={`${group.title}-${item.duration}`}
                    className="flex items-center justify-between gap-4 rounded-[1.2rem] border border-[var(--site-border)] bg-[var(--site-surface)] px-4 py-3"
                  >
                    <span className="text-sm text-[var(--site-muted)]">{item.duration}</span>
                    <span className="text-base font-semibold text-[var(--site-foreground)]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[var(--site-border)] bg-white/72 px-4 py-4 text-sm leading-6 text-[var(--site-muted)]">
          המחירים המוצגים כאן נועדו לתת תמונה ברורה ומהירה. לשאלות, התאמה אישית או זמינות
          קרובה, הכי פשוט להתקשר או לשלוח הודעה.
        </div>
      </div>
    </SectionShell>
  );
}
