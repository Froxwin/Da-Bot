const Command = require('../../../engine/classes/command')
const purge = new Command({
  name: 'purge',
  alias: null,
  group: 'admin',
  description: 'Deletes the amount if specified messages',
  permissions: [require('discord.js').Permissions.FLAGS.MANAGE_MESSAGES],

  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {Command} command
   */
  execute (message, args, _command) {
    if (message.channel.type === 'DM') return
    if (!args[0]) return
    parseInt(args[0]) <= 0 || parseInt(args[0]) >= 100
      ? message.channel.send({
        embeds: [{
          color: 0xFF0000,
          title: 'Delete Unsuccessful',
          description:
              `${message.author} I can not delete ${args[0]} messages`
        }]
      })
      : message.channel.bulkDelete(parseInt(args[0]) + 1).then((_v) => {
        message.channel.send({
          embeds: [{
            color: 0x00FF00,
            title: 'Messages Deleted',
            description: `Deleted ${args[0]} messages`
          }]
        })
      }).catch((err) => {
        message.channel.send({
          embeds: [{
            color: 0xFF0000,
            title: 'Delete Unsuccessful',
            description: `${err}`
          }]
        })
      })
  }
})

module.exports = purge
