const Command = require('../../Classes/command')

module.exports = new Command({
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
  execute (message, args, command) {
    if (args.length === 0) {
      message.channel.send('provide arguments')
    } else {
      const x = Math.floor(Math.random() * 3)
      switch (x) {
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
  }
})
