# R-001 Persona reality check: protocol

Pre-registered before any search. After the first search, only the **Deviations** section changes. Method: `docs/research/framework.md`.

- **Type:** Persona validation, part A (`persona-validation` skill)
- **Tier:** standard. A wrong answer means building for people who don't exist or don't have this problem.
- **Decision this informs:** Whether Ale proceeds to write personas for the "driver" band member (D-005), and for which segments, or reshapes the target group or the job first.
- **If the answer is yes we will…; if no we will…:** Yes: draft two to four personas from the evidence, audit them (part B) and open the personas PR. No: Ale decides a reshape (different group, narrower segment or different job) before any persona is written, and the market work (exit criterion 2) starts from that.
- **Sponsor:** Ale. **Lead:** Claude.
- **Kill criteria approved by the product owner:** not required at this tier.

## Declared priors

- I (Claude) believe emerging bands exist in large numbers and that one member usually carries promotion. This comes from the starting idea and the foundation doc, which the product owner wrote from experience; it is not independently verified.
- I expect desk research to show poor-quality, time-consuming promotion as a common complaint, and to find lots of vendor content saying so. I expect the Italian evidence to be thinner and less English-searchable than the UK evidence.
- I have not yet looked at any Italian or UK data for this study. I know in general that SIAE publishes live-music statistics, that Bandcamp, Spotify and Instagram are the main tools, and that tools like Canva, Linktree and Later are widely used.
- Risk: I want this to work. The skeptic reads the evidence cold to counter that.

## Hypotheses

Target users: the one or two active members who run promotion for an emerging independent band (any genre; D-005, D-007). The job: promoting gigs and releases (visuals, copy, scheduling, approvals). Key = H1 to H4.

| Id | Key? | Hypothesis | Null or strongest alternative | Supported if | Kill criterion (contradicted if) |
| --- | --- | --- | --- | --- | --- |
| H1 Exists | yes | Emerging independent bands exist in meaningful numbers in Italy (primary), and in the UK (secondary). | Too few or too scattered: the group is small or mostly inactive. | A grade A source supports at least 5,000 active bands in Italy, defined as bands that play live or release music regularly, or at least 15,000 across Italy and the UK together. | The best grade A estimate for Italy is below 1,000 active bands, or no credible source supports 5,000 in Italy and 15,000 in Italy plus the UK. (The thresholds are my working judgment of a market worth building for; Ale may revise them before the search.) |
| H2 Does the job | yes | Within these bands, members themselves do the promotion, not agencies, managers or labels. | Someone else does it, or nobody does. | Independent evidence from at least three communities shows band members themselves do most of their promotion. | Most evidence shows promotion is handed to others or skipped. |
| H3 Job hurts | yes | Promotion costs them meaningful time, money or results, and they say so unprompted. | A minor annoyance next to their real problems (gigs, money, rehearsal, finding venues). | Unprompted complaints about promotion appear in at least three independent communities, and it ranks among their top five problems. | The pain appears mainly when prompted or in vendor material, or promotion ranks outside the top five problems. |
| H4 Workarounds fall short | yes | They use tools or people today (Canva, phone apps, friends, freelancers) and the same shortcomings recur. | What they use today is good enough. | Recurring complaints about the same shortcomings, from independent sources. | Satisfaction with current workarounds outweighs complaints in independent sources. |
| H5 Angle matters | no | Bands value output that keeps their own gritty identity over polished, generic output. | They want polished or generic output, or don't care. | Evidence of stated preference for authentic or DIY aesthetics, in at least three communities. | Clear preference against the angle, or indifference. |
| H6 Would pay (signal only) | no | They already pay for comparable help (design, promotion, tools). | They don't pay for this kind of help. | Evidence of spending on flyers, design, social tools or promotion by emerging bands. | No evidence of such spending. Expect "Insufficient evidence"; list it for primary research. |

Neutral question for all: **what are this group's biggest problems in their own words?** If promotion is not near the top, that is a finding.

## Scope

- **Population:** Members of emerging, independent, unsigned or small-label bands and duos (any genre), who run or share promotion. Excluded: solo electronic or DJ acts, cover and wedding bands, established acts with a label or agency, venues, managers speaking for bands.
- **Geography:** Italy (primary), then the UK (secondary). Western, Northern and Eastern Europe only if time remains, as a note, not as evidence for the verdicts.
- **Time window:** sources from 2020 onward (post-pandemic scene and current social platforms); older sources only for origin tracing.
- **Languages:** Italian and English.
- **Include / exclude rules:** vendor marketing and vendor surveys are leads only (grade D). AI-generated summaries are leads only. Posts by agencies or managers speaking for bands are excluded from H2 to H5 voices. Verified quotes only.

## Search plan

Source types: official and industry statistics (SIAE, ISTAT, Italian Music Industry association FIMI, Musicians' Union and UK Music, Bandcamp, Spotify and DistroKid reports, academic studies), community threads (Reddit, forums, Facebook groups, Italian music forums), published interviews, and articles with data. Disconfirming queries are at least as many as supportive ones and at least 2 per hypothesis (standard tier).

| Hypothesis | Source types | Neutral queries | Disconfirming queries | Missing voices (quiet, quit, failed) |
| --- | --- | --- | --- | --- |
| H1 | Official statistics, industry reports | "numero band emergenti Italia", "SIAE concerti dal vivo statistiche", "number of unsigned bands UK", "active amateur bands Italy survey" | "numero musicisti professionisti Italia calo", "grassroots music venue closures UK bands decline", "band inattive sciolte percentuale" | Bands that broke up or went inactive |
| H2 | Forums, interviews | "chi gestisce i social della band", "who runs promotion for your band", "band manager vs self promotion unsigned" | "ho affidato la promozione a un'agenzia band", "bands hire promoter instead of doing it themselves", "band social media managed by label" | Bands where nobody promotes |
| H3 | Forums, Reddit, surveys | "problemi principali band emergenti", "biggest challenges unsigned band", "band promotion takes too much time" | "promozione non è il problema band", "biggest problem for bands is not promotion", "finding gigs rehearsal space cost bands" | Bands who stopped because of the work |
| H4 | Forums, threads on tools | "come creare locandine concerto band", "tools for band flyers instagram", "band marketing tools recommend" | "Canva è sufficiente per band", "free tools are enough for band promotion", "happy with canva for flyers band" | People who tried and abandoned tools |
| H5 | Forums, interviews, articles | "estetica DIY band locandine", "authentic vs polished band branding", "punk flyers DIY aesthetic" | "band vogliono grafica professionale", "bands prefer professional design polished", "AI generated band art backlash or acceptance" | Bands who prefer polish |
| H6 | Surveys, forums | "quanto spende una band emergente in promozione", "how much do unsigned bands spend on promotion" | "band non pagano grafica", "bands never pay for design free only" | Bands that spend nothing |

## Time box

One working session. Stop at the box and report what was left.

## Deviations

Filled in during the research. Each one: date, what changed, why, and what it means for the conclusions.

- None yet.
