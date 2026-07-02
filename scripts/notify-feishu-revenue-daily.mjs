#!/usr/bin/env node
/** 赚钱日报飞书通知 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { formatFactoryDeploySummary } from "./lib/feishu-site-index.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const webhook = process.env.FEISHU_WEBHOOK_URL;
if (!webhook) process.exit(0);

const rollupPath = join(root, "analytics", "rollup.json");
const rollup = existsSync(rollupPath) ? JSON.parse(readFileSync(rollupPath, "utf8")) : { sites: {} };
const pv = Object.values(rollup.sites || {}).reduce((a, s) => a + (s.totals?.pv || 0), 0);
const stripeMsg =
  process.env.HAS_STRIPE === "yes" ? "Stripe 密钥已配置" : "⚠️ Stripe 未配置=演示付费，无法真收钱";

const text = `💰 赚钱日报
${formatFactoryDeploySummary()}
总 PV: ${pv}
${stripeMsg}
看板: https://intercom-pulse.vercel.app/factory-dashboard`;

const res = await fetch(webhook, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ msg_type: "text", content: { text } }),
});
if (!res.ok) process.exit(1);
