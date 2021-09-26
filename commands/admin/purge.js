const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'purge',
  description: 'deletes the amount if specified messages',
  execute (message, args, command) {
    const messageCountFinal = parseInt(args[0]) + 1

    if (!message.member.permissions.has('MANAGE_CHANNELS')) {
      const eEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Delete Unsuccessfull')
        .setDescription(
          `${message.author} you dont have permission to use this command`)
        .setTimestamp()
      message.channel.send({ embeds: [eEmbed] })
    } else {
      if (args[0] <= 0) {
        const eEmbed = new MessageEmbed()
          .setColor('#FF0000')
          .setTitle('Delete Unsuccessfull')
          .setDescription(
          `${message.author} I can not delete ${args[0]} messages`
          )
          .setTimestamp()
        message.channel.send({ embeds: [eEmbed] })
      } else {
        message.channel.bulkDelete(messageCountFinal)
        const eEmbed = new MessageEmbed()
          .setColor('#00FF00')
          .setTitle('Messages Deleted')
          .setDescription(`Deleted ${args[0]} messages`)
        message.channel.send({ embeds: [eEmbed] })
      }
    }
  }
}
