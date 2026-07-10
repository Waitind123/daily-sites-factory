#!/usr/bin/env node
/**
 * 把 STRIPE_SECRET_KEY 同步到所有已接入支付的站点
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sites = JSON.parse(
  readFileSync(join(root, "scripts", "sites-payment-enabled.json"), "utf8")
);

if (!process.env.STRIPE_SECRET_KEY) {
  console.error("❌ STRIPE_SECRET_KEY 未设置");
  console.error("   请在 GitHub Secrets 配置后重试，或本地: export STRIPE_SECRET_KEY=sk_...");
  process.exit(1);
}

if (!process.env.VERCEL_TOKEN) {
  console.error("❌ VERCEL_TOKEN 未设置");
  process.exit(1);
}

console.log(`\n💳 Stripe 全站同步 (${sites.length} 站)\n`);

let failed = 0;
for (const siteId of sites) {
  const r = spawnSync(
    "node",
    [join(root, "scripts", "sync-vercel-env.mjs"), siteId, "STRIPE_SECRET_KEY"],
    {
      cwd: root,
      stdio: "inherit",
      env: process.env,
    }
  );
  if (r.status !== 0) failed++;
}

if (failed > 0) {
  console.error(`\n❌ ${failed} 个站点同步失败\n`);
  process.exit(1);
}

console.log(`\n✓ 全部 ${sites.length} 站 STRIPE_SECRET_KEY 已同步到 Vercel\n`);
