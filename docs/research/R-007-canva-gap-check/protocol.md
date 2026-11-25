# R-007 Canva gap check: protocol

Pre-registered before any search. After the first search, only the **Deviations** section changes. Method: `docs/research/framework.md`.

- **Type:** Competitor gap check (follow-up to R-004 S2), using `research-protocol` with the `competitor-scan` skill's verification rules. Not the competitive analysis (R-005), which stays pending.
- **Tier:** standard. The gap decides positioning and MVP scope, but nothing here commits money (D-017).
- **Decision this informs:** Whether the "guided, identity-faithful gig campaign" gap is real against Canva, PosterMyWall, Adobe Express, Mew Design, Simplified and similar tools. Feeds the inputs of R-005.
- **If the answer is yes we will…; if no we will…:** If a gap holds on the job's criteria, R-005 scores it and the MVP keeps the campaign flow as its core. If a verified tool already closes it, positioning is reshaped before MVP scoping.
- **Sponsor:** Ale. **Lead:** Claude.
- **Kill criteria approved by the product owner:** not required at this tier.
- **Why this study exists:** Ale declined the one-hour hands-on check ([hands-on-check.md](../R-004-competitor-scan/hands-on-check.md)) and approved two independent routes instead (D-025): route 1 desk research by Claude, route 2 a Gemini Deep Research report run by Ale from a neutral prompt.

## Declared priors

- I expect Canva to do most of the pieces (templates, resize, Brand Kit, AI copy, scheduler) but as separate features the user has to find and combine, so the gap is the guidance and the band-specific identity, not the pieces. This belief comes from R-004 and general knowledge; it is the one most at risk of confirmation bias, so the contrarian pass targets it.
- R-004's Canva claims were secondary and unverified (E-18, E-20). Canva and Adobe pages returned HTTP 403 before.
- I have no first-hand trial of any tool. Desk research can show what a tool claims and what reviewers report, not how it feels in use.

## Job and criteria

Job: a band driver with a gig coming up wants flyer, 9:16 story, square post and captions that look and sound like the band, quickly and cheaply, without design skill. Each tool is rated 0 to 3 on five criteria, with the evidence behind each rating:

| Criterion | What is rated |
| --- | --- |
| Time | Minutes from gig details to the full set, as shown by a tutorial, review or vendor demo |
| Cost | Plan needed for the whole job (price page opened) against the 25 EUR a month or 15 EUR a campaign line |
| Steps | How guided it is: one flow, or separate features the user must find and combine |
| Identity fit | Whether saved identity (colours, fonts, logo, tone) carries to a second campaign, and whether independent voices call the output generic or "on brand" |
| Multi-format campaign | Flyer, story, square post, captions and schedule from one set of gig details |

## Hypotheses

G1 is key.

| Id | Key? | Hypothesis | Null or strongest alternative | Supported if | Kill criterion (contradicted if) |
| --- | --- | --- | --- | --- | --- |
| G1 Gap holds | yes | No verified tool gives a non-designer band driver a guided path from gig details to flyer, story, post and captions with saved identity at 25 EUR a month or less. | At least one tool already does, and a band can use it today. | No tool is shown to meet all of: one guided flow producing flyer, story and caption; saved identity reused for a second campaign; price within the line. | At least one tool meets all three, shown by its own page plus at least one independent tutorial or review (grade B or C) that shows the flow working for a non-designer. |
| G2 Identity fit | no | Independent voices describe AI output from these tools as generic, or needing heavy manual fixing, for a band's own look. | Voices describe it as on-brand and ready to post. | At least two independent voices (B or C) say generic or needs heavy rework, and none of equal weight say on-brand. | Independent voices of equal weight say on-brand with little rework, from at least two sources. |
| G3 Canva closing | no | Canva's 2026 Brand Kit and AI features are not yet a guided campaign flow. | Canva already ships one. | Canva's help pages show brand assets and AI generation as separate tools with no gig-to-campaign flow. | A Canva help page or tutorial shows one flow producing a multi-format campaign from a text brief with brand applied. |

Study verdict follows the framework (G1 decides). Gemini's report is a second route: a Gemini claim counts only after I open the source it cites; an uncited Gemini claim is a grade D lead. Agreement between the two routes counts as independent only if the sources differ.

## Scope

- **Population:** emergent bands run by one active member, no design skill (R-001 personas).
- **Geography:** tools available to Italy and the UK, prices as shown.
- **Time window:** features and prices as of the access date; reviews and tutorials from 2025 onward (features move fast).
- **Languages:** English and Italian.
- **Tools:** Canva, PosterMyWall, Adobe Express, Mew Design, Simplified, plus any near-equivalent the search turns up.
- **Include / exclude rules:** vendor pages count for features and price only (grade D). Affiliate listicles are leads. Reddit and Facebook are unreadable here (a gap to name). If Canva and Adobe pages stay blocked, use help-centre mirrors, review sites, tutorial transcripts and cached copies, and say what was not first-hand.

## Search plan

| Hypothesis | Source types | Neutral queries | Disconfirming queries | Missing voices |
| --- | --- | --- | --- | --- |
| G1 | Canva and rivals' help centres and price pages, tutorials and transcripts, review sites | "Canva gig flyer story and post from one design", "Canva Magic Design event poster brand kit price", "PosterMyWall event campaign plan price", "Adobe Express brand kit resize schedule price" | "Canva can't do", "Canva brand kit limitations free plan", "Canva Magic Design problems", "Canva Pro price per month Europe" | People who tried and quit; Italian-language tutorials |
| G2 | Reviews, designer and band voices, venue reactions | "Canva AI poster band review", "AI generated gig poster quality" | "Canva AI generic poster", "AI poster backlash local bands" | Band drivers themselves (Reddit unreadable) |
| G3 | Canva newsroom and help centre, 2026 coverage | "Canva 2026 AI brand kit announcement", "Canva Magic Design video and social" | "Canva AI limits credits", "Canva brand kit AI not on brand" | Real user trials after launch |

At least 2 disconfirming queries per hypothesis (standard tier).

## Time box

One session of desk research, then the Gemini report when Ale returns it. Stop at the box and report what is left.

## Deviations

Filled in during the research.

- None yet.
