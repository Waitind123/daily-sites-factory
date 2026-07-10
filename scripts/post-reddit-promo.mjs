#!/usr/bin/env node
/**
 * 自动 Reddit 推广帖 — 随机时段、真人风格文案、防重复
 * 环境变量: REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_REFRESH_TOKEN
 * 用法: node scripts/post-reddit-promo.mjs [--dry-run] [--force]
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { generateRedditPost, shouldPostToday } from "./lib/social-copy.mjs";
import { getRedditAccessToken, submitRedditPost, getRedditMe } from "./lib/reddit-api.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const statePath = join(root, "analytics", "social-promo-state.json");
const dryRun = process.argv.includes("--dry-run");
const force = process.argv.includes("--force");

function loadState() {
  if (!existsSync(statePath)) {
    return { history: [], lastPostedAt: null, posts: 0 };
  }
  return JSON.parse(readFileSync(statePath, "utf8"));
}

function saveState(state) {
  const dir = join(root, "analytics");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(statePath, JSON.stringify(state, null, 2) + "\n");
}

async function main() {
  const state = loadState();
  const gate = shouldPostToday(state);
  if (!force && !gate.ok) {
    console.log(`⏭ 跳过发帖: ${gate.reason}`);
    return;
  }

  const post = generateRedditPost(state);
  console.log(`\n📝 r/${post.subreddit}`);
  console.log(`标题: ${post.title}\n`);
  console.log(post.body);
  console.log("");

  if (dryRun) {
    console.log("(dry-run — 未发布)\n");
    return;
  }

  const clientId = process.env.REDDIT_CLIENT_ID;
  const clientSecret = process.env.REDDIT_CLIENT_SECRET;
  const refreshToken = process.env.REDDIT_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    console.error("缺少 Reddit Secrets — 见 docs/SOCIAL-PROMO-SETUP.md");
    process.exit(1);
  }

  const accessToken = await getRedditAccessToken({ clientId, clientSecret, refreshToken });
  const me = await getRedditMe(accessToken);
  console.log(`账号: u/${me.name}`);

  const result = await submitRedditPost({
    accessToken,
    subreddit: post.subreddit,
    title: post.title,
    body: post.body,
    kind: "self",
  });

  state.lastPostedAt = new Date().toISOString();
  state.posts = (state.posts || 0) + 1;
  state.history = [
    {
      at: state.lastPostedAt,
      subreddit: post.subreddit,
      title: post.title,
      hash: post.hash,
      url: result.url,
      joinUrl: post.joinUrl || post.url,
      campaign: post.campaign || null,
      platform: `Reddit r/${post.subreddit}`,
    },
    ...(state.history || []),
  ].slice(0, 60);
  saveState(state);

  console.log(`\n✅ 已发布: ${result.url}\n`);
}

main().catch((err) => {
  console.error("发帖失败:", err.message);
  process.exit(1);
});
