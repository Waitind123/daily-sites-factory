import { createCipheriv, createDecipheriv, createHash } from "crypto";

export function decryptFeishuEvent(encryptKey: string, encrypted: string) {
  const key = createHash("sha256").update(encryptKey).digest();
  const buf = Buffer.from(encrypted, "base64");
  const iv = buf.subarray(0, 16);
  const data = buf.subarray(16);
  const decipher = createDecipheriv("aes-256-cbc", key, iv);
  decipher.setAutoPadding(true);
  return Buffer.concat([decipher.update(data), decipher.final()]).toString("utf8");
}

export async function getTenantToken() {
  const appId = process.env.FEISHU_APP_ID!;
  const appSecret = process.env.FEISHU_APP_SECRET!;
  const res = await fetch("https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(JSON.stringify(data));
  return data.tenant_access_token as string;
}

export async function replyText(messageId: string, text: string) {
  const token = await getTenantToken();
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
  return res.json();
}

export function parseText(content: string) {
  try {
    return JSON.parse(content).text?.trim() || "";
  } catch {
    return content.trim();
  }
}

export function normalizeCommand(text: string) {
  return text.replace(/@[^\s]+\s*/g, "").trim();
}

async function dispatchGitHubCommand(text: string, chatId: string, messageId: string) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || "Waitind123/daily-sites-factory";
  if (!token) {
    await replyText(messageId, "⚠️ 服务端未配置 GITHUB_TOKEN，无法执行命令。请在 Vercel 环境变量添加。");
    return;
  }
  const res = await fetch(`https://api.github.com/repos/${repo}/dispatches`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_type: "feishu_command",
      client_payload: { text, chat_id: chatId, message_id: messageId },
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    await replyText(messageId, `❌ 触发失败 (${res.status}): ${err.slice(0, 200)}`);
    return;
  }
  await replyText(messageId, "⏳ 已收到，正在处理…");
}

export async function handleFeishuEvent(body: Record<string, unknown>) {
  if (body.type === "url_verification" && body.challenge) {
    return { challenge: body.challenge };
  }

  const header = body.header as { event_type?: string } | undefined;
  if (header?.event_type !== "im.message.receive_v1") {
    return { ok: true };
  }

  const event = body.event as {
    message?: { message_id?: string; chat_id?: string; message_type?: string; content?: string };
  };
  const message = event?.message;
  if (!message || message.message_type !== "text") {
    return { ok: true };
  }

  const allowedChats = (process.env.FEISHU_ALLOWED_CHAT_IDS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (allowedChats.length && message.chat_id && !allowedChats.includes(message.chat_id)) {
    return { ok: true, ignored: "chat not allowed" };
  }

  const text = normalizeCommand(parseText(message.content || ""));
  if (!text) return { ok: true };

  await dispatchGitHubCommand(text, message.chat_id || "", message.message_id || "");
  return { ok: true };
}
