import { Container } from "@/components/ui";
import { clientLogos } from "@/data/client-logos";

export function LogoMarquee() {
  return (
    <section className="overflow-hidden bg-background py-1.5 sm:py-2 lg:py-2">
      <Container size="full" className="px-0">
        <h2 className="sr-only">Trusted client and partner logos</h2>

        <div className="relative mx-auto flex w-full max-w-[1440px] items-center overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex min-w-max animate-[logo-marquee_42s_linear_infinite] items-center will-change-transform motion-reduce:animate-none">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10"
                aria-hidden={group === 1}
              >
                {clientLogos.map((logo) => (
                  <div
                    key={`${logo.name}-${group}`}
                    className="flex h-16 min-w-36 items-center justify-center rounded-2xl border border-border/60 bg-muted/35 px-7 text-center font-heading text-sm font-semibold tracking-[-0.03em] whitespace-nowrap text-foreground/45 sm:h-[4.5rem] sm:min-w-44 sm:px-9 sm:text-base lg:min-w-52"
                  >
                    {logo.wordmark}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
