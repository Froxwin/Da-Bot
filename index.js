require('dotenv').config()
const fs = require('fs')
const colors = require('colors')
const { oneLine, oneLineTrim } = require('common-tags')
const {
  MessageEmbed, MessageAttachment,
  Client, Collection
} = require('discord.js')
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] })
const prefix = '='
const randBlue = Math.floor(Math.random() * 255)
const randGreen = Math.floor(Math.random() * 255)
const randColor =
('#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16))
// require('ur mom');

client.commands = new Collection()
const commandFiles =
fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command)
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

client.on('interactionCreate', button => {
  if (!button.isButton()) return
  if (button.customId === 'color') {
    const randRedd = Math.floor(Math.random() * 255)
    const randBluee = Math.floor(Math.random() * 255)
    const randGreenn = Math.floor(Math.random() * 255)
    const randColorr = ('#' + (randRedd).toString(16) +
                              (randGreenn).toString(16) +
                              (randBluee).toString(16))
    const eEmbed = new MessageEmbed()
      .setColor(randColorr.toUpperCase())
      .setTitle(randColorr.toUpperCase())

    button.update({ embeds: [eEmbed] })
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
    message.channel.send('.hello')
  }

  if (message.content.startsWith(prefix)) {
    const [command, ...args] = message.content
      .trim()
      .substring(prefix.length)
      .split(/\s+/)

    try {
      client.commands.get(command).execute(client, message, args)
    } catch (error) {
      console.error(error)
      const eEmbed = new MessageEmbed().setColor(randColor)
        .setTitle('Unknown Command')
        .setDescription(`${command} is not a valid command`)
      message.channel.send({ embeds: [eEmbed] })
    }
  };
})

client.login(process.env.DISCORDJS_BOT_TOKEN)
