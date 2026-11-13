import {
  FAQ,
  FiverrIdentity,
  FinalCTA,
  Footer,
  Hero,
  KeywordBand,
  LogoMarquee,
  Navbar,
  Portfolio,
  Process,
  Services,
  Testimonials,
  TrustMetrics,
  WhyChooseMe
} from "@/components/sections";
import { HashScroll } from "@/components/hash-scroll";
import { StructuredData } from "@/components/seo/structured-data";
import { setRequestLocale } from "next-intl/server";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <HashScroll />
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <TrustMetrics />
        <LogoMarquee />
        <Portfolio />
        <Services />
        <Testimonials />
        <WhyChooseMe />
        <FiverrIdentity />
        <Process />
        <FAQ />
        <KeywordBand />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
