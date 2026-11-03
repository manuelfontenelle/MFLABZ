export type ServiceId =
  | "logo-design"
  | "brand-identity"
  | "social-media-design"
  | "marketing-materials";

export type ServiceItem = {
  id: ServiceId;
};

export const servicesData: ServiceItem[] = [
  { id: "logo-design" },
  { id: "brand-identity" },
  { id: "social-media-design" },
  { id: "marketing-materials" }
];
