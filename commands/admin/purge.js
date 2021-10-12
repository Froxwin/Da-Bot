const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')
const Command = require('../../Classes/command')

const purge = new Command({
  name: 'purge',
  alias: null,
  group: 'admin',
  description: 'deletes the amount if specified messages',
  permissions: [Permissions.FLAGS.MANAGE_MESSAGES],

  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {Command} command
   */
  execute (message, args, command) {
    const messageCountFinal = parseInt(args[0]) + 1
    if (message.channel.type === 'DM') return
    if (!message.member.permissions.has('MANAGE_CHANNELS')) {
      const eEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Delete Unsuccessful')
        .setDescription(
          `${message.author} you dont have permission to use this command`)
        .setTimestamp()
      message.channel.send({ embeds: [eEmbed] })
    } else {
      if (parseInt(args[0]) <= 0) {
        const eEmbed = new MessageEmbed()
          .setColor('#FF0000')
          .setTitle('Delete Unsuccessful')
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
})

module.exports = purge
