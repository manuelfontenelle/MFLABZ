export type PortfolioCategory =
	| "Logo"
	| "Business Cards"
	| "Trifold"
	| "Bifold"
	| "Brochure"
	| "Flyer"
	| "Roll Up"
	| "Billboard"
	| "Yard Sign"
	| "Social Media"

export type PortfolioItem = {
	id: string
	category: PortfolioCategory
	imageUrl: string
	fallbackImageUrl: string
	imageAlt: string
}

type PortfolioItemSeed = Omit<PortfolioItem, "fallbackImageUrl">

const portfolioItems: PortfolioItemSeed[] = [
	{
		id: "monogram-logo-suite",
		category: "Logo",
		imageUrl:
			"/images/portfolio/logo/design-modern-creative-minimalist-business-logo-design-for-your-brand-1.jpg",
		imageAlt:
			"Nebraska+ health and wellness clinic logo design with heartbeat lettermark",
	},
	{
		id: "brand-logo-mark",
		category: "Logo",
		imageUrl:
			"/images/portfolio/logo/design-modern-creative-minimalist-business-logo-design-for-your-brand-2.jpg",
		imageAlt: "Spheer.io technology logo design with circular blue icon",
	},
	{
		id: "wordmark-identity-study",
		category: "Logo",
		imageUrl:
			"/images/portfolio/logo/design-modern-creative-minimalist-business-logo-design-for-your-brand-3.jpg",
		imageAlt:
			"Logo design portfolio grid for Method, VetyVert, Volt, Aquora, effet do and ClearNet",
	},
	{
		id: "symbol-grid-system",
		category: "Logo",
		imageUrl:
			"/images/portfolio/logo/design-modern-creative-minimalist-business-logo-design-for-your-brand-4.jpg",
		imageAlt:
			"Logo design portfolio grid for Snap, Presti Cleaning, Apside, Cessio, French Leashes and Ernestine Castagnou",
	},
	{
		id: "minimal-business-card",
		category: "Business Cards",
		imageUrl: "/images/portfolio/business-cards/businessCard1.jpg",
		imageAlt:
			"Purple MyCookies business card design with cookie icon and QR code",
	},
	{
		id: "luxury-business-card",
		category: "Business Cards",
		imageUrl: "/images/portfolio/business-cards/businessCard2.jpg",
		imageAlt:
			"Black and orange OHMEGA electrician business card design mockup",
	},
	{
		id: "brand-business-card",
		category: "Business Cards",
		imageUrl: "/images/portfolio/business-cards/businessCard3.jpg",
		imageAlt: "Orange Afrik-Frais food service business card design mockup",
	},
	{
		id: "studio-business-card",
		category: "Business Cards",
		imageUrl: "/images/portfolio/business-cards/businessCard4.jpg",
		imageAlt: "Red, black and white Justica business card design with QR code",
	},
	{
		id: "restaurant-trifold",
		category: "Trifold",
		imageUrl: "/images/portfolio/trifold/trifold1.jpg",
		imageAlt:
			"FIMARIS wealth management trifold brochure design mockup",
	},
	{
		id: "corporate-trifold",
		category: "Trifold",
		imageUrl: "/images/portfolio/trifold/trifold2.jpg",
		imageAlt:
			"Klean vehicle cleaning trifold brochure design with green car visual",
	},
	{
		id: "wellness-trifold",
		category: "Trifold",
		imageUrl: "/images/portfolio/trifold/trifold3.jpg",
		imageAlt:
			"EB Informatique blue trifold brochure design for IT services",
	},
	{
		id: "event-trifold",
		category: "Trifold",
		imageUrl: "/images/portfolio/trifold/trifold4.jpg",
		imageAlt:
			"Alga Viva Mexico spirulina product trifold brochure design mockup",
	},
	{
		id: "product-bifold",
		category: "Bifold",
		imageUrl: "/images/portfolio/bifold/bifold1.jpg",
		imageAlt:
			"Thermaltech property heating bifold brochure design with blue mountain imagery",
	},
	{
		id: "service-bifold",
		category: "Bifold",
		imageUrl: "/images/portfolio/bifold/bifold2.jpg",
		imageAlt:
			"Dauphiblanc industrial laundry bifold brochure design with blue and green service sections",
	},
	{
		id: "agency-bifold",
		category: "Bifold",
		imageUrl: "/images/portfolio/bifold/bifold3.jpg",
		imageAlt:
			"MySmartObject vehicle tracking bifold brochure design with security app features",
	},
	{
		id: "premium-bifold",
		category: "Bifold",
		imageUrl: "/images/portfolio/bifold/bifold4.jpg",
		imageAlt:
			"Oatopia oat bar bifold brochure design with product photos and brand story",
	},
	{
		id: "brand-brochure",
		category: "Brochure",
		imageUrl: "/images/portfolio/brochure/brochure1.jpg",
		imageAlt:
			"Preventi cardio health brochure design spread with medical illustrations",
	},
	{
		id: "sales-brochure",
		category: "Brochure",
		imageUrl: "/images/portfolio/brochure/brochure2.jpg",
		imageAlt:
			"Maison Net+ cleaning service brochure design with blue layout and staff photos",
	},
	{
		id: "company-brochure",
		category: "Brochure",
		imageUrl: "/images/portfolio/brochure/brochure3.jpg",
		imageAlt:
			"Emotions Cuisines kitchen brochure design with black and red pages",
	},
	{
		id: "catalog-brochure",
		category: "Brochure",
		imageUrl: "/images/portfolio/brochure/brochure4.jpg",
		imageAlt:
			"MakiZoku sushi takeaway menu brochure design with orange and cream layout",
	},
	{
		id: "event-flyer",
		category: "Flyer",
		imageUrl: "/images/portfolio/flyer/flyer1.jpg",
		imageAlt:
			"France Drone Services exterior cleaning flyer design with roof and facade photos",
	},
	{
		id: "restaurant-flyer",
		category: "Flyer",
		imageUrl: "/images/portfolio/flyer/flyer2.jpg",
		imageAlt:
			"Home Elec 07 photovoltaic services flyer design with solar panel imagery",
	},
	{
		id: "sale-flyer",
		category: "Flyer",
		imageUrl: "/images/portfolio/flyer/flyer3.jpg",
		imageAlt:
			"Vitasolar solar storage kit flyer design with battery and inverter products",
	},
	{
		id: "brand-flyer",
		category: "Flyer",
		imageUrl: "/images/portfolio/flyer/flyer4.jpg",
		imageAlt:
			"Gleam Car premium auto detailing flyer design with black and purple pricing layout",
	},
	{
		id: "conference-roll-up",
		category: "Roll Up",
		imageUrl: "/images/portfolio/roll-up/roll-up1.jpg",
		imageAlt:
			"MXQ disc pumps roll up banner design for industrial pump products",
	},
	{
		id: "retail-roll-up",
		category: "Roll Up",
		imageUrl: "/images/portfolio/roll-up/roll-up2.jpg",
		imageAlt:
			"Antonella Patitucci business coaching roll up banner design in orange and white",
	},
	{
		id: "expo-roll-up",
		category: "Roll Up",
		imageUrl: "/images/portfolio/roll-up/roll-up3.jpg",
		imageAlt:
			"Clyde and Kensington sales training roll up banner design with yellow and blue layout",
	},
	{
		id: "studio-roll-up",
		category: "Roll Up",
		imageUrl: "/images/portfolio/roll-up/roll-up4.jpg",
		imageAlt:
			"Retirement Income Life insurance roll up banner design for retirement protection services",
	},
	{
		id: "city-billboard",
		category: "Billboard",
		imageUrl: "/images/portfolio/billboard/billboard1.jpg",
		imageAlt:
			"CJK Tax Professionals tax loans billboard design with green and gold layout",
	},
	{
		id: "street-billboard",
		category: "Billboard",
		imageUrl: "/images/portfolio/billboard/billboard2.jpg",
		imageAlt:
			"DLS Facade outdoor billboard banner design installed on building scaffolding",
	},
	{
		id: "highway-billboard",
		category: "Billboard",
		imageUrl: "/images/portfolio/billboard/billboard3.jpg",
		imageAlt:
			"Art Eco Habitat comfort and energy services wall billboard design",
	},
	{
		id: "urban-billboard",
		category: "Billboard",
		imageUrl: "/images/portfolio/billboard/billboard4.jpg",
		imageAlt: "Ariat Work boots billboard design for Hayloft Western Wear",
	},
	{
		id: "real-estate-yard-sign",
		category: "Yard Sign",
		imageUrl: "/images/portfolio/yard-sign/yard-sign1.jpg",
		imageAlt: "Tax loans yard sign design placed on a residential lawn",
	},
	{
		id: "service-yard-sign",
		category: "Yard Sign",
		imageUrl: "/images/portfolio/yard-sign/yard-sign2.jpg",
		imageAlt: "OHMEGA electrical project yard sign design in black and orange",
	},
	{
		id: "campaign-yard-sign",
		category: "Yard Sign",
		imageUrl: "/images/portfolio/yard-sign/yard-sign3.jpg",
		imageAlt:
			"Keep Smiling plumbing, electric, heating and cooling yard sign design",
	},
	{
		id: "event-yard-sign",
		category: "Yard Sign",
		imageUrl: "/images/portfolio/yard-sign/yard-sign4.jpg",
		imageAlt:
			"DLS Facade exterior insulation yard sign design installed in front of a house",
	},
	{
		id: "instagram-post-set",
		category: "Social Media",
		imageUrl: "/images/portfolio/social-media/social-media1.jpg",
		imageAlt:
			"Social media ad designs for luxury vehicle rental and air conditioning promotion",
	},
	{
		id: "social-carousel",
		category: "Social Media",
		imageUrl: "/images/portfolio/social-media/social-media2.jpg",
		imageAlt:
			"Social media post designs for business event promotion, retail contest and tractor advertising",
	},
	{
		id: "ad-creative-set",
		category: "Social Media",
		imageUrl: "/images/portfolio/social-media/social-media3.jpg",
		imageAlt:
			"Product promotion social media ad designs for Garmin marine electronics and spa financing offer",
	},
	{
		id: "brand-social-kit",
		category: "Social Media",
		imageUrl: "/images/portfolio/social-media/social-media4.jpg",
		imageAlt:
			"Social media banner design set for personalized gifts, weekend sale promotion and automotive services",
	},
]

export const portfolioData: PortfolioItem[] = portfolioItems.map(
	({ imageUrl, ...item }) => ({
		...item,
		imageUrl,
		fallbackImageUrl: imageUrl,
	}),
)
