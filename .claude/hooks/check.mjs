// Claude Code hook runner. Cross-platform (Windows + Linux cloud sessions).
//   node .claude/hooks/check.mjs lint  -> PostToolUse: ESLint the file that was just edited
//   node .claude/hooks/check.mjs test  -> Stop: run the unit tests before the turn ends
//   node .claude/hooks/check.mjs commit -> PreToolUse (Bash): run the harness health check before a git commit
// Exit code 2 sends the output back to Claude as a blocking error to fix.
// Shared studio harness file: change it in app-studio, not in an app.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const mode = process.argv[2];

let input = {};
try {
  input = JSON.parse(readFileSync(0, "utf8") || "{}");
} catch {
  // No or invalid stdin: treat as an empty event.
}

// Any `git commit`, also inside a chain (`git add -A && git commit`) or with options (`git -C . commit`).
const isCommit = (cmd) => /(^|[\s;&|(])git(\s+-{1,2}\S+(\s+[^\s-]\S*)?)*\s+commit\b/.test(cmd ?? "");

if (mode === "commit") {
  // Needs no dependencies: the health check uses Node built-ins only.
  if (!isCommit(input.tool_input?.command)) process.exit(0);
  const sync = join(root, ".claude", "studio", "studio-sync.mjs");
  const res = existsSync(sync)
    ? spawnSync(process.execPath, [sync, "health"], { cwd: root, encoding: "utf8" })
    : { status: 1, stdout: `${relative(root, sync)} is missing.` };
  if (res.status !== 0) {
    process.stderr.write(
      `Commit blocked: the harness isn't healthy. Fix this first (the harness-sync skill helps), then commit again:\n${`${res.stdout ?? ""}${res.stderr ?? ""}`.trim()}\n`,
    );
    process.exit(2);
  }
  process.exit(0);
}

// Dependencies not installed yet (fresh clone): nothing to check.
if (!existsSync(join(root, "node_modules"))) process.exit(0);

const hasBin = (name) =>
  existsSync(join(root, "node_modules", ".bin", name)) ||
  existsSync(join(root, "node_modules", ".bin", `${name}.cmd`));

function run(cmd, args) {
  const res = spawnSync(cmd, args, { cwd: root, encoding: "utf8", shell: true });
  return { ok: res.status === 0, out: `${res.stdout ?? ""}${res.stderr ?? ""}`.trim() };
}

if (mode === "lint") {
  const file = input.tool_input?.file_path;
  if (!file || !/\.(c|m)?(t|j)sx?$/.test(file)) process.exit(0);
  const rel = relative(root, file);
  if (rel.startsWith("..") || /(^|[\\/])(dist[^\\/]*|node_modules)[\\/]/.test(rel)) process.exit(0);
  if (!hasBin("eslint")) process.exit(0);
  const { ok, out } = run("npx", ["eslint", "--max-warnings=0", "--no-warn-ignored", JSON.stringify(rel)]);
  if (!ok) {
    process.stderr.write(`ESLint failed for ${rel}. Fix before continuing:\n${out}\n`);
    process.exit(2);
  }
  process.exit(0);
}

if (mode === "test") {
  // Avoid an endless loop if Claude is already continuing because of this hook.
  if (input.stop_hook_active) process.exit(0);
  // Vitest with the compact reporter when the app uses it, otherwise the app's own test script.
  let scripts = {};
  try {
    scripts = JSON.parse(readFileSync(join(root, "package.json"), "utf8")).scripts ?? {};
  } catch {
    // No package.json: nothing to test.
  }
  let cmd;
  if (hasBin("vitest")) cmd = ["npx", ["vitest", "run", "--reporter=dot"]];
  else if (scripts.test && !/no test specified/.test(scripts.test)) cmd = ["npm", ["test", "--silent"]];
  else process.exit(0);
  const { ok, out } = run(...cmd);
  if (!ok) {
    const tail = out.slice(-4000);
    process.stderr.write(`Unit tests are failing. Fix them before finishing:\n${tail}\n`);
    process.exit(2);
  }
  process.exit(0);
}

process.stderr.write(`Unknown hook mode: ${mode}\n`);
process.exit(1);
