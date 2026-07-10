#!/usr/bin/env node
/**
 * 处理飞书群指令并回复 / 触发 GitHub Actions
 *
 * 由 feishu-bot 回调或 Agent 手动调用:
 *   node scripts/feishu-handle-command.mjs "状态"
 *   node scripts/feishu-handle-command.mjs "部署 feature-vote" --chat-id oc_xxx --message-id om_xxx
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { normalizeCommand, replyText, sendToChat } from "./lib/feishu-api.mjs";
import { formatFactoryDeploySummary, formatSiteDeployLabel } from "./lib/feishu-site-index.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const text = normalizeCommand(process.argv[2] || "");
const chatId = process.env.FEISHU_CHAT_ID || process.argv.includes("--chat-id")
  ? process.argv[process.argv.indexOf("--chat-id") + 1]
  : "";
const messageId = process.env.FEISHU_MESSAGE_ID || process.argv.includes("--message-id")
  ? process.argv[process.argv.indexOf("--message-id") + 1]
  : "";

const appId = process.env.FEISHU_APP_ID;
const appSecret = process.env.FEISHU_APP_SECRET;
const ghToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const repo = process.env.GITHUB_REPO || "Waitind123/daily-sites-factory";

async function reply(msg) {
  if (!appId || !appSecret) {
    console.log(msg);
    return;
  }
  if (messageId) {
    await replyText({ appId, appSecret, messageId, text: msg });
  } else if (chatId) {
    await sendToChat({ appId, appSecret, chatId, text: msg });
  } else {
    console.log(msg);
  }
}

function readState() {
  const p = join(root, "state.json");
  if (!existsSync(p)) return null;
  return JSON.parse(readFileSync(p, "utf8"));
}

async function dispatchWorkflow(workflowFile, inputs = {}) {
  if (!ghToken) return { ok: false, reason: "未配置 GITHUB_TOKEN" };
  const res = await fetch(
    `https://api.github.com/repos/${repo}/actions/workflows/${workflowFile}/dispatches`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ghToken}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ref: "main", inputs }),
    }
  );
  return { ok: res.status === 204, status: res.status };
}

async function appendInbox(entry) {
  const inboxPath = join(root, "feishu", "inbox.json");
  let inbox = { pending: [], processed: [] };
  if (existsSync(inboxPath)) {
    inbox = JSON.parse(readFileSync(inboxPath, "utf8"));
  }
  inbox.pending.push({ ...entry, at: new Date().toISOString() });
  if (!ghToken) {
    console.log("inbox (local only):", entry);
    return;
  }
  // 通过 GitHub API 更新 inbox（供 Cloud Agent 读取）
  const content = Buffer.from(JSON.stringify(inbox, null, 2)).toString("base64");
  const apiBase = `https://api.github.com/repos/${repo}/contents/feishu/inbox.json`;
  let sha;
  const getRes = await fetch(apiBase, {
    headers: { Authorization: `Bearer ${ghToken}`, Accept: "application/vnd.github+json" },
  });
  if (getRes.ok) {
    const cur = await getRes.json();
    sha = cur.sha;
  }
  await fetch(apiBase, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${ghToken}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `feishu: ${entry.command}`,
      content,
      ...(sha ? { sha } : {}),
    }),
  });
}

async function handleCommand(raw) {
  const cmd = normalizeCommand(raw).toLowerCase();

  if (!cmd || cmd === "帮助" || cmd === "help" || cmd === "?" || cmd === "？") {
    return `📋 指令列表：
• 状态 — 最近部署与站点列表
• 部署 <站点id> — 触发重新部署（如：部署 feature-vote）
• 列表 — 所有站点 URL
• 建站 <描述> — 加入建站队列（Agent 下次运行处理）
• 帮助 — 显示本消息`;
  }

  if (cmd === "状态" || cmd === "status") {
    const s = readState();
    if (!s) return "暂无 state.json";
    return `📊 最近部署
站点：${s.lastVerticalId}
${formatSiteDeployLabel(s.lastVerticalId)}
${formatFactoryDeploySummary()}
URL：${s.lastDeployedUrl}
时间：${s.lastDeployedAt}
历史：${s.history?.length || 0} 条记录`;
  }

  if (cmd === "列表" || cmd === "sites" || cmd === "list") {
    const s = readState();
    if (!s?.history?.length) return "暂无站点记录";
    const lines = s.history
      .slice(0, 10)
      .map((h) => `• ${h.name} (${h.verticalId}) — ${formatSiteDeployLabel(h.verticalId)}\n  ${h.url}`)
      .join("\n");
    return `🌐 站点（最近 10 个）\n${lines}`;
  }

  if (cmd.startsWith("部署 ") || cmd.startsWith("deploy ")) {
    const siteId = cmd.split(/\s+/)[1];
    if (!siteId) return "用法：部署 feature-vote";
    const r = await dispatchWorkflow("deploy-site.yml", { site_id: siteId });
    if (r.ok) return `✅ 已触发部署：${siteId}\nGitHub Actions 运行中，完成后飞书会收到 URL 通知。`;
    return `❌ 触发部署失败（${r.reason || r.status}）`;
  }

  if (cmd.startsWith("建站 ") || cmd.startsWith("build ")) {
    const desc = raw.replace(/^(建站|build)\s+/i, "").trim();
    await appendInbox({ command: "build", description: desc, raw });
    return `✅ 已记录建站需求：「${desc}」\n下次 Agent 运行时会优先处理。`;
  }

  return `未识别指令：${raw}\n发送「帮助」查看可用命令。`;
}

try {
  const result = await handleCommand(text);
  await reply(result);
  console.log(result);
} catch (err) {
  console.error(err);
  await reply(`❌ 处理失败：${err.message}`);
  process.exit(1);
}
