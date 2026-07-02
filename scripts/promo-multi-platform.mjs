#!/usr/bin/env node
/**
 * 多平台推广（无需 Reddit OAuth）
 * - 自动：IndexNow 推送到 Bing/Yandex
 * - 生成：HN / X / LinkedIn / Facebook 一键发帖链接 + 中文复制文案
 * - 可选：飞书推送今日发帖包
 *
 * 用法: node scripts/promo-multi-platform.mjs
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOME = "https://ai-headshots-navy.vercel.app";
const JOIN = `${HOME}/join?utm_source=promo`;
const outDir = join(root, "analytics", "promo");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const titleEn = "AI LinkedIn headshots in 30s — $9.9/mo flat, 5 free tries";
const bodyEn = `Upload a selfie → professional headshots in ~30 seconds. 5 free tries, then $9.9/mo unlimited (vs PhotoAI $29+).

${JOIN}`;

const titleZh = "AI 证件照 — 上传自拍 30 秒出 LinkedIn 职业照，¥69/月";
const bodyZh = `做了 AI 证件照工具，5 次免费试用，满意再订阅。
比 PhotoAI 便宜很多，支持支付宝/微信。

${JOIN}?utm_medium=wechat`;

const platforms = {
  hackernews: {
    name: "Hacker News",
    auto: "一键打开发帖页（需登录后点提交）",
    submit: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(JOIN + "&utm_medium=hn")}&t=${encodeURIComponent("Show HN: AI headshots in 30s – $9.9/mo flat")}`,
    copy: titleEn,
  },
  twitter: {
    name: "X / Twitter",
    auto: "一键打开发推页",
    submit: `https://twitter.com/intent/tweet?text=${encodeURIComponent("AI LinkedIn headshots in 30s — $9.9/mo flat. 5 free tries 👇")}&url=${encodeURIComponent(JOIN + "&utm_medium=twitter")}`,
    copy: `AI LinkedIn headshots in 30s — $9.9/mo flat. 5 free tries 👇\n${JOIN}&utm_medium=twitter`,
  },
  linkedin: {
    name: "LinkedIn",
    auto: "一键打开分享页",
    submit: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(JOIN + "&utm_medium=linkedin")}`,
    copy: `${titleEn}\n\n${JOIN}&utm_medium=linkedin`,
  },
  facebook: {
    name: "Facebook",
    auto: "一键打开分享页",
    submit: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(JOIN + "&utm_medium=facebook")}`,
    copy: bodyEn,
  },
  indiehackers: {
    name: "Indie Hackers",
    auto: "打开社区发帖（需登录）",
    submit: "https://www.indiehackers.com/post/new",
    copy: bodyEn,
  },
  v2ex: {
    name: "V2EX",
    auto: "复制文案 → 登录后发「分享创造」",
    submit: "https://www.v2ex.com/write",
    copy: `${titleZh}\n\n${bodyZh}`,
  },
  moments: {
    name: "微信朋友圈",
    auto: "复制文案 → 粘贴发朋友圈",
    submit: null,
    copy: bodyZh,
  },
};

console.log("\n📣 多平台推广（免 Reddit OAuth）\n");

console.log("1) IndexNow SEO 推送...");
try {
  execSync("node scripts/submit-indexnow.mjs", { cwd: root, stdio: "inherit" });
} catch (e) {
  console.warn("   IndexNow 部分失败:", e.message);
}

const priority = [`${HOME}/`, JOIN, `${HOME}/#studio`];
const KEY = process.env.INDEXNOW_KEY || "dailysitesfactory2026key8f3a2b1c";
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
    });
    console.log(`   收款站 → ${endpoint.split("/")[2]} ${res.status}`);
  } catch (e) {
    console.warn(`   ${endpoint} fail`);
  }
}

writeFileSync(join(outDir, "platforms.json"), JSON.stringify(platforms, null, 2) + "\n");

let md = `# 今日推广包（免 Reddit）\n\n收款链: ${JOIN}\n\n`;
md += `## 已自动完成\n- IndexNow 已推送 ai-headshots 到 Bing/Yandex（SEO 收录）\n\n`;
md += `## 一键发帖（点开 → 登录 → 提交）\n\n`;
for (const [key, p] of Object.entries(platforms)) {
  md += `### ${p.name}\n`;
  md += `*${p.auto}*\n\n`;
  if (p.submit) md += `[→ 打开发帖/分享页](${p.submit})\n\n`;
  md += `**复制文案：**\n\`\`\`\n${p.copy}\n\`\`\`\n\n`;
}
writeFileSync(join(outDir, "TODAY-MULTI.md"), md);

console.log("\n2) 推广包 → analytics/promo/TODAY-MULTI.md");
for (const p of Object.values(platforms)) {
  if (p.submit) console.log(`   · ${p.name}: ${p.submit.slice(0, 60)}...`);
}

// Feishu
const webhook = process.env.FEISHU_WEBHOOK_URL;
if (webhook) {
  const lines = [
    "📣 今日推广（已自动 IndexNow）",
    "",
    `收款: ${JOIN}`,
    "",
    "一键发帖:",
    ...Object.values(platforms)
      .filter((p) => p.submit)
      .slice(0, 4)
      .map((p) => `· ${p.name}: ${p.submit}`),
    "",
    "中文文案（朋友圈/V2EX）:",
    bodyZh.slice(0, 200),
  ];
  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ msg_type: "text", content: { text: lines.join("\n") } }),
    });
    console.log(res.ok ? "\n3) ✓ 已推送飞书" : "\n3) 飞书推送失败");
  } catch {
    console.log("\n3) 飞书推送跳过");
  }
} else {
  console.log("\n3) 飞书未配置 — 配置 FEISHU_WEBHOOK_URL 可每日自动推送链接");
}

console.log("\n✓ 完成。Reddit 不用配也能推广。\n");
