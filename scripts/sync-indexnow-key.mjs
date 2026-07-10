#!/usr/bin/env node
/** 同步 IndexNow 验证 key 文件到全部站点 public/ */
import { writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sitesDir = join(root, "sites");
const KEY = process.env.INDEXNOW_KEY || "dailysitesfactory2026key8f3a2b1c";

const content = KEY + "\n";

for (const id of readdirSync(sitesDir)) {
  if (id.startsWith(".") || id === "factory-dashboard") continue;
  const pub = join(sitesDir, id, "public");
  if (!statSync(join(sitesDir, id)).isDirectory()) continue;
  if (!existsSync(pub)) mkdirSync(pub, { recursive: true });
  writeFileSync(join(pub, "indexnow-key.txt"), content);
  console.log(`  indexnow-key.txt → ${id}`);
}

console.log(`\n✓ IndexNow key synced (key=${KEY})\n`);
