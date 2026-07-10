#!/usr/bin/env node
/**
 * 生成看板跳转页 → dashboard-public/index.html
 * 正式实时看板：https://intercom-pulse.vercel.app/factory-dashboard
 */
import { copyFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "dashboard-public");
const template = join(root, "scripts", "templates", "live-dashboard.html");

if (!existsSync(template)) {
  console.error("缺少看板模板:", template);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(template, join(outDir, "index.html"));

console.log("✓ 看板跳转页 → dashboard-public/index.html");
