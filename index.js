require('dotenv').config()
const fs = require('fs')
const client = require('./config/client')

const commandFolders = fs.readdirSync('.\\commands')
for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`.\\commands\\${folder}`)
    .filter((file) => file.endsWith('.js'))
  for (const file of commandFiles) {
    const command = require(`.\\commands\\${folder}\\${file}`)
    client.commands.set(command.name, command)
  }
}
const buttonFolders = fs.readdirSync('.\\modules')
for (const folder of buttonFolders) {
  const buttonFiles = fs.readdirSync(`.\\modules\\${folder}`)
    .filter((file) => file.endsWith('.js'))
  for (const file of buttonFiles) {
    const button = require(`.\\modules\\${folder}\\${file}`)
    client.buttons.set(button.name, button)
  }
}
const events = fs.readdirSync('.\\events')
  .filter((file) => file.endsWith('.js'))
for (const file of events) {
  const event = require(`./events/${file}`)
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args))
  } else {
    client.on(event.name, (...args) => event.execute(...args))
  }
}

client.login(process.env.SOFTundWET)
