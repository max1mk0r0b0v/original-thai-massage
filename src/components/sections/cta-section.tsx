import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { SiteConfig } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";

type CTASectionProps = {
  config: SiteConfig;
};

export function CTASection({ config }: CTASectionProps) {
  return (
    <SectionShell>
      <div className="rounded-[2rem] border border-[var(--site-border)] bg-[linear-gradient(135deg,rgba(184,138,68,0.12),rgba(140,161,119,0.08))] p-8 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--site-primary)]">
              {config.cta.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--site-foreground)] sm:text-4xl md:text-[2.8rem]">
              {config.cta.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--site-muted)] sm:text-lg">
              {config.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={config.links.phone ?? `tel:${config.contact.phone}`} className={buttonVariants({ size: "lg" })}>
              {config.cta.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={config.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              {config.cta.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
