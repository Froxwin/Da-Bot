const { MessageEmbed } = require('discord.js')
// const { oneLine } = require('common-tags')
const { Permissions } = require('discord.js')
const Command = require('../../Classes/command')
// const contentFetcher = require('../../functions/contentFetcher')

const ban = new Command({
  name: 'ban',
  alias: null,
  group: 'admin',
  description: 'bans the specified user',
  permissions: [Permissions.FLAGS.BAN_MEMBERS],

  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {Command} command
   */
  async execute (message, args, command) {
    try {
      const user = message.mentions.users.first()
      const member = await message.guild.members.fetch(user)
      if
      (user && member && member.permissions.has('BAN_MEMBERS') &&
        !(message.member.roles.highest.position <= member.roles.highest.position)
      ) {
        member
          .ban(
            {
              reason:
                message.content
                  .substring(
                    (args[0].length + args[1].length), message.content.length
                  )
            })
          .then(() => {
            const eEmbed = new MessageEmbed()
              .setColor(0x00FF00)
              .setTitle('Ban Successfull')
              .setDescription(
                `<@${message.author.id}> Successfully banned <@${user.id}>`
              )
              .setTimestamp()

            message.channel.send({ embeds: [eEmbed] })
          })
          .catch((err) => {
            const eEmbed = new MessageEmbed()
              .setColor(0xFF0000)
              .setTitle('Ban Unsuccessfull')
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
            ? ('You didn\'t mention the user to DM')
            : (!member)
                ? ('That user isn\'t in this guild')
                : (ban.missingPerms(message))
                    ? ('You do not have permissions to use this command')
                    : (
                        (message.member.roles.highest.position <=
                        member.roles.highest.position)
                      )
                        ? ('you are not high enough in the hierarchy to do that')
                        : (null)
        const eEmbed = new MessageEmbed()
          .setColor(0xFF0000)
          .setTitle('Ban Unsuccessfull')
          .setDescription(`<@${message.author.id}> ${errDes}`)
        message.channel.send({ embeds: [eEmbed] })
      }
    } catch (error) {
      console.log(error)
    }
  }
})

module.exports = ban
