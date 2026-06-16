import Image from "next/image"

import { portfolioData } from "@/data/portfolio-data"
import {
	Container,
	SectionHeader,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui"

const portfolioTabs = [
	"Logo",
	"Business Cards",
	"Trifold",
	"Bifold",
	"Brochure",
	"Flyer",
	"Roll Up",
	"Billboard",
	"Yard Sign",
	"Packaging",
	"Social Media",
] as const

export function Portfolio() {
	return (
		<section id="portfolio" className="py-section bg-background">
			<Container className="space-y-12">
				<SectionHeader
					align="center"
					className="[&_p]:max-w-none lg:[&_p]:whitespace-nowrap"
					title="Selected Projects"
					description="Explore a selection of branding and graphic design projects created for businesses worldwide."
				/>

				<Tabs defaultValue="Logo" className="items-center">
					<TabsList className="h-auto w-full max-w-full flex-wrap rounded-md border-border/70 bg-background p-0 shadow-xs lg:rounded-[0.54rem]">
						{portfolioTabs.map((tab) => (
							<TabsTrigger
								key={tab}
								value={tab}
								className="group relative h-auto flex-1 cursor-pointer rounded-md px-[0.39rem] py-[0.8775rem] text-[1.05rem] font-medium text-muted-foreground after:absolute after:bottom-0 after:left-0 after:h-[3.6px] after:w-full after:bg-[#2150dc] after:opacity-0 after:transition-opacity after:duration-300 data-[state=active]:bg-transparent data-[state=active]:text-[#2150dc] data-[state=active]:shadow-none data-[state=active]:after:opacity-100 sm:px-[1.035rem] lg:rounded-[0.54rem]"
							>
								<span className="inline-block p-0 transition-transform duration-300 ease-out group-data-[state=active]:-translate-y-0.5">
									{tab}
								</span>
							</TabsTrigger>
						))}
					</TabsList>

					{portfolioTabs.map((tab) => {
						const projects = portfolioData
							.filter((project) => project.category === tab)
							.slice(0, 4)

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
											className="group overflow-hidden rounded-md border border-border/70 bg-background p-0 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-md lg:rounded-[0.54rem]"
										>
											<Image
												src={project.imageUrl}
												alt={project.imageAlt}
												width={1200}
												height={900}
												sizes="(min-width: 640px) 50vw, 100vw"
												className="aspect-[25/18] h-full w-full rounded-[calc(0.375rem-0.125rem)] object-cover lg:rounded-[calc(0.54rem-0.125rem)]"
												loading="lazy"
											/>
										</figure>
									))}
								</div>
							</TabsContent>
						)
					})}
				</Tabs>
			</Container>
		</section>
	)
}
