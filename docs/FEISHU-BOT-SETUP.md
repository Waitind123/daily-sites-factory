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

```bash
cd services/feishu-bot
npm install
npx vercel link --yes --scope=baoyu18178053101-6131s-projects
npx vercel deploy --prod
```

记下部署 URL，填回飞书事件回调地址。

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

## 与仅 Webhook 的区别

| 方式 | 方向 | 用途 |
|------|------|------|
| `FEISHU_WEBHOOK_URL` | 单向 → 群 | 部署成功通知 |
| 自建应用事件 | 双向 ↔ 群 | 你发指令，Agent 执行并回复 |

两种可同时使用。
