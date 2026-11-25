# Product Brief Pack: step 1, the two inventories

Status: **inventories done, awaiting Ale's review.** Decision: D-036 in the [decision log](decision-log.md). Nothing of the pack itself is built yet.

## What the Product Brief Pack is

Ale wants one place, made of one or more structured documents, that holds everything a classic product brief holds. That place becomes the **single source of truth** for generating presentation material: slide decks, a one-page summary, a short video pitch, and similar. The pack is meant to be fed to Claude or to external tools (slides, video).

It sits in the inception workflow just before the architecture handoff. This document is only the first step: it lists what we have, lists what a brief usually needs, and shows the gaps. The pack itself comes after Ale reviews this.

How to read the tables:

- **Maturity** of what we have: **Done** (finished and approved), **Provisional** (written, but rests on guesses), **Hypothesis** (a claim not yet tested), **Needs primary research** (desk research ran and could not settle it; only talking to real bands can).
- Where the text uses a label such as "D-027" it is a decision in the [decision log](decision-log.md); the name is given next to it.

---

## Part 1: what we already have from inception

All paths are inside `docs/` of this repo.

| What | What it covers | Maturity | Where it lives |
| --- | --- | --- | --- |
| **Starting idea** | Ale's original idea, kept unchanged as a starting point, not a bible | Done (frozen) | `inception/starting-idea.md` |
| **Product foundation** | Problem, target user, vision and value proposition ("do more, do better, with less"), four principles, the three key product parts (Identity Studio, Staged Campaign Wizard, Consensus Engine), business model direction, what is out of version 1, open questions | Done (approved; the status tracker row still says "in progress" and should be updated) | `inception/product-foundation.md` |
| **Personas** | The "Driver" (the one band member who runs promotion) and the bandmate reviewer, with goals, pains, how they cope today | **Provisional**: speculative, built on desk research; traits are assumptions until interviews | `inception/personas.md` |
| **Success metrics** | North Star (approved campaigns per month), supporting metrics (activation, time to campaign, "feels like us", repeat use), guardrails, targets | **Provisional**: only the North Star was decided by Ale; all targets are guesses | `inception/success-metrics.md` |
| **Constraints and non-goals** | Team (Ale part-time plus Claude), cash (under 100 EUR a month), no deadline, no AI video in version 1, native app much later, what we will not do | Done (agreed by Ale) | `inception/constraints.md` |
| **MVP definition** | The first version in one paragraph: phone-first web app, light identity, one gig, a pre-gig pack (flyer, stories, post, captions), bandmates approve by link, export and post by hand, free pilot; what is in, what is out, how it tests each hypothesis | Done (approved 2026-11-25) | `inception/mvp.md` |
| **Roadmap** | Now / Next / Later, undated: Now = prototypes, interviews, blind test, price test, short-video proof of concept, then a build gate; Next = thin build and a 5 to 10 band pilot; Later = post-gig, payments, video, UK | Done (approved), but its order rests on an assumption (blind test before build) | `inception/roadmap.md` |
| **Decision log** | Every product decision with date, reason and alternatives (36 so far, including the D-036 for this step) | Done, kept current | `inception/decision-log.md` |
| **Research framework and study list** | How we run research without bias, the index of all studies, the plan of three experiments (driver interviews, blind output test, fake-door price test) | Done (method); experiments **not run** | `research/framework.md`, `research/studies.md`, `research/research-plan.md` |
| **R-001 and R-002: does the user exist and how many** | Whether indie bands run by one driver exist and have the problem; first size check | **Needs primary research** | `research/R-001-persona-reality-check/`, `research/R-002-band-count-size-check/` |
| **R-004 competitor scan** | Every way bands solve this today: tools, freelancers, DIY, doing nothing, dead products. Closest tool found: Mew Design | Done; verdict **Reshape** | `research/R-004-competitor-scan/` |
| **R-007 Canva gap check** | Whether Canva (and similar) already does this well enough for bands. Nearest threats: Simplified, Canva AI 2.0 | **Needs primary research** (no one tested "brief in, campaign out" for bands) | `research/R-007-canva-gap-check/` |
| **R-005 competitive analysis** | Scored comparison against competitors; where we lose; **positioning decision (D-027)**: we are the band's creative and identity layer for a gig campaign, not an "AI poster generator" and not an ad or reach product; Bandsintown Boost is an indirect reach competitor and a possible future partner | Done; verdict **Reshape**; some quotes accepted by Ale but not independently verified (D-026) | `research/R-005-competitive-analysis/` |
| **R-006 market sizing** | How many bands and what revenue: Italy plus UK about 16 thousand to 6.4 million EUR a year, base case about 446 thousand; about 74 thousand active bands estimated | **Needs primary research** (wide range, built on assumptions) | `research/R-006-market-sizing/` |
| **R-003 driver interviews (designed)** | Interview protocol and guide, ready to run | **Designed, parked** (fieldwork postponed) | `research/R-003-driver-interviews/` |
| **Prototype v1** | Clickable full MVP flow | Closed: rejected as too functional and generic (D-031) | `inception/prototypes.md` |
| **UX direction ("band's wall")** | Visual direction: concrete grey, black ink, yellow tape, photocopy grain; the band's own poster is the hero | Done (approved for now, D-032) | `inception/ux-direction.md`, `inception/ux-direction/board.html` |
| **Design alternatives** | Three whole-journey designs (Gig Wall, Tour Manager, Control Desk) with growth over time and use-case sections; Ale chose the Gig Wall (D-034) | Done | `inception/design-alternatives.md`, `inception/design-alternatives/board.html` |
| **Prototype v2 and v2.1** | v2: the MVP flow in the chosen design (confirmed by Ale). v2.1: adds draft later journeys, tagged "Later" | v2 done; v2.1 **awaiting Ale's review**. Art is drawn by code, so it proves nothing about real output quality | `inception/prototypes.md`, `inception/ux-direction/prototype-v2.html`, `prototype-v2-1.html` |
| **Status tracker and workflow** | Where inception stands against the 11 exit criteria; how we work | Done, kept current | `inception/status.md`, `inception/workflow.md` |

