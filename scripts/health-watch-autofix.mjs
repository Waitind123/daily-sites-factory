#!/usr/bin/env node
/**
 * 健康巡检自动修复 — 根据 hourly-health-watch 报告执行修复动作
 *
 * 修复策略（由轻到重）:
 *   1. 运行同步脚本（Polar/页脚/交叉推广）
 *   2. 提交代码变更（如有）
 *   3. 触发 redeploy（GitHub Actions → deploy-site.yml）
 *
 * 用法:
 *   node scripts/health-watch-autofix.mjs
 *   node scripts/health-watch-autofix.mjs --dry-run
 *   node scripts/health-watch-autofix.mjs --report analytics/health-watch-latest.json
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync, execSync } from "child_process";
import { AUTOFIX_ACTIONS, SYNC_SCRIPTS } from "./lib/health-watch-config.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dryRun = process.argv.includes("--dry-run");
const reportArg = process.argv.find((a) => a.startsWith("--report="));
const reportPath = reportArg
  ? reportArg.split("=")[1]
  : join(root, "analytics/health-watch-latest.json");

if (!existsSync(reportPath)) {
  console.error(`报告不存在: ${reportPath}，请先运行 hourly-health-watch.mjs`);
  process.exit(1);
}

const report = JSON.parse(readFileSync(reportPath, "utf8"));
const urls = JSON.parse(readFileSync(join(root, "scripts/sites-deploy-urls.json"), "utf8"));

const autofixLog = {
  at: new Date().toISOString(),
  dryRun,
  attempted: [],
  succeeded: [],
  failed: [],
  redeploys: [],
  commits: [],
};

function log(msg) {
  console.log(dryRun ? `[dry-run] ${msg}` : msg);
}

function runCmd(cmd, args, label) {
  log(`→ ${label}: ${cmd} ${args.join(" ")}`);
  if (dryRun) return { ok: true, stdout: "" };
  const r = spawnSync(cmd, args, { cwd: root, encoding: "utf8", timeout: 300000 });
  if (r.status !== 0) {
    throw new Error(`${label} 失败: ${(r.stderr || r.stdout || "").slice(0, 300)}`);
  }
  return { ok: true, stdout: r.stdout || "" };
}

function collectActions() {
  const scriptActions = new Set();
  const redeploySites = new Set();

  for (const f of report.failures || []) {
    const checkKey = f.severity || mapCheckToKey(f.check, f.detail);
    const actions = AUTOFIX_ACTIONS[checkKey] || ["redeploy"];
    for (const action of actions) {
      if (action === "redeploy") redeploySites.add(f.siteId);
      else scriptActions.add(action);
    }
  }

  // 警告项也尝试轻量修复
  for (const c of report.checks || []) {
    if (c.status !== "warn") continue;
    const key = c.severity || mapCheckToKey(c.check, c.detail);
    const actions = AUTOFIX_ACTIONS[key] || [];
    for (const action of actions) {
      if (action === "redeploy") redeploySites.add(c.siteId);
      else scriptActions.add(action);
    }
  }

  return { scriptActions: [...scriptActions], redeploySites: [...redeploySites] };
}

function mapCheckToKey(check, detail) {
  const map = {
    "page:/": "page_http_error",
    "page:/join": "missing_join_cta",
    "api:trial": "trial_api_broken",
    "payment:checkout-probe": detail.includes("demo") ? "checkout_demo_revenue" : "checkout_probe_fail",
    "payment:checkout-redirect": "checkout_redirect_fail",
    "feature:generate": "generate_api_fail",
    "feature:boards": "boards_api_fail",
    "feature:dashboard": "dashboard_api_fail",
    "feature:tickets": "tickets_api_fail",
    "feature:collect": "collect_pipeline_fail",
    "ux:contact-email": "missing_contact_email",
    "ux:join-cta": "missing_join_cta",
    "ux:crosssell": "missing_crosssell",
  };
  return map[check] || check;
}

function gitHasChanges() {
  if (dryRun) return false;
  const r = spawnSync("git", ["status", "--porcelain"], { cwd: root, encoding: "utf8" });
  return Boolean(r.stdout?.trim());
}

function commitFixes(message) {
  if (dryRun || !gitHasChanges()) return null;
  execSync("git add -A sites/ templates/ factory-lib/ scripts/", { cwd: root });
  execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, { cwd: root });
  const sha = execSync("git rev-parse --short HEAD", { cwd: root, encoding: "utf8" }).trim();
  autofixLog.commits.push({ sha, message });
  log(`✓ 已提交修复 ${sha}`);
  return sha;
}

function pushChanges() {
  if (dryRun || !autofixLog.commits.length) return;
  try {
    execSync("git push origin HEAD", { cwd: root, stdio: "pipe" });
    log("✓ 已 push 修复提交");
  } catch (err) {
    autofixLog.failed.push({ action: "push", error: err.message });
    log(`⚠ push 失败: ${err.message}`);
  }
}

function triggerRedeploy(siteId) {
  log(`→ redeploy ${siteId}`);
  autofixLog.attempted.push({ action: "redeploy", siteId });
  if (dryRun) {
    autofixLog.succeeded.push({ action: "redeploy", siteId });
    return;
  }
  try {
    execSync(`gh workflow run deploy-site.yml -f site_id="${siteId}"`, {
      cwd: root,
      stdio: "pipe",
      timeout: 30000,
    });
    autofixLog.redeploys.push(siteId);
    autofixLog.succeeded.push({ action: "redeploy", siteId });
    log(`✓ 已触发 deploy-site → ${siteId}`);
  } catch (err) {
    autofixLog.failed.push({ action: "redeploy", siteId, error: err.message });
    log(`⚠ redeploy 触发失败 ${siteId}: ${err.message}`);
  }
}

async function main() {
  console.log(`\n🔧 健康巡检自动修复 ${autofixLog.at}${dryRun ? " (dry-run)" : ""}\n`);
  console.log(`报告: ${report.failures?.length || 0} 失败, ${report.summary?.warn || 0} 警告\n`);

  const { scriptActions, redeploySites } = collectActions();

  if (!scriptActions.length && !redeploySites.length) {
    console.log("✓ 无需修复\n");
    writeFixLog();
    return;
  }

  // 1. 同步脚本
  const scriptOrder = ["sync-polar", "sync-footer", "inject-contact-bar", "sync-promo", "patch-promo"];
  for (const action of scriptOrder) {
    if (!scriptActions.includes(action)) continue;
    const cmd = SYNC_SCRIPTS[action];
    if (!cmd) continue;
    try {
      runCmd(cmd[0], cmd.slice(1), action);
      autofixLog.succeeded.push({ action });
    } catch (err) {
      autofixLog.failed.push({ action, error: err.message });
      log(`⚠ ${err.message}`);
    }
  }

  if (scriptActions.includes("sync-promo")) {
    try {
      runCmd("node", ["scripts/patch-promo-layouts.mjs"], "patch-promo");
    } catch (err) {
      autofixLog.failed.push({ action: "patch-promo", error: err.message });
    }
  }

  // 2. 提交代码修复
  if (gitHasChanges()) {
    commitFixes("fix(health-watch): 自动同步 Polar/页脚/交叉推广 [skip deploy]");
    pushChanges();
    // 同步脚本可能影响多站 — 优先 redeploy 收入站
    for (const id of ["ai-headshots", "intercom-pulse", "feature-vote"]) {
      redeploySites.push(id);
    }
  }

  // 3. Redeploy（去重，收入站优先，限 4 次/轮避免打满 Vercel 配额）
  const unique = [...new Set(redeploySites)];
  const priority = ["ai-headshots", "intercom-pulse", "feature-vote", "team-headshots"];
  const ordered = [
    ...priority.filter((id) => unique.includes(id)),
    ...unique.filter((id) => !priority.includes(id)),
  ].slice(0, 4);

  for (const siteId of ordered) {
    if (!urls[siteId]) continue;
    triggerRedeploy(siteId);
  }

  // 4. 收入卡点：Tier-1 demo 收款站 → 同步 Polar 并 redeploy 高流量站
  const hasDemoCheckout =
    (report.failures || []).some((f) => f.severity === "checkout_demo_revenue" || f.detail?.includes("demo")) ||
    (report.checks || []).some((c) => c.severity === "checkout_demo_revenue" || c.detail?.includes("demo 模式"));
  if (hasDemoCheckout) {
    log("→ revenue-sprint-autofix (demo checkout detected)");
    try {
      const env = { ...process.env, SPRINT_AUTOFIX_MAX_REDEPLOY: "2" };
      if (!dryRun) {
        spawnSync("node", ["scripts/revenue-sprint-autofix.mjs"], {
          cwd: root,
          encoding: "utf8",
          timeout: 120000,
          env,
        });
      }
      autofixLog.succeeded.push({ action: "revenue-sprint-autofix" });
    } catch (err) {
      autofixLog.failed.push({ action: "revenue-sprint-autofix", error: err.message });
    }
  }

  writeFixLog();
  console.log(`\n修复完成: 成功 ${autofixLog.succeeded.length}, 失败 ${autofixLog.failed.length}\n`);
}

function writeFixLog() {
  const out = join(root, "analytics/health-watch-autofix-latest.json");
  writeFileSync(out, JSON.stringify(autofixLog, null, 2) + "\n");
}

main().catch((err) => {
  console.error("自动修复崩溃:", err);
  process.exit(2);
});
