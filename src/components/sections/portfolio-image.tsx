"use client"

import { useState } from "react"
import Image from "next/image"

type PortfolioImageProps = {
	src: string
	fallbackSrc: string
	alt: string
}

export function PortfolioImage({ src, fallbackSrc, alt }: PortfolioImageProps) {
	const [imageSrc, setImageSrc] = useState(src)

	return (
		<Image
			src={imageSrc}
			alt={alt}
			title={alt}
			width={1600}
			height={900}
			sizes="(min-width: 640px) 50vw, 100vw"
			// Add `aspect-video` back here if the portfolio needs fixed-height cards again.
			className="h-full w-full rounded-[calc(0.375rem-0.125rem)] object-cover lg:rounded-[calc(0.54rem-0.125rem)]"
			loading="lazy"
			draggable={false}
			onDragStart={(event) => event.preventDefault()}
			onError={() => {
				if (imageSrc !== fallbackSrc) {
					setImageSrc(fallbackSrc)
				}
			}}
		/>
	)
}
