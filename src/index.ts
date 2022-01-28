import ඞ = require('./engine/base/config/client')
ඞ.load('commands', ඞ.commands)
ඞ.load('modules', ඞ.buttons)
require('fs').readdirSync('./engine/base/events')
  .forEach(Φ => {
    const δ = require(`./engine/base/events/${Φ}`)
    ඞ[δ.once ? 'once' : 'on'](
      δ.name, (...Σ) => δ.execute(...Σ)
    )
  })
require('./engine/base/config/token')('../.env')
ඞ.login(process.env.SOFTundWET)
console.log(`PID: \x1b[93m${process.pid}\x1b[0m`)
console.log(`NODE: \x1b[93m${process.version}\x1b[0m`)
