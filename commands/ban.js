const { MessageEmbed } = require('discord.js')
const { oneLine } = require('common-tags')

module.exports = {

  name: 'ban',
  group: 'cool stuff',
  memberName: 'ban',
  description: 'Bans the specified user',

  async execute (client, message, args) {
    const user = message.mentions.users.first()

    if (user) {
      const member = message.guild.members.fetch(user)
      if (message.member.roles.highest.position >= (await message.guild.members.fetch(user)).roles.highest) {
        const eEmbed = new MessageEmbed()
          .setColor('#ff1100')
          .setTitle('Ban Unsuccessfull')
          .setDescription(`**${message.author.tag}** ${oneLine`you are not high
                                                      enough in the hierchy to
                                                      do that`}`)
          .setTimestamp()

        message.channel.send(eEmbed)
      } else {
        if ((await member).permissions.has('BAN_MEMBERS')) {
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
