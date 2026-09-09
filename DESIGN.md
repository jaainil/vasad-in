---
name: Vasad (વાસદ) — The Painted Highway
description: A Gujarati gateway-town site lettered like a hand-painted lorry flank — flat lacquer fields, ink keylines, riveted boards.
colors:
  lacquer: "#9e2b25"
  lacquer-deep: "#7c1f1b"
  mustard: "#e8a020"
  mustard-deep: "#b57708"
  green: "#1d5c3f"
  green-deep: "#154630"
  cream: "#f4e9d8"
  cream-hi: "#faf3e3"
  ink: "#2a2723"
  rivet: "#c9a227"
typography:
  display:
    fontFamily: "Yatra One, Baloo Bhai 2, serif"
    fontWeight: 400
    lineHeight: 1.08
  gu:
    fontFamily: "Baloo Bhai 2, Hind Vadodara, sans-serif"
    fontWeight: 600
  body:
    fontFamily: "Mukta, Hind Vadodara, sans-serif"
    fontSize: "1.0625rem"
    lineHeight: 1.65
  caption:
    fontFamily: "Mukta, Hind Vadodara, sans-serif"
    fontSize: "0.95rem"
    lineHeight: 1.5
    fontWeight: 500
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  band: "56px"
  section: "80px"
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
components:
  plate-primary:
    backgroundColor: "{colors.lacquer}"
    textColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.7rem"
  plate-primary-hover:
    backgroundColor: "{colors.lacquer-deep}"
  plate-ghost:
    backgroundColor: "{colors.cream-hi}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.7rem"
  plate-ghost-hover:
    backgroundColor: "{colors.mustard}"
  plate-green:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.7rem"
  plate-green-hover:
    backgroundColor: "{colors.green-deep}"
  card-panel:
    backgroundColor: "{colors.cream-hi}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  input-text:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.625rem 0.875rem"
---

# Design System: Vasad (વાસદ) — The Painted Highway

## Overview

**Creative North Star: "The Painted Highway"**

Vasad rides its highway the way owners paint their lorries: every facet of the town hand-lettered on its own lacquered panel. The site is not a template with a palette swapped in — it is a fleet of committed painted fields (lacquer red, mustard, deep green) on a cream paint ground, every board edged in a thick ink keyline and riveted at the corners like road signage. Dividers are hanging chains and the road itself carries a drifting painted line. Proud, road-worn, festive: saturation is high because the world is festive, but it is always *flat* paint — no gradients, no glass, no soft-focus depth.

The system deliberately refuses the stock-photo town-tourism template. There is no photography of "generic India", no rounded-card SaaS softness, no pastel hero. Authority comes from signage physics — keylines, rivets, plates, boards — while warmth comes from the two-script voice: every major heading ships in English (Yatra One) with a Gujarati echo (Baloo Bhai 2) beneath it.

**Key Characteristics:**
- Flat committed color fields; depth from 3px ink keylines and one hard ground shadow, never blur stacks
- Thick ink keylines (3px on boards, 2.5px on compact controls) on every raised surface
- Gold corner rivets on hero panels; chain-and-flower painted borders as dividers
- Two-script typography: Yatra One display + Baloo Bhai 2 Gujarati + Mukta body
- Signage interactions: boards lift and tilt on hover like plates being pressed
- Single structural shadow (`shadow-paint`), shared by every raised board

## Colors

A festival palette of committed paint fields — lacquer red leads, mustard and deep green support, cream carries the ground, ink draws every keyline.

