const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'delete-channel',
  alias: ['dc'],

  execute (message, args, command) {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) {
      const eEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('Delete Unsuccessfull')
        .setDescription(
          `${message.author} you dont have permission to use this command`
        )
        .setTimestamp()
      message.channel.send({ embeds: [eEmbed] })
    } else {
      message.channel.delete()
    }
  }
}
