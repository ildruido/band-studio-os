# Band Studio OS — project instructions

**Phase: Inception** (App profile Phase: discovery). No production code until Ale signs off on the exit gate. Follow [docs/inception/workflow.md](docs/inception/workflow.md) and its skills in `.claude/skills/`.

- Ask Ale only product decisions, one question at a time, each with a recommended answer. Decide technical details yourself and record them in the PR description.
- English everywhere: docs, commits, PRs and chat.
- One PR per artifact. Inception-only exception to app-studio's "never commit straight to `main`": typos and decision log entries may go straight to `main` from a local session. A cloud session can push only its own branch, so it opens a PR for those too. `new-app` drops this exception when inception closes.
- Merge your own PR as soon as the task is done and CI is green. The `Harness` workflow checks harness and docs PRs. There are no code tests yet (inception), so say so when you merge.
- Keep [docs/inception/status.md](docs/inception/status.md) current: update it in the same PR whenever an artifact's status or an open PR/risk changes.
- Every piece of research follows [docs/research/framework.md](docs/research/framework.md) and the `research-protocol` skill, during and after inception.
- Log every product decision in [docs/inception/decision-log.md](docs/inception/decision-log.md) in the same turn. This decision log stays the home for product decisions after inception too.
- `app-studio` is the build-phase harness. Read it, but never change it from here (no edits or PRs). An idea for improving the harness, including our discovery and inception skills once they're proven, goes through the `harness-idea` skill, which opens an issue there. Pull harness updates only when asked, with `harness-sync`. Its core (v0.4.1, pinned in `.claude/studio/lock.json`) was installed early, only so the health check and the `Harness` workflow guard this repo during inception. The build-phase skills (`build-feature`, `release`, `test-handoff`) aren't used until inception closes. `new-app` then adds the stack packs and merges the rest of the template into this file.

## App profile

Read by the app-studio harness skills and its health check. Values marked TBD are decided during inception and filled in by `new-app` at sign-off.

| Field          | Value |
| -------------- | ----- |
| App            | Band Studio OS (working title) |
| Phase          | discovery |
| Id prefix      | `BS` (backlog items are `BS-001`, `BS-002`, …) |
| Stack          | TBD (not decided yet; chosen in the architecture handoff) |
| User           | Ale, as the active member of an emergent indie or rock band |
| Repo           | https://github.com/ildruido/band-studio-os (private) |
| Release target | TBD (not decided yet) |
| Preview target | none |
| Capabilities   | TBD (not decided yet) |
| AI plan        | TBD (not decided yet; architecture handoff) |
| AI             | off (no AI module on) |
| Access model   | TBD (not decided yet; architecture handoff) |
| Storage shape  | TBD (not decided yet; architecture handoff) |
| Decision log   | `docs/inception/decision-log.md` (stays the home for product decisions after inception) |

### Domain rules

- Authenticity first: generated material amplifies the band's own identity, never generic corporate polish.
- Human in the loop: nothing is published without a band member's approval.

### Stack notes

- **Build / QA / Release / Preview:** TBD (not decided yet).

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

## Writing for Ale

Before saying something is done, check it, and say plainly what you did not check (for example, "no code tests ran" or "not tried on a phone").
