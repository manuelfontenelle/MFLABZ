export type HeroGalleryItem = {
	id: string
	name: string
	imageUrl: string
	fallbackImageUrl: string
	imageAlt: string
}

type HeroGalleryItemSeed = Omit<HeroGalleryItem, "fallbackImageUrl">

const heroGalleryItems: HeroGalleryItemSeed[] = [
	{
		id: "branding-mockup",
		name: "Merisca",
		imageUrl: "/images/hero/hero1.jpg",
		imageAlt: "Merisca jewelry logo displayed on an exterior boutique sign",
	},
	{
		id: "graphic-design-system",
		name: "Top Hop Brewing",
		imageUrl: "/images/hero/hero2.jpg",
		imageAlt: "Top Hop Brewing beer bottle label designs in multiple colors",
	},
	{
		id: "abstract-logo-identity",
		name: "Epicke Agency",
		imageUrl: "/images/hero/hero3.jpg",
		imageAlt: "Epicke Agency blue 3D logo mockup on a clean white wall",
	},
	{
		id: "stationery-brand-identity",
		name: "Laser G",
		imageUrl: "/images/hero/hero4.jpg",
		imageAlt: "Laser G logo embossed on a dark premium surface",
	},
	{
		id: "editorial-brand-collateral",
		name: "Raising Partner",
		imageUrl: "/images/hero/hero5.jpg",
		imageAlt: "Raising Partner wordmark printed in white on a blue device mockup",
	},
	{
		id: "packaging-design",
		name: "S&S Transport",
		imageUrl: "/images/hero/hero6.jpg",
		imageAlt: "S and S Transport logo mounted on an industrial building facade",
	},
	{
		id: "ubelicious-packaging",
		name: "Ubelicious",
		imageUrl: "/images/hero/ubelicious.jpg",
		imageAlt:
			"Ubelicious ube powder stand-up pouch packaging mockup on a purple background",
	},
	{
		id: "alliance-pro-uniform",
		name: "Alliance Pro",
		imageUrl: "/images/hero/alliance-pro.jpg",
		imageAlt:
			"Alliance Pro Nettoyage 31 branded cleaning uniform and logo on a white work coat",
	},
]

export const heroGalleryData: HeroGalleryItem[] = heroGalleryItems.map(
	({ imageUrl, ...item }) => ({
		...item,
		imageUrl,
		fallbackImageUrl: imageUrl,
	}),
)
