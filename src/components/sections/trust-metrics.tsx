import { Star } from "lucide-react";

import { Container } from "@/components/ui";

export function TrustMetrics() {
  return (
    <section className="bg-background pt-[2.4rem] pb-[2.8rem] sm:pt-[3.6rem] sm:pb-[3.5rem] lg:pt-[4.8rem] lg:pb-[4.2rem]">
      <Container className="flex flex-col items-center text-center">
        <div className="mb-7 inline-flex flex-col items-center gap-2 text-[16px] font-medium text-foreground sm:mb-8 sm:flex-row">
          <span
            className="flex items-center gap-0.5 text-secondary"
            aria-hidden="true"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-[18.6px] fill-current sm:size-[20.7px]" />
            ))}
          </span>
          <span>
            <span className="font-bold">Rated 4.9/5</span>
            {" from "}
            <span className="font-bold">2500+ Client Reviews</span>
          </span>
        </div>

        <h2 className="max-w-[900px] font-heading text-[clamp(1.65rem,3.3vw,2.8rem)] leading-[1.36] font-medium tracking-[-0.065em] text-balance text-foreground sm:leading-[1.13]">
          Trusted by 4000+ Clients Worldwide
          <br className="hidden sm:block" />
          {" "}for Professional Graphic Design Services
        </h2>
      </Container>
    </section>
  );
}
