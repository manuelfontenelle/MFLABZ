import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const lastModified = new Date("2026-06-17");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
