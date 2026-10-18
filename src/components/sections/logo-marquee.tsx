"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui";
import { clientLogos } from "@/data/client-logos";

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

function preloadLogoImages(urls: string[]) {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const image = new window.Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = src;
        }),
    ),
  );
}

export function LogoMarquee() {
  const [isMarqueeReady, setIsMarqueeReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const uniqueUrls = clientLogos
      .map((logo) => logo.logoSrc)
      .filter((src): src is string => Boolean(src));

    preloadLogoImages(uniqueUrls).then(() => {
      if (!cancelled) {
        setIsMarqueeReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="overflow-hidden bg-background py-1.5 sm:py-2 lg:py-2">
      <Container size="full" className="px-0">
        <h2 className="sr-only">Trusted client and partner logos</h2>

        <div className="relative mx-auto flex w-full max-w-[1440px] items-center overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-background to-transparent sm:w-10 lg:w-20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-background to-transparent sm:w-10 lg:w-20"
          />

          <div
            className={`flex w-max animate-[logo-marquee_42s_linear_infinite] items-center [backface-visibility:hidden] motion-reduce:animate-none ${
              isMarqueeReady ? "" : "[animation-play-state:paused]"
            }`}
          >
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
                      // eslint-disable-next-line @next/next/no-img-element -- native img avoids Next optimizer URL swaps that flicker on mobile marquee
                      <img
                        src={logo.logoSrc}
                        alt={logo.logoAlt ?? `${logo.name} logo`}
                        width={160}
                        height={48}
                        decoding="async"
                        draggable={false}
                        className="max-h-9 w-auto max-w-32 object-contain opacity-90 transition-opacity duration-300 [backface-visibility:hidden] [transform:translateZ(0)] hover:opacity-100 sm:max-h-10 sm:max-w-36"
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
