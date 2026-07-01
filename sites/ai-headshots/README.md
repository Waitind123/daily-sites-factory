# AI 证件照 — 环境变量

```bash
# Polar 收款（已配置，$9.9/月）
POLAR_CHECKOUT_URL=https://buy.polar.sh/polar_cl_YZS7f2bSGvVGtVq9soq8PFjvHvvxkRO09E8Xx0cESgj

# AI 生成（可选，replicate.com）
REPLICATE_API_TOKEN=r8_xxx
```

## Polar 支付成功回调

在 Polar Dashboard → Checkout Link → Settings 设置 Success URL：

```
https://ai-headshots-navy.vercel.app/success?polar=true
```

用户付完款会跳回网站并自动解锁 /studio。
