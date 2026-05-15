# Royal Feast Catering — Build Plan

A premium, multi-page catering website with a black + royal gold + burgundy aesthetic, cinematic motion, glassmorphism, and a conversion-focused booking flow.

## Routes (TanStack Start, separate routes for SEO)

```
src/routes/
  __root.tsx           shared shell: navbar, footer, scroll progress, cursor glow
  index.tsx            Home (Hero, About teaser, Services teaser, Signature Menu teaser, Testimonials, CTA)
  about.tsx            Full About + counters + story + team
  services.tsx         All 6 service cards with detail
  menu.tsx             Signature Menu (Starters / Mains / Desserts / Beverages)
  gallery.tsx          Masonry event gallery
  events.tsx           Timeline of completed events
  contact.tsx          Contact + Google Maps placeholder + WhatsApp
  book.tsx             Full booking form
```

Each route gets its own `head()` with unique title/description/og tags.

## Design system (`src/styles.css`)

Tokens in `oklch`:
- `--background` matte black `#0F0F0F`
- `--foreground` soft white `#F5F5F5`
- `--primary` royal gold `#D4AF37` (+ `--primary-glow`)
- `--accent` deep burgundy
- `--muted` warm dark neutral
- Gradients: `--gradient-gold`, `--gradient-warm-light`, `--gradient-hero`
- Shadows: `--shadow-gold-glow`, `--shadow-elegant`, `--shadow-glass`
- `--glass-bg`, `--glass-border` for glassmorphism
- Luxury font pair: **Playfair Display** (display) + **Inter** (body), loaded via Google Fonts in `__root.tsx` head

Tailwind utilities for `.glass-card`, `.gold-glow`, `.text-gradient-gold`, `.hover-tilt`, animated `gold-shimmer`, `float`, `fade-in-up`, `reveal-on-scroll`.

## Components (`src/components/`)

- `Navbar.tsx` — sticky, blurs on scroll, mobile hamburger sheet, gold underline on active
- `Footer.tsx` — gold glowing divider, quick links, socials
- `ScrollProgress.tsx` — top gold progress bar
- `CursorGlow.tsx` — desktop-only soft gold cursor halo
- `ParticleField.tsx` — lightweight CSS/SVG floating particles for hero
- `SectionHeading.tsx` — eyebrow + serif headline + gold rule
- `GlassCard.tsx` — reusable glassmorphism card
- `Counter.tsx` — animated number on scroll into view
- `ServiceCard.tsx` — 3D tilt + glow on hover
- `MenuItemCard.tsx` — image zoom, "Chef Recommended" badge
- `TestimonialCarousel.tsx` — auto-sliding glass cards w/ star animation
- `EventTimeline.tsx` — vertical alternating timeline
- `BookingForm.tsx` — floating labels, zod validation, glass styling
- `WhatsAppFAB.tsx` + `BackToTopFAB.tsx` — sticky floating actions
- `LoaderIntro.tsx` — first-load luxury intro animation (gold logo reveal, ~1.2s)

## Animation approach

- **Framer Motion** (`motion`) for entrance/scroll reveals, hero parallax, card tilt, carousel, counter, timeline.
- CSS keyframes already available (`fade-in`, `scale-in`, `slide-in-right`) plus added `float`, `shimmer`, `glow-pulse`.
- Scroll reveals via `whileInView` with `viewport={{ once: true }}`.
- "3D food" visuals achieved with high-quality generated images on circular gold-glow plates with slow `rotate` + `float` motion (no Three.js — keeps build simple and fast).

## Generated imagery (`src/assets/`)

Use `imagegen` premium for hero pieces, standard elsewhere:
- `hero-platter.png` — overhead luxury catering platter, transparent bg, for hero rotation
- `chef-portrait.jpg` — moody chef shot for About
- 6 service icons/illustrations
- 8–12 menu dish photos (starters, mains, desserts, beverages)
- 9 gallery event photos (weddings, corporate, birthday)
- Testimonial avatars (3–5)

## Booking form

- React Hook Form + Zod schema (name, phone, email, event type, guests, date, message)
- Floating label inputs, gold focus ring, glass container
- On submit: success toast + (placeholder) — no backend wired in this plan; data logged + toast. Cloud/email integration left as a follow-up the user can request.

## Sections built per spec

Hero · About + counters · 6 Services · Signature Menu · Masonry Gallery · Testimonials · Event Timeline · Why Choose Us · Booking · Contact (map placeholder + WhatsApp) · Footer — all included, distributed across routes with strong teasers on home.

## SEO & performance

- Per-route `head()` meta + og tags; `og:image` from each route's hero image
- Single H1 per route, semantic landmarks, alt text on all images
- Lazy-load gallery images, `loading="lazy"`
- JSON-LD `LocalBusiness` + `FoodEstablishment` on home

## Out of scope (ask before adding)

- Real backend for bookings (Lovable Cloud + email)
- Real Google Maps embed (API key) — using styled placeholder
- Three.js/WebGL 3D — using image-based pseudo-3D for performance & build stability
- CMS for menu/gallery editing

## Tech notes

- Stack: TanStack Start + React 19 + Tailwind v4 + Framer Motion + Zod + RHF
- New deps to add: `framer-motion`, `react-hook-form`, `@hookform/resolvers`, `zod` (most likely already present — will verify)
- All colors via semantic tokens, no hardcoded hex in components
