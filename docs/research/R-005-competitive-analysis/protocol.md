# R-005 Competitive analysis: protocol

Pre-registered before any new search. After the first new search, only the **Deviations** section changes. Method: `docs/research/framework.md`.

- **Type:** Competitive analysis, using the `competitive-analysis` skill on top of `research-protocol`.
- **Tier:** standard. The skill says deep when the analysis decides a positioning or pricing bet. This one only shapes MVP scoping; nothing commits money (D-017), pricing is still untested (E3) and the positioning stays provisional until primary research. Deep would cost a second agent run and Ale's time on the Pro plan. If Ale wants it deep, say so before the report is merged.
- **Decision this informs:** where the product's position sits against what a band driver can do today, and which parts of the planned product the MVP (exit criterion 3) must protect.
- **If the answer is yes we will…; if no we will…:** If the gap is real and durable on the top-weighted criteria, the MVP keeps the guided gig campaign tied to the band's identity as its core and the positioning options in the report go to Ale. If a competitor already serves it, or the gap is a feature a release can copy, we reshape the position (for example onto the narrower layer that is hard to copy) before the MVP is scoped.
- **Sponsor:** Ale. **Lead:** Claude.
- **Kill criteria approved by the product owner:** not required at this tier.
- **Input scan:** R-004 competitor scan ([report](../R-004-competitor-scan/report.md), [addendum 1](../R-004-competitor-scan/addendum-1.md), skeptic-reviewed, verdict Reshape) and R-007 Canva gap check ([report](../R-007-canva-gap-check/report.md), skeptic-reviewed, verdict Needs primary research). Entries older than 90 days or about fast-moving products (Canva AI, Simplified, Bandsintown Boost, Mew Design) are re-opened.

## Declared priors

- I expect no verified tool to do the whole job for a band in one guided flow at the price line, but I expect Simplified and Canva AI 2.0 to be close on the generic part, so the durable part is more likely to be the band-specific layer and the approval loop than the flow itself. This comes from R-004 and R-007, which I had read before writing this protocol; that is a breach of the skill's "criteria before profiles" rule, declared here. Mitigation: the criteria below come from the customer's job, the personas, the constraints and R-001 evidence (money and time are the evidenced pains), the nine criteria include four where our planned product is weak or unproven (criteria 5, 6, 8 and 9), and the skeptic checks that the weights predate the scoring.
- I expect "where we lose" to be real: free Canva plus habit is the main rival, and a band that does nothing or uses a friend costs nothing.
- I have no first-hand trial of any tool (Ale declined it, D-025). Scores show what sources say, not how a tool feels in use.

## Criteria, weights and scale (fixed now)

Scores are 0 to 3 per criterion. **Unknown is not zero**: an unscored cell stays "unknown" and is excluded from the weighted total, with the total shown both ways (unknown excluded, unknown as 0). Every score cites evidence ids. Vendor pages (grade D) can support feature and price scores only. An independent source (grade C or better) is needed for any score on time or identity fit to count toward a kill criterion.

