require('dotenv').config()
const fs = require('fs')
const stuff = require('.\\functions\\stuff')
const logger = require('.\\functions\\logger')
const loginRitual = require('.\\functions\\ready')
const boundRandColor = require('.\\functions\\boundRandColor')
const oneLine = require('common-tags')
const
  {
    MessageEmbed,
    Client,
    Collection
  } = require('discord.js')

const prefix = '='
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] })

client.commands = new Collection()
const folders = ['admin', 'misc', 'test', 'util']
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

client.buttons = new Collection()
const buttonFolders = ['admin', 'misc', 'test', 'util']
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

loginRitual.execute(client)

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
  logger.execute(message)
  stuff.execute(message)
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
        .setColor(boundRandColor.misc())
        .setTitle('Unknown Command')
        .setDescription(oneLine`**${command}** is not a valid command or needs 
                                                                  maintanence`)
      message.channel.send({ embeds: [eEmbed] })
    }
  };
})

client.login(process.env.SOFTundWET)
