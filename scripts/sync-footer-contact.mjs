#!/usr/bin/env node
/** Sync footer contact, legal pages, fixed contact bar, and shared shell components. */
import { copyFileSync, existsSync, readdirSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const templateDir = join(root, "templates", "site-shell");
const sitesDir = join(root, "sites");

const FILES = [
  ["lib/site-owner.ts", "lib/site-owner.ts"],
  ["lib/legal.ts", "lib/legal.ts"],
  ["lib/feedback-store.ts", "lib/feedback-store.ts"],
  ["components/SiteShell.tsx", "components/SiteShell.tsx"],
  ["components/FixedContactBar.tsx", "components/FixedContactBar.tsx"],
  ["app/api/feedback/route.ts", "app/api/feedback/route.ts"],
  ["app/legal/privacy/page.tsx", "app/legal/privacy/page.tsx"],
  ["app/legal/terms/page.tsx", "app/legal/terms/page.tsx"],
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
console.log(`footer + legal + contact synced: ${synced} sites`);
