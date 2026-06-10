import { testimonialsData } from "@/data/testimonials-data";
import { Card, CardContent, Container, SectionHeader } from "@/components/ui";

export function Testimonials() {
  return (
    <section className="py-section bg-surface-dark text-surface-dark-foreground">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Testimonials placeholder"
          title="Testimonials placeholder."
          description="Reserved area for future client feedback."
          className="[&_h2]:text-white [&_p]:text-white/70"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="border-white/10 bg-white/5 text-white">
              <CardContent className="space-y-6">
                <p className="text-body-sm text-white/70">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-caption uppercase text-white/50">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
