const { MessageEmbed } = require('discord.js')
const atom = require('..\\..\\functions')

module.exports = {
  name: 'avatar',
  alias: ['pfp'],

  execute (client, message, args, command) {
    if (args.length === 0) {
      const eEmbed = new MessageEmbed()
        .setColor(atom.color())
        .setImage(
          message.author
            .displayAvatarURL({ size: 1024, dynamic: true })
        )
        .setTitle(`${message.author.tag}`)
      message.channel.send({ embeds: [eEmbed] })
    } else {
      const eEmbed = new MessageEmbed()
        .setColor(atom.color())
        .setImage(
          message.mentions.users.first()
            .displayAvatarURL({ size: 1024, dynamic: true })
        )
        .setTitle(`${message.mentions.users.first().tag}`)
        .setTimestamp()
      message.channel.send({ embeds: [eEmbed] })
    }
  }
}
