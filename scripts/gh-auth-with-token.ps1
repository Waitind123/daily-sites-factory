#Requires -Version 5.1
$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

if (-not $env:GH_TOKEN) {
  Write-Host "Set GH_TOKEN first, e.g.:"
  Write-Host '  $env:GH_TOKEN = "ghp_xxxx"'
  exit 1
}

$env:GH_TOKEN | gh auth login --with-token
if ($LASTEXITCODE -ne 0) {
  Write-Host "Login failed. Try VPN if timeout."
  exit 1
}

gh auth status
Write-Host ""
Write-Host "OK. Next run:"
Write-Host "  powershell -ExecutionPolicy Bypass -File scripts\setup-and-push.ps1"
