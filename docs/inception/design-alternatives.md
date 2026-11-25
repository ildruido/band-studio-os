# Design alternatives: three ways the whole product could look and feel

Status: **Ale chose Alternative A, the Gig Wall, as the base for prototype v2** (D-033, D-034). Ideas kept: from B, the chat mode and Instagram or Bandcamp link reading stay on the bench; from C, only the countdown timeline, which needs a heavy rethink because the desk is too function-heavy. Visual boards: [Artifact](https://claude.ai/artifact/C9tAo5nKKzSrUCK5dtxNEr) (private to Ale until shared). Source: [design-alternatives/board.html](design-alternatives/board.html).

## What this is

Ale asked for three different design alternatives, each covering the whole journey, including features beyond the MVP, how the app grows over time, and how sections change by use case. This is design only: no prototype was built. Each alternative has a journey map, key phone screens for a sample band (Cenere Rossa, an invented post-punk band from Bologna), the home screen at four points in time, a table of sections by use case, and its strengths and weaknesses.

It builds on the approved [MVP](mvp.md) and [roadmap](roadmap.md), the [personas](personas.md), and the lessons from [prototype v1](prototypes.md) (too functional, looked like a generic AI app). The separate [UX direction](https://github.com/ildruido/band-studio-os/pull/41) (the "gig wall" look) is treated as one input. Alternative A below is closest to it.

## The three alternatives

| | A. Gig Wall | B. Tour Manager | C. Control Desk |
| --- | --- | --- | --- |
| Idea | A wall of the band's own posters, one decision per screen | A roadie in the band's group thread who does the promotion work | A mixing desk: faders for the look, a countdown timeline for the campaign |
| Look | Concrete grey, black ink, yellow tape | Lined notebook, blue ballpoint, red marker | Dark graphite, amber and red lights |
| Onboarding | Taps and swipes, about 5 minutes | A conversation, or hand over an Instagram or Bandcamp link | Pick a preset, move faders |
| Approval | One poster, two buttons, no account | Bandmates reply in the same thread | Sign-off lights; bandmates get one clip, two pads |
| Grows by | New sheets on the wall (release, tour) | New threads and what the roadie remembers | New tracks, scenes (gig, release, tour) and a rack of bands |
| Strongest at | Fast first session, band's poster is always the hero | Matching how bands already work (group chat) | Showing the whole plan, scaling to video and tours |
| Weakest at | Holding many gigs, releases and tours on one wall | Reviewing images inside a chat; looks like standard AI chat | Too heavy for a time-poor driver; dense on a phone |
| Build effort | Lowest | Medium | Highest |

## Recommendation

Take **A, the Gig Wall**, as the base for prototype v2, and borrow two ideas:

- From B: let a band hand over what it already has (an Instagram or Bandcamp link, a forwarded gig message) instead of answering questions. Test it in the first driver interviews.
- From C: when a band needs a release or a tour, show it as one countdown timeline inside the wall, not as a new app.

Why: lowest build cost, easiest to show in driver interviews, and the band's own poster is the first and last thing on every screen, which matches the principle that the band's identity comes first. The risk is later growth; the borrowed timeline answers it. If the first interviews show that bands live only in the group chat and will not open another app, B becomes the stronger long-run bet.

## Beyond the roadmap

Two ideas in the boards are not on the approved roadmap: a "gig night" moment (running order, doors story, setlist poster) and multi-band use. They are tagged as new ideas and are not commitments.

## Not checked

No band has seen any of this. Not tried on a real phone, in dark theme or in Italian. The artwork is drawn in code, so it says nothing about the quality of real generated posters (the blind output test decides that). Prices, costs and times on the screens are placeholders.
