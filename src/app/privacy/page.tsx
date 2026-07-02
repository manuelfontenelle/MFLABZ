import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { privacyPolicy } from "@/data/legal-pages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacyPolicy.description,
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return <LegalPage content={privacyPolicy} />;
}
