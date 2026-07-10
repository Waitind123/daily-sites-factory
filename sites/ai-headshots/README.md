# AI 证件照 — 环境变量

```bash
# Stripe 全站收款（GitHub Secret STRIPE_SECRET_KEY 自动同步，优先于 Polar）
# Polar 收款（$29/月，无 Stripe 时兜底）
POLAR_CHECKOUT_URL=https://buy.polar.sh/polar_cl_YZS7f2bSGvVGtVq9soq8PFjvHvvxkRO09E8Xx0cESgj

# AI 生成（replicate.com）
REPLICATE_API_TOKEN=r8_xxx
```

## Polar 支付成功回调

在 Polar Dashboard → Checkout Link → Settings 设置 Success URL：

```
https://ai-headshots-navy.vercel.app/success?polar=true
```

用户付完款会跳回网站并自动解锁 /studio。
