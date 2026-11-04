---
name: persona-validation
description: Ground personas in evidence. Part A runs a desk-research reality check (does the target group exist, does it have the problem, how does it cope today) before any persona is written. Part B audits a personas draft so every trait traces to evidence or is marked as an assumption. Use before and after writing personas.
---

# Persona validation

A type layer on the `research-protocol` skill: follow every step of it, plus what this skill adds. It never removes a generic guardrail. Method: `docs/research/framework.md`.

Product facts (target users, starting idea, principles, market segments) come from the **Inception profile** in `CLAUDE.md` and from `docs/inception/product-foundation.md`. This skill stays generic.

**Default tier: standard.** The reality check decides whether we are building for people who exist and have this problem, so a wrong answer is expensive. Go deep if the product's whole bet rests on one segment that the evidence leaves unclear.

## Part A: reality check (before any persona is written)

Run `research-protocol` as study `R-NNN-persona-reality-check`. Don't draft personas until its report is done and the product owner has seen the verdict.

- **Scope is a product decision.** If the launch markets (countries, languages) aren't settled in the decision log, ask the product owner before pre-registering: one question, with your recommended answer.
- **Time box:** about one working session by default. Record it in the protocol.

### Standard hypotheses

Pre-register all six, worded for this product's target users and the job the product does for them. H1 to H4 are key; H5 and H6 are not. Set the numbers in each kill criterion in the protocol, before searching. You may add hypotheses; don't drop these.

| Id | Hypothesis | Null or strongest alternative | Example kill criterion |
| --- | --- | --- | --- |
| H1 Exists | The target group exists in meaningful numbers in our launch markets. | It is too small or too scattered to build for. | No credible source supports a size above the threshold set in the protocol. |
| H2 Does the job | Within that group, members themselves do the job the product does, rather than intermediaries (agencies, managers, outside services). | Someone else does it, or nobody does. | Most evidence shows the job is handed to others or skipped. |
| H3 Job hurts | The job costs them meaningful time, money or results, and they say so without being prompted. | It is a minor annoyance next to their real problems. | The pain shows up mainly when prompted or in vendor material, or it ranks low among their problems. |
| H4 Workarounds fall short | They use tools or people today, and the same shortcomings come up again and again. | What they use today (free tools, friends, freelancers) is good enough. | Satisfaction with current workarounds outweighs complaints in independent sources. |
| H5 Angle matters | The product's distinctive angle (from the Inception profile's principles) matters to them. | They want polished or generic output, or don't care. | Evidence shows a clear preference against the angle, or indifference. |
| H6 Would pay (signal only) | They already pay for comparable help. | They don't pay for this kind of help. | No evidence that they pay for comparable help today. Desk research rarely settles this either way: expect "Insufficient evidence" and pass it to the riskiest hypotheses. |

Also ask, as a neutral question: **what are this group's biggest problems, in their own words?** If the job the product does is not near the top, that is a finding, not noise.

### Source mix

- H1 needs at least one grade A source (official or industry statistics with a method, platform data reports, academic work). A vendor's size estimate is a lead, not evidence.
- H2 to H5 need first-hand voices from at least three independent communities (different platforms, niches or countries).
- Include those who quit or failed: people or groups who stopped doing the job, tools people abandoned and why.
- Vendor material never carries a hypothesis.

### Look for variation

As you log evidence, note the attributes that vary across it: role in the group, career stage, how often they do the job, budget, skills, tools, who helps them, niche, country. These become persona dimensions. Personas split where the evidence splits, not where imagination does.

### Extra outputs in the report

Add these sections to the generic report, after Findings:

- **Persona building blocks:** a table of evidence-backed traits (trait, the variation seen, evidence ids, confidence).
- **Segment candidates:** two to four clusters the evidence suggests, with what sets each apart and how strong the evidence for it is.
- **Anti-personas:** people who look like targets but aren't, with the evidence.
- **Open questions for interviews:** what only talking to real people can settle.

A verdict of Reshape proposes the change (a different target group, a different job, a narrower segment). The product owner decides it before personas start, and it goes into the decision log.

## Part B: persona evidence audit (after drafting personas)

When `docs/inception/personas.md` is drafted (with `inception-interview`), audit it before opening the PR:

1. **Every trait is tagged:** an evidence id from the reality check (`[E-07]`) or `(Assumption)`.
2. **The core is evidence-backed:** each persona's main pain and current workaround rest on medium or high confidence evidence. The primary persona can't be the exception. If one doesn't, the persona isn't ready: say so, or mark it as speculative.
3. **No contradictions:** no trait goes against the evidence. No persona exists that the evidence did not suggest, unless it is marked speculative with the reason.
4. **Honest quotes:** a quote is either real, short and sourced from the evidence log, or labelled "illustrative". Never present an invented quote as real.
5. **Illustrative details are labelled:** names, photos, ages and similar flavour are marked illustrative.
6. **At least one anti-persona** from the reality check.
7. **Assumptions listed:** every `(Assumption)` appears in an Assumptions section with how to test it. These feed the riskiest hypotheses.

Run the audit as a separate self-review pass: re-read the reality check report, then check the draft against it line by line. Record the result in an **Evidence** section of `personas.md`: the reality check it rests on, the share of traits backed by evidence, and any persona marked speculative.
