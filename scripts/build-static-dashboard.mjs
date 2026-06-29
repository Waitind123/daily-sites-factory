#!/usr/bin/env node
/**
 * 生成静态看板 → dashboard-public/index.html
 * 部署到 GitHub Pages，不依赖 Vercel
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "dashboard-public");

const rollupPath = join(root, "analytics", "rollup.json");
const sitesPath = join(root, "sites", "factory-dashboard", "data", "sites.json");

if (!existsSync(rollupPath)) {
  console.error("缺少 analytics/rollup.json，请先运行 node scripts/seo-scan-all.mjs");
  process.exit(1);
}

const rollup = JSON.parse(readFileSync(rollupPath, "utf8"));
const sites = existsSync(sitesPath)
  ? JSON.parse(readFileSync(sitesPath, "utf8"))
  : Object.entries(rollup.sites || {}).map(([id, s]) => ({
      id,
      name: s.name || id,
      url: s.url,
    }));

function pct(n, d) {
  if (!d) return "0%";
  return ((n / d) * 100).toFixed(1) + "%";
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

let totalPv = 0,
  totalUv = 0,
  totalPurchase = 0;

const cards = sites
  .map((site) => {
    const r = rollup.sites[site.id];
    const t = r?.totals || { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
    const seo = r?.seo;
    totalPv += t.pv;
    totalUv += t.uv;
    totalPurchase += t.purchase;
    const seoClass =
      !seo ? "" : seo.score >= 80 ? "good" : seo.score >= 50 ? "mid" : "bad";
    return `
    <article class="card">
      <div class="card-head">
        <div>
          <h2>${esc(site.name)}</h2>
          <p class="id">${esc(site.id)}</p>
        </div>
        ${seo ? `<span class="badge ${seoClass}">SEO ${seo.score}</span>` : ""}
      </div>
      <div class="metrics">
        ${[["PV", t.pv], ["UV", t.uv], ["试用", t.trial], ["结账", t.checkout], ["付费", t.purchase]]
          .map(
            ([l, v]) =>
              `<div class="metric"><div class="val">${v}</div><div class="lbl">${l}</div></div>`
          )
          .join("")}
      </div>
      <p class="funnel">访问→结账 ${pct(t.checkout, t.pv)} · 访问→付费 ${pct(t.purchase, t.pv)}</p>
      ${seo ? `<p class="seo-hint">${seo.sitemapOk ? "✓ sitemap" : "✗ sitemap"} · ${seo.guideCount || 0} 指南页</p>` : ""}
      <a href="${esc(site.url)}" target="_blank" rel="noreferrer">打开站点 →</a>
    </article>`;
  })
  .join("");

const updated = rollup.updatedAt
  ? new Date(rollup.updatedAt).toLocaleString("zh-CN")
  : "暂无";

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>全站运营看板 · Daily Sites Factory</title>
  <meta name="description" content="56+ 站点 PV、UV、SEO、付费转化一览"/>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:system-ui,-apple-system,sans-serif;background:#0a0a0f;color:#f4f4f5;min-height:100vh}
    header{border-bottom:1px solid #27272a;background:#09090bcc;backdrop-filter:blur(8px);position:sticky;top:0;z-index:10;padding:1.25rem 1.5rem}
    .wrap{max-width:80rem;margin:0 auto}
    .kicker{font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;color:#818cf8}
    h1{font-size:1.5rem;font-weight:700;margin-top:.25rem}
    .meta{text-align:right;font-size:.75rem;color:#71717a}
    main{padding:2rem 1.5rem}
    .summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;margin-bottom:2rem}
    .sum-card{border:1px solid #27272a;border-radius:1rem;padding:1.25rem;background:linear-gradient(135deg,#18181b,#09090b)}
    .sum-card .big{font-size:1.75rem;font-weight:700}
    .sum-card .lbl{font-size:.8rem;color:#71717a;margin-top:.25rem}
    .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem}
    .card{border:1px solid #27272a;border-radius:1rem;padding:1.25rem;background:#18181b99}
    .card:hover{border-color:#6366f180}
    .card-head{display:flex;justify-content:space-between;gap:.75rem;align-items:flex-start}
    .card h2{font-size:1.05rem}
    .id{font-size:.7rem;color:#71717a;font-family:ui-monospace,monospace;margin-top:.15rem}
    .badge{font-size:.7rem;padding:.2rem .5rem;border-radius:999px;font-weight:600}
    .badge.good{background:#10b98126;color:#34d399}
    .badge.mid{background:#f59e0b26;color:#fbbf24}
    .badge.bad{background:#ef444426;color:#f87171}
    .metrics{display:grid;grid-template-columns:repeat(5,1fr);gap:.5rem;margin:1rem 0}
    .metric{background:#09090bcc;border-radius:.75rem;padding:.5rem .25rem;text-align:center}
    .val{font-weight:700;font-size:1rem}
    .lbl{font-size:.6rem;color:#71717a;text-transform:uppercase;margin-top:.1rem}
    .funnel,.seo-hint{font-size:.75rem;color:#a1a1aa;margin:.5rem 0}
    a{color:#818cf8;font-size:.85rem;text-decoration:none}
    a:hover{text-decoration:underline}
    footer{text-align:center;padding:2rem;color:#52525b;font-size:.75rem}
  </style>
</head>
<body>
  <header><div class="wrap" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
    <div><p class="kicker">Daily Sites Factory</p><h1>全站运营看板</h1></div>
    <div class="meta"><p>PV · UV · SEO · 转化漏斗</p><p>更新 ${esc(updated)}</p></div>
  </div></header>
  <main class="wrap">
    <div class="summary">
      <div class="sum-card"><div class="big">${sites.length}</div><div class="lbl">站点数</div></div>
      <div class="sum-card"><div class="big">${totalPv}</div><div class="lbl">总 PV</div></div>
      <div class="sum-card"><div class="big">${totalUv}</div><div class="lbl">总 UV</div></div>
      <div class="sum-card"><div class="big">${pct(totalPurchase, totalPv)}</div><div class="lbl">总付费转化</div></div>
    </div>
    <div class="grid">${cards}</div>
  </main>
  <footer>由 GitHub Actions 每日自动更新 · daily-sites-factory</footer>
</body>
</html>`;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "index.html"), html);
console.log(`✓ 静态看板 → dashboard-public/index.html (${sites.length} 站)`);
