# Inception status

Live tracker for the 11 exit criteria (canonical list: [workflow.md](workflow.md#exit-criteria)). Last updated: 2026-11-04.

Status values: `not started`, `in progress`, `done`, `ongoing`.

| # | Exit criterion | Status | Notes |
| --- | --- | --- | --- |
| 1 | Refined product foundation doc | in progress | Interview running in thread "Refine product foundation doc" |
| 2 | Validation, market research, riskiest hypotheses | in progress | R-001 reality check and R-002 size check done, both "Needs primary research" ([R-001](../research/R-001-persona-reality-check/report.md), [R-002](../research/R-002-band-count-size-check/report.md)). [Research plan](../research/research-plan.md) approved (D-014): ranks hypotheses, designs 3 experiments. Driver interviews designed as [R-003](../research/R-003-driver-interviews/protocol.md) and parked; fieldwork postponed. Research types built (D-015: `market-analysis`, `competitor-scan`, `competitive-analysis`). Competitor scan [R-004](../research/R-004-competitor-scan/report.md) run: verdict Reshape (coverage contradicted by the skeptic's search; Canva could not be opened, so the gap question needs Ale's hands-on check). Competitive analysis R-005 next |
| 3 | MVP definition and roadmap | not started | |
| 4 | Prototypes (interactive mock-ups) | not started | |
| 5 | Project and repo set up; workflow from `app-studio`; next-steps recommendation | in progress | Project, repo, harness core and CI done; next-steps recommendation pending |
| 6 | Architecture-phase handoff | not started | |
| 7 | Target users and personas | in progress | Provisional (speculative) personas written: [personas.md](personas.md). They need interviews to firm up (see the [research plan](../research/research-plan.md)) |
| 8 | Success metrics | not started | |
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
- The `Harness` check did not auto-start on PR #5. Check that it runs on each PR before merging.
- Canva, Adobe Express and some other sites block automated access from the cloud environment. R-004's key question (is there already a guided gig-campaign tool at a band-friendly price?) needs a person with a browser to try Canva and PosterMyWall.
