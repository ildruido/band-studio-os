---
name: harness-sync
description: Keep an app's copy of the studio harness in step with app-studio - pull updates into the app, or ship a harness fix to app-studio first. Use when a session warns the harness is behind or edited, when Ale asks to update the harness, or when a skill, agent or hook needs a fix.
---

# Harness sync

`app-studio` holds the master copy of the shared skills, agents, hook script and stack packs. Each app carries a copy pinned in `.claude/studio/lock.json` (studio version plus a hash per file). `.claude/studio/studio-sync.mjs` compares the two; it looks for `app-studio` in `--studio <dir>`, then `$STUDIO_DIR`, then a sibling `../app-studio` checkout.

## Part A: pull updates into an app

1. `git -C ../app-studio pull` so the master copy is current.
2. `node ../app-studio/scripts/studio-sync.mjs check --app .`. It lists files that are **behind** (changed in `app-studio`), **edited** (changed here since the last sync) and **missing**.
3. An **edited** file is a local fix that never reached `app-studio`. Move it there first (part B), or drop it if it was app-specific and belongs in the App profile instead.
4. `node ../app-studio/scripts/studio-sync.mjs pull --app .` (the master script, so a newer copy rule applies on the first pull). It updates the managed files and the lock, and refuses to overwrite an edited file unless you pass `--force`.
5. **Pack starter files** (CI workflow, configs, server, platform adapters) are the app's own code. `pull` refreshes the ones you never edited; for the rest the check says "edited here". Read the pack's entry in `app-studio`'s `CHANGELOG.md`, diff the file against `app-studio/packs/<name>/starter/…` (placeholders `{{slug}}` and `{{title}}` stand for the app's name), merge what applies, then run `node .claude/studio/studio-sync.mjs ack` so the note stops.
6. Read `app-studio`'s `CHANGELOG.md` for the versions you skipped. Apply any step it marks **App action** (for example a new App profile field or a settings change).
7. Run `node .claude/studio/studio-sync.mjs health` and fix what it reports (the commit hook blocks the commit otherwise). Commit `chore(harness): sync studio vX.Y.Z` and merge it via a PR. Only `.claude/` changed, so the main CI needs no run; the `Harness` workflow checks it.

## Add a stack pack to an existing app

`node .claude/studio/studio-sync.mjs pack add <name>` (for example when an artifact prototype gets a web version: `pack add web`). Files the app already has are kept and listed; merge those by hand from `app-studio/packs/<name>/starter/`. Then `npm install` (and `npm install --prefix server` for `web`) and commit the lockfiles. Adding `web` to an artifact app: replace `.github/workflows/ci.yml` with the web starter by hand and set `build` to `build:web`.

## Part B: fix the harness itself

1. Make the change in `app-studio` on its own branch (the session branch in a cloud session). Keep the core generic: app facts go in an App profile, stack facts in a stack pack (`packs/<name>/`: `managed/` docs kept in step, `starter/` files copied once; bump the pack's `version` in `pack.json` when you change it). `node scripts/core-lint.mjs` must pass.
2. Bump `version` in `plugins/studio/.claude-plugin/plugin.json` (PATCH for wording and fixes, MINOR for a new skill, agent or profile field) and add a `CHANGELOG.md` entry. Mark anything an app must do by hand as **App action**.
3. Run `node --test scripts/studio-sync.test.mjs`, open a PR, merge it when CI is green.
4. Pull it into the app that needed it (part A). Other apps pick it up at their next sync.
