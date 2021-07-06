const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')
const { oneLine } = require('common-tags')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'delete-channel',
      group: 'cool stuff',
      memberName: 'delete-channel',
      description: 'Deletes the channel in which the command is called'
    })
  }

  run (message) {
    // eslint-disable-next-line no-unused-vars
    const member = message.author
    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
      const eEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('Delete Unsuccessfull')
        .setDescription(oneLine`**${message.author.tag}** 
                                you dont have permission 
                                to use this command`)
        .setTimestamp()

      message.channel.send(eEmbed)
    } else {
      message.channel.delete()
    }
  }
}
