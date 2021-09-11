const { MessageEmbed } = require('discord.js')

module.exports = {

  name: 'sus',
  group: 'cool stuff',
  memberName: 'sus',
  description: 'fights you',

  execute (client, message, args) {
    const randBlue = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const color = '#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16)
    const eEmbed = new MessageEmbed()
      .setColor(color)
      .setTitle('SUS')
      .setDescription(`**${message.mentions.users.first()} IS KINDA SUS NGL**`)
      .setTimestamp()

    message.channel.send(eEmbed)
  }
}
