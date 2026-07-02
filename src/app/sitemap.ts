import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const lastModified = new Date("2026-07-02");

const legalPages = ["/privacy", "/terms", "/legal"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1
    },
    ...legalPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3
    }))
  ];
}
