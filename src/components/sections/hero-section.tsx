import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Leaf,
  MapPin,
  MessageCircleMore,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import type { SiteConfig } from "@/lib/types";
import { BrandLockup } from "@/components/ui/brand-lockup";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { siteAssets } from "@/lib/site-assets";

type HeroSectionProps = {
  config: SiteConfig;
};

export function HeroSection({ config }: HeroSectionProps) {
  return (
    <SectionShell className="relative overflow-hidden pb-10 pt-8 sm:pt-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(183,127,69,0.14),_transparent_30%),radial-gradient(circle_at_left,_rgba(143,165,111,0.14),_transparent_24%)]" />
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <div className="hero-rise hero-delay-1 inline-flex items-center gap-2 rounded-full border border-[var(--site-border-strong)] bg-white/70 px-4 py-2 text-sm text-[var(--site-foreground)]">
            <Sparkles className="h-4 w-4 text-[var(--site-primary)]" />
            {config.hero.eyebrow}
          </div>
          <h1 className="hero-rise hero-delay-2 mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[var(--site-foreground)] sm:text-5xl lg:text-6xl">
            {config.hero.title}
          </h1>
          <p className="hero-rise hero-delay-3 mt-6 max-w-2xl text-base leading-7 text-[var(--site-muted)] sm:text-lg sm:leading-8">
            {config.hero.description}
          </p>
          <div className="hero-rise hero-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={config.links.phone ?? `tel:${config.contact.phone}`} className={buttonVariants({ size: "lg" })}>
              {config.hero.primaryCta}
              <Phone className="mr-2 h-4 w-4" />
            </Link>
            <Link
              href={config.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              <MessageCircleMore className="ml-2 h-4 w-4" />
              {config.hero.secondaryCta}
            </Link>
          </div>

          <div className="hero-rise hero-delay-5 mt-8 flex items-center gap-3 text-sm text-[var(--site-muted)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--site-border-strong)] bg-white/70 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-[var(--site-accent)]" />
              {config.hero.trustLine}
            </div>
          </div>

          <div className="hero-rise hero-delay-6 mt-8 grid gap-3 text-sm text-[var(--site-muted)] sm:grid-cols-3">
            {config.hero.highlights.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--site-border)] bg-white/75 px-4 py-3 shadow-[0_16px_36px_rgba(80,56,35,0.07)]"
              >
                <Star className="h-4 w-4 text-[var(--site-primary)]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-rise hero-delay-4 overflow-hidden rounded-[2rem] border border-[var(--site-border)] bg-[linear-gradient(180deg,rgba(255,250,243,0.96),rgba(241,229,211,0.94))] shadow-[0_28px_70px_rgba(80,56,35,0.12)]">
          <div className="relative aspect-[4/3] min-h-[18rem] sm:min-h-[22rem]">
            <Image
              src={siteAssets.heroTreatment}
              alt="Original Thai Massage Jerusalem"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="image-polish object-cover"
            />
            <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
              <div className="rounded-full border border-white/70 bg-white/88 px-4 py-2 text-sm font-medium text-[var(--site-secondary)] shadow-[0_12px_28px_rgba(45,33,24,0.12)]">
                ירושלים
              </div>
            </div>
          </div>

          <div className="space-y-4 p-5 sm:p-6">
            <div className="rounded-[1.6rem] border border-[var(--site-border)] bg-white/82 p-5 shadow-[0_14px_34px_rgba(45,33,24,0.08)] sm:p-6">
              <BrandLockup config={config} size="lg" />
              <p className="mt-4 text-sm leading-6 text-[var(--site-muted)]">
                סטודיו תאילנדי מסורתי במרכז העיר, עם הזמנה פשוטה ומענה אנושי.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[var(--site-border)] bg-white/75 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--site-foreground)]">
                  <Phone className="h-4 w-4 text-[var(--site-primary)]" />
                  הזמנה מהירה
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--site-muted)]">
                  מענה נוח בטלפון או בוואטסאפ בלי שלבים מיותרים.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-[var(--site-border)] bg-white/75 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--site-foreground)]">
                  <MapPin className="h-4 w-4 text-[var(--site-primary)]" />
                  מיקום מרכזי
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--site-muted)]">
                  {config.contact.address}
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-[var(--site-border)] bg-white/75 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--site-foreground)]">
                  <Clock3 className="h-4 w-4 text-[var(--site-primary)]" />
                  שעות פעילות
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--site-muted)]">{config.contact.hours}</p>
              </div>
              <div className="rounded-[1.4rem] border border-[var(--site-border)] bg-white/75 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--site-foreground)]">
                  <Leaf className="h-4 w-4 text-[var(--site-primary)]" />
                  יחס אישי
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--site-muted)]">
                  מתאים למי שמחפשים טיפול רגוע, מקצועי ולא מתאמץ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
