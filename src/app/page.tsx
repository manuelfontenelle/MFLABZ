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

export default function Home() {
  return (
    <>
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
