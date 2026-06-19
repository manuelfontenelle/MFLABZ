"use client"

import Image from "next/image"

type HeroGalleryImageProps = {
	src: string
	fallbackSrc: string
	alt: string
	sizes: string
	fetchPriority?: "high" | "low" | "auto"
	quality: number
	unoptimized: boolean
	decoding: "sync" | "async" | "auto"
	loading: "eager" | "lazy"
}

export function HeroGalleryImage({
	src,
	fallbackSrc,
	alt,
	sizes,
	fetchPriority,
	quality,
	unoptimized,
	decoding,
	loading,
}: HeroGalleryImageProps) {
	return (
		<Image
			src={src}
			alt={alt}
			fill
			sizes={sizes}
			fetchPriority={fetchPriority}
			quality={quality}
			unoptimized={unoptimized}
			className="size-full select-none object-cover"
			decoding={decoding}
			loading={loading}
			onError={(event) => {
				event.currentTarget.src = fallbackSrc
			}}
			draggable={false}
		/>
	)
}
