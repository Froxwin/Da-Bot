const { oneLineTrim } = require('common-tags')
const { MessageEmbed } = require('discord.js')
const randColor = require('./color')

module.exports =
  (message) => {
    if (message.content.toLowerCase() === 'hello there') {
      message.channel.send('general kakyoin')
    }
    if (message.content.toLowerCase() === 'e') {
      const eEmbed = new MessageEmbed()
        .setColor(randColor())
        .setTitle('Ricked')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setAuthor(
          'god',
          oneLineTrim`
            https://static.wikia.nocookie.net/0
            37f608a-cc92-43c6-ae3a-7f09d463b423`
        )
        .setDescription('Get ricked lmao')

      message.channel.send({ embeds: [eEmbed] })
    }
    if (message.content.toLowerCase() === 'sup') {
      message.channel.send(
        oneLineTrim`
        https://tenor.com/view/rick-astley-rick
        -roll-dancing-dance-moves-gif-14097983`
      )
    }
    if (message.content.toLowerCase().includes('gay') === true) {
      message.channel.send('no u')
    }
    if (message.content.toLowerCase() === 'ay') {
      message.channel.send('<@384664284401106956>hOw aRe yOu')
    }
    if (message.content.toLowerCase() === 'burn') {
      message.delete()
      message.channel.send(' <:elmofire:743509390073528461>')
    }
  }
