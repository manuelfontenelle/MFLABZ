import { Star } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui";

import { TrustRatingLink } from "./trust-rating-link";

const happyClients = [
  "/images/clients/client-avatar-1.jpg",
  "/images/clients/client-avatar-2.jpg",
  "/images/clients/client-avatar-3.jpg",
  "/images/clients/client-avatar-4.jpg",
  "/images/clients/client-avatar-5.jpg"
];

export async function TrustMetrics() {
  const t = await getTranslations("Trust");

  return (
    <section className="bg-background pt-[2.4rem] pb-[2.8rem] sm:pt-[3.6rem] sm:pb-[3.5rem] lg:pt-[4.8rem] lg:pb-[4.2rem]">
      <Container className="flex flex-col items-center text-center">
        <TrustRatingLink>
          <span className="flex shrink-0 items-center pr-0.5" aria-hidden="true">
            {happyClients.map((src, index) => (
              <span
                key={src}
                className="relative size-9 overflow-hidden rounded-full bg-muted ring-2 ring-muted"
                style={{
                  zIndex: happyClients.length - index,
                  marginLeft: index === 0 ? 0 : -10
                }}
              >
                <Image src={src} alt="" fill sizes="36px" className="object-cover" />
              </span>
            ))}
          </span>
          <span className="flex min-w-0 flex-col items-start gap-1">
            <span className="flex items-center gap-1 text-secondary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-[1.125rem] fill-current" strokeWidth={0} />
              ))}
            </span>
            <span className="text-left text-xs leading-tight font-medium text-foreground sm:text-[13px]">
              <span className="font-semibold">4.9</span> {t("ratedFrom")}{" "}
              <span className="font-semibold">{t("clientReviews")}</span>
            </span>
          </span>
        </TrustRatingLink>

        <h2 className="max-w-[1035px] font-heading text-[clamp(1.65rem,3.3vw,2.8rem)] leading-[1.5] font-semibold tracking-[-0.065em] text-balance text-foreground sm:leading-[1.24]">
          {t("headingLine1")}
          <br className="hidden sm:block" /> {t("headingLine2")}
        </h2>
      </Container>
    </section>
  );
}
