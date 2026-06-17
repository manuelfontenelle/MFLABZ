"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import { Card, CardContent, Container, SectionHeader } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { testimonialsData } from "@/data/testimonials-data";
import type { TestimonialItem } from "@/data/testimonials-data";

const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const testimonialsPerSlide = 4;
const clientCountryFlags = ["US", "CA", "GB", "AU", "DE", "FR", "NL"];

function getClientInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.replace(/\W/g, "").charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <Card className="group h-full gap-0 border-white/80 bg-white p-0 text-zinc-950 shadow-[0_18px_50px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:border-secondary/35 hover:shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
      <CardContent className="flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[0.78rem] font-semibold tracking-[0.08em] text-zinc-500">
              {getClientInitials(testimonial.name)}
            </div>

            <div>
              <h3 className="!font-sans text-[1.05rem] leading-tight !font-medium tracking-[-0.035em] text-zinc-950">
                {testimonial.name}
              </h3>
              <div className="mt-2 flex items-center">
                <span className="inline-flex h-[0.7rem] w-[1.225rem] items-center justify-center overflow-hidden">
                  <ReactCountryFlag
                    countryCode={testimonial.countryFlag}
                    svg
                    title={testimonial.country}
                    aria-label={testimonial.country}
                    className="block"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </span>
              </div>
            </div>
          </div>

          <div
            className="flex shrink-0 items-center gap-0.5 text-secondary"
            role="img"
            aria-label={`${testimonial.rating} star rating`}
          >
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star key={index} className="size-4 fill-current" />
            ))}
          </div>
        </div>

        <p className="mt-7 text-[0.96rem] leading-7 text-zinc-600">
          &ldquo;{testimonial.review}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonialSlides = useMemo(() => {
    const slides: TestimonialItem[][] = [];

    for (let index = 0; index < testimonialsData.length; index += testimonialsPerSlide) {
      slides.push(testimonialsData.slice(index, index + testimonialsPerSlide));
    }

    return slides;
  }, []);
  const totalSlides = testimonialSlides.length;

  const showPreviousSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
    );
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
    );
  };

  const showSlide = (nextSlide: number) => {
    if (nextSlide === activeSlide) {
      return;
    }

    setActiveSlide(nextSlide);
  };

  return (
    <section id="testimonials" className="overflow-x-clip bg-secondary py-section text-white">
      <Container className="overflow-hidden">
        <div className="grid w-full min-w-0 max-w-full gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <motion.div
            className="min-w-0 max-w-full overflow-hidden lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SectionHeader
              title="What Clients Say"
              description="Real feedback from entrepreneurs, startups and established companies."
              className="max-w-full [&_h2]:break-words [&_h2]:text-white [&_p]:text-white/70"
            />

            <div className="mt-9 grid max-w-full gap-3 sm:max-w-md">
              <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-5 lg:rounded-[0.54rem]">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="flex items-center gap-0.5 text-white"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-current" />
                    ))}
                  </span>
                  <p className="text-sm font-semibold tracking-[-0.01em] text-white">
                    4.9/5 Average Rating
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-5 lg:rounded-[0.54rem]">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                  <div>
                    <p className="font-heading text-[1.45rem] leading-none font-normal tracking-[-0.05em] text-white">
                      2500+
                    </p>
                    <p className="mt-2 text-xs font-medium text-white/60">
                      Verified Reviews
                    </p>
                  </div>

                  <span className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden="true" />

                  <div>
                    <p className="font-heading text-[1.45rem] leading-none font-normal tracking-[-0.05em] text-white">
                      4000+
                    </p>
                    <p className="mt-2 text-xs font-medium text-white/60">
                      Projects Delivered
                    </p>
                  </div>

                  <span className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden="true" />

                  <div>
                    <p className="font-heading text-[1.45rem] leading-none font-normal tracking-[-0.05em] text-white">
                      25+
                    </p>
                    <p className="mt-2 text-xs font-medium text-white/60">
                      Industries Served
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex max-w-full flex-wrap items-center gap-3 font-medium text-white/60">
                  <span className="flex max-w-full flex-wrap items-center gap-1.5" aria-hidden="true">
                    {clientCountryFlags.map((countryCode) => (
                      <span
                        key={countryCode}
                        className="inline-flex h-[0.7rem] w-[1.225rem] items-center justify-center overflow-hidden"
                      >
                        <ReactCountryFlag
                          countryCode={countryCode}
                          svg
                          className="block"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                        />
                      </span>
                    ))}
                  </span>
                  <span className="hidden h-4 w-px bg-white/15 min-[390px]:block" aria-hidden="true" />
                  <span className="text-sm leading-snug">Clients from 50+ countries.</span>
                </div>

                <a
                  href={siteConfig.links.fiverr}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-2 inline-flex max-w-full flex-wrap items-center gap-3 rounded-full border border-solid !border-white px-4 py-2 text-sm font-semibold tracking-[-0.01em] text-white transition-colors duration-300 hover:!border-white hover:bg-white/10 hover:text-white"
                >
                  <span>View My Fiverr Profile</span>
                  <span
                    className="text-white transition-transform duration-300 ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="min-w-0 max-w-full space-y-5 overflow-hidden"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
          >
            <div className="max-w-full overflow-hidden bg-secondary md:hidden">
              <div className="flex max-w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {testimonialsData.map((testimonial, index) => (
                  <div
                    key={`${testimonial.name}-${testimonial.country}-${index}`}
                    className="min-w-[min(82vw,22rem)] max-w-[82vw] shrink-0 snap-start"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden overflow-hidden md:block">
              <motion.div
                className="flex"
                style={{ width: `${totalSlides * 100}%` }}
                animate={{ x: `-${(activeSlide * 100) / totalSlides}%` }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1]
                }}
              >
                {testimonialSlides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="grid shrink-0 gap-4 md:grid-cols-2"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    {slide.map((testimonial, testimonialIndex) => (
                      <TestimonialCard
                        key={`${testimonial.name}-${testimonial.country}-${slideIndex}-${testimonialIndex}`}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="hidden items-center justify-between gap-4 md:flex">
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === index ? "w-7 bg-white" : "w-2 bg-white/25"
                    }`}
                    aria-label={`Show testimonial slide ${index + 1}`}
                    onClick={() => showSlide(index)}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.09] active:bg-white/[0.14]"
                  aria-label="Show previous testimonials"
                  onClick={showPreviousSlide}
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.09] active:bg-white/[0.14]"
                  aria-label="Show next testimonials"
                  onClick={showNextSlide}
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
