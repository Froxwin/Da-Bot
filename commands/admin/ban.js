const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')
const Command = require('../../Classes/command')

const ban = new Command({
  name: 'ban',
  alias: null,
  group: 'admin',
  description: 'bans the specified user',
  permissions: [Permissions.FLAGS.BAN_MEMBERS],

  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {string} command
   */
  async execute (message, args, command) {
    try {
      const user = message.mentions.users.first()
      const member = await message.guild.members.fetch(user)
      const authorRank = message.member.roles.highest.position
      if (
        user && member && ban.permCheck(message.member) &&
        !(authorRank <= member.roles.highest.position)
      ) {
        member
          .ban({
            reason:
            args[2].length === 0
              ? message.content.substring(
                message.client.prefix.length + 2 +
                command.length + user.toString().length,
                message.content.length
              )
              : message.content.substring(
                message.client.prefix.length + 2 +
                command.length + user.toString().length +
                args[2].length,
                message.content.length
              ),
            days: args[2].length === 0 ? null : parseInt(args[2])
          })
          .then(() => {
            const eEmbed = new MessageEmbed()
              .setColor(0x00FF00)
              .setTitle('Ban Successful')
              .setDescription(
                `<@${message.author.id}> Successfully banned <@${user.id}>`
              )
              .setTimestamp()
            message.channel.send({ embeds: [eEmbed] })
          })
          .catch((err) => {
            const eEmbed = new MessageEmbed()
              .setColor(0xFF0000)
              .setTitle('Ban Unsuccessful')
              .setDescription(
                `<@${message.author.id}> I was unable to ban ${user.tag}`
              )
              .setTimestamp()
            message.channel.send({ embeds: [eEmbed] })
            console.error(err)
          })
      } else {
        const errDes =
          (!user)
            ? ('You didn\'t mention the user to ban')
            : (!member)
                ? ('That user isn\'t in this guild')
                : (ban.permCheck(message.member))
                    ? ('You do not have permissions to use this command')
                    : (authorRank <= member.roles.highest.position)
                        ? ('you are not high enough in the hierarchy to do that')
                        : (null)
        const eEmbed = new MessageEmbed()
          .setColor(0xFF0000)
          .setTitle('Ban Unsuccessful')
          .setDescription(`<@${message.author.id}> ${errDes}`)
        message.channel.send({ embeds: [eEmbed] })
      }
    } catch (error) {
      console.log(error)
    }
  }
})

module.exports = ban
