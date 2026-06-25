#!/usr/bin/env node
/**
 * 发送部署成功通知到飞书群机器人
 *
 * 用法:
 *   node scripts/notify-feishu.mjs <site-id> <deploy-url> [site-name]
 *
 * 环境变量:
 *   FEISHU_WEBHOOK_URL — 飞书群机器人 Webhook 完整 URL
 *     形如 https://open.feishu.cn/open-apis/bot/v2/hook/xxxx
 */
const webhook = process.env.FEISHU_WEBHOOK_URL;
const siteId = process.argv[2];
const deployUrl = process.argv[3];
const siteName = process.argv[4] || siteId;

if (!webhook) {
  console.error("FEISHU_WEBHOOK_URL 未配置，跳过飞书通知");
  process.exit(0);
}

if (!siteId || !deployUrl) {
  console.error("用法: node scripts/notify-feishu.mjs <site-id> <deploy-url> [site-name]");
  process.exit(1);
}

const time = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

const body = {
  msg_type: "post",
  content: {
    post: {
      zh_cn: {
        title: "🚀 站点部署成功",
        content: [
          [
            { tag: "text", text: `站点：${siteName} (${siteId})\n` },
            { tag: "text", text: `时间：${time}\n` },
          ],
          [{ tag: "a", text: "打开公网 URL", href: deployUrl }],
        ],
      },
    },
  },
};

const res = await fetch(webhook, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
  signal: AbortSignal.timeout(15000),
});

const data = await res.json().catch(() => ({}));

if (!res.ok || (data.code !== undefined && data.code !== 0)) {
  console.error("飞书通知失败:", res.status, data);
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, siteId, deployUrl }));
