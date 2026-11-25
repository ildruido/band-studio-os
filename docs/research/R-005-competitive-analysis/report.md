# R-005 Competitive analysis: report

Protocol: [protocol.md](protocol.md), pre-registered in commit c8b8266 on 2026-11-25. Tier: standard. Method: `docs/research/framework.md` and the `competitive-analysis` skill. Accessed 2026-11-25. Inputs: [R-004](../R-004-competitor-scan/report.md) and [R-007](../R-007-canva-gap-check/report.md) (evidence ids from them are written `R7-E-nn` and `R4-E-nn`; new ones are `E-nn`). Status: **desk route done, skeptic review below, optional Gemini route pending** ([gemini-prompt.md](gemini-prompt.md)).

## Verdict

**Needs primary research.** Desk research cannot settle the key hypothesis C1: no verified competitor is shown to reach our planned level on cost, time and identity fit together, but time can't be scored from any independent source and identity only from reviewers' side remarks. No kill criterion is triggered. The more useful finding is where we stand: **on the pre-registered criteria, our planned product (76.7 of 100) does not beat Canva (79.2) or PosterMyWall (76.9) today**, and it only gets ahead where it is still hoped, not built (guided campaign, time, Italian).

| Id | Verdict | Confidence | One line |
| --- | --- | --- | --- |
| C1 Meaningful gap (key) | Insufficient evidence | Low | No competitor reaches 3, 3, 2 on cost, time and identity with an independent source, but time is unmeasured everywhere and identity rests on vendor pages plus two reviewers' side remarks |
| C2 Durable (key) | Mixed | Low | Generic brief-to-campaign with brand and approval has shipped (Simplified, shown by an independent review E-07); nobody has shipped the band-specific layer, but nothing shows it is hard to copy |
| C3 Customers would switch | Insufficient evidence | Low | No readable band voices; Reddit and Facebook are closed to us |
| C4 Position claimable | Insufficient evidence | Low | Nobody states "your gig campaign in your band's voice"; Krumzi (DJs) and Orphiq are near, with no independent proof either way |

## Strongest evidence against our idea (read first)

1. **Canva wins the pre-registered scoring.** Free to use, known by everyone, 13 to 18 USD for Pro, saved Brand Kit, print PDF (R7-E-03, R7-E-04, R7-E-15). Our product's planned edge (a guided campaign) is only "planned", and in the base case only what exists counts.
2. **The generic flow has shipped.** An independent review says Simplified's agent "automatically applies your brand kit" and by default seeks approval before publishing (E-07). Canva AI 2.0 aims at the same flow, in preview (R7-E-01).
3. **A music-specific design tool already exists for DJs.** Krumzi sells "gig flyer, booking announcement" design with a Brand Kit, a 3-day trial and a 49 USD one-month pass (E-03, E-04). Vendor pages only, but it shows the "band-specific" layer can be built by a small vendor.
4. **Music-specific reach is being sold by a platform that owns the audience.** Bandsintown's Boost costs from 50 USD per show and needs "no creative" (E-01). It does not replace a flyer, but it competes for the same promotion budget of a band.
5. **Habit is free.** The cheapest competitor is a free Canva plan, a friend, or nothing. No source measures how much pain that leaves (C3 unproven).

## Criteria and weights

Fixed in the protocol before scoring (commit c8b8266): cost 20, time 20, identity fit 15, complete campaign 10, gets the show seen 10, low switching effort 10, approval loop 5, print 5, Italian 5. Four of nine are criteria where we are weak or unproven (seen, switching, print, Italian), and identity fit is only a hypothesis. No criterion was added after seeing data. Our planned scores (from the protocol): 3, 3, 2, 3, 1, 1, 2, 1, 3; status: only "planned" or "hoped", none "exists".

## Capability matrix (0 to 3; ? = unknown, excluded from the total, not counted as 0)

