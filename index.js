require('dotenv').config()
const { MessageEmbed, MessageAttachment } = require('discord.js')
const Commando = require('discord.js-commando')
const client = new Commando.Client({
  commandPrefix: '=',
  owner: ['627801784219336718', '384664284401106956']
})
const prefixx = '-'
const path = require('path')
const randColor = Math.floor(Math.random() * 16777215).toString(16)
const { oneLine, oneLineTrim } = require('common-tags')

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['moderation', 'Commands'],
    ['cool stuff', 'Commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    unknownCommand: false,
    help: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'))

client.on('ready', () => {
  console.log('The bot has logged in')
})

client.on('message', async (message) => {
  if (message.channel.type === 'dm') {
    console.log(oneLine`
      [DM]:
      [${message.author.tag}]:
      ${message.content}
      `)
  } else {
    console.log(oneLine`
      [${message.guild.name}]:
      [${message.channel.name}]:
      [${message.author.tag}]:
      ${message.content}
      `)
  }

  // Bot Triggers

  if (message.content.toLowerCase() === 'hello there') {
    message.channel.send('general kakyoin')
  };
  if (message.content.toLowerCase() === 'les go') {
    message.channel.send('Da bebe')
  };
  if (message.content.toLowerCase() === 'e') {
    const eEmbed = new MessageEmbed()
      .setColor(randColor)
      .setTitle('Ricked')
      .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      .setAuthor('god', oneLineTrim`https://static.wikia.nocookie.net/037f608a
                                    -cc92-43c6-ae3a-7f09d463b423`)
      .setDescription('Get ricked lmao')
      .setTimestamp()

    message.channel.send(eEmbed)
  };
  if (message.content.toLowerCase() === 'sup') {
    message.channel.send(oneLineTrim`https://tenor.com/view/rick-astley-rick
                                    -roll-dancing-dance-moves-gif-14097983`)
  };
  if (message.content.toLowerCase().includes('gay') === true) {
    message.channel.send('no u')
  };
  if (message.content.toLowerCase().includes('pucci') === true) {
    message.channel.send('https://i.ytimg.com/vi/CMOA1e2_qF0/maxresdefault.jpg')
  };
  if (message.content.toLowerCase() === 'ay') {
    message.channel.send('<@384664284401106956>hOw aRe yOu')
  };
  if (message.content.toLowerCase() === 'attach test') {
    const attachment = new MessageAttachment('./test.png')
    message.channel.send(attachment)
  };
  if (message.content.toLowerCase() === 'burn') {
    message.delete()
    message.channel.send(' <:elmofire:743509390073528461>')
    message.channel.send('burn')
  };
  if (message.content.toLowerCase() === 'banana') {
    const attachment = new MessageAttachment('./ba.png')
    message.channel.send(attachment)
  };
  if (message.author.bot === true) {
    return
  };
  if (message.content.toLowerCase() === 'hello') {
    message.channel.send('hello')
  };
  if (message.content.toLowerCase() === 'edgy') {
    const eEmbed = new MessageEmbed()
      .setColor(randColor)
      .setTitle('***EDGY***')
      .setDescription('**EDGY NGL**')
    message.channel.send(eEmbed)
  };
  if (message.content.toLowerCase() === 'smth') {
    message.channel.send('<@740932612096262214>hOw aRe yOu')
  }

  // Commands Walmart Version lmao

  if (message.content.startsWith(prefixx)) {
    // eslint-disable-next-line no-unused-vars
    const [cmd, ...args] = message.content
      .trim()
      .substring(prefixx.length)
      .split(/\s+/)

    if (cmd === 'brr') {
      message.delete()
      message.channel.send(' <a:brr:848564739285319700>')
    }
    if (cmd === 'pingbu') {
      message.delete()
      message.channel.send('<@!384664284401106956>')
    }
    if (cmd === 'summon') {
      message.delete()
      message.channel.send('<@!384664284401106956>')
      const attachment = new MessageAttachment('./summon.jpg')
      message.channel.send(attachment)
    }
    if (cmd === 'osu') {
      message.channel.send('https://osu.ppy.sh/home')
    }
  };
})

client.login(process.env.DISCORDJS_BOT_TOKEN)
