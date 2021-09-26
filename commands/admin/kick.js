const { MessageEmbed } = require('discord.js')

module.exports = {

  name: 'kick',
  group: 'cool stuff',
  memberName: 'kick',
  description: 'kicks the specified user',

  async execute (message, args, command) {
    // eslint-disable-next-line no-unused-vars

    const user = message.mentions.users.first()

    if (user) {
      const member = message.guild.members.fetch(user)
      if (message.member.roles.highest.position >= (await message.guild.members.fetch(user)).roles.highest) {
        const eEmbed = new MessageEmbed()
          .setColor('#ff1100')
          .setTitle('Kick Unsuccessfull')
          .setDescription(`**${message.author.tag}** you are not high enough in the hierchy to do that`)
          .setTimestamp()

        message.channel.send(eEmbed)
      } else {
        if (!(await member).permissions.has('KICK_MEMBERS')) {
          const eEmbed = new MessageEmbed()
            .setColor('#ff1100')
            .setTitle('Kick Unsuccessfull')
            .setDescription(`**${message.author.tag}** you dont have permission to use this command`)
            .setTimestamp()

          message.channel.send(eEmbed)
        } else {
          if (member) {
            (await member)
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
