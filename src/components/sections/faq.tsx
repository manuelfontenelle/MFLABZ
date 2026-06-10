import { faqData } from "@/data/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
  SectionHeader
} from "@/components/ui";

export function FAQ() {
  return (
    <section id="faq" className="py-section bg-muted">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeader
          eyebrow="FAQ placeholder"
          title="FAQ placeholder."
          description="Reserved accordion for future questions."
        />

        <Accordion type="single" collapsible className="rounded-3xl bg-background px-6">
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
