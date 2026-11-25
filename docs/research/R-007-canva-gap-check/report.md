# R-007 Canva gap check: report

Protocol: [protocol.md](protocol.md), pre-registered in commit 229dce0 on 2026-11-25. Tier: standard. Method: `docs/research/framework.md`. Accessed 2026-11-25. Status: **desk route done; Gemini route pending** (prompt in [gemini-prompt.md](gemini-prompt.md)). The Gemini section below is filled in when Ale returns the report.

## Verdict

**Needs primary research.** Desk research cannot settle the key hypothesis G1. It also points one way worth watching: the pieces and, by vendors' own claims, a "brief in, campaign out" flow now exist as generic products (vendor-only so far). Nobody is shown, by an independent source, doing it for a band's gig. No kill criterion is triggered.

| Id | Verdict | Confidence | Why in one line |
| --- | --- | --- | --- |
| G1 Gap holds (key) | Insufficient evidence | Low | No tool is shown to meet all three conditions, but Simplified's own pages claim most of them (brief to captions and creative in a saved brand kit, with approval and scheduling, from $19 a month) and no independent source tests it. Canva's own pages could not be opened |
| G2 Identity fit | Insufficient evidence | Low | One C voice in this log (designers on AI posters in general) says generic; none test these tools on a band's own look, and "Supported" needs medium confidence. R-004's venue and designer voices point the same way but were not re-opened here |
| G3 Canva closing | Insufficient evidence | Low | The kill criterion needs a Canva help page or tutorial, and Canva's pages returned 403, so it could not be tested. One journalist (C) reports a prompt-to-campaign flow in a research preview |

## Strongest evidence against our hypothesis (read first)

1. **Simplified now describes our flow, for general small businesses.** Its page says: "Brief Riley once. Riley creates your social posts, emails, and campaign assets, keeps everything in your brand, and gets it ready to publish. You review." (E-07). Its pricing page says nothing ships "until you approve it", with scheduling included and Pro at "$19 per month" billed annually (E-06). R-004 saw a Starter plan at 79 USD a month; the offer differs now (one earlier data point, so a possible change, not a trend). This is vendor material only (D), unconfirmed by any independent source, and the page does not show a flyer or a 9:16 story, so condition (a) is not shown. It is the closest match to our guided, approve-before-publish flow found so far.
2. **Canva's own AI is moving to the same flow.** Creative Bloq (C, 2026-04-16): "You can instantly generate content in multiple formats, making it a potential time-saver for multi-channel campaigns" and Canva has "a Memory Library. It can remember styles, helping to keep projects on brand" (E-01). Preview only: "currently available as a research preview".
3. **The cost line is not a barrier.** Canva Pro is 18 USD a month or 144 USD a year (E-03, E-04); PosterMyWall lists 13 USD a month (E-09); Mew Design's Hobby plan is 5.69 USD a month (E-08). All sit under our 25 EUR line.

## Findings by tool

Ratings are 0 (poor) to 3 (strong) for a non-designer band driver. **n/e** means no evidence found, not a low score. Grades per the framework; vendor pages (D) are used only for features and price. Ratings of vendor claims are marked "claimed"; a 3 means "claimed to cover it", not shown to work. Prices are US dollars as shown to a US visitor, not converted for Italy or the UK. The Canva range 12 to 18 USD is the annual-equivalent and monthly price from E-03 and E-04, both D sources, because Canva's price page returned 403.

