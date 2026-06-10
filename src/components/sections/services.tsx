import { servicesData } from "@/data/services-data";
import { Card, CardContent, CardHeader, CardTitle, Container, SectionHeader } from "@/components/ui";

export function Services() {
  return (
    <section id="services" className="py-section bg-muted">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Services placeholder"
          title="Services layout placeholder."
          description="Reserved cards for future service descriptions."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Card key={service.id} className="bg-background">
              <CardHeader>
                <div className="mb-4 size-10 rounded-2xl bg-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
