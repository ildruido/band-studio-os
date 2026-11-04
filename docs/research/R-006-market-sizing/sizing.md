# R-006 Sizing sheet

Part of [R-006](protocol.md). All money in 2026 EUR; GBP converted at 1 GBP = 1.15 EUR `(Assumption)`. Every figure is a provisional range, not a forecast. Calculation reproducible from the assumptions below.

## Definition (pre-registered in the protocol)

- **Unit counted:** active emerging bands with a driver that promote live gigs (in-segment as defined in the protocol).
- **Value basis:** revenue per year to Band Studio OS: pay-per-campaign plus subscription (D-008), blended into revenue per paying band per year.
- **Geography and year:** Italy and the UK (base), wider Europe as a scaling factor. 2025 to 2026 data where available.
- **Segment boundary:** unsigned or small-label bands and duos; solo acts, DJs, managed or labelled acts, tribute and cover bands out.
- **Minimum business threshold:** none, by Ale's choice (D-022). See the income ladder below.

## Assumptions register

| Id | Assumption | Low | Base | High | Source id or `(Assumption)` | Grade | Swing rank |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A1 | Italy: concerts a year in the original-music club circuit | 31,460 | 31,460 | 31,460 | E-02 (605 a week x 52; 2016, outside window) | B | 7 (not varied) |
| A2 | Italy: acts per concert | 2 | 3 | 4 | (Assumption). UK ratio from E-01 is about 9 acts per event, a multi-act-bill upper bound | none | 8 |
| A3 | Italy: coverage multiplier (gigs outside the KeepOn circuit) | 1.0 | 1.5 | 3.0 | (Assumption) | none | 6 |
| A4 | Gigs per active band per year (Italy) | 20 | 12 | 8 | (Assumption). Leads: average UK grassroots tour is 11 dates (not opened) | none | 7 |
| A5 | UK: artist performances at grassroots venues a year | 1.5M | 1.5M | 1.5M | E-01 (almost 1.5m, MVT 2024, 810 venues). Excludes non-MVA venues (conservative) | A (interest flag) | not varied |
| A6 | Gigs per act per year (UK) | 20 | 12 | 8 | (Assumption) | none | 4 |
| A7 | UK: share of performances by in-segment bands | 0.35 | 0.5 | 0.7 | (Assumption): removes solo acts, DJs, covers | none | 5 |
| A8 | Share of bands with a driver who promote gigs digitally (addressable) | 0.3 | 0.5 | 0.8 | (Assumption). Lead: 91% promote independently (E-05, grade D) | D | 3 |
| A9 | Share of addressable bands who would pay for our product | 3% | 8% | 15% | (Assumption). No A or B source on the share who pay (see M3) | none | 2 |
| A10 | Revenue per paying band per year (EUR) | 60 | 150 | 300 | (Assumption): 2 to 8 campaigns at 10 to 40 EUR, plus 0 to 15 EUR a month. Benchmark: Groover charges 2 EUR a contact (E-06, grade D) | D | 1 |
| A11 | Wider-Europe multiple of the Italy plus UK result | 2x | 4x | 6x | (Assumption) | none | not varied |
| A12 | Promotion spend per band per year (EUR), for TAM | 100 | 250 | 500 | (Assumption). Lead (unverified): independent artists spend under 500 USD a year | none | n/a |

## Bottom-up (units, then value)

Formulas: Italy bands = A1 x A2 x A3 / A4. UK bands = A5 / A6 x A7. Addressable = bands x A8. Payers = addressable x A9. SAM = payers x A10.

| Step | Low | Base | High |
| --- | --- | --- | --- |
| Italy active bands | 3,100 | 11,800 | 47,200 |
| UK active bands | 26,300 | 62,500 | 131,300 |
| **Active bands, Italy + UK** | 29,400 | 74,300 | 178,400 |
| Addressable bands (A8) | 8,800 | 37,100 | 142,800 |
| Would-pay bands (A9) | 265 | 2,970 | 21,400 |
| Revenue per payer (A10) | 60 EUR | 150 EUR | 300 EUR |
| **SAM, Italy + UK (EUR a year)** | 16k | 446k | 6.4M |
| SAM with wider Europe (A11) | 32k | 1.8M | 38M |
| SOM path: payers won by year 3 as a share of the would-pay pool (2%, 10%, 25%, an `(Assumption)` not taken from comparables) | 5 payers, 0.3k EUR | 297 payers, 44k EUR | 5,350 payers, 1.6M EUR |

Note: if the 605 concerts a week in E-02 are national, not only KeepOn's circuit, A3 should be 1.0: Italian bands become 7,900 and the base SAM 422k EUR. The SOM path is a stated chain (pool of would-pay bands x share won by year 3 x revenue per payer) with an assumed capture share. No comparable product's reach was found, so it is illustrative.

