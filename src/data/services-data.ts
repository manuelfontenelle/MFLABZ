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
    title: "Social & Ad Creative",
    description:
      "Scroll-stopping social visuals, paid ad banners for Google and Amazon, and A+ Content that presents your products with clarity and impact.",
    badges: [
      "Posts",
      "Stories",
      "Carousels",
      "Google Ads",
      "Amazon Ads",
      "A+ Content",
      "Instagram",
      "Facebook"
    ]
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
