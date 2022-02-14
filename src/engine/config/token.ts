import { join as Ω } from 'path'
export = () => require('fs')
  .readFileSync(Ω(__dirname, '../../../.env'), 'utf-8')
  .split(/\r\n/g)
  .forEach(π => {
    const pair = π.split(/=/g)
    process.env[pair[0]] = pair[1]
  })
