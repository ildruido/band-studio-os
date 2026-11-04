---
name: market-analysis
description: Analyse and size a market (TAM, SAM, SOM) with triangulated top-down and bottom-up estimates, explicit assumptions with ranges, sensitivity checks and a disconfirming-evidence search. Use before a go/no-go, pricing or positioning decision that depends on how big or how healthy a market is.
---

# Market analysis and sizing

A type layer on the `research-protocol` skill: follow every step of it, plus what this skill adds. It never removes a generic guardrail. Method: `docs/research/framework.md`.

Product facts (what is sold, to whom, where, how it earns) come from the project's instructions and product docs. This skill stays generic.

**Default tier: standard.** Use deep when a go/no-go, investment or pricing decision rests on the number. A market size is the easiest figure to inflate, so the guardrails are strict.

## Before pre-registering

Fix the **sizing definition** with the product owner if the product docs don't settle it. Ask one question at a time, each with your recommended answer:

- **Unit of count:** who or what is counted (customers, accounts, households, organisations)?
- **Value basis:** revenue per year at which price and model?
- **Geography and time:** which markets, which year, which horizon (now, three years)?
- **Segment boundary:** who is in, who is out.

Record it in the protocol. Changing it later is a logged deviation.

## Standard hypotheses

Pre-register all of these, with numbers in each kill criterion set before searching. M1 and M2 are key unless the protocol says otherwise. You may add more; don't drop these.

| Id | Hypothesis | Null or strongest alternative | Example kill criterion |
| --- | --- | --- | --- |
| M1 Big enough | The reachable market (SAM) clears the minimum the business needs (a threshold the product owner sets before the search). | It is too small to sustain the business. | Sourced estimates put the base-case SAM and the high case below the threshold. No usable estimate is Insufficient evidence, not a trigger. |
| M2 Methods agree | Top-down and bottom-up estimates fall within 3x of each other, or the gap has a sourced explanation. | The two disagree and we cannot tell which is right. | A method check, so no kill criterion of its own: a gap above 3x with no sourced explanation gives Insufficient evidence, never an average and never Proceed. |
| M3 Payers exist | The target segment already spends money on comparable solutions. | They get this done free or not at all. | Independent evidence that the segment does not pay for comparable solutions. No evidence either way is Insufficient evidence. |
| M4 Healthy trend | The segment is stable or growing over the last 3 to 5 years. | It is shrinking or the spend is moving elsewhere. | Independent evidence of decline in the unit count or spend. |
| M5 Reachable | There is an identifiable, affordable way to reach the buyers at the assumed cost. | Buyers exist but cannot be reached at a viable cost. | Every identified channel costs more per customer than the customer's value. |

## Method

1. **Count units, not dollars first.** Establish the number of units (bottom-up) from the most primary source available (registries, official statistics, platform data, trade bodies). Then apply price.
2. **Bottom-up:** reachable units x share that has the need x share that would realistically pay x realistic price x purchase frequency. Every factor is an entry on the assumptions sheet.
3. **Top-down:** start from a published larger market, narrow by segment, geography and who pays. Trace the larger figure to its origin. If the origin is a paid report summary, treat it as grade D and find the underlying data or say it is a lead only.
4. **Third check when possible (analogue or proxy):** the size or spend of a similar market, or the revenue of known players divided by their likely share. This catches errors the first two share.
5. **Ranges, not points.** Every assumption has low, base and high values and a source or the label `(Assumption)`. Compute TAM, SAM and SOM at low, base and high. A point estimate alone is a failed output.
6. **Sensitivity.** Vary each assumption alone across its range and rank by swing. Report the top three. If one assumption drives more than half the swing and has no grade A or B source, say the number rests on it.
7. **Reconcile.** Compare the methods. Explain any gap with named assumptions. Never average two methods to hide a gap.
8. **Penetration reality check:** SOM must follow from a stated reach, conversion and time path, not from "1% of the market". Compare it with the realistic share that comparable products reached, with evidence.

Use the sheet in [sizing-sheet-template.md](sizing-sheet-template.md), saved as `sizing.md` in the study folder. The skeptic reads its inputs (definition, assumptions, bottom-up, top-down, third check) first and its Reconciliation, Sensitivity and Result sections only after forming its own view; the protocol's Type-specific checks names the file.

## Source rules

- A market size from a vendor, a market-research seller or an AI summary is a lead. Trace it to its method; if it has none, it cannot carry a claim.
- Count a statistic once however many pages repeat it. Record its date, geography and definition; mismatched definitions (for example "users" versus "paying customers") are the commonest error. Reject or adjust, and log it.
- Currency, year and price basis are recorded for every figure. Convert explicitly.
- Growth forecasts from sellers of reports are grade D. Prefer observed history over forecasts.

## Disconfirming search (required)

Per hypothesis, at least the tier minimum of searches built to find it false: evidence the segment is smaller, shrinking, or doesn't pay; reasons similar markets stayed small; failed companies that targeted this segment and why; estimates well below yours. Search for the figure that would embarrass you. Log what was found and what was not.

## Extra outputs in the report

After Findings, add:

- **Sizing summary:** a table with TAM, SAM and SOM at low, base and high, each with the method and confidence.
- **Assumptions register:** every assumption, its range, source or `(Assumption)`, grade, and sensitivity rank.
- **Reconciliation:** how the methods compare and why any gap exists.
- **Cheapest ways to firm up the top three assumptions** (the primary research that would settle them).

## Protocol additions (pre-registered)

Add a **Type-specific checks** section to the protocol so the skeptic can apply it:

- Any size claim without a traced origin is rejected.
- Definitions of the counted unit match across sources.
- Base-case numbers lie within the sourced range, not outside it.
- The SOM path is stated and not a flat percentage.
- At least one estimate lower than the lead's was sought and logged.

## Verdict mapping

Use the framework's study verdicts. M1 contradicted at high confidence is Stop. M2 insufficient is Needs primary research, never Proceed.
