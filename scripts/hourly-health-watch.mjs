#!/usr/bin/env node
/**
 * 每小时生产环境健康巡检
 *
 * 分层测试:
 *   Tier-1 (4 站): 核心功能 + 付款 + 看板管道
 *   Tier-2 (其余): HTTP 冒烟 /api/trial + 首页
 *
 * 用法:
 *   node scripts/hourly-health-watch.mjs
 *   node scripts/hourly-health-watch.mjs --tier1-only
 *   node scripts/hourly-health-watch.mjs --json   # 仅输出 JSON
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, appendFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  TIER1_SITES,
  CONTACT_EMAIL,
  TINY_TEST_IMAGE,
  CHECKOUT_REDIRECT_HOSTS,
  DASHBOARD_REQUIRED_KEYS,
  REVENUE_JOIN_MARKERS,
} from "./lib/health-watch-config.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const urls = JSON.parse(readFileSync(join(root, "scripts/sites-deploy-urls.json"), "utf8"));
const routesConfig = JSON.parse(readFileSync(join(root, "scripts/site-visitor-routes.json"), "utf8"));

const tier1Only = process.argv.includes("--tier1-only");
const jsonOnly = process.argv.includes("--json");
const UA = "daily-sites-factory-health-watch/1.0";
const TIMEOUT = 20000;

const report = {
  at: new Date().toISOString(),
  tier1Only,
  summary: { pass: 0, warn: 0, fail: 0 },
  checks: [],
  failures: [],
};

function record(siteId, check, status, detail = "", severity = status) {
  report.checks.push({ siteId, check, status, detail, severity, at: new Date().toISOString() });
  if (status === "pass") report.summary.pass++;
  else if (status === "warn") report.summary.warn++;
  else report.summary.fail++;

  if (status === "fail") {
    report.failures.push({ siteId, check, detail, severity });
  }
}

async function fetchSafe(url, opts = {}) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, ...(opts.headers || {}) },
    redirect: opts.redirect ?? "follow",
    signal: AbortSignal.timeout(opts.timeout || TIMEOUT),
    method: opts.method || "GET",
    body: opts.body,
  });
  return res;
}

function baseUrl(siteId) {
  return String(urls[siteId] || "").replace(/\/$/, "");
}

async function checkPage(siteId, path, extra = {}) {
  const base = baseUrl(siteId);
  if (!base) {
    record(siteId, `page:${path}`, "fail", "无生产 URL");
    return null;
  }
  try {
    const res = await fetchSafe(`${base}${path}`, extra);
    if (!res.ok) {
      record(siteId, `page:${path}`, "fail", `HTTP ${res.status}`, "page_http_error");
      return null;
    }
    const html = await res.text();
    if (html.includes("Application error") || html.includes("Internal Server Error")) {
      record(siteId, `page:${path}`, "fail", "页面含 Application error", "page_app_error");
      return null;
    }
    if (html.length < 150) {
      record(siteId, `page:${path}`, "fail", "页面内容过短", "page_http_error");
      return null;
    }
    record(siteId, `page:${path}`, "pass");
    return html;
  } catch (err) {
    record(siteId, `page:${path}`, "fail", err.message, "site_unreachable");
    return null;
  }
}

async function checkTrialApi(siteId) {
  const base = baseUrl(siteId);
  if (!base) return;
  try {
    const res = await fetchSafe(`${base}/api/trial`);
    if (!res.ok) {
      record(siteId, "api:trial", "fail", `HTTP ${res.status}`, "trial_api_broken");
      return;
    }
    const data = await res.json();
    if (typeof data.remaining !== "number" && !data.isMember) {
      record(siteId, "api:trial", "fail", `格式异常 ${JSON.stringify(data).slice(0, 80)}`, "trial_api_broken");
      return;
    }
    record(siteId, "api:trial", "pass");
  } catch (err) {
    record(siteId, "api:trial", "fail", err.message, "trial_api_broken");
  }
}

async function checkCheckoutProbe(siteId) {
  const base = baseUrl(siteId);
  if (!base) return;
  try {
    const res = await fetchSafe(`${base}/api/checkout`);
    if (!res.ok) {
      record(siteId, "payment:checkout-probe", "fail", `HTTP ${res.status}`, "checkout_probe_fail");
      return;
    }
    const data = await res.json();
    if (data.status !== "ok" && !("demo" in data)) {
      record(siteId, "payment:checkout-probe", "fail", JSON.stringify(data).slice(0, 100), "checkout_probe_fail");
      return;
    }
    if (TIER1_SITES.includes(siteId) && data.demo === true) {
      record(siteId, "payment:checkout-probe", "warn", "收款站处于 demo 模式", "checkout_demo_revenue");
    } else {
      record(siteId, "payment:checkout-probe", "pass");
    }
  } catch (err) {
    record(siteId, "payment:checkout-probe", "fail", err.message, "checkout_probe_fail");
  }
}

async function checkCheckoutRedirect(siteId) {
  const base = baseUrl(siteId);
  if (!base) return;
  try {
    let url = `${base}/api/checkout?go=1`;
    for (let hop = 0; hop < 6; hop++) {
      const res = await fetchSafe(url, { redirect: "manual" });
      if (res.status >= 300 && res.status < 400) {
        const locRaw = res.headers.get("location") || "";
        const loc = locRaw.startsWith("http") ? locRaw : new URL(locRaw, url).href;
        if (CHECKOUT_REDIRECT_HOSTS.some((h) => loc.includes(h))) {
          record(siteId, "payment:checkout-redirect", "pass", loc.slice(0, 80));
          return;
        }
        if (loc.includes("/success") || loc.includes("demo=true")) {
          record(siteId, "payment:checkout-redirect", "pass", "demo success");
          return;
        }
        if (loc.includes("checkout-bridge") || loc.includes("/api/checkout-bridge")) {
          url = loc;
          continue;
        }
        record(siteId, "payment:checkout-redirect", "fail", `异常跳转: ${loc.slice(0, 120)}`, "checkout_redirect_fail");
        return;
      }
      record(
        siteId,
        "payment:checkout-redirect",
        "fail",
        `期望 302，实际 ${res.status}（hop ${hop}）`,
        "checkout_redirect_fail"
      );
      return;
    }
    record(siteId, "payment:checkout-redirect", "fail", "跳转链路过长", "checkout_redirect_fail");
  } catch (err) {
    record(siteId, "payment:checkout-redirect", "fail", err.message, "checkout_redirect_fail");
  }
}

async function checkAiHeadshotsGenerate() {
  const siteId = "ai-headshots";
  const base = baseUrl(siteId);
  try {
    const res = await fetchSafe(`${base}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: TINY_TEST_IMAGE, style: "corporate" }),
      timeout: 180000,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok || !data.url) {
      record(siteId, "feature:generate", "fail", JSON.stringify(data).slice(0, 120), "generate_api_fail");
      return;
    }
    if (data.demo) {
      record(
        siteId,
        "feature:generate",
        "fail",
        "REPLICATE_API_TOKEN 未配置 — 仅返回 demo SVG，无法真实生成",
        "generate_demo_mode"
      );
      return;
    }
    record(siteId, "feature:generate", "pass", "live AI");
  } catch (err) {
    record(siteId, "feature:generate", "fail", err.message, "generate_api_fail");
  }
}

async function checkFeatureVoteBoards() {
  const siteId = "feature-vote";
  const base = baseUrl(siteId);
  try {
    const res = await fetchSafe(`${base}/api/boards`);
    if (!res.ok) {
      record(siteId, "feature:boards", "fail", `HTTP ${res.status}`, "boards_api_fail");
      return;
    }
    const data = await res.json();
    if (!Array.isArray(data.boards) && !Array.isArray(data)) {
      record(siteId, "feature:boards", "fail", "boards 非数组", "boards_api_fail");
      return;
    }
    record(siteId, "feature:boards", "pass");
  } catch (err) {
    record(siteId, "feature:boards", "fail", err.message, "boards_api_fail");
  }
}

async function checkIntercomPulse() {
  const siteId = "intercom-pulse";
  const base = baseUrl(siteId);

  try {
    const res = await fetchSafe(`${base}/api/dashboard?preset=today`);
    if (!res.ok) {
      record(siteId, "feature:dashboard", "fail", `HTTP ${res.status}`, "dashboard_api_fail");
      return;
    }
    const data = await res.json();
    const missing = DASHBOARD_REQUIRED_KEYS.filter((k) => !(k in data));
    if (missing.length) {
      record(siteId, "feature:dashboard", "fail", `缺少字段: ${missing.join(", ")}`, "dashboard_stale_schema");
    } else {
      record(siteId, "feature:dashboard", "pass");
    }
  } catch (err) {
    record(siteId, "feature:dashboard", "fail", err.message, "dashboard_api_fail");
  }

  try {
    const res = await fetchSafe(`${base}/api/tickets`);
    if (!res.ok) {
      record(siteId, "feature:tickets", "fail", `HTTP ${res.status}`, "tickets_api_fail");
    } else {
      record(siteId, "feature:tickets", "pass");
    }
  } catch (err) {
    record(siteId, "feature:tickets", "fail", err.message, "tickets_api_fail");
  }

  // 埋点 → 看板管道（轻量探测，不等待 PV 变化）
  try {
    const visitorId = `health-watch-${Date.now()}`;
    const collectRes = await fetchSafe(`${base}/api/collect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: baseUrl("feature-vote"),
      },
      body: JSON.stringify({ siteId: "feature-vote", type: "pageview", visitorId }),
    });
    const body = await collectRes.json().catch(() => ({}));
    if (!collectRes.ok || !body.ok) {
      record(siteId, "feature:collect", "fail", JSON.stringify(body).slice(0, 100), "collect_pipeline_fail");
    } else {
      record(siteId, "feature:collect", "pass");
    }
  } catch (err) {
    record(siteId, "feature:collect", "fail", err.message, "collect_pipeline_fail");
  }
}

function checkContactAndJoin(siteId, homeHtml, joinHtml) {
  if (homeHtml && !homeHtml.includes(CONTACT_EMAIL)) {
    record(siteId, "ux:contact-email", "warn", "首页未找到联系邮箱", "missing_contact_email");
  } else if (homeHtml) {
    record(siteId, "ux:contact-email", "pass");
  }

  if (joinHtml) {
    const hasCta = REVENUE_JOIN_MARKERS.some((m) => joinHtml.includes(m));
    if (!hasCta) {
      record(siteId, "ux:join-cta", "fail", "join 页缺少付款入口", "missing_join_cta");
    } else {
      record(siteId, "ux:join-cta", "pass");
    }
  }
}

function checkCrossSell(siteId, homeHtml) {
  if (TIER1_SITES.includes(siteId) || siteId === "ai-headshots") return;
  if (!homeHtml) return;
  const has =
    homeHtml.includes("ai-headshots-navy.vercel.app") ||
    homeHtml.includes("crosssell") ||
    homeHtml.includes("AI professional headshots") ||
    homeHtml.includes("AI 职业证件照");
  if (!has) {
    record(siteId, "ux:crosssell", "warn", "未检测到交叉推广条", "missing_crosssell");
  } else {
    record(siteId, "ux:crosssell", "pass");
  }
}

async function runTier1(siteId) {
  const paths = routesConfig[siteId] || routesConfig.default;
  const homeHtml = await checkPage(siteId, "/");
  await checkPage(siteId, "/join");
  const joinHtml = await checkPage(siteId, "/join");

  for (const p of paths) {
    if (p === "/" || p === "/join") continue;
    if (p.startsWith("/api/")) continue;
    await checkPage(siteId, p);
  }

  await checkTrialApi(siteId);
  await checkCheckoutProbe(siteId);
  await checkCheckoutRedirect(siteId);
  checkContactAndJoin(siteId, homeHtml, joinHtml);

  if (siteId === "ai-headshots") {
    await checkAiHeadshotsGenerate();
    await checkPage(siteId, "/studio");
  }
  if (siteId === "feature-vote") {
    await checkFeatureVoteBoards();
    checkCrossSell(siteId, homeHtml);
  }
  if (siteId === "intercom-pulse") {
    await checkIntercomPulse();
    await checkPage(siteId, "/factory-dashboard");
  }
}

async function runTier2(siteId) {
  if (TIER1_SITES.includes(siteId)) return;
  const homeHtml = await checkPage(siteId, "/");
  await checkTrialApi(siteId);
  checkCrossSell(siteId, homeHtml);
}

async function runBatch(items, fn, concurrency = 8) {
  for (let i = 0; i < items.length; i += concurrency) {
    await Promise.all(items.slice(i, i + concurrency).map(fn));
  }
}

function saveReport() {
  const analyticsDir = join(root, "analytics");
  mkdirSync(analyticsDir, { recursive: true });
  const latestPath = join(analyticsDir, "health-watch-latest.json");
  writeFileSync(latestPath, JSON.stringify(report, null, 2) + "\n");

  const historyPath = join(analyticsDir, "health-watch-history.jsonl");
  appendFileSync(historyPath, JSON.stringify(report) + "\n");

  const intercomData = join(root, "sites/intercom-pulse/data/health-watch-latest.json");
  mkdirSync(dirname(intercomData), { recursive: true });
  writeFileSync(intercomData, JSON.stringify(report, null, 2) + "\n");
}

async function main() {
  if (!jsonOnly) {
    console.log(`\n🏥 健康巡检开始 ${report.at}\n`);
    console.log(`Tier-1 深度: ${TIER1_SITES.join(", ")}`);
  }

  for (const siteId of TIER1_SITES) {
    if (!jsonOnly) console.log(`\n▶ [T1] ${siteId}`);
    await runTier1(siteId);
  }

  if (!tier1Only) {
    const tier2 = Object.keys(urls).filter((id) => !TIER1_SITES.includes(id));
    if (!jsonOnly) console.log(`\n▶ [T2] 轻量巡检 ${tier2.length} 站...`);
    await runBatch(tier2, (id) => runTier2(id));
  }

  saveReport();

  if (jsonOnly) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(`\n📊 结果: ✅ ${report.summary.pass}  ⚠️ ${report.summary.warn}  ❌ ${report.summary.fail}`);
    if (report.failures.length) {
      console.log("\n失败项:");
      for (const f of report.failures) {
        console.log(`  • [${f.siteId}] ${f.check}: ${f.detail}`);
      }
    }
    console.log(`\n报告 → analytics/health-watch-latest.json\n`);
  }

  process.exit(report.summary.fail > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("巡检崩溃:", err);
  process.exit(2);
});
