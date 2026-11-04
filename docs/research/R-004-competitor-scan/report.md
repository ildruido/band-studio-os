# R-004 Competitor scan: report

Protocol: [protocol.md](protocol.md), pre-registered in commit 40671c8 on 2026-11-04. Tier: standard. Method: `docs/research/framework.md`. Accessed 2026-11-04 unless stated.

## Verdict

**Reshape.** The skeptic's own search found relevant competitors the scan had missed, which triggers the S1 kill criterion (coverage was not complete). The landscape must be widened and re-run before R-005 relies on it. Separately, we found no verified product that guides a band from gig details to a full, on-brand campaign for 25 EUR a month or less, but the strongest candidates (Canva, Adobe Express, Piktochart) could not be opened at their own sites, and newly found AI poster tools (for example Mew Design, which makes story and banner crops of the same artwork) were not checked on price. So S2 stays open and needs a hands-on check by Ale. Two threats stand out: Canva's 2026 brand-aware AI features and Bandsintown's June 2026 "Boost" (automated show promotion). The antidote to the main risk is human: venues are publicly refusing AI-made posters.

| Id | Hypothesis | Verdict | Confidence | Key evidence | Key evidence against |
| --- | --- | --- | --- | --- | --- |
| S1 Coverage (key) | Relevant set found in all classes | **Contradicted** (kill criterion triggered by the skeptic's routes) | Medium | K-01 (Mew Design, opened) and leads K-02 to K-05 | Routes 5, 6 thin; Canva, Adobe unverifiable; Italian scene tools unchecked |
| S2 Gap exists (key) | No product meets all three conditions | Insufficient evidence | Low | No verified product meets 2 of 3 (E-01 to E-09) | Canva (unverified, E-18) may meet (b) and (c); Mew Design (K-01) is closest to (a); PosterMyWall price unverified (E-08) |
| S3 Crowding | No dominant gig-promotion product | Insufficient evidence | Low | None found | No usage survey found; Canva dominates the DIY class (secondary only) |
| S4 Incumbent inertia | Incumbents not closing the gap | Mixed | Low | No musician-specific guided campaign tool found | E-01 Bandsintown Boost (2026-06-05); E-18 Canva AI 2.0 and Brand Kit in ChatGPT and Claude (secondary) |

S1's kill criterion is triggered, so the study verdict is Reshape. No kill criterion was triggered for S2 to S4. For S4, the criterion as written needs a product built for musicians, so general incumbents (Canva, and Boost, which automates audience reach but makes no creative) could not trigger it. That reading was made after seeing the data and is logged as a deviation for Ale to rule on. S3 is Insufficient evidence: do not read it as "no crowding".

## Strongest evidence against our idea

1. **"Good enough" already exists in the DIY class.** Guides aimed at bands say Canva is enough for most gig flyers (E-20, grade C, secondary). Canva reportedly added Brand Kit, "Brand Intelligence" and agentic AI in 2026 and exposed Brand Kits inside ChatGPT and Claude (E-18, unverified). If true, a driver already has brand memory plus generation for about 13 USD a month (a secondary figure, unlogged, so no weight). Our gap would then be the guided gig flow, not the brand.
2. **The adjacent incumbent is moving.** Bandsintown, which already holds the show listings, launched Boost on 2026-06-05 with the pitch "No setup, no creative to produce, no campaign management" (E-01). That covers "getting the show seen" without any flyer.
3. **Authenticity cuts against AI output itself.** Some venues, so far found only in the US and Canada, publicly refuse AI-made posters (E-19, E-24, E-25; none from Italy or the UK). A product that generates flyers risks being the thing scenes reject, unless its output is clearly the band's own. This is a design constraint on the product, not a reason to stop.
4. **Dead products warn about the market.** Five music promotion platforms shut down (E-14 to E-17), two with no stated reason and one after raising 9.35 million USD. A pattern of small revenue from time- and cash-poor musicians is plausible but not proven here.

## Findings

**Landscape in one line.** Nothing verified does the whole job. The job is split across (a) design tools (Canva, PosterMyWall, AI flyer makers), (b) schedulers and AI caption tools (PostPlanify and similar), (c) music-marketing add-ons (smart links, EPK sites, ticket and listing platforms), and (d) doing it by hand. A band stitches these together.

**S1.** Routes run: 1, 2, 3, 4, 7, 8, 9 (7 of 9). Quality was uneven. Route 3 was a web search about apps, not an app-store search, and yielded only a 2013 app. Route 5 (communities) returned guides and news, not threads, because Reddit and Facebook are unreadable. Route 6 (reviews) found one G2 snippet. Route 9 added Orphiq and Base for Music, so the saturation rule (two successive routes with nothing new) was **not met**. The skeptic's two own routes then found relevant competitors not on the list (K-01 to K-05: Mew Design, Piktochart, Kapwing, Venngage, Simplified, Vista Social, Soundverse, Beatflyer, Desygner and others), which triggers the kill criterion. Verdict: Contradicted at medium confidence. Next step: add these to the landscape, check the top ones at their own sites and re-run discovery until two routes add nothing (not yet done).

**S2.** Checked against the three conditions (a) one guided flow, (b) saved identity, (c) 25 EUR a month or 15 EUR a campaign:

| Product | (a) guided gig to flyer, story, caption | (b) saved identity | (c) price | Evidence |
| --- | --- | --- | --- | --- |
| PostPlanify | No (scheduler, AI captions) | Media library only | 79 USD a month, agency-oriented | E-02 |
| Orphiq | No (strategy advice) | Profile-based advice | 37 USD a month (DIY) | E-07 |
| PosterMyWall | Not shown (templates plus AI writer and images) | Yes, Brand Kits listed | Not verified | E-08 |
| Pixazo and similar AI flyer makers | No: static output, colours not guaranteed | Not shown | Not verified | E-09 |
| Mew Design | Closest so far: gig poster plus story, banner and venue-screen crops of the same artwork (vendor claim) | Brand reuse claimed | Not verified | K-01 |
| Piktochart AI concert poster | Poster from band name, venue, date, genre (search summary only) | Not shown | Not verified (403) | K-02 |
| Canva | Unverified | Reportedly yes | Reportedly about 13 USD | E-18, E-20 |
| Bandsintown Boost | Not a creative tool | n/a | Not verified | E-01 |

No *checked* product meets two of three, but Mew Design and Piktochart sit closest to condition (a) and their prices are unchecked, and Canva could meet (b) and (c) but cannot be opened from this environment (HTTP 403 at its own site and Adobe's). So S2 is Insufficient evidence, not Supported. A hands-on check by Ale is the blocker. The PostPlanify price in E-02 is not confirmed in the fetched page and carries no weight.

**S3.** We found no usage survey for any gig-promotion-specific product. Absence is not evidence of space, so Insufficient evidence. Secondary guides name Canva and Linktree as the most-cited tools (not opened, unverified).

**S4.** Mixed at low confidence, see the table above.

**What customers actually use (weak evidence, guides and vendors only):** Instagram and Facebook for posting, Canva and free design apps for flyers, Linktree-style link pages, printed flyers, and the venue's own promotion. No B-grade voices from Italian bands were found (see limits).

## Landscape table

| Candidate | Class | Status | Evidence |
| --- | --- | --- | --- |
| Canva (free and Pro, AI, Brand Kit) | DIY and indirect | Active | E-18, E-20 (unverified) |
| Adobe Express | DIY and indirect | Active, not opened | none |
| PosterMyWall | Indirect (band templates, brand kit, AI) | Active | E-08 |
| Pixazo, Pippit, Pixelcut, Pixa, RunComfy AI flyer makers | Indirect | Active, vendor pages only | E-09 |
| CapCut | Indirect (video, flyers) | Lead only | none |
| PostPlanify, AdaptlyPost, TimeToPost | Indirect (scheduling plus AI captions) | Active | E-02 |
| Orphiq | Indirect (AI strategy for artists) | Active | E-07 |
| Linktree, Feature.fm, Hypeddit | Adjacent (link pages, smart links) | Active | E-03, E-04, E-06 |
| Bandzoogle | Adjacent (band website, EPK) | Active | E-05 |
| Bandsintown for Artists and Boost | Adjacent entrant | Active, Boost launched 2026-06-05 | E-01 |
| Sonicbids, ReverbNation, gigmit | Adjacent (booking, EPK, promoter side) | Active | E-10, E-11, E-12 |
| ChatGPT or Claude with prompts | DIY | Active | lead only |
| Friends and freelance designers | DIY | Active | rates in guides, vendor-sourced |
| Printed posters, venue promotion, street team, doing nothing | Substitute and non-consumption | Always | guides, grade C |
| Mew Design, Piktochart AI poster, Kapwing, Venngage, Simplified, Vista Social, Soundverse, Beatflyer, Desygner, OpenArt (found by the skeptic) | Indirect, AI poster and caption tools | Active, mostly unchecked | K-01 to K-05 |
| Gig Poster (SplitGigs, 2013) | Direct-ish | Stale or dead, unverified | E-21 |
| Zankme, Magnifi, DEMAND, PureVolume | Dead | Dead 2014 to 2020 | E-14 to E-17 |
| Fuzz.com, Flyer Lizard, Pippit, Pixelcut, AdaptlyPost, TimeToPost | Leads only | Not opened | none (search summaries) |
| Brots, Gotobeat, ILiveMusic (Italy) | Leads | Status unverified. An Italian-language skeptic search for Rockit and Gigsta found nothing | none |

## Discovery log

| Route | Queries and result | New relevant candidates |
| --- | --- | --- |
| 1 Job language | "how to promote a gig band flyer social media tools"; Italian equivalent | Gig Poster app, CapCut, Canva, PosterMyWall |
| 2 Category | "AI flyer generator for musicians band brand kit"; "musicians AI social media content campaign tool" | Pixazo, Pippit, Pixelcut, PostPlanify, AdaptlyPost, TimeToPost, Orphiq |
| 3 App stores | "App Store band gig poster maker app" | none new (generic poster apps, excluded) |
| 4 Alternatives pages | listicles from routes 1 to 3 (leads only) | Flyer Lizard, Linktree, Feature.fm |
| 7 Shutdowns | "band marketing startup shut down" | Zankme, Magnifi, DEMAND, PureVolume, Fuzz.com |
| 8 Adjacent platforms | Canva 2026 announcements; Bandsintown 2026 features | Boost, Canva AI 2.0 |
| 9 Ask the evidence | tools named in guides and G2 snippets | Base for Music, Hypeddit, Bandzoogle, Sonicbids |
| 5 Communities, 6 Reviews | tried; mostly guides and news, no readable threads | none |

Saturation test: not met (route 9 still added names).

## Excluded candidates

| Candidate | Reason |
| --- | --- |
| Spinnup | Distribution, not promotion. Rule: music distribution is out of scope. (Closed 2022, per search summary, unverified.) |
| Musosoup | Pitches music to playlist and blog curators, not gigs (E-13). |
| Generic poster apps (Poster Maker, Flyer Maker) | General tools; covered by the Canva and PosterMyWall class. |
| Nina Protocol | Web3 streaming; out of scope. |

## What we could not find

- Primary-source pages for Canva and Adobe Express (HTTP 403 for automated access). We did not try to get around the block.
- Any survey of which tools Italian or UK bands use.
- Any thread where a driver says a tool was "good enough" or why they quit one (Reddit and Facebook unreadable).
- PosterMyWall, Pixazo and Bandsintown Boost prices (pricing pages did not render or confirm).
- Any Italian-language competitor with verified status. Rockit, Brots, Gotobeat and ILiveMusic were not checked at their own sites.

## Who is missing and other limits

Italian bands and the quiet majority who do nothing are absent. English-language vendor content dominates, so interest flags are high. Search tool results are summaries; every number from them is marked unverified unless the page was opened. Two sets of claims rest on search summaries only: Canva's 2026 features and the G2 and survey snippets.

## What would change our mind

- S2 flips to Contradicted if a hands-on check of Canva (or PosterMyWall) shows a guided flow from gig details to flyer, story and caption with saved brand at 25 EUR a month or less.
- S2 flips to Supported if that check shows it cannot do the flow in under about 10 minutes for a non-designer.
- S4 flips to Contradicted if Canva, Bandsintown or Linktree announces a musician-specific campaign or flyer feature.

## Next: primary research needed

1. **Hands-on trial of Canva and PosterMyWall by a person with a browser** (Ale, about 1 hour): build a gig campaign for a real band and record time, steps and fit. This settles S2 and C1 in R-005.
2. **Driver interviews (R-003)** should ask what they use today and why they would or would not switch.
3. **Blind output test (E2)** should compare AI and hand-made flyers, given the venue bans.

## Skeptic review

`research-skeptic` agent, standard tier, fresh context. Verdict: **sound with fixes.** It opened every openable source (quotes found); Canva also returned 403 to it. Its blind verdicts matched ours on S2, S3, S4 and the study, and differed on S1 (Contradicted at medium confidence).

| Must-fix | Resolution |
| --- | --- |
| Missed competitors, S1 kill criterion triggered | Accepted. S1 Contradicted, study verdict Reshape, K-01 to K-06 added. Saturation not yet re-run: listed as next step. |
| S2 table omitted the closest products | Fixed: Mew Design and Piktochart added; "no verified product" wording narrowed. |
| S4 read generously | Logged as a deviation for Ale to rule on. |
| No log of disconfirming queries | Logged as a deviation: the queries run were "bands Canva enough or hire designer", "AI generated posters backlash venue", "tools that stopped using / cancelled", "Canva musicians AI announcement 2026" and "Bandsintown 2026 features". These are fewer than the protocol's minimum of two per hypothesis for S2 and S3. |
| Unlogged claims (Canva about 13 USD, Canva and Linktree most-cited, PostPlanify 79 USD) | Marked as unverified and given no weight. |

Should-fix items (E-25 to C, "some venues" US and Canada, leads with own rows, route 3 relabelled, Italian search recorded as empty) are all done. Unresolved: no Reddit or Facebook access and no Canva access, so S2 needs Ale's hands-on check.

## Deviations from the protocol

1. **2026-11-04, S4 reading.** The kill criterion needs a product built for musicians, so general incumbents could not trigger it. This was decided after seeing the data. Effect: S4 is Mixed instead of Contradicted. If Ale reads Canva's Brand Kit in ChatGPT and Claude, or Boost, as closing the gap, S4 becomes Contradicted.
2. **2026-11-04, disconfirming queries.** Fewer than the standard tier's minimum were run for S2 and S3 (see Skeptic review). Effect: S2 and S3 stay at Insufficient evidence.
3. **2026-11-04, tool summaries.** Search summaries replaced direct reads of some pages; they are marked unverified and carry no weight.

## Evidence log

Grade D means vendor material about itself. "Unverified" carries no weight.

| Id | Hyp. | For / against | Source | Publisher, date, geo | Grade | Interest | Verified quote | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E-01 | S4 | against | [Bandsintown Boost blog](https://artists.bandsintown.com/support/blog/meet-boost-a-new-way-to-promote-your-shows-on-bandsintown) | Bandsintown, 2026-06-05, global | D (fact of launch is primary) | yes | "No setup, no creative to produce, no campaign management, nothing added to your plate." | Price not on page; press figures unverified |
| E-02 | S2 | for | [PostPlanify pricing](https://postplanify.com/pricing) and [musicians page](https://postplanify.com/social-media-management-for-musicians) | PostPlanify, accessed 2026-11-04 | D | yes | "Growth For freelancers and small agencies" | Price seen in first fetch, not reproduced in the skeptic's fetch (JS-rendered): **price unverified, no weight**. AI caption assistant |
| E-03 | S2 | neutral | [Feature.fm pricing](https://www.feature.fm/pricing) | Feature.fm, 2026-11-04 | D | yes | "Basic Artist $ 8 /mo" | Smart links, not creative |
| E-04 | S2 | neutral | [Hypeddit pricing](https://hypeddit.com/pricing) | Hypeddit, 2026-11-04 | D | yes | "Basic $9 /mo billed monthly" | Smart links, pre-saves |
| E-05 | S2 | neutral | [Bandzoogle pricing](https://bandzoogle.com/pricing) | Bandzoogle, 2026-11-04 | D | yes | "Lite Website plan ... $11.00/month" | Website and EPK |
| E-06 | S2 | neutral | [Linktree pricing](https://linktr.ee/s/pricing/) | Linktree, 2026-11-04 | D | yes | "$0 ... $9 monthly" | Link page |
| E-07 | S2 | neutral | [Orphiq pricing](https://orphiq.com/pricing) | Orphiq, 2026-11-04 | D | yes | "DIY Run your career with Apollo, your personal AI music strategist. $ 37 /month" | Advice, not assets |
| E-08 | S2 | against | [PosterMyWall band flyers](https://www.postermywall.com/index.php/l/band-flyers) | PosterMyWall, 2026-11-04 | D | yes | Menu lists "Brand Kits", "AI Images", "AI Writer", "Event pages", "Band" templates | Price not verified |
| E-09 | S2 | for | [Pixazo band flyer maker](https://www.pixazo.ai/flyer/band/maker) | Pixazo, 2026-11-04 | D | yes | "Exact brand color matching requires manual verification" and "Generated output is static" | Price not verified |
| E-10 | S1 | neutral | [Sonicbids](https://www.sonicbids.com/) | Sonicbids, 2026-11-04 | D | yes | "1 Build your EPK 2 Submit 3 Get booked" | Booking |
| E-11 | S1 | neutral | [ReverbNation](https://www.reverbnation.com/) | ReverbNation, 2026-11-04 | D | yes | "Grow your audience with: Music distribution Industry access Promo tools" | |
| E-12 | S1 | neutral | [gigmit](https://www.gigmit.com/) | gigmit, 2026-11-04 | D | yes | "Tell gigmit what the gig needs, see which artists could fit" | Promoter side |
| E-13 | S1 | neutral | [Musosoup](https://musosoup.com/) | Musosoup, 2026-11-04 | D | yes | "connects independent artists with trusted curators" | Excluded |
| E-14 | S3, S4 | neutral | [Hypebot on Zankme](https://www.hypebot.com/hypebot/2014/04/artist-marketing-platform-zankme-shuts-down.html) | Hypebot, 2014-04-11, US | C | no | "Just 14 months after launch, music marketing platform Zankme is shutting down." | "No reason was given" |
| E-15 | S3 | neutral | [Hypebot on Magnifi](https://www.hypebot.com/magnifi-to-shut-down-after-raising-935-million) | Hypebot, 2016-07-19, US | C | no | "after raising $9.5 million, MAGNIFI is shutting down" | "No reason was given" |
| E-16 | S3 | neutral | [Hypebot on DEMAND](https://www.hypebot.com/google-backed-live-music-data-platform-demand-to-shut-down.md) | Hypebot, 2020-11-11, US | C | no | "launched just a month before the pandemic cancelled all shows" | Pandemic is a confound |
| E-17 | S3 | neutral | [mxdwn on PureVolume](https://music.mxdwn.com/2018/04/13/news/groundbreaking-music-discovery-site-purevolume-will-be-shutting-down-april-30th/) | mxdwn, 2018-04-13 | C | no | "will shut down April 30th" | Discovery site |
| E-18 | S2, S4 | against | Canva: no primary source (HTTP 403). Secondary: [Canva Brand Kit with ChatGPT and Claude (MB)](https://mb.com.ph/2026/02/10/canva-integrates-brand-kits-into-chatgpt-and-claude-to-solve-ais-off-brand-problem), [Create 2026 review](https://nav43.com/blog/canva-create-2026-canva-ai-2-review/) | 2026 | **Unverified** | no | none (search summary only) | Not opened |
| E-19 | authenticity | neutral | [SF Standard on Thee Stork Club](https://sfstandard.com/2025/09/11/bay-area-concert-venue-bans-ai-generated-flyers-connects-bands-real-artists-instead/) | SF Standard, 2025-09-11, US | C | no | "tailored and stylish poster art that bands can leverage if they don't have a dedicated art department" | Venue partners with artists instead of banning only |
| E-20 | S2 | against | Canva band flyer pages and guides via search (not opened) | various | **Unverified** | yes | none | Claims Canva is enough |
| E-21 | S1 | neutral | [Hypebot on Gig Poster (2013)](https://www.hypebot.com/gig-poster-is-almost-a-really-cool-app-from-splitgigs/) | Hypebot, 2013 | **Unverified** | no | none | App status unknown |
| E-22 | S1 | neutral | Orphiq and Base for Music G2 snippets via search | 2026 | **Unverified** | yes | none | Lead only |
| E-23 | S3 | neutral | Instagram 88% survey via inkl (not opened) | unknown | **Unverified** | no | none | Lead only |
| K-01 | S1, S2 | against | [Mew Design AI concert poster generator](https://mew.design/create/ai-concert-poster-generator) | Mew Design, 2026-11-04, found by the skeptic | D | yes | "story, banner, or venue-screen crops with the same artwork and information hierarchy" | Opened. Price not verified |
| K-02 | S1, S2 | against | Piktochart AI concert poster generator | via search summary; HTTP 403 | Unverified | yes | none | Lead only |
| K-03 to K-05 | S1 | against | Kapwing, Venngage, Lovart, Simplified, Melboss, Soundverse, Vista Social, Beatflyer, Desygner, OpenArt | search results | Unverified | yes | none | Leads found by the skeptic; not opened |
| K-06 | authenticity | neutral | Boston Globe 2026-05-13 and KJZZ 2026-08-11 via search | 2026, US | Unverified | no | none | More venue-refusal anecdotes, also US |
| E-24 | authenticity | neutral | [Global News on Gus' Pub](https://globalnews.ca/news/12045069/halifax-pub-ai-posters/) | Global News, 2026-09-02, Canada | C | no | "Gus's Pub says it's no longer accepting show flyers that were created by AI." | |
| E-25 | authenticity | neutral | [Peterborough Currents](https://peterboroughcurrents.ca/newsletters/generative-ai-show-posters/) | 2026, Canada | C (a designer's voice, not a band driver) | no | "If every poster starts looking like every other AI poster, then we've traded personality for convenience. Local events stop looking local." | Designer voice, not a band driver |

### Excluded

| Source | Rule that excluded it |
| --- | --- |
| Vendor listicles ("best tools for musicians") | Grade D, leads only |
| Spinnup shutdown blog (Vercel check blocked) | Could not be opened |
| Rockit, Reddit, Facebook, Canva, Adobe | Not readable from this environment; listed as gaps |
