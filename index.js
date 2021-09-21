require('dotenv').config()
const prefix = '='
const fs = require('fs')
const atom = require('./functions')
const { MessageEmbed } = require('discord.js')
const { Client, Collection } = require('discord.js')
const folders = ['admin', 'misc', 'test', 'util']
const buttonFolders = ['admin', 'misc', 'test', 'util']

exports.prefix = prefix
exports.folders = folders

const client = new Client(
  {
    intents:
    [
      'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING',
      'DIRECT_MESSAGES', 'GUILD_MESSAGE_TYPING', 'GUILDS',
      'GUILD_MESSAGES'
    ],
    partials:
    [
      'MESSAGE', 'CHANNEL', 'REACTION', 'REACTION', 'USER',
      'GUILD_MEMBER'
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

client.on('messageCreate',
  async (message) => {
    atom.logger(message)
    atom.stuff(message)

    if (message.content.toLowerCase().startsWith(prefix)) {
      const [command, ...args] =
                  message.content
                    .toLowerCase().trim().substring(prefix.length).split(/\s+/)

      try {
        const exeCommand =
              client.commands.get(command) ||
              client.commands.find(
                temp => temp.alias && temp.alias.includes(command)
              )
        exeCommand.execute(client, message, args, command)
      } catch (error) {
        console.error(error)
        const eEmbed = new MessageEmbed()
          .setColor(atom.boundRandColor())
          .setTitle('Unknown Command')
          .setDescription(
            `**${command}** is not a valid command or needs maintanence`
          )
        message.channel.send({ embeds: [eEmbed] })
      }
    }
  }
)

client.on('interactionCreate',
  async (button) => {
    if (!button.isButton()) return
    try {
      client.buttons.get(button.customId).execute(button)
    } catch (error) {
      console.error(error)
    }
  }
)

client.login(process.env.SOFTundWET)
