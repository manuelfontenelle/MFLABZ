import { heroGalleryData } from "@/data/hero-gallery-data";

export function HeroImagePreload() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const heroImage = heroGalleryData[0]?.imageUrl;

  if (!heroImage) {
    return null;
  }

  return (
    <link
      rel="preload"
      as="image"
      href={heroImage}
      fetchPriority="high"
      media="(max-width: 639px)"
    />
  );
}
