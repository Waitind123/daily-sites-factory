# Polar 每站独立回调（Success URL）

一条静态 Checkout Link 只能有一个 Success URL。要让 **feature-vote、nomad-cities** 等付完跳回**各自站点**，需用 Polar **Checkout API**。

## 一次性配置（GitHub Secrets）

仓库 **Settings → Secrets and variables → Actions** 添加：

| Secret | 怎么拿 |
|--------|--------|
| `POLAR_ACCESS_TOKEN` | Polar → **Settings** → **Access Tokens** → 新建，勾选 `checkouts:write` |
| `POLAR_PRODUCT_ID` | Polar → **Products** → AI Headshots → **⋮** → **Copy Product ID** |
| `POLAR_CHECKOUT_URL` | （可选）静态链接兜底，默认已写在代码里 |

保存后，下次 **Deploy site on push** 会自动把这三个变量同步到各站 Vercel。

## 工作原理

用户在某站点击 Subscribe → `/api/checkout?go=1` → 服务端调用：

```
POST https://api.polar.sh/v1/checkouts/
{
  "products": ["<POLAR_PRODUCT_ID>"],
  "success_url": "https://该站域名/success?polar=true",
  "return_url": "https://该站域名/join"
}
```

返回的 `url` 才是本次结账链接（每站 Success URL 不同）。

## 本地验证 Product ID

```bash
export POLAR_ACCESS_TOKEN=polar_at_xxx
node scripts/fetch-polar-products.mjs
```

## 注意

- 未配置 Token + Product ID 时，仍用静态 Checkout Link（付完跳 ai-headshots）。
- 所有站目前共用 **同一个 Polar 产品**（$9.9/月 AI Headshots）；收入都进你的 Polar 账户。
- 以后要不同价格/产品，在 Polar 加产品并在代码里按 `siteId` 选 `productId` 即可。
