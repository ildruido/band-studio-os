# R-001 Persona reality check: report

Protocol: [protocol.md](protocol.md), pre-registered in commit aab5ab7 on 2026-11-04. Tier: standard. Method: `docs/research/framework.md`.

## Verdict

**Needs primary research.** Desk research could not settle the key hypotheses. We found no grade A source for the size of the group in Italy or the UK (H1), and almost no first-hand voices from Italian bands. What we did open is mostly vendor surveys and a few journalism pieces, mainly from the UK and US. They are consistent with the idea (independent artists mostly promote themselves, and the work wears them down), but they cannot carry it. Nothing we found contradicts H1 to H4 either. The kill criteria did not trigger, with one flag on H3 explained below.

| Id | Hypothesis | Verdict | Confidence | Key evidence | Key evidence against |
| --- | --- | --- | --- | --- | --- |
| H1 Exists | Meaningful numbers of emerging bands in Italy / UK | Insufficient evidence | Low | E-06 (Italian amateur pop-rock musicians form large online communities; no head count) | none found; no head count either |
| H2 Does the job | Members promote the band themselves | Insufficient evidence (leans supported) | Low | E-02 (91% self-promote; vendor survey, UK and US, all musician types) | none found |
| H3 Job hurts | Promotion costs real time, money or results, voiced unprompted | Insufficient evidence | Low | E-01, E-02, E-07 | E-04 (money is the main barrier, by a wide margin) |
| H4 Workarounds fall short | Same shortcomings recur with today's tools | Insufficient evidence | Low | none independent | none independent (only vendor pages) |
| H5 Angle matters | Authentic, human-made identity matters to them | Insufficient evidence for Italy (leans supported for scenes in the US) | Low | E-03 | none found |
| H6 Would pay (signal) | They already pay for comparable help | Insufficient evidence | Low | E-02 (those who spend promoting mostly lose money) | none found |

**H3 kill-criterion flag.** The criterion reads "pain appears mainly when prompted or in vendor material". Everything we found for H3 is survey-prompted or vendor-published. I did **not** treat it as triggered, because the reason is that community threads (Reddit, Facebook groups) could not be read in this environment, not that they were read and found silent. The skeptic is asked to rule on this, and Ale can overrule.

## Strongest evidence against our idea

1. **Promotion is not their biggest problem; money is.** The largest independent-artist survey we opened says financial constraints are "more than twice as likely to be chosen as the next biggest barrier" (E-04). An UK survey says 84% of independent UK artists cannot afford to tour (E-05). If promotion ranks below money, gigs and time, a promotion tool may be a nice-to-have.
2. **Little money to pay with.** About three in four self-releasing artists treat music as a side hustle (E-04), and those who spend on promotion mostly spend more than they earn (E-02). This weakens every pay-per-campaign assumption (D-008).
3. **A scene that is hostile to AI-made art.** A venue in the US bans AI-made flyers and tells bands to hire human artists instead (E-03). Our principle "authenticity first" fits the scene, but generated flyers may be exactly what these scenes reject. This is a product risk, not just a persona detail.
4. **The Italian scene is weakly documented.** The only Italian live-music numbers we opened are from 2016 and cover venues, not bands (E-08, outside the time window). We have no Italian evidence on who does band promotion.

## Findings

- **H1.** We found no head count of active emerging bands for Italy or the UK from any source we could open. Leads exist but are unverified (see "Unverified leads"). E-06 shows that Italian amateur pop-rock musicians gather in large online groups (2,101 active users across just four groups), which suggests the group is not tiny. It is not a size estimate.
- **H2.** The one number we opened, 91% of surveyed musicians promote independently (E-02), comes from a vendor, covers all musician types in the UK and US, and says nothing about Italy. It suggests self-promotion is the norm; it does not show that the active member of a band does it.
- **H3.** Vendor surveys report heavy strain from promotion and social media (E-01: 86% report significant mental strain; 67% say social media harms their wellbeing). A qualitative thesis finds resistance and anxiety about self-promotion across ages (E-07). These are prompted, vendor-published or small. They suggest the pain is real; they do not show where promotion ranks.
- **H4.** We found only vendor pages (Canva, CapCut, template sellers) and no independent voices on what is wrong with them, so no finding either way.
- **H5.** E-03 gives a strong, specific voice from one US venue against AI flyers; the wider backlash stories are unverified leads. All US. Nothing about gritty versus polished, and nothing from Italy.
- **H6.** No direct evidence on what bands pay for promotion or design. E-02 suggests that those who spend rarely recover it.
- **Biggest problems in their own words.** We could not collect these. The only sample we opened ranks money first (E-04). Voices from forums remain to be gathered.

