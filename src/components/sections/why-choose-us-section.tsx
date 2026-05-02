import { CheckCircle2 } from "lucide-react";

import type { SiteConfig } from "@/lib/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type WhyChooseUsSectionProps = {
  config: SiteConfig;
};

export function WhyChooseUsSection({ config }: WhyChooseUsSectionProps) {
  return (
    <SectionShell id="why">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-[var(--site-border)] bg-white/75 p-7 shadow-[0_18px_44px_rgba(80,56,35,0.08)] sm:p-9">
          <SectionHeading
            eyebrow={config.whyChooseUs.eyebrow}
            title={config.whyChooseUs.title}
            description={config.whyChooseUs.description}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {config.whyChooseUs.points.map((point) => (
            <div
              key={point}
              className="rounded-[1.6rem] border border-[var(--site-border)] bg-[var(--site-surface-soft)] p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <CheckCircle2 className="h-5 w-5 text-[var(--site-primary)]" />
              </div>
              <p className="mt-4 text-base leading-7 text-[var(--site-muted)]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
