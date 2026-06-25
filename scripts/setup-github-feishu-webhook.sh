#!/usr/bin/env bash
# 把飞书群 Webhook 写入 GitHub Actions Secrets（方法 3，无需 open_id / 邮箱）
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

: "${FEISHU_WEBHOOK_URL:?请在 feishu.config.local 设置 FEISHU_WEBHOOK_URL}"

echo "→ 写入 GitHub Secret FEISHU_WEBHOOK_URL ($REPO) ..."
gh secret set FEISHU_WEBHOOK_URL -R "$REPO" --body "$FEISHU_WEBHOOK_URL"
echo "✓ FEISHU_WEBHOOK_URL"

echo ""
echo "→ 发送测试通知到飞书群 ..."
export FEISHU_WEBHOOK_URL
node "$ROOT/scripts/notify-feishu.mjs" "feishu-test" "https://daily-sites-factory.vercel.app" "飞书群通知测试"

echo ""
echo "✓ 完成。GitHub Actions 部署成功后会推送到该飞书群。"
