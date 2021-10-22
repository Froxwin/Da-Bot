const fs = require('fs').readdirSync
const client = require('.\\config\\client')
const filter = a => fs(a).filter(f => f.endsWith('.js'))
const load = (dir, collec) => fs(`.\\${dir}`).forEach(folder =>
  filter(`.\\${dir}\\${folder}`).forEach(file => collec.set(
    require(`.\\${dir}\\${folder}\\${file}`).name,
    require(`.\\${dir}\\${folder}\\${file}`)
  ))
); load('commands', client.commands); load('modules', client.buttons)
filter('.\\events').forEach(file => {
  const event = require(`.\\events\\${file}`)
  event.once
    ? client.once(event.name, (...args) => event.execute(...args))
    : client.on(event.name, (...args) => event.execute(...args))
})
require('dotenv').config(); client.login(process.env.SOFTundWET)
