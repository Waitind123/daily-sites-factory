#!/usr/bin/env node
/**
 * 把 state.json 中的收入目标同步到 intercom-pulse 部署目录
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const state = JSON.parse(readFileSync(join(root, "state.json"), "utf8"));
const outDir = join(root, "sites", "intercom-pulse", "data");

mkdirSync(outDir, { recursive: true });

if (state.revenueGoal) {
  writeFileSync(join(outDir, "revenue-goal.json"), JSON.stringify(state.revenueGoal, null, 2) + "\n");
}

console.log("✓ revenue goal synced to intercom-pulse/data/");
