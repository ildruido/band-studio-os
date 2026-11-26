# R-009 Short promo video proof of concept and image rights: protocol

Pre-registered before any search. After the first search, only the **Deviations** section changes. Method: `docs/research/framework.md`.

- **Type:** Feasibility and cost study (desk research plus a throwaway technical spike), using `research-protocol`. Roadmap item N6, feeding Later item L3 (D-018). Includes the image and likeness rights desk study Ale asked for on 2026-11-26.
- **Tier:** standard. A wrong answer does not commit money (D-017, no AI video in V1), but it decides whether L3 stays on the roadmap and which approach it uses.
- **Decision this informs:** Whether short promo videos (9:16 story or reel for a gig) are feasible and affordable, by which approach, and what rights rules the product must follow for images, faces and sound.
- **If the answer is yes we will…; if no we will…:** If template-based motion is feasible and cheap, L3 stays on the roadmap as "template motion first, AI video only if cost and quality allow", and the architecture gets a render step. If neither route is feasible, L3 is dropped to "export stills only" and the brief pack says so.
- **Sponsor:** Ale. **Lead:** Claude.
- **Kill criteria approved by the product owner:** not required at this tier.

## Declared priors

- I believe a still poster animated by code (slow zoom, text reveal, grain) is cheap and technically easy with ffmpeg on a small server, and that it is good enough for a gig story. Source: general knowledge; I have not rendered one for this project.
- I believe AI image-to-video clips cost roughly 0.05 to 0.50 EUR per second at the main providers in 2025, so a 10-second clip is 0.5 to 5 EUR, and that prices may have fallen by late 2026. Source: memory from before the study; unverified.
- I believe AI video garbles text and faces and drifts from a band's look, so text must be placed by code anyway.
- I believe the biggest rights risks are a member's face or a venue logo in AI output, music in the video, and AI-labelling duties under the EU AI Act. Source: [architecture handoff section 6](../../inception/architecture-handoff.md), which is itself unchecked.
- I expect to want L3 to be feasible; the contrarian pass targets that wish.

## Hypotheses

V1 and V3 are key.

| Id | Key? | Hypothesis | Null or strongest alternative | Supported if | Kill criterion (contradicted if) |
| --- | --- | --- | --- | --- | --- |
| V1 Template motion works | yes | A 9:16 video of 8 to 15 seconds can be rendered from an approved poster, code-placed text and the band's own audio, with free open-source tooling on a small server, at a marginal cost under 0.10 EUR per video. | It needs a heavy or paid rendering service, or the output is rejected by Instagram or TikTok upload specs. | The spike renders a sample in under 2 minutes on one small CPU, with a file that meets the published story and reel specs (checked from a primary source). | The spike cannot meet the platform specs, or rendering needs more than 4 CPU-minutes or more than the stack's small plan allows. |
| V2 AI video affordable | no | Image-to-video from at least two providers with a public API costs under 1 EUR per 5-second clip at published prices, so three clips per campaign fit a budget of about 80 EUR a month for 25 or more campaigns. | Prices are higher, or only consumer subscriptions exist with no API. | At least two providers' own price pages (opened) show an API price at or below 1 EUR for 5 seconds. | Fewer than two providers have a public API, or every verified price is above 1 EUR for 5 seconds. |
| V3 AI video not reliable for identity | yes | Independent reports (not vendors) say AI video still garbles text, faces or logos or drifts from a given image, so identity-critical elements must be code-placed even if AI makes the motion. | Independent tests show current models keep a reference image faithfully, including text. | At least two independent voices (grade B or C) report such failures in 2025 or later. | At least two independent tests of equal weight report faithful text and identity at current prices. |
| V4 Provider terms allow commercial use | no | The main image-to-video providers' API or business terms allow commercial use of outputs, state who owns them, and do not claim a licence to train on uploaded images for API use. | Terms forbid commercial use, claim training rights, or hide behind unclear wording. | Terms of at least two providers opened and quoted. | Two or more major providers claim training rights on API uploads or bar commercial use. |
| V5 Rights rules are manageable | no | A band's use of its own photos and its own music in a promo video, plus AI labelling, can be handled by upload warranties and a labelling flag, with no need for licences we cannot get. | A rule makes this unmanageable (for example, Instagram bans or limits AI content without label tools, or the band's recordings need a collecting-society licence we cannot get). | Primary sources show: platform rules on AI labels and music for business accounts, EU AI Act Article 50 text, UK and Italian law on likeness and AI-output copyright. | A primary source shows a duty we cannot meet with the planned design (for example, mandatory per-person consent for faces in AI-altered media with no exception, and no workable consent route). |

Study verdict follows the framework (V1 and V3 decide; V2, V4 and V5 shape the approach and the caveats).

## Scope

- **Population:** emergent bands that post gig promo as stories or reels.
- **Geography:** Italy and the UK first; EU rules for AI labelling; platform rules as shown to European accounts.
- **Time window:** prices and terms as of the access date; independent tests from 2025 onward.
- **Languages:** English and Italian.
- **Approaches compared:** (A) template motion from a still, rendered by code; (B) AI image-to-video from a still, via a hosted API; (C) hybrid: AI makes short background motion, code places text and audio; (D) do nothing: export stills and let the band animate in Instagram or CapCut.
- **Include / exclude rules:** vendor pages count for prices, specs and terms only (grade D, interest flag). Affiliate listicles are leads. Reddit and X may be unreadable here; name the gap. Provider pages that block automated access are noted as unverified, not guessed.

## Search plan

| Hypothesis | Source types | Neutral queries | Disconfirming queries | Missing voices |
| --- | --- | --- | --- | --- |
| V1 | Instagram, TikTok and ffmpeg primary docs; the spike itself | "Instagram story video specifications 9:16 codec", "ffmpeg zoompan image to video", "Instagram reels requirements" | "ffmpeg zoompan jitter", "Instagram rejects video upload codec", "story video limits 2026" | Bands who tried scripted video |
| V2 | Provider price pages and API docs (Runway, Luma, Kling, Google Veo, Pika, fal.ai, Replicate) | "image to video API price per second 2026", "Runway API pricing", "Veo API pricing", "Kling API pricing" | "AI video API too expensive", "AI video credits ran out", "AI video cost per usable clip" | Small teams' real cost per usable clip, not per generated clip |
| V3 | Independent tests and reviews, creator and designer voices | "image to video model comparison text faces 2025", "AI video model review consistency" | "AI video text garbled", "AI video face drift", "AI video good enough for ads" | Musicians and designers who tried |
| V4 | Provider terms of service and API terms | "<provider> terms commercial use outputs", "<provider> API data training" | "<provider> terms license to user content", "<provider> output ownership not guaranteed" | n/a |
| V5 | Meta and TikTok help centres, EU AI Act text, UK and Italian law, copyright offices | "Instagram label AI content", "Instagram business account music rules", "AI Act Article 50 deepfake labelling", "UK computer-generated works copyright", "Italy diritto d'immagine art 10 codice civile", "diritto d'autore opere create con IA Italia" | "Instagram removes AI content", "business accounts cannot use licensed music", "AI Act Article 50 exceptions artistic" | Italian and UK bands' real takedown experiences |

At least 2 disconfirming queries per hypothesis (standard tier).

## Time box

One session of desk research (about 3 hours of agent time), one technical spike (about 1 hour), then the skeptic review. Stop at the box and report what is left.

## Deviations

Filled in during the research. Each one: date, what changed, why, and what it means for the conclusions.

- None yet.
