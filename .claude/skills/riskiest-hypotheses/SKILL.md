---
name: riskiest-hypotheses
description: Run a quick market scan (competitors, alternatives, pricing, trends) and produce a ranked list of the riskiest hypotheses with a test for each. Use when Ale asks for market research, validation, competitors or risks.
---

# Riskiest hypotheses

## Steps

1. **Read** `docs/inception/product-foundation.md`, `personas.md` and the decision log.
2. **Scan the market.** Use `anthropic-skills:deep-research` for the broad scan and `product-management:competitive-brief` for direct competitors. Cover band and artist tools, AI design and content tools, generic social schedulers, and what bands do today (DIY, friends, freelancers). Cite every source. Keep it quick: this is a scan, not a study.
3. **Extract hypotheses** across four risks: value (do bands want this?), usability (can they use it?), feasibility (can we build it at an acceptable AI cost?), and viability (will they pay, and does the business work?).
4. **Rank them** by impact if wrong × how uncertain we are. Mark the top three to five as riskiest.
5. **Plan a test for each riskiest one:** a cheap method (interviews, a fake-door test, a prototype test, a cost spike), the pass/fail signal, and which prototype covers it if any.
6. **Write** `docs/inception/market-and-hypotheses.md`: key findings, competitor table, opportunity and differentiation, the hypothesis table (id `H-0N`, statement, risk type, impact, uncertainty, test, signal, status), and sources.
7. **Ask Ale** one question at a time only about ranking or anything the research could not settle. Then open one PR.
