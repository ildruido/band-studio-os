# Plan, pass 2: code or prose, step by step

Status: **analysis and revised plan, 2026-11-25.** Revisits [pass 1](app-studio-plan.md) critically. Plan only: nothing in app-studio is changed and no harness idea is filed. An independent reviewer (a separate strong-model agent) challenged this pass; its findings and what changed because of them are in section 7, and the tables below already include the fixes.

## Summary for humans

- **Question asked of every step and every task:** can a script do it, or check it, instead of the model reading instructions each time?
- **Answer:** about a third of the tasks are fixed rules that code should do or check (numbering, filing, table shapes, sums, ordering guards). About a quarter are judgement wrapped around mechanics (the model judges, code counts, checks or renders). A little over a third must stay as instructions: interviewing, framing, searching, judging evidence, deciding verdicts, designing and writing.
- **Biggest wins:** numbering, filing and table checks for decisions and studies; sizing and scoring arithmetic done by code; the guard "write the research plan before searching" enforced when a commit is made and when a search is attempted; the decision log needs no skill at all.
- **What the review corrected:** verdicts and the exit gate are not computable. They hide real judgement, so code only checks that a verdict is consistent with the recorded evidence and drafts the exit-gate table; people and the model still decide. Old studies are left as they are.
- **What the revision changes in the plan:** each module ships one script and one check hook next to its skills; skills get shorter; checks land before calculators; and three new product decisions are listed for the App Creator.
- **Main risk:** numbers computed by code look more certain than they are. So code never sets a verdict; only the App Creator overrides a rule, and the skeptic still applies the rules by hand.

## 1. How each task is classified

| Class | Meaning | Use it when |
| --- | --- | --- |
| **Code** | A script does the task end to end; the model runs one command | the rule is fixed, the inputs are structured or can be, and the output can be checked |
| **Check** | The model does the task; a hook or CI check verifies the result | the content needs judgement but its shape, references or ordering follow fixed rules |
| **Hybrid** | The model makes the judgement and records it as data; code does the arithmetic, lookup, rendering or bookkeeping | a judgement feeds a fixed rule (grade a source, then apply the confidence rule) |
| **Prose** | Instructions for the model only | it needs meaning, taste, the outside world, or a conversation |

Tie-breakers: prefer a **check** over a generator when the model writes the content anyway (cheaper and less brittle); prefer **code** when an error is frequent or costly and the rule never changes; keep **prose** when a script would need a model inside it. Constraints that shape every code answer here: discovery apps have **no `package.json` and no stack**, so scripts are Node built-ins only (like the core hooks); app threads reach GitHub through the MCP tools, **not `gh`**, so a script cannot list open PRs itself: it takes them as input or prints the call to make, as app-studio's `finish.mjs` does; web pages are fetched with `curl` through the session proxy.

## 2. Workflow steps

