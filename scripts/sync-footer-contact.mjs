#!/usr/bin/env node
/** Sync footer contact + feedback store only (does not touch site-specific copy). */
import { copyFileSync, existsSync, readdirSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const templateDir = join(root, "templates", "site-shell");
const sitesDir = join(root, "sites");

const FILES = [
  ["lib/site-owner.ts", "lib/site-owner.ts"],
  ["lib/feedback-store.ts", "lib/feedback-store.ts"],
  ["components/SiteShell.tsx", "components/SiteShell.tsx"],
  ["app/api/feedback/route.ts", "app/api/feedback/route.ts"],
];

let synced = 0;
for (const siteId of readdirSync(sitesDir)) {
  if (siteId.startsWith(".") || siteId === "factory-dashboard") continue;
  const siteDir = join(sitesDir, siteId);
  for (const [srcRel, destRel] of FILES) {
    const src = join(templateDir, srcRel);
    const dest = join(siteDir, destRel);
    if (!existsSync(src)) continue;
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(src, dest);
  }
  synced++;
}
console.log(`footer + feedback synced: ${synced} sites`);
