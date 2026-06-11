export type ServiceId =
  | "logo-design"
  | "brand-identity"
  | "social-media-design"
  | "marketing-materials";

export type ServiceItem = {
  id: ServiceId;
  title: string;
  description: string;
  badges: string[];
};

export const servicesData: ServiceItem[] = [
  {
    id: "logo-design",
    title: "Logo Design",
    description:
      "Custom logos designed to help businesses stand out and create memorable first impressions.",
    badges: ["Minimalist", "Luxury", "Real Estate", "Corporate", "Modern", "Monogram", "Wordmark", "Startup"]
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Complete visual identity systems including logo usage, colors, typography and brand assets.",
    badges: [
      "Brand Guidelines",
      "Stationery",
      "Color Palette",
      "Typography",
      "Packaging",
      "Visual Identity",
      "Brand Assets",
      "Rebranding"
    ]
  },
  {
    id: "social-media-design",
    title: "Social Media Design",
    description:
      "Creative social media graphics designed to improve consistency and engagement.",
    badges: ["Posts", "Stories", "Carousels", "Feed Design", "Banners", "Ads", "LinkedIn", "Instagram"]
  },
  {
    id: "marketing-materials",
    title: "Marketing Materials",
    description:
      "Flyers, brochures, business cards, roll-ups, billboards and promotional assets.",
    badges: [
      "Business Cards",
      "Flyers",
      "Brochures",
      "Roll-Ups",
      "Billboards",
      "Posters",
      "Menus",
      "Catalogs"
    ]
  }
];
