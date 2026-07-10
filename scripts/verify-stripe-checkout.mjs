#!/usr/bin/env node
/**
 * 探测站点 Stripe 是否已接通（非 demo 模式）
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteId = process.argv[2];

const urlsFile = join(root, "scripts", "sites-deploy-urls.json");
const fallback = {
  "ai-headshots": "https://ai-headshots-navy.vercel.app",
  "nomad-cities": "https://nomad-cities.vercel.app",
  "remote-jobs": "https://remote-jobs-azure.vercel.app",
};

let base = fallback[siteId];
if (existsSync(urlsFile)) {
  const urls = JSON.parse(readFileSync(urlsFile, "utf8"));
  if (urls[siteId]) base = urls[siteId];
}

if (!base) {
  console.error(`无部署 URL: ${siteId}`);
  process.exit(1);
}

const url = `${base.replace(/\/$/, "")}/api/checkout`;
const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
const data = await res.json().catch(() => ({}));

const stripeLive =
  data.mode === "stripe" ||
  data.stripeDemo === false ||
  data.demo === false;

if (!res.ok) {
  console.error(`❌ ${siteId} checkout HTTP ${res.status}`);
  process.exit(1);
}

if (!stripeLive) {
  console.error(`❌ ${siteId} 仍为演示模式 — STRIPE_SECRET_KEY 未生效`);
  console.error(JSON.stringify(data));
  process.exit(1);
}

console.log(`✓ ${siteId} Stripe live (${data.mode || "stripe"})`);
