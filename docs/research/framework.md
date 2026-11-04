# Research framework

How every piece of research in this project is run, so it informs decisions instead of confirming them. It applies to any kind of research: desk research, interviews, surveys and tests.

## Why we need it

Everyone running the research wants the idea to work. The product owner backs the idea. Claude tends to agree with whoever frames the question, and it can misread or invent a source. Left alone, that combination produces research that finds what it went looking for.

The framework makes that hard to do by accident:

- The questions and the pass/fail rules are fixed **before** anyone searches.
- Evidence **against** the idea is searched for as hard as evidence for it.
- Every claim traces to a source someone actually opened.
- Someone who did not do the research attacks it before the product owner sees it.
- The guardrails get stronger as the cost of being wrong goes up.

## Two layers

- **Generic layer** (every study): this document, the [`research-protocol`](../../.claude/skills/research-protocol/SKILL.md) skill, the [`research-skeptic`](../../.claude/agents/research-skeptic.md) agent, and the [protocol](../../.claude/skills/research-protocol/protocol-template.md) and [report](../../.claude/skills/research-protocol/report-template.md) templates.
- **Type layer** (one skill per kind of research): adds the standard hypotheses, the source mix, the default tier and the outputs for that kind of research. A type skill can add guardrails but **never removes** a generic one.

| Research type | Skill | Default tier |
| --- | --- | --- |
| Any research without a type skill | `research-protocol` | chosen per study |
| Persona validation: reality check before personas, evidence audit after | [`persona-validation`](../../.claude/skills/persona-validation/SKILL.md) | standard |

Other kinds of research (for example interviews, prototype tests or pricing tests) get their own type skill, built the same way.

## Biases we guard against

| Bias | How it would show up here | Guardrail |
| --- | --- | --- |
| Confirmation bias | Searching "small teams struggle with reporting" and finding exactly that | Two-sided search with a quota of disconfirming queries; a mandatory "strongest evidence against" section |
| Moving the goalposts | Deciding what counts as success after seeing the data | Kill criteria pre-registered and committed before the first search; later changes only as logged deviations |
| Anchoring | The original idea frames every question | Each hypothesis has a stated null or strongest alternative; priors are declared up front; the skeptic reads cold |
| Sycophancy (AI) | Claude softens bad news for the person who asked | Verdict rules applied mechanically; an independent skeptic with no access to the conversation |
| Invented or misread sources (AI) | A statistic that does not exist, or says something else | Every cited source opened and the supporting passage quoted; the skeptic re-checks |
| Conflict of interest | "73% of freelancers say…" from a company selling tools to freelancers | Source grades and an interest flag; vendor material can never carry a claim alone |
| Citation laundering | Ten articles repeating one survey look like ten sources | Statistics traced to their origin and counted once |
| Survivorship and loudness | Online we mostly see successful users and loud complainers | Planned searches for the quiet and the failed (people who quit, tools people abandoned); missing voices named in the report |
| Anecdote as data | One viral thread treated as a segment | Voices and numbers kept apart; confidence rules require independent sources |
| Absence as evidence | "We found nothing against it" read as "it is true" | A separate "Insufficient evidence" verdict; "what we could not find" section |
| Wrong time or place | Ten-year-old data from one country used for a launch elsewhere today | Date and geography recorded for every source; scope set in the protocol |
| Overclaiming | "Validated", "proven", "everyone" | Calibrated wording; a hypothesis is "supported at medium confidence", never "validated" by desk research |

## Roles

| Role | Who | Does | Must not |
| --- | --- | --- | --- |
| Sponsor and decision owner | The product owner | Names the decision the research informs. At deep tier, approves the kill criteria before the search starts. Reads the report and decides. | Hint at the expected answer while the research runs. Change the kill criteria after seeing results (only as a logged deviation). |
| Lead researcher | Claude, running the study | Writes the protocol, searches, keeps the evidence log, writes the report, answers the skeptic. | Drop inconvenient evidence. Search before the protocol is committed. |
| Contrarian | Claude, as a separate pass inside the search step | Runs the disconfirming queries and writes the strongest case against each hypothesis. | Stop at the first weak counter-example. |
| Skeptic | Light: the lead, as a separate self-review pass. Standard and deep: the `research-skeptic` agent, in a fresh context. | Re-checks sources, reaches its own verdict from the evidence before reading the lead's, then attacks the gaps. | See the conversation, the sponsor's hopes or the product pitch before forming its own verdict. |
| Replicator | Deep tier only: a second fresh agent | Runs the same protocol without seeing the first run, so the two can be compared. | Read the first run's evidence or report. |

## Steps (every study)

