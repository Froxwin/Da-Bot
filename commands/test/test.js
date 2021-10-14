const { Permissions } = require('discord.js')
const Command = require('../../Classes/command')

const test = new Command({
  name: 'test',
  permissions:
  [
    Permissions.FLAGS.KICK_MEMBERS,
    Permissions.FLAGS.BAN_MEMBERS,
    Permissions.FLAGS.ADMINISTRATOR
  ],
  group: null,
  alias: null,
  description: null,
  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {Command} command
   * @returns void | null
   */
  execute (message, args, command) {
    if (!test.permCheck(message.member)) return null
    message.channel.send('get nae nae\'d')
  }
})

module.exports = test
