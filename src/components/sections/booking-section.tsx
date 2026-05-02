import Link from "next/link";
import { CalendarDays, MapPin, MessageCircleMore, Phone } from "lucide-react";

import type { SiteConfig } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type BookingSectionProps = {
  config: SiteConfig;
};

export function BookingSection({ config }: BookingSectionProps) {
  return (
    <SectionShell id="contact" disableReveal mobileReveal>
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--site-border)] bg-white/78 p-6 shadow-[0_18px_44px_rgba(80,56,35,0.08)] sm:p-8">
          <SectionHeading
            eyebrow={config.booking.eyebrow}
            title={config.booking.title}
            description={config.booking.description}
          />
          <div className="mt-6 rounded-2xl border border-[var(--site-border)] bg-[var(--site-surface-soft)] p-4">
            <p className="text-sm font-medium text-[var(--site-foreground)]">
              {config.booking.formTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--site-muted)]">
              {config.booking.availabilityNote}
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-background)] p-5">
              <p className="text-sm font-medium text-[var(--site-foreground)]">
                לקביעת תור או שאלה קצרה
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--site-muted)]">
                התקשרו אלינו או שלחו הודעת וואטסאפ. נשמח לענות, לבדוק זמינות ולעזור לכם
                לבחור את הטיפול הנכון.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={config.links.phone ?? `tel:${config.contact.phone}`}
                className={buttonVariants({ size: "lg" })}
              >
                התקשרו עכשיו
              </Link>
              <Link
                href={config.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                שלחו וואטסאפ
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface-soft)] p-6 sm:p-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-[var(--site-primary)]">
            {config.booking.embedTitle}
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.5rem] border border-[var(--site-border)] bg-white/78 p-5">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--site-primary)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--site-foreground)]">טלפון נייד</p>
                  <Link href={`tel:${config.contact.phone}`} className="text-sm text-[var(--site-muted)]">
                    {config.contact.phone}
                  </Link>
                </div>
              </div>
            </div>

            {config.contact.secondaryPhone ? (
              <div className="rounded-[1.5rem] border border-[var(--site-border)] bg-white/78 p-5">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[var(--site-primary)]" />
                  <div>
                    <p className="text-sm font-medium text-[var(--site-foreground)]">טלפון נוסף</p>
                    <Link
                      href={`tel:${config.contact.secondaryPhone}`}
                      className="text-sm text-[var(--site-muted)]"
                    >
                      {config.contact.secondaryPhone}
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="rounded-[1.5rem] border border-[var(--site-border)] bg-white/78 p-5">
              <div className="flex items-center gap-3">
                <MessageCircleMore className="h-5 w-5 text-[var(--site-primary)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--site-foreground)]">וואטסאפ</p>
                  <Link
                    href={config.links.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--site-muted)]"
                  >
                    הודעה קצרה ותוכלו לבדוק זמינות או לשאול על הטיפולים
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--site-border)] bg-white/78 p-5">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[var(--site-primary)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--site-foreground)]">כתובת</p>
                  <p className="text-sm text-[var(--site-muted)]">{config.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--site-border)] bg-white/78 p-5">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-[var(--site-primary)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--site-foreground)]">שעות פתיחה</p>
                  <p className="text-sm text-[var(--site-muted)]">{config.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[var(--site-border)] bg-white/72 p-5">
            <p className="text-sm font-medium text-[var(--site-foreground)]">המלצה קטנה</p>
            <p className="mt-3 text-sm leading-7 text-[var(--site-muted)]">
              אם אינכם בטוחים איזה טיפול מתאים לכם, צרו איתנו קשר ונשמח להמליץ לפי
              הצורך, משך הטיפול והזמינות הקרובה.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
