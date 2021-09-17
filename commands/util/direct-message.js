const { oneLine } = require('common-tags')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'direct-message',
  alias: ['dm'],
  description: 'sends a dorect message to the mentioned user',

  execute (client, message, args) {
    try {
      const user = message.mentions.users.first()
      if (!user) {
        const eEmbed = new MessageEmbed()
          .setColor('#FF0000')
          .setTitle('DM Unsuccessfull')
          .setDescription(
          `<@${message.author.id}> You didn't mention the user to DM`
          )
        message.channel.send({ embeds: [eEmbed] })
      } else {
        const member = message.guild.members.fetch(user)
        if (!member) {
          const eEmbed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('DM Unsuccessfull')
            .setDescription(
            `<@${message.author.id}> That user isn't in this guild`
            )
          message.channel.send({ embeds: [eEmbed] })
        } else {
          if (message.mentions.users.first().bot === true) {
            const eEmbed = new MessageEmbed()
              .setColor('#FF0000')
              .setTitle('DM Unsuccessfull')
              .setDescription(
              `<@${message.author.id}> I can not send a DM to a bot`
              )
            message.channel.send({ embeds: [eEmbed] })
          } else {
            if (args.length === 1) {
              const eEmbed = new MessageEmbed()
                .setColor('#FF0000')
                .setTitle('DM sent Unsuccessfully')
                .setDescription(
                `<@${message.author.id}> I cannot send a empty DM`
                )
              message.channel.send({ embeds: [eEmbed] })
            } else {
              const text =
              args
                .slice(1, args.length)
                .toString()
                .trim()
                .replaceAll(',', ' ')
              user.send(text)
              const eEmbed = new MessageEmbed()
                .setColor('#00FF00')
                .setTitle('DM sent successfully')
                .setDescription(
                `Successfully sent DM to <@${user.id}>`
                )
              message.channel.send({ embeds: [eEmbed] })
            }
          }
        }
      }
    } catch (error) {
      console.log(error)
      const eEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('DM sent Unsuccessfully')
        .setDescription(
          oneLine`${message.author}
        I cannot send a DM to that user they probably have DMs
        closed or have blocked me`
        )
      message.channel.send({ embeds: [eEmbed] })
    }
  }
}
