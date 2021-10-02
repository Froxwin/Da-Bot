const { oneLine } = require('common-tags')
const { MessageEmbed } = require('discord.js')
const Command = require('../../Classes/command')
const contentFetcher = require('..\\..\\functions\\contentFetcher')

const directMessage = new Command({
  name: 'direct-message',
  alias: ['dm'],
  description: 'sends a drect message to the mentioned user',
  permissions: null,
  group: 'util',
  /**
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {string} command
   */
  execute (message, args, command) {
    try {
      const user = message.mentions.users.first()
      const member = message.guild.members.fetch(user)
      if (user && member && !user.bot && args.length !== 1) {
        const raw = contentFetcher(message, command)
        const processed = raw.substring(args[0].length + 1, raw.length)
        user.send(processed).then(() => {
          const eEmbed = new MessageEmbed()
            .setColor(0x00FF00)
            .setTitle('DM sent successfully')
            .setDescription(`Successfully sent DM to <@${user.id}>`)
          message.channel.send({ embeds: [eEmbed] })
        })
          .catch(() => {
            const eEmbed = new MessageEmbed()
              .setColor(0xFF0000)
              .setTitle('DM Unsuccessfull')
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
                    : (args.length === 1)
                        ? ('I cannot send a empty DM')
                        : (null)
        const eEmbed = new MessageEmbed()
          .setColor(0xFF0000)
          .setTitle('DM Unsuccessfull')
          .setDescription(`<@${message.author.id}> ${errDes}`)
        message.channel.send({ embeds: [eEmbed] })
      }
    } catch (err) {
      console.log(err)
    }
  }
})

module.exports = directMessage
