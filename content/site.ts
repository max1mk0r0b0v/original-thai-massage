import { faqs } from "@content/faq";
import { gallery } from "@content/gallery";
import { pricing } from "@content/pricing";
import { services } from "@content/services";
import { siteConfig } from "@content/site-config";
import { testimonials } from "@content/testimonials";
import type { SiteContent } from "@/lib/types";

export const siteContent: SiteContent = {
  config: siteConfig,
  services,
  faqs,
  testimonials,
  gallery,
  pricing,
};
