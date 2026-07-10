# Replicate AI 生成配置（ai-headshots）

## 一次性配置

1. 打开 https://replicate.com/account/api-tokens 复制 token（`r8_...`）
2. GitHub 仓库 → **Settings → Secrets and variables → Actions** → **New repository secret**
   - Name: `REPLICATE_API_TOKEN`
   - Value: 你的 token
3. GitHub Actions → **Deploy site on push** → Run workflow → `site_id` = `ai-headshots`

部署脚本会自动把 secret 同步到 Vercel 的 `REPLICATE_API_TOKEN` 环境变量。

## 验证

```bash
curl -s https://ai-headshots-navy.vercel.app/api/health
# 期望: {"status":"ok","replicate":true,"polar":true}
```

上传自拍生成后，不应再出现「Demo mode · set REPLICATE_API_TOKEN」。

## 安全

- **切勿**把 token 写进代码、聊天记录或截图
- 若 token 已泄露，请在 Replicate 控制台 **撤销并重新生成**
