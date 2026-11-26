# Inception status

Live tracker for the 11 exit criteria (canonical list: [workflow.md](workflow.md#exit-criteria)). Last updated: 2026-11-26 (design system committed to the repo, D-053; rights desk study R-008, D-044 to D-046; short-video proof of concept R-009, D-047 to D-049).

Status values: `not started`, `in progress`, `done`, `ongoing`.

| # | Exit criterion | Status | Notes |
| --- | --- | --- | --- |
| 1 | Refined product foundation doc | done | [product-foundation.md](product-foundation.md), refined with Ale |
| 2 | Validation, market research, riskiest hypotheses | in progress (desk research done; fieldwork with Ale) | Desk research R-001 to R-008 is done (R-008 image rights: [Reshape](../research/R-008-image-rights/report.md), D-044 to D-046; H-07 partly supported, L8 stays blocked). Fieldwork (driver interviews, blind output test, price test) is run by Ale in parallel. Detail: R-001 reality check and R-002 size check done, both "Needs primary research" ([R-001](../research/R-001-persona-reality-check/report.md), [R-002](../research/R-002-band-count-size-check/report.md)). [Research plan](../research/research-plan.md) approved (D-014): ranks hypotheses, designs 3 experiments. Driver interviews designed as [R-003](../research/R-003-driver-interviews/protocol.md) and parked; fieldwork postponed. Research types built (D-015: `market-analysis`, `competitor-scan`, `competitive-analysis`). Competitor scan [R-004](../research/R-004-competitor-scan/report.md) run: verdict Reshape (coverage contradicted by the skeptic's search; Canva could not be opened, so the gap question needs Ale's hands-on check). Round 2 widening done ([addendum](../research/R-004-competitor-scan/addendum-1.md)); Ale declined the hands-on Canva check (D-025); [R-007](../research/R-007-canva-gap-check/report.md) replaces it with desk research plus a Gemini Deep Research route (both done, verdict Needs primary research; skeptic live-fetch re-check owed), then competitive analysis [R-005](../research/R-005-competitive-analysis/report.md) done: Reshape (C2 kill criterion triggered by Bandsintown Boost; Ale accepted and calls Boost an indirect reach competitor, D-027; C1 needs primary research; our planned product scores 76.7 against Canva 79.2). Gemini route for R-005 read; with its unopened sources counted as confirmed (D-026), no verdict changes; the quotes are sponsor-accepted, not verified. Market sizing [R-006](../research/R-006-market-sizing/report.md) done: Needs primary research (Italy plus UK revenue range 16k to 6.4M EUR a year, base 446k; income ladder instead of a threshold, D-022) |
| 3 | MVP definition and roadmap | done | [mvp.md](mvp.md) and [roadmap.md](roadmap.md), approved by Ale 2026-11-25 (D-028, D-029). Assumptions to confirm: E2 before build, pilot of 5 to 10 bands |
| 4 | Prototypes (interactive mock-ups) | in progress (v2.2 user-ready version built, awaiting a first test session) | [Prototype v1](prototypes.md) built and closed (full MVP flow works; design rejected as too functional and generic, D-031). Look adopted ([ux-direction.md](ux-direction.md), D-032). Whole-journey [design alternatives](design-alternatives.md) compared; Ale chose the Gig Wall as the base (D-034). [Prototype v2](prototypes.md) built and confirmed by Ale as is. [Prototype v2.1](prototypes.md) adds draft later journeys, marked Later (D-035); merged (PR #44). v2.2, the user-ready version, is built. [Prototype v3](prototypes.md), the customer app with real navigation and an Italian version, is built (D-050 to D-052). The look is written down in the [design system](../design-system/README.md) (D-053) |
| 5 | Project and repo set up; workflow from `app-studio`; next-steps recommendation | done | Project, repo, harness core and CI done; next-steps recommendation is in the [architecture handoff](architecture-handoff.md#10-next-steps) |
| 6 | Architecture-phase handoff | done (provisional) | [architecture-handoff.md](architecture-handoff.md): direction, options, costs, non-functional targets, privacy, risks, seven spikes, App profile draft and next steps (D-038 to D-040). Independently reviewed by a separate agent; no Ale review needed (autonomy rule). Provisional until the spikes run. The [Product Brief Pack](../brief-pack/index.md) was built first (D-036, D-037) and has been enriched with the result |
| 7 | Target users and personas | done (provisional) | Provisional (speculative) personas written: [personas.md](personas.md). They need interviews to firm up (see the [research plan](../research/research-plan.md)) |
| 8 | Success metrics | done (provisional) | [success-metrics.md](success-metrics.md): North Star decided (D-021); supporting metrics, guardrails and targets are assumptions awaiting Ale's review and E3 |
| 9 | Constraints and non-goals | done | [constraints.md](constraints.md), agreed by Ale (D-016 to D-020) |
| 10 | Decision log kept current | ongoing | See [decision-log.md](decision-log.md) |
| 11 | Ale's sign-off | replaced | Replaced by the autonomy rule (2026-11-25): progress without per-step sign-off, recap on request. Run `exit-gate` for a final check |

## Open PRs awaiting Ale

None. Everything up to PR #50 is merged. Prototype v3 is in this PR ([prototypes.md](prototypes.md), D-050 to D-052).

## Risks

- The target group's size and pain are still unproven by desk research (R-001, R-002). Interviews with Italian band drivers are the next study. Kill-criteria flags on H1 and H3 were read as "not found" (D-013).
- Page fetch tool is blocked in the cloud environment; research opens pages with `curl`. Reddit and Facebook groups are unreachable.
- The research harness passed a one-off consistency review (no conflicts left between the framework, the type skills, the skeptic and the workflow). Harness CI checks only file health, not consistency or behaviour, so new components need a repeat review until a consistency check exists.
- Standard-tier research uses one extra agent run (the skeptic), deep tier two. That costs usage on the Pro plan.
- Prototype v2.2 now has the "Post it for me" and "Keep your wall" screens (they used to fall back to home); all 19 session-menu links were checked at phone width.
- Prototype v2.2 was tested in a headless browser only, not on a real phone or in the Claude in-app browser. The v2.1 thumbnail overlap could not be reproduced, so the fix is by construction.
- The prototype link is private to Ale. It has to be shared from the artifact before anyone else can open it. The prototype artwork is canned: it is not evidence for H-01.
- Video: the R-009 sample uses synthetic art and placeholder sound, was not uploaded to Instagram, and ran on one local CPU core, not the real hosting plan. Rights findings are desk research, not legal advice; Meta's own help pages could not be read.
- CI covers docs and harness files only; there are no code tests during inception.
- App profile Phase set to discovery, undecided values say TBD (D-024). Harness synced to 0.28.1 (latest stable; Project instructions review pending with the coordinator).
- The `Harness` check runs on every PR, and main requires the `health` check, so PRs self-merge when it is green (proven).
- Canva's own pages still return 403 to automated access (Adobe, PosterMyWall, Mew and Simplified open). R-007 used independent reviews for Canva instead. The gap against incumbents narrowed: Simplified and Canva AI 2.0 now advertise a "brief in, campaign out" flow for general businesses; nobody independent tests it for bands. A timed trial is still the missing evidence (Ale declined it, D-025).

## Sub-milestones produced (autonomy rule record)

Kept so Ale can ask for a recap. Newest first. Newest milestones only; earlier ones are in the table above and the decision log.

| Date | Sub-milestone | Where | Notes |
| --- | --- | --- | --- |
| 2026-11-26 | Short-video proof of concept and image-rights desk study (N6, part of N5) | [R-009 report](../research/R-009-short-video-poc/report.md), [sample video](../research/R-009-short-video-poc/spike/sample.mp4) | Template motion works (12 s story renders in ~22 s on one core); AI video deferred (D-047, D-048); rights rules for video (D-049). Not uploaded to Instagram; no lawyer check |
| 2026-11-26 | Data controller decided: Ale, as an individual, for now | [decision-log.md](decision-log.md) (D-043), [architecture handoff](architecture-handoff.md#6-data-privacy-and-rights) | Privacy notice and data list still owed before the first pilot band (pilot parked) |
| 2026-11-25 | Plan to add the discovery ways of working to app-studio, with a code-or-prose second pass | [plan](process-recap/app-studio-plan.md), [code-or-prose pass](process-recap/app-studio-plan-code-or-prose.md) | Plan only: app-studio unchanged, no harness idea filed (Ale decides what to file). Independent review applied to the second pass |
| 2026-11-25 | Stale inception docs fixed | this file, [studies.md](../research/studies.md), `CLAUDE.md` | R-001 verdict corrected; harness version line made version-free |
| 2026-11-25 | Inception recap, skill proposals and one-page summary | [process-recap](process-recap/recap.md) | Independent fact-check applied; eight candidate processes, none built (D-041) |
| 2026-11-25 | Architecture handoff written and independently reviewed | [architecture-handoff.md](architecture-handoff.md) | Recommends the studio web stack plus our own modules; seven spikes; App profile draft |
| 2026-11-25 | Product Brief Pack enriched with the architecture result | [technical-brief.md](../brief-pack/technical-brief.md), [gaps.md](../brief-pack/gaps.md) | Architecture direction red to amber; non-functional targets proposed; integrations and legal updated |
| 2026-11-25 | Decisions D-038 to D-040 logged | [decision-log.md](decision-log.md) | Direction, code-placed text with a swappable provider, review links and the server-side approval gate |
