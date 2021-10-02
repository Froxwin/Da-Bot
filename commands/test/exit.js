const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'exit',
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
      await message.channel.send('sayonora')
      message.client.destroy()
    } else {
      message.channel.send('daga kotowaru')
    }
  }
})
