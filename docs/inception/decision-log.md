# Decision log

Newest first. Each entry: id, date, decision, why, alternatives, who decided, status (`active`, `superseded by D-0NN`, `revisited`).

### D-040 Bandmates review by private link; the server enforces the approval gate; the pilot is invite-only
- **Date:** 2026-11-25
- **Decision:** Bandmates open a private link (random, stored only as a hash, tied to one campaign, expiring, revocable) and give a first name once; no account. The server refuses to build an export that contains an asset that is not approved, so the gate does not depend on the screen. The free pilot uses the studio stack's invite-only sign-in with email and password; open sign-up comes after the pilot. Default rule for "approved": every invited bandmate approves and any veto blocks (assumption, settled by the pilot).
- **Why:** Meets "no account for bandmates" and "nothing is exported without approval" with the least to build and no email service.
- **Alternatives:** Magic-link email sign-in (needs an email service, more to build); open sign-up from day one (abuse and AI cost risk during a free pilot).
- **Decided by:** Claude (technical), within Ale's autonomy rule
- **Status:** active

### D-039 Code places the text, AI makes the art and the words; the AI provider is swappable
- **Date:** 2026-11-25
- **Decision:** The AI draws background art and writes captions; a program composes the flyer and stories with the real text (band name, date, venue, link) from templates, and produces the print files. Image generation goes through one adapter; the provider is chosen by a bake-off test of at least three (spike 1), not now. Every AI call writes a cost entry, with a hard monthly cap and an alert at 80%.
- **Why:** Image models still garble text, and a wrong date is a disaster. Prices and licence terms move quickly. The budget is under 100 EUR a month.
- **Alternatives:** Let the image model draw all text (cheaper to build, wrong details); pick one provider now (lock-in on unverified prices and terms).
- **Decided by:** Claude (technical), within Ale's autonomy rule
- **Status:** active

### D-038 Architecture direction: the studio web stack plus our own modules, hosted in the EU
- **Date:** 2026-11-25
- **Decision:** Build version 1 on the studio's `web` stack with `user`, hosted on Render in the EU, with our own modules (interim, until the harness answers) for file storage (object storage with signed links), text and image generation from a worker, and review links, and our own Postgres tables for band data. Details, options, costs, risks and seven spikes: [architecture handoff](architecture-handoff.md). The handoff was independently reviewed by a separate agent before merge.
- **Why:** The only option that keeps the rule that every app inherits the harness without workarounds. About 13 to 18 EUR a month fixed leaves most of the 100 EUR for AI.
- **Alternatives:** A hosted all-in-one backend (cheaper possibly, but leaves the harness pipeline); staying in Claude artifacts (no public link, no server, no keys).
- **Decided by:** Claude (technical), within Ale's autonomy rule; Ale does not review it
- **Status:** active (provisional until the spikes run)

### D-037 Build the Product Brief Pack as nine theme files with a separate red-amber-green gap record
- **Date:** 2026-11-25
- **Decision:** Build the pack in `docs/brief-pack/` as an index plus nine short theme files (story, product and roadmap, market and competition, business and go-to-market, brand and messaging, evidence and risks, team and founder, technical brief, partners and press). All 33 components from the inventory get a section with the same template, even where we can only partly fill them or not at all. A source map says which inception document feeds each section. A separate gap record rates every component red, amber or green twice: once for how complete the content is, once for how well it is backed by evidence. The first version is an honest concept-and-plan pack, not a proof pack. Ale told the thread to go ahead without a plan sign-off and to merge each PR when CI is green.
- **Why:** Presentation material needs one organised source where each claim says how sure we are. Keeping the gap record apart stops caveats leaking into decks or getting lost.
- **Alternatives:** One file per component (rejected: 33 tiny files are hard to read and to hand to a tool). One long document (rejected: a tool cannot take just what an output needs).
- **Decided by:** Ale (go-ahead), on Claude's recommendation for the structure
- **Status:** active

### D-036 Add a "Product Brief Pack" step before the architecture handoff
- **Date:** 2026-11-25
- **Decision:** Add a Product Brief Pack step to inception, just before the architecture handoff. The pack is a set of structured, plain-language documents that holds everything a classic product brief holds, and becomes the single source of truth for generating slide decks, a one-pager, a short video pitch and other stakeholder material (investors, sales and marketing, engineers). Step 1 is two inventories: what inception already produced, and what a brief usually contains, with a gap table ([product-brief-pack.md](product-brief-pack.md)). Shape chosen by Ale: a folder (`docs/brief-pack/`) of short files with an index and cross-links between documents. The pack itself is not built yet and waits for Ale's review.
- **Why:** The material is spread over many internal documents written for insiders. Presentation material needs one organised, honest source, with each claim marked by how mature it is.
- **Alternatives:** Generate decks straight from the existing documents (rejected: gaps and insider wording would leak into the output).
- **Decided by:** Ale
- **Status:** active

