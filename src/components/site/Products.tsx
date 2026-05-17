import { Check, ShoppingCart, MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import ecoRoot from "@/assets/product-eco-root.png";
import yugm from "@/assets/product-yugm.png";
import rajSeeds from "@/assets/product-raj-seeds.png";

type Product = {
  image: string;
  name: string;
  sub: string;
  prices: { label: string; price: string }[];
  benefits: string[];
  cta: { label: string; icon: any; href: string };
};

const products: Product[] = [
  {
    image: ecoRoot,
    name: "Eco Root",
    sub: "Humic Acid 98%",
    prices: [
      { label: "1 KG", price: "₹1000" },
      { label: "500 GM", price: "₹625" },
      { label: "250 GM", price: "₹350" },
    ],
    benefits: ["Stronger root development", "Better nutrient absorption", "Improves soil activity"],
    cta: { label: "Order Now", icon: ShoppingCart, href: "tel:+918852003393" },
  },
  {
    image: yugm,
    name: "युग्म मोर प्रोम",
    sub: "Phosphorus Rich Organic Manure",
    prices: [{ label: "50 KG · 50–60 KG per Acre", price: "₹1600" }],
    benefits: ["Improves soil fertility", "Supports root growth", "Organic phosphorus support"],
    cta: { label: "Enquire Now", icon: MessageCircle, href: "https://wa.me/918852003393" },
  },
  {
    image: rajSeeds,
    name: "RAJ Organic Seeds R-46",
    sub: "Improved Mustard Seed",
    prices: [],
    benefits: ["Better germination", "Healthy crop growth", "Reliable field performance"],
    cta: { label: "Get Details", icon: ArrowRight, href: "#contact" },
  },
];

export function Products() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald uppercase">Our Products</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-forest-deep">
            Featured Products
          </h2>
          <p className="mt-3 text-muted-foreground">Field-tested solutions designed for real farm results.</p>
        </div>

        <div className="relative">
          <button
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className="hidden lg:grid absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 size-12 rounded-full bg-card shadow-elegant place-items-center text-forest hover:bg-forest hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className="hidden lg:grid absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 size-12 rounded-full bg-card shadow-elegant place-items-center text-forest hover:bg-forest hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="size-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {products.map((p) => (
              <article
                key={p.name}
                className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[calc((100%-3rem)/3)] bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all border border-border overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-gradient-to-b from-secondary/60 to-background grid place-items-center p-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl text-forest-deep text-center">{p.name}</h3>
                  <p className="text-center text-sm text-muted-foreground mt-1">{p.sub}</p>

                  {p.prices.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      {p.prices.map((pr) => (
                        <div
                          key={pr.label}
                          className="rounded-lg border border-border bg-secondary/60 px-3 py-2 text-center min-w-[88px]"
                        >
                          <div className="text-[10px] font-semibold text-muted-foreground tracking-wide">{pr.label}</div>
                          <div className="font-display font-bold text-forest-deep">{pr.price}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="mt-5 space-y-2 text-sm">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-foreground/85">
                        <Check className="size-4 text-emerald shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p.cta.href}
                    className="mt-auto pt-6"
                  >
                    <span className="flex items-center justify-center gap-2 bg-forest-gradient text-primary-foreground rounded-full py-3 font-semibold shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all">
                      <p.cta.icon className="size-4" /> {p.cta.label}
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
