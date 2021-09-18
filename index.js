require('dotenv').config()
const prefix = '='
const fs = require('fs')
const atom = require('./functions')
const core = require('.\\events')
const { Client, Collection } = require('discord.js')
const folders = ['admin', 'misc', 'test', 'util']
const buttonFolders = ['admin', 'misc', 'test', 'util']

exports.prefix = prefix
exports.folders = folders

const client = new Client(
  {
    intents:
    [
      'GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_TYPING',
      'DIRECT_MESSAGES', 'DIRECT_MESSAGE_TYPING', 'DIRECT_MESSAGE_REACTIONS'
    ],

    partials:
    [
      'MESSAGE', 'CHANNEL', 'REACTION', 'REACTION', 'USER', 'GUILD_MEMBER'
    ]
  }
)

client.commands = new Collection()
client.buttons = new Collection()

for (let i = 0; i < folders.length; i++) {
  const commandFiles =
    fs.readdirSync(`.\\commands\\${folders[i]}`)
      .filter(file => file.endsWith('.js'))

  for (const file of commandFiles) {
    const command = require(`.\\commands\\${folders[i]}\\${file}`)
    client.commands.set(command.name, command)
  }
}

for (let n = 0; n < folders.length; n++) {
  const buttonFiles =
    fs.readdirSync(`.\\modules\\${buttonFolders[n]}`)
      .filter(file => file.endsWith('.js'))

  for (const file of buttonFiles) {
    const button = require(`.\\modules\\${buttonFolders[n]}\\${file}`)
    client.buttons.set(button.name, button)
  }
}

atom.ready(client)
atom.typingLogger(client)
core.messageListener(client, prefix)
core.interactionListener(client)
core.messageDeleteListener(client)
client.login(process.env.SOFTundWET)
