#!/usr/bin/env node
/**
 * 痛点发现 + 垂直方向队列管理
 *
 * 用法:
 *   node scripts/discover-vertical.mjs list          # 查看待建队列
 *   node scripts/discover-vertical.mjs add --id xxx --name "中文名" --description "..." --source "HN/Reddit"
 *   node scripts/discover-vertical.mjs pick          # 从队列取下一个（Agent 用）
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const discoveredPath = join(root, "discovered-verticals.json");
const verticalsPath = join(root, "verticals.json");

function load() {
  return JSON.parse(readFileSync(discoveredPath, "utf8"));
}

function save(data) {
  writeFileSync(discoveredPath, JSON.stringify(data, null, 2) + "\n");
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      args[argv[i].slice(2)] = argv[i + 1];
      i++;
    }
  }
  return args;
}

const [cmd, ...rest] = process.argv.slice(2);

if (cmd === "list") {
  const data = load();
  console.log(JSON.stringify(data, null, 2));
  process.exit(0);
}

if (cmd === "add") {
  const args = parseArgs(rest);
  const id = args.id || slugify(args.name || "");
  if (!id || !args.name || !args.description) {
    console.error("用法: add --id xxx --name 中文名 --description 描述 [--source 来源]");
    process.exit(1);
  }

  const data = load();
  const verticals = JSON.parse(readFileSync(verticalsPath, "utf8"));
  const exists =
    data.pending.some((v) => v.id === id) ||
    verticals.some((v) => v.id === id);

  if (exists) {
    console.error(`垂直方向 ${id} 已存在，跳过`);
    process.exit(1);
  }

  const entry = {
    id,
    name: args.name,
    description: args.description,
    template: args.template || "micro-saas",
    source: args.source || "manual",
    discoveredAt: new Date().toISOString(),
  };

  data.pending.push(entry);
  data.lastDiscoveredAt = entry.discoveredAt;
  save(data);

  // 同步追加到 verticals.json 池
  verticals.push({
    id: entry.id,
    name: entry.name,
    template: entry.template,
    description: entry.description,
  });
  writeFileSync(verticalsPath, JSON.stringify(verticals, null, 2) + "\n");

  console.log(JSON.stringify({ added: entry }, null, 2));
  process.exit(0);
}

if (cmd === "pick") {
  const data = load();
  if (data.pending.length === 0) {
    console.log(JSON.stringify({ fromQueue: false, message: "队列为空，使用 verticals.json 轮询" }));
    process.exit(0);
  }
  const next = data.pending.shift();
  save(data);
  console.log(JSON.stringify({ fromQueue: true, vertical: next }, null, 2));
  process.exit(0);
}

if (cmd === "sources") {
  const data = load();
  console.log("Agent 痛点搜索来源（每日运行前搜索这些渠道）：\n");
  data.sources.forEach((s, i) => console.log(`${i + 1}. ${s}`));
  console.log(`
搜索关键词示例:
- "I wish there was a tool for"
- "looking for alternative to"
- "frustrated with"
- "would pay for"

发现高价值痛点后运行:
  node scripts/discover-vertical.mjs add --name "..." --description "..." --source "HN#123"
`);
  process.exit(0);
}

console.log(`用法:
  node scripts/discover-vertical.mjs list
  node scripts/discover-vertical.mjs add --name "..." --description "..." [--id xxx] [--source HN]
  node scripts/discover-vertical.mjs pick
  node scripts/discover-vertical.mjs sources
`);
