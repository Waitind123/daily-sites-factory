# 每日全渠道营销

一条流水线覆盖：**Reddit + X + SEO + 小红书 + 知乎 + 抖音**

Workflow: **Marketing daily (all channels)** (`marketing-daily.yml`)

---

## 各平台怎么「自动发」

| 平台 | 方式 | 你需要配什么 |
|------|------|-------------|
| **SEO** | ✅ 全自动 IndexNow | 不用配 |
| **Reddit** | ✅ API 真发 | `REDDIT_*`（已有） |
| **X** | ✅ API 真发 | `X_OAUTH2_ACCESS_TOKEN` 或 OAuth1 四件套 |
| **小红书** | Webhook → Make/n8n 代发 | `CN_POST_WEBHOOK_URL` |
| **知乎** | 同上 | 同上 |
| **抖音** | 同上 | 同上 |

### 为什么国内三个不能直连？

小红书 / 知乎 / 抖音 **没有** 对个人开放的免费发帖 API。行业通用做法是：

```
GitHub Actions → Webhook → Make.com / n8n → 各平台自动发
```

我们负责：**每天生成文案 + 推到你的 Webhook**；你用 Make 连各平台账号即可真发。

---

## 一次性配置

### 1. 总开关

| Secret | 值 |
|--------|-----|
| `SOCIAL_PROMO_ENABLED` | `true` |

### 2. Reddit（已有）

`REDDIT_CLIENT_ID` / `REDDIT_CLIENT_SECRET` / `REDDIT_REFRESH_TOKEN`

### 3. X (Twitter)

在 [developer.twitter.com](https://developer.twitter.com) 创建 App，开启 **tweet.write**。

**方式 A（推荐）** — OAuth 2.0 User Token：

| Secret | 说明 |
|--------|------|
| `X_OAUTH2_ACCESS_TOKEN` | 带 tweet.write 的 User Access Token |

**方式 B** — OAuth 1.0a：

| Secret |
|--------|
| `X_API_KEY` |
| `X_API_SECRET` |
| `X_ACCESS_TOKEN` |
| `X_ACCESS_TOKEN_SECRET` |

> X API 可能需要付费套餐（Basic ~$100/月）。没有 Token 则跳过 X，其它照常。

### 4. 国内三平台 — Make.com Webhook（约 15 分钟）

1. 注册 [Make.com](https://www.make.com)（有免费额度）
2. 新建 Scenario：
   - **Trigger**: Webhooks → Custom webhook
   - **Router** 按 `platform` 字段分支：
     - `xiaohongshu` → 你的小红书发布模块
     - `zhihu` → 知乎发布模块
     - `douyin` → 抖音发布模块
3. 复制 Webhook URL 到 GitHub Secret：

| Secret | 值 |
|--------|-----|
| `CN_POST_WEBHOOK_URL` | `https://hook.eu2.make.com/xxxxx` |

Webhook 收到的 JSON 示例：

```json
{
  "platform": "xiaohongshu",
  "title": "30秒生成LinkedIn职业照",
  "body": "文案正文...\nhttps://ai-headshots-navy.vercel.app/join?utm_...",
  "tags": ["AI证件照", "LinkedIn"],
  "link": "https://...",
  "at": "2026-07-12T..."
}
```

4. （可选）`FEISHU_WEBHOOK_URL` — 每日完成通知

---

## 测试

Actions → **Marketing daily (all channels)** → Run workflow

- `force=true` — 立刻跑一轮
- `dry_run=true` — 只生成文案、不真发

本地：

```bash
node scripts/marketing-daily.mjs --status
SOCIAL_PROMO_ENABLED=true node scripts/marketing-daily.mjs --force
```

---

## 产出文件

| 路径 | 内容 |
|------|------|
| `analytics/marketing-daily-state.json` | 发帖记录 |
| `analytics/promo/cn-daily/YYYY-MM-DD.md` | 当日小红书/知乎/抖音文案 |

---

## 和旧 Workflow 的关系

| 旧 | 新 |
|----|-----|
| `social-promo-daily.yml` | 可保留，建议改用 **marketing-daily.yml** |
| `seo-daily.yml` | marketing-daily 已含 IndexNow，seo-daily 作全站扫描补充 |
| `promo-multi-daily.yml` | 仍可作手动链接包 |

**以后只盯一个：Marketing daily (all channels)**
