const π = require('./config/client')
π.load('commands', π.commands)
π.load('modules', π.buttons)
require('fs').readdirSync('./events').forEach(Φ => {
  const δ = require(`./events/${Φ}`)
  π[δ.once ? 'once' : 'on'](
    δ.name, (...args) => δ.execute(...args)
  )
})
require('fs').readFileSync('../.env', 'utf-8')
  .split((/\r\n+/)).forEach(λ => {
    process.env[λ.split(/=/)[0]] = λ.split(/=/)[1]
  })
π.login(process.env.SOFTundWET)