| Criterion (weight) | Canva | PosterMyWall | Adobe Express | Mew Design | Simplified | Krumzi | Our plan |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cost (20) | 3 (R7-E-03, E-04, E-16) | 3 (R7-E-09) | ? (table did not render) | 3 (R7-E-08, billing period unknown) | 2 (R7-E-06, E-17: 19 USD annual or 29 monthly, plus 19 USD scheduling add-on, credits metered) | 2 (E-04: 39 USD Pro with Brand Kit, 49 USD month pass) | 3 planned |
| Time (20) | 2 (R7-E-15: "ten minutes" per design, one reviewer) | ? | ? | ? | ? (vendor "15 minutes a week" only, D) | ? (vendor "under 60 seconds", D) | 3 hoped |
| Identity fit (15) | 2 (Brand Kit; reviewers: "templated" unless customised, R7-E-23, E-15) | 2 claimed (Brand Kits, R7-E-09) | 2 claimed, free tier blocked (R7-E-10, E-24) | 1 (per-poster upload, R7-E-11) | 2 (brand kit and voice, applied automatically: E-07, R7-E-07) | 2 claimed (Brand Kit, E-03) | 2 planned, 3 hoped |
| Complete campaign (10) | 2 (separate features; one prompt only in preview, R7-E-01) | 2 (separate tools, plus chat AI from 2026-02, E-05) | 1 (R7-E-10) | 2 (poster plus crops, R7-E-11) | 2 (posts, email, creative; flyer and story not shown, R7-E-07, E-07) | 2 claimed (flyer, carousel; no captions seen, E-03, E-04) | 3 planned |
| Gets the show seen (10) | ? | 2 (Content Planner, R7-E-09) | ? | 1 (none seen) | 2 (scheduling and analytics, E-07) | 1 (none seen) | 1 (export only, D-009) |
| Low switching effort (10) | 3 (free, widely known; the "widely known" part rests on secondary guides, low weight) | 2 | 2 | 1 | 1 (7-day trial; sources disagree on a free plan: R7-E-17 says none, E-07 says one) | 1 (3-day trial, card needed) | 1 (new) |
| Approval loop (5) | ? | ? | ? | ? | 2 (approval before publishing, for teams, E-07) | ? | 2 planned |
| Print output (5) | 2 (PDF, no CMYK, R7-E-15) | ? | ? | ? | ? | ? | 1 planned |
| Italian (5) | ? | ? | ? | ? | ? | ? | 3 planned |
| **Weighted, unknown excluded** | **79.2** | **76.9** | 57.1 (35 of 100 weight known) | 59.0 | 61.9 | 56.4 | **76.7** |
| **Weighted, unknown as 0** | 63.3 | 50.0 | 20.0 | 38.3 | 43.3 | 36.7 | n/a (all scored) |

Bandsintown Boost is **not scored**: it sells audience reach for a flat fee (E-01), not creative, so it complements rather than replaces. On "gets the show seen" it would score 3. Not scored for lack of evidence: ChatGPT or Claude with prompts, friends and freelancers, VistaCreate (10 USD, R7-E-28; page blocked 403), Kittl (R7-E-28; pricing page opened, no price read, E-08), Orphiq (37 USD, R4-E-07; strategy and captions, E-06), Contentdrips and PostPlanify (R-004).

## Sensitivity of the ranking

- **Weights:** with equal weights Canva 77.8, PosterMyWall 73.3, Simplified 61.1, Adobe 55.6; ours planned scores 70.4. Moving any single weight by 5 points (18 shifts, computed) leaves Canva first in 17 and PosterMyWall first in 1. The order of Canva and PosterMyWall on top is stable; the middle (Simplified, Mew, Adobe, Krumzi) swaps with small shifts and has many unknowns.
- **Unknowns:** counting unknowns as 0 keeps Canva first and drops Adobe. The ranking is only as good as the evidence: Adobe is scored on 35 percent of the weight, PosterMyWall on 65.
- **Planned versus existing:** our planned total is 76.7, level with PosterMyWall and just below Canva. It leans on "hoped" time (a 3 worth 60 weight points of potential) and "planned" campaign scores. With time at 2 it is 70.0; with identity also at 1, 65.0. In the base case, nothing of ours exists.
- **Where the planned edge actually is:** campaign (10), time (20, hoped), Italian (5), approval (5). Where it is behind: switching (10), seen (10), print (5). Cost and identity are level or only slightly ahead.

