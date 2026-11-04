# Inception status

Live tracker for the 11 exit criteria (canonical list: [workflow.md](workflow.md#exit-criteria)). Last updated: 2026-11-04.

Status values: `not started`, `in progress`, `done`, `ongoing`.

| # | Exit criterion | Status | Notes |
| --- | --- | --- | --- |
| 1 | Refined product foundation doc | in progress | Interview running in thread "Refine product foundation doc" |
| 2 | Validation, market research, riskiest hypotheses | not started | Starts with the persona reality check (R-001), run under the new [research framework](../research/framework.md) |
| 3 | MVP definition and roadmap | not started | |
| 4 | Prototypes (interactive mock-ups) | not started | |
| 5 | Project and repo set up; workflow from `app-studio`; next-steps recommendation | in progress | Project, repo, harness core and CI done; next-steps recommendation pending |
| 6 | Architecture-phase handoff | not started | |
| 7 | Target users and personas | not started | Next: the reality check (R-001), then personas grounded in it. Research framework approved by Ale |
| 8 | Success metrics | not started | |
| 9 | Constraints and non-goals | not started | |
| 10 | Decision log kept current | ongoing | See [decision-log.md](decision-log.md) |
| 11 | Ale's sign-off | not started | Last step, via `exit-gate` |

## Open PRs awaiting Ale


- `app-studio` #20 (draft): harness change proposals from the consistency review. Awaiting Ale's review.

## Risks

- The research guardrails are untested: R-001 is their first run, so expect to tune them after it.
- Standard-tier research uses one extra agent run (the skeptic), deep tier two. That costs usage on the Pro plan.
- CI covers docs and harness files only; there are no code tests during inception.
- The `Harness` check did not auto-start on PR #5. Check that it runs on each PR before merging.
