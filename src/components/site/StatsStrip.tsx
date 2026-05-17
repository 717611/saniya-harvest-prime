import { Award, Users, Package, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "2500+", label: "Happy Farmers" },
  { icon: Package, value: "20+", label: "Quality Products" },
  { icon: ShieldCheck, value: "100%", label: "Satisfaction" },
];

export function StatsStrip() {
  return (
    <section className="bg-forest-gradient text-primary-foreground mt-8 lg:mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-3 justify-center lg:justify-start">
            <span className="size-12 shrink-0 rounded-full ring-2 ring-gold/70 grid place-items-center text-gold">
              <s.icon className="size-5" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold text-2xl text-gold">{s.value}</div>
              <div className="text-xs sm:text-sm opacity-90">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
