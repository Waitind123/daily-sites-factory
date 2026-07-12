/**
 * 国内平台发帖 — Webhook 桥接（Make.com / n8n / 自建）
 *
 * 小红书/知乎/抖音 无免费公开发帖 API，通过 Webhook 转发到用户自建的自动化：
 *   CN_POST_WEBHOOK_URL=https://hook.eu2.make.com/xxx
 *
 * Webhook 收到 JSON:
 *   { platform, title, body, caption, script, tags, link, at }
 */
export async function postViaWebhook(payload) {
  const url = process.env.CN_POST_WEBHOOK_URL?.trim();
  if (!url) return { skipped: true, reason: "CN_POST_WEBHOOK_URL 未配置" };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, at: new Date().toISOString() }),
    signal: AbortSignal.timeout(60000),
  });

  if (!res.ok) {
    throw new Error(`CN webhook ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }

  let data = {};
  try {
    data = await res.json();
  } catch {
    data = { ok: true };
  }
  return { skipped: false, url: data.url || data.postUrl || null, raw: data };
}

export function isCnWebhookConfigured() {
  return Boolean(process.env.CN_POST_WEBHOOK_URL?.trim());
}
