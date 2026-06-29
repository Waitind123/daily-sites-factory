#!/usr/bin/env node
/**
 * 同步 Analytics 埋点到所有站点
 * 用法: node scripts/sync-analytics-beacon.mjs [site-id ...]
 */
import { readFileSync, writeFileSync, existsSync, copyFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const templateDir = join(root, "templates", "site-shell");
const sitesDir = join(root, "sites");

const siteIds = process.argv.slice(2);
const targets =
  siteIds.length > 0
    ? siteIds
    : readdirSync(sitesDir).filter((d) => !d.startsWith(".") && d !== "factory-dashboard");

for (const id of targets) {
  const siteDir = join(sitesDir, id);
  if (!existsSync(siteDir)) continue;

  for (const rel of [
    "lib/analytics-client.ts",
    "components/AnalyticsBeacon.tsx",
  ]) {
    const src = join(templateDir, rel);
    const dest = join(siteDir, rel);
    if (existsSync(src)) {
      copyFileSync(src, dest);
      console.log(`  copied ${rel} → ${id}`);
    }
  }

  const layoutPath = join(siteDir, "app/layout.tsx");
  if (!existsSync(layoutPath)) continue;
  let layout = readFileSync(layoutPath, "utf8");
  if (!layout.includes("AnalyticsBeacon")) {
    if (!layout.includes('from "@/components/AnalyticsBeacon"')) {
      layout = layout.replace(
        /(import[^\n]+\n)(?=import|const inter|export)/,
        '$1import { AnalyticsBeacon } from "@/components/AnalyticsBeacon";\n'
      );
    }
    layout = layout.replace(
      /<body([^>]*)>/,
      '<body$1>\n        <AnalyticsBeacon siteId={siteMeta.id} />'
    );
    writeFileSync(layoutPath, layout);
    console.log(`  patched layout → ${id}`);
  }
}

console.log(`\n✓ Analytics beacon synced to ${targets.length} site(s)\n`);
