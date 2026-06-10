import { portfolioData } from "@/data/portfolio-data";
import { Badge, Card, CardContent, Container, SectionHeader } from "@/components/ui";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-section">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Portfolio placeholder"
          title="Portfolio grid placeholder."
          description="Reserved grid for future project cards and filters."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.map((item) => (
            <Card key={item.id} className="overflow-hidden p-0">
              <div className="aspect-[4/3] bg-muted" aria-label={item.imageAlt} />
              <CardContent className="space-y-3 p-5">
                <Badge variant="muted">{item.category}</Badge>
                <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
