import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChefHat, Utensils, GlassWater, Star } from "lucide-react";
import heroPlatter from "@/assets/hero-platter.png";
import chefPortrait from "@/assets/chef-portrait.jpg";
import menuStarter from "@/assets/menu-starter.jpg";
import menuMain from "@/assets/menu-main.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import menuBeverage from "@/assets/menu-beverage.jpg";
import { ParticleField } from "@/components/ParticleField";
import { SectionHeading } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Feast Catering — Crafting Unforgettable Dining Experiences" },
      {
        name: "description",
        content:
          "Luxury catering for weddings, corporate events, and private celebrations. Cinematic plating, master chefs, white-glove service.",
      },
      { property: "og:title", content: "Royal Feast Catering" },
      {
        property: "og:description",
        content: "Crafting unforgettable dining experiences for life's most important moments.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroPlatter },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const teaserMenu = [
  { title: "Truffle Amuse-Bouche", cat: "Starters", img: menuStarter, price: "$24", chef: true },
  { title: "Wagyu Grand Cru", cat: "Mains", img: menuMain, price: "$96", chef: true },
  { title: "Gold Leaf Opera", cat: "Desserts", img: menuDessert, price: "$28", chef: false },
  { title: "Saffron Sour", cat: "Beverages", img: menuBeverage, price: "$22", chef: false },
];

const testimonials = [
  {
    name: "Isabella & Marcus",
    role: "Wedding · 320 guests",
    quote: "Royal Feast turned our wedding into a cinematic dream. Every plate looked like art.",
  },
  {
    name: "Helena Voss",
    role: "Director, Aurum Capital",
    quote:
      "Flawless execution from canapé to closing toast. Our clients are still talking about it.",
  },
  {
    name: "Ravi Kapoor",
    role: "Private Celebration",
    quote: "An evening of pure indulgence — the kind of dinner you remember for a decade.",
  },
];

function HomePage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <ParticleField count={36} />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-gradient-warm" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-12 lg:grid-cols-12 lg:gap-6 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Luxury Catering Atelier
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl lg:text-[5.2rem]">
              Crafting <span className="text-gold italic">Unforgettable</span> Dining Experiences
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Premium catering for weddings, corporate galas, and luxury celebrations — orchestrated
              by master chefs and presented with cinematic precision.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/book"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground gold-glow transition-transform hover:scale-105"
              >
                Book Catering{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3.5 text-sm font-medium text-foreground hover:bg-primary/10 transition"
              >
                View Menu
              </Link>
            </div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-6">
              {[
                { v: "500+", l: "Events" },
                { v: "10+", l: "Years" },
                { v: "50+", l: "Chefs" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gold">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3D-feel rotating platter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-square max-w-[520px]">
              {/* glowing rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
              <div
                className="absolute inset-6 rounded-full border border-primary/10"
                style={{ animation: "spin-slow 50s linear infinite reverse" }}
              />
              <div className="absolute inset-8 rounded-full bg-gradient-warm blur-2xl" />
              <motion.img
                src={heroPlatter}
                alt="Luxury catering platter with edible gold leaf"
                width={1024}
                height={1024}
                className="relative z-10 mx-auto h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                animate={{ y: [0, -16, 0], rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* floating chef icons */}
              <motion.div
                className="absolute -left-4 top-10 grid h-14 w-14 place-items-center rounded-2xl glass text-primary"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChefHat className="h-6 w-6" />
              </motion.div>
              <motion.div
                className="absolute right-2 top-1/3 grid h-14 w-14 place-items-center rounded-2xl glass text-primary"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <Utensils className="h-6 w-6" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 left-12 grid h-14 w-14 place-items-center rounded-2xl glass text-primary"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                <GlassWater className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT TEASER + counters */}
      <section className="relative px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-warm blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] glass shadow-elegant">
              <img
                src={chefPortrait}
                alt="Master chef plating a luxury dish"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Atelier"
              title={
                <>
                  A decade of <span className="text-gold italic">refined hospitality</span>
                </>
              }
              subtitle="Born from a love of fine dining and theatre, Royal Feast unites a tight-knit brigade of chefs, sommeliers, and stylists who treat every event as a stage worth lighting."
            />
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { to: 500, suffix: "+", l: "Events Catered" },
                { to: 10, suffix: "+", l: "Years of Craft" },
                { to: 50, suffix: "+", l: "Chefs & Staff" },
              ].map((c) => (
                <div key={c.l} className="rounded-2xl glass p-5 text-center">
                  <Counter to={c.to} suffix={c.suffix} />
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-primary hover:text-primary-glow"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SIGNATURE MENU TEASER */}
      <section className="relative px-6 py-28">
        <SectionHeading
          eyebrow="Signature Menu"
          title={
            <>
              From the <span className="text-gold italic">chef's table</span>
            </>
          }
          subtitle="A taste of our seasonal repertoire — designed, plated, and served with Michelin-grade precision."
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teaserMenu.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group hover-tilt relative overflow-hidden rounded-3xl glass"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {m.chef && (
                <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground">
                  Chef Recommended
                </span>
              )}
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.24em] text-primary">{m.cat}</div>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <h3 className="font-display text-xl">{m.title}</h3>
                  <span className="text-sm text-gold">{m.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-sm uppercase tracking-[0.22em] text-foreground hover:bg-primary/10"
          >
            Explore Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative px-6 py-28">
        <SectionHeading
          eyebrow="Kind Words"
          title={
            <>
              Trusted by <span className="text-gold italic">remarkable hosts</span>
            </>
          }
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl glass p-8"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-lg leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/40 pt-4">
                <div className="text-sm">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] glass-strong p-10 md:p-16 text-center">
          <div className="pointer-events-none absolute -inset-20 bg-gradient-warm blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl">
              Let's craft your <span className="text-gold italic">next chapter</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Tell us about your event — we'll design a menu and experience tailored to the moment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground gold-glow"
              >
                Reserve a Date <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-primary/40 px-7 py-3.5 text-sm"
              >
                Talk to a Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
