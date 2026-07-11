#!/usr/bin/env node
/**
 * 每日随机时刻自动发帖 — 多平台（配哪个发哪个）
 *
 * 环境变量:
 *   SOCIAL_PROMO_ENABLED=true
 *   REDDIT_CLIENT_ID / REDDIT_CLIENT_SECRET / REDDIT_REFRESH_TOKEN
 *   BLUESKY_IDENTIFIER / BLUESKY_APP_PASSWORD
 *   MASTODON_INSTANCE_URL / MASTODON_ACCESS_TOKEN
 *   FEISHU_WEBHOOK_URL (可选)
 *
 * 用法:
 *   node scripts/post-social-auto.mjs [--dry-run] [--force]
 *   node scripts/post-social-auto.mjs --status
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  shouldPostNow,
  generateRedditPost,
  generateBlueskyPost,
  generateMastodonPost,
} from "./lib/social-copy.mjs";
import { getRedditAccessToken, submitRedditPost, getRedditMe } from "./lib/reddit-api.mjs";
import { createBlueskySession, createBlueskyPost } from "./lib/bluesky-api.mjs";
import {
  createMastodonPost,
  verifyMastodonToken,
} from "./lib/mastodon-api.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const statePath = join(root, "analytics", "social-promo-state.json");
const dryRun = process.argv.includes("--dry-run");
const force = process.argv.includes("--force");
const showStatus = process.argv.includes("--status");
const enabled = process.env.SOCIAL_PROMO_ENABLED === "true";

function loadState() {
  if (!existsSync(statePath)) {
    return { history: [], lastPostedAt: null, lastPostedDay: null, posts: 0, todaySchedule: null };
  }
  return JSON.parse(readFileSync(statePath, "utf8"));
}

function saveState(state) {
  const dir = join(root, "analytics");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(statePath, JSON.stringify(state, null, 2) + "\n");
}

async function sleepJitter(minutes) {
  const base = (minutes || 0) * 60;
  const extra = Math.floor(Math.random() * 90);
  const sec = base + extra;
  if (sec <= 0) return;
  console.log(`⏳ 随机延迟 ${sec}s（模拟人工发帖时间）…`);
  await new Promise((r) => setTimeout(r, sec * 1000));
}

async function postToReddit(post) {
  const accessToken = await getRedditAccessToken({
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN,
  });
  const me = await getRedditMe(accessToken);
  console.log(`Reddit 账号: u/${me.name}`);
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
    hash: post.hash,
    title: post.title,
    joinUrl: post.joinUrl,
    campaign: post.campaign,
  };
}

async function postToBluesky(post) {
  const session = await createBlueskySession(
    process.env.BLUESKY_IDENTIFIER,
    process.env.BLUESKY_APP_PASSWORD
  );
  console.log(`Bluesky 账号: @${session.handle}`);
  const result = await createBlueskyPost({
    accessJwt: session.accessJwt,
    did: session.did,
    handle: session.handle,
    text: post.text,
  });
  return {
    platform: "Bluesky",
    url: result.url || result.uri,
    hash: post.hash,
    title: post.text.slice(0, 80),
    joinUrl: post.joinUrl,
    campaign: post.campaign,
  };
}

async function postToMastodon(post) {
  const me = await verifyMastodonToken(
    process.env.MASTODON_INSTANCE_URL,
    process.env.MASTODON_ACCESS_TOKEN
  );
  console.log(`Mastodon 账号: @${me.acct}`);
  const result = await createMastodonPost({
    instanceUrl: process.env.MASTODON_INSTANCE_URL,
    accessToken: process.env.MASTODON_ACCESS_TOKEN,
    status: post.text,
  });
  return {
    platform: "Mastodon",
    url: result.url,
    hash: post.hash,
    title: post.text.slice(0, 80),
    joinUrl: post.joinUrl,
    campaign: post.campaign,
  };
}

const PLATFORMS = [
  {
    id: "reddit",
    label: "Reddit",
    configured: () =>
      Boolean(
        process.env.REDDIT_CLIENT_ID &&
          process.env.REDDIT_CLIENT_SECRET &&
          process.env.REDDIT_REFRESH_TOKEN
      ),
    secrets: ["REDDIT_CLIENT_ID", "REDDIT_CLIENT_SECRET", "REDDIT_REFRESH_TOKEN"],
    generate: (state) => generateRedditPost(state),
    preview: (post) => `Reddit r/${post.subreddit}: ${post.title}`,
    post: postToReddit,
  },
  {
    id: "bluesky",
    label: "Bluesky",
    configured: () =>
      Boolean(process.env.BLUESKY_IDENTIFIER && process.env.BLUESKY_APP_PASSWORD),
    secrets: ["BLUESKY_IDENTIFIER", "BLUESKY_APP_PASSWORD"],
    generate: (state) => generateBlueskyPost(state),
    preview: (post) => `Bluesky: ${post.text}`,
    post: postToBluesky,
  },
  {
    id: "mastodon",
    label: "Mastodon",
    configured: () =>
      Boolean(process.env.MASTODON_INSTANCE_URL && process.env.MASTODON_ACCESS_TOKEN),
    secrets: ["MASTODON_INSTANCE_URL", "MASTODON_ACCESS_TOKEN"],
    generate: (state) => generateMastodonPost(state),
    preview: (post) => `Mastodon: ${post.text}`,
    post: postToMastodon,
  },
];

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

function printPlatformStatus() {
  console.log("\n📋 自动发帖平台状态\n");
  for (const p of PLATFORMS) {
    const ok = p.configured();
    console.log(`${ok ? "✅" : "⬜"} ${p.label}${ok ? " — 已配置，到点会自动发" : ""}`);
    if (!ok) console.log(`   缺少 Secrets: ${p.secrets.join(", ")}`);
  }
  console.log("\n⬜ X / LinkedIn / Hacker News — 无免费 API，见 promo-multi-daily 一键链接");
  console.log(`\n总开关 SOCIAL_PROMO_ENABLED: ${enabled ? "true ✅" : "未设或为 false ⚠"}\n`);
}

async function main() {
  if (showStatus) {
    printPlatformStatus();
    return;
  }

  const state = loadState();
  const gate = shouldPostNow(state);

  if (!force && !gate.ok) {
    if (gate.schedule && gate.schedule.day !== state.todaySchedule?.day) {
      state.todaySchedule = gate.schedule;
      saveState(state);
    }
    console.log(`⏭ 跳过: ${gate.reason}`);
    if (gate.schedule) {
      console.log(
        `   今日计划发帖: ${gate.schedule.hourUtc}:${String(gate.schedule.minuteUtc).padStart(2, "0")} UTC (+${gate.schedule.jitterMinutes}min 随机延迟)`
      );
    }
    const configured = PLATFORMS.filter((p) => p.configured()).map((p) => p.label);
    console.log(`   已配置平台: ${configured.length ? configured.join(", ") : "无 — 见 docs/SOCIAL-PROMO-SETUP.md"}`);
    return;
  }

  if (gate.schedule) state.todaySchedule = gate.schedule;

  const drafts = PLATFORMS.map((p) => ({ platform: p, post: p.generate(state) }));

  console.log("\n📅 今日随机发帖窗口已到");
  for (const { platform, post } of drafts) {
    console.log(platform.preview(post));
  }
  console.log("");
  printPlatformStatus();

  if (dryRun || !enabled) {
    console.log(
      dryRun ? "(dry-run — 未发布)" : "(SOCIAL_PROMO_ENABLED != true — 仅预览，设 Secret 为 true 后真发)"
    );
    return;
  }

  if (!force && gate.schedule?.jitterMinutes) {
    await sleepJitter(gate.schedule.jitterMinutes);
  }

  const posted = [];
  const errors = [];

  for (const { platform, post } of drafts) {
    if (!platform.configured()) {
      console.log(`⚠ ${platform.label} 未配置 Secrets — 跳过`);
      continue;
    }
    try {
      const result = await platform.post(post);
      posted.push(result);
      console.log(`✅ ${result.platform}: ${result.url}`);
    } catch (e) {
      errors.push(`${platform.label}: ${e.message}`);
      console.error(`❌ ${platform.label}: ${e.message}`);
    }
  }

  if (!posted.length) {
    console.error("\n无平台成功发帖 — 请至少配置一个平台（见 docs/SOCIAL-PROMO-SETUP.md）");
    if (errors.length) process.exit(1);
    return;
  }

  const now = new Date().toISOString();
  state.lastPostedAt = now;
  state.lastPostedDay = gate.dayKey;
  state.posts = (state.posts || 0) + posted.length;
  state.history = [
    ...posted.map((p) => ({
      at: now,
      platform: p.platform,
      title: p.title,
      hash: p.hash,
      url: p.url,
      joinUrl: p.joinUrl,
      campaign: p.campaign,
    })),
    ...(state.history || []),
  ].slice(0, 80);
  saveState(state);

  await notifyFeishu([
    "📣 自动发帖完成",
    ...posted.map((p) => `· ${p.platform}: ${p.url}`),
    `收款: ${posted[0].joinUrl}`,
  ]);

  console.log(`\n✓ 完成 ${posted.length} 条发帖（${posted.map((p) => p.platform).join(" + ")}）\n`);
}

main().catch((err) => {
  console.error("自动发帖失败:", err.message);
  process.exit(1);
});
