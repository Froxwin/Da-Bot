#Requires -Version 7

Get-ChildItem ('../src/framework/commands') |
  ForEach-Object {
    Write-Host `
      ("`e[1;38;2;226;165;255m[$($_.BaseName.ToUpper())]")
    Get-ChildItem ($_) |
      ForEach-Object {
        Write-Host `
          ("  `e[38;2;121;192;255m$($_.BaseName.ToUpper())")
      }
  }
