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
      "Distinctive, memorable logos that capture your brand's personality and make a strong first impression.",
    badges: ["Minimalist", "Luxury", "Modern", "Vintage", "Monogram", "Wordmark", "Lettermark", "Emblem"]
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Cohesive identity systems that keep every touchpoint consistent, recognizable and unmistakably yours.",
    badges: [
      "Brand Guidelines",
      "Stationery",
      "Color Palette",
      "Typography",
      "Packaging",
      "Iconography",
      "Brand Assets",
      "Rebranding"
    ]
  },
  {
    id: "social-media-design",
    title: "Social Media Design",
    description:
      "Scroll-stopping visuals that strengthen your presence and keep your feed consistent and engaging.",
    badges: ["Posts", "Stories", "Carousels", "Feed Design", "Ads", "LinkedIn", "Instagram", "Facebook"]
  },
  {
    id: "marketing-materials",
    title: "Marketing Materials",
    description:
      "Print and promotional assets crafted to communicate clearly and leave a lasting impression.",
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
