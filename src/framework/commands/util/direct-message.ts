import { oneLine } from 'common-tags'
import { MessageEmbed } from 'discord.js'
import client = require('../../../engine/config/client')
import Command = require('../../../engine/classes/command')
const directMessage = new Command({
  name: 'direct-message',
  alias: ['dm'],
  description: 'sends a direct message to the mentioned user',
  permissions: null,
  group: 'util',
  execute (message: import('discord.js').Message, args: string[], command: string) {
    try {
      const user = message.mentions.users.first()
      const member = message.guild!.members.fetch(user!)
      if (user && member && !user.bot && args.length !== 1) {
        user.send(
          message.content.substring(
            client.prefix.length + 2 +
            command.length + user.toString().length,
            message.content.length
          )
        )
          .then(() => {
            const eEmbed = new MessageEmbed()
              .setColor(0x00FF00)
              .setTitle('DM sent successfully')
              .setDescription(`Successfully sent DM to <@${user.id}>`)
            message.channel.send({ embeds: [eEmbed] })
          })
          .catch(() => {
            const eEmbed = new MessageEmbed()
              .setColor(0xFF0000)
              .setTitle('DM Unsuccessful')
              .setDescription(
                oneLine`
                  ${message.author}
                  I cannot send a DM to that user they
                  probably have DMs closed or have blocked me`
              )
            message.channel.send({ embeds: [eEmbed] })
          })
      } else {
        const errDes =
          (!user)
            ? ('You didn\'t mention the user to DM')
            : (!member)
                ? ('That user isn\'t in this guild')
                : (user.bot)
                    ? ('I can not send a DM to a bot')
                    : (args.length <= 1)
                        ? ('I cannot send an empty DM')
                        : (null)
        const eEmbed = new MessageEmbed()
          .setColor(0xFF0000)
          .setTitle('DM Unsuccessful')
          .setDescription(`<@${message.author.id}> ${errDes}`)
        message.channel.send({ embeds: [eEmbed] })
      }
    } catch (err) {
      console.log(err)
    }
  }
})

export = directMessage
