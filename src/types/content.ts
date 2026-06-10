import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
};

export type TrustMetric = {
  value: string;
  label: string;
  description: string;
};

export type Testimonial = {
  name: string;
  country: string;
  rating: 5 | 4.9 | 4.8;
  quote: string;
  source: "Fiverr" | "Direct";
};

export type FAQItem = {
  question: string;
  answer: string;
};
