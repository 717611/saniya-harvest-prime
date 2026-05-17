import { ArrowRight, Leaf, Sprout, TreePine, Phone, ShieldCheck, BadgeCheck, Users } from "lucide-react";
import akSingal from "@/assets/ak-singal.png";
import heroField from "@/assets/hero-field.jpg";

const badges = [
  { icon: Leaf, label: "Organic Solutions" },
  { icon: Sprout, label: "Better Soil Health" },
  { icon: BadgeCheck, label: "Premium Seeds" },
  { icon: Users, label: "Farmer Trusted" },
];

const floating = [
  { icon: Leaf, label: "Organic", sub: "Farming" },
  { icon: Sprout, label: "Soil", sub: "Nutrition" },
  { icon: TreePine, label: "Sustainable", sub: "Growth" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroField}
          alt="Lush green agricultural field at sunrise"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/85 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-forest-deep text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-balance">
              Organic Bio Fertilizers, Manures, Phosphorus & Seeds for Smarter Farming
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl text-balance">
              Supporting healthier soil, stronger roots and sustainable crop growth with trusted agricultural solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-forest-gradient text-primary-foreground rounded-full px-6 py-3.5 font-semibold shadow-card hover:shadow-elegant transition-all hover:-translate-y-0.5"
              >
                <Leaf className="size-4" /> Explore Products
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-background border border-border text-forest-deep rounded-full px-6 py-3.5 font-semibold hover:border-forest hover:text-forest transition-all"
              >
                <Phone className="size-4" /> Contact Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center gap-2 bg-card border border-border rounded-2xl px-3 py-4 shadow-soft hover:-translate-y-1 transition-transform"
                >
                  <span className="size-9 rounded-full bg-forest/10 grid place-items-center text-forest">
                    <b.icon className="size-4" />
                  </span>
                  <span className="text-xs font-semibold text-forest-deep text-center">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative animate-fade-in">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative gold ring backdrop */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 size-[85%] rounded-full bg-gradient-to-br from-emerald/25 via-olive/15 to-transparent blur-2xl" />
              </div>

              <div className="relative rounded-[42%_42%_38%_38%/45%_45%_38%_38%] overflow-hidden ring-4 ring-gold/60 shadow-elegant bg-gradient-to-b from-forest/10 to-emerald/20 aspect-[3/4]">
                <img
                  src={akSingal}
                  alt="A.K. Singal, C.M.D. of Saniya Agriculture Solution"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Floating cards */}
              <div className="hidden sm:flex absolute -right-2 lg:right-0 top-10 flex-col gap-3">
                {floating.map((f, i) => (
                  <div
                    key={f.label}
                    className="bg-card/95 backdrop-blur rounded-xl shadow-card px-3 py-2.5 flex items-center gap-2.5 animate-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <span className="size-8 rounded-full bg-forest/10 grid place-items-center text-forest">
                      <f.icon className="size-4" />
                    </span>
                    <span className="text-[11px] leading-tight font-semibold text-forest-deep">
                      {f.label}<br />{f.sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* Name plate */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 sm:-bottom-4 bg-forest-gradient text-primary-foreground rounded-full px-6 py-2.5 ring-2 ring-gold shadow-elegant text-center min-w-[220px]">
                <div className="font-display font-bold text-lg leading-tight">A.K. Singal</div>
                <div className="text-[11px] opacity-90 leading-tight">C.M.D., Saniya Agriculture Solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
