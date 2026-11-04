# R-002 Band count size check: protocol

Pre-registered before any search. After the first search, only the **Deviations** section changes. Method: `docs/research/framework.md`.

- **Type:** Persona validation, follow-up to [R-001](../R-001-persona-reality-check/report.md) on H1 only (`persona-validation` skill, `research-protocol`)
- **Tier:** light. It tests one narrow, checkable question with public statistics. R-001 (standard) set the wider verdict; this study cannot flip it alone.
- **Decision this informs:** Whether the "target group exists in meaningful numbers" (R-001 H1) is supported, so Ale can rule on the H1 kill-criterion flag and we can draft personas on firmer ground.
- **If the answer is yes we will…; if no we will…:** Yes (supported): draft provisional personas with H1 marked supported. Inconclusive: draft them with H1 marked unproven and make interviews and a size survey the first primary studies. No (contradicted): Ale decides a reshape before any persona is written.
- **Sponsor:** Ale. **Lead:** Claude.
- **Kill criteria approved by the product owner:** not required at this tier.

## Declared priors

- I expect a hard head count of "active emerging bands" not to exist, because no body counts them. I expect to triangulate from related counts (members of rights societies, musicians, live events, contest entries) and to end with a wide range.
- From R-001 I have already seen unverified leads: SIAE membership of about 80,000 (year unclear), UK Music's 139,352 employed musicians (2018), about 36,000 pop and rock concerts in Italy in 2023, and old Italian contest entries (1,803 bands in 2004). I believe these suggest tens of thousands of musicians and thousands of bands, which is above my thresholds, but I have not opened them.
- Risk: I want the number to be big. I will not count any proxy that mixes in professional or established acts without saying so.

## Hypothesis

This study fixes the weakness the R-001 skeptic found: "not found" and "contradicted" are separate outcomes.

| Id | Key? | Hypothesis | Null | Supported if | Contradicted if | Insufficient if |
| --- | --- | --- | --- | --- | --- | --- |
| H1 Exists (size) | yes | There are at least 5,000 active emerging, independent bands in Italy, or at least 15,000 across Italy and the UK together. "Active" means they play live or release music regularly. | The group is too small or too scattered. | At least two independent sources, one grade A, give figures (direct or by a stated and checkable derivation) at or above the thresholds, and none gives a credible lower figure. | A grade A source or a checkable derivation puts active bands in Italy below 1,000 or in Italy plus the UK below 5,000. | Anything else, including "we found no count". The report must say that the thresholds are not met or contradicted, not treat silence as evidence. |

The thresholds are my working judgment of a market worth building for (as in R-001); Ale may revise them. The gap between 1,000 and 5,000 for Italy is "Mixed".

## Scope

- **Population:** emerging, independent, unsigned or small-label bands and duos, any genre. Rights-society members, professional musicians and contest entries are proxies and must be labelled as such, with what they include.
- **Geography:** Italy (primary), UK (secondary).
- **Time window:** 2018 onward (to allow the last pre-pandemic baseline); older only to trace origins.
- **Languages:** Italian and English.
- **Include / exclude rules:** vendor estimates (for example a distributor's artist counts) are leads, not evidence. A proxy that includes solo artists, DJs or established acts is used only with a stated adjustment, or as an upper bound.

## Search plan

Source types: official and industry statistics (SIAE annual report and parliamentary report, ISTAT, FIMI, Eurostat cultural employment, UK Music, Musicians' Union, ONS, Help Musicians Musicians' Census, Making Music), live-club trade bodies (KeepOn LIVE), platform reports with a method, academic studies. Pages are opened with `curl` (the fetch tool is blocked here).

| Hypothesis | Neutral queries | Disconfirming queries (minimum 1 at light tier; at least as many as supportive) | Looking for the missing |
| --- | --- | --- | --- |
| H1 | "SIAE associati sezione musica numero 2023", "ISTAT musicisti professionisti numero", "Eurostat cultural employment musicians Italy", "UK Music Music By Numbers number of musicians", "Musicians' Census 2023 sample", "KeepOn LIVE censimento live club band", "numero concerti band emergenti Italia", "number of bands UK live gigs grassroots" | "musicisti professionisti Italia pochi numero ridotto", "decline in number of bands Italy", "number of working musicians falling UK", "band inattive sciolte percentuale" | Bands that exist but appear in no official count (no rights-society membership, no venue booking) |

## Time box

One short session. Stop at the box and report what was left.

## Deviations

- None yet.
