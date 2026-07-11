# 社交自动推广 — 每天随机时间自动发帖

## 工作原理

工作流 **Social auto post (daily random)** 每小时检查一次：

1. 每天 **UTC 日期** 生成一个固定的随机发帖时刻（8:00–20:59 UTC 之间）
2. 时刻写入 `analytics/social-promo-state.json` 的 `todaySchedule`
3. 到点后 **自动发 1 轮**（Reddit + Bluesky，各 1 条），并额外随机延迟 0–12 分钟
4. 同一天不会重复发

这样发帖时间每天不同，看起来像人工操作。

---

## 一次性配置（约 5 分钟）

### 必做：开启总开关

| Secret | 值 |
|--------|-----|
| `SOCIAL_PROMO_ENABLED` | `true` |

不设此项则只预览文案，不会真发。

### 渠道 A：Reddit（推荐）

| Secret | 说明 |
|--------|------|
| `REDDIT_CLIENT_ID` | Reddit 应用 client id |
| `REDDIT_CLIENT_SECRET` | Reddit 应用 secret |
| `REDDIT_REFRESH_TOKEN` | OAuth refresh token |

获取 token：

```bash
export REDDIT_CLIENT_ID=你的client_id
export REDDIT_CLIENT_SECRET=你的secret
node scripts/setup-reddit-oauth.mjs
```

Reddit 应用：https://www.reddit.com/prefs/apps → Create App → Redirect URI: `http://localhost:8765/callback`

### 渠道 B：Bluesky（免费、无需审核）

| Secret | 说明 |
|--------|------|
| `BLUESKY_IDENTIFIER` | 你的 handle 或注册邮箱 |
| `BLUESKY_APP_PASSWORD` | App Password（非登录密码） |

获取 App Password：Bluesky → Settings → Privacy and security → App passwords → Add new

### 可选：飞书通知

| Secret | 说明 |
|--------|------|
| `FEISHU_WEBHOOK_URL` | 发帖成功后推送链接 |

---

## 手动测试

GitHub → Actions → **Social auto post (daily random)** → Run workflow

| 选项 | 作用 |
|------|------|
| `force=true` | 立即发，忽略今日随机时刻 |
| `dry_run=true` | 只看文案，不发 |

本地：

```bash
# 预览今日计划时刻 + 文案
node scripts/post-social-auto.mjs --dry-run

# 强制发（需 export Secrets）
SOCIAL_PROMO_ENABLED=true node scripts/post-social-auto.mjs --force
```

---

## 防封号规则

- 每天最多 **1 轮**（Reddit 1 帖 + Bluesky 1 帖）
- 两帖之间至少 **20 小时**
- 发帖时刻每天随机（8–21 UTC）
- 到点后额外 **0–12 分钟** 随机延迟
- 文案随机组合，60+ 条历史去重
- Reddit 子版块轮换：SideProject、SaaS 等

---

## 其他平台

| 平台 | 自动发帖 | 说明 |
|------|----------|------|
| Reddit | ✅ | 本 workflow |
| Bluesky | ✅ | 本 workflow |
| X / LinkedIn / HN | ❌ | 无免费 API，见 `promo-multi-daily` 生成一键链接 |

---

## 状态文件

`analytics/social-promo-state.json` — 含 `todaySchedule`、`lastPostedDay`、发帖历史

看板「推广效果」可溯源 UTM 转化。
