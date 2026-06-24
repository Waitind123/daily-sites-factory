#!/usr/bin/env node
/**
 * 将 templates/nuwa-ui/ 同步到指定站点
 * Usage: node scripts/sync-nuwa-ui.mjs sites/<vertical-id>
 */
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const templateDir = join(root, "templates", "nuwa-ui");

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/sync-nuwa-ui.mjs sites/<vertical-id>");
  process.exit(1);
}

const siteDir = join(root, target);
if (!existsSync(siteDir)) {
  console.error(`Site not found: ${siteDir}`);
  process.exit(1);
}

const copies = [
  { from: "app/globals.css", to: "app/globals.css" },
  { from: "lib/cn.ts", to: "lib/cn.ts" },
  { from: "components", to: "components/nuwa" },
];

for (const { from, to } of copies) {
  const src = join(templateDir, from);
  const dest = join(siteDir, to);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest, { recursive: true });
  console.log(`✓ ${to}`);
}

console.log(`\nNuwa UI synced to ${target}`);
console.log("Next: update tailwind.config.ts, layout.tsx, and pages.");
