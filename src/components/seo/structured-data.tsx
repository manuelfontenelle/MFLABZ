import { getTranslations } from "next-intl/server";

import { siteConfig } from "@/config/site";
import type { FAQDataItem } from "@/data/faq-data";
import { servicesData } from "@/data/services-data";

const baseUrl = siteConfig.url.replace(/\/$/, "");
const organizationId = `${baseUrl}/#organization`;
const personId = `${baseUrl}/#person`;
const websiteId = `${baseUrl}/#website`;

type StructuredDataProps = {
  locale: string;
};

export async function StructuredData({ locale }: StructuredDataProps) {
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });
  const tServices = await getTranslations({ locale, namespace: "Services" });
  const tFaq = await getTranslations({ locale, namespace: "FAQ" });

  const faqItems = tFaq.raw("items") as FAQDataItem[];
  const localePath = `${baseUrl}/${locale}`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.founderName,
    givenName: "Manuel",
    familyName: "Fontenelle",
    alternateName: ["MFLABZ", "Manuel Fontenelle MFLABZ"],
    url: `${localePath}/`,
    image: `${baseUrl}/images/profilPicture.jpg`,
    jobTitle: tCommon("jobTitle"),
    description: tCommon("personDescription"),
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
    alternateName: ["Manuel Fontenelle", "Manuel Fontenelle MFLABZ"],
    legalName: siteConfig.creator,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "SIRET",
      value: siteConfig.siret.replace(/\s/g, "")
    },
    url: `${localePath}/`,
    email: siteConfig.links.email,
    description: tMeta("description"),
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
    knowsAbout: tMeta.raw("keywords") as string[],
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
        name: tServices(`items.${service.id}.title`),
        description: tServices(`items.${service.id}.description`)
      }
    }))
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${localePath}/`,
    name: tMeta("title"),
    alternateName: [
      siteConfig.founderName,
      `${siteConfig.founderName} ${siteConfig.creator}`,
      siteConfig.creator
    ],
    description: tMeta("description"),
    inLanguage: locale,
    publisher: { "@id": organizationId },
    author: { "@id": personId },
    mainEntity: { "@id": personId }
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${localePath}/#faq`,
    isPartOf: { "@id": websiteId },
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [person, organization, website, faqPage]
  };

  return (
    <script
      type="application/ld+json"
      // Structured data is built from trusted local config/messages.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
