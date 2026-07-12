/**
 * X (Twitter) API v2 发帖 — 需 OAuth 2.0 User Access Token (tweet.write)
 * 在 https://developer.twitter.com 创建 App，获取 User Access Token
 *
 * Secrets:
 *   X_OAUTH2_ACCESS_TOKEN — User context token with tweet.write scope
 * 或 OAuth 1.0a:
 *   X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET
 */
import crypto from "crypto";

function oauth1Header(method, url, params, keys) {
  const oauth = {
    oauth_consumer_key: keys.apiKey,
    oauth_nonce: crypto.randomBytes(16).toString("hex"),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_token: keys.accessToken,
    oauth_version: "1.0",
  };
  const all = { ...params, ...oauth };
  const base = Object.keys(all)
    .sort()
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(all[k])}`)
    .join("&");
  const sigBase = `${method}&${encodeURIComponent(url)}&${encodeURIComponent(base)}`;
  const signingKey = `${encodeURIComponent(keys.apiSecret)}&${encodeURIComponent(keys.accessSecret)}`;
  oauth.oauth_signature = crypto.createHmac("sha1", signingKey).update(sigBase).digest("base64");
  const header =
    "OAuth " +
    Object.keys(oauth)
      .sort()
      .map((k) => `${encodeURIComponent(k)}="${encodeURIComponent(oauth[k])}"`)
      .join(", ");
  return header;
}

export function isXConfigured() {
  if (process.env.X_OAUTH2_ACCESS_TOKEN?.trim()) return true;
  return Boolean(
    process.env.X_API_KEY &&
      process.env.X_API_SECRET &&
      process.env.X_ACCESS_TOKEN &&
      process.env.X_ACCESS_TOKEN_SECRET
  );
}

export async function postTweet(text) {
  const body = { text: text.slice(0, 280) };
  const url = "https://api.twitter.com/2/tweets";

  const oauth2 = process.env.X_OAUTH2_ACCESS_TOKEN?.trim();
  if (oauth2) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${oauth2}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) {
      throw new Error(`X API ${res.status}: ${(await res.text()).slice(0, 200)}`);
    }
    const data = await res.json();
    const id = data.data?.id;
    return { id, url: id ? `https://x.com/i/web/status/${id}` : null };
  }

  const auth = oauth1Header("POST", url, {}, {
    apiKey: process.env.X_API_KEY,
    apiSecret: process.env.X_API_SECRET,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessSecret: process.env.X_ACCESS_TOKEN_SECRET,
  });
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`X OAuth1 ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  const data = await res.json();
  const id = data.data?.id;
  return { id, url: id ? `https://x.com/i/web/status/${id}` : null };
}
