/**
 * 飞书 API 共享模块（notify / reply / token）
 */

export async function getTenantToken(appId, appSecret) {
  const res = await fetch("https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`tenant_token: ${JSON.stringify(data)}`);
  return data.tenant_access_token;
}

export async function replyText({
  appId,
  appSecret,
  messageId,
  text,
}) {
  const token = await getTenantToken(appId, appSecret);
  const res = await fetch(
    `https://open.feishu.cn/open-apis/im/v1/messages/${messageId}/reply`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        msg_type: "text",
        content: JSON.stringify({ text }),
      }),
    }
  );
  const data = await res.json();
  if (data.code !== 0) throw new Error(`reply: ${JSON.stringify(data)}`);
  return data;
}

export async function sendToChat({
  appId,
  appSecret,
  chatId,
  text,
}) {
  const token = await getTenantToken(appId, appSecret);
  const res = await fetch(
    "https://open.feishu.cn/open-apis/im/v1/messages?receive_id_type=chat_id",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        receive_id: chatId,
        msg_type: "text",
        content: JSON.stringify({ text }),
      }),
    }
  );
  const data = await res.json();
  if (data.code !== 0) throw new Error(`send: ${JSON.stringify(data)}`);
  return data;
}

export function parseMessageText(content) {
  try {
    const parsed = JSON.parse(content);
    return (parsed.text || "").trim();
  } catch {
    return String(content || "").trim();
  }
}

/** 去掉 @机器人 前缀 */
export function normalizeCommand(text) {
  return text.replace(/@[^\s]+\s*/g, "").trim();
}
