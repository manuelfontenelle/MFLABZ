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
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
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
