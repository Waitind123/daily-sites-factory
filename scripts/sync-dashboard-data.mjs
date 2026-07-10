#!/usr/bin/env node
/** Sync dashboard sites list from sites/ + state + deploy-urls */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "sites", "factory-dashboard", "data");
const state = JSON.parse(readFileSync(join(root, "state.json"), "utf8"));
const deployUrls = JSON.parse(readFileSync(join(root, "scripts", "sites-deploy-urls.json"), "utf8"));

const nameById = new Map();
for (const h of state.history || []) {
  nameById.set(h.verticalId, h.name);
}
const deployedAtById = new Map();
for (const h of state.history || []) {
  if (h.deployedAt) deployedAtById.set(h.verticalId, h.deployedAt);
}

const siteIds = readdirSync(join(root, "sites"), { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith(".") && d.name !== "factory-dashboard")
  .map((d) => d.name)
  .sort();

const sites = siteIds.map((id) => ({
  id,
  name: nameById.get(id) || id,
  url: deployUrls[id] || `https://${id}.vercel.app`,
  deployedAt: deployedAtById.get(id),
}));

sites.sort((a, b) => (b.deployedAt || "").localeCompare(a.deployedAt || ""));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "sites.json"), JSON.stringify(sites, null, 2) + "\n");

const intercomData = join(root, "sites", "intercom-pulse", "data");
mkdirSync(intercomData, { recursive: true });
writeFileSync(join(intercomData, "sites.json"), JSON.stringify(sites, null, 2) + "\n");

if (state.revenueGoal) {
  writeFileSync(join(intercomData, "revenue-goal.json"), JSON.stringify(state.revenueGoal, null, 2) + "\n");
}

const rollupSrc = join(root, "analytics", "rollup.json");
if (existsSync(rollupSrc)) {
  writeFileSync(join(outDir, "rollup.json"), readFileSync(rollupSrc, "utf8"));
}

console.log(`✓ dashboard data synced: ${sites.length} sites → intercom-pulse/data/sites.json`);
