const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'avatar',
      group: 'cool stuff',
      memberName: 'avatar',
      description: "displays the mentioned users avatar, if no argumants are provided displays the message author's avatar"
    })
  }

  run (message) {
    // eslint-disable-next-line no-unused-vars
    const [cmd, ...args] = message.content
      .trim()
      .split(/\s+/)
    const randBlue = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const color = '#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16)

    if (args.length === 0) {
      const embed = new MessageEmbed()
        .setColor(color)
        .setImage(message.author.displayAvatarURL())
        .setTitle(`${message.author.tag}`)
        .setTimestamp()
      message.channel.send(embed)
    }
    if (args.length !== 0) {
      const embed = new MessageEmbed()
        .setColor(color)
        .setImage(message.mentions.users.first().displayAvatarURL())
        .setTitle(`${message.first().tag}`)
        .setTimestamp()
      message.channel.send(embed)
    }
  }
}
