#!/usr/bin/env node
/**
 * 读取用户留言，输出待处理列表（供 Agent 回复与改进）
 * 用法: node scripts/process-feedback.mjs [--site <id>]
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const feedbackDir = join(root, "feedback");

function loadFile(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function saveFile(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

function main() {
  const siteFilter = process.argv.includes("--site")
    ? process.argv[process.argv.indexOf("--site") + 1]
    : null;

  if (process.argv[2] === "reply") {
    const siteId = process.argv[3];
    const msgId = process.argv[4];
    const reply = process.argv.slice(5).join(" ");
    const path = join(feedbackDir, `${siteId}.json`);
    if (!existsSync(path) || !reply) {
      console.error("用法: node scripts/process-feedback.mjs reply <siteId> <msgId> <reply text>");
      process.exit(1);
    }
    const data = loadFile(path);
    const msg = data.messages.find((m) => m.id === msgId);
    if (!msg) {
      console.error("留言不存在");
      process.exit(1);
    }
    msg.reply = reply;
    msg.repliedAt = new Date().toISOString();
    msg.status = "replied";
    saveFile(path, data);
    console.log(JSON.stringify({ ok: true, message: msg }, null, 2));
    return;
  }

  const files = existsSync(feedbackDir)
    ? readdirSync(feedbackDir).filter((f) => f.endsWith(".json"))
    : [];

  const pending = [];

  for (const file of files) {
    const siteId = file.replace(/\.json$/, "");
    if (siteFilter && siteId !== siteFilter) continue;
    const data = loadFile(join(feedbackDir, file));
    for (const msg of data.messages || []) {
      if (!msg.reply) {
        pending.push({ siteId, ...msg });
      }
    }
  }

  if (pending.length === 0) {
    console.log(JSON.stringify({ pending: [], message: "无待回复留言" }, null, 2));
    return;
  }

  console.log(JSON.stringify({ pending, count: pending.length }, null, 2));
  console.error(`
Agent 任务：
1. 阅读每条留言，运行: node scripts/process-feedback.mjs reply <siteId> <msgId> "回复内容"
2. 若留言涉及合理功能改进，在 sites/<siteId>/ 实现并 push
3. 将 status 标为 implemented（如已改代码）
`);
}

main();
