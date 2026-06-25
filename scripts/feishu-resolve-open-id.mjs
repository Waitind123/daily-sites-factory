#!/usr/bin/env node
/**
 * 通过邮箱查询飞书 open_id（用于配置私信接收人）
 *
 * 用法:
 *   FEISHU_APP_ID=cli_xxx FEISHU_APP_SECRET=xxx \
 *     node scripts/feishu-resolve-open-id.mjs your@email.com
 */
const appId = process.env.FEISHU_APP_ID;
const appSecret = process.env.FEISHU_APP_SECRET;
const email = process.argv[2];

if (!appId || !appSecret || !email) {
  console.error("用法: FEISHU_APP_ID=... FEISHU_APP_SECRET=... node scripts/feishu-resolve-open-id.mjs <email>");
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

const res = await fetch(
  "https://open.feishu.cn/open-apis/contact/v3/users/batch_get_id?user_id_type=open_id",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenData.tenant_access_token}`,
    },
    body: JSON.stringify({ emails: [email] }),
  }
);
const data = await res.json();
console.log(JSON.stringify(data, null, 2));

if (data.data?.user_list?.[0]?.user_id) {
  console.error(`\nFEISHU_RECEIVE_ID=${data.data.user_list[0].user_id}`);
}
