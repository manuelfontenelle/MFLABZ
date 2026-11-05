export type PortfolioCategory =
	| "Logo"
	| "Business Cards"
	| "Trifold"
	| "Bifold"
	| "Brochure"
	| "Flyer"
	| "Double Sided Flyer"
	| "Roll Up"
	| "Billboard"
	| "Yard Sign"
	| "Event Stand"
	| "Social Media"
	| "Packaging"
	| "Website"

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
		imageAlt: "Black and orange OHMEGA electrician business card design mockup",
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
		id: "fimaris-trifold",
		category: "Trifold",
		imageUrl: "/images/portfolio/trifold/trifold1.jpg",
		imageAlt:
			"FIMARIS conseil et patrimoine wealth management trifold brochure design",
	},
	{
		id: "klean-trifold",
		category: "Trifold",
		imageUrl: "/images/portfolio/trifold/trifold2.jpg",
		imageAlt:
			"Klean vehicle cleaning trifold brochure design with green car visual",
	},
	{
		id: "eb-informatique-trifold",
		category: "Trifold",
		imageUrl: "/images/portfolio/trifold/trifold3.jpg",
		imageAlt:
			"EB Informatique IT services trifold brochure design for businesses and individuals",
	},
	{
		id: "atena-properties-trifold",
		category: "Trifold",
		imageUrl: "/images/portfolio/trifold/trifold4.jpg",
		imageAlt:
			"ATENA Properties Geneva real estate agency trifold brochure design",
	},
	{
		id: "tech-cleaner-bifold",
		category: "Bifold",
		imageUrl: "/images/portfolio/bifold/bifold1.jpg",
		imageAlt:
			"Tech Cleaner gaming console and multimedia repair B2B bifold brochure design",
	},
	{
		id: "la-part-a-pizza-bifold",
		category: "Bifold",
		imageUrl: "/images/portfolio/bifold/bifold2.jpg",
		imageAlt:
			"La Part à Pizza restaurant menu bifold design with pizzas, deals and Mandelieu contact details",
	},
	{
		id: "mysmartobject-bifold",
		category: "Bifold",
		imageUrl: "/images/portfolio/bifold/bifold3.jpg",
		imageAlt:
			"MySmartObject vehicle tracking and security bifold brochure design with Track+ app features",
	},
	{
		id: "mjrooney-basement-bifold",
		category: "Bifold",
		imageUrl: "/images/portfolio/bifold/bifold4.jpg",
		imageAlt:
			"MJ Rooney Construction basement extension bifold brochure design for London and Kent",
	},
	{
		id: "preventi-brochure",
		category: "Brochure",
		imageUrl: "/images/portfolio/brochure/brochure1.jpg",
		imageAlt:
			"Preventi Suivi Cardio on-site cardiovascular screening brochure design",
	},
	{
		id: "emotions-cuisines-brochure",
		category: "Brochure",
		imageUrl: "/images/portfolio/brochure/brochure2.jpg",
		imageAlt:
			"Emotions Cuisines custom kitchen brochure design with team and project examples",
	},
	{
		id: "veranda-confort-brochure",
		category: "Brochure",
		imageUrl: "/images/portfolio/brochure/brochure3.jpg",
		imageAlt:
			"Veranda Confort French veranda manufacturer brochure design with styles and benefits",
	},
	{
		id: "maison-nett-brochure",
		category: "Brochure",
		imageUrl: "/images/portfolio/brochure/brochure4.jpg",
		imageAlt:
			"Maison Nett cleaning service brochure design for homes and tourism professionals",
	},
	{
		id: "ts-exterior-cleaning-flyer",
		category: "Flyer",
		imageUrl: "/images/portfolio/flyer/flyer1.jpg",
		imageAlt:
			"TS Exterior Cleaning services flyer design for residential and commercial cleaning in Devon",
	},
	{
		id: "la-table-kreyol-flyer",
		category: "Flyer",
		imageUrl: "/images/portfolio/flyer/flyer2.jpg",
		imageAlt:
			"La Table Kreyol Caribbean restaurant flyer design with menu, opening offer and Paris contact details",
	},
	{
		id: "brotfix-flyer",
		category: "Flyer",
		imageUrl: "/images/portfolio/flyer/flyer3.jpg",
		imageAlt:
			"BROTFiX Sunday bread roll delivery flyer design with WhatsApp interest form and discount offer",
	},
	{
		id: "bulles-et-delices-flyer",
		category: "Flyer",
		imageUrl: "/images/portfolio/flyer/flyer4.jpg",
		imageAlt:
			"Bulles et Délices bubble waffle food truck flyer design with sweet and savory creations",
	},
	{
		id: "engage-learning-double-sided-flyer",
		category: "Double Sided Flyer",
		imageUrl: "/images/portfolio/double-sided-flyer/double-sided-flyer1.jpg",
		imageAlt:
			"Engage WhatsApp learning platform double-sided flyer with stats, features and contact details",
	},
	{
		id: "villa-hermosa-double-sided-flyer",
		category: "Double Sided Flyer",
		imageUrl: "/images/portfolio/double-sided-flyer/double-sided-flyer2.jpg",
		imageAlt:
			"Villa Hermosa Spain vacation rental double-sided flyer design in Dutch",
	},
	{
		id: "intersport-winter-double-sided-flyer",
		category: "Double Sided Flyer",
		imageUrl: "/images/portfolio/double-sided-flyer/double-sided-flyer3.jpg",
		imageAlt:
			"Intersport Dent-Blanche and Vuignier Sports winter offer double-sided flyer designs",
	},
	{
		id: "dls-facade-double-sided-flyer",
		category: "Double Sided Flyer",
		imageUrl: "/images/portfolio/double-sided-flyer/double-sided-flyer4.jpg",
		imageAlt:
			"DLS Facade exterior insulation and renovation double-sided flyer design",
	},
	{
		id: "altruistiq-roll-up",
		category: "Roll Up",
		imageUrl: "/images/portfolio/roll-up/roll-up1.jpg",
		imageAlt:
			"Altruistiq food and beverage sustainability platform roll up banner designs",
	},
	{
		id: "paybuddy-roll-up",
		category: "Roll Up",
		imageUrl: "/images/portfolio/roll-up/roll-up2.jpg",
		imageAlt:
			"Paybuddy payments special offer roll up banner design with hardware and software packages",
	},
	{
		id: "steffes-ets-roll-up",
		category: "Roll Up",
		imageUrl: "/images/portfolio/roll-up/roll-up3.jpg",
		imageAlt: "Steffes ETS heater upgrade incentive roll up banner designs",
	},
	{
		id: "cabral-gold-roll-up",
		category: "Roll Up",
		imageUrl: "/images/portfolio/roll-up/roll-up4.jpg",
		imageAlt: "Cabral Gold Cuiú Cuiú Brazil gold mine roll up banner design",
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
		id: "maisons-paj-yard-sign",
		category: "Yard Sign",
		imageUrl: "/images/portfolio/yard-sign/yard-sign2.jpg",
		imageAlt:
			"Les maisons PAJ for-rent yard sign design for Shawville and Fort Coulonge rentals",
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
		id: "af-tailleur-event-stand",
		category: "Event Stand",
		imageUrl: "/images/portfolio/event-stand/event-stand1.jpg",
		imageAlt:
			"AF Tailleur Eure-et-Loir custom suits exhibition booth and counter design",
	},
	{
		id: "hubscans-event-stand",
		category: "Event Stand",
		imageUrl: "/images/portfolio/event-stand/event-stand2.jpg",
		imageAlt: "Hubscans virtual tour platform corner exhibition stand design",
	},
	{
		id: "ops-pavilion-event-stand",
		category: "Event Stand",
		imageUrl: "/images/portfolio/event-stand/event-stand3.jpg",
		imageAlt:
			"OPS Pavilion shore power partners outdoor exhibition lightbox design",
	},
	{
		id: "engage-learning-event-stand",
		category: "Event Stand",
		imageUrl: "/images/portfolio/event-stand/event-stand4.jpg",
		imageAlt:
			"Engage WhatsApp learning platform Learning Show exhibition totem design",
	},
	{
		id: "autoluxe-eco-soley-social",
		category: "Social Media",
		imageUrl: "/images/portfolio/social-media/social-media1.jpg",
		imageAlt:
			"Social media ads for AutoLuxe67 chauffeur rental and Eco Soley Martinique air conditioning offer",
	},
	{
		id: "litestream-darty-solis-social",
		category: "Social Media",
		imageUrl: "/images/portfolio/social-media/social-media2.jpg",
		imageAlt:
			"Social media creatives for Cannes Family Office Forum, Darty Deauville contest and Solis Guyane tractor",
	},
	{
		id: "garmin-gwada-social",
		category: "Social Media",
		imageUrl: "/images/portfolio/social-media/social-media3.jpg",
		imageAlt:
			"Social media ads for Garmin EchoMap marine electronics and Gwada Discount spa financing",
	},
	{
		id: "ernestine-crazy-weekend-asia-social",
		category: "Social Media",
		imageUrl: "/images/portfolio/social-media/social-media4.jpg",
		imageAlt:
			"Social media banners for Ernestine & Castagnou gifts, coin sale weekend and Asian trading cards import",
	},
	{
		id: "ubelicious-pouch-packaging",
		category: "Packaging",
		imageUrl: "/images/portfolio/packaging/packaging1.jpg",
		imageAlt:
			"Ubelicious ube powder stand-up pouch packaging design, front and back mockup",
	},
	{
		id: "apiconcept-propolis-box",
		category: "Packaging",
		imageUrl: "/images/portfolio/packaging/packaging2.jpg",
		imageAlt:
			"Apiconcept water-soluble propolis pipette bottle packaging box design",
	},
	{
		id: "memora-photo-prints-box",
		category: "Packaging",
		imageUrl: "/images/portfolio/packaging/packaging3.jpg",
		imageAlt:
			"MEMORA premium photo prints box packaging design with camera illustration",
	},
	{
		id: "vetyvert-pet-supplements",
		category: "Packaging",
		imageUrl: "/images/portfolio/packaging/packaging4.jpg",
		imageAlt:
			"VetyVert dog supplement packaging range with boxes and bottle mockup",
	},
	{
		id: "domaine-aventurier-website",
		category: "Website",
		imageUrl: "/images/portfolio/website/website1.jpg",
		imageAlt:
			"Domaine Aventurier hunting and fishing outfitter website in the Hautes Laurentides, Canada",
	},
	{
		id: "marc-fontenelle-sculptor-website",
		category: "Website",
		imageUrl: "/images/portfolio/website/website2.jpg",
		imageAlt: "Marc Fontenelle artist and sculptor portfolio website design",
	},
	{
		id: "vinted-replica-website",
		category: "Website",
		imageUrl: "/images/portfolio/website/website3.jpg",
		imageAlt:
			"Vinted second-hand marketplace website replica with search, listings and sell flow",
	},
	{
		id: "marvel-characters-comics-website",
		category: "Website",
		imageUrl: "/images/portfolio/website/website4.jpg",
		imageAlt:
			"Marvel characters and comics reference website with character grid and favorites",
	},
]

export const portfolioData: PortfolioItem[] = portfolioItems.map(
	({ imageUrl, ...item }) => ({
		...item,
		imageUrl,
		fallbackImageUrl: imageUrl,
	}),
)
