#!/usr/bin/env node
/**
 * 健康巡检异常通知 — 飞书
 * 用法: node scripts/notify-feishu-health.mjs [report-path]
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  formatFactoryDeploySummary,
  formatSiteDeployLabelShort,
} from "./lib/feishu-site-index.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reportPath = process.argv[2] || join(root, "analytics/health-watch-latest.json");
const autofixPath = join(root, "analytics/health-watch-autofix-latest.json");

const webhook = process.env.FEISHU_WEBHOOK_URL;
if (!webhook) {
  console.log("FEISHU_WEBHOOK_URL 未配置，跳过通知");
  process.exit(0);
}

if (!existsSync(reportPath)) {
  console.error("报告不存在");
  process.exit(1);
}

const report = JSON.parse(readFileSync(reportPath, "utf8"));
const autofix = existsSync(autofixPath) ? JSON.parse(readFileSync(autofixPath, "utf8")) : null;

const failCount = report.summary?.fail || 0;
const warnCount = report.summary?.warn || 0;

if (failCount === 0 && warnCount === 0) {
  console.log("无异常，跳过飞书通知");
  process.exit(0);
}

const time = new Date(report.at).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
const failLines = (report.failures || [])
  .slice(0, 8)
  .map((f) => `• ${formatSiteDeployLabelShort(f.siteId)} — ${f.check}: ${f.detail}`)
  .join("\n");

let fixLines = "";
if (autofix?.redeploys?.length) {
  fixLines = `\n\n🔧 已自动触发 redeploy: ${autofix.redeploys.join(", ")}`;
}
if (autofix?.commits?.length) {
  fixLines += `\n📝 已提交修复: ${autofix.commits.map((c) => c.sha).join(", ")}`;
}
if (autofix?.failed?.length) {
  fixLines += `\n⚠️ 修复失败 ${autofix.failed.length} 项（需人工查看 Actions）`;
}

const text = `🏥 站点健康巡检异常
${formatFactoryDeploySummary()}
时间: ${time}
结果: ❌ ${failCount} 失败 / ⚠️ ${warnCount} 警告

${failLines || "（无详情）"}${fixLines}

看板: https://intercom-pulse.vercel.app/factory-dashboard`;

fetch(webhook, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ msg_type: "text", content: { text } }),
})
  .then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    console.log("✓ 飞书通知已发送");
  })
  .catch((err) => {
    console.error("飞书通知失败:", err.message);
    process.exit(1);
  });
