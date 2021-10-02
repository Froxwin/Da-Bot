const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'cls',
  alias: null,
  group: 'test',
  description: null,
  permissions: null,

  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {Command} command
   */
  async execute (message, args, command) {
    if (message.author.tag === 'Froxwin#2721') {
      await message.channel.send('cls\'d')
      console.clear()
    } else {
      message.channel.send('daga kotowaru')
    }
  }
})