| Tool | Time | Cost | Steps (guided?) | Identity fit | Multi-format campaign |
| --- | --- | --- | --- | --- | --- |
| Canva | n/e | 3 (Pro 12 to 18 USD, E-03, E-04) | 2 claimed: separate features today (templates, Magic Switch resize on Pro, Brand Kit); one-prompt campaign only in AI 2.0 preview (E-01, E-02) | 2: 1 Brand Kit (3 colours) free, 5 on Pro (E-04); memory claimed (E-01) | n/e (story handling only in unopened Canva help pages, E-05) |
| PosterMyWall | n/e | 3 claimed (13 USD a month, E-09) | 2 claimed: "Bands" templates, Resize, AI Caption Writer, Content Planner as separate menu tools (E-09) | 2 claimed: Brand Kits listed; limit per plan not opened | 2 claimed |
| Adobe Express | n/e | n/e (pricing table did not render) | 1 to 2: flyer maker with "Band Flyers" templates and prompt-based template generation; no guided campaign seen (E-10) | 2 claimed: "set up multiple brands" on web (E-10) | 1: scheduling and story crops not seen |
| Mew Design | n/e | 3 claimed (Hobby 5.69 USD, Pro 19.99 USD, credits per image, E-08) | 2 claimed: poster first, then "ask" for story, square, banner crops (E-11) | 1: upload logo and photos per poster; saved identity across gigs not shown | 2 claimed: poster plus crops; no captions or scheduling seen |
| Simplified | n/e (vendor claims "15 minutes" a week, E-07) | 3 claimed (Pro 19 USD, annual, E-06) | 3 claimed, vendor page only: one brief gives plan, posts, captions, creative, approval, scheduling (E-07) | 2 claimed: "Connect your logo, colors, fonts, and voice once" (E-07); not music specific | 2: Instagram posts and captions shown; flyer and story not shown |

No source gives minutes from gig details to a full set for any tool, so **time is unrated everywhere**. This is the biggest hole in the desk route; only a timed trial or Gemini's sources can fill it.

## Does anyone say it is good enough, or generic?