## Top-down (promotion spend by bands)

TAM here is what in-segment bands spend a year on promotion, design and marketing help.

| Step | Figure | Origin (traced) | Date, geography, definition |
| --- | --- | --- | --- |
| UK grassroots venue economy | 526M GBP direct value | E-01 (MVT annual report 2024) | 2024, UK, 810 venues |
| Share spent by acts on promotion | 1%, 2.5%, 5% | (Assumption) | |
| **UK promotion spend (EUR)** | 6.1M, 15.1M, 30.2M | | |
| Italy live music revenue | 989.3M EUR | E-08 (SIAE 2024 via press, original not opened) | 2024, Italy, all live music including stadiums |
| Grassroots share of it | 1%, 3%, 6% | (Assumption) | |
| Promotion share of that | 1%, 2.5%, 5% | (Assumption) | |
| **Italy promotion spend (EUR)** | 0.1M, 0.7M, 3.0M | | |
| **Top-down TAM, Italy + UK (EUR)** | 6.2M, 15.9M, 33.2M | | |

Bottom-up TAM for the same units (A12): 2.9M, 18.6M, 89.2M EUR.

## Third check (analogue or proxy)

No usable third check was found. The candidate was Groover (a paid curator-submission service for artists): artist counts (200,000 to 500,000 worldwide) and a USD 8M Series A are vendor or press claims, with no revenue or Italian and UK split opened. It is listed as a lead only. M2 therefore rests on two methods that share unsourced assumptions.

## Reconciliation

- **Ratio top-down to bottom-up TAM:** 0.9x at base (15.9M against 18.6M); 2.1x at low; 0.4x at high. Within 3x at every point.
- **Explanation of the gap:** there is no real gap, which is the problem. Both methods use unsourced shares for what bands spend (A12 against the 2.5% promotion share), so their agreement is weak evidence. A match by luck is as likely as a match by truth.
- **Which we trust more and why:** neither. The UK unit count (E-01) is the only grade A input, and it is a count of performances, not bands.

## Sensitivity (one assumption varied at a time, SAM Italy + UK, base 446k EUR)

| Rank | Assumption | Result at low | Result at high | Swing | Sourced? |
| --- | --- | --- | --- | --- | --- |
| 1 | A10 revenue per payer | 178k | 892k | 713k | no |
| 2 | A9 share who would pay | 167k | 836k | 669k | no |
| 3 | A8 addressable share | 267k | 713k | 446k | no (grade D lead) |
| 4 | A6 gigs per UK act | 296k | 633k | 338k | no |
| 5 | A7 UK in-segment share | 333k | 596k | 263k | no |
| 6 | A3 Italy coverage | 422k | 517k | 94k | no |
| 7 | A4 Italy gigs per band | 417k | 481k | 64k | no |
| 8 | A2 Italy acts per concert | 422k | 469k | 47k | no |

Top three (A10, A9, A8) account for about 69% of the total swing. None has an A or B source, so the number rests on them. Moving all assumptions together from low to high spans about 400x (16k to 6.4M EUR), far above the protocol's 10x limit.

## Result

| | Low | Base | High | Method | Confidence |
| --- | --- | --- | --- | --- | --- |
| TAM, Italy + UK (promotion spend a year) | 2.9M to 6.2M EUR | 16M to 19M EUR | 33M to 89M EUR | top-down and bottom-up, shared unsourced shares | Low |
| SAM, Italy + UK (revenue a year) | 16k EUR | 446k EUR | 6.4M EUR | bottom-up | Low |
| SAM including wider Europe | 32k EUR | 1.8M EUR | 38M EUR | bottom-up x (Assumption) | Very low |
| SOM, year 3, Italy + UK | 0.3k EUR | 44k EUR | 1.6M EUR | would-pay pool x assumed capture | Very low |

## Income ladder (replaces a fixed threshold, D-022)

Paying bands needed for a yearly revenue level, at each price, set against the would-pay pool in Italy + UK (low 265, base 2,970, high 21,400).

| Revenue a year | At 60 EUR a payer | At 150 EUR a payer | At 300 EUR a payer |
| --- | --- | --- | --- |
| 10k EUR | 167 | 67 | 33 |
| 30k EUR | 500 | 200 | 100 |
| 60k EUR | 1,000 | 400 | 200 |
| 100k EUR | 1,667 | 667 | 333 |

At base values the whole would-pay pool is about 3,000 bands. Reading the ladder at base price (150 EUR): 30k EUR needs about 7% of that pool, 60k about 13%, 100k about 22%. In the low case the pool (265 bands) cannot support even 30k EUR at 60 EUR a payer. So a realistic target depends mostly on how many bands will pay and at what price, which only primary research (E3) can settle.
