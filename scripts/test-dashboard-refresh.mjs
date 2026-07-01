#!/usr/bin/env node
/**
 * 端到端验证：埋点写入后看板 API 能否读到变化
 * 用法: BASE_URL=http://127.0.0.1:3111 node scripts/test-dashboard-refresh.mjs
 */
const BASE = (process.env.BASE_URL || "http://127.0.0.1:3111").replace(/\/$/, "");
const SITE_ID = process.env.TEST_SITE_ID || "feature-vote";
const VISITOR = process.env.TEST_VISITOR_ID || crypto.randomUUID();

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function getDashboard() {
  const res = await fetch(`${BASE}/api/dashboard`, { cache: "no-store" });
  if (!res.ok) throw new Error(`dashboard API ${res.status}`);
  return res.json();
}

async function postCollect() {
  const res = await fetch(`${BASE}/api/collect`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://feature-vote-ten.vercel.app",
    },
    body: JSON.stringify({
      siteId: SITE_ID,
      type: "pageview",
      visitorId: VISITOR,
    }),
  });
  const body = await res.json();
  if (!res.ok || !body.ok) throw new Error(`collect failed: ${JSON.stringify(body)}`);
}

function sitePv(data) {
  return data.rollup?.sites?.[SITE_ID]?.totals?.pv ?? 0;
}

async function main() {
  console.log(`\n🧪 看板刷新测试 @ ${BASE}\n`);

  const before = await getDashboard();
  const pvBefore = sitePv(before);
  console.log(`1) 初始 ${SITE_ID} PV = ${pvBefore}`);
  console.log(`   rollup.updatedAt = ${before.rollup?.updatedAt || "null"}`);
  console.log(`   summary.totals.pv = ${before.summary?.totals?.pv ?? "n/a"}`);

  await postCollect();
  console.log(`2) 已 POST /api/collect (+1 PV)`);

  for (let i = 1; i <= 6; i++) {
    await sleep(3000);
    const after = await getDashboard();
    const pvAfter = sitePv(after);
    console.log(`   轮询 ${i}: ${SITE_ID} PV = ${pvAfter}`);
    if (pvAfter > pvBefore) {
      console.log(`3) ✅ ${SITE_ID} PV ${pvBefore} → ${pvAfter}（看板能读到新数据）`);
      console.log(`   rollup.updatedAt = ${after.rollup?.updatedAt}`);
      console.log(`   summary.today.pv = ${after.summary?.today?.pv}`);
      process.exit(0);
    }
  }

  const pvAfter = sitePv(await getDashboard());
  console.error(`3) ❌ PV 未变化: ${pvBefore} → ${pvAfter}`);
  console.error("   可能原因: ANALYTICS_GITHUB_PAT 未配置或 GitHub 写入延迟");
  process.exit(1);
}

main().catch((err) => {
  console.error("测试失败:", err.message);
  process.exit(1);
});
