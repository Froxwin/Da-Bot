const { MessageEmbed } = require('discord.js')
const atom = require('..\\..\\functions')

module.exports = {
  name: 'sus',
  alias: ['sus'],
  description: 'idek',

  execute (client, message, args, command) {
    if (!message.mentions.users.first()) {
      const eEmbed = new MessageEmbed()
        .setColor(atom.color())
        .setTitle('Failed')
        .setDescription('Mention a user')
      message.channel.send({ embeds: [eEmbed] })
    } else {
      const eEmbed = new MessageEmbed()
        .setColor(atom.color())
        .setTitle('SUS')
        .setDescription(
          `**${message.mentions.users.first()} IS KINDA SUS NGL**`
        )
      message.channel.send({ embeds: [eEmbed] })
    }
  }
}
