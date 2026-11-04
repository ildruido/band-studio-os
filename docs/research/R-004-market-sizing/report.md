# R-004 Market sizing: report

Protocol: [protocol.md](protocol.md), pre-registered in commit 3f72cfc on 2026-11-04. Tier: standard. Method: `docs/research/framework.md`. Working file: [sizing.md](sizing.md).

## Verdict

**Needs primary research.** We can bound the market only very loosely: yearly revenue from Italy and the UK is somewhere between about 16k EUR and 6.4M EUR (base 446k EUR), a 400x spread, because the three assumptions that drive it (share of bands who would pay, price per payer, share who promote digitally) have no solid source. The only well-sourced input is the UK count of artist performances at grassroots venues. No kill criterion was triggered; the answer is "not known yet", not "too small". Because Ale chose not to set a minimum (D-021), the useful output is the income ladder in [sizing.md](sizing.md): at the base price (150 EUR a year), 30k EUR a year needs about 200 paying bands and 100k EUR needs about 670.

| Id | Hypothesis | Verdict | Confidence | Key evidence | Key evidence against |
| --- | --- | --- | --- | --- | --- |
| M1 Size range (not key) | A sourced range can be built | Insufficient evidence | Low | E-01, E-02 | Range 400x wide, above the 10x limit |
| M2 Methods agree (key) | Top-down and bottom-up within 3x | Insufficient evidence | Low | Ratio 0.9x at base, within 3x at all points | Both methods share unsourced shares; no third check |
| M3 Payers exist (key) | At least 25% of comparable bands pay for promotion | Insufficient evidence | Low | E-05 (grade D), E-06, E-07 | E-05: 75% of those who pay lose money; no A or B figure on how many pay |
| M4 Healthy trend (not key) | Stable or growing | Mixed | Low | E-08 (more concerts in Italy) | E-01 (UK shows down 8.3% since 2023), E-03 (Italian clubs in difficulty) |
| M5 Reachable (not key) | A channel costs less than first-year revenue per customer | Insufficient evidence | Low | none opened | no acquisition cost source found |

Kill criteria: M3 (a grade A source showing under 10% pay) and M4 (grade A evidence of a fall above 20% since 2019) were not triggered. M2's rule applies mechanically: within 3x but low confidence gives Insufficient evidence.

## Strongest evidence against our idea

1. **Bands may be too poor and too busy to pay.** In the 2023 UK Musicians' Census only 40% of musicians earn all their income from music, so most are part-timers with another job (E-04). In a vendor survey, 75% of musicians who pay for promotion spend more than they earn from their music (E-05, grade D, interest flag). If that holds for our segment, a paid product faces a thin base.
2. **Pay-to-play already exists and is criticised.** The closest paid product, Groover, charges about 2 EUR a contact (E-06), and the press itself calls it a disappointing "pay-to-play" (E-07). Bands who feel they pay for nothing may resist a second paid tool.
3. **The live scene is shrinking at the grassroots.** UK grassroots shows fell 8.3% since 2023 (E-01). Italian small clubs are in crisis even while stadium revenue sets records (E-03, E-08). Fewer gigs means fewer campaigns to promote and fewer bands that stay active.
4. **Supply exceeds demand in Italy.** Active bands rose over 28% while weekly concerts stayed flat at about 605 (E-02, 2016), so each band gets fewer gigs.
5. **Our upper range is mostly assumption.** Every figure above 100k EUR a year needs at least 8% of addressable bands to pay 150 EUR or more a year. We found no evidence on either number.

## Findings

