# Hero Visual Upgrade Plan

Scope is strictly limited to the Hero section. Navbar, Stats, Products, Why Choose Us, Testimonials, Final CTA, Footer, typography, spacing, colors, and layout remain untouched.

## 1. Swap hero background asset

- Copy the uploaded farming field image into `src/assets/hero-field.jpg` (overwrite the existing generated one) so the bundler keeps the same import in `Hero.tsx`.
- Keep file as `.jpg` for size; the existing `<img loading="eager">` import path stays identical — no other files need editing for the swap.

## 2. Cinematic background composition (`src/components/site/Hero.tsx`)

Replace the current single-image + flat cream gradient backdrop with a layered, cinematic stack inside the existing `absolute inset-0 -z-10` container. No layout/spacing/typography changes — only the background layers:

- Base layer: `<img>` of the farm field, `object-cover`, `object-[center_70%]` so rows of crops sit behind the text on desktop and the horizon stays visible. `opacity-[0.55]` on desktop, lowered to `opacity-40` on mobile via responsive class.
- Warm sunlight wash: radial gradient from top-left (`oklch` warm gold at ~25% alpha) fading to transparent — gives the "soft warm sunlight" feel without touching tokens.
- Green atmospheric tint: full-bleed linear gradient using existing `--forest-deep` / `--emerald` tokens at low alpha (8–14%) to unify the photo with the brand palette.
- Left readability veil: gradient from `cream` (95% alpha) on the left edge fading to transparent around 55% width — guarantees heading/subheading/buttons stay crisp without darkening the right side.
- Right-side depth: subtle radial vignette behind the portrait area (forest-deep at ~20% alpha) so the client photo pops.
- Bottom fade: existing fade-to-`background` gradient preserved so the hero blends into the StatsStrip seamlessly.
- Top edge: very light cream gradient (10–15% alpha) so the sticky glass navbar keeps contrast.

All overlays use existing CSS tokens (`--cream`, `--forest-deep`, `--emerald`, `--gold`) — no new colors, no token changes.

## 3. Premium client image frame

Within the existing right column (same aspect ratio, same dimensions, same nameplate, same floating cards, same portrait `<img>` untouched):

- Wrap the current arched mask in an outer decorative frame:
  - Outer ring: soft `--gold` → `--emerald` conic/linear gradient ring (~3px) for the "green-gold border".
  - Inner ring: thin cream hairline to separate gradient ring from portrait.
- Add a soft outer glow using `shadow-elegant` plus an extra `drop-shadow` tinted with `--forest-deep` for depth against the farm background.
- Add a subtle internal top-light gradient (cream → transparent at 20% alpha) inside the mask to mimic studio lighting — does not modify the portrait pixels.
- Behind the frame: enlarge the existing emerald/olive blur blob and add a second darker forest blob bottom-right for cinematic depth.
- Floating benefit cards and the A.K. Singal nameplate stay exactly as-is.

## 4. Responsive behavior

- Desktop (`lg:`): full farm field visible, portrait dominant on the right, left veil ensures text contrast.
- Tablet/mobile: background image uses `object-[60%_60%]` so the horizon + crops stay framed behind the stacked content; veil becomes a full top-to-bottom cream-to-transparent gradient so the headline reads cleanly; portrait remains centered and dominant (no size change).
- All changes use Tailwind responsive classes only — no new breakpoints, no layout reshuffles.

## 5. Performance & SEO

- Reuse the same `<img>` element (already `loading="eager"` for LCP) with descriptive alt text retained.
- All overlays are pure CSS gradients (no extra network requests).
- No new dependencies, no JS animations added.
- Existing semantic structure, headings, and alt tags untouched → SEO unchanged.

## Files touched

- `src/assets/hero-field.jpg` — replaced with uploaded farm image.
- `src/components/site/Hero.tsx` — background layer stack + frame wrapper only. No changes to copy, buttons, badges, floating cards, or nameplate.

Nothing else in the project is modified.
