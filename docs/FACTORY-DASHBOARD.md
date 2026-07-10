# Factory Dashboard — 全站数据看板

统一查看 daily-sites-factory 所有已部署站点的 **PV、UV、SEO 健康度、付费转化漏斗**。

## 架构

```
各站点 AnalyticsBeacon（pageview / trial / checkout / purchase）
        ↓ POST /api/collect
sites/factory-dashboard（Vercel）
        ↓ 写入
analytics/rollup.json（GitHub 或本地）
        ↓ 展示
看板首页 + /api/metrics
```

## 部署

```bash
cd sites/factory-dashboard
npm install && npm run build
# 或通过 GitHub Actions push sites/factory-dashboard 自动部署
```

Vercel 环境变量：

| 变量 | 说明 |
|------|------|
| `GITHUB_TOKEN` | 读写 `analytics/rollup.json` |
| `GITHUB_REPO` | `Waitind123/daily-sites-factory` |
| `ANALYTICS_ADMIN_TOKEN` | 可选，保护 `/api/seo-scan` |

看板（挂在 intercom-pulse 静态目录）：

**https://intercom-pulse.vercel.app/factory-dashboard/**

埋点 API（Vercel，需单独部署）：`https://intercom-pulse.vercel.app/api/collect`

## 各站点埋点

1. 同步埋点组件到所有站点：
   ```bash
   node scripts/sync-analytics-beacon.mjs
   ```
2. 各站点 Vercel 环境变量（可选，默认指向 factory-dashboard）：
   ```
   NEXT_PUBLIC_FACTORY_ANALYTICS_URL=https://daily-sites-analytics.vercel.app
   ```
3. 在试用/结账/付费成功处调用：
   ```ts
   import { trackFactoryEvent } from "@/lib/analytics-client";
   trackFactoryEvent(siteMeta.id, "checkout");
   trackFactoryEvent(siteMeta.id, "purchase");
   ```

## SEO 扫描

手动或 cron 触发全站 SEO 检查：

```bash
curl -X POST https://daily-sites-analytics.vercel.app/api/seo-scan \
  -H "Authorization: Bearer $ANALYTICS_ADMIN_TOKEN"
```

检查项：robots.txt、sitemap.xml、title/description 长度、OG、JSON-LD、指南页数量 → 综合 SEO 分（0–100）。

## 看板指标

| 指标 | 来源 |
|------|------|
| PV | 每次 pageview |
| UV | 按 visitorId（localStorage）日去重 |
| 试用 / 结账 / 付费 | 各站点 `trackFactoryEvent` |
| 访问→结账 / 访问→付费 | 漏斗转化率 |
| SEO 分 | `/api/seo-scan` 定时扫描 |

## 与 Google Analytics 的区别

这是 **工厂内部运营看板**，数据存在仓库 `analytics/rollup.json`，不依赖 GA/GSC。后续可接 GSC API 做搜索展示/点击。
