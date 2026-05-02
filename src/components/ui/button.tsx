import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--site-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--site-background)] disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" &&
      "bg-[var(--site-primary)] text-[#1b130c] shadow-[0_18px_40px_rgba(120,82,47,0.18)] hover:-translate-y-0.5 hover:brightness-105",
    variant === "secondary" &&
      "border border-[var(--site-border-strong)] bg-[rgba(255,250,243,0.86)] text-[var(--site-foreground)] hover:bg-[var(--site-surface-soft)]",
    variant === "ghost" && "text-[var(--site-muted)] hover:bg-white/40 hover:text-[var(--site-foreground)]",
    size === "sm" && "h-10 px-4 text-sm",
    size === "md" && "h-11 px-5 text-sm sm:text-base",
    size === "lg" && "h-12 px-6 text-base",
    className,
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
