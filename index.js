require('dotenv').config()
const config = require('./config/config')
const fs = require('fs')
const client = config.client

for (let i = 0; i < config.folders.length; i++) {
  const commandFiles =
    fs.readdirSync(`.\\commands\\${config.folders[i]}`)
      .filter(file => file.endsWith('.js'))
  for (const file of commandFiles) {
    const command = require(`.\\commands\\${config.folders[i]}\\${file}`)
    client.commands.set(command.name, command)
  }
}
for (let n = 0; n < config.buttonFolders.length; n++) {
  const buttonFiles =
    fs.readdirSync(`.\\modules\\${config.buttonFolders[n]}`)
      .filter(file => file.endsWith('.js'))
  for (const file of buttonFiles) {
    const button = require(`.\\modules\\${config.buttonFolders[n]}\\${file}`)
    client.buttons.set(button.name, button)
  }
}
const events =
  fs.readdirSync('.\\events').filter(file => file.endsWith('.js'))
for (const file of events) {
  const event = require(`./events/${file}`)
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args))
  } else {
    client.on(event.name, (...args) => event.execute(...args))
  }
}

client.login(process.env.SOFTundWET)
