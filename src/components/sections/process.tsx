import { Card, CardContent, Container, SectionHeader } from "@/components/ui";

const steps = [
  "Step placeholder",
  "Step placeholder",
  "Step placeholder",
  "Step placeholder"
];

export function Process() {
  return (
    <section id="process" className="py-section">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Process placeholder"
          title="Process placeholder."
          description="Reserved timeline for future workflow steps."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={`${step}-${index}`}>
              <CardContent className="space-y-6">
                <span className="text-caption uppercase text-muted-foreground">
                  0{index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold">{step}</h3>
                  <p className="text-body-sm text-muted-foreground">
                    Placeholder text for this process step.
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
