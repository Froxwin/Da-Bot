require('dotenv').config()
const config = require('.\\base\\config')
const fs = require('fs')
const atom = require('./functions')
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
for (let n = 0; n < config.folders.length; n++) {
  const buttonFiles =
    fs.readdirSync(`.\\modules\\${config.buttonFolders[n]}`)
      .filter(file => file.endsWith('.js'))
  for (const file of buttonFiles) {
    const button = require(`.\\modules\\${config.buttonFolders[n]}\\${file}`)
    client.buttons.set(button.name, button)
  }
}

atom.ready(client)
atom.typingLogger(client)

client.on(
  'messageCreate',
  async (message) => {
    atom.logger(message)
    atom.stuff(message)
    if (message.content.toLowerCase().startsWith(config.prefix)) {
      const [command, ...args] = message.content.toLowerCase().trim()
        .substring(config.prefix.length).split(/\s+/)
      try {
        const exeCommand = client.commands.get(command) ||
          client.commands.find(tp => tp.alias && tp.alias.includes(command))
        exeCommand.execute(client, message, args, command)
      } catch (error) {
        console.error(error)
      }
    }
  }
)
client.on(
  'interactionCreate',
  async (button) => {
    if (!button.isButton()) return
    try {
      client.buttons.get(button.customId).execute(button)
    } catch (error) {
      console.error(error)
    }
  }
)
client.on(
  'error',
  async (error) => {
    console.error(error)
  }
)

client.login(process.env.SOFTundWET)
