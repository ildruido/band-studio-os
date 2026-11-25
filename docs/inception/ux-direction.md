# UX design direction for prototype v2

Status: **draft, awaiting Ale's review** (D-032, proposed). Visual board: [Artifact](https://claude.ai/artifact/TCjoXd1hdqoMApWqQZ58ws) (private to Ale until shared). Source: [ux-direction/board.html](ux-direction/board.html).

## Why

Ale reviewed prototype v1 (D-031): the flow works, but it is too functional-heavy for a phone app, and the visual design looks like a standard AI app, so it feels fake. The goal is something realistic enough to show in driver interviews.

## The idea

The app looks like the band's own gig wall: concrete grey, black ink, yellow gaffer tape, photocopy grain. The app owns no colour of its own. All colour comes from the band's artwork, so the poster is always the star and never clashes with the app. This follows the product principle that the band's own identity comes first, not polished corporate design.

## What changes from v1

| v1 | v2 direction |
| --- | --- |
| Forms, sliders, tabs, panels | One decision per screen: pick between two looks, fill one sentence, swipe a poster |
| Grit slider and reference-image upload | Five either-or taps ("which one is more you?"); a pass of "never this" swipes at the end |
| Gig form with many fields | One sentence with tappable blanks |
| Tabbed pack with edit panels | A full-width poster deck; four plain buttons: Rougher, Cleaner, Another, Change words |
| Bandmate sees a smaller copy of the driver's view | One poster, two buttons (Nope / Yes, post it); a "nope" is one tap on a reason |
| Export as a file list | A proof sheet of finished posters and a countdown posting plan |

## Look

Archivo (wide for names, narrow for dates) and Courier Prime for tour-diary detail. Grain and slight misregistration are deliberate, because real gig posters are photocopied. No gradients, no glass, no emoji.

## Not decided or not tested

- Real phone use, swipe gestures and animation (the board is static apart from a few taps).
- Italian copy.
- Whether real generated artwork can reach this level. The posters on the board are drawn by hand in code. Output quality stays with the blind test.
- Dark or light for the whole app: the board commits to the light concrete look, with dark used for pack review and the bandmate view.

## Next

If Ale approves, prototype v2 is built from this board (separate task).
