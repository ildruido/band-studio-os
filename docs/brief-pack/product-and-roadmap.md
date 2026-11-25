# Product and roadmap

> What the first version is, what it looks like, and what comes after.

Part of the [Product Brief Pack](index.md). Start with [Story](story.md) for the why.

## Scope of version 1

**In plain words:** Version 1 is a phone-first web app that does one job well: the pre-gig campaign pack for one gig, from "who are we" to a folder of approved, ready-to-post material. It is free for the first pilot bands. Everything that is not on the "in" list below is deliberately out.

**In version 1**
- Email sign-in, one band per account.
- A light identity setup (minutes, not an hour; editable any time).
- Gig setup typed in by hand (no venue database).
- A pre-gig pack: flyer, vertical stories, a post, captions and hashtags. Static images only. Italian or English, Italian first (a working assumption).
- Curation: choose between versions, redo one asset, edit text.
- Bandmate approval by link, no account. Nothing can be exported without approval.
- Export to a ready-to-post folder with a captions file and a suggested posting schedule. The driver posts by hand.
- Behind-the-scenes measurement of the success metrics, including AI cost per generation. No raw media in analytics.

**Out of version 1, and where it goes**

| Not in version 1 | Why | Goes to |
| --- | --- | --- |
| After-the-gig material (thank-you carousel, highlight reels) | Ale chose pre-gig only; it also keeps uploads and rights risk out | First item after the first version |
| Payments | Free pilot first | After the price test |
| AI video and audio-synced teasers | Cost and feasibility unknown | A short video proof of concept first, then later |
| Direct posting to social channels and scheduling | Export-only keeps version 1 small | Later, as connectors |
| Full approval system with roles | One driver, light approval is enough | Later |
| Full identity studio (band lore, sound-to-look matching, per-campaign overrides) | Start light, grow by testing | Later, driven by output tests |
| Uploading gig photos or audio | Heavy files, rights risk | With after-the-gig material |
| Native phone app | Phone-first web is enough to learn | Much later |
| Venue booking, riders, merch, several bands per account | Not the job | Far future |

**Not goals, ever for this product:** music creation, mixing, distribution or streaming tools; labels, managers and agencies as users; genre-specific features.

**How sure are we:** *Decided.* Scope is a choice by Ale, not a claim about the world. Which parts of it matter most to bands is a *Hypothesis*.

**Comes from:** [MVP definition](../inception/mvp.md), [constraints and non-goals](../inception/constraints.md), [product foundation](../inception/product-foundation.md)

**Must have for:** Investor deck, One-pager, Engineering brief · **Nice to have for:** none

