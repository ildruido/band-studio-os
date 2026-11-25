# Proposed repeatable processes to distil into skills (for AI readers)

Status: **proposal, 2026-11-25.** Nothing here is built. Each candidate comes from something inception did more than once or that cost time when done ad hoc (see [recap.md](recap.md)). Wording is product-neutral on purpose, so a candidate can be filed as a harness idea later; this repo never edits the harness itself. Order is by value for the next product, best first.

How to read a candidate: **Trigger** (when to run it), **Steps**, **Inputs and outputs**, **Done when**, **Evidence** (where inception showed the need), **Risk**.

## P1. External research handoff

- **Trigger:** a study needs a source the agent cannot open, or a second independent route is wanted (a deep-research tool run by the product owner).
- **Steps:** (1) write a neutral prompt that states the questions and the pre-registered kill criteria but not the hoped-for answer; (2) the owner runs it and pastes back the text, never a share link; (3) save the prompt and the raw paste with the study; (4) grade each source as the tool states it; mark unopened sources "sponsor-accepted, not opened"; (5) re-evaluate the study and show what changes; (6) a skeptic pass checks whether any verdict moved.
- **Inputs and outputs:** protocol in, prompt file and addendum with re-evaluation out.
- **Done when:** the addendum lists every source with its status and says explicitly whether the verdict changed.
- **Evidence:** R-007 and R-005 ([R-005 prompt](../../research/R-005-competitive-analysis/gemini-prompt.md)), D-025, D-026; Reddit unreadable (status.md); Gemini share links unreadable **(memory)**.
- **Risk:** sponsor acceptance can quietly inflate evidence. The label must survive into every summary.

## P2. Design alternatives, then pick

- **Trigger:** a first prototype is rejected, or the whole look and feel of a product is undecided.
- **Steps:** (1) restate what the rejected version taught; (2) produce three deliberately different whole-journey alternatives on one board (journey map, key screens, home screen at four points in time, sections by use case, strengths and weaknesses, build effort); (3) recommend one and name the ideas borrowed from the others; (4) the owner picks; (5) log the pick and the kept and parked ideas; (6) mark anything beyond the roadmap as an idea, not a commitment.
- **Inputs and outputs:** MVP, personas, prior prototype lessons in; board file, summary doc and a decision out.
- **Done when:** a choice is logged with ideas kept and parked, and the board states what was not checked (real phone, real users).
- **Evidence:** [design-alternatives.md](../design-alternatives.md), D-033, D-034.
- **Risk:** looks like evidence of demand; it is not.

## P3. Prototype iteration

- **Trigger:** the owner asks for a mock-up, or a prototype was reviewed and needs the next version.
- **Steps:** (1) state the flow and the hypotheses it can and cannot test; (2) build as a throwaway page with realistic fake data; (3) the owner reviews on a phone; (4) record in the prototype index what was learned and whether the version is closed, confirmed or extended; (5) if rejected, route to design alternatives (P2) before building again; (6) keep later-journey screens visibly marked so they are not read as scope.
- **Inputs and outputs:** MVP or direction in; page plus an index row (link, flow, hypotheses, version, lesson) out.
- **Done when:** the index row says what the prototype proves and what it does not.
- **Evidence:** [prototypes.md](../prototypes.md), D-030 to D-035. This extends the existing `prototype` skill rather than replacing it.
- **Risk:** canned artwork mistaken for output quality.

## P4. Product Brief Pack builder

- **Trigger:** several internal documents exist and presentation material (deck, one-pager, pitch) is wanted from one trustworthy source.
- **Steps:** (1) inventory what exists with a maturity label per item; (2) inventory what a classic brief contains; (3) tabulate the gaps; (4) build a folder of short theme files with one index and a glossary; (5) give every component the same template; (6) keep a separate red-amber-green gap record, rated twice (content complete, evidence backed); (7) write a source map from each section to its source document; (8) reconcile the tracker with what the inventory found.
- **Inputs and outputs:** all inception documents in; pack folder, gap record and source map out.
- **Done when:** every component has a section, a rating and a source, and no claim in the pack outranks its evidence.
- **Evidence:** [brief-pack/index.md](../../brief-pack/index.md), D-036, D-037; the inventory exposed a stale tracker row.
- **Risk:** polished text hides weak evidence; keep the gap record next to the pack.

## P5. Architecture handoff with independent review

- **Trigger:** the MVP, constraints and risks are settled enough to choose a shape.
- **Steps:** (1) run `architecture-handoff` to draft; (2) hand a separate strong-model agent only the document and its sources, not the author's reasoning; (3) it returns issues graded critical, important, minor and says what it could not verify; (4) fix, or record why not, each finding in the document; (5) log the direction as decisions; (6) enrich the brief pack and the App profile draft.
- **Inputs and outputs:** MVP, constraints, brief pack in; handoff with an "Independent review" section out.
- **Done when:** the review section lists findings, fixes and what stayed unverified, and spikes cover the unverified items.
- **Evidence:** [architecture-handoff.md](../architecture-handoff.md#independent-review), D-038 to D-040.
- **Risk:** the review cannot check prices or terms; spikes must.
- **Note:** this adds a step to the existing `architecture-handoff` skill, so it fits a harness idea better than a new skill.

## P6. Parallel-thread coordination

- **Trigger:** more than one thread works on the same decision log or status tracker at once.
- **Steps:** (1) the coordinator names the decision-id range and study-id range a thread may use; (2) each thread fetches `main` and lists open PRs before merging, and renumbers on collision; (3) each PR updates `status.md` for its own row only; (4) one thread owns shared files at a time.
- **Done when:** no two merged entries share an id and no status row is stale after a merge.
- **Evidence:** PR #15 renumbering (D-015 taken twice); stale rows in `status.md`.
- **Risk:** low; may be better as a rule in the project instructions than as a skill.

## P7. Human-readable document version

- **Trigger:** the owner or a partner needs to follow a plan or process document that is written for machines or insiders.
- **Steps:** (1) pick the one reader and the one question they have; (2) write one page: purpose, sequence of steps, what each produces, links to the full document; (3) no bare ids, spell out each reference; (4) check every claim against the full document.
- **Done when:** a new reader can follow it in five minutes without opening another file.
- **Evidence:** this recap's [one-page companion](inception-in-one-page.md); parked idea from the owner for MVP and roadmap documents **(memory)**.
- **Status:** parked for the MVP and roadmap documents until the owner asks.

## P8. Inception recap

- **Trigger:** the architecture handoff is merged, or the owner asks where the process stands.
- **Steps:** gather the workflow, status, decision log, PR list and study index; write phases, tools used, lessons; list candidate skills; write the one-page version; have an independent agent check both against the repo.
- **Done when:** the independent check reports no unsupported claim.
- **Evidence:** this folder.

## Suggested order and what not to do

1. P1, P5 (a step in an existing skill) and P6 have the clearest evidence of pain.
2. P2, P3 and P4 were each run once or twice; refine once a second product has used them.
3. Fieldwork skills (interviews, blind output test, price test) are not proposed: inception has not run them yet, so there is nothing to distil. Revisit after the first interview round.
4. Skills stay generic and read product facts from the Inception profile, as D-003 requires. Any candidate for the harness goes through `harness-idea` as an issue only.
