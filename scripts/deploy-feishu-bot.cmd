@echo off
REM 飞书双向机器人 — 一键部署到 Vercel（CMD 版，无需 PowerShell）
REM 用法: set VERCEL_TOKEN=你的token && scripts\deploy-feishu-bot.cmd

if "%VERCEL_TOKEN%"=="" (
  echo [错误] 请先设置 VERCEL_TOKEN
  echo   set VERCEL_TOKEN=你的token
  echo   scripts\deploy-feishu-bot.cmd
  exit /b 1
)

cd /d "%~dp0.."
if not exist "services\feishu-bot" (
  echo [错误] 找不到 services\feishu-bot，请确认在 daily-sites-factory 目录
  exit /b 1
)

where npx >nul 2>&1
if errorlevel 1 (
  echo [错误] 未找到 npx，请先安装 Node.js: https://nodejs.org
  exit /b 1
)

echo 正在部署 feishu-bot 到 Vercel...
cd services\feishu-bot
call npx vercel deploy --prod --yes --token "%VERCEL_TOKEN%"
if errorlevel 1 (
  echo [错误] 部署失败，请检查 VERCEL_TOKEN 是否有效
  exit /b 1
)

echo.
echo ========================================
echo 部署成功！下一步：
echo 1. 飞书开放平台 - 事件与回调 - 请求 URL 填:
echo    https://你的域名.vercel.app/api/feishu/event
echo 2. Vercel 项目 feishu-bot 环境变量见 docs\FEISHU-BOT-SETUP.md
echo ========================================
