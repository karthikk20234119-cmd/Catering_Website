import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? "glass-strong rounded-full px-6 py-3 mx-4 md:mx-auto md:px-8" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-primary-foreground gold-glow">
            <Crown className="h-5 w-5" />
          </span>
          <span className="font-display text-lg tracking-wide">
            Royal <span className="text-gold">Feast</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "!text-primary [&>span]:!w-full" }}
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          to="/book"
          className="hidden lg:inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 gold-glow"
        >
          Book Catering
        </Link>

        <button
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full glass text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-3 glass-strong rounded-3xl p-6"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  activeProps={{ className: "!text-primary bg-foreground/5" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Book Catering
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
