#!/usr/bin/env node
/**
 * 每日随机时刻自动发帖 — Reddit + Bluesky
 *
 * 环境变量:
 *   SOCIAL_PROMO_ENABLED=true  才会真发
 *   REDDIT_CLIENT_ID / REDDIT_CLIENT_SECRET / REDDIT_REFRESH_TOKEN
 *   BLUESKY_IDENTIFIER / BLUESKY_APP_PASSWORD
 *   FEISHU_WEBHOOK_URL (可选)
 *
 * 用法: node scripts/post-social-auto.mjs [--dry-run] [--force]
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  shouldPostNow,
  generateRedditPost,
  generateBlueskyPost,
} from "./lib/social-copy.mjs";
import { getRedditAccessToken, submitRedditPost, getRedditMe } from "./lib/reddit-api.mjs";
import { createBlueskySession, createBlueskyPost } from "./lib/bluesky-api.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const statePath = join(root, "analytics", "social-promo-state.json");
const dryRun = process.argv.includes("--dry-run");
const force = process.argv.includes("--force");
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

function redditConfigured() {
  return Boolean(
    process.env.REDDIT_CLIENT_ID &&
      process.env.REDDIT_CLIENT_SECRET &&
      process.env.REDDIT_REFRESH_TOKEN
  );
}

function blueskyConfigured() {
  return Boolean(process.env.BLUESKY_IDENTIFIER && process.env.BLUESKY_APP_PASSWORD);
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

async function main() {
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
    return;
  }

  if (gate.schedule) state.todaySchedule = gate.schedule;

  const redditPost = generateRedditPost(state);
  const blueskyPost = generateBlueskyPost(state);

  console.log("\n📅 今日随机发帖窗口已到");
  console.log(`\nReddit r/${redditPost.subreddit}: ${redditPost.title}`);
  console.log(`Bluesky: ${blueskyPost.text}\n`);

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

  if (redditConfigured()) {
    try {
      posted.push(await postToReddit(redditPost));
      console.log(`✅ Reddit: ${posted.at(-1).url}`);
    } catch (e) {
      errors.push(`Reddit: ${e.message}`);
      console.error(`❌ Reddit: ${e.message}`);
    }
  } else {
    console.log("⚠ Reddit 未配置 Secrets — 跳过");
  }

  if (blueskyConfigured()) {
    try {
      posted.push(await postToBluesky(blueskyPost));
      console.log(`✅ Bluesky: ${posted.at(-1).url}`);
    } catch (e) {
      errors.push(`Bluesky: ${e.message}`);
      console.error(`❌ Bluesky: ${e.message}`);
    }
  } else {
    console.log("⚠ Bluesky 未配置 Secrets — 跳过");
  }

  if (!posted.length) {
    console.error("\n无平台成功发帖 — 请配置 Reddit 或 Bluesky Secrets");
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

  console.log(`\n✓ 完成 ${posted.length} 条发帖\n`);
}

main().catch((err) => {
  console.error("自动发帖失败:", err.message);
  process.exit(1);
});
