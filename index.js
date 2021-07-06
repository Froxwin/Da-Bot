require('dotenv').config()
const { MessageEmbed, MessageAttachment } = require('discord.js')
const Commando = require('discord.js-commando')
const client = new Commando.Client({
  commandPrefix: '.',
  owner: ['627801784219336718', '384664284401106956']
})
const prefixx = '-'
const path = require('path')
const randBlue = Math.floor(Math.random() * 255)
const randGreen = Math.floor(Math.random() * 255)
const randColor = '#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16)
const { stripIndents, oneLine, oneLineTrim } = require('common-tags')
const os = require('os')
const fs = require('fs')

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['cool stuff', 'More-Commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    unknownCommand: false,
    help: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'))

client.on('ready', () => {
  if (client.readyAt.getHours() > 12) {
    console.log(oneLine`${oneLineTrim`@${client.user.tag} has logged in at 
                ${client.readyAt.getHours() - 12}:
                ${client.readyAt.getMinutes()}:
                ${client.readyAt.getSeconds()} pm`}`)
  } else {
    console.log(oneLine`${oneLineTrim`@${client.user.tag} has logged in at 
                ${client.readyAt.getHours()}:
                ${client.readyAt.getMinutes()}:
                ${client.readyAt.getSeconds()}: am`}`)
  }
})

client.on('off', () => {
  console.log(`${client.user.tag} has disconnected`)
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
  if (message.content === 'm') {
    console.log(os.cpus())
    console.log(os.hostname())
    console.log(os.platform())
    console.log(os.networkInterfaces())
    if (os.hostname() === 'Da-PC') {
      return
    } else {
      message.channel.send(`no ${os.hostname()}`)
    }
  }
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
    const attachment = new MessageAttachment('./images/test.png')
    message.channel.send(attachment)
  };
  if (message.content.toLowerCase() === 'burn') {
    message.delete()
    message.channel.send(' <:elmofire:743509390073528461>')
    message.channel.send('burn')
  };
  if (message.content.toLowerCase() === 'banana') {
    const attachment = new MessageAttachment('./images/ba.png')
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
      const attachment = new MessageAttachment('./images/summon.jpg')
      message.channel.send(attachment)
    }
    if (cmd === 'osu') {
      message.channel.send('https://osu.ppy.sh/home')
    }

    if (cmd === 'water') {
      message.channel.send('***__Please select a module__***')
      const groups = client.registry.groups
      const showAll = args.command && args.command.toLowerCase() === 'all'
      const messages = []
      const eEmbed = new MessageEmbed()
        .setColor(randColor)
        .setTitle('_**Commands**_')
        .setDescription(stripIndents`\n\n${groups.filter((grp) => grp.commands.some((cmd) => !cmd.hidden && (showAll || cmd.isUsable(message)))).map((grp) => stripIndents` \n ${grp.commands.filter((cmd) => !cmd.hidden && (showAll || cmd.isUsable(message))).map((cmd) => `**${cmd.name}:** ${cmd.description}${cmd.nsfw ? ' (NSFW)' : ''}`).join('\n')}`)}`)
      try {
        messages.push(message.channel.send(eEmbed))
        message.channel.send('__**To fetch a module type the command name exactly as it is within 10 seconds**__')
      } catch (err) {
        message.channel.send('broken lmao')
        console.log(err)
        message.channel.send(err.toString())
      }
      message.channel.awaitMessages(m => m.author.id === message.author.id,
        { max: 1, time: 10000 }).then(collected => {
        // eslint-disable-next-line no-unused-vars
        if (collected.array.length === 0) {
          const eEmbed = new MessageEmbed()
            .setColor(randColor)
            .setDescription('No messages were recieved')
          message.channel.send(eEmbed)
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
              message.channel.send(eEmbed)
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
})

// Cool Error Fetcher/Debugger
// Yeh I made it
/*
messages.push(await message.channel.send('nah man its broken'))
console.log(err)
message.channel.send(err.toString())
*/

client.login(process.env.DISCORDJS_BOT_TOKEN)
