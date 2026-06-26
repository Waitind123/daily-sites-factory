# 飞书群双向指令配置

> 群 Webhook 只能**发**通知，不能**收**消息。要你在群里 @机器人 发指令，需要自建应用 + 事件回调。

## 架构

```
你在飞书群 @机器人 发「部署 feature-vote」
    ↓
飞书事件 → services/feishu-bot (Vercel)
    ↓
GitHub repository_dispatch → feishu-command.yml
    ↓
scripts/feishu-handle-command.mjs 执行并回复群消息
```

## 一次性配置

### 1. 飞书开放平台（用「我的小龙虾」OpenClaw 应用）

1. [飞书开放平台](https://open.feishu.cn/app) → 进入应用
2. **机器人** 已开启
3. **权限管理** 申请并发布：
   - `im:message.group_at_msg:readonly`（接收群内 @机器人 消息）
   - `im:message:send_as_bot`（回复消息）
4. **事件与回调** → 订阅方式：**将事件发送至开发者服务器**
   - 请求 URL：`https://你的域名.vercel.app/api/feishu/event`
   - 添加事件：`im.message.receive_v1`
   - 复制 **Verification Token**、**Encrypt Key**（可关闭加密简化调试）
5. 把机器人**拉进你的飞书群**

### 2. 部署 feishu-bot 到 Vercel

**Windows（CMD，推荐）** — 在项目根目录：

```cmd
cd C:\Users\ziweiqin\Projects\daily-sites-factory
set VERCEL_TOKEN=你的vercel_token
scripts\deploy-feishu-bot.cmd
```

**Windows（PowerShell）** — 同上目录：

```powershell
cd C:\Users\ziweiqin\Projects\daily-sites-factory
$env:VERCEL_TOKEN = "你的vercel_token"
powershell -ExecutionPolicy Bypass -File scripts\deploy-feishu-bot.ps1
```

> **注意**：`$env:VERCEL_TOKEN = "..."` 是 PowerShell 语法，在 CMD 里会报错「文件名、目录名或卷标语法不正确」。CMD 请用 `set VERCEL_TOKEN=...`。

**Mac / Linux：**

```bash
bash scripts/deploy-feishu-bot.sh
```

记下输出的 `https://xxx.vercel.app/api/feishu/event`，填回飞书「事件与回调」。

### 3. Vercel 环境变量

| 变量 | 说明 |
|------|------|
| `FEISHU_APP_ID` | 小龙虾 App ID |
| `FEISHU_APP_SECRET` | App Secret |
| `FEISHU_VERIFICATION_TOKEN` | 事件订阅 Verification Token |
| `FEISHU_ENCRYPT_KEY` | 加密密钥（未启用加密可留空） |
| `FEISHU_ALLOWED_CHAT_IDS` | 可选，群 chat_id 白名单 `oc_xxx,oc_yyy` |
| `GITHUB_TOKEN` | 有 `repo` + `workflow` 权限的 PAT |
| `GITHUB_REPO` | `Waitind123/daily-sites-factory` |

### 4. GitHub Secrets（feishu-command 工作流回复用）

- `FEISHU_APP_ID`
- `FEISHU_APP_SECRET`
- `GITHUB_TOKEN`（通常 Actions 自带，需有 workflow 权限）

## 可用指令（在群里 @机器人）

| 指令 | 作用 |
|------|------|
| `帮助` | 显示指令列表 |
| `状态` | 最近部署信息 |
| `列表` | 站点 URL 列表 |
| `部署 feature-vote` | 触发 GitHub Actions 重新部署 |
| `建站 描述...` | 写入 `feishu/inbox.json`，Agent 下次运行处理 |

## 验证

1. 飞书开放平台 → 事件订阅 → 点击「验证」应成功
2. 在群里发：`@我的小龙虾 帮助`
3. 应收到指令列表回复

### 飞书显示「请求 3 秒超时」

按顺序排查：

1. **先预热**（避免 Vercel 冷启动超过 3 秒）  
   浏览器打开：https://feishu-bot-navy.vercel.app/api/feishu/event  
   看到 `{"ok":true,...}` 后，**立刻**回飞书点「保存」验证（10 秒内）。

2. **关闭事件加密（推荐初次配置）**  
   飞书 → 事件与回调 → 若启用了 **Encrypt Key / 加密**，先**关闭**，保存后再验证。  
   若必须开加密，把同一 **Encrypt Key** 填到 Vercel 环境变量 `FEISHU_ENCRYPT_KEY`，Redeploy 后再验证。

3. **重新部署**（已优化 Edge + 香港节点，响应更快）  
   ```cmd
   cd C:\Users\ziweiqin\Projects\daily-sites-factory
   set VERCEL_TOKEN=你的token
   scripts\deploy-feishu-bot.cmd
   ```

4. 仍超时：在 CMD 手动模拟验证（应秒回 `challenge`）  
   ```cmd
   curl -X POST https://feishu-bot-navy.vercel.app/api/feishu/event -H "Content-Type: application/json" -d "{\"type\":\"url_verification\",\"challenge\":\"abc123\"}"
   ```  
   若本地 curl 成功但飞书仍超时，多半是飞书服务器到 Vercel 网络问题，可多试几次或换时段再点验证。

## 与仅 Webhook 的区别

| 方式 | 方向 | 用途 |
|------|------|------|
| `FEISHU_WEBHOOK_URL` | 单向 → 群 | 部署成功通知 |
| 自建应用事件 | 双向 ↔ 群 | 你发指令，Agent 执行并回复 |

两种可同时使用。

## 常见问题（Windows）

### `git pull` 失败：`Failed to connect to github.com port 443 via 127.0.0.1`

说明 Git 走了本机代理（127.0.0.1），但代理/VPN 没开或端口不对。

**任选一种：**

1. 打开你的 VPN/代理软件，再执行 `git pull`
2. 临时取消 Git 代理后重试：
   ```cmd
   git config --global --unset http.proxy
   git config --global --unset https.proxy
   git pull
   ```
3. 无法 pull 时，在浏览器打开 [GitHub 仓库](https://github.com/Waitind123/daily-sites-factory)，下载 ZIP，解压后把 `scripts\deploy-feishu-bot.cmd` 复制到你本地项目对应目录

### 仓库已存在，不必再 `git clone`

```cmd
cd C:\Users\ziweiqin\Projects\daily-sites-factory
```

直接进入该目录即可。
