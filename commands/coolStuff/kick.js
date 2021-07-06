const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'kick',
      group: 'cool stuff',
      memberName: 'kick',
      description: 'kicks the specified user'
    })
  }

  run (message) {
    // eslint-disable-next-line no-unused-vars
    const [cmd, ...args] = message.content
      .trim()
      .split(/\s+/)
    const user = message.mentions.users.first()

    if (user) {
      const member = message.guild.member(user)
      if (member.roles.highest.position >= message.member.roles.highest.position) {
        const eEmbed = new MessageEmbed()
          .setColor('#ff1100')
          .setTitle('Kick Unsuccessfull')
          .setDescription(`**${message.author.tag}** you are not high enough in the hierchy to do that`)
          .setTimestamp()

        message.channel.send(eEmbed)
      } else {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
          const eEmbed = new MessageEmbed()
            .setColor('#ff1100')
            .setTitle('Kick Unsuccessfull')
            .setDescription(`**${message.author.tag}** you dont have permission to use this command`)
            .setTimestamp()

          message.channel.send(eEmbed)
        } else {
          if (member) {
            member
              .kick({ reason: args[1] })
              .then(() => {
                const eEmbed = new MessageEmbed()
                  .setColor('#00ff04')
                  .setTitle('Kick Successful')
                  .setDescription(`Successfully kicked **${user.tag}**`)
                  .setTimestamp()

                message.channel.send(eEmbed)
              })
              .catch(err => {
                const eEmbed = new MessageEmbed()
                  .setColor('#ff1100')
                  .setTitle('Kick Unsuccessfull')
                  .setDescription(`**${message.author.tag}** I was unable to kick ${user.tag} `)
                  .setTimestamp()

                message.channel.send(eEmbed)
                console.error(err)
              })
          } else {
            const eEmbed = new MessageEmbed()
              .setColor('#ff1100')
              .setTitle('Kick Unsuccessfull')
              .setDescription(`**${message.author.tag}** That user isn't in this server `)
              .setTimestamp()

            message.channel.send(eEmbed)
          }
        }
      }
    } else {
      const eEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('Kick Unsuccessfull')
        .setDescription(`**${message.author.tag}** You didn't mention the user to kick `)
        .setTimestamp()

      message.channel.send(eEmbed)
    }
  }
}
