#!/usr/bin/env node
/**
 * 获取 Reddit refresh token（本地一次性运行，勿提交 token）
 *
 * 1. https://www.reddit.com/prefs/apps → create app → script / web
 * 2. export REDDIT_CLIENT_ID=... REDDIT_CLIENT_SECRET=...
 * 3. node scripts/setup-reddit-oauth.mjs
 * 4. 浏览器打开输出的 URL，授权后把 redirect 的 ?code= 贴回终端
 * 5. 将 refresh_token 存入 GitHub Secret: REDDIT_REFRESH_TOKEN
 */
import { createServer } from "http";
import { URL } from "url";

const clientId = process.env.REDDIT_CLIENT_ID;
const clientSecret = process.env.REDDIT_CLIENT_SECRET;
const redirectUri = process.env.REDDIT_REDIRECT_URI || "http://localhost:8765/callback";

if (!clientId || !clientSecret) {
  console.error("需要 REDDIT_CLIENT_ID 和 REDDIT_CLIENT_SECRET");
  process.exit(1);
}

const authUrl =
  `https://www.reddit.com/api/v1/authorize?` +
  new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    state: "promo-setup",
    redirect_uri: redirectUri,
    duration: "permanent",
    scope: "submit identity read",
  });

console.log("\n1) 打开此 URL 并登录 Reddit 授权:\n");
console.log(authUrl);
console.log("\n2) 等待本地回调...\n");

const server = createServer(async (req, res) => {
  const u = new URL(req.url, "http://localhost:8765");
  if (u.pathname !== "/callback") {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  const code = u.searchParams.get("code");
  if (!code) {
    res.writeHead(400);
    res.end("missing code");
    return;
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const tokenRes = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "daily-sites-factory-setup/1.0",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
  });
  const tokenData = await tokenRes.json();
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("OK — 回到终端复制 refresh_token，可关闭此页");

  console.log("\n✓ Token 响应:\n");
  console.log(JSON.stringify(tokenData, null, 2));
  console.log("\n将 refresh_token 存入 GitHub Secrets → REDDIT_REFRESH_TOKEN\n");
  server.close();
  process.exit(0);
});

server.listen(8765, () => {
  console.log("监听 http://localhost:8765/callback");
});