### D-035 Prototype v2.1: draft later journeys on top of v2, in a separate artifact
- **Date:** 2026-11-25
- **Decision:** Prototype v2 stays as confirmed. Prototype v2.1 is a separate artifact that keeps the v2 MVP flow unchanged and adds draft journeys for future functionality in the Gig Wall design: the wall over time (week 1, month 1, month 6, year 1), a "what is next" picker, gig night, after the gig (thank-you carousel), a new-single sheet, a tour sheet, a short-video reel, linked channels ("post it for me"), the Us zine, and the pay moment. Every later screen carries a hazard-tape stripe and a black "Later" tag ("Idea" for gig night). The countdown timeline from the Control Desk is reworked to be light: one dashed line down the wall, a "today" marker, five stops at most, one highlighted next step, no faders or tracks. The thank-you carousel has no photos, following the roadmap's light first version (L1, D-028). Chat mode and Instagram or Bandcamp link reading stay out (D-034).
- **Why:** Interviewees can see how the product grows and tell the first version from the later ideas, without changing the base Ale confirmed.
- **Alternatives:** Edit v2 in place (rejected: loses the confirmed baseline).
- **Decided by:** Ale (direction); Claude (details, to be reviewed by Ale)
- **Status:** active

### D-034 Gig Wall is the base for prototype v2; ideas from the other two alternatives are kept for later
- **Date:** 2026-11-25
- **Decision:** Alternative A, the Gig Wall ([design-alternatives.md](design-alternatives.md)), is the base design for prototype v2, with the look already adopted in D-032. The Tour Manager ideas (a chat or prompting mode, and reading an Instagram or Bandcamp link to set up identity) are kept on the bench: not in prototype v2, to revisit later. From the Control Desk, only the countdown timeline idea is kept for releases and tours. Ale notes the desk is too heavy on functions, so that idea needs a heavy rethink before it is used.
- **Why:** Lowest build cost, easiest to show in driver interviews, and the band's own poster is the hero of every screen.
- **Alternatives:** Tour Manager (best fit with how bands use group chat, but looks like a standard AI chat); Control Desk (clearest plan, too heavy for a time-poor driver).
- **Decided by:** Ale
- **Status:** active (refines D-033 and builds on D-032)

### D-033 Explore three full-journey design alternatives before choosing a direction
- **Date:** 2026-11-25
- **Decision:** Before prototype v2 is built, three different design alternatives are proposed, each covering the whole journey (onboarding, identity, gig campaigns before, during and after the gig, approval, export and later publishing, payment, video, growth and use-case sections). They are the Gig Wall, the Tour Manager and the Control Desk ([design-alternatives.md](design-alternatives.md)). Claude recommends the Gig Wall with two borrowed ideas. Ale has not chosen yet.
- **Why:** Prototype v1 was rejected as too functional and too generic (D-031). Choosing a direction only after comparing whole-journey alternatives avoids polishing a look that cannot grow with the product.
- **Alternatives:** Refine one direction only (the UX direction proposed in D-032).
- **Decided by:** Ale (asked for the exploration); direction choice pending
- **Status:** active (the choice is D-034)

### D-032 Adopt the "band's wall" design direction for prototype v2
- **Date:** 2026-11-25
- **Decision:** Prototype v2 follows [ux-direction.md](ux-direction.md): one decision per screen (pick between two, fill a sentence, swipe a poster), a fixed backstage look (concrete grey, black ink, yellow tape, photocopy grain) and all colour coming from the band's own artwork. The Grit slider, the reference-image upload and the tabbed pack are replaced by either-or taps and a swipeable poster deck.
- **Why:** Ale found v1 too functional-heavy for a phone and too much like a standard AI app (D-031).
- **Alternatives:** A dark, glossy music-streaming look (closer to what people expect, but also generic); a look that adopts each band's own colours across the whole app (risk: weak, inconsistent app identity).
- **Decided by:** Ale ("Ok for now", 2026-11-25), on Claude's proposal
- **Status:** active

### D-031 Close prototype v1; refine the UX design before building v2
- **Date:** 2026-11-25
- **Decision:** Prototype v1 is closed: the flow works, but the design is too functional and too much like a generic AI app. A separate UX design task refines the design (phone-native feel, realistic look) before a second prototype is built.
- **Why:** An interview prototype that looks fake or poor undermines what drivers tell us. It has to feel like a real product for a real band.
- **Alternatives:** Iterate on v1 directly (rejected: the problem is the design approach, not details).
- **Decided by:** Ale
- **Status:** active

### D-030 Prototype v1 scope and language
- **Date:** 2026-11-25
- **Decision:** The first prototype is one clickable Artifact page covering the whole approved MVP flow (D-028), phone-first, with canned output and an invented Italian band. The interface is in English; sample content and captions are Italian with an English switch. Artwork is drawn from type, colour and texture, with no photos, because the MVP has no photo upload.
- **Why:** Ale wants something to show in driver interviews (exit criterion 4). One page, with no setup, opens on any phone. English keeps it readable for Ale and any reviewer while the Italian content keeps the sample realistic for the first market (D-012).
- **Alternatives:** A fully Italian interface (more work, more to translate if the design changes); several small prototypes, one per screen (harder to show the whole story).
- **Decided by:** Claude's call within the brief; Ale accepted the flow on review
- **Status:** active (Ale reviewed v1: flow accepted, design to be redone, see D-031)

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
