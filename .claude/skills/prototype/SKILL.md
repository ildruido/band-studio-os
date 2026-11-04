---
name: prototype
description: Build a quick, throwaway interactive mock-up of a Band Studio OS flow as an Artifact, tied to the hypotheses it tests. Use when Ale asks for a prototype, mock-up, concept screen or clickable demo.
---

# Prototype

Prototypes exist to show the concept and test hypotheses. They are not the product: no tests, no harness, no repo code.

## Steps

1. **Pick the flow and its purpose.** Name the user flow (e.g. the Staged Campaign Wizard, swipe-to-vote, the Grit slider) and the hypotheses (`H-0N`) it tests. If Ale didn't name one, recommend the flow behind the riskiest hypothesis.
2. **Design.** Load `frontend-design` and the artifact design guidance. Respect the Authenticity Mandate: gritty, subcultural, never corporate-generic. Use fake data that feels real (band names, venues, flyers).
3. **Build** a single Artifact page: phone-first, clickable end to end, the AI faked with canned results. Keep it to the one flow.
4. **Index it.** Add a row to `docs/inception/prototypes.md`: name, link, flow, hypotheses tested, version, date, and what we learned (filled in after Ale or a band tries it).
5. **Hand over** the link to Ale with two or three things to try, and one question about it.
6. **Learn.** Record the findings in `prototypes.md`, update the hypothesis status in `market-and-hypotheses.md`, and log any decision.
