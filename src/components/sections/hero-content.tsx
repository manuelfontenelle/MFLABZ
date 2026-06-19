"use client"

import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui"
import { siteConfig } from "@/config/site"
import { ContactDialog } from "./contact-dialog"

export function HeroContent() {
	return (
		<div className="w-full">
			<div className="grid gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_470px] lg:items-end lg:gap-16">
				<div className="hero-fade space-y-5">
					<p className="text-[0.88rem] leading-[1.35] font-semibold tracking-[0.16em] text-secondary uppercase sm:text-[0.975rem]">
						{siteConfig.creator} STUDIO
					</p>
					<h1 className="max-w-[620px] font-heading text-[clamp(1.75rem,3.9vw,3.6rem)] leading-[1.22] font-normal tracking-[-0.075em] text-balance text-foreground sm:leading-[1.08]">
						Freelance Graphic Design for Modern Brands
					</h1>
				</div>

				<div className="hero-fade hero-fade-delay w-full max-w-[342px] space-y-[1.4rem] lg:justify-self-end">
					<p className="inline-flex w-fit whitespace-nowrap rounded-button border border-border/70 px-2.5 py-1.5 text-[0.56rem] leading-none font-semibold tracking-[0.08em] text-muted-foreground uppercase sm:text-[0.62rem]">
						Graphic design services in Paris and worldwide
					</p>
					<p className="text-[clamp(0.8rem,1.1vw,0.97rem)] leading-[1.6] font-medium text-foreground">
						Thoughtful branding and graphic design that turn ideas into
						memorable, modern identities.
					</p>
					<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
						<ContactDialog
							trigger={
								<Button
									type="button"
									variant="premium"
									size="lg"
									className="w-full cursor-pointer bg-secondary text-secondary-foreground shadow-none hover:bg-secondary/95 hover:shadow-none sm:w-auto"
								>
									Start Project
									<ChevronRight className="ml-0 size-4" />
								</Button>
							}
						/>
						<Button
							asChild
							variant="ghost"
							size="lg"
							className="w-full cursor-pointer border border-solid !border-[#1bc16f] bg-transparent text-[#0a8043] hover:!border-[#1bc16f] hover:bg-[#1bc16f]/5 hover:text-[#0a8043] sm:w-auto"
						>
							<a
								href={siteConfig.links.fiverr}
								target="_blank"
								rel="noreferrer"
							>
								Visit Fiverr
								<ChevronRight className="ml-0 size-4" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
