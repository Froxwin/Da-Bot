import ඞ = require('./engine/config/client')
import { join as Ω } from 'path'
import { readdir as Γ } from 'fs/promises'
ඞ.load('commands'); ඞ.load('buttons');
(async dir => (await Γ(Ω(__dirname, dir)))
  .filter(file => file.endsWith('.js'))
  .forEach(async Φ => {
    const δ = await import(Ω(__dirname, `${dir}/${Φ}`))
    ඞ[δ.once ? 'once' : 'on'](
      δ.name, (...Σ) => δ.execute(...Σ)
    )
  }))('/engine/events/')
ඞ.start('SOFTundWET')
