import ඞ = require('./engine/config/client');
ඞ.load('commands', ඞ.commands)
ඞ.load('modules', ඞ.buttons)
require('fs').readdirSync('./engine/events')
  .forEach(Φ => {
    const δ = require(`./engine/events/${Φ}`)
    ඞ[δ.once ? 'once' : 'on'](
      δ.name, (...Σ) => δ.execute(...Σ)
    )
  })
require('./engine/config/token')('../.env')
ඞ.login(process.env.SOFTundWET)
// console.log(ඞ.commands)
