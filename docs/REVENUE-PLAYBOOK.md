# 赚钱作战手册（$20 目标 · 截止 2026-07-13）

## 当前状态（自动更新见看板）

- **Polar 到账**：已人工确认 **$0**（看板付费埋点 ≠ 真实收款）
- **唯一转化站**：`ai-headshots`（近 30 天 2 次 success 埋点，但未到账）
- **流量**：401 PV / 263 UV（30 天），几乎全是直接访问
- **推广**：Reddit 自动发帖 **0 次**（Secrets 未配）
- **部署**：Vercel 免费版 **100 次/天** 上限，大批量部署会卡住
- **健康巡检**：每小时自动测试 + 异常自动 redeploy（见 `docs/HEALTH-WATCH.md`）

## 已自动做好的（代码在 main）

| 能力 | 说明 |
|------|------|
| Polar 美元收款 | 全站静态链接 + ai-headshots 中转 |
| Stripe 人民币 | `?currency=cny`（需 Vercel 配 `STRIPE_SECRET_KEY`） |
| 看板访客表 | 逐访客 ID / 来源 / 设备 |
| 看板推广表 | Reddit 发帖记录 + UTM 渠道访问 |
| 收入冲刺 | 每日报告 + 一键分享链接 |
| intercom-pulse 转化 | 试用将尽 / 付费墙带 UTM |
| 全站交叉推广条 | 67 站顶部导流 ai-headshots/join，UTM `utm_medium=crosssell` |

## 你必须做的 3 件事（我无法代登录）

### 1. 等 Vercel 配额恢复后部署 3 个站

在 Vercel 控制台 Redeploy（或等 24h 后跑 Actions → **Redeploy revenue sites only**）：

1. `ai-headshots` — 收钱 + 联系条
2. `intercom-pulse` — 看板新功能
3. `feature-vote` — 第二流量站

### 2. 配置 Reddit 自动推广（0 成本获客）

仓库 **Settings → Secrets**：

- `REDDIT_CLIENT_ID`
- `REDDIT_CLIENT_SECRET`
- `REDDIT_REFRESH_TOKEN`
- `SOCIAL_PROMO_ENABLED` = `true`

详见 `docs/SOCIAL-PROMO-SETUP.md`。配好后每天自动发 1 帖，链接带 UTM，看板「推广效果」可溯源。

### 3. 确认 Polar 是否真收到钱

看板「付费」= success 页埋点，**不等于** Polar 到账。

打开 [Polar Dashboard](https://polar.sh) 核对是否有 2 笔订单。没有的话 = 还没真赚到钱，需继续推广 `https://ai-headshots-navy.vercel.app/join`。

## 接下来 7 天策略（按 ROI 排序）

1. **只推 ai-headshots** — 唯一有结账漏斗的站
2. **发帖文案** — 用看板「收入冲刺」里的一键 Reddit/HN 链接
3. **不要分散** — 其他 60+ 站先不推广，等 Polar 逐站 API
4. **可选**：绑自定义域名 + Google Search Console 提交 sitemap（`*.vercel.app` 几乎不被收录）
5. **可选**：Vercel Pro $20/月 — 解除部署上限，全站同步收款配置

## 一键命令（本地）

```bash
node scripts/verify-stripe-live.mjs
node scripts/post-reddit-promo.mjs --dry-run
node scripts/revenue-sprint.mjs
```

## 看板地址

https://intercom-pulse.vercel.app/factory-dashboard
