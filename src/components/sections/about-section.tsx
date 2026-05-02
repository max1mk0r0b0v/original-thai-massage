import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import type { SiteConfig } from "@/lib/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { siteAssets } from "@/lib/site-assets";

type AboutSectionProps = {
  config: SiteConfig;
};

export function AboutSection({ config }: AboutSectionProps) {
  return (
    <SectionShell id="about" className="pt-8">
      <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-8 sm:p-10">
            <SectionHeading
              eyebrow={config.about.eyebrow}
              title={config.about.title}
              description={config.about.description}
            />
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
              <Image
                src={siteAssets.aboutTeam}
                alt="Team at Original Thai Massage Jerusalem"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            {config.about.features.map((feature) => (
              <div
                key={feature}
                className="rounded-[1.6rem] border border-[var(--site-border)] bg-[var(--site-surface-soft)] p-6"
              >
                <CheckCircle2 className="h-5 w-5 text-[var(--site-primary)]" />
                <p className="mt-4 text-base leading-7 text-[var(--site-muted)]">{feature}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {config.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.6rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-6"
              >
                <p className="text-3xl font-semibold text-[var(--site-foreground)]">{stat.value}</p>
                <p className="mt-3 text-sm text-[var(--site-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
