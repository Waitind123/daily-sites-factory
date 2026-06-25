#!/usr/bin/env node
/**
 * 站点质量闸门 — push / 部署前必须通过
 *
 * 用法:
 *   node scripts/verify-site-quality.mjs <site-id>
 *   node scripts/verify-site-quality.mjs --all
 *
 * 来源: docs/AGENT-LESSONS.md（用户反馈一次，自动化永不再犯）
 */
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sitesDir = join(root, "sites");

const EXEMPT = [
  /node_modules/,
  /\.next/,
  /lib\/copy/,
  /lib\/i18n-shared/,
  /lib\/site-seo/,
  /lib\/seo\.ts$/,
  /lib\/data\.ts$/,
  /components\/JsonLd/,
  /README\.md$/,
  /\.shell\.tsx$/,
];

/** 用户反馈过的典型漏翻英文 — 出现在 UI 文件即失败 */
const BANNED_UI_STRINGS = [
  "How it works",
  "Core features",
  "Create a board",
  "Failed to create",
  "Welcome to ",
  "View pricing",
  "What indie hackers",
  "Stop guessing",
  "Feedback Boards",
  "Suggest a feature",
  "Submit idea",
  "Open boards",
  "Back to home",
];

const SKIP_LINE =
  /^\s*(\/\/|import |export type|export interface|className|@type|console\.|fetch\(|href=|src=|type:|interface )/;

function listFiles(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (EXEMPT.some((re) => re.test(p))) continue;
    const st = statSync(p);
    if (st.isDirectory()) listFiles(p, acc);
    else if (/\.(tsx|ts)$/.test(name)) acc.push(p);
  }
  return acc;
}

function read(path) {
  return existsSync(path) ? readFileSync(path, "utf8") : "";
}

function fail(errors, siteId, msg) {
  errors.push(`[${siteId}] ${msg}`);
}

function checkBannedStrings(siteId, siteDir, errors) {
  const uiFiles = listFiles(join(siteDir, "app")).concat(listFiles(join(siteDir, "components")));
  for (const file of uiFiles) {
    if (/lib\//.test(file) && !/components/.test(file)) continue;
    const lines = read(file).split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (SKIP_LINE.test(line)) continue;
      for (const banned of BANNED_UI_STRINGS) {
        if (line.includes(banned)) {
          fail(errors, siteId, `硬编码 UI 文案「${banned}」: ${file.replace(siteDir, "")}:${i + 1}`);
        }
      }
    }
  }
}

function checkHomePageI18n(siteId, siteDir, errors) {
  const page = read(join(siteDir, "app", "page.tsx"));
  if (!page) return;
  if (!page.includes("getLocale") && !page.includes("getHomeCopy")) {
    fail(errors, siteId, "app/page.tsx 必须使用 getLocale() + getHomeCopy()（禁止硬编码首页文案）");
  }
  if (!page.includes("async function HomePage") && !page.includes("async function Page")) {
    // allow default export async
  }
}

function checkJoinPageI18n(siteId, siteDir, errors) {
  const joinPage = join(siteDir, "app", "join", "page.tsx");
  if (!existsSync(joinPage)) return;
  const content = read(joinPage);
  if (!content.includes("getLocale") && !content.includes("getJoinCopy")) {
    fail(errors, siteId, "app/join/page.tsx 必须使用 getLocale() + getJoinCopy()");
  }
}

function checkClientLocaleProp(siteId, siteDir, errors) {
  const components = listFiles(join(siteDir, "components"));
  for (const file of components) {
    const content = read(file);
    if (!content.includes('"use client"')) continue;
    if (!/placeholder=|>\s*[A-Za-z]{4,}/.test(content)) continue;
    if (content.includes("locale:") || content.includes("locale,")) continue;
    if (/LanguageSwitcher|FeedbackSection/.test(file)) continue;
    if (/HomeHero/.test(file)) continue;
    fail(
      errors,
      siteId,
      `客户端组件含 UI 文案但未接收 locale prop: ${file.replace(siteDir, "")}`
    );
  }
}

