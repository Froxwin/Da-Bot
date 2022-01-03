const ඞ = require('./config/client')
ඞ.load('commands', ඞ.commands)
ඞ.load('modules', ඞ.buttons)
require('fs').readdirSync('./events').forEach(Φ => {
  const δ = require(`./events/${Φ}`)
  ඞ[δ.once ? 'once' : 'on'](
    δ.name, (...Σ) => δ.execute(...Σ)
  )
})
require('fs').readFileSync('../.env', 'utf-8')
  .split((/\r\n+/)).forEach(π => {
    process.env[π.split(/=/)[0]] = π.split(/=/)[1]
  })
ඞ.login(process.env.SOFTundWET)
