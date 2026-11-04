---
name: architecture-handoff
description: Write the handoff from inception to the Architecture phase - product architecture input, project meta-architecture (app-studio plus extra skills, plugins, agents), App profile draft and next steps. Use near the end of inception or when Ale asks what Architecture needs.
---

# Architecture handoff

Product-specific facts (product, users, principles, key concepts, market segments, domain risks, look and feel) come from the **Inception profile** in `CLAUDE.md`. This skill stays generic.

## Steps

1. **Read** every artifact in `docs/inception/`, plus `app-studio`'s `README.md`, `packs/README.md` and `plugins/studio/templates/CLAUDE.md` (read only: never change `app-studio` from here).
2. **Product architecture input:** the main capabilities and domain objects, the core flows, the AI needs (generation types, context handling, cost drivers), data and media handling, multi-user and roles, integrations, non-functional needs, and the open technical questions that the riskiest feasibility hypotheses raise.
3. **Meta-architecture:** which `app-studio` stack packs fit (`artifact`, `web`, or both, plus the optional `mirror` pack if the code must be public) and why, including the hosting cost the `web` pack implies; the gaps the harness has for this product (anything the product needs that the packs don't provide); and the extra skills, plugins or agents proposed, each with a purpose and whether it belongs in this repo or upstream in `app-studio`.
4. **App profile draft** for `CLAUDE.md`: app name, id prefix, stack, user, capabilities, AI plan, and domain rules, starting from the Inception profile's principles.
5. **Next steps:** the minimal recommendation for after sign-off: `new-app` setup, `prd-intake` from `mvp-and-roadmap.md`, and the first Architecture tasks.
6. **Write** `docs/inception/architecture-handoff.md`, log the decisions, open one PR, and ask Ale one question at a time about anything still open.
