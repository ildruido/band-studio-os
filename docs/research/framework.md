# Research framework

The research method now lives in the shared `research` module: [FRAMEWORK.md](../../.claude/packs/research/FRAMEWORK.md), run with the `research` skill and checked by the `research-skeptic` agent.

This file was the app's own copy until the module replaced it. A comparison found no real difference in method (biases, roles, steps, tiers, evidence grades, verdicts, ethics). The only change is how study types are reached: the app's type skills (`research-protocol`, `persona-validation`, `market-analysis`, `competitor-scan`, `competitive-analysis`) are now branches of the one `research` skill (user reality check, market size, competitor scan, competitive analysis, outside research). The persona evidence audit moved to the `discovery-interview` skill's personas branch. The full earlier text is in git history.

The index of studies stays in [studies.md](studies.md). Studies stay in `docs/research/R-NNN-<slug>/`.
