import { Star } from "lucide-react";

import type { SiteConfig, TestimonialItem } from "@/lib/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type TestimonialsSectionProps = {
  config: SiteConfig;
  testimonials: TestimonialItem[];
};

export function TestimonialsSection({
  config,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <SectionShell id="testimonials">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-[var(--site-border)] bg-white/75 p-7 shadow-[0_18px_44px_rgba(80,56,35,0.08)] sm:p-9">
          <SectionHeading
            eyebrow={config.testimonialsSection.eyebrow}
            title={config.testimonialsSection.title}
            description={config.testimonialsSection.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-5">
              <p className="text-sm text-[var(--site-muted)]">דירוג ציבורי</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--site-foreground)]">4.7 / 5</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-5">
              <p className="text-sm text-[var(--site-muted)]">מה בולט בתגובות</p>
              <p className="mt-2 text-lg font-semibold text-[var(--site-foreground)]">
                שקט, מקצועיות ושירות אישי
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[1.8rem] border border-[var(--site-border)] bg-white/78 p-6 sm:p-8"
          >
            {testimonial.highlight ? (
              <span className="rounded-full border border-[var(--site-border)] bg-[var(--site-surface-soft)] px-3 py-1 text-xs font-medium text-[var(--site-secondary)]">
                {testimonial.highlight}
              </span>
            ) : null}
            <div className="mt-5 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star
                  key={`${testimonial.name}-${index}`}
                  className="h-4 w-4 fill-[var(--site-primary)] text-[var(--site-primary)]"
                />
              ))}
            </div>
            <p className="mt-6 text-base leading-7 text-[var(--site-muted)]">
              {testimonial.quote}
            </p>
            <div className="mt-8">
              <p className="font-medium text-[var(--site-foreground)]">{testimonial.name}</p>
              <p className="text-sm text-[var(--site-muted)]">
                {testimonial.role}
                {testimonial.company ? `, ${testimonial.company}` : ""}
              </p>
            </div>
          </article>
        ))}
        </div>
      </div>
    </SectionShell>
  );
}
