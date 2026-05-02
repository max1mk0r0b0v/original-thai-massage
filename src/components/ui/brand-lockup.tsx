import type { SiteConfig } from "@/lib/types";
import { BrandMark } from "@/components/ui/brand-mark";

type BrandLockupProps = {
  config: SiteConfig;
  size?: "sm" | "md" | "lg";
};

const textClasses = {
  sm: {
    wrap: "gap-3",
    title: "text-base sm:text-lg",
    subtitle: "text-[0.72rem] sm:text-xs",
  },
  md: {
    wrap: "gap-3.5",
    title: "text-xl sm:text-2xl",
    subtitle: "text-xs sm:text-sm",
  },
  lg: {
    wrap: "gap-4",
    title: "text-xl sm:text-2xl",
    subtitle: "text-sm sm:text-base",
  },
};

export function BrandLockup({ config, size = "md" }: BrandLockupProps) {
  const classes = textClasses[size];

  return (
    <div className={`flex min-w-0 items-center ${classes.wrap}`}>
      <BrandMark size={size} />
      <div className="min-w-0">
        <p className={`truncate font-semibold leading-tight text-[var(--site-foreground)] ${classes.title}`}>
          {config.brand.name}
        </p>
        <p className={`mt-1 truncate leading-tight text-[var(--site-primary)] ${classes.subtitle}`}>
          {config.brand.tagline}
        </p>
      </div>
    </div>
  );
}
