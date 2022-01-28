export = path =>
  require('fs').readFileSync(path, 'utf-8')
    .split((/\r\n/g)).forEach(π => {
      process.env[π.split(/=/g)[0]] = π.split(/=/g)[1]
    })
