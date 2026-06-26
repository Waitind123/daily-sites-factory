# 部署飞书指令中枢到 Vercel（Windows PowerShell）
# 用法: powershell -ExecutionPolicy Bypass -File scripts\deploy-feishu-bot.ps1
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Scope = if ($env:VERCEL_SCOPE) { $env:VERCEL_SCOPE } else { "baoyu18178053101-6131s-projects" }

$envLocal = Join-Path $Root ".env.local"
if (Test-Path $envLocal) {
  Get-Content $envLocal | ForEach-Object {
    if ($_ -match '^\s*([^#=]+)=(.*)$') {
      $name = $matches[1].Trim()
      $value = $matches[2].Trim().Trim('"')
      Set-Item -Path "env:$name" -Value $value
    }
  }
}

if (-not $env:VERCEL_TOKEN) {
  Write-Host "请先设置 VERCEL_TOKEN，例如：" -ForegroundColor Yellow
  Write-Host '  $env:VERCEL_TOKEN = "你的token"' -ForegroundColor Gray
  Write-Host "或在项目根目录 .env.local 里写 VERCEL_TOKEN=..." -ForegroundColor Gray
  exit 1
}

Set-Location (Join-Path $Root "services\feishu-bot")
if (Test-Path "package-lock.json") { npm ci } else { npm install }
npx vercel link --yes --scope="$Scope" --token="$env:VERCEL_TOKEN" 2>$null
$out = npx vercel deploy --prod --yes --scope="$Scope" --token="$env:VERCEL_TOKEN" 2>&1 | Out-String
$url = [regex]::Matches($out, 'https://[^\s]+\.vercel\.app') | ForEach-Object { $_.Value } | Select-Object -Last 1

Write-Host ""
if ($url) {
  Write-Host "feishu-bot 已部署: $url" -ForegroundColor Green
  Write-Host "飞书事件回调 URL（复制到开放平台）:" -ForegroundColor Cyan
  Write-Host "$url/api/feishu/event" -ForegroundColor White
} else {
  Write-Host "部署输出:" -ForegroundColor Yellow
  Write-Host $out
  exit 1
}