### Primary
- **Lacquer Red** (#9e2b25): The owner's color. Site-wide nav bar, primary action plates, hero lorry-flank panel, text links, hovered table rows. When something must feel like *the town speaking*, it is lacquer.
- **Lacquer Deep** (#7c1f1b): Hover and pressed state of lacquer surfaces; also the error/invalid voice (input borders, error text). Same hue, more weight.

### Secondary
- **Mustard** (#e8a020): The active-and-attention paint. Current nav board, chip checked states, focus rings, text selection, hover of ghost plates, Gujarati accents on dark bands. The festival highlight — used on what the visitor is *on*, not everywhere.
- **Mustard Deep** (#b57708): Deepened mustard for pressed/dark-context accents.

### Tertiary
- **Deep Green** (#1d5c3f): The river-and-field color. Full-bleed content bands (the Mahi, landmarks), the green plate variant, method cards, checked green chips. Alternates with lacquer so no two adjacent bands share a field.
- **Deep Green Hover** (#154630): Hover state of green surfaces; the deepest landmark card field.

### Neutral
- **Cream** (#f4e9d8): The paint ground. Page background, light text on lacquer/green/ink fields, input fill.
- **Cream Hi** (#faf3e3): Raised ground. Panels, ghost plates, resting nav boards — one step lighter than the page so boards read as mounted.
- **Ink** (#2a2723): The signwriter's line. Every keyline, border, roadline and body text; also the footer field.
- **Rivet Gold** (#c9a227): Corner rivets on panels and the hero flank. Strictly a detail metal — never a field.

### Named Rules
**The Flat Paint Rule.** Surfaces are committed fields of lacquer, mustard, green or cream. No gradients, no glassmorphism, no tonal overlay washes as decoration.

**The Ink Keyline Rule.** Every raised board carries an ink keyline — 3px on panels, plates and full-bleed bands; 2.5px on compact controls (inputs, chips, nav boards).

**The Two-Field Spacing Rule.** No two adjacent full-bleed bands share the same paint field; alternate lacquer / green / cream-hi / ink so the page reads as a row of repainted panels.

## Typography

**Display Font:** Yatra One (with Baloo Bhai 2, serif fallback)
**Gujarati Display Font:** Baloo Bhai 2 (with Hind Vadodara fallback)
**Body Font:** Mukta (with Hind Vadodara fallback)

**Character:** Yatra One's brush-drawn folk lettering does the shouting; Baloo Bhai 2 echoes it in Gujarati with rounded warmth; Mukta keeps long reading calm and legible. The pairing is loud signage over quiet paperwork — exactly the town.

### Hierarchy
- **Display** (Yatra One 400, clamp(1.9rem, 4vw, 2.7rem), 1.08, text-balance): H2 section headlines. The hero lettering on the lorry flank runs to 185 SVG units — display type at its largest.
- **Headline** (Yatra One 400, 1.5rem, 1.08): H3 sub-sections ("The Vasad method").
- **Title** (Yatra One 400, 1.05–1.35rem): Panel and board titles, card names, big stat numerals (2rem).
- **Body** (Mukta 400, 1.0625rem, 1.65, max 68ch): Paragraphs. 68ch cap keeps measure honest on wide screens.
- **Gujarati subline** (Baloo Bhai 2 600, 0.72–1rem): Every H2 carries a Gujarati echo line directly beneath it, at 80% opacity of its field.
- **Label** (Mukta 500–600, 0.85–0.95rem): Captions, metadata rows, footer distances. Footer coordinates ship with 0.03em tracking.

### Named Rules
**The Two Scripts Rule.** Every major heading ships English + Gujarati; Yatra One never sets Gujarati — Baloo Bhai 2 does. Hind Vadodara is only ever a fallback.

## Layout

Single centered column on a 1180px container (`.wrap`) with fluid gutters of clamp(1.25rem, 4vw, 2.5rem). Rhythm alternates two section forms: **wrapped sections** (container, 80px top margin) and **full-bleed painted bands** (edge-to-edge color field, 3px ink rules top and bottom, 56px vertical padding).

Content grids are auto-fit masonry-style: `repeat(auto-fit, minmax(190–240px, 1fr))` with 24px gaps, so card counts flex without breakpoints. Two-column splits use `lg:grid-cols-[1.1fr_1fr]`. The mill-registry table runs `1.35fr 0.55fr 1.1fr` and collapses to a single column under 780px. The nav wraps rather than collapsing to a drawer; its link row scrolls horizontally on small screens with a thin mustard scrollbar.

Density is medium-festive: generous section spacing (80px) but tight internal board padding (20–24px), so each panel feels lettered edge to edge.

## Elevation & Depth

**Flat paint with one parked shadow.** This is a flat system: depth is drawn, not lit. Every raised board carries the same single ground shadow — `0 16px 32px -20px rgb(42 39 35 / 0.45)` (`shadow-paint`) — a hard, close shadow that reads as a panel parked on the page, not floating above it. Layering otherwise comes from ink keylines (3px), tonal contrast between cream-hi boards and cream ground, and the riveted corners. The only other shadow is a small drop-shadow on the logo medallion.

### Shadow Vocabulary
- **Parked shadow** (`box-shadow: 0 16px 32px -20px rgb(42 39 35 / 0.45)`): The only structural shadow. Applied to panels, plates, and method cards. Never layered, never deepened on hover — hover responds with transform, not blur.

### Named Rules
**The Parked Shadow Rule.** One shadow value for the whole system. Hover lifts a board (translate/tilt); it never grows a bigger shadow.

## Shapes

Rectangular signage geometry with small, consistent rounding. Boards use 12px radius (`.panel`, rounded-xl); action plates 10px; compact controls (inputs, chips, nav link-boards) 8px; the checkbox 6px; nothing is a pill and nothing is square. Ink strokes are the real shape language: 3px keylines on large boards, 2.5px on compact ones, and inner keylines (a 2.5px cream line inset inside the hero flank's 7px ink frame, mirroring painted lorry panels).

Recurring painted ornaments: **corner rivets** (4px radial-gradient gold dots inset 13px, `.riveted`), the **chain divider** (44×24 SVG of alternating cream and mustard links, `.chain`, 24px tall, repeat-x), and eight-petal **rosettes** with mustard hubs (SVG, used on the flank and cards). Illustration is always inline SVG in the same palette — flat fills, ink strokes of 3–7 units, no photo texture.

## Components

### Buttons — plates
Painted metal plates that lift when pressed. All variants share the 3px ink border, 10px radius, `0.85rem 1.7rem` padding, Yatra One at 1.15rem, and the parked shadow.
- **Primary:** Lacquer field (#9e2b25), cream text.
- **Hover:** Lifts 3px and tilts −0.5° (`transform 0.45s cubic-bezier(0.22,1,0.36,1)`), field deepens (lacquer → #7c1f1b).
- **Ghost:** Cream-hi field, ink text; hover repaints the plate mustard (bg 0.2s ease-out).
- **Green:** Deep green field, cream text; hover deepens to #154630.
- **Disabled:** pointer-events none, 90% opacity, 60% saturation — a weathered plate.

### Panels (cards / containers)
- **Corner Style:** 12px radius, 3px ink keyline.
- **Background:** Cream-hi on cream ground; painted variants recolor the whole board (lacquer, green-deep, mustard fields) with text switching to cream or ink per contrast.
- **Shadow Strategy:** The parked shadow, always.
- **Rivets:** Hero panels add gold corner rivets (`.riveted`).
- **Internal Padding:** 20–24px (`px-6 py-5/6`).

### Inputs / fields
- **Style:** Cream fill, 2.5px ink border, 8px radius, Mukta 1rem, lacquer caret, ink/70 placeholder.
- **Focus:** 3px mustard outline at 3px offset, 4px radius (site-wide focus convention).
- **Error:** Border deepens to lacquer-deep, fill washes to lacquer/5, message in 0.85rem semibold lacquer-deep below.

### Chips / checkboxes
- **Style:** 2.5px ink border, 8px radius, cream fill, Mukta 0.9rem semibold.
- **Hover:** mustard/30 wash (green variant: green/20).
- **Selected:** Repaints the chip — mustard field with ink text (green variant: green field, cream text), via `:has(:checked)`.
- **Checkbox:** 20px box, 6px radius, 2.5px ink border; checked fills mustard (declaring variant fills green with cream text).

### Navigation
Lacquer field bar. Left lockup: 44px medallion SVG (lacquer disc, cream ring, mustard hub) + "Vasad" in Yatra One over "વાસદ" in Baloo Bhai 2 mustard. Links are small painted boards: cream-hi fill, 2.5px ink border, 8px radius, English in display over Gujarati at 0.72rem; the current page repaints its board mustard; hover lifts and tilts like a plate. A chain divider closes the bar.

### Signature — the lorry flank
Full-width inline-SVG hero (1440×620) of a hand-painted truck flank: cab in mustard and green, red body panel with chain borders and riveted keyline, "VASAD" double-printed (ink offset under cream stroke), Gujarati masthead, "HORN OK PLEASE" plate, rosettes, and wheels on a roadline that drifts (`drift 5.5s linear infinite`, reduced-motion killed). New hero-adjacent moments should extend this illustration vocabulary — painted fields, ink strokes, rosettes — rather than introducing new styles.

### Tables / registries
Civic-record rows: 3px ink bottom rules, English name in display 1.2rem with Gujarati echo in lacquer beneath, metadata columns at 0.85–1.05rem. Hover slides the row 6px right under a lacquer/8 wash — a board being pulled for reading.

## Do's and Don'ts

### Do:
- **Do** draw every raised surface as a painted board: cream-hi field, 3px ink keyline, 12px radius, parked shadow.
- **Do** pair every English H2 with its Gujarati echo line in Baloo Bhai 2 at 80% field opacity.
- **Do** alternate full-bleed band fields (lacquer / green / cream-hi / ink) with 3px ink rules between sections.
- **Do** reserve mustard for the visitor's current position — active nav, checked chips, focus rings, selection.
- **Do** set all illustration as inline SVG in the palette with ink strokes (3–7 units) and flat fills.
- **Do** keep the drift animation on roadlines and kill every animation under `prefers-reduced-motion`.

### Don't:
- **Don't** use gradients, glassmorphism, backdrop blur, or layered soft shadows — the paint is flat and the only shadow is the parked one.
- **Don't** introduce colors outside the ten-token palette; no blues or purples anywhere.
- **Don't** round past 12px or use pill shapes; no fully square corners on interactive elements either.
- **Don't** set Gujarati text in Yatra One or English body in Baloo Bhai 2 — the two scripts keep their own faces.
- **Don't** use stock photography as texture or hero imagery; the world is drawn, not photographed.
- **Don't** resize or restyle the parked shadow; hover responses are transforms, not new elevation.
