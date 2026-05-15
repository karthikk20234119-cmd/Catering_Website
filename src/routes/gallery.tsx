import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import wedding from "@/assets/gallery-wedding-1.jpg";
import corporate from "@/assets/gallery-corporate-1.jpg";
import birthday from "@/assets/gallery-birthday-1.jpg";
import outdoor from "@/assets/gallery-outdoor-1.jpg";
import dish1 from "@/assets/menu-main.jpg";
import dish2 from "@/assets/menu-dessert.jpg";
import dish3 from "@/assets/menu-starter.jpg";
import dish4 from "@/assets/menu-beverage.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Royal Feast Catering" },
      {
        name: "description",
        content:
          "A visual journey through weddings, galas, and intimate celebrations we've catered.",
      },
      { property: "og:title", content: "Royal Feast Gallery" },
      { property: "og:description", content: "Photographs from real Royal Feast events." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: wedding },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: wedding, alt: "Wedding banquet hall with gold candelabras", span: "row-span-2" },
  { src: dish1, alt: "Plated wagyu main course", span: "" },
  { src: corporate, alt: "Corporate gala setup", span: "" },
  { src: dish2, alt: "Gold leaf chocolate dessert", span: "" },
  { src: outdoor, alt: "Outdoor twilight catering setup", span: "row-span-2" },
  { src: birthday, alt: "Luxury birthday dessert table", span: "" },
  { src: dish3, alt: "Edible flower amuse-bouche", span: "" },
  { src: dish4, alt: "Crystal cocktail glass with gold garnish", span: "" },
];

function GalleryPage() {
  return (
    <>
      <section className="px-6 py-16">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Moments we've <span className="text-gold italic">catered</span>
            </>
          }
          subtitle="A visual diary of weddings, galas, and intimate dinners."
        />
      </section>
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl glass shadow-elegant ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
