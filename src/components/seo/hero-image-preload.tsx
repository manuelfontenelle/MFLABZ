import { getImageProps } from "next/image";

import { heroGalleryData } from "@/data/hero-gallery-data";

const MOBILE_HERO_IMAGE_WIDTH = 640;
const MOBILE_HERO_IMAGE_HEIGHT = 800;
const MOBILE_HERO_IMAGE_QUALITY = 75;

export function HeroImagePreload() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const heroImage = heroGalleryData[0]?.imageUrl;

  if (!heroImage) {
    return null;
  }

  const {
    props: { src }
  } = getImageProps({
    alt: "",
    src: heroImage,
    width: MOBILE_HERO_IMAGE_WIDTH,
    height: MOBILE_HERO_IMAGE_HEIGHT,
    quality: MOBILE_HERO_IMAGE_QUALITY
  });

  return (
    <link
      rel="preload"
      as="image"
      href={src}
      media="(max-width: 639px)"
    />
  );
}
