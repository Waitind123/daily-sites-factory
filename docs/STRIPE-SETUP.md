# Stripe 全站接通（懒人版）

> 代码已写好，你只需 **贴一次密钥 + 点一次按钮**。

## 你需要做的（仅 2 步，约 3 分钟）

### 1. 完成 Stripe 后台（你截图里进度约 10%）

1. 点右下角 **「设置指南」** 或顶部 **「开始使用」**
2. 完成 **创建 Stripe 档案**（身份 / 银行账户）
3. **Settings → Payment methods** 开启：**Cards、Alipay、WeChat Pay**
4. **Developers → API keys** 复制 **Secret key**（建议先用 `sk_test_...` 测通，再换 `sk_live_...`）

### 2. 把密钥交给 GitHub（只需一次）

**方式 A — 网页（最简单）**

1. 打开 https://github.com/Waitind123/daily-sites-factory/settings/secrets/actions
2. **New repository secret**
   - Name: `STRIPE_SECRET_KEY`
   - Value: `sk_test_...` 或 `sk_live_...`
3. **Actions → 「Stripe 全站接通」→ Run workflow**

工作流会自动：

- 把 `STRIPE_SECRET_KEY` 同步到 3 个 Vercel 项目
- 重新部署 `ai-headshots`、`nomad-cities`、`remote-jobs`
- 验证 `/api/checkout` 已脱离演示模式

**方式 B — 本地脚本**

```bash
# .env.local 里写 STRIPE_SECRET_KEY=sk_...
bash scripts/setup-github-stripe-secret.sh
# 然后去 Actions 跑「Stripe 全站接通」
```

## 覆盖哪些站

| 站点 | 地址 | 收款方式 |
|------|------|----------|
| ai-headshots | https://ai-headshots-navy.vercel.app/join | Stripe 优先（覆盖 Polar） |
| nomad-cities | https://nomad-cities.vercel.app/join | Stripe ¥199/月 |
| remote-jobs | https://remote-jobs-azure.vercel.app/join | Stripe ¥199/月 |

以后每次 **Deploy site on push** 也会自动同步 Stripe 密钥，无需再手动配 Vercel。

## 验证

```bash
curl -s https://ai-headshots-navy.vercel.app/api/checkout | head -c 200
# 期望含 "mode":"stripe" 或 stripeDemo:false

curl -s https://nomad-cities.vercel.app/api/checkout
# 期望 "demo":false
```

测试卡（Test mode）：`4242 4242 4242 4242`，任意未来日期 + 任意 CVC。

## 安全

- **切勿**把 `sk_...` 写进代码、聊天记录或截图
- 泄露后立即在 Stripe 控制台 **Roll key** 并更新 GitHub Secret

## 新增支付站点时

1. 把站点 id 加入 `scripts/sites-payment-enabled.json`
2. 确保有 `lib/stripe.ts` 或 `lib/payments.ts`
3. 再跑一次 **Stripe 全站接通**
