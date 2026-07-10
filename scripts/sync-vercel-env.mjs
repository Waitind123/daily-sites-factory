#!/usr/bin/env node
/**
 * 将密钥同步到指定站点的 Vercel 环境变量
 * 用法: VERCEL_TOKEN=... STRIPE_SECRET_KEY=sk_... node scripts/sync-vercel-env.mjs ai-headshots STRIPE_SECRET_KEY
 */
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteId = process.argv[2];
const envName = process.argv[3];
const envValue = process.env[envName];

const scope = process.env.VERCEL_SCOPE || "baoyu18178053101-6131s-projects";
const token = process.env.VERCEL_TOKEN;

if (!siteId || !envName) {
  console.error("用法: VERCEL_TOKEN=... KEY=val node scripts/sync-vercel-env.mjs <site_id> <ENV_NAME>");
  process.exit(1);
}

if (!envValue) {
  console.warn(`跳过 ${siteId}/${envName} — 未设置 ${envName}`);
  process.exit(0);
}

const siteDir = join(root, "sites", siteId);
if (!existsSync(siteDir)) {
  console.error(`站点不存在: ${siteId}`);
  process.exit(1);
}

if (!token) {
  console.error("VERCEL_TOKEN 未配置");
  process.exit(1);
}

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: "utf8", ...opts });
  if (r.status !== 0) {
    throw new Error((r.stderr || r.stdout || `${cmd} failed`).trim());
  }
  return r.stdout?.trim() || "";
}

console.log(`\n🔐 同步 ${envName} → ${siteId} (Vercel)...`);

run("npx", ["vercel", "link", "--yes", `--scope=${scope}`, `--token=${token}`], {
  cwd: siteDir,
  stdio: "pipe",
});

for (const target of ["production", "preview"]) {
  run(
    "npx",
    [
      "vercel",
      "env",
      "add",
      envName,
      target,
      "--force",
      `--scope=${scope}`,
      `--token=${token}`,
    ],
    {
      cwd: siteDir,
      input: envValue,
      stdio: ["pipe", "pipe", "pipe"],
    }
  );
  console.log(`  ✓ ${siteId} · ${envName} · ${target}`);
}

console.log("");
