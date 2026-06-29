#!/usr/bin/env node
/**
 * 全站 SEO 扫描 + 写入 analytics/rollup.json（无需 Vercel 配置）
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const urlsPath = join(root, "scripts", "sites-deploy-urls.json");
const rollupPath = join(root, "analytics", "rollup.json");
const state = JSON.parse(readFileSync(join(root, "state.json"), "utf8"));

const deployUrls = JSON.parse(readFileSync(urlsPath, "utf8"));

function siteName(id) {
  const h = (state.history || []).find((x) => x.verticalId === id);
  return h?.name || id;
}

function scoreSeo(m) {
  let s = 0;
  if (m.robotsOk) s += 15;
  if (m.sitemapOk) s += 15;
  if (m.titleLen >= 30 && m.titleLen <= 65) s += 20;
  else if (m.titleLen > 0) s += 10;
  if (m.descriptionLen >= 80 && m.descriptionLen <= 160) s += 20;
  else if (m.descriptionLen > 0) s += 10;
  if (m.hasOg) s += 15;
  if (m.hasJsonLd) s += 10;
  if (m.guideCount > 0) s += 5;
  return Math.min(100, s);
}

async function scanSite(baseUrl) {
  const url = baseUrl.replace(/\/$/, "");
  let robotsOk = false,
    sitemapOk = false,
    title = "",
    description = "",
    hasOg = false,
    hasJsonLd = false,
    guideCount = 0;

  try {
    const r = await fetch(`${url}/robots.txt`, { signal: AbortSignal.timeout(12000) });
    if (r.ok) {
      const t = await r.text();
      robotsOk = /Sitemap:/i.test(t) || t.includes("Allow:");
    }
  } catch {
    /* */
  }
  try {
    const r = await fetch(`${url}/sitemap.xml`, { signal: AbortSignal.timeout(12000) });
    if (r.ok) {
      const xml = await r.text();
      sitemapOk = xml.includes("<urlset") || xml.includes("<url>");
      guideCount = (xml.match(/\/guide\//g) || []).length;
    }
  } catch {
    /* */
  }
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "daily-sites-factory-seo/1.0" },
      signal: AbortSignal.timeout(15000),
    });
    if (r.ok) {
      const html = await r.text();
      title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() || "";
      description =
        html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1]?.trim() ||
        html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)?.[1]?.trim() ||
        "";
      hasOg = /property=["']og:title["']/i.test(html);
      hasJsonLd = /application\/ld\+json/i.test(html);
    }
  } catch {
    /* */
  }

  const partial = {
    robotsOk,
    sitemapOk,
    title,
    titleLen: title.length,
    description,
    descriptionLen: description.length,
    hasOg,
    hasJsonLd,
    guideCount,
  };
  return { ...partial, lastChecked: new Date().toISOString(), score: scoreSeo(partial) };
}

function emptyRollup() {
  return { version: 1, updatedAt: null, sites: {} };
}

function loadRollup() {
  if (!existsSync(rollupPath)) return emptyRollup();
  return JSON.parse(readFileSync(rollupPath, "utf8"));
}

async function main() {
  const rollup = loadRollup();
  const ids = Object.keys(deployUrls);
  console.log(`\n🔍 SEO 扫描 ${ids.length} 个站点...\n`);

  for (const id of ids) {
    const url = deployUrls[id];
    try {
      const seo = await scanSite(url);
      const prev = rollup.sites[id] || {};
      rollup.sites[id] = {
        url,
        name: siteName(id),
        daily: prev.daily || {},
        totals: prev.totals || { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 },
        seo,
      };
      console.log(`  ✓ ${id} SEO ${seo.score}`);
    } catch (e) {
      console.log(`  ✗ ${id} ${e.message}`);
    }
  }

  rollup.updatedAt = new Date().toISOString();
  writeFileSync(rollupPath, JSON.stringify(rollup, null, 2) + "\n");
  console.log(`\n✓ 已写入 ${rollupPath}\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
