import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { termsOfService } from "@/data/legal-pages";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: termsOfService.description,
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return <LegalPage content={termsOfService} />;
}
