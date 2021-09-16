const { oneLineTrim, oneLine } = require('common-tags')
const { MessageAttachment, MessageEmbed } = require('discord.js')
const randColor = require('.\\color')

module.exports = {
  name: 'stuff',
  description: 'stuff',
  execute (message) {
    if (message.content.toLowerCase() === 'hello there') {
      message.channel.send('general kakyoin')
    }
    if (message.content.toLowerCase() === 'e') {
      const eEmbed = new MessageEmbed()
        .setColor(randColor.execute())
        .setTitle('Ricked')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setAuthor('god', oneLine`https://static.wikia.nocookie.net/037f608a
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
        .setColor(randColor.execute())
        .setTitle('***EDGY***')
        .setDescription('**EDGY NGL**')
      message.channel.send({ embeds: [eEmbed] })
    }
  }
}
