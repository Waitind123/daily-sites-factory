#!/usr/bin/env node
/**
 * 选择下一个垂直方向：
 * 1. 优先 discovered 队列
 * 2. 否则轮询 verticals.json（跳过 7 天内已部署的）
 * 3. 池耗尽时自动从网上发现痛点并补充新方向
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const verticalsPath = join(root, "verticals.json");
const statePath = join(root, "state.json");

function loadVerticals() {
  return JSON.parse(readFileSync(verticalsPath, "utf8"));
}

function loadState() {
  return JSON.parse(readFileSync(statePath, "utf8"));
}

function saveState(state) {
  writeFileSync(statePath, JSON.stringify(state, null, 2) + "\n");
}

function siteExists(verticalId) {
  return existsSync(join(root, "sites", verticalId));
}

function daysSince(iso) {
  if (!iso) return Infinity;
  return (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24);
}

function wasDeployedRecently(verticalId, state, withinDays = 7) {
  const entry = state.history?.find((h) => h.verticalId === verticalId);
  if (!entry) return false;
  return daysSince(entry.deployedAt) < withinDays;
}

function shouldSkip(verticalId, state) {
  return siteExists(verticalId) && wasDeployedRecently(verticalId, state, 7);
}

function isPoolExhausted(verticals, state) {
  return verticals.every((v) => siteExists(v.id));
}

function pickFromQueue() {
  try {
    const pickResult = JSON.parse(
      execSync("node scripts/discover-vertical.mjs pick", { cwd: root, encoding: "utf8" })
    );
    if (pickResult.fromQueue && pickResult.vertical) {
      return { vertical: pickResult.vertical, fromQueue: true };
    }
  } catch {
    // queue empty
  }
  return null;
}

function autoDiscover(limit = 3) {
  const output = execSync(`node scripts/discover-vertical.mjs discover --limit ${limit}`, {
    cwd: root,
    encoding: "utf8",
  });
  return JSON.parse(output);
}

function pickFromRotation(verticals, state) {
  const start = state.lastIndex + 1;
  for (let offset = 0; offset < verticals.length; offset++) {
    const index = (start + offset) % verticals.length;
    const vertical = verticals[index];
    if (!shouldSkip(vertical.id, state)) {
      return { index, vertical, fromQueue: false };
    }
  }
  return null;
}

const verticals = loadVerticals();
const state = loadState();

// 1. 优先队列
let result = pickFromQueue();

// 2. 轮询固定池
if (!result) {
  result = pickFromRotation(verticals, state);
}

let autoDiscovered = false;

// 3. 池耗尽 → 自动发现痛点并补充
if (!result && isPoolExhausted(verticals, state)) {
  const discovery = autoDiscover(3);
  autoDiscovered = discovery.discovered > 0;
  console.error(
    `垂直池已耗尽（${verticals.length} 个方向均已建站），自动发现 ${discovery.discovered} 个新方向`
  );
  result = pickFromQueue();
}

if (!result) {
  console.log(
    JSON.stringify(
      {
        error: "no_vertical_available",
        message: "无可用垂直方向：池内站点均在 7 天内部署过，或痛点发现失败",
        poolSize: verticals.length,
        exhausted: isPoolExhausted(verticals, state),
      },
      null,
      2
    )
  );
  process.exit(1);
}

const { vertical, fromQueue } = result;
const resolvedIndex = verticals.findIndex((v) => v.id === vertical.id);

state.lastIndex = resolvedIndex >= 0 ? resolvedIndex : state.lastIndex;
state.lastVerticalId = vertical.id;
saveState(state);

console.log(
  JSON.stringify(
    {
      index: resolvedIndex,
      vertical,
      fromQueue,
      autoDiscovered,
    },
    null,
    2
  )
);
