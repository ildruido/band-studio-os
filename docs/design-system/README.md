# Band Studio OS design system

**Source of truth for the look of every Band Studio OS screen** (decision D-053). A published copy for browsing lives in the Claude [design system artifact](https://claude.ai/artifact/3rsiFDkfgmM5Rhk7oj3Lix) (private to Ale); where the two differ, this folder wins.

| File | What it is |
| --- | --- |
| [tokens.json](tokens.json) | Colours (themes Wall and Stage), type, spacing, radius, shadow, sizes, with a usage note on each |
| [tokens.css](tokens.css) | The same tokens as CSS variables, generated from `tokens.json` |
| [components.css](components.css) | Styles for the `bs-` components |
| [components/README.md](components/README.md) | Rules for each component |

Used by [prototype v3](../inception/ux-direction/prototype-v3.html). v2.2 stays on its original values (it is the interviewer build). Direction and rationale: [UX direction](../inception/ux-direction.md).

The band's gig wall: concrete grey, black ink, yellow gaffer tape and photocopy grain. The app owns no colour. The band's artwork brings it, so the poster is always the star.

Derived from prototype v2.2 (`docs/inception/ux-direction/prototype-v2-2.html`) and the approved UX direction (`docs/inception/ux-direction.md`, decision D-032, "approved for now"). The name is a working title. There is no logo yet: set the name in Archivo, never draw a mark.

## Rules for anyone building with this system

1. **Authenticity first.** Amplify the band's grit and scene. Never add corporate polish: no gradients (other than the poster artwork), no glass, no blur, no emoji, no stock icons, no blue-purple "AI" look.
2. **Human in the loop.** The AI proposes and the band curates. Every screen that sends or publishes something needs an explicit approval step ("Yes, post it"). Never auto-publish.
3. **One decision per screen.** Pick between two looks, fill one sentence or swipe one poster. Use ChoicePair, Sentence and the poster deck before reaching for forms, sliders or tabs.
4. **The app has no colour of its own.** `tape` is the only accent and means "selected", "next" or "look here". Everything else is `surface`, `ink` and `ink-muted`. Hues only appear inside band artwork.
5. **Paper, not plastic.** Things are square (`radius-none`) and separated by 2px `line` borders, not by shadows. Shadows are for things pinned to the wall (`shadow-pin`, `shadow-poster`) and the edge of tape (`shadow-tape`). Pills (`radius-pill`) are for buttons and chips only.
6. **Phone-first.** One column, at most `app-max-width` (430px), side gutter `space-gutter`, controls at least `tap-chip` high and buttons `tap-button` high. Respect safe-area insets.

## Themes

- **Wall** (light, default): the whole app. Use `.bs-wall` on the screen root for the grain.
- **Stage** (dark): only for pack review and the bandmate view, where posters need to glow. Set `data-theme="stage"` on that screen.

Whether the whole app goes dark or light is not decided yet.

## Colour

| Role | Token | Note |
| --- | --- | --- |
| Background | `surface` | Concrete wall, or the stage in dark |
| Cards and tiles | `surface-raised` | Always with a 2px `line` border |
| Text | `ink`, `ink-muted` | Muted is for meta, eyebrows and mono notes |
| Accent | `tape` + `on-tape` | Never as text on the wall (1.05:1) |
| Primary button | `action` + `on-action` | Inverts on stage |
| Veto | `veto` + `on-veto` (fill), `veto-ink` (text, stamp) | Always with the word ("NOPE") |
| Focus | `focus` | 3px ring, 2px offset |

`poster-*` tokens are **sample artwork only** for prototypes. Never present code-drawn posters as real product output.

Changed from the prototype for contrast: `ink-muted` is #4E5258 (the prototype's #5B5F66 is 4.1:1 on the wall), `veto-ink` on the wall is #9E1F16, and the focus ring on the wall is `ink`, because tape on concrete is invisible.

## Type

Two Google Fonts faces, loaded by `components/bundle.css`:

- **Archivo** (variable, weight 400 to 900, width 62 to 125%) for everything you read first. Use it wide (`font-stretch:125%`) for names and headlines, and condensed (`62%`) for dates and numbers.
- **Courier Prime** (400, 700) for tour-diary detail: captions, dates, status, labels.

One `headline-xl` per screen, then `body`. Uppercase only for eyebrows, poster names and status. Use sentence case everywhere else.

## Voice

Plain, direct, a bit rough, on the band's side: a bandmate who has done this before, not a software company. Short verbs on buttons ("Rougher", "Another", "Yes, post it"). Never "supercharge", "unlock", "AI-powered" or "Success!". Toasts say what happened and to whom ("Sent to Marco and Gio"). This voice is a draft that Ale has not approved yet.

Fake content uses realistic indie band names, real-sounding venues and dates (Velvet Static, The Cavern, Fri 14 Mar, doors 8pm).

## Motion

Screens enter with a 0.22s fade and an 8px rise. Posters "print" in from the top (steps, about 2s). Honour `prefers-reduced-motion` by removing all animation.

## Using it

Load `tokens.css`, then `components.css`. All classes are prefixed `bs-` and read only tokens. Wrap screens in `.bs.bs-wall`. There is no JS bundle: the components are HTML and CSS patterns, and each has a preview and a README with its rules.

## Not decided yet

The final name, a logo, icons, Italian copy, swipe and animation details, and the dark/light choice for the whole app. Real generated artwork has not been tested against this look yet.
