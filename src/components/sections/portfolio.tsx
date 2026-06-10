import Image from "next/image";

import { portfolioData } from "@/data/portfolio-data";
import { Container, SectionHeader, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

const portfolioTabs = ["Featured", "Logos", "Branding", "Digital", "Print"] as const;

export function Portfolio() {
  return (
    <section id="portfolio" className="py-section bg-background">
      <Container className="space-y-12">
        <SectionHeader
          align="center"
          title="Our Recent Work"
          description="Explore a selection of branding and graphic design projects created for businesses worldwide."
        />

        <Tabs defaultValue="Featured" className="items-center">
          <TabsList className="h-auto w-full max-w-full flex-wrap rounded-md border-border/70 bg-background p-[0.2875rem] shadow-xs lg:rounded-[0.54rem]">
            {portfolioTabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="h-[2.875rem] flex-1 rounded-md px-[1.15rem] text-[1.05rem] font-medium text-muted-foreground data-[state=active]:bg-foreground data-[state=active]:text-background sm:px-[1.725rem] lg:rounded-[0.54rem]"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {portfolioTabs.map((tab) => {
            const projects = (
              tab === "Featured"
                ? portfolioData
                : portfolioData.filter((project) => project.category === tab)
            ).slice(0, 4);

            return (
              <TabsContent
                key={tab}
                value={tab}
                className="w-full data-[state=active]:animate-[portfolio-reveal_950ms_cubic-bezier(0.16,1,0.3,1)]"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {projects.map((project, index) => (
                    <figure
                      key={project.id}
                      className="group rounded-md border border-border/70 bg-background p-1.5 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-md lg:rounded-[0.54rem]"
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        width={1200}
                        height={900}
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="aspect-[5/3] h-full w-full rounded-[calc(0.375rem-0.125rem)] object-cover lg:rounded-[calc(0.54rem-0.125rem)]"
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </Container>
    </section>
  );
}