### Honest summary of strength

- **Strong:** the problem story, the positioning, the MVP and roadmap, the constraints, the look and feel, the decision trail.
- **Weak or unproven:** anything that needs real people: that bands feel this pain, that output feels like "us", that they will pay, how big the market is. All are marked "Needs primary research" or "Provisional", and the pack must say so instead of hiding it.

---

## Part 2: what a classic product brief and stakeholder material contain

These are the usual building blocks, grouped by audience. An audience can need the same block in a different depth.

### A. Core product brief (everyone reads this)

1. **Problem**: who hurts, how, how often, how they cope today.
2. **Customer**: who the user is and who pays; personas.
3. **Solution and value proposition**: what the product does, in one sentence and in detail; why it is better.
4. **Positioning and differentiation**: where we stand against alternatives, in one line.
5. **Scope**: what is in the first version, what is out, what is later.
6. **Product demo or visuals**: screens, a prototype, a flow.

### B. Investors

7. **Market**: size (total, serviceable, obtainable), growth, why now.
8. **Competition**: landscape, where we win and lose, defensibility.
9. **Business model and pricing**: how we earn, price points, unit economics (cost per campaign against price).
10. **Go-to-market**: first market, channel to reach bands, launch plan.
11. **Traction and validation**: interviews, pilots, waitlist, test results, evidence.
12. **Roadmap and milestones**: what ships when, what each milestone proves.
13. **Team**: who builds it and why they can.
14. **Financials and the ask**: funding need, use of funds, burn, targets.
15. **Risks and mitigations**: market, legal, cost, execution.

### C. Sales, marketing and early customers (bands, venues, partners)

16. **Brand and messaging**: name, tagline, tone of voice, key messages by audience, boilerplate "about" text.
17. **Customer-facing story**: before and after, a typical band's week, testimonials or case study (when they exist).
18. **Proof points**: numbers a customer cares about (hours saved, cost saved).
19. **Visual assets**: logo, colours, fonts, screenshots, sample outputs, product video.
20. **Pricing sheet and offer**: what a pilot band gets, what it costs later.
21. **FAQ and objections**: "Why not Canva?", "Is it AI slop?", "Who owns the images?".
22. **Launch and channel plan**: where to find bands (scenes, venues, social), messaging by channel.

