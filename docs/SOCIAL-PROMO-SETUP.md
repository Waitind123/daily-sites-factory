# 社交自动推广 — 多平台配置指南

## 快速理解

**配哪个平台，就自动发哪个。** 不需要全部配齐。

| 平台 | 能否全自动 | 你需要做的 |
|------|-----------|-----------|
| Reddit | ✅ | 填 3 个 GitHub Secrets |
| Bluesky | ✅ | 填 2 个 GitHub Secrets |
| Mastodon | ✅ | 填 2 个 GitHub Secrets |
| X / LinkedIn / HN | ❌ | 每天自动生成一键链接（`promo-multi-daily`） |

总开关：`SOCIAL_PROMO_ENABLED` = `true`

---

## 0. 总开关（必做）

GitHub → 仓库 **Settings → Secrets and variables → Actions** → New secret

| Secret | 值 |
|--------|-----|
| `SOCIAL_PROMO_ENABLED` | `true` |

不设 = 只预览文案，不会真发。

---

## 1. Reddit（已支持）

### Secrets

| Secret | 说明 |
|--------|------|
| `REDDIT_CLIENT_ID` | Reddit 应用 client id |
| `REDDIT_CLIENT_SECRET` | Reddit 应用 secret |
| `REDDIT_REFRESH_TOKEN` | OAuth refresh token |

### 获取 token（本地一次）

1. https://www.reddit.com/prefs/apps → **Create App**
2. 类型选 **web app**，Redirect URI：`http://localhost:8765/callback`
3. 本地运行：

```bash
export REDDIT_CLIENT_ID=你的client_id
export REDDIT_CLIENT_SECRET=你的secret
node scripts/setup-reddit-oauth.mjs
```

4. 浏览器授权后，把 `refresh_token` 复制到 GitHub Secret

---

## 2. Bluesky（已支持，免费）

### Secrets

| Secret | 说明 |
|--------|------|
| `BLUESKY_IDENTIFIER` | 你的 handle（如 `name.bsky.social`）或注册邮箱 |
| `BLUESKY_APP_PASSWORD` | App Password（**不是**登录密码） |

### 获取 App Password

1. 登录 https://bsky.app
2. **Settings → Privacy and security → App passwords**
3. **Add new** → 复制生成的密码
4. 填入 GitHub Secrets

---

## 3. Mastodon（已支持，免费）

### Secrets

| Secret | 示例 |
|--------|------|
| `MASTODON_INSTANCE_URL` | `https://mastodon.social` |
| `MASTODON_ACCESS_TOKEN` | 应用 Access Token |

### 获取 Access Token

1. 登录你的 Mastodon 实例（如 mastodon.social、mastodon.online）
2. **Preferences → Development → New Application**
3. 应用名随意，权限勾选 **write:statuses**
4. 提交后复制 **Your access token**
5. 实例 URL 填你的域名（不要末尾 `/`）

---

## 4. X / LinkedIn / Hacker News（不能全自动）

| 平台 | 原因 | 替代方案 |
|------|------|----------|
| **X (Twitter)** | 发帖 API 要付费（~$100/月） | `promo-multi-daily` 每天生成预填推文链接 |
| **LinkedIn** | 需企业 OAuth + 审核 | 同上，生成 share 链接 |
| **Hacker News** | 没有公开发帖 API | 同上，生成 submitlink |
| **微信朋友圈** | 无开放 API | 同上，生成中文文案复制 |

工作流 **Promo multi-platform (no Reddit)** 每天 08:30 UTC 自动生成这些链接，可选配 `FEISHU_WEBHOOK_URL` 推送到飞书。

---

## 查看当前配置了哪些平台

GitHub Actions 日志里每次运行会先打印状态，或本地：

```bash
node scripts/post-social-auto.mjs --status
```

输出示例：

```
✅ Reddit — 已配置，到点会自动发
⬜ Bluesky
   缺少 Secrets: BLUESKY_IDENTIFIER, BLUESKY_APP_PASSWORD
⬜ Mastodon
   缺少 Secrets: MASTODON_INSTANCE_URL, MASTODON_ACCESS_TOKEN
```

---

## 测试发帖

GitHub → Actions → **Social auto post (daily random)** → Run workflow

| 选项 | 作用 |
|------|------|
| `force=true` | 立刻发，不等今日随机时刻 |
| `dry_run=true` | 只看文案和平台状态 |

---

## 自动化规则

- 每天 **1 轮**，每个已配置平台各发 **1 条**
- 发帖时刻每天 **UTC 随机**（8:00–20:59）
- 到点后额外 **0–12 分钟** 随机延迟
- 文案随机组合，历史去重

---

## 状态与看板

发帖记录：`analytics/social-promo-state.json`

看板「推广效果」可追踪 UTM 来源（reddit / bluesky / mastodon 等）。
