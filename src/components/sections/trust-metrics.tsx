import { Star } from "lucide-react";

import { Container } from "@/components/ui";

export function TrustMetrics() {
  return (
    <section className="bg-background pt-[2.4rem] pb-[2.8rem] sm:pt-[3.6rem] sm:pb-[3.5rem] lg:pt-[4.8rem] lg:pb-[4.2rem]">
      <Container className="flex flex-col items-center text-center">
        <div className="mb-7 inline-flex flex-col items-center gap-2 text-[16px] font-medium text-foreground sm:mb-8">
          <span
            className="flex items-center gap-0.5 text-secondary"
            aria-hidden="true"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-[17.67px] fill-current sm:size-[19.67px]" />
            ))}
          </span>
          <span>
            <span className="font-semibold">Rated </span>
            <span className="font-semibold text-secondary">4.9/5</span>
            {" from "}
            <span className="font-semibold">2500+ Client Reviews</span>
          </span>
        </div>

        <h2 className="max-w-[900px] font-heading text-[clamp(1.65rem,3.3vw,2.8rem)] leading-[1.5] font-semibold tracking-[-0.065em] text-balance text-foreground sm:leading-[1.24]">
          Trusted by 4000+ Clients Worldwide
          <br className="hidden sm:block" />
          {" "}for Professional Graphic Design Services
        </h2>
      </Container>
    </section>
  );
}