**Gap record:** [Scope of version 1](gaps.md#scope-of-version-1)

## Demo and visuals

**In plain words:** Today we can show how the product would look and feel, not what it really produces. There is a clickable phone prototype of the whole first-version flow, and a visual direction called "the band's wall".

**What exists**
- **The look:** concrete grey, black ink, yellow tape and photocopy grain, as if the app were the band's own gig wall. The app has no colour of its own: all colour comes from the band's artwork, so the poster is always the star. No gradients, no glass, no emoji. Approved by Ale for now.
- **The journey design:** three whole-journey designs were compared (a gig wall, a tour manager and a control desk). Ale chose the **gig wall** as the base and keeps ideas from the other two for later.
- **Prototype, second version:** the first-version flow in the chosen design, one decision per screen: pick between two looks, fill one sentence, swipe through posters, bandmates tap "Nope" or "Yes, post it". Confirmed by Ale.
- **Prototype, version 2.1:** adds draft later journeys, clearly marked "Later". Waiting for Ale's review at the time of writing.
- The first prototype was closed: the flow worked, but the design felt like a standard AI app and was rejected as too functional and generic.

**What the prototypes do not prove.** The posters in the prototypes are drawn by code with canned content. They show the experience, not the quality of real generated output, so they are no evidence that output "feels like us". They are not tested on real phones or with real bands yet.

**Links:** [UX direction](../inception/ux-direction.md) (board and source inside), [design alternatives](../inception/design-alternatives.md), [prototypes](../inception/prototypes.md).

**How sure are we:** the look is *Decided*; its effect on bands is *Not yet known*.

**Comes from:** [Prototypes](../inception/prototypes.md), [UX direction](../inception/ux-direction.md), [design alternatives](../inception/design-alternatives.md), [decision log](../inception/decision-log.md)

**Must have for:** none · **Nice to have for:** Investor deck, Band / marketing deck, Engineering brief

**Gap record:** [Demo and visuals](gaps.md#demo-and-visuals)

## Roadmap and milestones

**In plain words:** The roadmap has **no dates, on purpose**. There is no deadline; pace is set by Ale's 5 to 10 hours a week and by evidence. What matters is the order and two decision points where Ale chooses to go on, reshape or stop.

**Now: find out whether it can work, before building.**
1. Prototypes of the riskiest flows (identity setup, gig to pack, bandmate approval).
2. Driver interviews: do the drivers exist, does the problem hurt, what do they pay today. Includes a price conversation and recruits pilot bands.
3. A blind "is this us?" test: bands compare our output against their own flyer and against Canva and Simplified output.
4. A fake-door price test: would they commit money?
5. A desk study on rights (music, likeness, images) and a short size check by email.
6. A short-video proof of concept, to learn if and at what cost video is possible later.
7. The architecture handoff and Ale's sign-off to end the concept phase.

Postponed: the field work in 2 to 4 waits until Ale says go.

**Decision point 1: build or reshape.** Go if at least 60% of bands rate our output 4 or 5 out of 5 on "is this us?", it ties or beats their own flyer in half of the pairs, and the interviews support that the problem is real. If the blind test fails we reshape the inputs or the output before building anything. If the interviews fail we reconsider the user. This is the cheapest moment to change shape.

**Next: build a thin first version and pilot it.** Built in slices, in this order: identity plus gig setup plus one flyer; the full pre-gig pack; bandmate approval by link; export; measurement; a free pilot with 5 to 10 Italian bands (the number is an assumption).

**Decision point 2: pay, reshape or stop.** Go if the pilot reaches the provisional targets (half of new bands export a first campaign within a week, half of assets approved first time, 40% of bands run a second campaign) and at least three bands commit to paying for a campaign.

**Later, in order of evidence:** after-the-gig material; payments (per campaign, then subscription); short video; a richer identity setup; UK launch and English; connectors for posting and reach partners such as Bandsintown Boost; full approval roles; highlight reels from gig media; a native app; booking, riders, merch.

**Risks to the order:** money (under 100 EUR a month limits generation and test ads), Ale's hours (the interviews and tests are the long pole, not the build), and the open question of whether the product beats Canva at all.

**How sure are we:** the order and gates are *Decided*. The assumption that the blind test runs before any build, and the pilot size, are *Provisional*.

**Comes from:** [Roadmap](../inception/roadmap.md), [MVP definition](../inception/mvp.md), [research plan](../research/research-plan.md)

**Must have for:** Investor deck, One-pager · **Nice to have for:** none

**Gap record:** [Roadmap and milestones](gaps.md#roadmap-and-milestones)

## Technical scope

**In plain words:** The first version as a list an engineer can build from. Detail (acceptance checks) is written per item when the build starts; this is the scope and the order.

| # | Capability | What it must do |
| --- | --- | --- |
| 1 | Sign-up | Email sign-in, one band per account. Simplest option that works. |
| 2 | Light identity setup | Capture band name, genre tags, a rough-to-clean setting, a "never like this" list, up to five reference images, logo and colours if present. Editable any time. |
| 3 | Gig setup | Typed fields: venue, city, date and time, ticket link or price, support acts, one line of message. |
| 4 | Pre-gig pack generation | A flyer (feed format plus print-ready A4 and A3 PDF), a set of 9:16 stories, a feed post, captions and hashtags. Static images only. Italian or English. |
| 5 | Curate | Choose between variants, regenerate one asset, edit text. |
| 6 | Light approval | One shareable link, no account. Each asset approved or vetoed with one tap; a veto asks for a short note and triggers one revision. Export is blocked until approved. |
| 7 | Export | A folder of approved assets, a captions file and a suggested posting schedule. |
| 8 | Measurement | Events: campaign started, asset generated, approved, vetoed, regenerated, exported; AI cost per generation. No raw media in analytics. |

**Build order:** identity plus gig plus one flyer; full pack; approval; export; measurement; pilot.

**How sure are we:** *Decided* as scope. Whether it can be built within the cash limit is *Not yet known* (stack and AI cost not chosen).

**Comes from:** [MVP definition](../inception/mvp.md), [roadmap](../inception/roadmap.md)

**Must have for:** Engineering brief · **Nice to have for:** none

**Gap record:** [Technical scope](gaps.md#technical-scope)