| # | Criterion (the customer's reason) | Weight | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | **Total cost of the full gig set** (money is the top barrier, R-001 E-04) | 20 | over 80 EUR a month, or needs a paid designer | 40 to 80 EUR a month | 25 to 40 EUR a month | at most 25 EUR a month or 15 EUR a campaign, whole job inside the plan |
| 2 | **Time and effort for a non-designer** (time is the second evidenced pain, R-001 E-09) | 20 | needs design skill | over 45 minutes or several tools | 15 to 45 minutes | at most 15 minutes, shown by a source |
| 3 | **Identity fit: looks and sounds like the band** (the product's reason to exist; venue pushback against generic AI posters, R-007 E-19 to E-21) | 15 | generic output, nothing saved | per-poster upload, templated look | saved identity reused automatically | saved identity reused and independent voices call output on-brand |
| 4 | **Complete campaign**: flyer, story, feed post and captions from one brief | 10 | none | poster only | poster plus crops, or captions separately | all four from one brief |
| 5 | **Gets the show seen**: publishing, scheduling, audience reach | 10 | none | export only | schedule or boost | publish, schedule and reach |
| 6 | **Low switching effort and trust**: usable free, already known, no new habit (**we are weakest**: new, unknown product) | 10 | none | paid only and little known | cheap or trial, moderately known | free tier covers the job and widely known |
| 7 | **Bandmate approval loop** (the group-chat pain, a starting-idea assumption) | 5 | none | via export and chat | share link or comments | built-in approve or veto |
| 8 | **Print and real-world output** (venues and street posters; **we are weak**) | 5 | none | image only | PDF | print-ready PDF with bleed |
| 9 | **Italian language and local fit** (Italy first, D-012; **unproven for us**) | 5 | none | English only | Italian UI or Italian captions | both |

Top-weighted criteria (the "top three"): 1, 2 and 3, 55 percent of the weight. Weights are judgments: money and time have evidence; identity fit is a hypothesis (H-01); the rest are assumptions, labelled as such in the report.

**Our planned product, scored now with status** (before reading any new profile): 1 cost = 3 (planned; price untested, H-03); 2 time = 3 (hoped); 3 identity = 2 (planned; 3 hoped, H-01 untested); 4 campaign = 3 (planned); 5 seen = 1 (V1 is export only, D-009); 6 switching = 1 (exists: nothing; new product); 7 approval = 2 (planned, light approve or veto, D-005); 8 print = 1 (planned image export; PDF not decided); 9 Italian = 3 (planned). **Base case: only "exists" counts.** Nothing exists yet, so the base case compares today's alternatives with each other and shows our planned scores in a separate column. Planned case adds our planned scores.

**Competitor list (names only, from the scans):** Canva, Adobe Express, PosterMyWall, Mew Design, Simplified, Piktochart, VistaCreate, Kittl, Contentdrips, Venngage, PostPlanify, Orphiq, Bandsintown Boost, Linktree and similar link tools (adjacent, scored only where relevant), ChatGPT or Claude with prompts (DIY), a friend or freelance designer, and doing nothing. Further names found by this study are added with a log entry; any added after seeing the data is logged as a deviation.

## Hypotheses

C1 and C2 are key.

| Id | Key? | Hypothesis | Null or strongest alternative | Supported if | Kill criterion (contradicted if) |
| --- | --- | --- | --- | --- | --- |
| C1 Meaningful gap | yes | On the top three criteria (cost, time, identity fit), no verified competitor reaches our planned level (3, 3, 2) at once for a non-designer band driver. | A competitor already serves it well enough. | Every competitor with evidence scores below our planned level on at least one of the top three, and none is shown otherwise. | One verified competitor scores at or above 3, 3, 2 on cost, time and identity fit, with at least one independent source (grade C or better) for the time and identity scores. If time or identity can only be scored from vendor pages, C1 is Insufficient evidence, not Supported. |
| C2 Durable | yes | The part of the gap that is left (band-specific identity and tone, the gig context, the approval loop) rests on something competitors cannot copy cheaply within 12 months. | It is a feature a release can add. | No competitor has shipped or announced it, and the evidence shows why it is costly (data, trust, distribution, a different model). | Either (i) a general competitor already ships a brief-to-multi-format-campaign flow with saved brand identity, shown by an independent source, **and** an independent source shows it producing band-specific output; or (ii) a competitor has publicly announced, with a date within the last 12 months, a music- or event-specific campaign flow. |
| C3 Customers would switch | no | The pain of today's solution is larger than the cost of switching. | Customers stay with the free tool and habit. | At least two independent grade B voices from different communities describe the pain as recurring and say they would pay or switch. | At least two independent grade B voices from different communities say a free or cheap general tool is good enough for gig promotion. |
| C4 Position claimable | no | A position customers can understand and believe is not already owned. | The position is taken or unbelievable. | No competitor's public message claims "your gig campaign, in your band's own voice" and every near message lacks independent proof. | A competitor owns the same message and an independent source shows customers believe it. |

Voices from Reddit and Facebook are unreadable here (a known gap). If no grade B voice can be opened, C3 is Insufficient evidence at best.

**Carry-over question for the skeptic (not a hypothesis):** R-004 logged a deviation about how its S4 kill criterion should read (general incumbents count or not). The skeptic gives a blind ruling on it, and the lead applies it to R-004's S4 and to this study's C2.

## Scope

- **Population:** emergent bands run by one active member without design skill (R-001 personas).
- **Geography:** tools available in Italy and the UK; prices as shown, converted at the date's rate with the currency shown.
- **Time window:** features and prices as of the access date; independent sources from 2025 onward.
- **Languages:** English and Italian.
- **Include and exclude:** vendor pages (D) for features and price only; affiliate listicles are leads; AI summaries (including any Gemini report) count only through sources I opened; Canva's own site returns 403 and is not worked around.

## Search plan

| Hypothesis | Source types | Neutral queries | Disconfirming queries | Looking for the missing |
| --- | --- | --- | --- | --- |
| C1 | Vendor price and feature pages (re-open Simplified, Mew Design, PosterMyWall, VistaCreate, Kittl, Adobe, Bandsintown Boost), independent reviews and tutorials | "Simplified AI marketing agent review", "VistaCreate brand kit gig poster", "Kittl poster price", "Mew Design review" | "Canva free plan enough for band flyers", "AI marketing agent small business results complaints", "Simplified Riley problems", "band uses Canva for all promotion" | Timed trials; band voices |
| C2 | Release notes, newsrooms, announcements, hiring and roadmap signals | "Canva AI 2.0 campaign brand kit release", "Bandsintown Boost creative 2026", "music marketing AI tool launch 2026" | "AI tool for musicians gig campaign launched", "Linktree or Bandcamp or Spotify promo tools flyer feature", "Canva music templates band" | New entrants; failed music-promotion tools |
| C3 | Band communities, interviews, surveys, blogs by musicians | "how bands promote gigs self-managed", "musician social media time burden survey" | "bands say Canva is enough", "musicians prefer hiring a friend for posters", "free tools good enough band promotion" | The quiet majority who do nothing; Italian bands |
| C4 | Competitor homepages and ads, press | "gig promotion tool for bands", "promozione concerti band strumento" | "AI poster generator for bands", "band marketing assistant AI" | Italian-language offers |

At least two disconfirming queries per hypothesis (standard tier). Queries are logged in the report.

## Time box

One session of desk research, then the skeptic, then the report. An optional second independent route (a Gemini Deep Research run by Ale from a neutral prompt) may return later as an addendum; its claims count only through sources I open.

## Deviations

Filled in during the research.

- None yet.
