const { MessageEmbed } = require('discord.js')
const { oneLineTrim } = require('common-tags')
const atom = require('..\\..\\functions')

module.exports = {
  name: 'fite',
  alias: ['ora'],
  description: 'fights you',

  execute (client, message, args, command) {
    const eEmbed = new MessageEmbed()
      .setColor(atom.color())
      .setThumbnail(
        oneLineTrim`https://c.tenor.com/yCKItdYY3scAAAAC/star
                    -platinum-jojos-bizarre-adventure.gif`
      )
    message.channel.send({ embeds: [eEmbed] })
  }
}
