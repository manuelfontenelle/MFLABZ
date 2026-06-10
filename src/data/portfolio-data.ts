export type PortfolioItem = {
  id: string;
  category: "Featured" | "Logos" | "Branding" | "Digital" | "Print";
  imageUrl: string;
  imageAlt: string;
};

export const portfolioData: PortfolioItem[] = [
  {
    id: "atelier-brand-system",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Minimal branding mockup with stationery and packaging"
  },
  {
    id: "monogram-logo-suite",
    category: "Logos",
    imageUrl: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Abstract logo identity presented on a premium dark background"
  },
  {
    id: "digital-launch-kit",
    category: "Digital",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Digital interface and social media campaign mockups"
  },
  {
    id: "editorial-print-pack",
    category: "Print",
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Editorial print layout with brochure and paper textures"
  },
  {
    id: "studio-visual-identity",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Brand identity system displayed across premium collateral"
  },
  {
    id: "packaging-logo-mark",
    category: "Logos",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Logo mark and packaging label design mockup"
  },
  {
    id: "campaign-mobile-visuals",
    category: "Digital",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mobile and desktop digital design presentation"
  },
  {
    id: "premium-print-collateral",
    category: "Print",
    imageUrl: "https://images.unsplash.com/photo-1510935813936-763eb6fbc613?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Premium printed collateral arranged in an editorial layout"
  },
  {
    id: "wordmark-identity-study",
    category: "Logos",
    imageUrl: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wordmark logo exploration on a minimal design board"
  },
  {
    id: "symbol-grid-system",
    category: "Logos",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Logo symbol system with grid construction details"
  },
  {
    id: "hospitality-brand-world",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hospitality brand identity applied across printed touchpoints"
  },
  {
    id: "luxury-identity-kit",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Luxury brand identity kit with refined stationery mockups"
  },
  {
    id: "website-hero-system",
    category: "Digital",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Responsive website design presented on desktop screens"
  },
  {
    id: "social-content-direction",
    category: "Digital",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Social media campaign visuals arranged in a digital grid"
  },
  {
    id: "magazine-layout-system",
    category: "Print",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Magazine and editorial layout system in a clean workspace"
  },
  {
    id: "poster-collateral-series",
    category: "Print",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Printed poster and collateral series displayed on a table"
  }
];
