import { Link } from "@tanstack/react-router";
import { Crown, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 px-6 pb-10 pt-20">
      <div className="gold-divider mb-16" />
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-primary-foreground">
              <Crown className="h-5 w-5" />
            </span>
            <span className="font-display text-lg">
              Royal <span className="text-gold">Feast</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Crafting unforgettable dining experiences for life's most important moments.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground hover:text-primary transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-primary">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-foreground">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-foreground">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-primary">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>Wedding Catering</li>
            <li>Corporate Events</li>
            <li>Private Dining</li>
            <li>Outdoor & Buffet</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-primary">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              24 Crown Avenue, Suite 100
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              hello@royalfeast.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Royal Feast Catering. Crafted with care.</p>
        <div className="flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-gold/10">
          <p className="font-display font-medium tracking-wider text-gold shadow-sm">
            Powered by AlphaX Solution 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
