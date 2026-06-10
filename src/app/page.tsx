import {
  FAQ,
  FeaturedProject,
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
        <FeaturedProject />
        <TrustMetrics />
        <LogoMarquee />
        <Portfolio />
        <Services />
        <WhyChooseMe />
        <Testimonials />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
