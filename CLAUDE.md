# Band Studio OS — project instructions

**Phase: Inception.** No production code until Ale signs off on the exit gate. Follow [docs/inception/workflow.md](docs/inception/workflow.md) and its skills in `.claude/skills/`.

- Interview Ale one question at a time, each with a recommended answer.
- English for all docs.
- One PR per artifact. Typos and decision log entries may go straight to `main`.
- Merge your own PR as soon as the task is done and CI is green. This repo has no CI yet (docs only): merge anyway and flag that as a risk.
- Log every product decision in [docs/inception/decision-log.md](docs/inception/decision-log.md).
- `app-studio` is the build-phase harness. Read it, but never change it from here. It is installed into this repo only after inception closes.

## Inception profile

The inception skills in `.claude/skills/` are generic. They read this section for everything specific to this product. Keep it current as the artifacts evolve.

| Field | Value |
| --- | --- |
| Product | Band Studio OS (working title): an AI-powered control room for emergent, independent bands |
| Target users | Low-budget, time-poor indie and rock bands, usually run by one or two active members |
| Starting idea | [docs/inception/starting-idea.md](docs/inception/starting-idea.md) (original idea, kept unchanged; a starting point, not a bible) |
| Market segments | Band and artist tools, AI design and content tools, social schedulers, and DIY help (friends, freelancers) |
| Optional skills | `product-management:*`, `anthropic-skills:deep-research`, `frontend-design` (used when available) |

### Principles

- **Authenticity first:** amplify a band's grit and subcultural identity, never sanitized corporate polish.
- **Human in the loop:** the AI proposes, the band curates; nothing is published without approval.

### Key concepts

Identity Studio (brand context, Grit slider, anti-moodboard, lore), Consensus Engine (drivers and reviewers, swipe-to-vote), Staged Campaign Wizard (gig promotion: setup, pre-gig blitz, post-gig momentum).

### Domain risks

Music copyright, likeness and image rights, AI generation cost (video and media), and uploading large media files.

### Prototype look and feel

Gritty and subcultural, phone-first. Fake data uses realistic band names, venues and flyers.
