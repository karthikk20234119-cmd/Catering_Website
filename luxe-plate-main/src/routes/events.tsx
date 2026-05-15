import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import wedding from "@/assets/gallery-wedding-1.jpg";
import corporate from "@/assets/gallery-corporate-1.jpg";
import birthday from "@/assets/gallery-birthday-1.jpg";
import outdoor from "@/assets/gallery-outdoor-1.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Event Showcase — Royal Feast Catering" },
      {
        name: "description",
        content:
          "A timeline of recent Royal Feast events — weddings, corporate galas, and milestone celebrations.",
      },
      { property: "og:title", content: "Royal Feast Event Showcase" },
      { property: "og:description", content: "Recent events catered by Royal Feast." },
      { property: "og:url", content: "/events" },
      { property: "og:image", content: corporate },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const events = [
  {
    date: "May 2026",
    title: "Voss Foundation Spring Gala",
    body: "A 420-guest gala with a five-course tasting menu and custom dessert pavilion.",
    img: corporate,
    tag: "Corporate",
  },
  {
    date: "Mar 2026",
    title: "The Marlow Wedding",
    body: "Garden ceremony, candlelit reception, and a midnight pâtisserie cart for 280 guests.",
    img: wedding,
    tag: "Wedding",
  },
  {
    date: "Jan 2026",
    title: "Kapoor 50th Birthday",
    body: "Private dining for 60 — a six-course chef's table with paired wines.",
    img: birthday,
    tag: "Private",
  },
  {
    date: "Sep 2025",
    title: "Lakeside Estate Soirée",
    body: "Twilight outdoor catering, live wood-fire stations, string lights and roses.",
    img: outdoor,
    tag: "Outdoor",
  },
];

function EventsPage() {
  return (
    <>
      <section className="px-6 py-16">
        <SectionHeading
          eyebrow="Showcase"
          title={
            <>
              A timeline of <span className="text-gold italic">recent events</span>
            </>
          }
          subtitle="A sample of moments we've had the privilege of catering."
        />
      </section>
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2" />
          <div className="space-y-12">
            {events.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid gap-6 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <span className="text-xs uppercase tracking-[0.24em] text-primary">
                    {e.date} · {e.tag}
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{e.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
                </div>
                <div className="pl-12 md:pl-0">
                  <div className="overflow-hidden rounded-3xl glass shadow-elegant">
                    <img
                      src={e.img}
                      alt={e.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="aspect-[5/3] h-full w-full object-cover"
                    />
                  </div>
                </div>
                <span className="absolute left-4 top-2 grid h-5 w-5 place-items-center rounded-full bg-gradient-gold gold-glow md:left-1/2 md:-translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
