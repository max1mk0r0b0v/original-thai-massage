import type { CSSProperties } from "react";

import type { SiteConfig } from "@/lib/types";

export function getThemeStyle(config: SiteConfig): CSSProperties {
  return {
    "--site-background": config.colors.background,
    "--site-foreground": config.colors.foreground,
    "--site-surface": config.colors.surface,
    "--site-surface-soft": config.colors.surfaceSoft,
    "--site-border": config.colors.border,
    "--site-primary": config.colors.primary,
    "--site-secondary": config.colors.secondary,
    "--site-accent": config.colors.accent,
    "--site-muted": config.colors.muted,
  } as CSSProperties;
}