- **Generic (G2):** USA Today via MoneyTalks (C, 2026-10-01, US): AI posters "are often overcrowded with text and icons, making it difficult to distinguish the most important information"; a designer says vague prompts cause the sameness (E-12). R-004 logged two more voices (its E-24 and E-25, C, Canada); they were not re-opened in this study and are not counted. None test Canva, PosterMyWall or Simplified on a band's own look.
- **Good enough:** only vendor and vendor-adjacent sources (Sonicbids' Canva tutorial is a 2010s-era walkthrough where layouts "cost $1", so it is stale and given no weight, E-13).
- **Excluded:** remio.ai (2026-06-18) says early tests found Canva AI output homogeneous. It cites no named tests and reads as machine-written; grade D, no weight (E-14). baeseokjae.github.io (2026-05-26) is a personal blog with no verifiable testing and a Pro price (about 15 USD) that conflicts with E-03; grade D, no weight (E-02 notes only what it adds).

## Evidence log

| Id | Hyp | Direction | Source | Date, publisher | Grade | Interest | Quote | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E-01 | G1, G3 | against | [Creative Bloq on Canva AI 2.0](https://www.creativebloq.com/design/design-software/canva-ai-2-0-can-create-an-entire-brand-campaign-from-a-text-prompt) | Creative Bloq, 2026-04-16 | C | no | "You can instantly generate content in multiple formats, making it a potential time-saver for multi-channel campaigns." | Opened. Also: "currently available as a research preview" |
| E-02 | G1, G3 | against | [baeseokjae review](https://baeseokjae.github.io/posts/canva-ai-2-review-2026/) | personal blog, 2026-05-26 | D | no | "research preview for the first 1 million users" | Opened. No weight except for the preview limit, which E-01 confirms |
| E-03 | G1 | neutral | [Carly guide to Canva pricing](https://www.usecarly.com/blog/canva-pricing/) | 2026-07-15 | D | unknown | "Canva Pro costs $18/month billed monthly, or $144/year" | Opened. Restates Canva's price page, which returned 403 |
| E-04 | G1, G2 | neutral | [Techpresso review](https://academy.techpresso.co/reviews/is-canva-pro-worth-it) | 2026-09-25 | D (promotes tutorials and trials) | yes | "Brand Kits 1 (3 colors only) / 5" (Free / Pro) | Opened. Says it "verified on Canva's pricing page in September 2026" |
| E-05 | G1 | neutral | Canva Magic Switch help and guides | via search summary only | Unverified | no | none | Canva help pages returned 403; not opened. Lead only |
| E-06 | G1 | against | [Simplified pricing](https://simplified.com/pricing) | Simplified, 2026-11-25 | D | yes | "Simplified Pro, billed annually $19 per month"; "Nothing ships until you approve it." | Opened. Replaces the 79 USD Starter seen in R-004 |
| E-07 | G1 | against | [Simplified AI marketing agent for small business](https://simplified.com/ai-marketing-agent/small-business) | Simplified, 2026-11-25 | D | yes | "Brief Riley once. Riley creates your social posts, emails, and campaign assets, keeps everything in your brand, and gets it ready to publish." and "Connect your logo, colors, fonts, and voice once." | Opened. Instagram and email shown; no flyer or story |
| E-08 | G1 | neutral | [Mew Design pricing](https://mew.design/pricing) | Mew, 2026-11-25 | D | yes | "Hobby ... 5.69 /month ... 500 credits per month" | Opened |
| E-09 | G1 | neutral | [PosterMyWall premium](https://www.postermywall.com/index.php/premium) and [band flyers](https://www.postermywall.com/index.php/l/band-flyers) | PosterMyWall, 2026-11-25 | D | yes | Menu lists "Brand Kits", "Resize", "AI Caption Writer", "Content Planner"; comparison shows "$13 / month" | Opened. Plan limits not on the opened page |
| E-10 | G1 | neutral | [Adobe Express flyer maker](https://www.adobe.com/express/create/flyer) and [pricing](https://www.adobe.com/express/pricing) | Adobe, 2026-11-25 | D | yes | "You can set up multiple brands or looks in Adobe Express" | Opened. Price table is loaded by script and did not render |
| E-11 | G1 | neutral | [Mew Design concert poster generator](https://mew.design/create/ai-concert-poster-generator) | Mew, 2026-11-25 | D | yes | "ask the online gig poster maker for square, story, banner, or venue-screen crops" | Opened |
| E-12 | G2 | for | [MoneyTalks on USA Today piece](https://www.moneytalksnews.com/graphic-designers-want-you-to-stop-with-ai-posters/) | 2026-10-01, US | C | no | "AI-generated posters ... are often overcrowded with text and icons" | Opened. Designers' voice, not bands |
| E-13 | G2 | neutral | [Sonicbids Canva gig poster tutorial](https://blog.sonicbids.com/tutorial-how-to-create-a-beautiful-gig-poster-when-you-cant-afford-a-graphic-designer) | undated, old | D (stale) | no | "a lot of these layouts will cost $1 to use" | Opened. Stale, no weight |
| E-14 | G2 | for | [remio.ai on generic output](https://www.remio.ai/post/canva-ai-design-tools-spark-debate-over-generic-output) | 2026-06-18 | D | no | "Many designers now fear the result will be a wave of low-effort graphics" | Opened. No named tests; excluded |

### Excluded or not opened

| Source | Reason |
| --- | --- |
| canva.com pages (pricing, help, Magic Design, newsroom), Fast Company, TweakTown, PosterMyWall support centre | HTTP 403 for automated access. Not worked around |
| Adobe Express pricing table | Loaded by script; did not render |
| Reddit, Facebook, YouTube | Not tried or unreadable here; no band driver voices (B) in this route |
| Lovart comparison, Dreamina comparison | Vendors of competing tools; leads only |

## What we could not find

- Any timed trial of a full gig set in any tool, and any B-grade voice from a band driver using these tools.
- Any independent review of Simplified's Riley agent, Canva AI 2.0 with a campaign prompt, or Mew Design.
- Canva's own help and price pages; Adobe Express prices; PosterMyWall plan limits.
- Italian-language sources (no Italian queries returned usable pages in this session).

## Limits and bias

Search results arrive as summaries, so every claim above rests on pages actually opened, and the list of unopened ones is in the table. English vendor and review sites dominate, so interest flags are high. The tool pages, reviews and articles in the log were opened by me this session, but the skeptic could not re-open them (see Skeptic review); the unopened sources are listed above and carry no weight. I declared that I expected Canva to do the pieces but not the guided flow; the evidence partly confirmed it (Canva's guided flow exists only in preview) and partly cut against it (Simplified). The contrarian pass was the Simplified and Canva AI 2.0 reading above.

## What would settle it

1. **Gemini route** (pending): sources it cites that I can open, especially tutorials or user reviews of Canva AI 2.0 and Simplified's Riley.
2. **A timed trial** of Simplified Pro (7-day trial per E-06) and Canva with a real gig. Ale declined the hands-on check (D-025), so the nearest substitute is the E2 blind output test in the [research plan](../research-plan.md).
3. **Ruling on R-004's S4 reading:** the kill criterion needs a product built for musicians. Canva AI 2.0 and Simplified Riley are general, so S4 stays Mixed, but the evidence that incumbents are closing the generic gap is now stronger. Ale's ruling is still pending.

## Gemini route

Pending. Ale pastes [gemini-prompt.md](gemini-prompt.md) into Gemini Deep Research and returns the report; each claim counts only after its cited source is opened.

## Skeptic review

Run 2026-11-25 by the `research-skeptic` agent, standard tier. **Limit:** it had no shell and its page fetch failed with DNS errors for every host, so it could not re-check a single quote. Its verdicts come from the protocol and the evidence log only. A source re-check is still owed once it can open pages (E-01, E-06, E-07 and five others).

Blind verdicts matched ours on G1 and the study (Needs primary research) and differed on G2 and G3. Fixes made:

| Item | Resolution |
| --- | --- |
| G2 "Supported, Low" breaks the verdict rules; counted R-004 voices not in this log | Fixed: Insufficient evidence, Low; R-004 voices named but not counted |
| G3 "Mixed" not anchored to the kill criterion | Fixed: Insufficient evidence, Low; the criterion could not be tested because Canva pages were blocked |
| G1 leaned on vendor claims; Simplified "Steps = 3" | Fixed: marked vendor-only; wording softened from "moved against us" |
| "Brief Riley once..." quote missing from the log | Fixed: added to E-07 (quote read on the opened page) |
| Disconfirming queries not logged | Fixed: see Queries run |
| E-05 (unverified) fed a rating | Fixed: Canva multi-format cell set to n/e |
| Price evidence weak, USD not converted, 12 USD unsourced | Fixed: caveat added under the ratings table |
| "Three weeks" overclaim | Fixed: one earlier data point, wording softened |
| "Every claim rests on opened pages" vs ratings on E-05 | Fixed |

## Queries run

Search results were summaries only; pages were then opened by plain request. Neutral: Canva Magic Design, brand kit and price; Canva gig flyer resize and tutorial; PosterMyWall pricing and brand kit; Canva AI 2.0 hands-on; independent band promotion experience. Disconfirming: Canva AI poster generic and limitations (G2); Canva Magic Switch problems on flyer to story (G1); designers' criticism of AI posters for local bands (G2); Simplified hands-on review (G1, found none independent). No search for people who tried and quit, and no "Canva can't do" query returned usable pages: both are gaps, so the disconfirming minimum of 2 per hypothesis is met for G1 and G2 but not for G3 (one query). The Lovart and Dreamina comparisons surfaced in the generic-output search; they are vendors of rival tools, were not opened and carry no weight.

## Deviations

- 2026-11-25: Canva's own pages (403) could not be used and no mirror or cached copy was used; Canva evidence rests on independent articles, so the G3 kill criterion could not be tested.
- 2026-11-25: G3 got one disconfirming query instead of the standard tier's two.
