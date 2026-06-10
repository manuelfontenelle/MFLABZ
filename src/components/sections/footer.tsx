import Link from "next/link";

import { Container, Separator } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <Container className="space-y-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <Link href="/" className="font-heading text-xl font-medium tracking-[-0.05em]">
              Brand
            </Link>
            <p className="max-w-md text-body-sm text-muted-foreground">
              Footer placeholder text.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link href="#portfolio" className="hover:text-foreground">
              Portfolio
            </Link>
            <Link href="#services" className="hover:text-foreground">
              Services
            </Link>
            <Link href="#faq" className="hover:text-foreground">
              FAQ
            </Link>
          </div>
        </div>

        <Separator />

        <p className="text-caption uppercase text-muted-foreground">
          Placeholder copyright
        </p>
      </Container>
    </footer>
  );
}
