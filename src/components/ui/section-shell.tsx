import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

type SectionShellProps = {
  id?: string;
  className?: string;
  disableReveal?: boolean;
  mobileReveal?: boolean;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  className,
  disableReveal = false,
  mobileReveal = false,
  children,
}: SectionShellProps) {
  const sectionClasses = cn("px-4 py-14 sm:px-6 sm:py-16 lg:py-20", className);

  if (disableReveal && !mobileReveal) {
    return (
      <section id={id} className={cn("no-reveal", sectionClasses)}>
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </section>
    );
  }

  return (
    <RevealOnScroll
      id={id}
      className={cn(mobileReveal && "mobile-reveal-only", sectionClasses)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </RevealOnScroll>
  );
}
