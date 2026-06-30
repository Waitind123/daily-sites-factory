#!/usr/bin/env node
/** 把看板所需数据复制进 sites/factory-dashboard/data/（Vercel 只部署该目录） */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "sites", "factory-dashboard", "data");
const state = JSON.parse(readFileSync(join(root, "state.json"), "utf8"));
const deployUrls = JSON.parse(readFileSync(join(root, "scripts", "sites-deploy-urls.json"), "utf8"));

mkdirSync(outDir, { recursive: true });

const sites = [];
const seen = new Set();
for (const h of state.history || []) {
  if (h.verticalId === "factory-dashboard") continue;
  seen.add(h.verticalId);
  sites.push({
    id: h.verticalId,
    name: h.name,
    url: deployUrls[h.verticalId] || h.url,
    deployedAt: h.deployedAt,
  });
}
for (const [id, url] of Object.entries(deployUrls)) {
  if (id === "factory-dashboard" || seen.has(id)) continue;
  sites.push({ id, name: id, url, deployedAt: undefined });
}

sites.sort((a, b) => (b.deployedAt || "").localeCompare(a.deployedAt || ""));

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

console.log(`✓ dashboard data synced: ${sites.length} sites → sites/factory-dashboard/data/`);
