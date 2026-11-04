# Constraints and non-goals: Band Studio OS (working title)

Decisions: D-015 to D-017 (new here), plus D-005 to D-014 in the [decision log](decision-log.md). Items marked **(Assumption)** were not decided by Ale; they are Claude's proposals for Ale to review.

## Constraints

| Area | Constraint | Source |
| --- | --- | --- |
| Team | Ale part-time (about 5 to 10 hours a week) plus Claude. No hires, no contractors. | D-015 |
| Cash | Under 100 EUR a month in total (tools, hosting, AI generation, test ads) until the first paying customers. | D-016 |
| Time | No fixed deadline. Pace is set by Ale's hours and the research gates. (Assumption) | |
| Usage | Claude work runs on the Pro plan: small, targeted reads, no needless parallel agents. | Ale's working preferences |
| AI cost | Cost per campaign must fit inside the price once priced (H-06, H-03). Images and template motion only in V1. | D-008, D-017 |
| Users | One user type in V1: the driver. Bandmates approve without a full account. | D-005 |
| Markets | Italy first, then the UK, then the rest of Europe. Italian-language and EU-law first. | D-012 |
| Platform | Phone-first. No stack chosen yet; decided in the architecture handoff. | Inception profile |
| Architecture | Connector-based and multi-channel by design, even though V1 only exports. | D-009 |
| Product rules | Nothing is published without a band member's approval. Output must amplify the band's identity, not generic polish. | Principles |
| Legal and rights | Music copyright, likeness and image rights around uploads and generated assets. EU privacy rules (GDPR) apply to band and audience data. Manageable? is hypothesis H-07, a desk study still to run. | Domain risks |
| Evidence | Pricing and size claims stay provisional until the primary research (R-003, E2, E3) runs. | D-013, D-014 |

## Non-goals (V1)

- **AI-generated video.** A short-video proof of concept follows right after scope is set, to prove feasibility and cost (D-017).
- **Direct publishing to social channels.** V1 exports a ready-to-post folder (D-009).
- **A full Consensus Engine.** Light approve or veto only (D-005).
- **A full Identity Studio.** Light first, grown by testing (D-006).
- **Venue booking, negotiation drafts, riders and stage plots, merch, scene-level learning.** Future connectors or modules.
- **Managers, agencies, labels or multi-band accounts as users.** (Assumption, follows D-005)
- **Team features beyond driver and reviewers**, such as roles, permissions and billing seats. (Assumption)
- **Music creation, mixing, distribution or streaming-platform tools.** The product promotes gigs; it does not make or release music. (Assumption)
- **A native app or app-store launch.** A web, phone-first experience is enough until demand is proven. (Assumption)
- **Genre-specific features.** No genre limit and no genre-only build (D-007).
- **Paid acquisition at scale.** Cash limit (D-016) allows small tests only. (Assumption)

## Open questions

- Does a deadline or target date exist for first paying customers? (Not asked; none assumed.)
- Which rights risks need a lawyer rather than a desk study? A lawyer is outside the cash limit.
- What can be done on free tiers: hosting, image generation, email?
