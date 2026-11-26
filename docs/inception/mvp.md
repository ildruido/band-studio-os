# MVP definition: Band Studio OS (working title)

Status: **approved by Ale, 2026-11-25.** Decisions: D-028 and D-029 (new), plus D-005 to D-009, D-012, D-018, D-019 and D-027 in the [decision log](decision-log.md). The roadmap (`roadmap.md`, a separate PR) is derived from this document: if the scope here changes, the roadmap is reshaped to match.

Tags: **(Assumption)** is Claude's proposal, not yet decided or tested.

## The MVP in one paragraph

A phone-first web app where the one active "driver" of a band describes the band once (light Identity Studio), enters a gig, and gets a **pre-gig campaign pack** in the band's own voice: flyer, 9:16 stories, a feed post and captions. The driver curates it, bandmates approve or veto from a link with no account, and the driver exports a ready-to-post folder and posts by hand. It is free for the first pilot bands (D-029). Its job is to answer one question with real bands: **does the output feel like "us", and is the campaign worth paying for?**

## Problem and user

- **User:** the driver, the one member who runs promotion alongside a day job (D-005). Bandmates only review. Personas are speculative ([personas.md](personas.md)).
- **Problem:** promoting a gig eats evenings, produces amateur or generic visuals, and stalls in group-chat approvals.
- **Position (D-027):** the band's creative and identity layer for a gig campaign. Not an "AI poster generator", and not a reach or ad product.

## Scope

### In (the MVP)

| # | Capability | What the driver sees | Notes |
| --- | --- | --- | --- |
| 1 | Sign-up | Email sign-in, one band per account | Simplest sign-in; stack decided in the architecture handoff |
| 2 | Light Identity Studio | Band name, genre tags, Grit slider, anti-moodboard ("never like this"), up to 5 reference images, logo and colours if they have them | D-006. Onboarding takes minutes, not an hour. Editable any time |
| 3 | Gig setup (campaign stage 1) | Venue, city, date and time, ticket link or price, support acts, one line of message | Typed, no venue database in the MVP |
| 4 | Pre-gig pack (campaign stage 2) | A flyer (feed format plus a print-ready file), a set of 9:16 stories, a feed post, captions and hashtags in the band's voice | Static images only: no video and no motion (D-018). Italian or English (Assumption) |
| 5 | Curate | Pick between variants, regenerate one asset, edit the text | The AI proposes, the driver curates |
| 6 | Light approval | The driver shares a link; bandmates approve or veto each asset with one tap and no account; a veto asks for a short note and triggers one revision | D-005, H-05. Nothing can be exported without approval |
| 7 | Export | A ready-to-post folder of approved assets plus a captions file and a suggested posting schedule | D-009. The driver posts by hand |
| 8 | Measurement | Events behind the success metrics (campaign started, asset generated, approved, vetoed, regenerated, exported; AI cost per generation) | See [success-metrics.md](success-metrics.md). No raw media in analytics |

### Out of the MVP (and where it goes)

| Out | Why | Goes to |
| --- | --- | --- |
| Post-gig momentum (thank-you carousel, highlight reels) | Ale chose pre-gig only (D-028). It also keeps media upload and rights risk out | First Next item |
| Payments and checkout | Free pilot first (D-029) | Next, after the price test |
| AI video, audio-synced teasers | D-018 | Short-video proof of concept right after scope is set; then Later |
| Direct publishing, scheduling connectors | D-009 | Later, as connectors (Bandsintown Boost-style reach is a candidate partner, D-027) |
| Full Consensus Engine, roles | D-005 | Later |
| Full Identity Studio (lore, sonic fingerprint, campaign overrides) | D-006 | Later, driven by output tests |
| Upload of gig photos or audio | Heavy files, rights risk | With post-gig |
| Native app | D-019 | Much later |
| Venue booking, riders, merch, multi-band accounts | Non-goals | Future modules |

## Core flow (what a first session looks like)

1. The driver signs in and sets up the band identity (about 5 minutes, Assumption).
2. The driver enters the next gig.
3. The app proposes a pack; the driver picks, edits and regenerates.
4. The driver sends one link to the band; each member approves or vetoes on their phone.
5. The driver exports the folder and posts.

Target: first campaign exported within one session, 60 minutes of active time or less (metric 2, Assumption).

## Riskiest assumptions and how they get validated

Ranked as in the [research plan](../research/research-plan.md). The MVP tests the product ones in use. The research postponed by D-014 still has to run for the others, and is not replaced by the build.

| Assumption | What the MVP shows | Validated how | Status |
| --- | --- | --- | --- |
| **H-01** Output feels like "us", not generic AI (also R-005 C1: the gap against Canva and Simplified) | Share of assets approved at first review without regeneration (metric 3) | **E2 blind test before the build starts** (Assumption, see the roadmap), then pilot metric 3 | Untested |
| **H-03** The driver pays per campaign at a price that covers cost | **Not tested by the free pilot** (D-029) | **E3 fake-door price test**; pilot bands asked for a paid-campaign commitment at the end | Untested |
| **H-02** The driver exists and the problem hurts | Activation and repeat use | **E1 interviews** (R-003), before or alongside the build | Untested |
| H-06 AI cost per campaign fits the price | AI cost per generation, logged | E2 first data; pilot data | Untested |
| H-07 Rights and likeness risks are manageable | None: no uploads in the MVP, only references | Desk study [R-008](../research/R-008-image-rights/report.md) done: partly supported; reference-image rule D-044; lawyer check and provider-terms spike still owed | Partly supported (desk) |
| H-08 A campaign is far faster than today | Time to campaign (metric 2) | Pilot measure against the E1 baseline | Untested |
| H-05 Bandmates approve through a light flow | Reviewer completion rate | Pilot | Untested |

**Our lead today rests only on planned features** (guided campaign, time, Italian), and the competitive analysis scores us below Canva on what exists (R-005). The MVP is only worth building if E2 shows the output beats a free Canva flyer for the band's own eyes. That is why the roadmap puts E2 before build.

## Pilot (Assumption)

5 to 10 Italian bands recruited through the E1 interviews, free for the first pilot (D-029), each running at least one real gig campaign. Pass signals: the success-metric targets (activation, "feels like us", repeat use) and at least 3 bands willing to commit to a paid campaign afterwards (the E3 threshold).

## Constraints that shape it

Budget under 100 EUR a month, Ale 5 to 10 hours a week plus Claude, phone-first web, Italy first, human approval before any export ([constraints.md](constraints.md)). AI generation cost has to be logged from the first generation.

## Open questions

- Which languages at launch: Italian only, or Italian and English? (Assumption: Italian and English output, Italian first.)
- Print-ready flyer: is a simple print file enough? (Assumption: yes, A4 and A3 PDF.)
- Reference images: do bands upload them, or paste links? Depends on H-07.
- Sign-in method and storage: architecture handoff.
- Exact pilot size and recruiting: set when E1 starts.

## Hand-off to the build phase

This document is written so `prd-intake` can turn the In table into backlog items `BS-001` onward, one per capability, with the riskiest-assumption table as acceptance and measurement criteria.
