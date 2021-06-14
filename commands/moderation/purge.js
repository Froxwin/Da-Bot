const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'purge',
      group: 'moderation',
      memberName: 'purge',
      description: 'deletes the amount if specified messages'
    })
  }

  run (message) {
    // eslint-disable-next-line no-unused-vars
    const [cmd, ...args] = message.content
      .trim()
      .split(/\s+/)

    const messageCount = args[0]
    const messageCountInt = parseInt(messageCount)
    const messageCountFinal = messageCountInt + 1

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      const eEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('Delete Unsuccessfull')
        .setDescription(`**${message.author.tag}** you dont have permission to use this command`)
        .setTimestamp()

      message.channel.send(eEmbed)
    } else {
      message.channel.bulkDelete(messageCountFinal)

      if (messageCountFinal > 1) {
        const eEmbed = new MessageEmbed()
          .setColor('#00ff04')
          .setTitle('Messages Deleted')
          .setDescription(`Deleted ${messageCount} messages`)
        message.channel.send(eEmbed)
      }
    }
  }
}
