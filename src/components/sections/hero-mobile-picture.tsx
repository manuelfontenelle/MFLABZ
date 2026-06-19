type HeroMobilePictureProps = {
	basePath: string
	alt: string
	lcp?: boolean
}

export function HeroMobilePicture({
	basePath,
	alt,
	lcp = false,
}: HeroMobilePictureProps) {
	return (
		<picture>
			<source srcSet={`${basePath}.avif`} type="image/avif" />
			<source srcSet={`${basePath}.webp`} type="image/webp" />
			<img
				src={`${basePath}.jpg`}
				alt={alt}
				fetchPriority={lcp ? "high" : "auto"}
				loading={lcp ? "eager" : "lazy"}
				decoding={lcp ? "sync" : "async"}
				className="size-full select-none object-cover"
				draggable={false}
			/>
		</picture>
	)
}

function heroMobileBasePath(imageUrl: string) {
	const filename = imageUrl.split("/").pop()?.replace(/\.jpg$/, "") ?? "hero1"
	return `/images/hero/mobile/${filename}`
}

export { heroMobileBasePath }
