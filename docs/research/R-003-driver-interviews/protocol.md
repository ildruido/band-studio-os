# R-003 Driver interviews: protocol (designed, parked)

**Status: designed, parked** (D-014). No recruiting and no interviews until Ale says go. This is the research plan's experiment E1 ([plan](../research-plan.md)). Method: [framework.md](../framework.md). Before the first interview the protocol is re-read, any change is made now as a plain edit, and the freeze commit is the start date. After that only **Deviations** change.

- **Type:** interviews (no type skill yet; this protocol follows `research-protocol`).
- **Tier:** standard. The transcripts are coded by a fresh-context agent that sees only the codebook and anonymised transcripts, and the `research-skeptic` agent reviews the protocol and the coded evidence.
- **Decision this informs:** whether the Driver is a real, reachable user in Italy (and the UK) with a pain worth solving, so we keep, reshape or drop the primary persona before we build prototypes or price anything.
- **If supported we will…; if killed we will…:** Supported: firm up the Driver persona with real quotes and run E2 (blind "is this us?" test) with these bands. Killed: Ale decides a reshape (another user, another job, another segment) before any prototype work.
- **Sponsor:** Ale. **Lead:** Claude (design, coding review, report). Ale or a helper runs the calls (see Fieldwork).
- **Kill criteria approved by the product owner:** the thresholds in the research plan were approved in D-014. Not required again at this tier.

## Declared priors

- I believe most Italian band drivers do promotion themselves and find it a burden, because the starting idea and the surveys we opened say so. None of that evidence is Italian or about bands specifically (R-001, R-002).
- I expect money, finding gigs and rehearsal space to rank above promotion, as in E-04. I would not be surprised if promotion lands in the top five but not at the very top.
- I have not spoken to anyone. I want the answer to be yes; the unprompted questions and the blind coding are there to counter that.

## Hypotheses

| Id | Key? | Hypothesis | Null | Supported if | Contradicted if |
| --- | --- | --- | --- | --- | --- |
| H-02a | yes | The band's promotion for its last gig was done by a band member, not by an outside person. | Someone outside the band did it, or nobody did. | At least 6 of 8 Italian bands. | Fewer than 3 of 8. |
| H-02b | yes | Unprompted, the driver names promotion among their band's top five problems. | It ranks lower, or is never named. | At least 5 of 8 Italian bands. | Fewer than 3 of 8. |
| H-04 | no | The driver names the same shortcomings of their current tools or helpers repeatedly. | They are satisfied with what they use. | The same shortcoming (time, quality, consistency, cost, approval delays) comes up in at least 4 of 8, independently. | At least 5 of 8 say their current way is good enough and nothing annoys them. |
| H-09 | no | Drivers can name where bands like theirs gather or are found (venues, groups, events), and each knows several other active bands nearby. | They are isolated or invisible. | At least 6 of 8 name at least one reachable channel and at least 3 other active bands. | Fewer than 3 of 8. |

**Rules.** Between the thresholds is **Mixed**. Fewer than 6 valid Italian interviews is **Insufficient evidence**. Verdicts use the Italian interviews only; the UK interviews (3 to 4) are reported alongside and never pooled to reach a threshold. Study verdict: Proceed if H-02a and H-02b are supported; Reshape if either is Mixed or contradicted; Stop if both are contradicted; Needs more interviews if Insufficient.

## Sample

- **Unit:** one band, one interview with the member who runs its promotion (or the most active member if nobody does).
- **Italian core (n = 8):** bands of 2 to 6 members, any genre, that played live at least once in the last 6 months. Quota inside the core: at least 2 outside the largest cities, at least 2 who are not found through music websites or Rockit, at least 2 whose promotion might be done by someone else (manager, label, friend or agency), and a spread of genres.
- **UK (n = 3 to 4):** same criteria.
- **Survivor check (n = 2, Italy or UK):** a band that stopped or paused in the last 12 months. Not counted toward thresholds; asked why and what the promotion work had to do with it.
- **Excluded:** solo and DJ acts, covers and wedding bands, professionals with an agency or label handling promotion (unless in the "someone else" quota), anyone who works in music tools or marketing, anyone Ale or Claude knows well.
- **Over-recruit** by about 25% to allow no-shows.

