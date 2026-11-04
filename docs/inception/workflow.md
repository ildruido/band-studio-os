# Inception workflow

How Ale and Claude run the Inception phase of Band Studio OS. It comes before the build-phase harness from `app-studio`, which only takes over once inception closes.

## Why a separate layer

`app-studio` is built for the code phase. Its skills and agents (`prd-intake`, `build-feature`, `test-handoff`, `release`, `new-app`, `harness-sync`; `planner`, `reviewer`, `qa`) expect a repo with npm, `docs/PRD.md`, `docs/BACKLOG.md`, CI and releases. Nothing in it covers discovery. This layer fills that gap and then hands over to it.

The harness core (the version pinned in `.claude/studio/lock.json`) is already installed, only so its health check and the `Harness` workflow guard this repo during inception (D-004). Its build-phase skills are not used until inception closes.

Decisions: D-001 and D-004 in the [decision log](decision-log.md).

## Roles

- **Ale (PO/PM):** owns the vision, answers questions, approves each artifact, and signs off the end of inception.
- **Claude:** interviews, researches, drafts, prototypes, keeps the decision log, and checks the exit gate.

## Exit criteria

Inception closes when all 11 are met (D-002). The `exit-gate` skill scores them.

1. Refined product foundation doc (vision, value prop, key product artifacts)
2. Initial validation, market research and riskiest hypotheses
3. Clear MVP definition and roadmap
4. Prototypes (quick interactive mock-ups) showing the concept
5. Artifacts produced; project and app repo set up; workflow initialized from `app-studio`; minimal next-steps recommendation
6. Architecture-phase handoff (product architecture and project meta-architecture: extra skills, plugins or agents on top of `app-studio`)
7. Target users and personas
8. Success metrics
9. Constraints and non-goals
10. Decision log kept current
11. Ale's final sign-off

## Artifacts

All of them live in `docs/inception/`, one PR per artifact. Typos and decision log entries may go straight to `main` (see `CLAUDE.md` for the cloud-session limit).

| # | Artifact | File | Made with | Exit criterion |
| --- | --- | --- | --- | --- |
| 1 | Product foundation (vision, value prop, key product artifacts), refined from `starting-idea.md` | `product-foundation.md` | `inception-interview` | 1 |
| 2 | Target users and personas | `personas.md` | `inception-interview` | 7 |
| 3 | Market scan and riskiest hypotheses | `market-and-hypotheses.md` | `riskiest-hypotheses` | 2 |
| 4 | Success metrics | `success-metrics.md` | `inception-interview` | 8 |
| 5 | Constraints and non-goals | `constraints.md` | `inception-interview` | 9 |
| 6 | MVP definition and roadmap | `mvp-and-roadmap.md` | `inception-interview` + `product-management:write-spec` / `roadmap-update` | 3 |
| 7 | Prototypes (interactive mock-ups) | `prototypes.md` (index of Artifact links) | `prototype` | 4 |
| 8 | Decision log | `decision-log.md` | `decision-log` (ongoing) | 10 |
| 9 | Architecture handoff (product + meta-architecture) and next steps | `architecture-handoff.md` | `architecture-handoff` | 5, 6 |
| 10 | Exit gate report | `exit-gate.md` | `exit-gate` | 11 (Ale's sign-off) |

## Order

1. **Foundation**: refine the starting idea (`starting-idea.md`, a starting point, not a bible) into artifact 1.
2. **People and market**: personas (2), then the market scan and riskiest hypotheses (3).
3. **Shape**: success metrics (4), constraints and non-goals (5), then the MVP and roadmap (6).
4. **Show**: prototypes (7) for the riskiest MVP flows, used to test hypotheses.
5. **Hand over**: architecture handoff (9), then the exit gate (10). Ale's sign-off closes inception.

The decision log (8) is kept current at every step. Steps may loop: a prototype or research finding can send work back to an earlier artifact.

## Ways of working

- Ask Ale only product decisions, **one question at a time**, each with a recommended answer. Claude decides technical details.
- English everywhere.
- Merge your own PR once the task is done and CI (the `Harness` workflow) is green. There are no code tests during inception: say so when you merge.
- No production code until inception closes. Prototypes are throwaway mock-ups (Artifacts), with no tests and no harness.
- Every product decision Ale makes goes into the decision log in the same turn.

## Skills

Project skills live in `.claude/skills/`:

| Skill | Use |
| --- | --- |
| `inception-interview` | Fill or refine an artifact by interviewing Ale one question at a time |
| `decision-log` | Record, revise or look up a decision |
| `riskiest-hypotheses` | Market scan, competitors, and a ranked list of the riskiest hypotheses with how to test each |
| `prototype` | Build a quick interactive mock-up as an Artifact, linked to the hypotheses it tests |
| `exit-gate` | Check the 11 exit criteria and report what is missing |
| `architecture-handoff` | Write the input for the Architecture phase and the bridge to `app-studio` |

They lean on skills that already exist: `product-management:*` (brainstorm, competitive-brief, write-spec, roadmap-update, synthesize-research), `anthropic-skills:deep-research`, and `frontend-design`. No extra agents are needed for inception.

## Handover to the build phase

At the end of inception:

1. `architecture-handoff` writes the product and meta-architecture input, including the App profile draft (domain rules, capabilities, AI plan) and any extra skills, plugins or agents needed on top of `app-studio`.
2. After sign-off, `app-studio`'s `new-app` completes the harness already installed here: it adds the stack packs, keeps these docs and skills, and merges its template into `CLAUDE.md`, dropping the inception-only rules. `prd-intake` then reads `mvp-and-roadmap.md` and the decision log directly to write `docs/PRD.md` and `docs/BACKLOG.md`.
3. If this layer worked well, upstream it to `app-studio` as a generic discovery stage (`harness-sync` part B). Until then, `app-studio` stays untouched.
