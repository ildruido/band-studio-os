# Roadmap: Band Studio OS (working title)

Status: **approved by Ale, 2026-11-25**, derived from the [MVP](mvp.md). If the MVP scope changes, this roadmap is reshaped to match. Ale may also change the roadmap alone. Decisions behind it: D-014, D-016 to D-020, D-028, D-029 in the [decision log](decision-log.md).

**There are no dates.** There is no deadline (D-020); pace is set by Ale's 5 to 10 hours a week and by the research gates. Order and gates matter, calendar weeks do not. Items marked **(Assumption)** are Claude's proposal.

## Shape

```
NOW: de-risk + finish inception  ->  G1  ->  NEXT: build + pilot the MVP  ->  G2  ->  LATER
```

Each gate is a go, reshape or stop decision for Ale, taken on evidence, not on effort spent.

## Now: de-risk and finish inception

Goal: know whether the output can feel like "us" and whether the problem is real, before building. Nothing here is production code.

| # | Item | Why | Source |
| --- | --- | --- | --- |
| N1 | Prototypes of the riskiest MVP flows (identity setup, gig-to-pack, bandmate approval) | Exit criterion 4; makes E2 and E3 concrete | MVP core flow |
| N2 | **E1 driver interviews** (R-003), including the price conversation | Tests H-02, sets the time baseline for H-08, recruits pilot bands | D-014 |
| N3 | **E2 "is this us?" blind output test**, including Canva and Simplified output as comparison | Tests H-01 and R-005's open gap (C1); first AI cost data (H-06) | D-014, R-005 |
| N4 | **E3 fake-door price test** | Tests H-03, which the free pilot does not (D-029) | D-014 |
| N5 | Rights desk study (H-07) and size emails (H-09) | Cheap and independent of the others | Research plan |
| N6 | Short-video proof of concept | Feasibility and cost of video, so the Later horizon is real (D-018) | D-018 |
| N7 | Architecture handoff, App profile draft, exit gate and sign-off | Exit criteria 5, 6, 11 | Workflow |

Fieldwork (N2 to N4) is postponed until Ale says go (D-014).

**Gate G1: build or reshape.** Go if E2 passes (at least 60% of bands rate our output 4 or 5, and it ties or beats their own flyer in half the pairs) and E1 supports H-02. If E2 fails, reshape the identity inputs or the output before any build. If E1 fails, reconsider the user. Cost is cheap here: this is where the product can still change shape for free.

## Next: build and pilot the MVP

Goal: the MVP in [mvp.md](mvp.md), used by 5 to 10 real Italian bands (Assumption). Built as thin end-to-end slices (D-006), in this order (Assumption):

| # | Slice | Result |
| --- | --- | --- |
| X1 | Identity (light) + gig setup + one generated flyer | The whole path runs once; first output to judge |
| X2 | Full pre-gig pack: stories, post, captions, variants, regenerate | The pack the MVP promises |
| X3 | Bandmate approve or veto by link, no account | Human-in-the-loop gate; nothing exports unapproved |
| X4 | Export folder, captions file, posting schedule | Campaign leaves the app |
| X5 | Events and AI cost logging | The success metrics can be read |
| X6 | Pilot run with the E1 bands, free (D-029) | Real data on activation, "feels like us", time and repeat use |

**Gate G2: pay, reshape or stop.** Go if the pilot reaches the success-metric targets (activation 50%, "feels like us" 50%, repeat 40%, all provisional) and at least 3 bands commit to a paid campaign. Otherwise reshape the weakest metric, or stop.

## Later: grow, in order of evidence

Order within Later follows what G1 and G2 show. Each is a candidate, not a promise.

| # | Item | Depends on |
| --- | --- | --- |
| L1 | **Post-gig momentum**, light first: thank-you carousel with no uploads (D-028 puts it first after the MVP) | G2 |
| L2 | **Payments**: pay per campaign, then a subscription (D-008) | G2, E3 price |
| L3 | **Short video** from the N6 result (D-018) | N6 feasibility and cost |
| L4 | **Identity Studio growth**: add identity variables that measurably change output (D-006) | Pilot output data |
| L5 | **UK launch and English** after Italy (D-012) | G2 and paying Italian bands |
| L6 | **Connectors**: direct publishing, scheduling, reach partners such as Bandsintown Boost (D-009, D-027) | Demand from pilot |
| L7 | **Full Consensus Engine**: roles, branching, vetoes with micro-revisions (D-005) | More than one active member per band |
| L8 | **Highlight reels from gig media**, edge triage, rights controls | L1, H-07 |
| L9 | **Native app** (D-019) | Phone web proves too limiting |
| L10 | Booking, riders, merch, scene-level learning, free tier and add-ons | Far future |

## Dependencies and risks

- **Money:** the 100 EUR a month cap (D-017) limits generation and test ads. E2 and the pilot must log AI cost per campaign from the first generation.
- **Ale's hours:** interviews and the blind test need his time. They are the long pole, not the build.
- **Research before build:** if Ale chooses to build before G1, the riskiest assumption, "feels like us", is still untested. That is allowed, but should be a decision, not a drift.
- **Lead rests on plans:** the gap against Canva and Simplified is not shown yet (R-005). Nothing on this roadmap closes it except E2 and the pilot.
- **Rights:** MVP avoids uploads; L8 cannot start before H-07 is answered. R-008 answered it only for the band's own reference images; crowd and UK photo rules for gig media are still open, so L8 stays blocked until a follow-up study.

## Assumptions to confirm

- E2 runs before any build (G1). The alternative is to build the first slice and test with real output.
- Pilot size of 5 to 10 bands.
- Short-video POC (N6) runs in parallel with the interviews, not before them.
