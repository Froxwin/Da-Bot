require('dotenv').config()
const fs = require('fs')
const colors = require('colors')
const
  {
    oneLine,
    oneLineTrim
  } = require('common-tags')
const
  {
    MessageEmbed,
    MessageAttachment,
    Client,
    Collection
  } = require('discord.js')

const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] })
const prefix = 'θ'

const randBlue = Math.floor(Math.random() * 255)
const randGreen = Math.floor(Math.random() * 255)
const randColor =
  ('#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16))

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
    const eEmbed = new MessageEmbed()
      .setColor(randColor.toUpperCase())
      .setTitle(randColor.toUpperCase())

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
  if (message.content.toLowerCase() === 'edgy') {
    const eEmbed = new MessageEmbed()
      .setColor(randColor)
      .setTitle('***EDGY***')
      .setDescription('**EDGY NGL**')
    message.channel.send({ embeds: [eEmbed] })
  }
  /*
  if (message.author.bot === true) {
    return
  }
  */

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
        .setColor('#196C7F')
        .setTitle('Unknown Command')
        .setThumbnail(oneLine`https://static.wikia.nocookie.net/b4c5f56a-e655-4d
                                09-af0a-7ab2f3fdb9a0/scale-to-width/370`)
        .setDescription(oneLine`${command} is not a valid command 
                                            or needs maintanence`)

      message.channel.send({ embeds: [eEmbed] })
    }
  };
})

client.login(process.env.DISCORDJS_BOT_TOKEN)
