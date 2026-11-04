---
name: research-protocol
description: Run any research (desk research now; interviews and tests later) with guardrails against confirmation bias, scaled by tier (light, standard, deep). Use whenever a task needs research, before the first search, and from every type-specific research skill.
---

# Research protocol

The method, its rules and its reasons are in `docs/research/framework.md`; this skill is the procedure. Product facts (product, users, principles, market segments, domain risks) come from the **Inception profile** in `CLAUDE.md` (the App profile after inception). This skill stays generic.

A type-specific skill (such as `persona-validation`) adds hypotheses, sources and outputs on top of these steps. It never skips one.

## Steps

1. **Read first:** `docs/research/framework.md`, the decision log, and the artifacts the question touches. Take the next free `R-NNN` id from the framework's Studies table.
2. **Frame.** Write down the decision the study informs and what changes if the answer is yes or no. If nothing would change, tell the product owner and don't run it.
3. **Pick the tier** from the framework's table, by the cost of being wrong. When unsure, take the higher one. A type skill's default tier is the floor.
4. **Pre-register.** Create `docs/research/R-NNN-<slug>/protocol.md` from [protocol-template.md](protocol-template.md):
   - Declared priors: what you already believe and have already seen, and where it comes from.
   - Hypotheses as falsifiable claims, each with its null or strongest alternative and a kill criterion that could really trigger. Ask yourself, "What result would make me say this is false?" If the answer is "nothing realistic", rewrite it.
   - Scope, the search plan with neutral and disconfirming queries (at least the tier minimum, and at least as many as the supportive ones), and the time box.
   - Add the study to the framework's Studies table.
   - Commit and push the protocol on the study's branch **before the first search**. Don't search before that commit exists.
   - Deep tier: ask the product owner to approve the kill criteria (one question, with your recommended answer) and wait for the answer before searching.
5. **Search both ways.** Run the plan. Keep queries neutral; never phrase a query so that it assumes the answer. Run the disconfirming queries as a separate contrarian pass, aiming to build the strongest case against each hypothesis. Search for the missing voices the plan names (the quiet, those who quit, tools people abandoned). Stop at the time box and report what was left.
   - `anthropic-skills:deep-research` may help with the search at standard or deep tier. Treat its report as a list of leads (grade D): every claim you use goes into the evidence log with its original source opened.
6. **Log as you go.** Every relevant source goes into the evidence log in [report-template.md](report-template.md), against as carefully as for. Exclude only by the protocol's rules, and list what you excluded. If the plan has to change, write a Deviation (date, what, why, effect) in the protocol; never edit the rest of it.
7. **Verify.** Open each source you cite and copy a short quote that supports the claim. Trace statistics to their origin and count shared origins once. Mark anything you can't open as unverified; it carries no weight.
8. **Conclude.** Apply the framework's confidence and verdict rules mechanically, kill criteria first. Write `report.md` from the template: verdict, then the strongest evidence against, then the findings. Use calibrated words; desk research never "validates".
9. **Skeptic review.**
   - **Light:** do it yourself as a separate pass. Re-read only the protocol and the evidence log, follow the `research-skeptic` agent's steps, and note in the report that it was a self-review.
   - **Standard:** run the `research-skeptic` agent with only the study folder path and the tier. Don't pass it the chat, the sponsor's hopes or your conclusions.
   - **Deep:** first run an independent replication: a fresh agent gets only `protocol.md` and the framework, and writes its own evidence log and verdicts to `replication.md`. Compare the two runs in the report. Then run `research-skeptic`, which also writes a pre-mortem.
   - Fix or rebut every must-fix item in the report's Skeptic review section. Leave disagreements visible; don't resolve them by deleting them.
10. **Deliver.** One PR per study, titled `docs(research): R-NNN <title>`, with the protocol commit first. Update the Studies table with the verdict. Send the product owner the verdict, the strongest evidence against and the link, in a few lines. The product owner decides; record the decision with the `decision-log` skill, linking the report, and update any hypotheses it touches.

## Rules

- Never search before the protocol is committed. Never edit the protocol after the first search, except its Deviations section.
- Never drop or soften evidence because it is inconvenient.
- A triggered kill criterion forces Reshape or Stop. Only the product owner can overrule it, and the override is logged as a decision.
- Don't ask the product owner about method; decide it and record it in the protocol. Ask the product owner only about the decision the study informs, and the kill criteria at deep tier.
- Follow the framework's ethics: short quotes with links, no personal details beyond what a claim needs.
