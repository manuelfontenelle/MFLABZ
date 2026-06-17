import { siteConfig } from "@/config/site";
import { faqData } from "@/data/faq-data";
import { servicesData } from "@/data/services-data";

const baseUrl = siteConfig.url.replace(/\/$/, "");
const organizationId = `${baseUrl}/#organization`;
const websiteId = `${baseUrl}/#website`;

function buildStructuredData() {
  const organization = {
    "@type": ["ProfessionalService", "Organization"],
    "@id": organizationId,
    name: siteConfig.creator,
    legalName: siteConfig.creator,
    url: `${baseUrl}/`,
    email: siteConfig.links.email,
    description: siteConfig.description,
    image: `${baseUrl}/opengraph-image`,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/mflabz-logo.svg`
    },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "Place", name: "Worldwide" }
    ],
    knowsAbout: [...siteConfig.keywords],
    sameAs: [siteConfig.links.fiverr, siteConfig.links.behance, siteConfig.links.instagram],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "2500"
    },
    makesOffer: servicesData.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description
      }
    }))
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${baseUrl}/`,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": organizationId }
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    isPartOf: { "@id": websiteId },
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, faqPage]
  };
}

export function StructuredData() {
  const data = buildStructuredData();

  return (
    <script
      type="application/ld+json"
      // Structured data is static and built from trusted local config/data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
