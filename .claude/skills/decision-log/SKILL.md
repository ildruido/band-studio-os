---
name: decision-log
description: Record, revise or look up a product or process decision in docs/inception/decision-log.md. Use whenever Ale settles a question, changes an earlier decision, or asks why something was decided.
---

# Decision log

The log is `docs/inception/decision-log.md`, newest first. Entries are never deleted.

## Record a decision

1. Take the next free id (`D-0NN`).
2. Add the entry at the top:

   ```md
   ### D-0NN Short title
   - **Date:** YYYY-MM-DD
   - **Decision:** one or two sentences
   - **Why:** the reason
   - **Alternatives:** options considered and why they were rejected (omit if none)
   - **Decided by:** Ale / Ale, on Claude's recommendation
   - **Status:** active
   ```

3. Only record what Ale decided or approved. Your own working assumptions go in the artifact's Assumptions section, not here.

## Revise a decision

Add a new entry for the new decision, and set the old one's status to `superseded by D-0NN`. Never edit the old entry's text.

## Commit

Log-only changes may go straight to `main` (`docs(decisions): D-0NN <title>`). When the decision comes from an artifact PR, add it to that PR instead.
