#!/usr/bin/env node
/**
 * 每日全渠道营销 — Reddit + X + SEO + 国内平台
 *
 * 全自动: Reddit, X (需 API Token), SEO (IndexNow)
 * 国内平台: 生成文案 → CN_POST_WEBHOOK_URL 转发 (Make/n8n 接小红书/知乎/抖音)
 *
 * 用法: node scripts/marketing-daily.mjs [--dry-run] [--force] [--status]
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { shouldPostNow } from "./lib/social-copy.mjs";
import { generateAllCnPosts } from "./lib/cn-copy.mjs";
import { postViaWebhook, isCnWebhookConfigured } from "./lib/cn-post.mjs";
import { isXConfigured, postTweet } from "./lib/x-api.mjs";
import { generateRedditPost, generateXPost } from "./lib/social-copy.mjs";
import { getRedditAccessToken, submitRedditPost, getRedditMe } from "./lib/reddit-api.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const statePath = join(root, "analytics", "marketing-daily-state.json");
const cnOutDir = join(root, "analytics", "promo", "cn-daily");
const dryRun = process.argv.includes("--dry-run");
const force = process.argv.includes("--force");
const showStatus = process.argv.includes("--status");
const enabled = process.env.SOCIAL_PROMO_ENABLED === "true";

function loadState() {
  if (!existsSync(statePath)) {
    return { history: [], lastPostedAt: null, lastPostedDay: null, todaySchedule: null };
  }
  return JSON.parse(readFileSync(statePath, "utf8"));
}

function saveState(state) {
  const dir = join(root, "analytics");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(statePath, JSON.stringify(state, null, 2) + "\n");
}

async function notifyFeishu(lines) {
  const webhook = process.env.FEISHU_WEBHOOK_URL;
  if (!webhook) return;
  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ msg_type: "text", content: { text: lines.join("\n") } }),
    });
  } catch {
    /* ignore */
  }
}

function printStatus() {
  console.log("\n📋 每日全渠道营销状态\n");
  const items = [
    ["SEO (IndexNow)", "✅ 无需 Secret，每日自动推送"],
    [
      "Reddit",
      process.env.REDDIT_REFRESH_TOKEN ? "✅ 已配置" : "⬜ 缺 REDDIT_*",
    ],
    ["X (Twitter)", isXConfigured() ? "✅ 已配置" : "⬜ 缺 X_OAUTH2_ACCESS_TOKEN 或 X_API_*"],
    [
      "小红书/知乎/抖音",
      isCnWebhookConfigured()
        ? "✅ Webhook 已配置 — 自动转发"
        : "⬜ 缺 CN_POST_WEBHOOK_URL（见 docs/MARKETING-DAILY.md）",
    ],
  ];
  for (const [name, st] of items) console.log(`${st.startsWith("✅") ? "✅" : "⬜"} ${name}: ${st}`);
  console.log(`\n总开关 SOCIAL_PROMO_ENABLED: ${enabled ? "true ✅" : "未设 ⚠"}\n`);
}

async function runSeo() {
  console.log("\n📡 SEO — IndexNow 推送（收款站优先 + 全站）...");
  const KEY = process.env.INDEXNOW_KEY || "dailysitesfactory2026key8f3a2b1c";
  const priority = [
    "https://ai-headshots-navy.vercel.app/",
    "https://ai-headshots-navy.vercel.app/join",
    "https://ai-headshots-navy.vercel.app/studio",
  ];
  for (const endpoint of ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"]) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          host: "ai-headshots-navy.vercel.app",
          key: KEY,
          keyLocation: "https://ai-headshots-navy.vercel.app/indexnow-key.txt",
          urlList: priority,
        }),
        signal: AbortSignal.timeout(30000),
      });
      console.log(`   收款站 → ${endpoint.split("/")[2]} ${res.status}`);
    } catch (e) {
      console.warn(`   ${endpoint} fail`);
    }
  }
  try {
    execSync("node scripts/submit-indexnow.mjs", { cwd: root, stdio: "inherit" });
  } catch (e) {
    console.warn("全站 IndexNow 部分失败:", e.message);
  }
  return { platform: "SEO IndexNow", url: "https://ai-headshots-navy.vercel.app", title: "IndexNow submitted" };
}

async function runReddit(state) {
  if (!process.env.REDDIT_REFRESH_TOKEN) {
    console.log("⚠ Reddit 未配置 — 跳过");
    return null;
  }
  const post = generateRedditPost(state);
  const accessToken = await getRedditAccessToken({
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN,
  });
  const me = await getRedditMe(accessToken);
  const result = await submitRedditPost({
    accessToken,
    subreddit: post.subreddit,
    title: post.title,
    body: post.body,
    kind: "self",
  });
  return {
    platform: `Reddit r/${post.subreddit}`,
    url: result.url,
    title: post.title,
    hash: post.hash,
    joinUrl: post.joinUrl,
  };
}

