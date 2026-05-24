## Scope

Only `src/components/site/Products.tsx` and new asset files. No other component, style, color, typography, or layout change.

## 1. Add new product assets

Copy uploaded images into `src/assets/`:
- `product-uttam-fasal.png` (file_00000000dfb87208a6c844cad4f5799d.png)
- `product-raj-seeds.png` (replace, file_000000001bdc720891ec8e5a8eb07efb.png)
- `product-yugm.png` (replace, file_00000000a7a47208b8229eed1411a405.png)
- `product-eco-green.png` (file_000000002570720884ba5b3ac29ec437.png)
- `product-silk.png` (file_00000000ca6c7208b4ba25183adede82.png)
- `product-eco-granule.png` (file_000000008af07208986e5470020a2761.png)
- `saniya-logo.png` (IMG_20260524_232843.jpg) for subtle card watermark
- Keep existing `product-eco-root.png`

## 2. Update subtitle

Change subtitle text to: *"Premium agricultural solutions designed for healthier soil, stronger crops, and sustainable farming results."* Heading "Featured Products" and heading styles stay identical.

## 3. Extend product data (7 items)

Rewrite the `products` array with the 7 items provided, each with: `image`, `name`, `category`, `description`, `benefits[]`, optional `prices[]` / `packInfo` / `recommended` / `netContent`, `cta { label, icon, href }`, `badge`.

CTA hrefs:
- Order Now → `tel:+918852003393`
- Enquire Now → `https://wa.me/918852003393`
- Get Details / Learn More → `#contact`

## 4. Slider behavior upgrade

Replace the current manual `scrollBy` div-scroller with an autoplaying carousel while preserving existing card styling tokens (rounded-2xl, shadow-card, hover:shadow-elegant, border, forest-gradient CTA, emerald check icons, secondary/cream background).

- Use already-installed `embla-carousel-react` + add `embla-carousel-autoplay` plugin (single small dep, no heavy libs).
- Responsive slidesPerView via existing Tailwind basis classes on `CarouselItem`: `basis-full md:basis-1/2 lg:basis-1/3`.
- Autoplay 4500ms, `stopOnInteraction: false`, pause on hover via `onMouseEnter`/`onMouseLeave` calling `plugin.stop()` / `plugin.reset()`.
- Navigation arrows: keep current circular arrow buttons (same styling, same position, same hover) but wire to embla `scrollPrev` / `scrollNext`.
- Pagination dots: small row under the slider — `size-2 rounded-full` dots, active = `bg-forest w-6`, inactive = `bg-forest/25`, click to scroll. Uses the existing forest/emerald palette only.

## 5. Card upgrades (within existing styling envelope)

Same card shell (`bg-card rounded-2xl shadow-card hover:shadow-elegant border border-border`, same hover lift via existing transition). Inside each card:

- Top-right small **badge pill** (`bg-gold/15 text-forest-deep` or `bg-emerald/10 text-emerald` depending on badge type) — uses existing tokens, no new colors.
- Top-left subtle **Saniya logo watermark** (~28px, `opacity-60`) over image area.
- Image area unchanged (aspect-[4/3], same gradient backdrop, same drop-shadow, same hover scale).
- Product name (existing font-display style).
- New small **category** line under name (`text-xs uppercase tracking-wider text-emerald`).
- Short **description** (`text-sm text-muted-foreground`, 2-line clamp).
- Benefits list (same Check icon, emerald, same spacing).
- Pricing/pack block reused for products that have it; for products without prices show a single muted pack/usage chip (e.g., "Net 1 Litre", "50 KG · 50–60 KG/Acre") in the same chip style — no new component.
- CTA button identical to current `bg-forest-gradient` rounded-full button.

All spacing, paddings, font sizes, shadows, colors match current card exactly.

## 6. Performance

- First 3 product images: `loading="eager"` + `fetchpriority="high"`.
- Remaining 4: `loading="lazy"` + `decoding="async"`.
- No new heavy libs (only `embla-carousel-autoplay`, ~2KB).
- Pure CSS transitions, no Motion additions here.

## 7. Responsive

- Mobile (`basis-full`): 1 card.
- Tablet (`md:basis-1/2`): 2 cards.
- Desktop (`lg:basis-1/3`): 3 cards.
- Arrows hidden on mobile (current behavior preserved — `hidden lg:grid`).
- Dots visible all breakpoints, centered under slider.

## Files touched

- `src/components/site/Products.tsx` — rewrite internals only.
- `src/assets/product-uttam-fasal.png`, `product-eco-green.png`, `product-silk.png`, `product-eco-granule.png`, `saniya-logo.png` — new.
- `src/assets/product-yugm.png`, `product-raj-seeds.png` — replaced with uploaded renders.
- `package.json` / `bun.lock` — add `embla-carousel-autoplay`.

Nothing else in the project is modified.
