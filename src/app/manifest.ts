import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "MFLABZ",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f6f0",
    theme_color: "#f8f6f0",
    icons: [
      {
        src: "/images/mflabz-logo.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any"
      },
      {
        src: "/apple-icon",
        type: "image/png",
        sizes: "180x180",
        purpose: "maskable"
      }
    ]
  };
}
