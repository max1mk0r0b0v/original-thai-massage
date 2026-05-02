import Image from "next/image";

import type { GalleryItem, SiteConfig } from "@/lib/types";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type GallerySectionProps = {
  config: SiteConfig;
  gallery: GalleryItem[];
};

export function GallerySection({ config, gallery }: GallerySectionProps) {
  return (
    <SectionShell id="gallery">
      <SectionHeading
        eyebrow={config.gallerySection.eyebrow}
        title={config.gallerySection.title}
        description={config.gallerySection.description}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {gallery.map((item) => {
          return (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.8rem] border border-[var(--site-border)] bg-white/78 shadow-[0_18px_44px_rgba(80,56,35,0.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--site-surface-soft)]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="image-polish object-cover"
                  />
                ) : null}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(47,36,26,0.34)] to-transparent" />
              </div>
              <div className="px-5 pb-6 pt-5 sm:px-6">
                <p className="text-base font-semibold text-[var(--site-foreground)]">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--site-muted)]">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
