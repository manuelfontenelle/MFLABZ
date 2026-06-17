"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

import { Button, Container } from "@/components/ui"
import { siteConfig } from "@/config/site"
import { heroGalleryData } from "@/data/hero-gallery-data"
import { ContactDialog } from "./contact-dialog"

const repeatedGalleryImages = [...heroGalleryData, ...heroGalleryData]

const fadeUp = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0 },
}

export function Hero() {
	return (
		<section
			className="flex min-h-[85vh] flex-col justify-between overflow-hidden bg-background pt-10 pb-0 sm:min-h-[90vh] sm:pt-14 sm:pb-0 lg:min-h-[calc(100svh-3.3rem)] lg:pt-20 lg:pb-0"
			itemScope
			itemType="https://schema.org/Organization"
		>
			<Container className="flex flex-1 items-center">
				<motion.div
					className="w-full"
					initial="hidden"
					animate="visible"
					transition={{ staggerChildren: 0.08 }}
				>
					<div className="grid gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_470px] lg:items-end lg:gap-16">
						<motion.div
							variants={fadeUp}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="space-y-5"
						>
							<p
								className="text-[0.88rem] leading-[1.35] font-semibold tracking-[0.16em] text-secondary uppercase sm:text-[0.975rem]"
								itemProp="name"
							>
								MFLABZ STUDIO
							</p>
							<h1 className="max-w-[620px] font-heading text-[clamp(2.05rem,4.75vw,4.4rem)] leading-[1.31] font-normal tracking-[-0.075em] text-balance text-foreground sm:leading-[1.09]">
								Graphic Design for Modern Brands
							</h1>
						</motion.div>

						<motion.div
							variants={fadeUp}
							transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
							className="w-full max-w-[342px] space-y-[1.4rem] lg:justify-self-end"
						>
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
									className="w-full cursor-pointer border border-solid !border-[#1bc16f] bg-transparent text-[#1bc16f] hover:!border-[#1bc16f] hover:bg-[#1bc16f]/5 hover:text-[#1bc16f] sm:w-auto"
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
						</motion.div>
					</div>
				</motion.div>
			</Container>

			<motion.div
				className="relative left-1/2 mt-12 w-[112vw] -translate-x-1/2 overflow-hidden sm:mt-14 lg:mt-16"
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
			>
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
								sizes="(min-width: 1280px) 980px, (min-width: 1024px) 900px, (min-width: 640px) 720px, 580px"
								priority={index === 0}
								quality={95}
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
			</motion.div>
		</section>
	)
}
