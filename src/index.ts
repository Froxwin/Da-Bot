import { join as Ω } from 'path'
import SOFTandWET = require('./engine/classes/SOFTandWET')
const ඞ: SOFTandWET =
  require(Ω(__dirname, '/engine/config/client'))
ඞ.load('commands', ඞ.commands)
ඞ.load('modules', ඞ.buttons)
require('fs').readdirSync(Ω(__dirname, '/engine/events'))
  .filter(f => f.endsWith('.js')).forEach(Φ => {
    const δ =
      require(Ω(__dirname, `/engine/events/${Φ}`))
    ඞ[δ.once ? 'once' : 'on'](
      δ.name, (...Σ) => δ.execute(...Σ)
    )
  })
ඞ.start('SOFTundWET')
process.stdout.write(
  `NODE: \x1b[93m${process.version}\x1b[0m | ` +
  `PID: \x1b[93m${process.pid}\x1b[0m\n`
)
