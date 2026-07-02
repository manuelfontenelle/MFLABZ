export type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const lastUpdated = "July 2, 2026";

export const privacyPolicy: LegalPageContent = {
  title: "Privacy Policy",
  description:
    "How MFLABZ collects, uses, and protects personal information submitted through this website.",
  lastUpdated,
  sections: [
    {
      title: "1. Who we are",
      paragraphs: [
        "This website is operated by MFLABZ, a freelance graphic design studio run by Manuel Fontenelle, based in Paris, France.",
        "If you have questions about this policy or your personal data, contact us at mflabz3@gmail.com."
      ]
    },
    {
      title: "2. Information we collect",
      paragraphs: [
        "We collect personal information only when you choose to contact us through the website contact form. This may include:"
      ],
      list: [
        "Your full name",
        "Your email address",
        "The service you are interested in",
        "Project details and any other information you include in your message"
      ]
    },
    {
      title: "3. How we use your information",
      paragraphs: [
        "We use the information you submit to respond to your inquiry, discuss your project, and provide design services if we work together.",
        "We do not sell your personal information and we do not use it for unrelated marketing without your consent."
      ]
    },
    {
      title: "4. Legal basis for processing",
      paragraphs: [
        "If you are located in the European Economic Area or the United Kingdom, we process your personal data on the basis of your request to be contacted and our legitimate interest in responding to business inquiries.",
        "If we enter into a client relationship with you, we may also process your data as necessary to perform a contract or prepare for one."
      ]
    },
    {
      title: "5. How long we keep your information",
      paragraphs: [
        "We retain contact form submissions for as long as needed to respond to your inquiry and manage any resulting business relationship.",
        "If no project moves forward, we generally delete or anonymize inquiry data within a reasonable period, unless we are required to keep it for legal, accounting, or dispute-resolution purposes."
      ]
    },
    {
      title: "6. Service providers",
      paragraphs: [
        "We use trusted third-party providers to operate the website and deliver contact form messages by email. These providers process data only on our instructions and for the purposes described in this policy.",
        "Our website is hosted on Vercel and contact inquiries may be delivered through Resend."
      ]
    },
    {
      title: "7. Cookies and analytics",
      paragraphs: [
        "This website does not currently use advertising cookies or third-party analytics trackers.",
        "Essential technical data may still be processed by our hosting provider to deliver the site securely and reliably."
      ]
    },
    {
      title: "8. Your rights",
      paragraphs: [
        "Depending on your location, you may have the right to access, correct, delete, restrict, or object to certain processing of your personal data, and to request data portability.",
        "If you are in the European Economic Area or the United Kingdom, you also have the right to lodge a complaint with your local data protection authority.",
        "To exercise your rights, email mflabz3@gmail.com."
      ]
    },
    {
      title: "9. International transfers",
      paragraphs: [
        "Some of our service providers may process data outside your country of residence, including in the United States.",
        "Where required, we rely on appropriate safeguards for international data transfers."
      ]
    },
    {
      title: "10. Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The latest version will always be published on this page with an updated date."
      ]
    }
  ]
};

