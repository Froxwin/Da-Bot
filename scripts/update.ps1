#Requires -Version 7

[CmdletBinding()]
param([switch][alias('l')]$lolcat)

Write-Host ('|||Repairing Files||>') -ForegroundColor Green
npm install
Write-Host ('|||Updating Dependencies||>') -ForegroundColor Green
npm update
Write-Host ('|||Auditing Dependencies||>') -ForegroundColor Green
npm audit
Write-Host ('|||Dependencies for current workspace||>') -ForegroundColor Cyan
$lolcat ? (npm ls | lolcat) : (npm ls)
