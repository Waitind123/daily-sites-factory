#!/usr/bin/env node
/**
 * 痛点发现 + 垂直方向队列管理
 *
 * 用法:
 *   node scripts/discover-vertical.mjs list          # 查看待建队列
 *   node scripts/discover-vertical.mjs discover      # 从网上抓痛点并自动补充方向
 *   node scripts/discover-vertical.mjs add --id xxx --name "中文名" --description "..." --source "HN/Reddit"
 *   node scripts/discover-vertical.mjs pick          # 从队列取下一个（Agent 用）
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const discoveredPath = join(root, "discovered-verticals.json");
const verticalsPath = join(root, "verticals.json");

const PAIN_PATTERNS = [
  /i wish there was/i,
  /looking for (a |an )?alternative/i,
  /would pay for/i,
  /frustrated with/i,
  /need a tool/i,
  /is there (a |an )?(tool|app|saas)/i,
  /anyone know (a |an )?(tool|app)/i,
  /how do you (handle|manage|track)/i,
  /struggling with/i,
  /pain point/i,
  /有没有.*工具/,
  /求推荐/,
  /替代方案/,
];

const HN_QUERIES = [
  "I wish there was",
  "looking for alternative",
  "would pay for",
  "SaaS tool for",
  "indie hacker pain",
];

const REDDIT_SOURCES = [
  "https://old.reddit.com/r/SaaS/.json?limit=25",
  "https://old.reddit.com/r/Entrepreneur/.json?limit=25",
  "https://old.reddit.com/r/SideProject/.json?limit=25",
];

function load() {
  return JSON.parse(readFileSync(discoveredPath, "utf8"));
}

function save(data) {
  writeFileSync(discoveredPath, JSON.stringify(data, null, 2) + "\n");
}

function loadVerticals() {
  return JSON.parse(readFileSync(verticalsPath, "utf8"));
}

function saveVerticals(verticals) {
  writeFileSync(verticalsPath, JSON.stringify(verticals, null, 2) + "\n");
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40) || "vertical";
}

function uniqueId(base, used) {
  let id = slugify(base);
  let n = 2;
  while (used.has(id)) {
    id = `${slugify(base).slice(0, 35)}-${n}`;
    n++;
  }
  used.add(id);
  return id;
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      args[argv[i].slice(2)] = argv[i + 1] ?? true;
      if (argv[i + 1] && !argv[i + 1].startsWith("--")) i++;
    }
  }
  return args;
}

function painScore(text) {
  if (!text) return 0;
  let score = 0;
  for (const pattern of PAIN_PATTERNS) {
    if (pattern.test(text)) score += 3;
  }
  if (/\?/.test(text)) score += 1;
  if (text.length > 40 && text.length < 180) score += 1;
  return score;
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "daily-sites-factory/1.0 (vertical discovery)" },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.json();
}

async function fetchHNCandidates() {
  const results = [];
  for (const query of HN_QUERIES) {
    try {
      const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=12`;
      const data = await fetchJson(url);
      for (const hit of data.hits ?? []) {
        const title = hit.title || "";
        const text = `${title} ${hit.story_text || ""}`.trim();
        const score = painScore(text);
        if (score < 3) continue;
        results.push({
          title: title.slice(0, 120),
          description: `HN 用户痛点：${title}`,
          source: `HN#${hit.objectID} ${hit.url || "https://news.ycombinator.com/item?id=" + hit.objectID}`,
          score: score + Math.min(hit.points || 0, 50) / 10,
          template: "micro-saas",
        });
      }
    } catch (err) {
      console.error(`HN 搜索失败 (${query}): ${err.message}`);
    }
  }
  return results;
}

async function fetchRedditCandidates() {
  const results = [];
  for (const url of REDDIT_SOURCES) {
    try {
      const data = await fetchJson(url);
      for (const child of data?.data?.children ?? []) {
        const post = child.data;
        const title = post.title || "";
        const body = post.selftext || "";
        const text = `${title} ${body}`.trim();
        const score = painScore(text);
        if (score < 3) continue;
        results.push({
          title: title.slice(0, 120),
          description: body ? body.slice(0, 200) : `Reddit 用户痛点：${title}`,
          source: `Reddit r/${post.subreddit} ${post.permalink}`,
          score: score + Math.min(post.ups || 0, 100) / 20,
          template: "micro-saas",
        });
      }
    } catch (err) {
      console.error(`Reddit 抓取失败 (${url}): ${err.message}`);
    }
  }
  return results;
}

function existingIds() {
  const verticals = loadVerticals();
  const data = load();
  const ids = new Set([
    ...verticals.map((v) => v.id),
    ...data.pending.map((v) => v.id),
  ]);
  const titles = new Set([
    ...verticals.map((v) => v.name.toLowerCase()),
    ...data.pending.map((v) => v.name.toLowerCase()),
  ]);
  return { ids, titles, verticals, data };
}

function addEntry(entry) {
  const { ids, titles, verticals, data } = existingIds();
  const id = uniqueId(entry.id || entry.title, ids);
  const name = entry.name || entry.title.slice(0, 60);
  const nameKey = name.toLowerCase();
  if (titles.has(nameKey)) return null;

  const record = {
    id,
    name,
    description: entry.description,
    template: entry.template || "micro-saas",
    source: entry.source || "discover",
    discoveredAt: new Date().toISOString(),
  };

  data.pending.push(record);
  data.lastDiscoveredAt = record.discoveredAt;
  save(data);

  verticals.push({
    id: record.id,
    name: record.name,
    template: record.template,
    description: record.description,
  });
  saveVerticals(verticals);

  return record;
}

async function runDiscover(limit = 3) {
  const candidates = [...(await fetchHNCandidates()), ...(await fetchRedditCandidates())];
  candidates.sort((a, b) => b.score - a.score);

  const added = [];
  const seenTitles = new Set();

  for (const candidate of candidates) {
    if (added.length >= limit) break;
    const key = candidate.title.toLowerCase().slice(0, 80);
    if (seenTitles.has(key)) continue;
    seenTitles.add(key);

    const record = addEntry({
      id: slugify(candidate.title),
      name: candidate.title.slice(0, 60),
      description: candidate.description,
      source: candidate.source,
      template: candidate.template,
    });
    if (record) added.push(record);
  }

  if (added.length === 0) {
    const fallback = addEntry({
      id: `pain-${Date.now().toString(36)}`,
      name: "独立开发者收入仪表盘",
      description: "聚合 Stripe/Gumroad 收入、MRR、退款率，解决 indie hacker 看不清真实收入的痛点",
      source: "fallback:discover-empty",
      template: "micro-saas",
    });
    if (fallback) added.push(fallback);
  }

  return { discovered: added.length, added };
}

const [cmd, ...rest] = process.argv.slice(2);

async function main() {
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

  const { ids } = existingIds();
  if (ids.has(id)) {
    console.error(`垂直方向 ${id} 已存在，跳过`);
    process.exit(1);
  }

  const record = addEntry({
    id,
    name: args.name,
    description: args.description,
    source: args.source || "manual",
    template: args.template || "micro-saas",
  });
  console.log(JSON.stringify({ added: record }, null, 2));
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

if (cmd === "discover") {
  const args = parseArgs(rest);
  const limit = Number(args.limit || 3);
  const result = await runDiscover(limit);
  console.log(JSON.stringify(result, null, 2));
  return;
}

if (cmd === "sources") {
  const data = load();
  console.log("Agent 痛点搜索来源（discover 命令会自动抓取 HN + Reddit）：\n");
  data.sources.forEach((s, i) => console.log(`${i + 1}. ${s}`));
  console.log(`
自动发现:
  node scripts/discover-vertical.mjs discover --limit 3

手动追加:
  node scripts/discover-vertical.mjs add --name "..." --description "..." --source "HN#123"
`);
  process.exit(0);
}

console.log(`用法:
  node scripts/discover-vertical.mjs list
  node scripts/discover-vertical.mjs discover [--limit 3]
  node scripts/discover-vertical.mjs add --name "..." --description "..." [--id xxx] [--source HN]
  node scripts/discover-vertical.mjs pick
  node scripts/discover-vertical.mjs sources
`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
