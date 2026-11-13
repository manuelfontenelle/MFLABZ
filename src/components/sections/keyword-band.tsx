import Image from "next/image";
import { getTranslations } from "next-intl/server";

function Separator() {
  return (
    <span className="mx-[0.22em] inline-flex shrink-0 items-center" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG separator in marquee */}
      <img
        src="/images/deco1.svg"
        alt=""
        className="h-[0.72em] w-[0.72em] rotate-45"
      />
    </span>
  );
}

export async function KeywordBand() {
  const t = await getTranslations("KeywordBand");
  const words = t.raw("words") as string[];

  return (
    <section className="relative max-w-full overflow-x-clip bg-secondary text-secondary-foreground" aria-label={t("label")}>
      <Image
        src="/images/blue_background4.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <p className="sr-only">{t("summary")}</p>
      <div
        className="relative z-10 flex w-max animate-[logo-marquee_26s_linear_infinite] py-[clamp(0.7rem,1.3vw,1.35rem)] [backface-visibility:hidden] motion-reduce:animate-none"
        aria-hidden="true"
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center">
            {words.map((word) => (
              <span key={`${group}-${word}`} className="inline-flex items-center font-heading text-[clamp(1.7rem,3vw,3.15rem)] leading-none font-semibold tracking-[-0.06em] whitespace-nowrap">
                <span className="px-[0.12em]">{word}</span>
                <Separator />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
