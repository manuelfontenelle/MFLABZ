"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { Dialog, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui";

type PortfolioLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  fallbackSrc: string;
  alt: string;
  closeLabel: string;
};

export function PortfolioLightbox({
  open,
  onOpenChange,
  src,
  fallbackSrc,
  alt,
  closeLabel
}: PortfolioLightboxProps) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="z-[140] bg-[rgba(10,10,12,0.86)] backdrop-blur-[10px]" />
        <DialogPrimitive.Content
          data-slot="portfolio-lightbox"
          aria-describedby={undefined}
          className="fixed inset-0 z-[150] flex cursor-zoom-out items-center justify-center overflow-hidden p-4 outline-none sm:p-8"
          onClick={() => onOpenChange(false)}
        >
          <div className="flex w-full min-w-0 max-w-[min(1400px,calc(100vw-2rem))] flex-col items-center sm:max-w-[min(1400px,calc(100vw-4rem))]">
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <Image
              src={imageSrc}
              alt={alt}
              width={1600}
              height={1000}
              quality={92}
              sizes="(min-width: 1400px) 1400px, 100vw"
              draggable={false}
              className="h-auto max-h-[84vh] w-auto max-w-full rounded-md object-contain shadow-[0_40px_100px_rgba(0,0,0,0.5)] lg:rounded-[0.54rem]"
              style={{ width: "auto", height: "auto", maxWidth: "100%" }}
              onError={() => {
                if (imageSrc !== fallbackSrc) {
                  setImageSrc(fallbackSrc);
                }
              }}
            />
          </div>
          <DialogPrimitive.Close
            className="absolute top-5 right-5 inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
            aria-label={closeLabel}
          >
            <X className="size-5" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
