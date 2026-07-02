# 每小时健康巡检 Health Watch

自动测试全站是否正常运行，异常时尝试自动修复并通知飞书。

## 运行方式

| 触发 | 说明 |
|------|------|
| GitHub Actions `Hourly health watch` | 每小时 `:17` 自动跑 |
| 手动 | Actions → Run workflow |
| 本地 | `node scripts/hourly-health-watch.mjs` |

## 测试内容

### Tier-1 深度（4 站）

| 站点 | 测试项 |
|------|--------|
| **ai-headshots** | 首页/join/studio、试用 API、checkout 探测与 302 跳转、POST `/api/generate`、联系邮箱 |
| **intercom-pulse** | 看板 API 字段、工单 API、埋点 collect、factory-dashboard 页面 |
| **feature-vote** | boards API、checkout、核心页面 |
| **team-headshots** | 同 ai-headshots 收款链路 |

### Tier-2 轻量（其余 ~60 站）

- 首页 HTTP 200、无 Application error
- `/api/trial` JSON 格式
- 交叉推广条是否存在（警告）

### 付款专项

1. `GET /api/checkout` → `{ status: "ok" }` 或含 `demo` 字段
2. `GET /api/checkout?go=1` → 302 到 `buy.polar.sh` / `checkout.stripe.com` / `/success`（demo）
3. 收入站若 `demo: true` → 警告（Polar/Stripe Secrets 未生效）

## 自动修复

失败时 `scripts/health-watch-autofix.mjs` 按顺序执行：

| 异常类型 | 修复动作 |
|----------|----------|
| 站点 5xx / 超时 | 触发 `deploy-site.yml` redeploy |
| checkout 异常 | 运行 `apply-polar-api-checkout.mjs` + redeploy |
| 缺少联系邮箱 | `sync-footer-contact.mjs` + `inject-fixed-contact-bar.mjs` |
| 缺少交叉推广 | `sync-promo-cross-sell.mjs` + redeploy |
| 看板缺字段 / generate 失败 | redeploy intercom-pulse / ai-headshots |

限制：每轮最多 redeploy **4 站**，避免打满 Vercel 免费配额。

## 报告位置

- `analytics/health-watch-latest.json` — 最近一次结果
- `analytics/health-watch-history.jsonl` — 历史记录
- `analytics/health-watch-autofix-latest.json` — 自动修复日志
- 看板「站点健康巡检」面板（部署 intercom-pulse 后可见）

## 飞书通知

配置了 `FEISHU_WEBHOOK_URL` 时，有失败/警告会推送摘要。

## 本地命令

```bash
node scripts/hourly-health-watch.mjs           # 全量
node scripts/hourly-health-watch.mjs --tier1-only   # 仅 4 站
node scripts/health-watch-autofix.mjs --dry-run     # 预览修复动作
node scripts/notify-feishu-health.mjs
```

## 无法自动修复的情况

- Vercel 每日部署上限 → 需等 24h 或升级 Pro
- Polar/Stripe Secrets 未配置 → 需在 GitHub/Vercel 手动配置
- 代码逻辑 bug → 需 Agent/人工改代码后 push
