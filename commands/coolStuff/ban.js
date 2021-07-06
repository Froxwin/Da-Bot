const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')
const { oneLine } = require('common-tags')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'ban',
      group: 'cool stuff',
      memberName: 'ban',
      description: 'Bans the specified user'
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
          .setTitle('Ban Unsuccessfull')
          .setDescription(`**${message.author.tag}** ${oneLine`you are not high
                                                      enough in the hierchy to
                                                      do that`}`)
          .setTimestamp()

        message.channel.send(eEmbed)
      } else {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
          const eEmbed = new MessageEmbed()
            .setColor('#ff1100')
            .setTitle('Ban Unsuccessfull')
            .setDescription(`**${message.author.tag}** ${oneLine`you dont have 
                                                        permission to use this 
                                                        command`}`)
            .setTimestamp()

          message.channel.send(eEmbed)
        } else {
          if (member) {
            member
              .ban({ reason: args[1] })
              .then(() => {
                const eEmbed = new MessageEmbed()
                  .setColor('#00ff04')
                  .setTitle('Ban Successfull')
                  .setDescription(oneLine`**${message.author.tag}**
                                          Successfully banned ${user.tag} `)
                  .setTimestamp()

                message.channel.send(eEmbed)
              })
              .catch(err => {
                const eEmbed = new MessageEmbed()
                  .setColor('#ff1100')
                  .setTitle('Ban Unsuccessfull')
                  .setDescription(oneLine`**${message.author.tag}**
                                          I was unable to ban ${user.tag} `)
                  .setTimestamp()

                message.channel.send(eEmbed)
                console.error(err)
              })
          } else {
            const eEmbed = new MessageEmbed()
              .setColor('#ff1100')
              .setTitle('Ban Unsuccessfull')
              .setDescription(oneLine`**${message.author.tag}** 
                                      That user isn't in this guild! `)
              .setTimestamp()

            message.channel.send(eEmbed)
          }
        }
      }
    } else {
      const eEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('Ban Unsuccessfull')
        .setDescription(oneLine`**${message.author.tag}**
                                You didn't mention the user to ban! `)
        .setTimestamp()

      message.channel.send(eEmbed)
    }
  }
}
