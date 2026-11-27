# Plan: add the discovery ways of working to app-studio (pass 1)

Status: **plan only, 2026-11-25.** Nothing in app-studio is changed by this document, and no harness idea is filed. The App Creator decides what to file. Pass 2, which re-checks every step of this plan for "code or prose", is in [app-studio-plan-code-or-prose.md](app-studio-plan-code-or-prose.md) and revises it.

## Summary for humans

- **What:** everything this project learned about running the stage before building (research with bias guards, personas, MVP, prototypes, brief pack, architecture handoff, exit check) becomes two optional add-ons for app-studio, so any new app can use it.
- **How it is packaged:** a **research** add-on that an app keeps for its whole life, and a **discovery** add-on that an app uses only until the App Creator says "start building", then removes. A small shared tool for numbering and recording decisions goes into the core, because every app needs it.
- **Generic:** no product, people, markets or ids from this project. Product facts come from a short "Discovery profile" table that each app fills in.
- **Order:** first teach app-studio's add-ons to carry skills, then the decision tool, then research, then discovery, then the new-app wiring, then move this repo onto the shared version.
- **Biggest risks:** name clashes with existing skills, more skill descriptions loaded in every session, and one migration for this repo, which runs harness 0.28.1 while app-studio is at 0.44.1.

## 1. Scope and sources

What is being upstreamed, with where it lives today in this repo:

