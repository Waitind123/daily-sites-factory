# 一次性配置指南

## ✅ 已完成

- [x] GitHub CLI (`gh`) 已安装 — v2.95.0
- [x] Git 已安装 — v2.54.0
- [x] 本地仓库已初始化 — `daily-sites-factory`
- [x] Automation 预填模板 — `cursor-automation-prefill.json`

## ⏳ 需你完成（需网络 + 浏览器登录）

### 1. 登录 GitHub 并 Push

若 `gh auth login` 浏览器登录 **超时**，说明本机访问 github.com 受阻。两种办法：

**办法 A：开 VPN/代理后重试**
```powershell
gh auth login
# GitHub.com → HTTPS → Yes → Login with a web browser
```

**办法 B：用 Personal Access Token（推荐）**

1. 在 **手机或能翻墙的电脑** 打开：https://github.com/settings/tokens  
2. **Generate new token (classic)** → 勾选 **repo** → 生成并复制  
3. 在本机 PowerShell：

```powershell
cd C:\Users\ziweiqin\Projects\daily-sites-factory
$env:GH_TOKEN = "ghp_粘贴你的GitHub_token"
powershell -ExecutionPolicy Bypass -File scripts\gh-auth-with-token.ps1
powershell -ExecutionPolicy Bypass -File scripts\setup-and-push.ps1
```

成功后终端会输出 **GitHub 仓库地址**，形如：
`https://github.com/你的用户名/daily-sites-factory`

### 2. Vercel Token — 已配置

已写入本地 `.env.local`（不会提交 Git）。

在 Cursor Automation 中手动添加同名环境变量：**VERCEL_TOKEN**

### 4. 飞书通知（部署 URL 推送）

**不必建群机器人**——推荐用自建应用**私信发给你本人**；群 Webhook 为可选。

#### 方式 A：私信（推荐）

1. 打开 [飞书开放平台](https://open.feishu.cn/app) → 进入 **我的小龙虾**（或你的自建应用）
2. 开启 **机器人** 能力
3. **权限管理** 中申请并开通：
   - `im:message:send_as_bot`（以应用身份发消息）
   - `contact:user.id:readonly`（按手机/邮箱查 open_id）
4. **版本管理与发布** → 创建版本并发布
5. **凭证与基础信息** 复制 `App ID`、`App Secret`

**获取你的 open_id**（三选一）：

**A1. 无邮箱账号 → 用手机号查（推荐）**

飞书若提示「暂无邮箱地址」，不要用邮箱，改用绑定的手机号：

```bash
# 在 feishu.config.local 已写好凭证时：
source feishu.config.local
node scripts/feishu-resolve-open-id.mjs mobile +86138xxxxxxxx
# 或省略 +86：node scripts/feishu-resolve-open-id.mjs mobile 138xxxxxxxx
```

**A2. 给机器人发消息 → 日志里抄 open_id**

1. 飞书客户端搜索 **我的小龙虾**，进入对话，随便发一句「hi」
2. 开放平台 → 该应用 → **运营监控 → 日志检索**
3. 搜 `im.message.receive_v1`，在请求体里找到 `sender.sender_id.open_id`（形如 `ou_xxx`）

**A3. 有企业邮箱时**

```bash
node scripts/feishu-resolve-open-id.mjs email your@company.com
```

6. 在 GitHub Secrets 添加（或运行 `bash scripts/setup-github-feishu-secrets.sh`）：
   - `FEISHU_APP_ID`、`FEISHU_APP_SECRET`
   - `FEISHU_RECEIVE_ID` = 上一步的 `ou_xxx`（**无邮箱时用这个**）
   - 仅有企业邮箱时才用 `FEISHU_RECEIVE_EMAIL`

本仓库 OpenClaw 应用：
- **部署通知** →「我的小龙虾」`cli_a95b97c71eb8dbcd`
- **OpenClaw 主应用** `cli_a95b90c62b78dcb2`（备用）

手动测试：

```bash
FEISHU_APP_ID=cli_xxx FEISHU_APP_SECRET=xxx FEISHU_RECEIVE_ID=ou_xxx \
  node scripts/notify-feishu.mjs nomad-cities https://nomad-cities.vercel.app "游民城市榜"
```

#### 方式 B：群机器人 Webhook（可选）

1. 飞书群：**设置 → 群机器人 → 自定义机器人** → 复制 Webhook  
   形如 `https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxx`
2. GitHub Secrets 添加 `FEISHU_WEBHOOK_URL`

未配置 App 私信凭证时，脚本会自动使用 Webhook。

每次站点部署成功后，GitHub Actions 会把公网 URL 推送到飞书（私信优先）。

### 5. 配置 Cursor Automation

1. Cursor → **Settings → Automations → New**
2. 触发：**每天 12:00**（cron `0 12 * * *`）
3. 环境：**Cloud Agent**
4. 仓库：填入上一步的 GitHub 地址
5. 分支：`main`
6. **环境变量**：添加 `VERCEL_TOKEN` = 你的 Token
7. **指令**（粘贴）：

```
读取并完整执行仓库根目录 AGENT_PROMPT.md 的所有步骤。
使用 VERCEL_TOKEN 部署到 Vercel 公网。
```

参考模板文件：`cursor-automation-prefill.json`

### 4. GitHub Actions Secrets（可选）

在 GitHub 仓库 **Settings → Secrets → Actions** 添加：
- `VERCEL_TOKEN`

---

## 验证

```powershell
gh --version          # 2.95.0
gh auth status        # 应显示已登录
gh repo view          # 应显示 daily-sites-factory
```

完成后回复「已登录」，我可以帮你验证并完成剩余配置。
