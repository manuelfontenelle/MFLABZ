import { heroGalleryData } from "@/data/hero-gallery-data"

import { HeroGalleryImage } from "./hero-gallery-image"

const CARD_CLASS =
	"relative h-[38vh] min-h-[280px] w-[76.8vw] max-h-[562px] shrink-0 overflow-hidden bg-muted sm:h-[47vh] sm:min-h-[328px] sm:w-[42vw] lg:h-[56vh] lg:w-[25.2vw] xl:w-[21.6vw]"

const TRACK_CLASS =
	"flex w-max transform-gpu will-change-transform [animation:logo-marquee_60s_linear_infinite] [backface-visibility:hidden] motion-reduce:animate-none"

const IMAGE_SIZES =
	"(max-width: 639px) 77vw, (min-width: 1280px) 22vw, (min-width: 1024px) 26vw, 43vw"

const mobileGalleryImages = [
	...heroGalleryData.slice(0, 4),
	...heroGalleryData.slice(0, 4),
]

const desktopGalleryImages = [...heroGalleryData, ...heroGalleryData]

type HeroGalleryTrackProps = {
	images: typeof heroGalleryData
	variant: "mobile" | "desktop"
}

function HeroGalleryTrack({ images, variant }: HeroGalleryTrackProps) {
	const isMobile = variant === "mobile"
	const isProd = process.env.NODE_ENV === "production"
	const useOptimizer = isMobile && isProd

	return (
		<div className={isMobile ? "sm:hidden" : "hidden sm:block"}>
			<div className={TRACK_CLASS}>
				{images.map((image, index) => {
					const isLcpCandidate = isMobile && index === 0 && isProd
					const isEager = isLcpCandidate || (!isMobile && index < 4)

					return (
						<div key={`${variant}-${image.id}-${index}`} className={CARD_CLASS}>
							<HeroGalleryImage
								src={image.imageUrl}
								fallbackSrc={image.fallbackImageUrl}
								alt={image.imageAlt}
								sizes={IMAGE_SIZES}
								fetchPriority={isLcpCandidate ? "high" : "auto"}
								quality={useOptimizer && !isLcpCandidate ? 75 : 90}
								unoptimized={!useOptimizer}
								decoding={isLcpCandidate ? "sync" : "async"}
								loading={isEager ? "eager" : "lazy"}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export function HeroGallery() {
	return (
		<div className="relative left-1/2 mt-12 w-[112vw] -translate-x-1/2 overflow-hidden sm:mt-14 lg:mt-16">
			<HeroGalleryTrack images={mobileGalleryImages} variant="mobile" />
			<HeroGalleryTrack images={desktopGalleryImages} variant="desktop" />
		</div>
	)
}
