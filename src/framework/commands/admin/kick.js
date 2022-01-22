const Command = require('../../../engine/classes/command')
const kick = new Command({
  name: 'kick',
  alias: null,
  group: 'admin',
  description: 'Kicks the specified user',
  permissions: [require('discord.js').Permissions.FLAGS.KICK_MEMBERS],

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
        embeds: [{ title: 'Kick Unsuccessful', color: 0xFF0000, description: a }]
      })
    }
    !user
      ? error('You didn\'t mention a user to kick')
      : member.kick(
        !args[1] ? '' : message.content.replace(`=kick ${args[0]} `, '')
      ).then(() => {
        message.channel.send({
          embeds: [{
            title: 'Kick Successful',
            color: 0x00FF00,
            description:
                  `<@${message.author.id}> Successfully kicked <@${user.id}>`
          }]
        })
      }).catch((err) => {
        error(`${err}`)
        console.error(err)
      })
  }
})

module.exports = kick
