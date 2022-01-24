const { color } = require('../../../engine/functions/index.js')
const Command = require('../../../engine/classes/command')
const { MessageEmbed } = require('discord.js')

const avatar = new Command({
  name: 'avatar',
  alias: ['pfp'],
  description: 'Sends the user avatar',
  group: 'util',
  permissions: null,
  /**
   * @param {import('discord.js').Message} message
   * @param {string | any[]} args
   * @param {string} command
   */
  execute (message, args, _command) {
    const user =
      !args.length
        ? message.author
        : message.mentions.users.first()
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setColor(`#${color()}`)
          .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
          .setTitle(user.tag)
      ]
    })
  }
})

module.exports = avatar
