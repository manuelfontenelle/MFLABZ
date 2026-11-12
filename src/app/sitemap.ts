import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";

const lastModified = new Date("2026-07-02");

const legalPages = ["/privacy", "/terms", "/legal"] as const;

function localizedUrl(locale: string, path = "") {
  return `${siteConfig.url}/${locale}${path}`;
}

function languageAlternates(path = "") {
  return {
    ...Object.fromEntries(
      routing.locales.map((locale) => [locale, localizedUrl(locale, path)])
    ),
    "x-default": localizedUrl("en", path)
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries = routing.locales.map((locale) => ({
    url: localizedUrl(locale),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: languageAlternates()
    }
  }));

  const reviewEntries = routing.locales.map((locale) => ({
    url: localizedUrl(locale, "/reviews"),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    alternates: {
      languages: languageAlternates("/reviews")
    }
  }));

  const legalEntries = routing.locales.flatMap((locale) =>
    legalPages.map((path) => ({
      url: localizedUrl(locale, path),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: languageAlternates(path)
      }
    }))
  );

  return [...homeEntries, ...reviewEntries, ...legalEntries];
}
