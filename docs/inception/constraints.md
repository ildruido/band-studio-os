# Constraints and non-goals: Band Studio OS (working title)

Decisions: D-016 to D-019 (new here), plus D-005 to D-014 in the [decision log](decision-log.md). Ale reviewed the remaining proposals and agreed them (D-020). Status: agreed.

## Constraints

| Area | Constraint | Source |
| --- | --- | --- |
| Team | Ale part-time (about 5 to 10 hours a week) plus Claude. No hires, no contractors. | D-016 |
| Cash | Under 100 EUR a month in total (tools, hosting, AI generation, test ads) until the first paying customers. | D-017 |
| Time | No fixed deadline. Pace is set by Ale's hours and the research gates. (D-020) | |
| Usage | Claude work runs on the Pro plan: small, targeted reads, no needless parallel agents. | Ale's working preferences |
| AI cost | Cost per campaign must fit inside the price once priced (H-06, H-03). Images and template motion only in V1. | D-008, D-018 |
| Users | One user type in V1: the driver. Bandmates approve without a full account. | D-005 |
| Markets | Italy first, then the UK, then the rest of Europe. Italian-language and EU-law first. | D-012 |
| Platform | Phone-first. Stack direction proposed in the [architecture handoff](architecture-handoff.md) (D-038), provisional until the spikes run. | Inception profile |
| Architecture | Connector-based and multi-channel by design, even though V1 only exports. | D-009 |
| Product rules | Nothing is published without a band member's approval. Output must amplify the band's identity, not generic polish. | Principles |
| Legal and rights | Music copyright, likeness and image rights around uploads and generated assets. EU privacy rules (GDPR) apply to band and audience data. Manageable? is hypothesis H-07, a desk study still to run. | Domain risks |
| Evidence | Pricing and size claims stay provisional until the primary research (R-003, E2, E3) runs. | D-013, D-014 |

## Non-goals (V1)

- **AI-generated video.** A short-video proof of concept follows right after scope is set, to prove feasibility and cost (D-018).
- **Direct publishing to social channels.** V1 exports a ready-to-post folder (D-009).
- **A full Consensus Engine.** Light approve or veto only (D-005).
- **A full Identity Studio.** Light first, grown by testing (D-006).
- **Venue booking, negotiation drafts, riders and stage plots, merch, scene-level learning.** Future connectors or modules.
- **Managers, agencies, labels or multi-band accounts as users.** (D-005, D-020)
- **Team features beyond driver and reviewers**, such as roles, permissions and billing seats. (D-020)
- **Music creation, mixing, distribution or streaming-platform tools.** The product promotes gigs; it does not make or release music. (D-020)
- **A native app or app-store launch in V1.** V1 is a phone-first web experience. A native app is wanted, but much later (D-019).
- **Genre-specific features.** No genre limit and no genre-only build (D-007).
- **Paid acquisition at scale.** Cash limit (D-017) allows small tests only. (D-020)

## Open questions

- Which rights risks need a lawyer rather than a desk study? A lawyer is outside the cash limit.
- What can be done on free tiers: hosting, image generation, email?
