#Requires -Version 5.1
$ErrorActionPreference = "Continue"

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

$ProjectRoot = "C:\Users\ziweiqin\Projects\daily-sites-factory"
$git = "C:\Program Files\Git\cmd\git.exe"
$RepoName = "daily-sites-factory"

Set-Location $ProjectRoot

Write-Host "Checking GitHub login..."
gh auth status
if ($LASTEXITCODE -ne 0) {
  Write-Host "Run gh auth login or gh-auth-with-token.ps1 first."
  exit 1
}

$login = gh api user -q .login
$fullName = "$login/$RepoName"

Write-Host "Checking repo $fullName ..."
$remote = $null
gh repo view $fullName --json url -q .url 2>$null | ForEach-Object { $remote = $_ }

if (-not $remote) {
  Write-Host "Creating repo and pushing..."
  gh repo create $RepoName --public --source=. --remote=origin --push
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
} else {
  Write-Host "Repo exists: $remote"
  & $git remote remove origin 2>$null
  & $git remote add origin "https://github.com/$login/$RepoName.git"
  & $git branch -M main 2>$null
  & $git push -u origin main
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

$url = gh repo view $fullName --json url -q .url
Write-Host ""
Write-Host "GitHub URL: $url"
