# 如何在 Google 检验 SEO 优化效果

> 全站已统一：`robots.txt`、`sitemap.xml`、双语 title/description、Open Graph、JSON-LD、指南页。  
> 下面是你**亲自验证**是否被 Google 收录、排名是否在涨的步骤。

---

## 第一步：Google Search Console（必做，免费）

1. 打开 [Google Search Console](https://search.google.com/search-console)
2. 点击 **添加资源** → 选 **网址前缀**
3. 填入某个站点，例如：`https://feature-vote-ten.vercel.app`
4. 验证所有权（任选一种）：
   - **HTML 标签**：把 Google 给的 `meta` 加到该站 `app/layout.tsx`（只需做一次）
   - **DNS**：若以后用自定义域名，在域名 DNS 加 TXT 记录
5. 验证成功后，左侧 **站点地图** → **提交新站点地图**，填：
   ```
   https://你的站点.vercel.app/sitemap.xml
   ```
6. 等 24–72 小时，回来看：
   - **编制索引 → 网页**：已编入索引的 URL 数量
   - **效果 → 搜索结果**：展示次数、点击次数、平均排名、CTR

**这就是在 Google 里看优化是否生效的主渠道。**

---

## 第二步：手动检查技术 SEO（5 分钟/站）

在浏览器或 CMD 执行：

```cmd
curl https://feature-vote-ten.vercel.app/robots.txt
curl https://feature-vote-ten.vercel.app/sitemap.xml
```

应看到：
- `robots.txt` 含 `Sitemap:` 和 `Allow: /`
- `sitemap.xml` 含首页、`/join`、至少 1 个 `/guide/...` 页面

用 **Rich Results Test** 测结构化数据：  
https://search.google.com/test/rich-results  
输入首页 URL，应识别 **WebApplication / SoftwareApplication** JSON-LD。

---

## 第三步：看 Factory Dashboard 的 SEO 分

打开全站看板（部署后）：

**https://factory-dashboard.vercel.app**

每个站点卡片上的 **SEO 分（0–100）** 来自自动扫描：
- robots / sitemap 是否可访问
- title、description 长度是否合适
- 是否有 OG、JSON-LD
- 指南页数量

分数 **≥80** 一般说明技术 SEO 就绪，剩下靠内容与外链。

---

## 第四步：在 Google 搜索里直接搜（2–4 周后才有意义）

新站不会立刻有排名。2–4 周后在 Google 搜：

```
site:feature-vote-ten.vercel.app
```

- 有结果 → 已被收录  
- 再搜长尾词，例如：`Canny alternative indie hackers`、`功能投票板 Canny 平替`  
- 看自己的 `/guide/...` 页是否出现在前 3 页

---

## 第五步：持续监控指标（GSC 里看这些）

| 指标 | 含义 | 优化变好时 |
|------|------|------------|
| **展示** | 出现在搜索结果里的次数 | 上升 |
| **点击** | 用户点进来的次数 | 上升 |
| **CTR** | 点击率 | title/description 改好后上升 |
| **平均排名** | 关键词位置 | 数字变小（更靠前）更好 |
| **已索引网页** | Google 抓了多少页 | 应 ≥ sitemap 里主要页面数 |

---

## 常见问题

**Q：提交了 sitemap 为什么还是 0 索引？**  
新站正常，通常 3–14 天。确保站点可公开访问、无 `noindex`、Vercel 未开密码保护。

**Q：vercel.app 域名 SEO 差吗？**  
比自定义域名略弱；有流量后建议绑自己的域名并在 GSC 换资源验证。

**Q：56 个站都要加 GSC 吗？**  
每个独立 URL 在 GSC 里是一个「资源」。优先加**有变现潜力的站**（feature-vote、remote-jobs 等），不必一次全加。

---

## 你几乎不用写代码

仓库里已运行：
- `node scripts/sync-seo-boost.mjs` — 统一 metadata / robots 模板
- `node scripts/extract-site-urls.mjs` — 各站 URL 清单
- Factory Dashboard SEO 扫描 API

**你只需要：** 在 GSC 里加站 → 提交 sitemap → 每周看一次「效果」报表。
