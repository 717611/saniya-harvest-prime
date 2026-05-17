import { Package, Sprout, Leaf, Wheat } from "lucide-react";

const items = [
  {
    icon: Package,
    title: "Organic Fertilizers",
    desc: "Improve soil fertility and support healthy crop growth naturally.",
  },
  {
    icon: Sprout,
    title: "Organic Manure",
    desc: "Enrich soil structure, increase organic matter and support sustainable farming.",
  },
  {
    icon: Leaf,
    title: "Phosphorus Rich PROM",
    desc: "Essential nutrients for strong roots, flowering and better yield.",
  },
  {
    icon: Wheat,
    title: "Quality Seeds",
    desc: "High quality seeds for better germination and uniform crop growth.",
  },
];

export function WhatWeDo() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald uppercase">What we do</p>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-forest-deep">
            Complete Agricultural Solutions
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group bg-card border border-border rounded-2xl p-6 lg:p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1.5 transition-all"
            >
              <div className="size-16 rounded-2xl bg-forest/8 grid place-items-center text-forest mb-5 group-hover:bg-forest group-hover:text-primary-foreground transition-colors">
                <it.icon className="size-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest-deep">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
