/**
 * Reddit OAuth + 发帖（refresh token，勿用密码）
 */
const UA = "daily-sites-factory-promo/1.0 by u/automation";

export async function getRedditAccessToken({ clientId, clientSecret, refreshToken }) {
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const res = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": UA,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Reddit token ${res.status}: ${t.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.access_token;
}

export async function submitRedditPost({ accessToken, subreddit, title, body, kind = "self" }) {
  const params = new URLSearchParams({
    sr: subreddit,
    title,
    kind,
    api_type: "json",
    resubmit: "true",
    sendreplies: "true",
  });
  if (kind === "self") params.set("text", body);
  else if (body) params.set("url", body);

  const res = await fetch("https://oauth.reddit.com/api/submit", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": UA,
    },
    body: params,
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Reddit submit ${res.status}: ${JSON.stringify(data).slice(0, 300)}`);
  }
  const errors = data?.json?.errors;
  if (errors?.length) {
    throw new Error(`Reddit API errors: ${JSON.stringify(errors)}`);
  }
  const url = data?.json?.data?.url;
  return { url, raw: data };
}

export async function getRedditMe(accessToken) {
  const res = await fetch("https://oauth.reddit.com/api/v1/me", {
    headers: { Authorization: `Bearer ${accessToken}`, "User-Agent": UA },
  });
  if (!res.ok) throw new Error(`Reddit me ${res.status}`);
  return res.json();
}
