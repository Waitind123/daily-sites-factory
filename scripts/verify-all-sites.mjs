#!/usr/bin/env node
/**
 * 批量测试全部站点 — HTTP 冒烟 + 可选 Playwright E2E
 *
 * 用法:
 *   node scripts/verify-all-sites.mjs                 # 生产 URL HTTP 冒烟
 *   node scripts/verify-all-sites.mjs --local         # 本地 build + HTTP + E2E
 *   node scripts/verify-all-sites.mjs feature-vote    # 单站
 *   RUN_E2E=1 node scripts/verify-all-sites.mjs       # 生产 URL + Playwright
 */
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawn, execSync } from "child_process";
import { recordLocalEvent } from "./lib/rollup-local.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sitesDir = join(root, "sites");
const state = JSON.parse(readFileSync(join(root, "state.json"), "utf8"));
const deployUrlsPath = join(root, "scripts", "sites-deploy-urls.json");
const deployUrls = existsSync(deployUrlsPath)
  ? JSON.parse(readFileSync(deployUrlsPath, "utf8"))
  : {};

function siteUrl(siteId) {
  if (deployUrls[siteId]) return deployUrls[siteId].replace(/\/$/, "");
  const fromHistory = (state.history || []).find((h) => h.verticalId === siteId);
  return fromHistory?.url?.replace(/\/$/, "") || null;
}

const args = process.argv.slice(2);
const local = args.includes("--local");
const skipE2e = args.includes("--http-only");
const filterArg = args.find((a) => !a.startsWith("--"));

function allSiteIds() {
  const ids = readdirSync(sitesDir).filter(
    (d) => !d.startsWith(".") && d !== "factory-dashboard" && statSync(join(sitesDir, d)).isDirectory()
  );
  return filterArg ? ids.filter((id) => id === filterArg) : ids;
}

function runVisitor(baseUrl, siteId) {
  execSync(`node scripts/verify-site-visitor.mjs "${baseUrl}" "${siteId}"`, {
    cwd: root,
    stdio: "pipe",
    timeout: 120000,
  });
}

function runE2e(baseUrl, siteId) {
  execSync(`node scripts/verify-site-visitor-e2e.mjs "${baseUrl}" "${siteId}"`, {
    cwd: root,
    stdio: "pipe",
    timeout: 180000,
  });
}

function buildSite(siteId) {
  execSync("npm run build", { cwd: join(sitesDir, siteId), stdio: "pipe", timeout: 300000 });
}

function startServer(siteId) {
  return spawn("npx", ["next", "start", "-p", "3099"], {
    cwd: join(sitesDir, siteId),
    stdio: "ignore",
    detached: true,
  });
}

async function main() {
  const results = { pass: [], fail: [] };

  for (const siteId of allSiteIds()) {
    process.stdout.write(`\n▶ ${siteId} ... `);
    try {
      execSync(`node scripts/verify-site-quality.mjs "${siteId}"`, { cwd: root, stdio: "pipe" });

      let baseUrl = siteUrl(siteId);

      if (local) {
        buildSite(siteId);
        baseUrl = "http://127.0.0.1:3099";
        const proc = startServer(siteId);
        await new Promise((r) => setTimeout(r, 8000));
        try {
          runVisitor(baseUrl, siteId);
          if (!skipE2e) runE2e(baseUrl, siteId);
        } finally {
          try {
            process.kill(-proc.pid, "SIGTERM");
          } catch {
            /* ignore */
          }
        }
      } else if (baseUrl) {
        runVisitor(baseUrl, siteId);
        if (!skipE2e && process.env.RUN_E2E === "1") runE2e(baseUrl, siteId);
      } else {
        throw new Error("无生产 URL（state.json 无记录）");
      }

      results.pass.push(siteId);
      if (baseUrl) {
        recordLocalEvent({
          siteId,
          type: "pageview",
          visitorId: local ? "ci-local-smoke" : "ci-prod-smoke",
          url: baseUrl,
        });
      }
      console.log("✓");
    } catch (err) {
      const msg = err.stderr?.toString() || err.stdout?.toString() || err.message || String(err);
      results.fail.push({ siteId, msg: msg.slice(-500) });
      console.log("✗");
    }
  }

  console.log(`\n========== 结果 ==========`);
  console.log(`通过: ${results.pass.length}`);
  console.log(`失败: ${results.fail.length}`);
  if (results.fail.length) {
    console.log("\n失败详情:");
    for (const f of results.fail) {
      console.log(`\n--- ${f.siteId} ---\n${f.msg}`);
    }
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
