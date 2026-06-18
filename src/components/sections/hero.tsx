"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

import { Button, Container } from "@/components/ui"
import { siteConfig } from "@/config/site"
import { heroGalleryData } from "@/data/hero-gallery-data"
import { ContactDialog } from "./contact-dialog"

const repeatedGalleryImages = [...heroGalleryData, ...heroGalleryData]

export function Hero() {
	const [shouldOptimizeHeroImages, setShouldOptimizeHeroImages] = useState(true)

	useEffect(() => {
		const mobileMediaQuery = window.matchMedia("(max-width: 639px)")
		const updateImageOptimization = () => {
			setShouldOptimizeHeroImages(mobileMediaQuery.matches)
		}

		updateImageOptimization()
		mobileMediaQuery.addEventListener("change", updateImageOptimization)

		return () => {
			mobileMediaQuery.removeEventListener("change", updateImageOptimization)
		}
	}, [])

	return (
		<section
			className="flex min-h-[85vh] flex-col justify-between overflow-hidden bg-background pt-10 pb-0 sm:min-h-[90vh] sm:pt-14 sm:pb-0 lg:min-h-[calc(100svh-3.3rem)] lg:pt-20 lg:pb-0"
			itemScope
			itemType="https://schema.org/Organization"
		>
			<Container className="flex flex-1 items-center">
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
			</Container>

			<div className="relative left-1/2 mt-12 w-[112vw] -translate-x-1/2 overflow-hidden sm:mt-14 lg:mt-16">
				<div className="flex w-max transform-gpu will-change-transform [animation:logo-marquee_60s_linear_infinite] [backface-visibility:hidden] motion-reduce:animate-none">
					{repeatedGalleryImages.map((image, index) => (
						<div
							key={`${image.id}-${index}`}
							className="relative h-[47vh] min-h-[328px] w-[76.8vw] max-h-[562px] shrink-0 overflow-hidden bg-muted sm:w-[42vw] lg:h-[56vh] lg:w-[25.2vw] xl:w-[21.6vw]"
						>
							<Image
								src={image.imageUrl}
								alt={image.imageAlt}
								fill
								sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 32vw, (min-width: 640px) 50vw, 80vw"
								priority={index === 0}
								quality={shouldOptimizeHeroImages ? 86 : 90}
								unoptimized={!shouldOptimizeHeroImages}
								className="size-full select-none object-cover"
								decoding="async"
								loading={index === 0 ? undefined : "lazy"}
								onError={(event) => {
									event.currentTarget.src = image.fallbackImageUrl
								}}
								draggable={false}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
