require('dotenv').config()
const fs = require('fs')
const colors = require('colors')
const stuff = require('.\\exports\\stuff')
const boundRandColor = require('.\\exports\\boundRandColor')
const
  {
    oneLine,
    oneLineTrim
  } = require('common-tags')
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

client.on('ready', () => {
  if (client.readyAt.getHours() > 12) {
    console.log(colors.bold.cyan(oneLine`
                ${oneLineTrim`@${client.user.tag} has logged in at 
                ${client.readyAt.getHours() - 12}:
                ${client.readyAt.getMinutes()}:
                ${client.readyAt.getSeconds()} pm`}`))
  } else {
    console.log(colors.bold.blue(oneLine`
                ${oneLineTrim`@${client.user.tag} has logged in at 
                ${client.readyAt.getHours()}:
                ${client.readyAt.getMinutes()}:
                ${client.readyAt.getSeconds()}: am`}`))
  }
})

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
  if (message.channel.type === 'DM') {
    console.log(colors.bold(oneLine`
      [DM]:[${message.author.tag}]:
      ${colors.rainbow(message.content)}
      `))
  } else {
    console.log(colors.bold(oneLine`
      ${colors.blue(`[${message.guild.name}]`)}:
      ${colors.yellow(`[${message.channel.name}]`)}:[${message.author.tag}]:
      ${colors.rainbow(message.content)}
      `))
  }
  stuff.execute(message)
  if (message.author.bot === true) {
    return
  }
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

client.login(process.env.DISCORDJS_BOT_TOKEN)
