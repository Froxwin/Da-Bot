const clt = require('./config/client')
clt.load('commands', clt.commands)
clt.load('modules', clt.buttons)
require('fs').readdirSync('./events').forEach(file => {
  const evt = require(`./events/${file}`)
  clt[evt.once ? 'once' : 'on'](
    evt.name, (...args) => evt.execute(...args)
  )
})
require('fs').readFileSync('../.env', { encoding: 'utf-8' })
  .trim().replace(/\r+/, '').split((/\n+/)).forEach(Δ => {
    const λ = Δ.split(/=/)
    process.env[λ[0]] = λ[1]
  })
clt.login(process.env.SOFTundWET)
