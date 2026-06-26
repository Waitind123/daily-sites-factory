#!/usr/bin/env bash
# 部署飞书指令中枢到 Vercel（一次性）
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SCOPE="${VERCEL_SCOPE:-baoyu18178053101-6131s-projects}"

if [ -f "$ROOT/.env.local" ]; then
  set -a
  # shellcheck disable=SC1091
  source "$ROOT/.env.local"
  set +a
fi

: "${VERCEL_TOKEN:?需要 VERCEL_TOKEN}"

cd "$ROOT/services/feishu-bot"
npm ci || npm install
npx vercel link --yes --scope="$SCOPE" --token="$VERCEL_TOKEN" || true
URL=$(npx vercel deploy --prod --yes --scope="$SCOPE" --token="$VERCEL_TOKEN" 2>&1 | grep -oE 'https://[^ ]+\.vercel\.app' | tail -1)
echo ""
echo "✓ feishu-bot 已部署: $URL"
echo "  飞书事件回调 URL: ${URL}/api/feishu/event"
echo "  详见 docs/FEISHU-BOT-SETUP.md"
