"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

import { Button, Container } from "@/components/ui"

const fadeUp = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0 },
}

export function Hero() {
	return (
		<section className="overflow-hidden bg-background pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
			<Container>
				<motion.div
					className="max-w-[1160px]"
					initial="hidden"
					animate="visible"
					transition={{ staggerChildren: 0.08 }}
				>
					<motion.div
						variants={fadeUp}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="mb-7 flex flex-col items-start gap-3 sm:mb-8 sm:flex-row sm:items-center sm:gap-4"
					>
						<div className="inline-flex items-center gap-2 rounded-button bg-secondary/10 px-3 py-1.5 text-[13px] font-semibold text-foreground shadow-xs">
							<span
								className="flex items-center gap-0.5 text-secondary"
								aria-hidden="true"
							>
								{Array.from({ length: 5 }).map((_, index) => (
									<Star key={index} className="size-4 fill-current" />
								))}
							</span>
							<span className="text-muted-foreground">
								<span className="text-foreground">Rated 4.9/5</span> from{" "}
								<span className="text-foreground">2500+ reviews</span>
							</span>
						</div>
					</motion.div>

					<motion.div
						variants={fadeUp}
						transition={{ duration: 0.5, ease: "easeOut" }}
						className="space-y-7"
					>
            <h1 className="max-w-[980px] font-heading text-[clamp(2.6rem,5.9vw,5rem)] leading-[1.09] font-medium tracking-[-0.075em] text-balance text-foreground">
							Graphic Designer Trusted By Businesses Worldwide
						</h1>

						<p className="max-w-[760px] text-[clamp(0.95rem,1.4vw,1.16rem)] leading-[1.55] font-medium text-muted-foreground">
							Professional logo design, branding, social media graphics and
							marketing materials crafted to help businesses stand out and grow
							with confidence.
						</p>
					</motion.div>

					<motion.div
						variants={fadeUp}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
						className="mt-9 flex flex-col gap-4 lg:flex-row lg:items-center"
					>
						<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
							<Button variant="premium" size="xl" className="w-full sm:w-auto">
								Start a Project
								<span className="ml-1 inline-flex size-8 items-center justify-center rounded-button bg-white/15">
									<ArrowRight className="size-4" />
								</span>
							</Button>
							<Button
								variant="ghost"
								size="xl"
								className="w-full bg-muted text-foreground hover:bg-muted/80 sm:w-auto"
							>
								View Portfolio
							</Button>
						</div>

						<p className="text-sm font-medium text-muted-foreground lg:pl-3">
							4.9/5 Rating • 4000+ customers • Worldwide Clients
						</p>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	)
}
