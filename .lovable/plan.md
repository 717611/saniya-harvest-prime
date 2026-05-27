## Rebuild `src/components/site/Hero.tsx`

Only this file changes. No edits to `vite.config.ts`, `index.html`, or any build config.

### Imports
- `import heroBg from '../../assets/hero-field.jpg';`
- `import akSingal from '../../assets/ak-singal.png';`
- Lucide icons: `ArrowRight`, `Leaf`, `Phone`.

### Structure

```text
<section id="home" class="relative h-screen md:h-auto md:min-h-screen overflow-hidden">
  // Mobile: full-section bg image + bg-black/80 overlay
  // Desktop: bg image confined to right column, left column gets dark gradient

  <div class="absolute inset-0 md:hidden">           // mobile bg layer
    <img src={heroBg} class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/80" />
    <img src={akSingal}                              // integrated portrait
         class="absolute bottom-0 right-0 w-2/3 max-w-xs object-contain
                opacity-40 mix-blend-luminosity pointer-events-none" />
  </div>

  <div class="relative md:grid md:grid-cols-2 md:items-center h-full md:min-h-screen">

    // LEFT — text (mobile: overlay; desktop: own column with gradient)
    <div class="relative flex flex-col items-start justify-center h-full
                p-8 md:p-12 lg:p-16 text-white">
      <div class="hidden md:block absolute inset-0 -z-10">
        <img src={heroBg} class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r
                    from-black/80 via-black/60 to-black/30" />
      </div>

      <span class="badge">Trusted by 10,000+ Farmers</span>
      <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl
                 leading-[1.05] text-white">
        Organic Bio Fertilizers, Manures & Seeds for Smarter Farming
      </h1>
      <p class="mt-6 text-base sm:text-lg text-white/85 max-w-xl">
        Healthier soil, stronger roots, sustainable yields — trusted agri
        solutions built for Indian farms.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="#products" class="bg-forest-gradient ...">Explore Products <ArrowRight/></a>
        <a href="#contact"  class="backdrop-blur bg-white/10 border border-white/30 ...">
          <Phone/> Contact Now
        </a>
      </div>
    </div>

    // RIGHT — A.K. Singhal card (desktop only; hidden on mobile because
    //          mobile already integrates portrait into background)
    <div class="hidden md:flex relative h-full items-center justify-center
                p-8 lg:p-12">
      <div class="hidden md:block absolute inset-0 -z-10">
        <img src={heroBg} class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/30" />          // clean tint
      </div>

      <div class="relative w-full max-w-sm rounded-3xl overflow-hidden
                  border border-white/25 backdrop-blur-xl bg-white/10
                  shadow-2xl drop-shadow-2xl">
        <div class="aspect-[3/4] overflow-hidden">
          <img src={akSingal} class="w-full h-full object-cover object-center" />
        </div>
        <div class="p-5 text-center bg-gradient-to-t from-black/70 to-black/30
                    backdrop-blur-md">
          <div class="font-display font-bold text-xl text-white tracking-tight">
            A.K. Singhal
          </div>
          <div class="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
            Founder & Director
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
```

### Behavior summary
- **Mobile (`h-screen`)**: one full-bleed `heroBg` covers the entire section, `bg-black/80` dark overlay across all of it, A.K. Singhal portrait absolutely positioned bottom-right at reduced opacity / blend mode so it reads as integrated into the scene. Headline + sub + CTAs sit on top, left-aligned, vertically centered via `flex flex-col items-start justify-center h-full p-8`. No scroll needed to see both text and portrait.
- **Desktop (`md:` grid 2 cols, `items-center`)**: left column = text with `bg-gradient-to-r from-black/80 via-black/60 to-black/30` over the hero image; right column = clean hero image with a glassmorphism card (backdrop-blur, white/10 bg, white/25 border, drop-shadow-2xl) holding the portrait, name `A.K. Singhal`, subtext `Founder & Director`. Card is vertically centered in its column.
- All text uses `text-white` / `text-white/85` for contrast. Gold accent (`text-gold` token already in `styles.css`) used for the role subtext.

### Notes
- Drop the existing decorative ring/floating-card/badge-grid composition — the rebuild is a cleaner, more professional single-focus hero per spec.
- Keep existing semantic tokens (`bg-forest-gradient`, `text-gold`, `shadow-elegant`) where helpful; no new color literals.
- No other files touched.
