# Inception process recap (for AI readers)

Status: **first version, 2026-11-25**, written after the architecture handoff merged (PR #49). Scope: what the Band Studio OS inception actually did, in order, with the tools it used and what it learned. Source of truth for every claim is the repo: [workflow.md](../workflow.md), [status.md](../status.md), the [decision log](../decision-log.md) (D-001 to D-040), merged PRs #1 to #49, [studies.md](../../research/studies.md), [prototypes.md](../prototypes.md), [architecture-handoff.md](../architecture-handoff.md). Items marked **(memory)** come from project memory, not from the repo, and are not independently checkable there. Companion files: [skill-proposals.md](skill-proposals.md) and the one-page human version [inception-in-one-page.md](inception-in-one-page.md).

Not covered: anything after PR #49 (prototype v2.2 was still running in parallel **(memory)**), field research (not run), and the exit-gate sign-off (not run; `exit-gate.md` does not exist).

## 1. Shape of the process

- **Dates:** two bursts, 2026-11-04 (setup, foundation, research framework, constraints, early studies) and 2026-11-25 (R-007, R-005, MVP, prototypes, brief pack, architecture handoff). Harness syncs in between (2026-11-18).
- **Unit of work:** one artifact, one PR, one decision-log entry. 49 PRs merged (#1 and #2 before the `Harness` check existed; from #3 on, self-merged when it was green). Most carry a decision entry; two early commits (bf62f63 with D-001 and D-002, and 306bedf) went straight to `main`. No code tests exist; not every PR description says so.
- **Roles:** Ale (product owner, decides product questions, one at a time with a recommended answer), Claude threads (interview, research, draft, prototype, log), a coordinator that opens threads and keeps the order, and independent agents for review.
- **Control documents:** `workflow.md` (order, exit criteria, artifacts), `status.md` (tracker of the 11 exit criteria, open PRs, risks, sub-milestone record), `decision-log.md` (every product decision, same turn).
- **Mode change:** early on Ale approved each artifact. On 2026-11-25 Ale switched to an **autonomy rule (memory)**: progress to the next milestone, self-merge on green CI, keep a record of sub-milestones, give a recap on request. D-037 records "go ahead without a plan sign-off"; D-038 to D-040 cite the autonomy rule.

## 2. Phases in order

| # | Phase | Dates | Inputs | Outputs | Gate | Tools used | PRs and decisions |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | Set up the inception layer | 11-04 | Ale's starting idea; app-studio harness (build-phase only) | `workflow.md`, 11 exit criteria, project skills, Inception profile in `CLAUDE.md`, harness core and `Harness` CI installed early, `status.md` | Ale agrees the layer and exit criteria | Skills written in this phase (`inception-interview`, `decision-log` and others); harness core | #2 to #6 (D-001 and D-002 arrived in direct commit bf62f63, no PR number); D-001 to D-004 |
| 1 | Foundation | 11-04 | `starting-idea.md` | `product-foundation.md`; first product decisions (driver is the V1 user, light Identity Studio, no genre limit, monetization, export-only) | Ale approves the document | `inception-interview` | #7; D-005 to D-009 |
| 2 | Research framework | 11-04 | Ale's demand for bias-guarded research | `framework.md`, skills `research-protocol`, `persona-validation`, agent `research-skeptic`, tiers light/standard/deep | Ale approves the framework | skill authoring | #8; D-010, D-011 |
| 3 | Reality check, personas, plan | 11-04 | Framework | R-001 and R-002 (both "Needs primary research"), provisional personas, ranked hypotheses and 3 experiments, R-003 interviews designed and parked | Skeptic review per study; Ale approves the plan | `persona-validation`, `research-protocol`, `research-skeptic` | #9 to #12; D-012 to D-014 |
| 4 | Research types | 11-04 | Need for market and competitor work | `market-analysis`, `competitor-scan`, `competitive-analysis` skills; a consistency review whose findings were fixed | Consistency review | independent consistency review | #13, #17; D-015 |
| 5 | Constraints, metrics | 11-04 | Interviews with Ale | `constraints.md`, `success-metrics.md` (North Star: approved campaigns per month; targets left for later) | Ale agrees | `inception-interview` | #14 to #16, #18, #19; D-016 to D-021 |
| 6 | Competitors and market size | 11-04 to 11-25 | Protocols fixed before searching | R-004 scan (Reshape), round 2 widening, R-006 sizing (Needs primary research), R-007 Canva gap check, R-005 competitive analysis (Reshape; Bandsintown Boost triggers kill criterion C2) | Skeptic re-checks sources; Ale accepts or overrides the verdict | `competitor-scan`, `market-analysis`, `competitive-analysis`, `research-skeptic`, `curl`, Gemini Deep Research (paste-back) | #20 to #22, #36, #37; D-022, D-025 to D-027 |
| 7 | MVP and roadmap | 11-25 | Foundation, personas, research verdicts | `mvp.md` (setup and pre-gig only, free pilot), `roadmap.md` (Now/Next/Later, undated) | Ale approves | `inception-interview`, `product-management:write-spec` and `roadmap-update` (planned) | #38, #39; D-028, D-029 |
| 8 | Prototype and design loop | 11-25 | MVP | v1 (rejected as too functional and generic), UX direction, three whole-journey design alternatives, Gig Wall chosen, v2 (confirmed), v2.1 with later journeys marked Later | Ale reviews each build | `prototype`, Artifacts (`frontend-design` planned) | #40 to #44; D-030 to D-035 |
| 9 | Product Brief Pack | 11-25 | Everything above | Inventory and gap table, then `docs/brief-pack/` (index, nine theme files, glossary, red-amber-green `gaps.md`, source map) | Autonomy: no sign-off; honest gaps | `inception-interview` | #45 to #48; D-036, D-037 |
| 10 | Architecture handoff | 11-25 | MVP, constraints, brief pack | `architecture-handoff.md` (direction, options, costs, non-functional targets, privacy, risks, seven spikes, App profile draft, next steps); brief pack enriched | Independent Opus review; no Ale review (autonomy rule) | `architecture-handoff`, independent reviewer agent | #49; D-038 to D-040 |
| – | Harness upkeep (runs alongside) | 11-04 to 11-18 | New app-studio versions | Synced from 0.4.0 to 0.28.1; project-instruction reviews recorded | `Harness` CI and health check | `harness-sync` | #23, #24, #26, #28, #31, #32, #34 (syncs); #29, #33, #35 (instruction reviews); #25, #27, #30 (follow-ups: self-merge proof note, App profile Phase, owner-neutral skills); D-023, D-024 |

Not yet done: exit gate (`exit-gate` not run), fieldwork (R-003 interviews, blind output test, price test; Ale runs these in parallel **(memory)**), prototype v2.2 (in parallel), final sign-off (replaced by autonomy rule plus recap on request **(memory)**).

## 3. Skills, agents and tools actually used

Evidence is the workflow table, PR titles and study files. Where the repo does not show a skill being used, it says so.

| Item | Kind | Used for | Evidence of use |
| --- | --- | --- | --- |
| `inception-interview` | skill | Foundation, personas, constraints, metrics, MVP, brief pack | Planned in the workflow.md artifact table; no direct trace in the repo |
| `decision-log` | skill (since replaced by `decisions.mjs`) | D-001 to D-040 | decision-log.md |
| `research-protocol` | skill | Every study: questions and kill criteria fixed before searching | studies.md, protocol.md per study |
| `persona-validation` | skill | R-001, R-002 (part A) | studies.md |
| `competitor-scan`, `competitive-analysis`, `market-analysis` | skills | R-004, R-005, R-006 (R-007 as a scan follow-up) | studies.md |
| `research-skeptic` | agent | Independent source re-check on standard studies (R-003 not run) | "Skeptic review" sections in the R-001, R-004, R-005, R-006 and R-007 reports; it often had to work from saved copies because Canva and others blocked live fetches |
| `prototype` | skill | v1, v2, v2.1 | prototypes.md |
| `architecture-handoff` | skill | The handoff | architecture-handoff.md |
| `harness-sync` | skill | Harness updates | PR titles |
| `riskiest-hypotheses` | skill | **Not visibly used:** the planned `market-and-hypotheses.md` does not exist; the ranking lives in [research-plan.md](../../research/research-plan.md) (D-014) | file listing |
| `exit-gate` | skill | **Not yet run:** no `exit-gate.md` | file listing |
| `planner`, `qa`, `reviewer` agents; `build-feature`, `release`, `test-handoff` | harness build-phase | Not used in inception (by design) | CLAUDE.md |
| Independent reviewer (Opus agent) | agent | Cold review of the architecture handoff: 3 critical and 8 important findings, all fixed or recorded | architecture-handoff.md "Independent review" |
| `product-management:*`, `frontend-design`, `anthropic-skills:deep-research` | plugin skills | Planned for spec, roadmap and design work (named in the Inception profile) | Named in workflow.md only; actual use is not shown in the repo |
| Gemini Deep Research | external tool | Second, independent research route for R-007 and R-005; Ale runs it from a neutral prompt and pastes the text back | [R-007](../../research/R-007-canva-gap-check/report.md), [R-005 gemini-prompt](../../research/R-005-competitive-analysis/gemini-prompt.md), D-025, D-026 |
| `curl` | tool | Opening web pages, since the page-fetch tool is blocked in the cloud | status.md risks |
| Artifacts (HTML) | output | Prototypes and design boards | prototypes.md, design-alternatives.md |

## 4. Lessons learned

Each lesson says what happened and what to do next time.

1. **A tool you cannot reach should not block a study.** Canva returned 403 to automated access, so R-004 could not settle the gap question. Ale declined the hands-on check (D-025). R-007 replaced it with two independent routes: desk research on independent reviews, plus a Gemini Deep Research report. *Next time:* offer the two-route design up front when a key source is unreachable.
2. **Know what the environment cannot read.** The page-fetch tool is blocked (use `curl`), Reddit and Facebook groups are unreadable, Gemini share links are unreadable **(memory)**. *Next time:* ask for exported text, and say which sources were never opened.
3. **Sponsor override must be labelled.** D-026 counted Gemini's unopened sources as confirmed. The reports label them "sponsor-accepted, not opened", and a second skeptic pass found no verdict change. *Next time:* keep the label; do not let it upgrade evidence grades silently.
4. **The skeptic earns its cost.** On R-004 the skeptic contradicted the coverage claim, which forced Reshape (see the "Skeptic review" sections in the R-001, R-004, R-005, R-006 and R-007 reports). Caution: the R-001 row in `studies.md` repeats the R-004 verdict word for word, but its report says "Needs primary research"; the row looks like a copy error. The skeptic must re-check sources itself and reach its own verdict before reading the lead's.
5. **Pre-registered kill criteria bite.** R-005's C2 was triggered by Bandsintown Boost, forcing Reshape. Ale accepted the meaning rather than overriding it (D-027).
6. **Check consistency across components, not only files.** CI checks file health only. A one-off consistency review of the research components found conflicts that PR #17 fixed. *Next time:* repeat a consistency review whenever a new skill or agent joins.
7. **Parallel threads collide on ids.** Constraints decisions were renumbered because D-015 was taken by research types (#15). *Next time:* the coordinator reserves id ranges per thread and every thread re-checks `main` and open PRs before merging.
8. **Design first, then prototype.** Prototype v1 worked but was rejected as too functional and generic (D-031). The fix was a loop: UX direction, three whole-journey alternatives, one chosen with ideas kept from the others (D-033, D-034), then v2 and v2.1. Prototype art is canned and is not evidence of output quality; the blind test decides that.
9. **A bundle of artifacts needs a source of truth for outputs.** The Product Brief Pack (D-036, D-037) gathered insider documents into plain-language files with a separate red-amber-green gap record, so caveats do not leak into decks. Building it exposed that a tracker row (foundation) lagged behind reality. *Next time:* the inventory step should also reconcile `status.md`.
10. **Independent review earns its keep on big documents.** The cold Opus review of the architecture handoff found 3 critical and 8 important issues (text generation adapter, AI-content marking, privacy items before the pilot, cost table, approval default, spike criteria). Two were recorded rather than fixed.
11. **Harness drift is constant.** Seven sync or migrate PRs moved the repo from 0.4.0 to 0.28.1 and three project-instruction reviews were logged; build-phase skills stayed unused. The harness core was installed early only so CI guarded docs (D-004).
12. **Autonomy needs a record.** Under the autonomy rule, decisions are made without sign-off, so `status.md` keeps a sub-milestone table and Ale gets a recap on request. This document is that recap at the process level.
13. **Generic skills, specific profile.** Skills stay product-neutral and read facts from the Inception profile in `CLAUDE.md` (D-003; PR #30 made them owner-neutral), so they can go to the harness later via `harness-idea`.

## 5. Gaps and cautions

- Several findings rest on desk research only; field research is outstanding. Verdicts are "Reshape" and "Needs primary research", not validation.
- The workflow table lists `market-and-hypotheses.md` and `exit-gate.md`, which do not exist. Treat the table as a plan, not an inventory.
- `status.md` is stale in several places: rows 1 and 7 read "in progress"; the v2.1 PR is listed as awaiting review although #44 merged; risks still say the project-instructions review is pending although #35 recorded it; two risk lines name different harness versions (0.28.1 and 0.22.1). Reconcile before the exit gate.
- The R-001 verdict in `studies.md` looks wrong (see lesson 4).
- `CLAUDE.md` still says the harness core is "v0.4.1, pinned" while `.claude/studio/lock.json` says 0.28.1.
- Use of plugin skills (`product-management:write-spec`, `roadmap-update`, `frontend-design`, `deep-research`) and of `inception-interview` and `decision-log` rests on the workflow plan table, not on a trace in the repo.
- Prototype v2.1 is the last prototype in the repo; v2.2 is running in parallel **(memory)**.
