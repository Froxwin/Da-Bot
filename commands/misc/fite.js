const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'fite',
  alias: ['ora'],
  description: 'fights you',

  execute (client, message, args) {
    const randRed = Math.floor(Math.random() * 255)
    const randBlue = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const randColor = ('#' + (randRed).toString(16) + (randGreen).toString(16) + (randBlue).toString(16))
    const eEmbed = new MessageEmbed()
      .setColor(randColor)
      .setThumbnail('https://c.tenor.com/yCKItdYY3scAAAAC/star-platinum-jojos-bizarre-adventure.gif')
    message.channel.send({ embeds: [eEmbed] })
  }
}
