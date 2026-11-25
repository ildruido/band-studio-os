# Technical brief

> What an engineer or technical partner needs to know.

Part of the [Product Brief Pack](index.md). What to build is in [Product and roadmap](product-and-roadmap.md#technical-scope). This file covers the technical direction, limits and open questions. The architecture handoff, which chooses the stack, **has not started**.

## Architecture direction

**In plain words:** Nothing is chosen. The only architecture rules decided so far are principles.

**Decided principles**
- **Composable and connector-based from day one**, even though the first version only exports a folder. Posting to channels, scheduling and reach partners arrive later as connectors, without redoing the core.
- **Multi-channel by design:** assets are made once for several formats (feed, stories, print).
- **Phone-first web** for version 1. A native app comes much later.
- **Human approval gate:** no asset can be exported without bandmate approval.
- **No raw media in analytics.**

**Not decided (for the architecture handoff):** stack, hosting, how AI image generation is called and priced, where files live, sign-in method, data shape, access model (one band per account, reviewers by link), storage shape, and whether on-device processing ("edge triage") of gig media is worth its complexity. Those last ideas are approaches to evaluate, not product commitments.

**How sure are we:** principles *Decided*; everything else *Not yet known*.

**Comes from:** [Product foundation](../inception/product-foundation.md), [MVP definition](../inception/mvp.md), [constraints](../inception/constraints.md), [inception workflow](../inception/workflow.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Architecture direction](gaps.md#architecture-direction)

## Non-functional needs

**In plain words:** The needs are known in words; most have no numbers yet.

| Need | What we know | Target |
| --- | --- | --- |
| Phone use | Everything the driver and reviewers do must work well on a phone | Not set |
| Speed of generation | A first campaign within one session, 60 minutes of active time or less | 60 min active (provisional); per-asset speed not set |
| AI cost | Cost per generation logged from the first generation; at most about 30% of campaign price | Provisional |
| Large uploads | Heavy files are a named risk; first version takes only reference images, not gig photos or audio | Not set |
| Privacy | EU rules (GDPR) apply to band and audience data; no raw media in analytics | Not set |
| Availability | Not discussed | Not set |
| Accessibility | Not discussed | Not set |
| Language | Italian first; English output assumed | Open |
| Print | A4 and A3 print-ready file for the flyer | Assumed sufficient |

**How sure are we:** *Not yet known* as numbers. Targets are set at the architecture handoff.

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
| File export (images, print PDFs, captions file, posting schedule) | Version 1 | The only "integration" in the first version |
| Direct posting to social channels and scheduling | Later | As connectors. Which channels first is not decided |
| Bandsintown (reach, listings) | Later, candidate | Its Boost product sells reach; a possible partner, not a rival |
| Ticketing platforms | Not discussed | Version 1 takes a ticket link as typed text |
| Venue databases | Not planned | Gig details are typed in |
| Payments | After the price test | Provider not chosen |

**How sure are we:** *Decided* for version 1; the rest is *Provisional*. The priority order has no demand data behind it.

**Comes from:** [MVP definition](../inception/mvp.md), [roadmap](../inception/roadmap.md), [competitive analysis](../research/R-005-competitive-analysis/report.md), [product foundation](../inception/product-foundation.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Integrations](gaps.md#integrations)

## Legal and safety

**In plain words:** The risks are named but **no legal review has happened**, and a lawyer is outside the current budget. The first version is shaped to keep them small.

| Topic | Position today |
| --- | --- |
| Music copyright | Version 1 uses no audio and makes no video, so none of the band's music enters the product. Becomes real with after-the-gig material and audio-synced video |
| Likeness and image rights | Version 1 takes up to five reference images from the band, not photos of fans or people at gigs. A rule for reference images is still needed (upload or link) |
| Ownership of generated assets | Not yet known; depends on the image generation provider's terms |
| Data protection | EU rules (GDPR) apply to band and audience data. No raw media in analytics. Details at the architecture handoff |
| Human approval | Nothing is exported without bandmate approval |
| AI-made material disclosure | Not decided. Some venues refuse AI-made posters, which makes this a trust question as well as a legal one |

**What is not done:** a desk study on rights is planned but not run; no lawyer has seen anything. Which risks need a lawyer is an open question.

**How sure are we:** the risk list is *Provisional*; the positions are *Not yet known* beyond "avoid uploads in version 1".

**Comes from:** [Constraints](../inception/constraints.md), [product foundation](../inception/product-foundation.md), [competitor scan](../research/R-004-competitor-scan/report.md), [research plan](../research/research-plan.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Legal and safety](gaps.md#legal-and-safety)

## Open technical questions

One list, with where each gets answered.

| Question | Answered in |
| --- | --- |
| Which stack, hosting and AI image provider? | Architecture handoff |
| How are reviewers (bandmates) identified without an account? | Architecture handoff |
| Which storage shape and access model? | Architecture handoff |
| Which sign-in method? | Architecture handoff |
| Reference images: upload or link? | Rights desk study |
| Which languages at launch: Italian only, or Italian and English? | Interviews, then scope |
| Is a simple A4 or A3 print file enough? | Pilot |
| Which identity inputs measurably change output? | Blind output test, then pilot |
| What AI cost per campaign can the price absorb? | Blind test and price test |
| Is edge triage of raw gig media worth building? | Before after-the-gig material |
| What are the performance and accessibility targets? | Architecture handoff |
| Should the main measure later count posted campaigns, once a connector can see posting? | When connectors exist |
| Which risks need a lawyer? | Rights desk study |
| What runs on free tiers (hosting, image generation, email)? | Architecture handoff |

**How sure are we:** the list is *Provisional*, consolidated from four documents.

**Comes from:** [Product foundation](../inception/product-foundation.md), [MVP definition](../inception/mvp.md), [constraints](../inception/constraints.md), [success metrics](../inception/success-metrics.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Open technical questions](gaps.md#open-technical-questions)
