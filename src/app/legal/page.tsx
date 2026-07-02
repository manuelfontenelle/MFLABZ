import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { legalNotice } from "@/data/legal-pages";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: legalNotice.description,
  alternates: {
    canonical: "/legal"
  }
};

export default function LegalNoticePage() {
  return <LegalPage content={legalNotice} />;
}
