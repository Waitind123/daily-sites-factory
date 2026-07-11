#!/usr/bin/env bash
# 本地一键写入 GitHub Secrets（需已登录 gh auth login）
# 用法: bash scripts/install-social-secrets.sh
set -euo pipefail

REPO="${GITHUB_REPO:-Waitind123/daily-sites-factory}"

echo "=== 社交自动发帖 Secrets 安装 ==="
echo "仓库: $REPO"
echo ""

read -rp "Bluesky handle (如 name.bsky.social): " BLUESKY_ID
read -rp "Bluesky App Password: " BLUESKY_PW
read -rp "Mastodon 实例 URL (如 https://mastodon.social): " MASTO_URL
read -rp "Mastodon Access Token: " MASTO_TOKEN

echo "true" | gh secret set SOCIAL_PROMO_ENABLED --repo "$REPO"
echo "$BLUESKY_ID" | gh secret set BLUESKY_IDENTIFIER --repo "$REPO"
echo "$BLUESKY_PW" | gh secret set BLUESKY_APP_PASSWORD --repo "$REPO"
echo "$MASTO_URL" | gh secret set MASTODON_INSTANCE_URL --repo "$REPO"
echo "$MASTO_TOKEN" | gh secret set MASTODON_ACCESS_TOKEN --repo "$REPO"

echo ""
echo "✓ Secrets 已写入。正在触发测试 workflow..."
gh workflow run social-promo-test.yml --repo "$REPO"
echo ""
echo "查看进度: gh run list --workflow=social-promo-test.yml --repo $REPO"
