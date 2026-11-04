---
name: competitor-scan
description: Identify and profile every way the target customer solves the problem today, direct and indirect, including substitutes, DIY, doing nothing and failed or dead products, each verified at its primary source. Use before any competitive analysis, positioning or differentiation decision.
---

# Competitor identification and scan

A type layer on the `research-protocol` skill: follow every step of it, plus what this skill adds. It never removes a generic guardrail. Method: `docs/research/framework.md`.

Product facts (the job, the target customer, the market) come from the project's instructions and product docs. This skill stays generic. The output feeds the `competitive-analysis` skill.

**Default tier: standard.** A missed competitor invalidates every later comparison, so coverage matters more than depth here.

## Define competition from the customer's side

Start from the **job the customer is trying to get done**, not from our product category. Competitors are anything the customer uses, or could use, to get that job done. Write the job statement in the protocol before searching ("When ___, I want to ___, so I can ___").

Classify every candidate:

| Class | Meaning |
| --- | --- |
| Direct | Same job, same customer, same kind of solution. |
| Indirect | Same job, different kind of solution (a different product category, a service, a platform feature). |
| Substitute | Meets the underlying need differently (a different behaviour altogether). |
| Non-consumption and DIY | The customer does it by hand, with free tools, friends, freelancers or does nothing. Often the biggest competitor. |
| Adjacent entrant | Not in the space now, but already has the customers, data or distribution to enter (a larger platform adding the feature). |
| Dead or failed | Products that tried and stopped, and why. They are evidence, not trivia. |

## Standard hypotheses

Pre-register these, with numbers in each kill criterion set before searching. S1 and S2 are key.

| Id | Hypothesis | Null or strongest alternative | Example kill criterion |
| --- | --- | --- | --- |
| S1 Coverage | The scan found the relevant set of ways the job gets done, in every class above. | Important competitors are missing. | A discovery method not yet used (see below) still turns up a relevant competitor in its last round, or fewer than the minimum classes are covered. |
| S2 Gap exists | No competitor serves the target customer's job well on the criterion we care about. | An existing solution already serves it. | A verified competitor offers it to the target customer at a price and effort they can bear. |
| S3 Crowding | The space is not so crowded that a new entrant cannot get attention. | Strong incumbents dominate the customer's attention. | The leading players share is above the threshold set in the protocol, with evidence. |
| S4 Incumbent inertia | Direct incumbents and adjacent platforms are not about to close the gap. | A visible roadmap or trend is closing it. | Dated evidence (releases, announcements, hiring, funding) that an incumbent is moving into the gap. |

## Discovery: use many routes, stop on saturation

Single-route searches miss competitors. Use at least five of these routes, and log which found what:

1. Search by the **job** in customer language, not by category names.
2. Search by the **category** names (and their synonyms in each launch language).
3. App stores and marketplaces, with the category and the job words.
4. "Alternatives to X" and "X vs Y" pages for already-known names (treat as leads, because they are often affiliate content).
5. Community threads where target customers ask "what do you use for…?" (grade B; also read what they say about leaving a tool).
6. Review sites and complaint threads.
7. Funding, accelerator and launch databases (new entrants) and shut-down or "sunset" announcements (dead products).
8. Job postings, patents or integration directories of adjacent platforms (entrants).
9. Ask the evidence: what do the customers in the sources actually use? Names that customers mention and the list lacks must be added.

**Saturation rule (pre-register the numbers):** stop only when two successive routes yield no new relevant competitor, and at least the minimum number of routes ran. A scan that stopped when the list "felt complete" is unsound.

## Profile each competitor

Use [competitor-entry-template.md](competitor-entry-template.md). The rules:

- Verify every fact at the **primary source** (the competitor's own site, pricing page, store listing, terms, changelog, filings) and quote it with the access date. Cache nothing from memory.
- Separate **what they claim** from **what customers say**. Marketing claims are grade D for quality; customer voices are grade B.
- Record price as the real price (plan, limits, currency, date), including free tiers.
- Record traction signals only with a source (reviews count, downloads, funding, headcount, last update date). Mark stale products (no update in 12 months) as such.
- Record weaknesses from customer complaints and independent reviews, not from guesses.

## Disconfirming search (required)

Per key hypothesis, at least the tier minimum of searches built to find it false: a competitor that already does our job; customers saying an existing tool is good enough; evidence that incumbents are adding the feature; search the DIY and non-consumption class on purpose, because it is the easiest to overlook. Search for dead products in the same space and read why they died.

## Extra outputs in the report

After Findings, add:

- **Landscape table:** every candidate, its class, status (active, stale, dead), and the evidence ids.
- **Discovery log:** routes used, queries, what each found, and the saturation test result.
- **Excluded candidates** and the reason for each (so the exclusion can be challenged).
- **Customer-chosen alternatives:** what customers actually use, ranked by evidence, regardless of whether it looks like a competitor.
- **Open gaps in coverage:** languages, regions, closed communities or paywalled sources not searched.

## Protocol additions (pre-registered)

Add a **Type-specific checks** section: the job statement; the minimum routes and the saturation numbers; the rule for what counts as relevant; and that every profile fact has a primary-source quote and date. The skeptic runs two discovery routes of its own and logs any competitor the scan missed. A missed relevant competitor is a must-fix.
