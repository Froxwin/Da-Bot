const clt = require('./config/client')
clt.load('commands', clt.commands)
clt.load('modules', clt.buttons)
require('fs').readdirSync('./events').forEach(file => {
  const evt = require(`./events/${file}`)
  clt[evt.once ? 'once' : 'on'](
    evt.name, (...args) => evt.execute(...args)
  )
})
require('dotenv').config()
clt.login(process.env.SOFTundWET)
