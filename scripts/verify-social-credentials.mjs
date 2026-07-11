#!/usr/bin/env node
/**
 * 验证社交账号凭证（不发帖，只测登录）
 * 用法:
 *   BLUESKY_IDENTIFIER=xxx BLUESKY_APP_PASSWORD=xxx \
 *   MASTODON_INSTANCE_URL=https://mastodon.social MASTODON_ACCESS_TOKEN=xxx \
 *   node scripts/verify-social-credentials.mjs
 */
import { createBlueskySession } from "./lib/bluesky-api.mjs";
import { verifyMastodonToken } from "./lib/mastodon-api.mjs";
import { getRedditAccessToken, getRedditMe } from "./lib/reddit-api.mjs";

let ok = 0;
let fail = 0;

async function check(name, fn) {
  try {
    const result = await fn();
    console.log(`✅ ${name}${result ? ` — ${result}` : ""}`);
    ok++;
  } catch (e) {
    console.log(`❌ ${name} — ${e.message}`);
    fail++;
  }
}

console.log("\n🔐 社交凭证验证\n");

if (process.env.REDDIT_CLIENT_ID && process.env.REDDIT_REFRESH_TOKEN) {
  await check("Reddit", async () => {
    const token = await getRedditAccessToken({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      refreshToken: process.env.REDDIT_REFRESH_TOKEN,
    });
    const me = await getRedditMe(token);
    return `u/${me.name}`;
  });
} else {
  console.log("⬜ Reddit — 未设置 REDDIT_*");
}

if (process.env.BLUESKY_IDENTIFIER && process.env.BLUESKY_APP_PASSWORD) {
  await check("Bluesky", async () => {
    const s = await createBlueskySession(
      process.env.BLUESKY_IDENTIFIER,
      process.env.BLUESKY_APP_PASSWORD
    );
    return `@${s.handle}`;
  });
} else {
  console.log("⬜ Bluesky — 未设置 BLUESKY_IDENTIFIER / BLUESKY_APP_PASSWORD");
}

if (process.env.MASTODON_INSTANCE_URL && process.env.MASTODON_ACCESS_TOKEN) {
  await check("Mastodon", async () => {
    const me = await verifyMastodonToken(
      process.env.MASTODON_INSTANCE_URL,
      process.env.MASTODON_ACCESS_TOKEN
    );
    return `@${me.acct} @ ${process.env.MASTODON_INSTANCE_URL}`;
  });
} else {
  console.log("⬜ Mastodon — 未设置 MASTODON_INSTANCE_URL / MASTODON_ACCESS_TOKEN");
}

console.log(`\n结果: ${ok} 通过, ${fail} 失败`);
console.log(`SOCIAL_PROMO_ENABLED: ${process.env.SOCIAL_PROMO_ENABLED === "true" ? "true ✅" : "未设 ⚠"}\n`);

if (fail > 0) process.exit(1);
