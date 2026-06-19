import { Container } from "@/components/ui"

import { HeroContent } from "./hero-content"
import { HeroGallery } from "./hero-gallery"

export function Hero() {
	return (
		<section
			className="flex min-h-[85vh] flex-col justify-between overflow-hidden bg-background pt-10 pb-0 sm:min-h-[90vh] sm:pt-14 sm:pb-0 lg:min-h-[calc(100svh-3.3rem)] lg:pt-20 lg:pb-0"
			itemScope
			itemType="https://schema.org/Organization"
		>
			<Container className="flex flex-1 items-center">
				<HeroContent />
			</Container>

			<HeroGallery />
		</section>
	)
}
