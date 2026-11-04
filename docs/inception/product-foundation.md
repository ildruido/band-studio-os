# Product foundation: Band Studio OS (working title)

Refined from [starting-idea.md](starting-idea.md), which stays unchanged. Decisions: D-005 to D-009 in the [decision log](decision-log.md).

## Problem

Independent bands run on volunteer effort, usually one or two "active" members. Promoting a gig means juggling fragmented tools, producing amateur visuals, spending hours on repetitive tasks, and waiting on group-chat approvals. Generic AI tools make it worse: they produce polished, corporate output that a scene built on grit rejects.

## Target users

- **Primary user (V1):** the one active "driver" member who runs the band's promotion (D-005). Bandmates are reviewers who approve through a light flow.
- **Any genre** (D-007): each band sets its own style in the Identity Studio. Indie and rock stay the reference community and the tone of the product.
- Personas come in a separate artifact.

## Vision and value proposition

Vision: a control room that lets a low-budget band run professional-grade promotion that still sounds and looks like itself.

Value proposition: **do more, do better, with less.** The driver gets a complete gig campaign in a fraction of the time, with output that amplifies the band's identity instead of overwriting it.

## Principles

- **Authenticity first:** amplify grit and subcultural identity, never sanitized polish.
- **Human in the loop:** the AI proposes, the band curates, nothing is published without approval.
- **End-to-end before breadth** (D-006): prove the whole path from identity to finished assets, then add identity variables.
- **Composable by design** (D-009): multi-channel and connector-based from the start.

## Key product artifacts

- **Identity Studio:** the persistent brand context behind every output.
  - V1 starts light: Grit slider, anti-moodboard, a few references. Onboarding captures only the essentials; the customer refines identity later at any time (D-006).
  - Later candidates: lore repository, sonic-to-visual fingerprinting, campaign overrides on a base identity. A UX design round decides which variables exist, based on their effect on output identity.
- **Staged Campaign Wizard (V1 core):** guided gig promotion in three phases: setup (venue data, messaging, schedule), pre-gig blitz (flyers, 9:16 stories, audio-synced teasers), post-gig momentum (highlight reels, thank-you carousels). The AI proposes, the driver curates.
- **Consensus Engine (light in V1):** drivers generate, reviewers approve by swipe or vote; vetoes trigger micro-revisions. Full roles and branching come later.
- **Campaign export (V1):** a ready-to-post folder; the driver posts by hand (D-009).

## Business model

Long-run freemium (D-008). Early adopters can pay per campaign; regular users move to a monthly subscription; add-ons and a free tier can follow. Pricing is for the market work to test.

## Out of V1 (future horizons)

Direct social publishing, venue booking and negotiation drafts, riders and stage plots, scene-level meta-learning, merch and booking commissions. Each arrives as a new connector or module.

## Assumptions (not yet decided)

- Edge triage of raw gig media (on-device culling before upload) and pre-processing identity injection are technical approaches to settle in the architecture handoff, not product commitments.
- Post-gig momentum (phase 3) ships in V1 unless MVP scoping cuts it.
- Reviewers approve without a full account.

## Open questions

- Which Identity Studio variables measurably change output identity? (UX round and prototype)
- Willingness to pay per campaign vs subscription, and the price points.
- How much AI generation cost per campaign the pricing can absorb.
- Music, likeness and image-rights risks around uploaded media and generated assets.
