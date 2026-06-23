#Requires -Version 5.1
<#
.SYNOPSIS
  注册 Windows 计划任务：每天 12:00 打开 Cursor 并提示运行每日建站 Agent。
  注意：完整自动化需 Cursor Automation（Cloud Agent），本脚本为本地提醒/辅助。
#>

$TaskName = "DailySitesFactory-Noon"
$ProjectRoot = "C:\Users\ziweiqin\Projects\daily-sites-factory"
$LogDir = Join-Path $ProjectRoot "logs"
New-Item -ItemType Directory -Force -Path $LogDir | Out-Null

$ScriptPath = Join-Path $ProjectRoot "scripts\run-daily-reminder.ps1"
$Action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$ScriptPath`""
$Trigger = New-ScheduledTaskTrigger -Daily -At "12:00"
$Settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger $Trigger -Settings $Settings -Force | Out-Null

Write-Host "已注册计划任务: $TaskName"
Write-Host "每天 12:00 运行提醒脚本"
Write-Host "日志目录: $LogDir"
