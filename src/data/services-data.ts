export type ServiceId =
  | "logo-design"
  | "brand-identity"
  | "packaging"
  | "social-media-design"
  | "marketing-materials"
  | "web-design";

export type ServiceItem = {
  id: ServiceId;
};

export const servicesData: ServiceItem[] = [
  { id: "logo-design" },
  { id: "brand-identity" },
  { id: "packaging" },
  { id: "social-media-design" },
  { id: "marketing-materials" },
  { id: "web-design" }
];
