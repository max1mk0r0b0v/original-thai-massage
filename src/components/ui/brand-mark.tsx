import Image from "next/image";

import { siteAssets } from "@/lib/site-assets";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-11 w-11 sm:h-12 sm:w-12",
  md: "h-14 w-14 sm:h-15 sm:w-15",
  lg: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
};

export function BrandMark({ size = "md" }: BrandMarkProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-full border border-[var(--site-border-strong)] bg-white shadow-[0_14px_34px_rgba(80,56,35,0.12)] ${sizeClasses[size]}`}
      aria-hidden="true"
    >
      <Image
        src={siteAssets.logo}
        alt=""
        fill
        sizes={size === "lg" ? "72px" : size === "md" ? "60px" : "48px"}
        className="scale-[1.34] object-cover"
      />
    </div>
  );
}
