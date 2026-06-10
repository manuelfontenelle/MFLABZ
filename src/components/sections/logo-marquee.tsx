import { Container } from "@/components/ui";

const logos = ["Logo", "Logo", "Logo", "Logo", "Logo", "Logo"];

export function LogoMarquee() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-3 rounded-3xl border border-border bg-muted p-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-20 items-center justify-center rounded-2xl bg-background text-sm font-semibold text-muted-foreground"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
