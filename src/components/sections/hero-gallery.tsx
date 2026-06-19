import { heroGalleryData } from "@/data/hero-gallery-data"

import { HeroGalleryImage } from "./hero-gallery-image"
import { HeroMobilePicture, heroMobileBasePath } from "./hero-mobile-picture"

const CARD_CLASS =
	"relative h-[38vh] min-h-[280px] w-[76.8vw] max-h-[562px] shrink-0 overflow-hidden bg-muted sm:h-[47vh] sm:min-h-[328px] sm:w-[42vw] lg:h-[56vh] lg:w-[25.2vw] xl:w-[21.6vw]"

const TRACK_CLASS =
	"flex w-max transform-gpu will-change-transform [animation:logo-marquee_60s_linear_infinite] [backface-visibility:hidden] motion-reduce:animate-none"

const DESKTOP_IMAGE_SIZES =
	"(min-width: 1280px) 22vw, (min-width: 1024px) 26vw, 43vw"

const mobileGalleryImages = [
	...heroGalleryData.slice(0, 4),
	...heroGalleryData.slice(0, 4),
]

const desktopGalleryImages = [...heroGalleryData, ...heroGalleryData]

function MobileHeroGalleryTrack() {
	return (
		<div className="sm:hidden">
			<div className={TRACK_CLASS}>
				{mobileGalleryImages.map((image, index) => (
					<div
						key={`mobile-${image.id}-${index}`}
						className={CARD_CLASS}
					>
						<HeroMobilePicture
							basePath={heroMobileBasePath(image.imageUrl)}
							alt={image.imageAlt}
							lcp={index === 0}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

function DesktopHeroGalleryTrack() {
	const isProd = process.env.NODE_ENV === "production"

	return (
		<div className="hidden sm:block">
			<div className={TRACK_CLASS}>
				{desktopGalleryImages.map((image, index) => (
					<div
						key={`desktop-${image.id}-${index}`}
						className={CARD_CLASS}
					>
						<HeroGalleryImage
							src={image.imageUrl}
							fallbackSrc={image.fallbackImageUrl}
							alt={image.imageAlt}
							sizes={DESKTOP_IMAGE_SIZES}
							fetchPriority={index === 0 ? "high" : "auto"}
							quality={90}
							unoptimized={isProd}
							decoding={index < 4 ? "sync" : "async"}
							loading={index < 4 ? "eager" : "lazy"}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export function HeroGallery() {
	return (
		<div className="relative left-1/2 mt-12 w-[112vw] -translate-x-1/2 overflow-hidden sm:mt-14 lg:mt-16">
			<MobileHeroGalleryTrack />
			<DesktopHeroGalleryTrack />
		</div>
	)
}
