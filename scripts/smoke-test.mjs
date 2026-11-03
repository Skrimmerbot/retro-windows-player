import { readFileSync } from "node:fs";
import { Script } from "node:vm";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

assert.match(html, /<!doctype html>/i, "index.html must declare HTML5");
assert.match(html, /<meta name="viewport"/i, "mobile viewport metadata is required");
assert.match(html, /id="desktop"/, "desktop root must exist");
assert.match(html, /id="startButton"/, "Start button must exist");
assert.match(html, /id="startMenu"/, "Start menu must exist");
assert.match(html, /id="taskButtons"/, "taskbar window buttons must exist");
assert.match(html, /id="boot"/, "boot animation must exist");
assert.match(html, /function launchGame\(/, "game launch shell must exist");
assert.match(html, /function openExplorer\(/, "Explorer simulation must exist");

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
assert.deepEqual([...new Set(duplicates)], [], "static HTML IDs must be unique");

const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map((m) => m[1])
  .filter((source) => source.trim());
assert.ok(scripts.length, "inline JavaScript must exist");
scripts.forEach((source, index) => {
  new Script(source, { filename: `index.inline-${index + 1}.js` });
});

console.log(`Smoke checks passed: HTML structure, unique IDs, and ${scripts.length} inline script(s) parse.`);
