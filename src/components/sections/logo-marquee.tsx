import { Container } from "@/components/ui";
import { clientLogos } from "@/data/client-logos";
import Image from "next/image";

function PlaceholderLogo({ name, wordmark }: { name: string; wordmark: string }) {
  return (
    <svg
      role="img"
      aria-label={`${name} placeholder logo`}
      viewBox="0 0 180 54"
      className="h-9 w-auto max-w-32 text-foreground/55 opacity-75 transition-opacity duration-300 hover:opacity-100 sm:h-10 sm:max-w-36"
    >
      <rect
        x="1"
        y="1"
        width="52"
        height="52"
        rx="14"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeOpacity="0.18"
      />
      <path
        d="M18 34.5 26.5 18l8 16.5M22 28.5h9"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="68"
        y="34"
        fill="currentColor"
        fontFamily="var(--font-heading), Inter, Arial, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="-0.04em"
      >
        {wordmark}
      </text>
    </svg>
  );
}

export function LogoMarquee() {
  return (
    <section className="overflow-hidden bg-background py-1.5 sm:py-2 lg:py-2">
      <Container size="full" className="px-0">
        <h2 className="sr-only">Trusted client and partner logos</h2>

        <div className="relative mx-auto flex w-full max-w-[1440px] items-center overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_2%,black_98%,transparent)] sm:[mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] lg:[mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max transform-gpu animate-[logo-marquee_42s_linear_infinite] items-center [backface-visibility:hidden] will-change-transform motion-reduce:animate-none">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10"
                aria-hidden={group === 1}
              >
                {clientLogos.map((logo) => (
                  <div
                    key={`${logo.name}-${group}`}
                    className="flex h-16 min-w-36 items-center justify-center rounded-md border border-border/60 bg-muted/35 px-7 text-center font-heading text-sm font-semibold tracking-[-0.03em] whitespace-nowrap text-foreground/45 sm:h-[4.5rem] sm:min-w-44 sm:px-9 sm:text-base lg:min-w-52 lg:rounded-[0.54rem]"
                  >
                    {logo.logoSrc ? (
                      <Image
                        src={logo.logoSrc}
                        alt={logo.logoAlt ?? `${logo.name} logo`}
                        width={160}
                        height={48}
                        loading="eager"
                        decoding="async"
                        className="max-h-9 w-auto max-w-32 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:max-h-10 sm:max-w-36"
                      />
                    ) : (
                      <PlaceholderLogo name={logo.name} wordmark={logo.wordmark} />
                    )}
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
