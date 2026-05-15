import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Royal Feast Catering" },
      {
        name: "description",
        content:
          "Reach our concierge by phone, email, or WhatsApp. Visit our atelier on Crown Avenue.",
      },
      { property: "og:title", content: "Contact Royal Feast" },
      { property: "og:description", content: "Speak with our catering concierge." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="px-6 py-16">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Speak to our <span className="text-gold italic">concierge</span>
            </>
          }
          subtitle="We respond to inquiries within four working hours."
        />
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Visit",
              body: "24 Crown Avenue, Suite 100\nMetropolitan District",
            },
            { icon: Phone, title: "Call", body: "+1 (555) 123-4567\nMon–Sat · 9am – 8pm" },
            { icon: Mail, title: "Email", body: "hello@royalfeast.com\nevents@royalfeast.com" },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl glass p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl">{c.title}</h3>
              <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 overflow-hidden rounded-3xl glass shadow-elegant">
            <div className="relative h-[420px] w-full">
              {/* Map placeholder */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,oklch(0.78_0.14_85/0.15),transparent_60%),radial-gradient(ellipse_at_70%_70%,oklch(0.38_0.12_20/0.18),transparent_60%)]" />
              <svg
                className="absolute inset-0 h-full w-full opacity-30"
                viewBox="0 0 800 420"
                fill="none"
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M40 0 L0 0 0 40"
                      fill="none"
                      stroke="oklch(0.78 0.14 85 / 0.4)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="800" height="420" fill="url(#grid)" />
                <path
                  d="M0 220 Q200 140 420 240 T800 200"
                  stroke="oklch(0.78 0.14 85 / 0.6)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M120 0 Q160 200 80 420"
                  stroke="oklch(0.38 0.12 20 / 0.6)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-primary-foreground gold-glow animate-glow-pulse">
                  <MapPin className="h-6 w-6" />
                </span>
                <div className="mt-3 font-display text-lg">Royal Feast Atelier</div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  24 Crown Avenue
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl glass p-8">
            <h3 className="font-display text-xl">Quick chat</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer messaging? Reach us instantly on WhatsApp.
            </p>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground gold-glow"
            >
              <MessageCircle className="h-4 w-4" /> Open WhatsApp
            </a>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground hover:text-primary"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
