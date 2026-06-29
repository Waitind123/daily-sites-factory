#!/usr/bin/env node
/**
 * Vercel 免费版每日约 100 次部署上限。
 * 部署前检查今日已用次数；达上限则跳过（exit 0），次日自动恢复。
 *
 * 用法: node scripts/vercel-deploy-guard.mjs
 * 环境变量: VERCEL_TOKEN, VERCEL_SCOPE (team slug)
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const statePath = join(root, "state.json");
const LIMIT = 95; // 留 5 次余量

const token = process.env.VERCEL_TOKEN;
const scope = process.env.VERCEL_SCOPE || "baoyu18178053101-6131s-projects";

function todayUtc() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  if (!existsSync(statePath)) return {};
  return JSON.parse(readFileSync(statePath, "utf8"));
}

function saveDeployNote(msg) {
  const state = loadState();
  state.deployNote = msg;
  state.deployNoteAt = new Date().toISOString();
  writeFileSync(statePath, JSON.stringify(state, null, 2) + "\n");
}

async function countTodayFromApi() {
  if (!token) return null;
  const teamRes = await fetch(`https://api.vercel.com/v2/teams?slug=${scope}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!teamRes.ok) return null;
  const team = await teamRes.json();
  const teamId = team?.id;
  if (!teamId) return null;

  const since = Date.now() - 24 * 60 * 60 * 1000;
  const url = `https://api.vercel.com/v6/deployments?teamId=${teamId}&limit=100&since=${since}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) return null;
  const data = await res.json();
  return (data.deployments || []).length;
}

async function main() {
  const state = loadState();
  const note = state.deployNote || "";
  const day = todayUtc();

  if (note.includes("api-deployments-free-per-day") && state.deployNoteAt?.slice(0, 10) === day) {
    console.log(`⏸ Vercel 今日部署已达上限（记录在 state.json），跳过部署，明天再试。`);
    process.exit(0);
  }

  const count = await countTodayFromApi();
  if (count !== null) {
    console.log(`📊 Vercel 近 24h 部署次数: ${count}/${LIMIT}`);
    if (count >= LIMIT) {
      saveDeployNote(
        `CI skipped: Vercel api-deployments-free-per-day (${count}/100 in 24h). Retry tomorrow.`
      );
      console.log(`⏸ 已达 ${LIMIT} 次上限，跳过本次部署。`);
      process.exit(0);
    }
  }

  console.log("✓ 可以部署");
}

main().catch((err) => {
  console.warn("vercel-deploy-guard:", err.message);
  console.log("✓ 守卫检查失败，继续尝试部署");
});
