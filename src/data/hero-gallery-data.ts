export type HeroGalleryItem = {
	id: string
	imageUrl: string
	fallbackImageUrl: string
	imageAlt: string
}

type HeroGalleryItemSeed = Omit<HeroGalleryItem, "fallbackImageUrl">

const heroGalleryItems: HeroGalleryItemSeed[] = [
	{
		id: "branding-mockup",
		imageUrl: "/images/hero/hero1.jpg",
		imageAlt: "Merisca jewelry logo displayed on an exterior boutique sign",
	},
	{
		id: "graphic-design-system",
		imageUrl: "/images/hero/hero2.jpg",
		imageAlt: "Top Hop Brewing beer bottle label designs in multiple colors",
	},
	{
		id: "abstract-logo-identity",
		imageUrl: "/images/hero/hero3.jpg",
		imageAlt: "Epicke Agency blue 3D logo mockup on a clean white wall",
	},
	{
		id: "stationery-brand-identity",
		imageUrl: "/images/hero/hero4.jpg",
		imageAlt: "Laser G logo embossed on a dark premium surface",
	},
	{
		id: "editorial-brand-collateral",
		imageUrl: "/images/hero/hero5.jpg",
		imageAlt: "Raising Partner wordmark printed in white on a blue device mockup",
	},
	{
		id: "packaging-design",
		imageUrl: "/images/hero/hero6.jpg",
		imageAlt: "S and S Transport logo mounted on an industrial building facade",
	},
]

export const heroGalleryData: HeroGalleryItem[] = heroGalleryItems.map(
	({ imageUrl, ...item }) => ({
		...item,
		imageUrl,
		fallbackImageUrl: imageUrl,
	}),
)
