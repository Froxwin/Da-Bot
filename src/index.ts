import { join as Ω } from 'path'
const ඞ = require(Ω(__dirname, '/engine/config/client'))
ඞ.loadAsync('commands', ඞ.commands)
ඞ.loadAsync('modules', ඞ.buttons)
require('fs').readdirSync(Ω(__dirname, '/engine/events'))
  .filter(a => a.endsWith('.js')).forEach(Φ => {
    const δ =
      require(Ω(__dirname, `/engine/events/${Φ}`))
    ඞ[δ.once ? 'once' : 'on'](
      δ.name, (...Σ) => δ.execute(...Σ)
    )
  })
require(Ω(__dirname, '/engine/config/token'))()
ඞ.login(process.env.SOFTundWET)
process.stdout.write(
  `NODE: \x1b[93m${process.version}\x1b[0m | ` +
  `PID: \x1b[93m${process.pid}\x1b[0m | ` +
  `OS: \x1b[93m${process.platform}\x1b[0m\n`
)
