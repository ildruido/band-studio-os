# Decision log

Newest first. Each entry: id, date, decision, why, alternatives, who decided, status (`active`, `superseded by D-0NN`, `revisited`).

### D-029 The MVP pilot is free; payment is tested separately
- **Date:** 2026-11-25
- **Decision:** The first pilot bands use the MVP for free. There is no checkout or invoicing in the MVP. Willingness to pay stays with the E3 price test and a paid-campaign commitment asked at the end of the pilot.
- **Why:** Keeps the build small. Cost: the pilot itself does not test H-03.
- **Alternatives:** Manual pilot payment by invoice or link (recommended by Claude); built-in checkout.
- **Decided by:** Ale (chose against Claude's recommendation)
- **Status:** active

### D-028 The MVP ships setup and pre-gig only
- **Date:** 2026-11-25
- **Decision:** The MVP covers gig setup and the pre-gig blitz (flyer, stories, post, captions). Post-gig momentum is not in the MVP and is the first item after it.
- **Why:** Tests the riskiest bet (output feels like "us") with the least build, and keeps media upload and rights risk out.
- **Alternatives:** Add a light post-gig thank-you carousel; all three stages.
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-027 Accept R-005 Reshape: Boost is an indirect reach competitor; position on the creative and identity layer
- **Date:** 2026-11-25
- **Decision:** Ale accepts the R-005 verdict **Reshape**. Bandsintown Boost literally triggers C2's kill rule (music-specific, announced 2026-06-05); Ale describes it as an indirect competitor whose purpose is advertising and reach, while Band OS is a brand hub that produces several coherent creative artifacts. The reshape: position on the creative and identity layer, not on getting the show seen; treat Boost-style reach as a possible later connector; do not sell the product as an AI poster generator. R-004's S4 is read the same way (the skeptic's ruling: general incumbents count only when they ship a music- or gig-specific feature, so Boost counts and S4 reads Contradicted).
- **Why:** Reach is not the V1 job (export only, D-009). The pre-registered rule forces Reshape and Ale agreed with its meaning rather than overriding it.
- **Alternatives:** Override and read C2 as Mixed with the study as Needs primary research (offered; not chosen).
- **Decided by:** Ale ("I probably accept Reshape", after the description of what Reshape means). Wording to be confirmed if he wants a firmer record.
- **Status:** active

### D-026 Count Gemini's unopened sources as confirmed, and re-evaluate R-007 and R-005
- **Date:** 2026-11-25
- **Decision:** Ale told us to treat the sources in Gemini's Deep Research reports that Claude could not open (mostly Reddit threads, which the cloud environment blocks) as confirmed, and to re-evaluate both studies. They are graded as Gemini states them (first-hand voices are grade B), labelled "sponsor-accepted, not opened" in the reports, and each re-evaluation shows what changes. Recorded as sponsor acceptance, not verification; a second skeptic pass found no verdict changes. See [R-007 addendum 1](../research/R-007-canva-gap-check/addendum-1.md) and [R-005 addendum 1](../research/R-005-competitive-analysis/addendum-1.md).
- **Why:** Claude cannot read Reddit from here and Ale can read what Gemini quoted; the voices of band members are exactly the evidence desk research lacked.
- **Alternatives:** Keep them at "unverified, no weight" (the framework default; Ale overrode it for these sources). The framework rule that a source must be opened by the lead stays in force for all other sources.
- **Decided by:** Ale
- **Status:** active

### D-025 Replace the hands-on Canva check with desk research plus Gemini Deep Research
- **Date:** 2026-11-25
- **Decision:** Ale declined the one-hour hands-on check of Canva and PosterMyWall ([hands-on-check.md](../research/R-004-competitor-scan/hands-on-check.md)). Instead the gap against Canva and similar tools (PosterMyWall, Adobe Express, Mew Design, Simplified) is checked by two independent routes under study [R-007](../research/R-007-canva-gap-check/report.md): desk research by Claude, and a Gemini Deep Research report that Ale runs from a neutral prompt. The result feeds the inputs of R-005 (competitive analysis), which is not started.
- **Why:** Ale's time is scarce (D-016). Two routes with different sources keep the check independent of our own hypothesis.
- **Alternatives:** Ale's hands-on trial (declined); one route only (rejected: a single route is easier to bias).
- **Decided by:** Ale
- **Status:** active

### D-024 App profile Phase is discovery; undecided values say TBD
- **Date:** 2026-11-17
- **Decision:** The App profile's Phase is `discovery` (harness 0.22.x). Values not decided yet (stack, release target, capabilities, AI plan, access model, storage shape) say TBD instead of "none yet" or "not applicable yet". AI stays off and no modules are on. The `CLAUDE.md` rule about `app-studio` now allows `harness-idea` issues there; edits and PRs there stay off-limits.
- **Why:** Phase `discovery` is how the harness (0.22.0+) says "no stack yet, nothing to build", so its health check no longer treats missing values as gaps.
- **Alternatives:** Stay with free-text "Inception" values (rejected: the harness can't read them).
- **Decided by:** Ale
- **Status:** active

### D-023 Move to harness 0.18.3 without feature modules
- **Date:** 2026-11-17
- **Decision:** Band Studio OS moves from harness 0.4.1 to 0.18.3. No AI, sign-in or roadmap module is switched on (nothing exists to run them yet); the App profile records AI off, and Access model and Storage shape as not applicable until the architecture handoff. The harness check workflow now runs on every PR so PRs can merge by themselves. Nothing is written to Ale's user-level Claude settings.
- **Why:** Every app repo inherits the harness from `app-studio`. The inception skills, docs and research stay as they are.
- **Alternatives:** Stay on 0.4.1 (rejected: drifts from the single source of truth).
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-022 No upfront market-size target; discover a realistic one from the sizing study
- **Date:** 2026-11-04
- **Decision:** The market sizing study ([R-006](../research/R-006-market-sizing/report.md)) sets no minimum market size or revenue threshold in advance. Instead it reports ranges and an income ladder (paying bands needed for 10k, 30k, 60k and 100k EUR a year). A target is chosen later from that ladder and from primary research.
- **Why:** Ale did not want to set a number before knowing what is realistic. A fixed bar chosen blind would also invite goalpost moving. This departs from the `market-analysis` skill's default of a pre-set M1 threshold; the protocol records it.
- **Alternatives:** 5M EUR a year for Italy plus UK (recommended, declined); 2M; 10M.
- **Decided by:** Ale
- **Status:** active

### D-021 North Star is approved campaigns per month
- **Date:** 2026-11-04
- **Decision:** The North Star metric is approved campaigns per month: gig campaigns that all required bandmates approved and the driver exported. Supporting metrics, guardrails and targets are Claude's provisional proposals (see [success-metrics.md](success-metrics.md)) until E3 sets real numbers.
- **Why:** Bandmate approval proves the output feels like "us" (H-01) and maps to pay-per-campaign revenue (H-03).
- **Alternatives:** Paying bands per month (says nothing about output quality); hours saved per campaign (hard to measure without surveys).
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-020 Remaining constraints and non-goals agreed
- **Date:** 2026-11-04
- **Decision:** Ale agreed the rest of [constraints.md](constraints.md): no fixed deadline (pace set by his hours and the research gates), and as V1 non-goals: managers, agencies, labels and multi-band accounts; team roles, permissions and billing seats; music creation, mixing and distribution tools; paid acquisition at scale (small tests only).
- **Why:** Closes the open assumptions in the draft so exit criterion 9 is complete.
- **Alternatives:** Change any of them (none requested).
- **Decided by:** Ale
- **Status:** active

### D-019 A native app is wanted, but much later than V1
- **Date:** 2026-11-04
- **Decision:** V1 is a phone-first web experience. A native app is a future goal, added well after V1, not a permanent non-goal.
- **Why:** Ale corrected the draft assumption "no native app until demand is proven": the app is wanted, only later.
- **Alternatives:** Native app in V1 (rejected: team and cash limits, D-016, D-017); never build one.
- **Decided by:** Ale
- **Status:** active

### D-018 V1 has no AI video; a short-video proof of concept comes right after
- **Date:** 2026-11-04
- **Decision:** V1 makes images (flyers, stories, carousels) and simple template motion synced to audio. AI-generated video is not in V1. A short-video proof of concept to prove feasibility and cost is the first thing after V1 scope is set.
- **Why:** Video is the biggest AI cost risk and the budget (D-016) cannot absorb it before revenue. Ale still wants feasibility proven early.
- **Alternatives:** Short AI video in V1; leave video as a candidate until the cost spike (H-06).
- **Decided by:** Ale (chose images and template motion only, and asked for the video proof of concept to be next)
- **Status:** active

### D-017 V1 cash budget is under 100 EUR a month
- **Date:** 2026-11-04
- **Decision:** Until the first paying customers, total cash spend (tools, hosting, AI generation, test ads) stays under 100 EUR a month.
- **Why:** Ale's choice; keeps the venture low-risk while the riskiest hypotheses are still unproven.
- **Alternatives:** 100 to 500 EUR a month; over 500 EUR a month.
- **Decided by:** Ale (recommendation was 100 to 500 EUR; Ale chose lower)
- **Status:** active

### D-016 V1 is built by Ale part-time plus Claude, with no hires
- **Date:** 2026-11-04
- **Decision:** One person plus AI, about 5 to 10 hours a week of Ale's time, no paid contractors.
- **Why:** Matches the postponed fieldwork and the Pro-plan usage limits.
- **Alternatives:** Ale full-time plus Claude; adding paid freelancers.
- **Decided by:** Ale, on Claude's recommendation
- **Status:** active

### D-015 Add three research types: market analysis, competitor scan, competitive analysis
- **Date:** 2026-11-04
- **Decision:** Add three generic type skills on top of the research framework: `market-analysis` (triangulated top-down and bottom-up sizing, assumptions with ranges, sensitivity), `competitor-scan` (direct, indirect, substitutes, DIY, adjacent entrants and dead products, found through several discovery routes and verified at the primary source) and `competitive-analysis` (criteria set before scoring, evidence-linked scores, a mandatory "Where we lose" section). Each pre-registers its hypotheses and type-specific checks, which the skeptic runs. No scan has been run yet.
- **Why:** Ale asked for dedicated, rigorous harness components for market sizing and for competitor identification and analysis. Market claims are the easiest to inflate.
- **Alternatives:** Reuse the general `market-sizing` and `competitive-brief` skills as they are (kept as models for the output shape; they lack pre-registration, source verification and a skeptic step). One combined skill (rejected: the three jobs have different hypotheses and sources).
- **Decided by:** Ale, plan approved on Claude's recommendation
- **Status:** active

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
