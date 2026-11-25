# R-007 Canva gap check: report

Protocol: [protocol.md](protocol.md), pre-registered in commit 229dce0 on 2026-11-25. Tier: standard. Method: `docs/research/framework.md`. Accessed 2026-11-25. Status: **desk route done; Gemini route pending** (prompt in [gemini-prompt.md](gemini-prompt.md)). The Gemini section below is filled in when Ale returns the report.

## Verdict

**Needs primary research.** Desk research cannot settle the key hypothesis G1, and it moved against us in one way that matters: the pieces and even the "brief in, campaign out" flow now exist as generic products. Nobody is shown, by an independent source, doing it for a band's gig. No kill criterion is triggered.

| Id | Verdict | Confidence | Why in one line |
| --- | --- | --- | --- |
| G1 Gap holds (key) | Insufficient evidence | Low | No tool is shown to meet all three conditions, but Simplified's own pages claim most of them (brief to captions and creative in a saved brand kit, with approval and scheduling, from $19 a month) and no independent source tests it. Canva's own pages could not be opened |
| G2 Identity fit | Supported | Low | Three independent C voices call AI posters generic or overcrowded, but none test these tools on a band's own look |
| G3 Canva closing | Mixed | Low | Journalism says Canva AI 2.0 makes multi-format campaigns from a prompt with brand memory, but only as a research preview and with no tutorial or help page we could open |

## Strongest evidence against our hypothesis (read first)

1. **Simplified now describes our flow, for general small businesses.** Its page says: "Brief Riley once. Riley creates your social posts, emails, and campaign assets, keeps everything in your brand, and gets it ready to publish. You review." (E-07). Its pricing page says nothing ships "until you approve it", with scheduling included and Pro at "$19 per month" billed annually (E-06). Round 1 saw Starter at 79 USD a month; the offer has changed in three weeks. This is vendor material (D), and the page does not show a flyer or a 9:16 story, so condition (a) is not shown. It is the closest match to our guided, approve-before-publish flow found so far.
2. **Canva's own AI is moving to the same flow.** Creative Bloq (C, 2026-04-16): "You can instantly generate content in multiple formats, making it a potential time-saver for multi-channel campaigns" and Canva has "a Memory Library. It can remember styles, helping to keep projects on brand" (E-01). Preview only: "currently available as a research preview".
3. **The cost line is not a barrier.** Canva Pro is 18 USD a month or 144 USD a year (E-03, E-04); PosterMyWall lists 13 USD a month (E-09); Mew Design's Hobby plan is 5.69 USD a month (E-08). All sit under our 25 EUR line.

## Findings by tool

Ratings are 0 (poor) to 3 (strong) for a non-designer band driver. **n/e** means no evidence found, not a low score. Grades per the framework; vendor pages (D) are used only for features and price. Ratings of vendor claims are marked "claimed".

| Tool | Time | Cost | Steps (guided?) | Identity fit | Multi-format campaign |
| --- | --- | --- | --- | --- | --- |
| Canva | n/e | 3 (Pro 12 to 18 USD, E-03, E-04) | 2 claimed: separate features today (templates, Magic Switch resize on Pro, Brand Kit); one-prompt campaign only in AI 2.0 preview (E-01, E-02) | 2: 1 Brand Kit (3 colours) free, 5 on Pro (E-04); memory claimed (E-01) | 2: story size needs hand fixes per guides (E-05, unverified wording from a search summary) |
| PosterMyWall | n/e | 3 claimed (13 USD a month, E-09) | 2 claimed: "Bands" templates, Resize, AI Caption Writer, Content Planner as separate menu tools (E-09) | 2 claimed: Brand Kits listed; limit per plan not opened | 2 claimed |
| Adobe Express | n/e | n/e (pricing table did not render) | 1 to 2: flyer maker with "Band Flyers" templates and prompt-based template generation; no guided campaign seen (E-10) | 2 claimed: "set up multiple brands" on web (E-10) | 1: scheduling and story crops not seen |
| Mew Design | n/e | 3 claimed (Hobby 5.69 USD, Pro 19.99 USD, credits per image, E-08) | 2 claimed: poster first, then "ask" for story, square, banner crops (E-11) | 1: upload logo and photos per poster; saved identity across gigs not shown | 2 claimed: poster plus crops; no captions or scheduling seen |
| Simplified | n/e (vendor claims "15 minutes" a week, E-07) | 3 claimed (Pro 19 USD, annual, E-06) | 3 claimed: one brief gives plan, posts, captions, creative, approval, scheduling (E-07) | 2 claimed: "Connect your logo, colors, fonts, and voice once" (E-07); not music specific | 2: Instagram posts and captions shown; flyer and story not shown |

No source gives minutes from gig details to a full set for any tool, so **time is unrated everywhere**. This is the biggest hole in the desk route; only a timed trial or Gemini's sources can fill it.

## Does anyone say it is good enough, or generic?

- **Generic (G2):** USA Today via MoneyTalks (C, 2026-10-01): AI posters "are often overcrowded with text and icons, making it difficult to distinguish the most important information"; a designer says vague prompts cause the sameness (E-12). R-004 added two venue and designer voices (E-24, E-25 there). None test Canva, PosterMyWall or Simplified on a band's own look.
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
| E-07 | G1 | against | [Simplified AI marketing agent for small business](https://simplified.com/ai-marketing-agent/small-business) | Simplified, 2026-11-25 | D | yes | "Connect your logo, colors, fonts, and voice once. Riley uses that context on every campaign" | Opened. Instagram and email shown; no flyer or story |
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

Search results arrive as summaries, so every claim above rests on pages actually opened, and the list of unopened ones is in the table. English vendor and review sites dominate, so interest flags are high. I declared that I expected Canva to do the pieces but not the guided flow; the evidence partly confirmed it (Canva's guided flow exists only in preview) and partly cut against it (Simplified). The contrarian pass was the Simplified and Canva AI 2.0 reading above.

## What would settle it

1. **Gemini route** (pending): sources it cites that I can open, especially tutorials or user reviews of Canva AI 2.0 and Simplified's Riley.
2. **A timed trial** of Simplified Pro (7-day trial per E-06) and Canva with a real gig. Ale declined the hands-on check (D-025), so the nearest substitute is the E2 blind output test in the [research plan](../research-plan.md).
3. **Ruling on R-004's S4 reading:** the kill criterion needs a product built for musicians. Canva AI 2.0 and Simplified Riley are general, so S4 stays Mixed, but the evidence that incumbents are closing the generic gap is now stronger. Ale's ruling is still pending.

## Gemini route

Pending. Ale pastes [gemini-prompt.md](gemini-prompt.md) into Gemini Deep Research and returns the report; each claim counts only after its cited source is opened.

## Skeptic review

Pending.

## Deviations

- None yet.
