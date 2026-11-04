---
name: new-app
description: Start a new app in Ale's studio - set up a fresh repo with the shared harness from app-studio, then create its PRD, backlog and first release. Use when Ale asks for a new app.
---

# New app

`app-studio` is the master copy of the harness. A new app gets a pinned copy (`.claude/studio/lock.json`) and later pulls updates with the `harness-sync` skill, so fixes flow from `app-studio` to every app.

## Steps

1. **Name it.** Agree a short kebab-case repo name with Ale (`<app>`) and a 2-3 letter id prefix. Ask Ale to create one empty private repo with that name at github.com/new (Claude can't create repos), and to start a new Claude project for the app with two repositories: `<app>` and `app-studio`. Wait for confirmation.
   **The repo already exists** (for example after a discovery or inception phase with its own docs, skills and `CLAUDE.md`): skip creating it, and read what is there first. Nothing is deleted: `install` and `pack add` never overwrite a file, and the existing docs become the input of step 8.
2. **Pick the start.** Ask Ale one product question: start as an artifact prototype (a private page in the Claude app, fastest to try), or go straight to a web app (own sign-in and hosting). Default: artifact prototype. Either way the app has a platform layer from day one, so the other build can come later without rewriting features. Once a web version exists, the artifact build stays as a prototype with smoke tests only. The answer picks the stack packs: `artifact`, `web`, or `web artifact` for a web app that keeps a prototype (the first pack named decides what `npm run build` builds).
3. **Clone** the repo next to `app-studio` and create a branch (`chore/bootstrap`, or the session branch in a cloud session).
4. **Install the harness and the packs:**
   - `node ../app-studio/scripts/studio-sync.mjs install --app .` copies the skills, agents, hook script and sync script into `.claude/`, writes the lock, and adds `CLAUDE.md` and `.claude/settings.json` from the templates when they don't exist yet.
   - `node .claude/studio/studio-sync.mjs pack add <packs> --slug <repo> --title "<App name>"` adds the stack packs (and the `base` pack they require): the packs' docs under `.claude/packs/`, plus the starter files (build and test configs, CI workflow, platform layer, a seed page with unit and browser smoke tests, and for `web` the server, Dockerfile and preview config) and the npm scripts and dev dependencies. It never overwrites a file the repo already has.
   - `npm install` (and `npm install --prefix server` for `web`).
   - Optional `mirror` pack, for an app whose code must be public (open-source licences such as the GPL) while the project files stay private: add it now or later (`pack add mirror`); the setup is in `.claude/packs/mirror/RELEASE.md`.
5. **Fill the App profile** in `CLAUDE.md`. If the repo already had a `CLAUDE.md`, `install` kept it: merge the template (`app-studio/plugins/studio/templates/CLAUDE.md`) into it by hand, so the App profile and the shared sections are there, and keep the old rules that still apply after the build starts (a decision log, writing rules); drop phase rules that end now (for example "no production code"). Project skills the repo already has stay; rename one that clashes with a harness skill. Then fill in app name, id prefix, stack, user, repo, release and preview targets, capabilities, domain rules, stack notes, and the product paragraph. Read each pack's `STACK.md` and `RELEASE.md` once: the stack notes only add what is specific to this app. Don't edit the copied skills, agents or pack docs: anything app-specific belongs in the profile.
6. **Stack files.** The pack's starter files are now the app's own code. Check that CI still starts no run for Markdown-only and `.claude/`-only changes and skips the browser tests for a version bump (the starter workflow does).
7. **Seed the app.** The packs already seed it: `index.html`, `src/main.ts`, the platform layer, a unit test and a browser smoke test per target, so CI has something real to run. Replace the placeholder page only when the first backlog item is built. The seed page asks the host for the AI on load (`getPlatform().sample()`, a status line and two smoke tests); if the App profile declares no AI or capability, remove that call, the status line and those smoke-test assertions in the first feature, because the reviewer rightly blocks code that uses a capability the profile doesn't declare.
8. **Requirements.** Run `prd-intake` with Ale's description, or with the documents Ale points to (a spec or PRD, a Google or Claude Doc, the repo's discovery docs such as an MVP and roadmap), to write `docs/PRD.md` and `docs/BACKLOG.md`. Start `CHANGELOG.md` with an empty `Unreleased` section.
9. **Verify.** `npm run check`, `npm run test:e2e` (the web target needs Postgres: set `DATABASE_URL`, and `TEST_DATABASE_URL` for `cd server && npm test`; if none is available, CI runs them), `node .claude/studio/studio-sync.mjs check` and `node .claude/studio/studio-sync.mjs health` (the commit hook runs it too and blocks commits until the App profile is filled in). Commit the lockfiles.
10. **Merge.** Push, open a PR, wait for CI, squash-merge (`chore: bootstrap harness`).
11. **First release.** Run the `release` skill for v0.1.0; record the new release target URL in the App profile.
12. **Improve the harness.** If anything in the harness had to be fixed during setup, fix it in `app-studio` (`harness-sync` skill, part B) so the next app starts better.
13. **Tell Ale** the app link, the backlog's first Ready items, and the test script for v0.1.0.