| Component | Today in this repo | Kind |
| --- | --- | --- |
| Workflow, order, artifact map, 11 exit criteria | [workflow.md](../workflow.md) | doc |
| Exit-criteria tracker and sub-milestone record | [status.md](../status.md) | doc |
| Decision log format and rules | [decision-log.md](../decision-log.md), harness script `decisions.mjs` (the app's `decision-log` skill was removed) | doc + skill |
| Product facts for generic skills | "Inception profile" section of `CLAUDE.md` | profile |
| Interview-driven artifacts (foundation, personas, metrics, constraints, MVP, roadmap) | skill `inception-interview` | skill |
| Research method and bias guards | [framework.md](../../research/framework.md), skill `research-protocol` and its protocol and report templates | doc + skill |
| Research types | skills `persona-validation`, `market-analysis`, `competitor-scan`, `competitive-analysis` (with a sizing sheet and a competitor entry template) | skills |
| Independent research review | agent `research-skeptic` | agent |
| Hypotheses | skill `riskiest-hypotheses` | skill |
| Prototypes | skill `prototype`, index [prototypes.md](../prototypes.md) | skill + doc |
| Architecture handoff | skill `architecture-handoff` | skill |
| Exit check | skill `exit-gate` | skill |
| Repeatable processes not yet written as skills | the eight candidates in [skill-proposals.md](skill-proposals.md): external research handoff, design alternatives, prototype iteration, brief pack builder, architecture review, parallel-thread coordination, human-readable versions, recap | process |
| Thread rules learned on the way | project memory and [recap.md](recap.md) lessons: one question with a recommended answer, autonomy with a record, id collisions between parallel threads | rules |

Read in app-studio (main at 0.44.1, read only): `docs/GOVERNANCE.md`, `docs/governance/building.md` and `rollout.md`, `packs/README.md`, `plugins/studio/templates/CLAUDE.md`, `plugins/studio/skills/new-app/discovery.md`, `scripts/studio-sync.mjs` (managed trees, packs, phase, own-skill checks), `scripts/core-lint.mjs`, `scripts/coherence-lint.mjs`, the hook scripts, the deterministic-code audit in `docs/audits/deterministic-code/`, and open issues about discovery, decisions and human docs.

## 2. What app-studio already has that this plan builds on

- **A discovery phase exists.** The App profile has `Phase: discovery | build`; fields may say `TBD` in discovery; `build-feature`, `test-handoff` and `release` stop there by code (`studio-sync.mjs phase --build-only`); `new-app`'s discovery branch installs the core only, and "start building" switches to build. What it lacks is any method for discovery itself: today discovery means "write the PRD and backlog before a stack exists".
- **Modules.** A pack with `"kind": "module"` is an opt-in feature or process add-on (`roadmap` is a process module). A pack ships `managed/` files (kept in step, landing in `.claude/packs/<name>/`) and `starter/` files (copied once, then the app's own). **Packs cannot ship skills or agents today:** only `plugins/studio/skills`, `agents` and `hooks` are managed trees.
- **A decision log row.** The App profile has a `Decision log` row (default: `docs/PRD.md` "Decisions"). `prd-intake` already reads discovery docs (MVP, roadmap, decision log).
- **Scripts for mechanics, prose for judgement.** `backlog.mjs`, `app-setup.mjs`, `handoff.mjs`, `review-precheck.mjs`, `verdict.mjs` and the studio's `finish.mjs` follow one rule: fixed steps are code, judgement stays with Claude. The deterministic-code audit (2026-11-18) applied that rule to the whole harness.
- **Guards that new components must pass:** `core-lint` (no app names, every skill and agent declares `model` and `effort`), `coherence-lint` (front matter shape, every core skill listed in the README and app template, no "Ale", no studio-only vocabulary in shipped files), the routing test (`scripts/routing-test/`), skill-creator checks for new skills, a coherence review proposed after skill changes, and studio-scratch live checks for what apps experience.
- **Load-on-demand skill branches** (0.44.0): a skill keeps rare paths in linked files read only when needed.
- **Related open idea:** app-studio issue 162, an opt-in "human docs" module (write, edit, review, optimize pages for people). It overlaps the "human-readable versions" candidate.

## 3. How to model it

### 3.1 Packaging: two modules plus a small core change

| Unit | Lifetime | Why separate |
| --- | --- | --- |
| **Core: decisions tool** | every app, every phase | Every app records product decisions (the App profile row exists already). Numbering and superseding are mechanics, the same in every app. |
| **Module `research`** | added at discovery or any time; kept after "start building" | The research method applies to every later product question (pricing, a new market, a feature bet), not only to discovery. |
| **Module `discovery`** | added at the start of discovery; removed at "start building" | Its skills (interview, exit gate, handoff, brief pack) make no sense in build. Removing it takes their descriptions out of every build-phase session. The documents it produced stay, because they are the app's own files. |

Module names follow app-studio's own vocabulary: the phase is called discovery there, so the module is `discovery`, not "inception".

### 3.2 Components per unit

**Core (plugins/studio)**

- `hooks/decisions.mjs` (Node built-ins only, like `backlog.mjs`): `next` (next free id across this tree and every remote branch, with `--fetch`), `add` (writes the entry at the top with today's date and the fixed fields), `supersede` (new entry, old one's status set, old text untouched), `list` and `show`. It reads the App profile's `Decision log` row for the file. Id prefix: `D-`.
- `health` gains a duplicate-id check on the decision log.
- `studio-sync.mjs phase --discovery-only` (the mirror of `--build-only`), so discovery-bound skills stop by code in build.
- Template `CLAUDE.md`: one line saying that decisions are recorded with `decisions.mjs`; no other template change (the Discovery profile is added by the module, below).

**Prerequisite in the sync tool (core)**

- A module may ship `managed/skills/<name>/` and `managed/agents/<name>.md`. `pack add` and `pull` copy them to `.claude/skills/` and `.claude/agents/`, the lock tracks them like core skills, `pack remove` deletes them, and `health` treats them as harness-owned (not "own" skills) and fails on a name clash between a module and the core or another module.
- `core-lint`, `coherence-lint` and the routing test cover module skills and agents too.
- This is the same prerequisite issue 162 (human docs module) needs, so the two should share one piece of work.

**Module `research`**

| Part | What | From |
| --- | --- | --- |
| Skill `research` | The procedure for any study (frame, tier, pre-register, search both ways, log, verify, conclude, skeptic review, deliver). Type-specific rules live in branch files read only for that type: `market-size.md`, `competitor-scan.md`, `competitive-analysis.md`, `user-reality-check.md`, `external-research.md` | `research-protocol`, `market-analysis`, `competitor-scan`, `competitive-analysis`, `persona-validation` part A, proposal "external research handoff" |
| Agent `research-skeptic` | Cold, independent review of a study, re-checking sources itself, own verdict before reading the lead's | `research-skeptic` |
| Managed docs | `FRAMEWORK.md` (method, tiers, evidence grades, confidence and verdict rules, ethics), `protocol-template.md`, `report-template.md`, `sizing-sheet-template.md`, `competitor-entry-template.md` | `docs/research/` and the skill folders |
| Starter files | `docs/research/studies.md` (empty index) | `studies.md` |

One skill with branches instead of five skills: fewer descriptions in every session, one routing target for "research X", and it matches the 0.44.0 branch pattern. Pass 2 revisits whether the routing still works.

**Module `discovery`**

| Part | What | From |
| --- | --- | --- |
| Skill `discovery-interview` | Fill or refine an artifact by interviewing the App Creator one question at a time; branches per artifact: foundation, personas (with the evidence audit), success metrics, constraints, MVP and roadmap | `inception-interview`, `persona-validation` part B |
| Skill `riskiest-hypotheses` | Ranked hypotheses with a test each, built on `research` studies | `riskiest-hypotheses` |
| Skill `prototype` | Throwaway mock-up tied to hypotheses; branch `design-alternatives.md` for "three whole-journey options, then pick" | `prototype`, proposals "design alternatives" and "prototype iteration" |
| Skill `brief-pack` | Build the plain-language product brief pack with a gap record and a source map | proposal "brief pack builder" |
| Skill `architecture-handoff` | Product and meta-architecture input, App profile draft, next steps, with an independent review step | `architecture-handoff`, proposal "architecture handoff with independent review" |
| Skill `exit-gate` | Score the exit criteria and report gaps before "start building" | `exit-gate` |
| Skill `discovery-recap` | Process recap and one-page version, independently fact-checked | proposal "recap" |
| Agent `doc-reviewer` | Cold review of a large document against its sources (findings graded critical, important, minor; says what it could not verify). Used by the handoff, the brief pack and the recap | the independent reviews run for the handoff and the recap |
| Managed docs | `WORKFLOW.md` (order, artifacts, loops, ways of working), `exit-criteria.md` (default list) | [workflow.md](../workflow.md) |
| Starter files | `docs/discovery/status.md`, `docs/discovery/decision-log.md` (header only), `docs/discovery/starting-idea.md` (placeholder), `docs/discovery/prototypes.md` (empty index) | this repo's `docs/inception/` |
| Profile | A "Discovery profile" section in `CLAUDE.md`, written by `app-setup.mjs discovery-profile init` when the module is added: product line, target users, starting idea path, market segments, principles, key concepts, domain risks, prototype look and feel, docs folder (default `docs/discovery/`), sign-off mode, optional skills | the Inception profile |

**Not upstreamed**

- This product's facts, studies, prototypes, decisions and brief pack content.
- The "commit straight to `main` during inception" exception: app-studio's rule (never commit straight to `main`) wins, and cloud sessions cannot do it anyway.
- Personal working rules that are the App Creator's own preference rather than a method (for example "don't ask about fieldwork"); "autonomy with a record" becomes a Discovery profile choice, see conflict 13.
- Human-readable versions: folded into issue 162 rather than a second skill.
- Fieldwork skills (interviews, blind output test, price test): not run yet, so nothing proven to distil.

### 3.3 Hooks, checks and utilities

| Item | Where | What it guards |
| --- | --- | --- |
| Duplicate decision ids | core `health` | parallel threads taking the same id |
| Discovery-only stop | core `phase --discovery-only` | discovery skills running in build |
| Module skill clash | core `health` | a module skill named like a core or app skill |
| SessionStart note in discovery | core `check --warn` (module-aware) | one line: phase, exit criteria done of total, next artifact in order |

Pass 2 adds research and discovery checks (research plan committed before searching, evidence ids that resolve, persona trait tags, verdicts consistent with the evidence) and argues for each one.

### 3.4 Project-instructions template (`plugins/studio/templates/project-instructions.md`)

Additions, each one line, inside the existing structure:

- Discovery: one thread per artifact or study, like one thread per backlog item.
- Decision and study ids come from the scripts (`decisions.mjs next --fetch`, the research module's id command), never picked by hand; this replaces the coordinator reserving id ranges.
- In discovery the coordinator proposes the next artifact from the order in the module's `WORKFLOW.md`.

## 4. Making it generic

Rules for the thread that ports each component:

1. **Roles:** "the product owner" becomes **App Creator**, app-studio's name for that role; the coordinator and threads keep their harness names. No person's name (coherence-lint already fails on "Ale").
2. **Product facts only from the Discovery profile** or the app's own docs. No product, market, country, competitor, genre, venue, tool brand or price from this project in any shipped file.
3. **No ids from this project:** no decision, study, hypothesis, evidence or PR numbers. Examples use placeholders (`D-NNN`, `R-NNN`, `<product>`), as app-studio does with `<XX>`.
4. **Paths from the profile:** the docs folder is a profile row (default `docs/discovery/`); the decision log is the App profile row. Skills never hard-code `docs/inception/`.
5. **Environment lessons become generic rules:** "a source the agent cannot open" (not named sites), "ask for exported text, not a share link" (not a named tool).
6. **Optional plugin skills are optional:** `product-management:*`, `frontend-design`, `anthropic-skills:deep-research` are named as "use when available" with the fallback written out. Nothing fails without them.
7. **Self-contained research rules:** the research skill and agent never refer to discovery artifacts or phases; discovery wiring lives in `WORKFLOW.md` and the calling skills.
8. **Exit criteria are data:** the default list ships in `exit-criteria.md`; an app may add or drop criteria in its profile, and the exit gate reads both.
9. **Port check:** before each PR, grep the new files for this project's vocabulary (product name, owner name, domain words, country names, competitor brands, `D-0`, `R-00`, `H-0`, `BS-`) and require zero hits; `core-lint` keeps guarding the general case.

## 5. Conflicts and how each is resolved

App-studio's standard: new components must not conflict with each other or with the harness.

| # | New component | Conflicts with | Resolution |
| --- | --- | --- | --- |
| 1 | Decision log skill | App profile `Decision log` row; `prd-intake` writing to PRD "Decisions" | One tool (`decisions.mjs`) and one row. The discovery module sets the row to its own log when added; `prd-intake` keeps writing through the same tool. The `decision-log` skill is not shipped. |
| 2 | `competitive-analysis` skill name | plugin skills `market-researcher:competitive-analysis`, `product-management:competitive-brief` | No skill of that name: it is a branch of `research`. The routing test gets queries for each research type and for the plugin skills. |
| 3 | `prototype` skill | the Artifact tool's own design guidance, `frontend-design`, the `artifact` pack | Description says "throwaway mock-up to test a hypothesis, no repo code"; the artifact pack is the real app. Routing queries for both. |
| 4 | MVP and roadmap artifacts | `prd-intake` (turns docs into PRD and backlog), `roadmap` module (Now, Next, Later list) | Discovery writes the MVP in the shape `prd-intake` maps; the roadmap stays a discovery document until `prd-intake` turns it into backlog and, if installed, the roadmap module's list. No second roadmap after "start building". |
| 5 | Architecture handoff's stack recommendation | `new-app` "start building" asks the stack question itself; `app-setup.mjs profile` writes the profile | The handoff recommends; `new-app` still asks the App Creator, with the handoff's answer as the recommended one. The App profile draft is written as `Field=value` pairs that `app-setup.mjs profile` accepts. |
| 6 | Exit gate sign-off | "start building" trigger | The exit gate reports readiness; only the App Creator's "start building" switches phase. `new-app`'s start-building branch runs the exit gate first and shows the gaps; it does not block. |
| 7 | `status.md` tracker | `docs/BACKLOG.md` and the roadmap after build starts | Status is a discovery document; at "start building" it is frozen as history and the backlog takes over. |
| 8 | Agents `research-skeptic` and `doc-reviewer` | agents `reviewer`, `reviewer-deep`, `qa`; the review and QA gates | Different inputs (a study folder or a document, never a diff), distinct names, no verdict files, so the push and merge gates are unaffected. |
| 9 | Discovery profile | App profile and its health rules | Separate section with its own rows; health checks it only when the module is installed. No row name shared with the App profile. |
| 10 | Phase rules | build skills stop in discovery | Discovery skills stop in build; `research` and decisions work in both. |
| 11 | `coherence-lint` rule "README and template list every skill" | module skills | Module skills are listed in the module's `STACK.md`; the lint learns that rule. |
| 12 | New health checks | the pre-commit hook and the Harness workflow run `health` | Checks stay fast and local, and a new check starts as a note before it fails, so existing apps are not blocked by old data (pass 2 counts the grace period from the app's install date and limits checks to changed files). |
| 13 | "Autonomy with a record" | app template and project instructions ("before big work, a short plan and the App Creator's OK") | Discovery profile row `Sign-off mode`: `per artifact` (default, matches the harness) or `autonomous with record` (merge on green, keep the sub-milestone table, recap on request). |
| 14 | Human-readable versions | issue 162, human docs module | Folded into 162; the discovery docs only require a short human summary at the top. |
| 15 | Model and effort front matter | `core-lint` | Every module skill and agent declares them: interview and exit gate `inherit`; `research-skeptic` and `doc-reviewer` a strong model at high effort (the reviews that found real issues ran on the strongest model). |
| 16 | Token budget | every installed skill's description loads in each session | Modules are opt-in; research is one skill; discovery is removed at build. Pass 2 estimates the saving. |
| 17 | Commit straight to `main` during inception | app-studio's git rules | Dropped; decisions ride in the artifact's PR or a small PR of their own. |

## 6. Sequencing

Each step is one app-studio issue and one PR, built in the app-studio Project (never from here), with skill-creator test prompts, routing queries and a studio-scratch scenario where apps feel it.

| Step | Work | Depends on | Likely gate |
| --- | --- | --- | --- |
| 0 | Modules can ship skills and agents (sync tool, lock, health, lints, routing test) | none; shared with issue 162 | sync-tool change: tier decided by `tier.mjs`, likely the owner tier; branch live check |
| 1 | `decisions.mjs` plus the duplicate-id health note | none | app-facing; branch live check |
| 2 | Module `research` (skill with branches, agent, managed docs, starter) | 0 | app-facing; skill-creator; routing test; live check in a scratch app |
| 3 | Module `discovery` (skills, agent, managed docs, starter, profile init, `--discovery-only`) | 0, 1, 2 | app-facing; skill-creator for each skill; routing test; live check |
| 4 | Wiring: `new-app` discovery branch offers the two modules; start-building runs the exit gate and removes `discovery`; template and project-instruction lines | 3 | template change: likely the owner tier; live check of the new-app discovery path |
| 5 | Coherence review of the whole harness with the new modules | 4 | proposed, runs on the App-Studio Owner's yes |
| 6 | Move this repo onto the shared version (section 8) | 4, plus this repo synced to the latest harness first | this repo's own thread, one PR |

Steps 0 and 1 are independent and can run in parallel. Steps 2 and 3 can overlap once 0 lands.

## 7. Versioning

- Each step is a MINOR harness release (a new skill, agent, hook, profile field or workflow change is MINOR under app-studio's SemVer rule).
- Each module has its own `pack.json` version starting at `0.1.0`, raised on every change (the release check enforces it).
- Release records say **App action: none** for apps that do not use the modules: both modules are opt-in, and `decisions.mjs` works with the existing `Decision log` row.
- The duplicate-id check ships as a note first, then fails after a grace period, so apps with old duplicates have time to fix them (pass 2 counts it from the app's install date, because apps sync rarely).

## 8. Migration of existing apps through harness-sync

- **Apps in build without discovery:** `harness-sync` brings `decisions.mjs` and the new checks; nothing else changes.
- **Apps in discovery that never used this method:** `pack add research discovery`, then `app-setup.mjs discovery-profile init`; the module's starter files land in the docs folder.
- **This repo (the only app with its own copy):**
  1. Sync from 0.28.1 to the latest harness first, in its own thread, when the App Creator asks.
  2. In one PR: remove the app's own skills and agent that the modules replace (a module skill with the same name would fail the clash check), `pack add research discovery`, set the Discovery profile from the Inception profile, set the docs folder row to `docs/inception/` so no file moves, compare `docs/research/framework.md` with the module's `FRAMEWORK.md` and keep any difference as a profile note or drop it, keep the study folders and decision log as they are, drop the inception-only `main` exception from `CLAUDE.md`.
  3. Run `health` and the Harness workflow; check that a fresh thread routes "run a market sizing" and "fill the personas" to the module skills.
  4. Way back: `pack remove discovery research` and restore the own copies from git history.
- Migrate one app at a time, as app-studio's rollout rule asks.

## 9. Product decisions this plan raises (for the App Creator, not asked here)

| Question | Recommended answer | Why |
| --- | --- | --- |
| Name the add-ons "discovery" and "research", or keep "inception"? | discovery and research | Matches app-studio's existing Phase name; avoids a third term. |
| Should `new-app` offer the discovery add-on to every new app? | Offer it as a question with "yes" recommended for a new product idea, "no" for a small tool | A full discovery is weeks of work; a small app needs only the PRD. |
| Default sign-off mode? | per artifact | Matches app-studio's current rule; autonomy is a choice per app. |
| File step 0 together with the human docs idea? | yes | Same prerequisite; one piece of work. |

## 10. What this plan did not check

- No app-studio code was run; the module-skills gap was read from `scripts/studio-sync.mjs` (the managed trees list), not tested.
- Whether `pack add` works in discovery without the `base` pack and without `package.json` (the `roadmap` module adds npm scripts; these two modules must not).
- Routing behaviour of the proposed names: no routing test was run.
- The likely merge tier of each step: `tier.mjs` decides from the files changed; the column above is a guess.
