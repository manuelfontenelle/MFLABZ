import {
  FAQ,
  FiverrIdentity,
  FinalCTA,
  Footer,
  Hero,
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

export default function Home() {
  return (
    <>
      <StructuredData />
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
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
