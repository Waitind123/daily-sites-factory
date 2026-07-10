#!/usr/bin/env node
/**
 * 查询飞书 open_id（用于配置私信接收人）
 *
 * 用法（邮箱，需账号已绑定邮箱）:
 *   node scripts/feishu-resolve-open-id.mjs email your@company.com
 *
 * 用法（手机号，无邮箱时推荐）:
 *   node scripts/feishu-resolve-open-id.mjs mobile +8613800138000
 *
 * 环境变量: FEISHU_APP_ID, FEISHU_APP_SECRET
 */
const appId = process.env.FEISHU_APP_ID;
const appSecret = process.env.FEISHU_APP_SECRET;
const mode = process.argv[2];
const value = process.argv[3];

if (!appId || !appSecret || !mode || !value) {
  console.error(`用法:
  FEISHU_APP_ID=... FEISHU_APP_SECRET=... node scripts/feishu-resolve-open-id.mjs email <邮箱>
  FEISHU_APP_ID=... FEISHU_APP_SECRET=... node scripts/feishu-resolve-open-id.mjs mobile <+86手机号>`);
  process.exit(1);
}

const tokenRes = await fetch("https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
});
const tokenData = await tokenRes.json();
if (tokenData.code !== 0) {
  console.error(tokenData);
  process.exit(1);
}

const body =
  mode === "mobile"
    ? { mobiles: [value.startsWith("+") ? value : `+86${value}`] }
    : mode === "email"
      ? { emails: [value] }
      : null;

if (!body) {
  console.error("mode 必须是 email 或 mobile");
  process.exit(1);
}

const res = await fetch(
  "https://open.feishu.cn/open-apis/contact/v3/users/batch_get_id?user_id_type=open_id",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenData.tenant_access_token}`,
    },
    body: JSON.stringify(body),
  }
);
const data = await res.json();
console.log(JSON.stringify(data, null, 2));

const openId = data.data?.user_list?.[0]?.user_id;
if (openId) {
  console.error(`\n✓ 复制到 feishu.config.local 或 GitHub Secrets:\nFEISHU_RECEIVE_ID=${openId}`);
} else if (data.code !== 0) {
  console.error("\n若提示无权限，请在飞书应用 → 权限管理 开通 contact:user.id:readonly 并重新发布版本。");
  console.error("若仍失败：给机器人发一条消息后，在开放平台「日志检索」里查 sender.open_id（见 SETUP.md）。");
  process.exit(1);
} else {
  console.error("\n未找到用户。请确认手机号/邮箱与飞书账号一致，或改用「给机器人发消息 + 日志查 open_id」。");
  process.exit(1);
}
