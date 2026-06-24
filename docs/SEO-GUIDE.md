# SEO 指南 — 技术 + 内容 + 分发

> 每个 `sites/<id>/` 站点必须实现这三层，Agent 建站时自动完成。

## 1. 技术 SEO（建站时自动做）

复制 `templates/seo/` 到站点，配置 `lib/seo.ts`：

```typescript
export const siteConfig = {
  url: "https://your-site.vercel.app",  // 部署后填入真实 URL
  name: "站点名",
  title: "含核心关键词的标题 — 副标题",
  description: "160 字内，含关键词 + 价值主张 + 免费体验",
  keywords: ["长尾词1", "长尾词2", "english keyword"],
};
```

必检清单：

- [ ] `app/sitemap.ts` — 所有公开页面
- [ ] `app/robots.ts` — `Allow: /` + sitemap 地址
- [ ] `layout.tsx` — 从 `lib/seo.ts` 导出 metadata
- [ ] `JsonLd` — SoftwareApplication 或 WebApplication
- [ ] 每页唯一 H1，首页含核心关键词

验证：

```bash
curl https://your-site.vercel.app/robots.txt
curl https://your-site.vercel.app/sitemap.xml
```

## 2. 内容 SEO（每站至少 1 篇指南）

创建 `app/guide/<slug>/page.tsx`：

- 标题含长尾关键词（如「LinkedIn 专业头像怎么拍」）
- 800–1500 字实用内容
- 表格/列表增加可读性
- 文末 CTA 链到 `/studio` 或 `/join`
- 在 `publicPaths` 加入该路径

## 3. 外链分发（部署后 24h 内）

| 渠道 | 动作 |
|------|------|
| Google Search Console | 添加属性 → 提交 sitemap |
| Product Hunt | 发 Show，带 demo 截图 |
| Hacker News | Show HN: [产品名] – [一句话] |
| Reddit | r/SideProject, r/Entrepreneur |
| Twitter/X | 30 秒 demo 视频 + 链接 |
| Indie Hackers | Build in public 帖 |

## 4. 怎么在 Google 靠前？

| 因素 | 做法 |
|------|------|
| 关键词 | 做长尾，不抢大词 |
| 域名 | 自定义域名 > vercel.app |
| 内容 | 指南页 + 定期更新 |
| 外链 | PH/HN/Reddit 带来初始权重 |
| 速度 | Next.js 静态页 + Vercel CDN |
| 时间 | 新站 1–3 月才有稳定自然流量 |

## 5. 报告模板（Agent 输出）

部署完成后在日报附加：

```markdown
### SEO 状态
- Sitemap: https://xxx.vercel.app/sitemap.xml
- 指南页: https://xxx.vercel.app/guide/...
- Search Console: 待用户提交

### 分发待办
- [ ] Product Hunt
- [ ] Show HN
- [ ] Reddit r/SideProject
```
