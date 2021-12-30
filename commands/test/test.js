const Command = require('../../classes/command')

const test = new Command({
  name: 'test',
  permissions: null,
  group: 'test',
  alias: null,
  description: 'Test Command',
  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {Command} command
   * @returns void | null
   */
  execute (message, args, command) {
    message.channel.send('get nae nae\'d')
    console.log(
      '\x1b[38;2;0;255;0m' +
      'Test Passed' +
      '\x1b[0m'
    )
  }
})

module.exports = test
