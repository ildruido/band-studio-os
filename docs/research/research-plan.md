# Research plan: what to test first

**Status: proposed, awaiting Ale's OK.** Builds on [R-001](R-001-persona-reality-check/report.md), [R-002](R-002-band-count-size-check/report.md) and the [provisional personas](../inception/personas.md). Method for every study: [framework.md](framework.md). Launch order: Italy, then the UK, then the rest of Europe (D-012).

## What desk research told us

Independent artists mostly promote themselves and it wears them down (Low confidence). But we have **no proof** yet that Italian band drivers rank promotion among their top problems, that they would accept AI-made material as "us", or that they would pay. Money is their biggest barrier, and scenes can be hostile to AI art. The three riskiest guesses all need people, not more searching.

## Hypotheses, ranked

Score = impact if wrong (1 to 5) × how uncertain we are (1 to 5). Risk types: value, usability, feasibility, viability.

| Rank | Id | Hypothesis | Risk | Impact | Uncertainty | Score | Evidence so far |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | H-01 | Output made from a band's light identity setup feels like "us" to the band, and is not rejected as generic AI. | value | 5 | 5 | 25 | None. One US venue bans AI flyers (E-03). |
| 1 | H-03 | The driver will pay per campaign at a price that covers AI cost. | viability | 5 | 5 | 25 | None. Money is the top barrier (E-04); promotion spend often doesn't pay back (E-02). |
| 3 | H-02 | The driver exists in Italy, does the promotion themselves, and ranks it in their top five problems, unprompted. | value | 5 | 4 | 20 | Low: E-02, E-09, E-07. No Italian voices, no head count. |
| 4 | H-04 | Today's workarounds (free design apps, friends, freelancers) fall short in the same ways again and again. | value | 4 | 4 | 16 | Vendor pages only. |
| 4 | H-09 | The Italian group is big enough and reachable through a known channel. | viability | 4 | 4 | 16 | R-002: 112,000 SIAE members, no band count. |
| 6 | H-06 | AI cost per campaign (images and short video) fits the price. | feasibility | 4 | 3 | 12 | None. |
| 6 | H-07 | Music, likeness and image-rights risks around uploads and generated assets are manageable. | feasibility | 4 | 3 | 12 | None. |
| 6 | H-08 | A driver finishes a gig campaign in far less time than today. | usability | 4 | 3 | 12 | None. |
| 9 | H-05 | Bandmates approve through a light flow without an account. | usability | 3 | 3 | 9 | None. |
| 10 | H-10 | Large phone media uploads work well enough on real connections. | feasibility | 2 | 3 | 6 | None. |

H-01, H-03 and H-02 are the **riskiest three**. Run order differs from rank order, because H-02 is the cheapest and the other two need its people.

## Three experiments to derisk the top three

Each becomes a study under the framework with a pre-registered protocol (hypotheses, thresholds, search or sampling plan) committed before any data. Thresholds below are my proposals; Ale approves them before each study starts.

### E1: Driver interviews (tests H-02, informs H-04 and H-09). Run first.

