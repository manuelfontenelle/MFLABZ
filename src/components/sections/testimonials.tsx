"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import { Card, CardContent, Container, SectionHeader } from "@/components/ui";
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

function getClientInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.replace(/\W/g, "").charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
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
    <section id="testimonials" className="bg-black py-section text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SectionHeader
              title="What Clients Say"
              description="Real feedback from entrepreneurs, startups and established companies."
              className="[&_h2]:text-white [&_p]:text-white/70"
            />

            <div className="mt-9 grid gap-3 sm:max-w-md">
              <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-5 lg:rounded-[0.54rem]">
                <div className="flex items-center gap-3">
                  <span
                    className="flex items-center gap-0.5 text-secondary"
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
                    <p className="font-heading text-[1.45rem] leading-none font-medium tracking-[-0.05em] text-white">
                      2500+
                    </p>
                    <p className="mt-2 text-xs font-medium text-white/60">
                      Verified Reviews
                    </p>
                  </div>

                  <span className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden="true" />

                  <div>
                    <p className="font-heading text-[1.45rem] leading-none font-medium tracking-[-0.05em] text-white">
                      5000+
                    </p>
                    <p className="mt-2 text-xs font-medium text-white/60">
                      Projects Delivered
                    </p>
                  </div>

                  <span className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden="true" />

                  <div>
                    <p className="font-heading text-[1.45rem] leading-none font-medium tracking-[-0.05em] text-white">
                      50+
                    </p>
                    <p className="mt-2 text-xs font-medium text-white/60">
                      Industries Served
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 whitespace-nowrap font-medium text-white/60">
                  <span className="flex items-center gap-1.5 text-base leading-none" aria-hidden="true">
                    <span>🇺🇸</span>
                    <span>🇨🇦</span>
                    <span>🇬🇧</span>
                    <span>🇦🇺</span>
                    <span>🇩🇪</span>
                    <span>🇫🇷</span>
                    <span>🇳🇱</span>
                  </span>
                  <span className="h-4 w-px bg-white/15" aria-hidden="true" />
                  <span className="text-sm leading-none">Clients from 50+ countries.</span>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-sm font-semibold tracking-[-0.01em] text-white/75 transition-colors duration-300 hover:text-secondary"
                >
                  <span>View My Fiverr Profile</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-5"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
          >
            <div className="overflow-hidden">
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
                    {slide.map((testimonial) => (
                      <Card
                        key={`${testimonial.name}-${testimonial.country}`}
                        className="group h-full gap-0 border-white/80 bg-white p-0 text-zinc-950 shadow-[0_18px_50px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:border-secondary/35 hover:shadow-[0_22px_60px_rgba(0,0,0,0.22)]"
                      >
                        <CardContent className="flex h-full flex-col p-6 sm:p-7">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[0.78rem] font-semibold tracking-[0.08em] text-zinc-500">
                                {getClientInitials(testimonial.name)}
                              </div>

                              <div>
                                <h3 className="font-heading text-[1.05rem] leading-tight font-medium tracking-[-0.035em]">
                                  {testimonial.name}
                                </h3>
                                <div className="mt-2 flex items-center gap-1.5 text-[0.55rem] font-medium text-zinc-500">
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
                                  <span>{testimonial.country}</span>
                                </div>
                              </div>
                            </div>

                            <div
                              className="flex shrink-0 items-center gap-0.5 text-secondary"
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
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === index ? "w-7 bg-secondary" : "w-2 bg-white/25"
                    }`}
                    aria-label={`Show testimonial slide ${index + 1}`}
                    onClick={() => showSlide(index)}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white transition-colors duration-300 hover:border-secondary/40 hover:text-secondary"
                  aria-label="Show previous testimonials"
                  onClick={showPreviousSlide}
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white transition-colors duration-300 hover:border-secondary/40 hover:text-secondary"
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