export const termsOfService: LegalPageContent = {
  title: "Terms of Service",
  description:
    "Terms governing your access to and use of the MFLABZ website.",
  lastUpdated,
  sections: [
    {
      title: "1. Agreement to these terms",
      paragraphs: [
        "By accessing or using mflabz.com, you agree to these Terms of Service. If you do not agree, please do not use the website."
      ]
    },
    {
      title: "2. About MFLABZ",
      paragraphs: [
        "MFLABZ is a freelance graphic design studio operated by Manuel Fontenelle, offering branding, logo design, print design, and related creative services to clients worldwide.",
        "Information on this website is provided for general presentation and inquiry purposes. It does not constitute a binding offer until confirmed separately in writing."
      ]
    },
    {
      title: "3. Permitted use",
      paragraphs: ["You agree to use this website only for lawful purposes and in a way that does not:"],
      list: [
        "Interfere with the security or operation of the website",
        "Attempt unauthorized access to systems or data",
        "Submit false, misleading, or harmful information through the contact form",
        "Copy, scrape, or misuse website content except as allowed by law"
      ]
    },
    {
      title: "4. Intellectual property",
      paragraphs: [
        "Unless otherwise stated, all content on this website — including text, layout, branding, logos, graphics, portfolio presentations, and visual assets created by MFLABZ — is owned by MFLABZ or used with permission.",
        "You may not reproduce, distribute, modify, or exploit website content for commercial purposes without prior written consent."
      ]
    },
    {
      title: "5. Portfolio and client work",
      paragraphs: [
        "Portfolio items displayed on this website may include work created for clients. Rights in client projects belong to the respective rights holders under the applicable project agreement.",
        "Display of client work on this site does not grant any license to reuse those materials."
      ]
    },
    {
      title: "6. Contact inquiries and services",
      paragraphs: [
        "Submitting the contact form does not create a client relationship or guarantee project availability, pricing, or delivery timelines.",
        "Any design engagement is subject to separate agreement on scope, fees, revisions, deliverables, and usage rights."
      ]
    },
    {
      title: "7. Third-party links",
      paragraphs: [
        "This website may link to third-party platforms such as Fiverr, LinkedIn, Behance, or Instagram. Those sites are governed by their own terms and policies, and MFLABZ is not responsible for their content or practices."
      ]
    },
    {
      title: "8. Disclaimer",
      paragraphs: [
        "The website is provided on an \"as is\" and \"as available\" basis. We aim to keep information accurate and up to date, but we do not warrant that the site will be uninterrupted, error-free, or complete."
      ]
    },
    {
      title: "9. Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, MFLABZ shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the website.",
        "Nothing in these terms excludes liability that cannot be excluded under applicable law."
      ]
    },
    {
      title: "10. Governing law",
      paragraphs: [
        "These Terms of Service are governed by the laws of France, without regard to conflict-of-law rules.",
        "If a dispute arises, the courts of Paris, France shall have jurisdiction, subject to mandatory consumer protections that may apply in your country of residence."
      ]
    },
    {
      title: "11. Changes to these terms",
      paragraphs: [
        "We may update these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms."
      ]
    },
    {
      title: "12. Contact",
      paragraphs: ["Questions about these terms can be sent to mflabz3@gmail.com."]
    }
  ]
};

export const legalNotice: LegalPageContent = {
  title: "Legal Notice",
  description: "Publisher and hosting information for the MFLABZ website.",
  lastUpdated,
  sections: [
    {
      title: "1. Website publisher",
      paragraphs: [
        "Website: mflabz.com",
        "Publisher: Manuel Fontenelle, operating as MFLABZ",
        "Activity: Freelance graphic design services",
        "Location: Paris, France",
        "Contact: mflabz3@gmail.com"
      ]
    },
    {
      title: "2. Hosting provider",
      paragraphs: [
        "This website is hosted by Vercel Inc.",
        "Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States — vercel.com"
      ]
    },
    {
      title: "3. Intellectual property",
      paragraphs: [
        "The structure, design, text, graphics, logos, and portfolio content on this website are protected by applicable intellectual property laws.",
        "Any reproduction, representation, modification, or exploitation without prior written authorization is prohibited, except where permitted by law."
      ]
    },
    {
      title: "4. Liability",
      paragraphs: [
        "MFLABZ makes reasonable efforts to ensure that information published on this website is accurate. However, we cannot guarantee completeness or permanent availability of the site.",
        "MFLABZ cannot be held responsible for temporary unavailability of the website, external links, or issues caused by third-party services outside our control."
      ]
    },
    {
      title: "5. Personal data",
      paragraphs: [
        "For information about how personal data is collected and processed, please see our Privacy Policy."
      ]
    },
    {
      title: "6. Contact",
      paragraphs: [
        "For any legal or administrative request relating to this website, contact mflabz3@gmail.com."
      ]
    }
  ]
};
