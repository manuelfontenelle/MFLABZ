import { siteConfig } from "@/config/site";
import { faqData } from "@/data/faq-data";
import { servicesData } from "@/data/services-data";

const baseUrl = siteConfig.url.replace(/\/$/, "");
const organizationId = `${baseUrl}/#organization`;
const personId = `${baseUrl}/#person`;
const websiteId = `${baseUrl}/#website`;

function buildStructuredData() {
  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.founderName,
    url: `${baseUrl}/`,
    image: `${baseUrl}/images/profilPicture.jpg`,
    jobTitle: "Graphic Designer",
    description:
      "Freelance graphic designer and founder of MFLABZ, specializing in logo design, branding, and print design.",
    worksFor: { "@id": organizationId },
    sameAs: [
      siteConfig.links.personal,
      siteConfig.links.linkedin,
      siteConfig.links.behance,
      siteConfig.links.instagram,
      siteConfig.links.fiverr
    ]
  };

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
    founder: { "@id": personId },
    employee: { "@id": personId },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "Place", name: "Worldwide" }
    ],
    knowsAbout: [...siteConfig.keywords],
    sameAs: [
      siteConfig.links.fiverr,
      siteConfig.links.linkedin,
      siteConfig.links.behance,
      siteConfig.links.instagram
    ],
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
    publisher: { "@id": organizationId },
    author: { "@id": personId }
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
    "@graph": [person, organization, website, faqPage]
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
