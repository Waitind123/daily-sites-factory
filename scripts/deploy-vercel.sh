#!/usr/bin/env bash
# 本地或 Agent 部署脚本：从 .env.local 读取 VERCEL_TOKEN
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE_ID="${1:?用法: scripts/deploy-vercel.sh <site-id>}"

if [ -f "$ROOT/.env.local" ]; then
  set -a
  # shellcheck disable=SC1091
  source "$ROOT/.env.local"
  set +a
fi

: "${VERCEL_TOKEN:?请在仓库根目录 .env.local 中设置 VERCEL_TOKEN}"
VERCEL_SCOPE="${VERCEL_SCOPE:-baoyu18178053101-6131s-projects}"

cd "$ROOT/sites/$SITE_ID"
npm ci 2>/dev/null || npm install
npm run build
npx vercel link --yes --scope="$VERCEL_SCOPE" --token="$VERCEL_TOKEN"
npx vercel deploy --prod --yes --scope="$VERCEL_SCOPE" --token="$VERCEL_TOKEN"
