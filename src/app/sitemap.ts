import type { MetadataRoute } from "next";

import { siteContent } from "@content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.config.metadata.domain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
