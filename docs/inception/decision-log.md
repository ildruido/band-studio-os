# Decision log

Newest first. Each entry: id, date, decision, why, alternatives, who decided, status (`active`, `superseded by D-0NN`, `revisited`).

### D-005 V1 is built for the one active "driver" member
- **Date:** 2026-11-04
- **Decision:** The main user of V1 is the single active member who runs the band's promotion. Other members only approve, through a light flow (no full account needed). The Consensus Engine is a light add-on in V1, not the core.
- **Why:** The starting idea says one or two members carry the work. Saving their time is the sharpest pain and doesn't depend on getting the whole band to sign up.
- **Alternatives:** The whole band as a team (more onboarding friction); band plus helpers such as friends or managers (pulls multi-band and handoff into scope).
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-004 Install the app-studio harness core early to close the CI gap
- **Date:** 2026-11-04
- **Decision:** Install the app-studio v0.4.0 harness core and its `Harness` workflow during inception, with no code and no stack packs. The App profile is filled with "Inception" values where they're unknown, and the backlog id prefix is `BS` (Claude's default, can be changed before the first backlog item).
- **Why:** Gives the repo a health check (harness files, skills, doc links) on every commit and every docs PR, instead of no CI until inception ends.
- **Alternatives:** Keep the no-CI risk until sign-off (rejected by Ale).
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-003 Keep inception skills generic via an Inception profile
- **Date:** 2026-11-04
- **Decision:** Product-specific facts live in the Inception profile section of `CLAUDE.md`. The six inception skills stay generic, so they can be upstreamed to `app-studio` unchanged if they prove effective.
- **Why:** `app-studio`'s core must not name an app (`core-lint`). Its skills read an App profile in the same way.
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-002 Inception exit criteria
- **Date:** 2026-11-04
- **Decision:** Inception closes when the 11 exit criteria in [workflow.md](workflow.md#exit-criteria) are met and Ale signs off.
- **Why:** A clear gate stops inception from dragging on and sets what the Architecture phase receives.
- **Decided by:** Ale
- **Status:** active

### D-001 Add an inception layer ahead of app-studio
- **Date:** 2026-11-04
- **Decision:** Run inception with a light project-level layer (`docs/inception/` plus six skills in `.claude/skills/`). Use `app-studio` only from the build phase. Upstream the layer to `app-studio` once it has proven itself.
- **Why:** `app-studio` is a code-phase harness (PRD, backlog, CI, releases) with no support for discovery artifacts.
- **Alternatives:** Stretch `app-studio`'s `prd-intake` to cover discovery (rejected: it assumes a defined product). Build the layer in `app-studio` now (rejected: unproven, and it would change the harness for every app).
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active (revised by D-004: the harness core was installed early, but its build-phase skills still wait for the build phase)
