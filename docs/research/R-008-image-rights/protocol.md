# R-008 Image rights for band promo content: protocol

Pre-registered before any search. After the first search, only the **Deviations** section changes. Method: `docs/research/framework.md`.

**Not legal advice.** This is desk research by an AI, not reviewed by a lawyer. It can inform product decisions; it cannot replace a lawyer for anything that carries legal weight.

- **Type:** Generic desk research under `research-protocol` (tests hypothesis H-07 of the [research plan](../research-plan.md); roadmap item N5)
- **Tier:** standard. The answer shapes the reference-image rule, the AI-labelling plan and whether a later gig-media feature (L8) can exist, but nothing here is a go/no-go on the whole product and no money moves on it.
- **Decision this informs:** (1) the reference-image rule and the upload sentence (architecture handoff, open question 4); (2) the "made with AI" labelling plan; (3) what we may promise bands about ownership of generated art; (4) whether L8 (highlight reels from gig media) stays on the roadmap and under what controls.
- **If yes we will…; if no we will…:** If rights risks are manageable, we keep upload of the band's own reference images with a rights sentence, build the labelling plan as written, and log the rules as decisions. If a key hypothesis is contradicted, we drop uploads (links only), or change how generated art is described to bands, or push L8 out, and say so in the brief pack.
- **Sponsor:** Ale. **Lead:** Claude.
- **Kill criteria approved by the product owner:** not required at this tier.

## Declared priors

What I believe before searching, and where it comes from:

- Pure AI output has weak or no copyright protection in the EU, Italy and the UK, but that does not stop a band using it. (General knowledge; the architecture handoff says "ownership depends on the provider's terms".)
- Photographer copyright and the likeness of identifiable people are the main practical risks, not the AI itself. (General knowledge of Italian Law 633/1941 and GDPR.)
- The handoff says the AI Act transparency rule (Article 50) applies from August 2026 with no grace period, from secondary sources only. I am not sure this is still right: a "digital omnibus" proposal to delay parts of the Act existed when I last knew. I have not verified it.
- Italy passed its own AI law in 2025 that touches copyright. I have not read it.
- I lean towards "manageable with rules". That lean is the thing to attack: the disconfirming queries and the skeptic must look hardest at H2 and H3.

## Hypotheses

A key hypothesis is one the decision can't survive without.

| Id | Key? | Hypothesis | Null or strongest alternative | Supported if | Kill criterion (contradicted if) |
| --- | --- | --- | --- | --- | --- |
| H1 | yes | A band can lawfully use AI-generated images, made through our app, to promote its gigs in Italy, the UK and the EU, and the main image providers' terms let the end customer of a third-party app do so. Exclusive copyright in the output is not needed for this use and we must not promise it. | Providers forbid or restrict this use, or outputs carry infringement exposure that falls on the band and we cannot reduce. | At least two providers' current published terms give the user commercial-use rights over outputs, including via API, and no authoritative source calls the use unlawful. | Most reviewed providers' terms (at least three of the five checked) bar commercial use or resale through a third-party app, or an authoritative legal source says commercial promotional use of generated images is unlawful or carries a systemic infringement risk that no rule of ours can reduce. |
| H2 | yes | Taking only images the band says it has the right to use (up to five reference images), with a rights sentence and the band warranting its rights in our terms, keeps photographer-copyright, likeness and data-protection risk manageable for a small team. | Most band photos are taken by third parties with no written licence, and hosting them or sending them to an AI provider needs per-image permission (photographer, depicted people) that a rights sentence cannot cover. | Authoritative sources (statute text, regulator or court guidance) show the band's own use is lawful or low-risk in practice, that a hosting intermediary's exposure is limited when it acts on notice, and that a warranty plus a takedown route is the normal industry answer. | An authoritative source shows that third-party photographer copyright or the depicted people's consent creates direct liability for us (not only for the band) that a warranty, notice and takedown cannot reduce, for example a mandatory consent from every depicted person before processing. |
| H3 | yes | The EU AI Act transparency duties (Article 50) and any Italian or UK labelling rule can be met by a small provider that uses a third-party image model: machine-readable marking plus a visible disclosure where the rules require one, at near-zero cost, and the date they bite is known. | The duties land on us as a provider of a generative system, require marking we cannot do with a third-party model, and apply to us now. | Official text and an official or authoritative reading show the duties, the dates (including any delay), who bears them, and a standards-based way (such as C2PA or IPTC metadata) to comply that a small team can build. | Official sources show we are a provider with a duty that needs technology or cost a small team on a third-party model cannot meet, and the duty already applies. |
| H4 | no | Logos, fonts, venue and sponsor marks and "in the style of a named artist" prompts can be handled by simple rules: only the band's own logo, open-licence fonts placed by our code, no named-artist prompts, and the band owning what it adds. | A font licence, trademark or style rule blocks a normal poster. | Font licences (for example the SIL Open Font License) allow the planned use; trademark and style rules show no blocking issue for ordinary gig posters with a venue name in plain text. | A source shows that ordinary gig posters naming a venue or using standard fonts need licences or permissions we cannot supply. |
| H5 | no | Gig media with crowd or fans in it (later feature L8) is manageable only with extra controls, and the controls are known and affordable. | It is unmanageable at our size, which would remove L8. | Sources show the rules for filming and publishing crowd images at music events in Italy and the UK and a workable control set (signage, edge triage, takedown). | Sources show a consent regime per person that cannot be met for crowd footage by a small team. |

