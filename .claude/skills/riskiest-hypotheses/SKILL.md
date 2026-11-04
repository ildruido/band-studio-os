---
name: riskiest-hypotheses
description: Run a quick market scan (competitors, alternatives, pricing, trends) and produce a ranked list of the riskiest hypotheses with a test for each. Use when Ale asks for market research, validation, competitors or risks.
---

# Riskiest hypotheses

Product-specific facts (product, users, principles, key concepts, market segments, domain risks, look and feel) come from the **Inception profile** in `CLAUDE.md`. This skill stays generic.

## Steps

1. **Read** `docs/inception/product-foundation.md`, `personas.md`, the decision log, and any research reports in `docs/research/` (above all the persona reality check: don't redo it, build on it).
2. **Scan the market** as a study run with the `research-protocol` skill, at standard tier or higher: pre-register the questions and kill criteria, search both ways, keep the evidence log, and run the skeptic review. Use the type skills: `market-analysis` for size and health and `competitor-scan` for the competitors, then `competitive-analysis` if a positioning decision needs it (each is its own study with its own protocol). `anthropic-skills:deep-research` may help the search, with its output treated as leads. Cover the market segments in the Inception profile, plus what the target users do today without a product. Cite every source in the evidence log. Keep it focused: a scan, not an exhaustive study.
3. **Extract hypotheses** across four risks: value (do the target users want this?), usability (can they use it?), feasibility (can we build it at an acceptable AI cost?), and viability (will they pay, and does the business work?).
4. **Rank them** by impact if wrong × how uncertain we are. Mark the top three to five as riskiest.
5. **Plan a test for each riskiest one:** a cheap method (interviews, a fake-door test, a prototype test, a cost spike), the pass/fail signal, and which prototype covers it if any.
6. **Write** `docs/inception/market-and-hypotheses.md`, linking the study report for the evidence: key findings, the strongest evidence against, competitor table, opportunity and differentiation, the hypothesis table (id `H-0N`, statement, risk type, impact, uncertainty, test, signal, status), and sources.
7. **Ask Ale** one question at a time only about ranking or anything the research could not settle. Then open one PR.
