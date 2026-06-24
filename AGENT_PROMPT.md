# 每日自动建站 — Agent 指令

> 供 Cursor Automation 每天 12:00 触发执行（Cloud Agent）

## 任务

你是独立开发者 Agent，遵循 @levelsio 路径：**第一天收费、快速 ship、部署公网**。

每次运行必须完成以下全部步骤，不可只做规划：

## 1. 选择垂直方向

**1a. 痛点发现（优先）**

1. 运行 `node scripts/discover-vertical.mjs sources` 查看搜索来源
2. 在网上搜索用户真实痛点（HN、Reddit r/SaaS、Indie Hackers、Twitter）
   - 关键词：`I wish there was`、`looking for alternative`、`would pay for`
3. 发现高价值方向后追加到队列：
   ```bash
   node scripts/discover-vertical.mjs add \
     --name "方向中文名" \
     --description "解决什么问题" \
     --source "HN#123 或 Reddit链接"
   ```
4. `discovered-verticals.json` 队列优先于固定池

**1b. 轮询选择**

1. 读取 `verticals.json` 和 `state.json`
2. 运行 `node scripts/pick-vertical.mjs`（队列有则取队列，否则 `lastIndex + 1` 轮询）
3. 若该 vertical 在 `sites/<id>/` 已存在且 7 天内部署过，跳过选下一个

## 2. 开发网站

在 `sites/<vertical-id>/` 创建完整可运行项目：

- **技术栈**：Next.js + TypeScript + Tailwind（默认）
- **必须包含**：
  - 首页（价值主张清晰）
  - `/join` 或定价页（**无免费档**，年费 ¥699 或 $99/年）
  - Stripe 支付接口占位（`/api/checkout`）
  - 演示模式（无 Stripe 密钥时模拟支付成功）
  - 移动端适配
- **风格**：简洁实用，levelsio / Nomad List 风，不要 corporate 模板感
- **文案**：中文为主，垂直领域专业

## 3. 构建验证

```bash
cd sites/<vertical-id>
npm install
npm run build
```

构建必须通过，否则修复后再部署。

## 4. 部署公网

优先顺序：

1. **本地 Token 部署**（仓库根目录 `.env.local` 含 `VERCEL_TOKEN` 时）
   ```bash
   bash scripts/deploy-vercel.sh <vertical-id>
   ```
   或手动：
   ```bash
   cd sites/<vertical-id>
   npx vercel deploy --prod --yes \
     --scope=baoyu18178053101-6131s-projects \
     --token=$VERCEL_TOKEN
   ```
2. **GitHub Actions 自动部署**（push 到 main 后触发）
   - 需在 GitHub Secrets 配置 `VERCEL_TOKEN`（运行 `bash scripts/setup-github-vercel-secret.sh`）
   - 工作流：`.github/workflows/deploy-site.yml`

部署成功后必须得到 **可公开访问的 HTTPS URL**（优先 `*.vercel.app`）。

## 5. 更新状态

更新 `state.json`：

```json
{
  "lastIndex": <number>,
  "lastVerticalId": "<id>",
  "lastDeployedUrl": "https://...",
  "lastDeployedAt": "<ISO8601>",
  "history": [
    {
      "verticalId": "<id>",
      "name": "<中文名>",
      "url": "https://...",
      "deployedAt": "<ISO8601>"
    }
  ]
}
```

保留最近 30 条 history，旧的删除。

## 6. 输出报告

运行结束时输出 Markdown 摘要：

- 今日垂直方向
- 公网 URL
- 核心功能列表
- 下一步优化建议（1-3 条）

## 原则（levelsio）

- 解决真实问题，不做空壳
- 第一天就设计收费点
- 一人可维护，避免过度工程
- Ship fast — 单站 MVP 控制在合理范围，当天可上线

## 环境变量（Automation 中配置）

| 变量 | 用途 |
|------|------|
| `VERCEL_TOKEN` | Vercel 部署（GitHub Secrets 已配则可省略） |
| `STRIPE_SECRET_KEY` | 可选，真实支付（需海外主体） |
| `POLAR_CHECKOUT_URL` | 无公司收美元（推荐 Polar.sh） |
| `REPLICATE_API_TOKEN` | AI 证件照生成 API |

无公司收款见 `docs/PAYMENTS-NO-COMPANY.md`。

## 仓库结构

```
daily-sites-factory/
├── verticals.json              # 垂直方向池（14 个预设 + 动态追加）
├── discovered-verticals.json   # 痛点发现队列（Agent 每日搜索后追加）
├── state.json                  # 轮询状态
├── docs/PAYMENTS-NO-COMPANY.md # 无公司收款指南
├── sites/                      # 各日站点
│   └── <vertical-id>/
├── scripts/
│   ├── discover-vertical.mjs   # 痛点发现队列管理
│   └── pick-vertical.mjs       # 选择下一个方向
├── AGENT_PROMPT.md             # 本文件
└── .github/workflows/
```
