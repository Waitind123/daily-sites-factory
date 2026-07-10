#!/usr/bin/env node
/**
 * 真实浏览器访客 E2E — Playwright 模拟未登录用户
 *
 * 与 verify-site-visitor.mjs（HTTP 冒烟）互补：
 * - 执行 JS、渲染 DOM、点击导航
 * - 验证可见文案（非仅 HTML 源码）
 *
 * 用法:
 *   npm run verify-visitor-e2e -- http://127.0.0.1:3099 feature-vote
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const baseUrl = (process.argv[2] || "").replace(/\/$/, "");
const siteId = process.argv[3];

if (!baseUrl || !siteId) {
  console.error("用法: node scripts/verify-site-visitor-e2e.mjs <base-url> <site-id>");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const routesFile = join(root, "scripts", "site-visitor-routes.json");
const routesConfig = JSON.parse(readFileSync(routesFile, "utf8"));
const paths = (routesConfig[siteId] || routesConfig.default).filter((p) => !p.startsWith("/api/"));

const errors = [];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: "zh-CN",
    userAgent: "daily-sites-factory-e2e/1.0",
  });

  console.log(`\n🎭 Playwright 访客 E2E ${siteId} @ ${baseUrl}\n`);

  for (const path of paths) {
    const page = await context.newPage();
    try {
      const res = await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded", timeout: 25000 });
      if (!res || !res.ok()) {
        errors.push(`${path} → HTTP ${res?.status() ?? "no response"}`);
        continue;
      }
      await page.waitForTimeout(500);
      const bodyText = await page.locator("body").innerText();
      if (bodyText.length < 80) {
        errors.push(`${path} → 可见内容过短`);
        continue;
      }
      if (/Application error|Internal Server Error/i.test(bodyText)) {
        errors.push(`${path} → 页面显示错误`);
        continue;
      }
      const nav = page.locator("header a, nav a").first();
      if (await nav.count()) {
        await nav.click({ timeout: 5000 }).catch(() => {});
      }
      console.log(`  ✓ ${path} (browser)`);
    } catch (err) {
      errors.push(`${path} → ${err.message}`);
    } finally {
      await page.close();
    }
  }

  // 中文 locale：设置 cookie 后检查可见英文
  const zhPage = await context.newPage();
  try {
    await context.addCookies([{ name: "site_locale", value: "zh", url: `${baseUrl}/` }]);
    await zhPage.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded", timeout: 25000 });
    const visible = await zhPage.locator("body").innerText();
    for (const s of ["How it works", "View pricing", "Welcome to"]) {
      if (visible.includes(s)) errors.push(`中文首页可见英文「${s}」`);
    }
    if (!errors.some((e) => e.includes("中文首页"))) {
      console.log("  ✓ / (中文 cookie, 可见文本)");
    }
  } catch (err) {
    errors.push(`中文首页 E2E → ${err.message}`);
  } finally {
    await zhPage.close();
    await browser.close();
  }

  if (errors.length) {
    console.error("\n❌ Playwright E2E 失败:\n");
    for (const e of errors) console.error(`  • ${e}`);
    process.exit(1);
  }
  console.log(`\n✓ Playwright E2E 全部通过 (${paths.length + 1} 项)\n`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
