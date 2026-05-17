import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { Products } from "@/components/site/Products";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saniya Agriculture Solution — Organic Fertilizers, Manure & Seeds" },
      {
        name: "description",
        content:
          "Premium organic bio fertilizers, manures, phosphorus-rich PROM and quality seeds. Trusted by 2500+ farmers across India for healthier soil and better yields.",
      },
      { property: "og:title", content: "Saniya Agriculture Solution" },
      { property: "og:description", content: "Organic fertilizers, manure & quality seeds for smarter farming." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsStrip />
      <WhatWeDo />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}
