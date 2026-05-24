import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/saniya-logo-full.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="size-10 rounded-full bg-forest/10 grid place-items-center">
            <Leaf className="size-5 text-forest" />
          </span>
          <span className="font-display font-semibold leading-tight text-forest-deep text-sm sm:text-base">
            Saniya Agriculture
            <span className="block text-[11px] sm:text-xs font-medium text-muted-foreground">
              Solution
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-forest transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-forest hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+918852003393"
          className="hidden md:flex items-center gap-2.5 bg-forest-gradient text-primary-foreground rounded-full pl-2 pr-5 py-2 shadow-card hover:shadow-elegant transition-all hover:-translate-y-0.5"
        >
          <span className="size-8 rounded-full bg-white/15 grid place-items-center">
            <Phone className="size-4" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-[10px] uppercase tracking-wider opacity-80">Call Now</span>
            <span className="block text-xs font-semibold">+91 8852003393</span>
          </span>
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden grid place-items-center size-10 rounded-full bg-forest/10 text-forest"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-foreground/90 font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="tel:+918852003393"
              className="mt-2 flex items-center justify-center gap-2 bg-forest-gradient text-primary-foreground rounded-full py-3 font-semibold"
            >
              <Phone className="size-4" /> +91 8852003393
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
