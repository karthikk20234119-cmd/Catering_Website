import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import chefPortrait from "@/assets/chef-portrait.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";
import { Award, Leaf, HeartHandshake, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Royal Feast Catering" },
      {
        name: "description",
        content:
          "A decade of refined hospitality. Meet the chefs and stylists behind Royal Feast Catering.",
      },
      { property: "og:title", content: "About Royal Feast" },
      {
        property: "og:description",
        content: "Master chefs, sommeliers, and stylists crafting cinematic dining.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: chefPortrait },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Award,
    title: "Mastercraft",
    body: "Every dish passes through the hands of a chef trained in fine dining.",
  },
  {
    icon: Leaf,
    title: "Seasonal Sourcing",
    body: "We source from regional farms and partner with growers we know by name.",
  },
  {
    icon: HeartHandshake,
    title: "Hospitality First",
    body: "White-glove service that anticipates rather than reacts.",
  },
  {
    icon: Sparkles,
    title: "Cinematic Plating",
    body: "Presentation choreographed like a stage — light, line, and pause.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="px-6 py-16">
        <SectionHeading
          eyebrow="Our Story"
          title={
            <>
              A decade of <span className="text-gold italic">refined hospitality</span>
            </>
          }
          subtitle="Royal Feast began as a small atelier with a simple belief: a great meal is a piece of theatre. A decade later, we still rehearse every service like opening night."
        />
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-warm blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] glass shadow-elegant">
              <img
                src={chefPortrait}
                alt="Royal Feast head chef plating a dish"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed text-foreground/90">
              From an intimate twelve-seat tasting room to galas of a thousand, our brigade has
              cooked for newlyweds, founders, ministers, and families — always with the same posture
              of care.
            </p>
            <p>
              We are chefs by trade and storytellers by instinct. A menu is a narrative; a service
              is a play in three acts. Our work begins long before a plate is set, in conversations
              about taste, mood, and meaning.
            </p>
            <p>
              Discretion, punctuality, and craft are non-negotiable. Everything else, we love to
              invent.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { to: 500, l: "Events" },
                { to: 10, l: "Years" },
                { to: 50, l: "Team" },
              ].map((c) => (
                <div key={c.l} className="rounded-2xl glass p-5 text-center">
                  <Counter to={c.to} suffix="+" />
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <SectionHeading
          eyebrow="Values"
          title={
            <>
              What we <span className="text-gold italic">stand for</span>
            </>
          }
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="hover-tilt rounded-3xl glass p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-primary-foreground">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