## Persona building blocks

Evidence-backed traits are few. Everything else stays an assumption for now.

| Trait | Variation seen | Evidence | Confidence |
| --- | --- | --- | --- |
| Music is a side job; time and money are tight | 3 in 4 self-releasing artists treat music as side hustle | E-04 | Low (vendor, global) |
| Promotes own music, without label or manager | 91% of those surveyed | E-02 | Low (vendor, UK and US) |
| Dislikes or dreads self-promotion on social media | Across ages | E-07, E-01 | Low |
| Spends little and often loses money on promotion | Varies by following; not measured by us | E-02 | Low |
| Belongs to online peer groups | Italian pop-rock groups, 2,101 active users in four | E-06 | Low |

## Segment candidates

The evidence does not yet split into segments; this is an honest gap.

- Two splits the evidence hints at, each **Low** confidence: by age (younger and older artists both report discomfort, E-07) and by money (the average artist with few followers spends little, but this comes from an unverified lead).
- Splits we would **expect** but have no evidence for: gigging live bands against studio-first acts; city against province; one driver against shared effort. These are assumptions for the interviews.

## Anti-personas

- **Solo or DJ acts.** Excluded by the protocol; most of the surveys we opened mix them in (E-02), so their numbers need care.
- **Acts with a label or manager.** The 91% in E-02 explicitly excludes them, so they sit outside the promotion job.
- No evidence-based anti-persona beyond these yet.

## What we could not find

- A head count of emerging bands in Italy or the UK (only unverified leads).
- Any grade B voices from Italian bands. Reddit refuses automated fetches and Facebook groups are not readable here.
- Independent complaints about today's tools (Canva and similar).
- What bands pay for promotion or design in Italy.
Absence in this list means the search and the tools did not reach it, not that it does not exist.

## Who is missing and other limits

- Italian bands, almost entirely. Evidence is UK and US, English, vendor-heavy.
- Quiet bands that do little promotion or quit; the search for the failed found only general burnout surveys (E-01).
- Sources are from artist-services companies whose customers are active online, so they over-represent engaged and digital-first artists.
- Reddit and Facebook were unreachable. Tool note: the page-fetch tool is blocked here, so pages were opened with `curl` and read as plain text. Reddit returned nothing.

## What would change our mind

