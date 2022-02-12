import { join as Ω } from 'path'
const ඞ = require(Ω(__dirname, '/engine/config/client'))
ඞ.load('commands'); ඞ.load('buttons')
const π = '/engine/events/'
const λ = require('fs').readdirSync(Ω(__dirname, π))
  .filter(f => f.endsWith('.js'))
for (const Φ of λ) {
  const δ = require(Ω(__dirname, (π + Φ)))
  ඞ[δ.once ? 'once' : 'on'](
    δ.name, (...Σ) => δ.execute(...Σ))
}
ඞ.start('SOFTundWET')
console.log(`PID: \x1b[93m${process.pid}\x1b[0m`)
