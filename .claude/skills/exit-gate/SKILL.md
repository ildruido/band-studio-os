---
name: exit-gate
description: Check the 11 inception exit criteria against the repo and report what is done, partial or missing. Use when the product owner asks where inception stands, or before asking for the final sign-off.
---

# Exit gate

Product-specific facts (product, users, principles, key concepts, market segments, domain risks, look and feel) come from the **Inception profile** in `CLAUDE.md`. This skill stays generic.

## Steps

1. **Read** `docs/inception/workflow.md` (the artifact map) and every file in `docs/inception/`. Check open PRs too: an unmerged artifact counts as partial.
2. **Score each criterion** as `done`, `partial` or `missing`, with the file or PR that proves it and what's left:
   1. Refined product foundation doc
   2. Validation, market research and riskiest hypotheses
   3. Clear MVP definition and roadmap
   4. Prototypes showing the concept
   5. Artifacts produced; project and app repo set up; workflow initialized from app-studio; next-steps recommendation
   6. Architecture-phase handoff (product and meta-architecture)
   7. Target users and personas
   8. Success metrics
   9. Constraints and non-goals
   10. Decision log current (every artifact's decisions are logged)
   11. the product owner's final sign-off
3. **Check consistency** across artifacts: the MVP serves the primary persona, metrics measure the MVP's value, constraints are respected, and the riskiest hypotheses have a test or a prototype.
4. **Write** `docs/inception/exit-gate.md` with the table and the gaps, and tell the product owner the next one or two steps.
5. **Sign-off.** When 1 to 10 are `done`, ask the product owner for sign-off on a decision card. On a yes, log it as a decision and mark criterion 11 `done`.
