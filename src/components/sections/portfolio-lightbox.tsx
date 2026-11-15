"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Dialog, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui";

type PortfolioLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  fallbackSrc: string;
  alt: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  canGoPrevious: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export function PortfolioLightbox({
  open,
  onOpenChange,
  src,
  fallbackSrc,
  alt,
  closeLabel,
  previousLabel,
  nextLabel,
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext
}: PortfolioLightboxProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const imageSrc = failedSrc === src ? fallbackSrc : src;

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && canGoPrevious) {
        event.preventDefault();
        onPrevious();
      }

      if (event.key === "ArrowRight" && canGoNext) {
        event.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, canGoPrevious, canGoNext, onPrevious, onNext]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="z-[140]" />
        <DialogPrimitive.Content
          data-slot="portfolio-lightbox"
          aria-describedby={undefined}
          className="fixed inset-0 z-[150] flex cursor-zoom-out items-center justify-center overflow-hidden py-4 outline-none sm:py-8"
          onClick={() => onOpenChange(false)}
        >
          <div
            className="flex max-h-[88vh] max-w-full min-w-0 items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={alt}
                width={1920}
                height={1152}
                quality={90}
                sizes="100vw"
                draggable={false}
                className="h-auto max-h-[88vh] w-auto max-w-full cursor-zoom-out rounded-md object-contain shadow-[0_40px_100px_rgba(0,0,0,0.5)] lg:rounded-[0.54rem]"
                style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "88vh" }}
                onClick={() => onOpenChange(false)}
                onError={() => {
                  if (src !== fallbackSrc) {
                    setFailedSrc(src);
                  }
                }}
              />
            ) : null}
          </div>

          {canGoPrevious ? (
            <button
              type="button"
              className="absolute top-1/2 left-3 z-[160] inline-flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none sm:left-5 sm:size-12"
              aria-label={previousLabel}
              onClick={(event) => {
                event.stopPropagation();
                onPrevious();
              }}
            >
              <ChevronLeft className="size-6" strokeWidth={1.8} />
            </button>
          ) : null}

          {canGoNext ? (
            <button
              type="button"
              className="absolute top-1/2 right-3 z-[160] inline-flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none sm:right-5 sm:size-12"
              aria-label={nextLabel}
              onClick={(event) => {
                event.stopPropagation();
                onNext();
              }}
            >
              <ChevronRight className="size-6" strokeWidth={1.8} />
            </button>
          ) : null}

          <DialogPrimitive.Close
            className="absolute top-5 right-5 z-[160] inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
            aria-label={closeLabel}
            onClick={(event) => event.stopPropagation()}
          >
            <X className="size-5" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
