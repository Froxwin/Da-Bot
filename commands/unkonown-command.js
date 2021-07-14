const { MessageEmbed } = require('discord.js')

module.exports = {

  name: 'unknown-command',
  group: 'util',
  memberName: 'unknown-command',
  description: 'Displays help information for when an unknown command is used.',
  examples: ['unknown-command kickeverybodyever'],
  unknown: true,
  hidden: true,

  execute (message) {
    const eEmbed = new MessageEmbed()
      .setColor('#ff1100')
      .setTitle('Unknown Command')
      .setDescription(`**${message.author.tag}** Unknown command. Use ${message.anyUsage('help', message.guild ? undefined : null, message.guild ? undefined : null)} to view the command list.`)
      .setTimestamp()
    return message.channel.send(
      eEmbed
    )
  }
}
