export type PortfolioItem = {
	id: string
	category:
		| "Logo"
		| "Business Cards"
		| "Trifold"
		| "Bifold"
		| "Brochure"
		| "Flyer"
		| "Roll Up"
		| "Billboard"
		| "Yard Sign"
		| "Packaging"
		| "Social Media"
	imageUrl: string
	imageAlt: string
}

export const portfolioData: PortfolioItem[] = [
	{
		id: "monogram-logo-suite",
		category: "Logo",
		imageUrl:
			"https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Abstract logo identity presented on a premium dark background",
	},
	{
		id: "packaging-logo-mark",
		category: "Logo",
		imageUrl:
			"https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Logo mark and packaging label design mockup",
	},
	{
		id: "wordmark-identity-study",
		category: "Logo",
		imageUrl:
			"https://images.unsplash.com/photo-1635405074683-96d6921a2a68?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Wordmark logo exploration on a minimal design board",
	},
	{
		id: "symbol-grid-system",
		category: "Logo",
		imageUrl:
			"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Logo symbol system with grid construction details",
	},
	{
		id: "minimal-business-card",
		category: "Business Cards",
		imageUrl:
			"https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Minimal business card mockup with premium paper texture",
	},
	{
		id: "luxury-business-card",
		category: "Business Cards",
		imageUrl:
			"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Luxury business card and stationery mockup",
	},
	{
		id: "brand-business-card",
		category: "Business Cards",
		imageUrl:
			"https://images.unsplash.com/photo-1510935813936-763eb6fbc613?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Branded business cards arranged in an editorial layout",
	},
	{
		id: "studio-business-card",
		category: "Business Cards",
		imageUrl:
			"https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Studio business card set with refined brand details",
	},
	{
		id: "restaurant-trifold",
		category: "Trifold",
		imageUrl:
			"https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Trifold brochure mockup for a restaurant brand",
	},
	{
		id: "corporate-trifold",
		category: "Trifold",
		imageUrl:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Corporate trifold brochure presented on a clean desk",
	},
	{
		id: "wellness-trifold",
		category: "Trifold",
		imageUrl:
			"https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Wellness trifold brochure with soft editorial styling",
	},
	{
		id: "event-trifold",
		category: "Trifold",
		imageUrl:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Event trifold layout displayed with printed materials",
	},
	{
		id: "product-bifold",
		category: "Bifold",
		imageUrl:
			"https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Product bifold brochure with premium brand visuals",
	},
	{
		id: "service-bifold",
		category: "Bifold",
		imageUrl:
			"https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Service bifold design presented with digital assets",
	},
	{
		id: "agency-bifold",
		category: "Bifold",
		imageUrl:
			"https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Agency bifold concept paired with campaign visuals",
	},
	{
		id: "premium-bifold",
		category: "Bifold",
		imageUrl:
			"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Premium bifold brochure with bold graphic direction",
	},
	{
		id: "brand-brochure",
		category: "Brochure",
		imageUrl:
			"https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Brand brochure spread with elegant editorial layout",
	},
	{
		id: "sales-brochure",
		category: "Brochure",
		imageUrl:
			"https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Sales brochure mockup with clean page composition",
	},
	{
		id: "company-brochure",
		category: "Brochure",
		imageUrl:
			"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Company brochure presented in a premium workspace",
	},
	{
		id: "catalog-brochure",
		category: "Brochure",
		imageUrl:
			"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Catalog brochure concept with polished print styling",
	},
	{
		id: "event-flyer",
		category: "Flyer",
		imageUrl:
			"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Event flyer design with bold visual direction",
	},
	{
		id: "restaurant-flyer",
		category: "Flyer",
		imageUrl:
			"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Restaurant flyer mockup with promotional layout",
	},
	{
		id: "sale-flyer",
		category: "Flyer",
		imageUrl:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Sales flyer design displayed with marketing materials",
	},
	{
		id: "brand-flyer",
		category: "Flyer",
		imageUrl:
			"https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Brand flyer concept with modern graphic styling",
	},
	{
		id: "conference-roll-up",
		category: "Roll Up",
		imageUrl:
			"https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Conference roll up banner in an event space",
	},
	{
		id: "retail-roll-up",
		category: "Roll Up",
		imageUrl:
			"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Retail roll up banner displayed in a store environment",
	},
	{
		id: "expo-roll-up",
		category: "Roll Up",
		imageUrl:
			"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Expo roll up banner with branded booth graphics",
	},
	{
		id: "studio-roll-up",
		category: "Roll Up",
		imageUrl:
			"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Studio roll up banner concept in a workspace",
	},
	{
		id: "city-billboard",
		category: "Billboard",
		imageUrl:
			"https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "City billboard advertising mockup",
	},
	{
		id: "street-billboard",
		category: "Billboard",
		imageUrl:
			"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Outdoor billboard concept in a street setting",
	},
	{
		id: "highway-billboard",
		category: "Billboard",
		imageUrl:
			"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Highway billboard advertising visual",
	},
	{
		id: "urban-billboard",
		category: "Billboard",
		imageUrl:
			"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Urban billboard mockup with premium brand styling",
	},
	{
		id: "real-estate-yard-sign",
		category: "Yard Sign",
		imageUrl:
			"https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Real estate yard sign in front of a property",
	},
	{
		id: "service-yard-sign",
		category: "Yard Sign",
		imageUrl:
			"https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Service business yard sign in a residential setting",
	},
	{
		id: "campaign-yard-sign",
		category: "Yard Sign",
		imageUrl:
			"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Campaign yard sign design placed outside",
	},
	{
		id: "event-yard-sign",
		category: "Yard Sign",
		imageUrl:
			"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Event yard sign mockup in an outdoor landscape",
	},
	{
		id: "cosmetic-packaging",
		category: "Packaging",
		imageUrl:
			"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Cosmetic packaging design with premium product styling",
	},
	{
		id: "food-packaging",
		category: "Packaging",
		imageUrl:
			"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Food packaging concept arranged on a clean surface",
	},
	{
		id: "box-packaging",
		category: "Packaging",
		imageUrl:
			"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Product box packaging mockup with ecommerce presentation",
	},
	{
		id: "label-packaging",
		category: "Packaging",
		imageUrl:
			"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Label packaging design for a premium product line",
	},
	{
		id: "instagram-post-set",
		category: "Social Media",
		imageUrl:
			"https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Instagram post design set for a branded campaign",
	},
	{
		id: "social-carousel",
		category: "Social Media",
		imageUrl:
			"https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Social media carousel graphics displayed on mobile screens",
	},
	{
		id: "ad-creative-set",
		category: "Social Media",
		imageUrl:
			"https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Digital ad creative set for social media marketing",
	},
	{
		id: "brand-social-kit",
		category: "Social Media",
		imageUrl:
			"https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Brand social media kit with mobile and desktop visuals",
	},
]
