const Command = require('../../../engine/classes/command')

const deleteChannel = new Command({
  name: 'delete-channel',
  alias: ['dc'],
  description: 'Deletes the channel in which the command is run',
  permissions: ['MANAGE_CHANNELS'],

  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {string} command
   */
  async execute (message, _args, _command) {
    message.channel.delete().catch(err => {
      message.channel.send({
        embeds: [{
          color: 0xFF0000,
          title: 'Fatal Error',
          description: `${err}`
        }]
      })
    })
  }
})

module.exports = deleteChannel
