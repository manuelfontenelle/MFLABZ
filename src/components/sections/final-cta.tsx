import { Button, Container } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="py-section">
      <Container>
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="font-heading text-heading-2 font-semibold">
              Final CTA placeholder.
            </h2>
            <p className="text-body text-primary-foreground/70">
              Placeholder description for the final call-to-action area.
            </p>
            <Button variant="accent">CTA placeholder</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
