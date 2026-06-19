import { heroGalleryData } from "@/data/hero-gallery-data";

const MOBILE_HERO_IMAGE_WIDTH = 640;
const MOBILE_HERO_IMAGE_QUALITY = 75;

export function HeroImagePreload() {
  const heroImage = heroGalleryData[0]?.imageUrl;

  if (!heroImage) {
    return null;
  }

  const preloadHref = `/_next/image?url=${encodeURIComponent(heroImage)}&w=${MOBILE_HERO_IMAGE_WIDTH}&q=${MOBILE_HERO_IMAGE_QUALITY}`;

  return (
    <link
      rel="preload"
      as="image"
      href={preloadHref}
      media="(max-width: 639px)"
    />
  );
}
