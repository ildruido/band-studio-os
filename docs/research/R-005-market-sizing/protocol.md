# R-005 Market sizing (Italy, UK, then wider Europe): protocol

Pre-registered before any search. After the first search, only the **Deviations** section changes. Method: `docs/research/framework.md`.

- **Type:** Market analysis and sizing (`market-analysis` skill, on `research-protocol`)
- **Tier:** standard (the skill's default). Reason for not going deep: no go/no-go rests on this number yet. Fieldwork is postponed (D-014), pricing is untested and Ale chose to discover a realistic target rather than set one (D-022). The result is a provisional range, never a verdict on whether to build. Re-run at deep tier if a go/no-go or pricing decision starts to depend on it.
- **Decision this informs:** what size of business Band Studio OS can realistically be in its launch markets, so Ale can set a realistic target (D-022) and so the pricing and primary-research plans (E3, R-003) aim at the right numbers.
- **If the answer is yes we will…; if no we will…:** A credible range with sourced unit counts: use it to pick a target and refine it with E3. A range that is small or unfounded: change the scope (more markets, an adjacent segment, a different price model) or put primary sizing research first, before more building.
- **Sponsor:** Ale. **Lead:** Claude.
- **Kill criteria approved by the product owner:** not required at this tier.

## Sizing definition (decided by the lead from product docs; Ale chose no upfront threshold)

- **Unit counted:** an active emerging band that has a "driver" (D-005) and promotes live gigs. "Active" means it plays at least four gigs a year or releases music in the last 12 months (a working definition; a sensitivity case).
- **Value basis:** revenue per year to Band Studio OS, at pay-per-campaign plus a subscription (D-008). Prices are `(Assumption)` with ranges until E3 runs. Starting range: 10 to 40 EUR per gig campaign, 0 to 15 EUR a month subscription, 2 to 8 campaigns a year.
- **Geography and year:** Italy first, then the UK, then the rest of Europe (D-012). Figures in 2026 EUR (UK in GBP converted at a recorded rate). Present state (2025 to 2026 data) and a three-year view.
- **Segment boundary:** in: unsigned or small-label bands and duos, any genre (D-007). Out: solo acts and DJs, acts with a manager or label that promotes for them, tribute and wedding bands, cover bands that don't promote their own gigs.
- **Minimum business threshold:** none, by Ale's choice (D-022). Instead the report gives an **income ladder**: customers and market share needed for 10k, 30k, 60k and 100k EUR a year of revenue, set against the estimated SAM.

## Declared priors

- From R-001 and R-002 (both "Needs primary research"): nobody counts active bands; the best figure is 112,000 SIAE members across all repertoires (2023, E-10 in R-002). I expect any band count to be a derivation with a wide range, probably 10,000 to 60,000 bands in Italy and a similar order in the UK.
- I expect the paying segment to be small, because R-001 found money is the top barrier and promotion spend often does not pay back.
- I believe the market is small by venture standards but large enough for a small business. I want it to be bigger than that, and I will search for the figure that would embarrass this.
- I know of paid market reports (Statista, MIDiA) but have not opened them.

## Hypotheses

M1 is not given a pass/fail threshold (D-022); it is a measurement. Key hypotheses are the ones the estimate cannot stand on without.

| Id | Key? | Hypothesis | Null or strongest alternative | Supported if | Kill criterion (contradicted if) |
| --- | --- | --- | --- | --- | --- |
| M1 Size range | no | A sourced range for the number of active emerging bands and for the SAM (Italy, UK, wider Europe) can be built. | The unit count cannot be bounded to within a factor of 10. | Bottom-up count of units has low and high within 10x, with at least one grade A input. | Not applicable (measurement, no threshold). A range wider than 10x, or no grade A input, is Insufficient evidence. |
| M2 Methods agree | yes | Top-down and bottom-up estimates fall within 3x of each other, or the gap has a sourced explanation. | They disagree and we cannot say which is right. | Within 3x, or the gap explained with named, sourced assumptions. | A method check, so no kill criterion of its own: a gap above 3x with no sourced explanation gives Insufficient evidence, never an average. |
| M3 Payers exist | yes | A meaningful share of active emerging bands already pays for promotion, design or marketing help. | They do it free or not at all. | A grade A or B source shows at least 25% of comparable bands or artists pay something each year for promotion, design or marketing. | A grade A source shows fewer than 10% of comparable bands or artists spend anything on promotion, design or marketing in a year. |
| M4 Healthy trend | no | The number of active bands or working musicians is stable or growing over 2019 to the latest year. | It is shrinking, or spend is moving elsewhere. | Grade A or B evidence of stable or growing unit counts. | Grade A evidence of a fall of more than 20% in active bands, grassroots gigs or working musicians in Italy or the UK between 2019 and the latest year. |
| M5 Reachable | no | Buyers can be reached at a cost below the first-year revenue per customer. | Buyers exist but acquiring each costs more than it earns. | At least one identified channel (organic, communities, venues, partner) with a sourced or reasoned cost per customer below base-case first-year revenue per customer. | Every identified channel costs more per customer than the high-case first-year revenue per customer. |

Study verdict mapping follows the framework: with M2 and M3 key, M1's range is reported whatever the verdict. An M3 or M2 result of Insufficient evidence gives Needs primary research.

## Scope

- **Population:** as in the sizing definition above.
- **Geography:** Italy (primary), UK (secondary), wider Europe as an extension through a stated scaling factor, not separate counts.
- **Time window:** 2019 onward (trend baseline), with figures from 2023 or later preferred for levels. Older only to trace origins.
- **Languages:** Italian and English.
- **Include / exclude rules:** vendor and market-research-seller sizes are leads only; trace to a method or reject. Count a statistic once. Proxies (rights-society members, professional musicians, contest entries, venue listings) are labelled with what they include. Mismatched definitions are adjusted and logged.

## Type-specific checks (for the skeptic)

- Any size claim without a traced origin is rejected.
- Definitions of the counted unit match across sources.
- Base-case numbers lie within the sourced range, not outside it.
- The SOM path is stated and not a flat percentage.
- At least one estimate lower than the lead's was sought and logged.
- The working file is `sizing.md` in this folder. The skeptic reads its Definition, Assumptions, Bottom-up, Top-down and Third check first, and Reconciliation, Sensitivity and Result only after forming its own view.

## Search plan

Source types: official statistics (ISTAT, Eurostat, ONS, SIAE, FIMI, Spotify/Bandcamp-style platform data with method), live circuit bodies (KeepOn LIVE, Assomusica), Music/UK trade bodies (UK Music, Musicians' Union, Help Musicians Census, Making Music, ISM), academic studies, surveys of artist spending (Ditto, Music Ally, Musicians' Census, Mediaservice), and published results of comparable services (Linktree, Bandzoogle, SubmitHub, Groover pricing and public usage figures with a method). Pages are opened with `curl` (the fetch tool is blocked here); Reddit and Facebook are unreadable.

| Hypothesis | Source types | Neutral queries | Disconfirming queries (minimum 2, at least as many as supportive) | Looking for the missing |
| --- | --- | --- | --- | --- |
| M1, M2 | Registries, official statistics, live circuit counts, platform data, proxy counts | "numero band emergenti Italia", "numero gruppi musicali attivi Italia", "ISTAT musicisti", "number of bands UK grassroots", "number of artists Bandcamp UK Italy", "Eurostat musicians Europe", "KeepOn LIVE report", "music industry revenue Italy FIMI 2024", "UK grassroots music venues gigs per year" | "estimates well below" searches: "pochi musicisti professionisti Italia", "how many bands actually gig regularly", "percentage of bands that break up in first years", "most bands play fewer than 10 gigs a year" | bands outside any registry; inactive bands counted as active |
| M3 | Artist spending surveys, Musicians' Census, platform pricing and usage | "how much do independent artists spend on marketing", "spesa promozione artisti indipendenti Italia", "Musicians' Census income expenses promotion", "Groover Italia numero artisti", "SubmitHub paying artists", "Bandzoogle number of bands" | "indie bands don't pay for promotion", "musicians refuse to pay for marketing", "free tools enough band promotion", "pay-to-play backlash" | bands that quit; bands that tried paid tools and stopped; vendor survivorship |
| M4 | Time series of live events, musician counts, venue numbers | "numero concerti Italia SIAE 2019 2023", "Live Club Report KeepOn", "UK grassroots music venues closures 2023", "Musicians' Census 2023 vs 2016" | "decline grassroots live music Italy", "UK grassroots venues closed", "number of musicians falling" | Unregistered scenes; growth hidden behind closed counts |
| M5 | Pricing and CAC benchmarks for creator tools, ad costs in Italy and UK for niche targeting, communities and venue partners | "Meta ads CPC Italy music", "creator tool freemium conversion rate benchmark", "Groover customer acquisition", "Linktree early growth", "band-focused communities Italy" | "failed band promotion startup", "why music tool startups fail indie artists", "CAC higher than LTV artist services" | failed or shut-down band-tool startups and why |

## Time box

One long session plus the skeptic run. Stop at the box and report what was left.

## Deviations

- 2026-11-04: renumbered from R-004 to R-005 before merge because another study took R-004 in parallel. No effect on content.
