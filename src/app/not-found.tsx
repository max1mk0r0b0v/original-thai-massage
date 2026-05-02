import Link from "next/link";

import { siteContent } from "@content/site";
import { BrandMark } from "@/components/ui/brand-mark";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-xl rounded-[2rem] border border-[var(--site-border)] bg-white/82 p-8 text-center shadow-[0_18px_44px_rgba(80,56,35,0.08)] sm:p-10">
        <BrandMark size="lg" />
        <p className="mt-6 text-sm font-semibold tracking-[0.18em] text-[var(--site-primary)]">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-[var(--site-foreground)] sm:text-4xl">
          העמוד הזה לא נמצא
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--site-muted)]">
          אפשר לחזור לדף הבית, או ליצור קשר ישירות אם רציתם לקבוע תור או לשאול על הטיפולים.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className={buttonVariants({ size: "lg" })}>
            חזרה לדף הבית
          </Link>
          <Link
            href={siteContent.config.links.phone ?? `tel:${siteContent.config.contact.phone}`}
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            התקשרו עכשיו
          </Link>
        </div>
      </div>
    </main>
  );
}
