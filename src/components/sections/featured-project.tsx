import { Badge, Card, CardContent, Container, SectionHeader } from "@/components/ui";

export function FeaturedProject() {
  return (
    <section className="py-section-sm">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Featured placeholder"
          title="Featured project placeholder."
          description="Reserved area for a highlighted project overview."
        />

        <Card className="overflow-hidden p-0">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="min-h-[360px] bg-muted" aria-label="Featured project visual placeholder" />
            <CardContent className="flex flex-col justify-between gap-8 p-8">
              <div className="space-y-4">
                <Badge variant="muted">Project type</Badge>
                <h3 className="font-heading text-heading-3 font-semibold">
                  Project title placeholder
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  Placeholder description for the featured project block.
                </p>
              </div>
              <div className="h-12 rounded-button border border-border bg-background" />
            </CardContent>
          </div>
        </Card>
      </Container>
    </section>
  );
}
