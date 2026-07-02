# 邀请码奖励

好友通过你的邀请链接完成**首次试用**，你将额外获得 **5 次**免费使用（可累计）。

## 用户流程

1. 打开任意站点 `/join` 页 → 「邀请好友」卡片
2. 复制邀请链接（形如 `https://xxx.vercel.app/?ref=AB12CD34`）
3. 好友打开链接 → 自动记录邀请码
4. 好友完成第一次核心功能试用（如 ai-headshots 生成证件照）
5. 你的账号自动 +5 次试用额度（下次打开站点生效）

## 技术说明

- 邀请数据存储在 `analytics/referrals.json`（经 intercom-pulse API 读写）
- 中心 API：`intercom-pulse.vercel.app/api/referral`
- 全站同步：`node scripts/sync-referral-invite.mjs`

## 限制

- 不能邀请自己
- 每位好友仅能为邀请人贡献一次奖励
- 需配置 `ANALYTICS_GITHUB_PAT` 才能在生产环境持久化奖励记录
