#!/usr/bin/env node
/**
 * 在各站 layout 注入 PromoCrossSell 交叉推广条
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skip = new Set(["ai-headshots", "team-headshots", "factory-dashboard"]);

let patched = 0;

for (const id of readdirSync(join(root, "sites"))) {
  if (skip.has(id)) continue;
  const candidates = [
    join(root, "sites", id, "app", "layout.tsx"),
    join(root, "sites", id, "app", "(product)", "layout.tsx"),
  ];
  const path = candidates.find((p) => existsSync(p));
  if (!path) continue;

  let src = readFileSync(path, "utf8");
  if (src.includes("PromoCrossSell")) continue;
  if (!src.includes("siteMeta")) continue;

  if (!src.includes('from "@/components/PromoCrossSell"')) {
    src = src.replace(
      /(import.*from "@\/components\/AnalyticsBeacon";\n)/,
      `$1import { PromoCrossSell } from "@/components/PromoCrossSell";\n`
    );
    if (!src.includes("PromoCrossSell")) {
      src = src.replace(
        /(import.*from "@\/lib\/site-meta";\n)/,
        `import { PromoCrossSell } from "@/components/PromoCrossSell";\n$1`
      );
    }
  }

  if (src.includes("<SiteHeader")) {
    src = src.replace(
      /<SiteHeader([^/]*)\/>/,
      `<SiteHeader$1/>\n        <PromoCrossSell locale={locale} siteId={siteMeta.id} />`
    );
  } else if (src.includes("<AnalyticsBeacon")) {
    src = src.replace(
      /<AnalyticsBeacon([^/]*)\/>/,
      `<AnalyticsBeacon$1/>\n        <PromoCrossSell locale={locale} siteId={siteMeta.id} />`
    );
  } else {
    continue;
  }

  writeFileSync(path, src);
  patched++;
  console.log(`  patched ${id}`);
}

console.log(`\n✓ ${patched} layouts patched\n`);