## Scope

- **Population:** a band that makes and posts gig promotion material (posters, stories, captions) through our product; the product is a small Italian-first service operated by one person (Ale, data controller for now, D-043).
- **Geography:** Italy first, then the UK, then the EU generally. US sources only for provider terms and as flagged context.
- **Time window:** statutes and official texts in current force as of November 2026; provider terms read as published today; commentary from 2024 onward (the law moved fast), older only for settled statute text.
- **Languages:** English and Italian.
- **Include:** primary law (Italian Law 633/1941 and Law 132/2025, UK CDPA 1988, GDPR, EU AI Act text, DSA), official regulator or ministry guidance, provider terms of service, court decisions, the EU Commission's AI Act pages and codes of practice, law-firm or academic commentary as a pointer to primary sources.
- **Exclude:** vendor marketing claiming "safe for commercial use" without terms (grade D, lead only); AI-written legal summaries without a traceable source. Music copyright is out of scope (V1 has no audio or video; the video proof of concept is a separate item).

## Search plan

| Hypothesis | Source types | Neutral queries | Disconfirming queries | Looking for the missing |
| --- | --- | --- | --- | --- |
| H1 | Provider terms (OpenAI, Google, Black Forest Labs, Stability AI, Adobe Firefly, Midjourney); Italian Law 132/2025; UK CDPA s9(3) and the UK government's AI-and-copyright position; EU/Copyright Office-style guidance | "AI generated image copyright Italy Law 132/2025"; "UK computer-generated works section 9(3) status"; "[provider] terms of use commercial output" | "AI generated images commercial use prohibited third party app terms"; "AI image generator lawsuit output infringement user liability"; "AI generated poster copyright dispute Europe" | Small artists and bands who got a takedown or dispute over AI art |
| H2 | Law 633/1941 (photographs, portrait right), CDPA, EU copyright and e-commerce rules, DSA hosting rules, GDPR on photos, provider terms for image inputs; guidance from SIAE or photographer bodies | "Italy photograph copyright article 88 90 92 band promo use"; "UK photographer copyright band promo photo licence"; "DSA hosting notice and takedown small platform" | "band used photographer's photo without permission claim"; "platform liable user uploaded photo copyright Italy"; "GDPR photo upload processor liability band members" | Bands or small platforms sued or pursued over uploaded photos |
| H3 | Regulation (EU) 2024/1689 Article 50 and recitals; Commission guidelines and the code of practice on marking and labelling; digital omnibus proposal and its status; Italy Law 132/2025; UK position | "AI Act Article 50 application date"; "AI Act Article 50(2) machine-readable marking obligation provider"; "digital omnibus AI Act transparency delay" | "AI Act Article 50 no grace period new systems"; "AI Act watermarking third-party model who is provider"; "AI Act fine transparency generative small company" | Small-company or startup guidance; what third-party providers (OpenAI, Google) already embed |
| H4 | SIL OFL text; Google Fonts licensing; trademark nominative use in the EU and UK; provider rules on artist names | "SIL Open Font License commercial poster use"; "venue name on poster trademark nominative use EU" | "font licence poster embedding restriction"; "AI prompt named artist style infringement Europe" | Small-business disputes over poster fonts or venue logos |
| H5 | Law 633/1941 articles 96 to 97 (portrait right and public events), UK guidance on photographing in public, GDPR and event photography guidance (Garante, ICO) | "Italy articolo 97 ritratto avvenimenti pubblici fotografie concerto"; "ICO photography at events guidance"; "Garante privacy foto eventi pubblicazione" | "fan photo concert published without consent Italy fine"; "Garante sanzione pubblicazione immagini concerto" | Concert organisers and bands fined or sued over crowd footage |

## Time box

One session of roughly 3 to 4 hours of searching and reading. Stop at the box and report what is left. The skeptic agent re-opens the sources behind every high or medium claim.

## Deviations

Filled in during the research. Each one: date, what changed, why, and what it means for the conclusions.

- None yet.