## Where we lose

- **Canva:** free, known, in the browser, no new habit. For a band that only needs one flyer, Canva is faster to start than any new product and prints. Its Brand Kit already saves colours, fonts and logo. Our guided flow only wins if the full set (flyer, story, captions) takes a driver clearly less time than Canva plus two other tools. Unproven.
- **PosterMyWall:** 13 USD, band templates, resize, caption writer and planner in one menu, and a prompt-based AI chat since February 2026 (E-05). It is close to our flow for the price.
- **Simplified:** the closest copy of our flow, already shipping approval and brand kit (E-07). It loses on price once the scheduling add-on is counted, and has no band specificity. A band that accepts about 40 EUR a month and a generic look picks it.
- **Krumzi:** a DJ-and-musician framing, flyer-first, a one-month pass at 49 USD that fits one event. A DJ-style act may prefer it.
- **Bandsintown Boost:** if the band's real problem is "nobody knows about the gig", 50 USD for audience placement beats a flyer. We cannot reach audiences in V1 (export only).
- **A friend or doing nothing:** costs no money. The persona's willingness to pay is still an assumption (H-03). These are the largest rivals and are invisible in the desk evidence.
- **Unproven advantages of ours:** time saved, identity fit ("us" feeling), the approval loop as a pain, willingness to pay per campaign. All four are hypotheses; none has customer evidence.

## Moats and threats, with leading indicators

| Threat | Why it is a threat | Likely reaction | What would show it starting |
| --- | --- | --- | --- |
| Canva AI 2.0 leaves preview | Free base, brand memory, brief-to-campaign (R7-E-01) | Adds music and event brief templates | Canva newsroom or help page for campaign flows; "Magic" features on the free plan |
| Simplified | Same flow, shipping approval and brand kit (E-07) | Adds event or music templates; lowers the entry price | Template pages for gigs or bands; a cheaper plan; Riley demos with flyers |
| Krumzi | Music-adjacent, brand kit, month pass (E-03, E-04) | Widens from DJs to bands | Pages for bands and gigs; captions and scheduling |
| Bandsintown | Owns show data and audience (E-01) | Adds creative generation to Boost | A "creative" or "flyer" feature in Boost; a partnership with a design tool |
| PosterMyWall | Band templates plus prompt AI (E-05) | Band campaign mode | New AI features page naming bands |

**Moat check.** What is hard to copy: a band's accumulated identity and lore (data that grows with use), trust in a human-in-the-loop flow, and Italian-first distribution through the scene. What is easy to copy: the guided flow and the brand kit. The first group is a hypothesis; no evidence shows customers value it.

## Positioning options (all provisional)

1. **"Your gig campaign, in your band's voice."** Guided brief to full set, identity memory, approval. *Evidence:* nobody claims it (C4), the generic flow exists (C2). *Risk:* Simplified or Canva add music templates in a release. *Wrong if:* a blind test (E2) shows bands cannot tell our output from Canva or Simplified output with the band's brand kit loaded.
2. **"The band's approval loop."** Narrower: fewer evenings of group chats, with identity memory. *Evidence:* only a starting-idea assumption; Simplified has team approval (E-07). *Risk:* WhatsApp is good enough. *Wrong if:* interviews (E1) show approval is not a pain.
3. **"A per-gig pass for the show."** Pay per campaign, anchored on what bands are offered per event: 49 USD one-month pass (Krumzi, E-04) and 50 USD a show (Boost, E-01). *Evidence:* vendor prices only, not demand. *Risk:* our 15 EUR per campaign line sits well below these anchors, so the plan might be underpriced or the market may not pay; our cost per campaign (images, captions) is still unknown. *Wrong if:* the fake-door test (E3) shows no willingness to pay per campaign.

