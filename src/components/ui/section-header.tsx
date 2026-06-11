import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const sectionHeaderVariants = cva("flex flex-col gap-4", {
  variants: {
    align: {
      left: "items-start text-left",
      center: "mx-auto items-center text-center",
      right: "items-end text-right"
    },
    size: {
      sm: "max-w-2xl",
      md: "max-w-3xl",
      lg: "max-w-4xl"
    }
  },
  defaultVariants: {
    align: "left",
    size: "md"
  }
});

type SectionHeaderProps = React.ComponentProps<"div"> &
  VariantProps<typeof sectionHeaderVariants> & {
    eyebrow?: string;
    title: string;
    description?: string;
  };

function SectionHeader({
  className,
  align,
  size,
  eyebrow,
  title,
  description,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      data-slot="section-header"
      className={cn(sectionHeaderVariants({ align, size, className }))}
      {...props}
    >
      {eyebrow && (
        <Badge variant="outline" className="border-primary/10 bg-muted">
          {eyebrow}
        </Badge>
      )}
      <div className="space-y-4">
        <h2 className="font-heading text-heading-2 font-normal text-balance text-foreground">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-body-lg text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export { SectionHeader, sectionHeaderVariants };
