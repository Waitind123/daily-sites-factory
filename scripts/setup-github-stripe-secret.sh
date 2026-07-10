#!/usr/bin/env bash
# 一次性：把 STRIPE_SECRET_KEY 写入 GitHub Actions Secrets
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if [ -f "$ROOT/.env.local" ]; then
  set -a
  # shellcheck disable=SC1091
  source "$ROOT/.env.local"
  set +a
fi

: "${STRIPE_SECRET_KEY:?请在 .env.local 设置 STRIPE_SECRET_KEY，或 export STRIPE_SECRET_KEY=sk_...}"

gh secret set STRIPE_SECRET_KEY -R Waitind123/daily-sites-factory --body "$STRIPE_SECRET_KEY"
echo "✓ GitHub Secret STRIPE_SECRET_KEY 已设置"
echo ""
echo "下一步：GitHub → Actions → 「Stripe 全站接通」→ Run workflow"
