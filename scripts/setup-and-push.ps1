#Requires -Version 5.1
# 在 gh 登录成功后运行此脚本：创建 GitHub 仓库并 push

$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

$ProjectRoot = "C:\Users\ziweiqin\Projects\daily-sites-factory"
$git = "C:\Program Files\Git\cmd\git.exe"
$RepoName = "daily-sites-factory"

Set-Location $ProjectRoot

Write-Host "检查 GitHub 登录状态..."
gh auth status
if ($LASTEXITCODE -ne 0) {
  Write-Host "请先运行: gh auth login"
  exit 1
}

Write-Host "创建 GitHub 仓库并 push..."
$remote = gh repo view $RepoName --json url -q .url 2>$null
if (-not $remote) {
  gh repo create $RepoName --public --source=. --remote=origin --push
} else {
  Write-Host "仓库已存在: $remote"
  & $git remote remove origin 2>$null
  & $git remote add origin "https://github.com/$(gh api user -q .login)/$RepoName.git"
  & $git branch -M main
  & $git push -u origin main
}

$url = gh repo view $RepoName --json url -q .url
Write-Host ""
Write-Host "GitHub 仓库地址: $url"
