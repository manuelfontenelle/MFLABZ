import {
  BadgeCheck,
  Box,
  Building2,
  Contact,
  Image,
  Megaphone,
  PenTool,
  Share2
} from "lucide-react";

import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    title: "Logo Design",
    slug: "logo-design",
    description: "Distinctive logo systems for businesses that need to look credible fast.",
    icon: PenTool
  },
  {
    title: "Brand Identity",
    slug: "brand-identity",
    description: "Visual identity foundations for consistent, premium brand communication.",
    icon: BadgeCheck
  },
  {
    title: "Business Card Design",
    slug: "business-card-design",
    description: "Print-ready business cards designed for strong first impressions.",
    icon: Contact
  },
  {
    title: "Social Media Design",
    slug: "social-media-design",
    description: "Campaign-ready visual assets for international social media audiences.",
    icon: Share2
  },
  {
    title: "Flyer Design",
    slug: "flyer-design",
    description: "Conversion-focused flyers for launches, events, and promotions.",
    icon: Image
  },
  {
    title: "Roll-Up Design",
    slug: "roll-up-design",
    description: "Large-format roll-up designs prepared for events and in-person sales.",
    icon: Building2
  },
  {
    title: "Billboard Design",
    slug: "billboard-design",
    description: "High-impact outdoor advertising layouts with clear message hierarchy.",
    icon: Megaphone
  },
  {
    title: "Packaging Design",
    slug: "packaging-design",
    description: "Product packaging concepts that balance shelf appeal and brand clarity.",
    icon: Box
  }
];
