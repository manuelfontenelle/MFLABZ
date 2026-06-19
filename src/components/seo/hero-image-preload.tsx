export function HeroImagePreload() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <link
      rel="preload"
      as="image"
      href="/images/hero/mobile/hero1.avif"
      type="image/avif"
      fetchPriority="high"
      media="(max-width: 639px)"
    />
  );
}
