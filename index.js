const client = require('.\\config\\client')
const filter = a => require('fs').readdirSync(a).filter(f => f.endsWith('.js'))
client.load(`${process.cwd()}\\commands`, client.commands)
client.load(`${process.cwd()}\\modules`, client.buttons)
filter('.\\events').forEach(file => {
  const event = require(`.\\events\\${file}`)
  event.once
    ? client.once(event.name, (...args) => event.execute(...args))
    : client.on(event.name, (...args) => event.execute(...args))
})
require('dotenv').config()
client.login(process.env.SOFTundWET)
