---
name: competitive-analysis
description: Compare the product with verified competitors on criteria set from the customer's job, find real gaps and threats, and state honestly where the product is weaker. Use after a competitor scan, before positioning, differentiation, pricing or roadmap decisions.
---

# Competitive analysis

A type layer on the `research-protocol` skill: follow every step of it, plus what this skill adds. It never removes a generic guardrail. Method: `docs/research/framework.md`.

Product facts (the product, target customer, principles) come from the project's instructions and product docs. This skill stays generic.

**Needs a finished competitor scan** (the `competitor-scan` skill) with a report that passed skeptic review. If none exists, run it first. Don't analyse a list built from memory. Reuse its verified entries; re-check any entry older than 90 days or about a fast-moving product.

**Default tier: standard.** Use deep when the analysis decides a positioning or pricing bet.

## Core rule: criteria before competitors

Choose and weight the comparison criteria **before** reading any competitor's profile for this analysis. Criteria come from the customer's job and what the evidence says the customer values (grade A or B), not from our feature list. Pre-register them in the protocol with weights and the reason each matters. Add "criteria the customer cares about where we are weakest" on purpose; a criteria set made of our strengths is rejected.

Before the protocol is committed, read only the scan's list of competitor names and the customer evidence, not the competitor profiles. If a criterion is added after seeing the data, log it as a deviation and show the result with and without it.

## Standard hypotheses

Pre-register these with numbers in each kill criterion. C1 and C2 are key.

| Id | Hypothesis | Null or strongest alternative | Example kill criterion |
| --- | --- | --- | --- |
| C1 Meaningful gap | On the criteria that matter most to the customer, no verified competitor serves the target customer well, and the gap is large enough to matter. | A competitor already serves it well enough. | A verified competitor scores at or above our intended level on the top-weighted criteria. |
| C2 Durable | The gap is hard to close: it rests on something competitors cannot copy cheaply or quickly (data, trust, distribution, a different model). | It is a feature competitors can add in a release. | Evidence a competitor can ship it within the stated horizon, or has started. |
| C3 Customers would switch | The pain of the current solution is larger than the cost of switching. | Customers stay with what they have. | Independent customer evidence that switching costs or habit outweigh the pain. |
| C4 Position is claimable | There is a position customers can understand and believe, which competitors do not already occupy. | The position is taken or unbelievable. | A competitor already owns the same message with evidence customers believe it. |

## Method

1. **Set criteria and weights** (above). Record the evidence for each.
2. **Score from evidence, not impressions.** Score each competitor and our intended position on each criterion with a 0 to 3 scale defined in the protocol (for example 0 absent, 1 weak, 2 adequate, 3 strong), each score linked to evidence ids. Unscored is allowed and shown as "unknown". Never fill an unknown with a guess.
3. **Score our product as it is planned, flagged by status:** exists, planned, hoped. Only "exists" counts as parity in the base case; show the planned case separately.
4. **Capability matrix and position map.** Build the matrix. Add a two-axis map using the two criteria that best separate competitors, and say why those two. Show the weighted result and the unweighted result, plus how the ranking changes when each weight moves by one step.
5. **Run each classic frame as a check, not decoration:** jobs-to-be-done fit, switching barriers, and moats and threats (what stops a competitor, or a large adjacent platform, copying us). Use SWOT or similar only if it adds something the matrix doesn't.
6. **Anticipate responses.** For the top threats, write the most likely reaction and what evidence would show it starting (hiring, releases, pricing moves). List these as leading indicators to monitor.
7. **Pricing and positioning landscape:** what competitors charge and claim, where the unoccupied positions are, and why they may be unoccupied (no demand is a valid reason).

## Honesty section (required): "Where we lose"

Write the strongest case that a customer would choose a competitor or do nothing instead, competitor by competitor, using the customer's own reasons. State which of our planned advantages are unproven. A report with an empty or token "Where we lose" section is rejected by the skeptic.

## Disconfirming search (required)

At least the tier minimum per hypothesis, built to show the gap is not real or is closing: customers praising the incumbent, recent releases or announcements closing the gap, successful entrants with our position, failed attempts at our position, and reasons the position was left empty.

## Extra outputs in the report

After Findings, add:

- **Criteria and weights**, with evidence and the pre-registration reference.
- **Capability matrix** with scores, evidence ids and unknowns.
- **Sensitivity of the ranking** to the weights and to the planned-versus-existing split.
- **Where we lose.**
- **Moats and threats**, with leading indicators to watch.
- **Positioning options:** two or three, each with the evidence, the risk and what would prove it wrong.
- **Primary research that would settle what desk work could not** (for example customer switching tests, message tests).

## Protocol additions (pre-registered)

Add a **Type-specific checks** section: the criteria, weights and scoring scale; the rule that unknown is not zero; the rule that only existing capabilities count in the base case; and the list of competitors taken from the scan, with its report id. The skeptic checks that criteria predate the scoring, that every score has evidence, and that "Where we lose" is real.

## Verdict mapping

Use the framework's study verdicts. C1 or C2 contradicted at high confidence is Stop; contradicted at medium confidence is Reshape (the positioning). C1 supported only by "unknown" scores is Insufficient evidence.
