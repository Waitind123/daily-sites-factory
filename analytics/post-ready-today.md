# 今日推广文案（复制粘贴即可发）

生成时间：由仓库脚本 `post-reddit-promo.mjs --dry-run --force` 产出。

## Reddit r/SideProject（英文）

**标题：**
```
30-second LinkedIn headshots from a selfie (indie project) — feedback welcome
```

**正文：**
```
Built this for myself first, then added a paywall when hosting bills showed up.

LinkedIn 1:1 and resume sizes export as PNG.

https://ai-headshots-navy.vercel.app/join?utm_source=reddit&utm_medium=sideproject&utm_campaign=manual_today

If you've tried similar tools, curious what I'm missing.
```

发帖页直达：https://www.reddit.com/r/SideProject/submit

---

## 朋友圈 / 求职群（中文）

```
做了 AI 证件照工具，上传自拍 30 秒出 LinkedIn 职业照。
5 次免费，满意再付 ¥69/月（比 PhotoAI 便宜很多）

https://ai-headshots-navy.vercel.app/join?utm_source=wechat
```

---

## 自动发帖未执行原因

GitHub Secrets 需配置：
- `REDDIT_CLIENT_ID` / `REDDIT_CLIENT_SECRET` / `REDDIT_REFRESH_TOKEN`
- `SOCIAL_PROMO_ENABLED` = `true`

配置后 Actions → **Social promo (Reddit auto)** → Run workflow → force=true
