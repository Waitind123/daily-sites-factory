# 内容多平台分发 (Content Pulse)

> Buffer $15+/月？$9.9/月一口价：一次粘贴 → X、领英、Threads、Reddit、Product Hunt

## 核心功能

- 粘贴 changelog / 发布说明，自动生成 5 个平台原生帖子
- 平台语气适配（Reddit 随意 vs 领英专业）
- 字数限制自动截断（X 280 字、PH 260 字）
- 免费体验 5 次，之后 $9.9/月订阅
- 深色主题 + 中英文切换

## 本地开发

```bash
npm install
npm run dev
```

## 部署

通过 GitHub Actions `deploy-site.yml` 自动部署到 Vercel。
