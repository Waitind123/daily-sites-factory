#!/usr/bin/env node
/**
 * IndexNow — 向 Bing/Yandex 等推送全站 sitemap URL（无需 Google 账号）
 * 文档: https://www.indexnow.org/documentation
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const KEY = process.env.INDEXNOW_KEY || "dailysitesfactory2026key8f3a2b1c";

function keyLocationForHost(host) {
  if (process.env.INDEXNOW_KEY_LOCATION) return process.env.INDEXNOW_KEY_LOCATION;
  return `https://${host}/indexnow-key.txt`;
}

const deployUrls = JSON.parse(
  readFileSync(join(root, "scripts", "sites-deploy-urls.json"), "utf8")
);

function parseSitemapUrls(xml, host) {
  const urls = [];
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const u = m[1].trim();
    if (u.startsWith("http")) urls.push(u);
  }
  if (!urls.length) {
    urls.push(host);
    urls.push(`${host}/join`);
  }
  return urls;
}

async function fetchSitemapUrls(siteUrl) {
  const base = siteUrl.replace(/\/$/, "");
  try {
    const res = await fetch(`${base}/sitemap.xml`, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) return [base, `${base}/join`];
    const xml = await res.text();
    return parseSitemapUrls(xml, base);
  } catch {
    return [base, `${base}/join`];
  }
}

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

async function submitBatch(urlList) {
  const host = new URL(urlList[0]).host;
  const keyLocation = keyLocationForHost(host);
  const body = {
    host,
    key: KEY,
    keyLocation,
    urlList: urlList.slice(0, 10000),
  };
  const results = [];
  for (const endpoint of ENDPOINTS) {
    const label = endpoint.split("/")[2];
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(30000),
      });
      const ok = res.status === 200 || res.status === 202;
      results.push({ host, endpoint: label, status: res.status, ok });
      console.log(`  IndexNow ${label} → ${res.status}${ok ? "" : ` (key: ${keyLocation})`}`);
    } catch (e) {
      results.push({ host, endpoint: label, status: 0, ok: false, error: e.message });
      console.log(`  IndexNow ${label} → fail ${e.message}`);
    }
  }
  return results;
}

async function main() {
  const allUrls = [];
  const ids = Object.keys(deployUrls);
  console.log(`\n📡 IndexNow 提交 ${ids.length} 站...\n`);

  for (const id of ids) {
    const urls = await fetchSitemapUrls(deployUrls[id]);
    allUrls.push(...urls);
    console.log(`  ${id}: ${urls.length} URLs`);
  }

  const unique = [...new Set(allUrls)];
  // IndexNow 单次最多 10000；按 host 分批
  const byHost = {};
  for (const u of unique) {
    const h = new URL(u).host;
    if (!byHost[h]) byHost[h] = [];
    byHost[h].push(u);
  }

  const allResults = [];
  for (const [host, list] of Object.entries(byHost)) {
    console.log(`\n提交 ${host} (${list.length} URLs, key → ${keyLocationForHost(host)})...`);
    for (let i = 0; i < list.length; i += 10000) {
      const batch = await submitBatch(list.slice(i, i + 10000));
      allResults.push(...batch);
    }
  }

  const ok = allResults.filter((r) => r.ok).length;
  const fail = allResults.length - ok;
  console.log(`\n✓ 共提交 ${unique.length} 个 URL · ${Object.keys(byHost).length} 个 host`);
  console.log(`  端点响应: ${ok} 成功 / ${fail} 失败\n`);

  if (fail > 0 && ok === 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
