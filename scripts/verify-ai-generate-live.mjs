#!/usr/bin/env node
/**
 * 生产环境 AI 能力探测 — ai-headshots 必须 replicate:true
 * 用法: node scripts/verify-ai-generate-live.mjs [site-id]
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteId = process.argv[2] || "ai-headshots";
const urls = existsSync(join(root, "scripts/sites-deploy-urls.json"))
  ? JSON.parse(readFileSync(join(root, "scripts/sites-deploy-urls.json"), "utf8"))
  : {};
const base = String(urls[siteId] || "").replace(/\/$/, "");
if (!base) {
  console.error(`无部署 URL: ${siteId}`);
  process.exit(1);
}

const res = await fetch(`${base}/api/health`, { signal: AbortSignal.timeout(20000) });
const data = await res.json().catch(() => ({}));

if (!res.ok || data.status !== "ok") {
  console.error(`❌ ${siteId} /api/health 失败:`, data);
  process.exit(1);
}

if (!data.replicate) {
  console.error(
    `❌ ${siteId} Replicate 未配置 — 生成处于 demo 模式。请在 GitHub Secrets 添加 REPLICATE_API_TOKEN 后 redeploy`
  );
  process.exit(1);
}

console.log(`✓ ${siteId} Replicate live · polar=${data.polar ? "yes" : "no"}`);
