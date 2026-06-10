import { Card, CardContent, Container, SectionHeader } from "@/components/ui";

const metrics = [
  { value: "00", label: "Metric placeholder" },
  { value: "00", label: "Metric placeholder" },
  { value: "00", label: "Metric placeholder" }
];

export function TrustMetrics() {
  return (
    <section className="py-section-sm">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Metrics placeholder"
          title="Trust metrics placeholder."
          description="Reserved layout for future credibility indicators."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <Card key={`${metric.label}-${index}`}>
              <CardContent className="space-y-3">
                <div className="font-heading text-heading-2 font-semibold">{metric.value}</div>
                <p className="text-body-sm text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
