# R-004 Competitor scan: protocol

Pre-registered before any search. After the first search, only the **Deviations** section changes. Method: `docs/research/framework.md`.

- **Type:** Competitor identification and scan, using the `competitor-scan` skill (on top of `research-protocol`).
- **Tier:** standard. A missed competitor invalidates the competitive analysis (R-005) and the positioning and pricing choices built on it, but nothing here commits money (D-017).
- **Decision this informs:** Whether the product keeps its current positioning and scope (a guided, identity-faithful gig campaign for the driver), and which competitors R-005 must compare against.
- **If the answer is yes we will…; if no we will…:** If a gap exists (S2 supported) we run the competitive analysis (R-005) on the verified list and carry the gap into the MVP scope. If a verified competitor already closes the gap, we reshape the positioning before MVP scoping, or stop and rethink.
- **Sponsor:** Ale. **Lead:** Claude.
- **Kill criteria approved by the product owner:** not required at this tier.

## Declared priors

What Claude already believes and has seen, before searching (general knowledge and project documents, not checked for this study):

- Most bands make flyers and posts by hand in Canva or a free design app, post on Instagram, and use link and ticket tools around that. I expect "DIY plus Canva" to be the biggest competitor.
- I expect general AI design and content tools (Canva's AI features, Adobe Express and Firefly, social-post generators) to be the main indirect competitors, and music-marketing tools (smart links, pre-save pages, ad tools for artists, Bandsintown for Artists) to be the main adjacent entrants.
- I do not expect a product that takes a gig from details to a full, on-brand campaign for an indie band. This is the belief most at risk of confirmation bias, so S2 gets the strongest contrarian pass.
- I believe several band-tool startups died (EPK, fan-funding and band-page products). I have not checked which ones or why.
- From the project documents: the driver is time- and money-poor (R-001, R-002, both "Needs primary research"), and a venue owner rejected AI-made flyers (R-001, E-03).

## Job statement

When **I have a gig coming up and I run my band's promotion alongside a day job**, I want to **get flyers, stories and posts out that look and sound like my band, on time and without spending money**, so I can **fill the room without losing my evenings or my band's identity**.

## Hypotheses

S1 and S2 are key (skill default). Money values are EUR-equivalent, as listed on the product's own pricing page on the access date.

| Id | Key? | Hypothesis | Null or strongest alternative | Supported if | Kill criterion (contradicted if) |
| --- | --- | --- | --- | --- | --- |
| S1 Coverage | yes | The scan found the relevant set of ways the job gets done, in all six classes. | Important competitors are missing. | At least 7 routes ran, at least one relevant candidate was found in each of the six classes (or a documented reason why a class is empty), and the saturation rule was met. | The skeptic's two independent routes, or the final two routes of this scan, still turn up at least one relevant competitor not in the list, or fewer than 5 classes are covered. |
| S2 Gap exists | yes | No verified competitor offers the target customer a guided flow from gig details to a complete, brand-consistent set of gig-promotion assets (flyer, 9:16 story, caption and posting plan) at a price and effort a band can bear. | An existing product already does this. | No verified product meets all three conditions below. | At least one verified product meets **all** of: (a) turns gig details into at least flyer, story and caption in one guided flow, (b) keeps one band identity across campaigns (saved brand, style or reference memory), and (c) costs 25 EUR a month or less, or 15 EUR a campaign or less, for a non-designer, in English or Italian. If a product meets two of the three, S2 is **Mixed**. |
| S3 Crowding | no | The space is not so crowded that a new entrant cannot get attention. | A strong incumbent dominates band attention. | No gig-promotion-specific product (not Canva or Instagram) shows grade A or B evidence of use by half or more of surveyed target bands. | Grade A or B evidence that one gig-promotion-specific product is used by half or more of surveyed target bands. |
| S4 Incumbent inertia | no | Incumbents and adjacent platforms are not about to close the gap. | A visible roadmap or trend is closing it. | No dated evidence of an incumbent moving into the gap. | Evidence dated within the last 12 months that Canva, Adobe, Meta, Linktree, Bandsintown, BandLab, Spotify, or a funded music-marketing startup has shipped or announced a guided gig-campaign or brand-memory flyer generator for musicians. |

A dead product is evidence for S3 and S4 (why it died), not a competitor in S2 unless it is still sold.

## Scope

- **Population:** emergent, independent bands who promote their own gigs, usually via one active member. Solo and DJ acts are out of the target (anti-persona), but tools they share with bands are in.
- **Geography:** Italy first, then the UK, then the rest of Europe (D-012). Global products count if they sell to those markets in English or Italian.
- **Time window:** active products judged as of the access date. Dead products from 2013 onward. Customer voices from 2022 onward, older ones only for dead products.
- **Languages:** English and Italian. Other languages: not searched, listed as a coverage gap.
- **Relevance rule:** a candidate is relevant if a band promoting a gig could plausibly use it for any part of the job statement and it is available to Italian or UK users. Pure distribution, music-making or streaming tools are excluded (listed with the reason).
- **Include / exclude rules:** affiliate "best tools" pages and vendor comparison pages are leads only (grade D). Posts by agencies or tool sellers are not customer voices. Reddit and Facebook are unreadable from this environment (listed as gaps).

## Discovery plan

Routes from the skill. At least 7 of 9 must run. **Saturation:** stop only after two successive routes add no relevant competitor and at least 7 routes ran.

| Route | Plan |
| --- | --- |
| 1 Job language | "how to promote a gig", "flyer for my band's show", "come promuovere un concerto", "locandina concerto gratis", "social media for bands with no time" |
| 2 Category names | "band marketing tool", "music promotion software", "AI poster generator for events", "EPK builder", "gig promotion app", "event flyer maker", "tool per band emergenti" |
| 3 App stores and marketplaces | App Store and Google Play (IT and UK) search for the job words and categories |
| 4 Alternatives pages | "alternatives to" and "vs" pages for names found in routes 1 to 3 (leads only) |
| 5 Community threads | Forums, blogs and communities where bands ask what they use (Reddit and Facebook not readable) |
| 6 Reviews and complaints | Trustpilot, store reviews, G2 and similar, for found competitors, including reasons for leaving |
| 7 Funding and shutdowns | Launch databases, accelerators, "sunsetting" and shutdown notices for music-promotion startups |
| 8 Adjacent platforms | Product changelogs, help centres and integration directories of Canva, Adobe, Meta, Linktree, Bandsintown, BandLab, Spotify |
| 9 Ask the evidence | Names mentioned by target bands in sources that the list lacks are added |

## Search plan

Neutral queries first. Disconfirming queries meet the tier minimum (2 per hypothesis) and are at least as many as the supportive ones.

| Hypothesis | Source types | Neutral queries | Disconfirming queries | Looking for the missing |
| --- | --- | --- | --- | --- |
| S1 | Routes 1 to 9 above | job-language and category queries, in English and Italian | "[found tool] alternatives"; names in forum answers not on the list; a second pass in Italian-only sources | Tools used only in Italy or inside scenes; freelancers and local services; free templates |
| S2 | Competitor sites, pricing pages, store listings, reviews | "generate gig flyer story caption", "band brand kit AI", "campagna social per concerto" | "AI flyer generator for musicians", "band promo kit generator", "automatic gig promotion", pricing of AI social-post tools with brand memory, "[tool] good enough for my band" | Bands that say a general tool is enough; bands that abandoned a tool |
| S3 | Surveys, community threads, reviews counts | "what tools do bands use for promotion", "strumenti promozione band" | Surveys naming one dominant product; app-store counts for gig-promotion tools | Small and Italian scenes |
| S4 | Changelogs, announcements, funding news | "Canva musicians", "Instagram flyer AI", "Bandsintown for Artists new features", "Linktree music" | Announcements in the last 12 months of AI campaign or brand-kit features for musicians; job postings of adjacent platforms | Quiet launches in beta |
| Dead products | Shutdown notices, post-mortems | "band marketing startup shut down", "music promotion platform closing" | Why they closed: money, demand, platform dependence | Post-mortems in Italian |

## Time box

One research session, about 3 hours of searching and verifying, then the skeptic run. If time runs out the report lists what was left and the remaining routes.

## Type-specific checks

- Every profile fact has a primary-source quote and an access date.
- The skeptic runs two discovery routes of its own and logs any competitor the scan missed. A missed relevant competitor is a must-fix.
- Traction and quality claims from the competitor's own site are grade D; customer voices are grade B.
- The landscape table, discovery log, excluded candidates, customer-chosen alternatives and open gaps follow the report in the skill's format.

## Deviations

Filled in during the research. Each one: date, what changed, why, and what it means for the conclusions.

- None yet.
- **2026-11-04, round 2 after skeptic review (Ale chose to widen the scan).** The S1 kill criterion was triggered by the skeptic's routes. Ale chose to widen the scan and check Canva by hand before the competitive analysis. Round 2 and its results are in [addendum-1.md](addendum-1.md). Effect: S1 stays Contradicted; the landscape grows; S2 stays open until the hands-on check.