- **UK units (grade A, interest flag).** Music Venue Trust's 2024 survey of 810 venues counted "over 162,000 live music events, comprising almost 1.5m individual artist performances" (E-01). It counts performances, not bands, so bands are derived by dividing by gigs per act (assumed 8 to 20) and keeping only in-segment acts: 26,000 to 131,000, base about 62,000. Venues outside the trade body are left out, so this leans low on venues but high on bands that include solo acts and DJs.
- **Italy units (grade B, 2016).** The only count is 605 concerts a week in the KeepOn circuit (E-02). We assume acts per concert, coverage and gigs per band, giving 3,100 to 47,000 bands, base about 11,800. This is the weakest part of the unit count: the data is ten years old and the circuit has since been remapped (E-03 counts 130 to 180 live clubs, against 279 locations in 2016, but the definitions differ and are not comparable).
- **Spending (grades C and D).** Independent artists do spend on promotion: 91% promote themselves (E-05, vendor survey of over 1,000 UK and US studio users), and a paid curator service has raised venture money (E-07). That shows payers exist, not how many. We found no grade A or B figure for the share who pay.
- **Trend.** Italian concert revenue and counts rose in 2024 (E-08, via press, original SIAE report not opened). UK grassroots shows fell 8.3% year on year (E-01). A full 2019 to 2025 series was not found, so the kill criterion for M4 could not be tested.
- **Result.** Italy plus UK, bands who would pay: about 265 (low), 2,970 (base), 21,400 (high). SAM 16k, 446k, 6.4M EUR a year. Including wider Europe at a multiple of 2x to 6x (assumed): 32k, 1.8M, 38M EUR. TAM (all promotion spend by these bands) is about 3M to 89M EUR, which is a market size for the problem, not for our product.
- **Sensitivity.** The top three assumptions are revenue per payer, share who would pay and addressable share, about 69% of the swing; none is sourced. See [sizing.md](sizing.md).

## What we could not find

