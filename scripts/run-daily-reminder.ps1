#Requires -Version 5.1
$ProjectRoot = "C:\Users\ziweiqin\Projects\daily-sites-factory"
$LogFile = Join-Path $ProjectRoot "logs\reminder-$(Get-Date -Format 'yyyy-MM-dd').log"

$msg = @"
[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] 每日建站提醒
请在 Cursor 中对 Agent 说：
「执行 AGENT_PROMPT.md 中的每日建站任务」
或打开 Cursor Automation 运行 Cloud Agent。
项目路径: $ProjectRoot
"@

Add-Content -Path $LogFile -Value $msg
Write-Host $msg

# 尝试打开 Cursor 到项目目录（若 cursor 在 PATH 中）
$cursor = Get-Command cursor -ErrorAction SilentlyContinue
if ($cursor) {
  & cursor $ProjectRoot
}
