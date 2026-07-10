#!/usr/bin/env node
/**
 * 收入冲刺卡点自动修复 — 针对 demo 模式高流量站 / Polar 未同步
 *
 * 策略:
 *   1. sync-polar（同步 checkout 代码）
 *   2. 触发 deploy-site 为 demo 高流量站 + 收入优先站（限次防打满 Vercel 配额）
 *
 * 用法:
 *   node scripts/revenue-sprint-autofix.mjs
 *   node scripts/revenue-sprint-autofix.mjs --dry-run
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync, execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dryRun = process.argv.includes("--dry-run");
const MAX_REDEPLOY = Number(process.env.SPRINT_AUTOFIX_MAX_REDEPLOY || 4);

const PRIORITY = [
  "ai-headshots",
  "intercom-pulse",
  "feature-vote",
  "team-headshots",
  "coworking-finder",
  "remote-jobs",
];

function loadJson(path, fallback = {}) {
  return existsSync(path) ? JSON.parse(readFileSync(path, "utf8")) : fallback;
}

function loadSites() {
  const urls = loadJson(join(root, "scripts", "sites-deploy-urls.json"));
  const state = loadJson(join(root, "state.json"), { history: [] });
  const fromHistory = (state.history || [])
    .filter((h) => h.verticalId !== "factory-dashboard")
    .map((h) => ({
      id: h.verticalId,
      name: h.name || h.verticalId,
    }));
  if (fromHistory.length) return fromHistory;
  return Object.keys(urls).map((id) => ({ id, name: id }));
}

function topDemoSites(stripe, rollup, sites, limit = 5) {
  const liveIds = new Set(stripe.liveSiteIds || []);
  return sites
    .map((s) => {
      const roll = rollup.sites?.[s.id];
      const pv = roll?.totals?.pv ?? 0;
      return { ...s, pv };
    })
    .filter((s) => !liveIds.has(s.id) && s.pv > 0)
    .sort((a, b) => b.pv - a.pv)
    .slice(0, limit);
}

function polarSecretsReady() {
  return Boolean(process.env.POLAR_ACCESS_TOKEN && process.env.POLAR_PRODUCT_ID);
}

function runCmd(cmd, args, label) {
  console.log(dryRun ? `[dry-run] ${label}` : `→ ${label}`);
  if (dryRun) return { ok: true };
  const r = spawnSync(cmd, args, { cwd: root, encoding: "utf8", timeout: 300000 });
  if (r.status !== 0) {
    throw new Error(`${label}: ${(r.stderr || r.stdout || "").slice(0, 300)}`);
  }
  return { ok: true };
}

function triggerRedeploy(siteId, urls) {
  if (!urls[siteId]) {
    console.log(`  skip ${siteId}: no deploy URL`);
    return false;
  }
  console.log(dryRun ? `[dry-run] redeploy ${siteId}` : `→ redeploy ${siteId}`);
  if (dryRun) return true;
  try {
    execSync(`gh workflow run deploy-site.yml -f site_id="${siteId}"`, {
      cwd: root,
      stdio: "pipe",
      timeout: 30000,
    });
    return true;
  } catch (err) {
    console.warn(`  ⚠ redeploy ${siteId} failed: ${err.message}`);
    return false;
  }
}

function main() {
  const stripe = loadJson(join(root, "analytics", "stripe-status.json"));
  const rollup = loadJson(join(root, "analytics", "rollup.json"), { sites: {} });
  const urls = loadJson(join(root, "scripts", "sites-deploy-urls.json"));
  const sites = loadSites();
  const demoTop = topDemoSites(stripe, rollup, sites);
  const liveCount = stripe.liveCount ?? (stripe.liveSiteIds || []).length;
  const polarPerSite = stripe.polarPerSite ?? stripe.polarApi ?? polarSecretsReady();

  const log = {
    at: new Date().toISOString(),
    dryRun,
    liveCount,
    polarPerSite,
    demoTop: demoTop.map((s) => ({ id: s.id, pv: s.pv })),
    actions: [],
    redeploys: [],
  };

  console.log(`\n🔧 收入冲刺自动修复${dryRun ? " (dry-run)" : ""}\n`);
  console.log(`真收款站: ${liveCount} · Polar 每站 API: ${polarPerSite ? "是" : "否"}`);
  if (demoTop.length) {
    console.log(`Demo 高流量: ${demoTop.map((s) => `${s.id}(${s.pv} PV)`).join(", ")}`);
  }

  const needsFix = demoTop.length > 0 || (!polarPerSite && liveCount > 0);
  if (!needsFix) {
    console.log("\n✓ 无收入卡点需自动修复\n");
    writeLog(log);
    return;
  }

  if (!polarSecretsReady()) {
    console.log("\n⚠ 未配置 POLAR_ACCESS_TOKEN + POLAR_PRODUCT_ID，仅能 redeploy，无法切换每站 API 模式");
    log.actions.push("skip-sync-polar:no-secrets");
  } else {
    try {
      runCmd("node", ["scripts/apply-polar-api-checkout.mjs"], "sync-polar");
      log.actions.push("sync-polar");
    } catch (err) {
      console.warn(`⚠ ${err.message}`);
      log.actions.push(`sync-polar-fail:${err.message}`);
    }
  }

  const redeploySet = new Set(PRIORITY.filter((id) => urls[id]));
  for (const s of demoTop) redeploySet.add(s.id);

  const ordered = [
    ...PRIORITY.filter((id) => redeploySet.has(id)),
    ...[...redeploySet].filter((id) => !PRIORITY.includes(id)),
  ].slice(0, MAX_REDEPLOY);

  for (const siteId of ordered) {
    if (triggerRedeploy(siteId, urls)) {
      log.redeploys.push(siteId);
      if (!dryRun) {
        try {
          execSync("sleep 5");
        } catch {
          /* ignore */
        }
      }
    }
  }

  writeLog(log);
  console.log(`\n✓ 已触发 ${log.redeploys.length} 个站 redeploy（同步 Polar 密钥到 Vercel）\n`);
}

function writeLog(log) {
  const out = join(root, "analytics", "revenue-sprint-autofix-latest.json");
  writeFileSync(out, JSON.stringify(log, null, 2) + "\n");
}

main();
