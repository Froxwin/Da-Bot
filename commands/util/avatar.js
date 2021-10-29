const { color } = require('../../functions/index.js')
const Command = require('../../Classes/command')
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
      embeds: [{
        color: (color()),
        // @ts-ignore
        image: user.displayAvatarURL({ size: 4096, dynamic: true }),
        title: (user.tag)
      }]
    })
  }
})

module.exports = avatar