| # | Step | Class | Split and reason |
| --- | --- | --- | --- |
| W1 | Set up discovery (modules, profile, starter docs) | Hybrid | Code: `pack add research discovery`, `app-setup.mjs discovery-profile init` with `Field=value` pairs. Prose: the product questions behind the values (starting idea, target users), asked one at a time. |
| W2 | Choose the next artifact | Hybrid | The order is data in `WORKFLOW.md`, so a script can print the first artifact whose status is not done. But steps loop (a finding sends work back), and artifacts get replaced (this project's hypotheses ended up in a research plan, not the planned file), so the coordinator judges; the script is a suggestion. |
| W3 | Fill an artifact by interview | Prose, plus a check | Questions, challenge and writing are judgement. A check verifies the artifact has its required headings and an Assumptions and Open questions section. |
| W4 | Run a study | Hybrid | See section 3.1: most bookkeeping is code, searching and judging are prose. |
| W5 | Record a product decision | Hybrid | Prose decides **whether** the App Creator settled a product question and words it. Code does the id, date, fields, position and superseding. |
| W6 | Prototype and design loop | Prose, plus code for the index | Design and build are taste. Adding the index row and updating hypothesis status are code. |
| W7 | Brief pack | Hybrid | Inventory and source-map checks are code; writing and red-amber-green ratings are judgement. |
| W8 | Architecture handoff | Prose, plus agent and checks | Direction and costs are judgement; the independent review runs in a separate agent; code validates the App profile draft and the review table. |
| W9 | Exit gate | Hybrid | Code drafts a score per criterion from status lines and the artifact map; the model corrects it where an artifact moved or was replaced, checks cross-artifact consistency and writes the gaps. |
| W10 | Keep the status tracker current | Hybrid | The status column is a view of artifact status lines and can be rendered **on demand** (printed, not committed, so parallel PRs do not conflict on a generated file). Notes and risks stay hand-written judgement. Hand-kept, the status column went stale several times (recap, section 5). |
| W11 | Parallel threads without id collisions | Code and a check | Ids from scripts that read every remote branch (`--fetch`), as `backlog.mjs` does; `health` fails on duplicates. Two branches that took an id before either pushed are caught at merge by the check, so the coordinator no longer reserves ranges. |
| W12 | Ask the App Creator one question with a recommended answer | Prose | Conversation. The decision card is a platform tool, not something to script. |
| W13 | Artifact status | Check | The model sets a one-line status at the top of each artifact from a fixed list (draft, provisional, done, replaced, ongoing) plus free text after it; a check verifies the line exists and starts with a known value. New artifacts only; this repo's four artifacts without one get it in the migration. |
| W14 | Open PR, self-merge on green | Existing harness | Already prose plus the merge gate hook in apps; nothing new to add. |
| W15 | Recap on request | Hybrid | Code builds a digest (decision log, study index, status, merged PR titles from `git log`); the model writes; an agent fact-checks. |
| W16 | Send a harness idea | Existing harness | `harness-idea` with `idea-file.mjs`; unchanged. |
| W17 | Human summary at the top of a doc, no bare ids | Check | A lint flags id-shaped tokens (`D-NNN`, `R-NNN`, `#NN`) with no words next to them in the summary section. It is a lead, not a verdict, like `review-precheck`. |

## 3. Tasks inside each skill and agent

### 3.1 Research skill (from `research-protocol`)

| Task | Class | Split and reason |
| --- | --- | --- |
| Read the framework and past decisions | Prose | Reading for meaning. Code can print the list of files to read. |
| Take the next study id; add the study to the index | Code | `research.mjs new <slug> --tier <t>` takes the id across branches, scaffolds the folder from the templates and adds the index row. |
| Frame the decision; "if nothing changes, don't run it" | Prose | Judgement about the product. |
| Pick the tier | Prose | Cost of being wrong is judgement; the type branch's default tier is one line of text, not worth code. |
| Write hypotheses, nulls and kill criteria | Prose | The core of the method; needs meaning. |
| Search plan meets the tier minimum (disconfirming queries per hypothesis, at least as many as supportive) | Check | Countable once the plan is a table with a "direction" column. |
| Commit the protocol before the first search | Hybrid | A CI check cannot prove it: PRs are squash-merged, so protocol and report land in one commit on `main`, and CI checks out one commit. Two local guards can: the **pre-commit hook** refuses a staged report whose protocol is not already in an earlier commit, and a **PreToolUse hook** refuses web search and fetch tools (and `curl`) while an open study's protocol is uncommitted. The report records the protocol's commit id. Both are tripwires against forgetting, not proof against someone determined, and a protocol the study marks as draft until frozen is exempt until it is. |
| Deep tier: App Creator approves kill criteria first | Check | A decision entry linking the protocol must exist before the first evidence commit. |
| Search both ways, find missing voices | Prose | The outside world and judgement. |
| Log every source | Check | A new, versioned evidence-log schema (method version 2) with fixed columns and fixed values for grade, direction and opened. A lint checks columns, unique ids and known values. This repo's studies use three different headers and free-text grades, so they stay on version 1 and are exempt. |
| Verify: open each source and copy a supporting quote | Hybrid | `research.mjs cite <id> <file>` takes text saved by any fetch tool, splits the quote on ellipses, and checks each part appears in it (whitespace-normalised); on a match it saves a trimmed snapshot. A failed match or an unreadable source (PDF, script-rendered page, blocked site) is **"needs manual check"**, not unverified: the lead records the manual verification. Otherwise automation would strip exactly the A-grade sources that are often PDFs. The model still judges whether the quote supports the claim. |
| Count shared origins once | Hybrid | The model records an origin key per row; code counts independent origins per claim. |
| Apply confidence and verdict rules | Check | The framework says "apply mechanically", but the rules hide judgement: whether a kill criterion triggered (in this project several were judgement calls, one accepted by the product owner), "weaker than", "credible" for Mixed, whether a claim is about size or frequency, Reshape against Needs primary research, and hypotheses that are method checks with no evidence rows. Confidence is also defined per claim, not per hypothesis. So code does **not** set verdicts: `research.mjs consistency` flags a verdict or confidence higher than the recorded grades allow (for example "high" with no A source, or Supported with a recorded kill trigger). The lead decides; only the App Creator overrules a triggered kill criterion, as the framework already says. |
| Write the report | Prose | Verdict first, strongest evidence against, findings. Code can pre-fill the verdict table it computed. |
| Skeptic review: pass only the folder, not the conversation | Hybrid | `research.mjs packet` copies the protocol and evidence log (without the lead's verdicts) to a temporary folder and the agent gets that path. A convenience, not a guarantee: the agent can still read the repo, so the instruction stays. |
| Skeptic sample (light: 5; standard: every source behind a high or medium claim plus 5 others) | Code | A selection from the evidence log seeded from the protocol's commit id, so the lead cannot pick the seed. |
| Fix or rebut every must-fix item | Check | The Skeptic review section is a table; every must-fix row needs a status of fixed or rebutted with a reason. |
| Update the index with the verdict; record the decision | Code | `research.mjs close <id>`; the decision goes through `decisions.mjs`. |
| Rules: never search before the protocol, never drop evidence, ethics | Prose | Behaviour, backed by the checks above where possible. |

### 3.2 Research type branches

| Branch | Task | Class | Split and reason |
| --- | --- | --- | --- |
| Market size | Define unit, value basis, geography, segment | Prose | Definitions are product choices (some go to the App Creator). |
| | Bottom-up and top-down arithmetic at low, base, high | Hybrid | The model writes the formula (sizing needs division, sums across countries and ranges that invert, not only a product of factors); `research.mjs size` evaluates it over the factor table at low, base and high. Hand arithmetic is error-prone and costs tokens each rerun. |
| | Sensitivity: vary one factor, rank by swing; flag one driver over half the swing | Code | Pure arithmetic over the same table. |
| | Reconcile the methods; penetration reality check | Prose | Explaining a gap needs meaning. Code can print the gap ratio. |
| Competitor scan | Define competition from the customer's side; discovery routes | Prose | Judgement and search. |
| | Saturation test (stop when the last N queries found nothing new) | Hybrid | The model marks each candidate as new and relevant; code counts and reports saturation. |
| | Status active, stale or dead | Hybrid | The model records the last-activity date found; code applies the date thresholds. |
| | Landscape table, excluded list with reasons | Check | Columns and a reason per exclusion. |
| Competitive analysis | Criteria and weights from the customer's job | Prose | Judgement, pre-registered. |
| | Scores 0 to 3 per criterion, weighted totals, ranking | Hybrid | Scores are judgement; totals and ranks are code. Unknown is its own value, never zero. |
| | Only "exists" counts as parity; planned case shown apart | Code | A status column decides which scores count. |
| | Sensitivity of the ranking to the weights | Code | Re-rank under each weight set. |
| | Frames (jobs, switching, moats), anticipated responses, where we lose | Prose | Meaning. The "where we lose" section is required: a check verifies it exists and is not empty. |
| User reality check (persona validation part A) | Hypotheses, source mix, variation, building blocks, segment candidates | Prose | Research judgement. Tables get the usual lint. |
| External research handoff | Write a neutral prompt that hides the hoped-for answer | Prose | Neutrality is meaning; the skeptic re-reads it. |
| | Save the prompt and the pasted text with the study | Code | `research.mjs addendum --paste <file>`. |
| | Label unopened sources "sponsor-accepted, not opened" and keep the label in every summary | Hybrid | The label is a value in the evidence log's "opened" column; the calculator gives those rows no weight unless the App Creator's logged override says otherwise, and the rendered verdict table always shows the label. The label cannot get lost in a rewrite because the table is the source. |

### 3.3 Research skeptic agent

| Task | Class | Split and reason |
| --- | --- | --- |
| Read only the inputs | Code | The packet (3.1) holds only the inputs. |
| Audit sources | Prose | The agent opens sources itself with its own tools. The lead's snapshots prove a quote was on a page, not that the skeptic checked it (this project's own skeptic said so), and the agent has no shell to run scripts. |
| Reach its own verdict before reading the lead's | Prose | The agent applies the rules by hand. A shared calculator would make a bug hit lead and skeptic alike, and "write first, read the report later" needs a second agent run, which doubles the standard tier's cost. The consistency check can run on both afterwards as a third view. |
| Compare with the lead | Hybrid | Code can line up the two verdict tables; who is right is the agent's judgement. |
| Attack (bias list), pre-mortem at deep tier | Prose | The reason an independent model exists. |

### 3.4 Discovery interview (from `inception-interview` and persona validation part B)

| Task | Class | Split and reason |
| --- | --- | --- |
| Read the artifact and what it depends on | Code | `discovery.mjs inputs <artifact>` prints the files from the order in `WORKFLOW.md`. |
| List and rank the gaps | Prose | Judgement. |
| Ask one question at a time | Prose | Conversation. |
| Challenge weak claims | Prose | Judgement. |
| Write the artifact with its outline | Check | The outline per artifact is a heading list in the module; a check verifies the headings, the status line and the Assumptions and Open questions sections. |
| Personas: every trait tagged with an evidence id or Assumption | Check | Regex over persona bullets. Tags are study-qualified (`R-NNN/E-NN`), because evidence ids repeat in every study. |
| Personas: evidence ids exist in the named study's evidence log | Check | Cross-file lookup on the qualified id. |
| Personas: quotes are real (match the evidence log) or labelled illustrative | Check | String match against the log's quote column. |
| Personas: core pain rests on medium or high evidence | Prose | Evidence rows carry grades, not confidence; confidence lives in the report's verdict table per hypothesis. Code can print the grades and the hypothesis verdicts behind the cited ids as a lead; the judgement stays. |
| Personas: at least one anti-persona; Assumptions section lists every Assumption tag | Check | Section presence and set comparison. |
| Success metrics: each has a definition, target and measure | Check | Table columns; a target may be "later" if the profile says so. |
| Log decisions | Code | `decisions.mjs`. |

### 3.5 Other discovery skills

| Skill | Task | Class | Split and reason |
| --- | --- | --- | --- |
| Riskiest hypotheses | Scan the market | Prose | Runs studies through the research skill. |
| | Extract hypotheses across value, usability, feasibility, viability | Prose | Judgement. |
| | Rank by impact if wrong times uncertainty; mark the top three to five | Hybrid | Scores are judgement; product and rank are code. |
| | Hypothesis table shape (id, statement, risk type, scores, test, signal, status) | Check | Columns and known status values. |
| | Update a hypothesis status after a study or prototype | Code | `discovery.mjs hypothesis <id> --status <s> --evidence <link>`. |
| Prototype | Pick the flow; design; build the page with fake data | Prose | Taste and building. |
| | Add or update the index row (link, flow, hypotheses, version, lesson) | Code | `discovery.mjs prototype add` and `learn`. |
| Design alternatives | Three whole-journey options, recommendation, borrowed ideas | Prose | Design judgement. |
| | Board has the required parts (journey, key screens, strengths and weaknesses, effort) | Prose | The board is an Artifact page, not a repo file; a check cannot read it. |
| Brief pack | Inventory of what exists, with maturity | Code | Lists docs and their status lines. |
| | Classic brief components | Code | Static list shipped with the module. |
| | Gap table, ratings for completeness and evidence | Hybrid | Rows generated by code from the two inventories; ratings are judgement. |
| | Short theme files, one index, glossary | Prose | Writing. Starter templates give the shape. |
| | Source map: every section names an existing source | Check | Links resolve (the existing link check) and every section has at least one. |
| | Reconcile the tracker with the inventory | Hybrid | Code lists status lines that disagree with the inventory; the model fixes them. |
| Architecture handoff | Product and meta-architecture, options, costs | Prose | Judgement; prices need spikes, not code. |
| | List app-studio's packs and modules | Code | The sync tool already knows them; a list command prints them. |
| | App profile draft | Check | Written as `Field=value` pairs and validated by `app-setup.mjs profile --dry-run`, so `new-app` can apply it unchanged. |
| | Independent review | Hybrid | `discovery.mjs packet <doc>` gives the agent the document and its linked sources only; the agent reviews. |
| | Every finding fixed or recorded | Check | The review section is a table; every row has a status. |
| Exit gate | Score criteria done, partial or missing | Hybrid | Code drafts it from status lines, the artifact map and the open PRs the thread passes in; the model corrects rows where an artifact was replaced or lives elsewhere. |
| | Cross-artifact consistency (MVP serves the primary persona, metrics measure the MVP, constraints respected, risky hypotheses have a test) | Prose | Meaning. Code can list hypotheses with no test, which covers the last item. |
| | Write the report | Hybrid | Code renders the table; the model writes the gaps and the next one or two steps. |
| | Sign-off | Prose | A question to the App Creator; the decision goes through `decisions.mjs`. |
| Recap | Gather inputs | Code | `discovery.mjs digest`. |
| | Write phases, lessons, candidate skills, one-pager | Prose | Writing and judgement. |
| | Independent fact-check | Hybrid | Packet by code; review by `doc-reviewer`. |
| Doc reviewer agent | Read only the packet; grade findings; say what it could not verify | Hybrid | Packet by code, review by the agent, findings table checked. |

### 3.6 Decision log (core)

| Task | Class | Reason |
| --- | --- | --- |
| Is this a product decision the App Creator made? | Prose | Judgement; working assumptions go in the artifact instead. |
| Words of the decision, the why, the alternatives | Prose | Writing. |
| Id, date, fields, position, supersede, status | Code | Fixed format; the skill disappears into one template line and `decisions.mjs`. |
| No duplicate ids | Check | `health`. |

## 4. Totals

Counting the rows in sections 2 and 3 after the review's fixes (102 rows, counted by script): Code 17, Check 19, Hybrid 26, Prose 34; one row is code and a check (parallel-thread ids), three rows are prose with a small code or check part, and two rows the existing harness already covers. Code and checks take 37 of 102 (about a third); hybrids about a quarter; prose a little over a third. Rows are not weighted by how often a task runs or how many tokens it costs, so these shares describe the method's shape, not the saving. Before the review the count was Code 24 and Hybrid 22: the review moved verdicts, the exit gate, the tracker and several skeptic tasks towards judgement.

Rough load saving (bytes divided by four, not measured with `/context`): today a research run loads the protocol skill, one type skill, the framework and two templates, about 7K tokens. With branches and the bookkeeping moved into commands, the research skill plus one branch plus the framework might fall to about 5K; this is a guess, since the framework keeps its rules (code no longer replaces them) and script output adds tokens back. The larger saving is per session: one research skill description instead of five, and no discovery descriptions after "start building". The decision-log skill (about 0.3K) goes away. Discovery skills shrink less, because most of their content is judgement.

## 5. Revised plan

Changes to [pass 1](app-studio-plan.md), section by section. Where nothing is said, pass 1 stands.

### 5.1 Packaging (pass 1, section 3.1): unchanged

Core decisions tool, a lasting `research` module and a phase-bound `discovery` module. Pass 2 strengthens the case: both modules now carry a script, which needs the module structure anyway.

### 5.2 Components (pass 1, section 3.2): add one script and one check hook per module

- **Core:** `decisions.mjs` as in pass 1. **New:** a generic extension point in `health` (none exists today: its list of checks is fixed): a module may ship `module-check.mjs` in its managed files (not `check.mjs`, which is the core hook runner's name); `health` runs it on **the files the commit or PR changes only**, so a broken old table never blocks an unrelated commit. This keeps module rules out of the core sync tool.
- **New pattern, said plainly:** app-studio's managed files are docs today, and the one process module ships its script as a starter file run through npm. Scripts as managed files, run with plain `node`, are new; they need `node --test` tests in app-studio and a smoke run for "core plus a module, no stack".
- **Module `research` adds** `research.mjs` (Node built-ins; it reads text saved by whatever fetch tool the session has, so it does not depend on `curl`): `new`, `cite`, `lint`, `consistency`, `packet`, `sample`, `size`, `score`, `saturation`, `addendum`, `close`. `module-check.mjs`: evidence-log shape (method version 2 only), skeptic must-fix rows closed. Two hooks: the pre-commit refusal of a report whose protocol is not committed, and the PreToolUse refusal of searches while a protocol is uncommitted. The agent `research-skeptic` keeps its read and web tools only.
- **Module `discovery` adds** `discovery.mjs`: `next` (a suggestion), `inputs`, `status` (prints the status column on demand), `gate` (drafts the exit-gate table), `inventory`, `digest`, `packet`, `hypothesis`, `prototype`. `module-check.mjs`: status lines, required headings, qualified persona tags and quotes, hypothesis table, review tables, App profile draft.
- **Data shape:** every table that code reads stays a Markdown table with a fixed header in the template, so people can still read and edit it, and the lint catches a broken table before code misreads it. No JSON files for content.
- **Skills shrink:** each code row above becomes one command line in the skill; the framework keeps grades, reasons and ethics, and points to `research.mjs verdict` for the rules it applied.
- **`status.md` stays hand-written** for notes, risks and the sub-milestone record; its status column is checked against `discovery.mjs status` instead of being generated, so parallel PRs never fight over a generated file.

### 5.3 Checks (pass 1, section 3.3): extended

The table in pass 1 stays; the module checks in 5.2 join it. Every new check is a note, not a failure, for a grace period counted from **the day the app installs the version that brings it**, not by app-studio releases: apps sync rarely (this repo is on 0.28.1 while app-studio is on 0.44.1), so "one release" would make an app jump straight to failing.

### 5.4 Conflicts (pass 1, section 5): three more

| # | New component | Conflicts with | Resolution |
| --- | --- | --- | --- |
| 18 | Module checks run by `health` | the core's rule that health fails only on what would mislead a session; the pre-commit hook runs health on every commit | Module checks look only at changed files and report content problems, never versions. |
| 19 | Snapshots saved by `cite` | repo size, copyright, the health link check | Text only, trimmed around the quote, in a `sources/` folder per study; no images or PDFs; the ethics rule (short quotes, links) still applies; snapshots are not Markdown, so the link check ignores them. |
| 20 | Verdict consistency check | the skeptic's independence; the framework's rule that only the App Creator overrules a kill criterion | Code never sets a verdict; the skeptic applies the rules by hand; the check is a third view. No new override path. |
| 21 | Discovery modules added by `new-app` | `new-app`'s discovery branch, which says "only `install`, no `pack add`" | The wiring step changes that line to allow the two modules (but no stack pack). |
| 22 | Search-blocking PreToolUse hook | the core's write and git hooks, and research outside a study (a quick lookup in any thread) | The hook acts only while a study folder has an uncommitted protocol, and names the study so the thread can commit or close it. |
| 23 | Evidence-log schema version 2 | this repo's studies on version 1 | Each protocol states its method version; checks and the consistency command apply to version 2 only. Old reports are never reformatted, since that would mean re-grading them. |

### 5.5 Sequencing (pass 1, section 6): checks before calculators

| Step | Work | Change from pass 1 |
| --- | --- | --- |
| 0 | Modules can ship skills and agents, plus the module `check.mjs` extension point | adds the extension point |
| 1 | `decisions.mjs` and the duplicate-id check | unchanged |
| 2a | Module `research`: skill with branches, agent, docs, `research.mjs new`, `cite`, `packet`, `sample`, `close`, and `check.mjs` | split: bookkeeping and checks first |
| 2b | `research.mjs consistency`, `size`, `score`, `saturation` | new: after one real study has run on 2a. No app can run 2a until this repo migrates (step 6) or a scratch discovery app exists, so step 2a adds a **scratch discovery app** to studio-scratch (today it holds a build-phase app) and a discovery live-check scenario |
| 3a | Module `discovery`: skills, agent, docs, `discovery.mjs inputs`, `next`, `status`, `prototype`, `hypothesis`, `digest`, `packet`, and `check.mjs` | split |
| 3b | `discovery.mjs gate` and `inventory` | new: after 3a has a real status source |
| 4 | Wiring in `new-app`, template and project instructions | unchanged |
| 5 | Coherence review | unchanged |
| 6 | Move this repo onto the shared version | unchanged; old studies stay on method version 1 and are not converted |

### 5.6 Migration (pass 1, section 8): one addition

This repo's evidence logs use three different headers with free-text grades and directions, and none has the opened, origin or community columns. So they are marked method version 1 and exempt from the new checks; nothing in them is reformatted or recomputed, and past verdicts stay as the App Creator accepted them. Persona tags in this repo stay unqualified; the qualified form applies to new personas. The four artifacts without a status line get one in the migration PR.

### 5.7 Product decisions added (pass 1, section 9)

| Question | Recommended answer | Why |
| --- | --- | --- |
| Should code check every study verdict against the recorded evidence, flagging any verdict stronger than the evidence allows? | yes, for studies on method version 2 | Catches overclaiming cheaply; code never sets a verdict, so the judgement stays with the lead, the skeptic and the App Creator. |
| Should a check compare the status tracker with each artifact's own status line? | yes | The hand-kept tracker drifted several times in this project; a check catches it without a generated file. |
| Should research save text snapshots of cited sources in the repo? | yes, text around the quote only | Lets later readers re-check a claim when a page changes or blocks automated access. It does not replace the skeptic opening sources itself. |
| Should a hook block web searches while a study's research plan is uncommitted? | yes | It turns "plan before searching" from a promise into a tripwire, at the cost of one commit before the first search. |

## 6. Risks of moving to code

- **False precision.** A computed "medium confidence" looks objective but rests on grades the model chose. Mitigation: the verdict table shows the grades it used; the skeptic grades independently.
- **Brittle tables.** A model that reformats a table breaks the parser. Mitigation: the lint runs first and names the broken row; templates carry the header.
- **Fetch limits.** PDFs, script-rendered pages and blocked sites defeat automated quote matching, and they include the strongest sources. Mitigation: a failed match is "needs manual check", never "unverified"; it never blocks the study.
- **Gaming the checks.** A thread can commit a protocol after searching, or tag a trait with any real id. Mitigation: the hooks are tripwires against forgetting, as app-studio's own verdict files are; the skeptic remains the guard against bending the method.
- **Maintenance in app-studio.** Every script needs tests and a release under app-studio's rules. Mitigation: keep scripts small, Node built-ins only, and add commands only when a real study needs them (steps 2b and 3b wait for that).
- **Rules drift between prose and code.** If the framework text and the consistency check disagree, sessions get two answers. Mitigation: the framework stays the rule; the check cites the rule line it applies, and a test pins each rule.

## 7. Independent review

A separate strong-model agent reviewed this pass cold, with read access to both repos, and checked claims against the files. Verdict: "the bookkeeping and shape checks are sound, but the headline wins (computed verdicts, CI ordering proof, a generated tracker and exit gate) rest on a false claim about the data and on judgement disguised as rules". All findings were accepted; two of them were spot-checked again by the author (the evidence-log and verdict-table headers really differ between studies; the framework really gives overrides only to the product owner).

| Grade | Finding | Change made |
| --- | --- | --- |
| critical | A CI check cannot prove "protocol before report": PRs are squash-merged, so both land in one commit, and CI checks out one commit; it is also easy to game | Now a pre-commit refusal plus a search-blocking hook, called tripwires; the report records the protocol's commit id (3.1, 5.2, conflict 22) |
| critical | The claim that this repo's evidence logs share one column set is false (three headers, free-text grades and directions, no opened or origin columns, ids repeat per study) | Versioned schema; old studies exempt and never reformatted (3.1, 5.6, conflict 23) |
| critical | Verdicts are not computable: kill-criterion triggers were judgement calls, several rule terms need judgement, confidence is per claim; and "the lead may override" contradicts the framework | Code checks consistency only; only the App Creator overrules (3.1, 5.7, conflict 20) |
| important | Quote matching would mark PDFs and blocked pages unverified, stripping the strongest sources | "Needs manual check" instead; ellipses split; any fetch tool's saved text accepted (3.1, section 6) |
| important | The skeptic has no shell or write tools; a packet does not isolate it; a shared calculator removes independence; "write first, read later" doubles cost | Skeptic audits and grades by hand; packet called a convenience (3.1, 3.3) |
| important | Persona evidence ids repeat in every study; evidence rows carry grades, not confidence | Study-qualified tags; core-pain check back to prose (3.4) |
| important | Exit gate, next artifact and tracker are not pure code (a planned file never existed, status values are free text, notes are judgement, generated files conflict in parallel PRs) | All three Hybrid; tracker checked, not generated (W2, W9, W10, W13, 3.5) |
| important | Step 2b waits for a study no app can run; `new-app`'s discovery branch forbids `pack add` | Scratch discovery app and scenario in step 2a; conflict 21 |
| important | A health extension would block unrelated commits; "note for one release" fails for apps that sync rarely | Changed files only; grace period from the app's install date (5.2, 5.3) |
| important | Scripts as managed files are a new pattern with no smoke mode for "no stack" | Stated as new, with tests and a smoke run (5.2) |
| minor | Counts unweighted; some "Code" rows hide judgement (comparison, saturation, sample seed) | Rows reclassified; seed from the protocol commit; counts redone with a note (section 4) |
| minor | Token estimate after the change unsupported | Replaced by a hedged guess and the per-session description saving (section 4) |
| minor | Sizing needs formulas, not products; scoring needs "unknown is not zero" | Fixed (3.2) |
| minor | `check.mjs` would clash in name with the core hook runner | Renamed `module-check.mjs` (5.2) |

The reviewer could not verify: whether this repo's ruleset requires branches to be up to date (which decides whether duplicate ids are always caught at merge), whether an agent's file reads can be limited to one path, whether every source type is reachable, and how the proposed names route. It read the code and believes `pack add` works in discovery without the base pack, but did not run it.

## 8. What this pass did not check

- No script described here exists or was prototyped; the classification is from reading the skills, the framework and this repo's study files.
- The task counts in section 4 depend on how tasks were split into rows; another split would move the numbers, not the conclusion.
- Token savings are estimated from file sizes, not measured.
- Whether `curl` reaches every source type the studies used was not re-tested.
