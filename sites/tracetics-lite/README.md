# Tracetics Lite

Mixpanel 平替 — 独立开发者 $9.9/月漏斗分析 + 流失定位。

公网部署由 GitHub Actions `deploy-site.yml` 自动触发。

## 核心功能

- 定义漏斗步骤（落地页 → 注册 → 激活 → 付费）
- 一行 POST 事件追踪
- 逐步流失率图表 + 最大漏洞检测
- 免费体验 5 个漏斗，之后 $9.9/月订阅

## 开发

```bash
npm install
npm run dev
```

## 部署

通过 GitHub Actions `deploy-site.yml` 自动部署到 Vercel。
