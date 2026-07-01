#!/usr/bin/env node
/**
 * 自动推广 — IndexNow 优先推送收款站 + 生成各渠道发帖链接
 * 用法: node scripts/run-promotion.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const JOIN = "https://ai-headshots-navy.vercel.app/join";
const STUDIO = "https://ai-headshots-navy.vercel.app/studio";

const posts = {
  reddit_sideproject: {
    title: "I built AI LinkedIn headshots for $9.9/mo flat (PhotoAI charges $29+)",
    body: `Upload a selfie → 4 professional styles in ~30 seconds. 5 free generations.

I got tired of PhotoAI pricing so I shipped a simpler indie alternative.

${JOIN}?utm_source=reddit&utm_medium=sideproject

Happy to hear brutal feedback.`,
    submit: `https://www.reddit.com/r/SideProject/submit?url=${encodeURIComponent(JOIN + "?utm_source=reddit")}&title=${encodeURIComponent("AI LinkedIn headshots — $9.9/mo flat, 5 free tries")}`,
  },
  reddit_linkedin: {
    title: "Cheap AI headshots for LinkedIn — $9.9/mo unlimited",
    submit: `https://www.reddit.com/r/linkedin/submit?url=${encodeURIComponent(JOIN + "?utm_source=reddit_linkedin")}&title=${encodeURIComponent("AI professional headshots $9.9/mo — 5 free tries")}`,
  },
  hn: {
    title: "Show HN: AI headshots in 30s – $9.9/mo flat",
    submit: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(JOIN + "?utm_source=hn")}&t=${encodeURIComponent("Show HN: AI headshots in 30s – $9.9/mo flat")}`,
  },
  twitter: {
    text: `Shipped: AI LinkedIn headshots in 30 seconds — $9.9/mo flat (vs PhotoAI $29+). 5 free tries 👇`,
    submit: `https://twitter.com/intent/tweet?text=${encodeURIComponent("Shipped: AI LinkedIn headshots in 30s — $9.9/mo flat. 5 free tries 👇")}&url=${encodeURIComponent(JOIN + "?utm_source=twitter")}`,
  },
};

const outDir = join(root, "analytics", "promo");
if (!existsSync(outDir)) {
  const { mkdirSync } = await import("fs");
  mkdirSync(outDir, { recursive: true });
}

writeFileSync(join(outDir, "posts.json"), JSON.stringify(posts, null, 2) + "\n");

let md = `# 推广帖一键打开链接\n\n目标收款页: ${JOIN}\n\n`;
for (const [key, p] of Object.entries(posts)) {
  md += `## ${key}\n`;
  if (p.title) md += `**标题:** ${p.title}\n\n`;
  if (p.body) md += `${p.body}\n\n`;
  md += `[→ 一键打开发帖页](${p.submit})\n\n`;
}
writeFileSync(join(outDir, "SUBMIT-LINKS.md"), md);

console.log("\n📣 推广执行\n");
console.log("1) IndexNow 推送全站 SEO...");
try {
  execSync("node scripts/submit-indexnow.mjs", { cwd: root, stdio: "inherit" });
} catch (e) {
  console.warn("   IndexNow partial fail:", e.message);
}

console.log("\n2) 优先推送收款站 URL...");
const priority = [JOIN, STUDIO, `${JOIN.replace("/join", "")}/guide`];
const KEY = process.env.INDEXNOW_KEY || "dailysitesfactory2026key8f3a2b1c";
const payload = {
  host: "ai-headshots-navy.vercel.app",
  key: KEY,
  keyLocation: "https://feature-vote-ten.vercel.app/indexnow-key.txt",
  urlList: priority,
};
for (const endpoint of ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"]) {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    console.log(`   ${endpoint.split("/")[2]} → ${res.status}`);
  } catch (e) {
    console.warn(`   ${endpoint} fail:`, e.message);
  }
}

console.log("\n3) 发帖链接已生成 → analytics/promo/SUBMIT-LINKS.md");
console.log("\n✓ 站内交叉推广条请 deploy 后生效（sync-promo-cross-sell + layout）\n");
