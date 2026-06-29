#!/usr/bin/env node
/**
 * 同步 Analytics 埋点到所有站点：
 * - PV/UV（AnalyticsBeacon + layout）
 * - 结账（CheckoutButton）
 * - 付费成功（SuccessClient）
 *
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

const CHECKOUT_FN =
  /export function CheckoutButton\([\s\S]*?\n\}\n\nexport function FeatureGrid/;

for (const id of targets) {
  const siteDir = join(sitesDir, id);
  if (!existsSync(siteDir)) continue;

  for (const rel of [
    "lib/analytics-client.ts",
    "lib/dashboard-url.ts",
    "lib/analytics-api-url.ts",
    "components/AnalyticsBeacon.tsx",
    "components/CheckoutButton.tsx",
  ]) {
    const src = join(templateDir, rel);
    const dest = join(siteDir, rel);
    if (existsSync(src)) {
      copyFileSync(src, dest);
    }
  }

  const layoutPath = join(siteDir, "app/layout.tsx");
  if (existsSync(layoutPath)) {
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
      console.log(`  layout + beacon → ${id}`);
    }
  }

  const uiPath = join(siteDir, "components/ui.tsx");
  if (existsSync(uiPath)) {
    let ui = readFileSync(uiPath, "utf8");
    if (ui.includes("export function CheckoutButton") && !ui.includes('./CheckoutButton"')) {
      ui = ui.replace(
        CHECKOUT_FN,
        'export { CheckoutButton } from "./CheckoutButton";\n\nexport function FeatureGrid'
      );
      writeFileSync(uiPath, ui);
      console.log(`  checkout tracking → ${id}`);
    }
  }

  const successPath = join(siteDir, "components/SuccessClient.tsx");
  if (existsSync(successPath)) {
    let sc = readFileSync(successPath, "utf8");
    if (!sc.includes("trackFactoryEvent")) {
      if (sc.includes('from "@/lib/copy-app"')) {
        sc = sc.replace(
          'from "@/lib/copy-app";',
          'from "@/lib/copy-app";\nimport { trackFactoryEvent } from "@/lib/analytics-client";\nimport { siteMeta } from "@/lib/site-meta";'
        );
      }
      sc = sc.replace(
        'fetch("/api/member/activate", { method: "POST" });',
        'fetch("/api/member/activate", { method: "POST" });\n    trackFactoryEvent(siteMeta.id, "purchase");'
      );
      writeFileSync(successPath, sc);
      console.log(`  purchase tracking → ${id}`);
    }
  }
}

console.log(`\n✓ Analytics synced to ${targets.length} site(s)\n`);
