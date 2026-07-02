#!/usr/bin/env node
/** 收入冲刺飞书通知 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { formatFactoryDeploySummary } from "./lib/feishu-site-index.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const webhook = process.env.FEISHU_WEBHOOK_URL;
if (!webhook) process.exit(0);

const stripe = JSON.parse(readFileSync(join(root, "analytics/stripe-status.json"), "utf8"));
const rollup = JSON.parse(readFileSync(join(root, "analytics/rollup.json"), "utf8"));
const state = JSON.parse(readFileSync(join(root, "state.json"), "utf8"));

const dl = new Date(`${state.revenueGoal?.deadline || "2026-07-13"}T23:59:59`);
const days = Math.max(0, Math.ceil((dl - Date.now()) / 86400000));
let pv = 0;
let purchase = 0;
for (const site of Object.values(rollup.sites || {})) {
  pv += site.totals?.pv || 0;
  purchase += site.totals?.purchase || 0;
}
const live = (stripe.liveSiteIds || []).join(", ") || "none";

const text = `🎯 收入冲刺
${formatFactoryDeploySummary()}
剩余 ${days} 天 · 目标 $20
付费埋点: ${purchase}（Polar 到账请自行核对）
PV: ${pv}
Live 收款站: ${live}
看板: https://intercom-pulse.vercel.app/factory-dashboard`;

const res = await fetch(webhook, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ msg_type: "text", content: { text } }),
});
if (!res.ok) process.exit(1);
