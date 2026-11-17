---
name: prototype
description: Build a quick, throwaway interactive mock-up of a product flow as an Artifact, tied to the hypotheses it tests. Use when the product owner asks for a prototype, mock-up, concept screen or clickable demo.
---

# Prototype

Prototypes exist to show the concept and test hypotheses. They are not the product: no tests, no harness, no repo code.

Product-specific facts (product, users, principles, key concepts, market segments, domain risks, look and feel) come from the **Inception profile** in `CLAUDE.md`. This skill stays generic.

## Steps

1. **Pick the flow and its purpose.** Name the user flow (pick from the Inception profile's key concepts) and the hypotheses (`H-0N`) it tests. If the product owner didn't name one, recommend the flow behind the riskiest hypothesis.
2. **Design.** Load `frontend-design` and the artifact design guidance. Follow the Inception profile's principles and prototype look and feel. Use fake data that feels real for the target users.
3. **Build** a single Artifact page: phone-first, clickable end to end, the AI faked with canned results. Keep it to the one flow.
4. **Index it.** Add a row to `docs/inception/prototypes.md`: name, link, flow, hypotheses tested, version, date, and what we learned (filled in after the product owner or a target user tries it).
5. **Hand over** the link to the product owner with two or three things to try, and one question about it.
6. **Learn.** Record the findings in `prototypes.md`, update the hypothesis status in `market-and-hypotheses.md`, and log any decision.
