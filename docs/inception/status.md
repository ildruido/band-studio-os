# Inception status

Live tracker for the 11 exit criteria (canonical list: [workflow.md](workflow.md#exit-criteria)). Last updated: 2026-11-04.

Status values: `not started`, `in progress`, `done`, `ongoing`.

| # | Exit criterion | Status | Notes |
| --- | --- | --- | --- |
| 1 | Refined product foundation doc | in progress | Interview running in thread "Refine product foundation doc" |
| 2 | Validation, market research, riskiest hypotheses | in progress | R-001 reality check and R-002 size check done, both "Needs primary research" ([R-001](../research/R-001-persona-reality-check/report.md), [R-002](../research/R-002-band-count-size-check/report.md)). [Research plan](../research/research-plan.md) approved (D-014): ranks hypotheses, designs 3 experiments. Driver interviews designed as [R-003](../research/R-003-driver-interviews/protocol.md) and parked; fieldwork postponed. Research types built (D-015: `market-analysis`, `competitor-scan`, `competitive-analysis`). Competitor scan [R-004](../research/R-004-competitor-scan/report.md) run: verdict Reshape (coverage contradicted by the skeptic's search; Canva could not be opened, so the gap question needs Ale's hands-on check). Round 2 widening done ([addendum](../research/R-004-competitor-scan/addendum-1.md)); waiting on Ale's [hands-on Canva check](../research/R-004-competitor-scan/hands-on-check.md), then competitive analysis (next free R- number). Market sizing [R-006](../research/R-006-market-sizing/report.md) done: Needs primary research (Italy plus UK revenue range 16k to 6.4M EUR a year, base 446k; income ladder instead of a threshold, D-022) |
| 3 | MVP definition and roadmap | not started | |
| 4 | Prototypes (interactive mock-ups) | not started | |
| 5 | Project and repo set up; workflow from `app-studio`; next-steps recommendation | in progress | Project, repo, harness core and CI done; next-steps recommendation pending |
| 6 | Architecture-phase handoff | not started | |
| 7 | Target users and personas | in progress | Provisional (speculative) personas written: [personas.md](personas.md). They need interviews to firm up (see the [research plan](../research/research-plan.md)) |
| 8 | Success metrics | done (provisional) | [success-metrics.md](success-metrics.md): North Star decided (D-021); supporting metrics, guardrails and targets are assumptions awaiting Ale's review and E3 |
| 9 | Constraints and non-goals | done | [constraints.md](constraints.md), agreed by Ale (D-016 to D-020) |
| 10 | Decision log kept current | ongoing | See [decision-log.md](decision-log.md) |
| 11 | Ale's sign-off | not started | Last step, via `exit-gate` |

## Open PRs awaiting Ale


- `app-studio` #20 (draft): harness change proposals from the consistency review. Awaiting Ale's review.

## Risks

- The target group's size and pain are still unproven by desk research (R-001, R-002). Interviews with Italian band drivers are the next study. Kill-criteria flags on H1 and H3 were read as "not found" (D-013).
- Page fetch tool is blocked in the cloud environment; research opens pages with `curl`. Reddit and Facebook groups are unreachable.
- The research harness passed a one-off consistency review (no conflicts left between the framework, the type skills, the skeptic and the workflow). Harness CI checks only file health, not consistency or behaviour, so new components need a repeat review until a consistency check exists.
- The research guardrails are untested: R-001 is their first run, so expect to tune them after it.
- Standard-tier research uses one extra agent run (the skeptic), deep tier two. That costs usage on the Pro plan.
- CI covers docs and harness files only; there are no code tests during inception.
- App profile Phase set to discovery, undecided values say TBD (D-024). Harness synced to 0.24.9 (latest stable).
- Harness synced to 0.22.1 ( no feature modules, App profile unchanged except the Decision log row pointing at `docs/inception/decision-log.md`). Earlier: harness moved to 0.18.3 (D-023, PR #24; self-merge proof PR #25). The `Harness` check now runs on every PR. Main must require the `health` check in GitHub settings (one-time click by Ale) so PRs can merge by themselves.
- Canva, Adobe Express and some other sites block automated access from the cloud environment. R-004's key question (is there already a guided gig-campaign tool at a band-friendly price?) needs a person with a browser to try Canva and PosterMyWall.
