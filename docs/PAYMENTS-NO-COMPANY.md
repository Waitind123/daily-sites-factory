# 无公司如何收美元和人民币

> 中国大陆个人**不能**直接注册 Stripe。以下路径无需注册公司。

## 方案对比

| 方案 | 美元 | 人民币 | 需要公司 | 费率 | 适合 |
|------|------|--------|----------|------|------|
| **Polar.sh** | ✅ | ❌（用户付 USD） | ❌ 个人可注册 | 4% + $0.40 | 独立开发者 SaaS |
| **Lemon Squeezy** | ✅ | 部分支持 | ❌ 个人可注册 | ~5% + 支付费 | 数字产品 |
| **Paddle** | ✅ | 有限 | ❌ MoR 代持 | ~5% + 支付费 | B2B SaaS |
| **Stripe 直连** | ✅ | ✅ 支付宝/微信 | ✅ 需海外主体 | ~2.9% | 有 LLC/香港公司后 |

## 推荐：Polar.sh（个人开发者最快）

1. 注册 [https://polar.sh](https://polar.sh)（GitHub 登录）
2. 创建 Product → 年费 **$99/年**
3. 复制 Checkout Link
4. 在 Vercel 项目环境变量添加：
   ```
   POLAR_CHECKOUT_URL=https://polar.sh/checkout/xxx
   ```
5. 用户点「美元支付」跳 Polar 收银台，Polar 帮你处理税务和 Merchant of Record

## 人民币怎么收？

无公司时的现实选择：

| 方式 | 说明 |
|------|------|
| **只收美元** | Polar/Lemon Squeezy，中国用户用双币信用卡付 USD（最简单） |
| **微信支付个人收款码** | 手动验证，不适合自动化（可演示用） |
| **国内聚合** | 需个体工商户或企业（如 Ping++、虎皮椒） |
| **Stripe + 海外朋友主体** | 不推荐，有封号风险 |

**levelsio 建议：** 先只收 **$99/年 USD**，验证有人付费后再考虑人民币。

## 本站集成方式

`ai-headshots` 的 `/join` 页支持三种 checkout（按优先级）：

1. `STRIPE_SECRET_KEY` → Stripe（有海外主体时）
2. `POLAR_CHECKOUT_URL` → Polar 美元 checkout
3. `LEMON_SQUEEZY_CHECKOUT_URL` → Lemon Squeezy
4. 都没有 → 演示模式（模拟支付成功）

## 环境变量清单

```bash
# Vercel Project → Settings → Environment Variables
POLAR_CHECKOUT_URL=https://polar.sh/checkout/...
LEMON_SQUEEZY_CHECKOUT_URL=https://xxx.lemonsqueezy.com/checkout/...
STRIPE_SECRET_KEY=sk_live_...          # 可选，需海外主体
REPLICATE_API_TOKEN=r8_...             # AI 生成
```

## 下一步

1. 注册 Polar → 创建 $99/年 Product → 填 `POLAR_CHECKOUT_URL`
2. 注册 [Replicate](https://replicate.com) → 拿 API Token → 填 `REPLICATE_API_TOKEN`
3. 在 Vercel  redeploy `ai-headshots`
