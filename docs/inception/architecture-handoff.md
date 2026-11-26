# Architecture handoff: Band Studio OS (working title)

Status: **first version, 2026-11-25.** Written by Claude and independently reviewed, with fixes applied (see [Independent review](#independent-review)). Ale told the thread to go ahead without a sign-off (see [decision log](decision-log.md), D-038 to D-040). Everything marked **(Assumption)** is Claude's proposal, not yet tested. Prices are as last known and must be rechecked in the first spike.

This is a document, not code. It is the input for the build phase: it says what shape the product should have, why, what it costs, what could go wrong and what to try first. Product scope is in the [MVP](mvp.md), order in the [roadmap](roadmap.md), limits in the [constraints](constraints.md).

## 1. The recommendation in one page

**Build version 1 as a phone-first website on the studio's `web` stack** (a small Node server, a Postgres database, hosted on Render in the EU), **plus three things the stack does not give us**: file storage, an image-generation connection, and a "review by link" access method for bandmates. We build those three as modules in this repo.

Four design choices carry the product:

1. **Code lays out the page; AI makes the art and the words.** The AI draws the background art and writes the captions. A program places the band name, date, venue and ticket link as real text on the flyer. This keeps dates and venue names correct, gives us print-ready files, and keeps the band's own fonts and colours. AI image models still garble text, so we do not rely on them for it.
2. **The AI provider is swappable.** Image generation goes through one small adapter. Prices, quality and licence terms move fast, so we pick the provider in a bake-off (spike 1), not today, and can change it later.
3. **The approval gate lives on the server.** The server refuses to build an export containing any asset that is not approved. It is not a button state in the page.
4. **Export is the first connector.** The export bundle is a folder plus a small description file. Later connectors (posting, scheduling, reach partners) read the same approved bundle. That is how "export-only now, connectors later" stays true without a rebuild.

**Cost:** about 13 to 18 EUR a month fixed (hosting, database, domain, storage) leaves about 80 EUR for AI generation and the spikes, enough for roughly 25 to 80 campaigns a month at the assumed 1 to 3 EUR each. That is enough for the pilot and is *Not yet measured*; spike 1 measures it.

**What it needs from the harness:** the stacks `web` and `user`. The harness has no file storage, no relational data and no link-based access, so those live in our own modules, as **interim** parts: the web stack itself says to ask for a `files` or `relational` module before building around a gap, so the first next step is to file those as harness ideas ([section 9](#9-gaps-in-the-harness-and-extra-skills)). Text and image generation run in the server worker through our own adapter, not through the stack's `ai-web` (which serves the page directly, with allowances counted per person in memory).

## 2. What has to be built (capabilities, objects, flows)

### Capabilities (from the MVP)

Sign-in, light identity setup, gig setup, pack generation (flyer, stories, feed post, captions), curate (pick, regenerate, edit), approval by link, export, and measurement events. The full table is in the [MVP](mvp.md#scope).

### The main objects

| Object | Meaning | Notes |
| --- | --- | --- |
| Account | The driver's login | One email, one password in version 1 |
| Band | The band; owned by one account | One band per account now, but a band is its own object so more members or bands fit later |
| Identity | Name, genre tags, grit setting, "never like this" list, colours, logo | Versioned: each generation records which identity version it used |
| Reference image | Up to five images the band gives us | Stored files; see [data and privacy](#6-data-privacy-and-rights) |
| Gig | Venue, city, date and time, ticket link or price, support acts, one-line message | Typed in; no venue database |
| Campaign | The promotion for one gig | Has a stage ("pre-gig" now, "post-gig" later) |
| Asset | One deliverable: flyer, a story, the feed post, a caption set | Has a type and a format |
| Asset version | One generated attempt of an asset | Records the text prompt, the provider, the cost, the files and who created it |
| Review link | An unguessable link for one campaign | Gives a bandmate access to that campaign only |
| Decision | One approve or veto on one asset version, with an optional note | The proof for the approval gate |
| Export bundle | The approved assets, the captions file and a posting schedule | Built only from approved asset versions |
| Event | A measurement fact (campaign started, asset generated, and so on) | Never contains images or audio |
| Cost entry | What one AI call cost | Written for every call, from the first |
| Job | A queued piece of generation work | Lets the page show progress and survive a restart |

### The core flow, with where the work happens

1. **Sign in and set identity.** Fast, no AI. Reference images are shrunk on the phone before upload.
2. **Enter the gig.** Typed fields, no AI.
3. **Generate the pack.** The server queues one job per asset. For each: the text model (through our adapter) writes copy; the image model draws the art; a layout program composes the finished flyer or story from a template, the art and the typed gig details; the result is stored and a cost entry is written. The page polls for progress.
4. **Curate.** Pick a variant, regenerate one asset (a new job), edit the text (re-composed without a new AI call, which is cheap).
5. **Share for approval.** The driver sends one link (by chat). A bandmate opens it on a phone, gives a first name once, and approves or vetoes each asset. A veto needs a short note and starts one revision.
6. **Export.** The server checks every asset is approved, then builds the bundle: images, print PDFs, captions file, suggested schedule. The driver downloads it and posts by hand.

## 3. Direction and options

### Principles we keep (already decided)

Composable and connector-based from day one; multi-channel assets; phone-first web; human approval before export; no raw media in analytics (see the [technical brief](../brief-pack/technical-brief.md#architecture-direction)).

### How the page and server split

- **Page:** a mobile-first single-page app served by the same Node server. It never calls the server directly except through one platform layer (a rule of the `web` stack).
- **Server:** Hono on Node with Postgres, one instance. Our own module adds the product's routes and tables.
- **Worker:** the same process takes jobs from a Postgres table and runs them one at a time or a few at a time. No separate queue service. Jobs survive a restart because they live in the database.
- **Files:** S3-compatible object storage. Downloads and uploads use short-lived signed links so big files never pass through the app's memory.
- **AI:** our own adapter called by the worker (Claude for text, a chosen provider for images), because the stack's `ai-web` serves page-side streaming with per-person allowances counted in memory; every call writes a cost entry and the caps (per band and global) live in Postgres.

### Options compared

| | A. Studio `web` stack plus our modules (**recommended**) | B. A hosted all-in-one backend (database, files, login in one service) | C. Stay inside Claude artifacts |
| --- | --- | --- | --- |
| Fit with the harness | Full: CI, review rules, release, preview all work | Partial: we would build our own pipeline and checks | Full for prototypes only |
| What we build ourselves | Files, image generation, review links | The same image and compose work, plus our own pipeline | Not possible: no server, no keys, no files, no public link |
| Cost per month (assumed) | About 13 to 18 EUR fixed | Possibly 0 to 25 EUR; free tiers pause or limit | None |
| Lock-in | Low: standard Node, Postgres, S3 | Medium to high | Not applicable |
| Main risk | One instance; harness gaps need our modules | We break the rule that every app inherits the harness | Cannot serve bandmates |
| Reversible? | Yes: modules are plain code | Hard once data and logins sit there | n/a |

**Recommendation: A.** The product owner's rule is that every app inherits the studio harness and its checks, with no repo-specific workarounds. A is the only option that keeps that rule, and the extra modules are the harness's own extension point. B's strongest argument is a lower bill, but its free tiers are not a safe base for a product people open from a phone. C is ruled out by the need for a public link.

### Decisions inside option A

| Question | Recommendation | Why | Confidence |
| --- | --- | --- | --- |
| Sign-in | The stack's **invite-only** mode with email and password for the free pilot (Ale invites each band); switch to open sign-up when the pilot ends | Matches the free pilot of 5 to 10 bands (D-029); nothing to build; no email service needed. Passwords reset by Ale's admin command for now | High |
| Reviewer access | **Review link** = a long random token, stored only as a hash, scoped to one campaign, expiring (30 days), revocable by the driver | No account, as the product needs; a forwarded link works for whoever holds it, which we accept and show to the driver (see risks). These routes sit outside the stack's sign-in, which is a security change: it needs an entry in the PRD decisions and a reviewer pass before release | Medium |
| Data store | Postgres **tables of our own** for bands, gigs, assets, decisions and costs; the stack's document store is not used for these | The stack's shared documents are open to every signed-in person, which is wrong for band data | High |
| Files | **Object storage with signed links.** First candidate: Cloudflare R2 (EU jurisdiction, free first 10 GB, no download fees; as last known). Not the database | Photos and generated images are megabytes; a small database fills up fast | Medium: confirm in spike 3 |
| Flyer and story layout | Server-side compose from templates (**Satori and resvg** for images; a PDF library for print), real text over AI art | Correct text, brand fonts, print files, low memory | Medium: confirm in spike 2 |
| Image provider | Behind an adapter; chosen in the bake-off from at least three (a general API provider, a cheap open-model host, and one Italian-language-friendly option if it exists) | Prices and terms move; avoid lock-in | Low until spike 1 |
| Text model | Claude through our own adapter in the worker; per-band and global caps in Postgres. `ai-web` only if the page ever streams AI itself | `ai-web` counts allowances per person in memory and serves the page, not a worker | Medium |
| Background work | Jobs in Postgres, worked by the same server | One instance fits the budget; no extra service | High for the pilot |
| Language | Interface and copy in Italian and English from day one (all strings kept out of the code) | Italy first, UK next (D-012) | High |
| Hosting region | EU (Frankfurt) for the server, database and storage | GDPR, Italy first | High |

## 4. Non-functional needs (proposed targets)

All targets are **(Assumption)**. They are numbers to build and test against, not promises. Success-metric targets stay with Ale for later.

| Need | Proposed target | How we would check |
| --- | --- | --- |
| Phone use | Everything the driver and reviewers do works at 360 px wide on iOS Safari and Android Chrome, current and previous major version | Browser tests at phone size |
| Page speed | Largest content paint within 3 seconds on the reviewer page, on a throttled mid-range phone profile (4G) | Measured in the first slice |
| First asset | First flyer variant visible within 60 seconds of asking, 9 times in 10 | Job timings in events |
| Full pack | Whole pre-gig pack ready within 10 minutes, 9 times in 10; the driver's active time stays within the 60-minute target | Events (metric 2) |
| AI cost per campaign | Logged for every call; hard monthly cap on total AI spend; alert at 80% | Cost entries |
| AI cost share | At most about 30% of campaign price once priced | Cost entries against price |
| Uploads | Reference images: five at most, shrunk to 2048 px on the phone, 5 MB each at most; no audio, no gig photos in version 1 | Upload limits and tests |
| Availability | Best effort, about 99% a month; no formal guarantee for the pilot; one instance, so short outages on deploy | Health check and uptime monitor |
| Backups | Daily database backup; files copied to a second bucket weekly (no reliance on object versioning) | Restore tried once before the pilot |
| Privacy | EU hosting; no third-party trackers; first-party events only | See section 6 |
| Security | Strict browser security headers (stack default); secrets only in host settings; a test proves one band can never read another's data or review link | Automated isolation tests, reviewed by Opus before release |
| Accessibility | WCAG 2.1 AA for sign-in, identity, curate, review-link and export screens; known exceptions listed | Stack's accessibility checks plus a manual pass |
| Print | A4 and A3 PDF; text and logo stay sharp (vector), art is as large as the provider allows. A3 may be upscaled, to be judged by eye | Spike 2 |
| Capacity | Tested for 10 bands generating at once | Load check of the job queue |

## 5. Money

All figures **(Assumption)**, in EUR, as last known and not yet rechecked.

| Item | Per month | Note |
| --- | --- | --- |
| Web server (Render, small paid plan, about 7 USD) | about 6.5 | Free plans sleep, which is bad on a phone |
| Database (Render, small paid plan, about 6 USD) | about 5.5 | Free database is deleted after a short period |
| File storage | 0 at pilot size | Free tier; confirm it applies to the EU option |
| Domain | about 1 | |
| Preview environment | 0 | None during the pilot; a second service would add about 12 |
| **Fixed total** | **about 13 to 18** | Prices are in USD; add currency movement and VAT |
| AI per campaign | about 1 to 3 | About 20 to 30 image calls (variants and regenerations) at a few cents each, plus text |
| Left for AI, spikes and the blind test | about 80 | Roughly 25 to 80 campaigns a month; spikes and the blind test spend from the same 100 EUR |

The cap and the logging must exist before the first pilot band, or one enthusiastic band can spend the month.

## 6. Data, privacy and rights

What the product holds, and what it must do. Nothing here is legal advice; no lawyer has seen it (see the [technical brief](../brief-pack/technical-brief.md#legal-and-safety)).

| Data | Personal? | Handling |
| --- | --- | --- |
| Driver email, password hash | Yes | Stored only in our database; passwords hashed (stack default) |
| Reviewer first name | Yes | Asked once; stored with the decision; deleted with the band |
| Band identity text, colours, logo | Mostly no | Belongs to the band |
| Reference images | **May show people** (band members) | Only what the band chooses to upload; band owns and can delete; sent to the AI provider only when needed, ideally never as raw files if a text description will do |
| Gig details | No (public by nature) | |
| Generated assets | No | Ownership depends on the provider's terms |
| Events and cost entries | Linked to a band | First-party in our database; **no images, audio or file contents** |
| Prompts sent to AI providers | May carry band details | Providers must not train on our data; retention as low as offered; list them as sub-processors |

Obligations to plan for **(Assumption, not yet checked with a lawyer)**:

- **Before the first pilot band** (not later): a named controller, a privacy notice (also shown on the review-link page), agreements with each company that processes data for us (hosting, storage, AI providers), the legal basis for reviewer names, and the transfer basis for any AI provider outside the EU.
- A way to **export and delete** a band's data. The stack's "delete user" hook is the start; our module must delete bands, files and review links too.
- Keep data in the EU where the provider allows; where an AI provider is outside the EU, record the transfer basis and prefer providers that offer EU processing or no retention.
- A retention rule: raw reference images and generated drafts removed a set time after the campaign (proposal: 12 months), approved exports kept until the band deletes them.
- **Who is the controller?** Ale as an individual, to start with (D-043). A company can come later. The notice, the data and retention list and the processor agreements above are still owed before the first pilot band ([section 11](#11-open-questions)).
- **AI-made material labelling.** The EU's AI Act transparency rule (Article 50) applies from August 2026, and a new product gets no grace period as far as we found (secondary sources only). We assume we count as a provider of a system that generates images, which a lawyer would have to confirm. R-008 confirmed the duty applies from launch (the 2 December 2026 transition covers only systems already on the market; D-046) but could not show the plan is cheap to meet, so add a labelling spike. Plan: mark image outputs in a machine-readable way (embedded metadata such as C2PA or IPTC) in the compose step, keep a per-asset "made with AI" flag, and list it in the export description. Italy's own AI law is also unchecked. Some venues refuse AI posters, which is a trust question as well.
- **Age:** band members may be under 18. For the pilot, accounts are for adults; check the rule before open sign-up.
- Music copyright is avoided in version 1 (no audio, no video). Likeness and image rights are limited by taking only the band's own reference images, with a clear sentence at upload: "only images you have the right to use".

## 7. Integrations

| Integration | When | Design |
| --- | --- | --- |
| File export | Version 1 | The export bundle: a folder of finished images and PDFs, a captions file, a posting schedule file, and a small description file listing each asset, its format, caption, schedule and "made with AI" flag |
| Direct posting and scheduling | Later | **Connector** interface: "given an approved bundle, publish or schedule it to a channel, report back". Version 1 ships only the folder export as its first connector, so the interface is proven by use. Channels need business accounts and app reviews: slow, outside the pilot |
| Reach partner (Bandsintown's Boost) | Later, candidate | Would be another connector; depends on whether a partner route exists (not checked) |
| Ticketing, venue databases | Not planned | Gig details typed in; ticket link is text |
| Payments | After the price test | A hosted checkout (provider not chosen); no card data touches our server |
| Email | Not in version 1 | Review links are shared by the driver through their own chat apps, so no email service is needed. Needed later for open sign-up, password reset and notifications |

## 8. Risks and spikes

### Technical risks

| Risk | Why it matters | What reduces it |
| --- | --- | --- |
| **The output does not feel like "us"** | The biggest product risk; also partly an architecture question (what the model is shown) | Spike 1 feeds the blind test; the adapter lets us change model and prompting |
| **AI cost runs over the cap** | Budget is under 100 EUR a month all in | Cap and alert; cost entry on every call; cheap first drafts then upgrade on request |
| **Text on images is wrong** | A wrong date is a disaster | Code lays out all text (design choice 1) |
| **Print quality at A3** | Posters need resolution | Vector text over the largest art; upscale if needed; accept A4 first |
| **Review link leaks** | A forwarded link lets a stranger approve | Short expiry, revoke, show who approved and when, name per reviewer; accepted for the pilot |
| **One instance** | A restart pauses jobs and resets in-memory limits | Jobs in the database; limits that matter kept in the database; short deploys |
| **Rights and likeness** | Reference images, AI outputs resembling real work | No fan photos; upload sentence; provider terms checked; desk study |
| **Provider terms change** | Prices, ownership of outputs, training on our data | Adapter; sub-processor list; recheck at each release |
| **Slow generation on a phone** | Long waits lose the driver | Progress per asset; first draft fast and cheap |
| **Fonts and Italian accents** | Bad accents look amateur | Bundled fonts tested with Italian text |

### Seven spikes (small throwaway tests, before or at the start of the build)

Each is a day or two of work by Claude and needs none of Ale's time. They are throwaway code, not product code, so they may run during inception, before sign-off. After sign-off the same questions become the first backlog items, built properly.

| Spike | Question | Also feeds |
| --- | --- | --- |
| 1. **Image provider bake-off** | Which two or three providers give art that can feel like a band, at what cost per image, on what ownership terms, and how well do they follow a "never like this" list? | The blind output test; AI cost per campaign |
| 2. **Flyer compose test** | Can we produce a good phone flyer, a 9:16 story and an A4 and A3 print file, with Italian text and bundled fonts, on a small server? Names the print route (vector text over art in a PDF library, two tried), renders in a worker thread so requests are not blocked, and sets pass criteria: peak memory, seconds per render, and the lowest resolution that looks acceptable at A3 (most image models give 1 to 2 megapixels and A3 at 300 dpi needs about 17, so upscaling is certain) | Print assumption |
| 3. **Storage and signed links** | Does the chosen object storage work from the server with signed links, from an iPhone and an Android phone, with a 5 MB upload, including the browser security policy and bucket sharing rules, and a size limit enforced on the upload? Is the free tier valid for the EU option? | File handling |
| 4. **Job queue under load** | Do jobs in Postgres, worked by the web server, survive a restart mid-job and run 10 campaigns at once on a small instance? Covers how jobs are claimed without double work, what happens to a job cut off by a deploy (lease, retry, no double charge) and what happens when a provider rate-limits us | Capacity |
| 5. **Review link on phones** | Does the link flow (open, name, approve, veto) feel one-tap on real phones, with the link stored only as a hash? | Reviewer completion |
| 6. **Brief-to-prompt** | Does the identity (grit, "never like this", references as description) change the output in a way a bandmate sees? | The core promise |
| 7. **AI-content marking** | Can the compose step embed machine-readable "made with AI" metadata that survives export, and what does a desk study or lawyer say we must do? | Legal position |

Spike 1 and the blind output test (E2) share their inputs, so Ale's fieldwork gets better material for free.

## 9. Gaps in the harness and extra skills

### Which stacks to add

| Stack | Use | Why |
| --- | --- | --- |
| `web` | Yes | Server, database, sign-in, browser security, deploy, preview |
| `ai` and `ai-web` | Not for the worker | The stack's AI serves the page with per-person allowances counted in memory; our worker needs per-band and global caps, so it uses its own adapter. Add them later only if the page streams AI itself |
| `user` | Yes | The page knows who is signed in |
| `artifact` | No | The prototypes stay throwaway; the product is a real website |
| `mirror` | No | Code stays private |
| `static-site` | Later maybe | A public landing page could use it; it cannot share an app with `web` (checked in the stack list), so a landing page would be separate |

Cost implied by `web`: Render paid plans and Postgres, about 12 EUR a month (section 5).

### What the harness does not give us

| Gap | Our answer | Upstream? |
| --- | --- | --- |
| No file uploads or storage | Our own module with signed links | Candidate: a `files` module |
| No relational data, only documents | Our own tables through the module migrations | Candidate: only if other apps need it |
| No access by link without an account | Our own review-link module | Product-specific; stays here |
| No image or text generation from a worker | Our own adapter module with cost entries and caps | Candidate, after it works |
| No job queue | Jobs table in our module | Candidate |
| Single instance, in-memory limits | Keep what matters in the database | Known limit of the stack |

Per the project rules, we do not change `app-studio` from here. The web stack asks apps to request a `files` or `relational` module before building around the gap, so the first build-phase step is to file those two (and the job queue) as harness ideas, and our modules are **interim** until the harness answers. They are not filed during inception, which is outside this task's scope.

### Extra skills, agents or plugins proposed

Each belongs in this repo unless noted.

| Proposal | Purpose | Where |
| --- | --- | --- |
| **Privacy check** (skill) | Before each release, walk the data table in section 6: what new data, what leaves the EU, is it deletable | This repo; generic enough to share later |
| **AI cost check** (skill or review rule) | Every code path that calls an AI provider writes a cost entry and respects the cap | This repo (product-specific) |
| **Approval gate rule** in the reviewer's checklist | Any change near export, decisions or review links gets an Opus review (already the project's rule for sign-in and storage) | This repo's review notes |
| **Provider bake-off** (skill) | Repeatable test of an image provider against a fixed set of band briefs, recording cost and a blind rating sheet | This repo first |

No new plugin is needed. The existing `frontend-design` skill is used for the page, and `product-management` skills for the backlog.

## 10. Next steps

After Ale signs off inception (the last exit criterion), the recommended order is:

0. **File the harness ideas** for `files`, `relational` and a job queue (section 9), so the gaps are on record before we build around them.
1. **Set up the app** with the studio's setup step: add the `web` and `user` stacks; fill the App profile from the draft below; set the hosting plan and the sign-in mode.
2. **Write the backlog** with the backlog step from the [MVP](mvp.md) and [roadmap](roadmap.md): one item per capability, and the seven spikes as the first items (spikes before the first slice).
3. **Walking skeleton:** sign-in, identity, one gig, one generated flyer composed with real text, stored and viewable on a phone, with its cost entry. This is the first slice (X1 in the roadmap) and proves four stacks together.
4. **Then** the full pack, approval, export, events and the pilot, in the roadmap's order.

The roadmap's gate stays: build only after the "feels like us" test (E2) says go, unless Ale chooses otherwise. Spikes 1, 2 and 6 can run before that gate because they are throwaway.

### App profile draft (for `new-app`)

| Field | Draft value |
| --- | --- |
| App | Band Studio OS (working title) |
| Id prefix | `BS` |
| Stack | `web` plus `user`; our own modules for files, text and image generation and review links |
| User | The driver of an emergent band; bandmates review by link |
| Release target | Render, paid small plan, EU region |
| Preview target | none during the pilot |
| Capabilities | Identity setup, gig setup, AI pack generation, curate, approval by link, export bundle, events |
| AI plan | Claude for text and a chosen provider for images, both through our adapter in the worker; per-band allowance and a hard global cap in Postgres; cost entry on every call; AI-content marking on outputs |
| AI | on |
| Access model | Invite-only for the free pilot; open sign-up after; reviewers by link, no account |
| Storage shape | Postgres tables of our own for data; object storage with signed links for files |
| Domain rules | Authenticity first: generated material amplifies the band's identity. Human in the loop: nothing is exported without approval, enforced on the server. No raw media in analytics. EU data, deletable on request |

## 11. Open questions

Defaults let work start. Items marked **product** or **legal** are Ale's to revise later and are listed so the recap can show them. Ale was not asked now (autonomy rule).

| Question | Default we proceed with | Settled by |
| --- | --- | --- |
| **Product:** who must approve an asset before export? | At least one band member's approval (the driver counts as one); every invited bandmate must approve, and any veto blocks | Pilot (reviewer completion); Ale may revise |
| Reference images: upload or paste a link? | Upload (up to five), under the five conditions of D-044 (rights sentence, agreeing members only, photographer credit, removal route, 12-month deletion) | Decided (D-044, R-008) |
| Which image provider and prompt style? | Decided by spike 1 | Spike 1 |
| **Legal:** who is the data controller, and what is the legal form? | Decided (D-043): Ale as an individual, for now. A privacy notice and a data list are still needed **before the first pilot band** | Ale, before the pilot |
| **Legal:** which AI-content labelling rules apply to us? | We assume they apply: machine-readable marking and a flag on every asset | Spike 7, a lawyer if affordable |
| **Legal:** how long do we keep drafts and reference images? | 12 months after the campaign (kept by D-044; a lawyer may revise) | R-008 did not contradict it |
| Italian only or Italian and English at launch? | Both, Italian first | Interviews |
| Is a simple A4 or A3 print file enough? | A4 vector text over the largest art; A3 best effort | Spike 2 and the pilot |
| Do we need a status page or monitoring beyond the health check? | Free uptime monitor | Before the pilot |
| Which social channels first as connectors? | None chosen | Interviews and pilot |

## Independent review

An independent Opus agent, given only this document and the source documents (not the author's reasoning), reviewed it and judged it **sound with fixes**. It found 3 critical and 8 important issues. All were fixed in this version, except two that were recorded instead of acted on:

- Filing harness ideas for `files` and `relational` now: left for the first build-phase step (section 10, step 0).
- Lawyer-level confirmation of the AI Act position and Italy's AI law: recorded as a legal open question.

The reviewer could not verify image-provider prices and terms, the free storage tier for the EU option, or Render's regions; those are covered by the spikes. Changes made: text generation moved to our own adapter (the stack's `ai-web` does not fit a server worker), AI-content marking added as a plan and a spike, the pilot-blocking privacy items made explicit, the cost table reconciled, the approval default made consistent with the domain rule, and spikes 2, 3 and 4 given concrete pass criteria.
