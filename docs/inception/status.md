# Inception status

Live tracker for the 11 exit criteria (canonical list: [workflow.md](workflow.md#exit-criteria)). Last updated: 2026-11-25.

Status values: `not started`, `in progress`, `done`, `ongoing`.

| # | Exit criterion | Status | Notes |
| --- | --- | --- | --- |
| 1 | Refined product foundation doc | in progress | Interview running in thread "Refine product foundation doc" |
| 2 | Validation, market research, riskiest hypotheses | in progress | R-001 reality check and R-002 size check done, both "Needs primary research" ([R-001](../research/R-001-persona-reality-check/report.md), [R-002](../research/R-002-band-count-size-check/report.md)). [Research plan](../research/research-plan.md) approved (D-014): ranks hypotheses, designs 3 experiments. Driver interviews designed as [R-003](../research/R-003-driver-interviews/protocol.md) and parked; fieldwork postponed. Research types built (D-015: `market-analysis`, `competitor-scan`, `competitive-analysis`). Competitor scan [R-004](../research/R-004-competitor-scan/report.md) run: verdict Reshape (coverage contradicted by the skeptic's search; Canva could not be opened, so the gap question needs Ale's hands-on check). Round 2 widening done ([addendum](../research/R-004-competitor-scan/addendum-1.md)); Ale declined the hands-on Canva check (D-025); [R-007](../research/R-007-canva-gap-check/report.md) replaces it with desk research plus a Gemini Deep Research route (both done, verdict Needs primary research; skeptic live-fetch re-check owed), then competitive analysis [R-005](../research/R-005-competitive-analysis/report.md) done: Reshape (C2 kill criterion triggered by Bandsintown Boost; Ale accepted and calls Boost an indirect reach competitor, D-027; C1 needs primary research; our planned product scores 76.7 against Canva 79.2). Gemini route for R-005 read; with its unopened sources counted as confirmed (D-026), no verdict changes; the quotes are sponsor-accepted, not verified. Market sizing [R-006](../research/R-006-market-sizing/report.md) done: Needs primary research (Italy plus UK revenue range 16k to 6.4M EUR a year, base 446k; income ladder instead of a threshold, D-022) |
| 3 | MVP definition and roadmap | done | [mvp.md](mvp.md) and [roadmap.md](roadmap.md), approved by Ale 2026-11-25 (D-028, D-029). Assumptions to confirm: E2 before build, pilot of 5 to 10 bands |
| 4 | Prototypes (interactive mock-ups) | in progress | [Prototype v1](prototypes.md) built and closed (full MVP flow works; design rejected as too functional and generic, D-031). Look adopted ([ux-direction.md](ux-direction.md), D-032). Whole-journey [design alternatives](design-alternatives.md) compared; Ale chose the Gig Wall as the base (D-034). [Prototype v2](prototypes.md) built and confirmed by Ale as is. [Prototype v2.1](prototypes.md) adds draft later journeys, marked Later (D-035); merged; Ale's review of the wording is the open item |
| 5 | Project and repo set up; workflow from `app-studio`; next-steps recommendation | in progress | Project, repo, harness core and CI done; next-steps recommendation pending |
| 6 | Architecture-phase handoff | not started | Preceded by the Product Brief Pack step (D-036, not an exit criterion): [step 1 inventories](product-brief-pack.md) written and merged; the pack itself is being built in [`docs/brief-pack/`](../brief-pack/index.md) (D-037): scaffolding, source map, content and gap record written (first full version; no component is proven by real bands, see [gaps.md](../brief-pack/gaps.md)); awaiting Ale's review |
| 7 | Target users and personas | in progress | Provisional (speculative) personas written: [personas.md](personas.md). They need interviews to firm up (see the [research plan](../research/research-plan.md)) |
| 8 | Success metrics | done (provisional) | [success-metrics.md](success-metrics.md): North Star decided (D-021); supporting metrics, guardrails and targets are assumptions awaiting Ale's review and E3 |
| 9 | Constraints and non-goals | done | [constraints.md](constraints.md), agreed by Ale (D-016 to D-020) |
| 10 | Decision log kept current | ongoing | See [decision-log.md](decision-log.md) |
| 11 | Ale's sign-off | not started | Last step, via `exit-gate` |

## Open PRs awaiting Ale

- Prototype v2.1 PR (later journeys): awaiting Ale's review; merge held.
- `app-studio` #20 (draft): harness change proposals from the consistency review. Awaiting Ale's review.

## Risks

- The target group's size and pain are still unproven by desk research (R-001, R-002). Interviews with Italian band drivers are the next study. Kill-criteria flags on H1 and H3 were read as "not found" (D-013).
- Page fetch tool is blocked in the cloud environment; research opens pages with `curl`. Reddit and Facebook groups are unreachable.
- The research harness passed a one-off consistency review (no conflicts left between the framework, the type skills, the skeptic and the workflow). Harness CI checks only file health, not consistency or behaviour, so new components need a repeat review until a consistency check exists.
- The research guardrails are untested: R-001 is their first run, so expect to tune them after it.
- Standard-tier research uses one extra agent run (the skeptic), deep tier two. That costs usage on the Pro plan.
- The prototype link is private to Ale. It has to be shared from the artifact before anyone else can open it. The prototype artwork is canned: it is not evidence for H-01.
- CI covers docs and harness files only; there are no code tests during inception.
- App profile Phase set to discovery, undecided values say TBD (D-024). Harness synced to 0.28.1 (latest stable; Project instructions review pending with the coordinator).
- Harness synced to 0.22.1 ( no feature modules, App profile unchanged except the Decision log row pointing at `docs/inception/decision-log.md`). Earlier: harness moved to 0.18.3 (D-023, PR #24; self-merge proof PR #25). The `Harness` check now runs on every PR. Main must require the `health` check in GitHub settings (one-time click by Ale) so PRs can merge by themselves.
- Canva's own pages still return 403 to automated access (Adobe, PosterMyWall, Mew and Simplified open). R-007 used independent reviews for Canva instead. The gap against incumbents narrowed: Simplified and Canva AI 2.0 now advertise a "brief in, campaign out" flow for general businesses; nobody independent tests it for bands. A timed trial is still the missing evidence (Ale declined it, D-025).