## Fieldwork (when started)

- **Recruiting channels** (to be chosen by Ale): Ale's network, music sites, venue owners and sound technicians, public musician groups and forums. No more than 3 participants from any one channel, and the channel is recorded per participant.
- **Who sends outreach:** Ale or a helper, in Ale's name. Claude drafts the message and the screener only after "go".
- **Screener:** 6 questions (band size, last gig date, who handles promotion, city, genre, how they heard of the call). Does not mention the product.
- **Format:** 30 to 40 minutes by video or phone, Italian for Italian bands. Notes taken live; audio recorded only with consent and kept until transcription (within 30 days), then deleted.
- **Incentive:** to be decided by Ale (for example a small voucher). No incentive tied to a particular answer.
- **Interviewer:** Ale, a helper, or Claude drafting questions for a human to ask. The interviewer follows [the interview guide](interview-guide.md) and does not pitch or react to answers.

## Measures and coding

Coded per interview from the transcript, with the codebook in [the interview guide](interview-guide.md):

- **Promotion by member (H-02a):** who made and posted the last gig's promotion. Evidence: the participant shows or describes the flyer, post or message, and who made it. "Everyone helps" counts as a member if a band member made or posted it.
- **Unprompted top five (H-02b):** the participant's own list of the band's biggest problems (Q1), before promotion is mentioned. Promotion counts if any item matches the promotion code list (flyers, posters, social posts, filling the room, press, announcing gigs) and it is within the participant's own top five.
- **Prompted ranking (reported separately):** at the end, a card of 10 problems including promotion; rank the top three. Reported next to the unprompted result, never merged.
- **Shortcomings (H-04):** codes for time, quality, consistency, cost, approval delays, skill, other.
- **Reach (H-09):** channels named and number of other active bands named.
- **Quotes:** verbatim only, short, with a participant code (IT-03), never a name.

## Analysis and bias guards

- **Blind coding:** a fresh-context agent codes the anonymised transcripts using only the codebook, without the hypotheses, thresholds or the lead's coding. The lead codes independently. Disagreements are listed and resolved by re-reading the quote; the agreement rate is reported.
- **No leading questions:** the first question is open and unprompted; the product, the word "AI" and the idea of a tool are not mentioned until the end, and only if the participant asks.
- **Behaviour over opinion:** questions about the last real gig and what was actually done, not what they would do.
- **Disconfirming:** the "someone else handles it" quota, the survivor check and the question "what do you not bother promoting?" are there to find where the hypothesis fails.
- **Negative cases** are reported in full, with the same weight as positive ones.
- **No partial thresholds:** the verdict is computed from the counts above after coding, before reading the lead's interpretation.
- **Limits stated in advance:** 8 interviews show patterns, not how common they are across the country. People who answer a call about band promotion over-represent those who care about it.

## Ethics and data

- Written consent in Italian (purpose, recording, who sees it, right to withdraw, deletion). No product or company details are given beyond "research on how bands run their promotion".
- Pseudonymised transcripts only in the repo (codes like IT-03). No names, band names, handles, phone numbers or emails in the repo, the agent prompts or the chat.
- Raw audio and contact details stay with the interviewer, outside the repo, and are deleted when the study closes or on request.
- Quote briefly. Do not publish a quote that could identify a band.

## Time box and cost

Two to three weeks of calendar time once started: about 1 week recruiting, 1 week interviews (about 6 to 8 hours of calls for 11 to 14 interviews, plus the survivor check), a few days for coding and the report. One agent run for blind coding and one for the skeptic. Ale's time: sending outreach and, if he runs the calls, the calls themselves.

## Deviations

- None yet.
