const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'purge',
  description: 'deletes the amount if specified messages',
  execute (client, message, args) {
    const messageCount = args[0]
    const messageCountInt = parseInt(messageCount)
    const messageCountFinal = messageCountInt + 1

    if (!message.member.permissions.has('MANAGE_CHANNELS')) {
      const eEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('Delete Unsuccessfull')
        .setDescription(`**${message.author.tag}** you dont have permission to use this command`)
        .setTimestamp()

      message.channel.send({ embeds: [eEmbed] })
    } else {
      message.channel.bulkDelete(messageCountFinal)

      if (messageCountFinal > 1) {
        const eEmbed = new MessageEmbed()
          .setColor('#00ff04')
          .setTitle('Messages Deleted')
          .setDescription(`Deleted ${messageCount} messages`)
        message.channel.send({ embeds: [eEmbed] })
      }
    }
  }
}
