import { Clock3 } from "lucide-react";

import type { SiteConfig } from "@/lib/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type OpeningHoursSectionProps = {
  config: SiteConfig;
};

export function OpeningHoursSection({ config }: OpeningHoursSectionProps) {
  return (
    <SectionShell id="hours" disableReveal>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-[var(--site-border)] bg-white/75 p-7 shadow-[0_18px_44px_rgba(80,56,35,0.08)] sm:p-9">
          <SectionHeading
            eyebrow={config.openingHoursSection.eyebrow}
            title={config.openingHoursSection.title}
            description={config.openingHoursSection.description}
          />
        </div>

        <div className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface-soft)] p-6 sm:p-8">
          <div className="space-y-4">
            {config.openingHoursSection.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-[1.4rem] border border-[var(--site-border)] bg-white/78 px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 text-[var(--site-primary)]" />
                  <span className="text-sm font-medium text-[var(--site-foreground)]">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm text-[var(--site-muted)]">{item.hours}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-[var(--site-muted)]">
            לפני שמגיעים, מומלץ להתקשר או לשלוח הודעה כדי לבדוק זמינות עדכנית.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