## Pricing and positioning landscape

| Offer | Price as shown (USD unless stated) | Basis |
| --- | --- | --- |
| Canva Pro | 18 a month or 144 a year; UK £13 or £100 | R7-E-03, R7-E-16 |
| PosterMyWall | 13 a month | R7-E-09 |
| VistaCreate | 10 a month, annual | R7-E-28 (page blocked) |
| Mew Design | 5.69 a month shown | R7-E-08 |
| Simplified | 19 annual or 29 monthly, +19 scheduling add-on, 79 "Starter" campaign plan | R7-E-06, E-17, E-18 |
| Krumzi | 19, 39, 89 a month; 49 one-month pass | E-04 |
| Bandsintown Boost | 50 per show for venues under 500 capacity | E-01 |
| Orphiq | 37 a month | R4-E-07 |
| Friend or freelancer, doing nothing | unknown, no source | none |

Empty positions: nobody sells "per gig, for the band's identity". It may be empty because bands do not pay per gig (the no-demand reason is untested). Prices are US dollars as shown, not converted for Italy or the UK.

## Evidence log (new this study)

| Id | Hyp | Direction | Source | Date, publisher | Grade | Interest | Quote | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E-01 | C1, C2 | against | [Bandsintown help: How to use Boost](https://help.artists.bandsintown.com/en/articles/13533897-how-to-use-boost) | Bandsintown, accessed 2026-11-25 | D (primary for its own feature and price) | yes | "no creative, no campaign setup, no targeting decisions required"; "Under 500 $50" (price by venue capacity) | Opened |
| E-02 | C1 | neutral | [Hypebot: How to use Boost](https://www.hypebot.com/how-to-use-bandsintown-boost-to-market-live-shows/) | Hypebot, 2026-10-06 | D (repeats Bandsintown's own playbook) | yes | "the five boosted shows drove 237K views and 587 ticket clicks ... all for less than $300" | Opened. The numbers come from Bandsintown's case study on one artist (Jay Electronica): no weight, counted once with E-01 |
| E-03 | C2, C4 | against | [Krumzi: AI design tool for DJs](https://www.krumzi.com/for/djs) | Krumzi, accessed 2026-11-25 | D | yes | "Describe the gig flyer, booking announcement, or set graphic you need"; "Set your Brand Kit with your DJ name, colors, and logo" | Opened. Vendor only |
| E-04 | C1 | neutral | [Krumzi pricing](https://www.krumzi.com/pricing) | Krumzi, accessed 2026-11-25 | D | yes | "Starter $19 /mo billed monthly"; "Pro ... $39 /mo"; "A month pass ... $49 once" | Opened. Brand Kit listed under Pro |
| E-05 | C1, C2 | against | [PosterMyWall AI launch](https://www.postermywall.com/blog/2026/02/04/introducing-postermywall-ai-a-prompt-based-creative-ai-tool/) | PosterMyWall, 2026-02-04 | D | yes | "Promote parties, live music, and themed events." and "five catchy Instagram captions" as an example prompt | Opened |
| E-06 | C2, C4 | neutral | [Hypebot: How to use AI to book and market live shows](https://www.hypebot.com/how-to-use-ai-to-book-and-market-live-shows-a-musicians-guide/) | Hypebot, Bruce Houghton, 2026-04-14 | C | no | "Orphiq ... generates promo ideas, caption hooks, and script ideas ... based on your unique artist brand and tour schedule." | Opened. Trade press listing tools; no testing |
| E-07 | C1, C2 | against | [GPTZero review of Simplified](https://gptzero.me/news/simplified-ai-review/) | GPTZero, 2026-08-10 | C | unknown (no affiliate wording found on the page) | "By default, Riley is set to seek approval from you before publishing anything."; "Riley automatically applies your brand kit"; "paid plans ... roughly $29 to $199 per month" | Opened. Review reads the product; no band test. Says a free plan exists, conflicting with R7-E-17 |
| E-08 | C1, C4 | neutral | [Kittl pricing](https://www.kittl.com/pricing) | Kittl, accessed 2026-11-25 | D | yes | "Kittl Brand Studio Build your brand once. Generate ads, posts, campaigns, all on-brand." | Opened. Price table not readable in the text; generic design, not music |

Imported without change (opened in R-007 on 2026-11-25, inside the 90-day rule): R7-E-01, 03, 04, 06 to 12, 15 to 17, 19 to 21, 23, 24, 26, 28. Imported from R-004 (2026-11-04, older than the fast-moving window): R4-E-01 (Boost, re-opened as E-01), R4-E-07 (Orphiq price, not re-opened, no weight in scores).

### Excluded or not opened

| Source | Reason |
| --- | --- |
| canva.com pages including Italian band flyer templates | HTTP 403 earlier today; the search summaries are leads only, not used for the Italian-language score |
| VistaCreate pricing | HTTP 403 |
| makingascene.org AI marketing plan | Opened; a generic ChatGPT planning walkthrough, no competitor comparison; no weight |
| Reddit, Facebook, G2, Bristol24/7 | Unreadable (see R-007) |
| AI-summary search results | Leads only |

## Queries run

Neutral: AI tool for bands gig promotion campaign flyer captions launched 2026 (C2, C4); Bandsintown Boost review artists results 2026 (C1, C2); promozione concerti band social flyer strumenti (C4, Italian). Disconfirming: band says Canva free is good enough for gig posters (C3, C1); Simplified AI marketing agent Riley hands-on review limitations (C1). Fewer than the protocol's two disconfirming queries per hypothesis for C2, C3 and C4; logged as a deviation below. The Gemini route (neutral prompt, [gemini-prompt.md](gemini-prompt.md)) is meant to fill C3.

## What we could not find

- Any timed trial of a full gig set in any tool, so the time criterion is unscored for all but Canva (one reviewer's claim).
- Band drivers' own words (Reddit and Facebook closed), in English or Italian, about whether free tools are enough.
- An independent test of Krumzi, Mew Design, PosterMyWall AI or Canva AI 2.0 with a band's identity.
- Italian-language sources, prices in EUR, and Italian UI support for any tool.
- Freelancer and friend rates; they matter for the cost criterion of the real substitute.

## Limits and bias

Search results arrive as summaries; every claim above rests on pages I opened this session or in R-007. Vendor pages dominate, so interest flags are high. Scores were set after I had read R-004 and R-007 (declared in the protocol), so I limited each to what a source says, left unknowns blank, and set generous scores for competitors where a source was ambiguous. The "planned" column is our own intention and is the part most at risk of favouring us; the report shows it separately and shows what happens if "hoped" scores drop.

## What would settle it (primary research)

1. **A timed head-to-head trial** of Canva, Simplified (7-day trial, R7-E-06) and PosterMyWall on one real gig, scored on time and output. Ale declined the hands-on check (D-025). The nearest substitute is the **E2 blind output test**; include Simplified and Canva output with the band's brand kit loaded as the comparison, so C1 and C2 get a fair test.
2. **Driver interviews (E1/R-003):** C3 and C4; whether free tools are good enough, whether the approval loop hurts, and what they would pay per gig.
3. **Fake-door price test (E3):** test the 15 EUR per campaign line against the 49 to 50 USD per event anchors seen here.
4. **Gemini route** (optional, pending): band voices and "launched or abandoned" music tools.

## Skeptic review

Pending (see below once run).

## Deviations

- 2026-11-25: fewer disconfirming queries than the protocol's minimum for C2, C3 and C4 (one session of desk research; Reddit and Facebook closed). Effect: C2 stays Mixed and C3 and C4 stay Insufficient evidence; no verdict leans on the missing queries.
