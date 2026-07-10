#!/usr/bin/env node
/** 从各站点 lib/seo.ts 提取生产 URL */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sitesDir = join(root, "sites");
const outPath = join(root, "scripts", "sites-deploy-urls.json");

const urls = {};

for (const id of readdirSync(sitesDir)) {
  if (id.startsWith(".") || id === "factory-dashboard") continue;
  if (!statSync(join(sitesDir, id)).isDirectory()) continue;
  const seoPath = join(sitesDir, id, "lib", "seo.ts");
  if (!existsSync(seoPath)) continue;
  const text = readFileSync(seoPath, "utf8");
  const m = text.match(/url:\s*"(https:\/\/[^"]+)"/);
  if (m) urls[id] = m[1];
}

writeFileSync(outPath, JSON.stringify(urls, null, 2) + "\n");
console.log(`Wrote ${Object.keys(urls).length} URLs → scripts/sites-deploy-urls.json`);
