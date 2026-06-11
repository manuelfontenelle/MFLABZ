export type TestimonialGender = "male" | "female";
export type TestimonialCountryFlag =
  | "US"
  | "CA"
  | "AU"
  | "GB"
  | "IT"
  | "DE"
  | "FR"
  | "ES"
  | "NL"
  | "SE"
  | "JP"
  | "BR";

export type TestimonialItem = {
  name: string;
  country: string;
  countryFlag: TestimonialCountryFlag;
  gender: TestimonialGender;
  rating: 5;
  review: string;
};

export const testimonialsData: TestimonialItem[] = [
  {
    name: "John D.",
    country: "United States",
    countryFlag: "US",
    gender: "male",
    rating: 5,
    review:
      "The logo design felt premium from the first concept. Communication was clear, delivery was fast, and the final files were perfectly organized."
  },
  {
    name: "Sarah M.",
    country: "Canada",
    countryFlag: "CA",
    gender: "female",
    rating: 5,
    review:
      "Very professional experience. The brand visuals were clean, modern, and exactly aligned with the direction I wanted for my business."
  },
  {
    name: "David K.",
    country: "Australia",
    countryFlag: "AU",
    gender: "male",
    rating: 5,
    review:
      "Fast turnaround without sacrificing quality. The design looked polished, thoughtful, and ready to use across our marketing materials."
  },
  {
    name: "Emma L.",
    country: "United Kingdom",
    countryFlag: "GB",
    gender: "female",
    rating: 5,
    review:
      "Excellent communication and a sharp eye for detail. The final brand assets made our presentation look much more credible and refined."
  },
  {
    name: "Marco R.",
    country: "Italy",
    countryFlag: "IT",
    gender: "male",
    rating: 5,
    review:
      "A smooth Fiverr experience from brief to delivery. The design quality was high-end, and revisions were handled quickly and professionally."
  },
  {
    name: "Nora S.",
    country: "Germany",
    countryFlag: "DE",
    gender: "female",
    rating: 5,
    review:
      "The work was minimal, elegant, and very well executed. It captured the personality of the brand while still feeling clean and premium."
  },
  {
    name: "Lucas B.",
    country: "France",
    countryFlag: "FR",
    gender: "male",
    rating: 5,
    review:
      "The design direction was refined and professional. Every update was quick, clear, and focused on making the brand feel stronger."
  },
  {
    name: "Sofia G.",
    country: "Spain",
    countryFlag: "ES",
    gender: "female",
    rating: 5,
    review:
      "Beautiful visual work with excellent communication. The final delivery felt premium and matched the brief better than expected."
  },
  {
    name: "Mila V.",
    country: "Netherlands",
    countryFlag: "NL",
    gender: "female",
    rating: 5,
    review:
      "The brand identity looked clean, confident, and ready for launch. Communication was easy and every detail was handled professionally."
  },
  {
    name: "Erik N.",
    country: "Sweden",
    countryFlag: "SE",
    gender: "male",
    rating: 5,
    review:
      "Very efficient process with a polished final result. The designs were modern, consistent, and delivered faster than expected."
  },
  {
    name: "Aiko T.",
    country: "Japan",
    countryFlag: "JP",
    gender: "female",
    rating: 5,
    review:
      "The final artwork was elegant and precise. It gave our visual identity a much more premium and professional appearance."
  },
  {
    name: "Rafael P.",
    country: "Brazil",
    countryFlag: "BR",
    gender: "male",
    rating: 5,
    review:
      "Great creative direction and quick revisions. The finished graphics looked high-quality and worked perfectly for our campaign."
  }
];
