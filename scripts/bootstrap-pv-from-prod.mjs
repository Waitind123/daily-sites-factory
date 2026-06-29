#!/usr/bin/env node
/**
 * 对全部生产 URL 发 HEAD 请求，成功则 +1 PV 写入 rollup.json
 * 用法: node scripts/bootstrap-pv-from-prod.mjs
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { recordLocalEvent } from "./lib/rollup-local.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const deployUrlsPath = join(root, "scripts", "sites-deploy-urls.json");
const deployUrls = existsSync(deployUrlsPath)
  ? JSON.parse(readFileSync(deployUrlsPath, "utf8"))
  : {};

let ok = 0;
let fail = 0;

for (const [siteId, url] of Object.entries(deployUrls)) {
  const base = String(url).replace(/\/$/, "");
  try {
    const res = await fetch(base, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(15000) });
    if (res.ok || res.status === 405) {
      recordLocalEvent({ siteId, type: "pageview", visitorId: "bootstrap-probe", url: base });
      ok++;
      process.stdout.write(".");
    } else {
      fail++;
      console.log(`\n✗ ${siteId} HTTP ${res.status}`);
    }
  } catch (e) {
    fail++;
    console.log(`\n✗ ${siteId} ${e.message}`);
  }
}

console.log(`\n✓ ${ok} 站写入 PV · ${fail} 失败`);
