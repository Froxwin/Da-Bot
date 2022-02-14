import { join as Ω } from 'path'
import ඞ = require('./engine/config/client')
ඞ.load('commands'); ඞ.load('buttons')
require('fs').readdirSync(Ω(__dirname, '/engine/events/'))
  .filter(file => file.endsWith('.js'))
  .forEach(Φ => {
    const δ = require(Ω(__dirname, `/engine/events/${Φ}`))
    ඞ[δ.once ? 'once' : 'on'](
      δ.name, (...Σ) => δ.execute(...Σ)
    )
  })
ඞ.start('SOFTundWET')
