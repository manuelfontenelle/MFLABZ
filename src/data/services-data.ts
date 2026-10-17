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
      "Cohesive identity systems built around your logo, from brand guidelines and stationery to product packaging and labels.",
    badges: [
      "Brand Guidelines",
      "Stationery",
      "Color Palette",
      "Typography",
      "Packaging",
      "Product Labels",
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
      "Business cards, flyers, brochures, roll-ups, billboards and outdoor visuals designed to present your offer clearly and get noticed.",
    badges: [
      "Business Cards",
      "Flyers",
      "Brochures",
      "Roll-Ups",
      "Billboards",
      "Posters",
      "Vehicle Wrap",
      "Car Wrap"
    ]
  }
];
