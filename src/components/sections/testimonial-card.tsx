import { Star } from "lucide-react";

import type { TestimonialItem } from "@/data/testimonials-data";
import { cn, keepExclamationWithWord } from "@/lib/utils";

const avatarColors = ["#2150dc", "#ec3f91", "#f07a24", "#6d5efc", "#0f9f8f", "#e23b4a", "#3d7aed"];

function getClientInitials(name: string) {
  const parts = name
    .split(/[\s_]+/)
    .map((part) => part.replace(/[^\p{L}\p{N}]/gu, ""))
    .filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase();
  }

  return (parts[0] ?? name).replace(/[^\p{L}\p{N}]/gu, "").slice(0, 2).toUpperCase();
}

function avatarColor(name: string) {
  let hash = 0;

  for (const char of name) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return avatarColors[hash % avatarColors.length];
}

export function TestimonialCard({
  testimonial,
  ratingLabel,
  featured = false,
  scoreLabel,
  dateLabel
}: {
  testimonial: TestimonialItem;
  ratingLabel: string;
  featured?: boolean;
  scoreLabel?: string;
  dateLabel?: string;
}) {
  return (
    <article
      className={cn(
        "break-inside-avoid rounded-md p-5 lg:rounded-[0.54rem] lg:p-[1.35rem]",
        featured
          ? "bg-secondary text-white shadow-[0_30px_60px_-30px_rgba(33,80,220,0.55)]"
          : "bg-white text-foreground shadow-[0_0_0_1px_var(--color-stone)]"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn("flex items-center gap-1", featured ? "text-white" : "text-foreground")}
          role="img"
          aria-label={ratingLabel}
        >
          <span className="flex items-center gap-0.5">
            {Array.from({ length: Math.min(5, Math.round(testimonial.rating)) }).map((_, index) => (
              <Star key={index} className="size-3.5 fill-current" strokeWidth={0} />
            ))}
          </span>
          {scoreLabel ? (
            <span
              className={cn(
                "text-xs font-medium tabular-nums",
                featured ? "text-white/80" : "text-[#51515a]"
              )}
            >
              {scoreLabel}
            </span>
          ) : null}
        </span>
        {dateLabel ? (
          <time
            className={cn(
              "shrink-0 text-xs",
              featured ? "text-white/70" : "text-[#8a8a94]"
            )}
            dateTime={testimonial.date || undefined}
          >
            {dateLabel}
          </time>
        ) : null}
      </div>

      <p
        className={cn(
          "mt-3 text-[0.94rem] leading-[1.55] font-normal text-pretty",
          featured ? "text-white/80" : "text-[#51515a]"
        )}
      >
        {keepExclamationWithWord(testimonial.review.trim())}
      </p>

      <div className="mt-4 flex items-center gap-2.5">
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-full text-[0.72rem] font-medium text-white"
          style={{ backgroundColor: avatarColor(testimonial.name) }}
          aria-hidden="true"
        >
          {getClientInitials(testimonial.name)}
        </span>
        <span className="min-w-0">
          <span
            className={cn(
              "block truncate text-sm leading-tight font-medium tracking-[-0.02em]",
              featured ? "text-white" : "text-foreground"
            )}
          >
            {testimonial.name}
          </span>
          <span
            className={cn(
              "mt-0.5 block text-[0.72rem] leading-tight",
              featured ? "text-white/75" : "text-[#8a8a94]"
            )}
          >
            {testimonial.country}
          </span>
        </span>
      </div>
    </article>
  );
}
