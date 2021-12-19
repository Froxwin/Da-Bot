const { color } = require('../../functions/index.js')
const Command = require('../../Classes/command')
const { MessageEmbed } = require('discord.js')
const avatar = new Command({
  name: 'avatar',
  alias: ['pfp'],
  description: null,
  group: 'util',
  permissions: null,
  /**
   * @param {import('discord.js').Message} message
   * @param {string | any[]} args
   * @param {string} command
   */
  execute (message, args, command) {
    const user =
      !args.length
        ? message.author
        : message.mentions.users.first()
    message.channel.send({
      embeds: [
        new MessageEmbed()
          // @ts-ignore
          .setColor(color())
          .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
          .setTitle(user.tag)
      ]
    })
  }
})

module.exports = avatar
