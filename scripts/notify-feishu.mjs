#!/usr/bin/env node
/**
 * 发送部署成功通知到飞书
 *
 * 用法:
 *   node scripts/notify-feishu.mjs <site-id> <deploy-url> [site-name]
 *
 * 模式 A — 私信（推荐，发给你个人）:
 *   FEISHU_APP_ID
 *   FEISHU_APP_SECRET
 *   FEISHU_RECEIVE_ID          你的 open_id（见 SETUP.md）
 *   FEISHU_RECEIVE_EMAIL         或直接用飞书登录邮箱（更简单）
 *   FEISHU_RECEIVE_ID_TYPE     可选，默认 open_id
 *
 * 模式 B — 群机器人 Webhook（发到群）:
 *   FEISHU_WEBHOOK_URL
 *
 * 优先使用模式 A；未配置 App 凭证时回退到 Webhook。
 */
const siteId = process.argv[2];
const deployUrl = process.argv[3];
const siteName = process.argv[4] || siteId;

const webhook = process.env.FEISHU_WEBHOOK_URL;
const appId = process.env.FEISHU_APP_ID;
const appSecret = process.env.FEISHU_APP_SECRET;
const receiveId = process.env.FEISHU_RECEIVE_ID;
const receiveEmail = process.env.FEISHU_RECEIVE_EMAIL;
const receiveIdType = receiveEmail
  ? "email"
  : process.env.FEISHU_RECEIVE_ID_TYPE || "open_id";
const effectiveReceiveId = receiveEmail || receiveId;

const hasDm = appId && appSecret && effectiveReceiveId;
const hasWebhook = Boolean(webhook);

if (!hasDm && !hasWebhook) {
  console.error(
    "飞书未配置：请设置 FEISHU_APP_ID + FEISHU_APP_SECRET + FEISHU_RECEIVE_ID/FEISHU_RECEIVE_EMAIL（私信），或 FEISHU_WEBHOOK_URL（群）"
  );
  process.exit(0);
}

if (!siteId || !deployUrl) {
  console.error("用法: node scripts/notify-feishu.mjs <site-id> <deploy-url> [site-name]");
  process.exit(1);
}

const time = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

const postBody = {
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

async function getTenantToken() {
  const res = await fetch("https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
    signal: AbortSignal.timeout(15000),
  });
  const data = await res.json();
  if (!res.ok || data.code !== 0) {
    throw new Error(`获取 tenant_access_token 失败: ${JSON.stringify(data)}`);
  }
  return data.tenant_access_token;
}

async function sendDm() {
  const token = await getTenantToken();
  const url = `https://open.feishu.cn/open-apis/im/v1/messages?receive_id_type=${encodeURIComponent(receiveIdType)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      receive_id: effectiveReceiveId,
      msg_type: "post",
      content: JSON.stringify(postBody.content),
    }),
    signal: AbortSignal.timeout(15000),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.code !== 0) {
    throw new Error(`飞书私信失败: ${JSON.stringify(data)}`);
  }
  return { mode: "dm", ...data };
}

async function sendWebhook() {
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postBody),
    signal: AbortSignal.timeout(15000),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || (data.code !== undefined && data.code !== 0)) {
    throw new Error(`飞书群通知失败: ${JSON.stringify(data)}`);
  }
  return { mode: "webhook", ...data };
}

try {
  const result = hasDm ? await sendDm() : await sendWebhook();
  console.log(JSON.stringify({ ok: true, siteId, deployUrl, ...result }));
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
