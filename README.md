# Daily Sites Factory

每天自动选一个垂直方向 → 开发网站 → 部署公网。

遵循 [@levelsio](https://twitter.com/levelsio) 独立开发路径。

## 三种运行方式

### 方式 A：Cursor Automation（推荐）

在 Cursor 中创建定时自动化：

| 配置项 | 值 |
|--------|-----|
| **名称** | 每日垂直建站 |
| **触发** | 每天 12:00（cron: `0 12 * * *`） |
| **运行环境** | Cloud Agent |
| **仓库** | 本目录 push 到 GitHub 后填入 |
| **指令** | 读取并执行 `AGENT_PROMPT.md` 全部步骤 |

**环境变量**（Automation 设置中添加）：

- `VERCEL_TOKEN` — [Vercel Account Tokens](https://vercel.com/account/tokens)

### 方式 B：手动触发

在 Cursor Agent 中说：

> 执行 AGENT_PROMPT.md 中的每日建站任务

### 方式 C：Windows 本地提醒

```powershell
powershell -ExecutionPolicy Bypass -File scripts\register-scheduled-task.ps1
```

每天 12:00 打开项目并写日志（仍需你在 Cursor 中确认 Agent 运行）。

## 垂直方向池

编辑 `verticals.json` 添加/修改方向。Agent 按 `state.json` 轮询。

## 部署到 Vercel

1. 注册 [Vercel](https://vercel.com)
2. 创建 Token → 填入 Cursor Automation 或 GitHub Secrets
3. Agent 运行 `npx vercel deploy --prod`

## 目录

```
verticals.json     # 14 个预设垂直方向
state.json         # 部署轮询状态
AGENT_PROMPT.md    # Agent 完整指令
sites/             # 各站点输出
scripts/           # 本地计划任务
```

## 首次使用

1. 将本仓库 push 到 GitHub
2. 配置 `VERCEL_TOKEN`
3. 创建 Cursor Automation（每天 12:00）
4. 或现在就说：「执行 AGENT_PROMPT.md」开始第一个站点
