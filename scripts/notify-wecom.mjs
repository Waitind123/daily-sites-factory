#!/usr/bin/env node
/**
 * 发送部署成功通知到企业微信群机器人
 *
 * 用法:
 *   node scripts/notify-wecom.mjs <site-id> <deploy-url> [site-name]
 *
 * 环境变量:
 *   WECOM_WEBHOOK_URL — 企业微信群机器人 Webhook 完整 URL
 *     形如 https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxx
 */
const webhook = process.env.WECOM_WEBHOOK_URL;
const siteId = process.argv[2];
const deployUrl = process.argv[3];
const siteName = process.argv[4] || siteId;

if (!webhook) {
  console.error("WECOM_WEBHOOK_URL 未配置，跳过企业微信通知");
  process.exit(0);
}

if (!siteId || !deployUrl) {
  console.error("用法: node scripts/notify-wecom.mjs <site-id> <deploy-url> [site-name]");
  process.exit(1);
}

const time = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

const body = {
  msgtype: "markdown",
  markdown: {
    content: [
      "## 站点部署成功",
      `> **站点**: ${siteName} (\`${siteId}\`)`,
      `> **公网 URL**: [${deployUrl}](${deployUrl})`,
      `> **时间**: ${time}`,
    ].join("\n"),
  },
};

const res = await fetch(webhook, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
  signal: AbortSignal.timeout(15000),
});

const data = await res.json().catch(() => ({}));

if (!res.ok || data.errcode !== 0) {
  console.error("企业微信通知失败:", res.status, data);
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, siteId, deployUrl }));
