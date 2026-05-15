import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Heart, Briefcase, Cake, Wine, TreePine, UtensilsCrossed, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Royal Feast Catering" },
      {
        name: "description",
        content:
          "Wedding catering, corporate events, private dining, outdoor and buffet services tailored to your moment.",
      },
      { property: "og:title", content: "Royal Feast Services" },
      {
        property: "og:description",
        content: "Six bespoke catering services — from intimate dinners to grand galas.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Heart,
    title: "Wedding Catering",
    body: "Heirloom menus, ceremonial timing, and styling that complements your venue.",
    tag: "Most Booked",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    body: "Galas, conferences, and client dinners with discreet, on-time service.",
    tag: null,
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    body: "Playful, personal menus for milestones — from intimate to extravagant.",
    tag: null,
  },
  {
    icon: Wine,
    title: "Luxury Private Dining",
    body: "Chef-led tasting menus with paired wines, served at your table.",
    tag: "Signature",
  },
  {
    icon: TreePine,
    title: "Outdoor Catering",
    body: "Garden weddings, terrace soirées, and remote venues handled end-to-end.",
    tag: null,
  },
  {
    icon: UtensilsCrossed,
    title: "Buffet Services",
    body: "Abundant stations and grazing tables with premium presentation.",
    tag: null,
  },
];

function ServicesPage() {
  return (
    <>
      <section className="px-6 py-16">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Catering for <span className="text-gold italic">every kind of moment</span>
            </>
          }
          subtitle="Six bespoke services. One promise — flawless food, elegant service, and a moment your guests won't forget."
        />
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="hover-tilt group relative overflow-hidden rounded-3xl glass p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-warm opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-2xl" />
              {s.tag && (
                <span className="absolute right-5 top-5 rounded-full border border-primary/50 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary">
                  {s.tag}
                </span>
              )}
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-primary-foreground gold-glow">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-display text-2xl">{s.title}</h3>
              <p className="relative mt-3 text-sm text-muted-foreground">{s.body}</p>
              <Link
                to="/book"
                className="relative mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary"
              >
                Inquire{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
