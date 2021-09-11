const { MessageEmbed } = require('discord.js')
const { oneLine } = require('common-tags')

module.exports = {
  name: 'delete-channel',

  execute (client, message, args) {
    const member = message.author
    if (!member.hasPermission('MANAGE_CHANNELS')) {
      const eEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('Delete Unsuccessfull')
        .setDescription(oneLine`**${message.author.tag}** you dont have 
                                permission to use this command`)
        .setTimestamp()

      message.channel.send({ embeds: [eEmbed] })
    } else {
      message.channel.delete()
    }
  }
}