- **Method:** 8 to 10 interviews with Italian band drivers, then 3 or 4 with UK ones. 30 minutes, past behaviour only ("tell me about your last gig and how you promoted it"). A neutral script, no pitch. The "biggest problems" question comes first and unprompted; promotion is only raised after.
- **Sample:** active bands of any genre, 2 to 6 members, played live in the last 6 months. Deliberately include 2 or 3 who outsource promotion, who stopped, or who have a manager.
- **Pass (H-02 supported):** at least 6 of 8 Italian drivers did the promotion themselves for their last gig, and at least 5 of 8 name promotion in their top five problems unprompted. Also ask each how many bands they know in their area (a size signal for H-09).
- **Kill:** fewer than 3 of 8 name promotion in their top five, or most outsource it.
- **Bias guards:** script and coding sheet pre-registered; interviews recorded or noted verbatim with consent; a fresh-context agent codes the transcripts blind to our hopes; negative cases reported; a quote only counts if it is verbatim.
- **Tier:** standard. **Cost:** about 6 to 8 hours of interviewing (Ale's network or recruiter help), one agent run for coding.

### E2: "Is this us?" blind output test (tests H-01, informs H-08). Run second, with E1 bands.

- **Method:** with 6 to 8 consenting bands from E1, collect their real material (photos, logo, past flyers, a short note on style, an anti-moodboard). Generate a gig flyer and a story for each with the identity setup we propose for V1. Show each band, blind and shuffled, three versions: their own latest flyer, our output, and a generic AI flyer. Ask: which is "most us" and "which would you post", then rate "is this us?" from 1 to 5. Then show five venue owners or promoters the same set and ask which they would reject.
- **Pass (H-01 supported):** our output rated 4 or 5 by at least 60% of bands, preferred over or tied with their own flyer in at least half the blind pairs, and rejected as generic AI by no more than 1 of 5 venue people.
- **Kill:** rated 4 or 5 by under 30% of bands, or a majority of venue people would reject it.
- **Bias guards:** blind and shuffled order; the generic AI version is a real control; we report time and effort to produce each version, not only the scores; thresholds fixed before generating; the ratings are collected by someone who did not make the images (an agent or Ale).
- **Tier:** standard, because this is the product's core promise (use deep if Ale wants a replication). **Cost:** AI generation cost (also the first real data for H-06), plus about 6 hours of sessions.

### E3: Fake-door price test (tests H-03). Run third, once E2 gives us something to show.

- **Method:** an Italian landing page showing a sample campaign from E2 and three prices per campaign. Visitors choose a price and leave an email to reserve the pilot; a second step asks for a small refundable deposit or a signed intent. Traffic comes from posts in Italian band communities and a small ad budget aimed at active bands. Also ask every E1 and E2 band if they would pay the pilot price.
- **Pass (H-03 supported):** at least 5% of qualified visitors reserve, at least 3 bands put down a real deposit or commit in writing at or above the cost-covering price, and at least half of the E1 and E2 bands accept some paid pilot.
- **Kill:** under 1% reserve and no band commits to any price.
- **Bias guards:** prices randomised across visitors; no discount or pressure; commitment counted only when money or a signed intent is involved ("I'd pay" doesn't count); the AI cost per campaign from E2 sets the price floor before the test; report non-converters too.
- **Tier:** standard; the price decision is large, so I'd go deep (second agent run, Ale approves thresholds) before setting public prices. **Cost:** a small ad budget (needs Ale's OK, and a landing page needs a decision on where to host it).

## Also cheap, run in parallel

- **H-06 AI cost spike:** log tokens and cost for every item generated in E2; target at most a stated cost per campaign (to be set from E3's price). No people needed.
- **H-07 rights check:** a desk study (light or standard tier) of music, likeness and image-rights rules for uploaded gig media and generated assets, Italy and UK.
- **H-09 size:** email KeepOn LIVE, Rockit and SIAE's live-events team for counts of distinct acts playing live per year (R-002's next step).
- **Market scan and competitors** (the `riskiest-hypotheses` step, R-003): do before E3 so we know the price anchors.

## Sequence

1. Approve this plan, thresholds and recruiting channels (Ale).
2. Build a generic interview-research type skill for the framework so E1 follows a protocol (a small harness PR; stays product-agnostic).
3. E1 interviews (weeks 1 to 2), H-09 emails and the market scan alongside.
4. E2 blind test with E1 bands (weeks 2 to 3), cost data collected.
5. E3 fake-door (weeks 3 to 5).
6. Update the riskiest-hypotheses table, then the MVP shape (exit criteria 2 and 3).

## What we need from Ale

- Approval of the ranking and the three experiments.
- How to recruit Italian band drivers (your network, Rockit, venue owners, a recruiter) and permission to send outreach in your name.
- A small budget for ads and a landing page host, and whether to spend it.
- Whether H-01's test should be deep tier.

## Limits

This is a plan, not evidence. Interviews with 8 to 10 bands show patterns, not prevalence; the size of the market still needs a count. Thresholds are my judgment until you approve them.
