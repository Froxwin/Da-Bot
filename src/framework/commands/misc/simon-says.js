const { contentFetcher } = require('../../../engine/functions/index.js')
const Command = require('../../../engine/classes/command')
const simonSays = new Command({
  name: 'simon-says',
  alias: ['say'],
  description: 'says what you want me to say',
  group: 'misc',
  permissions: null,

  /**
   * @param {import('discord.js').Message} message
   * @param {string | any[]} args
   * @param {string} command
   */
  execute (message, _args, command) {
    message.delete()
    message.channel.send(contentFetcher(message, command))
  }
})

module.exports = simonSays
