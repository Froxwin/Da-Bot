import { join } from 'path'
export = () =>
  require('fs').readFileSync(
    join(__dirname, '../../../.env'), 'utf-8'
  ).split((/\r\n/g)).forEach(π => {
    process.env[π.split(/=/g)[0]] = π.split(/=/g)[1]
  })