function checkCopyBilingual(siteId, siteDir, errors) {
  const copyPath = join(siteDir, "lib", "copy.ts");
  if (!existsSync(copyPath)) {
    fail(errors, siteId, "缺少 lib/copy.ts（必须 en/zh 双语）");
    return;
  }
  const content = read(copyPath);
  if (!content.includes('"en"') && !content.includes("en:")) {
    fail(errors, siteId, "lib/copy.ts 缺少 en 文案");
  }
  if (!content.includes('"zh"') && !content.includes("zh:")) {
    fail(errors, siteId, "lib/copy.ts 缺少 zh 文案");
  }
  if (!content.includes("homeCopy")) {
    fail(errors, siteId, "lib/copy.ts 必须导出 homeCopy");
  }
}

function checkLayoutMetadata(siteId, siteDir, errors) {
  const layout = read(join(siteDir, "app", "layout.tsx"));
  if (!layout.includes("generateMetadata") && !layout.includes("buildLocaleMetadata")) {
    fail(errors, siteId, "app/layout.tsx 必须 generateMetadata + 按 locale 输出 title/description");
  }
}

function checkProductDemo(siteId, siteDir, errors) {
  const copy = read(join(siteDir, "lib", "copy.ts"));
  const page = read(join(siteDir, "app", "page.tsx"));
  const hasDemo =
    copy.includes("productDemo") ||
    page.includes("productDemo") ||
    page.includes("ProductDemo");
  if (!hasDemo) {
    fail(
      errors,
      siteId,
      "缺少产品演示区（copy.ts 需 productDemo + page 渲染，对标 nuwa/photoai）"
    );
  }
}

function checkApiErrorCodes(siteId, siteDir, errors) {
  const apiDir = join(siteDir, "app", "api");
  if (!existsSync(apiDir)) return;
  for (const file of listFiles(apiDir)) {
    const content = read(file);
    if (!content.includes("NextResponse.json")) continue;
    if (content.includes("apiError(")) continue;
    for (const m of content.matchAll(/error:\s*"([^"]+)"/g)) {
      const msg = m[1];
      // 机器码如 invalid_text 允许；含空格的英文句子禁止
      if (/^[a-z][a-z0-9_]*$/.test(msg)) continue;
      fail(
        errors,
        siteId,
        `API 禁止硬编码 error 英文字符串，请用 lib/api-errors.ts: ${file.replace(siteDir, "")} → "${msg}"`
      );
    }
  }
}

function verifySite(siteId) {
  const siteDir = join(sitesDir, siteId);
  const errors = [];
  if (!existsSync(siteDir)) {
    console.error(`站点不存在: ${siteId}`);
    process.exit(1);
  }

  checkCopyBilingual(siteId, siteDir, errors);
  checkHomePageI18n(siteId, siteDir, errors);
  checkJoinPageI18n(siteId, siteDir, errors);
  checkClientLocaleProp(siteId, siteDir, errors);
  checkLayoutMetadata(siteId, siteDir, errors);
  checkProductDemo(siteId, siteDir, errors);
  checkApiErrorCodes(siteId, siteDir, errors);
  checkBannedStrings(siteId, siteDir, errors);

  return errors;
}

const args = process.argv.slice(2);
const all = args.includes("--all");
const siteIds = all
  ? readdirSync(sitesDir).filter((n) => statSync(join(sitesDir, n)).isDirectory())
  : args.filter((a) => !a.startsWith("--"));

if (siteIds.length === 0) {
  console.error("用法: node scripts/verify-site-quality.mjs <site-id> | --all");
  process.exit(1);
}

let totalErrors = [];
for (const siteId of siteIds) {
  const errors = verifySite(siteId);
  if (errors.length) {
    totalErrors = totalErrors.concat(errors);
  } else {
    console.log(`✓ ${siteId}`);
  }
}

if (totalErrors.length) {
  console.error("\n❌ 站点质量检查失败:\n");
  for (const e of totalErrors) console.error(`  • ${e}`);
  console.error("\n修复指南: docs/AGENT-LESSONS.md · docs/UI-DESIGN-STANDARD.md");
  process.exit(1);
}

console.log(`\n全部通过 (${siteIds.length} 个站点)`);
