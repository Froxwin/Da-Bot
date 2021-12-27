#!/usr/bin/env pwsh
#Requires -Version 5

[CmdletBinding()]
param([bool][alias('l')]$lolcat)

Write-Host ('=================|Repairing Files|================') -ForegroundColor Green
npm i
Write-Host ('==============|Updating Dependencies|=============') -ForegroundColor Green
npm update
Write-Host ('==============|Auditing Dependencies|=============') -ForegroundColor Green
npm audit
Write-Host ('=======|Dependencies for current workspace|=======') -ForegroundColor Cyan
$lolcat ? (npm ls | lolcat) : (npm ls)
