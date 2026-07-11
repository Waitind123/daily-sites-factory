#!/usr/bin/env node
/**
 * 生产环境 AI 能力探测 — ai-headshots 必须 replicate:true 且 /api/generate 非 demo
 * 用法: node scripts/verify-ai-generate-live.mjs [site-id]
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { TINY_TEST_IMAGE } from "./lib/health-watch-config.mjs";

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

const healthRes = await fetch(`${base}/api/health`, { signal: AbortSignal.timeout(20000) });
const health = await healthRes.json().catch(() => ({}));

if (!healthRes.ok || health.status !== "ok") {
  console.error(`❌ ${siteId} /api/health 失败:`, health);
  process.exit(1);
}

if (!health.replicate) {
  console.error(
    `❌ ${siteId} Replicate 未配置 — 生成处于 demo 模式。请在 GitHub Secrets 添加 REPLICATE_API_TOKEN 后 redeploy`
  );
  process.exit(1);
}

console.log(`✓ ${siteId} Replicate configured · polar=${health.polar ? "yes" : "no"}`);

const genRes = await fetch(`${base}/api/generate`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ image: TINY_TEST_IMAGE, style: "corporate" }),
  signal: AbortSignal.timeout(180000),
});
const gen = await genRes.json().catch(() => ({}));

if (!genRes.ok || !gen.ok || !gen.url) {
  console.error(`❌ ${siteId} /api/generate 失败 (${genRes.status}):`, gen);
  process.exit(1);
}

if (gen.demo) {
  console.error(`❌ ${siteId} /api/generate 返回 demo 模式 — Replicate token 可能无效`);
  process.exit(1);
}

if (!String(gen.url).startsWith("http")) {
  console.error(`❌ ${siteId} /api/generate 输出非 HTTPS URL:`, gen.url?.slice?.(0, 80));
  process.exit(1);
}

console.log(`✓ ${siteId} live AI generate OK`);
