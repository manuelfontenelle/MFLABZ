import { Star } from "lucide-react";

import { Container } from "@/components/ui";

export function TrustMetrics() {
  return (
    <section className="bg-background pt-[0.54rem] pb-[2.8rem] sm:pt-[0.9rem] sm:pb-[3.5rem] lg:pt-[1.08rem] lg:pb-[4.2rem]">
      <Container className="flex flex-col items-center text-center">
        <div className="mb-7 inline-flex items-center gap-2 text-[16px] font-semibold text-foreground sm:mb-8">
          <span
            className="flex items-center gap-0.5 text-secondary"
            aria-hidden="true"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-5 fill-current" />
            ))}
          </span>
          <span>+4,000 – 5 star reviews</span>
        </div>

        <h2 className="max-w-[900px] font-heading text-[clamp(1.65rem,3.3vw,2.8rem)] leading-[1.13] font-medium tracking-[-0.065em] text-balance text-foreground">
          Trusted by 4000+ Clients Worldwide
          <br className="hidden sm:block" />
          {" "}for Professional Graphic Design Services
        </h2>
      </Container>
    </section>
  );
}
