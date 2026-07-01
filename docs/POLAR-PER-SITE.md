# Polar 每站独立回调 — 一次性配置（图文步骤）

让 **feature-vote、nomad-cities** 等站点付完款跳回**各自** `/success`，而不是统一跳 ai-headshots。

---

## 第一步：在 Polar 拿 Product ID

1. 打开 https://polar.sh/dashboard  
2. 左侧点 **Products（产品）**  
3. 找到 **AI Headshots**（$9.9/月）  
4. 点右侧 **⋮**（三个点）  
5. 选 **Copy Product ID**  
6. 复制到记事本，形如：`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

---

## 第二步：在 Polar 创建 Access Token

1. Polar 左下角点你的组织名 → **Settings（设置）**  
2. 左侧找 **Access Tokens**（访问令牌）  
3. 点 **Create token** / **New token**  
4. 名称随便填，例如：`daily-sites-factory`  
5. **Scopes（权限）** 至少勾选：**`checkouts:write`**  
6. 创建后**立刻复制** token（只显示一次）  
   - 形如：`polar_at_xxxxxxxx...`

---

## 第三步：加到 GitHub Secrets

1. 打开仓库：https://github.com/Waitind123/daily-sites-factory  
2. 顶部 **Settings**（设置）  
3. 左侧 **Secrets and variables** → **Actions**  
4. 点 **New repository secret**（新建仓库密钥）

### Secret 1

| 字段 | 填写 |
|------|------|
| Name | `POLAR_ACCESS_TOKEN` |
| Secret | 粘贴第二步的 `polar_at_...` |

点 **Add secret**。

### Secret 2

再点 **New repository secret**：

| 字段 | 填写 |
|------|------|
| Name | `POLAR_PRODUCT_ID` |
| Secret | 粘贴第一步的 Product ID |

点 **Add secret**。

### 可选 Secret 3

| Name | 说明 |
|------|------|
| `POLAR_CHECKOUT_URL` | 静态链接兜底，不配也行（代码里已有默认值） |

---

## 第四步：触发部署（把密钥同步到 Vercel）

Secrets 加好后，需要**重新部署**站点才会写入 Vercel 环境变量。

**方法 A（推荐）** — GitHub Actions 手动部署一个站：

1. 仓库 **Actions** 标签  
2. 左侧选 **Deploy site on push**  
3. 右侧 **Run workflow**  
4. `site_id` 填：`ai-headshots`（或留空部署全部）  
5. 点绿色 **Run workflow**

**方法 B** — 随便改一行代码 push 到 `main`（会触发自动部署）

部署 workflow 会自动执行：

- `POLAR_ACCESS_TOKEN` → 各站 Vercel  
- `POLAR_PRODUCT_ID` → 各站 Vercel  
- `POLAR_CHECKOUT_URL` → 各站 Vercel（有则用，无则用默认）

---

## 第五步：验证是否生效

### 本地（有 token 时）

```bash
export POLAR_ACCESS_TOKEN=polar_at_你的token
node scripts/fetch-polar-products.mjs
```

应列出 AI Headshots 和 Product ID。

### 线上

1. 无痕窗口打开：https://feature-vote-ten.vercel.app/join  
2. 点 Subscribe  
3. 地址栏应跳到 `polar.sh/checkout/...` 或 `buy.polar.sh/...`  
4. （付完或 Polar 测试后）应回到 `feature-vote-ten.vercel.app/success?polar=true`  
   - **不是** ai-headshots 域名

也可直接访问（替换域名）：

```
https://feature-vote-ten.vercel.app/api/checkout?go=1
```

看最终跳转域名是否为本站 Polar 结账页。

---

## 常见问题

**Q：加了 Secret 但没生效？**  
A：必须重新部署。旧 deployment 没有新环境变量。

**Q：不想配 API，只用静态链接行吗？**  
A：行，能收钱，但所有站付完都跳 ai-headshots 的 Success URL。

**Q：收入在哪看？**  
A：Polar Dashboard → Orders / Revenue。看板 `purchase` 看各站 `/success` 埋点。

**Q：Vercel 里要手动填吗？**  
A：不用。CI 会自动 sync；除非你不用 GitHub Actions 部署。

---

## 工作原理（简图）

```
用户访问 feature-vote/join
    → GET /api/checkout?go=1
    → 服务端 POST api.polar.sh/v1/checkouts/
         success_url = https://feature-vote-ten.vercel.app/success?polar=true
         return_url  = https://feature-vote-ten.vercel.app/join
    → 302 到 Polar 结账页
    → 付完 → 回到 feature-vote 的 /success
    → 看板记录 feature-vote 的 purchase +1
```
