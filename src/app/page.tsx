import Link from "next/link";
import { MessageCircleMore, Phone } from "lucide-react";

import { siteContent } from "@content/site";
import { StructuredData } from "@/components/seo/structured-data";
import { BookingSection } from "@/components/sections/booking-section";
import { FooterSection } from "@/components/sections/footer-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OpeningHoursSection } from "@/components/sections/opening-hours-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { BrandLockup } from "@/components/ui/brand-lockup";
import { buttonVariants } from "@/components/ui/button";
import { siteAssets } from "@/lib/site-assets";
import { getThemeStyle } from "@/lib/theme";

export default function Home() {
  const { config, services, testimonials, gallery, pricing } = siteContent;

  return (
    <div
      className="relative isolate min-h-screen text-[var(--site-foreground)]"
      style={getThemeStyle(config)}
    >
      <StructuredData config={config} />
      <div
        className="pointer-events-none fixed inset-0 z-[-30] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteAssets.background})` }}
      />
      <div className="pointer-events-none fixed inset-0 z-[-20] bg-[radial-gradient(circle_at_top,rgba(255,250,243,0.78),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(143,165,111,0.14),transparent_24%),linear-gradient(180deg,rgba(247,241,231,0.84),rgba(247,241,231,0.9)_42%,rgba(247,241,231,0.94))]" />
      <header className="sticky top-0 z-50 border-b border-[var(--site-border)] bg-[rgba(247,241,231,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <Link href="/" className="min-w-0">
            <BrandLockup config={config} size="sm" />
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-[var(--site-muted)] md:flex">
            {config.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--site-foreground)]">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href={config.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex sm:items-center sm:gap-2 sm:rounded-full sm:border sm:border-[var(--site-border-strong)] sm:bg-white/70 sm:px-4 sm:py-2 sm:text-sm sm:font-medium"
            >
              <MessageCircleMore className="h-4 w-4 text-[var(--site-primary)]" />
              וואטסאפ
            </Link>
            <Link
              href={config.links.phone ?? `tel:${config.contact.phone}`}
              className={buttonVariants({ size: "sm" })}
            >
              <Phone className="mr-2 h-4 w-4" />
              התקשרו
            </Link>
          </div>
        </div>
        <div className="scrollbar-none mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-4 sm:px-6 md:hidden">
          {config.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-[var(--site-border)] bg-white/72 px-4 py-2 text-sm text-[var(--site-muted)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <main className="relative z-10">
        <HeroSection config={config} />
        <WhyChooseUsSection config={config} />
        <ServicesSection config={config} services={services} pricing={pricing} />
        <GallerySection config={config} gallery={gallery} />
        <TestimonialsSection config={config} testimonials={testimonials} />
        <BookingSection config={config} />
        <OpeningHoursSection config={config} />
      </main>

      <div className="relative z-10">
        <FooterSection config={config} />
      </div>
    </div>
  );
}
