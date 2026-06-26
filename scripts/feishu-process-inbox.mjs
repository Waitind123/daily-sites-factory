#!/usr/bin/env node
/**
 * Agent 启动时处理飞书 inbox 中的建站等待办
 */
import { readFileSync, existsSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const inboxPath = join(root, "feishu", "inbox.json");

if (!existsSync(inboxPath)) {
  console.log("飞书 inbox 为空");
  process.exit(0);
}

const inbox = JSON.parse(readFileSync(inboxPath, "utf8"));
if (!inbox.pending?.length) {
  console.log("无待处理飞书指令");
  process.exit(0);
}

console.log("📩 飞书待处理指令:");
for (const item of inbox.pending) {
  console.log(`  - [${item.command || "msg"}] ${item.description || item.raw || JSON.stringify(item)}`);
}

// 标记为已读，留给 Agent 在本轮执行 build 命令
inbox.processed = [...(inbox.processed || []), ...inbox.pending.map((p) => ({ ...p, seenAt: new Date().toISOString() }))];
inbox.pending = [];
writeFileSync(inboxPath, JSON.stringify(inbox, null, 2) + "\n");
console.log("\n已移至 processed，请在本轮 Agent 执行对应操作。");
