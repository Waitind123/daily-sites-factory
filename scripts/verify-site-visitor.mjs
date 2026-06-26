#!/usr/bin/env node
/**
 * 访客模式冒烟测试 — 模拟未登录用户访问核心路径
 *
 * 用法:
 *   node scripts/verify-site-visitor.mjs <base-url> <site-id>
 *
 * 部署前在本地跑:
 *   cd sites/<id> && npm run build && npx next start -p 3099 &
 *   node scripts/verify-site-visitor.mjs http://127.0.0.1:3099 <site-id>
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const baseUrl = (process.argv[2] || "").replace(/\/$/, "");
const siteId = process.argv[3];

if (!baseUrl || !siteId) {
  console.error("用法: node scripts/verify-site-visitor.mjs <base-url> <site-id>");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const routesFile = join(root, "scripts", "site-visitor-routes.json");
const routesConfig = JSON.parse(readFileSync(routesFile, "utf8"));
const paths = routesConfig[siteId] || routesConfig.default;

const errors = [];

async function checkPath(path) {
  const url = `${baseUrl}${path}`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "daily-sites-factory-visitor-test/1.0" },
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) {
      errors.push(`${path} → HTTP ${res.status}`);
      return;
    }
    const ct = res.headers.get("content-type") || "";
    if (path.startsWith("/api/")) {
      if (!ct.includes("json")) {
        errors.push(`${path} → 非 JSON 响应`);
        return;
      }
      const data = await res.json();
      if (path.endsWith("/trial") && typeof data.remaining !== "number" && !data.isMember) {
        errors.push(`${path} → trial API 格式异常: ${JSON.stringify(data).slice(0, 120)}`);
      }
      console.log(`  ✓ ${path} (API)`);
      return;
    }
    const html = await res.text();
    if (html.length < 200) {
      errors.push(`${path} → 页面内容过短`);
      return;
    }
    if (html.includes("Application error") || html.includes("Internal Server Error")) {
      errors.push(`${path} → 页面含错误信息`);
      return;
    }
    console.log(`  ✓ ${path}`);
  } catch (err) {
    errors.push(`${path} → ${err.message}`);
  }
}

async function checkZhHomepage() {
  const url = `${baseUrl}/`;
  try {
    const res = await fetch(url, {
      headers: {
        Cookie: "site_locale=zh",
        "User-Agent": "daily-sites-factory-visitor-test/1.0",
      },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) {
      errors.push(`中文首页 → HTTP ${res.status}`);
      return;
    }
    const html = await res.text();
    const banned = ["How it works", "Create a board", "View pricing", "Welcome to"];
    for (const s of banned) {
      if (html.includes(s)) {
        errors.push(`中文首页仍含英文「${s}」`);
      }
    }
    if (!errors.some((e) => e.startsWith("中文首页"))) {
      console.log("  ✓ / (中文 cookie)");
    }
  } catch (err) {
    errors.push(`中文首页 → ${err.message}`);
  }
}

console.log(`\n🧪 访客测试 ${siteId} @ ${baseUrl}\n`);

for (const p of paths) {
  await checkPath(p);
}
await checkZhHomepage();

if (errors.length) {
  console.error("\n❌ 访客测试失败:\n");
  for (const e of errors) console.error(`  • ${e}`);
  console.error("\n修复后重新 build + 测试，通过才能部署公网。");
  process.exit(1);
}

console.log(`\n✓ 访客测试全部通过 (${paths.length + 1} 项)\n`);
