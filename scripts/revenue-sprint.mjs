#!/usr/bin/env node
/**
 * 12 天收入冲刺 — 分析卡点、输出推广文案、触发优先站点部署
 * 用法: node scripts/revenue-sprint.mjs [--deploy]
 */
import { readFileSync, existsSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const state = JSON.parse(readFileSync(join(root, "state.json"), "utf8"));
const rollup = JSON.parse(readFileSync(join(root, "analytics", "rollup.json"), "utf8"));
const stripePath = join(root, "analytics", "stripe-status.json");
const stripe = existsSync(stripePath) ? JSON.parse(readFileSync(stripePath, "utf8")) : {};
const urls = existsSync(join(root, "scripts/sites-deploy-urls.json"))
  ? JSON.parse(readFileSync(join(root, "scripts/sites-deploy-urls.json"), "utf8"))
  : {};

const goal = state.revenueGoal || { targetUsd: 20, deadline: "2026-07-13" };
const price = 9.9;
const purchases = state.revenueGoal
  ? Math.ceil(Math.max(0, goal.targetUsd) / price)
  : 2;
const daysLeft = Math.max(
  0,
  Math.ceil((new Date(`${goal.deadline}T23:59:59`).getTime() - Date.now()) / 86400000)
);

const liveIds = new Set(stripe.liveSiteIds || []);
const ranked = Object.entries(rollup.sites || {})
  .map(([id, site]) => ({ id, pv: site.totals?.pv || 0, url: site.url || urls[id] }))
  .sort((a, b) => b.pv - a.pv);

const priorityDeploy = ["intercom-pulse", "feature-vote", "seo-rank-tracker", "ai-headshots"];

console.log(`\n💰 Revenue Sprint — ${daysLeft} days to $${goal.targetUsd}\n`);
console.log(`Need: ${purchases} paid @ $${price} (≈$${(purchases * price).toFixed(1)})`);
console.log(`Live Stripe: ${liveIds.size} sites → ${[...liveIds].join(", ") || "none"}`);
console.log(`\nTop traffic:`);
for (const row of ranked.slice(0, 5)) {
  console.log(`  ${row.id.padEnd(22)} pv=${String(row.pv).padStart(3)}  stripe=${liveIds.has(row.id) ? "LIVE" : "demo"}`);
}

const liveUrl = urls["ai-headshots"] || "https://ai-headshots-navy.vercel.app";
const sharePost = `I built AI professional headshots in 30 seconds — $9.9/mo flat (vs PhotoAI $29+).

5 free tries, no studio needed. LinkedIn-ready in one upload.

${liveUrl}/join?utm_source=reddit

Would love feedback from indie founders / job hunters.`;

const sharePath = join(root, "analytics", "revenue-sprint-share.txt");
writeFileSync(sharePath, sharePost + "\n");
console.log(`\n📝 Reddit/HN post saved → analytics/revenue-sprint-share.txt\n`);
console.log(sharePost);
console.log("");

if (process.argv.includes("--deploy")) {
  for (const site of priorityDeploy) {
    try {
      console.log(`→ Deploy ${site}...`);
      execSync(`gh workflow run deploy-site.yml -f site_id=${site}`, { stdio: "inherit", cwd: root });
    } catch (e) {
      console.warn(`  skip ${site}:`, e.message);
    }
  }
}

console.log("\n✓ Sprint report done\n");
