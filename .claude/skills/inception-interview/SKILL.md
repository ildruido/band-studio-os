---
name: inception-interview
description: Fill or refine an inception artifact (foundation, personas, metrics, constraints, MVP and roadmap) by interviewing Ale one question at a time. Use when Ale asks to work on any of these documents.
---

# Inception interview

## Steps

1. **Read first.** `docs/inception/workflow.md`, `docs/inception/decision-log.md`, the target artifact if it exists, and the artifacts it depends on (see the Order in `workflow.md`). For the foundation, start from `band_studio_os_product_foundation.md` in the project files: a starting point, not a bible.
2. **List the gaps** for yourself: what the artifact needs that is missing, vague or contradicted elsewhere. Rank them by how much they change the product.
3. **Ask one question at a time.** Each question has a short context line, two to four options, and your recommended answer with one line on why. Never ask two things at once. Stop asking when the remaining gaps are minor: fill those with your recommendation and mark them `Assumption`.
4. **Challenge, don't transcribe.** Point out weak value claims, overlapping personas, metrics that can't be measured, and scope creep. Use `product-management:product-brainstorming` when a gap needs ideas rather than an answer.
5. **Write the artifact** in `docs/inception/<file>.md`. Keep it short, lead with conclusions, mark assumptions and open questions in their own sections.
6. **Log decisions.** Every answer that settles a product question becomes an entry via the `decision-log` skill.
7. **Open one PR** for the artifact, titled `docs(inception): <artifact>`, and send Ale the link with the open questions left.

## Artifact outlines

- **Product foundation:** problem, target market, vision, value proposition, key product artifacts and concepts (Identity Studio, Consensus Engine, Campaign Wizard…), principles (e.g. the Authenticity Mandate), open questions.
- **Personas:** two to four personas. For each: role in the band, goals, pains, current tools, budget and time, what would make them pay, and a quote. Name the primary persona for the MVP.
- **Success metrics:** one North Star metric, three to five supporting metrics, and leading indicators for the MVP. Each one has a definition, a target and how it is measured.
- **Constraints and non-goals:** budget, team, time, legal (rights, likeness, music copyright), platform, and AI cost. List non-goals explicitly.
- **MVP and roadmap:** the MVP problem and scope, in and out, the core user flows, the riskiest assumptions it tests, and Now / Next / Later. It must convert cleanly into `app-studio`'s `prd-intake` later.
