const { MessageEmbed } = require('discord.js')
const { oneLineTrim } = require('common-tags')
const atom = require('..\\..\\functions')
const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'fite',
  alias: ['ora'],
  description: 'fights you',
  group: 'misc',

  execute (message, args, command) {
    const eEmbed = new MessageEmbed()
      .setColor(atom.color())
      .setThumbnail(
        oneLineTrim`
        https://c.tenor.com/yCKItdYY3sc  AAA  AC/star
        -platinum-jojos-bizarre-adventure.gif`
      )
    message.channel.send({ embeds: [eEmbed] })
  }
})