1. **Frame.** Name the decision this informs and what we would do differently if the answer is yes or no. If nothing would change, don't run the study.
2. **Pick the tier** by the cost of being wrong, not by the time available (table below).
3. **Pre-register.** Write `protocol.md` from the template: the hypotheses as falsifiable claims, each with its null and a kill criterion that could really happen, the scope, the search plan (neutral and disconfirming queries), the time box, and Claude's declared priors (what it already believes and has already seen). Commit and push it **before the first search**. The commit time is the proof.
4. **Search both ways.** Neutral wording, never leading queries. Disconfirming queries at least as many as supportive ones. Look for the people who are missing.
5. **Log every relevant source** in the evidence log as it is found, against as carefully as for. Exclude only by the protocol's rules, and say why.
6. **Verify.** Open each cited source and quote the passage that supports the claim. Trace statistics to their origin. A source that can't be opened is marked unverified and carries no weight.
7. **Grade and conclude** with the rules below. Write `report.md` from the template: verdict first, then the strongest evidence against, then the findings.
8. **Skeptic review** at the strength the tier asks for. The lead fixes or rebuts every must-fix item in the report. Disagreements stay visible.
9. **Decide.** The product owner reads the report and decides. The decision is recorded with a link to the report.

## Tiers

| Guardrail | Light | Standard | Deep |
| --- | --- | --- | --- |
| Pre-registered protocol, committed before searching | yes | yes | yes |
| Kill criteria approved by the product owner before searching | no | no | yes |
| Disconfirming queries per hypothesis (minimum) | 1 | 2 | 3, plus a search for failed or abandoned cases |
| Evidence log with grades and verified quotes | yes | yes | yes |
| Skeptic review | self-review pass | `research-skeptic` agent | `research-skeptic` agent plus a pre-mortem |
| Skeptic re-checks sources | a sample of 5 | every source behind a high or medium confidence claim, plus 5 others | all |
| Independent replication | no | no | yes |
| Use it for | quick fact checks, low-stakes scoping | inputs that shape a deliverable or a product decision | go/no-go calls, pricing, big bets |
| Extra cost | none | one agent run | two agent runs and the product owner's time up front |

When unsure between two tiers, take the higher one.

## Evidence grades

| Grade | Source type | Can carry a claim? |
| --- | --- | --- |
| A | Primary data with a stated method: official statistics, academic studies, surveys with a stated sample and method, platform data reports with a methodology | yes |
| B | First-hand voices of the target users: forum and community threads, published interviews, posts by people in the target group | yes, but they show that something happens, not how common it is |
| C | Secondary commentary: journalism, blogs and talks that cite data or experience | only alongside A or B |
| D | Interested or unsourced material: vendor marketing and vendor surveys, AI-generated summaries, claims with no traceable source | never on its own; use as a lead to an A or B source |

Every entry also records the publisher, date, geography, sample (if any) and an **interest flag**: does the source benefit if the claim is true?

**Independence:** two sources are independent only if neither relies on the other or on a shared origin. Ten articles quoting one survey count as one source, graded as the survey.

## Confidence and verdicts

Confidence in a claim:

- **High:** at least two independent sources, at least one graded A, no A-grade evidence against, and any B-grade evidence against coming from fewer independent communities than the evidence for.
- **Medium:** one A source, or B voices from at least three independent communities (different platforms, niches or countries), with the evidence against weaker than the evidence for.
- **Low:** anything less, or strong evidence on both sides.
- **Unverified:** the source could not be opened or did not say what was claimed. It carries no weight.

Voices show that something happens, never how common it is. A claim about size, share or frequency ("most users…", "thousands of…") needs an A source to reach medium or high confidence.

Verdict per hypothesis:

- **Supported:** medium or high confidence, and the kill criterion not triggered.
- **Contradicted:** the kill criterion is triggered, or the opposite claim reaches medium or high confidence.
- **Mixed:** credible evidence on both sides.
- **Insufficient evidence:** too little to say. This is not a pass.

Study verdict, for the product owner:

Each protocol marks which hypotheses are **key**: the ones the decision can't survive without.

- **Proceed:** every key hypothesis is supported.
- **Reshape:** something important is mixed or contradicted; the report proposes what to change.
- **Stop:** a key hypothesis is contradicted at high confidence.
- **Needs primary research:** desk research can't settle a key hypothesis; the report says which test would.

A triggered kill criterion forces Reshape or Stop, whatever the lead's view. The product owner can still overrule it; the override is logged as a decision with its reason.

## What desk research cannot tell us

Desk research shows whether a group exists, what it does and what it says hurts. It cannot show whether people would switch to our product, use it, or pay for it: what people say and what they do often differ. Every report names the primary research that would settle what it couldn't (interviews, fake-door tests, prototype tests), as candidates for the next studies.

## Ethics

Quote public posts briefly and link to them. Don't record usernames or personal details beyond what a claim needs. Respect each site's terms.

## Where studies live

Each study gets a folder `docs/research/R-NNN-<slug>/` holding `protocol.md` (committed first), `report.md` with the evidence log, and `replication.md` at deep tier. Add each study to the table below when its protocol is committed.

## Studies

| Id | Study | Type | Tier | Verdict |
| --- | --- | --- | --- | --- |
| R-001 | [Persona reality check](R-001-persona-reality-check/protocol.md) | Persona validation | standard | Needs primary research (skeptic review pending) |
| R-002 | [Band count size check](R-002-band-count-size-check/protocol.md) | Persona validation (H1 follow-up) | light | Needs primary research (H1 insufficient) |
