require('dotenv').config()
const prefix = '='
const fs = require('fs')
const atom = require('.\\functions')
const { oneLine } = require('common-tags')
const { MessageEmbed, Client, Collection } = require('discord.js')
const folders = ['admin', 'misc', 'test', 'util']
const buttonFolders = ['admin', 'misc', 'test', 'util']
const client = new Client(
  {
    intents:
      [
        'GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_TYPING',
        'DIRECT_MESSAGES', 'DIRECT_MESSAGE_TYPING', 'DIRECT_MESSAGE_REACTIONS'
      ],
    partials:
      [
        'MESSAGE', 'CHANNEL', 'REACTION'
      ]
  })

client.commands = new Collection()
client.buttons = new Collection()

for (let i = 0; i < folders.length; i++) {
  const commandFiles =
    fs
      .readdirSync(`.\\commands\\${folders[i]}`)
      .filter(file => file.endsWith('.js'))

  for (const file of commandFiles) {
    const command = require(`.\\commands\\${folders[i]}\\${file}`)
    client.commands.set(command.name, command)
  }
}

for (let n = 0; n < folders.length; n++) {
  const buttonFiles =
    fs
      .readdirSync(`.\\modules\\${buttonFolders[n]}`)
      .filter(file => file.endsWith('.js'))

  for (const file of buttonFiles) {
    const button = require(`.\\modules\\${buttonFolders[n]}\\${file}`)
    client.buttons.set(button.name, button)
  }
}

atom.ready.execute(client)
atom.typingLogger.execute(client)
client.on('interactionCreate', async (button) => {
  if (!button.isButton()) return
  try {
    const exeButton = client.buttons.get(button.customId)
    exeButton.execute(button)
  } catch (error) {
    console.error(error)
  }
})

client.on('messageCreate', async (message) => {
  atom.logger.execute(message)
  atom.stuff.execute(message)
  if (message.content.toLowerCase().startsWith(prefix)) {
    const [command, ...args] = message.content.toLowerCase().trim()
      .substring(prefix.length).split(/\s+/)

    try {
      const exeCommand = client.commands.get(command) ||
      client.commands.find(temp => temp.alias && temp.alias.includes(command))
      exeCommand.execute(client, message, args)
    } catch (error) {
      console.error(error)
      const eEmbed = new MessageEmbed()
        .setColor(atom.boundRandColor.misc())
        .setTitle('Unknown Command')
        .setDescription(oneLine`**${command}** is not a valid command or needs 
                                                                  maintanence`)
      message.channel.send({ embeds: [eEmbed] })
    }
  };
})

client.login(process.env.SOFTundWET)
