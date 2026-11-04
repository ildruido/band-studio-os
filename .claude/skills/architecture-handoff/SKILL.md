---
name: architecture-handoff
description: Write the handoff from inception to the Architecture phase - product architecture input, project meta-architecture (app-studio plus extra skills, plugins, agents), App profile draft and next steps. Use near the end of inception or when Ale asks what Architecture needs.
---

# Architecture handoff

## Steps

1. **Read** every artifact in `docs/inception/`, plus `app-studio`'s `README.md`, `packs/README.md` and `plugins/studio/templates/CLAUDE.md` (read only: never change `app-studio` from here).
2. **Product architecture input:** the main capabilities and domain objects (band identity and context layers, campaigns, assets, votes, lore), the core flows, the AI needs (generation types, the context injection approach, cost drivers), media handling (uploads, on-device triage), multi-user and roles, integrations (cloud drive output), non-functional needs, and the open technical questions that the riskiest feasibility hypotheses raise.
3. **Meta-architecture:** which `app-studio` stack packs fit (`artifact`, `web`, or both, plus the optional `mirror` pack if the code must be public) and why, including the hosting cost the `web` pack implies; the gaps the harness has for this product (for example multi-user sign-in, media storage, AI image and video pipelines, cost tracking); and the extra skills, plugins or agents proposed, each with a purpose and whether it belongs in this repo or upstream in `app-studio`.
4. **App profile draft** for `CLAUDE.md`: app name, id prefix, stack, user, capabilities, AI plan, and domain rules (e.g. the Authenticity Mandate, human-in-the-loop before anything is published).
5. **Next steps:** the minimal recommendation for after sign-off: `new-app` setup, `prd-intake` from `mvp-and-roadmap.md`, and the first Architecture tasks.
6. **Write** `docs/inception/architecture-handoff.md`, log the decisions, open one PR, and ask Ale one question at a time about anything still open.
