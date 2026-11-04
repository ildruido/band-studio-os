# Success metrics: Band Studio OS (working title)

Decision: D-021 in the [decision log](decision-log.md). Only the North Star was decided by Ale. Everything marked **(Assumption)** is Claude's proposal for Ale to review. **All targets are provisional**: they are guesses until the primary research ([research plan](../research/research-plan.md): R-003, E2, E3) gives real numbers, and are re-set after E3.

## North Star

**Approved campaigns per month:** the number of gig campaigns in a calendar month that every required bandmate reviewer approved and the driver exported.

- **Why this one:** approval by bandmates is the human-in-the-loop proof that output feels like "us" (H-01). It maps directly to pay-per-campaign revenue (H-03, D-008). It counts finished work, not sign-ups.
- **Target (Assumption):** 20 per month within 3 months of the first paid pilot, 100 per month within 12 months. Revisit after E3.
- **Limit:** export is the last step we can see in V1 (D-009), so it does not prove the band posted or that the gig went better.

## Supporting metrics (V1)

| # | Metric | Definition | Target (Assumption) | Tests |
| --- | --- | --- | --- | --- |
| 1 | Activation | Share of new bands that export a first campaign within 7 days of signing up | at least 50% | H-08, H-05 |
| 2 | Time to campaign | Median active time from starting a gig campaign to export | 60 minutes or less (baseline from R-003 interviews) | H-08 |
| 3 | "Feels like us" | Share of generated assets approved at first review with no regeneration | at least 50% | H-01 |
| 4 | Repeat use | Share of bands with 2 or more approved campaigns in their first 60 days | at least 40% | H-02, H-04 |
| 5 | Paid conversion | Share of bands that pay for a campaign once pricing is on | at least 5% of qualified visitors (E3 threshold); 30% of activated bands (Assumption) | H-03 |

## Guardrails (must not get worse)

| Guardrail | Limit |
| --- | --- |
| Nothing is published without a band member's approval | 100%, no exceptions (principle) |
| AI cost per approved campaign | At most 30% of the campaign price (Assumption); and total cash under 100 EUR a month until first paying customers (D-017) |
| Bandmate veto rate | Tracked, not targeted. A rising rate means output drifts from identity |
| Rights or likeness complaints | 0 unresolved (H-07) |
| Reviewer approval friction | Reviewers approve without a full account (H-05, D-005) |

## Leading indicators before there is a product

These come from the research plan's own pass thresholds, so no new fieldwork is needed.

| Indicator | Pass threshold | Source |
| --- | --- | --- |
| Drivers who do the promotion themselves and rank it top five unprompted | 6 of 8 and 5 of 8 | E1 (R-003) |
| Bands rating our output 4 or 5 on "is this us?" | at least 60% | E2 |
| Bands who put down a deposit or written commitment | at least 3 | E3 |
| AI cost per campaign from E2 generation | under 30% of the tested price | E2 and E3 (H-06) |

## How we measure

- No stack yet (architecture handoff decides). Until the app exists, pilot campaigns are tracked by hand in a spreadsheet.
- The architecture handoff must include an event list: campaign started, assets generated, asset approved, vetoed or regenerated, campaign exported, payment made, AI cost per generation.
- Privacy: analytics on band and audience data follow EU rules (GDPR); events carry no raw media.
- Review cadence: monthly. Not yet automated.

## Not metrics (on purpose)

Follower growth, likes, streams or ticket sales. They depend on the band's music and scene, V1 cannot see them, and they would reward vanity over finished work.

## Open questions

- Should the North Star later count posted campaigns, once a connector can see publishing (D-009)?
- What price makes "30% of price for AI cost" workable? Set by E3.
- Pace is set by Ale's hours and research gates (no fixed deadline, D-020), so targets are relative to the first paid pilot.
