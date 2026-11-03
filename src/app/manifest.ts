import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import en from "../../messages/en.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: en.Metadata.title,
    short_name: siteConfig.creator,
    description: en.Metadata.description,
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
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
