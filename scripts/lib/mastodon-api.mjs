/**
 * Mastodon 发帖 — Access Token（Preferences → Development 创建应用）
 */

export function normalizeMastodonInstance(url) {
  return String(url || "")
    .trim()
    .replace(/\/$/, "");
}

export async function createMastodonPost({ instanceUrl, accessToken, status, visibility = "public" }) {
  const base = normalizeMastodonInstance(instanceUrl);
  if (!base) throw new Error("MASTODON_INSTANCE_URL not set");

  const res = await fetch(`${base}/api/v1/statuses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: status.slice(0, 500),
      visibility,
    }),
    signal: AbortSignal.timeout(30000),
  });

  if (!res.ok) {
    throw new Error(`Mastodon post ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }

  const data = await res.json();
  return {
    id: data.id,
    url: data.url,
  };
}

export async function verifyMastodonToken(instanceUrl, accessToken) {
  const base = normalizeMastodonInstance(instanceUrl);
  const res = await fetch(`${base}/api/v1/accounts/verify_credentials`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`Mastodon verify ${res.status}`);
  return res.json();
}
