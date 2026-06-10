import Link from "next/link";

import { Button, Container } from "@/components/ui";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="font-heading text-xl font-semibold tracking-[-0.05em]">
          Brand
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button size="sm" variant="outline">
          Placeholder
        </Button>
      </Container>
    </header>
  );
}
