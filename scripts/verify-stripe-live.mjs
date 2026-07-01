#!/usr/bin/env node
/**
 * 检查各站 Stripe 是真实收款还是 demo 模式
 * 用法: node scripts/verify-stripe-live.mjs
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const urls = existsSync(join(root, "scripts/sites-deploy-urls.json"))
  ? JSON.parse(readFileSync(join(root, "scripts/sites-deploy-urls.json"), "utf8"))
  : {};

const results = { live: [], demo: [], fail: [] };

for (const [id, url] of Object.entries(urls)) {
  const base = String(url).replace(/\/$/, "");
  try {
    const res = await fetch(`${base}/api/checkout`, { signal: AbortSignal.timeout(12000) });
    if (!res.ok) {
      results.fail.push({ id, status: res.status });
      continue;
    }
    const data = await res.json();
    if (data.demo) results.demo.push(id);
    else results.live.push(id);
  } catch (e) {
    results.fail.push({ id, error: e.message });
  }
}

console.log(`\nStripe 收款状态 (${Object.keys(urls).length} 站)\n`);
console.log(`真实收款: ${results.live.length} 站`);
if (results.live.length) console.log("  ", results.live.slice(0, 10).join(", "), results.live.length > 10 ? "..." : "");
console.log(`演示模式 (无法真收钱): ${results.demo.length} 站`);
console.log(`检查失败: ${results.fail.length} 站`);

const statusPath = join(root, "analytics", "stripe-status.json");
const status = {
  configured: Boolean(process.env.STRIPE_SECRET_KEY),
  liveCount: results.live.length,
  demoCount: results.demo.length,
  failCount: results.fail.length,
  liveSiteIds: results.live,
  updatedAt: new Date().toISOString(),
};
writeFileSync(statusPath, JSON.stringify(status, null, 2) + "\n");

const intercomPath = join(root, "sites", "intercom-pulse", "data", "stripe-status.json");
mkdirSync(join(root, "sites", "intercom-pulse", "data"), { recursive: true });
writeFileSync(intercomPath, JSON.stringify(status, null, 2) + "\n");
console.log(`✓ stripe status → analytics/stripe-status.json`);

if (results.demo.length === Object.keys(urls).length) {
  console.log("\n⚠️  全部 demo — 请在 GitHub Secrets 配置 STRIPE_SECRET_KEY 后重新部署");
  process.exit(1);
}
