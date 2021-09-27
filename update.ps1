Write-Host ('=================|Repairing Files|================') -ForegroundColor Green
npm i
Write-Host ('==============|Updating Dependencies|=============') -ForegroundColor Green
npm update
Write-Host ('==============|Auditing Dependencies|=============') -ForegroundColor Green
npm audit
Write-Host ('=======|Dependencies for current workspace|=======') -ForegroundColor Cyan
npm ls | lolcat