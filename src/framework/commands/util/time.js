const Command = require('../../../engine/classes/command')

const time = new Command({
  name: 'time',
  permissions: null,
  group: 'util',
  alias: null,
  description: null,
  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {Command} command
   * @returns void | null
   */
  execute (message, _args, _command) {
    const a = new Date()
    message.channel.send(
        `${a.getHours() > 12 ? a.getHours() - 12 + ' PM' : a.getHours()} : ${a.getMinutes()} : ${a.getSeconds()}`)
  }
})

module.exports = time
