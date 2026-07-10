#!/usr/bin/env bash
# 把飞书私信配置写入 GitHub Actions Secrets（需 gh 已登录且有 admin 权限）
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REPO="${GITHUB_REPO:-Waitind123/daily-sites-factory}"
CONFIG="$ROOT/feishu.config.local"

if [ -f "$CONFIG" ]; then
  set -a
  # shellcheck disable=SC1090
  source "$CONFIG"
  set +a
fi

: "${FEISHU_APP_ID:?请在 feishu.config.local 设置 FEISHU_APP_ID}"
: "${FEISHU_APP_SECRET:?请在 feishu.config.local 设置 FEISHU_APP_SECRET}"

if [ -z "${FEISHU_RECEIVE_EMAIL:-}" ] && [ -z "${FEISHU_RECEIVE_ID:-}" ]; then
  echo "请在 feishu.config.local 设置 FEISHU_RECEIVE_EMAIL（推荐）或 FEISHU_RECEIVE_ID"
  exit 1
fi

echo "→ 写入 GitHub Secrets ($REPO) ..."
gh secret set FEISHU_APP_ID -R "$REPO" --body "$FEISHU_APP_ID"
gh secret set FEISHU_APP_SECRET -R "$REPO" --body "$FEISHU_APP_SECRET"

if [ -n "${FEISHU_RECEIVE_EMAIL:-}" ]; then
  gh secret set FEISHU_RECEIVE_EMAIL -R "$REPO" --body "$FEISHU_RECEIVE_EMAIL"
  echo "✓ FEISHU_RECEIVE_EMAIL"
else
  gh secret set FEISHU_RECEIVE_ID -R "$REPO" --body "$FEISHU_RECEIVE_ID"
  echo "✓ FEISHU_RECEIVE_ID"
fi

echo ""
echo "→ 发送测试通知 ..."
if [ -n "${FEISHU_RECEIVE_EMAIL:-}" ]; then
  export FEISHU_RECEIVE_EMAIL
else
  export FEISHU_RECEIVE_ID
fi
export FEISHU_APP_ID FEISHU_APP_SECRET
node "$ROOT/scripts/notify-feishu.mjs" "feishu-test" "https://daily-sites-factory.vercel.app" "飞书配置测试"

echo ""
echo "✓ 完成。下次 GitHub Actions 部署成功后会私信你。"