- H1: a grade A source (SIAE, ISTAT, FIMI, Musicians' Union or similar) giving an Italian head count under 1,000 would contradict; one above 5,000 would support.
- H3: a body of unprompted forum threads where promotion is absent from the top five problems would contradict.
- H5: Italian bands showing a clear preference for polished, professional output would contradict.

## Next: primary research needed

- **Interviews** with 8 to 10 Italian band drivers (and a few UK): who promotes, what hurts, what they use, what they pay. Settles H2 to H4 and H6 and gives real quotes.
- **A grade A size check**: request or read the SIAE and ISTAT annual figures, FIMI and live-club association reports; this can also be desk work once page fetch works for those hosts.
- **Fake-door test** for willingness to pay (H6) later, once there is a prototype.
- **Prototype test** of AI-made versus human-made flyers with bands (H5), given the backlash risk in E-03.

## Skeptic review

Pending (to be run by the `research-skeptic` agent).

## Deviations from the protocol

None. (The `.siae`, `makingmusic.org.uk` and Reddit pages could not be opened; this is a limit, not a protocol change.)

## Evidence log

Pages opened with `curl` on 2026-11-04 and read as plain text. Search results are never evidence by themselves; only these opened sources carry weight.

| Id | Hypothesis | For / against / neutral | Source (link) | Publisher, date, geography, sample | Grade | Interest flag | Verified quote | Notes (origin traced, duplicates) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E-01 | H3 | for | [Creative Burnout at All-Time High](https://press.dittomusic.com/creative-burnout-at-all-time-high-86-of-artists-report-mental-strain) | Ditto Music press release, 2026, global, over 2,000 artists and professionals from its community | D | yes (distributor selling artist services) | "86% saying they've experienced significant mental strain at some point in their musical careers"; "67% saying social media harms their mental well-being" | Self-selected customers; not about bands specifically. |
| E-02 | H2, H3, H6 | for | [75% of Artists Make a Loss](https://pirate.com/en/blog/seventy-five-percent-of-artists-make-a-loss-when-they-release-music/) | Pirate (rehearsal and studio provider), 2023, UK and US, over 1,000 musicians, producers and rappers | D | yes | "91% of artists who took part in the survey promote their music independently, without the support of a label or manager." | Mixed musician types, not bands only. |
| E-03 | H5 | for | [Music venue bans AI flyer art](https://sfstandard.com/2025/09/11/bay-area-concert-venue-bans-ai-generated-flyers-connects-bands-real-artists-instead/) | San Francisco Standard, 2025-09-11, Oakland (US), one venue owner and one designer | C | no | "will no longer let bands use AI tools to make art for their concert flyers" | One venue, US. Anecdote. |
| E-04 | H3, H6 | against (promotion not top barrier) | [Independent Music Report 2026](https://dittomusic.com/en/independent-music-report-2026) | Ditto Music, 2026, 112 countries, 5,039 independent artists | D | yes | "Financial constraints are more than twice as likely to be chosen as the next biggest barrier." | Vendor survey; global, mostly solo releasing artists. |
| E-05 | H3, H6 | neutral | [84% cannot afford to tour](https://musicradar.com/music-industry/the-vast-majority-of-independent-artists-cannot-even-afford-to-tour-new-survey-reveals) | MusicRadar reporting a Ditto survey, 2025, UK, 1,500 unsigned artists | D | yes (Ditto data) | "84% of independent artists in the UK cannot afford to go on tour in 2025." | Same origin family as E-01 and E-04; count Ditto once. |
| E-06 | H1 | for (weak) | [Italian Amateur Pop-Rock Musicians on Facebook](https://iris.unipa.it/handle/10447/210534) | University of Palermo repository (Trobia and Lo Verde), 2017, Italy | B | no | "four big Italian players (overall, 2,101 active users)" | Abstract only; amateur musicians in Facebook groups, not a head count. Date is before the protocol's window, kept as context for existence. |
| E-07 | H3 | for | ["Afraid of Heights"](https://unitesi.unive.it/handle/20.500.14247/24283) | Ca' Foscari master's thesis, 2023/24, worldwide, 15 interviews | C | no | "resistance is not confined to older artists, as younger musicians also report discomfort and anxiety" | Small, qualitative, student work; author worked for a marketing company. |
| E-08 | H1, H2 | neutral | [Live Club Report di Keepon](https://www.rockit.it/news/musica-live-report-italia) | Rockit.it, 2016-10-20, Italy, about 279 clubs | B | no | "Una grandissima offerta a fronte di una domanda ormai ferma." | Venues, not bands. Outside the time window; context only. |

### Unverified leads (searched, not opened; zero weight)

UK Music "Music By Numbers" (139,352 musicians employed, 2018); SIAE membership of about 80,000 (year unclear); SIAE annual live-events report (36,000 pop and rock concerts in 2023); Music Venue Trust annual report; Ditto UK/Amex/Pirate figures on spending (about £8,449 a year for unsigned UK artists); Two Story Melody marketing-spend data; Right Chord Music survey ("getting heard", "making enough money"); AI-flyer stories (Tedeschi Trucks Band, Hot Mulligan, Boston Globe); University of Palermo and CNR studies on Italian emerging artists; Rockit/MI AMI 2020 audience survey (audiences, not bands).

### Excluded

| Source | Rule that excluded it |
| --- | --- |
| Canva, CapCut and template-seller pages | Vendor material is a lead only (grade D); excluded from H4 evidence. |
| Rockit/MI AMI 2020 survey (about 15,000 respondents) | Audience survey, outside the population (band members). |
| Reddit r/unsignedbands | Could not be opened (refused). |
