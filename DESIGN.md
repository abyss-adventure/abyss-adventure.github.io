---
name: Abyss Adventure
description: Original game art presented as a restrained descent through a subterranean world.
colors:
  brass: "#c4ad79"
  ink: "#080c0d"
  stone: "#e7e3d9"
  muted: "#a6b1ad"
  line: "#343d3b"
typography:
  display:
    fontFamily: "Alegreya, serif"
    fontWeight: 400
    fontSize: "clamp(46px, 6.2vw, 88px)"
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  square: "0px"
spacing:
  gutter: "clamp(24px, 6vw, 100px)"
  section: "130px"
  mobile-section: "85px"
components:
  download-primary:
    backgroundColor: "{colors.brass}"
    textColor: "#12160e"
    rounded: "{rounded.square}"
    padding: "22px 24px"
---

## Overview

**Creative North Star: "Descent into the Abyss"**

Cold, ancient environments carry the surface. Real painted maps and pixel portraits provide its identity; typography and controls leave room for them. It is an exhibition of the actual game rather than a replacement visual brand.

**Key Characteristics:**
- Real artwork at cinematic scale.
- Open layouts with varied density.
- Pale display typography and restrained brass actions.
- Native scrolling and shorter touch compositions.

## Colors

Brass is the primary action and selection color. Ink is the canvas. Stone carries headings and important labels; muted text supports long passages. Thin line color separates related information without creating repeated boxes.

**The Source Light Rule.** Additional color comes from game imagery, not new gradients or a competing brand palette.

## Typography

Alegreya supplies a recognizable literary display voice. Be Vietnam Pro supports controls and bilingual reading. Latin and Vietnamese subsets are self-hosted. The oversized opening title is a specific cinematic treatment, not the normal heading scale. Body passages use generous line height; small metadata stays secondary.

**The Identity Rule.** Fantasy names keep canonical spelling in both languages. Vietnamese communication receives the same typographic hierarchy as English.

## Layout

Desktop uses broad scenes and paired editorial columns, with content generally bounded near1280–1440px. Below760px the creator, class and release layouts stack. At1050px intermediate gaps shrink. System controls wrap on narrow screens; class controls stay in a three-part row. No side-by-side card grid forms the page structure.

**The Breathing Room Rule.** Large imagery alternates with quieter reading passages; do not assign every scene identical density.

## Elevation & Depth

Depth comes from original environments, tonal overlays and scroll transforms. Portraits and equipment have soft downward shadows. Containers remain flat. The opening title grows beyond the viewport while the environment advances more slowly; the source scene reveals the real game capture through a clipped layer.

**The Native Scroll Rule.** GSAP reads the browser scroll position; it never replaces wheel or touch scrolling. Reduced motion removes the camera transforms and sticky reveal length while retaining content.

## Shapes

Scenes and the primary action use square edges. Fine rules separate selections and metadata. Small diamond indicators belong to map and equipment selections. Decorative floating cards, glass panels and rounded browser mockups are absent.

## Components

### Download action

A broad brass action with a simple downward arrow. Hover lightens it with a small upward translation; keyboard focus is a visible brass outline. Preview status and compatibility sit nearby, with the checksum inside native details.

### Navigation

A compact original logo, desktop chapter links, language button, sound button and preview anchor. Mobile hides chapter links, retaining the core controls. Empty creator links are never rendered.

### Scene selectors

Map, class, equipment and system controls are real buttons with `aria-pressed`. Selection changes visible art and descriptive text. Every hover-discoverable item can also be selected by touch or keyboard.

### Audio control

Sound starts only on explicit input; the toggle communicates its pressed state and provides retry text after failure. One instance carries ambience through language and section changes.

### Image treatment

Meaningful portraits and gameplay captures have alt text. Decorative layers have empty alt text. Intrinsic dimensions reserve space, noncritical images are lazy-loaded, and screenshot captions distinguish real interface captures from promotional scenes.

## Do's and Don'ts

### Do:
- **Do** use approved original imagery and retain pixel-art character.
- **Do** keep primary communication concise and translated.
- **Do** preserve native scrolling, visible focus and reduced-motion access.
- **Do** keep release status and missing creator facts honest.

### Don't:
- **Don't** invent art, lore, biography or stable-release claims.
- **Don't** add card scaffolds, neon chrome or stock device mockups.
- **Don't** start sound automatically.
