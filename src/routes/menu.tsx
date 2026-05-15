import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import menuStarter from "@/assets/menu-starter.jpg";
import menuMain from "@/assets/menu-main.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import menuBeverage from "@/assets/menu-beverage.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Signature Menu — Royal Feast Catering" },
      {
        name: "description",
        content:
          "Seasonal tasting menu of starters, mains, desserts, and beverages — designed by our master chefs.",
      },
      { property: "og:title", content: "Royal Feast Signature Menu" },
      {
        property: "og:description",
        content: "A Michelin-grade menu for weddings and luxury events.",
      },
      { property: "og:url", content: "/menu" },
      { property: "og:image", content: menuMain },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; img: string; chef?: boolean };
type Section = { cat: string; items: Item[] };

const sections: Section[] = [
  {
    cat: "Starters",
    items: [
      {
        name: "Truffle Amuse-Bouche",
        desc: "Black truffle, brioche, gold leaf",
        price: "$24",
        img: menuStarter,
        chef: true,
      },
      {
        name: "Oyster Trio",
        desc: "Mignonette, yuzu pearls, smoked",
        price: "$32",
        img: menuStarter,
      },
      {
        name: "Heirloom Crudo",
        desc: "Citrus, basil, olive caviar",
        price: "$26",
        img: menuStarter,
      },
    ],
  },
  {
    cat: "Main Course",
    items: [
      {
        name: "Wagyu Grand Cru",
        desc: "A5 wagyu, bordelaise, marrow",
        price: "$96",
        img: menuMain,
        chef: true,
      },
      {
        name: "Saffron Risotto",
        desc: "Carnaroli, parmigiano, pearl",
        price: "$48",
        img: menuMain,
      },
      {
        name: "Roasted Loup de Mer",
        desc: "Citrus beurre blanc, fennel",
        price: "$62",
        img: menuMain,
      },
    ],
  },
  {
    cat: "Desserts",
    items: [
      {
        name: "Gold Leaf Opera",
        desc: "Coffee, ganache, 24k garnish",
        price: "$28",
        img: menuDessert,
        chef: true,
      },
      {
        name: "Vanilla Île Flottante",
        desc: "Pistachio praline, crème anglaise",
        price: "$22",
        img: menuDessert,
      },
      {
        name: "Tonka Mille-Feuille",
        desc: "Vanilla cream, caramel glaze",
        price: "$24",
        img: menuDessert,
      },
    ],
  },
  {
    cat: "Beverages",
    items: [
      {
        name: "Saffron Sour",
        desc: "Whisky, lemon, saffron foam",
        price: "$22",
        img: menuBeverage,
      },
      {
        name: "Vintage Negroni",
        desc: "Aged gin, sweet vermouth",
        price: "$24",
        img: menuBeverage,
        chef: true,
      },
      {
        name: "Pomegranate Spritz",
        desc: "Champagne, pomegranate, mint",
        price: "$20",
        img: menuBeverage,
      },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="px-6 py-16">
        <SectionHeading
          eyebrow="Signature Menu"
          title={
            <>
              From the <span className="text-gold italic">chef's table</span>
            </>
          }
          subtitle="A seasonal selection. Every menu can be tailored to your event, dietary needs, and theme."
        />
      </section>

      {sections.map((sec, sIdx) => (
        <section key={sec.cat} className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-6">
              <h3 className="font-display text-3xl md:text-4xl">{sec.cat}</h3>
              <span className="hidden h-px flex-1 bg-border md:block" />
              <span className="text-xs uppercase tracking-[0.24em] text-primary">0{sIdx + 1}</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sec.items.map((it, i) => (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group hover-tilt overflow-hidden rounded-3xl glass"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.name}
                      loading="lazy"
                      width={1024}
                      height={820}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {it.chef && (
                      <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground">
                        Chef Recommended
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-display text-xl">{it.name}</h4>
                      <span className="text-gold">{it.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
