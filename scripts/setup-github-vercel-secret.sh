#!/usr/bin/env bash
# 一次性：把 VERCEL_TOKEN 写入 GitHub Actions Secrets（需 gh 已登录且有 admin 权限）
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if [ -f "$ROOT/.env.local" ]; then
  set -a
  # shellcheck disable=SC1091
  source "$ROOT/.env.local"
  set +a
fi

: "${VERCEL_TOKEN:?请在 .env.local 中设置 VERCEL_TOKEN，或 export VERCEL_TOKEN=...}"

gh secret set VERCEL_TOKEN -R Waitind123/daily-sites-factory --body "$VERCEL_TOKEN"
echo "✓ GitHub Secret VERCEL_TOKEN 已设置"
