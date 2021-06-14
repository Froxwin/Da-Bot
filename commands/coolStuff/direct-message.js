const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'direct-message',
      aliases: ['direct-message', 'dm'],
      group: 'cool stuff',
      memberName: 'direct-message',
      description: 'sends a dorect message to the mentioned user'
    })
  }

  run (message) {
    // eslint-disable-next-line no-unused-vars
    const [cmd, ...args] = message.content
      .trim()
      .split(/\s+/)
    const messsaggge = args.slice(1, args.length)
    const send = messsaggge.toString()
    const s = send.trim().replaceAll(',', ' ')

    const user = message.mentions.users.first()
    if (user) {
      const member = message.guild.member(user)
      if (member) {
        if (message.mentions.users.first().bot === true) {
          const eEmbed = new MessageEmbed()
            .setColor('#ff1100')
            .setTitle('DM Unsuccessfull')
            .setDescription(`${message.author.tag} I can not send a DM to a bot`)
            .setTimestamp()
          message.channel.send(eEmbed)
        } else {
          if (s.length === 0) {
            const eEmbed = new MessageEmbed()
              .setColor('#ff1100')
              .setTitle('DM sent Unsuccessfully')
              .setDescription('I cannot send a empty DM')
              .setTimestamp()

            message.channel.send(eEmbed)
          } else {
            const messsagggee = args.slice(1, args.length)
            const sendd = messsagggee.toString()
            const ss = sendd.trim().replaceAll(',', ' ')
            user.send(ss)
            const eEmbed = new MessageEmbed()
              .setColor('#00ff04')
              .setTitle('DM sent successfully')
              .setDescription(`Successfully sent DM to ${user.tag}`)
              .setTimestamp()

            message.channel.send(eEmbed)
          }
        }
      } else {
        const eEmbed = new MessageEmbed()
          .setColor('#ff1100')
          .setTitle('Ban Unsuccessfull')
          .setDescription(`**${message.author.tag}** That user isn't in this guild! `)
          .setTimestamp()

        message.channel.send(eEmbed)
      }
    } else {
      const eEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('DM Unsuccessfull')
        .setDescription(`**${message.author.tag}** You didn't mention the user to DM! `)
        .setTimestamp()

      message.channel.send(eEmbed)
    }
  }
}
