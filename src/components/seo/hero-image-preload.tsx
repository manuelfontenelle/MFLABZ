import { heroGalleryData } from "@/data/hero-gallery-data";

export function HeroImagePreload() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const heroImageUrl = heroGalleryData[0]?.imageUrl;

  if (!heroImageUrl) {
    return null;
  }

  // Preload the mobile LCP candidate only — matches the optimized mobile track.
  const encoded = encodeURIComponent(heroImageUrl);
  const srcSet = [640, 828]
    .map((w) => `/_next/image?url=${encoded}&w=${w}&q=90 ${w}w`)
    .join(", ");

  return (
    <link
      rel="preload"
      as="image"
      imageSrcSet={srcSet}
      imageSizes="77vw"
      fetchPriority="high"
      media="(max-width: 639px)"
    />
  );
}
