# Decision log

Newest first. Each entry: id, date, decision, why, alternatives, who decided, status (`active`, `superseded by D-0NN`, `revisited`).

### D-014 Research priorities approved; driver interviews designed and parked
- **Date:** 2026-11-04
- **Decision:** Ale approved the ranking of hypotheses in the [research plan](../research/research-plan.md) (riskiest three: H-01 output feels like "us", H-03 willingness to pay, H-02 the driver exists and hurts) and its three experiments, as proposed. Recruitment and the tests themselves are postponed. For now only the first test, the driver interviews (R-003), is designed in full; it is parked until Ale says go. The blind output test and price test stay at plan level.
- **Why:** Ale wants the evidence plan settled without spending his time or budget on fieldwork yet.
- **Alternatives:** Approve with the output test at deep tier; change the ranking (not chosen).
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-013 After R-001, run a light size check before drafting personas
- **Date:** 2026-11-04
- **Decision:** R-001 returned "Needs primary research": no hard count of bands in Italy or the UK, and thin first-hand voices. Ale chose a short follow-up size check (R-002, light tier, H1 only) before personas. The R-001 kill-criteria flags for H1 and H3 are read as "not found", not "contradicted" (this is the override the framework asks Ale to log). Provisional personas follow R-002, tagged evidence or assumption.
- **Why:** Ale asked to be sure the market exists. A head count is the cheapest gap to close, and it changes how far the personas can be trusted.
- **Alternatives:** Draft provisional personas now; pause and reshape the target group.
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-012 Launch markets: Italy first, then the UK, then the rest of Europe
- **Date:** 2026-11-04
- **Decision:** Research and early testing prioritise the Italian market, then the UK, then Western, Northern and Eastern Europe. The persona reality check (R-001) is scoped in that order, with Italy as the primary population.
- **Why:** Ale chose it for ease of initial testing.
- **Alternatives:** UK + US in English only (Claude's recommendation; Ale preferred Italy first); other English-speaking markets; global.
- **Decided by:** Ale
- **Status:** active

### D-011 Personas are grounded in a desk-research reality check
- **Date:** 2026-11-04
- **Decision:** Before any persona is written, a reality check (study R-001, `persona-validation` part A, standard tier) tests whether the target users exist in meaningful numbers, do the job themselves, feel the pain, find today's workarounds lacking, and care about the product's angle. Personas are built from its evidence, tag every trait as evidence or assumption, and pass an evidence audit (part B) before their PR. The deeper market scan (artifact 3) stays after personas.
- **Why:** Without it, personas describe an imagined market and problem. Ale asked for personas rooted in reality and a minimum of desk research.
- **Alternatives:** Validate inside the market research after personas (rejected: the personas would anchor the research); run the full market research before personas (slower, and most of it isn't needed to write personas).
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-010 All research follows a bias-guarded framework, with tiers
- **Date:** 2026-11-04
- **Decision:** Every piece of research follows [docs/research/framework.md](../research/framework.md): a protocol with falsifiable hypotheses and kill criteria committed before searching, searches for evidence against as well as for, a graded evidence log with verified quotes, fixed confidence and verdict rules, and an independent skeptic review. Guardrails scale with the cost of being wrong: light, standard (adds the `research-skeptic` agent) and deep (adds Ale's approval of the kill criteria, a pre-mortem and an independent replication). A generic layer (`research-protocol` skill, `research-skeptic` agent) carries a skill per research type, starting with `persona-validation`. It stays in force after inception.
- **Why:** Ale and Claude both want the idea to work, and Claude tends to agree with whoever asks. Ale asked for guardrails against confirmation bias that get stronger as research gets deeper.
- **Alternatives:** A "watch for bias" reminder in each skill (rejected: reminders don't hold under pressure); deep, multi-agent research for everything (rejected: costly on the Pro plan and slow for small questions).
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-009 V1 is export-only, on a connector-based architecture
- **Date:** 2026-11-04
- **Decision:** V1 outputs a ready-to-post campaign folder; the driver posts by hand. The architecture must be multi-channel, composable and connector-based from the start, so publishing channels and other integrations can be added incrementally toward the fully integrated vision. This is a requirement for the architecture handoff.
- **Why:** V1 needs to prove output quality, and manual posting keeps band approval in the loop. Building connectors in from the start avoids a rewrite when direct publishing arrives.
- **Alternatives:** One-tap share to Instagram; full auto-scheduling on all channels.
- **Decided by:** Ale, on Claude's recommendation (plus the architecture requirement)
- **Status:** active

### D-008 Monetization: pay per campaign, then subscription, freemium and add-ons later
- **Date:** 2026-11-04
- **Decision:** Long-run model is freemium. For early adopters, casual users can pay per campaign; regular users move to a monthly subscription. Add-ons and a freemium tier can be layered on top later. Pricing details are an open question for the market and hypotheses work.
- **Why:** Pay-per-campaign lowers the barrier for early adopters and feedback, and matches AI cost per use. A subscription fits bands that gig regularly.
- **Alternatives:** Subscription only; free tier first (AI cost paid on non-paying users).
- **Decided by:** Ale (extending Claude's recommendation)
- **Status:** active

### D-007 No genre restriction
- **Date:** 2026-11-04
- **Decision:** V1 is not limited to one genre or scene. Each band sets its own style and nuances through the Identity Studio. Indie and rock stay the reference community for early users and for the tone of the product, but nothing in V1 is built only for them.
- **Why:** The Identity Studio exists so each band can define its own style, so a genre limit would contradict it.
- **Alternatives:** Rock/indie/punk only; one narrow scene.
- **Decided by:** Ale
- **Status:** active

### D-006 Identity Studio starts light; the first build is end-to-end
- **Date:** 2026-11-04
- **Decision:** V1 Identity Studio starts light (Grit slider, anti-moodboard, a few references). Onboarding captures only the essentials. The customer can add or fine-tune further identity settings at any later moment. Which identity variables exist is decided by a UX design round, driven by their impact on the output's identity. The first iteration is end-to-end (identity to finished campaign assets) so output variations can be tested before more identity variables are added.
- **Why:** Identity variables only matter if they visibly change the output. Testing output end-to-end first shows which variables earn their place.
- **Alternatives:** Full Identity Studio up front (heaviest build, long onboarding); minimal logo-and-colors only (risks generic output).
- **Decided by:** Ale (light in principle, with the clarifications above)
- **Status:** active

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
