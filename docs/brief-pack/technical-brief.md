# Technical brief

> What an engineer or technical partner needs to know.

Part of the [Product Brief Pack](index.md). What to build is in [Product and roadmap](product-and-roadmap.md#technical-scope). This file covers the technical direction, limits and open questions. The [architecture handoff](../inception/architecture-handoff.md) chose a direction on 2026-11-25. It is a plan on paper: nothing is built or tested yet, and the first small tests (spikes) are listed there.

## Architecture direction

**In plain words:** A phone-first website with a small server and database in the EU. The AI draws the background art and writes the words; a program places the real text (band name, date, venue) on the flyer, so details are never garbled. Bandmates approve through a private link, and the server refuses to export anything not approved.

**Decided principles**
- **Composable and connector-based from day one**, even though the first version only exports a folder. The export is itself the first connector; posting, scheduling and reach partners arrive later without redoing the core.
- **Multi-channel by design:** assets are made once for several formats (feed, stories, print).
- **Phone-first web** for version 1. A native app comes much later.
- **Human approval gate**, enforced on the server, not only in the screen.
- **No raw media in analytics.**

**Recommended direction (a proposal, not yet tested)**
- **Stack:** the studio's website stack (Node server, Postgres) hosted in the EU, plus our own interim parts for file storage, AI generation and review links.
- **Sign-in:** invite-only email and password for the free pilot; open sign-up later. Bandmates need no account.
- **Image generation:** one swappable connection; the provider is chosen by a bake-off test of at least three, not today.
- **Cost:** about 13 to 18 EUR a month fixed, leaving about 80 EUR for AI, roughly 25 to 80 campaigns a month at an assumed 1 to 3 EUR each.
- **Edge triage of gig media:** left for after-the-gig material; not needed in version 1.

**What could still change it:** the image-provider test, whether flyers print well at A3, and the "feels like us" blind test.

**How sure are we:** principles *Decided*; direction *Provisional* (reviewed independently, not tested); provider, prices and print quality *Not yet known*.

**Detail:** [Architecture handoff](../inception/architecture-handoff.md)

**Comes from:** [Architecture handoff](../inception/architecture-handoff.md), [Product foundation](../inception/product-foundation.md), [MVP definition](../inception/mvp.md), [constraints](../inception/constraints.md), [inception workflow](../inception/workflow.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Architecture direction](gaps.md#architecture-direction)

## Non-functional needs

**In plain words:** Proposed targets now exist for every need. They are numbers to build and test against, not promises, and none is tested yet.

| Need | What we know | Target (proposed) |
| --- | --- | --- |
| Phone use | Everything the driver and reviewers do must work well on a phone | Works at 360 px wide on current and previous iOS Safari and Android Chrome |
| Page speed | Reviewers open a link on a phone | Usable within 3 seconds on a mid-range phone on 4G |
| Speed of generation | A first campaign within one session | First flyer variant within 60 seconds, whole pack within 10 minutes, 9 times in 10; 60 minutes active time or less |
| AI cost | Logged from the first generation; at most about 30% of campaign price | Cost entry for every call; hard monthly cap; alert at 80% |
| Large uploads | Heavy files are a named risk | Five reference images at most, shrunk on the phone to 2048 px, 5 MB each; no audio or gig photos in version 1 |
| Privacy | EU rules (GDPR) apply to band and audience data | EU hosting; no third-party trackers; no raw media in analytics; export and delete a band's data |
| Availability | One server, no formal guarantee | Best effort, about 99% a month; daily backup |
| Accessibility | EU rules may apply later | Aim for WCAG 2.1 AA on the driver and reviewer screens |
| Language | Italian first; English output assumed | Italian and English from day one |
| Print | A4 and A3 print-ready file for the flyer | A4 sharp with vector text; A3 best effort, to be judged by eye |

**How sure are we:** *Provisional*: the targets are Claude's proposals from the [architecture handoff](../inception/architecture-handoff.md#4-non-functional-needs-proposed-targets), untested.

**Comes from:** [Product foundation](../inception/product-foundation.md), [constraints](../inception/constraints.md), [MVP definition](../inception/mvp.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Non-functional needs](gaps.md#non-functional-needs)

## Constraints

| Area | Constraint |
| --- | --- |
| Team | Ale part time (about 5 to 10 hours a week) plus Claude. No hires, no contractors |
| Cash | Under 100 euros a month in total (tools, hosting, AI generation, test ads) until the first paying customers |
| Time | No fixed deadline. Pace set by Ale's hours and the evidence gates |
| Work tool | Claude work runs on a plan with usage limits: small targeted reads, no needless parallel agents |
| AI cost | Cost per campaign must fit inside the price once priced. Images and template motion only in version 1 |
| Users | One user type in version 1: the driver. Bandmates approve without a full account |
| Markets | Italy first, then UK, then the rest of Europe. Italian language and EU law first |
| Platform | Phone-first. No stack chosen |
| Architecture | Connector-based and multi-channel, even though version 1 only exports |
| Product rules | Nothing published without approval. Output amplifies the band's identity, not generic polish |
| Legal | Music copyright, likeness and image rights around uploads and generated assets; GDPR for band and audience data |
| Evidence | Pricing and size claims stay provisional until the primary research runs |

**Not building (version 1):** AI video, direct publishing, full approval system, full identity studio, venue booking, riders, merch, managers or agencies as users, extra team features, music creation or distribution tools, a native app, genre-specific features, paid acquisition at scale.

**How sure are we:** *Decided.*

**Comes from:** [Constraints and non-goals](../inception/constraints.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Constraints](gaps.md#constraints)

## Integrations

**In plain words:** Version 1 has **no live integrations**. It exports a folder, and the driver posts by hand.

| Integration | When | Note |
| --- | --- | --- |
| File export (images, print PDFs, captions file, posting schedule, a small description file) | Version 1 | The only "integration" in the first version, and the first connector: later connectors read the same approved export |
| Direct posting to social channels and scheduling | Later | As connectors. Which channels first is not decided; channel accounts and app reviews make this slow |
| Bandsintown (reach, listings) | Later, candidate | Its Boost product sells reach; a possible partner, not a rival |
| Ticketing platforms | Not discussed | Version 1 takes a ticket link as typed text |
| Venue databases | Not planned | Gig details are typed in |
| Payments | After the price test | A hosted checkout, provider not chosen; no card details touch our server |
| Email | Not in version 1 | The driver shares review links through their own chat apps. Needed later for open sign-up and password reset |

**How sure are we:** *Decided* for version 1; the rest is *Provisional*. The priority order has no demand data behind it.

**Comes from:** [MVP definition](../inception/mvp.md), [roadmap](../inception/roadmap.md), [competitive analysis](../research/R-005-competitive-analysis/report.md), [product foundation](../inception/product-foundation.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Integrations](gaps.md#integrations)

## Legal and safety

**In plain words:** The risks are named but **no legal review has happened**, and a lawyer is outside the current budget. The first version is shaped to keep them small.

| Topic | Position today |
| --- | --- |
| Music copyright | Version 1 uses no audio and makes no video, so none of the band's music enters the product. Becomes real with after-the-gig material and audio-synced video |
| Likeness and image rights | Version 1 takes up to five reference images from the band, not photos of fans or people at gigs. Rule decided (D-044): only images the band has the right to use, only agreeing band members recognisable, photographer credit field, a removal route, deletion after 12 months. Photographers have real claims; our own exposure as the app that stores and transforms a photo is not settled ([R-008](../research/R-008-image-rights/report.md)) |
| Ownership of generated assets | Providers' terms let the customer use output, but copyright in pure AI output is uncertain in Italy and the UK, so we never promise exclusivity (D-045). The provider test must confirm we can pass rights on to bands |
| Data protection | EU rules (GDPR) apply to band and audience data. EU hosting, no raw media in analytics, a way to export and delete a band's data, a list of the companies that process data for us. Ale is the data controller for now (D-043); the privacy notice and a data list are still owed before the first pilot ([details](../inception/architecture-handoff.md#6-data-privacy-and-rights)) |
| Human approval | Nothing is exported without bandmate approval |
| AI-made material disclosure | The EU rule to mark AI images applies to us from launch (D-046); the metadata plan is not yet proven and a spike is added. Some venues refuse AI-made posters, which is a trust question as well |

**What is not done:** the rights desk study is done ([R-008](../research/R-008-image-rights/report.md), not legal advice); no lawyer has seen anything. Still open: the provider terms for passing rights to bands, whether marking survives social media, crowd and UK photo rules (feature L8). Which risks need a lawyer is an open question.

**How sure are we:** the risk list is *Provisional*; the positions are *Not yet known* beyond "avoid uploads in version 1".

**Comes from:** [Constraints](../inception/constraints.md), [product foundation](../inception/product-foundation.md), [competitor scan](../research/R-004-competitor-scan/report.md), [research plan](../research/research-plan.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Legal and safety](gaps.md#legal-and-safety)

## Open technical questions

One list, with where each gets answered.

| Question | Answered in |
| --- | --- |
| Which AI image provider? | Provider bake-off test (spike 1 in the [handoff](../inception/architecture-handoff.md#8-risks-and-spikes)). Stack and hosting: answered in the handoff |
| How many bandmates must approve before export? | Pilot (default: every invited bandmate; any veto blocks). Review links answered in the handoff |
| Does the storage and signed-link setup work on real phones? | Spike 3 |
| Who is legally responsible for the data? | Decided (D-043): Ale as an individual for now. Privacy notice and data list still owed before the pilot |
| Reference images: upload or link? | Decided (D-044): upload, five conditions |
| Which languages at launch: Italian only, or Italian and English? | Interviews, then scope |
| Is a simple A4 or A3 print file enough? | Pilot |
| Which identity inputs measurably change output? | Blind output test, then pilot |
| What AI cost per campaign can the price absorb? | Blind test and price test |
| Is edge triage of raw gig media worth building? | Before after-the-gig material |
| Are the proposed performance and accessibility targets right? | Checked in the first build slice |
| Should the main measure later count posted campaigns, once a connector can see posting? | When connectors exist |
| Which risks need a lawyer? | Rights desk study |
| Does the monthly cost hold (about 13 to 18 EUR fixed, 1 to 3 EUR per campaign)? | Spike 1 and the first build slice |

**How sure are we:** the list is *Provisional*, consolidated from the inception documents and the architecture handoff.

**Comes from:** [Product foundation](../inception/product-foundation.md), [MVP definition](../inception/mvp.md), [constraints](../inception/constraints.md), [success metrics](../inception/success-metrics.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Open technical questions](gaps.md#open-technical-questions)
