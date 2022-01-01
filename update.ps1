#Requires -Version 5

[CmdletBinding()]
param([switch][alias('l')]$lolcat)

Write-Host ('|||Repairing Files||>') -ForegroundColor Green
npm.ps1 install
Write-Host ('|||Updating Dependencies||>') -ForegroundColor Green
npm.ps1 update
Write-Host ('|||Auditing Dependencies||>') -ForegroundColor Green
npm.ps1 audit
Write-Host ('|||Dependencies for current workspace||>') -ForegroundColor Cyan
$lolcat ? (npm ls | lolcat) : (npm ls)