async function runX(state) {
  if (!isXConfigured()) {
    console.log("⚠ X 未配置 — 跳过");
    return null;
  }
  const post = generateXPost(state);
  const result = await postTweet(post.text);
  return {
    platform: "X",
    url: result.url,
    title: post.text.slice(0, 80),
    hash: post.hash,
    joinUrl: post.joinUrl,
  };
}

async function runCnPlatforms() {
  const posts = generateAllCnPosts();
  if (!existsSync(cnOutDir)) mkdirSync(cnOutDir, { recursive: true });

  const day = new Date().toISOString().slice(0, 10);
  const md = [
    `# 国内平台今日文案 ${day}`,
    "",
    "## 小红书",
    `**标题:** ${posts.xiaohongshu.title}`,
    "",
    posts.xiaohongshu.body,
    "",
    `标签: ${posts.xiaohongshu.tags.join(" ")}`,
    "",
    "## 知乎",
    `**标题:** ${posts.zhihu.title}`,
    "",
    posts.zhihu.body,
    "",
    "## 抖音",
    `**文案:** ${posts.douyin.caption}`,
    "",
    `**脚本:** ${posts.douyin.script}`,
    "",
  ].join("\n");
  writeFileSync(join(cnOutDir, `${day}.md`), md);
  writeFileSync(join(cnOutDir, "latest.json"), JSON.stringify(posts, null, 2) + "\n");
  console.log(`\n📝 国内文案 → analytics/promo/cn-daily/${day}.md`);

  const results = [];
  for (const [key, post] of Object.entries(posts)) {
    const payload =
      key === "douyin"
        ? { platform: "douyin", caption: post.caption, script: post.script, link: post.link }
        : { platform: key, title: post.title, body: post.body, tags: post.tags, link: post.link };

    if (dryRun || !enabled) {
      console.log(`   [预览] ${post.platform}: ${(post.title || post.caption || "").slice(0, 40)}...`);
      continue;
    }

    const r = await postViaWebhook(payload);
    if (r.skipped) {
      console.log(`   ⚠ ${post.platform}: ${r.reason} — 文案已生成，请手动发或配置 Webhook`);
      results.push({ platform: post.platform, url: null, title: post.title || post.caption, manual: true });
    } else {
      console.log(`   ✅ ${post.platform} webhook OK`);
      results.push({ platform: post.platform, url: r.url, title: post.title || post.caption });
    }
  }
  return results;
}

async function main() {
  if (showStatus) {
    printStatus();
    return;
  }

  const state = loadState();
  const gate = shouldPostNow(state);

  if (!force && !gate.ok) {
    if (gate.schedule?.day !== state.todaySchedule?.day) {
      state.todaySchedule = gate.schedule;
      saveState(state);
    }
    console.log(`⏭ 跳过: ${gate.reason}`);
    if (gate.schedule) {
      console.log(
        `   今日计划: ${gate.schedule.hourUtc}:${String(gate.schedule.minuteUtc).padStart(2, "0")} UTC`
      );
    }
    return;
  }

  if (gate.schedule) state.todaySchedule = gate.schedule;
  console.log("\n🚀 每日全渠道营销启动");
  printStatus();

  if (dryRun || !enabled) {
    console.log(dryRun ? "(dry-run)" : "(SOCIAL_PROMO_ENABLED != true — 预览模式)");
    await runSeo().catch(() => {});
    await runCnPlatforms();
    return;
  }

  const posted = [];

  const seo = await runSeo();
  if (seo) posted.push(seo);

  try {
    const reddit = await runReddit(state);
    if (reddit) {
      posted.push(reddit);
      console.log(`✅ Reddit: ${reddit.url}`);
    }
  } catch (e) {
    console.error(`❌ Reddit: ${e.message}`);
  }

  try {
    const x = await runX(state);
    if (x) {
      posted.push(x);
      console.log(`✅ X: ${x.url}`);
    }
  } catch (e) {
    console.error(`❌ X: ${e.message}`);
  }

  const cn = await runCnPlatforms();
  posted.push(...cn.filter(Boolean));

  const now = new Date().toISOString();
  state.lastPostedAt = now;
  state.lastPostedDay = gate.dayKey;
  state.history = [{ at: now, items: posted }, ...(state.history || [])].slice(0, 30);
  saveState(state);

  await notifyFeishu([
    "📣 每日营销完成",
    ...posted.map((p) => `· ${p.platform}${p.url ? ": " + p.url : p.manual ? " (待手动/Webhook)" : ""}`),
  ]);

  console.log(`\n✓ 完成 ${posted.length} 项\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