- Any grade A or B figure for what share of emerging bands pay for promotion, design or marketing, in any country.
- A current count of active bands in Italy or the UK, and gigs per band per year.
- A 2019 to latest series of grassroots gigs for Italy, and the original SIAE 2024 report (press versions give two different event counts, 38,911 and about 65,000, probably for different scopes).
- Customer acquisition costs for comparable tools, and any failed band-promotion startup with a stated reason. The search returned music startup failures (for example Riffage, Drip) but none opened or tied to artists refusing to pay. This is a search and access gap; it does not show the segment will pay.
- Third check: no analogue with usable revenue figures was found (Groover's revenue is not public in the sources we opened).

## Who is missing and other limits

Bands outside venue statistics (rehearsal-room and DIY scenes), inactive bands counted as active, bands that left the scene, and the non-English-speaking UK. Italian data is old; UK data covers only trade-body member venues. Wider Europe is a multiple, not a count. The pay share and price are assumptions pending E3. GBP converted at an assumed rate. Pirate (E-05) surveys its own studio customers, who are not typical bands.

## What would change our mind

- M3 supported: a grade A or B source (or fake-door test E3) showing at least 25% of comparable bands pay each year. M3 contradicted: a grade A source showing under 10%.
- M2 supported: a sourced estimate of what bands spend on promotion (replacing A12 and the 2.5% share), plus a third check.
- M1 supported: a count of active bands from a body that holds data (KeepOn, Rockit, SIAE live events, venue listings) narrowing the unit range to within 10x.

## Next: primary research needed

Cheapest first, on the top three assumptions:

1. **Price and share who would pay (A9, A10):** the fake-door price test E3 from the [research plan](../research-plan.md). Settles two of the top three assumptions.
2. **Active bands and gigs per band (A2 to A7):** a short email to KeepOn LIVE, Rockit and Music Venue Trust for the number of distinct acts per year, plus counting distinct acts on a few cities' venue listings for one month; add "how many gigs did you play last year and how many bands do you know near you" to the first driver interviews (R-003).
3. **Addressable share and how bands promote today (A8):** the same interviews, asking what they spend and on what.

## Skeptic review

Pending. Run with the `research-skeptic` agent at standard tier before merge.

## Deviations from the protocol

None.

## Evidence log

| Id | Hypothesis | For / against / neutral | Source (link) | Publisher, date, geography, sample | Grade | Interest flag | Verified quote | Notes (origin traced, duplicates) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E-01 | M1, M4 | for (units); against (trend) | [Music Venue Trust 2024 annual report, via TPi Magazine](https://tpimagazine.com/music-venue-trust-releases-2024-annual-report/) | Music Venue Trust, 2024 data, UK, survey of 810 venues | A | yes (advocacy body for the venues) | "...staged over 162,000 live music events, comprising almost 1.5m individual artist performances, to a total audience of just under 20 million. The total direct value to the UK economy from these events was £526m." and "a decrease in the total number of live music shows (down 8.3% since 2023)" | Reported by press; the MVT report itself was not opened. A second outlet (vip-booking.com) repeats the same figures: counted once. |
| E-02 | M1, M4 | neutral | [Live Club Report di Keepon](https://www.rockit.it/news/musica-live-report-italia) | Rockit.it, 2016-10-20, Italy, KeepOn circuit | B | no | "I concerti settimanali in Italia sono in media 605 (aumentati solo di 5 dal 2012, in cui erano 600), ma il numero di band attive è aumentato di oltre il 28%." | Reused from R-001 and R-002. Outside the 2019 window; used for the unit count only because nothing newer was found. |
| E-03 | M4 | against | [L'Espresso, 28 Feb 2025](https://lespresso.it/c/cultura/2025/2/28/musica-chiusura-club-discoteche/53011) | L'Espresso, 2025, Italy; interviews KeepOn LIVE | C | no | "finora ne abbiamo contati dai 130 ai 180, ma è un lavoro complesso" (KeepOn LIVE on its national mapping of live clubs) | Mapping is incomplete; not comparable to the 279 locations of E-02. Shows club crisis, not a decline figure. |
| E-04 | M3 | neutral (context) | [Musicians' Census financial insight report, Sept 2023](https://cnm.fr/wp-content/uploads/2024/02/Musicians-Census-Financial-Insight-Report-sept-23.pdf) | Help Musicians and Musicians' Union, 2023, UK, 5,867 musicians (self-selected online survey, not a count) | A | no | "Under half (40%) of musicians earn all of their income from music." | Covers all musicians, not only emerging bands. No promotion spend figures in it. |
| E-05 | M3 | against and for (mixed) | [75% Of Artists Make A Loss When They Release Music](https://pirate.com/en/blog/seventy-five-percent-of-artists-make-a-loss-when-they-release-music/) | Pirate (rehearsal and recording studios), 2023-05-02, UK and US, over 1,000 studio users | D | yes (a studio operator selling to artists) | "91% of artists who took part in the survey promote their music independently, without the support of a label or manager." and "75% of musicians who spend money on promoting their releases, spend more than they make" | Vendor survey, self-selected sample; a lead only. Does not give the share who pay. |
| E-06 | M3, M5 | neutral | [Groover pricing](https://groover.co/en/lp/pricing) | Groover, accessed 2026-11-04, global | D | yes (vendor) | "1 Grooviz costs €1" and "Sending a track to 1 curator/pro will cost you 2 Grooviz." Packs "start at just €47". | Price benchmark for a paid artist-promotion service. |
| E-07 | M3 | neutral | [TechCrunch on Groover, 2024-02-17](https://techcrunch.com/2024/02/17/groover-independent-artists-song-discovery) | TechCrunch, 2024, global | C | no (the founder is quoted) | "it bums me out that pay-to-play has become the best option for these independent artists" and "Groover just raised an $8 million Series A" | Journalism citing the founder. Shows a business exists and the pay-to-play criticism, not demand size. |
| E-08 | M4 | for | [Il Fatto Quotidiano on the SIAE 2024 report](https://www.ilfattoquotidiano.it/2025/07/19/la-crisi-dei-concerti-nel-2024-scoppiavano-di-ottima-salute-gli-ac-dc-comandano-botteghino-e-spettatori-tra-gli-italiani-svetta-max-pezzali-allolimpico/8066991/); [We Rave You](https://weraveyou.com/2025/07/italys-live-music-industry-hits-e9893-million-revenue-in-2024/) | Press reports of the SIAE Rapporto 2024, 2025-07, Italy | C | no | "Italy's live music industry hit a historic high in 2024, raking in €989.3 million of revenue" | Original SIAE report not opened. Includes stadium shows: the top-down grassroots share is an assumption. Both articles share one origin, counted once. |

### Unverified leads (zero weight)

Independent artists spend under 500 USD a year on marketing (Two Story Melody survey, 130 musicians; not opened). Groover 200,000 to 500,000 artists and 3,000 curators (vendor claims). Bandcamp about 5 million artists (vendor claim). Italians who play an instrument about 7% (2006, secondary). Italy cultural employment 825,100 workers (Eurostat via a ministry page, not opened, not music-specific). Average UK grassroots tour is 11 dates, 22 in 1994 (MVT, via press, not opened). Failed music startups Riffage and Drip (search summaries only).

### Excluded

| Source | Rule that excluded it |
| --- | --- |
| Statista, MIDiA and other paid-report market sizes | Vendor sizes without traceable method: leads only (protocol include/exclude rules). |
| Two Story Melody survey and Bandcamp, Groover artist counts as evidence | Not opened or vendor claims; no weight (framework). |
| Italian SIAE 38,911 pop-rock events figure | Two press sources give different event counts for different scopes; not used for units. |
