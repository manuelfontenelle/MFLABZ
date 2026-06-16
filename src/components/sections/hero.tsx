"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

import { Button, Container } from "@/components/ui"
import { siteConfig } from "@/config/site"
import { ContactDialog } from "./contact-dialog"

const galleryImages = [
	{
		src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=85",
		alt: "Branding mockup with printed identity pieces",
	},
	{
		src: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=900&q=85",
		alt: "Graphic design mockup with bold visual system",
	},
	{
		src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=85",
		alt: "Abstract logo and brand identity mockup",
	},
	{
		src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=85",
		alt: "Brand identity mockup on premium stationery",
	},
	{
		src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
		alt: "Editorial design and printed brand collateral",
	},
	{
		src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
		alt: "Packaging design mockup for a modern brand",
	},
]

const repeatedGalleryImages = [...galleryImages, ...galleryImages]

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
					<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_470px] lg:items-end lg:gap-16">
						<motion.div
							variants={fadeUp}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="space-y-5"
						>
							<p
								className="text-[0.975rem] leading-[1.35] font-semibold tracking-[0.16em] text-secondary uppercase"
								itemProp="name"
							>
								MFLABZ STUDIO
							</p>
							<h1 className="max-w-[620px] font-heading text-[clamp(2.05rem,4.75vw,4.4rem)] leading-[1.09] font-normal tracking-[-0.075em] text-balance text-foreground">
								Graphic Design for Modern Brands
							</h1>
						</motion.div>

						<motion.div
							variants={fadeUp}
							transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
							className="w-full max-w-[342px] space-y-[1.4rem] lg:justify-self-end"
						>
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
							key={`${image.src}-${index}`}
							className="h-[47vh] min-h-[328px] w-[76.8vw] max-h-[562px] shrink-0 overflow-hidden bg-muted sm:w-[42vw] lg:h-[56vh] lg:w-[25.2vw] xl:w-[21.6vw]"
						>
							<img
								src={image.src}
								alt={image.alt}
								className="size-full select-none object-cover"
								decoding="async"
								loading={index < galleryImages.length ? "eager" : "lazy"}
								draggable={false}
							/>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
