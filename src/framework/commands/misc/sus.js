const { color } = require('../../../engine/functions/index.js')
const Command = require('../../../engine/classes/command')

module.exports = new Command({
  name: 'sus',
  alias: ['sus'],
  description: 'idek',
  group: 'misc',
  permissions: null,

  /**
   * @param {import('discord.js').Message} message
   * @param {string | any[]} args
   * @param {string} command
   */
  execute (message, _args, _command) {
    !message.mentions.users.first()
      ? message.channel.send({
        embeds: [{
          color: `#${color()}`,
          title: 'Failed',
          description: 'Mention a user'
        }]
      })
      : message.channel.send({
        embeds: [{
          color: `#${color()}`,
          title: 'SUS',
          description: `**${message.mentions.users.first()} IS KINDA SUS NGL**`
        }]
      })
  }
})
