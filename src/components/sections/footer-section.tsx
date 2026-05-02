import Link from "next/link";
import { MapPin, MessageCircleMore, Phone } from "lucide-react";

import type { SiteConfig } from "@/lib/types";
import { BrandLockup } from "@/components/ui/brand-lockup";
import { SectionShell } from "@/components/ui/section-shell";

type FooterSectionProps = {
  config: SiteConfig;
};

export function FooterSection({ config }: FooterSectionProps) {
  return (
    <SectionShell className="pb-8 pt-4" disableReveal>
      <footer className="grid gap-8 rounded-[2rem] border border-[var(--site-border)] bg-white/82 p-6 shadow-[0_18px_44px_rgba(80,56,35,0.08)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <BrandLockup config={config} size="md" />
          {config.brand.secondaryText ? (
            <p className="mt-2 text-sm text-[var(--site-muted)]">{config.brand.secondaryText}</p>
          ) : null}
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--site-muted)]">
            {config.footer.blurb}
          </p>
          <div className="mt-6 grid gap-3 text-sm text-[var(--site-muted)] sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--site-primary)]" />
              <span>{config.contact.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--site-primary)]" />
              <Link href={`tel:${config.contact.phone}`}>{config.contact.phone}</Link>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircleMore className="h-4 w-4 text-[var(--site-primary)]" />
              <Link href={config.links.whatsapp} target="_blank" rel="noreferrer">
                וואטסאפ להזמנות
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--site-primary)]">•</span>
              <span>{config.contact.hours}</span>
            </div>
            {config.contact.secondaryPhone ? (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--site-primary)]" />
                <Link href={`tel:${config.contact.secondaryPhone}`}>{config.contact.secondaryPhone}</Link>
              </div>
            ) : null}
            {config.contact.email ? (
              <div className="flex items-center gap-2">
                <span className="text-[var(--site-primary)]">•</span>
                <Link href={`mailto:${config.contact.email}`}>{config.contact.email}</Link>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-[var(--site-muted)] lg:justify-end">
          {config.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-[var(--site-muted)] lg:col-span-2">
          {config.footer.legal}
        </p>
      </footer>
    </SectionShell>
  );
}
