#!/usr/bin/env node
/**
 * 全站交叉推广条 — 复制 PromoCrossSell 到各站（收款站除外）
 * 用法: node scripts/sync-promo-cross-sell.mjs
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "templates/site-shell/components/PromoCrossSell.tsx");
const skip = new Set(["ai-headshots", "team-headshots", "factory-dashboard"]);

const content = readFileSync(src, "utf8");
let synced = 0;

for (const id of readdirSync(join(root, "sites"))) {
  if (skip.has(id)) continue;
  const compDir = join(root, "sites", id, "components");
  if (!existsSync(compDir)) continue;
  writeFileSync(join(compDir, "PromoCrossSell.tsx"), content);
  synced++;
}

console.log(`✓ PromoCrossSell → ${synced} sites\n`);
