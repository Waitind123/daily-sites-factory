# 每日自动建站 — Agent 指令

> 供 Cursor Automation 每天 12:00 触发执行（Cloud Agent）

## 任务

你是独立开发者 Agent，遵循 @levelsio 路径：**第一天收费、快速 ship、部署公网**。

每次运行必须完成以下全部步骤，不可只做规划：

## 1. 选择垂直方向

**运行 `node scripts/pick-vertical.mjs` 即可**（脚本自动处理以下逻辑）：

1. 优先从 `discovered-verticals.json` 队列取方向
2. 否则按 `lastIndex + 1` 轮询 `verticals.json`（跳过 7 天内已部署的站点）
3. **池耗尽时自动发现新方向**：当 `verticals.json` 中所有方向均已有 `sites/<id>/` 时，脚本自动执行 `discover-vertical.mjs discover`，从 Hacker News 抓取用户痛点并补充 3 个新方向到队列，然后取出第一个

输出中 `autoDiscovered: true` 表示本次触发了自动痛点发现。

**手动补充方向（可选）**

```bash
node scripts/discover-vertical.mjs discover --limit 3   # 手动触发痛点发现
node scripts/discover-vertical.mjs add \
  --name "方向中文名" \
  --description "解决什么问题" \
  --source "HN#123 或 Reddit链接"
```

痛点搜索来源：`node scripts/discover-vertical.mjs sources`

## 2. 开发网站

在 `sites/<vertical-id>/` 创建完整可运行项目：

- **技术栈**：Next.js + TypeScript + Tailwind（默认）
- **必须包含**：
  - 首页（价值主张清晰）
  - **免费体验 5 次**（核心功能），用尽后提示订阅（见 `docs/FREE-TRIAL-PATTERN.md`）
  - `/join` 定价页（订阅制，如 $9.9/月 或 ¥699/年）
  - `/api/trial` 查询剩余免费次数
  - 支付接口（`/api/checkout`，Polar / Stripe 占位）
  - 演示模式（无支付密钥时模拟支付成功）
  - 移动端适配
- **风格**：简洁实用，levelsio / Nomad List 风，不要 corporate 模板感
- **文案**：中文为主，垂直领域专业

**免费体验实现**：复制 `templates/free-trial/lib/trial.ts` 到站点 `lib/trial.ts`，改 `SITE_ID`。

### 2b. SEO 三件套（必须，见 `docs/SEO-GUIDE.md`）

**技术 SEO** — 复制 `templates/seo/` 到站点：

| 文件 | 作用 |
|------|------|
| `lib/site-seo.ts` + `lib/seo.ts` | 完整 metadata、OG、canonical、keywords |
| `app/sitemap.ts` | 自动生成 sitemap.xml |
| `app/robots.ts` | 允许 Google 抓取 |
| `components/JsonLd.tsx` | JSON-LD 结构化数据 |

**内容 SEO** — 至少 1 篇指南页：

- 路径：`/guide/<长尾关键词-slug>`
- 800+ 字，含目标关键词，内链到 `/join` 和核心功能页
- 加入 `lib/seo.ts` 的 `publicPaths` 和 sitemap

**外链分发** — 部署后在报告中输出待发帖清单：

- Product Hunt / Hacker News Show HN
- Reddit r/SideProject、r/SaaS
- Twitter/X、Indie Hackers
- 提交 [Google Search Console](https://search.google.com/search-console) + 提交 sitemap

**Google 靠前显示**：靠长尾词内容页 + 自定义域名 + 外链，新站 `*.vercel.app` 1–3 月才有自然流量，不指望第一天。

## 3. 构建验证

```bash
cd sites/<vertical-id>
npm install
npm run build
```

构建必须通过，否则修复后再提交。

## 4. 提交与部署（唯一路径）

**部署只走 GitHub Actions，禁止其他方式。**

### 4a. Git 规则（必须遵守）

- **直接 push 到 `main`**，禁止创建 Pull Request、Draft PR、`cursor/` 功能分支
- **禁止**执行 `npx vercel deploy`、`bash scripts/deploy-vercel.sh`
- **禁止**在上一次 Automation 仍在运行时启动新的 Test run

### 4b. 提交流程

**第一次 push**（站点代码）：

```bash
git add sites/<vertical-id>/ discovered-verticals.json verticals.json
git commit -m "feat: add <vertical-id> site — <中文名> MVP"
git push origin main
```

等待 GitHub Actions 部署完成并拿到 URL 后，**第二次 push**（状态更新）：

```bash
git add state.json
git commit -m "chore: update state.json for <vertical-id> deployment"
git push origin main
```

### 4c. 等待 GitHub Actions 部署

push 到 `main` 后，工作流 `.github/workflows/deploy-site.yml` 自动 build + 部署。

```bash
gh run list --workflow=deploy-site.yml --limit 1
gh run watch --exit-status
```

从工作流日志获取部署 URL（`Deployed to: https://...vercel.app`）。

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
- **先免费体验 5 次，再引导订阅**（试用转化，非永久免费档）
- 第一天就设计收费点
- 一人可维护，避免过度工程
- Ship fast — 单站 MVP 控制在合理范围，当天可上线

## Automation 配置（必做）

在 Cursor Automation 设置中：

1. **Tools → 关闭 Pull Request 工具**（避免无意义红色警告）
2. **VERCEL_TOKEN 只配 GitHub Secrets**，不要配在 Automation 环境变量
3. **指令**见 `cursor-automation-prefill.json`

## 环境变量

| 变量 | 配置位置 | 用途 |
|------|----------|------|
| `VERCEL_TOKEN` | **GitHub Secrets** | GitHub Actions 部署 Vercel |
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
├── docs/FREE-TRIAL-PATTERN.md    # 免费体验 5 次标准
├── docs/SEO-GUIDE.md               # SEO 技术+内容+分发指南
├── templates/free-trial/         # 可复制 trial 模板
├── templates/seo/                # 可复制 SEO 模板
├── sites/                      # 各日站点
│   └── <vertical-id>/
├── scripts/
│   ├── discover-vertical.mjs   # 痛点发现队列管理
│   └── pick-vertical.mjs       # 选择下一个方向
├── AGENT_PROMPT.md             # 本文件
└── .github/workflows/
```
