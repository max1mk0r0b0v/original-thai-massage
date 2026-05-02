import { Plus } from "lucide-react";

import type { FAQItem, SiteConfig } from "@/lib/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type FAQSectionProps = {
  config: SiteConfig;
  faqs: FAQItem[];
};

export function FAQSection({ config, faqs }: FAQSectionProps) {
  return (
    <SectionShell id="faq">
      <SectionHeading
        eyebrow={config.faqSection.eyebrow}
        title={config.faqSection.title}
        description={config.faqSection.description}
      />

      <div className="mt-12 grid gap-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-6 open:bg-[var(--site-surface-soft)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-[var(--site-foreground)]">
              <span>{item.question}</span>
              <Plus className="h-4 w-4 shrink-0 text-[var(--site-primary)] transition group-open:rotate-45" />
            </summary>
            <p className="mt-4 max-w-4xl text-base leading-7 text-[var(--site-muted)]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