### D. Engineers and technical partners

23. **Technical scope**: features in version 1 with acceptance detail.
24. **Architecture direction**: stack, composable connectors, data shape, access model.
25. **Non-functional requirements**: performance, large uploads, availability, privacy, accessibility.
26. **Constraints**: team, cash, AI generation cost, time.
27. **Integrations**: social channels, ticketing, Bandsintown, file export.
28. **Legal and safety needs**: music copyright, likeness and image rights, data protection.
29. **Open technical questions** and the order they get answered.

### E. Partners and press (only if relevant, lower priority now)

30. **One-paragraph description and a fact sheet**: what, who, where, since when.
31. **Founder story**: why this product from this person.
32. **Partnership angle**: what a venue, platform or label gains.
33. **Press kit**: images, quotes, contact.

---

## Part 3: the gap table

How well each block in Part 2 is covered by what we have in Part 1.

**Covered** = the content exists and can be reused as is. **Partly** = some content exists but it is thin, provisional or scattered. **Missing** = nothing usable yet.

| # | Block | Status | What we have | What is missing |
| --- | --- | --- | --- | --- |
| 1 | Problem | Covered | Foundation, starting idea | Real quotes and numbers from bands (needs interviews) |
| 2 | Customer | Partly | Personas (provisional) | Evidence the persona is real; who pays besides the driver |
| 3 | Solution and value proposition | Covered | Foundation, MVP | One-sentence and 30-second versions, written for outsiders |
| 4 | Positioning | Covered | R-005 and the positioning decision | A plain-language positioning statement and tagline |
| 5 | Scope | Covered | MVP, roadmap, constraints | None, but it is written for insiders (many internal labels) |
| 6 | Demo and visuals | Partly | Prototype v2 and v2.1, boards | No real generated output; no polished screenshots or demo recording |
| 7 | Market | Partly | R-006 sizing (wide range) | Credible numbers; "why now" story; growth |
| 8 | Competition | Covered | R-004, R-005, R-007 | A one-slide landscape view; "Why not Canva?" answer (still unproven) |
| 9 | Business model and pricing | Partly | Direction only: pay per campaign, then subscription; free pilot | Price points, cost per campaign, margin (price test not run) |
| 10 | Go-to-market | Partly | Launch markets Italy then UK; pilot of 5 to 10 bands | How we reach and win the first bands; channels; launch plan |
| 11 | Traction and validation | Missing | Desk research only | Interviews, blind test, price test, pilot results. The honest answer today is "not yet tested" |
| 12 | Roadmap and milestones | Covered | Roadmap | Dates (the roadmap is deliberately undated); what each gate proves, in plain words |
| 13 | Team | Partly | Constraint: Ale part-time plus Claude | A team and founder bio written for external readers |
| 14 | Financials and the ask | Missing | Budget limit (under 100 EUR a month); success metric targets (guesses) | Funding need (if any), use of funds, projections. Needs Ale's decision on whether an investor ask exists at all |
| 15 | Risks and mitigations | Partly | Domain risks, kill criteria, research risks, status risks | One clean risk register with mitigations |
| 16 | Brand and messaging | Missing | Principles, tone ("gritty, authentic") | Product name (working title only), tagline, tone of voice guide, key messages per audience, boilerplate text |
| 17 | Customer-facing story | Partly | Personas, MVP story | Before-and-after narrative; no testimonials or case study yet |
| 18 | Proof points | Missing | Hypotheses (time saved, "feels like us") | Measured numbers; none exist until pilot or tests |
| 19 | Visual assets | Partly | UX direction and boards (the product's look) | Logo, final name, brand colours for the product itself, screenshots, product video (a video proof of concept is on the roadmap) |
| 20 | Pricing sheet and offer | Missing | Free pilot decision | The paid offer |
| 21 | FAQ and objections | Partly | Competitor findings, domain risks | Written answers for outsiders |
| 22 | Launch and channel plan | Missing | Launch market order only | Plan |
| 23 | Technical scope | Covered | MVP and roadmap | Acceptance detail (comes with the backlog in the build phase) |
| 24 | Architecture direction | Missing | Principle only (composable, connectors); "stack not decided" | Architecture handoff (exit criterion 6, not started) |
| 25 | Non-functional requirements | Partly | Large uploads and AI cost named as risks | Concrete targets |
| 26 | Constraints | Covered | Constraints doc | None |
| 27 | Integrations | Partly | Export-only version 1; Bandsintown noted as future connector | List with priority |
| 28 | Legal and safety needs | Partly | Risks named (copyright, likeness, image rights) | A position on each; no legal review |
| 29 | Open technical questions | Partly | Scattered across foundation and MVP | One consolidated list |
| 30 | Description and fact sheet | Missing | Parts of the foundation | Short boilerplate and fact sheet |
| 31 | Founder story | Missing | None in the repo | Ale's story, in his words |
| 32 | Partnership angle | Missing | Bandsintown noted as a possible partner | Pitch per partner type |
| 33 | Press kit | Missing | None | Not needed now |

Count: 8 covered, 14 partly covered, 11 missing (33 blocks).

### Reading the gaps

- **Content that exists but is written for insiders:** blocks 3, 4, 5, 12. They need rewriting in plain language, not new research. This is the cheapest gain.
- **Content that cannot exist yet, because it needs real people:** 11, 18, parts of 2, 7 and 9. The pack should state clearly "not yet tested" and say how and when each will be tested. Fieldwork is postponed (D-014), so the first version of the pack will be an honest "concept and plan" pack, not a "proof" pack.
- **Content that needs a product decision from Ale:** the product name (16), whether there is an investor ask (14), the paid offer (20), the founder story (31).
- **Content that belongs to later steps:** architecture (24, the architecture handoff) and non-functional targets (25).

---

## Part 4: what each output needs

The three outputs Ale named, with the blocks each needs (numbers refer to Part 2). **Must** is required for the output to make sense. **Nice** improves it.

| Output | Must | Nice | Biggest gaps today |
| --- | --- | --- | --- |
| **Slide deck for investors** | 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 6, 19 | Traction (11), financials and the ask (14), go-to-market (10), market credibility (7) |
| **Slide deck for bands, venues or a marketing audience** | 1, 3, 4, 16, 17, 20 | 6, 18, 19, 21 | Brand and messaging (16), pricing (20), no testimonials |
| **One-pager** (one page, either audience) | 1, 3, 4, 5 and 12 (short) | 7, 8, 16 | Plain-language wording of 3 and 4; a name |
| **Short video pitch** (about 60 to 90 seconds) | 1, 3, 4, 16, 19 | 17 | Name and tagline (16), visuals (19). Prototype v2 screens can be recorded, but they are drawn in code, not real AI output |
| **Engineering brief** | 5, 23, 24, 25, 26, 27, 28, 29 | 6 | Architecture (24), non-functional targets (25) |
| **Sales or marketing team brief** | 3, 4, 16, 17, 18, 21, 22 | 19, 20 | Brand and messaging (16), launch plan (22) |
| **Partner or press note** | 30, 3, 4 | 31, 32 | Boilerplate (30), founder story (31). Not a priority now |

---

## Part 5: proposed next steps (for Ale to choose from)

1. **Shape of the pack (decided by Ale): a folder, with an index and cross-links.** `docs/brief-pack/` holds short plain-language files by theme (for example: story, product, market and competition, business and go-to-market, brand and messaging, technical scope, evidence and risks). An `index.md` lists every file with one line on what it holds and which outputs need it. Files link to each other wherever one builds on another. Each file says where its facts come from and how mature they are, so an external tool can take only what an output needs.
2. **First fill what already exists** (blocks 1, 3, 4, 5, 8, 12, 23, 26): rewritten in plain language, no bare labels.
3. **Then ask Ale for the few product decisions** that unlock the rest: name and tagline, whether there is an investor ask, founder story.
4. **Mark every claim** with its maturity (done, provisional, hypothesis, needs primary research) so decks never present a guess as a fact.

Steps 2 to 4 have not started. They wait for Ale's review of this document.

## What was not checked

- The content of each source was read for status and coverage, not re-verified. Research numbers are quoted from the studies as they stand, including their stated limits.
- The list of classic brief contents in Part 2 comes from common practice, not from a researched standard, and was not checked against external templates.
- Which output needs which block (Part 4) is Claude's judgement, not tested with any tool.
