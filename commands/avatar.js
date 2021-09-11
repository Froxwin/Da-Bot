const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'avatar',

  execute (client, message, args) {
    const randBlue = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const color = '#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16)

    if (args.length === 0) {
      const eEmbed = new MessageEmbed()
        .setColor(color)
        .setImage(message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        .setTitle(`${message.author.tag}`)
        .setTimestamp()
      message.channel.send({ embeds: [eEmbed] })
    }
    if (args.length !== 0) {
      const eEmbed = new MessageEmbed()
        .setColor(color)
        .setImage(message.mentions.users.first().displayAvatarURL({ size: 1024, dynamic: true }))
        .setTitle(`${message.mentions.users.first().tag}`)
        .setTimestamp()
      message.channel.send({ embeds: [eEmbed] })
    }
  }
}
