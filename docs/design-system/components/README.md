# Components

HTML and CSS patterns (no JS). Styles are in [components.css](../components.css); classes are prefixed `bs-`.

## BottomNav

Three-tab bar at the bottom of the app (prototype v2.2: Wall, Gigs, Us).

- 2px `ink` top border, items `tap-nav` (56px) high, style `label` 800.
- Current tab (`aria-current="page"`): fill `action`, text `tape` (on stage: `on-action`). Text labels only, no icons yet.
- Hidden during focused flows (identity questions, review, making).

## Button

Pill-shaped full-width button for the one decision on a screen.

- Variants: default (`.bs-btn`, fill `action`), `.tape` (the one forward step, fill `tape`), `.ghost` (secondary, 2px `ink` border), `disabled` (35% opacity).
- Height at least `tap-button` (54px), radius `radius-pill`, label style `button`.
- At most one `.tape` button per screen. Stack buttons in the dock at the bottom with `space-2` between them.
- `.bs-link` is the quiet way out ("Skip for now"), centred under the dock.
- Labels are plain verbs in the band's voice: "Yes, post it", "Rougher", never "Submit" or "Generate".

## Chip

Toggle pill for multi-select answers, such as the one-tap reason behind a "nope".

- Off: 2px `ink` border, transparent. On (`aria-pressed="true"`): fill `tape`, text `on-tape`.
- Min height `tap-chip` (40px), style `label`, gap `space-2`, wrapping.
- Always a real `<button>` with `aria-pressed`; never colour alone to show state (the fill change is a big lightness jump).

## ChoicePair

Two options, one tap. Replaces sliders and forms in the Identity Studio ("which one is more you?").

- Frame 3px transparent border, radius `radius-lg`. Selected (`aria-pressed="true"`): border `tape` plus a 3px `ink` ring and a tape label (`MORE YOU`), so selection never relies on yellow alone.
- Show progress with `.bs-ticks` (5 ticks, done = `ink`) and an `eyebrow` ("Question 2 of 5").
- Stack the pair vertically on a phone; side by side on wider frames.

## Field

Boxed input (`.bs-fld`) and the single-choice select tile (`.bs-sel`).

- Input: fill `field`, 2px `ink` border, radius `radius-sm`, 18px display 700; label in `mono-strong` above it.
- Select tile: `surface-raised`, radius `radius-md`, title + mono subline. Selected: fill `tape` plus a 2px `ink` ring.
- Prefer the Sentence or a ChoicePair first; fields are the fallback.

## ListRow

Rows for lists of things the band has to deal with.

- `.bs-item`: thumbnail (fixed 52px box), title + mono meta, a Status at the end; dashed `line-dashed` divider.
- `.bs-row`: a tappable row with title and mono subline; `.next` marks the single next step in `tape`.
- `.bs-tonight`: the one tape bar at the top of home when a gig is close (tilt `tilt-bar`). Only one per screen.

## NeverTile

Two-column grid of "never this" tiles for the anti-moodboard.

- Off: `surface-raised` with a 2px `ink` border, radius `radius-md`, 17px display 800.
- On: fill `action`, text `on-action`, struck through in `tape` (3px). The strike-through says "never", so it reads without colour.
- Labels name a look in plain words, two or three words long.

## Poster

A gig poster in one of three formats: flyer 4:5 (`.bs-poster`), story 9:16 (`.story`), post 1:1 (`.post`).

- In the product the artwork is generated from the band's identity and brings ALL the colour. The `poster-*` tokens and this CSS are placeholders for prototypes only; never present them as real output.
- Markup: `.bs-poster` (sets the format) wrapping `.art`. Add `.mini` for thumbnails (name only). Anatomy: date (Archivo condensed 62%), band name (Archivo 900 wide 125%, uppercase, offset shadow in the hot colour), tagline and footer in Courier Prime. Grain and slight misregistration are deliberate.
- On the wall a poster is pinned (`.bs-pinned`: `shadow-pin`, tilt). In the deck or review it sits flat with `shadow-poster`.
- Fake content uses realistic band names, venues and dates.

## Sentence

Fill-in-the-blank sentence that replaces a multi-field form (the gig setup).

- Text 21 to 27px display 700, leading 1.75. Blanks are inputs with a 3px `ink` underline, 900 weight, no box.
- One sentence per screen. Each blank has an accessible label (`aria-label="venue"`); placeholders are a hint, not the label.
- If a value needs more than a few words, use Field instead.

## Sheet

Bottom sheet over a `scrim`, top corners `radius-sheet`, fill `surface-sheet`.

- Holds one small edit (change words, pick a reason). One primary button; dismiss by tapping the scrim or a ghost button.
- Never stack two sheets.

## Stamp

The rubber stamp that fades in over a poster as a bandmate swipes right (YES, `tape`, `tilt-stamp`) or left (NOPE, `veto-ink`, +10deg).

- Only on the stage theme, over the poster being reviewed. 26px display 900, 4px border in the text colour.
- The swipe always has two button equivalents underneath (Nope / Yes, post it); the stamp is feedback, not the only control.

## Status

Small square status labels for bandmate votes and pack items.

- `.bs-st` (waiting, fill `action`), `.ok` (approved, `tape`), `.no` (veto, `veto` with `on-veto`). Style 12px mono bold.
- The word always carries the meaning ("YES ×3", "NOPE · TOO CLEAN"); colour only reinforces it.
- `.bs-later` and `.bs-hazard` mark anything not in the first version (prototype screens for later journeys). Do not use them for errors.

## Tape

A tilted yellow label stuck onto the wall: the app's signature accent.

- Fill `tape`, text `on-tape`, style `mono-strong`, rotation `tilt-tape` (-2deg), shadow `shadow-tape`.
- Short words only (1 to 3), uppercase or a short phrase. Use it to name a selection, a draft or "tonight".
- Never on a poster's own artwork beyond the selection label, and never as running text.

## Timeline

Vertical countdown for the staged campaign (pre-gig blitz to post-gig momentum).

- 3px dashed `ink` line; stops are 15px discs: done = filled `ink`, next = `tape` with a 4px `ink` ring, todo = hollow at 55% opacity.
- Exactly one `.next`. Dates in `mono`, muted.

## Toast

`.bs-toast`: a one-line confirmation, ink-black with a 6px `tape` edge, `role="status"`, placed above the dock and gone after a few seconds.

- Say what happened in plain words ("Sent to Marco and Gio"), never "Success!".
- `.bs-sum`: the same look used as a quoted summary (the band's identity in one line).
