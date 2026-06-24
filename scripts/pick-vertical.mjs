#!/usr/bin/env node
/**
 * 选择下一个垂直方向：优先 discovered 队列，否则轮询 verticals.json
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const verticals = JSON.parse(readFileSync(join(root, "verticals.json"), "utf8"));
const state = JSON.parse(readFileSync(join(root, "state.json"), "utf8"));

// 1. 尝试从痛点发现队列取
let vertical = null;
let index = null;
let fromQueue = false;

try {
  const pickResult = JSON.parse(
    execSync("node scripts/discover-vertical.mjs pick", { cwd: root, encoding: "utf8" })
  );
  if (pickResult.fromQueue && pickResult.vertical) {
    vertical = pickResult.vertical;
    index = verticals.findIndex((v) => v.id === vertical.id);
    if (index === -1) index = verticals.length - 1;
    fromQueue = true;
  }
} catch {
  // queue empty, fall through
}

// 2. 轮询 verticals.json
if (!vertical) {
  index = (state.lastIndex + 1) % verticals.length;
  vertical = verticals[index];
}

console.log(JSON.stringify({ index, vertical, fromQueue }, null, 2));

state.lastIndex = index;
state.lastVerticalId = vertical.id;
writeFileSync(join(root, "state.json"), JSON.stringify(state, null, 2) + "\n");
