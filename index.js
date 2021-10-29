const clt = require('.\\config\\client')
clt.load(`${process.cwd()}\\commands`, clt.commands)
clt.load(`${process.cwd()}\\modules`, clt.buttons)
require('fs').readdirSync('.\\events').filter(f => f.endsWith('.js'))
  .forEach(file => {
    const evt = require(`.\\events\\${file}`)
    evt.once
      ? clt.once(evt.name, (...args) => evt.execute(...args))
      : clt.on(evt.name, (...args) => evt.execute(...args))
  })
require('dotenv').config()
clt.login(process.env.SOFTundWET)
