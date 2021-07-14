// #region Imports
require('dotenv').config()
const fs = require('fs')
const term = require('terminal-kit').terminal
const colors = require('./node_modules/colors/lib/index')
const { MessageEmbed, MessageAttachment, Client, Collection } = require('discord.js')
const { stripIndents, oneLine, oneLineTrim } = require('common-tags')
const prefix = '='
const randBlue = Math.floor(Math.random() * 255)
const randGreen = Math.floor(Math.random() * 255)
const randColor = '#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16)
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] })
client.commands = new Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  // eslint-disable-next-line no-var
  var command = require(`./commands/${file}`)
  client.commands.set(command.name, command)
}

// #region Login Ritual
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
// #endregion

// #region Triggers/Commands
client.on('messageCreate', async (message) => {
  // #region Logger
  if (message.channel.type === 'dm') {
    console.log(colors.bold(oneLine`
      [DM]:[${message.author.tag}]:
      ${colors.rainbow(message.content)}
      `))
  } else {
    if (message.attachments.array.length === 0) {
      console.log(colors.bold(oneLine`
      ${colors.blue(`[${message.guild.name}]`)}:${colors.yellow(`[${message.channel.name}]`)}:[${message.author.tag}]:
      ${colors.rainbow(message.content)}
      `))
    } else {
      console.log(colors.bold(oneLine`
      [${message.guild.name}]:[${message.channel.name}]:[${message.author.tag}]:
      ${colors.rainbow(message.content)}
      ${term.drawImage(message.attachments.first().url, { width: term.width, height: term.width * 4 })}
      `))
    }
  }
  // #endregion

  // #region Bot Triggers
  if (message.content.toLowerCase() === 'hello there') {
    message.channel.send('general kakyoin')
  }
  if (message.content.toLowerCase() === 'les go') {
    message.channel.send('Da bebe')
  }
  if (message.content.toLowerCase() === 'e') {
    const eEmbed = new MessageEmbed()
      .setColor(randColor)
      .setTitle('Ricked')
      .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      .setAuthor('god', oneLineTrim`https://static.wikia.nocookie.net/037f608a
                                    -cc92-43c6-ae3a-7f09d463b423`)
      .setDescription('Get ricked lmao')
      .setTimestamp()

    message.channel.send({ embeds: [eEmbed] })
  }
  if (message.content.toLowerCase() === 'sup') {
    message.channel.send(oneLineTrim`https://tenor.com/view/rick-astley-rick
                                    -roll-dancing-dance-moves-gif-14097983`)
  }
  if (message.content.toLowerCase().includes('gay') === true) {
    message.channel.send('no u')
  }
  if (message.content.toLowerCase().includes('pucci') === true) {
    message.channel.send('https://i.ytimg.com/vi/CMOA1e2_qF0/maxresdefault.jpg')
  }
  if (message.content.toLowerCase() === 'ay') {
    message.channel.send('<@384664284401106956>hOw aRe yOu')
  }
  if (message.content.toLowerCase() === 'attach test') {
    const attachment = new MessageAttachment('./images/test.png')
    message.channel.send(attachment)
  }
  if (message.content.toLowerCase() === 'burn') {
    message.delete()
    message.channel.send(' <:elmofire:743509390073528461>')
    message.channel.send('burn')
  }
  if (message.content.toLowerCase() === 'banana') {
    const attachment = new MessageAttachment('./images/ba.png')
    message.channel.send(attachment)
  }
  if (message.content.toLowerCase() === 'edgy') {
    const eEmbed = new MessageEmbed()
      .setColor(randColor)
      .setTitle('***EDGY***')
      .setDescription('**EDGY NGL**')
    message.channel.send({ embeds: [eEmbed] })
  }
  if (message.author.bot === true) {
    return
  }
  if (message.content.toLowerCase() === 'hello') {
    message.channel.send('hello')
  }

  // #endregion

  // #region Commands Walmart Version lmao
  if (message.content.startsWith(prefix)) {
    const [command, ...args] = message.content
      .trim()
      .substring(prefix.length)
      .split(/\s+/)

    try {
      client.commands.get(command).execute(client, message, args)
    } catch (error) {
      console.error(error)
      const eEmbed = new MessageEmbed().setColor(randColor).setTitle('Unknown Command').setDescription(`${command} is not a valid command`)
      message.channel.send({ embeds: [eEmbed] })
    }
    if (command === 'water') {
      message.channel.send('***__Please select a module__***')
      const groups = client.registry.groups
      const showAll = args.command && args.command.toLowerCase() === 'all'
      const messages = []
      const eEmbed = new MessageEmbed()
        .setColor(randColor)
        .setTitle('_**Commands**_')
        .setDescription(stripIndents`\n\n${groups.filter((grp) => grp.commands.some((cmd) => !cmd.hidden && (showAll || cmd.isUsable(message)))).map((grp) => stripIndents` \n ${grp.commands.filter((cmd) => !cmd.hidden && (showAll || cmd.isUsable(message))).map((cmd) => `**${cmd.name}:** ${cmd.description}${cmd.nsfw ? ' (NSFW)' : ''}`).join('\n')}`)}`)
      try {
        messages.push(message.channel.send({ embeds: [eEmbed] }))
        message.channel.send('__**To fetch a module type the command name exactly as it is within 10 seconds**__')
      } catch (err) {
        message.channel.send('broken lmao')
        console.log(err)
        message.channel.send(err.toString())
      }
      message.channel.awaitMessages(m => m.author.id === message.author.id,
        { max: 1, time: 10000 }).then(collected => {
        // eslint-disable-next-line no-unused-vars
        if (collected.array.length !== 0) {
          const eEmbed = new MessageEmbed()
            .setColor(randColor)
            .setDescription('No messages were recieved')
          message.channel.send({ embeds: [eEmbed] })
        } else {
          const [...arg] = collected.first().content
            .trim()
            .split(/\s+/)
          try {
            const file = (`${arg}.js`)
            const path = `./commands/coolStuff/${file}`
            const attachment = new MessageAttachment(`${path}`)
            if (!fs.existsSync(path)) {
              const eEmbed = new MessageEmbed()
                .setColor(randColor)
                .setDescription('An error occured make sure you typed the name correctly')
              message.channel.send({ embeds: [eEmbed] })
              return
            }

            message.channel.send(attachment)
          } catch (err) {
            message.channel.send('An error occured make sure you typed the name correctly')
            message.channel.send(`\n${err}`)
          }
        }
      })
    }
  };
  // #endregion
})
// #endregion

client.login(process.env.DISCORDJS_BOT_TOKEN)
