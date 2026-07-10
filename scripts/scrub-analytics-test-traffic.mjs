#!/usr/bin/env node
/**
 * 从 rollup.json 剔除 CI / E2E / 探测脚本产生的测试流量，仅保留真实用户指标。
 * 用法: node scripts/scrub-analytics-test-traffic.mjs [--write]
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { isTestVisitor } from "./lib/analytics-real-users.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const rollupPath = join(root, "analytics", "rollup.json");
const write = process.argv.includes("--write");

function scrubDay(metrics) {
  const visitors = (metrics.visitors || []).filter((v) => !isTestVisitor(v));
  const hits = metrics.visitorHits || {};
  const realHits = Object.fromEntries(
    Object.entries(hits).filter(([vid]) => !isTestVisitor(vid))
  );

  let pv = 0;
  if (Object.keys(realHits).length > 0) {
    pv = Object.values(realHits).reduce((s, n) => s + n, 0);
  } else {
    const testCount = (metrics.visitors || []).filter((v) => isTestVisitor(v)).length;
    pv = Math.max(0, (metrics.pv || 0) - testCount);
  }

  const next = {
    ...metrics,
    pv,
    uv: visitors.length,
    visitors,
    visitorHits: Object.keys(realHits).length ? realHits : undefined,
  };

  // 历史 audience 无法按访客拆分，测试流量污染后清空
  delete next.audience;

  return next;
}

function recomputeTotals(site) {
  const totals = { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  const allVisitors = new Set();
  for (const day of Object.values(site.daily || {})) {
    totals.pv += day.pv || 0;
    totals.trial += day.trial || 0;
    totals.checkout += day.checkout || 0;
    totals.purchase += day.purchase || 0;
    for (const v of day.visitors || []) allVisitors.add(v);
  }
  totals.uv = allVisitors.size;
  site.totals = totals;
}

const rollup = JSON.parse(readFileSync(rollupPath, "utf8"));
let scrubbedDays = 0;
let removedPv = 0;

for (const site of Object.values(rollup.sites || {})) {
  const beforePv = site.totals?.pv || 0;
  for (const [day, metrics] of Object.entries(site.daily || {})) {
    const oldPv = metrics.pv || 0;
    site.daily[day] = scrubDay(metrics);
    if (site.daily[day].pv !== oldPv || metrics.audience) scrubbedDays += 1;
  }
  if (site.knownVisitors) {
    site.knownVisitors = site.knownVisitors.filter((v) => !isTestVisitor(v));
  }
  recomputeTotals(site);
  removedPv += beforePv - (site.totals?.pv || 0);
}

rollup.updatedAt = new Date().toISOString();

console.log(`Scrubbed ${scrubbedDays} day records across ${Object.keys(rollup.sites).length} sites`);
console.log(`Removed ~${removedPv} test PV from totals`);

if (write) {
  writeFileSync(rollupPath, `${JSON.stringify(rollup, null, 2)}\n`);
  console.log(`Wrote ${rollupPath}`);
} else {
  console.log("Dry run — pass --write to save");
}
