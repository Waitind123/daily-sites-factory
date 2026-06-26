@echo off
chcp 65001 >nul 2>&1
REM Feishu bot deploy to Vercel (Windows CMD)
REM Usage: set VERCEL_TOKEN=your_token && scripts\deploy-feishu-bot.cmd

if "%VERCEL_TOKEN%"=="" (
  echo [ERROR] Set VERCEL_TOKEN first:
  echo   set VERCEL_TOKEN=your_token
  echo   scripts\deploy-feishu-bot.cmd
  exit /b 1
)

cd /d "%~dp0.."
if not exist "services\feishu-bot" (
  echo [ERROR] services\feishu-bot not found. Run from daily-sites-factory root.
  exit /b 1
)

where npx >nul 2>&1
if errorlevel 1 (
  echo [ERROR] npx not found. Install Node.js from https://nodejs.org
  exit /b 1
)

echo Deploying feishu-bot to Vercel...
cd services\feishu-bot
call npx vercel deploy --prod --yes --token "%VERCEL_TOKEN%"
if errorlevel 1 (
  echo [ERROR] Deploy failed. Check VERCEL_TOKEN.
  exit /b 1
)

echo.
echo ========================================
echo Deploy OK. Next steps:
echo 1. Feishu console - Events - Request URL:
echo    https://feishu-bot-navy.vercel.app/api/feishu/event
echo    (or your alias from output above + /api/feishu/event)
echo 2. Vercel feishu-bot env vars: docs\FEISHU-BOT-SETUP.md
echo ========================================
