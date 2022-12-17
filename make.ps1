if (!(Test-Path "./out")) {
  New-Item "./out" -Type Directory *>$null
}

Get-ChildItem -Path "./src" -Recurse | ForEach-Object {
  if ((Get-Item $_) -is [System.IO.DirectoryInfo]) {
    New-Item $_.FullName.Replace("\src\", "\out\") -Type Directory -Force *>$null
  }
  elseif (!($_.Extension -eq ".ts") || !($_.Extension -eq ".js")) {
    New-Item $_.FullName.Replace("\src\", "\out\") -Force *>$null
  }
}

npm run build

Write-Host "`e[32mFinished Build`e[0m"
