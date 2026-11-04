"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { portfolioData } from "@/data/portfolio-data";
import type { PortfolioCategory } from "@/data/portfolio-data";
import {
  Container,
  SectionHeader,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { PortfolioImage } from "./portfolio-image";

const portfolioTabs: PortfolioCategory[] = [
  "Logo",
  "Business Cards",
  "Flyer",
  "Double Sided Flyer",
  "Trifold",
  "Bifold",
  "Brochure",
  "Roll Up",
  "Billboard",
  "Yard Sign",
  "Event Stand",
  "Social Media",
  "Packaging",
  "Website"
];

const scrollArrowClassName =
  "absolute top-1/2 z-20 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-sm transition-all duration-300 hover:border-foreground/20 hover:text-[#2150dc] focus-visible:outline-none focus-visible:ring-ring/30 focus-visible:ring-[3px] aria-disabled:pointer-events-none aria-disabled:opacity-0";

const scrollFadeClassName =
  "pointer-events-none absolute inset-y-px z-10 w-16 transition-opacity duration-300";

export function Portfolio() {
  const t = useTranslations("Portfolio");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
      setCanScrollLeft(scroller.scrollLeft > 2);
      setCanScrollRight(scroller.scrollLeft < maxScrollLeft - 2);
    };

    // ResizeObserver fires once on observe, which also seeds the initial state.
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(scroller);
    scroller.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      resizeObserver.disconnect();
      scroller.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const scrollTabs = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: direction * scroller.clientWidth * 0.6,
      behavior: "smooth"
    });
  };

  const revealActiveTab = () => {
    // Wait for Radix to flip data-state before scrolling the new tab into view.
    requestAnimationFrame(() => {
      const activeTab = scrollerRef.current?.querySelector<HTMLElement>(
        '[data-slot="tabs-trigger"][data-state="active"]'
      );

      activeTab?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    });
  };

  return (
    <section
      id="portfolio"
      className="py-section bg-background"
      aria-label={t("ariaLabel")}
    >
      <Container className="space-y-12">
        <SectionHeader
          align="center"
          className="[&_p]:max-w-none lg:[&_p]:whitespace-nowrap"
          title={t("title")}
          description={t("description")}
        />

        <Tabs
          defaultValue="Logo"
          className="items-center"
          onValueChange={revealActiveTab}
        >
          <div className="relative w-full">
            <button
              type="button"
              className={cn(scrollArrowClassName, "left-1.5")}
              aria-label={t("scrollTabsLeft")}
              aria-disabled={!canScrollLeft}
              tabIndex={canScrollLeft ? 0 : -1}
              onClick={() => {
                if (!canScrollLeft) {
                  return;
                }

                scrollTabs(-1);
              }}
            >
              <ChevronLeft className="size-4" />
            </button>
            <div
              aria-hidden="true"
              className={cn(
                scrollFadeClassName,
                "left-px rounded-l-md bg-gradient-to-r from-background via-background/90 to-transparent lg:rounded-l-[0.54rem]",
                canScrollLeft ? "opacity-100" : "opacity-0"
              )}
            />

            <div
              ref={scrollerRef}
              className="w-full overflow-x-auto overscroll-x-contain rounded-md border border-border/70 bg-background shadow-xs [scrollbar-width:none] lg:rounded-[0.54rem] [&::-webkit-scrollbar]:hidden"
            >
              <TabsList
                aria-label={t("ariaTabs")}
                className="h-auto w-max min-w-full flex-nowrap rounded-none border-0 bg-transparent p-0 shadow-none"
              >
                {portfolioTabs.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="group relative h-auto flex-1 cursor-pointer rounded-md px-[0.9rem] py-[0.8775rem] text-[1.05rem] font-medium whitespace-nowrap text-muted-foreground after:absolute after:bottom-0 after:left-0 after:h-[3.6px] after:w-full after:bg-[#2150dc] after:opacity-0 after:transition-opacity after:duration-300 data-[state=active]:bg-transparent data-[state=active]:text-[#2150dc] data-[state=active]:shadow-none data-[state=active]:after:opacity-100 sm:px-[1.035rem] lg:rounded-[0.54rem]"
                  >
                    <span className="inline-block p-0 transition-transform duration-300 ease-out group-data-[state=active]:-translate-y-0.5">
                      {t(`tabs.${tab}`)}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div
              aria-hidden="true"
              className={cn(
                scrollFadeClassName,
                "right-px rounded-r-md bg-gradient-to-l from-background via-background/90 to-transparent lg:rounded-r-[0.54rem]",
                canScrollRight ? "opacity-100" : "opacity-0"
              )}
            />
            <button
              type="button"
              className={cn(scrollArrowClassName, "right-1.5")}
              aria-label={t("scrollTabsRight")}
              aria-disabled={!canScrollRight}
              tabIndex={canScrollRight ? 0 : -1}
              onClick={() => {
                if (!canScrollRight) {
                  return;
                }

                scrollTabs(1);
              }}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          {portfolioTabs.map((tab) => {
            const projects = portfolioData
              .filter((project) => project.category === tab)
              .slice(0, 4);

            return (
              <TabsContent
                key={tab}
                value={tab}
                className="w-full data-[state=active]:animate-[portfolio-reveal_950ms_cubic-bezier(0.16,1,0.3,1)]"
              >
                {projects.length === 0 && (
                  <div className="flex min-h-[16rem] flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border bg-muted/40 px-6 text-center lg:rounded-[0.54rem]">
                    <p className="font-heading text-[1.15rem] font-semibold text-foreground">
                      {t("comingSoonTitle")}
                    </p>
                    <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                      {t("comingSoonDescription")}
                    </p>
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  {projects.map((project) => (
                    // Static hover zone so the lifted card never slides out from under the cursor.
                    <div key={project.id} className="group">
                      <figure
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                        className="overflow-hidden rounded-md border border-border/70 bg-background p-0 shadow-xs [backface-visibility:hidden] transition-[translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [translate:0_0] group-hover:[translate:0_-4px] lg:rounded-[0.54rem]"
                      >
                        <PortfolioImage
                          src={project.imageUrl}
                          fallbackSrc={project.fallbackImageUrl}
                          alt={project.imageAlt}
                        />
                        <meta
                          itemProp="genre"
                          content={`${project.category} ${t("genreSuffix")}`}
                        />
                        <figcaption itemProp="name" className="sr-only">
                          {project.imageAlt}
                        </figcaption>
                      </figure>
                    </div>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </Container>
    </section>
  );
}
