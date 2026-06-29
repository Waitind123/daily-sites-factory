#!/usr/bin/env node
/**
 * 统计近 N 天 GitHub Actions 触发的 Vercel 部署任务数。
 * 用法: node scripts/vercel-deploy-stats.mjs [days=7]
 */
import { execSync } from "child_process";

const days = Number(process.argv[2] || 7);
const since = new Date(Date.now() - days * 86400000).toISOString();

const raw = execSync(
  `gh run list --workflow=deploy-site.yml --limit 300 --json databaseId,createdAt,conclusion`,
  { encoding: "utf8" }
);
const runs = JSON.parse(raw).filter((r) => r.createdAt >= since);

const byDay = {};
for (const r of runs) {
  const day = r.createdAt.slice(0, 10);
  byDay[day] ??= { workflows: 0, vercelSuccess: 0, vercelFail: 0 };
  byDay[day].workflows++;
  try {
    const out = execSync(
      `gh api "repos/Waitind123/daily-sites-factory/actions/runs/${r.databaseId}/jobs" --jq '.jobs[] | select(.name | startswith("deploy (")) | .conclusion'`,
      { encoding: "utf8" }
    ).trim();
    for (const line of out.split("\n").filter(Boolean)) {
      if (line === "success") byDay[day].vercelSuccess++;
      else if (line === "failure") byDay[day].vercelFail++;
    }
  } catch {
    /* no jobs */
  }
}

console.log(`\n近 ${days} 天 Vercel 部署统计\n`);
console.log("免费版约 100 次/天。一次 push 若改了 N 个站点，会并行部署 N 次。\n");
for (const day of Object.keys(byDay).sort()) {
  const d = byDay[day];
  console.log(
    `${day}  workflow ${d.workflows} 次 · Vercel 成功 ${d.vercelSuccess} · 失败 ${d.vercelFail}`
  );
}
console.log("");
