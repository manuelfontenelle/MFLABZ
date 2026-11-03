import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 86, 90],
    unoptimized: isDevelopment,
    minimumCacheTTL: isDevelopment ? 0 : 2592000,
    localPatterns: [
      {
        pathname: "/images/**"
      }
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default withNextIntl(nextConfig);
