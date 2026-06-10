const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=85",
    alt: "Branding mockup placeholder"
  },
  {
    src: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=900&q=85",
    alt: "Graphic design project placeholder"
  },
  {
    src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=85",
    alt: "Logo design project placeholder"
  },
  {
    src: "https://images.unsplash.com/photo-1635405050339-b0824eb1bf26?auto=format&fit=crop&w=900&q=85",
    alt: "Brand identity project placeholder"
  },
  {
    src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
    alt: "Editorial design project placeholder"
  },
  {
    src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
    alt: "Packaging design project placeholder"
  }
];

export function FeaturedProject() {
  return (
    <section className="overflow-hidden bg-background pt-2 pb-8 sm:pt-3 sm:pb-10 lg:pt-4 lg:pb-12">
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div className="flex gap-2 overflow-x-auto px-4 sm:gap-3 sm:px-6 lg:gap-3 lg:overflow-visible lg:px-0 lg:-translate-x-[9.5vw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="aspect-[3/4] min-w-[72vw] overflow-hidden rounded-xl bg-muted sm:min-w-[38vw] lg:min-w-[18.75vw] lg:rounded-[1.2rem]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
