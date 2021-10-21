const Command = require('../../Classes/command')
const ban = new Command({
  name: 'ban',
  alias: null,
  group: 'admin',
  description: 'bans the specified user',
  permissions: [require('discord.js').Permissions.FLAGS.BAN_MEMBERS],

  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {string} command
   */
  async execute (message, args, command) {
    const user = message.mentions.users.first()
    const member = await message.guild.members.fetch(user)
    const error = a => {
      message.channel.send({
        embeds: [{ title: 'Ban Unsuccessful', color: 0xFF0000, description: a }]
      })
    }
    !user
      ? error('You didn\'t mention a user to ban')
      : !args[1]
          ? error('You didn\'t provide a ban duration')
          : member.ban({
            reason: message.content.replace(`=ban ${args[0]} ${args[1]}`, ''),
            days: args[1] ? null : parseInt(args[2])
          }).then(() => {
            message.channel.send({
              embeds: [{
                title: 'Ban Successful',
                color: 0x00FF00,
                description:
                  `<@${message.author.id}> Successfully banned <@${user.id}>`
              }]
            })
          }).catch((err) => {
            error(`${err}`)
          })
  }
})

module.exports = ban
