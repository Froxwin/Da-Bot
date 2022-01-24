const Command = require('../../../engine/classes/command')
const truth = new Command({
  name: '8ball',
  alias: ['truth', 'roll'],
  description: 'magic 8 ball',
  group: 'misc',
  permissions: null,

  /**
   * @param {import('discord.js').Message} message
   * @param {string | any[]} args
   * @param {string} command
   */
  execute (message, args, _command) {
    if (!args.length) {message.channel.send('provide arguments'); return}
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        message.channel.send('Yes')
        break
      case 1:
        message.channel.send('No')
        break
      case 2:
        message.channel.send('Perhaps')
        break
      default:
        break
    }
  }
})

module.exports = truth
