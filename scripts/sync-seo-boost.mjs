#!/usr/bin/env node
/**
 * 同步 SEO 增强模板到全部站点 lib/site-seo.ts
 * 用法: node scripts/sync-seo-boost.mjs [site-id ...]
 */
import { copyFileSync, readdirSync, statSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const template = join(root, "templates", "seo", "lib", "site-seo.ts");
const sitesDir = join(root, "sites");

const siteIds = process.argv.slice(2);
const targets =
  siteIds.length > 0
    ? siteIds
    : readdirSync(sitesDir).filter((d) => !d.startsWith(".") && d !== "factory-dashboard");

for (const id of targets) {
  const dest = join(sitesDir, id, "lib", "site-seo.ts");
  if (!existsSync(join(sitesDir, id))) continue;
  copyFileSync(template, dest);
  console.log(`  site-seo.ts → ${id}`);
}

console.log(`\n✓ SEO template synced to ${targets.length} site(s)\n`);
