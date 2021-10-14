require('dotenv').config()
const fs = require('fs').readdirSync
const client = require('.\\config\\client')
const filter = a => fs(a).filter(f => f.endsWith('.js'))
const load = (dir, collection) => {
  for (const folder of fs(`.\\${dir}`)) {
    for (const file of filter(`.\\${dir}\\${folder}`)) {
      const obj = require(`.\\${dir}\\${folder}\\${file}`)
      collection.set(obj.name, obj)
    }
  }
}
load('commands', client.commands)
load('modules', client.buttons)
for (const file of filter('.\\events')) {
  /** @type {import('./Classes/event')} event */
  const event = require(`./events/${file}`)
  event.once
    ? client.once(event.name, (...args) => event.execute(...args))
    : client.on(event.name, (...args) => event.execute(...args))
}
client.login(process.env.SOFTundWET)
