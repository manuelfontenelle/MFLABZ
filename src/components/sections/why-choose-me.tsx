import { Card, CardContent, Container, SectionHeader } from "@/components/ui";

const items = ["Reason placeholder", "Reason placeholder", "Reason placeholder"];

export function WhyChooseMe() {
  return (
    <section className="py-section">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Why placeholder"
          title="Why choose me placeholder."
          description="Reserved structure for future differentiators."
        />

        <div className="grid gap-4">
          {items.map((item, index) => (
            <Card key={`${item}-${index}`}>
              <CardContent className="flex gap-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-button bg-accent text-sm font-semibold">
                  {index + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold">{item}</h3>
                  <p className="text-body-sm text-muted-foreground">
                    Placeholder text for this reason.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
