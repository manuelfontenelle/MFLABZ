import { heroGalleryData } from "@/data/hero-gallery-data";

export function HeroImagePreload() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const heroImageUrl = heroGalleryData[0]?.imageUrl;

  if (!heroImageUrl) {
    return null;
  }

  // Point to the actual /_next/image optimized URL so the preload matches the
  // <Image> src that Next.js generates for the mobile LCP candidate (quality 90).
  const encoded = encodeURIComponent(heroImageUrl);
  const srcSet = [640, 828, 1080]
    .map((w) => `/_next/image?url=${encoded}&w=${w}&q=90 ${w}w`)
    .join(", ");

  return (
    <link
      rel="preload"
      as="image"
      // @ts-expect-error — imageSrcSet / imageSizes are valid HTML5 attrs not yet in React types
      imageSrcSet={srcSet}
      imageSizes="77vw"
      fetchPriority="high"
      media="(max-width: 639px)"
    />
  );
}
