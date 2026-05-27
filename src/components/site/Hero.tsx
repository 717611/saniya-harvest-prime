import { ArrowRight, Phone, Leaf } from "lucide-react";
import heroBg from "../../assets/hero-field.jpg";
import akSingal from "../../assets/ak-singal.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen md:h-auto md:min-h-screen overflow-hidden"
    >
      {/* MOBILE background layer */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/80" />
        <img
          src={akSingal}
          alt="A.K. Singhal"
          className="absolute bottom-0 right-0 w-2/3 max-w-[280px] object-contain opacity-40 mix-blend-luminosity pointer-events-none select-none"
        />
        {/* subtle bottom fade to scene */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="relative md:grid md:grid-cols-2 md:items-center h-full md:min-h-screen">
        {/* LEFT — text */}
        <div className="relative flex flex-col items-start justify-center h-full min-h-screen md:min-h-0 p-8 md:p-12 lg:p-16 text-white">
          {/* Desktop-only left bg + gradient */}
          <div className="hidden md:block absolute inset-0 -z-10">
            <img
              src={heroBg}
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-white/90">
            <Leaf className="size-3.5 text-gold" />
            Trusted by 10,000+ Indian Farmers
          </span>

          <h1 className="mt-5 font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance max-w-2xl">
            Organic Bio Fertilizers, Manures & Seeds for Smarter Farming
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/85 max-w-xl text-balance">
            Healthier soil, stronger roots, sustainable yields — trusted
            agricultural solutions built for Indian farms.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-forest-gradient text-primary-foreground rounded-full px-6 py-3.5 font-semibold shadow-elegant hover:-translate-y-0.5 hover:shadow-card transition-all"
            >
              <Leaf className="size-4" /> Explore Products
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white border border-white/30 bg-white/10 backdrop-blur hover:bg-white/15 hover:border-white/50 transition-all"
            >
              <Phone className="size-4" /> Contact Now
            </a>
          </div>
        </div>

        {/* RIGHT — A.K. Singhal card (desktop only) */}
        <div className="hidden md:flex relative h-full items-center justify-center p-8 lg:p-12">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroBg}
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/30" />
            {/* seam blend with left column */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          {/* Decorative glow */}
          <div className="absolute -z-10 size-[420px] rounded-full bg-gradient-to-br from-gold/30 via-emerald/15 to-transparent blur-3xl" />

          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-white/25 bg-white/10 backdrop-blur-xl shadow-elegant drop-shadow-2xl ring-1 ring-white/10">
            <div className="aspect-[3/4] overflow-hidden bg-black/20">
              <img
                src={akSingal}
                alt="A.K. Singhal, Founder & Director of Saniya Agriculture Solution"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
            <div className="p-5 text-center bg-gradient-to-t from-black/80 via-black/60 to-black/20 backdrop-blur-md border-t border-white/15">
              <div className="font-display font-bold text-xl text-white tracking-tight">
                A.K. Singhal
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
                Founder &amp; Director
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
