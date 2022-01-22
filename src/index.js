const ඞ = require('./engine/config/client')
ඞ.load('commands', ඞ.commands)
ඞ.load('modules', ඞ.buttons)
require('fs').readdirSync('./engine/events')
  .forEach(Φ => {
    const δ = require(`./engine/events/${Φ}`)
    ඞ[δ.once ? 'once' : 'on'](
      δ.name, (...Σ) => δ.execute(...Σ)
    )
  })
require('fs').readFileSync('../.env', 'utf-8')
  .split((/\r\n/g)).forEach(π => {
    process.env[π.split(/=/g)[0]] = π.split(/=/g)[1]
  })
ඞ.login(process.env.SOFTundWET)
