# 社交自动推广配置

**请勿把 Reddit 密码或 token 发给 AI 或写进代码仓库。** 只需一次性配置 GitHub Secrets，由 CI 每天随机发帖。

## 1. 创建 Reddit 应用

1. 登录 Reddit → [App preferences](https://www.reddit.com/prefs/apps)
2. **Create App** → 类型选 **web app** 或 **script**
3. Redirect URI 填：`http://localhost:8765/callback`
4. 记下 **client id**（应用名下方字符串）和 **secret**

## 2. 获取 refresh token（本地一次）

```bash
export REDDIT_CLIENT_ID=你的client_id
export REDDIT_CLIENT_SECRET=你的secret
node scripts/setup-reddit-oauth.mjs
```

浏览器授权后，把返回的 `refresh_token` 复制下来。

## 3. 存入 GitHub Secrets

仓库 **Settings → Secrets and variables → Actions**：

| Secret | 说明 |
|--------|------|
| `REDDIT_CLIENT_ID` | Reddit 应用 client id |
| `REDDIT_CLIENT_SECRET` | Reddit 应用 secret |
| `REDDIT_REFRESH_TOKEN` | 上一步拿到的 refresh_token |

可选：`SOCIAL_PROMO_ENABLED` = `true`（不设则只 dry-run 检查）

## 4. 自动化规则（防封号）

- 每 **20 小时** 最多 1 帖
- 每 4 小时检查一次，约 **38%** 概率发帖 → 时间看起来随机
- 凌晨 UTC 2–5 点不发
- 周末发帖概率降低
- 文案每次随机组合，**60 条历史去重**
- 子版块轮换：SideProject、SaaS、EntrepreneurRideAlong 等

## 5. 手动测试

```bash
# 只看文案，不发
node scripts/post-reddit-promo.mjs --dry-run

# 强制发一帖（需 Secrets）
node scripts/post-reddit-promo.mjs --force
```

## 6. Twitter / HN

- **Twitter/X**：官方 API 需付费，暂未接入
- **Hacker News**：无发帖 API，仍用手动链接（见 `analytics/promo/SUBMIT-LINKS.md`）

## 状态文件

发帖记录：`analytics/social-promo-state.json`（由 CI 自动更新提交）
