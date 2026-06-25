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

### 4. 企业微信通知（部署 URL 推送）

1. 在企业微信群里添加 **群机器人**，复制 Webhook 地址
2. 在 GitHub 仓库 **Settings → Secrets → Actions** 添加：
   - `WECOM_WEBHOOK_URL` = 机器人 Webhook 完整 URL

每次站点部署成功后，GitHub Actions 会自动推送公网 URL 到群里。

手动测试：
```bash
WECOM_WEBHOOK_URL="https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx" \
  node scripts/notify-wecom.mjs nomad-cities https://nomad-cities.vercel.app "游民城市榜"
```

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
