import { readdirSync } from 'fs'
import { commands, buttons, once, on, login } from '.\\config\\client'
require('dotenv').config()
const commandFolders = readdirSync('.\\commands')
for (const folder of commandFolders) {
  const commandFiles = readdirSync(`.\\commands\\${folder}`)
    .filter((file) => file.endsWith('.js'))
  for (const file of commandFiles) {
    const command = require(`.\\commands\\${folder}\\${file}`)
    commands.set(command.name, command)
  }
}
const buttonFolders = readdirSync('.\\modules')
for (const folder of buttonFolders) {
  const buttonFiles = readdirSync(`.\\modules\\${folder}`)
    .filter((file) => file.endsWith('.js'))
  for (const file of buttonFiles) {
    const button = require(`.\\modules\\${folder}\\${file}`)
    buttons.set(button.name, button)
  }
}
const events = readdirSync('.\\events')
  .filter((file) => file.endsWith('.js'))
for (const file of events) {
  /** @type {import('./Classes/event')} event */
  const event = require(`./events/${file}`)
  if (event.once) {
    once(event.name, (...args) => event.execute(...args))
  } else {
    on(event.name, (...args) => event.execute(...args))
  }
}
login(process.env.SOFTundWET)
